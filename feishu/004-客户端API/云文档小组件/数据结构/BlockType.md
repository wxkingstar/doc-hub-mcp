---
title: "BlockType"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/BlockType
---
最后更新于 2025-08-08

# BlockType
Block 的类型，目前支持识别的类型包括：
| **key**         | **value**       | **是否支持通过API创建** | **描述**                                                                                                                          |
| --------------- | --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| PAGE            | page            | **不支持**    | 页面 Block，是整篇文档的 Root Block                                                                                                      |
| BITABLE         | bitable         | **开发中**    | 多维表格                                                                                                                            |
| CALLOUT         | callout         | **开发中**    | 高亮块                                                                                                                             |
| CHAT_CARD       | chat_card       | **开发中**    | 群名片                                                                                                                             |
| CODE            | code            | **已支持**    | 代码块                                                                                                                             |
| DIAGRAM         | diagram         | **不支持**    | 图示，包括流程图、uml 图                                                                                                                  |
| DIVIDER         | divider         | **已支持**    | 分割线                                                                                                                             |
| FILE            | file            | **开发中**    | 文件，注意 FileBlock 不能单独存在，必须由 ViewBlock 一起出现。创建 FileBlock 时会自动创建 ViewBlock                                                         |
| GRID            | grid            | **开发中**    | 分栏                                                                                                                              |
| GRID_COLUMN     | grid_column     | **不支持**    | 分栏的列                                                                                                                            |
| HEADING1        | heading1        | **已支持**    | 1 级标题                                                                                                                           |
| HEADING2        | heading2        | **已支持**    | 2 级标题                                                                                                                           |
| HEADING3        | heading3        | **已支持**    | 3 级标题                                                                                                                           |
| HEADING4        | heading4        | **已支持**    | 4 级标题                                                                                                                           |
| HEADING5        | heading5        | **已支持**    | 5 级标题                                                                                                                           |
| HEADING6        | heading6        | **已支持**    | 6 级标题                                                                                                                           |
| HEADING7        | heading7        | **已支持**    | 7 级标题                                                                                                                           |
| HEADING8        | heading8        | **已支持**    | 8 级标题                                                                                                                           |
| HEADING9        | heading9        | **已支持**    | 9 级标题                                                                                                                           |
| IFRAME          | iframe          | **开发中**    | 内嵌网页                                                                                                                            |
| IMAGE           | image           | **开发中**    | 图片                                                                                                                              |
| ISV             | isv             | **不支持**    | 小组件                                                                                                                             |
| MINDNOTE        | mindnote        | **开发中**    | 思维笔记                                                                                                                            |
| BULLET          | bullet          | **已支持**    | 无序列表                                                                                                                            |
| ORDERED         | ordered         | **已支持**    | 有序列表                                                                                                                            |
| TODO            | todo            | **已支持**    | 任务列表                                                                                                                            |
| QUOTE           | quote           | **已支持**    | 引用                                                                                                                              |
| QUOTE_CONTAINER | quote_container | **已支持**    | 引用容器                                                                                                                            |
| SHEET           | sheet           | **开发中**    | 电子表格                                                                                                                            |
| TABLE           | table           | **开发中**    | 表格                                                                                                                              |
| CELL            | table_cell      | **不支持**    | 表格的单元格                                                                                                                          |
| TEXT            | text            | **已支持**    | 文本                                                                                                                              |
| VIEW            | view            | **不支持**    | 视图，该 Block 可以作为文本内联对象，见[InlineBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/InlineBlock)
| WHITEBOARD            | whiteboard            | **不支持**    | 画板                                                                                                                              |
