<!--
title: 查看指定审批定义
id: 7114621541589860355
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get
updatedAt: 1745207171000
source: https://open.feishu.cn/document/server-docs/approval-v4/approval/get
-->
# 查看指定审批定义

根据审批定义 Code 以及语言、用户 ID 等筛选条件获取指定审批定义的信息，包括审批定义名称、状态、表单控件以及节点等信息。获取审批定义信息后，可根据信息构造[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)的请求。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=approval&version=v4&resource=approval&method=get)

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
      <md-td>https://open.feishu.cn/open-apis/approval/v4/approvals/:approval_code</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[100 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
	语言可选值，默认为审批定义配置的默认语言。

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
	<md-text type="field-name" >with_admin_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否返回有数据管理权限的审批流程管理员 ID 列表（即响应参数 approval_admin_ids）。

**默认值**：false

**示例值**：false
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
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义状态

**可选值有**：
<md-enum>
<md-enum-item key="ACTIVE" >已启用</md-enum-item>
<md-enum-item key="INACTIVE" >已停用</md-enum-item>
<md-enum-item key="DELETED" >已删除</md-enum-item>
<md-enum-item key="UNKNOWN" >未知</md-enum-item>
</md-enum>
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
	控件参数信息，见下方 **form 字段说明** 章节。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >node_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approval_node_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	节点信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节点名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >need_approver</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为发起人自选节点。取值为 true 表示发起审批时需要提交人自选审批人。
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
	节点 ID
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
	节点自定义 ID，如果没有设置则不返回
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >node_type</md-text>
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
<md-enum-item key="SEQUENTIAL" >依次审批</md-enum-item>
<md-enum-item key="CC_NODE" >抄送节点</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >approver_chosen_multi</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	选择方式是否支持多选。流程的开始、结束节点该值无意义。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >approver_chosen_range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approver_chosen_range\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	提交人自选审批人的范围
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >approver_range_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	指定范围

**可选值有**：
<md-enum>
<md-enum-item key="0" >全公司范围</md-enum-item>
<md-enum-item key="1" >指定角色范围</md-enum-item>
<md-enum-item key="2" >指定用户范围</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >approver_range_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	资源 ID。
- approver_range_type 取值为 0 时，该参数为空。
- approver_range_type 取值为 1 时，该参数取值为角色 ID。
- approver_range_type 取值为 2 时，该参数取值为用户 open_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >require_signature</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	审批同意时是否需要手写签名。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >viewers</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >approval_viewer_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	审批定义的可见人列表
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
	可见人类型

**可选值有**：
<md-enum>
<md-enum-item key="TENANT" >企业内可见</md-enum-item>
<md-enum-item key="DEPARTMENT" >指定部门</md-enum-item>
<md-enum-item key="USER" >指定用户</md-enum-item>
<md-enum-item key="ROLE" >指定角色</md-enum-item>
<md-enum-item key="USER_GROUP" >指定用户组</md-enum-item>
<md-enum-item key="NONE" >任何人都不可见</md-enum-item>
</md-enum>
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
	资源 ID。

- 在可见人类型为 DEPARTMENT 时，ID 为部门 ID。
- 在可见人类型为 USER 时，ID 为用户 open_id。
- 在可见人类型为 ROLE 时，ID 为角色 ID。
- 在可见人类型为 USER_GROUP 时，ID 为用户组 ID。
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
	在可见人类型为 USER 时，表示可见人用户 open_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >approval_admin_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	有数据管理权限的审批流程管理员的 open_id，由参数 with_admin_id 控制是否返回。
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::

### form 字段说明

审批定义各表单控件参数说明详情参见[审批定义表单控件参数](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/approval-definition-form-control-parameters)。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 30%;">参数</md-th>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 10%;">是否必须</md-th>
      <md-th style="width: 45%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>form</md-td>
      <md-td>String</md-td>
      <md-td>是</md-td>
      <md-td>控件信息，JSON 数组格式。</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;∟id</md-td>
      <md-td>String</md-td>
      <md-td>是</md-td>
      <md-td>控件 ID</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;∟custom_id</md-td>
      <md-td>String</md-td>
      <md-td>否</md-td>
      <md-td>控件自定义 ID</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;∟name</md-td>
      <md-td>String</md-td>
      <md-td>是</md-td>
      <md-td>控件名称</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;∟type</md-td>
      <md-td>String</md-td>
      <md-td>是</md-td>
      <md-td>控件类型，各控件类型参考下文 **控件 type 说明** 章节</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;∟enable_default_value</md-td>
      <md-td>bool</md-td>
      <md-td>是</md-td>
      <md-td>此控件是否启用了默认值</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;∟widget_default_value</md-td>
      <md-td>String</md-td>
      <md-td>是</md-td>
      <md-td>控件的默认值</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;∟default_value_type</md-td>
      <md-td>String</md-td>
      <md-td>是</md-td>
      <md-td>控件的默认值类型</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;∟display_condition</md-td>
      <md-td>String</md-td>
      <md-td>否</md-td>
      <md-td>控件显隐条件</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;&emsp;∟conditional</md-td>
      <md-td>String</md-td>
      <md-td>否</md-td>
      <md-td>或（OR）条件</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;&emsp;∟conditions</md-td>
      <md-td>list</md-td>
      <md-td>否</md-td>
      <md-td>条件列表</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;&emsp;&emsp;∟conditional</md-td>
      <md-td>String</md-td>
      <md-td>否</md-td>
      <md-td>多个条件同时满足（AND）</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;&emsp;&emsp;∟expressions</md-td>
      <md-td>list</md-td>
      <md-td>否</md-td>
      <md-td>表达式列表</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;&emsp;&emsp;&emsp;∟source_widget</md-td>
      <md-td>String</md-td>
      <md-td>否</md-td>
      <md-td>控件 ID</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;&emsp;&emsp;&emsp;∟compare_type</md-td>
      <md-td>String</md-td>
      <md-td>否</md-td>
      <md-td>判断规则</md-td>
    </md-tr>
    <md-tr>
      <md-td>&emsp;&emsp;&emsp;&emsp;∟standard_value</md-td>
      <md-td>String</md-td>
      <md-td>否</md-td>
      <md-td>条件值</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

### 控件 type 说明

**控件/控件组** | **type**                    |
| ---------- | --------------------------- |
| 文档         | document                    |
| 单行文本       | input                       |
| 多行文本       | textarea                    |
| 说明         | text                        |
| 数字         | number                      |
| 金额         | amount                      |
| 计算公式       | formula                     |
| 单选         | radioV2                     |
| 多选         | checkboxV2                  |
| 日期         | date                        |
| 日期区间       | dateInterval                |
| 明细/表格      | fieldList                   |
| 引用多维表格     | mutableGroup                |
| 图片/视频      | image/imageV2               |
| 附件         | attachment/attachmentV2     |
| 部门         | department                  |
| 联系人        | contact                     |
| 关联审批       | connect                     |
| 地址         | address                     |
| 定位         | location                    |
| 收款账户       | account                     |
| 电话         | telephone                   |
| 流水号        | serialNumber                |
| 请假控件组      | leaveGroupV2                |
| 加班控件组      | workGroup                   |
| 出差控件组      | tripGroup                   |
| 外出控件组      | outGroup                    |
| 录用控件组      | apaascorehrOnboardingGroup  |
| 换班控件组      | shiftGroupV2                |
| 转正控件组      | apaascorehrRegularateGroup  |
| 补卡控件组      | remedyGroupV2               |
| 调岗控件组      | apaascorehrJobAdjustGroup   |
| 离职控件组      | apaascorehrOffboardingGroup



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {
        "approval_name": "Payment",
        "status": "ACTIVE",
        "form": "[{\"id\": \"widget1\", \"custom_id\": \"user_name\",\"name\": \"Item application\",\"type\": \"textarea\",\"printable\": true,\"required\": true}]",
        "node_list": [
            {
                "name": "Approval",
                "need_approver": true,
                "node_id": "46e6d96cfa756980907209209ec03b64",
                "custom_node_id": "46e6d96cfa756980907209209ec03b64",
                "node_type": "AND",
                "approver_chosen_multi": true,
                "approver_chosen_range": [
                    {
                        "approver_range_type": 2,
                        "approver_range_ids": [
                            "ou_e03053f0541cecc3269d7a9dc34a0b21"
                        ]
                    }
                ],
                "require_signature": false
            }
        ],
        "viewers": [
            {
                "type": "TENANT",
                "id": "ou_e03053f0541cecc3269d7a9dc34a0b21",
                "user_id": "f7cb567e"
            }
        ],
        "approval_admin_ids": [
            "ou_3cda9c969f737aaa05e6915dce306cb9"
        ]
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
  <md-td>1395001</md-td>
  <md-td>There have been some errors. Please try again later</md-td>
  <md-td>服务出现错误。排查方案：

1. 参考接口文档的参数说明，检查请求时传入的参数是否正确。如果传入的有表单参数（form），则需要检查传入的表单控件数据是否正确。

2. 降低请求频率，并重试。如果重试仍然报错，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1390016</md-td>
  <md-td>approval is deleted</md-td>
  <md-td>审批定义已删除，不支持当前操作。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


