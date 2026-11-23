// 从微信公众号文章链接导入一篇新闻（草稿）。
//   node scripts/news-import.mjs <公众号文章链接> [--section official|media] [--tag 标签] [--id 自定义编号]
// 做的事：
//   1. 下载文章页面，取出标题、日期、摘要、封面和正文（小标题、段落、引语、图片和图注）
//   2. 图片转存到 public/news/<编号>/（微信图片在别的网站上经常显示不出来，必须转存）
//   3. 写出 src/news/<编号>/zh.md，标记为草稿（draft: true），不会出现在新闻列表里
//   4. 如果设置了 ANTHROPIC_API_KEY，再用 Claude 翻译出 en.md（同样是草稿）；没有就跳过，英文版之后可以人工补
// 这一步不用 AI：抽取和排版都是固定规则。只有第 4 步的英文翻译用 AI，而且是可选的。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'node-html-parser';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';

// ---------- 参数 ----------
const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };
const url = args.find((a) => /^https?:\/\//.test(a));
if (!url || !/^https:\/\/mp\.weixin\.qq\.com\/s/.test(url)) {
  console.error('请提供公众号文章链接，形如 https://mp.weixin.qq.com/s/xxxx');
  process.exit(1);
}
const section = opt('section') === 'media' ? 'media' : 'official';
const tag = (opt('tag') || '').trim();

// ---------- 下载页面 ----------
const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'zh-CN,zh;q=0.9' } });
if (!res.ok) throw new Error(`打不开文章链接（HTTP ${res.status}）`);
const html = await res.text();
const doc = parse(html);
const meta = (p) => doc.querySelector(`meta[property="${p}"]`)?.getAttribute('content')?.trim();
const jsVar = (name) => html.match(new RegExp(`var\\s+${name}\\s*=\\s*(?:htmlDecode\\()?["']([^"']*)["']`))?.[1];
const decode = (s) => (s ?? '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/\\x26/g, '&').replace(/\\x0a/g, ' ');

const title = decode(meta('og:title') || doc.querySelector('#activity-name')?.text || jsVar('msg_title')).trim();
const summary = decode(meta('og:description') || jsVar('msg_desc')).trim();
const coverUrl = decode(meta('og:image') || jsVar('msg_cdn_url'));
const ct = Number(html.match(/var\s+ct\s*=\s*["']?(\d{9,})/)?.[1] || html.match(/create_time\s*[:=]\s*["']?(\d{9,})/)?.[1]);
const date = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Shanghai' }).format(ct ? new Date(ct * 1000) : new Date());
const content = doc.querySelector('#js_content');
if (!title || !content) throw new Error('没能从页面里找到标题或正文。可能文章已删除、需要登录，或者微信改了页面结构。');

const key = (url.match(/\/s\/([A-Za-z0-9_-]+)/)?.[1] ?? Math.random().toString(36).slice(2)).slice(-6).toLowerCase();
const id = (opt('id') || `${date}-${key}`).replace(/[^a-z0-9-]/gi, '-').toLowerCase();
const newsDir = path.join(ROOT, 'src/news', id);
const imgDir = path.join(ROOT, 'public/news', id);
if (fs.existsSync(newsDir)) throw new Error(`编号 ${id} 已经存在（src/news/${id}）。这篇可能导入过了；要重新导入请先删掉那个文件夹，或用 --id 换一个编号。`);

// ---------- 正文：按出现顺序抽取 ----------
const BLOCK = new Set(['p', 'section', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'ul', 'ol', 'li', 'figure', 'table']);
const STOP = /(点击.{0,4}阅读原文|长按.{0,6}(识别|关注)|扫码关注|关注我们|往期(推荐|回顾)|推荐阅读|END\s*$|-\s*END\s*-)/i;
const clean = (s) => decode(s).replace(/[​-‍﻿]/g, '').replace(/\s+/g, ' ').trim();
const blocks = []; // {kind:'h'|'p'|'quote'|'img', text?, src?}
let stopped = false;

function isHeading(el, text) {
  if (/^h[1-4]$/i.test(el.rawTagName || '')) return true;
  if (text.length > 30 || /[。！？；，,.!?;]$/.test(text)) return false;
  // 整段加粗（<strong>/<b> 或 style 里 font-weight: bold/600+）、较短、不以句号结尾：当作小标题
  const isBold = (e) => /^(strong|b)$/i.test(e.rawTagName || '') || /font-weight:\s*(bold|[6-9]00)/i.test(e.getAttribute?.('style') || '');
  const bold = [el, ...el.querySelectorAll('*')].filter(isBold);
  const boldText = bold.filter((e) => !bold.some((o) => o !== e && o.querySelectorAll('*').includes(e))).map((e) => clean(e.text)).join('');
  return boldText.length >= text.length * 0.9;
}
function emitText(el) {
  const text = clean(el.text);
  if (!text) return;
  if (STOP.test(text)) { stopped = true; return; }
  const tagName = (el.rawTagName || '').toLowerCase();
  if (tagName === 'blockquote') blocks.push({ kind: 'quote', text });
  else if (isHeading(el, text)) blocks.push({ kind: 'h', text });
  else blocks.push({ kind: 'p', text });
}
function walk(el) {
  if (stopped || el.nodeType !== 1) return;
  const tagName = (el.rawTagName || '').toLowerCase();
  if (tagName === 'img') {
    const src = el.getAttribute('data-src') || el.getAttribute('src');
    const w = Number(el.getAttribute('data-w') || 0);
    const fmt = (src || '').match(/wx_fmt=(\w+)/)?.[1] || el.getAttribute('data-type') || '';
    if (src && /^https?:/.test(src) && fmt !== 'gif' && (w === 0 || w >= 300)) blocks.push({ kind: 'img', src: decode(src) });
    return;
  }
  if (['script', 'style', 'mp-common-profile', 'mpvoice', 'iframe', 'svg'].includes(tagName)) return;
  const kids = el.childNodes.filter((c) => c.nodeType === 1);
  const hasBlockKids = kids.some((c) => BLOCK.has((c.rawTagName || '').toLowerCase()) || c.querySelector?.('img'));
  if (tagName === 'blockquote' && !el.querySelector('img')) return emitText(el);
  if (hasBlockKids || el.querySelector('img')) { for (const c of kids) walk(c); return; }
  emitText(el);
}
for (const c of content.childNodes) walk(c);

// 图片后面紧跟的短句当作图注；连续重复的段落去掉
const body = [];
for (const b of blocks) {
  const prev = body[body.length - 1];
  if (prev && prev.kind === b.kind && prev.text && prev.text === b.text) continue;
  if (b.kind === 'p' && prev?.kind === 'img' && !prev.cap && b.text.length <= 40 && !/[。！？]$/.test(b.text)) { prev.cap = b.text; continue; }
  body.push(b);
}
// 导语重复在正文开头时去掉；文章没写摘要时，用正文第一段的开头一两句当导语（审核时可以改）
if (body[0]?.kind === 'p' && summary && body[0].text.startsWith(summary.slice(0, 20))) body.shift();
let dek = summary;
if (!dek) {
  const first = body.find((b) => b.kind === 'p')?.text ?? '';
  const sentences = first.match(/[^。！？]+[。！？]?/g) ?? [];
  dek = '';
  for (const s of sentences) { if ((dek + s).length > 100 && dek) break; dek += s; }
}

// ---------- 图片转存 ----------
fs.mkdirSync(imgDir, { recursive: true });
async function saveImage(src, name) {
  const r = await fetch(src, { headers: { 'User-Agent': UA } }); // 不带 Referer，微信图片才允许下载
  if (!r.ok) throw new Error(`图片下载失败 ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  await sharp(buf).rotate().resize({ width: 1600, withoutEnlargement: true }).flatten({ background: '#ffffff' }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(imgDir, `${name}.jpg`));
  return `${id}/${name}`;
}
let cover;
if (coverUrl) { try { cover = await saveImage(coverUrl, 'cover'); } catch (e) { console.warn('封面下载失败：', e.message); } }
let n = 0;
for (const b of body) {
  if (b.kind !== 'img') continue;
  try { b.ref = await saveImage(b.src, String(++n)); } catch (e) { console.warn('一张图片下载失败，已跳过：', e.message); b.skip = true; }
}

// ---------- 写出 zh.md ----------
const q = (v) => JSON.stringify(v);
function toMarkdown(fm, items) {
  const head = ['---', ...Object.entries(fm).filter(([, v]) => v !== undefined && v !== '').map(([k, v]) => `${k}: ${typeof v === 'boolean' ? v : /^(date|section|image|link|wechat)$/.test(k) ? v : q(v)}`), '---', ''];
  const md = items.filter((b) => !b.skip).map((b) =>
    b.kind === 'h' ? `## ${b.text}` : b.kind === 'quote' ? `> ${b.text}` : b.kind === 'img' ? `![${b.cap ?? ''}](${b.ref}.jpg)` : b.text).join('\n\n');
  return head.join('\n') + md + '\n';
}
const zhFm = { date, section, title, tag, image: cover, summary: dek, source: '中文在线微信公众号', wechat: url, draft: true };
fs.mkdirSync(newsDir, { recursive: true });
const zhMd = toMarkdown(zhFm, body);
fs.writeFileSync(path.join(newsDir, 'zh.md'), zhMd);

// ---------- 可选：英文翻译 ----------
let enDone = false;
if (process.env.ANTHROPIC_API_KEY) {
  try {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic();
    const response = await client.beta.messages.create({
      model: 'claude-opus-5-5',
      max_tokens: 16000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system: 'You translate press releases of COL Group (中文在线, Shenzhen: 300364) from Chinese into natural, concise English for the company website. Keep the Markdown structure exactly: the --- front matter block with the same keys, ## headings, > quotes, and ![caption](path) image lines with the same paths. Translate the values of title, tag, summary and source, and every caption. Keep date, section, image, wechat and draft unchanged. Product names in pinyin use one capital per syllable: XiaoYao, ZhongWen XiaoYao, CiYuan ShenBi, SiYueTian, HaiLi Stories, MiXiang, QiXiang. Keep FlareFlow, 17K and English names as they are. Reply with the translated file only.',
      messages: [{ role: 'user', content: zhMd }],
    });
    if (response.stop_reason === 'refusal') throw new Error('模型拒绝翻译这篇文章');
    const text = response.content.filter((b) => b.type === 'text').map((b) => b.text).join('').trim().replace(/^```(?:markdown|md)?\n|\n```$/g, '');
    if (!text.startsWith('---')) throw new Error('翻译结果格式不对');
    fs.writeFileSync(path.join(newsDir, 'en.md'), text + '\n');
    enDone = true;
  } catch (e) {
    console.warn('英文翻译没有完成，之后可以人工补 en.md：', e.message);
  }
}

// ---------- 结果 ----------
const counts = { h: 0, p: 0, quote: 0, img: 0 };
for (const b of body) if (!b.skip) counts[b.kind]++;
const summaryText = [
  `## 已导入草稿：${title}`,
  '',
  `- 编号：\`${id}\``,
  `- 日期：${date}　栏目：${section === 'media' ? '媒体报道' : '官方新闻'}${tag ? `　标签：${tag}` : ''}`,
  `- 正文：${counts.p} 段、${counts.h} 个小标题、${counts.quote} 段引语、${counts.img} 张图片${cover ? '，另有封面图' : '，**没有封面图**'}`,
  `- 英文版：${enDone ? '已用 AI 翻译（请检查）' : '未生成（没有设置 AI 密钥，或翻译失败）。没有英文版时，这篇只出现在中文站。'}`,
  '',
  `预览（几分钟后网站更新完成即可打开）：/news/${id}/${enDone ? `　英文：/en/news/${id}/` : ''}`,
  '',
  `确认无误后，运行“发布新闻”，编号填 \`${id}\`。`,
].join('\n');
console.log(summaryText);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summaryText + '\n');
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `id=${id}\ntitle=${title.replace(/\n/g, ' ')}\n`);
