import { useEffect } from 'react'
import type { ReactNode } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

/** 滚动进场：元素进入视口时淡入上浮（对应旧站 assets/site.js 的 initReveal）。
 *
 *  两个刻意的取舍：
 *  1. 浏览器不支持 IntersectionObserver 时**什么都不做** —— 不加 .reveal，
 *     内容保持默认可见。反过来先加类再兜底会让内容永久消失。
 *  2. 同一排卡片按 i % 3 做轻微错峰，避免整排同时弹出来显得生硬。 */
function Reveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const sel =
      '.card, .step, .sec-head, .shot-trio, .shot-pair, .note, .doc h2, .doc figure, .faq-list, .doc table'

    const els = Array.from(document.querySelectorAll<HTMLElement>(sel))
    els.forEach((el, i) => {
      el.classList.add('reveal')
      if (el.classList.contains('card')) {
        el.style.transitionDelay = `${(i % 3) * 70}ms`
      }
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}

/** 全站骨架：顶栏 + 页面内容 + 页脚。
 *  页面组件自己返回完整的 <main>（各页的 main 类名与结构不同，不在这里统一）。 */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <Reveal />
    </>
  )
}
