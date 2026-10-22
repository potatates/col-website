// English site content: same exports and structure as zh.ts.
// Placeholders marked [Sample] / To be provided / to be verified must be confirmed before launch.
// Internal hrefs stay unprefixed (e.g. '/business#data'); the /en prefix is added at render time.

import { bizColor, type Page, type Block, type Stat } from './zh';

export { bizColor };
export type { Stat, Card, Cover, Person, IP, Block, Section, Page } from './zh';

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
  phone: '010-51667567',
  fax: '010-85195550',
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
        { type: 'text', lead: true, paras: ['Founded in 2000, COL Group listed on the ChiNext board of the Shenzhen Stock Exchange on January 21, 2015 (stock code: 300364), becoming known as “China’s first digital publishing stock”. Our core businesses are digital content production, copyright distribution, IP development and intellectual property protection. Guided by the strategy of “Strong Content, Winning IP, Global First, AI Empowerment”, we bring technology and culture together.'] },
        // Note: the current site uses two sets of figures; align with financial reports before launch
        { type: 'stats', items: [
          { value: '5.6', unit: 'M+', label: 'Digital content titles' },
          { value: '4', unit: 'M+', label: 'Registered creators' },
          { value: '490', unit: 'K+', label: 'Hours of audio content' },
          { value: '827', unit: '', label: 'Employees (end of 2025)' },
        ], note: 'Sources: col.com company profile, 2025 Annual Report, 2025 CSR Report; content and audio figures to be aligned' },
        { type: 'text', paras: [
          'COL sources licensed digital content from its own original-writing platforms, well-known authors and rights holders. Its original platforms include 17K, Siyuetian, the sci-fi imprint “Qixiang Universe” and the mystery imprint “Mixiang Project”.',
          'With literary IP at the core, we develop stories while they are still being serialized and adapt them across every format: audio, comics, motion comics, animation, microdrama, film and TV, games and merchandise. This takes us from producing single webnovels to managing the full lifecycle of literary IP.',
          'COL has subsidiaries in the United States, Singapore and Japan, and its overseas microdrama platform FlareFlow reaches more than 200 countries and regions. We keep investing in large models and multimodal AI, and launched our own large model, “Zhongwen Xiaoyao”, in 2023.',
        ] },
      ],
    },
    {
      id: 'culture', label: 'Culture', en: 'CULTURE', title: 'Better Content, Better Life',
      blocks: [
        { type: 'cards', cols: 4, items: [
          { tag: 'Mission', title: 'Better Content, Better Life', text: '更好内容，更好生活' },
          { tag: 'Vision', title: 'Build a sustainable organization, create a cultural universe', text: '打造百年组织，创造文化宇宙' },
          { tag: '10-Year Goal', title: 'The leader in digital content', text: '数字文化内容领跑者' },
          { tag: 'Values', title: 'Customer Value, Innovation, Truthfulness, Evolution', text: '为客户持续创造价值、创新、求真务实、自我进化' },
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
      { type: 'cards', cols: 4, items: [
        { tag: '01', title: 'Strong Content', text: '5.6 million+ licensed content titles and 4 million+ registered creators.', href: '/business#literature' },
        { tag: '02', title: 'Winning IP', text: 'Turning IP from a one-off asset into a renewable one.', href: '/ip' },
        { tag: '03', title: 'Global First', text: 'FlareFlow, UniReel and the Hengqin base form an international microdrama infrastructure.', href: '/business#global' },
        { tag: '04', title: 'AI Empowerment', text: 'Xiaoyao covers about 60% of the literary production process and cuts production time by 75%.', href: '/business#ai' },
      ] },
    ] },
    {
      id: 'honors', label: 'Honors', en: 'HONORS', title: 'Honors',
      blocks: [
        { type: 'honors', items: [
          { year: '2025', items: ['The Legend of Hei 2 named “Most Commercially Valuable Animation IP of 2025” and a Top 10 work at the China Animation & Comic Golden Dragon Award', 'Yi Pin Bu Yi (The Commoner) named a “Microdrama of 2025” by Zongyi Bao and won “Most Commercially Valuable Microdrama” at the Beijing International Film Festival', 'A FlareFlow original won “Best Female Leadership Narrative” at the 2025 International Short Drama Festival'] },
          { year: '2024', items: ['Sereal+ named one of China’s “Top 10 Overseas Microdrama Platforms” at the China International New Media Short Film Festival', '“Best Suspense Microdrama” and “Best Visual Effects” at the Hainan Island International Film Festival'] },
          { year: '2023', items: ['Overseas Online Literature Platform Award (Online Literature Center, China Writers Association)', 'One of China’s 50 most valuable companies in “AIGC × content”', 'Selected for Beijing’s General Artificial Intelligence Industry Innovation Partner Program'] },
          { year: '2021', items: ['Private publishing enterprise for national reading promotion during the 13th Five-Year Plan', '“Digital Rural Library” named one of China’s top 10 reading-for-poverty-alleviation projects', 'Outstanding Digital Publishing Brand 2020–2021'] },
          { year: '2018', items: ['“Outstanding Publishing Unit” at the 4th China Government Award for Publishing', 'One of the “Top 30 Capital Cultural Enterprises” (3rd edition)'] },
          { year: '2012', items: ['“National Copyright Demonstration Unit” by the National Copyright Administration', 'Zhongguancun Top 100 Emerging Enterprises'] },
        ] },
      ],
    },
    {
      id: 'licenses', label: 'Licenses', en: 'LICENSES', title: 'Licenses & Permits',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: 'Value-added Telecom', title: '京ICP证010590号', text: 'Value-added Telecommunications Business License' },
          { tag: 'Online Culture', title: '京网文（2023）4750-133号', text: 'Online Culture Business License' },
          { tag: 'ICP Filing', title: '京ICP备09030667号-23', text: 'Website ICP filing number' },
          { tag: 'Public Security Filing', title: '京公网安备 11010102003415号', text: 'Public security website filing' },
          { tag: 'Business License', title: 'Business License', text: 'View', href: 'https://cdn.static.17k.com/material_picture/2025/1756720858269.png', external: true },
          { tag: 'To be provided', title: 'Publication Business License and others', text: 'Other industry licenses to be provided by Legal' },
        ] },
      ],
    },
  ],
};

/* ============ Business & Products /business ============ */

const literature: Page = {
  key: 'literature',
  theme: bizColor.literature,
  href: '/business#literature',
  title: 'Webnovel',
  en: 'WEBNOVEL',
  intro: 'Licensed content from our own original platforms, well-known authors and rights holders, distributed as digital reading products across devices, platforms and media.',
  sections: [
    {
      id: 'platforms', label: 'Platforms', en: 'PLATFORMS', title: 'Original platforms & products',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { id: '17k', tag: 'Flagship', title: '17K', text: 'Our core original-content platform, covering every genre: fantasy, urban romance, wuxia and xianxia, campus stories and more.', href: 'https://www.17k.com', external: true },
          { id: '4yt', tag: 'Women’s fiction', title: 'Siyuetian', text: 'An original fiction site for period stories aimed at women readers. The microdrama adaptation of its hit “My Whole Family Can Hear My Thoughts” passed 390 million Douyin views within 24 hours.', href: 'https://www.4yt.net', external: true },
          { id: 'haili', tag: 'Stories', title: 'Haili Stories', text: 'Home to the mystery imprint “Mixiang Project” and the sci-fi imprint “Qixiang Universe”. Runs the Haili Stories novel contest and the Mixiang Award, which launched works such as “Misplaced”, “To the End” and “A Lone Lamp in the Long Night”.', href: 'https://haili.chineseall.net', external: true },
        ] },
      ],
    },
    {
      id: 'writers', label: 'Writers', en: 'WRITERS', title: 'Writers & submissions',
      intro: 'In 2013 we founded the Online Literature University (Nobel laureate Mo Yan served as its first honorary president), whose open courses keep training professional webnovel writers.',
      blocks: [
        { type: 'stats', items: [
          { value: '4', unit: 'M+', label: 'Registered creators' },
          { value: '50', unit: 'K+', label: 'Open-course trainee sessions' },
        ] },
        { type: 'cards', cols: 2, items: [
          { tag: 'Creators', title: 'Submit or sign with us', text: 'Start writing in the 17K author zone.', href: 'https://www.17k.com', external: true },
        ] },
      ],
    },
    {
      id: 'audio', label: 'Audio', en: 'AUDIO', title: 'Audio content',
      intro: 'Our wholly owned subsidiary Hongda Yitai is one of China’s earliest audio content producers. Our “AI narrator” supports solo, duo and multi-voice audiobooks.',
      blocks: [
        { type: 'stats', items: [
          { value: '490', unit: 'K+', label: 'Hours of audio content' },
          { value: '200', unit: 'K+ hrs', label: 'Audiobooks recorded by AI narrators' },
          { value: '5', unit: 'B+', label: 'Plays of the Martial God Asura audiobook' },
        ], note: 'Sources: 2024 Annual Report, 2025 Interim Report' },
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
        { type: 'cards', cols: 3, items: [
          { tag: 'Global microdrama', title: 'FlareFlow', text: 'Launched in April 2025 and available in 200+ countries and regions. By the end of June 2026 it had over 52 million registered users and nearly 7,000 titles, and had reached monthly operating breakeven. In September 2025 it topped the US App Store free entertainment chart.', href: 'https://apps.apple.com/app/id6744237126', external: true },
          { tag: 'Japan microdrama', title: 'UniReel', text: 'Launched by COL JAPAN in November 2024, it reached No. 2 on Japan’s iOS entertainment chart on launch night. Together with LINE Yahoo, Hakuhodo DY Media Partners and others it formed a microdrama committee, whose first title was co-produced with Nippon TV.' },
          { tag: 'China microdrama', title: 'Microdrama production', text: 'The Yi Pin Bu Yi (The Commoner) series has passed 6 billion views; more than 10 titles, including “The Simple Son-in-Law of Great Qian” and “My 26-Year-Old Tenant”, have each passed 1 billion; over 1,200 AI microdramas released.' },
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
        { type: 'cards', cols: 2, items: [
          { tag: 'Originals', title: 'Raising His Mistress\'s Child', text: 'A FlareFlow original with over 200 million views worldwide, winner of “Best Female Leadership Narrative” at the 2025 International Short Drama Festival. The Korean version stars Han Chae-young.' },
          { tag: 'Studio', title: 'Hengqin International Film & TV City', text: 'Hosts ongoing film, TV and microdrama shoots, with partners including TVB.' },
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
          { tag: 'Connected TV', title: 'FlareFlow × Whale TV', text: 'Launched on the Whale TV independent TV operating system in September 2026, starting with South America. Whale TV works with 400+ TV brands and has over 47.5 million monthly active devices.' },
          { tag: 'Southeast Asia', title: 'Partnering with Thailand’s CP Group', text: 'Accelerating local microdrama production.' },
          { tag: 'Japan', title: 'COL JAPAN × UniReel', text: 'Formed a microdrama committee with LINE Yahoo, Hakuhodo DY Media Partners and HUUM; the first title was co-produced with Nippon TV. Earlier titles were sold to DMM.com.' },
          { tag: 'Singapore', title: 'Supermodel Me', text: 'A reality microdrama produced with Refinery Media.' },
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
          { tag: 'Large model', title: 'Zhongwen Xiaoyao / Xiaoyao AI', text: 'Our in-house large model supports writing in 14 languages. It serves 50,000+ creators in over 100 countries and regions and has helped produce more than 2.5 billion words.', href: 'https://xiaoyao.ai', external: true },
          { tag: 'Creation platform', title: 'Ciyuan Shenbi', text: 'A full-stack AI content creation platform built on Xiaoyao AI, covering script breakdown, storyboards, image and video generation, and voice-over.' },
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
          { value: '1.4', unit: 'M+', label: 'Content items reviewed by AI in 2025' },
        ], note: 'Sources: 2026 Chairman’s Letter to Shareholders, 2025 CSR Report' },
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
      intro: 'Webnovels are where IP begins; microdrama and global expansion drive growth; AI and IP protection run through it all.',
      blocks: [
        { type: 'steps', items: [
          { title: 'Webnovel', text: '17K · Siyuetian · Haili Stories', color: bizColor.literature },
          { title: 'Film & Microdrama', text: 'FlareFlow · Animation · Film & TV', color: bizColor.drama },
          { title: 'Global', text: '200+ countries and regions · 40%+ overseas revenue', color: bizColor.global },
          { title: 'AI & Creative Tools', text: 'Xiaoyao AI · Ciyuan Shenbi', color: bizColor.ai },
          { title: 'IP Protection', text: 'Nearly 10,000 lawsuits · Blockchain evidence', color: bizColor.ipr },
          { title: 'Data Solutions', text: '600 TB of data · Dozens of AI model partners', color: bizColor.data },
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
      { logo: 'flareflow', tag: 'Global microdrama', title: 'FlareFlow', text: 'Launched in April 2025 in 200+ countries and regions and 14 languages, with over 52 million registered users. Topped the US free entertainment chart in September 2025.', href: 'https://apps.apple.com/app/id6744237126', external: true, color: bizColor.global },
      { logo: 'cyshenbi', tag: 'AI animation', title: 'Ciyuan Shenbi', text: 'An all-in-one AI animation tool launched in early 2026: AI assists from script and storyboard to voice-over, with built-in global distribution.', href: '#', external: true, color: bizColor.ai },
      { logo: 'xiaoyao', tag: 'AI large model', title: 'Xiaoyao AI', text: 'Built on our in-house “Zhongwen Xiaoyao” model, supporting writing in 14 languages for 50,000+ creators.', href: 'https://xiaoyao.ai', external: true, color: bizColor.ai },
      { logo: '17k', tag: 'Webnovel', title: '17K', text: 'Our core original-content platform, recognized as a “key webnovel platform” by the Publicity Department of the CPC Central Committee.', href: 'https://www.17k.com', external: true, color: bizColor.literature },
      { logo: '4yt', tag: 'Webnovel', title: 'Siyuetian', text: 'Original period fiction for women readers.', href: 'https://www.4yt.net', external: true, color: bizColor.literature },
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
  intro: 'From serialized webnovels to audio, animation, microdrama, film and TV. Explore our IP and start a licensing conversation, all on one page.',
  sections: [
    {
      id: 'wall', label: 'IP Wall', en: 'IP WALL', title: 'Featured IP',
      blocks: [
        { type: 'ipwall', note: 'Posters and figures from the COL Group corporate presentation (Sept 2026) and official COL articles.', items: [
          { title: 'The Legend of Hei', genre: 'Film & Series', forms: ['Animated series', 'Film', 'Merchandise'], tags: ['The Legend of Hei 2: RMB 533M+ box office', 'Released in 10+ countries and regions'], poster: 'luoxiaohei' },
          { title: 'Martial God Asura', genre: 'Animation', forms: ['Webnovel', 'Audio', '3D animation'], tags: ['Season 2 topped Tencent Video’s fantasy animation chart', '5B+ audio plays'], poster: 'xiuluowushen' },
          { title: 'Yi Pin Bu Yi (The Commoner)', genre: 'Microdrama', forms: ['Webnovel', 'Microdrama'], tags: ['6B+ views across the first four seasons', 'Zongyi Bao Microdrama of the Year 2025'], poster: 'yipinbuyi' },
          { title: 'I Woke Up as the Villainess in an Otome Game System and Flirted My Way Through the Interstellar', genre: 'Microdrama', forms: ['AI 3D animation'], tags: ['No. 1 on the Huolong AI animation chart'], poster: 'yiyou' },
          { title: 'Raising His Mistress\'s Child', genre: 'Microdrama', forms: ['FlareFlow', 'Premium English'], tags: ['200M+ views worldwide', 'Best Female Leadership Narrative, International Short Drama Festival'], poster: 'raising' },
          { title: '99 Charms, 99 Heartbreaks', genre: 'Microdrama', forms: ['FlareFlow'], tags: ['Best Drama, Vertical Shorts Festival (Los Angeles)'], poster: 'charms99' },
        ] },
      ],
    },
    {
      id: 'trailers', label: 'Trailers & Screeners', en: 'TRAILERS', title: 'Trailers & screeners',
      intro: 'Screeners for partners and trailers for audiences.',
      blocks: [
        { type: 'videos', note: 'Screeners for other titles are available on request via the Partner page.', items: [
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
        { type: 'cards', cols: 4, items: [
          { tag: '01', title: 'Film & TV Adaptation', href: lic('Film & TV Adaptation') },
          { tag: '02', title: 'Animation Adaptation', href: lic('Animation Adaptation') },
          { tag: '03', title: 'Game Adaptation', href: lic('Game Adaptation') },
          { tag: '04', title: 'Publishing / E-books', href: lic('Publishing / E-books') },
          { tag: '05', title: 'Audio', href: lic('Audio') },
          { tag: '06', title: 'Consumer Products / Merchandise', href: lic('Consumer Products / Merchandise') },
          { tag: '07', title: 'Brand Collaborations', href: lic('Brand Collaborations') },
          { tag: '+', title: 'Request Screeners', href: lic('Request Screeners') },
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
          { value: 'Dozens', unit: '', label: 'Large-model company partners' },
          { value: '85', unit: '%', label: 'Share of new data that is specialized, high-difficulty' },
        ], note: 'Sources: 2025 Interim Report, 2026 Interim Report' },
      ],
    },
  ],
};

// 10/22: renamed to “Our Businesses” (team navigation table); chapter order follows the meeting notes
businessIndex.title = 'Our Businesses';
businessIndex.en = 'BUSINESS';
businessIndex.intro = 'IP + AI + Global: great IP at the core, AI across every step, and stories that travel the world.';
businessPages.push(literature, drama, global, ai, ipr, dataPage);

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
      { date: '2026-10-16', title: 'COL at MIPCOM Cannes: FlareFlow partners with Digicel to expand in Central and South America', tag: 'Global', img: 'cannes', text: 'FlareFlow exhibited at MIPCOM and signed with Caribbean telecom operator Digicel to grow across Central and South America.' },
      { date: '2026-10-12', title: 'COL partners with Thailand’s CP Group to accelerate local microdrama production', tag: 'Global', img: 'thai', href: 'https://www.col.com/article/2110230650349912064', text: 'FlareFlow Mini launched a dedicated section on TATANG by TrueID, run by CP Group’s True. The partners will work together on AIGC localization, training Thai creators with local universities, and distribution.' },
      { date: '2026-10-08', title: 'COL named to Cyzone’s “2026 China Globalization New Force Top 100” for the second year running', tag: 'Awards', img: 'global100', href: 'https://www.col.com/article/2110229921233076224', text: 'Listed among the 40 “leading” companies. Overseas revenue grew 123.94% in 2025 to over 40% of the total, and FlareFlow topped the US entertainment charts.' },
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
  intro: 'AI as our technology foundation, content as our core asset, globalization as our direction. A-share code 300364.SZ.',
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
      { type: 'contact', items: [{ k: 'IR email', v: 'ir@col.com' }, { k: 'IR phone', v: '010-84195757' }], cta: { label: 'Ask on CNINFO Hudongyi', href: cninfo } },
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
    { id: 'culture', label: 'Philosophy', en: 'PHILOSOPHY', title: 'How we grow talent', blocks: [
      { type: 'cards', cols: 2, items: [
        { tag: 'Talent strategy', title: 'Raising talent density', text: 'Investing in young talent to keep the organization energetic and creative.' },
        { tag: 'Development', title: 'A home for professional talent', text: 'Finding and developing expert leaders and building a strong professional pipeline.' },
      ] },
      { type: 'tags', title: 'Learning & development', items: ['Mentorship program', 'Knowledge base', 'Hit Makers Club', 'Innovation conference', 'High-potential program', 'New-hire onboarding', 'Frontline manager training', 'Internal trainer program', 'Guest talks'] },
    ] },
    { id: 'activities', label: 'Life at COL', en: 'ACTIVITIES', title: 'Life at COL', blocks: [
      { type: 'gallery', note: 'Photos to be provided by Brand / HR; public use to be approved by Legal and HR.', items: [
        { tag: 'Annual party', caption: 'Annual party' },
        { tag: 'Awards', caption: 'COL Star / Rising Star awards' },
        { tag: 'Team building', caption: 'Team trips' },
        { tag: 'Competitions', caption: 'Innovation contest' },
        { tag: 'Clubs', caption: 'Sports clubs: badminton, basketball, walking' },
        { tag: 'AI training', caption: 'AI training and sharing sessions' },
        { tag: 'Awards', caption: 'Performance celebrations' },
        { tag: 'Annual party', caption: 'Work anniversary celebrations' },
      ] },
    ] },
    { id: 'people', label: 'Our People', en: 'OUR PEOPLE', title: 'Our people', blocks: [
      { type: 'cards', cols: 3, items: [
        { tag: 'International business', title: 'Embracing change and challenge', text: 'Building our international business opens up new horizons and opportunities. I’ve found teammates to build with and friends to share stories with.' },
        { tag: 'Growth', title: 'Stepping out of my comfort zone', text: 'Only after joining COL did I discover how many sides of myself there were to explore.' },
        { tag: 'Creative', title: 'From hobby to career', text: 'The company gave me the chance and the platform to try, and I keep pushing further in work I love.' },
      ] },
      { type: 'text', paras: ['Employee photos and names will be added once consent is obtained.'] },
    ] },
    { id: 'workplace', label: 'Workplace', en: 'WORKPLACE', title: 'Where we work', blocks: [
      { type: 'gallery', items: [
        { tag: 'Workplace', caption: 'Beijing · Yonghe Plaza' },
        { tag: 'Workplace', caption: 'Hengqin international microdrama production base' },
      ] },
    ] },
    { id: 'positions', label: 'Open Roles', en: 'CAREERS', title: 'Experienced & campus hiring', blocks: [
      { type: 'steps', items: [{ title: 'Browse roles' }, { title: 'Apply' }, { title: 'Interview' }] },
      { type: 'cards', cols: 2, items: [
        { id: 'social', tag: 'Experienced hires', title: 'View open roles', text: 'Browse current openings on our careers site (in Chinese).', href: 'https://zhongwenzaixian.zhiye.com/', external: true },
        { id: 'campus', tag: 'Campus hiring', title: 'View campus roles', text: 'Opportunities for new graduates.', href: 'https://zhongwenzaixian.zhiye.com/campus', external: true },
      ] },
      { type: 'contact', items: [{ k: 'HR email', v: 'To be provided' }] },
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
  intro: 'Content acquisition, IP licensing, data, global partnerships, suppliers and media: find the right person, or just ask our AI assistant.',
  sections: [
    { id: 'types', label: 'Partnership Types', en: 'I WANT TO…', title: 'I want to…', blocks: [
      { type: 'contacts', items: [
        { id: 'content', tag: 'Content', title: 'Content Acquisition / Distribution', text: 'Acquiring and distributing web fiction, audio and microdrama content; platform and device channel partnerships.', people: [{ name: 'To be confirmed', role: 'Head of Content Partnerships' }] },
        { id: 'license', tag: 'IP Licensing', title: 'IP Licensing', text: 'Film & TV, animation, games, publishing, audio, consumer products and brand collaborations, plus screener requests.', people: [{ name: 'To be confirmed', role: 'Head of IP Licensing' }] },
        { id: 'data', tag: 'Data', title: 'Data Solutions', text: 'Data and corpus services for AI and large-model companies. See “Data Solutions”.', people: [{ name: 'To be confirmed', role: 'Head of Data Solutions' }] },
        { id: 'overseas', tag: 'Global BD', title: 'International Partnerships', text: 'Overseas content acquisition, distribution and IP partnerships.', people: [{ name: 'To be confirmed', role: 'Head of International Partnerships' }] },
        { id: 'investment', tag: 'Investment', title: 'Investment', text: 'Strategic direct investment and industry fund partnerships.', people: [{ name: 'To be confirmed', role: 'Head of Investment' }] },
        { id: 'supplier', tag: 'Suppliers', title: 'Become a Supplier', text: 'Onboarding for content, technology, production and channel suppliers (onboarding guide to be provided).', people: [{ name: 'To be confirmed', role: 'Supplier onboarding' }] },
        { id: 'media', tag: 'Media', title: 'Media Inquiries', text: 'Interview and coverage requests. Media resources are in the Newsroom.', people: [{ name: 'To be confirmed', role: 'Brand & PR' }] },
      ] },
    ] },
    { id: 'form', label: 'Send a Message', en: 'MESSAGE', title: 'Send us a message', intro: 'Choose a partnership type and leave your details, and the right person will get in touch.', blocks: [
      { type: 'form', topics: ['Content Acquisition / Distribution', 'IP Licensing', 'Data Solutions', 'International Partnerships', 'Investment', 'Become a Supplier', 'Media Inquiries', 'Other'] },
    ] },
    { id: 'hq', label: 'Headquarters', en: 'HEADQUARTERS', title: 'Headquarters', blocks: [
      { type: 'contact', items: [{ k: 'Address', v: '6/F, Block E, Yonghe Plaza, 28 Andingmen East Street, Dongcheng District, Beijing, China' }, { k: 'Hotline', v: contact.phone }, { k: 'Fax', v: contact.fax }] },
    ] },
  ],
};

/* ============ Section order ============ */

// Reorder sections by the given ids; unlisted sections keep their relative order at the end
function reorder(p: Page, ids: string[]) {
  const rank = (id: string) => (ids.includes(id) ? ids.indexOf(id) : ids.length);
  p.sections = [...p.sections].sort((a, b) => rank(a.id) - rank(b.id));
}
reorder(about, ['intro', 'culture', 'history', 'strategy', 'honors', 'licenses']);
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
// Partner page top: overview of partnership areas, each jumps to its contact card
partner.sections.unshift({
  id: 'overview', label: 'Overview', en: 'OVERVIEW', title: 'Ways to work with us',
  intro: 'From content and IP to data and global distribution, across the whole content value chain. Pick an area to reach the right team.',
  blocks: [{ type: 'cards', cols: 4, items: [
    { tag: 'Global', title: 'International Partnerships', text: 'Global distribution, acquisition and co-production of microdramas and webnovels, plus FlareFlow partnerships.', href: '#overseas', color: bizColor.global },
    { tag: 'Data', title: 'Data Solutions', text: 'Licensed, custom and annotated data for AI and large-model companies.', href: '#data', color: bizColor.data },
    { tag: 'IP', title: 'IP Licensing', text: 'Film & TV, animation, games, publishing, audio, consumer products and brand collaborations.', href: '#license', color: bizColor.drama },
    { tag: 'Content', title: 'Content & Distribution', text: 'Acquisition and distribution of webnovels, audio and microdramas, and platform partnerships.', href: '#content', color: bizColor.literature },
    { tag: 'Investment', title: 'Investment', text: 'Strategic direct investment and industry funds across content, AI and global expansion.', href: '#investment', color: bizColor.ai },
    { tag: 'Suppliers', title: 'Become a Supplier', text: 'Onboarding for content, technology, production and channel suppliers.', href: '#supplier', color: bizColor.ipr },
    { tag: 'Media', title: 'Media Inquiries', text: 'Interview and coverage requests, and media materials.', href: '#media', color: bizColor.global },
    { tag: 'AI', title: 'Not sure who to ask?', text: 'Chat with our AI assistant and it will pass your request to the right person.', href: '#types', color: bizColor.ai },
  ] }],
});
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
  greeting: 'Hi! I can help you find COL’s businesses, IP, financial reports and partnership contacts. Try one of these questions:',
  fallback: 'I can’t answer that yet (this prototype isn’t connected to a language model). Try one of the questions below, or contact us directly.',
  suggestions: ['What does COL do?', 'How do I license your IP?', 'What AI training data do you offer?', 'Where can I find financial reports?'],
  faq: [
    { q: 'What does COL do?', keywords: ['what do', 'what does', 'about', 'company', 'who are', 'business', 'overview', 'introduction'],
      a: 'COL Group is a leading digital content group in China. Founded at Tsinghua University in 2000, it listed on the ChiNext board of the Shenzhen Stock Exchange in 2015 (300364). Its businesses span global microdrama (FlareFlow), data solutions for AI, film and microdrama, webnovels, AI creative tools and IP protection.',
      link: { label: 'See Business & Products', href: '/business' } },
    { q: 'How do I license your IP?', keywords: ['license', 'licensing', 'ip', 'adaptation', 'rights', 'legend of hei', 'commoner', 'yi pin bu yi'],
      a: 'Browse the IP wall on “IP & Works” and click any title to reach the licensing contact, or choose “IP Licensing” on the Partner page and send us a message.',
      link: { label: 'Discuss IP licensing', href: toPartner('license', 'IP Licensing') } },
    { q: 'What AI training data do you offer?', keywords: ['data', 'dataset', 'corpus', 'corpora', 'training', 'llm', 'model', 'annotation', 'labeling'],
      a: 'We offer core datasets, premium custom data and training-data annotation for AI and large-model companies: 600 TB of text, audio, image and video data, with dozens of large-model partners.',
      link: { label: 'See Data Solutions', href: '/business#data' } },
    { q: 'Where can I find financial reports?', keywords: ['report', 'financial', 'annual', 'quarterly', 'announcement', 'filing', 'investor', 'stock', 'share price', '300364'],
      a: 'Periodic reports and announcements are on the Investor Relations page, with direct links to the original PDFs on CNINFO. COL’s A-share code is 300364.',
      link: { label: 'See reports & filings', href: '/investors#filings' } },
    { q: 'What is FlareFlow?', keywords: ['flareflow', 'microdrama', 'drama', 'overseas', 'global', 'international'],
      a: 'FlareFlow is COL’s global microdrama platform, available in 200+ countries and regions, with over 52 million registered users as of June 2026.',
      link: { label: 'See our global business', href: '/business#global' } },
    { q: 'What jobs are open?', keywords: ['job', 'jobs', 'career', 'careers', 'hiring', 'role', 'internship', 'graduate', 'campus', 'apply', 'resume', 'cv'],
      a: 'Experienced and campus hiring links are on the Join Us page. You can also get a feel for life at COL and hear from our people there.',
      link: { label: 'See open roles', href: '/join#positions' } },
    { q: 'How can I contact you?', keywords: ['contact', 'phone', 'email', 'partner', 'partnership', 'business', 'inquiry', 'reach'],
      a: 'For business partnerships, choose a partnership type on the Partner page to see the right contact. Hotline: 010-51667567.',
      link: { label: 'Go to Partner page', href: '/partner' } },
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
  stockPending: 'Stock quote coming soon',
  crumbs: 'Breadcrumb',
  pageNav: 'On this page',
  next: 'Up next · NEXT',
  // Home
  heroL1: 'Better Content',
  heroL2: 'Better Life',
  heroSub: 'An AI-driven global leader in digital entertainment, connecting the world through great stories.',
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
    literature: '5.6M+ licensed titles · 4M+ creators',
    drama: 'Hengqin studio · Global microdrama · Screen adaptations',
    global: 'In 200+ countries and regions · Connecting the world through great stories',
    data: '600 TB multimodal data · Dozens of AI model partners',
    ai: 'Xiaoyao AI · Ciyuan Shenbi',
    ipr: 'Nearly 10,000 infringement lawsuits',
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
  aiPlaceholder: 'Ask a question, e.g. How do I license your IP?',
  aiInput: 'Type your question',
  send: 'Send',
  aiFab: 'AI Assistant',
  // Investor quote card
  quoteCode: 'A-share · 300364.SZ · SZSE ChiNext',
  quotePending: 'Quote coming soon',
  quoteMeta: ['Change --', 'Market cap --', 'Turnover --'],
};
