# 中文版网站结构（草案 v5）

## The model

- **Every big section is its own page.** Each page is one long scroll made of smaller sections.
- **Every small section has an anchor.** On business pages, the sticky bar jumps straight to a part, e.g. 音频 = `/business#ip-audio`. Pages like 关于我们 are read as one continuous story.
- **The homepage is an overview.** Each homepage block previews one big section and links into it.
- **Pages connect to each other.** Each page ends with a "下一章" link to the next one, so someone with no goal can keep going through the whole site.

All pages, menus, the footer sitemap and the in-page section bars are generated from one file: `src/content/zh.ts`.

## Pages

| Page | URL | Sub-sections (anchors) |
|------|-----|------------------------|
| 首页 | `/` | Overview of everything below |
| 关于我们 | `/about` | `#intro` 公司介绍 · `#culture` 企业文化 · `#founder` 创始人 · `#honors` 企业荣誉 · `#history` 发展历程 |
| 业务布局 | `/business` | One continuous page. Five chapters in order, each opening with a colored banner: `#literature` 文学平台 · `#ip` IP衍生 · `#global` 海外业务 · `#ipr` 知识产权保护 · `#ai` AI赋能. Sub-sections use `#<business>-<section>`, e.g. `#ip-audio` 音频, `#global-jp` 日本 |
| 作品&IP | `/works` | `#novels` 网文 · `#audio` 有声 · `#anime` 动漫 · `#film` 影视 |
| 新闻动态 | `/news` | `#official` 官方新闻 · `#media` 媒体报道 |
| 投资者关系 | `/investors` | `#highlights` · `#strategy` · `#letter` · `#filings` · `#governance` · `#investment` · `#ir-contact` |
| 加入我们 | `/join` | `#philosophy` 人才理念与发展 · `#life` 工作在中文 · `#positions` 招聘 |

"下一章" order: 关于我们 → 业务布局 → 作品&IP → 新闻动态 → 投资者关系 → 加入我们

## Navigation

- **Top menu:** plain links to the big sections. Only 业务布局 has a dropdown, listing the five businesses.
- **Business bar:** on 业务布局, a sticky bar shows the five businesses and highlights the one you are currently reading as you scroll. Clicking jumps, but you never have to click: scrolling goes through all five. Other pages have no extra bar.
- **Footer:** the big sections plus the five businesses.

## Still placeholders

- Book/drama covers (currently generated color blocks)
- Full year-by-year timeline, full chairman's letter
- Real filings list, governance docs, IR email, live stock price
- Individual news article pages (`/news/[id]`)
