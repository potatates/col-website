// 构建时抓取一次股价快照（腾讯财经，失败时用 Yahoo Finance），写进页面。
// 访客浏览器连不上任何实时行情接口时（如海外网络），页面显示这份快照，并标注为“最新收盘/快照时间”。
// 部署工作流在每个交易日收盘后自动重新构建一次，保证快照是最近的收盘价。
export interface StockSnap {
  price: number; prev: number; open: number; high: number; low: number;
  chg: number; pct: number; capYi: number; // 总市值，亿元
  mo: string; dd: string; hh: string; mm: string; // 北京时间
}

async function get(url: string, ms = 8000): Promise<Response> {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try { return await fetch(url, { signal: ctl.signal, headers: { 'User-Agent': 'Mozilla/5.0' } }); }
  finally { clearTimeout(t); }
}

async function fromTencent(): Promise<StockSnap | null> {
  for (const host of ['https://web.sqt.gtimg.cn', 'http://qt.gtimg.cn', 'https://qt.gtimg.cn']) {
    try {
      const buf = await (await get(`${host}/q=sz300364`)).arrayBuffer();
      const f = new TextDecoder('gbk').decode(buf).split('~');
      if (!Number(f[3])) continue;
      const t = f[30] ?? '';
      return { price: +f[3], prev: +f[4], open: +f[5], high: +f[33], low: +f[34], chg: +f[31], pct: +f[32], capYi: +f[45],
        mo: t.slice(4, 6), dd: t.slice(6, 8), hh: t.slice(8, 10), mm: t.slice(10, 12) };
    } catch { /* 换下一个地址 */ }
  }
  return null;
}

async function fromYahoo(): Promise<StockSnap | null> {
  try {
    const j = await (await get('https://query1.finance.yahoo.com/v8/finance/chart/300364.SZ?range=1d&interval=1d')).json();
    const m = j?.chart?.result?.[0]?.meta;
    if (!m || !Number(m.regularMarketPrice)) return null;
    const price = +m.regularMarketPrice, prev = +(m.chartPreviousClose ?? m.previousClose ?? price);
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Shanghai', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false })
      .formatToParts(new Date(m.regularMarketTime * 1000)).map((x) => [x.type, x.value]));
    return { price, prev, open: NaN, high: +m.regularMarketDayHigh, low: +m.regularMarketDayLow, chg: price - prev, pct: ((price - prev) / prev) * 100,
      capYi: NaN, mo: p.month, dd: p.day, hh: p.hour, mm: p.minute };
  } catch { return null; }
}

let cached: Promise<StockSnap | null> | undefined;
export function stockSnapshot(): Promise<StockSnap | null> {
  cached ??= fromTencent().then((s) => s ?? fromYahoo());
  return cached;
}
