<!--
title: 加急概述
id: 7405476293259116548
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/buzz-messages/buzz-overview
updatedAt: 1727245979000
source: https://open.feishu.cn/document/im-v1/buzz-messages/buzz-overview
-->
# 加急概述

在沟通过程中可能会有较为紧急的消息需要对方立刻收到并查看。飞书提供了 **应用内**、**短信**、**电话** 三种加急方式，可将消息加急发出，提高与他人的协同效率。

## 注意事项

- 加急功能因电话号码，存在额度限制与使用限制。当你在使用加急功能 OpenAPI 之前，请务必了解加急功能的具体介绍、使用限制以及常见问题。详情参见[使用加急功能](https://www.feishu.cn/hc/zh-CN/articles/360024757913)。

- 当用户客户端未读的加急消息超过 200 条时，调用加急 API 向该用户发送消息加急会失败，并报错 `230023`，此时需要该用户处理一部分被加急的消息，当未读的加急消息不超过 200 条时，才可以继续加急。处理方式：

	- 用户在客户端的会话内阅读加急消息（必须在会话内阅读消息，点掉终端弹出的加急提醒弹框不会视为已读加急消息）。
	- 如果某一群聊内存在大量加急消息，在确保不需要一条条阅读的情况下，可以通过群聊的 **设置** > **清空聊天记录** 功能清理群聊内的加急消息。


## 示例效果

不同的 API 加急方式实现效果不同，具体说明如下：

- [发送应用内加急](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_app)


	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f7887dbb28aa8801ee77573f60868cdf_hI9rCxz2qN.png?height=1284&lazyload=true&maxWidth=600&width=2146)

- [发送短信加急](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_sms)

	短信加急在推送应用内加急的基础上，还会推送短信消息。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ac3f79730b42dbde8dfdb9ecdbc79a82_kDfxjbPV5t.png?height=1238&lazyload=true&maxWidth=300&width=598)
    
- [发送电话加急](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_phone)

	电话加急在推送应用内加急的基础上，还会进行电话通知。电话内容为 `[成员名] 给你发了一条加急消息，请打开飞书查看详情`。
    
    
## 字段说明

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">名称</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:50%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>message_id</md-td>
<md-td>string</md-td>
<md-td>待加急的消息 ID。ID 获取方式：
  
- 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。
- 监听[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。
- 调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。

**注意**：不支持加急[批量发送的消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)（对应的消息 ID 格式为 `bm_xxx`）。

**示例值**："om_dc13264520392913993dd051dba21dcf"
</md-td>
</md-tr>

<md-tr>
<md-td>user_id_type</md-td>
<md-td>string</md-td>
<md-td>用户 ID 类型

**可选值有**：

- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[如何获取自己的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[如何获取自己的 Union ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[如何获取自己的 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)
 
**示例值**：open_id
</md-td>
</md-tr>
  
<md-tr>
<md-td>user_id_list</md-td>
<md-td>string[]</md-td>
<md-td>加急的目标用户 ID 列表。ID 类型与查询参数 user_id_type 取值一致，推荐使用 open_id。

**注意**：需要确保目标用户在加急消息所属的会话内。如果 ID 列表中有用户不在消息所属的会话内，则接口会将这些无效的 ID 返回（响应参数 invalid_user_id_list），只加急有效的用户 ID。如果 ID 列表内的所有 ID 均无效，则会返回 `230001` 错误码。 

**数据校验规则**：列表长度不能大于 200。

**示例值**：["ou_6yf8af6bgb9100449565764t3382b168"]
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::