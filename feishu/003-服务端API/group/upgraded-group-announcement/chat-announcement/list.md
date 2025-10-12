<!--
title: 获取群公告所有块
id: 7450053428095631388
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/list
updatedAt: 1734600726000
source: https://open.feishu.cn/document/group/upgraded-group-announcement/chat-announcement/list
-->
# 获取群公告所有块


获取群公告所有块的富文本内容并分页返回。
{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=docx&version=v1&resource=chat.announcement.block&method=list)

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
**应用频率限制**：单个应用调用频率上限为每秒 10 次，超过该频率限制，接口将返回 HTTP 状态码 <font color="blue">400</font> 及错误码 <font color="blue">99991400</font>。当请求被限频，应用需要处理限频状态码，并使用指数退避算法或其它一些频控策略降低对 API 的调用速率。
</md-alert>
:::

## 前提条件

- 应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 调用当前接口的用户或者机器人必须在对应的群组内。
- 获取内部群信息时，调用当前接口的用户或者机器人必须与对应群组在同一租户下。

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
      <md-td>https://open.feishu.cn/open-apis/docx/v1/chats/:chat_id/announcement/blocks</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
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
            
      </md-th>
      <md-td>
            <md-perm name="im:chat.announcement:read" desc="查看群公告信息" support_app_types="custom,isv" tags="">查看群公告信息</md-perm>
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
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	<md-text type="field-name" >chat_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	群 ID。获取方式：

- [创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)，从返回结果中获取该群的 chat_id。
- 调用[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)接口，可以查询用户或机器人所在群的 chat_id。
- 调用[搜索对用户或机器人可见的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)，可搜索用户或机器人所在的群、对用户或机器人公开的群的 chat_id。

**注意**：单聊（群类型为 `p2p`）不支持获取群公告。

**示例值**："oc_5ad11d72b830411d72b836c20"
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
	<md-text type="field-name" >page_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页大小

**示例值**：500

**默认值**：`500`

**数据校验规则**：
- 最大值：`500`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果

**示例值**："aw7DoMKBFMOGwqHCrcO8w6jCmMOvw6ILeADCvsKNw57Di8O5XGV3LG4_w5HCqhFxSnDCrCzCn0BgZcOYUg85EMOYcEAcwqYOw4ojw5QFwofCu8KoIMO3K8Ktw4IuNMOBBHNYw4bCgCV3U1zDu8K-J8KSR8Kgw7Y0fsKZdsKvW3d9w53DnkHDrcO5bDkYwrvDisOEPcOtVFJ-I03CnsOILMOoAmLDknd6dsKqG1bClAjDuS3CvcOTwo7Dg8OrwovDsRdqIcKxw5HDohTDtXN9w5rCkWo"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >revision_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	查询的群公告版本，-1 表示群公告最新版本。群公告创建后，版本为 1。若查询的版本为群公告最新版本，则需要持有群公告的阅读权限；若查询的版本为群公告的历史版本，则需要持有群公告的编辑权限。

**示例值**：-1

**默认值**：`-1`

**数据校验规则**：

- 最小值：`-1`
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
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

### 请求示例
```BASH 
curl --location --request GET 'https://open.feishu.cn/open-apis/docx/v1/chats/oc_5ad11d72b830411d72b836c20/announcement/blocks?page_size=100&revision_id=-1' \
--header 'Authorization: Bearer u-xxx'
# 调用前请替换 'Authorization: Bearer u-xxx' 中的 'u-xxx' 为真实的访问令牌
```



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
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >block\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	群公告的 Block 信息
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
	子块的唯一标识
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
<md-enum-item key="22" >分割线 Block</md-enum-item>
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
<md-enum-item key="34" >引用容器 Block</md-enum-item>
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	群聊天会话 ID
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
	分割线 Block
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
	当前分栏列占整个分栏的比例
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
	高度
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
	团队互动应用唯一ID
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
	团队互动应用类型，比如信息收集"blk_5f992038c64240015d280958"
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
	文档小组件 ID
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
	文档小组件类型，比如问答互动"blk_636a0a6657db8001c8df5488"
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
	电子表格 block 的 token
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
	列宽，单位px
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
	引用容器 Block
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
	当前进度, advanced 模式使用
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
	进度起始值，advanced 模式使用
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
	进度目标值，advanced 模式使用
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	当前进度, advanced 模式使用
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
	进度起始值，advanced 模式使用
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
	进度目标值，advanced 模式使用
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
	首行缩进级别

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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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
	文本内容
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
	用户 OpenID
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
	云文档 token
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
	创建者用户 ID
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >has_more</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否还有更多项
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
        "has_more": false,
        "items": [
            {
                "block_id": "oc_5ad11d72b830411d72b836c20",
                "block_type": 1,
                "children": [
                    "EJ8pdBT6RoA2BtxKXfuc1TD0n8f",
                    "WoF4dolv0ohvegxctR9c1t0sn4b",
                    "UPD7dhkrLo8ZCfxoAYLcuEbDnzd"
                ],
                "page": {
                    "elements": [
                        {
                            "text_run": {
                                "content": "",
                                "text_element_style": {
                                    "bold": false,
                                    "inline_code": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        }
                    ],
                    "style": {
                        "align": 1
                    }
                },
                "parent_id": ""
            },
            {
                "block_id": "EJ8pdBT6RoA2BtxKXfuc1TD0n8f",
                "block_type": 3,
                "heading1": {
                    "elements": [
                        {
                            "text_run": {
                                "content": "新版群公告",
                                "text_element_style": {
                                    "bold": false,
                                    "inline_code": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        }
                    ],
                    "style": {
                        "align": 1,
                        "folded": false
                    }
                },
                "parent_id": "oc_5ad11d72b830411d72b836c20"
            },
            {
                "block_id": "WoF4dolv0ohvegxctR9c1t0sn4b",
                "block_type": 2,
                "parent_id": "oc_5ad11d72b830411d72b836c20",
                "text": {
                    "elements": [
                        {
                            "text_run": {
                                "content": "当你需要向群内所有成员传达",
                                "text_element_style": {
                                    "bold": false,
                                    "inline_code": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "重要信息",
                                "text_element_style": {
                                    "bold": true,
                                    "inline_code": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "时，可以使用群公告功能。后续入群的成员也可看到当前群公告。",
                                "text_element_style": {
                                    "bold": false,
                                    "inline_code": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        }
                    ],
                    "style": {
                        "align": 1,
                        "folded": false
                    }
                }
            },
            {
                "block_id": "UPD7dhkrLo8ZCfxoAYLcuEbDnzd",
                "block_type": 2,
                "parent_id": "oc_5ad11d72b830411d72b836c20",
                "text": {
                    "elements": [
                        {
                            "text_run": {
                                "content": "群公告编辑",
                                "text_element_style": {
                                    "bold": false,
                                    "inline_code": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "支持实时保存及多人协作",
                                "text_element_style": {
                                    "background_color": 4,
                                    "bold": false,
                                    "inline_code": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "，群成员",
                                "text_element_style": {
                                    "bold": false,
                                    "inline_code": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        },
                        {
                            "text_run": {
                                "content": "可实时查看最新群公告内容。",
                                "text_element_style": {
                                    "background_color": 4,
                                    "bold": false,
                                    "inline_code": false,
                                    "italic": false,
                                    "strikethrough": false,
                                    "underline": false
                                }
                            }
                        }
                    ],
                    "style": {
                        "align": 1,
                        "folded": false
                    }
                }
            }
        ]
    },
    "msg": "success"
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
  <md-td>1772001</md-td>
  <md-td>Chat announcement can NOT be found in chat information.</md-td>
  <md-td>群公告信息异常。请重试，若仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1772002</md-td>
  <md-td>Operator and chat can NOT be in different tenants.</md-td>
  <md-td>操作内部群时，操作者和被操作的群组必须在同一租户下。请检查当前调用身份是否和群组属于同一租户。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1772003</md-td>
  <md-td>Operator can NOT be out of the chat.</md-td>
  <md-td>操作者不在群组中。你需要将当前调用 API 的应用或用户[加入待操作的群组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create)后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1772004</md-td>
  <md-td>The operator or invited bots does NOT have the authority to manage external chats without the scope.</md-td>
  <md-td>当前被操作的群为外部群，暂不支持操作外部群。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1772025</md-td>
  <md-td>Bot ability is not activated.</md-td>
  <md-td>应用未启用机器人能力。你需要登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **应用能力** > **添加应用能力** 页面内，添加 **机器人** 能力，并发布应用使配置生效。具体操作参见[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1772006</md-td>
  <md-td>announcement type is not supported</md-td>
  <md-td>除「获取群公告基本信息」接口，其它新版群公告接口均无法操作 doc 类型的群公告，如需操作 doc 类型群公告请参考「[旧版群公告](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/chat/chat-announcement/intro)」接口。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1772034</md-td>
  <md-td>The app is unavailable or inactivated by the tenant.</md-td>
  <md-td>应用在本租户下未安装或未启用。需要先安装应用，再使用应用调用接口。</md-td>
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
  <md-td>系统服务正在维护中</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::




