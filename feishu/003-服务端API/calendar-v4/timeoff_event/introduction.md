<!--
title: 请假日程资源介绍
id: 7062619112195358724
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/introduction
updatedAt: 1712716383000
source: https://open.feishu.cn/document/server-docs/calendar-v4/timeoff_event/introduction
-->
#  请假日程资源介绍

请假日程是一种特殊日程，你可以调用请假资源 API 为用户创建或删除请假日程。在为用户创建请假日程后，除了会在日历上展示请假日程，还会在用户个人信息上展示请假信息。


##  字段说明

请假日程包含的属性说明如下。

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
<md-tr>
        <md-td>
        <md-text type="field-name" >timeoff_event_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        请假日程 ID。通过[创建请假日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/create)获取，后续可用于删除请假日程。

**示例值**："timeoff:XXXXXX-XXXX-0917-1623-aa493d591a39-XXXXXX"
        </md-td>
</md-tr>
    
    <md-tr>
        <md-td>
        <md-text type="field-name" >user_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        用户 ID。关于用户 ID 可参见[用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**示例值**："ou_XXXXXXXXXX"

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >timezone</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        时区信息。

**示例值**："Asia/Shanghai"
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >start_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
请假开始时间。支持以下任一格式：

- 秒级时间戳：通过时间戳设置的请假日程为普通日程，即按小时请假。取值示例 `1609430400`

- 日期格式：通过日期设置的请假日程为全天日程。取值示例 `2021-01-01`

注意：start_time 和 end_time 所选用的时间格式必须保持一致，否则无效。

**示例值**："2021-01-01"
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >end_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
请假结束时间。支持以下任一格式：

- 秒级时间戳：通过时间戳设置的请假日程为普通日程，即按小时请假。取值示例 `1609430400`

- 日期格式：通过日期设置的请假日程为全天日程。取值示例 `2021-01-01`

注意：start_time 和 end_time 所选用的时间格式必须保持一致，否则无效。

**示例值**："2021-01-01"
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >title</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        请假日程标题。
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >description</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        请假日程描述。
        </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::
###  数据示例
```json
{
    "timeoff_event_id": "timeoff:XXXXXX-XXXX-0917-1623-aa493d591a39-XXXXXX",
    "user_id": "ou_XXXXXXXXXX",
    "timezone": "Asia/Shanghai",
    "start_time": "2021-01-01",
    "end_time": "2021-01-01",
    "title": "请假中(全天) / 1-Day Time Off",
    "description": "若删除此日程，飞书中相应的“请假”标签将自动消失，而请假系统中的休假申请不会被撤销。"
}
```


