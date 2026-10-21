# 中文版网站结构（v8 · 7 个一级页面，按受众优先级排序；数商并入业务与产品）

完整说明见仓库外的《COL_信息架构_页面树与合并方案_v1.0_20261020.md》与《Decisions log.md》。

| 一级页面 | URL | 小板块（锚点） |
|---|---|---|
| 首页 | `/` | 首屏 · 你是来…… · 业务与产品（+合作伙伴）· 新闻 · IP · 数商 · 关于 · 投资者 · 加入我们 |
| 业务与产品 | `/business` | `#overview` `#products` · 章节 `#global` `#data`（数商服务）`#drama` `#literature` `#ai` `#ipr`（小板块为 `#章节-板块`，如 `#drama-platforms`） |
| IP与作品 | `/ip` | `#wall` `#trailers` `#cases` `#license` `#library` |
| 投资者关系 | `/investors` | `#highlights` `#filings` `#strategy` `#letter` `#governance` `#investment` `#faq` `#ir-contact` |
| 关于我们 | `/about` | `#intro` `#leadership` `#history` `#honors` `#culture` `#esg` `#licenses` |
| 新闻中心 | `/news` | `#official` `#media` `#presskit` |
| 加入我们 | `/join` | `#culture` `#activities` `#people` `#benefits` `#positions` |
| 合作 | `/partner` | `#types`（`#overseas` `#data` `#license` `#content` `#investment` `#supplier` `#media`；从其他页带 `?type=` 跳入时高亮对应卡片）`#form` `#hq` |

全局：页头（8 项导航、业务下拉、股价、语言）· 栏目页左侧页面内导航（手机为页头下横向条；业务与产品展开当前业务的小板块）· 每页底部“合作咨询”横幅 · 页脚（网站地图、社媒二维码、资质、法务）。
右下角 AI 助手（原型：预设问答，D19）。旧链接 `/data` 跳转到 `/business#data`。
不做：H 股内容（决策 D10）。
