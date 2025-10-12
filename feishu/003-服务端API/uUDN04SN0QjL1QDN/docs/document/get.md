<!--
title: 获取文档基本信息
id: 7068199542315302940
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/get
updatedAt: 1735881780000
source: https://open.feishu.cn/document/server-docs/docs/docs/docx-v1/document/get
-->
# 获取文档基本信息

获取文档标题和最新版本 ID。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=docx&version=v1&resource=document&method=get)

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
**应用频率限制**：单个应用调用频率上限为每秒 5 次，超过该频率限制，接口将返回 HTTP 状态码 <font color="blue">400</font> 及错误码 <font color="blue">99991400</font>。当请求被限频，应用需要处理限频状态码，并使用指数退避算法或其它一些频控策略降低对 API 的调用速率。
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
      <md-td>https://open.feishu.cn/open-apis/docx/v1/documents/:document_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[特殊频控](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="docx:document:readonly" desc="查看新版文档" support_app_types="custom,isv" tags="">查看新版文档</md-perm>
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
	文档的唯一标识。你可通过以下方式获取文档的 `document_id`。了解更多，参考[文档概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview#e18a49a1)。

- 若文档存储在云盘中，你可通过 URL 地址或通过[获取文件夹下文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list) 获取其中文档资源的 `document_id`。

- 若文档挂载在知识库中，你需通过知识库相关接口[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)获取该节点下挂载的云资源的 `obj_token` 和 `obj_type`。在该情况下，`obj_type` 为 `docx` 时，其对应的 `obj_token`  即为文档的 `document_id`。

**注意**：

对于知识库（wiki）中的文档，其 URL 地址中的 token 并不是该文档的 `document_id`。使用时请注意区分。

**示例值**："doxcnePuYufKa49ISjhD8Iabcef"

**数据校验规则**：

- 长度范围：`27` ～ `27` 字符
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >document</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >document</md-text>
	</md-dt-td>
	<md-dt-td>
	文档信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >document_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档的唯一标识。点击[这里](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)了解如何获取文档的 `document_id`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >revision_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	文档版本 ID。起始值为 1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文档标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >display_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >document_display_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	文档展示设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >show_authors</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文档信息中是否展示文档作者
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >show_create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文档信息中是否展示文档创建时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >show_pv</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文档信息中是否展示文档访问次数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >show_uv</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文档信息中是否展示文档访问人数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >show_like_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文档信息中是否展示点赞总数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >show_comment_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文档信息中是否展示评论总数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >show_related_matters</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	文档信息中是否展示关联事项。暂未支持
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >cover</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >document_cover</md-text>
	</md-dt-td>
	<md-dt-td>
	文档封面
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
	图片 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >offset_ratio_x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	视图在水平方向的偏移比例。其值为距离原图中心的水平方向偏移值 px / 原图宽度 px。
视图在原图中心时，该值为 0；
视图在原图右部分时，该值为正数；
视图在原图左部分时，该值为负数。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >offset_ratio_y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	视图在垂直方向的偏移比例。其值为距离原图中心的垂直方向偏移值 px / 原图高度 px。
视图在原图中心时，该值为 0；
视图在原图上部分时，该值为正数；
视图在原图下部分时，该值为负数。
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
    "msg": "success",
    "data": {
        "document": {
            "document_id": "doxcni6mOy7jLRWbEylaKKabcef",
            "revision_id": 1,
            "title": "title",
            "cover": {
                "token": "D6d9bkdH7onNylxKyvucm8abcef",
                "offset_ratio_x": 0,
                "offset_ratio_y": 0
            },
            "display_setting": {
                "show_authors": true,
                "show_comment_count": false,
                "show_create_time": true,
                "show_like_count": false,
                "show_pv": false,
                "show_uv": false
            }
        }
    }
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
  <md-td>文档的 `document_id` 不存在。请确认文档是否已被删除或 `document_id` 是否填写正确。

- 若文档存储在云盘中，你可通过 URL 地址或通过[获取文件夹下文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list) 获取其中文档资源的 `document_id`。

- 若文档挂载在知识库中，你需通过知识库相关接口[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)获取该节点下挂载的云资源的 `obj_token` 和 `obj_type`。在该情况下，`obj_type` 为 `docx` 时，其对应的 `obj_token`  即为文档的 `document_id`。

**注意**：

对于知识库（wiki）中的文档，其 URL 地址中的 token 并不是该文档的 `document_id`。使用时请注意区分。了解更多，参考[文档概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)。</md-td>
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
  <md-td>确认指定的 Document 的版本（revision_id）是否过旧</md-td>
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
  <md-td>确认操作是否合法</md-td>
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
  <md-td>raw content size exceed limited</md-td>
  <md-td>纯文本内容大小超过限制</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770034</md-td>
  <md-td>operation count exceed limited</md-td>
  <md-td>当前请求中涉及单元格个数过多，请拆分成多次请求</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1770032</md-td>
  <md-td>forbidden</md-td>
  <md-td>确认当前调用身份是否有文档阅读（获取相关接口）或编辑（更新、删除、创建相关接口）权限。请参考以下方式解决：
  
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
- 当前调用身份是否具有 OKR、ISV、Add-Ons 等文档块的查看权限</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771001</md-td>
  <md-td>server internal error</md-td>
  <md-td>服务器内部错误</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771006</md-td>
  <md-td>mount folder failed</md-td>
  <md-td>挂载文档到云空间文件夹失败</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771002</md-td>
  <md-td>gateway server internal error</md-td>
  <md-td>网关服务内部错误</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771003</md-td>
  <md-td>gateway marshal error</md-td>
  <md-td>网关服务解析错误</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1771004</md-td>
  <md-td>gateway unmarshal error</md-td>
  <md-td>网关服务反解析错误</md-td>
</md-tr>


<md-tr>
  <md-td>503</md-td>
  <md-td>1771005</md-td>
  <md-td>system under maintenance</md-td>
  <md-td>系统服务正在维护中</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




