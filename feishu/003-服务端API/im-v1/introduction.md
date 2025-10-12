<!--
title: 消息概述
id: 7016681170402836481
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/introduction
updatedAt: 1741352974000
source: https://open.feishu.cn/document/server-docs/im-v1/introduction
-->
# 消息概述

消息是指飞书内的即时消息，用于满足企业或用户日常工作中的沟通需要、帮助团队提升信息处理效率和顺畅交流。飞书开放平台针对即时消息提供了一系列 OpenAPI，使用这些 OpenAPI 你可以实现多种能力。例如：

- 向指定用户或群聊发送不同类型的消息，例如文本、富文本、图片、文件、卡片、视频、音频以及表情等。
- 在需要处理紧急需求时加急消息，提醒消息接收者查看消息内容。
- 把聊天过程中的重要消息标记为 Pin，被 Pin 的消息在当前会话内全员可见，方便成员随时查看重要消息。

## 典型场景

开放平台提供了包含消息与群组业务的集成方案，详情可参见：

- [从通知到高效协同，飞书统一告警方案让服务保障坚如磐石](https://open.feishu.cn/solutions/detail/alert)
- [当项目管理遇见飞书，协同沉淀更便捷](https://open.feishu.cn/solutions/detail/project)


##  接入流程

消息 API 的基本接入流程如下图所示，如需了解详细的 API 接入流程，参见[流程概述](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e2c712313cbc2da9b298804cbcf94e2_yZOtP0cS3V.png?height=214&lazyload=true&maxWidth=700&width=2276)

:::note
**说明**：

- 你的应用必须[启用机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)才可以调用消息 API。如需了解应用机器人，可参见[应用机器人概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview#75133a93#75133a93)。
- 如果你希望使用 Webhook 方式发送消息，则需要使用群自定义机器人，该类型机器人只能在群组内添加，且只能向该群组发送不可交互的消息。详细说明参见[自定义机器人使用指南](/ssl:ttdoc/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN)。
- 应用机器人支持添加到外部群或与外部用户单聊，具体配置操作参考[机器人支持外部群和外部用户单聊](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。
:::

## 开发教程

体验场景化教程，了解如何运用消息与群组 API 助力企业高效通讯。

- 场景一：[机器人自动拉群报警](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-development-tutorial/introduction)

	![14机器人自动拉群报警.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/69e9999ad015bca8e79c50f1229fbc61_pBAn6j9TCi.png?height=400&lazyload=true&maxWidth=600&width=752)

- 场景二：[向指定部门进行消息群发](/ssl:ttdoc/home/mass-messaging-to-designated-departments/introduction)
  
	![13将企业组织架构同步到飞书cn.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e14bc2fd84ca3974597db8e371b92cca_WqZ1usQENO.png?height=400&lazyload=true&maxWidth=600&width=752)

- 场景三：[新人入群欢迎机器人](/ssl:ttdoc/home/event-based-messaging/introduction)

	![13将企业组织架构同步到飞书cn.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8c385d02b353ac4d5569a37b81156f77_7cEJornbRS.png?height=400&lazyload=true&maxWidth=600&width=752)

- 场景四：[卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)

	
	![img_v3_02i5_5bde61d8-131b-426e-91de-00bb1364650g.jpg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6e2637f827fbb6027c6df98e81828bfb_pFWyg1MxPP.jpg?height=800&lazyload=true&maxWidth=600&width=1504)




## 资源介绍

消息业务域以资源为中心进行开放。资源的关系图如下，消息本身包含了文本、图片、文件、卡片以及表情等多种类型，这些不同类型的消息均可以发送至指定的用户或群组。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/db852635560fd52883977d5fdba7c435_gHArxBWd7T.png?height=1338&lazyload=true&maxWidth=600&width=1490)

:::note
上图中，用户相关 API 参考[通讯录概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/resources)。群组相关 API 参考[群组概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/overview)。
:::

消息相关资源或操作介绍如下表：

:::html


<md-table>
<md-thead>
<tr>
<md-th style="width: 20%;">资源或操作</md-th>
<md-th style="width: 80%;">介绍</md-th>
</tr>
</md-thead>
<md-tbody> 
<md-tr>
<md-td>
[消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro)
</md-td>
<md-td>
  
消息即是指飞书聊天中的消息。通过消息 API 可以实现：
  
- 向指定用户或群聊发送包括文本、富文本、卡片、图片、视频以及文件等多种类型的消息。
- 回复、编辑、撤回、转发某一条消息。
- 查看消息已读情况、会话历史消息、消息内容等。

</md-td>
</md-tr>
<md-tr>
<md-td>
[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)
</md-td>
<md-td>
如需通过消息 API 发送图片，则需要通过 API 上传图片并获取图片 Key，然后使用图片 Key 发送消息。同时支持根据图片 Key 将图片下载到本地。
</md-td>
</md-tr>
<md-tr>
<md-td>
[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create)
</md-td>
<md-td>
如需通过消息 API 发送文件，则需要通过 API 上传文件并获取文件 Key，然后使用文件 Key 发送消息。同时支持根据文件 Key 将文件下载到本地。
</md-td>
</md-tr> 
 
<md-tr>
<md-td>
[表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/overview-of-message-reaction-resources)
</md-td>
<md-td>
在指定消息上回复飞书表情。
</md-td>
</md-tr>  
  
<md-tr>
<md-td>
[加急消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/buzz-messages/buzz-overview)
</md-td>
<md-td>
针对一些紧急情况，你可以加急指定消息。根据加急方式不同，消息接收者可能会收到应用内的加急、短信加急以及电话加急。
</md-td>
</md-tr> 
  
<md-tr>
<md-td>
[Pin 消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/pin/pin-overview)
</md-td>
<md-td>
Pin 消息用于将众多消息内的重要消息聚合在一起，被 Pin 的消息在当前会话中对所有成员可见，方便成员随时查看被 Pin 的重要消息。
</md-td>
</md-tr> 
  
<md-tr>
<md-td>
[卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-card/overview)
</md-td>
<md-td>
卡片能够将结构化的内容以卡片形式嵌入至聊天消息、群置顶消息、链接预览等飞书协作场景中。了解更多参见[飞书卡片概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)。通过消息 API，你可以更新飞书卡片或向特定人发送卡片。
</md-td>
</md-tr>  
  
<md-tr>
<md-td>
[URL 预览](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/im-v2/url_preview/batch_update)
</md-td>
<md-td>
URL 预览是指在租户内，将指定的 URL 解析为文本或卡片的形式进行展示，方便消息接收者预览 URL 对应的内容。了解更多参见[链接预览开发指南](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/link-preview-development-guide)。通过消息 API，你可以更新 URL 预览。
</md-td>
</md-tr>

</md-tbody>

</md-table>

:::

## 方法列表

以下提供消息业务域所包含的所有 API 与事件列表

:::note
文中表格涉及的 **商店** 是指商店应用，**自建** 是指企业自建应用。应用类型说明参见[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。
:::

### 消息管理


#### API 列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)

   `POST` /open-apis/im/v1/messages
  
   > 给指定用户或者会话发送消息，支持发送文本、富文本、卡片、群名片、个人名片、图片、视频、音频、文件、表情包。
  </md-text>

</md-td>

<md-td><md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>

<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)</md-text>
  
`POST` /open-apis/message/v4/batch_send/
  
  > 给多个用户或者多个部门发送消息，支持发送文本、富文本、卡片、群名片、个人名片、图片、视频、音频、文件、表情包。
</md-td>


<md-td>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>
<md-perm name="im:message:send_multi_users" desc="给多个用户批量发消息" support_app_types="custom,isv" tags="">给多个用户批量发消息</md-perm>
<md-perm name="im:message:send_multi_depts" desc="给一个或多个部门的成员批量发消息" support_app_types="custom,isv" tags="">给一个或多个部门的成员批量发消息</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>


</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[回复消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)</md-text>
  
`POST` /open-apis/im/v1/messages/:message_id/reply
 
  > 回复指定消息，支持文本、富文本、卡片、群名片、个人名片、图片、视频、文件等多种消息类型。
</md-td>

<md-td>

<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>  
<md-tr>

<md-td>

<md-text type="field-name" >[编辑消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/update)</md-text>
  
`PUT` /open-apis/im/v1/messages/:message_id
 
  > 编辑已发送的消息内容，当前支持编辑文本、富文本消息。
</md-td>

<md-td>

<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>
<md-perm name="im:message:update" desc="更新消息" support_app_types="custom,isv" tags="">更新消息</md-perm>



</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>


<md-tr>

<md-td>

<md-text type="field-name" >[撤回消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/delete)</md-text>
  
`DELETE` /open-apis/im/v1/messages/:message_id
>将某一条消息撤回。例如，机器人撤回机器人自己发送的消息、群主撤回群内消息。

</md-td>

<md-td>

<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:recall" desc="撤回消息" support_app_types="custom,isv" tags="">撤回消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[批量撤回消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/batch_message/delete)</md-text>
  
`DELETE` /open-apis/im/v1/batch_messages/:batch_message_id
>批量撤回通过[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)接口发送的消息。

</md-td>

<md-td>

<md-perm name="im:message:send_multi_depts" desc="给一个或多个部门的成员批量发消息" support_app_types="custom,isv" tags="">给一个或多个部门的成员批量发消息</md-perm>
            <md-perm name="im:message:send_multi_users" desc="给多个用户批量发消息" support_app_types="custom,isv" tags="">给多个用户批量发消息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
<md-tr>
<md-td>

<md-text type="field-name" >[转发消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/forward)</md-text>
  
`POST` /open-apis/im/v1/messages/:message_id/forward
>向用户、群聊或话题转发一条指定的消息。

</md-td>

<md-td>

<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>

</md-td>

<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>

<md-text type="field-name" >[合并转发消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/merge_forward)</md-text>
  
`POST` /open-apis/im/v1/messages/merge_forward
>将来自同一个群聊中的多条消息合并，并转发给指定的用户、群聊或话题。

</md-td>

<md-td>

<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>

</md-td>

<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
  
<md-tr>
<md-td>

<md-text type="field-name" >[转发话题](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/thread/forward)</md-text>
  
`POST` /open-apis/im/v1/threads/:thread_id/forward
>向用户、群组或话题转发一个话题。

</md-td>

<md-td>

<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>

</md-td>

<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[查询消息已读信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/read_users)</md-text>
  
`GET` /open-apis/im/v1/messages/:message_id/read_users
>消息发送后，可以通过该接口查询消息接收者是否已读消息。

</md-td>

<md-td>

<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
<md-tr>

<md-td>

<md-text type="field-name" >[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)</md-text>
  
`GET` /open-apis/im/v1/messages
>获取会话（包括单聊、群组）的历史消息。

</md-td>

<md-td>

 <md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
<md-tr>

<md-td>

<md-text type="field-name" >[获取消息中的资源文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-resource/get)</md-text>
  
`GET` /open-apis/im/v1/messages/:message_id/resources/:file_key
>获取消息中的资源文件，包括音频，视频，图片和文件。暂不支持表情包资源下载。当前仅支持 100M 以内的资源文件的下载。

</md-td>

<md-td>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
<md-tr>

<md-td>

<md-text type="field-name" >[获取指定消息的内容](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/get)</md-text>
  
`GET` /open-apis/im/v1/messages/:message_id
>通过消息 ID（message_id）查询消息内容。

</md-td>

<md-td>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>
<md-td>

<md-text type="field-name" >[查询批量消息推送和阅读人数](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/batch_message/read_user)</md-text>
  
`GET` /open-apis/im/v1/batch_messages/:batch_message_id/read_user
>调用[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)接口后，可以通过该接口查询批量消息推送的总人数和阅读消息的人数。

</md-td>

<md-td>

<md-perm name="im:message:send_multi_depts" desc="给一个或多个部门的成员批量发消息" support_app_types="custom,isv" tags="">给一个或多个部门的成员批量发消息</md-perm>
            <md-perm name="im:message:send_multi_users" desc="给多个用户批量发消息" support_app_types="custom,isv" tags="">给多个用户批量发消息</md-perm>

</md-td>

<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>

<md-text type="field-name" >[查询批量消息整体进度](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/batch_message/get_progress)</md-text>
  
`GET` /open-apis/im/v1/batch_messages/:batch_message_id/get_progress
>调用[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)接口后，可通过该接口获取批量消息发送的进度、撤回进度。

</md-td>

<md-td>

<md-perm name="im:message:send_multi_depts" desc="给一个或多个部门的成员批量发消息" support_app_types="custom,isv" tags="">给一个或多个部门的成员批量发消息</md-perm>
            <md-perm name="im:message:send_multi_users" desc="给多个用户批量发消息" support_app_types="custom,isv" tags="">给多个用户批量发消息</md-perm>

</md-td>

<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>

<md-text type="field-name" >[添加跟随气泡](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/push_follow_up)</md-text>
  
`POST` /open-apis/im/v1/messages/:message_id/push_follow_up
>展示在机器人消息下方的气泡，用户点击气泡或者新消息到达后，气泡消失。

</md-td>

<md-td>

<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>

</md-td>

<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
  
</md-tbody>

</md-table>

:::


#### 事件列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 25%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;">事件类型</md-th>

<md-th style="width: 10%;">商店</md-th>

<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)</md-text>
> 机器人接收到用户发送的消息后触发此事件。
</md-td>


<md-td><md-perm name="im:message.group_at_msg" desc="获取用户在群组中@机器人的消息" support_app_types="custom,isv" tags="">获取用户在群组中@机器人的消息</md-perm>
            <md-perm name="im:message.group_at_msg:readonly" desc="接收群聊中@机器人消息事件" support_app_types="custom,isv" tags="">接收群聊中@机器人消息事件</md-perm>
            <md-perm name="im:message.group_msg" desc="获取群组中所有消息（敏感权限）" support_app_types="custom,isv" tags="">获取群组中所有消息（敏感权限）</md-perm>
            <md-perm name="im:message.p2p_msg:readonly" desc="读取用户发给机器人的单聊消息" support_app_types="custom,isv" tags="">读取用户发给机器人的单聊消息</md-perm>
            <md-perm name="im:message.p2p_msg" desc="获取用户发给机器人的单聊消息" support_app_types="custom,isv" tags="">获取用户发给机器人的单聊消息</md-perm>

</md-td>

<md-td>

im.message.receive_v1

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[消息已读](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/message_read)</md-text>
> 用户阅读机器人发送的单聊消息后触发此事件。
</md-td>


<md-td><md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>
</md-td>

<md-td>
im.message.message_read_v1
</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

  
<md-tr>

<md-td>

<md-text type="field-name" >[撤回消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/recalled)</md-text>
> 消息被撤回后出发此事件。
</md-td>


<md-td><md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>
</md-td>

<md-td>
im.message.recalled_v1
</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  

</md-tbody>

</md-table>

:::
### 图片信息
  
#### API 列表
:::html

<md-table>
<md-thead>
<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)

   `POST` /open-apis/im/v1/images
  
   > 上传图片接口，支持上传 JPEG、PNG、WEBP、GIF、TIFF、BMP、ICO 格式图片。
  </md-text>

</md-td>

<md-td><md-perm name="im:resource" desc="获取与上传图片或文件资源 " support_app_types="custom,isv" tags="">获取与上传图片或文件资源 </md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[下载图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/get)</md-text>
  
`GET` /open-apis/im/v1/images/:image_key
  
  > 下载图片资源，只能下载当前应用所上传的图片，且图片类型需要为 message（即用于发送消息的图片）。
</md-td>
<md-td>
  无
</md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>

</md-tbody>

</md-table>

:::

### 文件信息

#### API 列表
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width:35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create)

   `POST` /open-apis/im/v1/files
  
   > 上传文件，可以上传视频，音频和 doc、xls、ppt 等常见文件类型。
  </md-text>

</md-td>

<md-td><md-perm name="im:resource" desc="获取与上传图片或文件资源 " support_app_types="custom,isv" tags="">获取与上传图片或文件资源 </md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[下载文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/get)</md-text>
  
`GET` /open-apis/im/v1/files/:file_key
  
  > 下载文件接口，只能下载应用自己上传的文件。
</md-td>
<md-td>
  无
</md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>

</md-tbody>

</md-table>

:::


### 消息卡片


#### API 列表
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[更新应用发送的消息卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)

   `PATCH` /open-apis/im/v1/messages/:message_id
  
   > 由当前应用发送过的卡片，可以调用该接口更新卡片的内容。
  </md-text>

</md-td>

<md-td><md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>
            <md-perm name="im:message:update" desc="更新消息" support_app_types="custom,isv" tags="">更新消息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[延迟更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)</md-text>
  
`POST` /open-apis/interactive/v1/card/update
  
  > 用户与卡片交互完成后，可选择使用该接口延后更新卡片内容。
</md-td>
<md-td>无</md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[发送仅特定人可见的消息卡片](/ssl:ttdoc/ukTMukTMukTM/uETOyYjLxkjM24SM5IjN)</md-text>
  
`POST` /open-apis/ephemeral/v1/send
  
  > 用于机器人在群会话中发送指定用户可见的消息卡片，指定用户查看到的卡片上方会展示“仅对你可见”。
</md-td>
<md-td>无</md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[删除仅特定人可见的消息卡片](/ssl:ttdoc/ukTMukTMukTM/uITOyYjLykjM24iM5IjN)</md-text>
  
`POST` /open-apis/ephemeral/v1/delete
  
  > 在群会话中删除特定人可见的卡片。通过该接口删除卡片后，不会留下该卡片消息的任何痕迹。
</md-td>
<md-td>无</md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
</md-tbody>

</md-table>

:::
  
### 表情回复


#### API 列表
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[添加消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)

   `POST` /open-apis/im/v1/messages/:message_id/reactions
  
   > 给指定消息添加指定类型的表情回复。
  </md-text>

</md-td>

<md-td>            <md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message.reactions:write_only" desc="发送、删除消息表情回复" support_app_types="custom,isv" tags="">发送、删除消息表情回复</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[获取消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/list)</md-text>
  
`GET` /open-apis/im/v1/messages/:message_id/reactions
  
  > 获取指定消息的特定类型表情回复列表。
</md-td>
<md-td><md-perm name="im:message.reactions:read" desc="查看消息表情回复" support_app_types="custom,isv" tags="">查看消息表情回复</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>
  </md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[删除消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete)</md-text>
  
`DELETE` /open-apis/im/v1/messages/:message_id/reactions/:reaction_id
  
  > 删除指定消息的表情回复。
</md-td>
<md-td><md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message.reactions:write_only" desc="发送、删除消息表情回复" support_app_types="custom,isv" tags="">发送、删除消息表情回复</md-perm>
  </md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
</md-tbody>

</md-table>
:::
  

#### 事件列表
:::html
<md-table>

<md-thead>

<tr>

<md-th style="width: 25%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>


<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;">事件类型</md-th>

<md-th style="width: 10%;">商店</md-th>

<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>



<md-tr>

<md-td>

<md-text type="field-name" >[新增消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/events/created)</md-text>
> 消息被添加某一个表情回复后触发此事件。
</md-td>


<md-td>
<md-perm name="im:message.reactions:read" desc="查看消息表情回复" support_app_types="custom,isv" tags="">查看消息表情回复</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>

</md-td>

<md-td>
im.message.reaction.created_v1
</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

  <md-tr>

<md-td>

<md-text type="field-name" >[删除消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/events/deleted)</md-text>
> 消息被删除某一个表情回复后触发此事件。
</md-td>


<md-td>

<md-perm name="im:message.reactions:read" desc="查看消息表情回复" support_app_types="custom,isv" tags="">查看消息表情回复</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>

</md-td>

<md-td>

	
im.message.reaction.deleted_v1

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>
:::
  

### 消息加急

#### API 列表
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width:35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[发送应用内加急](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_app)

   `PATCH` /open-apis/im/v1/messages/:message_id/urgent_app
  
   > 机器人发送消息后，可以调用该接口向目标用户发送应用内加急。
  </md-text>

</md-td>

<md-td><md-perm name="im:message.urgent" desc="发送应用内加急消息" support_app_types="custom,isv" tags="">发送应用内加急消息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[发送短信加急](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_sms)</md-text>
  
`PATCH` /open-apis/im/v1/messages/:message_id/urgent_sms
  
  > 机器人发送消息后，可以调用该接口向目标用户发送应用内加急和短信加急。
</md-td>
<md-td>
<md-perm name="im:message.urgent:sms" desc="发送短信加急消息" support_app_types="custom,isv" tags="">发送短信加急消息</md-perm>
</md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
  
<md-tr>

<md-td>

<md-text type="field-name" >[发送电话加急](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_phone)</md-text>
  
`PATCH` /open-apis/im/v1/messages/:message_id/urgent_phone
  
  > 机器人发送消息后，可以调用该接口向目标用户发送应用内加急和电话加急。
</md-td>
<md-td>
<md-perm name="im:message.urgent:phone" desc="发送电话加急消息" support_app_types="custom,isv" tags="">发送电话加急消息</md-perm>
</md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>

</md-tbody>

</md-table>
:::

### Pin

#### API 列表
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width:35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[Pin 消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/pin/create)

   `POST` /open-apis/im/v1/pins
  
   > Pin 一条指定的消息，被 Pin 的消息在当前会话中对所有成员可见，方便成员随时查看。
  </md-text>

</md-td>

<md-td><md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message.pins:write_only" desc="添加、 取消 Pin 消息" support_app_types="custom,isv" tags="">添加、 取消 Pin 消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[移除 Pin 消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/pin/delete)</md-text>
  
`DELETE` /open-apis/im/v1/pins/:message_id
  
  > 移除被 Pin 的消息。
</md-td>
<md-td>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message.pins:write_only" desc="添加、 取消 Pin 消息" support_app_types="custom,isv" tags="">添加、 取消 Pin 消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>
</md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
  
<md-tr>

<md-td>

<md-text type="field-name" >[获取群内 Pin 消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/pin/list)</md-text>
  
`GET` /open-apis/im/v1/pins
  
  > 在指定群内，获取指定时间范围内的所有 Pin 消息。
</md-td>
<md-td>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message.pins:read" desc="查看 Pin 消息" support_app_types="custom,isv" tags="">查看 Pin 消息</md-perm>
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>
</md-td>
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>

</md-tbody>

</md-table>
:::

### URL 预览

#### API 列表
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width:35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[更新 URL 预览](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/im-v2/url_preview/batch_update)

   `POST` /open-apis/im/v2/url_previews/batch_update
  
   > 该接口用于主动更新 URL 预览，调用后会重新触发一次客户端拉取，需要回调服务返回更新后的数据。
  </md-text>

</md-td>

<md-td><md-perm name="im:url_preview.update" desc="更新 URL 预览" support_app_types="custom,isv" tags="">更新 URL 预览</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>



</md-tbody>

</md-table>
:::