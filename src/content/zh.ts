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
export type Card = { id?: string; logo?: string; title: string; text?: string; meta?: string; tag?: string; href?: string; external?: boolean; color?: [string, string] };
export type Cover = { title: string; sub?: string; poster?: string };
export type Person = { name: string; role: string; text?: string; email?: string; phone?: string };
// poster：/public/posters 下的海报（取自《中文在线集团介绍2026-09-17》）；wide=横版海报，卡片内完整显示
export type IP = { title: string; genre: string; forms: string[]; tags: string[]; poster?: string; wide?: boolean };

export type Block =
  | { type: 'text'; paras: string[]; lead?: boolean }
  | { type: 'stats'; items: Stat[]; note?: string }
  | { type: 'cards'; items: Card[]; cols?: 2 | 3 | 4; featured?: boolean }
  | { type: 'covers'; items: Cover[]; title?: string }
  | { type: 'tags'; title?: string; items: string[] }
  | { type: 'steps'; items: { title: string; text?: string; color?: [string, string] }[] }
  | { type: 'timeline'; items: { year: string; text: string }[] }
  | { type: 'journey'; items: { year: string; text: string; era?: string }[] }
  | { type: 'honors'; items: { year: string; items: string[] }[] }
  | { type: 'quote'; text: string; author?: string; role?: string; href?: string; hrefLabel?: string }
  | { type: 'letter'; title: string; lead: string; themes: { k: string; v: string }[]; author: string; role: string; date: string }
  | { type: 'news'; items: { date: string; title: string; tag?: string; img?: string; text?: string; href?: string }[] }
  | { type: 'docs'; cols: { title: string; items: { date: string; title: string; href?: string }[] }[]; href: string }
  | { type: 'contact'; items: { k: string; v: string }[]; cta?: { label: string; href: string } }
  | { type: 'ipwall'; items: IP[]; note?: string }
  | { type: 'aichat'; title: string; text: string; cta: string }
  | { type: 'videos'; items: { title: string; sub?: string; vertical?: boolean; src?: string }[]; note?: string }
  | { type: 'people'; items: Person[]; cols?: 2 | 3 | 4 }
  | { type: 'contacts'; items: { id: string; tag: string; title: string; text: string; people: Person[] }[] }
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
  phone: '010-51667567',
  fax: '010-85195550',
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
        { type: 'text', lead: true, paras: ['中文在线集团成立于2000年，2015年1月21日在深交所创业板上市，成为中国“数字出版第一股”（股票代码：300364）。以数字内容生产、版权分发、IP衍生与知识产权保护为核心；以“夯实内容、决胜IP、国际优先、AI赋能”为发展战略，致力于推动科技与文化融合发展。'] },
        // 注意：现官网首页与“公司介绍”页存在两组口径（550万/450万/46万/56TB 与 560万/400万/49万/600TB），上线前须以财报口径统一
        { type: 'stats', items: [
          { value: '560', unit: '万+', label: '积累数字内容资源' },
          { value: '400', unit: '万+', label: '平台累计注册创作者' },
          { value: '49', unit: '万+', label: '小时音频资源' },
          { value: '827', unit: '人', label: '员工（2025年末）' },
        ], note: '数据来源：col.com 公司介绍、2025年年度报告、2025年度社会责任报告；内容资源与音频口径待统一' },
        { type: 'text', paras: [
          '中文在线以自有原创平台、知名作家、版权机构为正版数字内容来源，旗下拥有17K小说网、四月天小说网、科幻厂牌“奇想宇宙”、悬疑厂牌“谜想计划”等原创平台。',
          '以文学IP为核心，打造“网文连载+IP衍生同步开发”的创作模式，通过音频、漫画、动态漫、动画、短剧、影视、游戏以及文创周边等全模态开发，实现从单一网文的生产和经营向文学IP全生命周期生产和经营的进化。',
          '公司在美国、新加坡、日本设有子公司，海外短剧平台FlareFlow覆盖200多个国家和地区；在AI大模型与多模态方向持续投入，2023年发布AI大模型“中文逍遥”。',
        ] },
      ],
    },
    {
      id: 'culture', label: '企业文化', en: 'CULTURE', title: '更好内容，更好生活',
      blocks: [
        { type: 'cards', cols: 4, items: [
          { tag: '使命', title: '更好内容，更好生活', text: 'Better content, Better life' },
          { tag: '愿景', title: '打造百年组织，创造文化宇宙', text: 'Build a sustainable organization, Create a cultural universe' },
          { tag: '十年目标', title: '数字文化内容领跑者', text: 'To be the leader in digital content' },
          { tag: '价值观', title: '为客户持续创造价值、创新、求真务实、自我进化', text: 'Customer Value, Innovation, Truthfulness, Evolution' },
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
      { type: 'cards', cols: 4, items: [
        { tag: '01', title: '夯实内容', text: '560万+正版内容资源、400万+注册创作者。', href: '/business#literature' },
        { tag: '02', title: '决胜IP', text: 'IP从“消耗型资产”变为“可循环资产”。', href: '/ip' },
        { tag: '03', title: '国际优先', text: 'FlareFlow、UniReel与横琴基地，构建国际短剧基础设施。', href: '/business#global' },
        { tag: '04', title: 'AI赋能', text: '“逍遥”覆盖约60%文学生产流程，制作周期缩短75%。', href: '/business#ai' },
      ] },
    ] },
    {
      id: 'honors', label: '企业荣誉', en: 'HONORS', title: '企业荣誉',
      blocks: [
        { type: 'honors', items: [
          { year: '2025', items: ['《罗小黑战记2》获“2025年度最具商业价值动漫IP”、中国动漫金龙奖年度十佳', '《一品布衣》获《综艺报》“2025年度微短剧”、北京国际电影节“最具商业价值微短剧奖”', 'FlareFlow自制剧获2025国际短剧节“最佳女性领导力叙事奖”'] },
          { year: '2024', items: ['Sereal+入选中国国际新媒体短片节“全国微短剧出海平台TOP10”', '海南岛国际电影节“最佳悬疑短剧奖”“最佳视觉效果奖”'] },
          { year: '2023', items: ['网络文学海外传播平台奖（中国作协网络文学中心）', '中国“AIGC×泛内容”行业50家最有价值公司', '入选北京市通用人工智能产业创新伙伴计划'] },
          { year: '2021', items: ['“十三五”民营书业全民阅读推广单位', '“数字农家书屋”获中国十佳阅读扶贫项目', '2020-2021年度数字出版优秀品牌'] },
          { year: '2018', items: ['第四届中国出版政府奖“先进出版单位奖”', '第三届“首都文化企业30强”'] },
          { year: '2012', items: ['国家版权局“全国版权示范单位”', '中关村新锐企业百强'] },
        ] },
      ],
    },
    {
      id: 'licenses', label: '资质证照', en: 'LICENSES', title: '资质证照',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: '增值电信', title: '京ICP证010590号', text: '增值电信业务经营许可证' },
          { tag: '网络文化', title: '京网文（2023）4750-133号', text: '网络文化经营许可证' },
          { tag: 'ICP备案', title: '京ICP备09030667号-23', text: '网站备案号' },
          { tag: '公安备案', title: '京公网安备 11010102003415号', text: '公安机关互联网站备案' },
          { tag: '营业执照', title: '营业执照', text: '点击查看', href: 'https://cdn.static.17k.com/material_picture/2025/1756720858269.png', external: true },
          { tag: '待补充', title: '出版物经营许可证等', text: '其他行业资质待法务提供' },
        ] },
      ],
    },
  ],
};

/* ============ 业务与产品 /business（一整页：总览 + 各业务章节） ============ */

const literature: Page = {
  key: 'literature',
  theme: bizColor.literature,
  href: '/business#literature',
  title: '网络文学',
  en: 'ONLINE LITERATURE',
  intro: '以自有原创平台、知名作家、版权机构为正版数字内容来源，向多终端、多平台、全媒体分发数字阅读产品。',
  sections: [
    {
      id: 'platforms', label: '原创平台', en: 'PLATFORMS', title: '原创平台与产品',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { id: '17k', tag: '核心平台', title: '17K小说网', text: '公司核心的原创内容生产平台，覆盖玄幻奇幻、都市言情、武侠仙侠、青春校园等全品类。', href: 'https://www.17k.com', external: true },
          { id: '4yt', tag: '女频', title: '四月天', text: '古风女频原创小说网站。代表作《全家偷听我心声杀疯了，我负责吃奶》改编短剧上线24小时抖音播放破3.9亿。', href: 'https://www.4yt.net', external: true },
          { id: 'haili', tag: '故事平台', title: '海狸故事', text: '旗下有悬疑厂牌“谜想计划”与科幻厂牌“奇想宇宙”；举办海狸故事长篇小说比赛、“谜想奖”，孵化《错位》《走到底》《长夜孤灯》。', href: 'https://haili.chineseall.net', external: true },
        ] },
      ],
    },
    {
      id: 'writers', label: '作家生态', en: 'WRITERS', title: '作家生态与投稿',
      intro: '2013年发起网络文学大学（莫言任首届名誉校长），通过网大公开课持续培养职业网络作家。',
      blocks: [
        { type: 'stats', items: [
          { value: '400', unit: '万+', label: '平台累计注册创作者' },
          { value: '5', unit: '万+人次', label: '网大公开课累计培训' },
        ] },
        { type: 'cards', cols: 2, items: [
          { tag: '创作者', title: '我要投稿 / 签约', text: '前往17K作者专区开始创作。', href: 'https://www.17k.com', external: true },
        ] },
      ],
    },
    {
      id: 'audio', label: '有声', en: 'AUDIO', title: '有声内容',
      intro: '全资子公司鸿达以太是全国最早的有声内容制作与提供商之一；“AI主播”支持单播、双播、多人播。',
      blocks: [
        { type: 'stats', items: [
          { value: '49', unit: '万+', label: '小时音频资源' },
          { value: '20', unit: '万+小时', label: 'AI主播录制有声书' },
          { value: '50', unit: '亿+', label: '《修罗武神》有声全网播放' },
        ], note: '数据来源：2024年年度报告、2025年半年度报告' },
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
        { type: 'cards', cols: 3, items: [
          { tag: '海外短剧', title: 'FlareFlow', text: '2025年4月上线，覆盖200多个国家和地区。截至2026年6月末注册用户超5,200万、剧集近7,000部，已实现月度经营性盈亏平衡；2025年9月登顶美区应用商店娱乐免费榜。', href: 'https://apps.apple.com/app/id6744237126', external: true },
          { tag: '日本短剧', title: 'UniReel', text: 'COL JAPAN 2024年11月推出，上线当晚冲至日本iOS娱乐榜第2；与LINE Yahoo、博报堂DY Media Partners等组成短剧委员会，首部作品与日本电视台合作。' },
          { tag: '国内短剧', title: '短剧出品', text: '《一品布衣》系列累计播放超60亿；《大乾憨婿》《我的26岁女房客》等10余部累计播放超10亿；AI短剧累计超1,200部。' },
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
        { type: 'cards', cols: 2, items: [
          { tag: '自制剧', title: 'Raising His Mistress\'s Child', text: 'FlareFlow自制剧，全球播放超2亿，获2025国际短剧节“最佳女性领导力叙事奖”；韩语版由韩彩英主演。' },
          { tag: '基地', title: '横琴国际影视城', text: '与TVB等合作，持续承接影视与短剧拍摄。' },
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
          { tag: '大屏', title: 'FlareFlow × Whale TV', text: '2026年9月登陆Whale TV独立电视操作系统，率先覆盖南美；Whale TV合作400多个电视品牌、月活设备超4,750万台。' },
          { tag: '东南亚', title: '携手泰国正大集团', text: '加速短剧本土化布局。' },
          { tag: '日本', title: 'COL JAPAN × UniReel', text: '与LINE Yahoo、博报堂DY Media Partners、HUUM组成短剧委员会，首部作品与日本电视台合作；此前向DMM.com售出作品。' },
          { tag: '新加坡', title: '《Supermodel Me》', text: '与Refinery Media合作真人秀微短剧。' },
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
          { tag: '大模型', title: '中文逍遥 / 逍遥AI', text: '自研大模型，支持14种语言创作；服务100多个国家和地区的5万余名创作者，协助产出超25亿字。', href: 'https://xiaoyao.ai', external: true },
          { tag: '创作平台', title: '次元神笔', text: '以逍遥AI为底座的全栈AI内容创作平台，覆盖剧本拆解、分镜、生图生视频与配音。' },
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
          { value: '140', unit: '万+', label: '2025年AI审核内容条数' },
        ], note: '数据来源：2026年董事长致股东信、2025年度社会责任报告' },
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
      intro: '网络文学是IP的源头，短剧与出海是增长主线，AI与版权保护贯穿全流程。',
      blocks: [
        { type: 'steps', items: [
          { title: '网络文学', text: '17K · 四月天 · 海狸故事', color: bizColor.literature },
          { title: '影视·短剧', text: 'FlareFlow · 动画 · 影视', color: bizColor.drama },
          { title: '海外', text: '200+ 国家和地区 · 海外收入40%+', color: bizColor.global },
          { title: 'AI与创作工具', text: '逍遥AI · 次元神笔', color: bizColor.ai },
          { title: '版权保护', text: '近万起维权 · 区块链存证', color: bizColor.ipr },
          { title: '数商', text: '600TB 数据 · 数十家大模型合作', color: bizColor.data },
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
      { logo: 'flareflow', tag: '海外短剧', title: 'FlareFlow', text: '2025年4月上线，覆盖200+国家和地区、14种语言，注册用户超5,200万；2025年9月登顶美区娱乐免费榜。', href: 'https://apps.apple.com/app/id6744237126', external: true, color: bizColor.global },
      { logo: 'cyshenbi', tag: 'AI漫剧', title: '次元神笔', text: '2026年初上线的AI漫剧一站式生成工具，从剧本、分镜到配音全程AI协助，并打通全球发行。', href: '#', external: true, color: bizColor.ai },
      { logo: 'xiaoyao', tag: 'AI大模型', title: '逍遥AI', text: '自研“中文逍遥”大模型，支持14种语言创作，服务5万余名创作者。', href: 'https://xiaoyao.ai', external: true, color: bizColor.ai },
      { logo: '17k', tag: '网络文学', title: '17K小说网', text: '核心原创内容平台，中宣部认定“网络文学重点园地”。', href: 'https://www.17k.com', external: true, color: bizColor.literature },
      { logo: '4yt', tag: '网络文学', title: '四月天', text: '古风女频原创小说网站。', href: 'https://www.4yt.net', external: true, color: bizColor.literature },
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
        { type: 'ipwall', note: '海报与数据取自《中文在线集团介绍》（2026-09）及官方公众号文章。', items: [
          { title: '罗小黑战记', genre: '电影·番剧', forms: ['动画番剧', '电影', '衍生品'], tags: ['《罗小黑战记2》票房超5.33亿', '10余个国家和地区发行'], poster: 'luoxiaohei' },
          { title: '修罗武神', genre: '漫剧', forms: ['网文', '有声', '3D动画'], tags: ['第二季登顶腾讯视频动漫玄幻榜', '有声播放超50亿'], poster: 'xiuluowushen' },
          { title: '一品布衣', genre: '短剧', forms: ['网文', '微短剧'], tags: ['前四部全网播放超60亿', '《综艺报》2025年度微短剧'], poster: 'yipinbuyi' },
          { title: '乙游系统觉醒，我在星际撩疯了', genre: '短剧', forms: ['AI 3D漫剧'], tags: ['火龙漫剧热播榜第1名'], poster: 'yiyou' },
          { title: 'Raising His Mistress\'s Child', genre: '短剧', forms: ['FlareFlow', '海外短剧'], tags: ['全球播放超2亿', '国际短剧节“最佳女性领导力叙事奖”'], poster: 'raising' },
          { title: '99 Charms, 99 Heartbreaks', genre: '短剧', forms: ['FlareFlow', '海外短剧'], tags: ['洛杉矶Vertical Shorts Festival最佳短剧奖'], poster: 'charms99' },
        ] },
      ],
    },
    {
      id: 'trailers', label: '预告片与样片', en: 'TRAILERS', title: '预告片与样片',
      intro: '面向合作方的样片与面向观众的预告片。',
      blocks: [
        { type: 'videos', note: '其余作品的样片可通过“合作”页留资索取。', items: [
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
        { type: 'cards', cols: 4, items: [
          { tag: '01', title: '影视改编', href: lic('影视改编') },
          { tag: '02', title: '动漫改编', href: lic('动漫改编') },
          { tag: '03', title: '游戏改编', href: lic('游戏改编') },
          { tag: '04', title: '出版 / 电子书', href: lic('出版 / 电子书') },
          { tag: '05', title: '有声', href: lic('有声') },
          { tag: '06', title: '消费品 / 周边', href: lic('消费品 / 周边') },
          { tag: '07', title: '品牌联名', href: lic('品牌联名') },
          { tag: '+', title: '样片索取', href: lic('样片索取') },
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
          { value: '数十', unit: '家', label: '合作大模型企业' },
          { value: '85', unit: '%', label: '新增数据中垂直专业高难数据占比' },
        ], note: '数据来源：2025年半年度报告、2026年半年度报告' },
      ],
    },
  ],
};

// 10/22：一级栏目更名为“业务版图”（团队导航表）；章节顺序沿用会议记录：网文 → 影视短剧 → 海外 → AI工具 → 版权保护 → 数商
businessIndex.title = '业务版图';
businessIndex.en = 'BUSINESS';
businessIndex.intro = 'IP + AI + 出海：以优质IP为核心，AI贯穿全流程，让好故事走向全球。';
businessPages.push(literature, drama, global, ai, ipr, dataPage);

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
      { date: '2026-10-16', title: '中文在线亮相戛纳电视节，FlareFlow携手Digicel拓展中南美洲市场', tag: '海外', img: 'cannes', text: 'FlareFlow亮相戛纳MIPCOM电视节，并与加勒比电信运营商Digicel签约，进一步拓展中南美洲市场。' },
      { date: '2026-10-12', title: '中文在线携手泰国正大集团加速短剧本土化布局', tag: '海外', img: 'thai', href: 'https://www.col.com/article/2110230650349912064', text: 'FlareFlow Mini登陆正大集团旗下True的TATANG by TrueID平台并开设专区，双方将在AIGC本土化内容、联合泰国高校培养创作者与发行上深入合作。' },
      { date: '2026-10-08', title: '连续两年入选！中文在线再登创业邦“2026中国企业全球化新势力100强”', tag: '荣誉', img: 'global100', href: 'https://www.col.com/article/2110229921233076224', text: '入选“引领型”40强。2025年海外收入同比增长123.94%，占比超40%，FlareFlow登顶美区应用商店娱乐榜。' },
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
  intro: '以AI为技术底座、以内容为核心资产、以全球化为发展方向。A股代码 300364.SZ。',
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
      { type: 'contact', items: [{ k: 'IR 邮箱', v: 'ir@col.com' }, { k: 'IR 电话', v: '010-84195757' }], cta: { label: '互动易提问', href: cninfo } },
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
    { id: 'culture', label: '人才理念', en: 'PHILOSOPHY', title: '人才理念与发展', blocks: [
      { type: 'cards', cols: 2, items: [
        { tag: '人才策略', title: '持续提升人才密度', text: '年轻化人才布局，保持组织活力和创造力。' },
        { tag: '人才发展', title: '打造专业人才高地', text: '发掘与培养专业领军人才，夯实专业人才梯队。' },
      ] },
      { type: 'tags', title: '培养体系', items: ['导师计划', '知识库', '爆款俱乐部', '创新大会', '高潜班培训', '新员工培训', '基层管理人员培训', '内部讲师培训', '外部讲座分享'] },
    ] },
    { id: 'activities', label: '活动墙', en: 'ACTIVITIES', title: '活动墙', blocks: [
      { type: 'gallery', note: '照片待品牌部 / HR 提供，对外展示尺度由法务与HR确定。', items: [
        { tag: '年会', caption: '年会' },
        { tag: '评奖', caption: '中文之星 / 中文新星评选' },
        { tag: '团建', caption: '团建出游' },
        { tag: '比赛', caption: '创新大赛' },
        { tag: '社团', caption: '运动俱乐部：羽毛球、篮球、健步走' },
        { tag: 'AI培训', caption: 'AI培训与分享会' },
        { tag: '评奖', caption: '业绩庆功会' },
        { tag: '年会', caption: '司龄庆' },
      ] },
    ] },
    { id: 'people', label: '员工故事', en: 'OUR PEOPLE', title: '员工故事', blocks: [
      { type: 'cards', cols: 3, items: [
        { tag: '国际业务', title: '拥抱变化、迎接挑战', text: '在国际业务开拓中探寻新视野与新机会，有共同创业的战友，也有可以分享故事的朋友。' },
        { tag: '自我进化', title: '跳出舒适圈，拼出另一种可能', text: '进入中文后，才发现我原来有那么多面精彩的自己。' },
        { tag: '内容创意', title: '从爱好到职业', text: '公司给予我尝试的机会和平台，在热爱的职业里不断突破。' },
      ] },
      { type: 'text', paras: ['员工照片与姓名待授权后补充。'] },
    ] },
    { id: 'workplace', label: '办公环境', en: 'WORKPLACE', title: '办公环境', blocks: [
      { type: 'gallery', items: [
        { tag: '办公环境', caption: '北京 · 雍和大厦' },
        { tag: '办公环境', caption: '横琴国际短剧拍摄基地' },
      ] },
    ] },
    { id: 'positions', label: '职位与投递', en: 'CAREERS', title: '社会招聘与校园招聘', blocks: [
      { type: 'steps', items: [{ title: '浏览岗位' }, { title: '投递简历' }, { title: '面试交流' }] },
      { type: 'cards', cols: 2, items: [
        { id: 'social', tag: '社会招聘', title: '查看社招岗位', text: '前往招聘网站浏览在招职位。', href: 'https://zhongwenzaixian.zhiye.com/', external: true },
        { id: 'campus', tag: '校园招聘', title: '查看校招岗位', text: '面向应届毕业生的校园招聘。', href: 'https://zhongwenzaixian.zhiye.com/campus', external: true },
      ] },
      { type: 'contact', items: [{ k: 'HR 邮箱', v: '待提供' }] },
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
  intro: '内容引进、IP授权、数商、海外、供应商、媒体……找到对应的人，或直接问 AI 助手。',
  sections: [
    { id: 'types', label: '合作类型', en: 'I WANT TO…', title: '我想……', blocks: [
      { type: 'contacts', items: [
        { id: 'content', tag: '内容合作', title: '引进内容 / 渠道合作', text: '网文、有声、短剧内容引进与分发，平台与终端渠道合作。', people: [{ name: '负责人待定', role: '内容合作负责人' }] },
        { id: 'license', tag: 'IP授权', title: 'IP授权', text: '影视、动漫、游戏、出版、有声、消费品、品牌联名授权，以及样片索取。', people: [{ name: '负责人待定', role: '版权授权负责人' }] },
        { id: 'data', tag: '数商', title: '数商合作', text: '面向AI与大模型企业的数据与语料服务。详见“数商服务”。', people: [{ name: '负责人待定', role: '数商业务负责人' }] },
        { id: 'overseas', tag: 'Global BD', title: '海外合作', text: '海外内容引进、发行与IP合作。', people: [{ name: '负责人待定', role: '海外业务负责人' }] },
        { id: 'investment', tag: '投资', title: '投资合作', text: '战略直投与产业基金合作。', people: [{ name: '负责人待定', role: '投资业务负责人' }] },
        { id: 'supplier', tag: '供应商', title: '成为供应商', text: '内容、技术、制作与渠道代理供应商准入（准入说明待补充）。', people: [{ name: '负责人待定', role: '供应商准入' }] },
        { id: 'media', tag: '媒体', title: '媒体采访', text: '采访与报道需求，媒体资料见“新闻中心”。', people: [{ name: '负责人待定', role: '品牌公关' }] },
      ] },
    ] },
    { id: 'form', label: '在线留言', en: 'MESSAGE', title: '在线留言', intro: '选择合作类型并留下联系方式，我们会安排对应负责人联系您。', blocks: [
      { type: 'form', topics: ['引进内容 / 渠道合作', 'IP授权', '数商合作', '海外合作', '投资合作', '成为供应商', '媒体采访', '其他'] },
    ] },
    { id: 'hq', label: '公司总部', en: 'HEADQUARTERS', title: '公司总部', blocks: [
      { type: 'contact', items: [{ k: '地址', v: '北京市东城区安定门东大街28号雍和大厦E座6层' }, { k: '服务热线', v: contact.phone }, { k: '传真', v: contact.fax }] },
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
reorder(about, ['intro', 'culture', 'history', 'strategy', 'honors', 'licenses']);
// IP与作品：IP墙 → 预告片 → 改编案例 → 授权（转化）→ 作品库（长尾）
reorder(ipPage, ['wall', 'trailers', 'cases', 'license', 'library']);
// 数商服务（10/22 会议）：只保留服务类型与资源规模
reorder(dataPage, ['services', 'scale']);
// 投资者关系（10/22 会议：只留基础信息）：亮点 → 致股东信 → 报告与公告 → 联系；股价在页头
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
// 合作页最上方：合作方向总览，点击跳到对应的合作卡片
partner.sections.unshift({
  id: 'overview', label: '合作总览', en: 'OVERVIEW', title: '可以和我们合作什么',
  intro: '从内容、IP 到数据与出海，覆盖内容产业的上下游。选择方向，直达对应负责人。',
  blocks: [{ type: 'cards', cols: 4, items: [
    { tag: '海外', title: '海外合作', text: '短剧与网文的海外发行、引进与联合制作，FlareFlow 平台合作。', href: '#overseas', color: bizColor.global },
    { tag: '数商', title: '数据与语料', text: '面向 AI 与大模型企业的正版数据、定制数据与标注服务。', href: '#data', color: bizColor.data },
    { tag: 'IP授权', title: 'IP 授权与衍生', text: '影视、动漫、游戏、出版、有声、消费品与品牌联名授权。', href: '#license', color: bizColor.drama },
    { tag: '内容', title: '内容引进与渠道', text: '网文、有声、短剧的内容引进与分发，平台和终端渠道合作。', href: '#content', color: bizColor.literature },
    { tag: '投资', title: '投资合作', text: '战略直投与产业基金，围绕内容、AI 与出海的产业布局。', href: '#investment', color: bizColor.ai },
    { tag: '供应商', title: '成为供应商', text: '内容、技术、制作与渠道代理等供应商准入。', href: '#supplier', color: bizColor.ipr },
    { tag: '媒体', title: '媒体采访', text: '采访与报道需求，以及媒体资料获取。', href: '#media', color: bizColor.global },
    { tag: 'AI', title: '不确定找谁？', text: '直接和 AI 助手聊，它会把你的需求转给对应负责人。', href: '#types', color: bizColor.ai },
  ] }],
});
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
    { label: '求职者', hint: '活动 · 职位', href: '/join', icon: 'bag' },
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
  greeting: '你好！我可以帮你快速找到中文在线的业务、IP、财报和合作入口。试试下面的问题：',
  fallback: '这个问题我暂时回答不了（原型阶段尚未接入大模型）。你可以试试下面的问题，或直接联系我们。',
  suggestions: ['中文在线是做什么的？', '怎么洽谈IP授权？', '你们提供哪些AI训练数据？', '在哪里看财报和公告？'],
  faq: [
    { q: '中文在线是做什么的？', keywords: ['做什么', '介绍', '公司', '是谁', '业务', '简介'],
      a: '中文在线是国内领先的数字文化内容产业集团，2000年成立于清华大学，2015年在深交所创业板上市（300364）。业务覆盖海外短剧（FlareFlow）、数商（AI数据服务）、影视·短剧、网络文学、AI创作工具与版权保护。',
      link: { label: '看业务与产品', href: '/business' } },
    { q: '怎么洽谈IP授权？', keywords: ['授权', 'ip', '改编', '版权合作', '罗小黑', '一品布衣'],
      a: '在「IP与作品」浏览IP墙，点任意IP就能直达授权负责人；也可以在「合作」页选择“IP授权”直接留言。',
      link: { label: '去洽谈IP授权', href: toPartner('license', 'IP授权') } },
    { q: '你们提供哪些AI训练数据？', keywords: ['数据', '数商', '语料', '训练', '大模型', '标注'],
      a: '我们为AI与大模型企业提供主产数据、高端定制数据与训练数据标注服务，数据总量600TB，覆盖文字、音频、图片、视频，已与数十家大模型建立合作。',
      link: { label: '看数商服务', href: '/business#data' } },
    { q: '在哪里看财报和公告？', keywords: ['财报', '公告', '年报', '季报', '投资', '股价', '股票', '300364'],
      a: '定期报告与公告在「投资者关系」页，PDF原文直链巨潮资讯。公司A股代码300364。',
      link: { label: '看报告与公告', href: '/investors#filings' } },
    { q: 'FlareFlow 是什么？', keywords: ['flareflow', '短剧', '海外', '出海'],
      a: 'FlareFlow是中文在线的海外短剧平台，覆盖200多个国家和地区，截至2026年6月注册用户超5,200万。',
      link: { label: '看海外业务', href: '/business#global' } },
    { q: '有哪些招聘岗位？', keywords: ['招聘', '工作', '岗位', '实习', '校招', '社招', '应聘', '简历'],
      a: '社会招聘与校园招聘入口都在「加入我们」页，也可以先看看我们的活动墙和员工故事。',
      link: { label: '看职位', href: '/join#positions' } },
    { q: '怎么联系你们？', keywords: ['联系', '电话', '邮箱', '合作', '商务', '咨询'],
      a: '商务合作请到「合作」页选择合作类型，会显示对应负责人；服务热线 010-51667567。',
      link: { label: '去合作页', href: '/partner' } },
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
  stockPending: '股价待接入行情',
  crumbs: '面包屑',
  pageNav: '本页导航',
  next: '下一章 · NEXT',
  // 首页
  heroL1: '更好内容',
  heroL2: '更好生活',
  heroSub: 'AI驱动的全球领先数字文娱平台，用好故事连接世界',
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
    literature: '560万+ 正版内容 · 400万+ 作者',
    drama: '横琴基地 · 出海短剧 · 影视改编',
    global: '覆盖 200+ 国家和地区 · 用好故事连接世界',
    data: '600TB 多模态数据 · 数十家大模型合作',
    ai: '逍遥AI · 次元神笔',
    ipr: '近万起维权诉讼',
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
  aiPlaceholder: '输入你的问题，例如：怎么洽谈授权？',
  aiInput: '输入问题',
  send: '发送',
  aiFab: 'AI 助手',
  // 投资者行情卡
  quoteCode: 'A股 · 300364.SZ · 深交所创业板',
  quotePending: '行情待接入',
  quoteMeta: ['涨跌幅 --', '总市值 --', '成交额 --'],
};
