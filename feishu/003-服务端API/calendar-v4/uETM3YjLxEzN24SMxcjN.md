<!--
title: 日历概述
id: 6907568031543853058
fullPath: /ukTMukTMukTM/uETM3YjLxEzN24SMxcjN
updatedAt: 1712717685000
source: https://open.feishu.cn/document/server-docs/calendar-v4/overview
-->
# 日历概述

日历 API 基于飞书日历功能开放了对日历、日程、忙闲等资源的操作与查询能力。你能以应用或用户的身份调用日历 API 来实现多种功能。例如：

- 创建日程并预定会议室
- 邀请飞书用户或第三方用户参与日程
- 查看用户忙闲
- 同步用户的休假状态
- 绑定或解绑 Exchange 账户

## 客户案例

开放平台包含日历业务的集成方案：

- 货拉拉：[飞书智能会务，轻松搞定会议管理](https://open.feishu.cn/solutions/detail/meetings)
- 中国移动国际有限公司：[休假状态实时同步，沟通协作更高效](https://open.feishu.cn/solutions/detail/leave)

##  接入流程

日历 API 的基本接入流程如下图所示，如需了解详细的 API 接入流程，参见[流程概述](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e2c712313cbc2da9b298804cbcf94e2_yZOtP0cS3V.png?height=214&lazyload=true&maxWidth=700&width=2276)

## 开发教程

体验场景化示例教程，了解如何搭配使用日历 API 来实现日历日程管理。

- [快速构建日历日程](/ssl:ttdoc/home/quickly-build-a-feishu-calendar-schedule/introduction)
	 
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f331175a0e8519b2263a412f42076c5a_UxVa4iHV98.png?height=1070&lazyload=true&maxWidth=600&width=1640)

- [自动获取日历日程](/ssl:ttdoc/home/calendar-event-sync/prepare)

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe86bc3555153440c6eb6beadab1a1ba_plutaAX03V.png?height=400&lazyload=true&maxWidth=600&width=752)

## 使用限制

- 单个用户或者单个应用可订阅的日历数量上限为 1000。
- 每个日程可添加的参与人数量上限为 3000。


## 资源介绍

日历业务域以资源为中心进行开放。日历是一个用于聚合日程的实体，用户在订阅日历后，可以在日历内创建日程并邀请参与人。资源关系图如下：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/88fa3f5ff1a8f84c84b459e1ec5b8900_pg5d3MBhHd.png?height=1874&lazyload=true&maxWidth=750&width=2374)

:::html

日历业务域包含的资源以及资源定义如下表：

<md-table>
<md-thead>
<tr>
<md-th style="width: 20%;">资源</md-th>
<md-th style="width: 80%;">定义</md-th>
</tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
[日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/introduction)
</md-td>
<md-td>
日历是包含一系列相关日程的容器，是同一类日程的聚合实体。
</md-td>

</md-tr>

<md-tr>
<md-td>
[日历访问控制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/introduction)
</md-td>
<md-td>
日历的成员列表，可以给不同成员授予不同的日历操作权限。
</md-td>

</md-tr>

<md-tr>
<md-td>
[日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/introduction)
</md-td>
<md-td>
日程包含一个确定的日期或者时间范围，是会议预定的基本实体，分为普通日程和重复性日程。
  
此外，还存在以下类型的日程：
- 例外日程：重复性日程中的某一个日程被修改后，与其他重复日程产生了区别，则称该日程为例外日程。
- 请假日程：一种特殊日程，在用户请假时，会在日历上显示请假日程。
</md-td>

</md-tr>
  
<md-tr>
<md-td>
[日程参与人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/introduction)
</md-td>
<md-td>
参与日程的对象，包括用户、群组、邮箱和会议室。
  
<md-alert type="tip" icon="none">
**说明**：日程添加会议室的方式，也是通过添加参与人进行的。  
</md-alert>
</md-td>

</md-tr>  
  
<md-tr>
<md-td>
[日程参与人群成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee-chat_member/list)
</md-td>
<md-td>
参与日程的群成员。
</md-td>

</md-tr>
  
<md-tr>
<md-td>
[忙闲](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/freebusy/list)
</md-td>
<md-td>
日历在某一时间段内的忙碌、空闲信息。
</md-td>

</md-tr>
  
<md-tr>
<md-td>
[请假](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/introduction)
</md-td>
<md-td>
给用户创建某一日期或者时间段的休假日程。
</md-td>

</md-tr>

<md-tr>
<md-td>
[日历设置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/setting/generate_caldav_conf)
</md-td>
<md-td>
给指定设备生成一个 CalDAV 账号密码，用于将客户端日历信息同步到本地设备日历。
</md-td>

</md-tr>
  
<md-tr>
<md-td>
[Exchange 绑定与解绑](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/introduction)
</md-td>
<md-td>
完成 Exchange 账户到客户端账户的绑定或解绑。
</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

在飞书客户端中日历资源如下：

- 图中①区域展示了用户日历，包括用户管理的日历和订阅的日历。
- 图中②区域展示了当前日历时间段内的日程忙闲信息。选中某一日程后，可以查看日程的内容、参与人、会议室等详细信息。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3cd0fd55d678fc4a11a5898bb0c31b3a_Fd6zREEaek.png?height=1360&lazyload=true&maxWidth=600&width=2882)


## 方法列表

以下提供了日历业务域内所有资源的 API 和事件列表。

:::note
文中表格涉及的 **商店** 是指商店应用，**自建** 是指企业自建应用。应用类型说明参见[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。
:::

### 日历

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

<md-text type="field-name" >[获取主日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/primary)

   `POST` /open-apis/calendar/v4/calendars/primary
  
   > 获取用户的主日历实体信息
  </md-text>

</md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv" tags="">获取日历、日程及忙闲信息</md-perm>

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

<md-text type="field-name" >[创建日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/create)</md-text>

   `POST` /open-apis/calendar/v4/calendars
  
   > 以当前身份创建一个日历实体

</md-td>

<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
  
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

<md-text type="field-name" >[删除日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/delete)</md-text>
  
`DELETE` /open-apis/calendar/v4/calendars/:calendar_id
  
  > 以当前身份去删除指定日历实体
</md-td>


<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

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

<md-text type="field-name" >[获取日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/get)</md-text>
  
`GET` /open-apis/calendar/v4/calendars/:calendar_id
 
  > 以当前身份获取指定日历实体
</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

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

<md-text type="field-name" >[获取日历列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/list)</md-text>
  
`GET` /open-apis/calendar/v4/calendars
>获取当前身份下的日历列表

</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
  
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

<md-text type="field-name" >[更新日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/patch)</md-text>
  
`PATCH` /open-apis/calendar/v4/calendars/:calendar_id
>以当前身份更新指定日历实体信息

</md-td>

<md-td>

 <md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

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

<md-text type="field-name" >[搜索日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/search)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/search

>以应用身份搜索日历信息

</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
  
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

<md-text type="field-name" >[订阅日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/subscribe)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/:calendar_id/subscribe

>以当前身份订阅指定日历

</md-td>

<md-td>

<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

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

<md-text type="field-name" >[取消订阅日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/unsubscribe)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/:calendar_id/unsubscribe

>以当前身份取订指定日历

</md-td>

<md-td>

<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
  
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

<md-text type="field-name" >[订阅日历变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/subscription)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/subscription

>与当前身份的日历资源建立事件订阅关系

</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

</md-td>

<md-td>

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

<md-text type="field-name" >[取消订阅日历变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/unsubscription)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/unsubscription

>取消与当前身份的日历资源建立事件订阅关系

</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

</md-td>

<md-td>

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

<md-th style="width: 18%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>
<md-th style="width: 18%;">触发时机</md-th>
<md-th style="width: 30%;">权限要求（满足任一）</md-th>
<md-th style="width: 18%;">事件类型</md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[日历变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/events/changed)</md-text>

</md-td>

<md-td>当订阅用户的日历列表有日历变动时</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
  
</md-td>

<md-td>

calendar.calendar.changed_v4

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

### 日历访问控制

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

<md-text type="field-name" >[创建访问控制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/create)

   `POST` /open-apis/calendar/v4/calendars/:calendar_id/acls
  
   > 以当前身份添加访问控制权限，即添加日历成员
  </md-text>

</md-td>

<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

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

<md-text type="field-name" >[删除访问控制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/delete)

   `DELETE` /open-apis/calendar/v4/calendars/:calendar_id/acls/:acl_id
  
   > 以当前身份删除日历的控制权限，即删除日历成员
  </md-text>

</md-td>

<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

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

<md-text type="field-name" >[获取访问控制列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/list)</md-text>
  
`GET` /open-apis/calendar/v4/calendars/:calendar_id/acls
  
  > 获取日历的控制权限列表，即日历成员列表
</md-td>


<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
  
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

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

<md-text type="field-name" >[订阅日历访问控制变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/subscription)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/:calendar_id/acls/subscription
 
  > 指定日历下的日历成员变更事件
</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
  
</md-td>

<md-td>

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

<md-text type="field-name" >[取消订阅日历访问控制变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/unsubscription)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/:calendar_id/acls/unsubscription
 
  > 取消监听指定日历下的日历成员变更事件
</md-td>

<md-td>


<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
 
</md-td>

<md-td>

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

<md-th style="width: 18%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>

<md-th style="width: 18%;">触发时机</md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 18%;">事件类型</md-th>

<md-th style="width: 8%;">商店</md-th>

<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[ACL 新建](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/events/created)</md-text>

</md-td>

<md-td>当被订阅的日历上有 ACL 被创建时</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
  
</md-td>

<md-td>

calendar.calendar.acl.created_v4

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

<md-text type="field-name" >[ACL 移除](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/events/deleted)</md-text>

</md-td>

<md-td>当被订阅的日历上有 ACL 被删除时</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
  
</md-td>

<md-td>

calendar.calendar.acl.deleted_v4

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

### 日程

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

<md-text type="field-name" >[创建日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/create)

   `POST` /open-apis/calendar/v4/calendars/:calendar_id/events
  
   > 在日历上创建一个日程
  </md-text>

</md-td>

<md-td>

  <md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
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

<md-text type="field-name" >[删除日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/delete)

   `DELETE` /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id
  
   > 删除日历上的一个日程
  </md-text>

</md-td>

<md-td>
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

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

<md-text type="field-name" >[获取日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/get)</md-text>
  
`GET` /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id
  
  > 获取日历上的一个日程信息
</md-td>


<md-td>
<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

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

<md-text type="field-name" >[获取日程列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list)</md-text>
  
`GET` /open-apis/calendar/v4/calendars/:calendar_id/events
 
  > 获取日历下的日程列表
</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
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

<md-text type="field-name" >[更新日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/patch)</md-text>
  
`PATCH` /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id
>更新日历上的一个日程

</md-td>

<md-td>

<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
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

<md-text type="field-name" >[搜索日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/search)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/:calendar_id/events/search
>以用户身份搜索某日历下的相关日程

</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
</md-td>

<md-td>

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

<md-text type="field-name" >[订阅日程变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/subscription)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/:calendar_id/events/subscription

>以用户身份订阅指定日历下的日程变更事件

</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
</md-td>

<md-td>

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

<md-text type="field-name" >[取消订阅日程变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/unsubscription)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/:calendar_id/events/unsubscription

>以用户身份取消订阅指定日历下的日程变更事件

</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
</md-td>

<md-td>

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

<md-th style="width: 18%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>

<md-th style="width: 18%;">触发时机</md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 18%;">事件类型</md-th>

<md-th style="width: 8%;">商店</md-th>

<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[日程变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/events/changed)</md-text>

</md-td>

<md-td>当被订阅的用户日历下有日程变更时</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
</md-td>

<md-td>

calendar.calendar.event.changed_v4

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

### 日程参与人

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

<md-text type="field-name" >[创建日程参与人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/create)

   `POST` /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees
  
   > 批量给日程添加参与人
  </md-text>

</md-td>

<md-td>
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
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

<md-text type="field-name" >[获取日程参与人列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/list)

   `GET` /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees
  
   > 获取日程的参与人列表
  </md-text>

</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
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

<md-text type="field-name" >[删除日程参与人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/batch_delete)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/batch_delete
  
  > 批量删除日程的参与人
</md-td>


<md-td>
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

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

### 日程参与人群成员


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

<md-text type="field-name" >[获取日程参与群成员列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee-chat_member/list)

   `GET` /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/:attendee_id/chat_members
  
   > 获取日程的群参与人的群成员列表
  </md-text>

</md-td>

<md-td>
<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
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

### 忙闲

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

<md-text type="field-name" >[查询忙闲](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/freebusy/list)

   `POST` /open-apis/calendar/v4/freebusy/list
  
   > 查询用户主日历或会议室的忙闲信息
  </md-text>

</md-td>

<md-td>
<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
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
### 请假

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

<md-text type="field-name" >[创建请假日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/create)

   `POST` /open-apis/calendar/v4/timeoff_events
  
   > 为指定用户创建一个请假日程
  </md-text>

</md-td>

<md-td>
<md-perm name="calendar:timeoff" desc="创建或删除请假日程" support_app_types="custom,isv" tags="">创建或删除请假日程</md-perm>
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

<md-text type="field-name" >[删除请假日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/delete)

   `DELETE` /open-apis/calendar/v4/timeoff_events/:timeoff_event_id
  
   > 删除一个指定的请假日程
  </md-text>

</md-td>

<md-td>

<md-perm name="calendar:timeoff" desc="创建或删除请假日程" support_app_types="custom,isv" tags="">创建或删除请假日程</md-perm>
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
### 日历设置

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

<md-text type="field-name" >[生成 CalDAV 配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/setting/generate_caldav_conf)

   `POST` /open-apis/calendar/v4/settings/generate_caldav_conf
  
   > 为当前用户生成一个 CalDAV 账号密码
  </md-text>

</md-td>

<md-td>
            <md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
            <md-perm name="calendar:setting:generate_caldav_conf" desc="生成 CalDAV 配置信息" support_app_types="custom" tags="">生成 CalDAV 配置信息</md-perm>
</md-td>

<md-td>

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
### Exchange 绑定与解绑

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

<md-text type="field-name" >[创建 Exchange 绑定关系](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/create)

   `POST` /open-apis/calendar/v4/exchange_bindings
  
   > 将 Exchange 账户绑定到飞书账户
  </md-text>

</md-td>

<md-td>
<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>
	
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
</md-td>

<md-td>

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

<md-text type="field-name" >[获取绑定状态](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/get)

   `GET` /open-apis/calendar/v4/exchange_bindings/:exchange_binding_id
  
   > 获取 Exchange 账户的绑定状态
  </md-text>

</md-td>

<md-td>

<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv"
	tags="">获取日历、日程及忙闲信息</md-perm>

</md-td>

<md-td>

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

<md-text type="field-name" >[解除 Exchange 绑定关系](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/delete)</md-text>
  
`DELETE` /open-apis/calendar/v4/exchange_bindings/:exchange_binding_id
  
  > 解除 Exchange 账户和飞书账户的绑定关系
</md-td>


<md-td>
<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-user" >user_access_token</md-tag>

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
