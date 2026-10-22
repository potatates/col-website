import { defineConfig } from 'astro/config';

// 部署子路径：GitHub Pages 上为 /col-website（由部署流程通过环境变量传入），本地开发与正式域名下为 /
const base = process.env.BASE_PATH || '/';

// 中文为默认语言（根路径），英文版后续放在 /en 下，并使用独立的页面与版式
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.col.com',
  base,
  // 数商已并入“业务与产品”，旧链接跳转到对应章节
  redirects: { '/data': '/business#data', '/en/data': '/en/business#data' },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
