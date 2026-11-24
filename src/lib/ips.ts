// IP 墙作品：数据在 src/data/ips.json（中英文写在同一条里），由内容管理页 /news-admin/「IP 作品」编辑。
// 顺序即显示顺序；hidden: true 的作品不出现在 IP 墙、首页，也不生成详情页。
import type { IP } from '../content/zh';
import data from '../data/ips.json';

type Lang = 'zh' | 'en';
type Work = Omit<IP, 'title' | 'genre' | 'forms' | 'tags'> & { hidden?: boolean; zh: Partial<IP>; en: Partial<IP> };

export const ipList = (lang: Lang): IP[] =>
  (data.works as unknown as Work[]).filter((w) => !w.hidden).map(({ hidden, zh, en, ...shared }) => {
    const t = (lang === 'en' ? en : zh) ?? {};
    return { ...shared, ...t, title: t.title ?? zh.title ?? shared.slug, genre: t.genre ?? '', forms: t.forms ?? [], tags: t.tags ?? [] } as IP;
  });
