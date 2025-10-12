<!--
title: 简介
id: 7065656714653171715
fullPath: /home/calendar-event-sync/prepare
updatedAt: 1688373724000
source: https://open.feishu.cn/document/calendar-event-sync/prepare
-->
# 简介

在安排工作日历日程的场景中，一般希望通过自动化的方式获取用户的日程安排，然后再基于用户的日程安排开发第三方功能或者系统。本教程基于飞书开放能力，实现自动获取指定身份（应用/用户）下的日历日程信息。可以快速实现如下基本功能：

- 存量日历/日程数据的获取。

- 增量日历/日程数据的获取。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df3ec90522cd26319cb6d05c14996ec3_RwVok6IooX.png?height=400&lazyload=true&maxWidth=600&width=752)

你可以基于以上基本功能，用于实现包括且不限于以下场景：

- 获取飞书日历日程信息，并同步到 Exchange 或 Google 等第三方系统。

- 监听并获取指定日历日程的变更信息。

- 基于飞书日历数据开发第三方系统。

## 操作流程

本文涉及的操作流程如下图所示：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/18a2995b8b4c54bd597707825afcd268_BrdSL41qWu.png?height=930&lazyload=true&maxWidth=750&width=918)

## 使用到的 API 列表

获取存量的日历和日程数据，需要直接调用获取日历和日程数据的接口，拉取全量数据；获取增量日历和日程数据，需要监听日历和日程资源的事件，收到事件通知后，再拉增量数据。

### 获取日历和日程数据 API

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 40%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 30%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**（选择其一）</md-td></md-th>


</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[获取日历列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/list)</md-text>
  
`GET` /open-apis/calendar/v4/calendars
>获取当前身份下的日历列表

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取日历、日程及忙闲信息</md-perm>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新日历及日程信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[订阅日历变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/subscription)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/subscription

>与当前身份的日历资源建立事件订阅关系

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取日历、日程及忙闲信息</md-perm>
<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新日历及日程信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-user">user_access_token</md-tag>

</md-td>

</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[获取日程列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list)</md-text>
  
`GET` /open-apis/calendar/v4/calendars/:calendar_id/events
 
  > 获取日历下的日程列表
</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取日历、日程及忙闲信息</md-perm>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新日历及日程信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[订阅日程变更事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/subscription)</md-text>
  
`POST` /open-apis/calendar/v4/calendars/:calendar_id/events/subscription

>以用户身份订阅指定日历下的日程变更事件

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取日历、日程及忙闲信息</md-perm>
<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新日历及日程信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-user">user_access_token</md-tag>

</md-td>

</md-tr>

  </md-tbody>

</md-table>

:::

### 监听日历和日程事件
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 20%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>

<md-th style="width: 25%;">触发时机</md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;">事件类型</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[日历变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/events/changed)</md-text>

</md-td>

<md-td>当订阅用户的日历列表有日历变动时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取日历、日程及忙闲信息</md-perm>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新日历及日程信息</md-perm>

</md-td>

<md-td>

calendar.calendar.changed_v4

</md-td>

</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[日程变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/events/changed)</md-text>

</md-td>

<md-td>当被订阅的用户日历下有日程变更时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取日历、日程及忙闲信息</md-perm>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新日历及日程信息</md-perm>

</md-td>

<md-td>

calendar.calendar.event.changed_v4

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::