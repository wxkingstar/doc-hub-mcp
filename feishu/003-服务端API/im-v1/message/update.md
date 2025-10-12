<!--
title: 编辑消息
id: 7239186075281358852
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/update
updatedAt: 1727235577000
source: https://open.feishu.cn/document/server-docs/im-v1/message/update
-->
# 编辑消息

调用该接口编辑已发送的消息内容，支持编辑文本、富文本消息。如需编辑卡片消息，请使用[更新应用发送的消息卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)接口。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=message&method=update)

:::html
<md-alert type="tip">

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
- 编辑用户单聊内的消息时，用户需要在机器人的[可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)内。
- 编辑群组内的消息时，机器人需要在该群组中，且拥有发言权限。

## 使用限制
- 一条消息最多可编辑 20 次。
- 仅可编辑当前操作者自己发送的消息。
- 不可编辑已撤回，已删除，超出可编辑时间的消息。可编辑时间由企业管理员设定，详情了解[管理员设置撤回和编辑消息权限](https://www.feishu.cn/hc/zh-CN/articles/325339752183)。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/messages/:message_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PUT</md-td>
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
            <md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>
            <md-perm name="im:message:update" desc="更新消息" support_app_types="custom,isv" tags="">更新消息</md-perm>
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

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

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
	<md-text type="field-name" >message_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	待编辑的消息 ID，仅支持编辑文本（text）、富文本（post）消息。

ID 获取方式：
  
- 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。
- 监听[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。
- 调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。

**示例值**："om_dc13264520392913993dd051dba21dcf"
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
	<md-text type="field-name" >msg_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	消息类型。

**可选值有**：

- text：文本
- post：富文本

**示例值**："text"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
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
	消息内容，JSON 结构序列化后的字符串。该参数的取值与 `msg_type` 对应，例如 `msg_type` 取值为 `text`，则该参数需要传入文本类型的内容。

**注意：**
- JSON字符串需进行转义，如换行符转义后为`\\n`
- 文本消息请求体最大不能超过 150 KB
- 富文本消息请求体最大不能超过 30 KB
- 如果消息中包含样式标签，会使实际消息体长度大于您输入的请求体长度。

了解不同类型的消息内容格式、使用限制，可参见[发送消息内容](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)。

**示例值**："{\"text\":\"test content\"}"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "msg_type": "text",
    "content": "{\"text\":\"test content\"}"
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
	<md-text type="field-type" >message</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >message_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	消息 ID。后续对消息的管理维护操作均需要使用该 ID。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >root_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	根消息 ID。在有多个回复的消息树中，`root_id` 为根消息的 `message_id`。关于 `root_id` 的更多说明，参见[消息管理概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >parent_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	父消息 ID。在有多个回复的消息树中，`parent_id` 为当前消息上一层的消息 `message_id`。如果是某一话题内的消息，则 `parent_id` 始终为话题内根消息的 `message_id`。关于 `parent_id` 的更多说明，参见[消息管理概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >thread_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	消息所属的话题 ID（不返回说明该消息不是话题形式的消息）。了解话题可参见[话题概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/thread-introduction)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >msg_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	消息类型。

**可能值有**：

- text：文本
- post：富文本
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	消息生成的时间戳。单位：毫秒
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >update_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	消息更新的时间戳。单位：毫秒
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >deleted</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	当前消息是否被撤回。编辑消息时只会返回 false，表示未被撤回。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >updated</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	当前消息是否被更新。编辑消息时只会返回 false，表示未被更新。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >chat_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	消息所属的群 ID。你可以调用[获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)接口，根据群 ID 获取群详情。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >sender</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >sender</md-text>
	</md-dt-td>
	<md-dt-td>
	消息发送者的信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发送者的 ID。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发送者的 ID 类型。

**可能值有：**
- `open_id`：表示发送者为用户，且返回的 ID 是用户的 open_id。
- `app_id`：表示发送者为应用，且返回的 ID 是应用的 app_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >sender_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发送者的类型

**可能值有：**
- `user`: 用户
- `app`: 应用
- `anonymous`: 匿名
- `unknown`: 未知
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tenant_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	租户唯一标识。该标识用来识别租户，也可以用来获取租户访问凭证（tenant_access_token）。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >body</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >message_body</md-text>
	</md-dt-td>
	<md-dt-td>
	通过 `body` 内的 `content` 参数，返回当前的消息内容。 
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	消息内容，JSON 结构序列化后的字符串，不同消息类型（`msg_type`）对应不同内容。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >mentions</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >mention\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	消息内被 @ 的用户列表。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	被 @ 的用户序号。例如，第 3 个被 @ 到的成员，取值为 `@_user_3`。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	被 @ 的用户的 open_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	被 @ 的用户的 ID 类型，目前仅支持 `open_id` (了解[什么是 Open ID](/ssl:ttdoc/home/user-identity-introduction/open-id))。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	被 @ 的用户姓名。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tenant_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	租户唯一标识。该标识用来识别被 @ 用户的租户，也可以用来获取租户访问凭证（tenant_access_token）。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >upper_message_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	合并转发消息中，上一层级的消息 ID，仅在合并转发场景会有返回值。了解 upper_message_id 可参见[消息管理概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro)。
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
        "message_id": "om_dc13264520392913993dd051dba21dcf",
        "root_id": "om_40eb06e7b84dc71c03e009ad3c754195",
        "parent_id": "om_d4be107c616aed9c1da8ed8068570a9f",
        "thread_id": "omt_d4be107c616a",
        "msg_type": "text",
        "create_time": "1609296809",
        "update_time": "1609336806",
        "deleted": false,
        "updated": true,
        "chat_id": "oc_5ad11d72b830411d72b836c20",
        "sender": {
            "id": "cli_9f427eec54ae901b",
            "id_type": "app_id",
            "sender_type": "app",
            "tenant_key": "736588c9260f175e"
        },
        "body": {
            "content": "{\"text\":\"@_user_1 test content\"}"
        },
        "mentions": [
            {
                "key": "@_user_1",
                "id": "ou_155184d1e73cbfb8973e5a9e698e74f2",
                "id_type": "open_id",
                "name": "Tom",
                "tenant_key": "736588c9260f175e"
            }
        ],
        "upper_message_id": "om_40eb06e7b84dc71c03e00ida3c754892"
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
  <md-td>230001</md-td>
  <md-td>Your request contains an invalid request parameter.</md-td>
  <md-td>参数错误，可根据接口实际返回的错误信息，并参考接口文档内容，检查输入参数是否填写错误。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230002</md-td>
  <md-td>The bot can not be outside the group.</md-td>
  <md-td>机器人不在对应群组中。你需要将应用机器人添加到消息相应的群组中。如何添加机器人参考[机器人使用指南](/ssl:ttdoc/ukTMukTMukTM/uATM04CMxQjLwEDN)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230006</md-td>
  <md-td>Bot ability is not activated.</md-td>
  <md-td>应用未启用机器人能力。启用方式参见[如何启用机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230011</md-td>
  <md-td>The message is recalled.</md-td>
  <md-td>消息已被撤回，不支持该操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230013</md-td>
  <md-td>Bot has NO availability to this user.</md-td>
  <md-td>目标用户（以用户的 user_id/open_id/union_id/email 指定的消息接收者）或单聊用户（以群聊的 chat_id 指定的消息接收者，但 chat_id 对应的群聊类型为单聊 `p2p`）不在应用机器人的可用范围内，或者是在应用的禁用范围内。

**注意**：如果目标用户已离职，也会报错 230013。

解决方案：

1. 登录[开发者后台](https://open.feishu.cn/app)，找到并进入指定应用详情页。
2. 在左侧导航栏进入 **应用发布** >  **版本管理与发布** 页面，点击 **创建版本**。
3. 在 **版本详情** 页面，找到 **可用范围** 区域，点击 **编辑**。
4. 在弹出的对话框内，配置应用的可用范围，将用户添加至可用范围内。
5. 在页面底部点击 **保存**，并发布应用使配置生效。
6. （可选）如果以上配置完成后仍报错，则需要联系企业管理员登录[管理后台](https://feishu.cn/admin)，在 **工作台** > **应用管理** 中进入指定应用详情页，在 **应用可用范围** 内查看该用户是否被设置为了 **禁用成员**。

具体操作参见[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230018</md-td>
  <md-td>These operations are NOT allowed at current group settings.</md-td>
  <md-td>当前操作被群设置禁止，例如群聊设置了仅指定成员可以在此群发言。请检查群设置或联系群管理员修改群设置。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230020</md-td>
  <md-td>This operation triggers the frequency limit.</md-td>
  <md-td>当前操作触发频率限制，请降低请求频率后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230022</md-td>
  <md-td>The content of the message contains sensitive information.</md-td>
  <md-td>消息内容包含敏感信息，请修改消息内容后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230025</md-td>
  <md-td>The length of the message content reaches its limit.</md-td>
  <md-td>消息体长度超出限制。文本消息最大不能超过 150 KB、卡片及富文本消息最大不能超过 30 KB。需要注意：
- 若使用卡片模板（template_id）发送消息，实际大小也包含模板对应的卡片数据大小。
- 若消息中包含大量样式标签，会使实际消息体长度大于传入的请求体长度。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230027</md-td>
  <md-td>Lack of necessary permissions.</md-td>
  <md-td>无权进行本次操作。可能的原因有：
1. 缺少相应权限，可根据实际的错误信息进行排查。
2. 未检查到用户授权信息。
3. 暂不支持在外部群中进行本操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230028</md-td>
  <md-td>The messages do NOT pass the audit.</md-td>
  <md-td>消息的数据防泄漏审查未通过。当消息内容包含有明文电话号码、明文邮箱地址等内容时可能会触发该错误。请根据接口返回的实际错误信息检查并修改消息内容。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230035</md-td>
  <md-td>Send message permission deny.</md-td>
  <md-td>没有发送消息的权限。请排查群聊是否已开启禁言、机器人是否被接收者屏蔽或受到租户维度的沟通权限管控。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230038</md-td>
  <md-td>Cross tenant p2p chat operate forbid.</md-td>
  <md-td>跨租户的单聊不允许通过本接口发送消息。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230050</md-td>
  <md-td>The message is invisible to the operator.</md-td>
  <md-td>消息对于当前的操作者不可见，无法进行本次操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230054</md-td>
  <md-td>This operation is not supported for this message type.</md-td>
  <md-td>该消息类型不支持本操作。具体说明参见[消息与群组部分API增加不支持的消息类型校验](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/unsupported-message-type-verification)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230055</md-td>
  <md-td>The type of file upload does not match the type of message being sent.</md-td>
  <md-td>文件上传时选择的类型与发送的消息类型不匹配。例如，上传文件时，选择的文件格式为 MP4，则发送消息时消息类型需要为视频（media）。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230071</md-td>
  <md-td>The operator is not the sender of the message.</md-td>
  <md-td>当前操作者不是该消息的发送者，无法进行本次操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230072</md-td>
  <md-td>The message has reached the number of times it can be edited.</md-td>
  <md-td>消息已超过最大可编辑次数 20 次，无法继续编辑。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230073</md-td>
  <md-td>The message in the secret group is not allowed to be edited.</md-td>
  <md-td>密聊群中的消息暂不支持编辑。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230074</md-td>
  <md-td>The message in the third-party encryption group is not allowed to be edited.</md-td>
  <md-td>密盾聊中的消息暂不支持编辑。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230075</md-td>
  <md-td>The message has exceeded the time that can be edited.</md-td>
  <md-td>该消息已超出可编辑的时间，不能编辑。可编辑时间由企业管理员设定，详情了解[管理员设置撤回和编辑消息权限](https://www.feishu.cn/hc/zh-CN/articles/325339752183)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230110</md-td>
  <md-td>Action unavailable as the message has been deleted.</md-td>
  <md-td>消息已被删除，无法操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232009</md-td>
  <md-td>Your request specifies a chat which has already been dissolved.</md-td>
  <md-td>消息所在的群组已被解散，无法操作。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


