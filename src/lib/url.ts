// 站内链接加上部署子路径（例如 GitHub Pages 的 /col-website），本地开发时为空。
// 外链（http…）与页内锚点（#…）原样返回。
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// 页面路径统一补上结尾的“/”（/business#drama → /business/#drama）：GitHub Pages 会把 /business 301 跳到 /business/，
// 页面过渡在这次跳转中会丢掉 #锚点，导致只能落到页面顶部。带扩展名的文件（图片等）不处理。
function withSlash(path: string): string {
  const i = path.search(/[?#]/);
  const p = i === -1 ? path : path.slice(0, i);
  const rest = i === -1 ? '' : path.slice(i);
  if (p.endsWith('/') || /\.[a-z0-9]+$/i.test(p)) return path;
  return `${p}/${rest}`;
}

export function u(path: string | undefined): string | undefined {
  if (!path || !path.startsWith('/')) return path;
  return path === '/' ? `${base}/` : `${base}${withSlash(path)}`;
}
