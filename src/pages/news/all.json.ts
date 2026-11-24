// 全部新闻清单（给发布页 /news-admin/ 的「修改新闻」读）：每次网站更新时生成。
import { allNews } from '../../lib/news';

export function GET() {
  const en = new Set(allNews('en').map((n) => n.id));
  const news = allNews('zh').map((n) => ({ id: n.id, title: n.title, date: n.date, section: n.section, draft: !!n.draft, hasEn: en.has(n.id), external: !!n.href }));
  return new Response(JSON.stringify({ updated: new Date().toISOString(), news }), { headers: { 'Content-Type': 'application/json' } });
}
