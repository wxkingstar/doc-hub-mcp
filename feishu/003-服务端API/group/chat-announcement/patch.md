<!--
title: 更新群公告信息
id: 6946222931479511041
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/patch
updatedAt: 1748248144000
source: https://open.feishu.cn/document/server-docs/group/chat-announcement/patch
-->
# 更新群公告信息

更新指定群组中的群公告信息。更新的公告内容格式和更新[旧版云文档](https://open.feishu.cn/document/ukTMukTMukTM/uAzM5YjLwMTO24CMzkjN)的格式相同，不支持新版云文档格式。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=chat.announcement&method=patch)

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

</md-alert>
:::

## 前提条件

- 应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 调用当前接口的用户或者机器人必须在对应的群组内，且需要拥有群公告文档的阅读权限。

## 使用限制

- 如果群组配置了 **仅群主和群管理员可编辑群信息**，则仅有群主、群管理员，或者是创建群组且具有 **更新应用所创建群的群信息（im:chat:operate_as_owner）** 权限的机器人，可以更新群公告信息。
- 如果群组没有配置 **仅群主和群管理员可编辑群信息**，则所有群成员可以更新群公告信息。
- 操作内部群时，操作者和被操作的群组必须在同一租户下。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/chats/:chat_id/announcement</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
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

**注意**：单聊（群类型为 `p2p`）不支持更新群公告。

**示例值**："oc_5ad11d72b830411d72b836c20"
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
	<md-text type="field-name" >revision</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文档当前版本号 int64 类型，可调用[获取群公告信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get)接口，从返回结果中获取。

**注意**：传入的版本号和最新版本号的差距不能超过 100。

**示例值**："12"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >requests</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	公告内容，调用接口时该参数必须传入值。公告内容的格式与更新旧版文档内容的格式相同，具体数据结构参考[编辑旧版文档内容](/ssl:ttdoc/ukTMukTMukTM/uYDM2YjL2AjN24iNwYjN)。

**示例值**：["{\"requestType\":\"InsertBlocksRequestType\",\"insertBlocksRequest\":{\"payload\":\"{\\\"blocks\\\":[{\\\"type\\\":\\\"paragraph\\\",\\\"paragraph\\\":{\\\"elements\\\":[{\\\"type\\\":\\\"textRun\\\",\\\"textRun\\\":{\\\"text\\\":\\\"Docs API Sample Content\\\",\\\"style\\\":{}}}],\\\"style\\\":{}}}]}\",\"location\":{\"zoneId\":\"0\",\"index\":0, \"endOfZone\": true}}}"]
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "revision": "12",
    "requests": [
        "{\"requestType\":\"InsertBlocksRequestType\",\"insertBlocksRequest\":{\"payload\":\"{\\\"blocks\\\":[{\\\"type\\\":\\\"paragraph\\\",\\\"paragraph\\\":{\\\"elements\\\":[{\\\"type\\\":\\\"textRun\\\",\\\"textRun\\\":{\\\"text\\\":\\\"Docs API Sample Content\\\",\\\"style\\\":{}}}],\\\"style\\\":{}}}]}\",\"location\":{\"zoneId\":\"0\",\"index\":0, \"endOfZone\": true}}}"
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


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {}
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
  <md-td>232001</md-td>
  <md-td>Your request contains an invalid request parameter.</md-td>
  <md-td>参数错误，参考接口文档提供的参数描述，检查输入参数是否有误。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232002</md-td>
  <md-td>No Permission: Only chat owner or admin can edit chat information in the current situation.</md-td>
  <md-td>当前只允许群组的群主或群管理员更新群信息。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232003</md-td>
  <md-td>Chat announcement can NOT be found in chat information.</md-td>
  <md-td>群公告信息异常。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232009</md-td>
  <md-td>Your request specifies a chat which has already been dissolved.</md-td>
  <md-td>群组已被解散，无法操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232010</md-td>
  <md-td>Operator and chat can NOT be in different tenants.</md-td>
  <md-td>操作内部群时，操作者和被操作的群组必须在同一租户下。请检查当前调用身份是否和群组属于同一租户。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232011</md-td>
  <md-td>Operator can NOT be out of the chat.</md-td>
  <md-td>操作者不在群组中。你需要将当前调用 API 的应用或用户[加入待操作的群组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create)后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232018</md-td>
  <md-td>Updating announcement failed.</md-td>
  <md-td>更新公告失败，请确认错误具体信息，可参考文档[编辑旧版文档内容](/ssl:ttdoc/ukTMukTMukTM/uYDM2YjL2AjN24iNwYjN)，核对数据结构是否存在问题。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232019</md-td>
  <md-td>The request has been rate limited.</md-td>
  <md-td>触发群限流，请控制请求的速度，详情参见[频控策略](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232024</md-td>
  <md-td>Users do not have the visibility of the app, or the operator does not have collaboration permissions with the target users.</md-td>
  <md-td>机器人对用户没有可见性，或操作者与用户间没有协作权限。

- 如果是机器人对用户没有可见性，需要在[开发者后台](https://open.feishu.cn/app) > **应用详情页** > **应用发布** > **版本管理与发布** 编辑应用对用户的可见性并发布应用。具体操作参考[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。

- 如果是操作者与用户之间没有协作权限，请检查是否与目标用户有协作权限，如屏蔽、未添加为联系人等。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232025</md-td>
  <md-td>Bot ability is not activated.</md-td>
  <md-td>应用未启用机器人能力。你需要登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **应用能力** > **添加应用能力** 页面内，添加 **机器人** 能力，并发布应用使配置生效。具体操作参见[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232033</md-td>
  <md-td>The operator or invited bots does NOT have the authority to manage external chats without the scope.</md-td>
  <md-td>当前被操作的群为外部群，暂不支持操作外部群。只有开启对外共享能力的机器人支持外部群，详情参见[机器人支持外部群和外部用户单聊](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232034</md-td>
  <md-td>The app is unavailable or inactivated by the tenant.</md-td>
  <md-td>应用在本租户下未安装或未启用。需要先安装应用，再使用应用调用接口。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232066</md-td>
  <md-td>The operator does not have the doc permission.</md-td>
  <md-td>操作者没有文档的阅读权限。你需要为当前调用 API 的应用或用户[添加文档阅读权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create)后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232097</md-td>
  <md-td>Unable to operate docx type chat announcement.</md-td>
  <md-td>本接口无法操作 docx 类型的群公告，请参考"更新新版本群公告"接口。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


