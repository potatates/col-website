# 中文在线官网（原型）

技术栈：[Astro](https://astro.build) 静态站点，构建产物为纯 HTML/CSS，可部署到任意服务器或 CDN。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

## 部署（GitHub Pages 预览）

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布到
`https://<账号>.github.io/<仓库名>/`。站内链接通过 `src/lib/url.ts` 的 `u()` 自动加上子路径，
本地开发与正式域名下无需任何改动。

注意：GitHub Pages 在中国大陆访问不稳定，仅用于内部预览。正式上线建议部署到国内云（阿里云/腾讯云）并使用已备案的 col.com 域名，
`npm run build` 生成的 `dist/` 即为完整静态站点。

## 目录结构

```
src/
  content/zh.ts            中文版全部文案、数据与页面结构（改内容只需改这里）
  pages/                   各页面：首页、关于我们、业务布局、作品&IP、新闻动态、投资者关系、加入我们
  layouts/SectionPage      栏目页共用版式
  layouts/BaseLayout       公共骨架与全站交互脚本（渐显、计数、光标、滚动高亮等）
  components/zh/           中文版组件（页头、页脚、题图、内容块、业务海报等）
  lib/url.ts               站内链接加部署子路径
  styles/global.css        设计系统（品牌色、卡片、按钮、动效）
docs/sitemap-zh.md         网站结构说明
```

## 英文版计划

英文版放在 `src/pages/en/` 下，配套 `src/content/en.ts` 与 `src/components/en/`，
可以使用与中文版完全不同的版式，仅共享 `BaseLayout` 和 `global.css`。

## 上线前待办

- `src/content/zh.ts` 中所有标注「待核实」「示例」的内容需替换为官方数据
- 替换 Logo（目前为占位“中”字标）与品牌色（`global.css` 中的 `--brand`）
- 补充业务、品牌图片素材
- 股价卡片接入行情数据；公告与报告接入真实 PDF
- 填写 ICP 备案号
