// 把 public/ 下的小图片（Logo）直接嵌进页面（data URI），不再单独请求。
// 原因：部分国内网络访问 github.io 时会随机断开个别请求，页面能打开但 Logo 加载不出来。
// 只用于几 KB 的 Logo；大图仍走普通文件。
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const cache = new Map<string, string>();
export function inlineImg(publicPath: string): string {
  let v = cache.get(publicPath);
  if (!v) {
    const buf = readFileSync(join(process.cwd(), 'public', publicPath));
    const type = publicPath.endsWith('.svg') ? 'image/svg+xml' : publicPath.endsWith('.jpg') ? 'image/jpeg' : 'image/png';
    v = `data:${type};base64,${buf.toString('base64')}`;
    cache.set(publicPath, v);
  }
  return v;
}
