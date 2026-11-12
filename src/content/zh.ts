// 中文版网站的全部文案、数据与页面结构。
// 来源：col.com 现有官网、2024/2025 年年报、2025/2026 年半年报、2025 年度社会责任报告、2026 年董事长致股东信、公开新闻（2026-10 整理）。
// 标注「示例」「待补充」「待核实」的内容为版式占位，上线前需由对应部门确认替换。
//
// 结构说明（对应《信息架构·页面树与合并方案》方案 A，8 个一级页面）：
//   每个一级页面（Page）由若干小板块（Section）组成，每个小板块有锚点 id，页面内连续滚动。
//   “业务与产品”是一整页：先总览，再依次展开各业务章节，小板块锚点为“业务-板块”（例如 /business#drama-platforms）。
//   导航、页脚、首页入口都由这里的数据自动生成。

/* ============ 类型 ============ */

export type Stat = { value: string; unit?: string; label: string };
// 新闻：有 slug + body 的为本站发布的完整文章（/news/<slug>）；只有 href 的链接到原文
export type NewsItem = { date: string; title: string; tag?: string; img?: string; text?: string; href?: string; slug?: string; source?: string;
  body?: ({ h: string } | { p: string } | { quote: string; by?: string })[] };
export type Card = { id?: string; logo?: string; img?: string; title: string; text?: string; meta?: string; tag?: string; href?: string; external?: boolean; color?: [string, string] };
export type Cover = { title: string; sub?: string; poster?: string };
export type Person = { name: string; role: string; text?: string; email?: string; phone?: string };
// poster：/public/posters 下的海报（取自《中文在线集团介绍2026-09-17》）；wide=横版海报，卡片内完整显示
// 作品详情页（/ip/<slug>）：介绍、数据、亮点、预告片；内容取自《中文在线集团介绍2026-09-17》与公司定期报告
export type IP = { slug: string; title: string; genre: string; forms: string[]; tags: string[]; poster?: string; wide?: boolean;
  intro?: string; stats?: Stat[]; highlights?: { k?: string; v: string }[]; video?: string; vertical?: boolean; images?: string[]; source?: string };

export type Block =
  | { type: 'text'; paras: string[]; lead?: boolean }
  | { type: 'profile'; lead: string; facts: { k: string; v: string; sub?: string }[]; pillars: string[]; pillarsLabel: string }
  | { type: 'culture'; mission: { k: string; v: string; en: string }; items: { k: string; v: string; en: string }[] }
  | { type: 'features'; items: { tag?: string; title: string; text: string; href?: string; external?: boolean; linkLabel?: string; stats?: Stat[]; video?: string }[] }
  | { type: 'spotlight'; kicker: string; title: string; text: string; cta: string; href: string }
  | { type: 'pillars'; items: { no: string; title: string; text: string; big: string; unit?: string; label: string; href?: string }[] }
  | { type: 'stats'; items: Stat[]; note?: string }
  | { type: 'cards'; items: Card[]; cols?: 2 | 3 | 4; featured?: boolean; arrow?: boolean }
  | { type: 'covers'; items: Cover[]; title?: string }
  | { type: 'tags'; title?: string; items: string[] }
  | { type: 'steps'; items: { title: string; text?: string; color?: [string, string] }[] }
  | { type: 'timeline'; items: { year: string; text: string }[] }
  | { type: 'journey'; items: { year: string; text: string; era?: string }[] }
  | { type: 'honors'; items: { year: string; items: string[] }[] }
  | { type: 'quote'; text: string; author?: string; role?: string; href?: string; hrefLabel?: string }
  | { type: 'letter'; title: string; lead: string; themes: { k: string; v: string }[]; author: string; role: string; date: string }
  | { type: 'news'; items: NewsItem[] }
  | { type: 'docs'; cols: { title: string; items: { date: string; title: string; href?: string }[] }[]; href: string }
  | { type: 'contact'; items: { k: string; v: string }[]; cta?: { label: string; href: string } }
  | { type: 'ipwall'; items: IP[]; note?: string }
  | { type: 'aichat'; title: string; text: string; cta: string }
  | { type: 'videos'; items: { title: string; sub?: string; vertical?: boolean; src?: string }[]; note?: string }
  | { type: 'people'; items: Person[]; cols?: 2 | 3 | 4 }
  | { type: 'contacts'; items: { id: string; tag: string; title: string; text: string; people?: Person[]; color?: [string, string] }[] }
  | { type: 'form'; topics: string[]; note?: string; id?: string }
  | { type: 'gallery'; items: { caption: string; tag: string }[]; note?: string }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | { type: 'logos'; items: string[]; note?: string }
  | { type: 'downloads'; items: { title: string; meta: string }[] };

// bare：不显示板块标题，直接显示内容（如合作页顶部的 AI 入口）
export type Section = { id: string; label: string; en: string; title?: string; intro?: string; blocks: Block[]; bare?: boolean };
export type Page = { key: string; href: string; title: string; nav?: string; en: string; intro: string; sections: Section[]; theme?: [string, string] };

/* ============ 站点信息 ============ */

export const site = {
  name: '中文在线',
  fullName: '中文在线集团股份有限公司',
  enName: 'COL Group',
  stockCode: '300364.SZ',
  slogan: '更好内容 更好生活',
  sloganEn: 'BETTER CONTENT, BETTER LIFE',
  tagline: 'AI驱动的全球领先数字文娱平台',
};

export const contact = {
  address: '北京市东城区安定门东大街28号雍和大厦E座6层（100007）',
  icp: ['京ICP证010590号', '京ICP备09030667号-23', '京网文（2023）4750-133号', '京公网安备 11010102003415号'],
};

// 社媒矩阵：微博链接来自现官网页脚；其余账号名与链接待品牌部提供
export const social: { icon: string; platform: string; short: string; account: string; href?: string; qr?: string }[] = [
  { icon: 'wechat', platform: '微信公众号', short: '微信', account: '账号待提供' },
  { icon: 'weibo', platform: '微博', short: '微博', account: '中文在线（待核实）', href: 'https://weibo.com/u/1759081553' },
  { icon: 'douyin', platform: '抖音', short: '抖音', account: '账号待提供' },
  { icon: 'xhs', platform: '小红书', short: '小红书', account: '账号待提供' },
  { icon: 'bilibili', platform: '哔哩哔哩', short: 'B站', account: '账号待提供' },
  { icon: 'linkedin', platform: 'LinkedIn', short: 'in', account: '账号待提供' },
  { icon: 'youtube', platform: 'YouTube', short: 'YT', account: '账号待提供' },
  { icon: 'x', platform: 'X', short: 'X', account: '账号待提供' },
];

// 法务链接：文件待法务提供
export const legal = [
  { label: '隐私政策', href: '#' },
  { label: '用户协议', href: '#' },
  { label: 'Cookie 政策', href: '#' },
  { label: '行为准则', href: '#' },
  { label: '举报与合规通道', href: '#' },
];


/* ============ 业务色板 ============ */
// 一条连续的光谱：每条业务的渐变终点接上下一条的起点，像一整道渐变被切成六块，所以放在一起自然协调。
// 黄 → 橙（海外）｜ 玫红 → 紫（影视·短剧）→ 靛（数商）→ 蓝（版权保护）→ 青（AI）→ 绿（网络文学）
// 海外取 FlareFlow 的黄橙火焰；AI 为品牌蓝 → 青。所有业务相关的颜色都从这里取。
export const bizColor: Record<string, [string, string]> = {
  global: ['#ffc53d', '#ff7a3d'],     // 海外：黄橙 → 橙（FlareFlow 火焰）
  drama: ['#f0569b', '#a95cff'],      // 影视·短剧：玫红 → 紫（去掉橙色段）
  data: ['#9b5cff', '#5b5ff5'],       // 数商：紫 → 靛（数据/科技）
  ipr: ['#5b5ff5', '#2f86ff'],        // 版权保护：靛 → 蓝（守护、可信）
  ai: ['#0071ce', '#00c1de'],         // AI与创作工具：品牌蓝 → 青
  literature: ['#00c1de', '#3ddc97'], // 网络文学：青 → 绿（阅读）
};

const cninfo = 'http://irm.cninfo.com.cn/ircs/search?keyword=300364';

// 跳到“合作”页的某张合作卡片，并带上具体需求（合作页据此高亮卡片、显示“您选择的：…”、预填表单）
export const toPartner = (card: string, type: string) => `/partner?type=${encodeURIComponent(type)}#${card}`;
const lic = (type: string) => toPartner('license', type);
const cninfoAnnouncements = 'https://www.cninfo.com.cn/new/disclosure/stock?stockCode=300364&orgId=9900023871';

/* ============ 关于我们 /about ============ */

const about: Page = {
  key: 'about',
  theme: ['#0071ce', '#00c1de'],
  href: '/about',
  title: '关于我们',
  en: 'ABOUT US',
  intro: '2000年成立于清华大学，2015年登陆深交所创业板，中国“数字出版第一股”。',
  sections: [
    {
      id: 'intro', label: '公司介绍', en: 'PROFILE', title: '国内领先的数字文化内容产业集团',
      blocks: [
        { type: 'profile',
          lead: '以数字内容生产、版权分发、IP衍生与知识产权保护为核心，致力于推动科技与文化融合发展。',
          facts: [
            { k: '成立', v: '2000年', sub: '源于清华大学' },
            { k: '上市', v: '2015.01.21', sub: '深交所创业板' },
            { k: '股票代码', v: '300364', sub: '中国“数字出版第一股”' },
          ],
          pillars: ['夯实内容', '决胜IP', '国际优先', 'AI赋能'], pillarsLabel: '发展战略' },
        { type: 'stats', items: [
          { value: '560', unit: '万种', label: '数字内容' },
          { value: '450', unit: '万名', label: '网络原创作者' },
          { value: '49', unit: '万+小时', label: '音频资源' },
        ], note: '数据来源：《中文在线集团介绍》（2026-09）' },
      ],
    },
    {
      id: 'culture', label: '企业文化', en: 'CULTURE', title: '更好内容，更好生活',
      blocks: [
        { type: 'culture',
          mission: { k: '使命', v: '更好内容，更好生活', en: 'Better content, Better life' },
          items: [
            { k: '愿景', v: '打造百年组织，创造文化宇宙', en: 'Build a sustainable organization, Create a cultural universe' },
            { k: '价值观', v: '为客户持续创造价值、创新、求真务实、自我进化', en: 'Customer Value · Innovation · Truthfulness · Evolution' },
            { k: '十年目标', v: '数字文化内容领跑者', en: 'To be the leader in digital content' },
          ] },
      ],
    },
    {
      id: 'history', label: '发展历程', en: 'MILESTONES', title: '三次创业，跨越式发展',
      blocks: [
        // 三次创业：取自《中文在线集团介绍2026-09-17》“跨越式发展”页
        { type: 'journey', items: [
          { era: '第一次创业', year: '2000', text: '成立于清华大学' },
          { year: '2001', text: '中文在线并入香港泰德时代集团' },
          { year: '2002', text: '担纲“十五规划”教育部课题，推出中小学数字图书馆' },
          { era: '第二次创业', year: '2004', text: '从香港泰德时代集团购回中文在线' },
          { year: '2006', text: '成立17K小说网' },
          { year: '2008', text: '成为中国移动手机阅读基地核心运营合作伙伴' },
          { era: '第三次创业', year: '2015', text: '1月登陆深交所创业板，成为“数字出版第一股”；9月成立集团公司' },
          { year: '2016', text: '定增20亿，成立美国公司，开启国际化' },
          { year: '2021', text: '开启微短剧业务，成为国内竖屏短剧开创者' },
          { year: '2023', text: '发布“中文逍遥”大模型' },
          { year: '2025', text: '上线出海微短剧平台FlareFlow' },
          { year: '2026', text: '发布全栈式AI创作平台“次元神笔”' },
        ] },
      ],
    },
    { id: 'strategy', label: '发展战略', en: 'STRATEGY', title: '“AI + 全球化”双轮驱动', blocks: [
      { type: 'pillars', items: [
        { no: '01', title: '夯实内容', text: '持续建设优质数字文化内容生态', big: '560', unit: '万种', label: '数字内容资源', href: '/business#literature' },
        { no: '02', title: '决胜IP', text: 'IP从“消耗型资产”变为“可循环资产”', big: '60', unit: '亿+', label: '《一品布衣》系列播放', href: '/ip' },
        { no: '03', title: '国际优先', text: 'FlareFlow与横琴基地，构建国际短剧基础设施', big: '200', unit: '+', label: '覆盖国家和地区', href: '/business#global' },
        { no: '04', title: 'AI赋能', text: '“逍遥”覆盖约60%文学生产流程，制作周期缩短75%', big: '75', unit: '%', label: '制作周期缩短', href: '/business#ai' },
      ] },
    ] },
  ],
};

/* ============ 业务与产品 /business（一整页：总览 + 各业务章节） ============ */

const literature: Page = {
  key: 'literature',
  theme: bizColor.literature,
  href: '/business#literature',
  title: '网络文学',
  en: 'ONLINE LITERATURE',
  intro: '超560万种内容资产，打造“一主多元”生态矩阵：全品类平台 + 垂类平台，多维度覆盖读者。',
  sections: [
    {
      id: 'platforms', label: '原创平台', en: 'PLATFORMS', title: '原创平台与产品',
      // 数据来源：《中文在线集团介绍2026-09-17》第9页；平台描述参照2025年年度报告
      blocks: [
        { type: 'stats', items: [
          { value: '560', unit: '万种', label: '数字内容' },
          { value: '450', unit: '万名', label: '网络原创作者' },
          { value: '600', unit: '余家', label: '出版机构' },
          { value: '2,000', unit: '余位', label: '知名作家' },
        ], note: '数据来源：《中文在线集团介绍》（2026-09）' },
        { type: 'cards', cols: 3, items: [
          { id: '17k', tag: '核心原创内容生产平台', title: '17K小说网', text: '中宣部认定“网络文学重点园地”，提供玄幻奇幻、都市言情、武侠仙侠、青春校园等全品类内容；点击量过亿IP 100部+，注册用户1亿+。', href: 'https://www.17k.com', external: true },
          { id: '4yt', tag: '古风女频', title: '四月天', text: '古风女频原创小说网站，驻站作者15万+，作品20万+。', href: 'https://www.4yt.net', external: true },
          { id: 'haili', tag: '类型文学平台', title: '海狸故事 + 谜想 + 奇想', text: '海狸故事鼓励本土类型文学多样化创作、挖掘优秀新人新作；旗下悬疑厂牌“谜想计划”推出“谜想故事奖”，科幻厂牌“奇想宇宙”以科幻IP培育和帮助作者商业变现为目标。' },
        ] },
      ],
    },
    {
      id: 'writers', label: '作家生态', en: 'WRITERS', title: '作家生态与投稿',
      intro: '汇聚二月河、阿来、熊召政、毕飞宇、刘慈欣、周梅森等2,000余位知名作家；平台作者风御九秋当选中国作家协会第十届全国委员会委员，善良的蜜蜂获茅盾新人奖网络文学提名奖。',
      blocks: [
        { type: 'cards', cols: 2, items: [
          { tag: '创作者', title: '我要投稿 / 签约', text: '前往17K作者专区开始创作。', href: 'https://www.17k.com', external: true },
        ] },
      ],
    },
    {
      id: 'audio', label: '有声', en: 'AUDIO', title: '有声内容',
      intro: '邀请200+专业演播者进行真人有声录制；自主研发智能语音AI技术，实现内容快速、低成本音频化。',
      blocks: [
        { type: 'stats', items: [
          { value: '49', unit: '万+小时', label: '音频资源' },
          { value: '20', unit: '万+小时', label: 'AI主播录制时长' },
          { value: '50', unit: '亿', label: '《修罗武神》有声历史播放量' },
        ], note: '数据来源：《中文在线集团介绍》（2026-09）' },
      ],
    },
  ],
};

const drama: Page = {
  key: 'drama',
  theme: bizColor.drama,
  href: '/business#drama',
  title: '影视·短剧',
  en: 'FILM & SHORT DRAMA',
  intro: '从网文IP到短剧、动画与影视，横琴国际短剧拍摄基地配合AI工具链，实现内容“持续上新、快速迭代”。',
  sections: [
    {
      id: 'platforms', label: '短剧平台', en: 'PLATFORMS', title: '短剧平台',
      blocks: [
        // 整行卡片：左侧文字、右侧关键数字，比两列小卡更易读
        { type: 'features', items: [
          { tag: '海外短剧', title: 'FlareFlow', text: '2025年4月上线，覆盖200多个国家和地区，已实现月度经营性盈亏平衡；2025年9月登顶美区应用商店娱乐免费榜。', href: 'https://flareflow.tv/#/', external: true,
            stats: [{ value: '5,200', unit: '万+', label: '注册用户' }, { value: '7,000', unit: '部', label: '剧集（近）' }, { value: '200', unit: '+', label: '国家和地区' }] },
          { tag: '国内短剧', title: '短剧出品', text: '国内真人短剧爆款率保持在50%的行业高位，覆盖古装喜剧、都市情感、古装权谋等多条赛道；《大乾憨婿》《我的26岁女房客》等10余部剧目累计播放均破10亿。', href: '/ip#wall', linkLabel: '看代表作品',
            stats: [{ value: '60', unit: '亿+', label: '《一品布衣》系列播放' }, { value: '10', unit: '余部', label: '播放破10亿剧目' }, { value: '1,200', unit: '部+', label: 'AI短剧' }] },
        ] },
      ],
    },
    {
      id: 'production', label: '制作能力', en: 'PRODUCTION', title: '制作能力',
      blocks: [
        { type: 'stats', items: [
          { value: '17,000', unit: '㎡', label: '横琴基地可用面积' },
          { value: '94', unit: '组', label: '海外短剧常用场景' },
          { value: '10', unit: '+', label: '北美头部制作方合作' },
        ] },
        { type: 'features', items: [
          { tag: '基地', title: '横琴国际影视城', text: '全球首座国际短剧拍摄基地，2026年2月投入运营。位于粤港澳大湾区，拥有多国风格影棚和192间住宿公寓，以“基金＋中文在线＋横琴国际影视城”模式运营，提供内容、审查、拍摄、运营、后期、国内外发行等全链路一站式服务。', video: 'hengqin' },
          { tag: 'AI工业化', title: 'AI短剧生产体系', text: '依托自研AIGC技术构建标准化内容生产体系，以“工具 + 产能 + 内容”深度协同，实现IP高效跨模态开发与规模化输出。',
            stats: [{ value: '80', unit: '%', label: '单部制作周期缩短' }, { value: '90', unit: '%', label: '制作成本降低' }, { value: '1,200', unit: '部', label: 'AI短剧累计上线（近）' }] },
        ] },
      ],
    },
    {
      id: 'animation', label: '动画与漫剧', en: 'ANIMATION', title: '动画与AI漫剧',
      blocks: [
        { type: 'text', paras: ['公司控股《罗小黑战记》出品方寒木春华。《罗小黑战记2》中国大陆票房超5.33亿元，已在北美、欧洲、东亚、东南亚、大洋洲发行。AI漫剧量产突破数百部，3D动画单分钟制作成本下降超过75%。'] },
        { type: 'cards', cols: 2, items: [
          { title: '查看改编案例', text: '一个IP如何变成剧集、动画与短剧。', href: '/ip#cases' },
          { title: '洽谈影视/动画授权', text: '找到对应的授权负责人。', href: lic('影视改编') },
        ] },
      ],
    },
  ],
};

const global: Page = {
  key: 'global',
  theme: bizColor.global,
  href: '/business#global',
  title: '海外',
  en: 'GLOBAL',
  intro: '业务覆盖200多个国家和地区，海外收入占比突破40%，在全球多点布局，输出符合当地文化背景的优质内容。',
  sections: [
    {
      id: 'overview', label: '全球布局', en: 'OVERVIEW', title: '东方叙事大航海',
      blocks: [
        { type: 'stats', items: [
          { value: '200', unit: '+', label: '覆盖国家和地区' },
          { value: '40', unit: '%+', label: '海外收入占比' },
          { value: '5,200', unit: '万+', label: 'FlareFlow累计注册用户' },
          { value: '14', unit: '种', label: '内容分销语言' },
        ], note: '数据来源：2026年董事长致股东信、2026年半年度报告' },
      ],
    },
    {
      id: 'cases', label: '合作案例', en: 'CASES', title: '海外合作案例',
      blocks: [
        { type: 'cards', cols: 2, items: [
          { tag: '大屏', title: 'FlareFlow × Whale TV', img: 'whaletv', text: '2026年9月登陆Whale TV独立电视操作系统，率先覆盖南美；Whale TV合作400多个电视品牌、月活设备超4,750万台。' },
          { tag: '东南亚', title: '携手泰国正大集团', img: 'thai', text: 'FlareFlow Mini登陆正大集团旗下True的TATANG by TrueID平台并开设专区，加速短剧本土化布局。' },
          { tag: '电信运营商', title: 'FlareFlow × 泰国 AIS PLAY', img: 'ais', text: '2026年11月登陆泰国领先电信运营商AIS旗下数字娱乐平台AIS PLAY，开设独立专区，欧美、中国、韩国短剧均配泰语字幕，手机与电视大屏均可观看。' },
          { tag: '新加坡', title: '《Supermodel Me》', img: 'supermodel', text: '联手新加坡Refinery Media打造全球首部移动原生竖屏真人秀微短剧。' },
        ] },
      ],
    },
  ],
};

const ai: Page = {
  key: 'ai',
  theme: bizColor.ai,
  href: '/business#ai',
  title: 'AI与创作工具',
  en: 'AI & TOOLS',
  intro: '以AI为技术底座，贯穿创意、生产、分发、变现、反馈全流程。',
  sections: [
    {
      id: 'products', label: 'AI产品', en: 'PRODUCTS', title: 'AI产品',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: '大模型', title: '中文逍遥 / 逍遥AI', text: '2023年发布的全球首个万字创作大模型，支持14种语言创作；服务100多个国家和地区的5万余名创作者，协助产出超25亿字。', href: 'https://xiaoyao.ai', external: true },
          { tag: '创作平台', title: '次元神笔', text: 'AI漫剧一站式生成工具，2026年初上线：从IP剧本选品、分镜、角色与画面生成，到视频生成、智能配音和作品发行，全程AI协助。', href: 'https://www.ciyuanshenbi.com', external: true },
          { tag: '投放', title: '逍遥 AI Agent', text: '智能广告投放全流程：素材生成、预算动态分配、实时监测；每部海外短剧生成100-300份素材，投放效率提升20倍以上。' },
        ] },
      ],
    },
    {
      id: 'results', label: '成效', en: 'RESULTS', title: 'AI带来的效率',
      blocks: [
        { type: 'stats', items: [
          { value: '90', unit: '%+', label: 'AI翻译成本下降' },
          { value: '40', unit: '%', label: '生产效率提升' },
          { value: '75', unit: '%+', label: '3D动画单分钟成本下降' },
          { value: '80', unit: '%', label: 'AI短剧单部制作周期缩短' },
        ], note: '数据来源：2026年董事长致股东信、《中文在线集团介绍》（2026-09）' },
      ],
    },
  ],
};

const ipr: Page = {
  key: 'ipr',
  theme: bizColor.ipr,
  href: '/business#ipr',
  title: '版权保护',
  en: 'IP PROTECTION',
  intro: '秉承“先授权、后传播”的原则，通过技术、行政、司法与社会保护，形成全方位立体化的版权保护体系。',
  sections: [
    {
      id: 'overview', label: '概览', en: 'OVERVIEW', title: '权利人维权的重要渠道',
      blocks: [
        { type: 'stats', items: [
          { value: '近万', unit: '起', label: '维权诉讼' },
          { value: '10', unit: '万+部', label: '涉案作品' },
          { value: '2,400', unit: '余件', label: '累计商标' },
          { value: '490', unit: '余件', label: '软件著作权' },
        ] },
        { type: 'steps', items: [
          { title: '版权确权' }, { title: '内容监测' }, { title: '使用查询' }, { title: '取证保全' }, { title: '版权保护' },
        ] },
      ],
    },
    {
      id: 'platforms', label: '服务平台', en: 'PLATFORMS', title: '技术与服务平台',
      intro: '以“长安链”为底层建设联盟链生态，开发区块链存证平台，并推出三大平台。',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: 'WWW.QSHAO.NET', title: '权哨', text: '全球知识产权一站式服务平台，覆盖全国的知产律师与维权调查团队。', href: 'https://www.qshao.net', external: true },
          { tag: '原创保护', title: '无抄', text: '为“发现侵权难、鉴定抄袭难、诉讼维权难”提供帮助。' },
          { tag: 'WWW.BANQJ.COM', title: '版权街', text: '版权确权存证与资产管理SaaS。', href: 'https://www.banqj.com', external: true },
        ] },
      ],
    },
  ],
};

// 章节顺序（10/22 会议）：网文 → 影视短剧 → 海外 → AI工具 → 版权保护 → 数商
// 颜色贴合各业务的产品与概念：海外红橙（FlareFlow）、数商靛紫、短剧玫红、网文绿、AI 蓝、版权金
export const businessPages: Page[] = [];

const businessIndex: Page = {
  key: 'business',
  theme: [bizColor.global[0], bizColor.data[1]],
  href: '/business',
  title: '业务与产品',
  en: 'BUSINESS & PRODUCTS',
  intro: '以数字内容生产、版权分发、IP衍生与知识产权保护为核心，AI贯穿全业务。',
  sections: [
    {
      id: 'overview', label: '业务总览', en: 'OVERVIEW', title: '好故事，走向全球',
      intro: '网络文学是IP的源头，短剧与出海是增长主线，AI贯穿全流程。',
      blocks: [
        { type: 'steps', items: [
          { title: '网络文学', text: '17K · 四月天 · 海狸故事', color: bizColor.literature },
          { title: '影视·短剧', text: 'FlareFlow · 动画 · 影视', color: bizColor.drama },
          { title: '海外', text: '200+ 国家和地区 · 海外收入40%+', color: bizColor.global },
          { title: 'AI与创作工具', text: '逍遥AI · 次元神笔', color: bizColor.ai },
          { title: '数商', text: '600TB 多模态数据 · 头部大模型厂商全覆盖', color: bizColor.data },
        ] },
      ],
    },
  ],
};

// 产品一览：业务与产品页总览后的第二个板块，读者与观众从首页入口直达这里
businessIndex.sections.push({
  id: 'products', label: '产品一览', en: 'PRODUCTS', title: '产品一览',
  intro: '出海短剧、AI创作与网络文学的重点产品，点击访问。',
  blocks: [
    // 重点产品（10/22 会议指定）：带官方 logo 的大卡片
    { type: 'cards', featured: true, items: [
      { logo: 'flareflow', tag: '海外短剧', title: 'FlareFlow', text: '2025年4月上线，覆盖200+国家和地区、14种语言，注册用户超5,200万；2025年9月登顶美区娱乐免费榜。', href: 'https://flareflow.tv/#/', external: true, color: bizColor.global },
      { logo: 'cyshenbi', tag: 'AI漫剧', title: '次元神笔', text: '2026年初上线的AI漫剧一站式生成工具，从剧本、分镜到配音全程AI协助，并打通全球发行。', href: 'https://www.ciyuanshenbi.com', external: true, color: bizColor.ai },
      { logo: 'xiaoyao', tag: 'AI大模型', title: '逍遥AI', text: '全球首个万字创作大模型“中文逍遥”，支持14种语言创作，服务5万余名创作者。', href: 'https://xiaoyao.ai', external: true, color: bizColor.ai },
      { logo: '17k', tag: '网络文学', title: '17K小说网', text: '核心原创内容平台，中宣部认定“网络文学重点园地”。', href: 'https://www.17k.com', external: true, color: bizColor.literature },
      { logo: '4yt', tag: '网络文学', title: '四月天', text: '古风女频原创小说网站，驻站作者15万+。', href: 'https://www.4yt.net', external: true, color: bizColor.literature },
    ] },
  ],
});

/* ============ IP与作品 /ip ============ */

const ipPage: Page = {
  key: 'ip',
  theme: ['#6c4dff', '#ff5c9a'],
  href: '/ip',
  title: 'IP与作品',
  en: 'IP & WORKS',
  intro: '从网文连载到有声、动漫、短剧、影视的全模态开发。看IP，谈授权，在同一页完成。',
  sections: [
    {
      id: 'wall', label: 'IP墙', en: 'IP WALL', title: '明星IP',
      blocks: [
        { type: 'ipwall', note: '海报与数据取自《中文在线集团介绍》（2026-09）及公司定期报告。点击海报查看作品介绍。', items: [
          { slug: 'luoxiaohei', title: '罗小黑战记', genre: '电影·番剧', forms: ['动画番剧', '电影', '衍生品'], tags: ['《罗小黑战记2》票房超5.33亿', '10余个国家和地区发行'], poster: 'luoxiaohei',
            intro: '2023年，中文在线收购《罗小黑战记》出品方寒木春华控股权。通过精细化运营，罗小黑已构建从动画番剧、番外漫画、动画电影到衍生周边的IP闭环生态，逐步成长为完整的IP宇宙。',
            stats: [
              { value: '5.33', unit: '亿元', label: '《罗小黑战记2》中国大陆票房' },
              { value: '8.7', label: '豆瓣评分' },
              { value: '10', unit: '余个', label: '海外发行国家和地区' },
              { value: '40', unit: '+家', label: '电影联名品牌' },
            ],
            highlights: [
              { k: '2011', v: '动画番剧首播，全网播放量超10亿次' },
              { k: '2012', v: '导演MTJJ组建团队，创办寒木春华' },
              { k: '2019', v: '第一部电影《罗小黑战记》上映，票房破3.15亿元；入围第44届昂西国际动画电影节（唯一华语入围影片）' },
              { k: '2020', v: '日语配音版由Aniplex发行、全线进入日本商业院线，票房突破5.8亿日元' },
              { k: '2025', v: '《罗小黑战记2》7月18日在中国大陆上映，票房破5.33亿元，并在美国、加拿大、马来西亚、澳大利亚、新西兰、泰国、日本、印度尼西亚、法国等10余个国家和地区发行' },
              { k: '2025', v: '获奥斯卡最佳动画长片参评资格，为名单中唯一一部国产动画片；日语配音版上映3天票房破1亿日元，登上Filmarks首映满意度排行榜第1位' },
              { k: '2026', v: '获第二十二届中国国际动漫节“金猴奖”综合奖动画电影金奖；受邀赴英国参加“2026英国·中国电影周”展映' },
              { k: '联名', v: '联名王者荣耀、必胜客、泡泡玛特、名创优品、Akko、和平精英等超40家品牌，覆盖餐饮、潮玩、服饰、数码、非遗等领域' },
            ],
            video: 'luoxiaohei2-trailer', images: ['luoxiaohei2'], source: '《中文在线集团介绍》（2026-09）第18–19页' },
          { slug: 'xiuluowushen', title: '修罗武神', genre: '漫剧', forms: ['网文', '有声', '3D动画'], tags: ['第二季登顶腾讯视频动漫玄幻榜', '有声播放超50亿'], poster: 'xiuluowushen',
            intro: '平台头部网文IP，从网文、有声到3D动画全模态开发，是中文在线“网文连载+IP衍生同步开发”的代表作品。',
            stats: [
              { value: '50', unit: '亿', label: '有声历史播放量' },
              { value: 'TOP2', label: '动画首季腾讯视频动漫热播榜' },
            ],
            highlights: [
              { k: '有声', v: '有声版历史播放量达50亿，位列公司头部有声作品第一' },
              { k: '2023', v: '3D动画于腾讯视频开播，首日拿下站内热搜TOP7、动漫热播榜TOP2' },
              { k: '2026', v: '第二季于2月24日上线，开播即登顶腾讯视频动漫玄幻榜，并冲入国漫榜、热播榜及3D榜单TOP3' },
            ],
            source: '《中文在线集团介绍》（2026-09）第16–17页' },
          { slug: 'yipinbuyi', title: '一品布衣', genre: '短剧', forms: ['网文', '微短剧'], tags: ['前四部全网播放超60亿', '《综艺报》2025年度微短剧'], poster: 'yipinbuyi',
            intro: '17K小说改编的现象级男频爆款微短剧系列，是中文在线“优质文学IP + 精品短剧”双向价值传导的代表作。',
            stats: [
              { value: '60', unit: '亿+', label: '系列前四部全网播放' },
              { value: '30', unit: '亿+', label: '《一品布衣1》全网播放' },
              { value: '900', unit: '%+', label: '《一品布衣1》项目ROI' },
              { value: '1,000', unit: '万+', label: '收藏人数' },
            ],
            highlights: [
              { k: '荣誉', v: '入选“北京大视听”重点网络精品项目；获《综艺报》2025年度影响力名单「年度微短剧」' },
              { k: '荣誉', v: '2025海峡两岸WE短剧大赛优秀热播短剧；入选北京广电“春节必看的45部视听精品”片单' },
              { k: '2026', v: '《一品布衣2：烽火篇》上线次日有效播放量突破1.16亿，登顶红果短剧热播榜总榜' },
              { k: 'AI', v: '《一品布衣》AI重制版已完成评级' },
            ],
            video: 'yipinbuyi', vertical: true, images: ['yipinbuyi1'], source: '《中文在线集团介绍》（2026-09）第20页、2026年半年度报告' },
          { slug: 'yiyou', title: '乙游系统觉醒，我在星际撩疯了', genre: '短剧', forms: ['AI 3D漫剧'], tags: ['火龙漫剧热播榜第1名'], poster: 'yiyou',
            intro: '中文在线自制AI 3D女频漫剧，标志着公司AI漫剧从男频热血向女频情绪价值的全面拓展。',
            stats: [
              { value: 'TOP1', label: '火龙漫剧热播榜、热搜榜' },
              { value: '5', unit: '大语种', label: '海外日榜TOP1' },
            ],
            highlights: [
              { k: '国内', v: '2026年3月登顶火龙漫剧热播榜、热搜榜双榜TOP1，上线后蝉联多日' },
              { k: '海外', v: '短时间内接连登顶英语、西班牙语、法语、意大利语及日语五大语种区域日榜榜首，刷新中国AI漫剧出海记录' },
            ],
            source: '《中文在线集团介绍》（2026-09）第17页、2026年半年度报告' },
          { slug: 'raising', title: 'Raising His Mistress\'s Child', genre: '短剧', forms: ['FlareFlow', '海外短剧'], tags: ['全球播放超2亿', '国际短剧节“最佳女性领导力叙事奖”'], poster: 'raising',
            intro: 'FlareFlow自制短剧，收获过亿热度并取得百万美元以上充值金额，是“全球化验证—本地化再开发”的代表作品。',
            stats: [
              { value: '2', unit: '亿次+', label: '系列全球累计播放' },
            ],
            highlights: [
              { k: '奖项', v: '获2025年国际短剧节“最佳女性领导力叙事奖”' },
              { k: '韩国', v: '本土化改编为韩语版，由韩国知名演员韩彩英领衔主演' },
              { k: '媒体', v: '获国际文娱媒体《Variety》关注报道' },
            ],
            video: 'raising', vertical: true, source: '2025年年度报告、2026年半年度报告' },
          { slug: 'charms99', title: '99 Charms, 99 Heartbreaks', genre: '短剧', forms: ['FlareFlow', '海外短剧'], tags: ['洛杉矶Vertical Shorts Festival最佳短剧奖'], poster: 'charms99',
            intro: 'FlareFlow精品短剧，经历“中文原版—英文版—本土化改编”三步，是FlareFlow本土化方法的代表作。',
            highlights: [
              { k: '奖项', v: '从200余部参赛作品中脱颖而出，获洛杉矶Vertical Shorts Festival「最佳短剧奖」' },
            ],
            source: '官方新闻（2026-09-17）' },
        ] },
      ],
    },
    {
      id: 'trailers', label: '预告片与样片', en: 'TRAILERS', title: '预告片与样片',
      intro: '面向合作方的样片与面向观众的预告片。',
      blocks: [
        { type: 'videos', note: '其余作品的样片可通过 AI 助手联系获取。', items: [
          { title: '罗小黑战记2', sub: '动画电影 · 预告片', src: 'luoxiaohei2-trailer' },
          { title: '魔皇大管家', sub: 'AI修仙题材横屏长剧', src: 'mohuang' },
          { title: '大宋', sub: 'AI仿真人古装短剧', src: 'dasong' },
          { title: 'Raising His Mistress\'s Child', sub: 'FlareFlow · 海外短剧', src: 'raising', vertical: true },
          { title: '一品布衣', sub: '微短剧 · 预告片', src: 'yipinbuyi', vertical: true },
        ] },
      ],
    },
    {
      id: 'library', label: '作品库', en: 'LIBRARY', title: '作品库',
      blocks: [
        // 作品墙：封面取自《中文在线集团介绍2026-09-17》
        { type: 'covers', title: '网络文学', items: [
          { title: '修罗武神', poster: 'works/xiuluo-novel' }, { title: '九星霸体诀', poster: 'works/jiuxing' }, { title: '重回1990', poster: 'works/chonghui1990' }, { title: '风起龙城', poster: 'works/fengqi' }, { title: '超级兵王', poster: 'works/bingwang' }, { title: '平步青云', poster: 'works/pingbu' },
          { title: '第九特区', poster: 'works/dijiu' }, { title: '天衣', poster: 'works/tianyi' }, { title: '逆行者', poster: 'works/nixing' }, { title: '归一', poster: 'works/guiyi' }, { title: '探索者', poster: 'works/tansuo' }, { title: '天下藏局', poster: 'works/tianxia' },
        ] },
        { type: 'covers', title: '名家作品', items: [
          { title: '康熙大帝', sub: '二月河', poster: 'works/kangxi' }, { title: '人民的名义', sub: '周梅森', poster: 'works/renmin' }, { title: '尘埃落定', sub: '阿来', poster: 'works/chenai' }, { title: '文化苦旅', sub: '余秋雨', poster: 'works/wenhua' },
          { title: '乡村教师', sub: '刘慈欣', poster: 'works/xiangcun' }, { title: '推拿', sub: '毕飞宇', poster: 'works/tuina' },
        ] },
        { type: 'covers', title: '短剧', items: [
          { title: '奶宝财神回家后，全府跪求我显灵', poster: 'works/naibao' }, { title: '太子别哭', poster: 'works/taizi' }, { title: '退婚后，我的诗仙身份曝光了', poster: 'works/tuihun' }, { title: '他比前男友更炙热', poster: 'works/qianyou' }, { title: '夜色撩人', poster: 'works/yese' }, { title: 'Oops, I Married My Bestie\'s Brother!', sub: 'FlareFlow', poster: 'works/oops' },
        ] },
        { type: 'covers', title: '漫剧', items: [
          { title: '系统提前三年，可末世真没降临', poster: 'works/mori' }, { title: '我在诡秘世界玩嗨了', poster: 'works/guimi' }, { title: '从娘胎开始逆袭', poster: 'works/niangtai' }, { title: '仙尊归来，只手镇人间', poster: 'works/xianzun' }, { title: '神帝归来', poster: 'works/shendi' }, { title: '超凡进化', poster: 'works/chaofan' },
          { title: '沦陷契约', poster: 'works/xianjie' }, { title: '祭品公主的生存法则', poster: 'works/jipin' }, { title: '法神归来', poster: 'works/fashen' }, { title: '无敌修仙', poster: 'works/wudi' }, { title: '我的消费能无限暴击返现', poster: 'works/xiaofei' }, { title: '全民领主：我能召唤历史名将', poster: 'works/lingzhu' },
        ] },
      ],
    },
    {
      id: 'cases', label: '改编案例', en: 'ADAPTATIONS', title: '改编案例',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: '网文 → 短剧', title: '《一品布衣》', text: '17K小说改编。第一季总播放超30亿，第二季上线次日播放1.16亿，系列累计播放超60亿；AI重制版已完成评级。' },
          { tag: '动画 → 电影 → 衍生', title: '《罗小黑战记》', text: '电影《罗小黑战记2》大陆票房超5.33亿元；授权合作vivo、塔斯汀、名创优品、泡泡玛特旗下“共鸣GONG”等。' },
          { tag: '短剧 → 游戏', title: '《我的26岁女房客》', text: '短剧改编为AVG游戏，2025年10月登陆腾讯视频与Steam。' },
        ] },
      ],
    },
    {
      id: 'license', label: '授权合作', en: 'LICENSING', title: '授权合作',
      intro: '选择授权类型，直达对应负责人。',
      blocks: [
        { type: 'cards', cols: 3, arrow: true, items: [
          { tag: '01', title: '影视改编', href: lic('影视改编') },
          { tag: '02', title: '动漫改编', href: lic('动漫改编') },
          { tag: '03', title: '游戏改编', href: lic('游戏改编') },
          { tag: '04', title: '出版 / 电子书', href: lic('出版 / 电子书') },
          { tag: '05', title: '有声', href: lic('有声') },
          { tag: '06', title: '品牌联名 / 周边', href: lic('品牌联名 / 周边') },
        ] },
      ],
    },
  ],
};

/* ============ 数商服务（业务与产品页的一个章节，/business#data；决策 D7 沿用“数商”原称、D17 并入业务） ============ */

const dataPage: Page = {
  key: 'data',
  theme: bizColor.data,
  href: '/business#data',
  title: '数商服务',
  en: 'DATA SOLUTIONS',
  intro: '面向AI与大模型企业，提供正版、可溯源、合规的数据与语料服务。',
  sections: [
    {
      id: 'services', label: '服务类型', en: 'SERVICES', title: '服务类型',
      blocks: [
        // 服务口径来自 T1 需求文档，描述摘自 2025/2026 年半年度报告
        { type: 'cards', cols: 3, items: [
          { tag: '01', title: '主产数据', text: '有声书及干音、百万量级出版物、原创文学、百万级素材视频、亿级图片、题库、期刊、行业问答、中外文平行语料等近百种文字与多模态语料。' },
          { tag: '02', title: '高端定制', text: '代码推理、日志数据、复杂逻辑等高难数据集；全场景训练语料采集与多模态高难定制加工。' },
          { tag: '03', title: '训练数据与标注', text: '采标检一体的标注数据生产平台，联动高校打造高价值数据集，供应标准化及定制化的模型训练数据。' },
        ] },
      ],
    },
    {
      id: 'scale', label: '资源规模', en: 'SCALE', title: '资源规模',
      blocks: [
        { type: 'stats', items: [
          { value: '600', unit: 'TB', label: '文字、音频、图片、视频数据' },
          { value: '560', unit: '万+', label: '正版数字内容资源' },
          { value: '7', unit: '类', label: '2026年上半年新增高质量数据集' },
          { value: '85', unit: '%', label: '新增数据中垂直专业高难数据占比' },
        ], note: '数据来源：2025年年度报告、2026年半年度报告' },
        { type: 'cards', cols: 2, items: [
          { tag: '合作', title: '洽谈数商合作', text: '告诉 AI 助手你的数据需求，它会转给数商业务负责人。', href: toPartner('data', '数商合作') },
        ] },
      ],
    },
  ],
};

// 10/22：一级栏目更名为“业务版图”（团队导航表）；章节顺序沿用会议记录：网文 → 影视短剧 → 海外 → AI工具 → 版权保护 → 数商
businessIndex.title = '业务版图';
businessIndex.en = 'BUSINESS';
businessIndex.intro = 'IP + AI + 出海：以优质IP为核心，AI贯穿全流程，让好故事走向全球。';
businessPages.push(literature, drama, global, ai, dataPage);

/* ============ 新闻中心 /news ============ */

const news: Page = {
  key: 'news',
  theme: ['#0071ce', '#00c1de'],
  href: '/news',
  title: '新闻中心',
  en: 'NEWSROOM',
  intro: '中文在线的最新动态、媒体报道与媒体资料。',
  sections: [
    { id: 'official', label: '官方新闻', en: 'PRESS', title: '官方新闻', blocks: [{ type: 'news', items: [
      { date: '2026-10-12', title: '中文在线携手泰国正大集团加速短剧本土化布局', tag: '海外', img: 'thai', slug: '2026-10-12-cp-group', text: 'FlareFlow Mini登陆正大集团旗下True的TATANG by TrueID平台并开设专区，双方将在AIGC本土化内容、联合泰国高校培养创作者与发行上深入合作。',
        body: [
          { p: '近日，中文在线与泰国正大集团（CP Group）的战略合作迎来新进展：FlareFlow Mini正式上线泰国本土微短剧平台TATANG by TrueID，并作为独立内容专区持续向泰国用户提供优质本土化竖屏短剧内容。' },
          { p: '这是双方自今年8月宣布战略合作以来，推动合作走向实际落地的关键一步。' },
          { p: '正大集团是泰国规模最大的综合性企业集团之一，业务覆盖电信、数字科技、零售、数字支付与内容媒体等领域，业务网络遍及全球23个国家，并在东南亚市场拥有深厚的本地资源与渠道网络。集团旗下的True Corporation是泰国领先的电信与数字科技公司；TATANG by TrueID则是True Corporation推出的本土微短剧平台，专注于为泰国观众筛选并呈现国际短剧内容。依托正大集团覆盖电信、数字支付、零售与品牌营销的消费生态，TATANG在内容分发与用户触达方面具备天然优势。' },
          { p: '本次战略合作围绕内容本土化、人才孵化、渠道分发三个方向同步推进，构建从制作、创作到分发的产业链协同。' },
          { h: '内容：本土化改编，而非简单翻译' },
          { p: '中文在线与正大集团将共同推动旗下FlareFlow及代表性热门作品在泰国进行本土化改编。相关作品并非简单翻译，而是将围绕泰国本土的人物设定、场景语言与文化语境进行重新创作，并在制作过程中引入AIGC能力，把中文在线的内容IP与短剧制作经验，与正大集团的本地创作者网络和市场资源相结合。' },
          { h: '人才：联合泰国高校孵化创作者' },
          { p: '双方计划与泰国领先学术机构联合开展短剧人才孵化项目，围绕故事创作、拍摄制作与创意能力培养泰国本地年轻创作者，搭建从教育到产业的人才通道。' },
          { h: '渠道：TATANG开设FlareFlow专区' },
          { p: 'FlareFlow Mini已在TATANG正式上线，并设立独立的FlareFlow内容专区。后续双方还将依托正大与True集团的消费生态，进一步提升FlareFlow内容在泰国市场的触达效率，并将陆续把更多本土化短剧内容带到泰国用户面前。' },
          { p: '目前，FlareFlow全球注册用户已超过5200万。此次合作是中文在线与正大集团在泰国短剧市场迈出的重要一步。接下来，以泰国为起点，双方将继续推动本土化内容与渠道能力在东南亚市场的拓展。' },
        ] },
      { date: '2026-10-08', title: '连续两年入选！中文在线再登创业邦“2026中国企业全球化新势力100强”', tag: '荣誉', img: 'global100', slug: '2026-10-08-global100', text: '入选“引领型”40强。2025年海外收入同比增长123.94%，占比超40%，FlareFlow登顶美区应用商店娱乐榜。',
        body: [
          { p: '近日，第五届全球数字贸易博览会在杭州举行。会上，创业邦正式发布“2026数字贸易·中国企业全球化新势力100强”榜单。中文在线凭借在短剧出海领域的持续突破，再度入选该榜单，并稳居“引领型”企业之列。' },
          { p: '本次评选采用“问卷征集+调研访谈+专家评审+第三方数据核验”相结合的模式，围绕全球化布局深度、产品竞争力、经营规模、合规稳健度、品牌认知度五大维度综合评估。榜单分为“引领型”和“成长型”两个组别，其中“引领型”企业共40家，要求2025年海外营收不低于1500万美元，已在海外市场建立起规模化优势。' },
          { h: '短剧出海持续突破' },
          { p: '本次入榜，是中文在线短剧出海持续突破的一个缩影。旗下海外短剧平台FlareFlow于2025年4月上线，当年即登顶美区Google Play与App Store娱乐应用免费榜双榜第一，累计注册用户超3300万，覆盖全球200多个国家和地区。2025年，中文在线海外收入同比增长123.94%，占总营收的比重已超过四成。' },
          { quote: '国际化不是“坐在国内看海外数据”，而是必须进入当地市场、理解当地用户、建立当地团队。', by: '中文在线集团创始人、董事长兼总裁 童之磊' },
          { p: '公司将继续以IP为锚、以AI为帆，持续构建全球化短剧生态，为海外用户带来优质短剧内容。' },
        ] },
      { date: '2026-10-16', title: '中文在线亮相戛纳电视节，FlareFlow携手Digicel拓展中南美洲市场', tag: '海外', img: 'cannes', text: 'FlareFlow亮相戛纳MIPCOM电视节，并与加勒比电信运营商Digicel签约，进一步拓展中南美洲市场。' },
      { date: '2026-09-24', title: '港式警匪片《黑白潜行3》开机，横琴国际影视城持续“上新”', tag: '影视', img: 'hengqin', href: 'https://www.col.com/article/2110228778050355200', text: '安志杰、曾志伟主演的《黑白潜行3》在横琴国际影视城开机。基地拥有90余个实景、1.7万平方米棚区，并向琴澳合拍、文旅与AI虚拟制片延伸。' },
      { date: '2026-09-17', title: 'FlareFlow精品短剧99 Charms, 99 Heartbreaks荣获洛杉矶Vertical Shorts Festival「最佳短剧奖」', tag: '短剧', img: 'flareflow-award', href: 'https://www.col.com/article/2110227594900111360', text: '从200余部参赛作品中脱颖而出。该剧经历“中文原版—英文版—本土化改编”三步，是FlareFlow本土化方法的代表作。' },
      { date: '2026-09-11', title: 'FlareFlow登陆Whale TV，海外爆款短剧首登南美电视大屏', tag: '海外', img: 'whaletv', href: 'https://www.col.com/article/2110226608613720064', text: 'FlareFlow上线Whale TV智能电视操作系统，率先覆盖南美；Whale TV合作400多个电视品牌、月活设备超4,750万台。' },
      { date: '2026-08-31', title: '第十六届数博会｜中文在线童之磊：AI开启数字出版新未来', tag: 'AI', img: 'expo', href: 'https://www.col.com/article/2110225951496306688', text: '童之磊在数博会主论坛分享AI如何重塑选题、编辑到发行的出版全流程，以及中文在线的实践。' },
      { date: '2026-08-19', title: '中文在线数字文化出海创作基地正式签约', tag: '海外', img: 'lingang', href: 'https://www.col.com/article/2090001382265290752', text: '与上海临港新片区管委会签署框架协议，共建数字文化出海创作基地。' },
      { date: '2026-07-30', title: '中文在线亮相2026 ChinaJoy短剧创新论坛，AI驱动短剧生态进化', tag: '短剧', img: 'chinajoy', href: 'https://www.col.com/article/2082717718552739840', text: 'AI正从提效工具成长为短剧生态的引擎；AI漫剧制作成本较传统动画下降70%以上。' },
    ] }] },
    { id: 'media', label: '媒体报道', en: 'MEDIA', title: '媒体报道', blocks: [{ type: 'news', items: [
      { date: '2025-08-01', title: '破10亿！“北京大视听”重点网络精品项目《一品布衣》热播', tag: '影视', img: 'yipinbuyi', href: 'https://www.col.com/article/1951205105390813184', text: '改编自17K小说的105集微短剧，红果平台播放量破10亿，单日播放峰值达2.38亿。' },
      { date: '2025-06-25', title: '中文在线童之磊：以AI赋能全球内容产业', tag: 'AI', img: 'ai', href: 'https://www.col.com/article/1937825796479483904', text: '上海证券报专访：AI降低内容生产成本，让头部IP更加稀缺、更有价值。' },
    ] }] },
    { id: 'presskit', label: '媒体资料', en: 'PRESS KIT', title: '媒体资料包', blocks: [
      { type: 'downloads', items: [
        { title: '官方 Logo', meta: 'PNG / SVG · 待提供' },
        { title: '官方图片库', meta: 'ZIP · 待提供' },
        { title: '公司简介', meta: 'PDF · 待提供' },
      ] },
      { type: 'cards', cols: 2, items: [
        { tag: '媒体', title: '采访与报道需求', text: '联系品牌公关团队。', href: toPartner('media', '媒体采访') },
      ] },
    ] },
  ],
};

/* ============ 投资者关系 /investors ============ */

export const irHighlights: Stat[] = [
  { value: '200', unit: '+', label: '业务覆盖国家和地区' },
  { value: '40', unit: '%+', label: '海外收入占比' },
  { value: '5,200', unit: '万+', label: 'FlareFlow累计注册用户' },
  { value: '560', unit: '万+', label: '数字内容资源' },
  { value: '90', unit: '%+', label: 'AI翻译成本下降' },
  { value: '20', unit: '倍+', label: 'AI投放效率提升' },
];

const investors: Page = {
  key: 'investors',
  theme: ['#1b3a8c', '#00c1de'],
  href: '/investors',
  title: '投资者关系',
  en: 'INVESTOR RELATIONS',
  intro: '',
  sections: [
    { id: 'highlights', label: '投资亮点', en: 'HIGHLIGHTS', title: '投资亮点', blocks: [
      { type: 'stats', items: irHighlights, note: '数据来源：2026年董事长致股东信、2026年半年度报告' },
    ] },
    { id: 'letter', label: '致股东信', en: 'LETTER', title: '董事长致股东信', blocks: [
      { type: 'letter', title: '“AI+全球化”双轮驱动，开启新一轮增长曲线',
        lead: '中文在线不再只是一家IP内容公司，而是一家具备全球内容供给能力、AI技术驱动的、全产业链运营的新型数字内容科技公司。',
        themes: [
          { k: '从“算力竞争”到“创力竞争”', v: 'AI是人类创造力的倍增器。' },
          { k: '从“爆款竞争”到“基建竞争”', v: '基础设施是内容生态的护城河。' },
          { k: '从“流量竞争”到“复利竞争”', v: '“生产力J曲线”将重新定价AI内容产业。' },
        ],
        author: '童之磊', role: '中文在线集团董事长兼总裁', date: '2026年4月' },
    ] },
    { id: 'filings', label: '公告与报告', en: 'FILINGS', title: '定期报告与公告', intro: '列表在本站浏览，PDF原文在巨潮资讯打开。', blocks: [
      { type: 'docs', href: cninfoAnnouncements, cols: [
        { title: '定期报告', items: [
          { date: '2026-08-26', title: '2026年半年度报告', href: 'https://static.cninfo.com.cn/finalpage/2026-08-26/1225504423.PDF' },
          { date: '2026-04-23', title: '2026年第一季度报告', href: 'https://static.cninfo.com.cn/finalpage/2026-04-23/1225157283.PDF' },
          { date: '2026-04-23', title: '2025年年度报告', href: 'https://static.cninfo.com.cn/finalpage/2026-04-23/1225157276.PDF' },
          { date: '2026-04-23', title: '2025年度社会责任报告', href: 'https://static.cninfo.com.cn/finalpage/2026-04-23/1225157301.PDF' },
        ] },
        { title: '近期公告', items: [
          { date: '2026-10-08', title: '关于终止发行H股并在香港联合交易所上市的公告', href: 'https://static.cninfo.com.cn/finalpage/2026-10-08/1225596000.PDF' },
          { date: '2026-06-08', title: '关于董事辞任的公告', href: 'https://static.cninfo.com.cn/finalpage/2026-06-08/1225356380.PDF' },
          { date: '2026-05-15', title: '关于聘任证券事务代表的公告', href: 'https://static.cninfo.com.cn/finalpage/2026-05-15/1225309978.PDF' },
        ] },
      ] },
    ] },
    { id: 'ir-contact', label: '投资者联系', en: 'CONTACT IR', title: '投资者联系', blocks: [
      { type: 'contact', items: [{ k: 'IR 邮箱', v: 'ir@col.com' }], cta: { label: '互动易提问', href: cninfo } },
    ] },
  ],
};

/* ============ 加入我们 /join ============ */

const join: Page = {
  key: 'join',
  theme: ['#ff5c9a', '#ffc53d'],
  href: '/join',
  title: '加入我们',
  en: 'JOIN US',
  intro: '持续提升人才密度，年轻化人才布局，保持组织活力和创造力。',
  sections: [
    { id: 'positions', label: '社会招聘', en: 'CAREERS', title: '社会招聘', blocks: [
      { type: 'spotlight', kicker: 'CAREERS · 社会招聘', title: '查看在招岗位', text: '岗位信息、职位要求与简历投递，均在中文在线官方招聘网站完成。', cta: '前往招聘网站', href: 'https://zhongwenzaixian.zhiye.com/' },
    ] },
  ],
};

/* ============ 合作 /partner（所有商务入口集中在一页） ============ */

const partner: Page = {
  key: 'partner',
  theme: ['#0071ce', '#00c1de'],
  href: '/partner',
  title: '合作',
  en: 'PARTNER WITH US',
  intro: '内容引进、IP授权、数商、海外、供应商、媒体……选择合作方向，AI 助手会把你的需求转给对应负责人。',
  sections: [
    { id: 'types', label: '合作方向', en: 'PARTNERSHIP', title: '可以和我们合作什么', intro: '从内容、IP 到数据与出海，覆盖内容产业的上下游。选择方向，和 AI 助手说说你的需求。', blocks: [
      { type: 'contacts', items: [
        { id: 'content', tag: '内容合作', title: '引进内容 / 渠道合作', text: '网文、有声、短剧的内容引进与分发，平台和终端渠道合作。', color: bizColor.literature },
        { id: 'license', tag: 'IP授权', title: 'IP授权', text: '影视、动漫、游戏、出版、有声与品牌联名授权。', color: bizColor.drama },
        { id: 'data', tag: '数商', title: '数商合作', text: '面向 AI 与大模型企业的正版数据、定制数据与标注服务。', color: bizColor.data },
        { id: 'overseas', tag: '海外', title: '海外合作', text: '短剧与网文的海外发行、引进与联合制作，FlareFlow 平台合作。', color: bizColor.global },
        { id: 'investment', tag: '投资', title: '投资合作', text: '战略直投与产业基金，围绕内容、AI 与出海的产业布局。', color: bizColor.ai },
        { id: 'supplier', tag: '供应商', title: '成为供应商', text: '内容、技术、制作与渠道代理等供应商准入。', color: bizColor.ipr },
        { id: 'media', tag: '媒体', title: '媒体采访', text: '采访与报道需求，以及媒体资料获取。', color: bizColor.global },
      ] },
    ] },
    { id: 'form', label: '在线留言', en: 'MESSAGE', title: '在线留言', intro: '选择合作类型并留下联系方式，我们会安排对应负责人联系您。', blocks: [
      { type: 'form', topics: ['引进内容 / 渠道合作', 'IP授权', '数商合作', '海外合作', '投资合作', '成为供应商', '媒体采访', '其他'] },
    ] },
    { id: 'hq', label: '公司总部', en: 'HEADQUARTERS', title: '公司总部', blocks: [
      { type: 'contact', items: [{ k: '地址', v: '北京市东城区安定门东大街28号雍和大厦E座6层' }] },
    ] },
  ],
};


/* ============ 板块顺序（按信息重要性） ============ */

// 按给定 id 顺序重排页面板块；未列出的板块保持原相对顺序排在后面
function reorder(p: Page, ids: string[]) {
  const rank = (id: string) => (ids.includes(id) ? ids.indexOf(id) : ids.length);
  p.sections = [...p.sections].sort((a, b) => rank(a.id) - rank(b.id));
}
// 关于我们（10/22 会议）：介绍 → 企业文化（原管理团队位置）→ 发展历程 → 发展战略（自投资者关系移入）→ 荣誉 → 证照
reorder(about, ['intro', 'culture', 'history', 'strategy']);
// IP与作品：IP墙 → 预告片 → 改编案例 → 授权（转化）→ 作品库（长尾）
reorder(ipPage, ['wall', 'trailers', 'cases', 'license', 'library']);
// 数商服务（10/22 会议）：只保留服务类型与资源规模
reorder(dataPage, ['services', 'scale']);
// 投资者关系（10/22 会议：只留基础信息）：亮点 → 致股东信 → 报告与公告 → 联系；实时股价在题图右侧的行情卡片
reorder(investors, ['highlights', 'letter', 'filings', 'ir-contact']);

// 合作：卡片按受众优先级排列（海外 → 数商 → IP授权 → 内容渠道 → 投资 → 供应商 → 媒体），表单选项同序
{
  const order = ['overseas', 'data', 'license', 'content', 'investment', 'supplier', 'media'];
  const block = partner.sections[0].blocks[0];
  if (block.type === 'contacts') block.items.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const form = partner.sections[1].blocks[0];
  if (form.type === 'form') form.topics = ['海外合作', '数商合作', 'IP授权', '引进内容 / 渠道合作', '投资合作', '成为供应商', '媒体采访', '其他'];
}
// 在线留言表单已移除（10/22）：咨询改由 AI 助手转交
partner.sections = partner.sections.filter((x) => !x.blocks.some((b) => b.type === 'form'));
// 合作页顶部：AI 助手入口（说明需求后由 AI 转给对应负责人）
partner.sections.unshift({ id: 'ask-ai', label: '问 AI 助手', en: 'ASK AI', bare: true, blocks: [{ type: 'aichat', title: '不知道该找谁？直接问 AI 助手', text: '告诉 AI 你想合作什么，它会整理你的需求并转给对应的负责人，无需自己查找联系方式。', cta: '和 AI 助手聊聊' }] });

/* ============ 导航 ============ */

export const pages = { about, business: businessIndex, ip: ipPage, data: dataPage, news, investors, join, partner };
// 导航顺序按受众优先级（T1）：先服务第一顺位的海外合作方与数商（业务与产品含数商、IP），再到投资者（第二顺位），
// 然后是建立信任的关于我们与新闻，再到求职者（第三顺位）；“合作”作为转化按钮固定在最右
export const navOrder: Page[] = [businessIndex, ipPage, investors, news, about, join, partner];

// 每个页面的“下一章”，用于页面底部的连续导航
export const nextOf: Record<string, Page> = {
  business: ipPage, ip: investors, investors: news,
  news: about, about: join, join: partner, partner: businessIndex,
};

/* ============ 首页 ============ */

export const home = {
  intro: '中文在线以数字内容生产、版权分发、IP衍生与知识产权保护为核心，以“夯实内容、决胜IP、国际优先、AI赋能”为发展战略，致力于推动科技与文化融合发展。',
  // 决策 D8：可选的受众入口条（10/22 会议：创作者第3、读者观众第4；icon 见 index.astro）
  audiences: [
    { label: '合作伙伴', hint: '内容 · 授权 · 海外', href: '/partner', icon: 'handshake' },
    { label: '数商客户', hint: 'AI 数据与语料', href: '/business#data', icon: 'data' },
    { label: '创作者', hint: '投稿 · 签约', href: '/business#literature-writers', icon: 'pen' },
    { label: '读者与观众', hint: '产品与下载', href: '/business#products', icon: 'play' },
    { label: '投资者', hint: '报告 · 公告 · 联系', href: '/investors', icon: 'chart' },
    { label: '求职者', hint: '社招岗位', href: '/join', icon: 'bag' },
  ],
  news: news.sections[0].blocks[0].type === 'news' ? news.sections[0].blocks[0].items.slice(0, 3) : [],
  // IP 精选：取 IP 墙前 4 个（罗小黑、修罗武神、一品布衣、乙游觉醒）；海报墙用全部
  wall: (ipPage.sections.find((x) => x.id === 'wall')!.blocks[0] as Extract<Block, { type: 'ipwall' }>).items,
  get ip() { return this.wall; },
};

/* ============ AI 助手（右下角） ============ */
// 原型阶段未接入大模型：按关键词匹配预设问答，答案附带站内链接。正式版接入模型后替换。
export const aiAssistant = {
  title: '中文在线 AI 助手',
  greeting: '你好！我可以帮你快速找到中文在线的业务、IP作品和投资者信息，也可以把你的合作需求转给对应负责人。试试下面的问题：',
  fallback: '这个问题我暂时回答不了（原型阶段尚未接入大模型）。你可以试试下面的问题；想找人合作，直接说“我想合作”。',
  suggestions: ['我想找你们合作', '中文在线是做什么的？', '怎么洽谈IP授权？', '有哪些产品？', '在哪里看财报和股价？'],
  // 合作 / 联系：在对话里弹出一张留言卡（填空 + 点选合作方向），发送后模拟“已转交负责人”
  contact: {
    keywords: ['合作', '联系', '对接', '洽谈', '商务', '负责人', '找人'],
    a: '好的！填一下这张卡片，我会整理后转给对应负责人：',
    org: { label: '公司 / 机构', placeholder: '例如：星河影业' },
    who: { label: '姓名 · 职位', placeholder: '例如：张三 · 制片人' },
    topic: '想合作什么',
    need: { label: '需求简述', placeholder: '一两句话说说你的想法' },
    reach: { label: '联系方式', placeholder: '电话或邮箱' },
    submit: '发送给负责人',
    missing: '请选一个合作方向，并留下联系方式',
    received: '收到！已整理为一条「{topic}」需求，会转给对应负责人，一般 1–2 个工作日内联系你。（原型阶段不会真的发送）',
    topics: [
      { id: 'overseas', name: '海外合作' },
      { id: 'data', name: '数商合作' },
      { id: 'license', name: 'IP授权' },
      { id: 'content', name: '内容 / 渠道' },
      { id: 'investment', name: '投资合作' },
      { id: 'supplier', name: '成为供应商' },
      { id: 'media', name: '媒体采访' },
      { id: 'other', name: '其他' },
    ],
  },
  faq: [
    { q: '中文在线是做什么的？', keywords: ['做什么', '介绍', '公司', '是谁', '业务', '简介'],
      a: '中文在线是AI驱动的全球领先数字文娱平台，2000年源于清华大学，2015年在深交所创业板上市（300364）。业务覆盖网络文学、影视·短剧、海外、AI与创作工具和数商。',
      link: { label: '看业务版图', href: '/business' } },
    { q: '怎么洽谈IP授权？', keywords: ['ip', '改编', '罗小黑', '一品布衣', '修罗武神', '乙游'],
      a: '「IP作品」页有IP墙、预告片和改编案例，点击海报可以看每部作品的介绍。想洽谈授权，跟我说“我想合作”，填一张留言卡，我会转给IP授权负责人。',
      link: { label: '看IP作品', href: '/ip#wall' } },
    { q: '有哪些产品？', keywords: ['产品', '17k', '四月天', '逍遥', '次元神笔', 'app', '下载', '小说', '看剧'],
      a: '主要产品有 FlareFlow（海外短剧）、次元神笔（AI漫剧）、逍遥AI（AI创作）、17K小说网和四月天（网络文学）。',
      link: { label: '看产品一览', href: '/business#products' } },
    { q: 'FlareFlow 是什么？', keywords: ['flareflow', '短剧', '海外', '出海'],
      a: 'FlareFlow是中文在线的海外短剧平台，覆盖200多个国家和地区，截至2026年6月注册用户超5,200万。',
      link: { label: '看海外业务', href: '/business#global' } },
    { q: '你们提供哪些AI训练数据？', keywords: ['数据', '数商', '语料', '训练', '大模型', '标注'],
      a: '我们为AI与大模型企业提供主产数据、高端定制数据与训练数据标注服务，数据总量600TB，覆盖文字、音频、图片、视频，已实现国内头部大模型厂商全覆盖。',
      link: { label: '看数商服务', href: '/business#data' } },
    { q: '在哪里看财报和股价？', keywords: ['财报', '公告', '年报', '季报', '投资', '股价', '股票', '300364', '股东'],
      a: '「投资者关系」页有实时股价、投资亮点、董事长致股东信和定期报告（PDF直链巨潮资讯）。A股代码300364。',
      link: { label: '去投资者关系', href: '/investors' } },
    { q: '公司有哪些历史和荣誉？', keywords: ['历史', '历程', '成立', '清华', '创业', '文化', '荣誉', '资质', '战略', '关于'],
      a: '在「关于我们」可以看到公司简介、企业文化、“三次创业”发展历程和发展战略。',
      link: { label: '看发展历程', href: '/about#history' } },
    { q: '最近有什么新闻？', keywords: ['新闻', '动态', '最新', '活动', '发布', '消息'],
      a: '最新动态都在「新闻中心」，每条都附图片和摘要，点开就是原文。',
      link: { label: '去新闻中心', href: '/news' } },
    { q: '有哪些招聘岗位？', keywords: ['招聘', '工作', '岗位', '实习', '校招', '社招', '应聘', '简历'],
      a: '社会招聘岗位入口在「加入我们」页。',
      link: { label: '看职位', href: '/join#positions' } },
    { q: '公司在哪里？', keywords: ['电话', '地址', '热线', '总部', '在哪'],
      a: '总部在北京市东城区安定门东大街28号雍和大厦E座6层。想洽谈合作，跟我说“我想合作”就好。',
      link: { label: '看公司总部', href: '/partner#hq' } },
  ],
};

/* ============ 界面文字（按钮、标签等；英文版在 en.ts 中同名导出） ============ */
export const ui = {
  home: '首页',
  homeAria: '首页',
  mainNav: '主导航',
  mobileNav: '移动端导航',
  openMenu: '打开菜单',
  toggleTheme: '切换深色 / 浅色',
  stockPending: '中文在线实时股价（腾讯财经）',
  crumbs: '面包屑',
  pageNav: '本页导航',
  next: '下一章 · NEXT',
  // 首页
  heroL1: '更好内容',
  heroL2: '更好生活',
  heroSub: 'AI驱动的全球领先数字文娱平台',
  ctaPartner: '合作咨询',
  ctaWorks: '看看我们的作品',
  scrollDown: '向下滚动',
  audienceAria: '按身份快速进入',
  audienceLabel: '你是',
  bizTitle: ['业务', '版图'],
  bizAll: '全部业务',
  newsTitle: '新鲜事',
  newsAll: '全部新闻',
  ipTitle: ['IP', '作品'],
  ipAll: '全部作品',
  worksAria: '代表作品',
  // 业务海报上的一句话亮点
  bizHook: {
    literature: '560万种内容 · 450万名原创作者',
    drama: '横琴基地 · 出海短剧 · 影视改编',
    global: '覆盖 200+ 国家和地区 · 用好故事连接世界',
    data: '600TB 多模态数据 · 头部大模型厂商全覆盖',
    ai: '逍遥AI · 次元神笔',
  } as Record<string, string>,
  // 内容块
  visitSite: '访问官网',
  learnMore: '了解更多',
  linkSoon: '链接待提供',
  readFull: '阅读全文',
  letterSoon: '（全文待从官网迁入，正式版在此处展开完整信件内容。）',
  all: '全部',
  detailSoon: '详情页待上线',
  readSource: '阅读原文',
  cninfoAll: '巨潮资讯查看全部',
  talkLicense: '洽谈授权',
  newsOwn: '本站发布',
  readArticle: '阅读全文',
  askAiAbout: '和 AI 助手聊聊',
  backToList: '返回',
  ipHighlights: '作品亮点',
  ipTrailer: '预告片',
  ipGallery: '海报',
  ipLicense: '洽谈这部作品的授权',
  ipMore: '更多作品',
  sourceLabel: '资料来源',
  newsMore: '更多新闻',
  play: '播放',
  videoSoon: '视频待接入',
  sendInquiry: '发送咨询',
  form: { topic: '合作类型', name: '姓名', namePh: '您的姓名', company: '公司 / 机构', companyPh: '公司名称', title: '职务', titlePh: '您的职务', email: '邮箱', phone: '电话 / 微信', phonePh: '便于我们联系您', message: '需求描述', messagePh: '简单介绍您的需求，我们会尽快安排对应负责人联系您', submit: '提交咨询' },
  photoSoon: '照片待提供',
  // 合作条
  ctaBandTitle: '有合作想法？和我们聊聊',
  ctaBandSub: '内容引进 · IP授权 · 数商合作 · 海外合作 · 供应商准入',
  // 页脚
  footerWords: ['更好内容', 'BETTER CONTENT', '更好生活', 'BETTER LIFE'],
  hotline: '服务热线',
  fax: '传真',
  footerBiz: '业务与产品',
  follow: '关注我们',
  qr: '二维码',
  licenses: '资质证照',
  fileSoon: '文件待提供',
  rights: '版权所有',
  // AI 助手
  aiNote: '原型 · 预设问答，未接入大模型',
  close: '关闭',
  aiPlaceholder: '输入问题，或说“我想合作”',
  aiInput: '输入问题',
  send: '发送',
  aiFab: '问问 AI 助手',
  aiNudge: '有问题？问我就行：找业务、看IP、联系合作负责人都可以。',
  aiNudgeGo: '开始提问',
  // 投资者行情卡
  quoteCode: 'A股 · 300364.SZ · 深交所创业板',
  quoteLoading: '行情加载中',
  quoteLive: '实时行情',
  quoteFail: '行情暂不可用',
  quoteMeta: ['涨跌幅', '总市值'],
  quoteMore: '完整行情',
};
