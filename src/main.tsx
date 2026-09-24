import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout'
import { PAGE_LOADERS, currentPageKey } from './lib/pages'
import type { PageKey } from './lib/pages'
import './styles/index.css'

/** 唯一的客户端入口：8 个 .html 都引这一个文件。
 *  当前是哪一页由地址栏决定（见 lib/pages.ts 的 currentPageKey），
 *  所以新增页面**不需要**再复制一份入口文件。
 *  页面组件用动态 import，Vite 会按页拆 chunk。 */
async function boot(): Promise<void> {
  const rootEl = document.getElementById('app')
  if (!rootEl) return

  const key = currentPageKey()
  const loader = PAGE_LOADERS[key as PageKey]

  if (!loader) {
    // 理论上到不了这里：GitHub Pages 上不存在的路径会由它自己返回 404
    rootEl.textContent = `页面不存在：${key}`
    return
  }

  const { default: Page } = await loader()

  createRoot(rootEl).render(
    <StrictMode>
      <Layout>
        <Page />
      </Layout>
    </StrictMode>
  )
}

void boot()
