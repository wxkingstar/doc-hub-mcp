<!--
title: 用户任务状态变更
id: 7121534579333464092
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/event/user-task-status-change-event
updatedAt: 1724990077000
source: https://open.feishu.cn/document/server-docs/attendance-v1/event/user-task-status-change-event
-->
# 用户任务状态变更
:::html
<md-alert type="tip">
了解事件订阅的使用场景和配置流程，请点击查看 [事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)
</md-alert>
:::
**事件**

当用户任务变更后，推送该用户的任务状态变更消息。

**事件类型**

`attendance.user_task.updated_v1`

**事件体**
|名称|类型|描述|
|---|---|---|
|schema|string|事件模式|
|header|event_header|事件头|
|&emsp;∟event_id|string|事件 ID|
|&emsp;∟event_type|string|事件类型|
|&emsp;∟create_time|string|事件创建时间戳（单位：毫秒）|
|&emsp;∟token|string|事件 Token|
|&emsp;∟app_id|string|应用 ID|
|&emsp;∟tenant_key|string|租户 Key|
|event|-|事件体|
|&emsp;∟employee_id|string|[飞书管理后台](https://example.feishu.cn/admin/contacts/departmentanduser) > 组织架构 > 成员与部门 > 成员详情中的用户 ID|
|&emsp;∟employee_no|string|[飞书管理后台](https://example.feishu.cn/admin/contacts/departmentanduser) > 组织架构 > 成员与部门 > 成员详情中的工号|
|&emsp;∟group_id|string|考勤组 ID，可用于[按 ID 查询考勤组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/get) |
|&emsp;∟shift_id|string|班次 ID，可用于[按 ID 查询班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/get)|
|&emsp;∟date|int|日期，格式为yyyyMMdd|
|&emsp;∟status_changes|list|状态变更数组|
|&emsp;&emsp;∟before_status|string|变更前打卡结果，值为：【NoNeedCheck（无需打卡），SystemCheck（系统打卡），Normal（正常），Early（早退），Late（迟到），Lack（缺卡）】|
|&emsp;&emsp;∟current_status|string|变更后打卡结果，值为：【NoNeedCheck（无需打卡），SystemCheck（系统打卡），Normal（正常），Early（早退），Late（迟到），Lack（缺卡）】|
|&emsp;&emsp;∟before_supplement|string|变更前结果补充，值为：【None（无），ManagerModification（管理员修改），CardReplacement（补卡通过），ShiftChange（换班），Travel（出差），Leave（请假），GoOut（外出），CardReplacementApplication（补卡申请中），FieldPunch（外勤打卡）】|
|&emsp;&emsp;∟current_supplement|string|变更后打卡结果补充，值为：【None（无），ManagerModification（管理员修改），CardReplacement（补卡通过），ShiftChange（换班），Travel（出差），Leave（请假），GoOut（外出），CardReplacementApplication（补卡申请中），FieldPunch（外勤打卡）】|
|&emsp;&emsp;∟work_type|string|上下班状态变更，值为：【on（上班），off（下班）】
|&emsp;&emsp;∟index|string|任务中的第几次上下班
**事件示例**
```json
{
  "schema": "2.0",
  "header": {
    "event_id": "2a0b662d75f87508a016a8da8b225a46",
    "token": "drIibiox5ZEZl5UvuRL3Uf3LNwD0fB6e",
    "create_time": "1615381917559",
    "event_type": "attendance.user_task.updated_v1",
    "tenant_key": "2fce678eb60d1651",
    "app_id": "cli_a0c27934a1f8100b"
  },
  "event": {
    "date": 20210310,
    "employee_id": "2b68933a",
    "employee_no": "",
    "group_id": "6935645428507557915",
    "shift_id": "6938006252085739521",
    "status_changes": [
      {
        "before_status": "Normal",
        "before_supplement": "None",
        "current_status": "Late",
        "current_supplement": "None",
        "index": 1,
        "work_type": "on"
      }
    ],
    "task_id": "6936733176245026817",
    "time_zone": "Asia/Shanghai"
  }
}
```