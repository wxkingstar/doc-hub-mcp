<!--
title: 原生审批任务概述
id: 7124649956745428995
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/task/introduction
updatedAt: 1745206964000
source: https://open.feishu.cn/document/server-docs/approval-v4/task/introduction
-->
# 原生审批任务概述

原生审批实例的流程中包含多个审批节点，审批节点内根据设置的审批人情况，会生成审批任务（一个审批人对应一个审批任务），使用原生审批任务 API，可以同意、拒绝、转交以及退回审批任务。

## 基础概念

### 审批任务 ID

每一个审批任务都有一个唯一标识，便于管理该任务。当你创建审批实例后，可以调用[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口，从返回结果的 task_list 参数中获取任务唯一标识（id）及任务的其他信息。

### 审批任务状态

在审批流转过程中，审批任务的状态包括：

- PENDING：审批中
- APPROVED：通过
- REJECTED：拒绝
- TRANSFERRED：已转交
- DONE：完成

### 审批方式

审批任务的审批方式分为多种，包括：

- AND：会签，同一个审批节点有多个审批人时，需要所有审批人均同意或拒绝任务。
- OR：或签，同一个审批节点有多个审批人时，仅需其中一个审批人同意或拒绝任务。
- AUTO_PASS：自动通过
- AUTO_REJECT：自动拒绝
- SEQUENTIAL：按顺序审批

## 字段说明

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 25%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >approval_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义 Code。获取方式：

- 调用[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)接口后，从响应参数 approval_code 获取。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。

**示例值**："7C468A54-8745-2245-9675-08B7C63E7A85"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >instance_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例 Code。获取方式：

- 调用[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)接口后，从响应参数 instance_code 获取。
- 调用[批量获取审批实例 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list)接口，获取所需的审批实例 Code。
- 调用[查询实例列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/query)，设置过滤条件查询指定的审批实例 Code。

**示例值**："81D31358-93AF-92D6-7425-01A5D67C4E71"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批人的用户 ID，ID 类型与查询参数 user_id_type 取值一致。

**示例值**："f7cb567e"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >comment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批意见

**示例值**："OK"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >task_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务 ID，调用[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)，从返回结果的 task_list 中获取所需的 id。

**示例值**："12345"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >form</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	如果审批定义的流程设计中添加了条件分支，则需要传入条件分支所需的控件数据（JSON 数组），否则会影响后续的分支条件流转。

**说明**：传值时需要将 JSON 序列化为字符串。参数示例值未进行转义，正确的传值示例可参见下文 **数据示例**。


**示例值**："[{\"id\":\"111\", \"type\": \"input\", \"value\":\"test\"}]"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::


## 数据示例

```json
{
    "approval_code": "7C468A54-8745-2245-9675-08B7C63E7A85",
    "instance_code": "81D31358-93AF-92D6-7425-01A5D67C4E71",
    "user_id": "f7cb567e",
    "comment": "OK",
    "task_id": "12345",
    "form": "[{\"id\":\"111\", \"type\": \"input\", \"value\":\"test\"}]"
}
```
