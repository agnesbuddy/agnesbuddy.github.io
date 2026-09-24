import type { ComponentType } from 'react'

/** 页面标识：与根目录同名 .html 一一对应 */
export type PageKey =
  | 'index'
  | 'features'
  | 'guide'
  | 'updates'
  | 'faq'
  | 'terms'
  | 'disclaimer'
  | 'privacy'

/** 顶栏导航。改菜单只改这里，8 个页面统一生效（对应旧站 assets/site.js 的 NAV）。 */
export const NAV: { href: string; text: string }[] = [
  { href: 'index.html', text: '首页' },
  { href: 'features.html', text: '功能介绍' },
  { href: 'guide.html', text: '使用说明' },
  { href: 'updates.html', text: '更新日志' },
  { href: 'faq.html', text: '常见问题' },
  { href: 'terms.html', text: '条款与声明' }
]

/** 页脚分组（对应旧站 assets/site.js 的 FOOT） */
export const FOOT: { title: string; links: { href: string; text: string }[] }[] = [
  {
    title: '产品',
    links: [
      { href: 'features.html', text: '功能介绍' },
      { href: 'guide.html', text: '使用说明' },
      { href: 'updates.html', text: '更新日志' }
    ]
  },
  {
    title: '帮助',
    links: [
      { href: 'faq.html', text: '常见问题' },
      { href: 'terms.html', text: '服务条款' },
      { href: 'privacy.html', text: '隐私政策' }
    ]
  },
  {
    title: '法律',
    links: [
      { href: 'disclaimer.html', text: '免责声明' },
      { href: 'terms.html', text: '服务条款' }
    ]
  }
]

/** 页面组件按需加载：每页只下载自己的 chunk，首页不会带上条款页的代码 */
export const PAGE_LOADERS: Record<PageKey, () => Promise<{ default: ComponentType }>> = {
  index: () => import('../pages/Home'),
  features: () => import('../pages/Features'),
  guide: () => import('../pages/Guide'),
  updates: () => import('../pages/Updates'),
  faq: () => import('../pages/Faq'),
  terms: () => import('../pages/Terms'),
  disclaimer: () => import('../pages/Disclaimer'),
  privacy: () => import('../pages/Privacy')
}

/** 从地址栏判断当前是哪个页面：
 *  `/` 和 `/index.html` → index；`/features.html` → features。
 *  生产环境是静态托管，地址一定带 .html（GitHub Pages 不做扩展名重写）。 */
export function currentPageKey(): string {
  const seg = window.location.pathname.split('/').pop() ?? ''
  const name = seg.replace(/\.html$/i, '')
  return name === '' || name === 'index' ? 'index' : name
}

/** 顶栏当前页高亮：比较文件名而非完整路径，子目录部署也不会失效 */
export function isCurrentHref(href: string): boolean {
  return href === `${currentPageKey()}.html`
}
