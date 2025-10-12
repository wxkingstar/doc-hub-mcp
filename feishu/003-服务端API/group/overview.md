<!--
title: 群组概述
id: 7187585433244499971
fullPath: /uAjLw4CM/ukTMukTMukTM/group/overview
updatedAt: 1730256873000
source: https://open.feishu.cn/document/server-docs/group/overview
-->
# 群组概述

企业或团队内 “拉群” 是一种常用的沟通方式，通过群聊推进多人之间的交流协作。开放平台为飞书群组提供了 OpenAPI，用于管理群组、群成员、群公告以及群菜单等。

## 典型场景

开放平台提供了包含消息与群组业务的集成方案，详情可参见：

- [从通知到高效协同，飞书统一告警方案让服务保障坚如磐石](https://open.larkoffice.com/solutions/detail/alert)
- [当项目管理遇见飞书，协同沉淀更便捷](https://open.larkoffice.com/solutions/detail/project)

## 接入流程

群组 API 的基本接入流程如下图所示，如需了解详细的 API 接入流程，参见[流程概述](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e2c712313cbc2da9b298804cbcf94e2_yZOtP0cS3V.png?height=214&lazyload=true&maxWidth=700&width=2276)

:::note
**说明**：

- 你的应用必须[启用机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)才可以调用群组 API。如需了解应用机器人，可参见[应用机器人概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview#75133a93#75133a93)。
- 应用机器人支持添加到外部群或与外部用户单聊，具体配置操作参考[机器人支持外部群和外部用户单聊](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。
:::

## 开发教程

体验场景化教程，了解如何运用消息与群组 API 助力企业高效通讯。

- 场景一：[机器人自动拉群报警](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-development-tutorial/introduction)

	![14机器人自动拉群报警.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/69e9999ad015bca8e79c50f1229fbc61_pBAn6j9TCi.png?height=400&lazyload=true&maxWidth=600&width=752)
    
- 场景二：[新人入群欢迎机器人](/ssl:ttdoc/home/event-based-messaging/introduction)

	![13将企业组织架构同步到飞书cn.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8c385d02b353ac4d5569a37b81156f77_7cEJornbRS.png?height=400&lazyload=true&maxWidth=600&width=752)
    
## 资源介绍

群组业务域以资源为中心进行开放。资源的关系图如下，通过 OpenAPI 管理群成员、公告、标签页以及菜单等资源。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d4e2853106bc6e6087f279984e813380_S7Kyy7dSwE.png?height=1214&lazyload=true&maxWidth=600&width=1288)

各资源介绍如下：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">资源</md-th>
<md-th style="width:80%">介绍</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>[群组管理](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/chat/chat-info/intro)</md-td>
<md-td>包括创建群、解散群、更新群信息、获取群信息、设置群权限等管理操作。</md-td>
</md-tr>

<md-tr>
<md-td>[群成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/chat/chat-member/intro)</md-td>
<md-td>包括指定群管理员、邀请用户或机器人进群、获取群成员等操作。</md-td>
</md-tr>
  
<md-tr>
<md-td>[群公告](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/chat/chat-announcement/intro)</md-td>
<md-td>更新或获取群公告。</md-td>
</md-tr>

<md-tr>
<md-td>[会话标签页](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/create)</md-td>
<md-td>群聊顶部可自定义多个标签页，用于收集文档、Pin 消息、会议纪要等信息。</md-td>
</md-tr>
  
<md-tr>
<md-td>[群菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/overview)</md-td>
<md-td>群聊内可添加群菜单，成员可通过菜单选项实现一键跳转功能。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 方法列表

以下提供群组业务域所包含的所有 API 与事件列表

:::note
文中表格涉及的 **商店** 是指商店应用，**自建** 是指企业自建应用。应用类型说明参见[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。
:::

### 群组管理


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

<md-text type="field-name" >[创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)

   `POST` /open-apis/im/v1/chats
  
   > 创建群并设置群头像、群名、群描述等。
  </md-text>

</md-td>

<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat:create" desc="创建群" support_app_types="custom,isv" tags="">创建群</md-perm>


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

<md-text type="field-name" >[获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)</md-text>
  
`GET` /open-apis/im/v1/chats/:chat_id
  
  > 获取群名称、群描述、群头像、群主 ID 等群基本信息。
</md-td>


<md-td>            <md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat:read" desc="查看群信息" support_app_types="custom,isv" tags="">查看群信息</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>


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

<md-text type="field-name" >[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)</md-text>
  
`GET` /open-apis/im/v1/chats
>用户获取用户或者机器人所在的群列表。

</md-td>

<md-td>

<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat:read" desc="查看群信息" support_app_types="custom,isv" tags="">查看群信息</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
              <md-perm name="im:chat.group_info:readonly" desc="读取群信息（历史版本）" support_app_types="custom,isv" tags="">读取群信息（历史版本）</md-perm>


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

<md-text type="field-name" >[搜索对用户或机器人可见的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)</md-text>
  
`GET` /open-apis/im/v1/chats/search

>用于搜索对用户、机器人可见的群列表

</md-td>

<md-td>

<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
<md-perm name="im:chat:read" desc="查看群信息" support_app_types="custom,isv" tags="">查看群信息</md-perm>
<md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
<md-perm name="im:chat.group_info:readonly" desc="读取群信息（历史版本）" support_app_types="custom,isv" tags="">读取群信息（历史版本）</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
  <md-tag type="token-user">user
    _access_token</md-tag>

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
<md-text type="field-name" >[获取群成员发言权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-moderation/get)</md-text>
  
`GET` /open-apis/im/v1/chats/:chat_id/moderation
 
  > 获取群发言模式、可发言用户名单等。
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.moderation:read" desc="查看群发言权限" support_app_types="custom,isv" tags="">查看群发言权限</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>

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
<md-text type="field-name" >[获取群分享链接](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/link)</md-text>
  
`POST` /open-apis/im/v1/chats/:chat_id/link
 
  > 获取指定群的分享链接。
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat:read" desc="查看群信息" support_app_types="custom,isv" tags="">查看群信息</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>


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

<md-text type="field-name" >[更新群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/update)</md-text>
  
`PUT` /open-apis/im/v1/chats/:chat_id
 
  > 更新群头像、群名称、群描述、群配置、转让群主等。
</md-td>

<md-td>

<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat:update" desc="更新群信息" support_app_types="custom,isv" tags="">更新群信息</md-perm>


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

<md-text type="field-name" >[更新群发言权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-moderation/update)</md-text>
  
`PUT` /open-apis/im/v1/chats/:chat_id/moderation
 
  > 更新群组的发言权限设置，可设置为全员可发言、仅管理员可发言或指定用户可发言。
</md-td>

<md-td>

<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat:moderation:write_only" desc="操作群发言权限" support_app_types="custom,isv" tags="">操作群发言权限</md-perm>



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
<md-text type="field-name" >[更新群置顶](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-top_notice/put_top_notice)</md-text>
  
`POST` /open-apis/im/v1/chats/:chat_id/top_notice/put_top_notice
 
  > 更新会话中的群置顶信息，可以将群中的某一条消息，或者群公告置顶显示。
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.top_notice:write_only" desc="操作群置顶" support_app_types="custom,isv" tags="">操作群置顶</md-perm>

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
<md-text type="field-name" >[撤销群置顶](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-top_notice/delete_top_notice)</md-text>
  
`POST` /open-apis/im/v1/chats/:chat_id/top_notice/delete_top_notice
 
  > 撤销会话中的置顶。
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.top_notice:write_only" desc="操作群置顶" support_app_types="custom,isv" tags="">操作群置顶</md-perm>


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

<md-text type="field-name" >[解散群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/delete)</md-text>
  
`DELETE` /open-apis/im/v1/chats/:chat_id
>解散群聊。

</md-td>

<md-td>

<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat:delete" desc="解散群" support_app_types="custom,isv" tags="">解散群</md-perm>



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

<md-text type="field-name" >[群解散](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/events/disbanded)</md-text>
  
> 群组被解散后触发此事件。

</md-td>


<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat:read" desc="查看群信息" support_app_types="custom,isv" tags="">查看群信息</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>

</md-td>

<md-td>

im.chat.disbanded_v1

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

<md-text type="field-name" >[群配置修改](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/events/updated)</md-text>

> 群组配置被修改后触发此事件，包含：群主转移、群基本信息修改、群权限修改
</md-td>


<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat:read" desc="查看群信息" support_app_types="custom,isv" tags="">查看群信息</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>

</md-td>

<md-td>
im.chat.updated_v1
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

### 群成员

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
<md-text type="field-name" >[指定群管理员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/add_managers)

   `POST` /open-apis/im/v1/chats/:chat_id/managers/add_managers
  
   > 将用户或机器人指定为群管理员。
  </md-text>
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.managers:write_only" desc="添加、删除群管理员" support_app_types="custom,isv" tags="">添加、删除群管理员</md-perm>

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
<md-text type="field-name" >[删除群管理员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/delete_managers)

   `POST` /open-apis/im/v1/chats/:chat_id/managers/delete_managers
  
   > 删除指定的群管理员（用户或机器人）。
  </md-text>
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.managers:write_only" desc="添加、删除群管理员" support_app_types="custom,isv" tags="">添加、删除群管理员</md-perm>


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
<md-text type="field-name" >[将用户或机器人拉入群聊](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create)

   `POST` open-apis/im/v1/chats/:chat_id/members
  
   > 将用户或机器人拉入群聊。
  </md-text>
</md-td>
<md-td>
 <md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:write_only" desc="添加、移除群成员" support_app_types="custom,isv" tags="">添加、移除群成员</md-perm>

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

<md-text type="field-name" >[将用户或机器人移出群聊](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/delete)</md-text>
  
`DELETE` /open-apis/im/v1/chats/:chat_id/members
  
  > 将用户或机器人移出群聊。
</md-td>


<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:write_only" desc="添加、移除群成员" support_app_types="custom,isv" tags="">添加、移除群成员</md-perm>


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

<md-text type="field-name" >[用户或机器人主动加入群聊](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/me_join)</md-text>
  
`PATCH` /open-apis/im/v1/chats/:chat_id/members/me_join
 
  > 用户或者机器人可以通过接口入群。
</md-td>

<md-td>

<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:write_only" desc="添加、移除群成员" support_app_types="custom,isv" tags="">添加、移除群成员</md-perm>


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

<md-text type="field-name" >[获取群成员列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/get)</md-text>
  
`GET` /open-apis/im/v1/chats/:chat_id/members
>获取群里成员列表。

</md-td>

<md-td>

<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:read" desc="查看群成员" support_app_types="custom,isv" tags="">查看群成员</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
            <md-perm name="im:chat.group_info:readonly" desc="读取群信息（历史版本）" support_app_types="custom,isv" tags="">读取群信息（历史版本）</md-perm>


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

<md-text type="field-name" >[判断用户或机器人是否在群里](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/is_in_chat)</md-text>
  
`GET` /open-apis/im/v1/chats/:chat_id/members/is_in_chat
>判断用户或机器人是否在群里。

</md-td>

<md-td>

<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:read" desc="查看群成员" support_app_types="custom,isv" tags="">查看群成员</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
              <md-perm name="im:chat.group_info:readonly" desc="读取群信息（历史版本）" support_app_types="custom,isv" tags="">读取群信息（历史版本）</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
  <md-tag type="token-user">usert_access_token</md-tag>

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

<md-text type="field-name" >[机器人进群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-member-bot/events/added)</md-text>
  
  > 机器人被添加至群聊时触发此事件。

</md-td>


<md-td>            <md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:bot_access" desc="订阅机器人进、出群事件" support_app_types="custom,isv" tags="">订阅机器人进、出群事件</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
 
</md-td>

<md-td>

im.chat.member.bot.added_v1

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

<md-text type="field-name" >[机器人被移出群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-member-bot/events/deleted)</md-text>
> 机器人被移出群聊后触发此事件。
</md-td>


<md-td>            <md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:bot_access" desc="订阅机器人进、出群事件" support_app_types="custom,isv" tags="">订阅机器人进、出群事件</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
 
</md-td>

<md-td>
im.chat.member.bot.deleted_v1
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

<md-text type="field-name" >[用户进群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-member-user/events/added)</md-text>
> 新用户进群触发此事件。
</md-td>


<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:read" desc="查看群成员" support_app_types="custom,isv" tags="">查看群成员</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>

</md-td>

<md-td>

im.chat.member.user.added_v1

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

<md-text type="field-name" >[用户出群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-member-user/events/deleted)</md-text>
> 用户主动退群或被移出群聊时推送事件。
</md-td>


<md-td>            <md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:read" desc="查看群成员" support_app_types="custom,isv" tags="">查看群成员</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
 
</md-td>

<md-td>
im.chat.member.user.deleted_v1

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

<md-text type="field-name" >[撤销拉用户进群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/events/deleted)</md-text>
> 撤销拉用户进群后触发此事件。
</md-td>


<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.members:read" desc="查看群成员" support_app_types="custom,isv" tags="">查看群成员</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>

</md-td>

<md-td>
im.chat.member.user.withdrawn_v1

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

<md-text type="field-name" >[用户和机器人的会话首次被创建](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/bot-events)</md-text>
> 当用户首次与机器人单聊时触发此事件。
</md-td>


<md-td>无

</md-td>

<md-td>
p2p_chat_create

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

<md-text type="field-name" >[用户进入与机器人的会话](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered)</md-text>
> 用户进入与机器人的会话时触发此事件。
</md-td>


<md-td>无
</md-td>

<md-td>
im.chat.access_event.bot_p2p_chat_entered_v1
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


### 群公告

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

<md-text type="field-name" >[更新群公告信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/patch)</md-text>
  
`PATCH` /open-apis/im/v1/chats/:chat_id/announcement
  
  > 更新会话中的群公告信息，更新公告信息的格式和更新云文档格式相同。
</md-td>
<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.announcement:write_only" desc="更新群公告内容" support_app_types="custom,isv" tags="">更新群公告内容</md-perm>
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

<md-text type="field-name" >[获取群公告信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get)

   `GET` /open-apis/im/v1/chats/:chat_id/announcement
  
   > 获取会话中的群公告信息，公告信息格式与云文档格式相同。
  </md-text>

</md-td>

<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.announcement:read" desc="查看群公告信息" support_app_types="custom,isv" tags="">查看群公告信息</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>


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

### 会话标签页

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

<md-text type="field-name" >[添加会话标签页](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/create)</md-text>
  
`POST` /open-apis/im/v1/chats/:chat_id/chat_tabs
  
  > 添加自定义会话标签页。
</md-td>
<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.tabs:write_only" desc="操作群会话标签页" support_app_types="custom,isv" tags="">操作群会话标签页</md-perm>

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
<md-text type="field-name" >[更新会话标签页](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/update_tabs)

   `POST` /open-apis/im/v1/chats/:chat_id/chat_tabs/update_tabs
  
   > 更新会话标签页。
  </md-text>
</md-td>
<md-td><md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.tabs:write_only" desc="操作群会话标签页" support_app_types="custom,isv" tags="">操作群会话标签页</md-perm>
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
<md-text type="field-name" >[会话标签页排序](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/sort_tabs)

   `POST` /open-apis/im/v1/chats/:chat_id/chat_tabs/sort_tabs
  
   > 会话标签页排序。
  </md-text>
</md-td>
<md-td>
  
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.tabs:write_only" desc="操作群会话标签页" support_app_types="custom,isv" tags="">操作群会话标签页</md-perm>
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
<md-text type="field-name" >[拉取会话标签页](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/list_tabs)

   `GET` /open-apis/im/v1/chats/:chat_id/chat_tabs/list_tabs
  
   > 拉取会话标签页。
  </md-text>
</md-td>
<md-td>
  
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.tabs:read" desc="查看群会话标签页" support_app_types="custom,isv" tags="">查看群会话标签页</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>

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
<md-text type="field-name" >[删除会话标签页](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/delete_tabs)

   `DELETE` /open-apis/im/v1/chats/:chat_id/chat_tabs/delete_tabs
  
   > 删除会话标签页。
  </md-text>
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.tabs:write_only" desc="操作群会话标签页" support_app_types="custom,isv" tags="">操作群会话标签页</md-perm>


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

### 群菜单

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
<md-text type="field-name" >[添加群菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/create)

   `POST` /open-apis/im/v1/chats/:chat_id/menu_tree
  
   > 该接口用于向群组中添加群菜单。
  </md-text>
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.menu_tree:write_only" desc="操作群菜单" support_app_types="custom,isv" tags="">操作群菜单</md-perm>



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
<md-text type="field-name" >[修改群菜单元信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_item/patch)

   `PATCH` /open-apis/im/v1/chats/:chat_id/menu_items/:menu_item_id
  
   > 修改某个一级菜单或者二级菜单的元信息，包括群菜单的图标、名称、国际化名称和跳转链接。
  </md-text>
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.menu_tree:write_only" desc="操作群菜单" support_app_types="custom,isv" tags="">操作群菜单</md-perm>

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
<md-text type="field-name" >[排序群菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/sort)

   `POST` /open-apis/im/v1/chats/:chat_id/menu_tree/sort
  
   > 给一个群内的一级菜单排序。
  </md-text>
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.menu_tree:write_only" desc="操作群菜单" support_app_types="custom,isv" tags="">操作群菜单</md-perm>


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
<md-text type="field-name" >[获取群菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/get)

   `GET` /open-apis/im/v1/chats/:chat_id/menu_tree
  
   > 通过群 ID 获取群内菜单。
  </md-text>
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.menu_tree:read" desc="查看群菜单" support_app_types="custom,isv" tags="">查看群菜单</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>

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
<md-text type="field-name" >[删除群菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/delete)

   `DELETE` /open-apis/im/v1/chats/:chat_id/menu_tree
  
   > 该接口用于删除群内已经添加的群菜单。
  </md-text>
</md-td>
<md-td>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.menu_tree:write_only" desc="操作群菜单" support_app_types="custom,isv" tags="">操作群菜单</md-perm>

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