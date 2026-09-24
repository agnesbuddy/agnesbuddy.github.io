/** 首页：定位 + 六大模块概览 + 三步上手 + 三个主力模块 + 卖点 + 常见问题入口 + 收尾 CTA
 *  内容与旧站 server/agnesbuddy/index.html 完全一致，只做了 HTML→JSX 的搬运。 */
export default function Home() {
  return (
    <main>
      <div className="wrap hero">
        <span className="tag">桌面 AI 工作台 · Windows</span>
        <h1>一个窗口，跑完从想法到成片</h1>
        <p className="sub">
          AgnesBuddy 把 AI 对话、素材管理、短剧创作、无限画布和视频流水线收进同一个桌面窗口。 左边栏挑模块，右边主区域干活——一个软件顶好几个独立工具，不用在多个窗口之间来回切。
        </p>
        <div className="hero-btns">
          <a className="btn primary" href="guide.html">
            看使用说明
          </a>
          <a className="btn ghost" href="features.html">
            了解功能
          </a>
        </div>
        <figure className="hero-shot">
          <img className="shot" src="/shot-app.svg" alt="AgnesBuddy 主界面：左侧模块导航，右侧正在进行的 AI 对话" />
          <figcaption>主界面：左侧挑模块，右侧干活，历史会话一直在手边</figcaption>
        </figure>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="sec-head center">
            <h2>它能做什么</h2>
            <p>窗口里集成了多个创作模块，覆盖从对话、素材、短剧到画布、流水线的主要环节，按需挑一个开工即可</p>
          </div>
          <div className="grid g3">
            <div className="card">
              <img className="shot shot-sm card-shot" src="/shot-app.svg" alt="AI 对话界面示意" loading="lazy" />
              <h3>AI 对话</h3>
              <p>开会话就跟 AI 聊。每次对话自动留成一条任务，随时回头接着问，上下文不丢。</p>
            </div>
            <div className="card">
              <img className="shot shot-sm card-shot" src="/shot-lib.svg" alt="资产库瀑布流界面示意" loading="lazy" />
              <h3>资产库</h3>
              <p>生成过的图、视频、素材统一归档在这里，按时间倒序排列，缩略图即预览，翻找方便。</p>
            </div>
            <div className="card">
              <img className="shot shot-sm card-shot" src="/shot-drama.svg" alt="短剧创作界面示意" loading="lazy" />
              <h3>短剧创作</h3>
              <p>从大纲到分集、角色、场景、台词一路往下写，图文提示词一起产出，不再东一块西一块。</p>
            </div>
            <div className="card">
              <img className="shot shot-sm card-shot" src="/shot-canvas.svg" alt="无限画布界面示意" loading="lazy" />
              <h3>无限画布</h3>
              <p>把图片、视频、文字摊在一张能无限拖的画布上。能缩放、能连线、能裁剪标注，也能整份导出 JSON。</p>
            </div>
            <div className="card">
              <img className="shot shot-sm card-shot" src="/shot-pipe.svg" alt="视频流水线界面示意" loading="lazy" />
              <h3>视频流水线</h3>
              <p>设定主题和步骤，让它按顺序自动往下跑。适合一次要出好几段、要挂在后台慢慢跑的活。</p>
            </div>
            <div className="card">
              <img className="shot shot-sm card-shot" src="/shot-theme.svg" alt="五套主色与深浅主题示意" loading="lazy" />
              <h3>外观与主题</h3>
              <p>五套主色（宝蓝 / 森林绿 / 深紫 / 石墨 / 洋红），浅色深色随时切，也能跟随系统。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head center">
            <h2>三步上手</h2>
            <p>第一次用的话，照这个顺序走一遍就够了</p>
          </div>
          <div className="steps">
            <div className="step">
              <h4>解压、启动、登录</h4>
              <p>把便携包解压到任意目录，双击 exe 就能用。要用云端 AI 功能就注册并登录，账号只需邮箱，手机号选填。</p>
            </div>
            <div className="step">
              <h4>挑一个模块开工</h4>
              <p>写文案走「AI 对话」，管素材走「资产库」，做分镜走「无限画布」，批量出片走「视频流水线」。</p>
            </div>
            <div className="step">
              <h4>结果都留在本机</h4>
              <p>每个模块产出的图、视频、文本都存在你电脑的数据目录里，下次打开对应模块就能找到；各模块目前各自独立，按需手动取用。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head center">
            <h2>三个主力模块</h2>
            <p>创作量最大的环节，都在这儿完成</p>
          </div>
          <div className="shot-trio">
            <figure>
              <img className="shot" src="/shot-drama.svg" alt="短剧创作：大纲、角色、场景与分集同屏管理" loading="lazy" />
              <figcaption>短剧：大纲、角色、场景、分集同屏管理</figcaption>
            </figure>
            <figure>
              <img className="shot" src="/shot-canvas.svg" alt="无限画布：图片、视频、文字节点自由排布并用连线表达关系" loading="lazy" />
              <figcaption>无限画布：素材摊开摆，关系用线连，整份能导出</figcaption>
            </figure>
            <figure>
              <img className="shot" src="/shot-pipe.svg" alt="视频流水线：任务按顺序执行，每步状态可见" loading="lazy" />
              <figcaption>视频流水线：步骤串起来自动跑，卡在第几步一眼看到</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head center">
            <h2>为什么用它</h2>
            <p>不是又一层网页壳，是跑在本机上的正经桌面应用</p>
          </div>
          <div className="grid g2">
            <div className="card">
              <h3>素材和会话都在本机</h3>
              <p>应用本体、素材和会话记录都放在你自己的电脑里，不依赖某个云端仓库也能用。</p>
            </div>
            <div className="card">
              <h3>一个窗口覆盖多个环节</h3>
              <p>对话、素材、短剧、画布、流水线在同一窗口里切换，不用在好几个独立软件之间来回倒腾。</p>
            </div>
            <div className="card">
              <h3>界面可以按自己口味调</h3>
              <p>五套主色 + 深浅主题，配色是整套令牌管理的，不会出现深浅混搭的花屏。</p>
            </div>
            <div className="card">
              <h3>换电脑也不丢</h3>
              <p>数据在本机目录，整体复制过去就能接着用；也能登录账号同步账号信息。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head center">
            <h2>常见问题</h2>
            <p>
              挑了三条最常被问到的，完整清单在<a href="faq.html">常见问题</a>页
            </p>
          </div>
          <div className="grid g3">
            <div className="card">
              <h3>要不要一直联网？</h3>
              <p>要。AI 相关的功能都依赖云端接口，本机负责素材管理和流程组织。</p>
            </div>
            <div className="card">
              <h3>App 登录不上怎么办？</h3>
              <p>
                先确认账号密码没输错；若网页能登而桌面端不行，多半是被服务器的跨域策略拦了，见<a href="faq.html">使用说明与排障</a>。
              </p>
            </div>
            <div className="card">
              <h3>换台电脑还能用吗？</h3>
              <p>数据在你本机。搬走请把整个数据目录复制过去，或者直接登录账号。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        {/* 这一块原本是内联 style，用 Tailwind 原子类表达更干净（任意值语法保持与旧站同样的数值） */}
        <div className="wrap text-center">
          <h2 className="m-0 mb-2 text-[25px] text-n-900">准备好开工了吗</h2>
          <p className="m-0 mb-[22px] text-n-500">先看一遍使用说明，五分钟就能跑通第一条流程。</p>
          <a className="btn primary" href="guide.html">
            打开使用说明
          </a>
          <a className="btn ghost ml-2" href="features.html">
            功能详解
          </a>
        </div>
      </section>
    </main>
  )
}
