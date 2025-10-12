<!--
title: 获取部门列表
id: 7359428154233700356
fullPath: /uAjLw4CM/ukTMukTMukTM/directory-v1/department/filter
updatedAt: 1752138978000
source: https://open.feishu.cn/document/directory-v1/department/filter
-->
# 获取部门列表

本接口用于依据指定条件，批量获取符合条件的部门详情列表。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=directory&version=v1&resource=department&method=filter)

:::html
<md-alert type="tip">
注意：
- 本接口支持tenant_access_token和user_access_token。
  - 使用tenant_access_token时，数据权限遵循应用的通讯录权限范围，返回的字段数据为应用有权限的字段。可以在开发者后台-应用详情-权限管理中查看通讯录授权范围。
  - 使用user_access_token时，默认为管理员用户，将校验管理员管理范围。当用户有多个管理员身份均可查看部门信息时，管理员管理范围取最大集。管理员权限可查看帮助中心文档： [管理员创建管理员角色及分配权限](https://www.feishu.cn/hc/zh-CN/articles/360043495213-%E7%AE%A1%E7%90%86%E5%91%98%E5%88%9B%E5%BB%BA%E7%AE%A1%E7%90%86%E5%91%98%E8%A7%92%E8%89%B2%E5%8F%8A%E5%88%86%E9%85%8D%E6%9D%83%E9%99%90#tabs0|lineguid-dU31C)
</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="error">

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
      <md-td>https://open.feishu.cn/open-apis/directory/v1/departments/filter</md-td>
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
            
      </md-th>
      <md-td>
            <md-perm name="directory:department:list" desc="调用 API 获取部门列表" support_app_types="custom,isv" tags="">调用 API 获取部门列表</md-perm>
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
        <md-perm name="directory:department.base:read" desc="查看部门基础信息" support_app_types="custom,isv" tags="">查看部门基础信息</md-perm>
        <md-perm name="directory:department.count:read" desc="查看部门成员与子部门计数" support_app_types="custom,isv" tags="">查看部门成员与子部门计数</md-perm>
        <md-perm name="directory:department.custom_field:read" desc="查看部门自定义字段信息" support_app_types="custom,isv" tags="">查看部门自定义字段信息</md-perm>
        <md-perm name="directory:department.data_source:read" desc="查看部门数据来源" support_app_types="custom,isv" tags="">查看部门数据来源</md-perm>
        <md-perm name="directory:department.department_path:read" desc="查看部门路径信息" support_app_types="custom,isv" tags="">查看部门路径信息</md-perm>
        <md-perm name="directory:department.external_id:read" desc="查看部门自定义 ID" support_app_types="custom,isv" tags="">查看部门自定义 ID</md-perm>
        <md-perm name="directory:department.has_child:read" desc="查看部门是否有子部门" support_app_types="custom,isv" tags="">查看部门是否有子部门</md-perm>
        <md-perm name="directory:department.leader:read" desc="查看部门负责人信息" support_app_types="custom,isv" tags="">查看部门负责人信息</md-perm>
        <md-perm name="directory:department.name:read" desc="查看部门的名称" support_app_types="custom,isv" tags="">查看部门的名称</md-perm>
        <md-perm name="directory:department.order_weight:read" desc="查看部门排序权重" support_app_types="custom,isv" tags="">查看部门排序权重</md-perm>
        <md-perm name="directory:department.organization:read" desc="查看部门组织架构信息" support_app_types="custom,isv" tags="">查看部门组织架构信息</md-perm>
        <md-perm name="directory:department.parent_id:read" desc="查看部门的父部门 ID" support_app_types="custom,isv" tags="">查看部门的父部门 ID</md-perm>
        <md-perm name="directory:department.status:read" desc="查看部门的停启用状态" support_app_types="custom,isv" tags="">查看部门的停启用状态</md-perm>
        <md-perm name="directory:employee.base.external_id:read" desc="查看员工自定义 ID" support_app_types="custom,isv" tags="">查看员工自定义 ID</md-perm>
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
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"

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
	<md-text type="field-name" >employee_id_type</md-text>
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
<md-enum-item key="employee_id" >企业内在职员工的唯一标识。支持自定义，未自定义时系统自动生成。ID支持修改。
获取employee_id的方式：
  - 企业管理员在 管理后台 > 组织架构 > 成员与部门 页面，点击 成员详情，查询员工ID
  - 通过 [批量获取员工列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/filter) 的接口，通过手机号或邮箱查询员工ID。</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `employee_id`，字段权限要求**：
<md-perm name="directory:employee.base.external_id:read" desc="查看员工自定义 ID" support_app_types="custom,isv" tags="">查看员工自定义 ID</md-perm>
	</md-dt-td>
</md-dt-tr>


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
	此次调用中使用的部门ID的类型

**示例值**：open_department_id

**可选值有**：
<md-enum>
<md-enum-item key="open_department_id" >用来在具体某个应用中标识一个部门，同一个部门 在不同应用中的 open_department_id 相同。</md-enum-item>
<md-enum-item key="department_id" >用来标识租户内一个唯一的部门</md-enum-item>
</md-enum>

**默认值**：`open_department_id`
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
	<md-text type="field-name" >filter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >multi_filter_condition</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	查询条件[了解更多：查询条件用法](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/filter-usage)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >conditions</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >filter_condition\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	比较表达式列表。多个表达式之间的关系默认为“and”

**数据校验规则**：

- 长度范围：`0` ～ `10`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	筛选条件的左值，值为字段的参数名称。

**可选的筛选条件有：**
- parent_department_id

**示例值**："parent_department_id"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	比较操作符

**可选值有：**
- eq：等于，支持任何类型的左值
- in：属于任一，不支持parent_department_id，右值为多个目标筛选值构成的数组（不得超过100个）

**示例值**："eq"
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
	筛选条件的右值，内容为左值字段类型及操作符组合下，对应的值类型。其取值类型需与查询参数department_id_type的取值一致，最大长度为64字符，支持数字和字母。
使用parent_department_id条件时，根部门的ID可使用"0"

**示例值**："\"0\""
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >required_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	需要查询的字段列表。将按照传递的字段列表返回有权限的行、列数据。不传则不会返回任何字段[了解更多：字段枚举说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/field-enumeration)

**示例值**：["name"]

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_request</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >page_condition</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	分页信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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
	本次请求条数，最大100条

**默认值**：20
**最小值**：0

**示例值**：100
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
	否
	</md-dt-td>
	<md-dt-td>
	顺序分页查询，不能跳页查询，支持深分页，在需要遍历全部数据的场景只能使用该方式。第一次传空字符串或者不传，后面传上一次的返回值中的page_token

**示例值**："iuu14140aknladna91ndas"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "filter": {
        "conditions": [
            {
                "field": "parent_department_id",
                "operator": "eq",
                "value": "\"0\""
            }
        ]
    },
    "required_fields": [
        "name"
    ],
    "page_request": {
        "page_size": 100,
        "page_token": "iuu14140aknladna91ndas"
    }
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
	<md-text type="field-name" >departments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门ID，与department_id_type类型保持一致

**字段权限要求（满足任一）**：
<md-perm name="directory:department.base:read" desc="查看部门基础信息" support_app_types="custom,isv" tags="">查看部门基础信息</md-perm>
<md-perm name="directory:department.external_id:read" desc="查看部门自定义 ID" support_app_types="custom,isv" tags="">查看部门自定义 ID</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >department_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department_count</md-text>
	</md-dt-td>
	<md-dt-td>
	部门成员计数与子部门计数。计算结果可能会有延迟

**字段权限要求（满足任一）**：
<md-perm name="directory:department.count:read" desc="查看部门成员与子部门计数" support_app_types="custom,isv" tags="">查看部门成员与子部门计数</md-perm>
<md-perm name="directory:department.organization:read" desc="查看部门组织架构信息" support_app_types="custom,isv" tags="">查看部门组织架构信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >recursive_members_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	递归成员数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >direct_members_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	直属成员数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >recursive_members_count_exclude_leaders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	递归成员数量(不含leader)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >recursive_departments_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	递归子部门数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >direct_departments_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	直属子部门数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >has_child</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否有子部门

**字段权限要求（满足任一）**：
<md-perm name="directory:department.has_child:read" desc="查看部门是否有子部门" support_app_types="custom,isv" tags="">查看部门是否有子部门</md-perm>
<md-perm name="directory:department.organization:read" desc="查看部门组织架构信息" support_app_types="custom,isv" tags="">查看部门组织架构信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >leaders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department_leader\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门负责人

**字段权限要求**：
<md-perm name="directory:department.leader:read" desc="查看部门负责人信息" support_app_types="custom,isv" tags="">查看部门负责人信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >leader_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	部门负责人类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >主</md-enum-item>
<md-enum-item key="2" >副</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >leader_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门负责人ID，与employee_id_type类型保持一致
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >parent_department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	父部门ID，与department_id_type类型保持一致

**字段权限要求（满足任一）**：
<md-perm name="directory:department.organization:read" desc="查看部门组织架构信息" support_app_types="custom,isv" tags="">查看部门组织架构信息</md-perm>
<md-perm name="directory:department.parent_id:read" desc="查看部门的父部门 ID" support_app_types="custom,isv" tags="">查看部门的父部门 ID</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	部门名称

**字段权限要求（满足任一）**：
<md-perm name="directory:department.base:read" desc="查看部门基础信息" support_app_types="custom,isv" tags="">查看部门基础信息</md-perm>
<md-perm name="directory:department.name:read" desc="查看部门的名称" support_app_types="custom,isv" tags="">查看部门的名称</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >default_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	默认值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >i18n_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, string&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化值，key为zh_cn, ja_jp, en_us, value为对应的值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >enabled_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否启用

**字段权限要求**：
<md-perm name="directory:department.status:read" desc="查看部门的停启用状态" support_app_types="custom,isv" tags="">查看部门的停启用状态</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >order_weight</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门排序权重

**字段权限要求（满足任一）**：
<md-perm name="directory:department.order_weight:read" desc="查看部门排序权重" support_app_types="custom,isv" tags="">查看部门排序权重</md-perm>
<md-perm name="directory:department.organization:read" desc="查看部门组织架构信息" support_app_types="custom,isv" tags="">查看部门组织架构信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_field_values</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_field_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门自定义字段值

**字段权限要求**：
<md-perm name="directory:department.custom_field:read" desc="查看部门自定义字段信息" support_app_types="custom,isv" tags="">查看部门自定义字段信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >field_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >多行文本</md-enum-item>
<md-enum-item key="2" >网页链接</md-enum-item>
<md-enum-item key="3" >枚举选项</md-enum-item>
<md-enum-item key="4" >人员</md-enum-item>
<md-enum-item key="9" >电话</md-enum-item>
<md-enum-item key="10" >多选枚举类型(目前仅支持文本类型)</md-enum-item>
<md-enum-item key="11" >人员列表</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >text_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	文本字段值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >default_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	默认值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >i18n_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, string&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化值，key为zh_cn, ja_jp, en_us, value为对应的值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >url_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >url_value</md-text>
	</md-dt-td>
	<md-dt-td>
	网页链接字段值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >link_text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	网页标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >default_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	默认值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >i18n_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, string&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化值，key为zh_cn, ja_jp, en_us, value为对应的值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	移动端网页链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >pcurl</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	桌面端网页链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >enum_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >enum_value</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举字段值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >enum_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	选项结果ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >enum_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	选项类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >文本</md-enum-item>
<md-enum-item key="2" >图片</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >user_values</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	人员字段值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	人员ID，与employee_id_type类型保持一致
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >phone_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >phone_value</md-text>
	</md-dt-td>
	<md-dt-td>
	电话字段值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >phone_number</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	电话号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >extension_number</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分机号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >field_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >department_path_infos</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department_base_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门路径信息。排列顺序为根级到末级，不包含根部门

**字段权限要求**：
<md-perm name="directory:department.department_path:read" desc="查看部门路径信息" support_app_types="custom,isv" tags="">查看部门路径信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门ID，与department_id_type类型保持一致
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >department_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	i18n文本
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >default_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	默认值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >i18n_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, string&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化值，key为zh_cn, ja_jp, en_us, value为对应的值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >data_source</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	数据来源

**可选值有**：
<md-enum>
<md-enum-item key="1" >管理后台</md-enum-item>
<md-enum-item key="2" >人事企业版</md-enum-item>
<md-enum-item key="3" >SCIM</md-enum-item>
</md-enum>

**字段权限要求（满足任一）**：
<md-perm name="directory:department.base:read" desc="查看部门基础信息" support_app_types="custom,isv" tags="">查看部门基础信息</md-perm>
<md-perm name="directory:department.data_source:read" desc="查看部门数据来源" support_app_types="custom,isv" tags="">查看部门数据来源</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >page_response</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >page_response</md-text>
	</md-dt-td>
	<md-dt-td>
	分页结果
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >has_more</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否还有后续结果，如果has_more为true，代表还有数据没有完全返回，需要使用响应结果中的page_token，并再次请求才能取得剩下的数据。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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
	<md-text type="field-name" >abnormals</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >abnormal_record\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	异常信息
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
	异常ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >row_error</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	行级异常

**可选值有**：
<md-enum>
<md-enum-item key="0" >成功</md-enum-item>
<md-enum-item key="1000" >没权限</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >field_errors</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, int&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	列级异常，key为字段名,value为下列枚举<br><br>
**可选值有**：
<md-enum>
<md-enum-item key="1000" >无权限</md-enum-item>
<md-enum-item key="2000" >服务异常</md-enum-item>
<md-enum-item key="2003" >字段不存在</md-enum-item>
</md-enum>
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
        "departments": [
            {
                "department_id": "h12921",
                "department_count": {
                    "recursive_members_count": "100",
                    "direct_members_count": "100",
                    "recursive_members_count_exclude_leaders": "100",
                    "recursive_departments_count": "100",
                    "direct_departments_count": "100"
                },
                "has_child": true,
                "leaders": [
                    {
                        "leader_type": 1,
                        "leader_id": "u273y71"
                    }
                ],
                "parent_department_id": "h12921",
                "name": {
                    "default_value": "张三",
                    "i18n_value": {
                        "zh_cn": "中文",
                        "ja_jp": "ja_jp_name",
                        "en_us": "en_us_name"
                    }
                },
                "enabled_status": true,
                "order_weight": "10",
                "custom_field_values": [
                    {
                        "field_type": "1",
                        "text_value": {
                            "default_value": "张三",
                            "i18n_value": {
                                "zh_cn": "中文",
                                "ja_jp": "ja_jp_name",
                                "en_us": "en_us_name"
                            }
                        },
                        "url_value": {
                            "link_text": {
                                "default_value": "张三",
                                "i18n_value": {
                                    "zh_cn": "中文",
                                    "ja_jp": "ja_jp_name",
                                    "en_us": "en_us_name"
                                }
                            },
                            "url": "https://m.bytedance.com/afnasjfna",
                            "pcurl": "http://www.fs.cn"
                        },
                        "enum_value": {
                            "enum_ids": [
                                "1"
                            ],
                            "enum_type": "1"
                        },
                        "user_values": [
                            {
                                "ids": [
                                    "1"
                                ]
                            }
                        ],
                        "phone_value": {
                            "phone_number": "18812345678",
                            "extension_number": "234234234"
                        },
                        "field_key": "C-1000001"
                    }
                ],
                "department_path_infos": [
                    {
                        "department_id": "1",
                        "department_name": {
                            "default_value": "张三",
                            "i18n_value": {
                                "zh_cn": "中文",
                                "ja_jp": "ja_jp_name",
                                "en_us": "en_us_name"
                            }
                        }
                    }
                ],
                "data_source": 1
            }
        ],
        "page_response": {
            "has_more": true,
            "page_token": "hiofbsabui214iokncaub"
        },
        "abnormals": [
            {
                "id": "eedasfwe",
                "row_error": 0,
                "field_errors": {
                    "name": 1000
                }
            }
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
  <md-td>2221004</md-td>
  <md-td>invalid page token</md-td>
  <md-td>分页token无效，请检查page_token参数是否正确或已过期。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221005</md-td>
  <md-td>no page request</md-td>
  <md-td>无分页参数，请传入有效的page_request参数。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2220009</md-td>
  <md-td>Filter field is invalid</md-td>
  <md-td>无效的filter，请检查filter参数的格式是否符合要求。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2220010</md-td>
  <md-td>Exceeded the limit size</md-td>
  <md-td>分页大小超过限制，请将page_size参数调整至最大100以内。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2220012</md-td>
  <md-td>The field is not support filter</md-td>
  <md-td>相关字段不支持过滤，请使用支持过滤的字段（如parent_department_id）。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2220013</md-td>
  <md-td>The field does not support the operator</md-td>
  <md-td>字段不支持该操作符，请使用字段支持的操作符（如eq）。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2220014</md-td>
  <md-td>Invalid field value</md-td>
  <md-td>非法字段右值，请检查value参数的值是否符合字段类型及操作符的要求。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




