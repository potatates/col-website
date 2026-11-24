// 新闻：每篇新闻一个文件夹 src/news/<编号>/，里面 zh.md（中文）和 en.md（英文，可以没有）。
// 文件开头 --- 之间是基本信息（日期、标题、配图等），下面是正文（Markdown 写法，见 docs/新闻发布说明.md）。
// - draft: true 的新闻不出现在列表里，但详情页照常生成（用于发布前预览，页面带“草稿”提示且不被搜索引擎收录）。
// - 没有 en.md 的新闻只出现在中文版。
// - 有 link 的新闻点击后跳到外部原文；没有 link、有正文的新闻在本站发布（/news/<编号>）。
import type { NewsItem } from '../content/zh';

type Lang = 'zh' | 'en';
export type Section = 'official' | 'media';

const files = import.meta.glob('../news/*/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function parseValue(v: string): string | boolean {
  v = v.trim();
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (v.startsWith('"')) { try { return JSON.parse(v); } catch { return v.slice(1, -1); } }
  if (v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1);
  return v;
}

function parseBody(src: string): NonNullable<NewsItem['body']> {
  const out: NonNullable<NewsItem['body']> = [];
  for (const raw of src.split(/\n\s*\n/)) {
    const chunk = raw.trim();
    if (!chunk) continue;
    const img = chunk.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (img) { out.push({ img: img[2].replace(/\.(jpe?g|png|gif|webp)$/i, ''), cap: img[1] || undefined }); continue; }
    if (chunk.startsWith('## ') || chunk.startsWith('### ')) { out.push({ h: chunk.replace(/^#+\s*/, '') }); continue; }
    if (chunk.startsWith('>')) {
      const lines = chunk.split('\n').map((l) => l.replace(/^>\s?/, '').trim()).filter(Boolean);
      const last = lines[lines.length - 1];
      const by = lines.length > 1 && /^[—–-]{1,2}\s*/.test(last) ? last.replace(/^[—–-]{1,2}\s*/, '') : undefined;
      out.push({ quote: (by ? lines.slice(0, -1) : lines).join(' '), by });
      continue;
    }
    out.push({ p: chunk.replace(/\s*\n\s*/g, ' ') });
  }
  return out;
}

export type NewsEntry = NewsItem & { id: string; section: Section; draft?: boolean };

function parse(path: string, text: string): NewsEntry {
  const m = text.replace(/^﻿/, '').match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!m) throw new Error(`新闻文件缺少开头的 --- 信息区：${path}`);
  const fm: Record<string, string | boolean> = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0 && line.trim() && !line.trim().startsWith('#')) fm[line.slice(0, i).trim()] = parseValue(line.slice(i + 1));
  }
  const id = path.split('/').slice(-2)[0];
  const body = parseBody(m[2]);
  const str = (k: string) => (typeof fm[k] === 'string' && fm[k] ? (fm[k] as string) : undefined);
  if (!str('date') || !str('title')) throw new Error(`新闻缺少 date 或 title：${path}`);
  return {
    id, date: str('date')!, title: str('title')!, tag: str('tag'), img: str('image'), text: str('summary'),
    href: str('link'), source: str('source'),
    slug: str('link') ? undefined : id,
    body: body.length ? body : undefined,
    section: (str('section') as Section) ?? 'official',
    draft: fm.draft === true,
  };
}

const byLang: Record<Lang, NewsEntry[]> = { zh: [], en: [] };
for (const [p, text] of Object.entries(files)) {
  const lang = p.endsWith('/en.md') ? 'en' : p.endsWith('/zh.md') ? 'zh' : null;
  if (lang) byLang[lang].push(parse(p, text));
}
for (const l of ['zh', 'en'] as Lang[]) byLang[l].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/** 列表用：已发布的新闻（不含草稿），最新在前 */
export const newsList = (lang: Lang, section: Section): NewsItem[] => byLang[lang].filter((n) => n.section === section && !n.draft);
/** 发布页（/news-admin/）用：全部新闻，含草稿和外链新闻 */
export const allNews = (lang: Lang): NewsEntry[] => byLang[lang];
/** 详情页用：所有本站发布的新闻（含草稿） */
export const newsPages = (lang: Lang): NewsEntry[] => byLang[lang].filter((n) => n.slug && n.body);
