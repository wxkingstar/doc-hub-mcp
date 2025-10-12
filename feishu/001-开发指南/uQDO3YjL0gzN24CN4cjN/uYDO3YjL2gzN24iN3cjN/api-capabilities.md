<!--
title: API能力
id: 7472308462216888348
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/api-capabilities
updatedAt: 1745754586000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/api-capabilities
-->
# API能力

## 调用能力

| **方法常量**                     |**常量值**       | **说明**       | **PC** | **Mobile** |
| ------------------------------ | ------------| ------------ | ------ | ---------- |
| DocComponentEvent.HAS_UNFINISHED_TASK              | HAS_UNFINISHED_TASK | 获取是否存在未完成的任务 | ✅      | ❌          |
| DocComponentEvent.SCROLL_TO                       | SCROLL_TO | 滚动到指定距离      | ✅      | ❌          |
| DocComponentEvent.TOGGLE_REPLACE_BOX                 | TOGGLE_REPLACE_BOX | 查找替换         | ✅      | ❌          |
| DocComponentEvent.TOGGLE_MODAL                       | TOGGLE_MODAL | 创建副本         | ✅      | ❌          |
| DocComponentEvent.TOGGLE_PRINT_BOX                          | TOGGLE_PRINT_BOX | 打印文档         | ✅      | ❌          |
| DocComponentEvent.TOGGLE_MODAL                   | TOGGLE_MODAL | 文档信息         | ✅      | ❌          |
| DocComponentEvent.TOGGLE_SHARE_MENU                          | TOGGLE_SHARE_MENU | 权限分享         | ✅      | ❌          |
| DocComponentEvent.TOGGLE_MODAL                         | TOGGLE_MODAL | 删除文档         | ✅      | ❌          |
| DocComponentEvent.TOGGLE_COMMENT_HISTORY                 | TOGGLE_COMMENT_HISTORY | 评论历史记录       | ✅      | ❌          |
| DocComponentEvent.TOGGLE_HISTORY                    | TOGGLE_HISTORY | 编辑历史记录       | ✅      | ❌          |
| DocComponentEvent.REPORT_ABUSE                         | REPORT_ABUSE | 举报文档         | ✅      | ✅          |
| DocComponentEvent.EXPORT_BY_TYPE                         | EXPORT_BY_TYPE | 导出文档         | ✅      | ❌          |
| DocComponentEvent.TOGGLE_TRANSLATE                      | TOGGLE_TRANSLATE | 翻译文档         | ✅      | ❌          |
| DocComponentEvent.ANCHOR_JUMP                     | ANCHOR_JUMP | 锚点跳转         | ✅      | ❌          |
| DocComponentEvent.GET_SUITE_TITLE                       | GET_SUITE_TITLE | 获取标题         | ✅      | ✅          |
| DocComponentEvent.GET_CURRENT_AUTH                 | GET_CURRENT_AUTH | 获取用户权限       | ✅      | ✅          |
| DocComponentEvent.GET_DIRECTORY_DATA               | GET_DIRECTORY_DATA | 获取目录数据       | ✅      | ❌          |
| DocComponentEvent.GET_ANCHOR_TOP                   | GET_ANCHOR_TOP | 获取锚点到顶部距离    | ✅      | ❌          |
| DocComponentEvent.HIGHLIGHT_ANCHOR                | HIGHLIGHT_ANCHOR | 高亮锚点         | ✅      | ❌          |
| DocComponentEvent.GET_SUPPORTED_EXPORT_FORMATS      | GET_SUPPORTED_EXPORT_FORMATS | 获取支持导出格式     | ✅      | ✅          |
| DocComponentEvent.GET_TRANSLATE_LANG | GET_TRANSLATE_LANG | 获取支持翻译语言     | ✅      | ❌          |
| DocComponentEvent.ADD_NEW_COMMENT | ADD_NEW_COMMENT | 新增评论     | ✅      | ❌          |
| DocComponentEvent.JUMP_TO_COMMENT | JUMP_TO_COMMENT | 跳转到评论对应位置     | ✅      | ❌          |

## 监听能力

| **方法常量**                 | **常量值**  | **说明**  | **PC** | **Mobile** |
| ----------------------- | -------  | ------- | ------ | ---------- |
| DocComponentEvent.DOC_EDITOR_SCROLL                |  DOC_EDITOR_SCROLL  | 文档滚动时   | ✅      | ❌          |
| DocComponentEvent.SEARCH_BOX_OPEN         |  SEARCH_BOX_OPEN  | 搜索打开时   | ✅      | ❌          |
| DocComponentEvent.SEARCH_CONTROLLER_READY |  SEARCH_CONTROLLER_READY  | 搜索首次可用时 | ✅      | ❌          |
| DocComponentEvent.IMAGE_VIEW             |  IMAGE_VIEW  | 正文图片点击时 | ✅      | ✅          |
| DocComponentEvent.SELECTION_CHANGE       |  SELECTION_CHANGE  | 文档选区变化  | ✅      | ✅          |
| DocComponentEvent.DOCUMENT_HEIGHT  |  DOCUMENT_HEIGHT  | 文档高度变化  | ✅      | ✅          ||
| DocComponentEvent.AUTH_CHANGE            |  AUTH_CHANGE  | 用户权限变化  | ✅      | ✅          |
| DocComponentEvent.SUITE_TITLE_CHANGE           |  SUITE_TITLE_CHANGE  | 文档标题变化  | ✅      | ✅          |
| DocComponentEvent.DIRECTORY_CHANGE       |  DIRECTORY_CHANGE  | 文档目录变化  | ✅      | ❌          |
| DocComponentEvent.CURR_ANCHOR   |  CURR_ANCHOR  | 浏览锚点变化  | ✅      | ❌          |
| DocComponentEvent.FULL_SCREEN_MODE  |  FULL_SCREEN_MODE  | 全屏模式变化  | ✅      | ✅          |
| DocComponentEvent.TRANSLATE_CHANGE       |  TRANSLATE_CHANGE  | 文档翻译变化  | ✅      | ❌          |
| DocComponentEvent.HYPERLINK_CLICK        |  HYPERLINK_CLICK  | 超链接点击   | ✅      | ✅
| DocComponentEvent.ON_CREATE_TEMP_COMMENT        |  ON_CREATE_TEMP_COMMENT  | 创建临时评论时   | ✅      | ❌
| DocComponentEvent.ON_ACTIVE_COMMENT        |  ON_ACTIVE_COMMENT  | 点击评论划线时   | ✅      | ❌