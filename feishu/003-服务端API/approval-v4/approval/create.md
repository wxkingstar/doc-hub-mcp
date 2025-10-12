<!--
title: 创建审批定义
id: 7114621541589712899
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create
updatedAt: 1747721442000
source: https://open.feishu.cn/document/server-docs/approval-v4/approval/create
-->
# 创建审批定义

该接口用于创建审批定义，可以灵活指定审批定义的基础信息、表单和流程等。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=approval&version=v4&resource=approval&method=create)

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

通过该 API 创建的审批定义，无法从审批管理后台或以 API 方式停用、删除，请谨慎调用。不推荐企业自建应用使用该 API 创建审批定义，如有需要，尽量联系企业管理员[在审批管理后台创建定义](https://www.feishu.cn/hc/zh-CN/articles/360040241113-%E7%AE%A1%E7%90%86%E5%91%98%E5%88%9B%E5%BB%BA%E5%AE%A1%E6%89%B9)。

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
      <md-td>https://open.feishu.cn/open-apis/approval/v4/approvals</md-td>
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
            <md-perm name="approval:definition" desc="查看、创建、更新、删除原生审批定义相关信息" support_app_types="custom,isv" tags="">查看、创建、更新、删除原生审批定义相关信息</md-perm>
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
	<md-text type="field-name" >department_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	此次调用中使用的部门 ID 的类型。关于部门 ID 详细介绍参见[部门 ID 介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#9c02ed7a)。

**示例值**：open_department_id

**可选值有**：
<md-enum>
<md-enum-item key="department_id" >支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。</md-enum-item>
<md-enum-item key="open_department_id" >由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。</md-enum-item>
</md-enum>
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
	<md-text type="field-name" >approval_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	审批名称的国际化文案 Key，以 `@i18n@` 开头，长度不得少于 9 个字符。

**示例值**："@i18n@approval_name"
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
	审批定义 Code。使用说明：

- 该参数不传值时，表示新建审批定义，最终响应结果会返回由系统自动生成的审批定义 Code。
- 该参数传入指定审批定义 Code 时，表示调用该接口更新该审批定义内容，更新方式为覆盖原定义内容的全量更新。

审批定义 Code。获取方式：

- 调用[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)接口后，从响应参数 approval_code 获取。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。

**示例值**："7C468A54-8745-2245-9675-08B7C63E7A85"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批描述的国际化文案 Key，以 `@i18n@` 开头，长度不得少于 9 个字符。

**示例值**："@i18n@description"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >viewers</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approval_create_viewers\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	viewers 字段指定了哪些人能从审批应用的前台发起该审批。使用说明：

 - 当 viewer_type 为 USER，需要填写 viewer_user_id

 - 当 viewer_type 为 DEPARTMENT，需要填写 viewer_department_id

 - 当 viewer_type 为 TENANT 或 NONE 时，无需填写 viewer_user_id 和 viewer_department_id

**注意**：列表最大长度为 200。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >viewer_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批定义的可见范围

**示例值**："USER"

**可选值有**：
<md-enum>
<md-enum-item key="TENANT" >当前企业内可见</md-enum-item>
<md-enum-item key="DEPARTMENT" >指定部门可见</md-enum-item>
<md-enum-item key="USER" >指定用户可见</md-enum-item>
<md-enum-item key="NONE" >任何人都不可见</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >viewer_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	当 viewer_type 是 USER 时，需要通过该参数传入用户 ID，ID 类型与查询参数 user_id_type 取值一致。

**示例值**："19a294c2"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >viewer_department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	当 viewer_type 为DEPARTMENT，需要通过该参数传入部门 ID，ID 类型与查询参数 department_id_type 取值一致。

**示例值**："od-ac9d697abfa990b715dcc33d58a62a9d"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >form</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approval_form</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	审批定义表单
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >form_content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	审批定义表单。表单格式为 JSON 数组，实际传值时需要将 JSON 压缩转义为 String 类型。表单内各个控件的 JSON 字段说明参见[审批定义表单控件参数](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/approval-definition-form-control-parameters)。

**注意**：以下示例值未转义，你可以参考下文**请求示例**章节的示例代码。

**示例值**："[{\"id\":\"user_name\", \"type\": \"input\", \"required\":true, \"name\":\"@i18n@widget1\"}]"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >node_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approval_node\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	审批定义节点列表，用于设置审批流程所需要的各个节点，审批流程的始末固定为开始节点和结束节点，因此传值时需要将开始节点作为 list 第一个元素，结束节点作为 list 最后一个元素。

**说明**：API 方式不支持设置条件分支，如需设置条件分支请前往[飞书审批后台](https://www.feishu.cn/approval/admin/approvalList?devMode=on)创建审批定义。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	节点 ID。

- 开始节点的 ID 为 START
- 结束节点的 ID 为 END

开始和结束节点不需要指定 name、node_type 以及 approver。

**示例值**："START"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	节点名称的国际化文案 Key，以 `@i18n@` 开头，长度不得少于 9 个字符。

**示例值**："@i18n@node_name"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >node_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	当前节点的审批方式。

**注意**：当该参数取值为依次审批（SEQUENTIAL）时，审批人类型（approver.type）必须为发起人自选（Free）。

**示例值**："AND"

**可选值有**：
<md-enum>
<md-enum-item key="AND" >会签，需要所有审批人同意才会通过审批</md-enum-item>
<md-enum-item key="OR" >或签，一名审批人同意即可通过审批</md-enum-item>
<md-enum-item key="SEQUENTIAL" >依次审批，按照审批人顺序依次进行审批</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >approver</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approval_approver_ccer\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批人列表
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
	是
	</md-dt-td>
	<md-dt-td>
	审批人类型。使用说明：

- 该参数取值为 Supervisor、SupervisorTopDown、DepartmentManager 、DepartmentManagerTopDown 这 4 种时，需要在 level 参数中填写对应的级数。例如：由下往上三级主管审批，该参数取值 Supervisor 、level 参数取值 3。

 - 该参数取值为 Personal 时，需要填写对应的 user_id ，用于指定用户。

 - 该参数取值为 Free 时，无需指定 user_id 和 level。

**示例值**："Supervisor"

**可选值有**：
<md-enum>
<md-enum-item key="Supervisor" >主管审批（由下往上）</md-enum-item>
<md-enum-item key="SupervisorTopDown" >主管审批（从上往下）</md-enum-item>
<md-enum-item key="DepartmentManager" >部门负责人审批（由下往上）</md-enum-item>
<md-enum-item key="DepartmentManagerTopDown" >部门负责人审批（从上往下）</md-enum-item>
<md-enum-item key="Personal" >指定成员</md-enum-item>
<md-enum-item key="Free" >发起人自选</md-enum-item>
</md-enum>
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
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID。

- type 取值 Personal 时需要通过该参数设置指定的用户。

- ID 类型与查询参数 user_id_type 取值一致。

**示例值**："f7cb567e"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批级数。当 type 取值为 Supervisor、SupervisorTopDown、DepartmentManager、DepartmentManagerTopDown 这 4 种时，需要在 level 中填写对应的级数。例如：由下往上三级主管审批，level 取值 3。

**示例值**："3"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >ccer</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approval_approver_ccer\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	抄送人列表
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
	是
	</md-dt-td>
	<md-dt-td>
	抄送人类型。使用说明：

- 该参数取值为 Supervisor、SupervisorTopDown、DepartmentManager 、DepartmentManagerTopDown 这 4 种时，需要在 level 参数中填写对应的级数。例如：抄送由下往上三级主管，该参数取值 Supervisor 、level 参数取值 3。

 - 该参数取值为 Personal 时，需要填写对应的 user_id ，用于指定用户。

 - 该参数取值为 Free 时，无需指定 user_id 和 level。

- 抄送人类型不支持设置为发起人自选（Free）。

**示例值**："Supervisor"

**可选值有**：
<md-enum>
<md-enum-item key="Supervisor" >主管审批（由下往上）</md-enum-item>
<md-enum-item key="SupervisorTopDown" >主管审批（从上往下）</md-enum-item>
<md-enum-item key="DepartmentManager" >部门负责人审批（由下往上）</md-enum-item>
<md-enum-item key="DepartmentManagerTopDown" >部门负责人审批（从上往下）</md-enum-item>
<md-enum-item key="Personal" >指定成员</md-enum-item>
<md-enum-item key="Free" >发起人自选（抄送人类型不支持该选项）</md-enum-item>
</md-enum>
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
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID。

- type 取值 Personal 时需要通过该参数设置指定的用户。

- ID 类型与查询参数 user_id_type 取值一致。

**示例值**："f7cb567e"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批级数。当 type 取值为 Supervisor、SupervisorTopDown、DepartmentManager 、DepartmentManagerTopDown 这 4 种时，需要在 level 中填写对应的级数。例如：抄送由下往上三级主管，level 取值 3。

**示例值**："3"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >privilege_field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >field_group</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表单内的控件权限
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >writable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	可写权限的表单控件项的 ID 列表，ID 需要与表单参数（form）内传入的控件 ID 值保持一致。

**示例值**：["user_name"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >readable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	可读权限的表单控件项的 ID 列表，ID 需要与表单参数（form）内传入的控件 ID 值保持一致。

**示例值**：["user_name"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >approver_chosen_multi</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	发起人自选审批人时，是否允许多选。

- true：允许
- false：不允许

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >approver_chosen_range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approver_range\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	发起人自选审批人时，可选择的范围。

**示例值**：[test]
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
	否
	</md-dt-td>
	<md-dt-td>
	审批人类型

**示例值**："ALL"

**可选值有**：
<md-enum>
<md-enum-item key="ALL" >全企业</md-enum-item>
<md-enum-item key="PERSONAL" >指定审批人</md-enum-item>
<md-enum-item key="ROLE" >指定角色</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	ID 列表。

- 当 type 取值 ALL 时，无需传值。
- 当 type 取值 PERSONAL 时，传入用户 ID，ID 类型与 user_id_type 取值一致。
- 当 type 取值 ROLE 时，传入角色 ID。获取方式：成功[创建角色](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role/create)后，在返回结果中可获取角色 ID。

**示例值**：["f7cb567e"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >starter_assignee</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批人为提交人本人时的操作

**示例值**："STARTER"

**可选值有**：
<md-enum>
<md-enum-item key="STARTER" >提交人本人进行审批</md-enum-item>
<md-enum-item key="AUTO_PASS" >自动通过</md-enum-item>
<md-enum-item key="SUPERVISOR" >提交人的直属上级进行审批</md-enum-item>
<md-enum-item key="DEPARTMENT_MANAGER" >提交人的直属部门负责人进行审批</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >settings</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approval_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批定义其他设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >revert_interval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批实例通过后允许撤回的时间，以秒为单位，默认 31 天，取值 0 为不可撤回。

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >revert_option</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否支持审批通过第一个节点后撤回，默认为 1 表示支持，取值为 0 表示不支持。

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >reject_option</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批被拒绝后的设置

**示例值**：0

**可选值有**：
<md-enum>
<md-enum-item key="0" >默认设置，流程被终止</md-enum-item>
<md-enum-item key="1" >退回至发起人，发起人可编辑流程后重新提交</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >quick_approval_option</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	快捷审批配置项，开启后可在卡片上直接审批。

**默认值**：1

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="0" >禁用</md-enum-item>
<md-enum-item key="1" >启用</md-enum-item>
</md-enum>

**默认值**：`1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >config</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approval_config</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批定义配置项，用于配置对应审批定义是否可以由用户在[审批后台](https://www.feishu.cn/approval/admin)进行修改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >can_update_viewer</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否允许用户修改可见范围

**默认值**：false

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >can_update_form</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否允许用户更新表单

**默认值**：false

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >can_update_process</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否允许用户更新流程定义

**默认值**：false

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >can_update_revert</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否允许用户更新撤回设置

**默认值**：false

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >help_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批定义的帮助文档链接

**示例值**："https://xxx.xxx.xxx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >icon</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批图标枚举，默认为 0。下图从左至右，从上到下依次为 0~24 号图标。
      
 
![icon.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2c60da4397e18c0ae1fdf6bf50b36ad4_tQc0Lfgx4D.png?height=1080&lazyload=true&width=1066)

**示例值**：0

**默认值**：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >i18n_resources</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_resource\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	国际化文案
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >locale</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >texts</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_resource_text\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文案的 key、value。

**示例值**：{ "@i18n@1": "权限申请", "@i18n@2": "OA审批", "@i18n@3": "Permission" }
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文案 key。key 以 `@i18n@` 开头，该字段主要用于做国际化，允许用户同时传多个语言的文案，审批中心会根据用户当前的语音环境使用对应的文案，如果没有传用户当前的语音环境文案，则会使用默认的语言文案。

**示例值**："@i18n@1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	文案内容

**示例值**："people"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >is_default</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否为默认语言。默认语言需要包含所有 key，非默认语言如果 key 不存在会使用默认语言代替。

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >process_manager_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	审批流程管理员的用户 ID 列表。

- ID 类型与查询参数 user_id_type 取值一致
- 列表最大长度为 200

**示例值**：["1c5ea995"]
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "approval_name": "@i18n@approval_name",
    "approval_code": "7C468A54-8745-2245-9675-08B7C63E7A85",
    "description": "@i18n@description",
    "viewers": [
        {
            "viewer_type": "USER",
            "viewer_user_id": "19a294c2",
            "viewer_department_id": "od-ac9d697abfa990b715dcc33d58a62a9d"
        }
    ],
    "form": {
        "form_content": "[{\"id\":\"user_name\", \"type\": \"input\", \"required\":true, \"name\":\"@i18n@widget1\"}]"
    },
    "node_list": [
        {
            "id": "START",
            "name": "@i18n@node_name",
            "node_type": "AND",
            "approver": [
                {
                    "type": "Supervisor",
                    "user_id": "f7cb567e",
                    "level": "3"
                }
            ],
            "ccer": [
                {
                    "type": "Supervisor",
                    "user_id": "f7cb567e",
                    "level": "3"
                }
            ],
            "privilege_field": {
                "writable": [
                    "user_name"
                ],
                "readable": [
                    "user_name"
                ]
            },
            "approver_chosen_multi": false,
            "approver_chosen_range": [
                {
                    "type": "ALL",
                    "id_list": [
                        "f7cb567e"
                    ]
                }
            ],
            "starter_assignee": "STARTER"
        }
    ],
    "settings": {
        "revert_interval": 0,
        "revert_option": 0,
        "reject_option": 0,
        "quick_approval_option": 1
    },
    "config": {
        "can_update_viewer": false,
        "can_update_form": false,
        "can_update_process": false,
        "can_update_revert": false,
        "help_url": "https://xxx.xxx.xxx"
    },
    "icon": 0,
    "i18n_resources": [
        {
            "locale": "zh-CN",
            "texts": [
                {
                    "key": "@i18n@1",
                    "value": "people"
                }
            ],
            "is_default": true
        }
    ],
    "process_manager_ids": [
        "1c5ea995"
    ]
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
	<md-text type="field-name" >approval_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义 Code。建议妥善保管该 Code，后续[查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get)、[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)等场景需要使用审批定义 Code。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >approval_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义 ID。
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
        "approval_code": "81D31358-93AF-92D6-7425-01A5D67C4E71",
        "approval_id": "7090754740375519252"
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
  <md-td>1390004</md-td>
  <md-td>user_id or open_id not found</md-td>
  <md-td>检查传入的 user_id 参数是否正确，user_id 的类型需要和 user_id_type 一致，且需要确保 ID 值正确。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1390009</md-td>
  <md-td>no operation permission</md-td>
  <md-td>没有操作权限。请前往[飞书审批管理后台](https://www.feishu.cn/approval/admin/approvalList)，进入指定审批定义编辑页面，在流程设计里的审批操作权限内，检查操作权限是否正确配置。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1390013</md-td>
  <md-td>unsupported approval for free process</md-td>
  <md-td>不支持自定义审批流程。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1390015</md-td>
  <md-td>approval is not active</md-td>
  <md-td>审批定义已停用，请确保当前所用的审批定义已启用后重试。你可以登录[飞书审批管理后台](https://www.feishu.cn/approval/admin/approvalList)，查看相应审批定义是否被停用。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3991337412ec292a8f61d5c57a5d590b_MbHV5E0Qmr.png)</md-td>
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


