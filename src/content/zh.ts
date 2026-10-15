// 中文版网站的全部文案与数据。
// 来源：col.com 现有官网与 2026 年董事长致股东信（2026-10 抓取）。
// 标注「示例」「待补充」的内容为版式占位，上线前需替换。
//
// 结构说明：
//   每个“大栏目”是一个独立页面（Page），页面由若干“小板块”（Section）组成，每个小板块有自己的 id。
//   导航下拉菜单、页脚网站地图、页面内吸附导航都由这里的数据自动生成：
//   业务布局是一整页连续滚动：五大业务依次展开，小板块锚点为“业务-板块”（例如 /business#ip-audio）。

/* ============ 类型 ============ */

export type Stat = { value: string; unit?: string; label: string };
export type Card = { id?: string; title: string; text?: string; meta?: string; tag?: string; href?: string; external?: boolean };
export type Cover = { title: string; sub?: string };

export type Block =
  | { type: 'text'; paras: string[]; lead?: boolean }
  | { type: 'stats'; items: Stat[]; note?: string }
  | { type: 'cards'; items: Card[]; cols?: 2 | 3 | 4 }
  | { type: 'covers'; items: Cover[] }
  | { type: 'tags'; title?: string; items: string[] }
  | { type: 'steps'; items: { title: string; text?: string }[] }
  | { type: 'timeline'; items: { year: string; text: string }[] }
  | { type: 'honors'; items: { year: string; items: string[] }[] }
  | { type: 'quote'; text: string; author?: string; role?: string; href?: string; hrefLabel?: string }
  | { type: 'letter'; title: string; lead: string; themes: { k: string; v: string }[]; author: string; role: string; date: string }
  | { type: 'news'; items: { date: string; title: string; tag?: string }[] }
  | { type: 'docs'; cols: { title: string; items: { date: string; title: string }[] }[]; href: string }
  | { type: 'contact'; items: { k: string; v: string }[]; cta?: { label: string; href: string } };

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
  icp: ['京ICP证010590号', '京ICP备09030667号-23', '京网文（2023)4750-133号', '京公网安备 11010102003415号'],
};

const cninfo = 'http://irm.cninfo.com.cn/ircs/search?keyword=300364';

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
        { type: 'stats', items: [
          { value: '560', unit: '万+', label: '积累数字内容资源' },
          { value: '400', unit: '万+', label: '网络原创驻站作者' },
          { value: '49', unit: '万+', label: '小时音频资源' },
          { value: '600', unit: 'TB', label: '文字、音频、视频数据' },
        ] },
        { type: 'text', paras: [
          '中文在线以自有原创平台、知名作家、版权机构为正版数字内容来源，旗下拥有17K小说网、四月天小说网、科幻厂牌“奇想宇宙”、悬疑厂牌“谜想计划”等原创平台。2013年，在中国作家协会指导下，发起成立网大公开课，持续培养出大批优秀职业作家。',
          '以文学IP为核心，打造“网文连载+IP衍生同步开发”的创作模式，通过音频、漫画、动态漫、动画、短剧、影视、游戏以及文创周边等全模态开发，实现从单一网文的生产和经营向文学IP全生命周期生产和经营的进化。',
          '公司持续深化国际业务，已设立美国子公司COL MEDIA、新加坡子公司COL WEB、日本子公司COL JAPAN，并参股Crazy Maple Studio；在AI大模型与多模态方向持续投入，2023年发布AI大模型“中文逍遥”。',
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
      id: 'founder', label: '创始人', en: 'FOUNDER', title: '童之磊',
      intro: '中文在线集团董事长兼总裁',
      blocks: [
        { type: 'quote', text: '十年前，我们抓住了数字出版的机遇；五年前，我们布局了AI与短剧；今天，我们正在“AI+全球化”的双轮驱动下，开启新一轮增长曲线。', author: '童之磊', role: '中文在线集团董事长兼总裁', href: '/investors#letter', hrefLabel: '阅读致股东信' },
      ],
    },
    {
      id: 'honors', label: '企业荣誉', en: 'HONORS', title: '企业荣誉',
      blocks: [
        { type: 'honors', items: [
          { year: '2023', items: ['网络文学海外传播平台奖（中国作协网络文学中心）', '中国“AIGC×泛内容”行业50家最有价值公司', '入选北京市通用人工智能产业创新伙伴计划', '第十二届中国数字出版博览会优秀数字渠道服务商'] },
          { year: '2021', items: ['“十三五”民营书业全民阅读推广单位', '“数字农家书屋”获中国十佳阅读扶贫项目', '2020-2021年度数字出版优秀品牌'] },
          { year: '2018', items: ['第四届中国出版政府奖“先进出版单位奖”', '第三届“首都文化企业30强”', '北京民营企业文化产业百强'] },
          { year: '2017', items: ['新华网“年度品牌影响力教育集团”', '中国教育装备展示会产品金奖'] },
          { year: '2016', items: ['第二届“首都文化企业30佳”'] },
          { year: '2012', items: ['国家版权局“全国版权示范单位”', '中关村新锐企业百强'] },
        ] },
      ],
    },
    {
      id: 'history', label: '发展历程', en: 'MILESTONES', title: '发展历程',
      blocks: [
        { type: 'timeline', items: [
          { year: '2000', text: '中文在线成立于清华大学' },
          { year: '2013', text: '在中国作家协会指导下发起网大公开课' },
          { year: '2015', text: '深交所创业板上市，成为“数字出版第一股”' },
          { year: '2021', text: '成立科幻厂牌“奇想宇宙”' },
          { year: '2023', text: '发布AI大模型“中文逍遥”1.0；更名为中文在线集团' },
          { year: '2025', text: '海外收入占比突破40%，“逍遥”支持14种语言创作' },
        ] }, // 待补充：现有官网逐年内容
      ],
    },
  ],
};

/* ============ 业务布局 /business（五大业务在同一页面中连续展开，锚点 #literature、#ip 等） ============ */

const literature: Page = {
  key: 'literature',
  theme: ['#0071ce', '#00c1de'],
  href: '/business#literature',
  title: '文学平台',
  en: 'LITERATURE',
  intro: '以自有原创平台、知名作家、版权机构为正版数字内容来源，向多终端、多平台、全媒体分发数字阅读产品。',
  sections: [
    {
      id: 'overview', label: '概览', en: 'OVERVIEW', title: '国内最大的正版内容库之一',
      blocks: [
        { type: 'stats', items: [
          { value: '560', unit: '万+', label: '数字内容资源' },
          { value: '400', unit: '万+', label: '网络原创驻站作者' },
          { value: '200', unit: '+', label: '网文流派与品类' }, // 待核实
        ] },
      ],
    },
    {
      id: 'platforms', label: '原创平台', en: 'PLATFORMS', title: '原创平台',
      blocks: [
        { type: 'cards', cols: 2, items: [
          { id: '17k', tag: '核心平台', title: '17K小说网', text: '公司核心的原创内容生产平台，提供玄幻奇幻、都市言情、武侠仙侠、青春校园等全品类内容。', href: '#', external: true },
          { id: '4yt', tag: '女频', title: '四月天', text: '中文在线旗下古风女频原创小说网站，涵盖多类型古装言情小说。', href: '#', external: true },
          { id: 'qixiang', tag: '科幻厂牌', title: '奇想宇宙', text: '成立于2021年11月，以团结更广泛的科幻爱好者为己任，挖掘卓绝的科幻故事，培养更多科幻作者。', href: '#', external: true },
          { id: 'mixiang', tag: '悬疑厂牌', title: '谜想计划', text: '面向喜爱悬疑推理内容的用户，已推出“谜想故事奖”“谜X档案”等项目。', href: '#', external: true },
        ] },
      ],
    },
    {
      id: 'academy', label: '网大公开课', en: 'WRITERS ACADEMY', title: '网大公开课',
      intro: '2013年起发起并创立中国首个“网大公开课”（前身为“网络文学大学”）。',
      blocks: [
        { type: 'text', paras: ['秉承“创作改变人生”的理念，着力培养作家的创作能力，让网络文学新人更快走上职业道路。'] },
      ],
    },
    {
      id: 'distribution', label: '内容分发', en: 'DISTRIBUTION', title: '全媒体分发',
      blocks: [
        { type: 'text', paras: ['在对数字内容进行聚合和管理后，中文在线向多终端、多平台、全媒体分发数字阅读产品，并以文学IP为源头，向音频、动漫、短剧、影视等形态延伸。'] },
        { type: 'cards', cols: 2, items: [
          { title: '继续往下：IP衍生', text: '看一个IP如何被开发成音频、动漫、短剧与影视。', href: '/business#ip' },
          { title: '进入 作品&IP', text: '浏览代表作品与IP推荐。', href: '/works' },
        ] },
      ],
    },
  ],
};

const ip: Page = {
  key: 'ip',
  theme: ['#6c4dff', '#ff5c9a'],
  href: '/business#ip',
  title: 'IP衍生',
  en: 'IP DEVELOPMENT',
  intro: '以文学IP为核心，打造“网文连载+IP衍生同步开发”模式，实现文学IP全生命周期的生产与经营。',
  sections: [
    {
      id: 'overview', label: '全模态开发', en: 'FULL-MODAL', title: '一个IP，多种形态',
      blocks: [
        { type: 'steps', items: [
          { title: '网文连载', text: '原创平台孵化' },
          { title: '音频', text: 'AI主播 · 有声书' },
          { title: '动漫', text: '漫画 · 动态漫 · 动画' },
          { title: '短剧', text: '国内外短剧' },
          { title: '影视', text: '真人剧集与电影' },
          { title: '衍生', text: '游戏 · 文创周边' },
        ] },
      ],
    },
    {
      id: 'audio', label: '音频', en: 'AUDIO', title: '音频',
      intro: '公司的“AI主播”可快速实现文本到语音的转化，支持单播、双播、多人播，覆盖玄幻、悬疑、武侠、历史、言情等类型。',
      blocks: [
        { type: 'stats', items: [{ value: '49', unit: '万+', label: '小时音频资源' }] },
        { type: 'covers', items: [
          { title: '机器之门' }, { title: '从特种兵开始融合万物' }, { title: '都市全能高手' }, { title: '花豹突击队' },
          { title: '长津湖' }, { title: '建军大业' }, { title: '归一' }, { title: '人民的财产' },
          { title: '第九特区' }, { title: '大博弈' }, { title: '大明王朝' }, { title: '橙红年代' },
        ] },
      ],
    },
    {
      id: 'anime', label: '动漫', en: 'ANIMATION', title: '动漫',
      intro: '漫画、动态漫与动画开发，AI漫剧已实现规模化量产。',
      blocks: [
        { type: 'covers', items: [
          { title: '福宝三岁半，她被八个舅舅团宠了' }, { title: '傲世丹神' }, { title: '我的徒弟居然是女帝' }, { title: '九星霸体诀' },
          { title: '罗小黑战记' }, { title: '妖怪公寓' }, { title: '修罗武神' }, { title: '混沌剑神' },
        ] },
      ],
    },
    {
      id: 'drama', label: '短剧', en: 'SHORT DRAMA', title: '短剧',
      intro: '横琴国际短剧拍摄基地配合AI工具链，实现内容“持续上新、快速迭代”。',
      blocks: [
        { type: 'stats', items: [
          { value: '17,000', unit: '㎡', label: '横琴基地可用面积' },
          { value: '94', unit: '组', label: '海外短剧常用场景' },
          { value: '10', unit: '+', label: '北美头部制作方合作' },
        ] },
        { type: 'cards', cols: 2, items: [
          { tag: '获奖', title: '99 Charms, 99 Heartbreaks', text: 'FlareFlow精品短剧，荣获洛杉矶Vertical Shorts Festival「最佳短剧奖」。' },
          { tag: '出海平台', title: 'FlareFlow / Sereal+', text: '查看海外短剧平台与全球发行。', href: '/business#global-platforms' },
        ] },
      ],
    },
    {
      id: 'film', label: '真人影视', en: 'FILM & TV', title: '真人影视',
      blocks: [
        { type: 'covers', items: [
          { title: '招惹' }, { title: '造作时光' }, { title: '皇妃在娱乐圈当顶流' }, { title: '夏虫可语冰' }, { title: '超时空罗曼史' },
          { title: '霸婿崛起' }, { title: '岛上书店' }, { title: '花琉璃轶闻' }, { title: '他跨越山海而来' }, { title: '就想和你谈恋爱' },
        ] },
      ],
    },
    {
      id: 'metaverse', label: '元宇宙社区', en: 'METAVERSE', title: 'IP元宇宙交互社区',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { tag: '产品', title: 'RESTART重启宇宙', text: '国内首个科幻主题元宇宙，以刘慈欣《流浪地球》为核心世界观基底，AIGC深度参与人物、道具与情节构建。' },
          { tag: '赛事', title: '首届全球元宇宙征文大赛', text: '超11000部元宇宙文学作品参赛，开元宇宙内容先河。' },
          { tag: '产学研', title: '清华大学新闻学院元宇宙文化实验室', text: '国内首个带有文化属性的元宇宙实验室，中文在线为产学研支持单位。' },
        ] },
      ],
    },
    {
      id: 'recommend', label: 'IP推荐', en: 'FEATURED IP', title: 'IP推荐',
      blocks: [
        { type: 'covers', items: [
          { title: '天衣' }, { title: '十二楼谜案' }, { title: '买活' }, { title: '破夜' }, { title: '探索者' }, { title: '五个失踪的少年' },
          { title: '永徽迷局' }, { title: '请和优秀的我谈恋爱' }, { title: '女儿来自银河系' }, { title: '我的宗门一点强2' }, { title: '奇迹王座2' }, { title: '烽烟尽处' },
        ] },
      ],
    },
  ],
};

const global: Page = {
  key: 'global',
  theme: ['#00a7c4', '#3ddc97'],
  href: '/business#global',
  title: '海外业务',
  en: 'GLOBAL',
  intro: '业务覆盖200多个国家和地区，在全球多点布局，输出符合当地文化背景的优质IP。',
  sections: [
    {
      id: 'overview', label: '全球布局', en: 'OVERVIEW', title: '东方叙事大航海',
      blocks: [
        { type: 'stats', items: [
          { value: '200', unit: '+', label: '覆盖国家和地区' },
          { value: '40', unit: '%+', label: '海外收入占比' },
          { value: '3,300', unit: '万+', label: 'FlareFlow累计注册用户' },
          { value: '14', unit: '种', label: '内容分销语言' },
        ], note: '数据来源：2026年董事长致股东信' },
      ],
    },
    {
      id: 'platforms', label: '短剧平台', en: 'PLATFORMS', title: '海外短剧平台',
      blocks: [
        { type: 'cards', cols: 2, items: [
          { tag: '短剧平台', title: 'FlareFlow', text: '集内容创作、本地化适配、精准投放、用户反馈于一体的闭环生态平台，累计注册用户超3,300万。' },
          { tag: '短剧平台', title: 'Sereal+', text: '海外短剧平台，由新加坡子公司COL WEB运营。' },
        ] },
      ],
    },
    {
      id: 'infra', label: '四大基础设施', en: 'INFRASTRUCTURE', title: '国际短剧生态的四大基础设施',
      blocks: [
        { type: 'cards', cols: 4, items: [
          { tag: '01', title: '内容制作', text: '横琴国际短剧拍摄基地 + AI工具链，“中国创意+全球制作”。' },
          { tag: '02', title: '观看渠道', text: 'FlareFlow、Sereal+，形成“创作-分发-反馈-优化”飞轮。' },
          { tag: '03', title: 'AI发行', text: '14种语言分销网络，每部短剧生成100-300份推广素材，投放效率提升20倍以上。' },
          { tag: '04', title: '数据中台', text: '实时分析海外观众喜好，预测热门题材，快速测试迭代。' },
        ] },
      ],
    },
    {
      id: 'us', label: '美国', en: 'UNITED STATES', title: '美国 · COL MEDIA',
      blocks: [
        { type: 'text', paras: ['基于长期积累的优质IP，在美国洛杉矶建立了3个影视工作室，分别就不同类别的IP进行差异化的国际影视项目开发，同时积极参与英文头部IP的影视化开发和项目投资。'] },
        { type: 'cards', cols: 2, items: [
          { tag: '项目案例', title: '《岛上书店》电影', text: '由现象级小说《岛上书店》改编的同名电影，中文在线参与投资及IP衍生开发。' },
          { tag: '联系人', title: 'Rick Yan', text: 'yanxiaodong2@col.com' },
        ] },
      ],
    },
    {
      id: 'sg', label: '新加坡', en: 'SINGAPORE', title: '新加坡 · COL WEB',
      blocks: [
        { type: 'text', paras: ['COL Web是COL Group的新加坡分支办公室，专注于国际IP开发、内容分发、特许经营、消费品、战略合作和并购，有利于通过IP价值最大化促进东南亚区域业务增长。'] },
        { type: 'cards', cols: 3, items: [
          { tag: 'IP授权', title: 'COL Web', text: '国际IP开发、授权与战略合作中心。联系人：Bryan Tan · bryantan@col.com' },
          { tag: '孵化器', title: 'COL Labs', text: '面向科技、数字版权、Web3等领域初创企业的孵化器。' },
          { tag: '科幻品牌', title: 'SciFidea', text: '发掘和培育硬科幻IP，举办SciFidea奖·全球科幻征文大赛。联系人：唐风 · tangxp@col.com' },
        ] },
      ],
    },
    {
      id: 'jp', label: '日本', en: 'JAPAN', title: '日本 · COL JAPAN',
      blocks: [
        { type: 'cards', cols: 2, items: [
          { title: '向DMM.com售出五部作品', text: '日本头部电子漫画品牌。' },
          { title: '真人版电影共同开发', text: '与日本三大电影公司之一合作。' },
          { title: '与手塚製作合作', text: '共同开发《铁臂阿童木》《森林大帝》等头部漫画作品NFT。' },
          { title: '轻小说与动画合作', text: '与日本顶级海外小说销售代理签约，推进与顶级动画制作公司的共同企划。' },
        ] },
        { type: 'text', paras: ['联系人：武川基 · takekawa@col.com'] },
      ],
    },
  ],
};

const ipr: Page = {
  key: 'ipr',
  theme: ['#1b3a8c', '#4f7dff'],
  href: '/business#ipr',
  title: '知识产权保护',
  en: 'IP PROTECTION',
  intro: '秉承“先授权、后传播”的原则，通过技术、行政、司法与社会保护，形成全方位立体化的版权保护体系。',
  sections: [
    {
      id: 'overview', label: '概览', en: 'OVERVIEW', title: '权利人维权的重要渠道',
      blocks: [
        { type: 'stats', items: [
          { value: '近万', unit: '起', label: '维权诉讼' },
          { value: '10', unit: '万+部', label: '涉案作品' },
        ] },
        { type: 'text', paras: ['公司通过组建专业团队、利用先进技术、建立广泛合作、多地布局维权基地、打造专业化维权平台，在发挥民事诉讼主要作用的同时，加强与行政执法、公安机关的沟通联络，寻求全方位、多元化的知识产权保护方式。'] },
      ],
    },
    {
      id: 'system', label: '全流程体系', en: 'PROCESS', title: '全流程保护体系',
      blocks: [
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
          { tag: 'WWW.QSHAO.NET', title: '权哨', text: '全球知识产权一站式服务平台，覆盖全国的知产律师与维权调查团队。', href: '#', external: true },
          { tag: '原创保护', title: '无抄', text: '为“发现侵权难、鉴定抄袭难、诉讼维权难”提供帮助，公众号、社群、H5三位一体。' },
          { tag: 'WWW.BANQJ.COM', title: '版权街', text: '版权确权存证与资产管理SaaS，整合著作权、商标、专利、维权、资产管理5项服务。', href: '#', external: true },
        ] },
      ],
    },
  ],
};

const aiPage: Page = {
  key: 'ai',
  theme: ['#ff7a45', '#ffc53d'],
  href: '/business#ai',
  title: 'AI赋能',
  en: 'AI',
  intro: '以AI为技术底座，贯穿创意、生产、分发、变现、反馈全流程。',
  sections: [
    {
      id: 'model', label: '中文逍遥', en: 'LLM', title: '“中文逍遥”大模型',
      intro: '2023年发布，截至2025年底已支持14种语言的作品创作。',
      blocks: [
        { type: 'cards', cols: 3, items: [
          { title: '一键生成万字小说' }, { title: '一张图写一部小说' }, { title: '一次读懂100万字小说' },
        ] },
      ],
    },
    {
      id: 'multimodal', label: 'AI多模态', en: 'MULTIMODAL', title: 'AI多模态',
      blocks: [
        { type: 'text', paras: ['基于多年IP衍生品制作技术与海量数字内容优势，已使用AI生成漫画、动态漫；AI漫剧量产突破数百部，九个月内实现数千万元增量收入。'] },
      ],
    },
    {
      id: 'results', label: '成效', en: 'RESULTS', title: 'AI带来的效率',
      blocks: [
        { type: 'stats', items: [
          { value: '90', unit: '%+', label: 'AI翻译成本下降' },
          { value: '40', unit: '%', label: '生产效率提升' },
          { value: '75', unit: '%+', label: '3D动画单分钟成本下降' },
          { value: '20', unit: '倍+', label: 'AI投放效率提升' },
          { value: '65', unit: '%', label: '优质内容曝光效率提升' },
          { value: '150', unit: '%', label: '用户日均观看时长增长' },
        ], note: '数据来源：2026年董事长致股东信' },
      ],
    },
    {
      id: 'roadmap', label: '三个阶段', en: 'ROADMAP', title: 'AI重塑内容产业的三个阶段',
      blocks: [
        { type: 'steps', items: [
          { title: '效率工具', text: '降低翻译成本、缩短制作周期（已完成）' },
          { title: '爆款引擎', text: '贯穿全流程的“数据飞轮”（进行中）' },
          { title: '创意伙伴', text: 'AI成为主动共创者' },
        ] },
      ],
    },
  ],
};

export const businessPages = [literature, ip, global, ipr, aiPage];

const businessIndex: Page = {
  key: 'business',
  theme: ['#0071ce', '#6c4dff'],
  href: '/business',
  title: '业务布局',
  en: 'BUSINESS',
  intro: '以数字内容生产、版权分发、IP衍生与知识产权保护为核心，AI贯穿全业务。',
  sections: [], // 五大业务的内容见 businessPages，由 /business 页面依次渲染
};

/* ============ 作品&IP /works ============ */

const works: Page = {
  key: 'works',
  theme: ['#6c4dff', '#ff5c9a'],
  href: '/works',
  title: '作品&IP',
  en: 'WORKS & IP',
  intro: '从网文连载到音频、动漫、短剧、影视的全模态开发。',
  sections: [
    { id: 'novels', label: '网文', en: 'NOVELS', title: '网文', blocks: [{ type: 'covers', items: [
      { title: '冰上无双', sub: '真树乃' }, { title: '沧海行', sub: '赖尔' }, { title: '冰上角斗士', sub: '七夏倾寒' }, { title: '烽烟尽处', sub: '酒徒' },
      { title: '奇迹王座2', sub: '半醉游子' }, { title: '我的宗门一点强2', sub: '戎笔江山' }, { title: '女儿来自银河系', sub: '善水' }, { title: '请和优秀的我谈恋爱', sub: '丁十三' },
      { title: '永徽迷局', sub: '满碧乔' }, { title: '五个失踪的少年', sub: '宁航一' }, { title: '破夜', sub: '北流' }, { title: '天衣' },
    ] }] },
    { id: 'audio', label: '有声', en: 'AUDIO', title: '有声', blocks: [{ type: 'covers', items: ip.sections[1].blocks[1].type === 'covers' ? ip.sections[1].blocks[1].items.slice(0, 6) : [] }] },
    { id: 'anime', label: '动漫', en: 'ANIMATION', title: '动漫', blocks: [{ type: 'covers', items: [
      { title: '罗小黑战记' }, { title: '妖怪公寓' }, { title: '傲世丹神' }, { title: '修罗武神' }, { title: '混沌剑神' }, { title: '九星霸体诀' },
    ] }] },
    { id: 'film', label: '影视', en: 'FILM & TV', title: '影视与短剧', blocks: [{ type: 'covers', items: [
      { title: '岛上书店', sub: '电影' }, { title: '99 Charms, 99 Heartbreaks', sub: '短剧' }, { title: '招惹' }, { title: '造作时光' }, { title: '夏虫可语冰' }, { title: '花琉璃轶闻' },
    ] }] },
  ],
};

/* ============ 新闻动态 /news ============ */

const news: Page = {
  key: 'news',
  theme: ['#0071ce', '#00c1de'],
  href: '/news',
  title: '新闻动态',
  en: 'NEWS',
  intro: '中文在线的最新动态与媒体报道。',
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
  ],
};

/* ============ 投资者关系 /investors ============ */

export const irHighlights: Stat[] = [
  { value: '200', unit: '+', label: '业务覆盖国家和地区' },
  { value: '40', unit: '%+', label: '海外收入占比' },
  { value: '3,300', unit: '万+', label: 'FlareFlow累计注册用户' },
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
  intro: '从“数字出版第一股”到“AI驱动的数字文娱平台”：以AI为技术底座、以内容为核心资产、以全球化为发展方向。',
  sections: [
    { id: 'highlights', label: '投资亮点', en: 'HIGHLIGHTS', title: '投资亮点', blocks: [
      { type: 'stats', items: irHighlights, note: '数据来源：2026年董事长致股东信' },
    ] },
    { id: 'strategy', label: '发展战略', en: 'STRATEGY', title: '“AI + 全球化”双轮驱动', blocks: [
      { type: 'cards', cols: 4, items: [
        { tag: '01', title: '夯实内容', text: '560万+正版内容资源、400万+驻站作者，国内最大的正版内容库之一。', href: '/business#literature' },
        { tag: '02', title: '决胜IP', text: 'IP从“消耗型资产”变为“可循环资产”，跨形态、跨语种复用。', href: '/business#ip' },
        { tag: '03', title: '国际优先', text: 'FlareFlow、Sereal+与横琴基地，构建国际短剧基础设施。', href: '/business#global' },
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
    { id: 'filings', label: '公告与报告', en: 'FILINGS', title: '公告与定期报告', intro: '列表在本站浏览，PDF原文在巨潮资讯打开。', blocks: [
      { type: 'docs', href: cninfo, cols: [
        { title: '临时公告', items: [
          { date: '2026-10-10', title: '【示例】关于2026年第三季度报告披露的提示性公告' },
          { date: '2026-09-28', title: '【示例】关于对外投资的公告' },
          { date: '2026-09-15', title: '【示例】关于召开2026年第一次临时股东大会的通知' },
          { date: '2026-08-28', title: '【示例】关于2026年半年度业绩说明会的公告' },
        ] },
        { title: '定期报告', items: [
          { date: '2026-08-28', title: '【示例】2026年半年度报告' },
          { date: '2026-04-25', title: '【示例】2026年第一季度报告' },
          { date: '2026-04-25', title: '【示例】2025年年度报告' },
          { date: '2025-10-28', title: '【示例】2025年第三季度报告' },
        ] },
      ] },
    ] },
    { id: 'governance', label: '公司治理', en: 'GOVERNANCE', title: '公司治理', blocks: [
      { type: 'cards', cols: 4, items: [
        { title: '公司章程', text: '待补充' },
        { title: '董事会', text: '待补充：董事名单与简历' },
        { title: '专门委员会', text: '审计、薪酬与考核、提名、战略' },
        { title: '治理制度', text: '信息披露、投资者关系管理等制度' },
      ] },
    ] },
    { id: 'investment', label: '投资板块', en: 'INVESTMENT', title: '投资板块', blocks: [
      { type: 'cards', cols: 2, items: [
        { tag: '战略直投', title: '投资赋能合作伙伴', text: '围绕上市公司的产业布局及细分领域，通过投资赋能合作伙伴，形成深度捆绑关系，实现共赢式发展。' },
        { tag: '产业基金', title: '聚焦下一代科技创新', text: '元宇宙相关技术、下一代互联网技术、人工智能等，及其与优质内容结合的产业投资机会。' },
      ] },
      { type: 'contact', items: [{ k: '投资业务合作', v: 'gaoyzh@col.com' }] },
    ] },
    { id: 'ir-contact', label: '投资者联系', en: 'CONTACT IR', title: '投资者联系', intro: '欢迎与公司证券事务部联系，或通过深交所互动易平台提问。', blocks: [
      { type: 'contact', items: [{ k: '电话', v: contact.phone }, { k: '邮箱', v: '待补充' }], cta: { label: '互动易提问', href: cninfo } },
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
    { id: 'philosophy', label: '人才理念与发展', en: 'PHILOSOPHY', title: '人才理念与发展', blocks: [
      { type: 'cards', cols: 2, items: [
        { tag: '人才策略', title: '持续提升人才密度', text: '年轻化人才布局，保持组织活力和创造力。' },
        { tag: '人才发展', title: '打造专业人才高地', text: '发掘与培养专业领军人才，夯实专业人才梯队，持续提升人才队伍效能。' },
      ] },
      { type: 'cards', cols: 3, items: [
        { title: '知识库', text: '按部门设置知识库，营造共享共创的氛围。' },
        { title: '导师计划', text: '为每位新员工配备一名导师，帮助快速融入。' },
        { title: '爆款俱乐部', text: '优质内容人才专属俱乐部与成员权益。' },
        { title: '创新大会', text: '为创新孵化项目提供平台与资源支持。' },
        { title: '高潜班培训', text: '科学化人才测评与定制课程，培养预备中高层管理者。' },
        { title: '新员工培训', text: '全景业务、企业文化与制度培训。' },
      ] },
    ] },
    { id: 'life', label: '工作在中文', en: 'LIFE AT COL', title: '工作在中文', blocks: [
      { type: 'tags', title: '员工活动', items: ['年会', '团建', '运动俱乐部', '业绩庆功会', '司龄庆', '中文之星评选', '创新大赛', 'BOSS有约圆桌座谈'] },
      { type: 'tags', title: '员工福利', items: ['五险一金', '补充医疗保险', '年度体检', '午餐补助', '电脑补助', '通讯补助', '年节礼品', '弹性工作制', '健身房', '下午茶', '咖啡机', '周边餐饮住宿折扣'] },
      { type: 'cards', cols: 3, items: [
        { tag: '员工故事', title: '拥抱变化、迎接挑战', text: '在国际业务开拓中探寻新视野与新机会，有共同创业的战友，也有可以分享故事的朋友。' },
        { tag: '员工故事', title: '跳出舒适圈，拼出另一种可能', text: '进入中文后，才发现我原来有那么多面精彩的自己。' },
        { tag: '员工故事', title: '从爱好到职业', text: '公司给予我尝试的机会和平台，在热爱的职业里不断突破。' },
      ] },
    ] },
    { id: 'positions', label: '招聘', en: 'CAREERS', title: '社会招聘与校园招聘', blocks: [
      { type: 'steps', items: [{ title: '浏览岗位' }, { title: '投递简历' }, { title: '面试交流' }] },
      { type: 'cards', cols: 2, items: [
        { id: 'social', tag: '社会招聘', title: '查看社招岗位', text: '前往招聘网站浏览在招职位。', href: '#', external: true },
        { id: 'campus', tag: '校园招聘', title: '查看校招岗位', text: '面向应届毕业生的校园招聘。', href: 'https://zhongwenzaixian.zhiye.com/campus', external: true },
      ] },
    ] },
  ],
};

/* ============ 导航 ============ */

// 顶部导航与页脚网站地图的顺序
export const pages = { about, business: businessIndex, works, news, investors, join };
export const navOrder: Page[] = [about, businessIndex, works, news, investors, join];

// 每个页面的“下一章”，用于页面底部的连续导航
export const nextOf: Record<string, Page> = {
  about: businessIndex, business: works,
  works: news, news: investors, investors: join, join: about,
};

/* ============ 首页 ============ */

export const home = {
  intro: '中文在线以数字内容生产、版权分发、IP衍生与知识产权保护为核心，以“夯实内容、决胜IP、国际优先、AI赋能”为发展战略，致力于推动科技与文化融合发展。',
  stats: about.sections[0].blocks[1].type === 'stats' ? about.sections[0].blocks[1].items : [],
  marquee: [
    '冰上无双', '沧海行', '岛上书店', '罗小黑战记', '大明王朝', '破夜', '永徽迷局', '奇迹王座2',
    '妖怪公寓', '长津湖', '五个失踪的少年', '十二楼谜案', '女儿来自银河系', '99 Charms, 99 Heartbreaks',
  ],
  news: news.sections[0].blocks[0].type === 'news' ? news.sections[0].blocks[0].items.slice(0, 3) : [],
  letterLead: '中文在线不再只是一家IP内容公司，而是一家具备全球内容供给能力、AI技术驱动的、全产业链运营的新型数字内容科技公司。',
};
