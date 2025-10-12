<!--
title: 群组管理概述
id: 7016681170402770945
fullPath: /uAjLw4CM/ukTMukTMukTM/im-v1/chat/chat-info/intro
updatedAt: 1730259263000
source: https://open.feishu.cn/document/server-docs/group/chat/intro
-->
# 群组管理概述

群组 OpenAPI 提供了群组管理能力，包括创建群、解散群、更新群信息、获取群信息、管理群置顶以及获取群分享链接等。

## 基本概念

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">概念</md-th>
<md-th style="width:80%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>群模式</md-td>
<md-td>- group：普通对话群组。调用[创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)接口仅能创建该模式的群组，该类群组内的消息模式分为会话消息（chat）、话题消息（thread）两类。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ca2bdbdfe545f01ca330ed40cc762914_BjBEMc8Hui.png?height=1590&lazyload=true&maxWidth=350&width=1832)
  
- topic：话题群组。无法通过 OpenAPI 创建，只能在飞书客户端内手动创建。详情参见[使用话题群](https://www.feishu.cn/hc/zh-CN/articles/360049067735)。
  
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b77be7c1108bec9eb012640ebc0eb403_JIzyFexCBl.png?height=1582&lazyload=true&maxWidth=350&width=1822)

- p2p：单聊。无法通过 OpenAPI 创建，在[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)时，如果消息接收者为用户（user_id/open_id/union_id），会返回 chat_id，使用该类 chat_id [获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)时，返回的群模式参数（chat_mode）值为单聊（p2p）。</md-td>
</md-tr>
  
<md-tr>
<md-td>群类型</md-td>
<md-td>- 私有群：仅被邀请至群组内的成员可以查看到该群，在企业内无法直接搜索加入，适用于团队内部交流沟通。
- 公开群：企业内的成员可直接搜索加入的群组，适用于企业内的业务推广、活动邀请等开放沟通的场景。</md-td>
</md-tr>
  
<md-tr>
<md-td>群权限</md-td>
<md-td>创建或更新群组时，可以设置群组的相关权限，包括：成员入群或退群的提示消息可见性、用户加群是否需要审批、谁可以邀请成员入群、谁可以分享群、谁可以 @ 所有人、谁可以加急消息、谁可以编辑群信息、是否隐藏群成员人数等。</md-td>
</md-tr>
  
 
</md-tbody>
</md-table>
:::


## 字段说明

:::note
以下字段并非所有类型的群组都具备，部分群组可能缺失某些字段。详情参考具体的 API 文档。
:::

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 40%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >chat_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群 ID，是群聊的唯一标识，在创建群聊时系统会自动生成该 ID，格式以 `oc_` 开头。ID 获取方式：
   
- [创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)，从返回结果中获取该群的 chat_id。
- 调用[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)接口，可以查询用户或机器人所在群的 chat_id。
- 调用[搜索对用户或机器人可见的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)，可搜索用户或机器人所在的群、对用户或机器人公开的群的 chat_id。
- 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口向单聊发消息（即向某一用户发消息）时，该接口会返回 chat_id，使用该 chat_id [获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)，群模式为单聊（即 `chat_mode` 返回值为 `p2p`）。

	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >avatar</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群头像 URL
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群名称
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >description</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群描述
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >i18n_names</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >i18n_names</md-text>
	</md-td>
	<md-td>
	群国际化名称
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >zh_cn</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	中文名
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >en_us</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	英文名
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >ja_jp</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	日文名
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >owner_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群主的用户 ID，ID 类型与 owner_id_type 的取值相对应。不同 ID 说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**注意**：群主是机器人则该字段不返回。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >owner_id_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群主的用户 ID 类型。用户 ID 类型分为 `open_id`、`user_id`、`union_id`。不同 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**注意**：群主是机器人则该字段不返回。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >add_member_permission</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	谁可以邀请用户或机器人入群

**可选值有**：
- `all_members`：所有成员。取该值时，群分享权限（share_card_permission）取值必须为 `allowed`。
- `only_owner`：仅群主和管理员。取该值时，群分享权限（share_card_permission）取值必须为 `not_allowed`。

      
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >share_card_permission</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	谁可以分享群

**可选值有**：
- `allowed`：所有成员。取该值时，邀请用户或机器人入群的权限（add_member_permission）取值必须为 `all_members`。
- `not_allowed`：仅群主和管理员。取该值时，邀请用户或机器人入群的权限（add_member_permission）取值必须为 `only_owner`。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >at_all_permission</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	谁可以 at 所有人

**可选值有**：
- `only_owner`：仅群主和管理员
- `all_members`：所有成员
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >edit_permission</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	谁可以编辑群信息

**可选值有**：
- `only_owner`：仅群主和管理员
- `all_members`：所有成员
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >chat_mode</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群模式

**可选值有**：
- `group`：群组
- `topic`：话题群
- `p2p`：单聊
      
**注意**：[创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)时，该参数作为请求参数仅支持取值 `group`。
	</md-td>
</md-tr>
    
    
<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >group_message_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群消息形式

**可选值有**：
- `chat`：对话消息
- `thread`：话题消息
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >chat_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群类型

**可选值有**：
- `private`：私有群
- `public`：公开群
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >chat_tag</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群标签。如有多个，则按照下列顺序返回第一个标签。

**可选值有**：
- `inner`：内部群
- `tenant`：公司群
- `department`：部门群
- `edu`：教育群
- `meeting`：会议群
- `customer_service`：客服群
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >external</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >boolean</md-text>
	</md-td>
	<md-td>
	是否是外部群
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >tenant_key</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
租户在飞书上的唯一标识，用来换取对应的 tenant_access_token，也可以用作租户在应用里面的唯一标识。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >join_message_visibility</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	成员入群提示消息的可见性

**可选值有**：
- `only_owner`：仅群主和管理员可见
- `all_members`：所有成员可见
- `not_anyone`：任何人均不可见
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >leave_message_visibility</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	成员出群提示消息的可见性

**可选值有**：
- `only_owner`：仅群主和管理员可见
- `all_members`：所有成员可见
- `not_anyone`：任何人均不可见
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >membership_approval</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	加群审批

**可选值有**：
- `no_approval_required`：无需审批
- `approval_required`：需要审批
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >moderation_permission</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群发言权限

**可选值有**：
- `only_owner`：仅群主和管理员
- `all_members`：所有成员
- `moderator_list`：指定群成员
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::


## 数据示例
```json
{
  "chat_id": "oc_a0553eda9014c201e6969b478895c230",
  "avatar": "https://p3-lark-file.byteimg.com/img/lark-avatar-staging/default-avatar_44ae0ca3-e140-494b-956f-xxxx~100x100.jpg",
  "name": "测试群名称",
  "description": "测试群描述",
  "i18n_names": {
    "zh_cn": "群聊",
    "en_us": "group chat",
    "ja_jp": "グループチャット"
  },
  "owner_id": "4d7a3c6g",
  "owner_id_type": "user_id",
  "add_member_permission": "all members",
  "share_card_permission": "allowed",
  "at_all_permission": "all members",
  "edit_permission": "all members",
  "group_message_type": "chat",
  "chat_mode": "group",
  "chat_type": "private",
  "chat_tag": "inner",
  "external": false,
  "tenant_key": "736588c9260f175e",
  "join_message_visibility": "all_members",
  "leave_message_visibility": "all_members",
  "membership_approval": "no_approval_required",
  "moderation_permission": "all_members"
}
```
