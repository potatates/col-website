// English site content: same exports and structure as zh.ts.
// Placeholders marked [Sample] / To be provided / to be verified must be confirmed before launch.
// Internal hrefs stay unprefixed (e.g. '/business#data'); the /en prefix is added at render time.

import { bizColor, type Page, type Block, type Stat } from './zh';

export { bizColor };
export type { Stat, Card, Cover, Person, IP, Block, Section, Page, NewsItem } from './zh';

/* ============ Site info ============ */

export const site = {
  name: 'COL Group',
  fullName: 'COL Group Co., Ltd.',
  enName: 'COL Group',
  stockCode: '300364.SZ',
  slogan: 'Better Content, Better Life',
  sloganEn: 'BETTER CONTENT, BETTER LIFE',
  tagline: 'An AI-driven global leader in digital entertainment',
};

export const contact = {
  address: '6/F, Block E, Yonghe Plaza, 28 Andingmen East Street, Dongcheng District, Beijing 100007, China',
  icp: ['京ICP证010590号', '京ICP备09030667号-23', '京网文（2023）4750-133号', '京公网安备 11010102003415号'],
};

// Social accounts: Weibo link from the current site footer; other handles to be provided by Brand
export const social: { icon: string; platform: string; short: string; account: string; href?: string; qr?: string }[] = [
  { icon: 'wechat', platform: 'WeChat Official Account', short: 'WeChat', account: 'To be provided' },
  { icon: 'weibo', platform: 'Weibo', short: 'Weibo', account: '中文在线 (to be verified)', href: 'https://weibo.com/u/1759081553' },
  { icon: 'douyin', platform: 'Douyin', short: 'Douyin', account: 'To be provided' },
  { icon: 'xhs', platform: 'Xiaohongshu (RED)', short: 'RED', account: 'To be provided' },
  { icon: 'bilibili', platform: 'Bilibili', short: 'Bili', account: 'To be provided' },
  { icon: 'linkedin', platform: 'LinkedIn', short: 'in', account: 'To be provided' },
  { icon: 'youtube', platform: 'YouTube', short: 'YT', account: 'To be provided' },
  { icon: 'x', platform: 'X', short: 'X', account: 'To be provided' },
];

// Legal documents to be provided by Legal
export const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Code of Conduct', href: '#' },
  { label: 'Whistleblowing & Compliance', href: '#' },
];

const cninfo = 'http://irm.cninfo.com.cn/ircs/search?keyword=300364';

// Deep link to a partner card with a specific need (highlights the card, shows "You selected: …", prefills the form)
export const toPartner = (card: string, type: string) => `/partner?type=${encodeURIComponent(type)}#${card}`;
const lic = (type: string) => toPartner('license', type);
const cninfoAnnouncements = 'https://www.cninfo.com.cn/new/disclosure/stock?stockCode=300364&orgId=9900023871';

/* ============ About /about ============ */

const about: Page = {
  key: 'about',
  nav: 'About',
  theme: ['#0071ce', '#00c1de'],
  href: '/about',
  title: 'About Us',
  en: 'ABOUT US',
  intro: 'Founded at Tsinghua University in 2000 and listed on the Shenzhen Stock Exchange ChiNext board in 2015 as China’s first listed digital publishing company.',
  sections: [
    {
      id: 'intro', label: 'Profile', en: 'PROFILE', title: 'A leading digital content group in China',
      blocks: [
        { type: 'profile',
          lead: 'Our core businesses are digital content production, copyright distribution, IP development and intellectual property protection, bringing technology and culture together.',
          facts: [
            { k: 'Founded', v: '2000', sub: 'At Tsinghua University' },
            { k: 'Listed', v: 'Jan 21, 2015', sub: 'SZSE ChiNext board' },
            { k: 'Stock code', v: '300364', sub: 'China’s first digital publishing stock' },
          ],
          pillars: ['Strong Content', 'Winning IP', 'Global First', 'AI Empowerment'], pillarsLabel: 'Strategy' },
        { type: 'stats', items: [
          { value: '5.6', unit: 'M', label: 'Digital content titles' },
          { value: '4', unit: 'M+', label: 'Contracted authors' },
          { value: '490', unit: 'K+ hrs', label: 'Audio content' },
        ], note: 'Source: COL Group corporate presentation (Sept 2026)' },
      ],
    },
    {
      id: 'culture', label: 'Culture', en: 'CULTURE', title: 'Better Content, Better Life',
      blocks: [
        { type: 'culture',
          mission: { k: 'Mission', v: 'Better Content, Better Life', en: '更好内容，更好生活' },
          items: [
            { k: 'Vision', v: 'Build a sustainable organization, create a cultural universe', en: '打造百年组织，创造文化宇宙' },
            { k: 'Values', v: 'Customer Value, Innovation, Truthfulness, Evolution', en: '为客户持续创造价值、创新、求真务实、自我进化' },
            { k: '10-Year Goal', v: 'The leader in digital content', en: '数字文化内容领跑者' },
          ] },
      ],
    },
    {
      id: 'history', label: 'Milestones', en: 'MILESTONES', title: 'Three chapters of growth',
      blocks: [
        { type: 'journey', items: [
          { era: 'Chapter One', year: '2000', text: 'Founded at Tsinghua University' },
          { year: '2001', text: 'Merged into Hong Kong-based Tide Times Group' },
          { year: '2002', text: 'Led a Ministry of Education research project under the 10th Five-Year Plan and launched a digital library for primary and secondary schools' },
          { era: 'Chapter Two', year: '2004', text: 'Bought the company back from Tide Times Group' },
          { year: '2006', text: 'Launched 17K' },
          { year: '2008', text: 'Became a core operating partner of China Mobile’s mobile reading base' },
          { era: 'Chapter Three', year: '2015', text: 'Listed on ChiNext in January as China’s first digital publishing stock; became a group company in September' },
          { year: '2016', text: 'Raised RMB 2 billion in a private placement and set up a US company, starting international expansion' },
          { year: '2021', text: 'Entered microdrama as a pioneer of vertical microdrama in China' },
          { year: '2023', text: 'Launched the “Zhongwen Xiaoyao” large model' },
          { year: '2025', text: 'Launched FlareFlow, its overseas microdrama platform' },
          { year: '2026', text: 'Launched Ciyuan Shenbi, a full-stack AI creation platform' },
        ] },
      ],
    },
    { id: 'strategy', label: 'Strategy', en: 'STRATEGY', title: 'Driven by AI and globalization', blocks: [
      { type: 'pillars', items: [
        { no: '01', title: 'Strong Content', text: 'Building a high-quality digital content ecosystem', big: '5.6', unit: 'M', label: 'Digital content titles', href: '/business#literature' },
        { no: '02', title: 'Winning IP', text: 'Turning IP from a one-off asset into a renewable one', big: '6', unit: 'B+', label: 'Views of the Yi Pin Bu Yi series', href: '/ip' },
        { no: '03', title: 'Global First', text: 'FlareFlow and the Hengqin base form an international microdrama infrastructure', big: '200', unit: '+', label: 'Countries and regions', href: '/business#global' },
        { no: '04', title: 'AI Empowerment', text: 'Xiaoyao covers about 60% of the literary production process and cuts production time by 75%', big: '75', unit: '%', label: 'Shorter production time', href: '/business#ai' },
      ] },
    ] },
  ],
};

/* ============ Business & Products /business ============ */

const literature: Page = {
  key: 'literature',
  theme: bizColor.literature,
  href: '/business#literature',
  title: 'Webnovel',
  en: 'WEBNOVEL',
  intro: 'Over 5.6 million content titles in a “one core, many verticals” ecosystem: an all-genre flagship plus specialist platforms that reach every kind of reader.',
  sections: [
    {
      id: 'platforms', label: 'Platforms', en: 'PLATFORMS', title: 'Original platforms & products',
      blocks: [
        { type: 'stats', items: [
          { value: '5.6', unit: 'M', label: 'Digital content titles' },
          { value: '4', unit: 'M+', label: 'Contracted authors' },
          { value: '600', unit: '+', label: 'Publishing houses' },
          { value: '2,000', unit: '+', label: 'Acclaimed authors' },
        ], note: 'Source: COL Group corporate presentation (Sept 2026)' },
        { type: 'cards', cols: 3, items: [
          { id: '17k', tag: 'Flagship original platform', title: '17K', text: 'Recognized as a “key webnovel platform” by the Publicity Department of the CPC Central Committee, covering every genre from fantasy and urban romance to wuxia, xianxia and campus stories. 100+ IPs with over 100 million clicks; 100M+ registered users.', href: 'https://www.17k.com', external: true },
          { id: '4yt', tag: 'Period fiction for women', title: 'Siyuetian', text: 'An original fiction site for period stories aimed at women readers, with 150,000+ resident authors and 200,000+ titles.', href: 'https://www.4yt.net', external: true },
          { id: 'haili', tag: 'Genre fiction', title: 'Haili Stories + Mixiang + Qixiang', text: 'Haili Stories encourages diverse local genre fiction and finds promising new writers. Its mystery imprint “Mixiang Project” runs the Mixiang Story Award; its sci-fi imprint “Qixiang Universe” nurtures sci-fi IP and helps authors earn from their work.' },
        ] },
      ],
    },
    {
      id: 'writers', label: 'Writers', en: 'WRITERS', title: 'Writers & submissions',
      intro: 'Home to 2,000+ acclaimed authors including Eryue He, Alai, Xiong Zhaozheng, Bi Feiyu, Liu Cixin and Zhou Meisen. Platform author Fengyu Jiuqiu sits on the 10th National Committee of the China Writers Association, and Shanliang de Mifeng was nominated for the Mao Dun New Talent Award for online literature.',
      blocks: [
        { type: 'cards', cols: 2, items: [
          { tag: 'Creators', title: 'Submit or sign with us', text: 'Start writing in the 17K author zone.', href: 'https://www.17k.com', external: true },
        ] },
      ],
    },
    {
      id: 'audio', label: 'Audio', en: 'AUDIO', title: 'Audio content',
      intro: '200+ professional narrators record our audiobooks, and our in-house AI voice technology turns content into audio quickly and at low cost.',
      blocks: [
        { type: 'stats', items: [
          { value: '490', unit: 'K+ hrs', label: 'Audio content' },
          { value: '200', unit: 'K+ hrs', label: 'Recorded by AI narrators' },
          { value: '5', unit: 'B', label: 'Lifetime plays of the Martial God Asura audiobook' },
        ], note: 'Source: COL Group corporate presentation (Sept 2026)' },
      ],
    },
  ],
};

const drama: Page = {
  key: 'drama',
  theme: bizColor.drama,
  href: '/business#drama',
  title: 'Film & Microdrama',
  en: 'FILM & MICRODRAMA',
  intro: 'From webnovel IP to microdrama, animation, film and TV. Our Hengqin microdrama production base and AI toolchain keep new content coming, fast.',
  sections: [
    {
      id: 'platforms', label: 'Platforms', en: 'PLATFORMS', title: 'Microdrama platforms',
      blocks: [
        { type: 'features', items: [
          { tag: 'Global microdrama', title: 'FlareFlow', text: 'Launched in April 2025 and available in 200+ countries and regions, FlareFlow has reached monthly operating breakeven. In September 2025 it topped the US App Store free entertainment chart.', href: 'https://flareflow.tv/#/', external: true,
            stats: [{ value: '52', unit: 'M+', label: 'Registered users' }, { value: '7,000', label: 'Titles (nearly)' }, { value: '200', unit: '+', label: 'Countries and regions' }] },
          { tag: 'China microdrama', title: 'Microdrama production', text: 'Our live-action microdramas keep an industry-leading 50% hit rate across period comedy, urban romance and palace drama. More than 10 titles, including “The Simple Son-in-Law of Great Qian” and “My 26-Year-Old Tenant”, have each passed 1 billion views.', href: '/ip#wall', linkLabel: 'See featured works',
            stats: [{ value: '6', unit: 'B+', label: 'Views of the Yi Pin Bu Yi series' }, { value: '10', unit: '+', label: 'Titles over 1B views' }, { value: '1,200', unit: '+', label: 'AI microdramas' }] },
        ] },
      ],
    },
    {
      id: 'production', label: 'Production', en: 'PRODUCTION', title: 'Production capabilities',
      blocks: [
        { type: 'stats', items: [
          { value: '17,000', unit: '㎡', label: 'Usable space at the Hengqin base' },
          { value: '94', unit: '', label: 'Standing sets for overseas microdrama' },
          { value: '10', unit: '+', label: 'Leading North American production partners' },
        ] },
        { type: 'features', items: [
          { tag: 'Studio', title: 'Hengqin International Film & TV City', text: 'The world’s first international microdrama production base, open since February 2026. In the Guangdong–Hong Kong–Macao Greater Bay Area, it has stages styled after many countries and 192 crew apartments, and offers one-stop services from content and review to shooting, operations, post-production and distribution in China and abroad.', video: 'hengqin' },
          { tag: 'AI at scale', title: 'Industrial AI production', text: 'Our in-house AIGC pipeline standardizes production and combines tools, capacity and content, so IP moves across formats quickly and at scale.',
            stats: [{ value: '80', unit: '%', label: 'Shorter production time' }, { value: '90', unit: '%', label: 'Lower production cost' }, { value: '1,200', label: 'AI microdramas (nearly)' }] },
        ] },
      ],
    },
    {
      id: 'animation', label: 'Animation', en: 'ANIMATION', title: 'Animation & AI Animation',
      blocks: [
        { type: 'text', paras: ['COL holds a controlling stake in Hanmu Chunhua, the studio behind The Legend of Hei. The Legend of Hei 2 grossed over RMB 533 million in mainland China and has been released in North America, Europe, East Asia, Southeast Asia and Oceania. We have produced hundreds of AI animations, and AI has cut the per-minute cost of 3D animation by more than 75%.'] },
        { type: 'cards', cols: 2, items: [
          { title: 'See adaptation case studies', text: 'How one IP becomes a series, an animation and a microdrama.', href: '/ip#cases' },
          { title: 'Discuss film / animation licensing', text: 'Reach the right licensing contact.', href: lic('Film & TV Adaptation') },
        ] },
      ],
    },
  ],
};

const global: Page = {
  key: 'global',
  theme: bizColor.global,
  href: '/business#global',
  title: 'Global',
  en: 'GLOBAL',
  intro: 'Operating in 200+ countries and regions, with overseas revenue now over 40% of the total. We work across many markets, delivering quality content that fits local culture.',
  sections: [
    {
      id: 'overview', label: 'Overview', en: 'OVERVIEW', title: 'Taking Eastern stories worldwide',
      blocks: [
        { type: 'stats', items: [
          { value: '200', unit: '+', label: 'Countries and regions' },
          { value: '40', unit: '%+', label: 'Share of revenue from overseas' },
          { value: '52', unit: 'M+', label: 'FlareFlow registered users' },
          { value: '14', unit: '', label: 'Distribution languages' },
        ], note: 'Sources: 2026 Chairman’s Letter to Shareholders, 2026 Interim Report' },
      ],
    },
    {
      id: 'cases', label: 'Case Studies', en: 'CASES', title: 'International partnerships',
      blocks: [
        { type: 'cards', cols: 2, items: [
          { tag: 'Connected TV', title: 'FlareFlow × Whale TV', img: 'case-whaletv', text: 'Launched on the Whale TV independent TV operating system in September 2026, starting with South America. Whale TV works with 400+ TV brands and has over 47.5 million monthly active devices.' },
          { tag: 'Southeast Asia', title: 'Partnering with Thailand’s CP Group', img: 'case-thai', text: 'FlareFlow Mini launched a dedicated section on TATANG by TrueID, run by CP Group’s True, to accelerate local microdrama production.' },
          { tag: 'Telecom', title: 'FlareFlow × AIS PLAY (Thailand)', img: 'case-ais', text: 'In November 2026 FlareFlow opened its own section on AIS PLAY, the entertainment platform of leading Thai telecom operator AIS, with Western, Chinese and Korean microdramas subtitled in Thai, on phones and TVs.' },
          { tag: 'Singapore', title: 'Supermodel Me', img: 'case-supermodel', text: 'The world’s first mobile-native vertical reality microdrama, made with Singapore’s Refinery Media.' },
        ] },
      ],
    },
  ],
};

const ai: Page = {
  key: 'ai',
  theme: bizColor.ai,
  href: '/business#ai',
  title: 'AI & Creative Tools',
  en: 'AI & TOOLS',
  intro: 'AI is our technology foundation, running through ideation, production, distribution, monetization and feedback.',
  sections: [
    {
      id: 'products', label: 'AI Products', en: 'PRODUCTS', title: 'AI products',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: 'Large model', title: 'Zhongwen Xiaoyao / Xiaoyao AI', text: 'Launched in 2023 as the world’s first large model for 10,000-word fiction, it supports writing in 14 languages. It serves 50,000+ creators in over 100 countries and regions and has helped produce more than 2.5 billion words.', href: 'https://xiaoyao.ai', external: true },
          { tag: 'Creation platform', title: 'Ciyuan Shenbi', text: 'An all-in-one AI animation tool launched in early 2026: from picking IP and scripts to storyboards, characters, images, video, voice-over and distribution, AI assists every step.', href: 'https://www.ciyuanshenbi.com', external: true },
          { tag: 'Marketing', title: 'Xiaoyao AI Agent', text: 'End-to-end AI ad delivery: creative generation, dynamic budget allocation and real-time monitoring. It produces 100–300 creatives per overseas microdrama and makes campaigns over 20x more efficient.' },
        ] },
      ],
    },
    {
      id: 'results', label: 'Results', en: 'RESULTS', title: 'What AI delivers',
      blocks: [
        { type: 'stats', items: [
          { value: '90', unit: '%+', label: 'Lower AI translation cost' },
          { value: '40', unit: '%', label: 'Higher production efficiency' },
          { value: '75', unit: '%+', label: 'Lower per-minute cost of 3D animation' },
          { value: '80', unit: '%', label: 'Shorter production time per AI microdrama' },
        ], note: 'Sources: 2026 Chairman’s Letter to Shareholders, COL Group corporate presentation (Sept 2026)' },
      ],
    },
  ],
};

const ipr: Page = {
  key: 'ipr',
  theme: bizColor.ipr,
  href: '/business#ipr',
  title: 'IP Protection',
  en: 'IP PROTECTION',
  intro: 'Following the principle of “license first, distribute second”, we protect copyright through technology, administrative action, litigation and public engagement.',
  sections: [
    {
      id: 'overview', label: 'Overview', en: 'OVERVIEW', title: 'A key channel for rights holders',
      blocks: [
        { type: 'stats', items: [
          { value: 'Nearly 10,000', unit: '', label: 'Infringement lawsuits' },
          { value: '100', unit: 'K+', label: 'Works involved' },
          { value: '2,400', unit: '+', label: 'Registered trademarks' },
          { value: '490', unit: '+', label: 'Software copyrights' },
        ] },
        { type: 'steps', items: [
          { title: 'Rights confirmation' }, { title: 'Content monitoring' }, { title: 'Usage lookup' }, { title: 'Evidence preservation' }, { title: 'Enforcement' },
        ] },
      ],
    },
    {
      id: 'platforms', label: 'Platforms', en: 'PLATFORMS', title: 'Technology & service platforms',
      intro: 'Built on the ChainMaker (Chang’an Chain) consortium blockchain, our evidence-preservation platform supports three service platforms.',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: 'WWW.QSHAO.NET', title: 'Quanshao', text: 'A one-stop global IP service platform with IP lawyers and investigation teams across China.', href: 'https://www.qshao.net', external: true },
          { tag: 'Originality protection', title: 'Wuchao', text: 'Helps creators find infringement, prove plagiarism and take legal action.' },
          { tag: 'WWW.BANQJ.COM', title: 'Banquanjie', text: 'SaaS for copyright registration, evidence storage and asset management.', href: 'https://www.banqj.com', external: true },
        ] },
      ],
    },
  ],
};

export const businessPages: Page[] = [];

const businessIndex: Page = {
  key: 'business',
  nav: 'Business',
  theme: [bizColor.global[0], bizColor.data[1]],
  href: '/business',
  title: 'Business & Products',
  en: 'BUSINESS & PRODUCTS',
  intro: 'Digital content production, copyright distribution, IP development and IP protection, with AI across every business.',
  sections: [
    {
      id: 'overview', label: 'Overview', en: 'OVERVIEW', title: 'Great stories, going global',
      intro: 'Webnovels are where IP begins; microdrama and global expansion drive growth; AI runs through it all.',
      blocks: [
        { type: 'steps', items: [
          { title: 'Webnovel', text: '17K · Siyuetian · Haili Stories', color: bizColor.literature },
          { title: 'Film & Microdrama', text: 'FlareFlow · Animation · Film & TV', color: bizColor.drama },
          { title: 'Global', text: '200+ countries and regions · 40%+ overseas revenue', color: bizColor.global },
          { title: 'AI & Creative Tools', text: 'Xiaoyao AI · Ciyuan Shenbi', color: bizColor.ai },
          { title: 'Data Solutions', text: '600 TB of data · Serving all leading Chinese model makers', color: bizColor.data },
        ] },
      ],
    },
  ],
};

// Product list: second section of the Business page
businessIndex.sections.push({
  id: 'products', label: 'Products', en: 'PRODUCTS', title: 'Our products',
  intro: 'Our flagship products in global microdrama, AI creation and webnovels.',
  blocks: [
    { type: 'cards', featured: true, items: [
      { logo: 'flareflow', tag: 'Global microdrama', title: 'FlareFlow', text: 'Launched in April 2025 in 200+ countries and regions and 14 languages, with over 52 million registered users. Topped the US free entertainment chart in September 2025.', href: 'https://flareflow.tv/#/', external: true, color: bizColor.global },
      { logo: 'cyshenbi', tag: 'AI animation', title: 'Ciyuan Shenbi', text: 'An all-in-one AI animation tool launched in early 2026: AI assists from script and storyboard to voice-over, with built-in global distribution.', href: 'https://www.ciyuanshenbi.com', external: true, color: bizColor.ai },
      { logo: 'xiaoyao', tag: 'AI large model', title: 'Xiaoyao AI', text: '“Zhongwen Xiaoyao”, the world’s first large model for 10,000-word fiction, supports writing in 14 languages for 50,000+ creators.', href: 'https://xiaoyao.ai', external: true, color: bizColor.ai },
      { logo: '17k', tag: 'Webnovel', title: '17K', text: 'Our core original-content platform, recognized as a “key webnovel platform” by the Publicity Department of the CPC Central Committee.', href: 'https://www.17k.com', external: true, color: bizColor.literature },
      { logo: '4yt', tag: 'Webnovel', title: 'Siyuetian', text: 'Original period fiction for women readers, with 150,000+ resident authors.', href: 'https://www.4yt.net', external: true, color: bizColor.literature },
    ] },
  ],
});

/* ============ IP & Works /ip ============ */

const ipPage: Page = {
  key: 'ip',
  nav: 'IP & Works',
  theme: ['#6c4dff', '#ff5c9a'],
  href: '/ip',
  title: 'IP & Works',
  en: 'IP & WORKS',
  intro: 'From serialized webnovels to audio, animation, microdrama, film and TV. Explore our IP and start a licensing conversation, all in one place.',
  sections: [
    {
      id: 'wall', label: 'IP Wall', en: 'IP WALL', title: 'Featured IP',
      blocks: [
        { type: 'ipwall', note: 'Posters and figures from the COL Group corporate presentation (Sept 2026) and COL’s periodic reports. Click a poster to learn about the work.', items: [
          { slug: 'luoxiaohei', title: 'The Legend of Hei', genre: 'Film & Series', forms: ['Animated series', 'Film', 'Merchandise'], tags: ['The Legend of Hei 2: RMB 533M+ box office', 'Released in 10+ countries and regions'], poster: 'luoxiaohei',
            intro: 'In 2023 COL acquired a controlling stake in Hanmu Chunhua, the studio behind The Legend of Hei. The franchise now spans an animated series, spin-off comics, feature films and merchandise, growing into a complete IP universe.',
            stats: [
              { value: '533', unit: 'M RMB', label: 'The Legend of Hei 2 mainland box office' },
              { value: '8.7', label: 'Douban rating' },
              { value: '10', unit: '+', label: 'Overseas release markets' },
              { value: '40', unit: '+', label: 'Brand collaborations for the film' },
            ],
            highlights: [
              { k: '2011', v: 'The animated series premieres and goes on to pass 1 billion views' },
              { k: '2012', v: 'Director MTJJ founds the studio Hanmu Chunhua' },
              { k: '2019', v: 'The first film grosses over RMB 315 million and is selected for the 44th Annecy International Animation Film Festival (the only Chinese-language film selected)' },
              { k: '2020', v: 'The Japanese dub, released by Aniplex in Japanese cinemas nationwide, earns over JPY 580 million' },
              { k: '2025', v: 'The Legend of Hei 2 opens in mainland China on July 18, grosses over RMB 533 million, and is released in 10+ markets including the US, Canada, Malaysia, Australia, New Zealand, Thailand, Japan, Indonesia and France' },
              { k: '2025', v: 'Qualifies for the Academy Award for Best Animated Feature, the only Chinese animation on the list. The Japanese dub passes JPY 100 million in three days and ranks No. 1 on Filmarks’ first-day satisfaction chart' },
              { k: '2026', v: 'Wins the Gold Award for animated film at the 22nd China International Cartoon & Animation Festival (Golden Monkey Award), and screens at the 2026 UK–China Film Week' },
              { k: 'Brands', v: 'Collaborations with 40+ brands including Honor of Kings, Pizza Hut, Pop Mart, MINISO, Akko and Game for Peace, across food, toys, fashion, tech and intangible heritage' },
            ],
            video: 'luoxiaohei2-trailer', images: ['luoxiaohei2'], source: 'COL Group corporate presentation (Sept 2026), pp. 18–19' },
          { slug: 'xiuluowushen', title: 'Martial God Asura', genre: 'Animation', forms: ['Webnovel', 'Audio', '3D animation'], tags: ['Season 2 topped Tencent Video’s fantasy animation chart', '5B audio plays'], poster: 'xiuluowushen',
            intro: 'A flagship webnovel IP developed across every format, from webnovel and audio to 3D animation. It shows how COL develops IP while stories are still being serialized.',
            stats: [
              { value: '5', unit: 'B', label: 'Lifetime audiobook plays' },
              { value: 'TOP2', label: 'Tencent Video animation chart (season 1)' },
            ],
            highlights: [
              { k: 'Audio', v: 'The audiobook has 5 billion lifetime plays, the most of any COL audio title' },
              { k: '2023', v: 'The 3D animation premieres on Tencent Video, reaching No. 7 on the site’s trending searches and No. 2 on its animation chart on day one' },
              { k: '2026', v: 'Season 2 launches on February 24 and immediately tops Tencent Video’s fantasy animation chart, reaching the top 3 of its Chinese animation, trending and 3D charts' },
            ],
            source: 'COL Group corporate presentation (Sept 2026), pp. 16–17' },
          { slug: 'yipinbuyi', title: 'Yi Pin Bu Yi (The Commoner)', genre: 'Microdrama', forms: ['Webnovel', 'Microdrama'], tags: ['6B+ views across the first four seasons', 'Zongyi Bao Microdrama of the Year 2025'], poster: 'yipinbuyi',
            intro: 'A breakout microdrama series adapted from a 17K novel, and a model for how quality literary IP and premium microdrama lift each other.',
            stats: [
              { value: '6', unit: 'B+', label: 'Views across the first four seasons' },
              { value: '3', unit: 'B+', label: 'Views of season 1' },
              { value: '900', unit: '%+', label: 'Season 1 project ROI' },
              { value: '10', unit: 'M+', label: 'Saves' },
            ],
            highlights: [
              { k: 'Awards', v: 'Selected as a “Beijing Audiovisual” key online project; named Microdrama of the Year in Zongyi Bao’s 2025 influence list' },
              { k: 'Awards', v: 'Outstanding Popular Microdrama at the 2025 Cross-Strait WE Microdrama Competition; on Beijing Radio & TV’s list of 45 must-watch titles for Spring Festival' },
              { k: '2026', v: 'Season 2 passed 116 million effective views the day after launch and topped Hongguo’s overall microdrama chart' },
              { k: 'AI', v: 'An AI-remastered version has completed rating review' },
            ],
            video: 'yipinbuyi', vertical: true, images: ['yipinbuyi1'], source: 'COL Group corporate presentation (Sept 2026), p. 20; 2026 Interim Report' },
          { slug: 'yiyou', title: 'I Woke Up as the Villainess in an Otome Game System and Flirted My Way Through the Interstellar', genre: 'Microdrama', forms: ['AI 3D animation'], tags: ['No. 1 on the Huolong AI animation chart'], poster: 'yiyou',
            intro: 'A COL-produced AI 3D animated series for women viewers, extending our AI animation from action-driven stories to romance.',
            stats: [
              { value: 'TOP1', label: 'Huolong trending and search charts' },
              { value: '5', label: 'Language markets where it hit No. 1' },
            ],
            highlights: [
              { k: 'China', v: 'In March 2026 it topped both the Huolong AI animation trending and search charts, holding No. 1 for days' },
              { k: 'Global', v: 'Quickly reached No. 1 on the daily charts in English, Spanish, French, Italian and Japanese, a record for Chinese AI animation overseas' },
            ],
            source: 'COL Group corporate presentation (Sept 2026), p. 17; 2026 Interim Report' },
          { slug: 'raising', title: 'Raising His Mistress\'s Child', genre: 'Microdrama', forms: ['FlareFlow', 'Premium English'], tags: ['200M+ views worldwide', 'Best Female Leadership Narrative, International Short Drama Festival'], poster: 'raising',
            intro: 'A FlareFlow original that drew hundreds of millions of views and over USD 1 million in top-ups, and a model for proving a story globally and then remaking it locally.',
            stats: [
              { value: '200', unit: 'M+', label: 'Worldwide views across the series' },
            ],
            highlights: [
              { k: 'Award', v: 'Best Female Leadership Narrative at the 2025 International Short Drama Festival' },
              { k: 'Korea', v: 'Remade as a Korean-language version starring Han Chae-young' },
              { k: 'Press', v: 'Covered by the international entertainment outlet Variety' },
            ],
            video: 'raising', vertical: true, source: '2025 Annual Report, 2026 Interim Report' },
          { slug: 'charms99', title: '99 Charms, 99 Heartbreaks', genre: 'Microdrama', forms: ['FlareFlow'], tags: ['Best Drama, Vertical Shorts Festival (Los Angeles)'], poster: 'charms99',
            intro: 'A FlareFlow premium microdrama that went from a Chinese original to an English version to a fully localized remake, a model for how FlareFlow localizes.',
            highlights: [
              { k: 'Award', v: 'Chosen from 200+ entries as Best Drama at the Vertical Shorts Festival in Los Angeles' },
            ],
            source: 'COL press release (Sept 17, 2026)' },
        ] },
      ],
    },
    {
      id: 'trailers', label: 'Trailers & Screeners', en: 'TRAILERS', title: 'Trailers & screeners',
      intro: 'Screeners for partners and trailers for audiences.',
      blocks: [
        { type: 'videos', note: 'Screeners for other titles are available on request via the AI assistant.', items: [
          { title: 'The Legend of Hei 2', sub: 'Animated feature · Trailer', src: 'luoxiaohei2-trailer' },
          { title: 'Magic Emperor’s Grand Steward', sub: 'AI animation · Xianxia long-form series', src: 'mohuang' },
          { title: 'The Great Song', sub: 'AI live-action historical microdrama', src: 'dasong' },
          { title: 'Raising His Mistress\'s Child', sub: 'FlareFlow · Microdrama', src: 'raising', vertical: true },
          { title: 'Yi Pin Bu Yi (The Commoner)', sub: 'Microdrama · Trailer', src: 'yipinbuyi', vertical: true },
        ] },
      ],
    },
    {
      id: 'library', label: 'Library', en: 'LIBRARY', title: 'Content library',
      blocks: [
        // Works wall: covers from the COL Group corporate presentation (Sept 2026)
        { type: 'covers', title: 'Webnovels', items: [
          { title: 'Martial God Asura', poster: 'works/xiuluo-novel' }, { title: 'Nine Star Hegemon Body Art', poster: 'works/jiuxing' }, { title: 'Back to 1990', poster: 'works/chonghui1990' }, { title: 'Rise of the Dragon City', poster: 'works/fengqi' }, { title: 'Super Soldier King', poster: 'works/bingwang' }, { title: 'Rising Through the Ranks', poster: 'works/pingbu' },
          { title: 'District Nine', poster: 'works/dijiu' }, { title: 'Celestial Garment', poster: 'works/tianyi' }, { title: 'The Retrograde', poster: 'works/nixing' }, { title: 'Return to One', poster: 'works/guiyi' }, { title: 'The Explorer', poster: 'works/tansuo' }, { title: 'The Hidden Game', poster: 'works/tianxia' },
        ] },
        { type: 'covers', title: 'Acclaimed authors', items: [
          { title: 'Emperor Kangxi', sub: 'Eryue He', poster: 'works/kangxi' }, { title: 'In the Name of the People', sub: 'Zhou Meisen', poster: 'works/renmin' }, { title: 'Red Poppies', sub: 'Alai', poster: 'works/chenai' }, { title: 'A Bitter Journey Through Culture', sub: 'Yu Qiuyu', poster: 'works/wenhua' },
          { title: 'The Village Teacher', sub: 'Liu Cixin', poster: 'works/xiangcun' }, { title: 'Massage', sub: 'Bi Feiyu', poster: 'works/tuina' },
        ] },
        { type: 'covers', title: 'Microdramas', items: [
          { title: 'The Little God of Fortune Comes Home', poster: 'works/naibao' }, { title: 'Don’t Cry, Crown Prince', poster: 'works/taizi' }, { title: 'After the Broken Engagement, My Poet Identity Is Revealed', poster: 'works/tuihun' }, { title: 'Hotter Than My Ex', poster: 'works/qianyou' }, { title: 'Seduction After Dark', poster: 'works/yese' }, { title: 'Oops, I Married My Bestie\'s Brother!', sub: 'FlareFlow', poster: 'works/oops' },
        ] },
        { type: 'covers', title: 'AI Animation', items: [
          { title: 'The Apocalypse That Never Came', poster: 'works/mori' }, { title: 'Having a Blast in the Mystery World', poster: 'works/guimi' }, { title: 'Comeback From Birth', poster: 'works/niangtai' }, { title: 'Return of the Immortal Lord', poster: 'works/xianzun' }, { title: 'Return of the Divine Emperor', poster: 'works/shendi' }, { title: 'Beyond Evolution', poster: 'works/chaofan' },
          { title: 'Fallen Contract', poster: 'works/xianjie' }, { title: 'Survival Rules of a Sacrificial Princess', poster: 'works/jipin' }, { title: 'Return of the Mage God', poster: 'works/fashen' }, { title: 'Invincible Cultivation', poster: 'works/wudi' }, { title: 'Unlimited Cashback on Every Purchase', poster: 'works/xiaofei' }, { title: 'Lord of All: Summoning Legendary Generals', poster: 'works/lingzhu' },
        ] },
      ],
    },
    {
      id: 'cases', label: 'Adaptations', en: 'ADAPTATIONS', title: 'Adaptation case studies',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: 'Webnovel → Microdrama', title: 'Yi Pin Bu Yi (The Commoner)', text: 'Adapted from a 17K novel. Season 1 passed 3 billion views, Season 2 drew 116 million views the day after launch, and the series has passed 6 billion in total. An AI-remastered version has completed rating review.' },
          { tag: 'Animation → Film → Merchandise', title: 'The Legend of Hei', text: 'The Legend of Hei 2 grossed over RMB 533 million in mainland China. Licensing partners include vivo, Tastien, MINISO and Pop Mart’s GONG.' },
          { tag: 'Microdrama → Game', title: 'My 26-Year-Old Tenant', text: 'Adapted from the microdrama into an adventure (AVG) game, released on Tencent Video and Steam in October 2025.' },
        ] },
      ],
    },
    {
      id: 'license', label: 'Licensing', en: 'LICENSING', title: 'Licensing',
      intro: 'Choose a licensing type to reach the right contact.',
      blocks: [
        { type: 'cards', cols: 3, arrow: true, items: [
          { tag: '01', title: 'Film & TV Adaptation', href: lic('Film & TV Adaptation') },
          { tag: '02', title: 'Animation Adaptation', href: lic('Animation Adaptation') },
          { tag: '03', title: 'Game Adaptation', href: lic('Game Adaptation') },
          { tag: '04', title: 'Publishing / E-books', href: lic('Publishing / E-books') },
          { tag: '05', title: 'Audio', href: lic('Audio') },
          { tag: '06', title: 'Brand Collaborations / Merchandise', href: lic('Brand Collaborations / Merchandise') },
        ] },
      ],
    },
  ],
};

/* ============ Data Solutions (/business#data) ============ */

const dataPage: Page = {
  key: 'data',
  theme: bizColor.data,
  href: '/business#data',
  title: 'Data Solutions',
  en: 'DATA SOLUTIONS',
  intro: 'Licensed, traceable and compliant data and training corpora for AI and large-model companies.',
  sections: [
    {
      id: 'services', label: 'Services', en: 'SERVICES', title: 'Services',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: '01', title: 'Core datasets', text: 'Nearly 100 types of text and multimodal corpora: audiobooks and dry vocals, millions of publications, original fiction, millions of stock videos, hundreds of millions of images, question banks, journals, domain Q&A and Chinese–foreign parallel corpora.' },
          { tag: '02', title: 'Premium custom data', text: 'Hard datasets such as code reasoning, log data and complex logic; training-data collection for any scenario and complex multimodal custom processing.' },
          { tag: '03', title: 'Training data & annotation', text: 'An integrated collection, annotation and QA platform, working with universities on high-value datasets, delivering standard and custom model-training data.' },
        ] },
      ],
    },
    {
      id: 'scale', label: 'Scale', en: 'SCALE', title: 'Resources at scale',
      blocks: [
        { type: 'stats', items: [
          { value: '600', unit: 'TB', label: 'Text, audio, image and video data' },
          { value: '5.6', unit: 'M+', label: 'Licensed digital content titles' },
          { value: '7', unit: '', label: 'New high-quality dataset types (H1 2026)' },
          { value: '85', unit: '%', label: 'Share of new data that is specialized, high-difficulty' },
        ], note: 'Sources: 2025 Annual Report, 2026 Interim Report' },
        { type: 'cards', cols: 2, items: [
          { tag: 'Partner', title: 'Discuss a data partnership', text: 'Tell our AI assistant what data you need and it will pass it to the Data Solutions team.', href: toPartner('data', 'Data Solutions') },
        ] },
      ],
    },
  ],
};

// 10/22: renamed to “Our Businesses” (team navigation table); chapter order follows the meeting notes
businessIndex.title = 'Our Businesses';
businessIndex.en = 'BUSINESS';
businessIndex.intro = 'IP + AI + Global: great IP at the core, AI across every step, and stories that travel the world.';
businessPages.push(literature, drama, global, ai, dataPage);

/* ============ Newsroom /news ============ */

const news: Page = {
  key: 'news',
  nav: 'News',
  theme: ['#0071ce', '#00c1de'],
  href: '/news',
  title: 'Newsroom',
  en: 'NEWSROOM',
  intro: 'The latest from COL Group, press coverage and media resources.',
  sections: [
    { id: 'official', label: 'Press Releases', en: 'PRESS', title: 'Press releases', blocks: [{ type: 'news', items: [
      { date: '2026-10-16', title: 'COL at MIPCOM Cannes: FlareFlow partners with Digicel to expand in Central and South America', tag: 'Global', img: 'cannes', slug: '2026-10-16-mipcom', text: 'FlareFlow exhibited at MIPCOM and signed a distribution deal with Digicel covering 25 markets across Central and South America and the Caribbean.',
        body: [
          { p: 'From October 12 to 15, the 42nd MIPCOM took place at the Palais des Festivals in Cannes, France. COL attended with its international microdrama platform FlareFlow, meeting industry peers from around the world to discuss new opportunities in microdrama.' },
          { h: 'Talking microdrama at a global market' },
          { p: 'MIPCOM is one of the world’s key markets for trading and co-producing film and TV content, drawing more than 10,000 professionals from over 100 countries each year. In 2026 it grew into a broader global content market, with branded entertainment, AIGC, the creator economy and microdrama as headline topics.' },
          { quote: 'A year ago, microdrama, the creator economy and AI content production were emerging trends. Today they are scalable business models and an increasingly important part of the global content economy.', by: 'Lucy Smith, Director, MIPCOM' },
          { p: 'This year MIPCOM expanded its microdrama programme with an invitation-only Global Microdrama Leaders Summit and, for the first time, a dedicated business-matching track for microdrama. From conversations to signed deals, microdrama carried noticeably more weight at the show.' },
          { p: 'At stand P-1.D62, COL met international buyers and producers to discuss microdrama content and partnerships. Timothy Oh, COL’s General Manager for Southeast Asia and Chief Marketing Officer of FlareFlow, spoke on a microdrama panel alongside Maria Rua Aguete, Head of Media & Entertainment at research firm Omdia, about how the market sees microdrama, what drives its global growth and where the industry is heading.' },
          { h: 'Reaching new markets through telecom partners' },
          { p: 'During the show, FlareFlow announced a multi-market distribution partnership with Digicel, a leading telecom operator in Central and South America and the Caribbean, covering 25 markets. FlareFlow will connect to Digicel’s billing system so users can subscribe with their prepaid balance or add it to their monthly phone bill.' },
          { p: 'FlareFlow keeps expanding its distribution channels. By plugging into local operators’ billing and distribution networks, it makes subscribing easier for users in emerging markets and brings microdrama to more mobile viewers. Digicel’s broad user base across the region is a natural fit for FlareFlow’s mobile-first content and payment model.' },
          { p: 'From industry conversations to channel partnerships, COL keeps deepening its work with international partners, connecting microdrama to more markets so audiences everywhere can enjoy great stories more easily.' },
        ] },
      { date: '2026-10-12', title: 'COL partners with Thailand’s CP Group to accelerate local microdrama production', tag: 'Global', img: 'thai', slug: '2026-10-12-cp-group', text: 'FlareFlow Mini launched a dedicated section on TATANG by TrueID, run by CP Group’s True. The partners will work together on AIGC localization, training Thai creators with local universities, and distribution.',
        body: [
          { p: 'COL’s strategic partnership with Thailand’s CP Group has reached a new milestone: FlareFlow Mini is now live on TATANG by TrueID, a local Thai microdrama platform, with its own dedicated section bringing localized vertical microdramas to Thai viewers.' },
          { p: 'It is a key step in turning the partnership, announced in August, into action.' },
          { p: 'CP Group is one of Thailand’s largest conglomerates, with businesses in telecoms, digital technology, retail, digital payments and media across 23 countries, and deep local resources and channels in Southeast Asia. Its subsidiary True Corporation is a leading Thai telecom and digital technology company, and TATANG by TrueID is True’s local microdrama platform, curating international microdramas for Thai audiences. Backed by CP Group’s consumer ecosystem in telecoms, payments, retail and brand marketing, TATANG is well placed to reach viewers.' },
          { p: 'The partnership moves forward on three fronts at once, content localization, talent development and distribution, connecting production, creation and distribution.' },
          { h: 'Content: real localization, not just translation' },
          { p: 'COL and CP Group will adapt FlareFlow and other hit titles for Thailand. Rather than simply translating, the teams will rewrite characters, settings, dialogue and cultural context for Thai audiences, using AIGC in production and combining COL’s IP and microdrama expertise with CP Group’s local creator network and market resources.' },
          { h: 'Talent: training creators with Thai universities' },
          { p: 'The two companies plan to work with leading Thai academic institutions on a microdrama talent program, training young local creators in storytelling, production and creative skills, and building a path from education into the industry.' },
          { h: 'Distribution: a FlareFlow section on TATANG' },
          { p: 'FlareFlow Mini is now live on TATANG with its own FlareFlow section. Building on the CP and True consumer ecosystem, the partners will make FlareFlow content easier to find in Thailand and bring more localized microdramas to Thai viewers.' },
          { p: 'FlareFlow now has more than 52 million registered users worldwide. Starting from Thailand, the two companies will continue to expand localized content and distribution across Southeast Asia.' },
        ] },
      { date: '2026-10-08', title: 'COL named to Cyzone’s “2026 China Globalization New Force Top 100” for the second year running', tag: 'Awards', img: 'global100', slug: '2026-10-08-global100', text: 'Listed among the 40 “leading” companies. Overseas revenue grew 123.94% in 2025 to over 40% of the total, and FlareFlow topped the US entertainment charts.',
        body: [
          { p: 'At the 5th Global Digital Trade Expo in Hangzhou, Cyzone released its “2026 Digital Trade · China Globalization New Force Top 100” list. Thanks to continued progress in taking microdrama overseas, COL made the list again and was ranked among the “leading” companies.' },
          { p: 'The list combines questionnaires, interviews, expert review and third-party data checks, scoring companies on the depth of their global footprint, product competitiveness, scale, compliance and brand awareness. Companies are split into “leading” and “growing” groups; the 40 “leading” companies each earned at least USD 15 million overseas in 2025 and have built scale in overseas markets.' },
          { h: 'Microdrama going global' },
          { p: 'The listing reflects COL’s steady progress in global microdrama. Its overseas platform FlareFlow launched in April 2025 and in the same year reached No. 1 on both the US Google Play and App Store free entertainment charts. It has over 33 million registered users across 200+ countries and regions. In 2025, COL’s overseas revenue grew 123.94% year on year to more than 40% of total revenue.' },
          { quote: 'Going global doesn’t mean watching overseas data from home. You have to enter the local market, understand local users and build local teams.', by: 'Tong Zhilei, Founder, Chairman and President of COL Group' },
          { p: 'With IP as its anchor and AI as its sail, COL will keep building a global microdrama ecosystem and bringing great stories to audiences worldwide.' },
        ] },
      { date: '2026-09-24', title: 'Hong Kong crime thriller “Black and White Undercover 3” starts filming as Hengqin International Film & TV City keeps growing', tag: 'Film & TV', img: 'hengqin', href: 'https://www.col.com/article/2110228778050355200', text: 'Starring Andy On and Eric Tsang. The studio has 90+ standing sets and 17,000 m² of stages, and is expanding into Hengqin–Macau co-productions, tourism and AI virtual production.' },
      { date: '2026-09-17', title: 'FlareFlow’s 99 Charms, 99 Heartbreaks wins Best Microdrama at the Vertical Shorts Festival in Los Angeles', tag: 'Microdrama', img: 'flareflow-award', href: 'https://www.col.com/article/2110227594900111360', text: 'Chosen from 200+ entries. The show went from a Chinese original to an English version to a fully localized remake, a model for how FlareFlow localizes.' },
      { date: '2026-09-11', title: 'FlareFlow arrives on Whale TV, bringing hit microdramas to South American TV screens', tag: 'Global', img: 'whaletv', href: 'https://www.col.com/article/2110226608613720064', text: 'FlareFlow is now on the Whale TV smart-TV OS, starting in South America. Whale TV works with 400+ TV brands and 47.5M+ monthly active devices.' },
      { date: '2026-08-31', title: 'Digital Publishing Expo: Tong Zhilei on how AI opens a new future for publishing', tag: 'AI', img: 'expo', href: 'https://www.col.com/article/2110225951496306688', text: 'At the expo’s main forum, Tong Zhilei explained how AI is reshaping publishing from topic planning to editing and distribution, and shared COL’s own practice.' },
      { date: '2026-08-19', title: 'COL signs to build a digital-culture creation base for global audiences in Shanghai Lingang', tag: 'Global', img: 'lingang', href: 'https://www.col.com/article/2090001382265290752', text: 'A framework agreement with the Lingang New Area administration to set up a creation base for exporting digital culture.' },
      { date: '2026-07-30', title: 'COL at ChinaJoy 2026: AI is driving the evolution of microdrama', tag: 'Microdrama', img: 'chinajoy', href: 'https://www.col.com/article/2082717718552739840', text: 'AI is moving from an efficiency tool to the engine of the microdrama ecosystem; AI animation production costs over 70% less than traditional animation.' },
    ] }] },
    { id: 'media', label: 'In the Media', en: 'MEDIA', title: 'In the media', blocks: [{ type: 'news', items: [
      { date: '2025-08-01', title: 'Over 1 billion views: “Beijing Audiovisual” key project Yi Pin Bu Yi (The Commoner) is a hit', tag: 'Film & TV', img: 'yipinbuyi', href: 'https://www.col.com/article/1951205105390813184', text: 'The 105-episode microdrama adapted from a 17K novel passed 1 billion plays on Hongguo, peaking at 238 million plays in a single day.' },
      { date: '2025-06-25', title: 'COL’s Tong Zhilei: empowering the global content industry with AI', tag: 'AI', img: 'ai', href: 'https://www.col.com/article/1937825796479483904', text: 'Shanghai Securities News interview: AI lowers the cost of making content, which makes top IP scarcer and more valuable.' },
    ] }] },
    { id: 'presskit', label: 'Press Kit', en: 'PRESS KIT', title: 'Press kit', blocks: [
      { type: 'downloads', items: [
        { title: 'Official logo', meta: 'PNG / SVG · To be provided' },
        { title: 'Image library', meta: 'ZIP · To be provided' },
        { title: 'Company overview', meta: 'PDF · To be provided' },
      ] },
      { type: 'cards', cols: 2, items: [
        { tag: 'Media', title: 'Interview & coverage requests', text: 'Contact our brand and PR team.', href: toPartner('media', 'Media Inquiries') },
      ] },
    ] },
  ],
};

/* ============ Investor Relations /investors ============ */

export const irHighlights: Stat[] = [
  { value: '200', unit: '+', label: 'Countries and regions served' },
  { value: '40', unit: '%+', label: 'Share of revenue from overseas' },
  { value: '52', unit: 'M+', label: 'FlareFlow registered users' },
  { value: '5.6', unit: 'M+', label: 'Digital content titles' },
  { value: '90', unit: '%+', label: 'Lower AI translation cost' },
  { value: '20', unit: 'x+', label: 'More efficient AI ad delivery' },
];

const investors: Page = {
  key: 'investors',
  nav: 'Investors',
  theme: ['#1b3a8c', '#00c1de'],
  href: '/investors',
  title: 'Investor Relations',
  en: 'INVESTOR RELATIONS',
  intro: '',
  sections: [
    { id: 'highlights', label: 'Highlights', en: 'HIGHLIGHTS', title: 'Investment highlights', blocks: [
      { type: 'stats', items: irHighlights, note: 'Sources: 2026 Chairman’s Letter to Shareholders, 2026 Interim Report' },
    ] },
    { id: 'letter', label: 'Shareholder Letter', en: 'LETTER', title: 'Chairman’s letter to shareholders', blocks: [
      { type: 'letter', title: 'Driven by AI and globalization: a new growth curve',
        lead: 'COL is no longer just an IP content company. It is a new kind of AI-driven digital content technology company, with global content supply and operations across the entire value chain.',
        themes: [
          { k: 'From computing power to creative power', v: 'AI multiplies human creativity.' },
          { k: 'From chasing hits to building infrastructure', v: 'Infrastructure is the moat of a content ecosystem.' },
          { k: 'From competing for traffic to compounding returns', v: 'The “productivity J-curve” will reprice the AI content industry.' },
        ],
        author: 'Tong Zhilei', role: 'Chairman and President, COL Group', date: 'April 2026' },
    ] },
    { id: 'filings', label: 'Reports & Filings', en: 'FILINGS', title: 'Periodic reports & announcements', intro: 'Browse the list here; original PDFs (in Chinese) open on CNINFO.', blocks: [
      { type: 'docs', href: cninfoAnnouncements, cols: [
        { title: 'Periodic reports', items: [
          { date: '2026-08-26', title: '2026 Interim Report', href: 'https://static.cninfo.com.cn/finalpage/2026-08-26/1225504423.PDF' },
          { date: '2026-04-23', title: '2026 Q1 Report', href: 'https://static.cninfo.com.cn/finalpage/2026-04-23/1225157283.PDF' },
          { date: '2026-04-23', title: '2025 Annual Report', href: 'https://static.cninfo.com.cn/finalpage/2026-04-23/1225157276.PDF' },
          { date: '2026-04-23', title: '2025 Corporate Social Responsibility Report', href: 'https://static.cninfo.com.cn/finalpage/2026-04-23/1225157301.PDF' },
        ] },
        { title: 'Recent announcements', items: [
          { date: '2026-10-08', title: 'Announcement on terminating the issuance of H shares and listing on the Hong Kong Stock Exchange', href: 'https://static.cninfo.com.cn/finalpage/2026-10-08/1225596000.PDF' },
          { date: '2026-06-08', title: 'Announcement on the resignation of a director', href: 'https://static.cninfo.com.cn/finalpage/2026-06-08/1225356380.PDF' },
          { date: '2026-05-15', title: 'Announcement on the appointment of the securities affairs representative', href: 'https://static.cninfo.com.cn/finalpage/2026-05-15/1225309978.PDF' },
        ] },
      ] },
    ] },
    { id: 'ir-contact', label: 'Contact IR', en: 'CONTACT IR', title: 'Investor contacts', blocks: [
      { type: 'contact', items: [{ k: 'IR email', v: 'ir@col.com' }], cta: { label: 'Ask on CNINFO Hudongyi', href: cninfo } },
    ] },
  ],
};

/* ============ Careers /join ============ */

const join: Page = {
  key: 'join',
  nav: 'Careers',
  theme: ['#ff5c9a', '#ffc53d'],
  href: '/join',
  title: 'Join Us',
  en: 'JOIN US',
  intro: 'We keep raising our talent density and investing in young talent to keep the organization energetic and creative.',
  sections: [
    { id: 'positions', label: 'Open Roles', en: 'CAREERS', title: 'Open roles', blocks: [
      { type: 'spotlight', kicker: 'CAREERS', title: 'See our open roles', text: 'Job descriptions and applications are on COL’s official careers site (in Chinese).', cta: 'Go to the careers site', href: 'https://zhongwenzaixian.zhiye.com/' },
    ] },
  ],
};

/* ============ Partner /partner ============ */
// Contact card titles double as form topics (data-topic → select value), so they must match the form topics exactly.

const partner: Page = {
  key: 'partner',
  nav: 'Partner with us',
  theme: ['#0071ce', '#00c1de'],
  href: '/partner',
  title: 'Partner With Us',
  en: 'PARTNER WITH US',
  intro: 'Content acquisition, IP licensing, data, global partnerships, suppliers and media: pick an area and our AI assistant will pass your request to the right team.',
  sections: [
    { id: 'types', label: 'Ways to Partner', en: 'PARTNERSHIP', title: 'Ways to work with us', intro: 'From content and IP to data and global distribution, across the whole content value chain. Pick an area and tell our AI assistant what you need.', blocks: [
      { type: 'contacts', items: [
        { id: 'content', tag: 'Content', title: 'Content Acquisition / Distribution', text: 'Acquisition and distribution of webnovels, audio and microdramas, and platform and device partnerships.', color: bizColor.literature },
        { id: 'license', tag: 'IP Licensing', title: 'IP Licensing', text: 'Film & TV, animation, games, publishing, audio and brand collaborations.', color: bizColor.drama },
        { id: 'data', tag: 'Data', title: 'Data Solutions', text: 'Licensed, custom and annotated data for AI and large-model companies.', color: bizColor.data },
        { id: 'overseas', tag: 'Global BD', title: 'International Partnerships', text: 'Global distribution, acquisition and co-production of microdramas and webnovels, plus FlareFlow partnerships.', color: bizColor.global },
        { id: 'investment', tag: 'Investment', title: 'Investment', text: 'Strategic direct investment and industry funds across content, AI and global expansion.', color: bizColor.ai },
        { id: 'supplier', tag: 'Suppliers', title: 'Become a Supplier', text: 'Onboarding for content, technology, production and channel suppliers.', color: bizColor.ipr },
        { id: 'media', tag: 'Media', title: 'Media Inquiries', text: 'Interview and coverage requests, and media materials.', color: bizColor.global },
      ] },
    ] },
    { id: 'form', label: 'Send a Message', en: 'MESSAGE', title: 'Send us a message', intro: 'Choose a partnership type and leave your details, and the right person will get in touch.', blocks: [
      { type: 'form', topics: ['Content Acquisition / Distribution', 'IP Licensing', 'Data Solutions', 'International Partnerships', 'Investment', 'Become a Supplier', 'Media Inquiries', 'Other'] },
    ] },
    { id: 'hq', label: 'Headquarters', en: 'HEADQUARTERS', title: 'Headquarters', blocks: [
      { type: 'contact', items: [{ k: 'Address', v: '6/F, Block E, Yonghe Plaza, 28 Andingmen East Street, Dongcheng District, Beijing, China' }] },
    ] },
  ],
};

/* ============ Section order ============ */

// Reorder sections by the given ids; unlisted sections keep their relative order at the end
function reorder(p: Page, ids: string[]) {
  const rank = (id: string) => (ids.includes(id) ? ids.indexOf(id) : ids.length);
  p.sections = [...p.sections].sort((a, b) => rank(a.id) - rank(b.id));
}
reorder(about, ['intro', 'culture', 'history', 'strategy']);
reorder(ipPage, ['wall', 'trailers', 'cases', 'license', 'library']);
reorder(dataPage, ['services', 'scale']);
reorder(investors, ['highlights', 'letter', 'filings', 'ir-contact']);

// Partner: cards by audience priority; form topics in the same order
{
  const order = ['overseas', 'data', 'license', 'content', 'investment', 'supplier', 'media'];
  const block = partner.sections[0].blocks[0];
  if (block.type === 'contacts') block.items.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const form = partner.sections[1].blocks[0];
  if (form.type === 'form') form.topics = ['International Partnerships', 'Data Solutions', 'IP Licensing', 'Content Acquisition / Distribution', 'Investment', 'Become a Supplier', 'Media Inquiries', 'Other'];
}
// 在线留言表单已移除（10/22）：咨询改由 AI 助手转交
partner.sections = partner.sections.filter((x) => !x.blocks.some((b) => b.type === 'form'));
// Partner page: AI assistant entry (it forwards your request to the right contact)
partner.sections.unshift({ id: 'ask-ai', label: 'Ask AI', en: 'ASK AI', bare: true, blocks: [{ type: 'aichat', title: 'Not sure who to contact? Just ask our AI assistant', text: 'Tell the AI what you’d like to work on. It will summarize your request and pass it to the right person, so you don’t need to look up contacts yourself.', cta: 'Chat with the AI assistant' }] });

/* ============ Navigation ============ */

export const pages = { about, business: businessIndex, ip: ipPage, data: dataPage, news, investors, join, partner };
export const navOrder: Page[] = [businessIndex, ipPage, investors, news, about, join, partner];

export const nextOf: Record<string, Page> = {
  business: ipPage, ip: investors, investors: news,
  news: about, about: join, join: partner, partner: businessIndex,
};

/* ============ Home ============ */

export const home = {
  intro: 'COL Group focuses on digital content production, copyright distribution, IP development and intellectual property protection. Guided by the strategy of “Strong Content, Winning IP, Global First, AI Empowerment”, we bring technology and culture together.',
  audiences: [
    { label: 'Partners', hint: 'Licensing · Global', href: '/partner', icon: 'handshake' },
    { label: 'Data clients', hint: 'AI training data', href: '/business#data', icon: 'data' },
    { label: 'Creators', hint: 'Submit · Sign', href: '/business#literature-writers', icon: 'pen' },
    { label: 'Audiences', hint: 'Our apps', href: '/business#products', icon: 'play' },
    { label: 'Investors', hint: 'Reports · IR', href: '/investors', icon: 'chart' },
    { label: 'Job seekers', hint: 'Open roles', href: '/join', icon: 'bag' },
  ],
  news: news.sections[0].blocks[0].type === 'news' ? news.sections[0].blocks[0].items.slice(0, 3) : [],
  wall: (ipPage.sections.find((x) => x.id === 'wall')!.blocks[0] as Extract<Block, { type: 'ipwall' }>).items,
  get ip() { return this.wall; },
};

/* ============ AI assistant ============ */
// Prototype: keyword-matched preset answers with on-site links; replace once a model is connected.
export const aiAssistant = {
  title: 'COL AI Assistant',
  greeting: 'Hi! I can help you find COL’s businesses, IP and investor information, and pass your partnership request to the right team. Try one of these:',
  fallback: 'I can’t answer that yet (this prototype isn’t connected to a language model). Try one of the questions below, or say “I want to partner” to reach the right team.',
  suggestions: ['I want to partner with you', 'What does COL do?', 'How do I license your IP?', 'What products do you have?', 'Where can I see reports and the share price?'],
  // Partnership / contact: a fill-in card in the chat (text fields + pick a topic); sending it is "routed" to the right team
  contact: {
    keywords: ['partner', 'contact', 'collaborat', 'cooperat', 'work with', 'get in touch', 'reach', 'inquiry', 'business development'],
    a: 'Sure! Fill in this card and I’ll pass it to the right team:',
    org: { label: 'Company', placeholder: 'e.g. Galaxy Pictures' },
    who: { label: 'Name & title', placeholder: 'e.g. Alex Chen, Producer' },
    topic: 'What would you like to work on?',
    need: { label: 'In short', placeholder: 'A sentence or two about your idea' },
    reach: { label: 'Contact', placeholder: 'Phone or email' },
    submit: 'Send to the team',
    missing: 'Pick a topic and leave a way to reach you',
    received: 'Got it! I’ve logged this as a “{topic}” request and will pass it to the right team. They usually reply within 1–2 business days. (Prototype: nothing is actually sent.)',
    topics: [
      { id: 'overseas', name: 'Global' },
      { id: 'data', name: 'Data' },
      { id: 'license', name: 'IP licensing' },
      { id: 'content', name: 'Content & channels' },
      { id: 'investment', name: 'Investment' },
      { id: 'supplier', name: 'Supplier' },
      { id: 'media', name: 'Media' },
      { id: 'other', name: 'Other' },
    ],
  },
  faq: [
    { q: 'What does COL do?', keywords: ['what do', 'what does', 'about', 'company', 'who are', 'business', 'overview', 'introduction'],
      a: 'COL Group is an AI-driven global leader in digital entertainment. Founded at Tsinghua University in 2000, it listed on the ChiNext board of the Shenzhen Stock Exchange in 2015 (300364). Its businesses span webnovels, film and microdrama, global, AI creative tools and data solutions.',
      link: { label: 'See our businesses', href: '/business' } },
    { q: 'How do I license your IP?', keywords: ['ip', 'adaptation', 'legend of hei', 'commoner', 'yi pin bu yi'],
      a: 'The IP & Works page has our IP wall, trailers and adaptation cases; click any poster to learn about that work. To discuss licensing, say “I want to partner” and fill in a short card. I’ll pass it to the licensing team.',
      link: { label: 'See IP & Works', href: '/ip#wall' } },
    { q: 'What products do you have?', keywords: ['product', 'app', '17k', 'xiaoyao', 'download', 'read', 'watch'],
      a: 'Our main products are FlareFlow (global microdrama), Ciyuan Shenbi (AI animation), Xiaoyao AI (AI creation), 17K and 4yt (webnovels).',
      link: { label: 'See all products', href: '/business#products' } },
    { q: 'What is FlareFlow?', keywords: ['flareflow', 'microdrama', 'drama', 'overseas', 'global', 'international'],
      a: 'FlareFlow is COL’s global microdrama platform, available in 200+ countries and regions, with over 52 million registered users as of June 2026.',
      link: { label: 'See our global business', href: '/business#global' } },
    { q: 'What AI training data do you offer?', keywords: ['data', 'dataset', 'corpus', 'corpora', 'training', 'llm', 'model', 'annotation', 'labeling'],
      a: 'We offer core datasets, premium custom data and training-data annotation for AI and large-model companies: 600 TB of text, audio, image and video data, serving all of China’s leading large-model makers.',
      link: { label: 'See Data Solutions', href: '/business#data' } },
    { q: 'Where can I see reports and the share price?', keywords: ['report', 'financial', 'annual', 'quarterly', 'announcement', 'filing', 'investor', 'stock', 'share', 'price', '300364', 'shareholder'],
      a: 'The Investor Relations page has the live share price, investment highlights, the Chairman’s letter and periodic reports (linked to the original PDFs on CNINFO). COL’s A-share code is 300364.',
      link: { label: 'Go to Investor Relations', href: '/investors' } },
    { q: 'What is COL’s history?', keywords: ['history', 'milestone', 'founded', 'tsinghua', 'culture', 'award', 'honor', 'strategy'],
      a: 'The About page covers our story, culture, three stages of growth and strategy.',
      link: { label: 'See our milestones', href: '/about#history' } },
    { q: 'What’s new?', keywords: ['news', 'latest', 'update', 'event', 'announce', 'press release'],
      a: 'Our latest updates are in the Newsroom. Each story has a photo and summary and opens the original article.',
      link: { label: 'Go to the Newsroom', href: '/news' } },
    { q: 'What jobs are open?', keywords: ['job', 'jobs', 'career', 'careers', 'hiring', 'role', 'internship', 'graduate', 'campus', 'apply', 'resume', 'cv'],
      a: 'Our open roles are linked from the Join Us page.',
      link: { label: 'See open roles', href: '/join#positions' } },
    { q: 'Where are you based?', keywords: ['phone', 'address', 'hotline', 'headquarters', 'office', 'where are', 'located'],
      a: 'Our headquarters is at 6/F, Block E, Yonghe Plaza, 28 Andingmen East Street, Dongcheng District, Beijing. To discuss a partnership, just say “I want to partner”.',
      link: { label: 'See headquarters', href: '/partner#hq' } },
  ],
};

/* ============ UI strings ============ */
export const ui = {
  home: 'Home',
  homeAria: 'Home',
  mainNav: 'Main navigation',
  mobileNav: 'Mobile navigation',
  openMenu: 'Open menu',
  toggleTheme: 'Toggle dark / light mode',
  stockPending: 'COL live share price (Tencent Finance)',
  crumbs: 'Breadcrumb',
  pageNav: 'On this page',
  next: 'Up next · NEXT',
  // Home
  heroL1: 'Better Content',
  heroL2: 'Better Life',
  heroSub: 'An AI-driven global leader in digital entertainment.',
  ctaPartner: 'Partner with us',
  ctaWorks: 'Explore our works',
  scrollDown: 'Scroll down',
  audienceAria: 'Quick links by audience',
  audienceLabel: 'Quick links',
  bizTitle: ['Our', ' Businesses'],
  bizAll: 'All businesses',
  newsTitle: 'Latest News',
  newsAll: 'All news',
  ipTitle: ['IP', ' & Works'],
  ipAll: 'All works',
  worksAria: 'Featured works',
  // One-line highlight on each business poster
  bizHook: {
    literature: '5.6M titles · 4M+ contracted authors',
    drama: 'Hengqin studio · Global microdrama · Screen adaptations',
    global: 'In 200+ countries and regions · Connecting the world through great stories',
    data: '600 TB multimodal data · All leading model makers',
    ai: 'Xiaoyao AI · Ciyuan Shenbi',
  } as Record<string, string>,
  // Content blocks
  visitSite: 'Visit website',
  learnMore: 'Learn more',
  linkSoon: 'Link coming soon',
  readFull: 'Read the full letter',
  letterSoon: '(Full text to be migrated from the current website; the launch version will show the complete letter here.)',
  all: 'All',
  detailSoon: 'Details coming soon',
  readSource: 'Read the article',
  cninfoAll: 'View all on CNINFO',
  talkLicense: 'Discuss licensing',
  newsOwn: 'Published here',
  readArticle: 'Read the article',
  askAiAbout: 'Chat with our AI assistant',
  backToList: 'Back to',
  ipHighlights: 'Highlights',
  ipTrailer: 'Trailer',
  ipGallery: 'Poster',
  ipLicense: 'Discuss licensing this title',
  ipMore: 'More works',
  sourceLabel: 'Source',
  newsMore: 'More news',
  play: 'Play',
  videoSoon: 'Video coming soon',
  sendInquiry: 'Send inquiry',
  form: { topic: 'Partnership type', name: 'Name', namePh: 'Your name', company: 'Company / organization', companyPh: 'Company name', title: 'Job title', titlePh: 'Your job title', email: 'Email', phone: 'Phone / WeChat', phonePh: 'So we can reach you', message: 'Your inquiry', messagePh: 'Briefly describe what you need, and we’ll have the right person contact you soon', submit: 'Submit inquiry' },
  photoSoon: 'Photo coming soon',
  // CTA band
  ctaBandTitle: 'Have a partnership idea? Let’s talk',
  ctaBandSub: 'Content acquisition · IP licensing · Data solutions · International partnerships · Supplier onboarding',
  // Footer
  footerWords: ['BETTER CONTENT', '更好内容', 'BETTER LIFE', '更好生活'],
  hotline: 'Hotline',
  fax: 'Fax',
  footerBiz: 'Business & Products',
  follow: 'Follow us',
  qr: 'QR code',
  licenses: 'Licenses & Permits',
  fileSoon: 'File coming soon',
  rights: 'All rights reserved',
  // AI assistant
  aiNote: 'Prototype · Preset answers, no language model connected',
  close: 'Close',
  aiPlaceholder: 'Ask a question, or say “I want to partner”',
  aiInput: 'Type your question',
  send: 'Send',
  aiFab: 'Ask our AI',
  aiNudge: 'Questions? Ask me about our businesses, IP, or who to talk to about a partnership.',
  aiNudgeGo: 'Ask now',
  // Investor quote card
  quoteCode: 'A-share · 300364.SZ · SZSE ChiNext',
  quoteLoading: 'Loading quote',
  quoteLive: 'Live',
  quoteFail: 'Quote unavailable',
  quoteMeta: ['Change', 'Market cap'],
  quoteMore: 'Full quote',
};
