import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** 8 个页面入口（多入口 MPA）。
 *  新增一页要同步三处：① 这里的数组 ② 根目录对应的 .html ③ src/pages/ 下的组件。
 *  漏了这里 → 该页不会被构建，dist 里没有它，线上就是 404。 */
const PAGES = [
  'index',
  'features',
  'guide',
  'updates',
  'faq',
  'terms',
  'disclaimer',
  'privacy'
]

export default defineConfig({
  // 站点部署在域名根（https://agnesbuddy.com/），base 保持默认 '/'
  plugins: [react()],

  // 端口约定：一律不用 5173，从 5174 起；被占用时往上顺延，不报错也不回退到 5173
  server: { port: 5174, strictPort: false },
  preview: { port: 4174, strictPort: false },

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: Object.fromEntries(
        PAGES.map((p) => [p, fileURLToPath(new URL(`./${p}.html`, import.meta.url))])
      )
    }
  }
})
