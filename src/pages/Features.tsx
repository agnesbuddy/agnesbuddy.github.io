/** 功能介绍：逐模块说明。内容与旧站 server/agnesbuddy/features.html 一致。 */
export default function Features() {
  return (
    <main className="wrap section">
      <div className="doc">
        <h2>AI 对话</h2>
        <figure>
          <img className="shot" src="/shot-app.svg" alt="AI 对话界面：左侧导航与任务列表，右侧会话与生成结果" loading="lazy" />
          <figcaption>对话产生的图片、视频直接留在会话里，随时可以回看和接着聊</figcaption>
        </figure>
        <p>侧栏第一项是「新对话」。点一下就开一条会话，输问题、回车，回答直接出在右边。</p>
        <ul>
          <li>每条会话自动出现在侧栏下方的任务列表里，标题取自你的第一句话。</li>
          <li>双击标题可以直接重命名；悬停行尾有置顶和更多菜单（批量操作、打开目录、删除）。</li>
          <li>会话数据存在本机的数据目录里，关掉窗口不会丢。</li>
        </ul>

        <h2>资产库</h2>
        <figure>
          <img className="shot" src="/shot-lib.svg" alt="资产库：图片与视频素材以瀑布流方式归档" loading="lazy" />
          <figcaption>瀑布流归档，缩略图即预览，翻找素材很直观</figcaption>
        </figure>
        <p>所有生成产物和导入素材的集中管理页。</p>
        <ul>
          <li>按时间倒序排列，图片、视频分别看的缩略图和预览。</li>
          <li>生成的图片、视频都归档在资产库，方便创作时翻找与整理。</li>
          <li>右键可以打开素材所在的本地目录，方便你自己拿去别的软件加工。</li>
        </ul>

        <h2>短剧创作</h2>
        <figure>
          <img className="shot" src="/shot-drama.svg" alt="短剧创作：大纲、角色、场景与分集同屏管理" loading="lazy" />
          <figcaption>大纲、角色、场景放左边，分集进度铺右边，不用来回翻页</figcaption>
        </figure>
        <p>面向「要写成系列」的内容，不是一次性的单篇。</p>
        <ul>
          <li>先定大纲，再往下拆分集，角色、场景、道具统一管理。</li>
          <li>每一步都能直接产出对应的图像提示词，不会写到一半提示词跑偏。</li>
          <li>生成出来的图落到资产库，写下一集时能回看同一套角色参考。</li>
        </ul>

        <h2>无限画布</h2>
        <figure>
          <img className="shot" src="/shot-canvas.svg" alt="无限画布：图片、视频、文字节点连线成图" loading="lazy" />
          <figcaption>节点随便拖，连线说明关系，虚线节点是还在生成的内容</figcaption>
        </figure>
        <p>一张可以无限拖动和缩放的画布，用来排布思路和素材。</p>
        <ul>
          <li>节点类型覆盖图片、视频、文字；位置自由拖拽，可以连线表达关系。</li>
          <li>图片节点支持裁剪与标注，也能在画布上直接触发生成。</li>
          <li>支持多张画布管理；每张都能导出成 JSON 文件，换台电脑再导入回来。</li>
          <li>视频生成往往要跑几分钟，期间可以切走干别的，回来结果还在队列里。</li>
        </ul>

        <h2>视频流水线</h2>
        <figure>
          <img className="shot" src="/shot-pipe.svg" alt="视频流水线：多个任务按顺序执行，状态与失败原因可见" loading="lazy" />
          <figcaption>运行中 / 已完成 / 哪一步失败，全都写在卡片上</figcaption>
        </figure>
        <p>把重复的活串起来自动跑。</p>
        <ul>
          <li>新建任务时给一个主题和若干步骤，它会按顺序一步步往下执行。</li>
          <li>适合一次要出好几段内容、或者需要在后台慢慢跑的场景。</li>
          <li>每一步的状态在当前任务卡片上就能看到，失败的步骤会明确标出来。</li>
        </ul>

        <h2>外观与主题</h2>
        <figure>
          <img className="shot" src="/shot-theme.svg" alt="五套主色与浅色深色两套界面" loading="lazy" />
          <figcaption>五套主色任选，浅色深色随时切，整套界面一起换不会串色</figcaption>
        </figure>
        <p>在「设置 → 外观」里调整。</p>
        <ul>
          <li>
            <strong>五套主色</strong>：宝蓝、森林绿、深紫、石墨、洋红。整套界面（含侧栏、按钮、强调色）跟着换。
          </li>
          <li>
            <strong>深浅主题</strong>：浅色、深色、跟随系统三选一。深色模式下业务界面、日志窗口、画布内部会一起切换，不会出现一半白一半黑。
          </li>
          <li>配色是统一的令牌体系管理的，所有主色都做过白字对比度校验，看起来清楚不刺眼。</li>
        </ul>

        <h2>账号与登录</h2>
        <ul>
          <li>邮箱注册、邮箱登录，手机号选填；服务端不清空你的素材，也不代管你的 API Key。</li>
          <li>登录后侧栏底部会显示当前账号，点「退出」即登出。</li>
          <li>管理员账号额外可以看到「接口日志」「后台日志」两个排障窗口。</li>
        </ul>

        <h2>日志与排障</h2>
        <p>这两项只对管理员账号显示。</p>
        <ul>
          <li>
            <strong>接口日志</strong>：实时看每一次调用发出去的参数和回来的结果，判断是模型问题还是参数问题。
          </li>
          <li>
            <strong>后台日志</strong>：看命令行或计划任务跑的任务过程，快捷键 <code>Ctrl+Shift+L</code>。
          </li>
        </ul>

        <div className="note">
          想看具体怎么一步步操作，请打开<a href="guide.html">使用说明</a>。
        </div>
      </div>
    </main>
  )
}
