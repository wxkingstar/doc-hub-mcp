<!--
title: 消息管理概述
id: 7016681170402820097
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro
updatedAt: 1725003598000
source: https://open.feishu.cn/document/server-docs/im-v1/message/intro
-->
# 消息管理概述

消息即飞书聊天中的一条消息。你可以使用消息管理 API 对消息进行发送、回复、编辑、撤回、转发以及查询等操作。在使用消息管理 API 前，你能通过本文了解消息管理 API 相关的字段说明。


## 字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >message_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
在单个租户内，系统会对每一条发送出的消息自动生成一个唯一 ID，该 ID 即为 `message_id`。`message_id` 格式是以 `om_` 为前缀的字符串，例如：`om_934be5776f5a87239a298af9e74c0f72`。
  
**message_id 获取方式**：
  
- 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。
- 监听[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。
- 调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >root_id 与 parent_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
一条消息可能被回复多次，在这种有多个回复消息的消息树中，`root_id` 为根消息的 `message_id`，`parent_id` 为被回复的上一层消息的 `message_id`。以下图的消息回复举例：
  
![Group 1321314312.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/08d741da23cd931118c332941e5cc117_wvecM5EteV.png?height=654&lazyload=true&width=1640)
  
- msg2 回复了 msg1，则 msg2 的 `root_id` 和 `parent_id` 均为 msg1 的 `message_id`；
- msg3 回复了msg2，则 msg3 的 `root_id` 是 msg1 的 `message_id`，`parent_id` 是 msg2 的`message_id`

<md-alert type="tip" icon="none">**注意**：在话题内回复的消息，都是在回复根消息，所以 `root_id` 和 `parent_id` 均是指根消息的 `message_id`。</md-alert>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >msg_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	消息类型。包括：
      
- text：文本
- post：富文本
- image：图片
- file：文件
- audio：语音
- media：视频
- sticker：表情包
- interactive：消息卡片
- share_chat：分享群名片
- share_user：分享个人名片
- system：系统消息

各类型详细介绍参见[发送消息内容](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >create_time</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	消息生成的时间戳。单位：毫秒
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >update_time</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	消息更新的时间戳。单位：毫秒
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >deleted</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >boolean</md-text>
	</md-td>
	<md-td>
	消息是否被撤回。取值：
- true：被撤回
- false：未被撤回
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >updated</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >boolean</md-text>
	</md-td>
	<md-td>
	消息是否被更新。取值：
- true：被更新
- false：未被更新
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >chat_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	消息所属群的群 ID。了解群 ID 可参见[群组概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/overview)。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >sender</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >sender</md-text>
	</md-td>
	<md-td>
	消息发送者的信息。发送者可以是用户或应用。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	发送者的 ID。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	发送者的 ID 类型。取值：    
- open_id：用户的 open_id（[了解什么是 Open ID](/ssl:ttdoc/home/user-identity-introduction/open-id)）
- app_id：应用的 App ID
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >sender_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	发送者类型。取值：
- user：用户
- app：应用
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >tenant_key</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	租户在飞书内的唯一标识，可用作租户在应用里的唯一标识，可使用该 Key 值获取[商店应用的 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >body</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >message_body</md-text>
	</md-td>
	<md-td>
	消息包含的内容信息。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >content</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	消息内容，JSON 结构。不同的消息类型（msg_type）对应不同内容，具体内容格式参考[发送消息内容](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >mentions</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >mention\[\]</md-text>
	</md-td>
	<md-td>
	消息内被 @ 的用户或机器人的 ID 列表。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >key</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	被 @ 的用户或机器人的序号。例如，第 3 个被 @ 到的成员取值为 `@_user_3`。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	被 @ 的用户或者机器人的 ID。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	被 @ 的用户或机器人的 ID 类型。目前仅支持 `open_id`（[了解什么是 Open ID](/ssl:ttdoc/home/user-identity-introduction/open-id)）。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	被 @ 的用户或机器人的名称。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >tenant_key</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
租户在飞书内的唯一标识，可用作租户在应用里的唯一标识，可使用该 Key 值获取[商店应用的 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。
	</md-td>
</md-tr>
    
<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >thread_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
话题独有的 ID，使用该 ID 可实现：
      
- 调用[转发话题](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/thread/forward)、[获取话题历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)等接口。
- 判断是否为话题（所查询的消息如果不返回该值，则说明该消息为非话题消息）。
      
**注意**：话题在拥有 `thread_id` 之外，同时也拥有 `message_id`。例如，当你调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口时，如果消息是话题形式，则该消息会同时返回 `message_id` 和 `thread_id`。
      
话题形式如下图所示，关于话题的详细介绍，参见[话题概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/thread-introduction)。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cbb11fd40b2b5a2b1e457b24e0062645_w1A6AwBAyu.png?height=1004&lazyload=true&width=1276)

	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >upper_message_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
`upper_message_id` 是合并转发消息中，子消息所在的合并转发消息的 `message_id`。以下图的消息回复举例：

![Group 1321314316.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b51867811fc500dbe5ef129f8bd03149_1eOUU1X0E9.png?height=817&lazyload=true&width=1640)
  
其中的 msg1、msg2、msg3 是合并转发消息中的三条子消息，它们的 `upper_message` 即为所在的合并转发消息的`message_id`。
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::

### 数据示例
```json
{
        "message_id": "om_dc13264520392913993dd051dba21dcf",
        "root_id": "om_40eb06e7b84dc71c03e009ad3c754195",
        "parent_id": "om_d4be107c616aed9c1da8ed8068570a9f",
        "msg_type": "card",
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
        "thread_id": "omt_16f3c7e1268f1749",
        "upper_message_id": "om_40eb06e7b84dc71c03e009ad3c754195"
}
```

