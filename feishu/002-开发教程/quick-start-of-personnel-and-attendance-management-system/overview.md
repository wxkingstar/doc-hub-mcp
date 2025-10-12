<!--
title: 简介
id: 7238816139733368835
fullPath: /home/quick-start-of-personnel-and-attendance-management-system/overview
updatedAt: 1736394848000
source: https://open.feishu.cn/document/quick-start-of-personnel-and-attendance-management-system/overview
-->
# 简介

本文介绍如何开发一个基于飞书开放平台提供的 [node-sdk](https://github.com/larksuite/node-sdk) 实现的人员及考勤管理网页系统，通过该教程，您可以了解如何实现以下功能：

- 开发一个[网页应用](/ssl:ttdoc/uYjL24iN/uITO4IjLykDOy4iM5gjM)
- 通过[事件订阅](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)实现消息自动推送
- 通过[应用免登](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/development-guide/step-3)实现自动获取用户信息
- 通过调用[通讯录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/resources) OpenAPI 实现部门及人员管理
- 通过互动[飞书卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)实现一键审批
- 通过[审批](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval-overview)一键同步日历并添加日程
- 通过[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)实现考勤数据自动录入和一键导出

:::note
本教程融合了以下子教程的实现逻辑，覆盖了完整的全链路场景，你可以根据实际需求学习以下分场景的教程内容，快速上手飞书应用的开发:
- [基于审批实现自动考勤管理](/ssl:ttdoc/home/automatic-attendance-management-based-on-approval/introduction)
- [基于网页应用实现人员部门管理](/ssl:ttdoc/home/quick-access-to-base/department-personnel-management-based-on-web-app/overview)
- [开发一个卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)
- [快速接入多维表格](/ssl:ttdoc/home/quick-access-to-base/preparation)
- [快速接入通讯录](/ssl:ttdoc/home/quick-access-to-contact-api/introduction)
:::

## 实现效果

:::html
<md-video src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4b02c3ab103700a66b2ac35411e1ed12_vmkEkP8miO.mp4" poster="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/50eb8b580967d4e6c985bce83c4dcc54_GO4illTrsR.jpeg?lazyload=true&width=2616&height=1396" Width="80%"/>
:::

## 操作流程

本文涉及的操作流程如下图所示：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f620e48b943b96d58e764cfe492076cd_b53FyOmBKe.png?height=208&lazyload=true&maxWidth=750&width=1023)



## 使用到的 OpenAPI 列表

本文需要调用以下 OpenAPI 实现所需能力。

:::html
<md-table>

<md-thead>

<tr>

<md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>


</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[列出记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/list)

   `GET` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records
  
  </md-text>

</md-td>
  
<md-td>
  <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" tags="">查看、评论和导出多维表格</md-perm>
  <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>
  
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[新增记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records
 
</md-td>

<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[新增数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables
  

</md-td>


<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

</md-tr>
 
<md-tr>

<md-td>

<md-text type="field-name" >[创建部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create)

   `POST` open-apis/contact/v3/departments
  
  </md-text>

</md-td>
  
<md-td>
	<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
	<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	<md-perm name="contact:department.base:readonly" desc="获取部门基础信息" support_app_types="custom,isv" tags="">获取部门基础信息</md-perm>
	<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>

</md-td>
  
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[获取子部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)

   `GET` open-apis/contact/v3/departments/:department_id/children
  
  </md-text>

</md-td>
  
<md-td>
	<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
	<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	<md-perm name="contact:department.base:readonly" desc="获取部门基础信息" support_app_types="custom,isv" tags="">获取部门基础信息</md-perm>
	<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>

</md-td>
  
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[获取单个部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get)

   `GET` open-apis/contact/v3/departments/:department_id
  
  </md-text>

</md-td>
  
<md-td>
	<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
	<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	<md-perm name="contact:department.base:readonly" desc="获取部门基础信息" support_app_types="custom,isv" tags="">获取部门基础信息</md-perm>
	<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>

</md-td>
  
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)</md-text>

`POST` /open-apis/approval/v4/instances
  

</md-td>

<md-td>

            <md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
            <md-perm name="approval:instance" desc="查看、创建、更新、删除原生审批实例相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除原生审批实例相关信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[查询主日历信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/primary)

   `POST` open-apis/calendar/v4/calendars/primary
  
  </md-text>

</md-td>
  
<md-td>
	<md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv" tags="">获取日历、日程及忙闲信息</md-perm>

</md-td>
  
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[创建日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/create)

   `POST` open-apis/calendar/v4/calendars/:calendar_id/events
  
  </md-text>

</md-td>
  
<md-td>
	<md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>

</md-td>
  
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[写入审批结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_approval/create)

   `POST` open-apis/attendance/v1/user_approvals
  
  </md-text>

</md-td>
  
<md-td>

	<md-perm name="attendance:task" desc="写入打卡数据" support_app_types="custom" tags="">写入打卡数据</md-perm>

</md-td>
  
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)

   `POST` open-apis/im/v1/messages
  
  </md-text>

</md-td>
  
<md-td>

<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" tags="">以应用的身份发消息</md-perm>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message:send" desc="发送消息V2" support_app_types="custom,isv" tags="history,offline">发送消息V2</md-perm>

</md-td>
  
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[延时更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)

   `POST` open-apis/interactive/v1/card/update
  
  </md-text>

</md-td>
  
<md-td>

无

</md-td>
  
<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>
  
</md-tr>
  
</md-tbody>
  
</md-table>
:::