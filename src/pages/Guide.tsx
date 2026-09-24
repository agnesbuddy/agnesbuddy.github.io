/** 使用说明：安装、环境、登录、各模块流程、常用操作、数据位置、排障。
 *  内容与旧站 server/agnesbuddy/guide.html 一致。 */
export default function Guide() {
  return (
    <main className="wrap section">
      <div className="doc">
        <p className="meta">最后更新：2026-09-23</p>

        <h2>安装与启动</h2>
        <figure>
          <img className="shot" src="/shot-app.svg" alt="启动后的主界面全貌" loading="lazy" />
          <figcaption>启动后的样子：左边导航，中间工作区，下面是历史任务</figcaption>
        </figure>
        <ol>
          <li>
            把便携包（<code>.zip</code>）解压到任意目录，比如 D 盘上一个文件夹。
          </li>
          <li>
            进入解压目录，双击 <code>AgnesBuddy.exe</code> 启动。无需安装，不写注册表，不留系统盘垃圾。
          </li>
          <li>侧栏是导航：新对话 / 资产库 / 短剧 / 无限画布 / 流水线 / 设置；下方是历史任务列表。</li>
        </ol>

        <h2>运行环境要求</h2>
        <table>
          <thead>
            <tr>
              <th>项</th>
              <th>要求</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>操作系统</td>
              <td>Windows 10 / 11（64 位）</td>
            </tr>
            <tr>
              <td>网络</td>
              <td>需要联网，AI 相关功能依赖云端接口</td>
            </tr>
            <tr>
              <td>磁盘</td>
              <td>素材和生产结果存在本机，建议留出充裕空间</td>
            </tr>
            <tr>
              <td>显卡</td>
              <td>无特殊要求，界面走系统合成</td>
            </tr>
          </tbody>
        </table>

        <h2>第一步：登录</h2>
        <ol>
          <li>侧栏底部点「登录」。</li>
          <li>没有账号先切到「注册」标签，填邮箱、密码（至少 6 位），手机号可以不填。</li>
          <li>注册成功会自动登录。之后侧栏底部显示账号邮箱，点「退出」登出。</li>
        </ol>
        <div className="note">关闭登录面板：点右上角「×」，或点面板外的空白处。</div>

        <h2>第二步：挑一个模块开工</h2>

        <h3>AI 对话</h3>
        <ol>
          <li>点「新对话」，在底部输入框写你的需求，回车发送。</li>
          <li>会话自动出现在任务列表里。双击可重命名，行尾图标可置顶 / 更多操作。</li>
          <li>要在别处接着用这段内容，到「资产库」里找生成结果即可。</li>
        </ol>

        <h3>无限画布</h3>
        <figure>
          <img className="shot" src="/shot-canvas.svg" alt="画布界面：节点排布与连线" loading="lazy" />
          <figcaption>顶部是工具条，节点上的圆点拖出来就能连线</figcaption>
        </figure>
        <ol>
          <li>点「无限画布」进入列表页，点「新建画布」。</li>
          <li>在画布上加节点：放图片、放视频、放文字，拖动摆位置，可连线表示关系。</li>
          <li>图片节点可以在画布内裁剪、标注，也能直接触发再生成。</li>
          <li>右上角可以切换 / 新建 / 删除画布；整份可以导出 JSON，在另一台机器导入回来。</li>
        </ol>

        <h3>视频流水线</h3>
        <figure>
          <img className="shot" src="/shot-pipe.svg" alt="流水线：任务卡片与步骤状态" loading="lazy" />
          <figcaption>每张卡片就是一个任务，横线串起来的是这个任务的步骤</figcaption>
        </figure>
        <ol>
          <li>点「流水线」，再点右上角「＋ 新建」。</li>
          <li>填主题和步骤，保存后它按顺序自动执行。</li>
          <li>任务卡片上能看到每一步状态；失败的步骤会明确标记，改完可以重跑。</li>
        </ol>

        <h3>短剧创作</h3>
        <ol>
          <li>点「短剧」进入。先写大纲，再拆到分集。</li>
          <li>角色、场景、道具统一管理，跨分集复用。</li>
          <li>每集可以产出图像提示词并直接生成，产物落进资产库。</li>
        </ol>

        <h2>常用操作</h2>
        <table>
          <thead>
            <tr>
              <th>想做的事</th>
              <th>怎么做</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>换个外观</td>
              <td>设置 → 外观，选主色和浅色 / 深色 / 跟随系统</td>
            </tr>
            <tr>
              <td>重命名会话</td>
              <td>任务列表里双击会话标题</td>
            </tr>
            <tr>
              <td>批量删除会话</td>
              <td>会话行尾「更多」→ 批量操作</td>
            </tr>
            <tr>
              <td>找到素材文件</td>
              <td>会话或素材上右键 → 打开目录</td>
            </tr>
            <tr>
              <td>看后台日志</td>
              <td>
                <code>Ctrl+Shift+L</code>（管理员账号）
              </td>
            </tr>
            <tr>
              <td>收起侧栏</td>
              <td>点侧栏标题右侧的面板图标</td>
            </tr>
          </tbody>
        </table>

        <h2>数据放在哪</h2>
        <ul>
          <li>会话、素材、画布都存放在本机的数据目录里，不上传到你没授权的第三方。</li>
          <li>备份 = 把这个数据目录整体复制一份；换电脑 = 复制过去，或直接登录账号。</li>
          <li>删掉软件只需把整个解压文件夹删掉；想保留素材就把数据目录单独留下，别一并删。</li>
        </ul>

        <h2>出问题时先看这里</h2>
        <div className="faq-list">
          <details>
            <summary>提示「运行环境不完整」</summary>
            <p>便携包自带的运行环境被误删或被安全软件隔离了。重新解压一次，并把解压目录加入安全软件的白名单。</p>
          </details>
          <details>
            <summary>网页能登录，桌面端登录不了</summary>
            <p>
              桌面端的页面来自本地文件，属于跨域请求。如果服务器的跨域预检没有正确放行，登录请求会被浏览器拦掉。这个我们已经按表单请求方式规避过了；若仍失败，把登录框里的红色提示原文发给技术支持。
            </p>
          </details>
          <details>
            <summary>画布上的图片不显示</summary>
            <p>先确认这张图的源文件还在数据目录里；被外部程序移动或清理过就会变破图。重进一次画布让它重新读取即可。</p>
          </details>
          <details>
            <summary>视频生成迟迟没结果</summary>
            <p>视频通常要几分钟。期间可以切到别处工作。若超过十分钟没有动静，打开「接口日志」看这一步是否还在排队。</p>
          </details>
          <details>
            <summary>界面颜色怪怪的（深浅混搭）</summary>
            <p>到「设置 → 外观」把模式切一次再切回来。主题是整套令牌控制的，正常情况下深浅会同步切换。</p>
          </details>
        </div>

        <div className="note">
          上面没覆盖的情况，请到<a href="faq.html">常见问题</a>再看一眼，或者直接联系技术支持。
        </div>
      </div>
    </main>
  )
}
