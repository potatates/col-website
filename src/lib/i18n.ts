// 中英双语：根据当前网址判断语言（/en 开头为英文），返回对应的内容与带语言前缀的链接函数。
// 页面与组件都写一份，中英文共用；/en 下的页面文件只是转引中文目录的同名页面。
import * as zh from '../content/zh';
import * as en from '../content/en';
import { u } from './url';

export type Lang = 'zh' | 'en';
type Content = typeof zh;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const PREFIXES = ['/en'];

// 当前网址的语言前缀：'' | '/en'
function prefixOf(url: URL): string {
  const p = url.pathname.slice(base.length);
  return PREFIXES.find((x) => p === x || p.startsWith(`${x}/`)) ?? '';
}

export function langOf(url: URL): Lang {
  return prefixOf(url) ? 'en' : 'zh';
}

// 站内路径加语言前缀与部署子路径；外链、页内锚点原样返回
function withPrefix(path: string | undefined, prefix: string): string | undefined {
  if (!path || !path.startsWith('/') || !prefix) return u(path);
  return u(path === '/' ? `${prefix}/` : `${prefix}${path}`);
}

export function localize(path: string | undefined, lang: Lang): string | undefined {
  return withPrefix(path, lang === 'en' ? '/en' : '');
}

// 当前页面在另一种语言下的地址（语言切换用）
export function switchPath(url: URL, to: Lang): string {
  const prefix = prefixOf(url);
  let p = url.pathname.slice(base.length) || '/';
  if (prefix) p = p.slice(prefix.length) || '/';
  return withPrefix(p, to === 'zh' ? '' : prefix || '/en')!;
}

export function useLang(url: URL) {
  const lang = langOf(url);
  const prefix = prefixOf(url);
  const c = (lang === 'en' ? en : zh) as unknown as Content;
  return { lang, c, ui: c.ui, l: (p: string | undefined) => withPrefix(p, prefix) };
}
