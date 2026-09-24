import { FOOT } from '../lib/pages'

/** 页脚：品牌简介 + 三组链接 + 版权行 */
export default function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-in">
          <div className="foot-col foot-brand">
            <a className="logo" href="index.html">
              <span className="logo-mark">AB</span>
              AgnesBuddy
            </a>
            <p>把 AI 对话、素材管理、短剧创作、无限画布与视频流水线收进一个桌面工作台。</p>
          </div>

          {FOOT.map((col) => (
            <div className="foot-col" key={col.title}>
              <h5>{col.title}</h5>
              {col.links.map((l) => (
                <a key={`${col.title}-${l.href}-${l.text}`} href={l.href}>
                  {l.text}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="foot-copy">健康第一</div>
      </div>
    </footer>
  )
}
