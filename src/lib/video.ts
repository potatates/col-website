// 视频横竖自动判断：构建时读 public/videos/<名>.mp4 里的画面尺寸（mp4 的 tkhd 信息块），高大于宽就是竖屏。
// 这样换视频时不用手动标 vertical；内容里写了 vertical: true/false 时以手写为准。
import fs from 'node:fs';
import path from 'node:path';

const cache = new Map<string, boolean | undefined>();

function readSize(file: string): { w: number; h: number } | undefined {
  let buf: Buffer;
  try { buf = fs.readFileSync(file); } catch { return undefined; }
  const tag = Buffer.from('tkhd');
  let i = buf.indexOf(tag);
  while (i > 4) {
    const size = buf.readUInt32BE(i - 4);
    const end = i - 4 + size;
    if (size > 80 && end <= buf.length) {
      const w = buf.readUInt32BE(end - 8) / 65536, h = buf.readUInt32BE(end - 4) / 65536;
      if (w > 0 && h > 0) {
        // 旋转 90°（手机竖拍常见）：矩阵 a=0, b=±1 时宽高对调
        const ver = buf[i + 4];
        const m = i + 4 + (ver === 1 ? 4 + 8 + 8 + 4 + 4 + 8 : 4 + 4 + 4 + 4 + 4 + 4) + 8 + 8;
        const a = buf.readInt32BE(m), b = buf.readInt32BE(m + 4);
        return a === 0 && b !== 0 ? { w: h, h: w } : { w, h };
      }
    }
    i = buf.indexOf(tag, i + 4);
  }
  return undefined;
}

/** 视频是不是竖屏。manual 为内容里手写的 vertical（优先）；读不到文件时当作横屏。 */
export function isVertical(name: string | undefined, manual?: boolean): boolean {
  if (typeof manual === 'boolean') return manual;
  if (!name) return false;
  if (!cache.has(name)) {
    const s = readSize(path.join(process.cwd(), 'public/videos', `${name}.mp4`));
    cache.set(name, s ? s.h > s.w : undefined);
  }
  return cache.get(name) ?? false;
}
