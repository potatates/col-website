// Shared content for the three EN prototypes. Text is copied from src/content/en.ts (no content changes).
const P = '../../../public';
const D = {
  nav: ['Business', 'IP & Works', 'Investors', 'News', 'About', 'Careers'],
  tag: 'COL Group · 300364.SZ',
  h1: ['Better Content', 'Better Life'],
  sub: 'An AI-driven global leader in digital entertainment.',
  cta: ['Partner with us', 'Explore our works'],
  aud: [['Partners', 'Licensing · Global'], ['Data clients', 'AI training data'], ['Creators', 'Submit · Sign'], ['Audiences', 'Our apps'], ['Investors', 'Reports · IR'], ['Job seekers', 'Open roles']],
  biz: [
    { t: 'Webnovel', h: '5.6M titles · 4M+ contracted authors', c: ['#00c1de', '#3ddc97'] },
    { t: 'Film & Microdrama', h: 'Hengqin studio · Global microdrama · Screen adaptations', c: ['#f0569b', '#a95cff'] },
    { t: 'Global', h: 'In 200+ countries and regions · Connecting the world through great stories', c: ['#ffc53d', '#ff7a3d'] },
    { t: 'AI & Creative Tools', h: 'Xiaoyao AI · Ciyuan Shenbi', c: ['#0071ce', '#00c1de'] },
    { t: 'Data Solutions', h: '600 TB multimodal data · All leading model makers', c: ['#9b5cff', '#5b5ff5'] },
  ],
  news: [
    { tag: 'Global', d: '2026-10-16', img: 'cannes', t: 'COL at MIPCOM Cannes: FlareFlow partners with Digicel to expand in Central and South America' },
    { tag: 'Global', d: '2026-10-12', img: 'thai', t: 'COL partners with Thailand’s CP Group to accelerate local microdrama production' },
    { tag: 'Awards', d: '2026-10-08', img: 'global100', t: 'COL named to Cyzone’s “2026 China Globalization New Force Top 100” for the second year running' },
  ],
  ip: [
    { p: 'luoxiaohei', t: 'The Legend of Hei', g: 'Film & Series', s: 'The Legend of Hei 2: RMB 533M+ box office' },
    { p: 'xiuluowushen', t: 'Martial God Asura', g: 'Animation', s: 'Season 2 topped Tencent Video’s fantasy animation chart' },
    { p: 'yipinbuyi', t: 'Yi Pin Bu Yi (The Commoner)', g: 'Microdrama', s: '6B+ views across the first four seasons' },
    { p: 'yiyou', t: 'I Woke Up as the Villainess in an Otome Game System and Flirted My Way Through the Interstellar', g: 'Microdrama', s: 'No. 1 on the Huolong AI animation chart' },
    { p: 'raising', t: 'Raising His Mistress’s Child', g: 'Microdrama', s: '200M+ views worldwide' },
    { p: 'charms99', t: '99 Charms, 99 Heartbreaks', g: 'Microdrama', s: 'Best Drama, Vertical Shorts Festival (Los Angeles)' },
  ],
  hero: ['luoxiaohei', 'yipinbuyi', 'works/tianxia', 'xiuluowushen', 'justice2', 'yiyou', 'doctor'],
  ch: { no: '01 / 05', t: 'Webnovel', lead: 'Over 5.6 million content titles in a “one core, many verticals” ecosystem: an all-genre flagship plus specialist platforms that reach every kind of reader.', subs: ['Platforms', 'Writers', 'Audio'] },
  sec: 'Original platforms & products',
  stats: [['5.6M', 'Digital content titles'], ['4M+', 'Contracted authors'], ['600+', 'Publishing houses'], ['2,000+', 'Acclaimed authors']],
  src: 'Source: COL Group corporate presentation (Sept 2026)',
  plat: [
    { k: 'Flagship original platform', t: '17K', logo: '17k', x: 'Recognized as a “key webnovel platform” by the Publicity Department of the CPC Central Committee, covering every genre from fantasy and urban romance to wuxia, xianxia and campus stories. 100+ IPs with over 100 million clicks; 100M+ registered users.', link: 1 },
    { k: 'Period fiction for women', t: 'Siyuetian', logo: '4yt', x: 'An original fiction site for period stories aimed at women readers, with 150,000+ resident authors and 200,000+ titles.', link: 1 },
    { k: 'Genre fiction', t: 'Haili Stories + Mixiang + Qixiang', x: 'Haili Stories encourages diverse local genre fiction and finds promising new writers. Its mystery imprint “Mixiang Project” runs the Mixiang Story Award; its sci-fi imprint “Qixiang Universe” nurtures sci-fi IP and helps authors earn from their work.' },
  ],
  prod: [
    { logo: 'flareflow', dark: 1, k: 'Global microdrama', t: 'FlareFlow', x: 'Launched in April 2025 in 200+ countries and regions and 14 languages, with over 52 million registered users. Topped the US free entertainment chart in September 2025.', c: ['#ffc53d', '#ff7a3d'] },
    { logo: 'cyshenbi', dark: 1, k: 'AI animation', t: 'Ciyuan Shenbi', x: 'An all-in-one AI animation tool launched in early 2026: AI assists from script and storyboard to voice-over, with built-in global distribution.', c: ['#0071ce', '#00c1de'] },
    { logo: 'xiaoyao', k: 'AI large model', t: 'Xiaoyao AI', x: '“Zhongwen Xiaoyao”, the world’s first large model for 10,000-word fiction, supports writing in 14 languages for 50,000+ creators.', c: ['#0071ce', '#00c1de'] },
    { logo: '17k', dark: 1, k: 'Webnovel', t: '17K', x: 'Our core original-content platform, recognized as a “key webnovel platform” by the Publicity Department of the CPC Central Committee.', c: ['#00c1de', '#3ddc97'] },
    { logo: '4yt', dark: 1, k: 'Webnovel', t: 'Siyuetian', x: 'Original period fiction for women readers, with 150,000+ resident authors.', c: ['#00c1de', '#3ddc97'] },
  ],
  // the 7 hero posters, same hand-placed positions as the Chinese home page (src/pages/index.astro)
  floaters: [
    { p: 'luoxiaohei', x: 55.2, y: 19.8, r: -8, w: 192 }, { p: 'yipinbuyi', x: 72.3, y: 8.8, r: 5, w: 166 }, { p: 'works/tianxia', x: 86.2, y: 26.8, r: -7, w: 168 },
    { p: 'xiuluowushen', x: 70.7, y: 36.4, r: -5, w: 158 }, { p: 'doctor', x: 87.7, y: 58.4, r: 10, w: 130 }, { p: 'justice2', x: 55.4, y: 58.3, r: 7, w: 158 }, { p: 'yiyou', x: 72.9, y: 62.4, r: 8, w: 158 },
  ],
};
const $ = (s) => document.querySelector(s);
const g = (c) => `linear-gradient(135deg, ${c[0]}, ${c[1]})`;
