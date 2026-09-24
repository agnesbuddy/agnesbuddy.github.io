import { useState } from 'react'
import { NAV, isCurrentHref } from '../lib/pages'

/** 顶栏：品牌标识 + 导航 + 移动端汉堡菜单。
 *  移动端菜单的展开/收起状态是组件内 state，点击任意导航项后自动收起。 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-head">
      <div className="wrap head-in">
        <a className="logo" href="index.html">
          <span className="logo-mark">AG</span>
          AgnesBuddy
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="展开菜单"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav
          className={open ? 'nav open' : 'nav'}
          onClick={(e) => {
            // 点了某个导航项就把移动端菜单收起来
            if ((e.target as HTMLElement).tagName === 'A') setOpen(false)
          }}
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={isCurrentHref(n.href) ? 'on' : undefined}>
              {n.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
