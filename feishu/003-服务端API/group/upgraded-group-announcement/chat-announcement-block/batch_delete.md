<!--
title: 删除群公告中的块
id: 7450053428095598620
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/batch_delete
updatedAt: 1735881779000
source: https://open.feishu.cn/document/group/upgraded-group-announcement/chat-announcement-block/batch_delete
-->
# 删除群公告中的块


指定需要操作的块，删除其指定范围的子块。如果操作成功，接口将返回应用删除操作后的群公告版本号。
{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=docx&version=v1&resource=chat.announcement.block.children&method=batch_delete)

:::html
<md-alert type="tip">
**群公告频率限制**：单篇群公告并发编辑上限为每秒 3 次，超过该频率限制，接口将返回 HTTP 状态码 <font color="blue">429</font>，编辑操作包括：
- 创建块
- 批量更新块
- 删除块

当请求被限频，应用需要处理限频状态码，并使用指数退避算法或其它一些频控策略降低对 API 的调用速率。
</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="error">

</md-alert>
:::

## 前提条件

- 应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 调用当前接口的用户或者机器人必须在对应的群组内。
- 操作内部群的群公告时，请确保当前调用身份（tenant_access_token 或 user_access_token）与对应群组在同一租户下。

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
      <md-td>https://open.feishu.cn/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children/batch_delete</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>DELETE</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[5 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="im:chat.announcement:write_only" desc="更新群公告内容" support_app_types="custom,isv" tags="">更新群公告内容</md-perm>
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


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	父 Block 的唯一标识。你可通过调用[获取群公告所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/list)接口获取块的 block_id。

**注意**：

- 此接口不支持删除表格（Table）的行列和删除分栏（Grid）的分栏列。你需通过[批量更新块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/batch_update)接口完成相关操作。

- 此接口不支持删除表格单元格（Table Cell）、分栏列（Grid Column）和高亮块（Callout）的全部子块。

**示例值**："doxcnO6UW6wAw2qIcYf4hZpFIth"
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
	<md-text type="field-name" >revision_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	要操作的群公告版本。-1 表示群公告最新版本。群公告创建后，版本为 1。你需确保你已拥有群公告的编辑权限。你可通过调用[获取群公告基本信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement/get)获取群公告的最新 revision_id

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
	操作的唯一标识，与接口返回值的 client_token 相对应，用于幂等的进行更新操作。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作。

**示例值**：fe599b60-450f-46ff-b2ef-9f6675625b97
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
	<md-text type="field-name" >start_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	删除的起始索引（操作区间左闭右开）

**示例值**：0

**数据校验规则**：

- 最小值：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >end_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	删除的末尾索引（操作区间左闭右开）

**示例值**：1

**数据校验规则**：

- 最小值：`1`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "start_index": 0,
    "end_index": 1
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
	<md-text type="field-name" >revision_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	当前删除操作成功后群公告的版本号
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
    "msg": "success",
    "data": {
        "revision_id": 1,
        "client_token": "fe599b60-450f-46ff-b2ef-9f6675625b97"
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
  <md-td>群 ID `chat_id` 不存在。请确认群是否被解散或 `chat_id` 是否填写正确。</md-td>
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
  <md-td>确认群公告中 Block 数量是否超上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770005</md-td>
  <md-td>too deep level in document</md-td>
  <md-td>确认群公告 Block 层级是否超上限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770006</md-td>
  <md-td>schema mismatch</md-td>
  <md-td>确认群公告结构是否合法</md-td>
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
  <md-td>确认表格列数是否超上限，上限 100 列</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770011</md-td>
  <md-td>too many table cell</md-td>
  <md-td>确认表格单元格数量是否超上限，上限 2000 个单元格</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770012</md-td>
  <md-td>too many grid column</md-td>
  <md-td>确认 Grid 列数量是否超上限，上限 10 列</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770013</md-td>
  <md-td>relation mismatch</md-td>
  <md-td>图片、文件等资源的关联关系不正确。请确保在创建图片、文件块时，同时上传了相关图片或文件素材至对应的群公告块中。</md-td>
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
  <md-td>确认 Block 所属群公告与指定的群公告是否相同</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770029</md-td>
  <md-td>block not support to create</md-td>
  <md-td>确认指定 Block 是否支持创建</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770019</md-td>
  <md-td>repeated blockID in document</md-td>
  <md-td>确认群公告中的 BlockID 是否有重复</md-td>
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
  <md-td>确认指定的群公告版本（revision_id）是否过旧。指定的版本号与群公告最新版本号差值不能超过 1000</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1770041</md-td>
  <md-td>open schema mismatch</md-td>
  <md-td>确认块父子关系是否合法</md-td>
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
  <md-td>1772005</md-td>
  <md-td>No Permission: Only chat owner or admin can edit chat information in the current situation.</md-td>
  <md-td>当前只允许群组的群主或群管理员更新群信息。</md-td>
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
  <md-td>当前的操作者没有群公告的编辑权限。解决方案：

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




