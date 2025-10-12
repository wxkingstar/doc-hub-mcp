<!--
title: 批量更新块的内容
id: 7100866542866530308
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/batch_update
updatedAt: 1758100532000
source: https://open.feishu.cn/document/server-docs/docs/docs/docx-v1/document-block/batch_update
-->
# 批量更新块的内容

批量更新块的富文本内容。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=docx&version=v1&resource=document.block&method=batch_update)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="tip">
**应用频率限制**：单个应用调用频率上限为每秒 3 次，超过该频率限制，接口将返回 HTTP 状态码 <font color="blue">400</font> 及错误码 <font color="blue">99991400</font>；

**文档频率限制**：单篇文档并发编辑上限为每秒 3 次，超过该频率限制，接口将返回 HTTP 状态码 <font color="blue">429</font>，编辑操作包括：
- 创建块
- 创建嵌套块
- 删除块
- 更新块
- 批量更新块

当请求被限频，应用需要处理限频状态码，并使用指数退避算法或其它一些频控策略降低对 API 的调用速率。
</md-alert>
:::

## 前提条件

调用此接口前，请确保当前调用身份（tenant_access_token 或 user_access_token）已有云文档的阅读、编辑等文档权限，否则接口将返回 HTTP 403 或 400 状态码。了解更多，参考[如何为应用或用户开通文档权限](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。

## 请求
:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/docx/v1/documents/:document_id/blocks/batch_update</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="docx:document" desc="创建及编辑新版文档" support_app_types="custom,isv" tags="">创建及编辑新版文档</md-perm>
            <md-perm name="docx:document:write_only" desc="编辑新版文档" support_app_types="custom,isv" tags="">编辑新版文档</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            字段权限要求
      </md-th>
      <md-td>
        <md-alert type="tip" icon="none">
        该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom,isv" tags="">获取用户 user ID</md-perm>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 13%;">类型</md-th>
       <md-th style="width: 15%;" filters="是,否" >必填</md-th>
      <md-th  style="width: 37%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>Authorization</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
</md-tr>
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
</md-tbody>
</md-table>
:::



### 路径参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >document_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档的唯一标识。点击[这里](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)了解如何获取文档的 `document_id`

**示例值**："doxcnePuYufKa49ISjhD8Iabcef"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >document_revision_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	要操作的文档版本。-1 表示文档最新版本。文档创建后，版本为 1。你需确保你已拥有文档的编辑权限。你可通过调用[获取文档基本信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/get)获取文档的最新 revision_id

**示例值**：-1

**默认值**：`-1`

**数据校验规则**：

- 最小值：`-1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >client_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	操作的唯一标识，与接口返回值的 client_token 相对应，用于幂等的进行更新操作。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作

**示例值**："0e2633a3-aa1a-4171-af9e-0768ff863566"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID 类型

**示例值**："open_id"

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom,isv" tags="">获取用户 user ID</md-perm>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 请求体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >requests</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >update_block_request\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	批量更新块。不支持在一次批量更新中，对同一个块进行多次更新。即请求体中的 Block ID 不能重复

**数据校验规则**：

- 最大长度：`200`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >update_text_elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >update_text_elements_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	更新文本元素请求
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	更新后的文本元素列表，单次更新中：

- reminder 元素上限 30 个

- mention_doc 元素上限 50 个

- mention_user 元素上限 100 个

**数据校验规则**：

- 最小长度：`1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`


**示例值**："文本"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。

**示例值**："ou_3bbe8a09c20e89cce9bff989ed840674"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)

**示例值**："doxbc873Y7cXD153gXqb76G1Y9b"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档类型

**示例值**：22

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)

**示例值**："https%3A%2F%2Fbytedance.feishu-boe.cn%2Fdocx%2Fdoxbc873Y7cXD153gXqb76G1Y9b"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性

**示例值**："undefined"

**数据校验规则**：

- 长度范围：`0` ～ `800` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**示例值**："FallbackToLink"

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。

**示例值**："ou_84aad35d084aa403a838cf73eeabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否通知

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）

**示例值**："1641967200000"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）

**示例值**："1643166000000"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	附件 token

**示例值**："boxcnOj88GDkmWGm2zsTyCabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID

**示例值**："doxcnM46kSWSkgUMW04ldKabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id

**示例值**："doxcnPFi0R56ctbvh2Mjkkabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符

**示例值**："E=mc^2\n"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >update_text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >update_text_style_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	更新文本样式请求
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文本样式。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo、Task 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	对齐方式

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>

**默认值**：`1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	块的背景色

**示例值**："LightGrayBackground"

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**示例值**："NoIndent"

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段

**示例值**：""auto""
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	应更新的字段，必须至少指定一个字段。例如，要调整 Block 对齐方式，请设置 fields 为 [1]。

**示例值**：修改的文字样式属性

**可选值有**：
<md-enum>
<md-enum-item key="1" >修改 Block 的对齐方式</md-enum-item>
<md-enum-item key="2" >Todo 的完成状态。支持对 Todo 和 Task 块进行修改</md-enum-item>
<md-enum-item key="3" >文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet、Todo 和 Task 块进行修改</md-enum-item>
<md-enum-item key="4" >代码块语言类型。仅支持对 Code 块进行修改</md-enum-item>
<md-enum-item key="5" >代码块是否自动换行。支持对 Code 块进行修改</md-enum-item>
<md-enum-item key="6" >块背景色</md-enum-item>
<md-enum-item key="7" >首行缩进级别。仅支持对 Text 块进行修改。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >update_table_property</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >update_table_property_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	更新表格属性请求。仅支持对 Table 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表格列宽，单位像素（px）

**示例值**：100

**数据校验规则**：

- 最小值：`50`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	需要修改列宽的表格列的索引

**示例值**：0

**数据校验规则**：

- 最小值：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >header_row</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	设置首行为标题行

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >header_column</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	设置首列为标题列

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >insert_table_row</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >insert_table_row_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表格插入新行请求。仅支持对 Table 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >row_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	插入的行在表格中的索引。（-1表示在表格末尾插入一行）

**示例值**：-1

**数据校验规则**：

- 最小值：`-1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >insert_table_column</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >insert_table_column_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表格插入新列请求。仅支持对 Table 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	插入的列在表格中的索引。（-1表示在表格末尾插入一列）

**示例值**：-1

**数据校验规则**：

- 最小值：`-1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >delete_table_rows</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >delete_table_rows_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表格批量删除行请求。仅支持对 Table 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >row_start_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	行开始索引（区间左闭右开）

**示例值**：0

**数据校验规则**：

- 最小值：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >row_end_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	行结束索引（区间左闭右开）

**示例值**：1

**数据校验规则**：

- 最小值：`1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >delete_table_columns</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >delete_table_columns_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表格批量删除列请求。仅支持对 Table 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_start_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	列开始索引（区间左闭右开）

**示例值**：0

**数据校验规则**：

- 最小值：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_end_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	列结束索引（区间左闭右开）

**示例值**：1

**数据校验规则**：

- 最小值：`1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >merge_table_cells</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >merge_table_cells_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表格合并单元格请求。仅支持对 Table 块进行修改。表格单元格需要满足以下任一条件：

- 完全包含在之前合并的区域内

- 完全不在之前合并的区域内
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >row_start_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	行起始索引（区间左闭右开）

**示例值**：0

**数据校验规则**：

- 最小值：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >row_end_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	行结束索引（区间左闭右开）

**示例值**：1

**数据校验规则**：

- 最小值：`1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_start_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	列起始索引（区间左闭右开）

**示例值**：0

**数据校验规则**：

- 最小值：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_end_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	列结束索引（区间左闭右开）

**示例值**：1

**数据校验规则**：

- 最小值：`1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >unmerge_table_cells</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >unmerge_table_cells_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表格取消单元格合并状态请求。仅支持对 Table 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >row_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	table 行索引

**示例值**：0

**数据校验规则**：

- 最小值：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	table 列索引

**示例值**：0

**数据校验规则**：

- 最小值：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >insert_grid_column</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >insert_grid_column_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分栏插入新的分栏列请求。仅支持对 Grid 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	插入列索引，从 1 开始，如 1 表示在第一列后插入，注意不允许传 0（-1表示在最后一列后插入）

**示例值**：1

**数据校验规则**：

- 最小值：`-1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >delete_grid_column</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >delete_grid_column_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分栏删除列请求。仅支持对 Grid 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >column_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	删除列索引，从 0 开始，如 0 表示删除第一列（-1表示删除最后一列）

**示例值**：0

**数据校验规则**：

- 最小值：`-1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >update_grid_column_width_ratio</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >update_grid_column_width_ratio_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	更新分栏列宽比例请求。仅支持对 Grid 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >width_ratios</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	更新列宽比例时，需要传入所有列宽占比，单位 %

**示例值**：50

**数据校验规则**：

- 长度范围：`1` ～ `99`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >replace_image</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >replace_image_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	替换图片请求。调用此请求前，你需确保已经上传过素材
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	图片 Token。可参考[如何插入图片-第二步：上传图片素材](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq#1908ddf0)上传图片得到图片 Token。

**示例值**："boxbckbfvfcqEg22hAzN8Dabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图片宽度，单位像素（px）
1. 优先使用本次请求传入的 width 值；
2. 若本次请求未传 width，且为首次更新（待更新的图片块 token 为空），服务端将检测并使用请求传入的图片的实际 width；检测失败将兜底为 100 px。
3. 若本次请求未传 width，且非首次更新，width 字段将保持原值不变。

**示例值**：100
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >height</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图片高度，单位像素（px）
1. 优先使用本次请求传入的 height 值；
2. 若本次请求未传 height，且为首次更新（待更新的图片块 token 为空），服务端将检测并使用请求传入的图片的实际 height；检测失败将兜底为 100 px。
3. 若本次请求未传 height，且非首次更新，height 字段将保持原值不变。

**示例值**：100
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	对齐方式

**示例值**：2

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >caption</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >caption</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	图片描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	描述的文本内容

**示例值**："caption"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >replace_file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >replace_file_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	替换附件请求。调用此请求前，你需确保已经上传过素材
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	附件 token

**示例值**："boxbckbfvfcqEg22hAzN8Dabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	Block 唯一标识。你可调用[获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)获取文档中块的 `block_id`

**示例值**："doxcnSS4ouQkQEouGSUkTg9NJPe"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >update_text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >update_text_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	更新文本元素及样式请求
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	更新的文本元素列表。单次更新中：

- reminder 上限 30 个

- mention_doc 上限 50 个

- mention_user 上限 100 个

**数据校验规则**：

- 最小长度：`1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`


**示例值**："文本"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。

**示例值**："ou_3bbe8a09c20e89cce9bff989ed840674"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)

**示例值**："doxbc873Y7cXD153gXqb76G1Y9b"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	云文档类型

**示例值**：22

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)

**示例值**："https%3A%2F%2Fbytedance.feishu-boe.cn%2Fdocx%2Fdoxbc873Y7cXD153gXqb76G1Y9b"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性

**示例值**："undefined"

**数据校验规则**：

- 长度范围：`0` ～ `800` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**示例值**："FallbackToLink"

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。

**示例值**："ou_84aad35d084aa403a838cf73eeabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否通知

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）

**示例值**："1641967200000"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）

**示例值**："1643166000000"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	附件 token

**示例值**："boxcnOj88GDkmWGm2zsTyCabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID

**示例值**："doxcnM46kSWSkgUMW04ldKabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id

**示例值**："doxcnPFi0R56ctbvh2Mjkkabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符

**示例值**："E=mc^2\n"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加粗

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	斜体

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	删除线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	下划线

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	inline 代码

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	背景色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字体颜色

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)

**示例值**："https%3A%2F%2Fopen.feishu.cn%2F"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。

**示例值**：["1660030311959965796"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	更新的文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	对齐方式

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>

**默认值**：`1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	块的背景色

**示例值**："LightGrayBackground"

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**示例值**："NoIndent"

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段

**示例值**：""auto""
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文本样式中要更新的字段，必须至少指定一个字段。例如，要调整 Block 对齐方式，请设置 fields 为 [1]

**示例值**：[1]

**可选值有**：
<md-enum>
<md-enum-item key="1" >修改 Block 的对齐方式</md-enum-item>
<md-enum-item key="2" >修改 todo 的完成状态。支持对 Todo 和 Task 块进行修改</md-enum-item>
<md-enum-item key="3" >文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet、Todo 和 Task 块进行修改</md-enum-item>
<md-enum-item key="4" >代码块的语言类型。仅支持对 Code 块进行修改</md-enum-item>
<md-enum-item key="5" >代码块是否自动换行。支持对 Code 块进行修改</md-enum-item>
<md-enum-item key="6" >块背景色</md-enum-item>
<md-enum-item key="7" >首行缩进级别。仅支持对 Text 块进行修改。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >update_task</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >update_task_request</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	更新任务 Block 请求
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >task_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务 ID。该字段仅在首次更新 Task Block 时生效，更新成功后，后续请求中将忽略该字段。

**示例值**："ba5040f4-8116-4042-ab3c-254e5cfe3ce7"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	折叠状态，字段为空时不更新折叠状态

**示例值**：false
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

### 请求示例
```bash
curl --location --request PATCH 'https://open.feishu.cn/open-apis/docx/v1/documents/doxcnAJ9VRRJqVMYZ1MyKnavXWe/blocks/batch_update' \
--header 'Authorization: Bearer u-xxx'
--header 'Content-Type: application/json' \
--data-raw '{
    "requests": [
        {
            "block_id": "doxcnk0i44OMOaouw8AdXuXrp6b",
            "merge_table_cells": {
                "column_end_index": 2,
                "column_start_index": 0,
                "row_end_index": 1,
                "row_start_index": 0
            }
        },
        {
            "block_id": "doxcn0K8iGSMW4Mqgs9qlyTP50d",
            "update_text_elements": {
                "elements": [
                    {
                        "text_run": {
                            "content": "Hello",
                            "text_element_style": {
                                "background_color": 2,
                                "bold": true,
                                "italic": true,
                                "strikethrough": true,
                                "text_color": 2,
                                "underline": true                            }
                        }
                    },
                    {
                        "text_run": {
                            "content": "World ",
                            "text_element_style": {
                                "italic": true
                            }
                        }
                    },
                    {
                        "mention_doc": {
                            "obj_type": 22,
                            "token": "doxcnAJ9VRRJqVMYZ1MyKnayXWe",
                            "url": "https://test.feishu.cn/docx/doxcnAJ9VRRJqVMYZ1MyKnayXWe"
                        }
                    }
                ]
            }
        }
    ]
}'
# 调用前请替换 'Authorization: Bearer u-xxx' 中的 'u-xxx' 为真实的访问令牌
```

### 请求体示例
:::html
<md-code-json>
{
    "requests": [
        {
            "block_id": "doxcnk0i44OMOaouw8AdXuXrp6b",
            "merge_table_cells": {
                "column_end_index": 2,
                "column_start_index": 0,
                "row_end_index": 1,
                "row_start_index": 0
            }
        },
        {
            "block_id": "doxcn0K8iGSMW4Mqgs9qlyTP50d",
            "update_text_elements": {
                "elements": [
                    {
                        "text_run": {
                            "content": "Hello",
                            "text_element_style": {
                                "background_color": 2,
                                "bold": true,
                                "italic": true,
                                "strikethrough": true,
                                "text_color": 2,
                                "underline": true
                            }
                        }
                    },
                    {
                        "text_run": {
                            "content": "World ",
                            "text_element_style": {
                                "italic": true
                            }
                        }
                    },
                    {
                        "mention_doc": {
                            "obj_type": 22,
                            "token": "doxcnAJ9VRRJqVMYZ1MyKnayXWe",
                            "url": "https%3A%2F%2Ftest.feishu.cn%2Fdocx%2FdoxcnAJ9VRRJqVMYZ1MyKnayXWe"
                        }
                    }
                ]
            }
        }
    ]
}
</md-code-json>
:::



## 响应



### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >blocks</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >block\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	批量更新的 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	子块的唯一标识。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >parent_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	子块的父块 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >children</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	子块的子块 ID 列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >block_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	Block 类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >页面 Block</md-enum-item>
<md-enum-item key="2" >文本 Block</md-enum-item>
<md-enum-item key="3" >标题 1 Block</md-enum-item>
<md-enum-item key="4" >标题 2 Block</md-enum-item>
<md-enum-item key="5" >标题 3 Block</md-enum-item>
<md-enum-item key="6" >标题 4 Block</md-enum-item>
<md-enum-item key="7" >标题 5 Block</md-enum-item>
<md-enum-item key="8" >标题 6 Block</md-enum-item>
<md-enum-item key="9" >标题 7 Block</md-enum-item>
<md-enum-item key="10" >标题 8 Block</md-enum-item>
<md-enum-item key="11" >标题 9 Block</md-enum-item>
<md-enum-item key="12" >无序列表 Block</md-enum-item>
<md-enum-item key="13" >有序列表 Block</md-enum-item>
<md-enum-item key="14" >代码块 Block</md-enum-item>
<md-enum-item key="15" >引用 Block</md-enum-item>
<md-enum-item key="17" >待办事项 Block</md-enum-item>
<md-enum-item key="18" >多维表格 Block</md-enum-item>
<md-enum-item key="19" >高亮块 Block</md-enum-item>
<md-enum-item key="20" >会话卡片 Block</md-enum-item>
<md-enum-item key="21" >流程图 & UML Block</md-enum-item>
<md-enum-item key="22" >分割线 Block。为空结构体，需传入 `{}` 创建分割线 Block。</md-enum-item>
<md-enum-item key="23" >文件 Block</md-enum-item>
<md-enum-item key="24" >分栏 Block</md-enum-item>
<md-enum-item key="25" >分栏列 Block</md-enum-item>
<md-enum-item key="26" >内嵌网页 Block</md-enum-item>
<md-enum-item key="27" >图片 Block</md-enum-item>
<md-enum-item key="28" >开放平台小组件 Block</md-enum-item>
<md-enum-item key="29" >思维笔记 Block</md-enum-item>
<md-enum-item key="30" >电子表格 Block</md-enum-item>
<md-enum-item key="31" >表格 Block。了解如何在文档中插入表格，参考[文档常见问题-如何插入表格并往单元格填充内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq)。</md-enum-item>
<md-enum-item key="32" >表格单元格 Block</md-enum-item>
<md-enum-item key="33" >视图 Block</md-enum-item>
<md-enum-item key="34" >引用容器 Block。为空结构体，需传入 `{}` 创建引用容器 Block。</md-enum-item>
<md-enum-item key="35" >任务 Block</md-enum-item>
<md-enum-item key="36" >OKR Block</md-enum-item>
<md-enum-item key="37" >OKR Objective Block</md-enum-item>
<md-enum-item key="38" >OKR Key Result Block</md-enum-item>
<md-enum-item key="39" >OKR 进展 Block</md-enum-item>
<md-enum-item key="40" >文档小组件 Block</md-enum-item>
<md-enum-item key="41" >Jira 问题 Block</md-enum-item>
<md-enum-item key="42" >Wiki 子目录 Block</md-enum-item>
<md-enum-item key="43" >画板 Block</md-enum-item>
<md-enum-item key="44" >议程 Block</md-enum-item>
<md-enum-item key="45" >议程项 Block</md-enum-item>
<md-enum-item key="46" >议程项标题 Block</md-enum-item>
<md-enum-item key="47" >议程项内容 Block</md-enum-item>
<md-enum-item key="48" >链接预览 Block</md-enum-item>
<md-enum-item key="49" >源同步块，仅支持查询</md-enum-item>
<md-enum-item key="50" >引用同步块，仅支持查询。获取引用同步块内容详见：[如何获取引用同步块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq#19b71234)</md-enum-item>
<md-enum-item key="51" >Wiki 新版子目录</md-enum-item>
<md-enum-item key="52" >AI 模板 Block，仅支持查询</md-enum-item>
<md-enum-item key="999" >未支持 Block</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >page</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	文档的根 Block，也称页面 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	文本 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >heading1</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	一级标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >heading2</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	二级标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >heading3</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	三级标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >heading4</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	四级标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >heading5</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	五级标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >heading6</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	六级标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >heading7</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	七级标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >heading8</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	八级标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >heading9</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	九级标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >bullet</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	无序列表 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ordered</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	有序列表 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >quote</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	引用 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	公式 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >todo</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	待办事项 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >bitable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >bitable</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格文档 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >view_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >数据表</md-enum-item>
<md-enum-item key="2" >看板</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >callout</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >callout</md-text>
	</md-dt-td>
	<md-dt-td>
	高亮块 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	高亮块背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >中红色</md-enum-item>
<md-enum-item key="9" >中橙色</md-enum-item>
<md-enum-item key="10" >中黄色</md-enum-item>
<md-enum-item key="11" >中绿色</md-enum-item>
<md-enum-item key="12" >中蓝色</md-enum-item>
<md-enum-item key="13" >中紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >border_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	边框色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	文字颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >emoji_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	高亮块图标
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >chat_card</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_card</md-text>
	</md-dt-td>
	<md-dt-td>
	群聊卡片 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >chat_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	群聊天会话 ID。获取方式参考[群 ID 说明](ssl:ttdoc//uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >diagram</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >diagram</md-text>
	</md-dt-td>
	<md-dt-td>
	流程图/UML Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >diagram_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	绘图类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >流程图</md-enum-item>
<md-enum-item key="2" >UML 图</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >divider</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >divider</md-text>
	</md-dt-td>
	<md-dt-td>
	分割线 Block。为空结构体，需传入 `{}` 创建分割线 Block。
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	文件 Block。了解如何在文档中插入文件，参考[文档常见问题-如何插入文件/附件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >view_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	视图类型，卡片视图（默认）或预览视图

**可选值有**：
<md-enum>
<md-enum-item key="1" >卡片视图</md-enum-item>
<md-enum-item key="2" >预览视图</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >grid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >grid</md-text>
	</md-dt-td>
	<md-dt-td>
	分栏 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >column_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	分栏列数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >grid_column</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >grid_column</md-text>
	</md-dt-td>
	<md-dt-td>
	分栏列 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >width_ratio</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	当前分栏列占整个分栏的比例，单位 %
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >iframe</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >iframe</md-text>
	</md-dt-td>
	<md-dt-td>
	内嵌 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >component</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >iframe_component</md-text>
	</md-dt-td>
	<md-dt-td>
	iframe 的组成元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >iframe_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	iframe 类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >哔哩哔哩</md-enum-item>
<md-enum-item key="2" >西瓜视频</md-enum-item>
<md-enum-item key="3" >优酷</md-enum-item>
<md-enum-item key="4" >Airtable</md-enum-item>
<md-enum-item key="5" >百度地图</md-enum-item>
<md-enum-item key="6" >高德地图</md-enum-item>
<md-enum-item key="7" >Undefined</md-enum-item>
<md-enum-item key="8" >Figma</md-enum-item>
<md-enum-item key="9" >墨刀</md-enum-item>
<md-enum-item key="10" >Canva</md-enum-item>
<md-enum-item key="11" >CodePen</md-enum-item>
<md-enum-item key="12" >飞书问卷</md-enum-item>
<md-enum-item key="13" >金数据</md-enum-item>
<md-enum-item key="14" >Undefined</md-enum-item>
<md-enum-item key="15" >Undefined</md-enum-item>
<md-enum-item key="99" >Other</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	iframe 目标 url（需要进行 url_encode）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >image</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >image</md-text>
	</md-dt-td>
	<md-dt-td>
	图片 Block。了解如何在文档中插入图片，参考[文档常见问题-如何插入图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	宽度单位 px
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >height</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	高度单位 px
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	图片 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >caption</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >caption</md-text>
	</md-dt-td>
	<md-dt-td>
	图片描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	描述的文本内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >isv</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >isv</md-text>
	</md-dt-td>
	<md-dt-td>
	三方 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >component_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	团队互动应用唯一ID。该 ID 可通过调用[创建 BlockEntity](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/block-v2/entity/create) 接口，并从响应体中的 block_id 中获取，创建时使用的 `block_type_id` 需要与 `component_type_id` 一致。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >component_type_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	团队互动应用类型，比如信息收集"blk_5f992038c64240015d280958"。该 ID 可在 [开发者后台](https://open.feishu.cn/app) > **应用详情页** > **应用能力** > **云文档小组件** > **BlockTypeID** 获取。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >add_ons</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >add_ons</md-text>
	</md-dt-td>
	<md-dt-td>
	Add-ons
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >component_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档小组件 ID。该 ID 可通过调用[创建 BlockEntity](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/block-v2/entity/create) 接口，并从响应体中的 block_id 中获取，创建时使用的 `block_type_id` 需要与 `component_type_id` 一致。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >component_type_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档小组件类型，比如问答互动"blk_636a0a6657db8001c8df5488"。该 ID 可在 [开发者后台](https://open.feishu.cn/app) > **应用详情页** > **应用能力** > **云文档小组件** > **BlockTypeID** 获取。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >record</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档小组件内容数据，JSON 字符串
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mindnote</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mindnote</md-text>
	</md-dt-td>
	<md-dt-td>
	思维笔记 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	思维导图 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >sheet</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >sheet</md-text>
	</md-dt-td>
	<md-dt-td>
	电子表格 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	电子表格 block 的 token 和工作表的 ID 的组合
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >row_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	电子表格行数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >column_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	电子表格列数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >table</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >table</md-text>
	</md-dt-td>
	<md-dt-td>
	表格 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >cells</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	单元格数组，数组元素为 Table Cell Block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >property</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >table_property</md-text>
	</md-dt-td>
	<md-dt-td>
	表格属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >row_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	行数
- **创建块**接口中，该字段最大值为 9 
- **创建嵌套块**接口中，在单个表格单元格不超过上限 2000 情况下，该字段无固定最大值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >column_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	列数
- **创建块**接口中，该字段最大值为 9 
- **创建嵌套块**接口中，该字段最大值为 100
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >column_width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	列宽，单位像素（px）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >merge_info</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >table_merge_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	单元格合并信息。创建 Table 时，此属性只读，将由系统自动生成。如果需要合并单元格，可以通过更新块接口的子请求 `merge_table_cells` 实现
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >row_span</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	从当前行索引起被合并的连续行数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >col_span</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	从当前列索引起被合并的连续列数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >header_row</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	设置首行为标题行
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >header_column</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	设置首列为标题列
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >table_cell</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >table_cell</md-text>
	</md-dt-td>
	<md-dt-td>
	单元格 Block
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >view</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >view</md-text>
	</md-dt-td>
	<md-dt-td>
	视图 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >view_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	视图类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >卡片视图</md-enum-item>
<md-enum-item key="2" >预览视图</md-enum-item>
<md-enum-item key="3" >内联视图</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持 Block
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >quote_container</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >quote_container</md-text>
	</md-dt-td>
	<md-dt-td>
	引用容器 Block。为空结构体，需传入 `{}` 创建引用容器 Block。
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >task</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task</md-text>
	</md-dt-td>
	<md-dt-td>
	任务 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >task_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务 ID，查询具体任务详情见 [获取任务详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/get)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	折叠状态
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >okr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >okr</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR Block，仅可在使用 `user_access_token` 时创建
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >okr_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR ID，获取需要插入的 OKR ID 可见[获取用户的 OKR 列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/okr-v1/user-okr/list)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >objectives</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >objective_id_with_kr_id\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR Block 中的 Objective ID 和 Key Result ID，此值为空时插入 OKR 下所有的 Objective 和 Key Result
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >objective_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR 中 Objective 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >kr_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	Key Result 的 ID 列表，此值为空时插入当前 Objective 下的所有 Key Result
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >period_display_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	周期的状态

**可选值有**：
<md-enum>
<md-enum-item key="default" >默认</md-enum-item>
<md-enum-item key="normal" >正常</md-enum-item>
<md-enum-item key="invalid" >失效</md-enum-item>
<md-enum-item key="hidden" >隐藏</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >period_name_zh</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	周期名 - 中文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >period_name_en</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	周期名 - 英文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR 所属的用户 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >visible_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >okr_visible_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	可见性设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >progress_fill_area_visible</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	进展编辑区域是否可见
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >progress_status_visible</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	进展状态是否可见
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >score_visible</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	分数是否可见
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >okr_objective</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >okr_objective</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR Objective Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >objective_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Objective ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >confidential</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否在 OKR 平台设置了私密权限
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	Objective 的位置编号，对应 Block 中 O1、O2 的 1、2
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >score</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	打分信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >visible</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR Block 中是否展示该 Objective
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >weight</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	Objective 的权重
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >progress_rate</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >okr_progress_rate</md-text>
	</md-dt-td>
	<md-dt-td>
	进展信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mode</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	状态模式

**可选值有**：
<md-enum>
<md-enum-item key="simple" >简单模式</md-enum-item>
<md-enum-item key="advanced" >高级模式</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >current</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	当前进度，单位 %，advanced 模式使用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >percent</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	当前进度百分比，simple 模式使用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >progress_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	进展状态

**可选值有**：
<md-enum>
<md-enum-item key="unset" >未设置</md-enum-item>
<md-enum-item key="normal" >正常</md-enum-item>
<md-enum-item key="risk" >有风险</md-enum-item>
<md-enum-item key="extended" >已延期</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	进度起始值，单位 %，advanced 模式使用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >status_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	状态计算类型

**可选值有**：
<md-enum>
<md-enum-item key="default" >以风险最高的 Key Result 状态展示</md-enum-item>
<md-enum-item key="custom" >自定义</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >target</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	进度目标值，单位 %，advanced 模式使用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	Objective 的文本内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >okr_key_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >okr_key_result</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR Key Result
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >kr_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Key Result 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >confidential</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否在 OKR 平台设置了私密权限
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	Key Result 的位置编号，对应 Block 中 KR1、KR2 的 1、2。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >score</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	打分信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >visible</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR Block 中此 Key Result 是否可见
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >weight</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	Key Result 的权重
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >progress_rate</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >okr_progress_rate</md-text>
	</md-dt-td>
	<md-dt-td>
	进展信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mode</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	状态模式

**可选值有**：
<md-enum>
<md-enum-item key="simple" >简单模式</md-enum-item>
<md-enum-item key="advanced" >高级模式</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >current</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	当前进度，单位 %，advanced 模式使用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >percent</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	当前进度百分比，simple 模式使用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >progress_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	进展状态

**可选值有**：
<md-enum>
<md-enum-item key="unset" >未设置</md-enum-item>
<md-enum-item key="normal" >正常</md-enum-item>
<md-enum-item key="risk" >有风险</md-enum-item>
<md-enum-item key="extended" >已延期</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	进度起始值，单位 %，advanced 模式使用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >status_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	状态计算类型

**可选值有**：
<md-enum>
<md-enum-item key="default" >以风险最高的 Key Result 状态展示</md-enum-item>
<md-enum-item key="custom" >自定义</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >target</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float</md-text>
	</md-dt-td>
	<md-dt-td>
	进度目标值，单位 %，advanced 模式使用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	Key Result 的文本内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >done</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	todo 的完成状态。支持对 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >folded</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet 和 Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块的语言类型。仅支持对 Code 块进行修改

**可选值有**：
<md-enum>
<md-enum-item key="1" >PlainText</md-enum-item>
<md-enum-item key="2" >ABAP</md-enum-item>
<md-enum-item key="3" >Ada</md-enum-item>
<md-enum-item key="4" >Apache</md-enum-item>
<md-enum-item key="5" >Apex</md-enum-item>
<md-enum-item key="6" >Assembly Language</md-enum-item>
<md-enum-item key="7" >Bash</md-enum-item>
<md-enum-item key="8" >CSharp</md-enum-item>
<md-enum-item key="9" >C++</md-enum-item>
<md-enum-item key="10" >C</md-enum-item>
<md-enum-item key="11" >COBOL</md-enum-item>
<md-enum-item key="12" >CSS</md-enum-item>
<md-enum-item key="13" >CoffeeScript</md-enum-item>
<md-enum-item key="14" >D</md-enum-item>
<md-enum-item key="15" >Dart</md-enum-item>
<md-enum-item key="16" >Delphi</md-enum-item>
<md-enum-item key="17" >Django</md-enum-item>
<md-enum-item key="18" >Dockerfile</md-enum-item>
<md-enum-item key="19" >Erlang</md-enum-item>
<md-enum-item key="20" >Fortran</md-enum-item>
<md-enum-item key="21" >FoxPro</md-enum-item>
<md-enum-item key="22" >Go</md-enum-item>
<md-enum-item key="23" >Groovy</md-enum-item>
<md-enum-item key="24" >HTML</md-enum-item>
<md-enum-item key="25" >HTMLBars</md-enum-item>
<md-enum-item key="26" >HTTP</md-enum-item>
<md-enum-item key="27" >Haskell</md-enum-item>
<md-enum-item key="28" >JSON</md-enum-item>
<md-enum-item key="29" >Java</md-enum-item>
<md-enum-item key="30" >JavaScript</md-enum-item>
<md-enum-item key="31" >Julia</md-enum-item>
<md-enum-item key="32" >Kotlin</md-enum-item>
<md-enum-item key="33" >LateX</md-enum-item>
<md-enum-item key="34" >Lisp</md-enum-item>
<md-enum-item key="35" >Logo</md-enum-item>
<md-enum-item key="36" >Lua</md-enum-item>
<md-enum-item key="37" >MATLAB</md-enum-item>
<md-enum-item key="38" >Makefile</md-enum-item>
<md-enum-item key="39" >Markdown</md-enum-item>
<md-enum-item key="40" >Nginx</md-enum-item>
<md-enum-item key="41" >Objective-C</md-enum-item>
<md-enum-item key="42" >OpenEdgeABL</md-enum-item>
<md-enum-item key="43" >PHP</md-enum-item>
<md-enum-item key="44" >Perl</md-enum-item>
<md-enum-item key="45" >PostScript</md-enum-item>
<md-enum-item key="46" >Power Shell</md-enum-item>
<md-enum-item key="47" >Prolog</md-enum-item>
<md-enum-item key="48" >ProtoBuf</md-enum-item>
<md-enum-item key="49" >Python</md-enum-item>
<md-enum-item key="50" >R</md-enum-item>
<md-enum-item key="51" >RPG</md-enum-item>
<md-enum-item key="52" >Ruby</md-enum-item>
<md-enum-item key="53" >Rust</md-enum-item>
<md-enum-item key="54" >SAS</md-enum-item>
<md-enum-item key="55" >SCSS</md-enum-item>
<md-enum-item key="56" >SQL</md-enum-item>
<md-enum-item key="57" >Scala</md-enum-item>
<md-enum-item key="58" >Scheme</md-enum-item>
<md-enum-item key="59" >Scratch</md-enum-item>
<md-enum-item key="60" >Shell</md-enum-item>
<md-enum-item key="61" >Swift</md-enum-item>
<md-enum-item key="62" >Thrift</md-enum-item>
<md-enum-item key="63" >TypeScript</md-enum-item>
<md-enum-item key="64" >VBScript</md-enum-item>
<md-enum-item key="65" >Visual Basic</md-enum-item>
<md-enum-item key="66" >XML</md-enum-item>
<md-enum-item key="67" >YAML</md-enum-item>
<md-enum-item key="68" >CMake</md-enum-item>
<md-enum-item key="69" >Diff</md-enum-item>
<md-enum-item key="70" >Gherkin</md-enum-item>
<md-enum-item key="71" >GraphQL</md-enum-item>
<md-enum-item key="72" >OpenGL Shading Language</md-enum-item>
<md-enum-item key="73" >Properties</md-enum-item>
<md-enum-item key="74" >Solidity</md-enum-item>
<md-enum-item key="75" >TOML</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >wrap</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	代码块是否自动换行。支持对 Code 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	块的背景色

**可选值有**：
<md-enum>
<md-enum-item key="LightGrayBackground" >浅灰色</md-enum-item>
<md-enum-item key="LightRedBackground" >浅红色</md-enum-item>
<md-enum-item key="LightOrangeBackground" >浅橙色</md-enum-item>
<md-enum-item key="LightYellowBackground" >浅黄色</md-enum-item>
<md-enum-item key="LightGreenBackground" >浅绿色</md-enum-item>
<md-enum-item key="LightBlueBackground" >浅蓝色</md-enum-item>
<md-enum-item key="LightPurpleBackground" >浅紫色</md-enum-item>
<md-enum-item key="PaleGrayBackground" >中灰色</md-enum-item>
<md-enum-item key="DarkGrayBackground" >灰色</md-enum-item>
<md-enum-item key="DarkRedBackground" >中红色</md-enum-item>
<md-enum-item key="DarkOrangeBackground" >中橙色</md-enum-item>
<md-enum-item key="DarkYellowBackground" >中黄色</md-enum-item>
<md-enum-item key="DarkGreenBackground" >中绿色</md-enum-item>
<md-enum-item key="DarkBlueBackground" >中蓝色</md-enum-item>
<md-enum-item key="DarkPurpleBackground" >中紫色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >indentation_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	首行缩进级别。仅支持对 Text 块进行修改。

**可选值有**：
<md-enum>
<md-enum-item key="NoIndent" >无缩进</md-enum-item>
<md-enum-item key="OneLevelIndent" >一级缩进</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用于确定有序列表项编号，为具体数值或'auto'
- 开始新列表时，有序列表编号从 1 开始，sequence='1'
- 手动修改为非连续编号时，有序列表编号为设定的具体数值，如 sequence='3'
- 继续编号时，有序列表编号自动连续，sequence='auto'
- 部分历史数据和通过 OpenAPI 创建的有序列表不返回此字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="8">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >okr_progress</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >okr_progress</md-text>
	</md-dt-td>
	<md-dt-td>
	OKR 进展信息
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 id 列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >jira_issue</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >jira_issue</md-text>
	</md-dt-td>
	<md-dt-td>
	Jira 问题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Jira 问题 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Jira 问题 key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >wiki_catalog</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >wiki_catalog</md-text>
	</md-dt-td>
	<md-dt-td>
	Wiki 子目录 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >wiki_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	知识库 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >board</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >board</md-text>
	</md-dt-td>
	<md-dt-td>
	画板 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	画板 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	宽度，单位 px；不填时自动适应文档宽度；值超出文档最大宽度时，页面渲染为文档最大宽度
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >height</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	高度，单位 px；不填时自动根据画板内容计算；值超出屏幕两倍高度时，页面渲染为屏幕两倍高度
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >agenda</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >agenda</md-text>
	</md-dt-td>
	<md-dt-td>
	议程 Block
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >agenda_item</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >agenda_item</md-text>
	</md-dt-td>
	<md-dt-td>
	议程项 Block
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >agenda_item_title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >agenda_item_title</md-text>
	</md-dt-td>
	<md-dt-td>
	议程项标题 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >agenda_title_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	文本元素
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联附件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联 block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >agenda_item_content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >agenda_item_content</md-text>
	</md-dt-td>
	<md-dt-td>
	议程项内容 Block
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >link_preview</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link_preview</md-text>
	</md-dt-td>
	<md-dt-td>
	链接预览 Block
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >url_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	链接类型

**可选值有**：
<md-enum>
<md-enum-item key="MessageLink" >消息链接</md-enum-item>
<md-enum-item key="Undefined" >未定义的链接类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >source_synced</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >source_synced</md-text>
	</md-dt-td>
	<md-dt-td>
	源同步块，仅支持查询
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >elements</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	同步块独立页标题，由文本元素组成
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_run</md-text>
	</md-dt-td>
	<md-dt-td>
	文字。支持对 Page、Text、Heading1~9、Bullet、Ordered、Code、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容。要实现文本内容的换行，你可以：
- 在传入的文本内容中添加 `\n` 实现软换行（Soft Break，与在文档中通过操作 `Shift + Enter` 的效果一致）
- 创建一个新的文本 Block，实现两个文本 Block 之间的硬换行（Hard Break，与在文档中通过操作 `Enter` 的效果一致）


**注意**：软换行在渲染时可能会被忽略，具体取决于渲染器如何处理；硬换行在渲染时始终会显示为一个新行。

**数据校验规则**：
* 一个文本 Block 中 content 总长度最大值：`100,000 个 UTF-16 编码的字符`

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_user</md-text>
	</md-dt-td>
	<md-dt-td>
	@用户。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 OpenID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention_doc</md-text>
	</md-dt-td>
	<md-dt-td>
	@文档。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档 token。获取方式参考[如何获取云文档资源相关 token（id）](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >Doc</md-enum-item>
<md-enum-item key="3" >Sheet</md-enum-item>
<md-enum-item key="8" >Bitable</md-enum-item>
<md-enum-item key="11" >MindNote</md-enum-item>
<md-enum-item key="12" >File</md-enum-item>
<md-enum-item key="15" >Slide</md-enum-item>
<md-enum-item key="16" >Wiki</md-enum-item>
<md-enum-item key="22" >Docx</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	云文档链接（需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题，只读属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fallback_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无云文档阅读权限或云文档已删除时的降级方式

**可选值有**：
<md-enum>
<md-enum-item key="FallbackToLink" >降级为超链接形式写入，超链接的文本内容为当前传入的文档标题，链接为当前传入的云文档链接（需要 url_encode）</md-enum-item>
<md-enum-item key="FallbackToText" >降级为文本形式写入，文本内容为当前传入的云文档链接进行 URL 解码后的结果</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder</md-text>
	</md-dt-td>
	<md-dt-td>
	日期提醒。支持对 Text、Heading1~9、Bullet、Ordered、Quote、Todo 块进行修改
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >create_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建者用户 ID，ID 类型与查询参数 `user_id_type` 的取值一致。获取方式参考 `user_id_type` 参数说明。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_notify</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否通知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_whole_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是日期还是整点小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >expire_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件发生的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >notify_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	触发通知的时间（毫秒级时间戳）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_file</md-text>
	</md-dt-td>
	<md-dt-td>
	内联文件。仅支持删除或移动位置，不支持创建新的内联文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当前文档中该文件所处的 block 的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >undefined</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >undefined_element</md-text>
	</md-dt-td>
	<md-dt-td>
	未支持的 TextElement
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >inline_block</md-text>
	</md-dt-td>
	<md-dt-td>
	内联块。仅支持删除或移动位置，不支持创建新的内联块
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	关联的内联状态的 block 的 block_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >equation</md-text>
	</md-dt-td>
	<md-dt-td>
	公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html

**数据校验规则**：
* 长度范围：`1`~`10,000`字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_element_style</md-text>
	</md-dt-td>
	<md-dt-td>
	文本局部样式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >bold</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加粗
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >italic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	斜体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >strikethrough</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >underline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	下划线
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >inline_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	inline 代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >background_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	背景色

**可选值有**：
<md-enum>
<md-enum-item key="1" >浅红色</md-enum-item>
<md-enum-item key="2" >浅橙色</md-enum-item>
<md-enum-item key="3" >浅黄色</md-enum-item>
<md-enum-item key="4" >浅绿色</md-enum-item>
<md-enum-item key="5" >浅蓝色</md-enum-item>
<md-enum-item key="6" >浅紫色</md-enum-item>
<md-enum-item key="7" >中灰色</md-enum-item>
<md-enum-item key="8" >红色</md-enum-item>
<md-enum-item key="9" >橙色</md-enum-item>
<md-enum-item key="10" >黄色</md-enum-item>
<md-enum-item key="11" >绿色</md-enum-item>
<md-enum-item key="12" >蓝色</md-enum-item>
<md-enum-item key="13" >紫色</md-enum-item>
<md-enum-item key="14" >灰色</md-enum-item>
<md-enum-item key="15" >浅灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >text_color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字体颜色

**可选值有**：
<md-enum>
<md-enum-item key="1" >红色</md-enum-item>
<md-enum-item key="2" >橙色</md-enum-item>
<md-enum-item key="3" >黄色</md-enum-item>
<md-enum-item key="4" >绿色</md-enum-item>
<md-enum-item key="5" >蓝色</md-enum-item>
<md-enum-item key="6" >紫色</md-enum-item>
<md-enum-item key="7" >灰色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	超链接指向的 url (需要 url_encode)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >comment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID 列表。在创建 Block 时，不支持传入评论 ID；在更新文本 Block 的 Element 时，允许将对应版本已存在的评论 ID 移动到同一个 Block 内的任意 Element 中，但不支持传入新的评论 ID。如需查询评论内容请阅览「[获取回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/list)」 API。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >align</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	对齐方式

**可选值有**：
<md-enum>
<md-enum-item key="1" >居左排版</md-enum-item>
<md-enum-item key="2" >居中排版</md-enum-item>
<md-enum-item key="3" >居右排版</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >reference_synced</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reference_synced</md-text>
	</md-dt-td>
	<md-dt-td>
	引用同步块，仅支持查询。获取引用同步块内容详见：[如何获取引用同步块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq#19b71234)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >source_document_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	源文档的文档 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >source_block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	源同步块的 Block ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >sub_page_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >sub_page_list</md-text>
	</md-dt-td>
	<md-dt-td>
	Wiki 新版子目录
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >wiki_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	知识库节点 token，仅支持知识库文档创建子页面列表，且需传入当前页面的 wiki token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ai_template</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >ai_template</md-text>
	</md-dt-td>
	<md-dt-td>
	AI 模板 Block，仅支持查询
	</md-dt-td>
</md-dt-tr>



<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >document_revision_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	当前更新成功后文档的版本号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >client_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	操作的唯一标识，更新请求中使用此值表示幂等的进行此次更新
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "data": {
        "blocks": [
            {
                "block_id": "doxcn0K8iGSMW4Mqgs9qlyTP50d",
                "block_type": 2,
                "parent_id": "doxcnAJ9VRRJqVMYZ1MyKnayXWe",
                "text": {
                    "elements": [
                        {
                            "text_run": {
                                "content": "Hello",
                                "text_element_style": {
                                    "background_color": 2,
                                    "bold": true,
                                    "inline_code": false,
                                    "italic": true,
                                    "strikethrough": true,
                                    "text_color": 2,
                                    "underline": true
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "World ",
                                "text_element_style": {
                                    "bold": false,
                                    "inline_code": false,
                                    "italic": true,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        },
                        {
                            "mention_doc": {
                                "obj_type": 22,
                                "title": "Demo",
                                "token": "doxcnAJ9VRRJqVMYZ1MyKnayXWe",
                                "url": "https%3A%2F%2Ftest.feishu.cn%2Fdocx%2FdoxcnAJ9VRRJqVMYZ1MyKnayXWe"
                            }
                        }
                    ],
                    "style": {
                        "done": false,
                        "folded": false,
                        "wrap": false
                    }
                }
            },
            {
                "block_id": "doxcnk0i44OMOaouw8AdXuXrp6b",
                "block_type": 31,
                "children": [
                    "doxcnO2UeYco4mu80sr6oRCiRpf",
                    "doxcnaAGMYMk6kcGeYXNfc1Rluc",
                    "doxcnCKuqMQOM0gAOYfysUgZD2d",
                    "doxcnMKg8Uk8wiAMIW8omQ06uoc"
                ],
                "parent_id": "doxcnAJ9VRRJqVMYZ1MyKnayXWe",
                "table": {
                    "cells": [
                        "doxcnO2UeYco4mu80sr6oRCiRpf",
                        "doxcnaAGMYMk6kcGeYXNfc1Rluc",
                        "doxcnCKuqMQOM0gAOYfysUgZD2d",
                        "doxcnMKg8Uk8wiAMIW8omQ06uoc"
                    ],
                    "property": {
                        "column_size": 2,
                        "column_width": [
                            100,
                            100
                        ],
                        "merge_info": [
                            {
                                "col_span": 2,
                                "row_span": 1
                            },
                            {
                                "col_span": 1,
                                "row_span": 1
                            },
                            {
                                "col_span": 1,
                                "row_span": 1
                            },
                            {
                                "col_span": 1,
                                "row_span": 1
                            }
                        ],
                        "row_size": 2
                    }
                }
            }
        ],
        "client_token": "e472907a-9ddc-4453-af28-22a6530b76b9",
        "document_revision_id": 387
    },
    "msg": ""
}
</md-code-json>
:::



### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>400</md-td>
  <md-td>1770001</md-td>
  <md-td>invalid param</md-td>
  <md-td>确认传入的参数是否合法</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1770002</md-td>
  <md-td>not found</md-td>
  <md-td>**文档场景中**：<br>
文档的 `document_id` 不存在。请确认文档是否已被删除或 `document_id` 是否填写正确。参考[文档概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)了解如何获取文档的 `document_id`。
<br>
**群公告场景中**：<br>
群 ID `chat_id` 不存在。请确认群是否被解散或 `chat_id` 是否填写正确。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770003</md-td>
  <md-td>resource deleted</md-td>
  <md-td>确认资源是否已被删除</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770004</md-td>
  <md-td>too many blocks in document</md-td>
  <md-td>确认文档 Block 数量是否超上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770005</md-td>
  <md-td>too deep level in document</md-td>
  <md-td>确认文档 Block 层级是否超上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770006</md-td>
  <md-td>schema mismatch</md-td>
  <md-td>确认文档结构是否合法</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770007</md-td>
  <md-td>too many children in block</md-td>
  <md-td>确认指定 Block 的 Children 数量是否超上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770008</md-td>
  <md-td>too big file size</md-td>
  <md-td>确认上传的文件尺寸是否超上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770010</md-td>
  <md-td>too many table column</md-td>
  <md-td>确认表格列数是否超上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770011</md-td>
  <md-td>too many table cell</md-td>
  <md-td>确认表格单元格数量是否超上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770012</md-td>
  <md-td>too many grid column</md-td>
  <md-td>确认 Grid 列数量是否超上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770013</md-td>
  <md-td>relation mismatch</md-td>
  <md-td>图片、文件等资源的关联关系不正确。请确保在创建图片、文件块时，同时上传了相关图片或文件素材至对应的文档块中。详情参考文档[常见问题 3 和 4](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq#1908ddf0)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770014</md-td>
  <md-td>parent children relation mismatch</md-td>
  <md-td>确认 Block 父子关系是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770015</md-td>
  <md-td>single edit with multi document</md-td>
  <md-td>确认 Block 所属文档与指定的 Document 是否相同</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770019</md-td>
  <md-td>repeated blockID in document</md-td>
  <md-td>确认 Document 中的 BlockID 是否有重复</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770020</md-td>
  <md-td>operation denied on copying document</md-td>
  <md-td>确认 Document 是否正在创建副本中</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770021</md-td>
  <md-td>too old document</md-td>
  <md-td>确认指定的 Document 版本（Revision_id）是否过旧。指定的版本号与文档最新版本号差值不能超过 1000</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770022</md-td>
  <md-td>invalid page token</md-td>
  <md-td>确认查询参数中的 page_token 是否合法</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770024</md-td>
  <md-td>invalid operation</md-td>
  <md-td>确认操作是否合法:
- 除了 text_run，其他 text_element 不允许设置 link 属性
- 编辑请求中 text_element 中不允许设置 undefined 元素 
- 分栏的列数范围在 [2, 10] 之间，不允许减少或者增加分栏列数超过约定范围
- 表格只有一行或者一列时，不允许通过减少表格行列的请求操作表格</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770025</md-td>
  <md-td>operation and block not match</md-td>
  <md-td>确认指定 Block 应用对应操作是否合法</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770026</md-td>
  <md-td>row operation over range</md-td>
  <md-td>确认行操作下标是否越界</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770027</md-td>
  <md-td>column operation over range</md-td>
  <md-td>确认列操作下标是否越界</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770028</md-td>
  <md-td>block not support create children</md-td>
  <md-td>确认指定 Block 添加 Children 是否合法</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770029</md-td>
  <md-td>block not support to create</md-td>
  <md-td>确认指定 Block 是否支持创建</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770030</md-td>
  <md-td>invalid parent children relation</md-td>
  <md-td>确认指定操作其父子关系是否合法</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770031</md-td>
  <md-td>block not support to delete children</md-td>
  <md-td>确认指定 Block 是否支持删除 Children</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770033</md-td>
  <md-td>content size exceed limit</md-td>
  <md-td>纯文本内容大小超过 10485760  字符限制，请减少内容后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770034</md-td>
  <md-td>operation count exceed limited</md-td>
  <md-td>当前请求中涉及单元格个数过多，请拆分成多次请求</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770035</md-td>
  <md-td>resource count exceed limit</md-td>
  <md-td>当前请求中资源的数目超限，请拆分成多次请求。各类资源上限为：ChatCard 200 张，File 200 个，MentionDoc 200 个，MentionUser 200 个，Image 20 张，ISV 20 个，Sheet 5 篇，Bitable 5 篇。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770038</md-td>
  <md-td>resource not found</md-td>
  <md-td>未查询到插入的资源或资源无权限插入，请检查资源标识是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1770032</md-td>
  <md-td>forbidden</md-td>
  <md-td>**文档场景中**：

确认当前调用身份是否有文档阅读（获取相关接口）或编辑（更新、删除、创建相关接口）权限。请参考以下方式解决：
  
- 如果你使用的是 `tenant_access_token`，意味着当前应用没有文档权限。你需通过云文档网页页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加文档权限。
    
  **说明**：在 **添加文档应用** 前，你需确保目标应用至少开通了一个云文档或多维表格的 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&maxWidth=550&width=3278)
   
- 如果你使用的是 `user_access_token`，意味着当前用户没有文档权限。你需通过云文档网页页面右上方 **分享** 入口为当前用户添加文档权限。

   ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e052d3bac56f9441296ae22e2969d63_a2DEYrJup8.png?height=278&maxWidth=550&width=1383)

   了解具体操作步骤或其它添加权限方式，参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。


对于创建和更新相关接口，你还需要确认：

- 当前调用身份是否有 MentionDoc 即 @文档 中文档的阅读权限
- MentionUser 即 @用户 中的用户是否在职且与当前调用身份互为联系人
- 当前调用身份是否具有群卡片的查看和分享权限
- 当前调用身份是否具有访问指定 Wiki 即知识库子目录的权限
- 当前调用身份是否具有 OKR、ISV、Add-Ons 等文档块的查看权限

**群公告场景中**：

当前的操作者没有群公告的编辑权限。解决方案：

- 方案一：调用[指定群管理员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/add_managers)接口，将当前操作者置为群管理员，然后重试。
- 方案二：在 **飞书客户端 > 群组 > 设置 > 群管理** 中，将 **谁可以编辑群信息** 设置为 **所有群成员**，然后重试。

对于创建和更新相关接口，你还需要确认：

- 当前调用身份是否有 MentionDoc 即 @文档 中文档的阅读权限
- MentionUser 即 @用户 中的用户是否在职且与当前调用身份互为联系人
- 当前调用身份是否具有群卡片的查看和分享权限
- 当前调用身份是否具有访问指定 Wiki 即知识库子目录的权限
- 当前调用身份是否具有 OKR、ISV、Add-Ons 等文档块的查看权限</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771001</md-td>
  <md-td>server internal error</md-td>
  <md-td>服务器内部错误。请重试，若仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771006</md-td>
  <md-td>mount folder failed</md-td>
  <md-td>挂载文档到云空间文件夹失败。请检查是否错误地传入了 wiki_token 并重试。若仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771002</md-td>
  <md-td>gateway server internal error</md-td>
  <md-td>网关服务内部错误。请重试，若仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771003</md-td>
  <md-td>gateway marshal error</md-td>
  <md-td>网关服务解析错误。请重试，若仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771004</md-td>
  <md-td>gateway unmarshal error</md-td>
  <md-td>网关服务反解析错误。请重试，若仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>503</md-td>
  <md-td>1771005</md-td>
  <md-td>system under maintenance</md-td>
  <md-td>系统服务正在维护中，请重试，若仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::




