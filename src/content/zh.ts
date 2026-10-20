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
export type Card = { id?: string; title: string; text?: string; meta?: string; tag?: string; href?: string; external?: boolean };
export type Cover = { title: string; sub?: string };
export type Person = { name: string; role: string; text?: string; email?: string; phone?: string };
export type IP = { title: string; genre: string; status: '可授权' | '改编中' | '已授权'; forms: string[]; tags: string[] };

export type Block =
  | { type: 'text'; paras: string[]; lead?: boolean }
  | { type: 'stats'; items: Stat[]; note?: string }
  | { type: 'cards'; items: Card[]; cols?: 2 | 3 | 4 }
  | { type: 'covers'; items: Cover[]; title?: string }
  | { type: 'tags'; title?: string; items: string[] }
  | { type: 'steps'; items: { title: string; text?: string }[] }
  | { type: 'timeline'; items: { year: string; text: string }[] }
  | { type: 'honors'; items: { year: string; items: string[] }[] }
  | { type: 'quote'; text: string; author?: string; role?: string; href?: string; hrefLabel?: string }
  | { type: 'letter'; title: string; lead: string; themes: { k: string; v: string }[]; author: string; role: string; date: string }
  | { type: 'news'; items: { date: string; title: string; tag?: string }[] }
  | { type: 'docs'; cols: { title: string; items: { date: string; title: string; href?: string }[] }[]; href: string }
  | { type: 'contact'; items: { k: string; v: string }[]; cta?: { label: string; href: string } }
  | { type: 'ipwall'; items: IP[]; note?: string }
  | { type: 'videos'; items: { title: string; sub?: string; vertical?: boolean }[]; note?: string }
  | { type: 'people'; items: Person[]; cols?: 2 | 3 | 4 }
  | { type: 'contacts'; items: { id: string; tag: string; title: string; text: string; people: Person[] }[] }
  | { type: 'form'; topics: string[]; note?: string; id?: string }
  | { type: 'gallery'; items: { caption: string; tag: string }[]; note?: string }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | { type: 'logos'; items: string[]; note?: string }
  | { type: 'downloads'; items: { title: string; meta: string }[] };

export type Section = { id: string; label: string; en: string; title?: string; intro?: string; blocks: Block[] };
export type Page = { key: string; href: string; title: string; en: string; intro: string; sections: Section[]; theme?: [string, string] };

/* ============ 站点信息 ============ */

export const site = {
  name: '中文在线',
  fullName: '中文在线集团股份有限公司',
  enName: 'COL Group',
  stockCode: '300364.SZ',
  slogan: '更好内容 更好生活',
  sloganEn: 'BETTER CONTENT, BETTER LIFE',
  tagline: '国内领先的数字文化内容产业集团',
};

export const contact = {
  phone: '010-51667567',
  fax: '010-85195550',
  address: '北京市东城区安定门东大街28号雍和大厦E座6层（100007）',
  icp: ['京ICP证010590号', '京ICP备09030667号-23', '京网文（2023）4750-133号', '京公网安备 11010102003415号'],
};

// 社媒矩阵：微博链接来自现官网页脚；其余账号名与链接待品牌部提供
export const social: { platform: string; short: string; account: string; href?: string; qr?: string }[] = [
  { platform: '微信公众号', short: '微信', account: '账号待提供' },
  { platform: '微博', short: '微博', account: '中文在线（待核实）', href: 'https://weibo.com/u/1759081553' },
  { platform: '抖音', short: '抖音', account: '账号待提供' },
  { platform: '小红书', short: '小红书', account: '账号待提供' },
  { platform: '哔哩哔哩', short: 'B站', account: '账号待提供' },
  { platform: 'LinkedIn', short: 'in', account: '账号待提供' },
  { platform: 'YouTube', short: 'YT', account: '账号待提供' },
  { platform: 'X', short: 'X', account: '账号待提供' },
];

// 法务链接：文件待法务提供
export const legal = [
  { label: '隐私政策', href: '#' },
  { label: '用户协议', href: '#' },
  { label: 'Cookie 政策', href: '#' },
  { label: '行为准则', href: '#' },
  { label: '举报与合规通道', href: '#' },
];

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
      id: 'history', label: '发展历程', en: 'MILESTONES', title: '发展历程',
      blocks: [
        { type: 'timeline', items: [
          { year: '2000', text: '童之磊在清华大学发起成立中文在线' },
          { year: '2013', text: '在中国作家协会指导下发起网大公开课' },
          { year: '2015', text: '深交所创业板上市，成为“数字出版第一股”' },
          { year: '2021', text: '成立科幻厂牌“奇想宇宙”' },
          { year: '2023', text: '发布AI大模型“中文逍遥”；更名为中文在线集团' },
          { year: '2025', text: 'FlareFlow登顶美区应用商店娱乐免费榜；海外收入占比突破40%' },
        ] }, // 待补充：现官网逐年内容
      ],
    },
    {
      id: 'leadership', label: '管理团队', en: 'LEADERSHIP', title: '管理团队',
      blocks: [
        { type: 'people', cols: 3, items: [
          { name: '童之磊', role: '董事长兼总裁', text: '中文在线创始人。清华大学学士，MIT-清华 IMBA，国务院特殊津贴专家；北京市人大代表，中国音像与数字出版协会副理事长。' },
          { name: '谢广才', role: '董事、常务副总经理', text: '2002年加入公司。中国人民大学经济学学士，清华大学 EMBA；中国版权协会副理事长。' },
          { name: '王京京', role: '副总经理、董事会秘书、财务总监', text: '2010年加入公司。经济法硕士，具有法律职业资格。' },
        ] },
        { type: 'text', paras: ['资料来源：公司2025年年度报告、2026年半年度报告。照片待提供。'] },
      ],
    },
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
      id: 'esg', label: '社会责任', en: 'ESG', title: '社会责任',
      intro: '详见《2025年度社会责任报告》。',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: '公益', title: '中文在线慈善基金', text: '与湖南弘慧教育发展基金会合作13年，2015年设立基金，资助贫困学子、乡村校长培训与夏令营。' },
          { tag: '文化传承', title: '罗小黑 × 苏绣非遗', text: '与苏绣大师朱寿珍合作，以IP带动非物质文化遗产的年轻化传播。' },
          { tag: '内容治理', title: 'AI辅助内容审核', text: '2025年AI审核内容超140万条，准确率91.3%；用户反馈处理率100%。' },
        ] },
        { type: 'cards', cols: 2, items: [
          { title: '《2025年度社会责任报告》', text: '2026-04-23 发布', href: 'https://static.cninfo.com.cn/finalpage/2026-04-23/1225157301.PDF', external: true },
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
  theme: ['#0071ce', '#00c1de'],
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
          { id: 'rocnovel', tag: '海外网文', title: 'RocNovel', text: '海外英文网文平台，主攻美国、英国、加拿大，与逍遥AI平台打通。', href: 'https://www.rocnovel.com', external: true },
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
          { tag: '培训', title: '网大公开课', text: '秉承“创作改变人生”，帮助网络文学新人更快走上职业道路。', href: '#', external: true },
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
  theme: ['#6c4dff', '#ff5c9a'],
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
  theme: ['#00a7c4', '#3ddc97'],
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
      id: 'infra', label: '四大基础设施', en: 'INFRASTRUCTURE', title: '国际短剧生态的四大基础设施',
      blocks: [
        { type: 'cards', cols: 4, items: [
          { tag: '01', title: '内容制作', text: '横琴基地 + AI工具链，“中国创意+全球制作”。' },
          { tag: '02', title: '观看渠道', text: 'FlareFlow、UniReel，形成“创作-分发-反馈-优化”飞轮。' },
          { tag: '03', title: 'AI发行', text: '每部短剧生成100-300份推广素材，投放效率提升20倍以上。' },
          { tag: '04', title: '数据中台', text: '实时分析海外观众喜好，预测热门题材。' },
        ] },
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
    {
      id: 'offices', label: '全球团队', en: 'OFFICES', title: '全球团队',
      blocks: [
        { type: 'people', cols: 3, items: [
          { name: 'Bryan Tan', role: '新加坡 · COL WEB', text: '国际IP开发、内容分发、授权与战略合作。', email: 'bryantan@col.com' },
          { name: 'Rick Yan', role: '美国 · COL MEDIA', text: '洛杉矶影视工作室，国际影视项目开发与投资。', email: 'yanxiaodong2@col.com' },
          { name: '武川基', role: '日本 · COL JAPAN', text: '日本漫画、电影、动画与短剧合作。', email: 'takekawa@col.com' },
        ] },
        { type: 'cards', cols: 2, items: [
          { tag: 'Global BD', title: '洽谈海外合作', text: '内容引进、发行与IP合作，直达海外负责人。', href: toPartner('overseas', '海外合作') },
          { tag: '产品', title: '海外产品', text: 'FlareFlow、UniReel、RocNovel，见“产品一览”。', href: '/business#products' },
        ] },
      ],
    },
  ],
};

const ai: Page = {
  key: 'ai',
  theme: ['#ff7a45', '#ffc53d'],
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
  theme: ['#1b3a8c', '#4f7dff'],
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

// 章节顺序按信息重要性：海外与短剧是增长主线、服务第一顺位的海外合作方；网文是IP源头；AI与版权保护为支撑
export const businessPages = [global, drama, literature, ai, ipr];

const businessIndex: Page = {
  key: 'business',
  theme: ['#0071ce', '#6c4dff'],
  href: '/business',
  title: '业务与产品',
  en: 'BUSINESS & PRODUCTS',
  intro: '以数字内容生产、版权分发、IP衍生与知识产权保护为核心，AI贯穿全业务。每项业务下直接列出旗下产品。',
  sections: [
    {
      id: 'overview', label: '业务总览', en: 'OVERVIEW', title: '好故事，走向全球',
      intro: '出海与短剧是增长主线，网络文学是IP的源头，AI与版权保护贯穿全流程。',
      blocks: [
        { type: 'steps', items: [
          { title: '海外', text: '200+ 国家和地区 · 海外收入40%+' },
          { title: '影视·短剧', text: 'FlareFlow · 动画 · 影视' },
          { title: '网络文学', text: '17K · 四月天 · 海狸故事' },
          { title: 'AI与创作工具', text: '逍遥AI · 次元神笔' },
        ] },
        { type: 'cards', cols: 2, items: [
          { tag: '数商', title: '数据与语料服务', text: '面向AI与大模型企业的数据服务，见“数商服务”。', href: '/data' },
          { tag: 'IP', title: '明星IP与授权', text: 'IP墙、预告片与授权合作，见“IP与作品”。', href: '/ip' },
        ] },
      ],
    },
  ],
};

// 产品一览：业务与产品页总览后的第二个板块，读者与观众从首页入口直达这里
businessIndex.sections.push({
  id: 'products', label: '产品一览', en: 'PRODUCTS', title: '产品一览',
  intro: '旗下阅读、短剧、AI与版权服务产品，点击访问或下载。',
  blocks: [
    { type: 'cards', cols: 4, items: [
      { tag: '海外短剧', title: 'FlareFlow', text: '覆盖200+国家和地区，注册用户超5,200万。', href: 'https://apps.apple.com/app/id6744237126', external: true },
      { tag: '日本短剧', title: 'UniReel', text: 'COL JAPAN推出的日本短剧App。', href: '#', external: true },
      { tag: '海外网文', title: 'RocNovel', text: '英文网文平台，主攻美英加市场。', href: 'https://www.rocnovel.com', external: true },
      { tag: '网络文学', title: '17K小说网', text: '核心原创内容平台，全品类。', href: 'https://www.17k.com', external: true },
      { tag: '网络文学', title: '四月天', text: '古风女频原创小说网站。', href: 'https://www.4yt.net', external: true },
      { tag: '网络文学', title: '海狸故事', text: '悬疑“谜想计划”、科幻“奇想宇宙”。', href: 'https://haili.chineseall.net', external: true },
      { tag: 'AI', title: '逍遥AI', text: '自研大模型，支持14种语言创作。', href: 'https://xiaoyao.ai', external: true },
      { tag: '版权服务', title: '权哨', text: '知识产权一站式服务平台。', href: 'https://www.qshao.net', external: true },
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
        { type: 'ipwall', note: '开发状态与部分数据标签为示例，待版权与业务部门核实。', items: [
          { title: '罗小黑战记', genre: '动漫', status: '已授权', forms: ['动画', '电影', '衍生品'], tags: ['电影票房超5.33亿', '豆瓣8.7', '金龙奖年度十佳'] },
          { title: '一品布衣', genre: '古装', status: '改编中', forms: ['网文', '微短剧'], tags: ['系列累计播放超60亿', '2025年度微短剧'] },
          { title: 'Raising His Mistress\'s Child', genre: '都市', status: '已授权', forms: ['海外短剧'], tags: ['全球播放超2亿', '国际短剧节获奖'] },
          { title: '我的26岁女房客', genre: '都市', status: '已授权', forms: ['短剧', '游戏'], tags: ['已改编AVG游戏', '登陆Steam'] },
          { title: '修罗武神', genre: '玄幻', status: '已授权', forms: ['有声', '动漫'], tags: ['有声播放超50亿'] },
          { title: '破夜', genre: '悬疑', status: '可授权', forms: ['网文'], tags: ['示例数据待补充'] },
          { title: '永徽迷局', genre: '悬疑', status: '可授权', forms: ['网文'], tags: ['示例数据待补充'] },
          { title: '全家偷听我心声杀疯了，我负责吃奶', genre: '古装', status: '已授权', forms: ['网文', '短剧'], tags: ['短剧24小时播放破3.9亿'] },
          { title: '烽烟尽处', genre: '历史', status: '可授权', forms: ['网文'], tags: ['示例数据待补充'] },
          { title: '奇迹王座2', genre: '玄幻', status: '可授权', forms: ['网文'], tags: ['示例数据待补充'] },
          { title: '女儿来自银河系', genre: '科幻', status: '可授权', forms: ['网文'], tags: ['示例数据待补充'] },
          { title: '请和优秀的我谈恋爱', genre: '都市', status: '可授权', forms: ['网文'], tags: ['示例数据待补充'] },
        ] },
      ],
    },
    {
      id: 'trailers', label: '预告片与样片', en: 'TRAILERS', title: '预告片与样片',
      intro: '面向合作方的样片与面向观众的预告片。',
      blocks: [
        { type: 'videos', note: '视频文件待提供；样片可通过“合作”页留资索取。', items: [
          { title: '罗小黑战记2', sub: '动画电影' },
          { title: 'Raising His Mistress\'s Child', sub: 'FlareFlow · 海外短剧' },
          { title: '一品布衣', sub: '微短剧', vertical: true },
          { title: 'The Final Bell', sub: 'UniReel · 日本短剧', vertical: true },
        ] },
      ],
    },
    {
      id: 'library', label: '作品库', en: 'LIBRARY', title: '作品库',
      blocks: [
        { type: 'covers', title: '有声', items: [
          { title: '机器之门' }, { title: '都市全能高手' }, { title: '长津湖' }, { title: '建军大业' }, { title: '大明王朝' }, { title: '橙红年代' },
        ] },
        { type: 'covers', title: '动漫', items: [
          { title: '傲世丹神' }, { title: '妖怪公寓' }, { title: '修罗武神' }, { title: '混沌剑神' }, { title: '九星霸体诀' }, { title: '我的徒弟居然是女帝' },
        ] },
        { type: 'covers', title: '影视', items: [
          { title: '招惹' }, { title: '造作时光' }, { title: '夏虫可语冰' }, { title: '花琉璃轶闻' }, { title: '他跨越山海而来' }, { title: '就想和你谈恋爱' },
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

/* ============ 数商服务 /data（决策 D7：沿用“数商”这一受众原称） ============ */

const dataPage: Page = {
  key: 'data',
  theme: ['#1b3a8c', '#00a7c4'],
  href: '/data',
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
    {
      id: 'cases', label: '客户案例', en: 'CASES', title: '客户案例',
      blocks: [
        { type: 'text', lead: true, paras: ['已实现国内头部大模型厂商及主流互联网平台的全覆盖，与数十家大模型建立数据及数据服务合作，覆盖央国企、互联网巨头与AI新势力。'] },
        { type: 'cards', cols: 3, items: [
          { tag: '【示例】', title: '客户名称待授权展示', text: '一句话说明合作价值（待战略部提供）。' },
          { tag: '【示例】', title: '客户名称待授权展示', text: '一句话说明合作价值（待战略部提供）。' },
          { tag: '内容安全', title: '内容安全审核服务', text: '服务浙江省传播大脑、咪咕阅读、沃阅读等。' },
        ] },
        { type: 'quote', text: '【示例】客户证言待提供：引用 + 姓名 + 职务。', author: '待提供', role: '客户公司 · 职务' },
      ],
    },
    {
      id: 'delivery', label: '交付与质量', en: 'DELIVERY', title: '交付与质量体系',
      blocks: [
        { type: 'steps', items: [
          { title: '需求沟通', text: '场景、规模与格式' },
          { title: '授权与采集', text: '正版授权链路' },
          { title: '清洗与标注', text: '标注规范' },
          { title: '质检', text: '质检标准（待补充）' },
          { title: '交付', text: '交付方式与周期' },
        ] },
      ],
    },
    {
      id: 'compliance', label: '合规与安全', en: 'COMPLIANCE', title: '合规与安全',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: '版权', title: '先授权、后传播', text: '自成立起坚持正版授权链路，可提供权属说明。' },
          { tag: '存证', title: '区块链存证', text: '以“长安链”为底层的区块链存证平台。' },
          { tag: '认证', title: 'ISO 27001 / 9001 / 20000 / 45001', text: '信息安全、质量、IT服务与职业健康安全管理体系认证；等保等其他认证待法务确认。' },
        ] },
      ],
    },
    {
      id: 'contact', label: '联系对接人', en: 'CONTACT', title: '联系数商对接人',
      blocks: [
        { type: 'people', cols: 2, items: [
          { name: '负责人待定', role: '数商业务负责人', text: '姓名、职务、邮箱、电话与企业微信待提供。' },
        ] },
        { type: 'form', id: 'data-form', topics: ['数商合作 · 主产数据', '数商合作 · 高端定制', '数商合作 · 训练数据', '预约 demo', '其他'] },
      ],
    },
  ],
};

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
      { date: '2026-10-12', title: '中文在线携手泰国正大集团加速短剧本土化布局', tag: '海外' },
      { date: '2026-10-08', title: '连续两年入选！中文在线再登创业邦“2026中国企业全球化新势力100强”', tag: '荣誉' },
      { date: '2026-09-24', title: '港式警匪片《黑白潜行3》开机，横琴国际影视城持续“上新”', tag: '影视' },
      { date: '2026-09-17', title: 'FlareFlow精品短剧99 Charms, 99 Heartbreaks荣获洛杉矶Vertical Shorts Festival「最佳短剧奖」', tag: '短剧' },
    ] }] },
    { id: 'media', label: '媒体报道', en: 'MEDIA', title: '媒体报道', blocks: [{ type: 'news', items: [
      { date: '2025-08-01', title: '破10亿！“北京大视听”重点网络精品项目《一品布衣》热播', tag: '影视' },
      { date: '2025-06-25', title: '中文在线童之磊：以AI赋能全球内容产业', tag: 'AI' },
    ] }] },
    { id: 'presskit', label: '媒体资料', en: 'PRESS KIT', title: '媒体资料包', blocks: [
      { type: 'downloads', items: [
        { title: '官方 Logo', meta: 'PNG / SVG · 待提供' },
        { title: '官方图片库', meta: 'ZIP · 待提供' },
        { title: '公司简介', meta: 'PDF · 待提供' },
        { title: '高管简介与照片', meta: 'PDF · 待提供' },
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
    { id: 'strategy', label: '发展战略', en: 'STRATEGY', title: '“AI + 全球化”双轮驱动', blocks: [
      { type: 'cards', cols: 4, items: [
        { tag: '01', title: '夯实内容', text: '560万+正版内容资源、400万+注册创作者。', href: '/business#literature' },
        { tag: '02', title: '决胜IP', text: 'IP从“消耗型资产”变为“可循环资产”。', href: '/ip' },
        { tag: '03', title: '国际优先', text: 'FlareFlow、UniReel与横琴基地，构建国际短剧基础设施。', href: '/business#global' },
        { tag: '04', title: 'AI赋能', text: '“逍遥”覆盖约60%文学生产流程，制作周期缩短75%。', href: '/business#ai' },
      ] },
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
    { id: 'governance', label: '公司治理', en: 'GOVERNANCE', title: '公司治理', blocks: [
      { type: 'people', cols: 4, items: [
        { name: '童之磊', role: '董事长' },
        { name: '谢广才', role: '董事' },
        { name: '雷霖', role: '董事' },
        { name: '李晓东', role: '独立董事' },
        { name: '连莲', role: '独立董事' },
        { name: '王春仁', role: '独立董事' },
      ] },
      { type: 'cards', cols: 3, items: [
        { title: '公司章程', text: '文件待提供' },
        { title: '专门委员会', text: '审计、薪酬与考核、提名、战略（构成待补充）' },
        { title: '治理制度', text: '信息披露、投资者关系管理等制度（待提供）' },
      ] },
    ] },
    { id: 'investment', label: '投资板块', en: 'INVESTMENT', title: '投资板块', blocks: [
      { type: 'cards', cols: 2, items: [
        { tag: '战略直投', title: '投资赋能合作伙伴', text: '围绕上市公司的产业布局及细分领域，通过投资赋能合作伙伴，实现共赢式发展。' },
        { tag: '产业基金', title: '聚焦下一代科技创新', text: '人工智能、下一代互联网技术等，及其与优质内容结合的产业投资机会。' },
      ] },
      { type: 'cards', cols: 2, items: [
        { tag: '投资合作', title: '洽谈投资合作', text: '投资业务邮箱：gaoyzh@col.com', href: toPartner('investment', '投资合作') },
      ] },
    ] },
    { id: 'faq', label: '常见问题', en: 'FAQ', title: '投资者常见问题', blocks: [
      { type: 'faq', items: [
        { q: '公司在哪里上市？股票代码是多少？', a: '公司A股于2015年1月21日在深圳证券交易所创业板上市，股票代码300364。' },
        { q: '公司是否在香港上市？', a: '公司曾于2026年2月向香港联交所递交H股上市申请，并于2026年10月决议终止。目前公司仅在深交所创业板上市。' },
        { q: '在哪里查看公司公告与定期报告？', a: '所有法定披露文件以巨潮资讯网为准，本页“定期报告与公告”提供直达链接。' },
        { q: '如何与公司证券事务部联系？', a: '可通过本页底部的IR邮箱、电话联系，或在深交所互动易平台提问。' },
      ] },
    ] },
    { id: 'ir-contact', label: '投资者联系', en: 'CONTACT IR', title: '投资者联系', intro: '董事会秘书：王京京 ｜ 证券事务代表：王亚锋', blocks: [
      { type: 'contact', items: [{ k: 'IR 邮箱', v: 'ir@col.com' }, { k: 'IR 电话', v: '010-84195757' }, { k: '传真', v: '010-84195550' }], cta: { label: '互动易提问', href: cninfo } },
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
    { id: 'benefits', label: '福利与环境', en: 'BENEFITS', title: '福利与办公环境', blocks: [
      { type: 'tags', title: '员工福利', items: ['五险一金', '补充医疗保险', '年度体检', '法定年假', '弹性工作制', '午餐补助', '电脑补助', '通讯补助', '年节礼品', '健身房', '下午茶', '咖啡机', '周边餐饮住宿折扣'] },
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
  intro: '内容引进、IP授权、数商、海外、供应商、媒体……找到对应的人，或直接留言给我们。',
  sections: [
    { id: 'types', label: '合作类型', en: 'I WANT TO…', title: '我想……', blocks: [
      { type: 'contacts', items: [
        { id: 'content', tag: '内容合作', title: '引进内容 / 渠道合作', text: '网文、有声、短剧内容引进与分发，平台与终端渠道合作。', people: [{ name: '负责人待定', role: '内容合作负责人' }] },
        { id: 'license', tag: 'IP授权', title: 'IP授权', text: '影视、动漫、游戏、出版、有声、消费品、品牌联名授权，以及样片索取。', people: [{ name: '负责人待定', role: '版权授权负责人' }] },
        { id: 'data', tag: '数商', title: '数商合作', text: '面向AI与大模型企业的数据与语料服务。详见“数商服务”。', people: [{ name: '负责人待定', role: '数商业务负责人' }] },
        { id: 'overseas', tag: 'Global BD', title: '海外合作', text: '海外内容引进、发行与IP合作。', people: [
          { name: 'Bryan Tan', role: '新加坡 · COL WEB', email: 'bryantan@col.com' },
          { name: 'Rick Yan', role: '美国 · COL MEDIA', email: 'yanxiaodong2@col.com' },
          { name: '武川基', role: '日本 · COL JAPAN', email: 'takekawa@col.com' },
        ] },
        { id: 'investment', tag: '投资', title: '投资合作', text: '战略直投与产业基金合作。', people: [{ name: '投资业务', role: '投资板块', email: 'gaoyzh@col.com' }] },
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
// 关于我们：先回答“是谁、谁在掌舵、做成过什么”，文化与证照在后
reorder(about, ['intro', 'leadership', 'history', 'honors', 'culture', 'esg', 'licenses']);
// 海外：数据 → 合作案例（最有说服力）→ 团队联系 → 基础设施
reorder(global, ['overview', 'cases', 'offices', 'infra']);
// IP与作品：IP墙 → 预告片 → 改编案例 → 授权（转化）→ 作品库（长尾）
reorder(ipPage, ['wall', 'trailers', 'cases', 'license', 'library']);
// 数商服务：能做什么 → 规模 → 案例 → 合规（尽调刚需）→ 交付 → 联系
reorder(dataPage, ['services', 'scale', 'cases', 'compliance', 'delivery', 'contact']);
// 投资者关系：亮点 → 报告与公告（最常用）→ 战略 → 致股东信 → 治理 → 投资板块 → FAQ → 联系
reorder(investors, ['highlights', 'filings', 'strategy', 'letter', 'governance', 'investment', 'faq', 'ir-contact']);

// 合作：卡片按受众优先级排列（海外 → 数商 → IP授权 → 内容渠道 → 投资 → 供应商 → 媒体），表单选项同序
{
  const order = ['overseas', 'data', 'license', 'content', 'investment', 'supplier', 'media'];
  const block = partner.sections[0].blocks[0];
  if (block.type === 'contacts') block.items.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const form = partner.sections[1].blocks[0];
  if (form.type === 'form') form.topics = ['海外合作', '数商合作', 'IP授权', '引进内容 / 渠道合作', '投资合作', '成为供应商', '媒体采访', '其他'];
}

/* ============ 导航 ============ */

export const pages = { about, business: businessIndex, ip: ipPage, data: dataPage, news, investors, join, partner };
// 导航顺序按受众优先级（T1）：先服务第一顺位的海外合作方与数商（业务、IP、数商），再到投资者（第二顺位），
// 然后是建立信任的关于我们与新闻，再到求职者（第三顺位）；“合作”作为转化按钮固定在最右
export const navOrder: Page[] = [businessIndex, ipPage, dataPage, investors, about, news, join, partner];

// 每个页面的“下一章”，用于页面底部的连续导航
export const nextOf: Record<string, Page> = {
  business: ipPage, ip: dataPage, data: investors, investors: about,
  about: news, news: join, join: partner, partner: businessIndex,
};

/* ============ 首页 ============ */

export const home = {
  intro: '中文在线以数字内容生产、版权分发、IP衍生与知识产权保护为核心，以“夯实内容、决胜IP、国际优先、AI赋能”为发展战略，致力于推动科技与文化融合发展。',
  stats: [
    { value: '560', unit: '万+', label: '数字内容资源' },
    { value: '400', unit: '万+', label: '注册创作者' },
    { value: '200', unit: '+', label: '覆盖国家和地区' },
    { value: '5,200', unit: '万+', label: 'FlareFlow注册用户' },
  ] as Stat[],
  // 决策 D8：可选的受众入口条
  audiences: [
    { label: '合作伙伴', hint: '内容 · 授权 · 海外', href: '/partner' },
    { label: '数商客户', hint: 'AI 数据与语料', href: '/data' },
    { label: '创作者', hint: '投稿 · 签约 · 培训', href: '/business#literature-writers' },
    { label: '投资者', hint: '报告 · 公告 · 联系', href: '/investors' },
    { label: '求职者', hint: '活动 · 福利 · 职位', href: '/join' },
    { label: '读者与观众', hint: '产品与下载', href: '/business#products' },
  ],
  data: {
    title: '正版、可溯源的数据服务',
    intro: '600TB多模态数据、数十家大模型合作，覆盖国内头部大模型厂商与主流互联网平台。',
    services: dataPage.sections[0].blocks[0].type === 'cards' ? dataPage.sections[0].blocks[0].items.map((c) => ({ title: c.title, text: c.text ?? '' })) : [],
  },
  // 年报与公开新闻中明确表述的合作方，logo 待授权
  partners: ['Whale TV', '日本电视台', 'LINE Yahoo', '博报堂DY', 'TVB', '中国移动咪咕', '正大集团', 'Refinery Media', 'Pocket FM'],
  marquee: [
    '罗小黑战记', '一品布衣', '修罗武神', '我的26岁女房客', '破夜', '永徽迷局', '大明王朝', '奇迹王座2',
    '妖怪公寓', '长津湖', '女儿来自银河系', '烽烟尽处', '大乾憨婿', 'The Final Bell',
  ],
  news: news.sections[0].blocks[0].type === 'news' ? news.sections[0].blocks[0].items.slice(0, 3) : [],
  // IP 精选：取 IP 墙前 4 个，带数据标签
  ip: ipPage.sections.find((x) => x.id === 'wall')!.blocks[0].type === 'ipwall' ? (ipPage.sections.find((x) => x.id === 'wall')!.blocks[0] as Extract<Block, { type: 'ipwall' }>).items.slice(0, 4) : [],
  letterLead: '中文在线不再只是一家IP内容公司，而是一家具备全球内容供给能力、AI技术驱动的、全产业链运营的新型数字内容科技公司。',
};
