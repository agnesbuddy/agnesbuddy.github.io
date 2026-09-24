/** 更新日志。内容与旧站 server/agnesbuddy/updates.html 一致。 */
export default function Updates() {
  return (
    <main className="wrap section">
      <div className="doc">
        <h2>更新日志</h2>

        <h3>v0.2.1 · 2026-09-24</h3>
        <ul>
          <li>
            <strong>无限画布 · 上传素材增强</strong>：上传图片 / 视频后，节点尺寸自动匹配素材原始比例（如 9:16 竖屏素材显示为竖屏，不再强制 16:9）。
          </li>
          <li>
            <strong>上传即入库</strong>：导入的本地图片 / 视频会自动加入「资产库」，方便后续跨项目复用。
          </li>
          <li>
            <strong>视频落盘与播放</strong>：上传的视频会保存到本地工作区并可直接在画布上播放，不再仅停留在内存。
          </li>
          <li>
            <strong>节点操作优化</strong>：图片节点上方改为常驻的胶囊式操作按钮（裁剪 / 三视图 / 扩图 / 标注），操作更顺手。
          </li>
          <li>
            <strong>模型标识更新</strong>：节点 AI 面板显示最新模型名称（Agnes-30-Flash / Agnes-Image-25-Flash / Agnes-Video-25-Flash）。
          </li>
          <li>
            <strong>品牌更名收尾</strong>：修正启动屏与浏览器标题仍为旧名「Agnes Studio」的遗漏，统一为 AgnesBuddy。
          </li>
        </ul>

        <h3>v0.2.0 · 2026-09-23</h3>
        <ul>
          <li>
            <strong>品牌更名</strong>：Agnes Studio 正式更名 AgnesBuddy，界面各处文案同步更新。
          </li>
          <li>
            <strong>侧栏调整</strong>：「画布」改名「无限画布」；导航图标重新分配；「短剧新版」暂时隐藏（代码保留，可随时恢复）。
          </li>
          <li>
            <strong>登录体验</strong>：登录面板取消底部多余按钮，统一从右上角「×」或点击空白处关闭。
          </li>
          <li>
            <strong>登录稳定性</strong>：修复桌面端因跨域预检失败导致无法登录的问题。
          </li>
          <li>
            <strong>配色体系</strong>：建立统一配色令牌，支持五套主色（宝蓝 / 森林绿 / 深紫 / 石墨 / 洋红）。
          </li>
          <li>
            <strong>深浅主题</strong>：新增浅色 / 深色 / 跟随系统三种模式，业务界面、日志窗口与画布内部同步切换。
          </li>
          <li>
            <strong>官网上线</strong>：功能介绍、使用说明、服务条款、免责声明、隐私政策、常见问题集中到一处。
          </li>
        </ul>

        <h3>v0.1.x</h3>
        <ul>
          <li>完成桌面客户端基础形态：AI 对话、资产库、短剧、无限画布、视频流水线、外观设置。</li>
          <li>完成本机数据持久化与会话管理。</li>
          <li>完成后台任务机制与日志窗口。</li>
        </ul>

        <div className="note">客户端「设置 → 关于 / 更新」里可以直接检查新版本。</div>
      </div>
    </main>
  )
}
