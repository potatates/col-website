// 中英双语：根据当前网址判断语言（/en 开头为英文），返回对应的内容与带语言前缀的链接函数。
// 页面与组件都写一份，中英文共用；/en 下的页面文件只是转引中文目录的同名页面。
import * as zh from '../content/zh';
import * as en from '../content/en';
import { u } from './url';

export type Lang = 'zh' | 'en';
type Content = typeof zh;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function langOf(url: URL): Lang {
  const p = url.pathname.slice(base.length);
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'zh';
}

// 站内路径加语言前缀与部署子路径；外链、页内锚点原样返回
export function localize(path: string | undefined, lang: Lang): string | undefined {
  if (!path || !path.startsWith('/') || lang === 'zh') return u(path);
  return u(path === '/' ? '/en/' : `/en${path}`);
}

// 当前页面在另一种语言下的地址（语言切换用）
export function switchPath(url: URL, to: Lang): string {
  let p = url.pathname.slice(base.length) || '/';
  if (p === '/en' || p.startsWith('/en/')) p = p.slice(3) || '/';
  return localize(p, to)!;
}

export function useLang(url: URL) {
  const lang = langOf(url);
  const c = (lang === 'en' ? en : zh) as unknown as Content;
  return { lang, c, ui: c.ui, l: (p: string | undefined) => localize(p, lang) };
}
