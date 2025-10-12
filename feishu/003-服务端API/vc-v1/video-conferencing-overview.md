<!--
title: 视频会议概述
id: 7043721274330759171
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/video-conferencing-overview
updatedAt: 1731048811000
source: https://open.feishu.cn/document/server-docs/vc-v1/video-conferencing-overview
-->
# 概述


## 业务介绍

视频会议（Video Conferencing，简称 VC）是指飞书音视频会议业务域，包括 [飞书视频会议](https://www.feishu.cn/product/video) 和 [飞书会议室](https://www.feishu.cn/solutions/feishu-rooms-overview) 解决方案，为不同区域的用户提供完善、便捷的高质量音视频交互体验，满足线上实时沟通协作的需求。通过视频会议 API，你可以实现多种功能，例如：

- 会议预约，如预约会议、更新会议等
- 会议操作，如邀请参会人、设置主持人、结束会议等
- 会议录制，如开启/停止录制、获取录制文件等
- 会议报告，如获取会议数据报告、Top 用户列表等
- 会议室，如查询会议室、创建会议室、更新会议室等
- 会议室层级，如查询会议室层级、创建会议室层级等
- 会议室配置，如设置背景图、设置数字标牌等
- 导出，如导出会议明细数据、参会人明细数据等


### 接入流程

:::html

<md-table>

<md-thead>

<md-tr>

<md-th style="width: 5%;"></md-th>
<md-th style="width: 25%;">步骤</md-th>

<md-th style="width: 70%;">介绍</md-th>

</md-tr>

</md-thead>

<md-tbody>

<md-tr>
<md-td>1</md-td>
<md-td>创建一个应用</md-td>

<md-td>
- 如需创建企业自建应用，可参考 [自建应用的开发流程](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process) 
- 如需创建应用商店应用，可参考 [开发和上架应用商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYzNwEjL2cDMx4iN3ATM)
</md-td>
</md-tr>
  
<md-tr>
<md-td>2</md-td>
<md-td>调用 API，对视频会议进行操作</md-td>

<md-td>
调用 API 前，你需要先获取访问凭证并开启对应的权限，详情参见 [如何调用服务端API](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)

你还可以在 [API 调试台![API cn.svg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/90b013d1fc7c191381d3edd6cf147707_3VtIkELbfg.svg?lazyload=true&width=87&height=24)](https://open.feishu.cn/api-explorer?from=guide)中快速调试这些 API ，使用方法参见[API 调试台使用指南](/ssl:ttdoc/tools-and-resources/api-explorer-guide)。
</md-td>
</md-tr>
  
  
<md-tr>
<md-td>3</md-td>
<md-td>监听事件，获知视频会议的变化</md-td>

<md-td>
监听事件前，你需要先申请相应的权限，详情参见 [事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。目前仅通过开放平台进行预约的会议能够监听到相关事件，详情参见[预约会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/apply)。
</md-td>
</md-tr>

</md-tbody>

</md-table>

:::

## 资源介绍

视频会议业务域以“资源”为中心进行开放，资源的关系图如下：

![视频会议概述](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/225c245125baa5ebdfdde720015fb22d_XD7G2Bh4iY.png?lazyload=true&width=4236&height=1635)

:::html

视频会议的相关资源定义如下：
<md-table>
<md-thead>
<tr>
<md-th style="width: 20%;">资源</md-th>
<md-th style="width: 80%;">资源定义</md-th>
</tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>
[预约会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/schedule-meeting-overview)
</md-td>
<md-td>
用户可以预约会议，提前设置参会成员和会议权限，并获取会议信息
</md-td>
</md-tr>

<md-tr>
<md-td>
[会议操作](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/meeting-overview)
</md-td>
<md-td>
用户可以在会议中进行邀请参会成员、移除参会成员和设置主持人等操作
</md-td>
</md-tr>

<md-tr>
<md-td>
[会议录制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/recording-overview)
</md-td>
<md-td>
用户可以录制一场会议，在会议结束后获得会议录制文件链接
</md-td>
</md-tr>
  
  
<md-tr>
<md-td>
[会议报告](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/report/meeting-report-overview)
</md-td>
<md-td>
会议报告用于记录一段时间内租户会议的使用情况，包括会议数、会议时长和参会人数等信息
</md-td>
</md-tr>  
  
<md-tr>
<md-td>
[会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/room-overview)
</md-td>
<md-td>
用户可以进行查询会议室、创建会议室、更新会议室、删除会议室等操作
</md-td>
</md-tr> 

<md-tr>
<md-td>
[会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/room-level-overview)
</md-td>
<md-td>
用户可以进行查询会议室层级、创建会议室层级、更新会议室层级等操作
</md-td>
</md-tr> 
  
  
  <md-tr>
<md-td>
[会议室配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/scope_config/room-configuration-overview)
</md-td>
<md-td>
会议室配置用于对飞书会议室的背景设置、资源管理等进行配置
  
</md-td>
</md-tr>
  
  <md-tr>
<md-td>
[导出](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/export-overview)
</md-td>
<md-td>
用于导出一段时间内租户的会议数据，包括会议明细、参会人明细、会议室预定数据、参会人会议质量数据等
  
</md-td>
</md-tr>
  

</md-tbody>

</md-table>

:::

以下将详细介绍每个资源的字段、方法、事件。

### 资源：预约会议
查看[资源字段及示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/schedule-meeting-overview)

#### 方法列表
>  “商店”代表 [应用商店应用](/ssl:ttdoc/home/app-types-introduction/overview)；“自建”代表 [企业自建应用](/ssl:ttdoc/home/app-types-introduction/overview)
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 10%;">权限要求（满足任一）</md-th>

<md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 5%;">商店</md-th>
<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[预约会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/apply)</md-text>
  
`POST` /open-apis/vc/v1/reserves/apply
>预约一场视频会议

  </md-text>

</md-td>

<md-td><md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新会议预约信息</md-perm>

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

<md-text type="field-name" >[更新会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/update)</md-text>
  
`PUT` /open-apis/vc/v1/reserves/:reserve_id
>更新一场已预约的视频会议配置，包括会议主题、会议权限配置等
</md-td>


<md-td><md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新会议预约信息</md-perm>

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

<md-tr>

<md-td>

<md-text type="field-name" >[删除预约](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/delete)</md-text>
  
`DELETE`/open-apis/vc/v1/reserves/:reserve_id
>删除一场已预约的视频会议
</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新会议预约信息</md-perm>


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

<md-text type="field-name" >[获取预约](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/get)</md-text>
  
`GET`/open-apis/vc/v1/reserves/:reserve_id
>获取一场已预约的视频会议的详情，包括会议 ID、会议链接、会议权限
</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议预约信息</md-perm>


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

<md-text type="field-name" >[获取活跃会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/get_active_meeting)</md-text>
  
`GET`/open-apis/vc/v1/reserves/:reserve_id/get_active_meeting
>获取一场进行中的预约会议详情，包括参会人数、参会人详情等

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议预约信息</md-perm>

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


### 资源：会议

查看[资源字段及示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/meeting-overview)

#### 方法列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 10%;">权限要求（满足任一）</md-th>

<md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 5%;">商店</md-th>
<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[获取会议详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/get)</md-text>

`GET` /open-apis/vc/v1/meetings/:meeting_id
  
>获取一个会议的详细数据，包括会议主题、会议 ID、会议链接、开始时间、会议状态、参会人列表等

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

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

<md-text type="field-name" >[获取与会议号相关联的会议列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/list_by_no)</md-text>

  `GET` /open-apis/vc/v1/meetings/list_by_no
  
>获取指定时间范围会议号关联的会议简要信息列表

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

<md-tag ype="token-tenant">tenant_access_token</md-tag>
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

<md-text type="field-name" >[邀请参会人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/invite)</md-text>

  `PATCH` /open-apis/vc/v1/meetings/:meeting_id/invite
  
>邀请参会人加入会议

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新会议信息</md-perm>

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

<md-text type="field-name" >[移除参会人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/kickout)</md-text>

`POST` /open-apis/vc/v1/meetings/:meeting_id/kickout
  
>将参会人从会议中移除

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新会议信息</md-perm>

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

<md-text type="field-name" >[设置主持人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/set_host)</md-text>

  `PATCH` /open-apis/vc/v1/meetings/:meeting_id/set_host
  
>将某一参会人设置为主持人

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新会议信息</md-perm>

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

<md-text type="field-name" >[结束会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/end)</md-text>

`PATCH` /open-apis/vc/v1/meetings/:meeting_id/end
>结束一场正在进行的会议

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新会议信息</md-perm>

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

<md-th style="width: 20%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>

<md-th style="width: 20%;">触发时机</md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;">事件类型</md-th>

<md-th style="width: 5%;">商店</md-th>

<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[会议开始](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/meeting_started)</md-text>

</md-td>

<md-td>会议被开始时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

vc.meeting.meeting_started_v1

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

<md-text type="field-name" >[会议结束](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/meeting_ended)</md-text>

</md-td>

<md-td>会议被结束时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

vc.meeting.meeting_ended_v1

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

<md-text type="field-name" >[加入会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/join_meeting)</md-text>

</md-td>

<md-td>有参会人加入会议时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

vc.meeting.join_meeting_v1

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

<md-text type="field-name" >[离开会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/leave_meeting)</md-text>

</md-td>

<md-td>有参会人离开会议时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

vc.meeting.leave_meeting_v1

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

<md-text type="field-name" >[录制开始](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/recording_started)</md-text>

</md-td>

<md-td>录制开始时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

vc.meeting.recording_started_v1

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

<md-text type="field-name" >[录制停止](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/recording_ended)</md-text>

</md-td>

<md-td>录制停止时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

vc.meeting.recording_ended_v1

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

<md-text type="field-name" >[录制完成](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/recording_ready)</md-text>

</md-td>

<md-td>录制文件上传完毕时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

vc.meeting.recording_ready_v1

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

<md-text type="field-name" >[屏幕共享开始](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/share_started)</md-text>

</md-td>

<md-td>屏幕共享开始时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

vc.meeting.share_started_v1

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

<md-text type="field-name" >[屏幕共享结束](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/share_ended)</md-text>

</md-td>

<md-td>屏幕共享结束时</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议信息</md-perm>

</md-td>

<md-td>

vc.meeting.share_ended_v1

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

### 资源：录制

查看[资源字段及示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/recording-overview)

#### 方法列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 10%;">权限要求（满足任一）</md-th>

<md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 5%;">商店</md-th>
<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[开始录制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/start)</md-text>

`PATCH` /open-apis/vc/v1/meetings/:meeting_id/recording/start
  
>在会议中开始录制

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN#29943da9">更新会议录制信息</md-perm>

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

<md-text type="field-name" >[停止录制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/stop)</md-text>

  `PATCH` /open-apis/vc/v1/meetings/:meeting_id/recording/stop
  
>在会议中停止录制

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN#29943da9">更新会议录制信息</md-perm>

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

<md-text type="field-name" >[获取录制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/get)</md-text>

  `GET` /open-apis/vc/v1/meetings/:meeting_id/recording
  
>获取一个会议的录制文件

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN#29943da9">获取会议录制信息</md-perm>

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

<md-text type="field-name" >[授权录制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/set_permission)</md-text>

`PATCH` /open-apis/vc/v1/meetings/:meeting_id/recording/set_permission
  
>将一个会议的录制文件授权给组织、用户或公开到公网

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN#29943da9">更新会议录制信息</md-perm>


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



### 资源：会议报告
查看[资源字段及示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/report/meeting-report-overview)

#### 方法列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 10%;">权限要求（满足任一）</md-th>

<md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 5%;">商店</md-th>
<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[获取会议报告](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/report/get_daily)</md-text>

`GET` /open-apis/vc/v1/reports/get_daily
  
>获取一段时间内组织的每日会议使用报告，包括总会议数量、总会议时长、总参会人数等

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议报告</md-perm>

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

<md-text type="field-name" >[获取 Top 用户列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/report/get_top_user)</md-text>

  `GET` /open-apis/vc/v1/reports/get_top_user
  
>获取一段时间内组织内会议使用的 Top 用户列表

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取会议报告</md-perm>

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

### 资源：会议室

查看[资源字段及示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/room-overview)

#### 方法列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 10%;">权限要求（满足任一）</md-th>

<md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**（选择其一）</md-td></md-th>

<md-th style="width: 5%;">商店</md-th>
<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>
  
<md-tr>

  <md-td>
  
  <md-text type="field-name" >[查询会议室列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/list)</md-text>
  
  
  `GET` /open-apis/vc/v1/rooms
    
  >查询某个会议室层级下会议室列表
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[查询会议室详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/get)</md-text>
  
  
  `GET` /open-apis/vc/v1/rooms/:room_id
    
  >使用会议室ID查询会议室详情
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[批量查询会议室详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/mget)</md-text>
  
  
  `POST` /open-apis/vc/v1/rooms/mget

  >使用会议室ID批量查询会议室详情
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[创建会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/create)</md-text>
  
  
  `POST` /open-apis/vc/v1/rooms
    
  >用于创建会议室
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[更新会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/patch)</md-text>
  
  
  `PATCH` /open-apis/vc/v1/rooms/:room_id
    
  >用于更新会议室
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[删除会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/delete)</md-text>
  
  
  `DELETE` /open-apis/vc/v1/rooms/:room_id
    
  >用于删除会议室
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[搜索会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/search)</md-text>
  
  
  `POST` /open-apis/vc/v1/rooms/search
    
  >用于搜索会议室
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>

  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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


### 资源：会议室层级

查看[资源字段及示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/room-level-overview)

#### 方法列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 10%;">权限要求（满足任一）</md-th>

<md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**（选择其一）</md-td></md-th>

<md-th style="width: 5%;">商店</md-th>
<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

  <md-td>
  
  <md-text type="field-name" >[查询会议室层级列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/list)</md-text>
  
  
  `GET` /open-apis/vc/v1/room_levels
    
  >查询某个会议室层级下的子层级列表
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[查询会议室层级详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/get)</md-text>
  
  
  `GET` /open-apis/vc/v1/room_levels/:room_level_id

  >使用会议室层级ID查询会议室层级详情
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[批量查询会议室层级详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/mget)</md-text>
  
  
  `POST` /open-apis/vc/v1/room_levels/mget

  >使用会议室层级ID批量查询会议室层级详情
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[创建会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/create)</md-text>
  
  
  `POST` /open-apis/vc/v1/room_levels
    
  >用于创建会议室层级
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[更新会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/patch)</md-text>
  
  
  `PATCH` /open-apis/vc/v1/room_levels/:room_level_id
    
  >用于更新会议室层级
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[删除会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/del)</md-text>
  
  
  `POST` /open-apis/vc/v1/room_levels/del
    
  >用于删除会议室层级
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  
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
  
  <md-text type="field-name" >[搜索会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/search)</md-text>
  
  
  `POST` /open-apis/vc/v1/room_levels/search
    
  >用来搜索会议室层级
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>

  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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



### 资源：会议室配置

查看[资源字段及示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/scope_config/room-configuration-overview)

#### 方法列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 10%;">权限要求（满足任一）</md-th>

<md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**（选择其一）</md-td></md-th>

<md-th style="width: 5%;">商店</md-th>
<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[设置会议室配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/scope_config/create)</md-text>


`POST` /open-apis/vc/v1/scope_config
  
>设置某个会议层级范围下或者某个会议室的配置

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>

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
  
  <md-text type="field-name" >[查询会议室配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/scope_config/get)</md-text>
  
  
  `GET` /open-apis/vc/v1/scope_config
    
  >查询某个会议层级范围下或者某个会议室的配置
  
  </md-td>
  
  <md-td>
  
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新视频会议室信息</md-perm>
  <md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">获取视频会议室信息</md-perm>
  
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


### 资源：导出

查看[资源字段及示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/export-overview)

#### 方法列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 70%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 10%;">权限要求（满足任一）</md-th>

<md-th style="width: 10%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**（选择其一）</md-td></md-th>

<md-th style="width: 5%;">商店</md-th>
<md-th style="width: 5%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[查询导出任务结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/get)</md-text>


`GET` /open-apis/vc/v1/exports/:task_id
  
>查看异步导出的进度

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">导出视频会议信息</md-perm>

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

<md-text type="field-name" >[导出会议明细](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/meeting_list)</md-text>


`POST` /open-apis/vc/v1/exports/meeting_list
  
>导出会议明细

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">导出视频会议信息</md-perm>

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

<md-text type="field-name" >[导出参会人明细](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/participant_list)</md-text>


`POST` /open-apis/vc/v1/exports/participant_list
  
>导出一个会议的参会人详情列表

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">导出视频会议信息</md-perm>

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

<md-text type="field-name" >[导出参会人会议质量数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/participant_quality_list)</md-text>


`POST` /open-apis/vc/v1/exports/participant_quality_list
  
>导出一场会议一个参会人的音视频和共享质量数据

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">导出视频会议信息</md-perm>

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

<md-text type="field-name" >[导出会议室预定数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/export/resource_reservation_list)</md-text>


`POST` /open-apis/vc/v1/exports/resource_reservation_list
  
>导出会议室预定数据

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">导出视频会议信息</md-perm>

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
