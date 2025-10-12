<!--
title: 获取单个审批实例详情
id: 7114621541589729283
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get
updatedAt: 1747033877000
source: https://open.feishu.cn/document/server-docs/approval-v4/instance/get
-->
# 获取单个审批实例详情

通过审批实例 Code 获取指定审批实例的详细信息，包括审批实例的名称、创建时间、发起审批的用户、状态以及任务列表等信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=approval&version=v4&resource=instance&method=get)

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
      <md-td>https://open.feishu.cn/open-apis/approval/v4/instances/:instance_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
            <md-perm name="approval:approval:readonly" desc="访问审批应用" support_app_types="custom,isv" tags="">访问审批应用</md-perm>
            <md-perm name="approval:instance" desc="查看、创建、更新、删除原生审批实例相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除原生审批实例相关信息</md-perm>
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
</md-tbody>
</md-table>
:::



### 路径参数
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
	<md-text type="field-name" >instance_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例 Code。获取方式：

- [创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create) 后，从返回结果中获取审批实例 Code。如果在创建的时候传了 uuid 参数，则本参数也可以通过传 uuid 获取指定审批实例详情。
- 调用[批量获取审批实例 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list)，获取指定审批定义内的审批实例 Code。
- 调用[查询实例列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/query)，设置过滤条件查询指定的审批实例 Code。


**示例值**："81D31358-93AF-92D6-7425-01A5D67C4E71"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >locale</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	语言。默认值为[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)时在 i18n_resources 参数中配置的 is_default 取值为 true 的语言。

**示例值**：zh-CN

**可选值有**：
<md-enum>
<md-enum-item key="zh-CN" >中文</md-enum-item>
<md-enum-item key="en-US" >英文</md-enum-item>
<md-enum-item key="ja-JP" >日文</md-enum-item>
</md-enum>
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
	否
	</md-dt-td>
	<md-dt-td>
	发起审批的用户 ID，ID 类型由 user_id_type 参数指定。

**示例值**：f7cb567e
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

**示例值**：user_id

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
	<md-text type="field-name" >approval_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批创建时间，毫秒级时间戳。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批完成时间，毫秒级时间戳。审批未完成时该参数值为 0。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发起审批的用户 user_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发起审批的用户 open_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >serial_number</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批单编号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发起审批用户所在部门的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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
<md-enum-item key="PENDING" >审批中</md-enum-item>
<md-enum-item key="APPROVED" >通过</md-enum-item>
<md-enum-item key="REJECTED" >拒绝</md-enum-item>
<md-enum-item key="CANCELED" >撤回</md-enum-item>
<md-enum-item key="DELETED" >删除</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >uuid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例的唯一标识 id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >form</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批表单控件 JSON 字符串，控件值详细说明参见本文下方 **控件值说明** 章节。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >task_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_task\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批人的 user_id，自动通过、自动拒绝时该参数返回值为空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批人的 open_id，自动通过、自动拒绝时该参数返回值为空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务状态

**可选值有**：
<md-enum>
<md-enum-item key="PENDING" >审批中</md-enum-item>
<md-enum-item key="APPROVED" >通过</md-enum-item>
<md-enum-item key="REJECTED" >拒绝</md-enum-item>
<md-enum-item key="TRANSFERRED" >已转交</md-enum-item>
<md-enum-item key="DONE" >完成</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >node_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务所属的审批节点 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >node_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务所属的审批节点名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_node_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务所属的审批节点的自定义 ID。如果没设置自定义 ID，则不返回该参数值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批方式

**可选值有**：
<md-enum>
<md-enum-item key="AND" >会签</md-enum-item>
<md-enum-item key="OR" >或签</md-enum-item>
<md-enum-item key="AUTO_PASS" >自动通过</md-enum-item>
<md-enum-item key="AUTO_REJECT" >自动拒绝</md-enum-item>
<md-enum-item key="SEQUENTIAL" >按顺序</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务的开始时间，毫秒级时间戳。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批任务的完成时间，毫秒级时间戳。未完成时返回 0。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >comment_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_comment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	评论 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发表评论的用户 user_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发表评论的用户 open_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >comment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	评论内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	评论时间，毫秒级时间戳。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >files</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >file\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论附件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件路径
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >file_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	附件大小。单位：字节
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
	附件标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件类别

- image：图片
- attachment：附件，与上传时选择的类型一致
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >timeline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_timeline\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	审批动态
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	动态类型。不同的动态类型，对应 ext 返回值也不同，具体参考以下各枚举值描述。

**可选值有**：
<md-enum>
<md-enum-item key="START" >审批开始。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="PASS" >通过。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="REJECT" >拒绝。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="AUTO_PASS" >自动通过。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="AUTO_REJECT" >自动拒绝。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="REMOVE_REPEAT" >去重。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="TRANSFER" >转交。对应的 ext 参数返回的 user_id_list 包含被转交人的用户 ID。</md-enum-item>
<md-enum-item key="ADD_APPROVER_BEFORE" >前加签。对应的 ext 参数返回的 user_id_list 包含被加签人的用户 ID。</md-enum-item>
<md-enum-item key="ADD_APPROVER" >并加签。对应的 ext 参数返回的 user_id_list 包含被加签人的用户 ID。</md-enum-item>
<md-enum-item key="ADD_APPROVER_AFTER" >后加签。对应的 ext 参数返回的 user_id_list 包含被加签人的用户 ID。</md-enum-item>
<md-enum-item key="DELETE_APPROVER" >减签。对应的 ext 参数返回的 user_id_list 包含被加签人的用户 ID。</md-enum-item>
<md-enum-item key="ROLLBACK_SELECTED" >指定回退。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="ROLLBACK" >全部回退。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="CANCEL" >撤回。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="DELETE" >删除。对应的 ext 参数不会返回值。</md-enum-item>
<md-enum-item key="CC" >抄送。对应的 ext 参数返回的 user_id 包含抄送人的用户 ID。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发生时间，毫秒级时间戳。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	产生该动态的用户 user_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	产生该动态的用户 open_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	被抄送人列表，列表内包含的是用户 user_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	被抄送人列表，列表内包含的是用户 open_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >task_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	产生动态关联的任务 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >comment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	理由
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >cc_user_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_cc_user\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	抄送人列表
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
	抄送人的 user_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >cc_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例内抄送唯一标识
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	抄送人的 open_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ext</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	其他信息，JSON 格式，目前包括 user_id_list, user_id，open_id_list，open_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >node_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	产生审批任务的节点 key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >files</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >file\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	审批附件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件路径
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >file_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	附件大小。单位：字节
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
	附件标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件类别

- image：图片
- attachment：附件，与上传时选择的类型一致
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >modified_instance_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	修改的原实例 Code，仅在查询修改实例时显示该字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >reverted_instance_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	撤销的原实例 Code，仅在查询撤销实例时显示该字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >approval_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义 Code
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >reverted</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	单据是否被撤销
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >instance_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例 Code
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::

### 控件值说明

|类型|说明|
|-|-|
|input|单行文本控件|
|textarea|多行文本控件|
|date|日期控件。RFC3339 格式，示例值：2019-10-01T08:12:01+08:00。|
|radio/radioV2|单选控件。value 对应的是选项文本，如果[关联外部选项](/ssl:ttdoc/ukTMukTMukTM/uADM4QjLwADO04CMwgDN)则对应的是选项 ID。|
|address|地址控件。示例格式：`China/Beijing/Beijing/Chaoyang Qu/chang an jie`，如果地址控件允许输入详细地址，则最后一项为用户输入的详细地址。|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "custom_id": "user_info",
    "name": "Item application",
    "type": "input",
    "value": "data"
}
```
|类型|说明|
|-|-|
|number|数字控件|
|amount|金额控件|
|formula|计算公式控件|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "Item application",
    "type": "number",
    "value": 1234.56
}
```

|类型|说明|
|-|-|
|contact|联系人控件。value 包含的是用户 user_id；open_ids 包含的是用户 open_id。不同用户 ID 说明可参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "Item application",
    "type": "contact",
    "value": ["f8ca557e"],
    "open_ids": ["ou_12345"]
}
```

|类型|说明|
|-|-|
|attachmentV2|附件控件。ext 为附件名字、value 为附件地址，按逗号分隔，且链接有效时长为 12 小时。|
|image/imageV2|图片控件。ext 为图片名字、value 为图片地址，按逗号分隔，且链接有效时长为 12 小时。 <br>**注意**：客户端页面上发起审批所传递的图片控件，使用接口无法获取图片名称。

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "Item application",
    "type": "attachmentV2",
    "ext": "'Item 1 name','Item 2 name'",
    "value": ["Item 1", "Item 2"]
}
```

|类型|说明|
|-|-|
|connect| 关联审批控件。value 包含的是被关联的审批实例 Code，你可以调用[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口，根据审批实例 Code 获取实例详情。|
|attachment|附件控件。value 为附件地址。|
|checkbox/checkboxV2|多选控件。value 对应的是选项文本，如果[关联外部选项](/ssl:ttdoc/ukTMukTMukTM/uADM4QjLwADO04CMwgDN)则对应的是选项 ID。|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "Item application",
    "type": "checkbox",
    "value": ["Item 1"]
}
```

|类型|说明|
|-|-|
|dateInterval|日期区间控件。start 和 end 表示区间开始时间与结束时间，满足 RFC3339 格式；interval 表示时长（天）。|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "Item application",
    "type": "dateInterval",
    "value": {
         "start": "2019-10-01T08:12:01+08:00",
         "end": "2019-10-02T08:12:01+08:00",
         "interval": 2.0
     }
}
```

|类型|说明|
|-|-|
|fieldList|明细/表格控件。value 是二维数组，根据审批定义内 **明细/表格** 控件所包含的控件，依次设置的控件 JSON 值。|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "Item application",
    "type": "fieldList",
    "value": [
         [   
            {
                "id": "widget1",
                "type": "checkbox",
                "value": ["jxpsebqp-0"]
            }
         ]
     ]
}
```

|类型|说明|
|-|-|
|document|文档控件。token 返回的是文档的 document_id，详细介绍参见[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview#e18a49a1)；type 是文档类型；title 是文档标题；url 是文档链接。|

以上控件的 JSON 示例值如下：

```json
{
    "id":"widget1",
    "type":"document",
    "value":
        {
          "token": "doxcx7B8OzLFHExkiwYuPGAwf",
          "type": "doc",
          "title": "title",
          "url": "https://xxx.xxx.xxx/docx/doxcx7B8OzLFHExkiwYuPGAwf"
       }
}
```

以上控件的 JSON 示例值如下：

|类型|说明|
|-|-|
|department|部门控件。open_id 返回的是部门的 open_department_id，关于部门 open_department_id 的说明参见[部门 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#9c02ed7a)。|

```json
{
    "id":"widget1",
    "type":"department",
    "value":[
        {
            "open_id":"od-xxx"
        }
    ]
}
```
|类型|说明|
|-|-|
|leaveGroup|请假控件组。value 内，name 是假期名称；start 和 end 是假期开始时间与结束时间，满足 RFC3339 格式；interval 是时长（天），部分假期类型用户手动输入请假时长。|


以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "leave",
    "type": "leaveGroup",
    "value": {
         "name": "annual leave"
         "start": "2019-10-01T00:00:00+08:00",
         "end": "2019-10-02T00:0:00+08:00",
         "interval": 2.0
     }
}
```

|类型|说明|
|-|-|
|leaveGroupV2|请假控件组。value 内，name 是假期名称；start 和 end 是假期开始时间与结束时间，满足 RFC3339 格式；interval 是时长（天），部分假期类型用户手动输入请假时长；unit 是时长单位，取值 DAY/HOUR；reason 是请假原因。|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "leave",
    "type": "widgetLeaveGroupV2",
    "value": {
         "name": "annual leave"
         "start": "2019-10-01T00:00:00+08:00",
         "end": "2019-10-02T00:0:00+08:00",
         "interval": 2.0,
         "unit": "DAY",
         "reason": "out going"
     }
}
```


|类型|说明|
|-|-|
|remedyGroup|补卡控件组。value 内 time 为补卡时间，满足 RFC3339 格式；reason 是补卡原因。|

以上控件的 JSON 示例值如下：


```json
{
    "id": "widget1",
    "name": "remedy",
    "type": "remedyGroup",
    "value": {
         "time": "2019-10-01T08:12:01+08:00",
         "reason": "forgot"
     }
}
```


|类型|说明|
|-|-|
|shiftGroup|换班控件组。value 内，shiftTime 是换班时间、returnTime 是 对调日期，均满足 RFC3339 格式；reason 是换班原因。|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "shift",
    "type": "shiftGroup",
    "value": {
         "shiftTime": "2019-10-01T08:12:01+08:00",
         "returnTime": "2019-10-02T08:12:01+08:00",
         "reason": "ask for leave"
     }
}
```


|类型|说明|
|-|-|
|workGroup|加班控件组。value 内，name 是加班名称；start 和 end 是加班开始时间和结束时间，满足 RFC3339 格式；interval 是加班时长（天）；reason 是加班原因。|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "work",
    "type": "workGroup",
    "value": {
         "name": "Overtime pay"
         "start": "2019-10-01T08:12:01+08:00",
         "end": "2019-10-02T08:12:01+08:00",
         "interval": 2.0,
         "reason": "ask for leave"
     }
}
```


|类型|说明|
|-|-|
|tripGroup|出差控件组。各参数说明参见以下代码注释。|

以上控件的 JSON 示例值如下：

```json
{
    "id": "widget1",
    "name": "trip",
    "type": "tripGroup",
    "value": {
         "schedule": [{
                "start": "2019-10-0T00:00:00Z+08:00", // 出差开始时间，满足 RFC3339 格式。
                "end": "2019-10-01T00:00:00Z+08:00", // 出差结束时间，满足 RFC3339 格式。
                "interval": 123.45, // 当次出差时长（天）
                "departure": "China/Beijing/Beijing", // 出发地
                "destination": "China/Shanghai/Shanghai", // 目的地
                "transport": "Airplane", // 交通工具
                "oneRound": "One Way", // 单程/往返
                "remark": "business", // 备注
         }],
         "interval": 2.0, // 出差总时长（天）
         "reason": "business", // 出差事由
         "peer": ["f7cb567e"], // 同行人的用户 ID
    }
}
```

|类型|说明|
|-|-|
|telephone|电话控件。value 内，country_code 是区号；national_number 是手机号。|

以上控件的 JSON 示例值如下：

```json
{
    "id":"widget1",
    "type":"telephone",
    "value": {
        "country_code":"+86",
        "national_number":"13122222222"
    }
}
```

### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {
        "approval_name": "Payment",
        "start_time": "1564590532967",
        "end_time": "1564590532967",
        "user_id": "f3ta757q",
        "open_id": "ou_3cda9c969f737aaa05e6915dce306cb9",
        "serial_number": "202102060002",
        "department_id": "od-8ec33ffec336c3a39a278bc25e931676",
        "status": "PENDING",
        "uuid": "1234567",
        "form": "[{\"id\": \"widget1\",\"custom_id\": \"user_info\",\"name\": \"Item application\",\"type\": \"textarea\"}]",
        "task_list": [
            {
                "id": "1234",
                "user_id": "f7cb567e",
                "open_id": "ou_123457",
                "status": "PENDING",
                "node_id": "46e6d96cfa756980907209209ec03b64",
                "node_name": "开始",
                "custom_node_id": "manager",
                "type": "AND",
                "start_time": "1564590532967",
                "end_time": "0"
            }
        ],
        "comment_list": [
            {
                "id": "1234",
                "user_id": "f7cb567e",
                "open_id": "ou_123456",
                "comment": "ok",
                "create_time": "1564590532967",
                "files": [
                    {
                        "url": "https://p3-approval-sign.byteimg.com/lark-approval-attachment/image/20220714/1/332f3596-0845-4746-a4bc-818d54ad435b.png~tplv-ottatrvjsm-image.image?x-expires=1659033558&x-signature=6edF3k%2BaHeAuvfcBRGOkbckoUl4%3D#.png",
                        "file_size": 186823,
                        "title": "e018906140ed9388234bd03b0.png",
                        "type": "image"
                    }
                ]
            }
        ],
        "timeline": [
            {
                "type": "PASS",
                "create_time": "1564590532967",
                "user_id": "f7cb567e",
                "open_id": "ou_123456",
                "user_id_list": [
                    "f7cb567e"
                ],
                "open_id_list": [
                    "ou_123456"
                ],
                "task_id": "1234",
                "comment": "ok",
                "cc_user_list": [
                    {
                        "user_id": "eea5gefe",
                        "cc_id": "123445",
                        "open_id": "ou_12345"
                    }
                ],
                "ext": "{\"user_id\":\"62d4a44c\",\"open_id\":\"ou_123456\"}",
                "node_key": "APPROVAL_240330_4058663",
                "files": [
                    {
                        "url": "https://p3-approval-sign.byteimg.com/lark-approval-attachment/image/20220714/1/332f3596-0845-4746-a4bc-818d54ad435b.png~tplv-ottatrvjsm-image.image?x-expires=1659033558&x-signature=6edF3k%2BaHeAuvfcBRGOkbckoUl4%3D#.png",
                        "file_size": 186823,
                        "title": "e018906140ed9388234bd03b0.png",
                        "type": "image"
                    }
                ]
            }
        ],
        "modified_instance_code": "81D31358-93AF-92D6-7425-01A5D67C4E71",
        "reverted_instance_code": "81D31358-93AF-92D6-7425-01A5D67C4E71",
        "approval_code": "7C468A54-8745-2245-9675-08B7C63E7A85",
        "reverted": false,
        "instance_code": "81D31358-93AF-92D6-7425-01A5D67C4E71"
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
  <md-td>1395001</md-td>
  <md-td>There have been some errors. Please try again later</md-td>
  <md-td>服务出现错误。排查方案：

1. 参考接口文档的参数说明，检查请求时传入的参数是否正确。如果传入的有表单参数（form），则需要检查传入的表单控件数据是否正确。

2. 降低请求频率，并重试。如果重试仍然报错，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
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
  <md-td>403</md-td>
  <md-td>1390009</md-td>
  <md-td>no operation permission</md-td>
  <md-td>没有操作权限。请前往[飞书审批管理后台](https://www.feishu.cn/approval/admin/approvalList)，进入指定审批定义编辑页面，在流程设计里的审批操作权限内，检查操作权限是否正确配置。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1390004</md-td>
  <md-td>user_id or open_id not found</md-td>
  <md-td>检查传入的 user_id 参数是否正确，user_id 的类型需要和 user_id_type 一致，且需要确保 ID 值正确。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


