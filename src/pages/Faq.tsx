/** 常见问题（13 条折叠问答）。内容与旧站 server/agnesbuddy/faq.html 一致。
 *  第一条默认展开，与旧站的 <details open> 行为一致。 */
export default function Faq() {
  return (
    <main className="wrap section">
      <div className="doc">
        <h2>常见问题</h2>

        <details open>
          <summary>需要一直联网吗？</summary>
          <p>需要。AI 相关的功能都依赖云端接口；本机负责的是素材管理、画布、流程组织这些环节。断网时依然可以浏览已有的会话和素材。</p>
        </details>

        <details>
          <summary>收费吗？</summary>
          <p>本软件由 uscms 提供，供个人或非商业用途免费使用。调用第三方 AI 服务可能按该服务商的计费规则产生费用，取决于你自己的配置。</p>
        </details>

        <details>
          <summary>注册时邮箱要验证吗？</summary>
          <p>不需要。服务端不发验证邮件，注册完直接就能登录。密码至少 6 位，手机号可以不填。</p>
        </details>

        <details>
          <summary>桌面端登录失败怎么办？</summary>
          <p>
            先确认邮箱密码没输错。如果网页版能登而桌面端不行，登录框里会给出红色提示，把提示原文发给技术支持——它已经区分了「网络不通」「服务器异常」「账号或密码错误」三种情况。多数情况下是服务器的跨域策略问题，目前已按表单请求方式规避。
          </p>
        </details>

        <details>
          <summary>忘记密码了？</summary>
          <p>账号系统不提供自助找回。请联系技术支持协助处理。</p>
        </details>

        <details>
          <summary>数据存在哪里？换电脑怎么办？</summary>
          <p>
            会话、素材、画布都在你本机的数据目录里。换电脑就把整个目录复制过去；也可以用原来的账号登录。备份只需要把这个目录整体拷一份，详见<a href="guide.html">使用说明</a>。
          </p>
        </details>

        <details>
          <summary>画布上的图变成破图了</summary>
          <p>源文件被外部程序移动或清理就会出现这种情况。重新进入一次画布让它重新读取；如果文件已经不在数据目录里，就只能重新生成或重新导入。</p>
        </details>

        <details>
          <summary>视频生成要多久？</summary>
          <p>通常几分钟。这期间可以切到别的模块继续干活，回来结果还在队列里。超过十分钟没动静，可以打开「接口日志」确认是否还在排队。</p>
        </details>

        <details>
          <summary>换了主色以后界面颜色变怪了</summary>
          <p>配色是整套令牌管理的，所有主色都做过白字对比度校验。若出现深浅混搭，到「设置 → 外观」把模式重切一次即可；仍不正常请截图反馈。</p>
        </details>

        <details>
          <summary>能同时跑多个任务吗？</summary>
          <p>可以。流水线任务在后台执行，画布上的生成任务也有各自的状态。建议一次不要堆太多大任务，避免接口限流。</p>
        </details>

        <details>
          <summary>接口日志和后台日志有什么区别？</summary>
          <p>
            接口日志看客户端发出的每一次请求与返回；后台日志看命令行或计划任务跑的 worker 执行过程。两者都只对管理员账号显示，快捷键 <code>Ctrl+Shift+L</code> 打开后台日志。
          </p>
        </details>

        <details>
          <summary>启动时提示「运行环境不完整」</summary>
          <p>安装包自带的运行环境被删除或被安全软件隔离了。重新安装一次，并把安装目录加入安全软件白名单。</p>
        </details>

        <details>
          <summary>卸载会删掉我的数据吗？</summary>
          <p>不会。数据目录需要你自己手动删除，这样也避免了误卸载导致素材全丢。</p>
        </details>
      </div>
    </main>
  )
}
