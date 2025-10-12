<!--
title: 回复消息
id: 6946222929790500892
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply
updatedAt: 1747830821000
source: https://open.feishu.cn/document/server-docs/im-v1/message/reply
-->
# 回复消息

调用该接口回复指定消息。回复的内容支持文本、富文本、卡片、群名片、个人名片、图片、视频、文件等多种类型。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=message&method=reply)

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
- 回复用户消息（即单聊消息）时，用户需要在机器人的[可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)内。
- 回复群消息时，机器人需要在群中，且拥有发言权限。

## 使用限制
为避免消息发送频繁对用户造成打扰，向同一用户发送消息的限频为 ==5 QPS==、向同一群组发送消息的限频为群内机器人共享 ==5 QPS==。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/messages/:message_id/reply</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="im:message:send" desc="发送消息V2" support_app_types="custom,isv" tags="history,offline">发送消息V2</md-perm>
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
	待回复的消息的 ID。ID 获取方式：
  
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
- JSON 字符串需进行转义。例如，换行符 `\n` 转义后为 `\\n`。
- 文本消息请求体最大不能超过 150 KB。
- 卡片消息、富文本消息请求体最大不能超过 30 KB。
- 如果使用卡片模板（template_id）发送消息，实际大小也包含模板对应的卡片数据大小。
- 如果消息中包含样式标签，会使实际消息体长度大于您输入的请求体长度。
- 图片需要先[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)，然后使用图片的 Key 发消息。
- 音频、视频、文件需要先[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create)，然后使用文件的 Key 发消息。

了解不同类型的消息内容格式、使用限制，可参见[发送消息内容](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)。

**示例值**："`{\"text\":\"test content\"}`"
	</md-dt-td>
</md-dt-tr>


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
- image：图片
- file：文件
- audio：语音
- media：视频
- sticker：表情包
- interactive：卡片
- share_chat：分享群名片
- share_user：分享个人名片

不同消息类型的详细介绍，参见[发送消息内容](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)。

**示例值**："text"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >reply_in_thread</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否以话题形式回复。取值为 true 时将以话题形式回复。

**注意**：如果要回复的消息已经是话题形式的消息，则默认以话题形式进行回复。

**示例值**：false

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >uuid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义设置的唯一字符串序列，用于在回复消息时请求去重。不填则表示不去重。持有相同 uuid 的请求，在 1 小时内至多成功回复一条消息。

**注意**：你可以参考示例值自定义参数值。当回复的内容不同时，如果传入了该参数，则需要在每次请求时都更换该参数的取值。

**示例值**："选填，每次调用前请更换，如a0d69e20-1dd1-458b-k525-dfeca4015204"

**数据校验规则**：

- 最大长度：`50` 字符
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "content": "{\"text\":\"test content\"}",
    "msg_type": "text",
    "reply_in_thread": true,
    "uuid": "选填，每次调用前请更换，如a0d69e20-1dd1-458b-k525-dfeca4015204"
}
</md-code-json>
:::

**请求示例**

```json 
curl --location --request POST 'https://open.feishu.cn/open-apis/im/v1/messages/om_xxxxxx/reply' \
--header 'Authorization: Bearer t-xxxxxx' \
--header 'Content-Type: application/json; charset=utf-8' \
--data-raw '{
    "content": "{\"text\":\"test content\"}",
    "msg_type": "text",
    "uuid": "a0d69e20-1dd1-458b-k525-dfeca4015204"
}'
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
	消息 ID。成功回复消息后，由系统生成的唯一 ID 标识。后续对消息的管理维护操作均需要使用该 ID。
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
	根消息 ID。在有多个回复的消息树中，`root_id` 为根消息的 `message_id`。如果回复的是话题，则 `root_id` 为话题内根消息的 `message_id`。关于 `root_id` 的更多说明，参见[消息管理概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro)。
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
	父消息 ID。在有多个回复的消息树中，`parent_id` 为当前消息上一层的消息 `message_id`。如果回复的是话题，则 `parent_id` 始终为话题内根消息的 `message_id`。关于 `parent_id` 的更多说明，参见[消息管理概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro)。
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
- image：图片
- file：文件
- audio：语音
- media：视频
- sticker：表情包
- interactive：卡片
- share_chat：分享群名片
- share_user：分享个人名片
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
	当前消息是否被撤回。回复消息时只会返回 false，表示未被撤回。
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
	当前消息是否被更新。回复消息时只会返回 false，表示未被更新。
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
	当前消息的发送者信息。
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
	发送者类型。

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
	发送的消息内，被 @ 的用户列表。
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
        "msg_type": "interactive",
        "create_time": "1615380573411",
        "update_time": "1615380573411",
        "deleted": false,
        "updated": false,
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
        "upper_message_id": "om_40eb06e7b84dc71c03e009ad3c754195"
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
  <md-td>机器人不在对应群组中。你需要将应用机器人添加到接收消息的群组中。如何添加机器人参考[机器人使用指南](/ssl:ttdoc/ukTMukTMukTM/uATM04CMxQjLwEDN)。</md-td>
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
  <md-td>230015</md-td>
  <md-td>P2P chat can NOT be shared.</md-td>
  <md-td>私聊会话不允许被分享。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230017</md-td>
  <md-td>Bot is NOT the owner of the resource.</md-td>
  <md-td>机器人不是资源的拥有者。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230018</md-td>
  <md-td>These operations are NOT allowed at current group settings.</md-td>
  <md-td>当前操作被群设置禁止，例如群聊设置了仅指定成员可以在此群发言。请检查群设置或联系群管理员修改群设置。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230019</md-td>
  <md-td>The topic does NOT exist.</md-td>
  <md-td>当前话题不存在。</md-td>
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
3. 如果需要机器人在外部群操作，则需要先为机器人开启对外共享能力，详情参见[机器人支持外部群和外部用户单聊](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。</md-td>
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
  <md-td>Send Message Permission deny.</md-td>
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
  <md-td>230049</md-td>
  <md-td>The message is being sent.</md-td>
  <md-td>消息正在发送中，请稍后。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230050</md-td>
  <md-td>The message is invisible to the operator.</md-td>
  <md-td>待回复的消息对于当前的操作者而言不可见，无法进行本次操作。</md-td>
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
  <md-td>The group to which the message belongs does not support reply in thread.</md-td>
  <md-td>该消息所属的群聊不支持以话题形式回复。请修改为非话题形式回复。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230072</md-td>
  <md-td>Aggregated messages do not support reply in thread.</md-td>
  <md-td>已聚合的消息不支持以话题形式回复。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230075</md-td>
  <md-td>Sending encrypted messages is not supported.</md-td>
  <md-td>不支持向密聊、密盾聊中发送消息。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230099</md-td>
  <md-td>Failed to create card content.</md-td>
  <md-td>创建卡片内容失败，请参考当前接口返回的具体报错信息，并参照接口文档中的 [子错误码](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply#-f367d31)  排查建议解决。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230111</md-td>
  <md-td>Action unavailable as the message will self-destruct soon.</md-td>
  <md-td>不能回复定时删除的消息。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232009</md-td>
  <md-td>Your request specifies a chat which has already been dissolved.</md-td>
  <md-td>相关群组已被解散，无法进行当前操作。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

### 230099 子错误码

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 35%;">描述</md-th>
            <md-th style="width: 50%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>100290</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 100290; ErrMsg: There is an invalid user resource(at/person) in your card; ErrorValue: %v</md-td>
  <md-td>
卡片中存在无效的人员 id。请检查卡片中的 at 人、人员等组件中使用的用户 id 值是否正确，参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

1.  打开 [API 调试台](https://open.feishu.cn/api-explorer/cli_a278b89588fb100d?apiName=batch_get_id&from=op_doc_tab&project=contact&resource=user&version=v3)，在左侧 API 目录中找到「**通讯录**」下的「**通过手机号或邮箱获取用户 ID**」，点击该 API 切换当前调试 API 为「通过手机号或邮箱获取用户 ID」。

2. 点击 API 调试台左侧 **查看鉴权凭证** 中 tenant_access_token 中的 **点击获取**。

3. 点击右侧参数列表，将 **查询参数** 中的 **user_id_type** 参数设置为需要获取的 ID 类型。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9d1cd9f15e59fcb85bae2277cdfd2b54_0wwDgpbmv8.png?height=278&maxWidth=450&width=1383)

4.  切换至 **请求体** Tab，将请求体中的示例 ID 删除，并修改为需要查询的手机号或 Email。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8a28bdd8873d64e21152dbde4b4903f0_qfDKXIIbdU.png?height=278&maxWidth=450&width=1383)

5.  点击右侧 **开始调试**，调用成功后，在下方 **响应体** 中即可获取到查询的 User ID。响应体中返回的用户 ID 类型由查询参数中设置的 **user_id_type** 参数决定。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/902f9d2aabca8df3a8e648c184a87eea_aWbg4yC3I4.png?height=278&maxWidth=450&width=1383) 
  </md-td>
</md-tr>

<md-tr>
  <md-td>200380</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200380; ErrMsg: template does not exist, please confirm whether this template has been released; ErrorValue: templateID: %v</md-td>
  <md-td>
未找到卡片。请确认当前模版卡片已保存并发布，参考[预览与发布卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/preview-and-publish-cards#4c818412)。

1.  在[飞书卡片搭建工具](https://open.feishu.cn/cardkit?from=open_docs_preview_and_publish)目标卡片编辑页面的右上角，点击 **保存**，然后点击 **发布**。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/660c4bd207d87e75da6d3724ba42da33_obpORC9b5Z.png?height=278&maxWidth=450&width=1383)

2.  在 **发布卡片** 对话框，设置 **卡片版本号**，并点击 **发布**。首次发布时版本号一般设置为 `1.0.0`。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4333017913821745efa60e2e0a9f338b_OjnyGU9qfp.png?height=278&maxWidth=350&width=1383)

3.  发布卡片后，你可参考[发送由搭建工具构建的卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card)调用 API 发送卡片。

	:::note
	卡片发布后，将对线上的卡片相关的 API 调用立即生效。你需确认本次发布是否会对服务端代码逻辑产生不兼容变更。为避免此类情况，在请求发送卡片时，你可将 `template_version_name` 参数设置为固定的卡片版本号，避免在工具上发布卡片后立即影响线上业务逻辑。
    :::
  </md-td>
</md-tr>

<md-tr>
  <md-td>200381</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200381; ErrMsg: template is not visible to app, please confirm whether the app is allowed to use this template; ErrorValue: %v, templateID: %v</md-td>
  <md-td>
无卡片使用权限。请检查当前发送卡片的应用或自定义机器人是否具有该卡片的使用权限，参考[管理卡片模板权限](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/manage-card-template#4530c6a7)。

1.  在卡片模板的编辑页面，点击应用图标。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/04fff9e7c4b1c10239a212100920f154_0Xt2z0Mp8v.png?height=278&maxWidth=450&width=1383)

2.  在 **添加自定义机器人/应用** 弹窗中，添加应用或自定义机器人，使该应用或自定义机器人拥有调用该卡片模板的权限。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a6e5dde5fcd532ede7ab6d7a2295195c_JWiFwiwd7W.png?height=278&maxWidth=450&width=1383)
  </md-td>
</md-tr>

<md-tr>
  <md-td>200621</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200621; ErrMsg: parse card json err, please check whether the card json is correct; ErrorValue: %v</md-td>
  <md-td>卡片 JSON 格式错误。请参考[卡片 JSON 代码结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)检查卡片内容。</md-td>
</md-tr>

<md-tr>
  <md-td>200732</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200732; ErrMsg: the actual type of the variable is inconsistent with the specified type in the template. Please check the type of the variable; ErrorValue:  %v, specifiedType:  %v, actualType:  %v</md-td>
  <md-td>卡片变量类型错误。请检查发送模版卡片时使用的变量的数据类型与构造该模版时指定的变量数据类型是否一致。</md-td>
</md-tr>

<md-tr>
  <md-td>200550</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200550; ErrPath: ROOT -> elements -> %v; ErrMsg: chart spec is invalid; ErrorValue: %v</md-td>
  <md-td>
卡片中的图表组件配置错误。请检查图表组件中的 chart_spec 属性配置是否正确，参考[图表](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/chart#39ee4e65)组件。

```json
{
  "code": 230099,
  "msg": "Failed to create card content, ext=ErrCode: 200550; ErrPath: ROOT -> elements -> [2](tag: chart); ErrMsg: chart spec is invalid; ErrorValue: - (root): Must validate at least one schema (anyOf)\n- axes: Invalid type. Expected: array, given: null\n; ",
  "error": {
    "log_id": "202409131613579778D691D6E05516DE2D",
    "troubleshooter": "排查建议查看（Troubleshooting suggestions）： https://open.feishu.cn/search?from=openapi&log_id=202409131613579778D691D6E05516DE2D&code=230099&method_id=6921911482032898068"
  }
}
```

ErrPath 示例说明: ROOT -> elements -> [2](tag: chart)

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/681343346e74ffe259928e72915fb0df_cG2saHQakQ.jpeg?height=278&maxWidth=450&width=1383)
  </md-td>
</md-tr>

<md-tr>
  <md-td>200861</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200861; ErrPath: ROOT -> body -> elements -> %v; ErrMsg: cards of schema V2 no longer support this capability; ErrorValue: unsupported tag %v</md-td>
  <md-td>卡片中使用了schema 1 支持但 schema 2 不再支持的组件。请检查卡片内容，移除或替换不支持的标签，参考 [废弃组件说明文档](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-breaking-changes-release-notes#47cd6626)。</md-td>
</md-tr>

<md-tr>
  <md-td>200570</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200570; ErrMsg: card contains invalid image keys; ErrorValue: image key %v</md-td>
  <md-td>卡片中的图片资源无效。请检查卡片中是否使用了正确的  img_key，你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口或在搭建工具中上传图片，获取图片的 key。</md-td>
</md-tr>

<md-tr>
  <md-td>200914</md-td>
  <md-td>table rows is invalid</md-td>
  <md-td>
表格行无效。可能原因与排查方案：
- 表格的 rows 部分不是一个合法的 JSON，示例参考[表格 JSON 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/table#51c332ce)。
- 单元格数据类型解析错误。例如，某列的单元格类型是富文本，但该列该行的数据按富文本解析失败。该场景下可根据返回的单元格行列索引（从 0 开始计数），定位问题单元格，然后参考[表格](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/table)中的 **data_type 字段说明**，检查是否配置有误。
  </md-td>
</md-tr>

<md-tr>
  <md-td>200915</md-td>
  <md-td>table rows name is invalid</md-td>
  <md-td>
表格的行名称没有在列中声明。在卡片的[表格组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/table)参数内，`rows` 字段需要以 `"name": VLAUE` 的形式定义每一行的数据内容，其中 `name` 为 `column` 中的 `name`（自定义的列 key），你需要检查 `column` 字段值，确保其中的 `name` 已传入正确值。
  </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::


其他未列出的错误码请参见[服务端通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


