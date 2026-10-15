// 站内链接加上部署子路径（例如 GitHub Pages 的 /col-website），本地开发时为空。
// 外链（http…）与页内锚点（#…）原样返回。
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function u(path: string | undefined): string | undefined {
  if (!path || !path.startsWith('/')) return path;
  return path === '/' ? `${base}/` : `${base}${path}`;
}
