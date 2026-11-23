// 草稿清单（给“新闻发布”页面 /news-admin/ 读）：每次网站更新时生成，只列 draft: true 的新闻。
import { newsPages } from '../../lib/news';

export function GET() {
  const en = new Set(newsPages('en').map((n) => n.slug));
  const drafts = newsPages('zh')
    .filter((n) => n.draft)
    .map((n) => ({ id: n.slug, title: n.title, date: n.date, tag: n.tag ?? '', hasEn: en.has(n.slug) }));
  return new Response(JSON.stringify({ updated: new Date().toISOString(), drafts }), { headers: { 'Content-Type': 'application/json' } });
}
