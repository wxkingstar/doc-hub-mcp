<!--
title: 请假审批
id: 7013340088257413148
fullPath: /ukTMukTMukTM/uIDO24iM4YjLygjN/event/leave
updatedAt: 1747722190000
source: https://open.feishu.cn/document/server-docs/approval-v4/event/special-event/leave
-->
# 请假审批

审批定义的表单包含 **请假控件组** 时，该定义下的审批实例在 **通过** 或者 **通过并撤销** 时，会触发该事件。

## 前提条件

- 应用已配置事件订阅，了解事件订阅可参见[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。

- 应用已调用[订阅审批事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/subscribe)接口，订阅了审批实例对应的审批定义 Code。

## 使用说明

订阅该事件（事件类型为 leave_approval）后，可在如下场景接收到事件：

- 请假审批通过时，会收到 2 条事件消息，其事件类型（type）分别为 `leave_approval`、`leave_approvalV2`，这 2 条事件包含的 `uuid` 参数值不同，`instance_code` 参数值相同。你可以根据需要选择任一事件消息获取请假审批通过的详细数据。
- 请假审批通过并撤销时，会收到 1 条事件消息，事件类型（type）为 `leave_approval_revert`。

## 事件

:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>事件类型</md-th>
      <md-td>leave_approval</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
    <md-th>
            权限要求
            <md-tooltip type="info">订阅该事件所需的权限，开启其中任意一项权限即可订阅</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
    </md-th>
      <md-td>
            <md-perm name="approval:approval:readonly" desc="访问审批应用" support_app_types="custom,isv" tags="">访问审批应用</md-perm>
			<md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
      </md-td>
    </md-tr>

    <md-tr>
      <md-th>推送方式</md-th>
      <md-td>
            <md-tag mode="inline" type="push-webhook" href="/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM" >Webhook</md-tag>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 请假审批通过事件

### 事件体（事件类型为 leave_approval）

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th>字段</md-dt-th>
<md-dt-th>数据类型</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>ts</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件发送时间。包含小数的秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>uuid</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件的唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件 Token，即应用的 Verification Token。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>固定取值 `event_callback`。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>event</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>事件详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>app_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用的 App ID。可调用[获取应用信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/application/get)接口查询应用详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>approval_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批定义 Code。可调用[查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get)接口查询审批定义详情。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>instance_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批实例 Code。可调用[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口查询审批实例详情。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>employee_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批提交人的 user_id。你可以调用[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)接口，通过 user_id 获取用户信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>open_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批提交人的 open_id。你可以调用[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)接口，通过 open_id 获取用户信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>start_time</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>审批开始时间，秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>end_time</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>审批结束时间，秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>请假类型。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_start_time</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>请假开始时间。示例格式：2025-01-14 00:00:00</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_end_time</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>请假结束时间。示例格式：2025-01-14 00:00:00</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_interval</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>请假时长。单位：秒</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_unit</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>请假单位。可能值有：

- 1：天
- 2：半天
- 3：小时
- 4：半小时
- 5：分钟</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_reason</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>请假事由。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>tenant_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>租户 Key，是企业的唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件类型。固定值 `leave_approval`</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

### 事件体示例（事件类型为 leave_approval）

```json
{
  "ts": "1502199207.7171419",
  "uuid": "bc447199585340d1f3728d26b1c0297a",
  "token": "41a9425ea7df4536a7623e38fa321bae",
  "type": "event_callback",
  "event": {
    "app_id": "cli_9e28cb7ba56a1234",
    "approval_code": "59558CEE-CEF4-45C9-1234-UVDE8BEC1234",
    "instance_code": "CEF48CEE-CEF4-45C9-1234-DCBF8BEC1234",
    "employee_id": "g6964xxx",
    "open_id": "ou_xxx",
    "start_time": 1589527346,
    "end_time": 1589527354,
    "leave_type": "事假",
    "leave_start_time": "2024-09-05 12:00:00",
    "leave_end_time": "2024-09-07 00:00:00",
    "leave_interval": 129600,
    "leave_unit": 2,
    "leave_reason": "请假审批",
    "tenant_key": "bd6ae59e1xxx",
    "type": "leave_approval"
  }
}
```

### 事件体（事件类型为 leave_approvalV2）

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th>字段</md-dt-th>
<md-dt-th>数据类型</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>ts</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件发送时间。包含小数的秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>uuid</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件的唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件 Token，即应用的 Verification Token。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>固定取值 `event_callback`。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>event</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>事件详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>app_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用的 App ID。可调用[获取应用信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/application/get)接口查询应用详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>approval_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批定义 Code。可调用[查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get)接口查询审批定义详情。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>instance_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批实例 Code。可调用[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口查询审批实例详情。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>i18n_resources</md-dt-td>
<md-dt-td>string[]</md-dt-td>
<md-dt-td>请假类型所选项的国际化文案。

- 参数 is_default 表示当前语言是否为默认语言。
- 参数 locale 表示当前的语言，例如 zh_cn 代表中文。
- 参数 texts 包含了国际化文案。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>请假类型，需要根据该参数返回的数值，从 `i18n_resources` 参数中获取对应的类型文案。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>start_time</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>审批开始时间，秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>end_time</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>审批结束时间，秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_certification</md-dt-td>
<md-dt-td>string[]</md-dt-td>
<md-dt-td>请假证明材料。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_detail</md-dt-td>
<md-dt-td>string[]</md-dt-td>
<md-dt-td>请假详情。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_difficult_labour</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是否难产。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_family_relation_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>亲属类型。可能值有：
  
- 0：未知
- 1：父母
- 2：子女
- 3：配偶
- 4：兄弟姐妹
- 5：继父母
- 7：配偶父母
- 8：祖父母
- 9：外祖父母</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_feeding_arrive_late</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>上班晚到时间。哺乳假相关参数。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_feeding_leave_early</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>下班早走时间。哺乳假相关参数。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_feeding_rest_daily</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>每日休息时间。哺乳假相关参数。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_infant_num</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>胎儿数量。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_interval</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>请假时长。单位：秒</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_pregnancy_age</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>怀孕月数。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_pregnancy_check_up</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是否参加孕前检查。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_premarital_check_up</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是否参加婚前检查。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_range</md-dt-td>
<md-dt-td>string[]</md-dt-td>
<md-dt-td>具体的请假时间段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_reason</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>请假事由。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_start_time</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>请假开始时间。示例格式：2025-01-14 00:00:00</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_end_time</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>请假结束时间。示例格式：2025-01-14 00:00:00</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>leave_unit</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>请假最小时长。可能值有：

- HALF_DAY：半天
- DAY：天
- HOUR：小时
- HALF_HOUR：半小时
- MINUTE：分钟</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批提交人的 user_id。你可以调用[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)接口，通过 user_id 获取用户信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>open_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批提交人的 open_id。你可以调用[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)接口，通过 open_id 获取用户信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>origin_instance_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>销假单关联的原始数据。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>tenant_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>租户 Key，是企业的唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件类型。固定值 `leave_approvalV2`</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

### 事件体示例（事件类型为 leave_approvalV2）

```json
{
  "ts": "1502199207.7171419",
  "uuid": "bc447199585340d1f3728d26b1c0297a",
  "token": "41a9425ea7df4536a7623e38fa321bae",
  "type": "event_callback",
  "event": {
    "app_id": "cli_9e28cb7ba56a1234",
    "approval_code": "59558CEE-CEF4-45C9-1234-UVDE8BEC1234",
    "instance_code": "CEF48CEE-CEF4-45C9-1234-DCBF8BEC1234",
    "start_time": 1589527346,
    "end_time": 1589527354,
    "i18n_resources": "[{is_default=true,locale=zh_cn,texts={@i18n@7276381556766212099=事假}}]",
    "leave_name": "@i18n@7276381556766212099",
    "leave_certification": [],
    "leave_detail": "[[2024-09-05 13:30:00,2024-09-05 18:00:00],[2024-09-06 09:00:00,2024-09-06 18:00:00]]",
    "leave_difficult_labour": "",
    "leave_family_relation_type": "",
    "leave_start_time": "2024-09-05 00:00:00",
    "leave_end_time": "2024-09-07 00:00:00",
    "leave_feeding_arrive_late": 0,
    "leave_feeding_leave_early": 0,
    "leave_feeding_rest_daily": 0,
    "leave_infant_num": "",
    "leave_interval": 129600,
    "leave_pregnancy_age": "",
    "leave_pregnancy_check_up": "",
    "leave_premarital_check_up": "",
    "leave_range": "[[2024-09-05 13:30:00,2024-09-05 18:00:00],[2024-09-06 09:00:00,2024-09-06 18:00:00]]",
    "leave_reason": "请假审批",
    "leave_unit": "HALF_DAY",
    "user_id": "g6964xxx",
    "open_id": "ou_xxx",
    "origin_instance_code": "",
    "tenant_key": "bd6ae59e1xxx",
    "type": "leave_approvalV2"
  }
}
```

## 请假审批通过并撤销事件

当请假审批事件已通过，但又被撤销时，触发该事件并向订阅事件的应用发送以下事件体数据。

### 事件体

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th>字段</md-dt-th>
<md-dt-th>数据类型</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>ts</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件发送时间。包含小数的秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>uuid</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件的唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件 Token，即应用的 Verification Token。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>固定取值 `event_callback`。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>event</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>事件详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>app_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用的 App ID。可调用[获取应用信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/application/get)接口查询应用详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>instance_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批实例 Code。可调用[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口查询审批实例详情。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>approval_code</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>审批定义 Code。可调用[查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get)接口查询审批定义详情。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>operate_time</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>撤销操作时间，秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>tenant_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>租户 Key，是企业的唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>事件类型。固定值 `leave_approval_revert`</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

### 事件体示例


```json
{
  "ts": "1502199207.7171419",
  "uuid": "bc447199585340d1f3728d26b1c0297a",
  "token": "41a9425ea7df4536a7623e38fa321bae",
  "type": "event_callback",
  "event": {
    "app_id": "cli_9e28cb7ba56a1234",
    "tenant_key": "bd6ae59e1xxx",
    "type": "leave_approval_revert",
    "instance_code": "3CC91234-E23E-4DD7-1234-164D737C1234",
    "approval_code": "5B432123-848C-49BD-1234-11EF0Exxx",
    "operate_time": 1564590532,
  }
}
```
### 事件订阅示例代码（以 leave_approval 事件为例）

事件订阅流程可参考：[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)，新手入门可参考：[教程](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/introduction)

:::html
<div style="margin-bottom: 4px;display: flex;column-gap: 4px;align-items: center;">
  <md-text type='field-name'>订阅方式</md-text>
  <md-tooltip>
    <ul class="md_render-table_solid md_render-table">
      <li><b>长连接方式（推荐）：</b>无需发布到公网地址，在本地开发环境中即可接收事件回调，且无需处理加解密逻辑。</li>
      <li><b>发送至开发者服务器：</b>需要提供服务器公网地址。</li>
    </ul>
  </md-tooltip>
</div>
:::

:::html
<md-code-tabs>
  <md-code-tab-group title="使用长连接接收事件">
        
    <md-code-tab-panel sdkType="golang-sdk">
package main

import (
        "context"
        "fmt"

        larkcore "github.com/larksuite/oapi-sdk-go/v3/core"
        larkevent "github.com/larksuite/oapi-sdk-go/v3/event"
        "github.com/larksuite/oapi-sdk-go/v3/event/dispatcher"
        "github.com/larksuite/oapi-sdk-go/v3/service/approval/old"
        larkws "github.com/larksuite/oapi-sdk-go/v3/ws"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
        // 注册事件 Register event
        eventHandler := dispatcher.NewEventDispatcher("", "").
                OnCustomizedEvent("leave_approval", func(ctx context.Context, event *larkevent.EventReq) error {
                        fmt.Printf("[ OnCustomizedEvent access ], type: message, data: %s\n", string(event.Body))
                        return nil
                })

        // 构建 client Build client
        cli := larkws.NewClient("YOUR_APP_ID", "YOUR_APP_SECRET",
                larkws.WithEventHandler(eventHandler),
                larkws.WithLogLevel(larkcore.LogLevelDebug),
        )

        // 建立长连接 Establish persistent connection
        err := cli.Start(context.Background())

        if err != nil {
                panic(err)
        }
}

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="python-sdk">
# SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development
import lark_oapi as lark


def do_customized_event(data: lark.CustomizedEvent) -> None:
    print(f'[ do_customized_event access ], type: message, data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p1_customized_event("leave_approval", do_customized_event) \
    .build()


def main():
    # 构建 client Build client
    cli = lark.ws.Client("APP_ID", "APP_SECRET",
                        event_handler=event_handler, log_level=lark.LogLevel.DEBUG)
    # 建立长连接 Establish persistent connection
    cli.start()

if __name__ == "__main__":
    main()

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="java-sdk">

package com.example.sample;

import java.nio.charset.StandardCharsets;
import com.lark.oapi.core.request.EventReq;
import com.lark.oapi.event.CustomEventHandler;
import com.lark.oapi.event.EventDispatcher;
import com.lark.oapi.ws.Client;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
public class Sample {
    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("", "")
            .onCustomizedEvent("leave_approval", new CustomEventHandler() {
                @Override
                public void handle(EventReq event) throws Exception {
                    System.out.printf("[ onCustomizedEvent access ], type: message, data: %s\n", new String(event.getBody(), StandardCharsets.UTF_8));
                }
            })
            .build();

    public static void main(String[] args) {
        // 构建 client Build client
        Client client = new Client.Builder("APP_ID", "APP_SECRET")
                .eventHandler(EVENT_HANDLER)
                .build();
        // 建立长连接 Establish persistent connection
        client.start();
    }
}
    </md-code-tab-panel>

    <md-code-tab-panel sdkType="nodejs-sdk">
// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/preparation-before-development
import * as Lark from '@larksuiteoapi/node-sdk';
const baseConfig = {
    appId: 'APP_ID',
    appSecret: 'APP_SECRET'
}
// 构建 client Build client
const wsClient = new Lark.WSClient(baseConfig);
// 建立长连接 Establish persistent connection
wsClient.start({
    // 注册事件 Register event
    eventDispatcher: new Lark.EventDispatcher({}).register({
        'leave_approval': async (data) => {
            console.log(data);
        }
    })
});
    </md-code-tab-panel>

  </md-code-tab-group>
  <md-code-tab-group title="将事件推送至开发者服务器">
        
    <md-code-tab-panel sdkType="golang-sdk">
package main

import (
        "context"
        "fmt"
        "net/http"

        larkcore "github.com/larksuite/oapi-sdk-go/v3/core"
        "github.com/larksuite/oapi-sdk-go/v3/core/httpserverext"
        larkevent "github.com/larksuite/oapi-sdk-go/v3/event"
        "github.com/larksuite/oapi-sdk-go/v3/event/dispatcher"
        "github.com/larksuite/oapi-sdk-go/v3/service/approval/old"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
        // 注册事件 Register event
        eventHandler := dispatcher.NewEventDispatcher("", "").
                OnCustomizedEvent("leave_approval", func(ctx context.Context, event *larkevent.EventReq) error {
                        fmt.Printf("[ OnCustomizedEvent access ], type: message, data: %s\n", string(event.Body))
                        return nil
                })

        // 创建路由处理器 Create route handler
        http.HandleFunc("/webhook/event", httpserverext.NewEventHandlerFunc(handler, larkevent.WithLogLevel(larkcore.LogLevelDebug)))

        err := http.ListenAndServe(":7777", nil)

        if err != nil {
                panic(err)
        }
}

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="python-sdk">
# SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development
from flask import Flask
from lark_oapi.adapter.flask import *
import lark_oapi as lark

app = Flask(__name__)


def do_customized_event(data: lark.CustomizedEvent) -> None:
    print(f'[ do_customized_event access ], type: message, data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p1_customized_event("leave_approval", do_customized_event) \
    .build()


# 创建路由处理器 Create route handler
@app.route("/webhook/event", methods=["POST"])
def event():
    resp = handler.do(parse_req())
    return parse_resp(resp)

if __name__ == "__main__":
    app.run(port=7777)

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="java-sdk">

package com.lark.oapi.sample.event;

import java.nio.charset.StandardCharsets;
import com.lark.oapi.core.request.EventReq;
import com.lark.oapi.event.CustomEventHandler;
import com.lark.oapi.sdk.servlet.ext.ServletAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
@RestController
public class EventController {

    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("verificationToken", "encryptKey")
            .onCustomizedEvent("leave_approval", new CustomEventHandler() {
                @Override
                public void handle(EventReq event) throws Exception {
                    System.out.printf("[ onCustomizedEvent access ], type: message, data: %s\n", new String(event.getBody(), StandardCharsets.UTF_8));
                }
            })
            .build();

    // 注入 ServletAdapter 实例 Inject ServletAdapter instance
    @Autowired
    private ServletAdapter servletAdapter;

    // 创建路由处理器 Create route handler
    @RequestMapping("/webhook/event")
    public void event(HttpServletRequest request, HttpServletResponse response)
            throws Throwable {
        // 回调扩展包提供的事件回调处理器 Callback handler provided by the extension package
        servletAdapter.handleEvent(request, response, EVENT_DISPATCHER);
    }
}
    </md-code-tab-panel>

    <md-code-tab-panel sdkType="nodejs-sdk">
// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/preparation-before-development
import http from 'http';
import * as lark from '@larksuiteoapi/node-sdk';

// 注册事件 Register event
const eventDispatcher = new lark.EventDispatcher({
    encryptKey: '',
    verificationToken: '',
}).register({
    'leave_approval': async (data) => {
        console.log(data);
        return 'success';
    },
});

const server = http.createServer();
// 创建路由处理器 Create route handler
server.on('request', lark.adaptDefault('/webhook/event', eventDispatcher));
server.listen(3000);
    </md-code-tab-panel>

  </md-code-tab-group>
</md-code-tabs>
:::