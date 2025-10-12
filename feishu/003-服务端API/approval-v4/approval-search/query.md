<!--
title: 查询实例列表
id: 7117964632137203715
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/query
updatedAt: 1745207137000
source: https://open.feishu.cn/document/server-docs/approval-v4/approval-search/query-2
-->
# 查询实例列表

该接口通过不同条件查询审批系统中符合条件的审批实例列表。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=approval&version=v4&resource=instance&method=query)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="tip">

</md-alert>
:::

## 使用限制

- 该接口会过滤被撤销的审批实例，因此会有实例存在却不返回数据的情况。
    
    该情况的具体表现：返回结果中每页的数据条目数可能小于 page_size 值。例如，page_size 取值为 10，实际查询结果中当前页只显示 6 条数据，则表示有 4 条数据是被撤销的审批实例。

- 该接口查询结果可能存在延迟，无法保证实时性。如需实时查询，建议使用[批量获取审批实例 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list)（该接口只能查询某一审批定义下的审批实例 ID）。

- 查询时：

    - user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。

    - approval_code 和 group_external_id 查询结果取并集；instance_code 和 instance_external_id 查询结果取并集；其他查询条件之间均取交集。

## 请求
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
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/approval/v4/instances/query</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="approval:approval.list:readonly" desc="查询审批列表" support_app_types="custom" tags="">查询审批列表</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            字段权限要求
      </md-th>
      <md-td>
        <md-alert type="tip" icon="none">
        该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 13%;">类型</md-th>
       <md-th style="width: 15%;" filters="是,否" >必填</md-th>
      <md-th  style="width: 37%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>Authorization</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
</md-tr>
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
</md-tbody>
</md-table>
:::



### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页大小。如果当前页包含被撤销的审批实例，则查询结果中每页的数据条目数可能小于 page_size 值。例如，page_size 取值为 10，实际查询结果中当前页只显示 6 条数据，则表示有 4 条数据是被撤销的审批实例。

**示例值**：10

**默认值**：`10`

**数据校验规则**：

- 取值范围：`5` ～ `200`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果

**示例值**：nF1ZXJ5VGhlbkZldGNoCgAAAAAA6PZwFmUzSldvTC1yU
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID 类型

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 请求体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID，ID 类型与查询参数 user_id_type 保持一致。

**示例值**："lwiu098wj"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >approval_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批定义 Code。获取方式：

- 调用[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)接口后，从响应参数 approval_code 获取。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。

**注意**：

- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。

- approval_code 和 group_external_id 查询结果取并集。

**示例值**："EB828003-9FFE-4B3F-AA50-2E199E2ED942"
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
	否
	</md-dt-td>
	<md-dt-td>
	审批实例 Code。获取方式：

- 调用[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)接口后，从响应参数 instance_code 获取。
- 调用[批量获取审批实例 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list)接口，获取所需的审批实例 Code。

**注意**：

- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。

- instance_code 和 instance_external_id 查询结果取并集。

**示例值**："EB828003-9FFE-4B3F-AA50-2E199E2ED943"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >instance_external_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批实例的第三方 ID。

**注意**：

- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。

- instance_code 和 instance_external_id 查询结果取并集。

**示例值**："EB828003-9FFE-4B3F-AA50-2E199E2ED976"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >group_external_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批定义分组的第三方 ID。

**注意**：

- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。

- approval_code 和 group_external_id 查询结果取并集。

**示例值**："1234567"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >instance_title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批实例标题。

**说明**：仅第三方审批存在审批实例标题。

**示例值**："test"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >instance_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批实例状态。

**示例值**："PENDING"

**可选值有**：
<md-enum>
<md-enum-item key="PENDING" >审批中</md-enum-item>
<md-enum-item key="RECALL" >已撤回</md-enum-item>
<md-enum-item key="REJECT" >已拒绝</md-enum-item>
<md-enum-item key="DELETED" >已删除</md-enum-item>
<md-enum-item key="APPROVED" >已通过</md-enum-item>
<md-enum-item key="ALL" >所有状态</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >instance_start_time_from</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	实例查询开始时间，Unix 毫秒时间戳。与 instance_start_time_to 参数构成时间段查询条件，仅会返回在该时间段内的审批实例。

**注意**：查询时间跨度不得大于 30 天，开始和结束时间必须同时设置或者同时不设置。

**示例值**："1547654251506"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >instance_start_time_to</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	实例查询结束时间，Unix 毫秒时间戳。与 instance_start_time_from 参数构成时间段查询条件，仅会返回在该时间段内的审批实例。

**注意**：查询时间跨度不得大于 30 天，开始和结束时间必须同时设置或者同时不设置。

**示例值**："1547654251506"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >locale</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	语言。

**示例值**："zh-CN"

**可选值有**：
<md-enum>
<md-enum-item key="zh-CN" >中文</md-enum-item>
<md-enum-item key="en-US" >英文</md-enum-item>
<md-enum-item key="ja-JP" >日文</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "user_id": "lwiu098wj",
    "approval_code": "EB828003-9FFE-4B3F-AA50-2E199E2ED942",
    "instance_code": "EB828003-9FFE-4B3F-AA50-2E199E2ED943",
    "instance_external_id": "EB828003-9FFE-4B3F-AA50-2E199E2ED976",
    "group_external_id": "1234567",
    "instance_title": "test",
    "instance_status": "PENDING",
    "instance_start_time_from": "1547654251506",
    "instance_start_time_to": "1547654251506",
    "locale": "zh-CN"
}
</md-code-json>
:::



## 响应





### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	查询结果中包含的审批实例总数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >instance_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_search_item\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >approval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_search_approval</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义 Code
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_external</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为第三方审批
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >external</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_search_approval_external</md-text>
	</md-dt-td>
	<md-dt-td>
	第三方审批信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >batch_cc_read</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否支持批量读
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >approval_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >icon</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义图标信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >group</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_search_group</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义分组
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >external_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义分组的第三方 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义分组名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >instance</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_search_node</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例 Code
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >external_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例的第三方 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例发起人的 user_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例开始时间，Unix 毫秒时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例结束时间，Unix 毫秒时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例状态

**可选值有**：
<md-enum>
<md-enum-item key="rejected" >已拒绝</md-enum-item>
<md-enum-item key="pending" >审批中</md-enum-item>
<md-enum-item key="canceled" >已撤回</md-enum-item>
<md-enum-item key="deleted" >已删除</md-enum-item>
<md-enum-item key="approved" >已通过</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例名称（只有第三方审批有返回值）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >extra</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例扩展字段，字符串类型的 JSON 数据
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >serial_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批流水号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_search_link</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例链接（只有第三方审批有返回值）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >pc_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例 PC 端链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mobile_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例移动端链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >has_more</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否还有更多项
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {
        "count": 10,
        "instance_list": [
            {
                "approval": {
                    "code": "EB828003-9FFE-4B3F-AA50-2E199E2ED943",
                    "name": "approval",
                    "is_external": true,
                    "external": {
                        "batch_cc_read": false
                    },
                    "approval_id": "7090754740375519252",
                    "icon": "https://lf3-ea.bytetos.com/obj/goofy/ee/approval/approval-admin/image/iconLib/v3/person.png"
                },
                "group": {
                    "external_id": "0004",
                    "name": "groupA"
                },
                "instance": {
                    "code": "EB828003-9FFE-4B3F-AA50-2E199E2ED943",
                    "external_id": "0004_3ED52DC1-AA6C",
                    "user_id": "lwiu098wj",
                    "start_time": "1547654251506",
                    "end_time": "1547654251506",
                    "status": "pending",
                    "title": "test",
                    "extra": "{}",
                    "serial_id": "201902020001",
                    "link": {
                        "pc_link": "https://www.example.com/",
                        "mobile_link": "https://www.example.com/"
                    }
                }
            }
        ],
        "page_token": "nF1ZXJ5VGhlbkZldGNoCgAAAAAA6PZwFmUzSldvTC1yU",
        "has_more": false
    }
}
</md-code-json>
:::



### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>400</md-td>
  <md-td>1390001</md-td>
  <md-td>param is invalid</md-td>
  <md-td>参数错误。排查方案：

- 根据接口文档的参数说明，检查请求时传入的参数是否正确。

- 如果传入的有表单参数（form），则需要检查该参数内传入的表单控件数据是否正确。如果报错信息内包含控件 ID（如 `控件= widget17261088448220001`），可以调用[查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get)或者[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口，获取响应参数 form 值，检索有问题的控件 ID，然后检查该控件的配置是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1390002</md-td>
  <md-td>approval code not found</md-td>
  <md-td>找不到审批定义 Code，检查传入的审批定义 Code 是否正确。

审批定义 Code 获取方式：

- 调用[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)接口后，从响应参数 approval_code 获取。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1390003</md-td>
  <md-td>instance code not found</md-td>
  <md-td>找不到审批实例 Code，检查传入的审批实例 Code 是否正确。

审批实例 Code 获取方式：

- 调用[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)接口后，从响应参数 instance_code 获取。
- 调用[批量获取审批实例 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list)接口，获取所需的审批实例 Code。
- 调用[查询实例列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/query)，设置过滤条件查询指定的审批实例 Code。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1395001</md-td>
  <md-td>There have been some errors. Please try again later</md-td>
  <md-td>服务出现错误。排查方案：

1. 参考接口文档的参数说明，检查请求时传入的参数是否正确。如果传入的有表单参数（form），则需要检查传入的表单控件数据是否正确。

2. 降低请求频率，并重试。如果重试仍然报错，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


