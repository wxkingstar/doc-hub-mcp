<!--
title: 接入需知
id: 7472308462216822812
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-access-notice
updatedAt: 1742458868000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-access-notice
-->
# 接入需知
:::html
<md-alert type="warn">
  在飞书在线文档嵌入业务系统场景中，通过云文档组件提供的**配置能力**，可以轻松定制所嵌入飞书在线文档的基础模块功能。同时也提供了**API调用能力**，可以在运行时来调用飞书在线文档配置显示能力。
当然云文档组件并不是所有能力都支持，此处引入一个**自查手册**，在接入前请认真评估现有能力是否能满足业务场景的接入诉求。
</md-alert>
:::
## 支持环境

| **PC浏览器**                   | **手机浏览器** | **iPad浏览器** | **手机飞书客户端内打开** | **iPad飞书客户端内** |
| --------------------------- | --------- | ----------- | -------------- | -------------- |
| ✅ （Chrome最佳，Safari部分功能兼容不好） | ✅         | ✅           | ✅              | ❌              |
## 产品能力

目前飞书在线文档管理主要包括三部分：`飞书云文档`、`飞书Sheet表格`、`飞书多维表格`，针对这些能力的支持情况说明：
**产品**        | **配置能力**                         | **API调用能力** | **迭代**                    |
| ------------- | -------------------------------- | ----------- | ------------------------- |
| **飞书云文档**     | ✅                                | ✅           | 维护                        |
| **飞书wiki文档**  | ❌                                | ❌           | 可通过[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node) 调用将 wiki 转成云文档来支持 |
| **飞书Sheet表格** | **仅支持** **`PC Header`** **配置能力** | ❌           | 不再更新                      |
| **飞书多维表格**    | ❌                                | ❌           | ❌
## 配置能力

| **主配置**           | **子配置**                         | **类型**            | **说明**                                        | **PC** | **Mobile** |
| ----------------- | ------------------------------- | ----------------- | --------------------------------------------- | ------ | ---------- |
| LIKE(点赞)          | enable                          | boolean           | 是否显示点赞部分                                      | ✅      | ✅          |
| IMAGE(图片)         | viewer                          | Inner \| outer    | 预览方式                                          | ✅      | ✅          |
|                   | needBlob                        | boolean           | 预览方式为outer时 是否在onImageView事件中返回blob参数         | ✅      | ✅          |
|                   | maxWidth                        | number            | 缩放图片时最大宽度                                     | ✅      | ✅          |
| SHARE(分享)         | enable                          | boolean           | 是否开启分享                                        | ✅      | ❌          |
|                   | border                          | boolean           | 是否展示分享权限按钮的border                             | ✅      | ❌          |
|                   | text                            | string            | 分享按钮文本                                        | ✅      | ❌          |
|                   | visibleConfig                   | object            | 分享设置                                          | ✅      | ❌          |
|                   | visibleConfig.invite            | boolean           | 是否显示邀请                                        | ✅      | ❌          |
|                   | visibleConfig.shareLink         | boolean           | 是否显示分享链接                                      | ✅      | ❌          |
|                   | visibleConfig.shareMethod       | boolean           | 是否显示分享方式                                      | ✅      | ❌          |
| MODAL(模态窗)        | outerMask                       | boolean \| object | 有模态窗时， 组件外是否有遮罩                               | ✅      | ✅          |
|                   | outerMask.enable                | boolean           | 是否显示                                          | ✅      | ✅          |
|                   | outerMask.zIndex                | number            | 组件外遮罩层级                                       | ✅      | ✅          |
| HEADER(头部)        | enable                          | boolean           | 是否显示头部                                        | ✅      | ✅          |
|                   | color                           | string            | 背景颜色                                          | ✅      | ❌          |
|                   | bottomLine                      | boolean           | header底下的线是否存在                                | ✅      | ❌          |
|                   | height                          | number            | header高度                                      | ✅      | ❌          |
| FOOTER(尾部)        | enable                          | boolean           | 是否显示底部                                        | ✅      | ✅          |
| CONTENT(内容)       | mode                            | default \| wide   | 页宽设置                                          | ✅      | ❌          |
|                   | readonly                        | boolean           | 是否只读模式                                        | ✅      | ✅          |
|                   | titleVisible                    | boolean           | 是否显示标题                                        | ✅      | ✅          |
|                   | padding                         | array             | 文档内边距，例：[10, 0, 10, 0] 为上下增加 10 px 边距        | ✅      | ❌          |
|                   | maxWidth                        | number            | 内容最大宽度                                        | ✅      | ❌          |
|                   | hyperlinkHandler                | inner \| outer    | 打开链接方式                                        | ✅      | ❌          |
|                   | background                      | string            | 背景颜色                                          | ✅      | ❌          |
|                   | hideScrollbar                   | boolean           | 是否隐藏滚动条                                       | ✅      | ❌          |
|                   | unscrollable                    | boolean           | 云文档组件是否允许滚动                                   | ✅      | ❌          |
|                   | borderRadius                    | boolean           | 中间部分是否存在圆角                                    | ✅      | ❌          |
|                   | borderRadiusColor               | string            | 中间部分圆角背后的背景颜色                                 | ✅      | ❌          |
|                   | toolbox                         | object            | block工具栏                                      | ✅      | ❌          |
|                   | toolbox.enable                  | boolean           | 是否开启工具栏                                       | ✅      | ❌          |
| COMMENT(评论)       | partial                         | object            | 局部评论                                          | ✅      | ✅          |
|                   | partial.enable                  | boolean           | 是否显示 
|                   | partial.open                  | boolean           | 是否展开局部评论侧栏 只在初始化设置有效 | ✅      | ❌          |
|                   | global                          | object            | 全文评论                                          | ✅      | ✅          |
|                   | global.enable                   | boolean           | 是否显示                                          | ✅      | ✅          |
| SIDEBAR(右侧边栏)     | borderSide                      | array             | 侧边栏边框显隐，例：[true, true, false, false] 上、右侧有边框 | ✅      | ❌          |
| DIRECTORY(目录)     | enable                          | boolean           | 是否显示                                          | ✅      | ❌          |
|| pin               | boolean                         | 是否收起 只在初始化设置有效    |✅      | ❌                                                         |        |            |
| MORE_MENU(更多菜单)   | enable                          | boolean           | 是否显示                                          | ✅      | ❌          |
|                   | items                           | object            | 配置                                            | ✅      | ❌          |
|                   | items.findAndReplaceEnable      | boolean           | 是否显示查找替换                                      | ✅      | ❌          |
|                   | items.applyEditPermissionEnable | boolean           | 是否显示申请编辑权限入口                                  | ✅      | ❌          |
|                   | items.makeCopyEnable            | boolean           | 是否显示创建副本                                      | ✅      | ❌          |
|                   | items.exportEnable              | boolean           | 是否显示导出                                        | ✅      | ❌          |
|                   | items.documentInfoEnable        | boolean           | 是否显示文档详情                                      | ✅      | ❌          |
|                   | items.editHistoryEnable         | boolean           | 是否显示编辑历史                                      | ✅      | ❌          |
|                   | items.commentHistoryEnable      | boolean           | 是否显示评论历史                                      | ✅      | ❌          |
|                   | items.translateEnable           | boolean           | 是否显示翻译                                        | ✅      | ❌          |
|                   | items.printEnable               | boolean           | 是否显示打印                                        | ✅      | ❌          |
|                   | items.deleteEnable              | boolean           | 是否显示删除                                        | ✅      | ❌          |
| FULLSCREEN(全屏)    | enable                          | boolean           | 是否显示全屏按钮                                      | ✅      | ✅          |
| COLLABORATOR(协作者) | enable                          | boolean           | 是否显示                                          | ✅      | ❌          |
| TABS(sheet表格)     | enable                          | boolean           | sheet表格头是否隐藏                                  | ✅      | ❌          |
## API调用能力

| **方法名**                        | **说明**       | **PC** | **Mobile** |
| ------------------------------ | ------------ | ------ | ---------- |
| hasUnFinishedTask              | 获取是否存在未完成的任务 | ✅      | ❌          |
| scrollTo                       | 滚动到指定距离      | ✅      | ❌          |
| findAndReplace                 | 查找替换         | ✅      | ❌          |
| makeCopy                       | 创建副本         | ✅      | ❌          |
| print                          | 打印文档         | ✅      | ❌          |
| documentInfo                   | 文档信息         | ✅      | ❌          |
| share                          | 权限分享         | ✅      | ❌          |
| delete                         | 删除文档         | ✅      | ❌          |
| commentHistory                 | 评论历史记录       | ✅      | ❌          |
| editHistory                    | 编辑历史记录       | ✅      | ❌          |
| report                         | 举报文档         | ✅      | ✅          |
| export                         | 导出文档         | ✅      | ❌          |
| translate                      | 翻译文档         | ✅      | ❌          |
| anchorJump                     | 锚点跳转         | ✅      | ❌          |
| getTitle                       | 获取标题         | ✅      | ✅          |
| getCurrentAuth                 | 获取用户权限       | ✅      | ✅          |
| getDirectoryData               | 获取目录数据       | ✅      | ❌          |
| getAnchorTop                   | 获取锚点到顶部距离    | ✅      | ❌          |
| highlightAnchor                | 高亮锚点         | ✅      | ❌          |
| getSupportedExportFormats      | 获取支持导出格式     | ✅      | ✅          |
| getSupportedTranslateLanguages | 获取支持翻译语言     | ✅      | ❌          |
## API监听能力

| **方法名**                 | **说明**  | **PC** | **Mobile** |
| ----------------------- | ------- | ------ | ---------- |
| onScroll                | 文档滚动时   | ✅      | ❌          |
| onSearchBoxOpen         | 搜索打开时   | ✅      | ❌          |
| onSearchControllerReady | 搜索首次可用时 | ✅      | ❌          |
| onImageView             | 正文图片点击时 | ✅      | ✅          |
| onSelectionChange       | 文档选区变化  | ✅      | ✅          |
| onDocumentHeightChange  | 文档高度变化  | ✅      | ✅          |
| onMountSuccess          | 挂载文档成功  | ✅      | ✅          |
| onMountTimeout          | 挂载文档超时  | ✅      | ✅          |
| onAuthChange            | 用户权限变化  | ✅      | ✅          |
| onTitleChange           | 文档标题变化  | ✅      | ✅          |
| onDirectoryChange       | 文档目录变化  | ✅      | ❌          |
| onCurrentAnchorChange   | 浏览锚点变化  | ✅      | ❌          |
| onFullScreenModeChange  | 全屏模式变化  | ✅      | ✅          |
| onTranslateChange       | 文档翻译变化  | ✅      | ❌          |
| onHyperlinkClick        | 超链接点击   | ✅      | ✅
## 用户身份

Chrome计划2024年开始禁用三方Cookie，具体见 [Chrome禁用三方Cookie计划](https://privacysandbox.com/intl/en_us/open-web/#the-privacy-sandbox-timeline)
如果业务系统身份鉴权走的是Cookie身份鉴权会有影响。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/84f474daef4433c1a472705c86b54b78_gDsrNs7jsA.png?height=492&lazyload=true&width=1280)
**解决方案：**
1. 接入云文档组件前，需要完成[组件SDK鉴权流程](/ssl:ttdoc/uYjL24iN/uUDO3YjL1gzN24SN4cjN)。
1. 正确接入鉴权流程后，系统默认采用的是 `jssdk-session Header`身份鉴权，即不走Cookie身份鉴权，在Chrome禁用三方Cookie场景中将不受影响。