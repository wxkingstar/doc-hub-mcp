<!--
title: 三方审批任务概述
id: 7125425410599796740
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_task/overview
updatedAt: 1745207098000
source: https://open.feishu.cn/document/server-docs/approval-v4/external_task/overview
-->
# 三方审批任务概述

审批业务提供了获取三方审批任务状态的开放能力，用于查询指定审批实例、指定用户或指定状态下的审批任务数据。

## 字段说明

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 30%;">名称</md-dt-th>
      <md-dt-th style="width: 15%;">类型</md-dt-th>
      <md-dt-th style="width: 55%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >approval_codes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	三方审批定义 Code，用于指定只获取这些定义下的数据。获取方式：

- 调用[创建三方审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_approval/create)时，会返回审批定义 Code。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。

**示例值**：["E78F1022-A166-447C-8320-E151DA90D70F"]

**数据校验规则**：

- 最大长度：`20`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >instance_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	三方审批实例 ID，用于指定只获取这些实例下的数据，最多支持 20 个。

**说明**：三方审批实例 ID 是调用[同步三方审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_instance/create)、[校验三方审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_instance/check)时自定义的实例 ID（instance_id）。

**示例值**：["oa_159160304"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	审批人 user_id，用于指定只获取这些用户的数据。获取方式参见[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。

**示例值**：["112321"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务状态，用于指定获取该状态下的数据。

**示例值**："PENDING"

**可选值有**：
<md-enum>
<md-enum-item key="PENDING" >审批中</md-enum-item>
<md-enum-item key="APPROVED" >审批流程结束，结果为同意</md-enum-item>
<md-enum-item key="REJECTED" >审批流程结束，结果为拒绝</md-enum-item>
<md-enum-item key="TRANSFERRED" >任务转交</md-enum-item>
<md-enum-item key="DONE" >任务通过但审批人未操作。审批人看不到该任务时，如需查看可抄送至该审批人。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

## 数据示例

```json
{
    "approval_codes": [
        "E78F1022-A166-447C-8320-E151DA90D70F"
    ],
    "instance_ids": [
        "oa_159160304"
    ],
    "user_ids": [
        "112321"
    ],
    "status": "PENDING"
}
```

