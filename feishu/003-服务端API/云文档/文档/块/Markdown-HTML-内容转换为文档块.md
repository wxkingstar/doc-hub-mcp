---
title: "Markdown/HTML 内容转换为文档块"
source_url: https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/convert
---
最后更新于 2025-08-29

# Markdown/HTML 内容转换为文档块

将 Markdown/HTML 格式的内容转换为文档块，以便于将 Markdown/HTML 格式的内容插入到文档中。目前支持转换为的块类型包含文本、一到九级标题、无序列表、有序列表、代码块、引用、待办事项、图片、表格、表格单元格。

**注意事项**：**若要将 Markdown/HTML 格式的内容插入到文档，需依次执行以下操作：**

1. 调用[创建文档](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/create)接口创建一篇类型为 docx 的文档（若目标文档已存在，则无需此步骤）。
2. 调用当前接口将 Markdown/HTML 格式的内容转换为文档块。
3. 调用[创建嵌套块](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-descendant/create)接口将步骤二中返回的块批量插入到目标文档中。

**在上述接口调用过程中需注意以下事项：**

- 将带表格的 Markdown/HTML 格式的内容转换为文档块后，在调用[创建嵌套块](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-descendant/create)接口批量插入块到文档前，需先去除表格（Table）块中的 `merge_info` 字段。由于当前 `merge_info` 为只读属性，传入该字段会引发报错。

- 将包含图片的 Markdown/HTML 格式的内容转换为文档块，并调用[创建嵌套块](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-descendant/create)接口将图片（Image）块插入到文档后，需调用[上传图片素材](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)接口，以 Image BlockID 作为 `parent_node` 上传素材，接着调用[更新块](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/patch)或[批量更新块](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/batch_update)接口，指定 `replace_image` 操作，将图片素材 ID 设置到对应的 Image Block。

- 当转换后的块数量过多时，需分批调用[创建嵌套块](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-descendant/create)接口，单次调用[创建嵌套块](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-descendant/create)接口最多可插入 1000 个块。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/docx/v1/documents/blocks/convert
HTTP Method | POST
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 文本内容转换为云文档块(docx:document.block:convert)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户 user ID(contact:user.employee_id:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
或  
`user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 查询参数

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
user_id_type | string | 否 | 用户 ID 类型  
**示例值**："open_id"  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
content_type | string | 是 | 内容类型  
**示例值**："markdown"  
**可选值有**：  
- markdown：Markdown 格式  
- html：HTML 格式
content | string | 是 | 文本内容  
**示例值**："Text \*\*Bold\*\* \*Italic\* \~\~Strikethrough\~\~ \`inline code\` Hyperlink: \[Feishu Open Platform\]\(https://open.feishu.cn\)\n\n\!\[image\]\(https://sf3-scmcdn-cn.feishucdn.com/obj/feishu-static/lark/open/website/share-logo.png\)\n\n\# Heading1\n\n\`\`\`\n   hello word\n\`\`\`\n\n\> quote\n\n1\. ordered1\n2\. ordered2\n\n\- bullet1\n\- bullet2\n\n|Location|Features|Cuisine|\n|\----|\----|\----|\n\|Seafood Street|Seafood Market|Fresh Seafood, Lobsters, Crabs, scallops|"  
**数据校验规则**：  
- 长度范围：`1` ～ `10485760` 字符

### 请求体示例
```json
{
    "content_type": "markdown",
    "content": "Text **Bold** *Italic* ~~Strikethrough~~ `inline code` Hyperlink: [Feishu Open Platform](https://open.feishu.cn)\n\n![image](https://sf3-scmcdn-cn.feishucdn.com/obj/feishu-static/lark/open/website/share-logo.png)\n\n# Heading1\n\n```\n  hello word\n```\n\n> quote\n\n1. ordered1\n2. ordered2\n\n- bullet1\n- bullet2\n\n|Location|Features|Cuisine|\n|----|----|----|\n|Seafood Street|Seafood Market|Fresh Seafood, Lobsters, Crabs, scallops|"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
first_level_block_ids | string\[\] | 第一级 Block 对应的临时 ID 列表， index 代表了 Block 的顺序
blocks | block\[\] | 带有父子关系的 Block 列表
block_id | string | 子块的唯一标识
parent_id | string | 子块的父块 ID
children | string\[\] | 子块的子块 ID 列表
block_type | int | Block 类型  
**可选值有**：  
- 1：页面 Block  
- 2：文本 Block  
- 3：标题 1 Block  
- 4：标题 2 Block  
- 5：标题 3 Block  
- 6：标题 4 Block  
- 7：标题 5 Block  
- 8：标题 6 Block  
- 9：标题 7 Block  
- 10：标题 8 Block  
- 11：标题 9 Block  
- 12：无序列表 Block  
- 13：有序列表 Block  
- 14：代码块 Block  
- 15：引用 Block  
- 17：待办事项 Block  
- 18：多维表格 Block  
- 19：高亮块 Block  
- 20：会话卡片 Block  
- 21：流程图 & UML Block  
- 22：分割线 Block。为空结构体，需传入 `{}` 创建分割线 Block。  
- 23：文件 Block  
- 24：分栏 Block  
- 25：分栏列 Block  
- 26：内嵌网页 Block  
- 27：图片 Block  
- 28：开放平台小组件 Block  
- 29：思维笔记 Block  
- 30：电子表格 Block  
- 31：表格 Block。了解如何在文档中插入表格，参考[文档常见问题-如何插入表格并往单元格填充内容](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq)。  
- 32：表格单元格 Block  
- 33：视图 Block  
- 34：引用容器 Block。为空结构体，需传入 `{}` 创建引用容器 Block。  
- 35：任务 Block  
- 36：OKR Block  
- 37：OKR Objective Block  
- 38：OKR Key Result Block  
- 39：OKR 进展 Block  
- 40：文档小组件 Block  
- 41：Jira 问题 Block  
- 42：Wiki 子目录 Block  
- 43：画板 Block  
- 44：议程 Block  
- 45：议程项 Block  
- 46：议程项标题 Block  
- 47：议程项内容 Block  
- 48：链接预览 Block  
- 49：源同步块，仅支持查询  
- 50：引用同步块，仅支持查询。获取引用同步块内容详见：[如何获取引用同步块的内容](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq#19b71234)  
- 51：Wiki 新版子目录  
- 52：AI 模板 Block，仅支持查询  
- 999：未支持 Block
page | text | 文档的根 Block，也称页面 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
text | text | 文本 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
heading1 | text | 一级标题 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
heading2 | text | 二级标题 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
heading3 | text | 三级标题 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
heading4 | text | 四级标题 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
heading5 | text | 五级标题 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
heading6 | text | 六级标题 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
heading7 | text | 七级标题 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
heading8 | text | 八级标题 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
heading9 | text | 九级标题 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
bullet | text | 无序列表 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
ordered | text | 有序列表 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
code | text | 代码块 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
quote | text | 引用 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | text | 公式 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
todo | text | 待办事项 Block
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
bitable | bitable | 多维表格 Block
token | string | 多维表格文档 Token
view_type | int | 类型  
**可选值有**：  
- 1：数据表  
- 2：看板
callout | callout | 高亮块 Block
background_color | int | 高亮块背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：中红色  
- 9：中橙色  
- 10：中黄色  
- 11：中绿色  
- 12：中蓝色  
- 13：中紫色  
- 14：灰色  
- 15：浅灰色
border_color | int | 边框色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
text_color | int | 文字颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
emoji_id | string | 高亮块图标
chat_card | chat_card | 群聊卡片 Block
chat_id | string | 群聊天会话 ID。获取方式参考[群 ID 说明](ssl:ttdoc//uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
diagram | diagram | 流程图/UML Block
diagram_type | int | 绘图类型  
**可选值有**：  
- 1：流程图  
- 2：UML 图
divider | divider | 分割线 Block。为空结构体，需传入 `{}` 创建分割线 Block。
file | file | 文件 Block。了解如何在文档中插入文件，参考[文档常见问题-如何插入文件/附件](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq)。
token | string | 附件 Token
name | string | 文件名
view_type | int | 视图类型，卡片视图（默认）或预览视图  
**可选值有**：  
- 1：卡片视图  
- 2：预览视图
grid | grid | 分栏 Block
column_size | int | 分栏列数量
grid_column | grid_column | 分栏列 Block
width_ratio | int | 当前分栏列占整个分栏的比例，单位 %
iframe | iframe | 内嵌 Block
component | iframe_component | iframe 的组成元素
iframe_type | int | iframe 类型  
**可选值有**：  
- 1：哔哩哔哩  
- 2：西瓜视频  
- 3：优酷  
- 4：Airtable  
- 5：百度地图  
- 6：高德地图  
- 7：Undefined  
- 8：Figma  
- 9：墨刀  
- 10：Canva  
- 11：CodePen  
- 12：飞书问卷  
- 13：金数据  
- 14：Undefined  
- 15：Undefined  
- 99：Other
url | string | iframe 目标 url（需要进行 url_encode）
image | image | 图片 Block。了解如何在文档中插入图片，参考[文档常见问题-如何插入图片](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq)。
width | int | 宽度单位 px
height | int | 高度单位 px
token | string | 图片 Token
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
caption | caption | 图片描述
content | string | 描述的文本内容
isv | isv | 三方 Block
component_id | string | 团队互动应用唯一ID。该 ID 可通过调用[创建 BlockEntity](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/block-v2/entity/create) 接口，并从响应体中的 block_id 中获取，创建时使用的 `block_type_id` 需要与 `component_type_id` 一致。
component_type_id | string | 团队互动应用类型，比如信息收集"blk_5f992038c64240015d280958"。该 ID 可在 [开发者后台](https://open.feishu.cn/app) > **应用详情页** > **应用能力** > **云文档小组件** > **BlockTypeID** 获取。
add_ons | add_ons | Add-ons
component_id | string | 文档小组件 ID。该 ID 可通过调用[创建 BlockEntity](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/block-v2/entity/create) 接口，并从响应体中的 block_id 中获取，创建时使用的 `block_type_id` 需要与 `component_type_id` 一致。
component_type_id | string | 文档小组件类型，比如问答互动"blk_636a0a6657db8001c8df5488"。该 ID 可在 [开发者后台](https://open.feishu.cn/app) > **应用详情页** > **应用能力** > **云文档小组件** > **BlockTypeID** 获取。
record | string | 文档小组件内容数据，JSON 字符串
mindnote | mindnote | 思维笔记 Block
token | string | 思维导图 token
sheet | sheet | 电子表格 Block
token | string | 电子表格 block 的 token 和工作表的 ID 的组合
row_size | int | 电子表格行数量
column_size | int | 电子表格列数量
table | table | 表格 Block
cells | string\[\] | 单元格数组，数组元素为 Table Cell Block 的 ID
property | table_property | 表格属性
row_size | int | 行数  
- **创建块**接口中，该字段最大值为 9   
- **创建嵌套块**接口中，在单个表格单元格不超过上限 2000 情况下，该字段无固定最大值
column_size | int | 列数  
- **创建块**接口中，该字段最大值为 9   
- **创建嵌套块**接口中，该字段最大值为 100
column_width | int\[\] | 列宽，单位像素（px）
merge_info | table_merge_info\[\] | 单元格合并信息。创建 Table 时，此属性只读，将由系统自动生成。如果需要合并单元格，可以通过更新块接口的子请求 `merge_table_cells` 实现
row_span | int | 从当前行索引起被合并的连续行数
col_span | int | 从当前列索引起被合并的连续列数
header_row | boolean | 设置首行为标题行
header_column | boolean | 设置首列为标题列
table_cell | table_cell | 单元格 Block
view | view | 视图 Block
view_type | int | 视图类型  
**可选值有**：  
- 1：卡片视图  
- 2：预览视图  
- 3：内联视图
undefined | undefined | 未支持 Block
quote_container | quote_container | 引用容器 Block。为空结构体，需传入 `{}` 创建引用容器 Block。
task | task | 任务 Block
task_id | string | 任务 ID，查询具体任务详情见 [获取任务详情](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/task-v2/task/get)
folded | boolean | 折叠状态
okr | okr | OKR Block，仅可在使用 `user_access_token` 时创建
okr_id | string | OKR ID，获取需要插入的 OKR ID 可见[获取用户的 OKR 列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/okr-v1/user-okr/list)
objectives | objective_id_with_kr_id\[\] | OKR Block 中的 Objective ID 和 Key Result ID，此值为空时插入 OKR 下所有的 Objective 和 Key Result
objective_id | string | OKR 中 Objective 的 ID
kr_ids | string\[\] | Key Result 的 ID 列表，此值为空时插入当前 Objective 下的所有 Key Result
period_display_status | string | 周期的状态  
**可选值有**：  
- default：默认  
- normal：正常  
- invalid：失效  
- hidden：隐藏
period_name_zh | string | 周期名 - 中文
period_name_en | string | 周期名 - 英文
user_id | string | OKR 所属的用户 ID
visible_setting | okr_visible_setting | 可见性设置
progress_fill_area_visible | boolean | 进展编辑区域是否可见
progress_status_visible | boolean | 进展状态是否可见
score_visible | boolean | 分数是否可见
okr_objective | okr_objective | OKR Objective Block
objective_id | string | Objective ID
confidential | boolean | 是否在 OKR 平台设置了私密权限
position | int | Objective 的位置编号，对应 Block 中 O1、O2 的 1、2
score | int | 打分信息
visible | boolean | OKR Block 中是否展示该 Objective
weight | float | Objective 的权重
progress_rate | okr_progress_rate | 进展信息
mode | string | 状态模式  
**可选值有**：  
- simple：简单模式  
- advanced：高级模式
current | float | 当前进度，单位 %，advanced 模式使用
percent | float | 当前进度百分比，simple 模式使用
progress_status | string | 进展状态  
**可选值有**：  
- unset：未设置  
- normal：正常  
- risk：有风险  
- extended：已延期
start | float | 进度起始值，单位 %，advanced 模式使用
status_type | string | 状态计算类型  
**可选值有**：  
- default：以风险最高的 Key Result 状态展示  
- custom：自定义
target | float | 进度目标值，单位 %，advanced 模式使用
content | text | Objective 的文本内容
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
okr_key_result | okr_key_result | OKR Key Result
kr_id | string | Key Result 的 ID
confidential | boolean | 是否在 OKR 平台设置了私密权限
position | int | Key Result 的位置编号，对应 Block 中 KR1、KR2 的 1、2。
score | int | 打分信息
visible | boolean | OKR Block 中此 Key Result 是否可见
weight | float | Key Result 的权重
progress_rate | okr_progress_rate | 进展信息
mode | string | 状态模式  
**可选值有**：  
- simple：简单模式  
- advanced：高级模式
current | float | 当前进度，单位 %，advanced 模式使用
percent | float | 当前进度百分比，simple 模式使用
progress_status | string | 进展状态  
**可选值有**：  
- unset：未设置  
- normal：正常  
- risk：有风险  
- extended：已延期
start | float | 进度起始值，单位 %，advanced 模式使用
status_type | string | 状态计算类型  
**可选值有**：  
- default：以风险最高的 Key Result 状态展示  
- custom：自定义
target | float | 进度目标值，单位 %，advanced 模式使用
content | text | Key Result 的文本内容
style | text_style | 文本样式
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
done | boolean | todo 的完成状态。支持对 Todo 块进行修改
folded | boolean | 文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
language | int | 代码块的语言类型。仅支持对 Code 块进行修改  
**可选值有**：  
- 1：PlainText  
- 2：ABAP  
- 3：Ada  
- 4：Apache  
- 5：Apex  
- 6：Assembly Language  
- 7：Bash  
- 8：CSharp  
- 9：C++  
- 10：C  
- 11：COBOL  
- 12：CSS  
- 13：CoffeeScript  
- 14：D  
- 15：Dart  
- 16：Delphi  
- 17：Django  
- 18：Dockerfile  
- 19：Erlang  
- 20：Fortran  
- 21：FoxPro  
- 22：Go  
- 23：Groovy  
- 24：HTML  
- 25：HTMLBars  
- 26：HTTP  
- 27：Haskell  
- 28：JSON  
- 29：Java  
- 30：JavaScript  
- 31：Julia  
- 32：Kotlin  
- 33：LateX  
- 34：Lisp  
- 35：Logo  
- 36：Lua  
- 37：MATLAB  
- 38：Makefile  
- 39：Markdown  
- 40：Nginx  
- 41：Objective-C  
- 42：OpenEdgeABL  
- 43：PHP  
- 44：Perl  
- 45：PostScript  
- 46：Power Shell  
- 47：Prolog  
- 48：ProtoBuf  
- 49：Python  
- 50：R  
- 51：RPG  
- 52：Ruby  
- 53：Rust  
- 54：SAS  
- 55：SCSS  
- 56：SQL  
- 57：Scala  
- 58：Scheme  
- 59：Scratch  
- 60：Shell  
- 61：Swift  
- 62：Thrift  
- 63：TypeScript  
- 64：VBScript  
- 65：Visual Basic  
- 66：XML  
- 67：YAML  
- 68：CMake  
- 69：Diff  
- 70：Gherkin  
- 71：GraphQL  
- 72：OpenGL Shading Language  
- 73：Properties  
- 74：Solidity  
- 75：TOML
wrap | boolean | 代码块是否自动换行。支持对 Code 块进行修改
background_color | string | 块的背景色  
**可选值有**：  
- LightGrayBackground：浅灰色  
- LightRedBackground：浅红色  
- LightOrangeBackground：浅橙色  
- LightYellowBackground：浅黄色  
- LightGreenBackground：浅绿色  
- LightBlueBackground：浅蓝色  
- LightPurpleBackground：浅紫色  
- PaleGrayBackground：中灰色  
- DarkGrayBackground：灰色  
- DarkRedBackground：中红色  
- DarkOrangeBackground：中橙色  
- DarkYellowBackground：中黄色  
- DarkGreenBackground：中绿色  
- DarkBlueBackground：中蓝色  
- DarkPurpleBackground：中紫色
indentation_level | string | 首行缩进级别。仅支持对 Text 块进行修改。  
**可选值有**：  
- NoIndent：无缩进  
- OneLevelIndent：一级缩进
sequence | string | 用于确定有序列表项编号，为具体数值或'auto'  
- 开始新列表时，有序列表编号从 1 开始，sequence='1'  
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'  
- 继续编号时，有序列表编号自动连续，sequence='auto'  
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
elements | text_element\[\] | 文本元素
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
okr_progress | okr_progress | OKR 进展信息
comment_ids | string\[\] | 评论 id 列表
jira_issue | jira_issue | Jira 问题
id | string | Jira 问题 ID
key | string | Jira 问题 key
wiki_catalog | wiki_catalog | Wiki 子目录 Block
wiki_token | string | 知识库 token
board | board | 画板 Block
token | string | 画板 token
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
width | int | 宽度，单位 px；不填时自动适应文档宽度；值超出文档最大宽度时，页面渲染为文档最大宽度
height | int | 高度，单位 px；不填时自动根据画板内容计算；值超出屏幕两倍高度时，页面渲染为屏幕两倍高度
agenda | agenda | 议程 Block
agenda_item | agenda_item | 议程项 Block
agenda_item_title | agenda_item_title | 议程项标题 Block
elements | agenda_title_element\[\] | 文本元素
text_run | text_run | 文字
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联附件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联 block
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
agenda_item_content | agenda_item_content | 议程项内容 Block
link_preview | link_preview | 链接预览 Block
url | string | 链接
url_type | string | 链接类型  
**可选值有**：  
- MessageLink：消息链接  
- Undefined：未定义的链接类型
source_synced | source_synced | 源同步块，仅支持查询
elements | text_element\[\] | 同步块独立页标题，由文本元素组成
text_run | text_run | 文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
content | string | 文本内容。要实现文本内容的换行，你可以：  
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）  
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）  
**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_user | mention_user | @用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
user_id | string | 用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
mention_doc | mention_doc | @文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
token | string | 云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
obj_type | int | 云文档类型  
**可选值有**：  
- 1：Doc  
- 3：Sheet  
- 8：Bitable  
- 11：MindNote  
- 12：File  
- 15：Slide  
- 16：Wiki  
- 22：Docx
url | string | 云文档链接（需要 url_encode)
title | string | 文档标题，只读属性
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
fallback_type | string | 无云文档阅读权限或云文档已删除时的降级方式  
**可选值有**：  
- FallbackToLink：降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）  
- FallbackToText：降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果
reminder | reminder | 日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
create_user_id | string | 创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
is_notify | boolean | 是否通知
is_whole_day | boolean | 是日期还是整点小时
expire_time | string | 事件发生的时间（毫秒级时间戳）
notify_time | string | 触发通知的时间（毫秒级时间戳）
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
file | inline_file | 内联文件。仅支持删除或移动位置，不支持创建新的内联文件
file_token | string | 附件 token
source_block_id | string | 当前文档中该文件所处的 block 的 ID
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
undefined | undefined_element | 未支持的 TextElement
inline_block | inline_block | 内联块。仅支持删除或移动位置，不支持创建新的内联块
block_id | string | 关联的内联状态的 block 的 block_id
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
equation | equation | 公式
content | string | 符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html
text_element_style | text_element_style | 文本局部样式
bold | boolean | 加粗
italic | boolean | 斜体
strikethrough | boolean | 删除线
underline | boolean | 下划线
inline_code | boolean | inline 代码
background_color | int | 背景色  
**可选值有**：  
- 1：浅红色  
- 2：浅橙色  
- 3：浅黄色  
- 4：浅绿色  
- 5：浅蓝色  
- 6：浅紫色  
- 7：中灰色  
- 8：红色  
- 9：橙色  
- 10：黄色  
- 11：绿色  
- 12：蓝色  
- 13：紫色  
- 14：灰色  
- 15：浅灰色
text_color | int | 字体颜色  
**可选值有**：  
- 1：红色  
- 2：橙色  
- 3：黄色  
- 4：绿色  
- 5：蓝色  
- 6：紫色  
- 7：灰色
link | link | 链接
url | string | 超链接指向的 url (需要 url_encode)
comment_ids | string\[\] | 评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
align | int | 对齐方式  
**可选值有**：  
- 1：居左排版  
- 2：居中排版  
- 3：居右排版
reference_synced | reference_synced | 引用同步块，仅支持查询。获取引用同步块内容详见：[如何获取引用同步块的内容](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq#19b71234)
source_document_id | string | 源文档的文档 ID
source_block_id | string | 源同步块的 Block ID
sub_page_list | sub_page_list | Wiki 新版子目录
wiki_token | string | 知识库节点 token，仅支持知识库文档创建子页面列表，且需传入当前页面的 wiki token
ai_template | ai_template | AI 模板 Block，仅支持查询
block_id_to_image_urls | block_id_to_image_url\[\] | 如果要转换的内容中带有图片，这里记录了临时 Block ID 和 Image URL 的对应关系
block_id | string | 块 ID
image_url | string | 图片 URL

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "first_level_block_ids": [
            "6f70483b-def6-4459-96ff-509b1de9f2ca",
            "4a0cc20d-1dbd-47af-9ca8-f71027b26468",
            "8da57e4f-d73e-44b4-9389-f45ed740f97f",
            "13b42d6c-8480-465f-91da-3b5c864c7af9",
            "bdb98e5b-dd35-4691-9c69-9a831182fd16",
            "0e8f483a-8c5a-4e96-b3d1-8f05731f8a66",
            "6b06836c-07a1-48b8-8859-466f6a11afc7",
            "a7c82c2c-22e9-42f6-b823-9fc86c230e5e",
            "14805dfc-2b6d-48c9-8317-7f8f5d603178",
            "e4faf5af-264b-408e-a480-22d19b4b13cf"
        ],
        "blocks": [
            {
                "block_id": "row19f995d8-60b9-4945-b1dc-26bd448387c7cold95431db-2529-41b1-bae9-76f10070e6cc",
                "revision_id": 0,
                "parent_id": "",
                "children": [
                    "5a0d669a-d34b-4a7f-92f6-ff13c9ee8dc1"
                ],
                "table_cell": {

},
                "block_type": 32
            },
            {
                "block_id": "249b0d7b-cbdc-4423-b2b5-4a4eebddf055",
                "revision_id": 0,
                "parent_id": "",
                "text": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "Seafood Street",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 2
            },
            {
                "block_id": "8da57e4f-d73e-44b4-9389-f45ed740f97f",
                "revision_id": 0,
                "parent_id": "",
                "heading1": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "Heading1",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 3
            },
            {
                "block_id": "14805dfc-2b6d-48c9-8317-7f8f5d603178",
                "revision_id": 0,
                "parent_id": "",
                "bullet": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "bullet2",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 12
            },
            {
                "block_id": "5a0d669a-d34b-4a7f-92f6-ff13c9ee8dc1",
                "revision_id": 0,
                "parent_id": "",
                "text": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "Features",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 2
            },
            {
                "block_id": "e4faf5af-264b-408e-a480-22d19b4b13cf",
                "revision_id": 0,
                "parent_id": "",
                "children": [
                    "row19f995d8-60b9-4945-b1dc-26bd448387c7col686c3c95-b2e6-43c4-95fe-ae47d1e824a0",
                    "row19f995d8-60b9-4945-b1dc-26bd448387c7cold95431db-2529-41b1-bae9-76f10070e6cc",
                    "row19f995d8-60b9-4945-b1dc-26bd448387c7col3f3ffe92-8af3-40ca-ae96-e77b652245d4",
                    "row1686630c-d569-4c8a-aacd-b06bc6f976cacol686c3c95-b2e6-43c4-95fe-ae47d1e824a0",
                    "row1686630c-d569-4c8a-aacd-b06bc6f976cacold95431db-2529-41b1-bae9-76f10070e6cc",
                    "row1686630c-d569-4c8a-aacd-b06bc6f976cacol3f3ffe92-8af3-40ca-ae96-e77b652245d4"
                ],
                "table": {
                    "cells": [
                        "row19f995d8-60b9-4945-b1dc-26bd448387c7col686c3c95-b2e6-43c4-95fe-ae47d1e824a0",
                        "row19f995d8-60b9-4945-b1dc-26bd448387c7cold95431db-2529-41b1-bae9-76f10070e6cc",
                        "row19f995d8-60b9-4945-b1dc-26bd448387c7col3f3ffe92-8af3-40ca-ae96-e77b652245d4",
                        "row1686630c-d569-4c8a-aacd-b06bc6f976cacol686c3c95-b2e6-43c4-95fe-ae47d1e824a0",
                        "row1686630c-d569-4c8a-aacd-b06bc6f976cacold95431db-2529-41b1-bae9-76f10070e6cc",
                        "row1686630c-d569-4c8a-aacd-b06bc6f976cacol3f3ffe92-8af3-40ca-ae96-e77b652245d4"
                    ],
                    "property": {
                        "row_size": 2,
                        "column_size": 3,
                        "column_width": [
                            244,
                            244,
                            244
                        ],
                        "merge_info": [
                            {
                                "row_span": 1,
                                "col_span": 1
                            },
                            {
                                "row_span": 1,
                                "col_span": 1
                            },
                            {
                                "row_span": 1,
                                "col_span": 1
                            },
                            {
                                "row_span": 1,
                                "col_span": 1
                            },
                            {
                                "row_span": 1,
                                "col_span": 1
                            },
                            {
                                "row_span": 1,
                                "col_span": 1
                            }
                        ],
                        "header_row": false,
                        "header_column": false
                    }
                },
                "block_type": 31
            },
            {
                "block_id": "row1686630c-d569-4c8a-aacd-b06bc6f976cacol686c3c95-b2e6-43c4-95fe-ae47d1e824a0",
                "revision_id": 0,
                "parent_id": "",
                "children": [
                    "249b0d7b-cbdc-4423-b2b5-4a4eebddf055"
                ],
                "table_cell": {

},
                "block_type": 32
            },
            {
                "block_id": "row1686630c-d569-4c8a-aacd-b06bc6f976cacol3f3ffe92-8af3-40ca-ae96-e77b652245d4",
                "revision_id": 0,
                "parent_id": "",
                "children": [
                    "f03c2e18-8eb0-469c-b96f-55793253a27d"
                ],
                "table_cell": {

},
                "block_type": 32
            },
            {
                "block_id": "6b06836c-07a1-48b8-8859-466f6a11afc7",
                "revision_id": 0,
                "parent_id": "",
                "ordered": {
                    "style": {
                        "folded": false,
                        "align": 1,
                        "sequence": "auto"
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "ordered2",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 13
            },
            {
                "block_id": "a7c82c2c-22e9-42f6-b823-9fc86c230e5e",
                "revision_id": 0,
                "parent_id": "",
                "bullet": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "bullet1",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 12
            },
            {
                "block_id": "1111cdb3-716b-46d8-aabd-1b4dd98d216e",
                "revision_id": 0,
                "parent_id": "",
                "text": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "Location",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 2
            },
            {
                "block_id": "row1686630c-d569-4c8a-aacd-b06bc6f976cacold95431db-2529-41b1-bae9-76f10070e6cc",
                "revision_id": 0,
                "parent_id": "",
                "children": [
                    "d4f37b8d-4fdc-4f69-82ea-38e548e0c0ca"
                ],
                "table_cell": {

},
                "block_type": 32
            },
            {
                "block_id": "row19f995d8-60b9-4945-b1dc-26bd448387c7col3f3ffe92-8af3-40ca-ae96-e77b652245d4",
                "revision_id": 0,
                "parent_id": "",
                "children": [
                    "046ab1bd-0e18-4f2d-b91a-f19adc445d09"
                ],
                "table_cell": {

},
                "block_type": 32
            },
            {
                "block_id": "d4f37b8d-4fdc-4f69-82ea-38e548e0c0ca",
                "revision_id": 0,
                "parent_id": "",
                "text": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "Seafood Market",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 2
            },
            {
                "block_id": "0e8f483a-8c5a-4e96-b3d1-8f05731f8a66",
                "revision_id": 0,
                "parent_id": "",
                "ordered": {
                    "style": {
                        "folded": false,
                        "align": 1,
                        "sequence": "1"
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "ordered1",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 13
            },
            {
                "block_id": "046ab1bd-0e18-4f2d-b91a-f19adc445d09",
                "revision_id": 0,
                "parent_id": "",
                "text": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "Cuisine",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 2
            },
            {
                "block_id": "13b42d6c-8480-465f-91da-3b5c864c7af9",
                "revision_id": 0,
                "parent_id": "",
                "code": {
                    "style": {
                        "wrap": false
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "  hello word",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 14
            },
            {
                "block_id": "row19f995d8-60b9-4945-b1dc-26bd448387c7col686c3c95-b2e6-43c4-95fe-ae47d1e824a0",
                "revision_id": 0,
                "parent_id": "",
                "children": [
                    "1111cdb3-716b-46d8-aabd-1b4dd98d216e"
                ],
                "table_cell": {

},
                "block_type": 32
            },
            {
                "block_id": "6f70483b-def6-4459-96ff-509b1de9f2ca",
                "revision_id": 0,
                "parent_id": "",
                "text": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "Text ",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "Bold",
                                "text_element_style": {
                                    "bold": true,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": " ",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "Italic",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": true,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": " ",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "Strikethrough",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": true,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": " ",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "inline code",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": true
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": " Hyperlink: ",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "Feishu Open Platform",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false,
                                    "link": {
                                        "url": "https%3A%2F%2Fopen.feishu.cn"
                                    }
                                }
                            }
                        }
                    ]
                },
                "block_type": 2
            },
            {
                "block_id": "4a0cc20d-1dbd-47af-9ca8-f71027b26468",
                "revision_id": 0,
                "parent_id": "",
                "image": {
                    "width": 240,
                    "height": 240,
                    "token": ""
                },
                "block_type": 27
            },
            {
                "block_id": "f03c2e18-8eb0-469c-b96f-55793253a27d",
                "revision_id": 0,
                "parent_id": "",
                "text": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "Fresh Seafood, Lobsters, Crabs, scallops",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 2
            },
            {
                "block_id": "bdb98e5b-dd35-4691-9c69-9a831182fd16",
                "revision_id": 0,
                "parent_id": "",
                "quote": {
                    "style": {
                        "folded": false,
                        "align": 1
                    },
                    "elements": [
                        {
                            "text_run": {
                                "content": "quote",
                                "text_element_style": {
                                    "bold": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false,
                                    "inline_code": false
                                }
                            }
                        }
                    ]
                },
                "block_type": 15
            }
        ],
        "block_id_to_image_urls": [
            {
                "block_id": "4a0cc20d-1dbd-47af-9ca8-f71027b26468",
                "image_url": "https://sf3-scmcdn-cn.feishucdn.com/obj/feishu-static/lark/open/website/share-logo.png"
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1771001 | server internal error | 服务器内部错误。请重试，若仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。
400 | 1770033 | content size exceed limit | 纯文本内容大小超过 10485760  字符限制，请减少内容后重试。
