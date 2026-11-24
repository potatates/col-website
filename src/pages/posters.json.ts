// 海报清单（给发布页 /news-admin/ 的「更换海报」读）：public/posters/ 下每张图的尺寸，以及网站上哪些作品用到它。
// 每次网站更新时生成。替换海报时页面按这里的尺寸裁剪新图，保证版式不变。
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import * as zh from '../content/zh';

// 在内容里找所有 poster: 'x' / images: ['x', ...]，记下对应的作品名
function uses() {
  const map = new Map<string, Set<string>>();
  const seen = new Set<unknown>();
  const add = (name: unknown, title: string) => { if (typeof name === 'string' && name) (map.get(name) ?? map.set(name, new Set()).get(name)!).add(title); };
  const walk = (o: unknown) => {
    if (!o || typeof o !== 'object' || seen.has(o)) return;
    seen.add(o);
    if (Array.isArray(o)) return o.forEach(walk);
    const r = o as Record<string, unknown>;
    const title = typeof r.title === 'string' ? r.title : '';
    add(r.poster, title);
    if (Array.isArray(r.images)) r.images.forEach((x) => add(x, `${title}（详情页配图）`));
    Object.values(r).forEach(walk);
  };
  walk(zh);
  return map;
}

export async function GET() {
  const root = path.join(process.cwd(), 'public/posters');
  const files = (fs.readdirSync(root, { recursive: true }) as string[]).filter((f) => /\.jpe?g$/i.test(f)).sort();
  const used = uses();
  const posters = await Promise.all(files.map(async (f) => {
    const name = f.replace(/\\/g, '/').replace(/\.jpe?g$/i, '');
    const m = await sharp(path.join(root, f)).metadata();
    return { file: `posters/${name}.jpg`, name, w: m.width, h: m.height, used: [...(used.get(name) ?? [])].filter(Boolean) };
  }));
  return new Response(JSON.stringify({ updated: new Date().toISOString(), posters }), { headers: { 'Content-Type': 'application/json' } });
}
