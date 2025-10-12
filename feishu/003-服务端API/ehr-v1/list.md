<!--
title: 批量获取员工花名册信息
id: 6948366696944648195
fullPath: /uAjLw4CM/ukTMukTMukTM/ehr/ehr-v1/employee/list
updatedAt: 1734660749000
source: https://open.feishu.cn/document/server-docs/ehr-v1/list
-->
# 批量获取员工花名册信息

根据员工飞书用户 ID / 员工状态 / 雇员类型等搜索条件 ，批量获取员工花名册字段信息。字段包括「系统标准字段 / system_fields」和「自定义字段 / custom_fields」。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=ehr&version=v1&resource=employee&method=list)

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
      <md-td>https://open.feishu.cn/open-apis/ehr/v1/employees</md-td>
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
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="ehr:employee:readonly" desc="获取飞书人事（标准版）应用中的员工花名册信息" support_app_types="custom" tags="">获取飞书人事（标准版）应用中的员工花名册信息</md-perm>
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
	<md-text type="field-name" >view</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	返回数据类型，不传值默认为 basic。

**示例值**：basic

**可选值有**：
<md-enum>
<md-enum-item key="basic" >概览，只返回 id、name 等基本信息</md-enum-item>
<md-enum-item key="full" >明细，返回系统标准字段和自定义字段集合</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	员工状态，不传代表查询所有员工状态

实际在职 = 2&4

可同时查询多个状态的记录，如 status=2&status=4

**示例值**：2

**可选值有**：
<md-enum>
<md-enum-item key="1" >待入职</md-enum-item>
<md-enum-item key="2" >在职</md-enum-item>
<md-enum-item key="3" >已取消入职</md-enum-item>
<md-enum-item key="4" >待离职</md-enum-item>
<md-enum-item key="5" >已离职</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	人员类型，不传代表查询所有人员类型

同时可使用自定义员工类型的 int 值进行查询，可通过下方接口获取到该租户的自定义员工类型的名称，参见 [获取人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >全职</md-enum-item>
<md-enum-item key="2" >实习</md-enum-item>
<md-enum-item key="3" >顾问</md-enum-item>
<md-enum-item key="4" >外包</md-enum-item>
<md-enum-item key="5" >劳务</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	查询开始时间（入职时间 &gt;= 此时间）

**示例值**：1608690517811
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	查询结束时间（入职时间 &lt;= 此时间）

**示例值**：1608690517811
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


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	user_id、open_id 或 union_id，默认为 open_id。

如果传入的值不是 open_id，需要一并传入 user_id_type 参数。

可一次查询多个 id 的用户，例如：user_ids=ou_8ebd4f35d7101ffdeb4771d7c8ec517e&user_ids=ou_7abc4f35d7101ffdeb4771dabcde

[用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)

**示例值**：ou_8ebd4f35d7101ffdeb4771d7c8ec517e

**数据校验规则**：

- 最大长度：`100`
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

**示例值**：10
	</md-dt-td>
</md-dt-tr>


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
	分页大小，取值范围 1~100，默认 10

**示例值**：10

**数据校验规则**：

- 取值范围：`1` ～ `100`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

请求体示例



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
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >employee\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	员工列表
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
	员工的用户 ID


user_id_type 为 user_id 时返回 user_id；


user_id_type 为 open_id 时返回 open_id；


user_id_type 为 union_id 时返回 union_id；


「待入职」和「已取消入职」的员工，此字段值为 null
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >system_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >system_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	系统字段
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
	中文姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >en_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	邮箱
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >mobile</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	手机号码
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
	部门的飞书 open_department_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >manager</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >manager</md-text>
	</md-dt-td>
	<md-dt-td>
	上级
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	上级的用户 ID（user_id）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >en_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >job</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >job</md-text>
	</md-dt-td>
	<md-dt-td>
	职位
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	职位 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职位名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >job_level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >job_level</md-text>
	</md-dt-td>
	<md-dt-td>
	职级
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	职级 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职级名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >work_location</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >work_location</md-text>
	</md-dt-td>
	<md-dt-td>
	工作地点
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	工作地点 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工作地点名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >gender</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	性别

**可选值有**：
<md-enum>
<md-enum-item key="1" >男</md-enum-item>
<md-enum-item key="2" >女</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >birthday</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	出生日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >native_region</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >native_region</md-text>
	</md-dt-td>
	<md-dt-td>
	籍贯
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >iso_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	ISO 编码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ethnicity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	民族

**可选值有**：
<md-enum>
<md-enum-item key="1" >汉族</md-enum-item>
<md-enum-item key="2" >蒙古族</md-enum-item>
<md-enum-item key="3" >回族</md-enum-item>
<md-enum-item key="4" >藏族</md-enum-item>
<md-enum-item key="5" >维吾尔族</md-enum-item>
<md-enum-item key="6" >苗族</md-enum-item>
<md-enum-item key="7" >彝族</md-enum-item>
<md-enum-item key="8" >壮族</md-enum-item>
<md-enum-item key="9" >布依族</md-enum-item>
<md-enum-item key="10" >朝鲜族</md-enum-item>
<md-enum-item key="11" >满族</md-enum-item>
<md-enum-item key="12" >侗族</md-enum-item>
<md-enum-item key="13" >瑶族</md-enum-item>
<md-enum-item key="14" >白族</md-enum-item>
<md-enum-item key="15" >土家族</md-enum-item>
<md-enum-item key="16" >哈尼族</md-enum-item>
<md-enum-item key="17" >哈萨克族</md-enum-item>
<md-enum-item key="18" >傣族</md-enum-item>
<md-enum-item key="19" >黎族</md-enum-item>
<md-enum-item key="20" >傈僳族</md-enum-item>
<md-enum-item key="21" >佤族</md-enum-item>
<md-enum-item key="22" >畲族</md-enum-item>
<md-enum-item key="23" >高山族</md-enum-item>
<md-enum-item key="24" >拉祜族</md-enum-item>
<md-enum-item key="25" >水族</md-enum-item>
<md-enum-item key="26" >东乡族</md-enum-item>
<md-enum-item key="27" >纳西族</md-enum-item>
<md-enum-item key="28" >景颇族</md-enum-item>
<md-enum-item key="29" >阿昌族</md-enum-item>
<md-enum-item key="30" >柯尔克孜族</md-enum-item>
<md-enum-item key="31" >土族</md-enum-item>
<md-enum-item key="32" >达斡尔族</md-enum-item>
<md-enum-item key="33" >仫佬族</md-enum-item>
<md-enum-item key="34" >羌族</md-enum-item>
<md-enum-item key="35" >布朗族</md-enum-item>
<md-enum-item key="36" >撒拉族</md-enum-item>
<md-enum-item key="37" >毛南族</md-enum-item>
<md-enum-item key="38" >仡佬族</md-enum-item>
<md-enum-item key="39" >锡伯族</md-enum-item>
<md-enum-item key="40" >普米族</md-enum-item>
<md-enum-item key="41" >塔吉克族</md-enum-item>
<md-enum-item key="42" >怒族</md-enum-item>
<md-enum-item key="43" >乌孜别克族</md-enum-item>
<md-enum-item key="44" >俄罗斯族</md-enum-item>
<md-enum-item key="45" >鄂温克族</md-enum-item>
<md-enum-item key="46" >德昂族</md-enum-item>
<md-enum-item key="47" >保安族</md-enum-item>
<md-enum-item key="48" >裕固族</md-enum-item>
<md-enum-item key="49" >京族</md-enum-item>
<md-enum-item key="50" >塔塔尔族</md-enum-item>
<md-enum-item key="51" >独龙族</md-enum-item>
<md-enum-item key="52" >鄂伦春族</md-enum-item>
<md-enum-item key="53" >赫哲族</md-enum-item>
<md-enum-item key="54" >门巴族</md-enum-item>
<md-enum-item key="55" >珞巴族</md-enum-item>
<md-enum-item key="56" >基诺族</md-enum-item>
<md-enum-item key="57" >其他</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >marital_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	婚姻状况

**可选值有**：
<md-enum>
<md-enum-item key="1" >未婚</md-enum-item>
<md-enum-item key="2" >已婚</md-enum-item>
<md-enum-item key="3" >离异</md-enum-item>
<md-enum-item key="4" >其他</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >political_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	政治面貌

**可选值有**：
<md-enum>
<md-enum-item key="1" >中共党员</md-enum-item>
<md-enum-item key="2" >中国农工民主党</md-enum-item>
<md-enum-item key="3" >中国国民党革命委员会</md-enum-item>
<md-enum-item key="4" >中国民主促进会会员</md-enum-item>
<md-enum-item key="5" >中国民主同盟成员</md-enum-item>
<md-enum-item key="6" >中国民主建国会</md-enum-item>
<md-enum-item key="7" >中国致公党党员</md-enum-item>
<md-enum-item key="8" >九三学社社员</md-enum-item>
<md-enum-item key="9" >共青团员</md-enum-item>
<md-enum-item key="10" >其它党派成员</md-enum-item>
<md-enum-item key="11" >民主人士</md-enum-item>
<md-enum-item key="12" >群众</md-enum-item>
<md-enum-item key="13" >台湾民主自治同盟盟员</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >entered_workforce_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	参加工作日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	证件类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >居民身份证</md-enum-item>
<md-enum-item key="2" >港澳居民来往内地通行证</md-enum-item>
<md-enum-item key="3" >台湾居民来往大陆通行证</md-enum-item>
<md-enum-item key="4" >护照</md-enum-item>
<md-enum-item key="5" >其他</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id_number</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	证件号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >hukou_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	户口类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >本市城镇</md-enum-item>
<md-enum-item key="2" >外埠城镇</md-enum-item>
<md-enum-item key="3" >本市农村</md-enum-item>
<md-enum-item key="4" >外埠农村</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >hukou_location</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	户口所在地
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >bank_account_number</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	银行卡号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >bank_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	开户行
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >social_security_account</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	社保账号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >provident_fund_account</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	公积金账号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >employee_no</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >employee_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	人员类型

同时可读取到自定义员工类型的 int 值，可通过下方接口获取到该租户的自定义员工类型的名称，参见 [获取人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)

**可选值有**：
<md-enum>
<md-enum-item key="1" >正式</md-enum-item>
<md-enum-item key="2" >实习</md-enum-item>
<md-enum-item key="3" >顾问</md-enum-item>
<md-enum-item key="4" >外包</md-enum-item>
<md-enum-item key="5" >劳务</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	员工状态

**可选值有**：
<md-enum>
<md-enum-item key="1" >待入职</md-enum-item>
<md-enum-item key="2" >在职</md-enum-item>
<md-enum-item key="3" >已取消入职</md-enum-item>
<md-enum-item key="4" >待离职</md-enum-item>
<md-enum-item key="5" >已离职</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >hire_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	入职日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >probation_months</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	试用期（月）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >conversion_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	转正日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >application</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	转正申请

**可选值有**：
<md-enum>
<md-enum-item key="1" >未申请</md-enum-item>
<md-enum-item key="2" >审批中</md-enum-item>
<md-enum-item key="3" >被驳回</md-enum-item>
<md-enum-item key="4" >已通过</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >application_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	转正状态

**可选值有**：
<md-enum>
<md-enum-item key="1" >无需转正</md-enum-item>
<md-enum-item key="2" >待转正</md-enum-item>
<md-enum-item key="3" >已转正</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >last_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	离职日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >departure_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	离职类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >主动</md-enum-item>
<md-enum-item key="2" >被动</md-enum-item>
<md-enum-item key="3" >其他</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >departure_reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	离职原因

**可选值有**：
<md-enum>
<md-enum-item key="1" >身体、家庭原因</md-enum-item>
<md-enum-item key="2" >职业发展</md-enum-item>
<md-enum-item key="3" >薪资福利不满意</md-enum-item>
<md-enum-item key="4" >工作压力大</md-enum-item>
<md-enum-item key="5" >合同到期不续签</md-enum-item>
<md-enum-item key="6" >其他</md-enum-item>
<md-enum-item key="7" >无法胜任工作</md-enum-item>
<md-enum-item key="8" >组织业务调整和岗位优化</md-enum-item>
<md-enum-item key="9" >违反公司条例</md-enum-item>
<md-enum-item key="10" >试用期未通过</md-enum-item>
<md-enum-item key="11" >其他</md-enum-item>
<md-enum-item key="12" >不满意工作内容</md-enum-item>
<md-enum-item key="13" >不认可上级或管理层</md-enum-item>
<md-enum-item key="14" >对公司文化缺乏认同</md-enum-item>
<md-enum-item key="15" >组织架构调整（主动离职）</md-enum-item>
<md-enum-item key="16" >跳槽</md-enum-item>
<md-enum-item key="17" >转行</md-enum-item>
<md-enum-item key="18" >家庭原因</md-enum-item>
<md-enum-item key="19" >健康状况不佳</md-enum-item>
<md-enum-item key="20" >工作地点原因</md-enum-item>
<md-enum-item key="21" >意外</md-enum-item>
<md-enum-item key="22" >身故</md-enum-item>
<md-enum-item key="23" >解雇</md-enum-item>
<md-enum-item key="24" >工作产出低</md-enum-item>
<md-enum-item key="25" >违法</md-enum-item>
<md-enum-item key="26" >其他（其他）</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >departure_notes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	离职备注
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >contract_company</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >contract_company</md-text>
	</md-dt-td>
	<md-dt-td>
	合同公司
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	公司 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	公司名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >contract_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	合同类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >固定期限劳动合同</md-enum-item>
<md-enum-item key="2" >无固定期限劳动合同</md-enum-item>
<md-enum-item key="3" >实习协议</md-enum-item>
<md-enum-item key="4" >外包协议</md-enum-item>
<md-enum-item key="5" >劳务派遣合同</md-enum-item>
<md-enum-item key="6" >返聘协议</md-enum-item>
<md-enum-item key="7" >其他</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >contract_start_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	合同开始日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >contract_expiration_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	合同到期日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >contract_sign_times</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	劳动合同签订次数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >personal_email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	个人邮箱
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >family_address</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	家庭地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >primary_emergency_contact</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >emergency_contact</md-text>
	</md-dt-td>
	<md-dt-td>
	主要紧急联系人
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	紧急联系人姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >relationship</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	与紧急联系人的关系

**可选值有**：
<md-enum>
<md-enum-item key="1" >父母</md-enum-item>
<md-enum-item key="2" >配偶</md-enum-item>
<md-enum-item key="3" >子女</md-enum-item>
<md-enum-item key="4" >兄弟姐妹</md-enum-item>
<md-enum-item key="5" >朋友</md-enum-item>
<md-enum-item key="6" >其他</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mobile</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	手机号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >emergency_contact</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >emergency_contact\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	紧急联系人
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	紧急联系人姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >relationship</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	与紧急联系人的关系

**可选值有**：
<md-enum>
<md-enum-item key="1" >父母</md-enum-item>
<md-enum-item key="2" >配偶</md-enum-item>
<md-enum-item key="3" >子女</md-enum-item>
<md-enum-item key="4" >兄弟姐妹</md-enum-item>
<md-enum-item key="5" >朋友</md-enum-item>
<md-enum-item key="6" >其他</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mobile</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	手机号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >highest_level_of_edu</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >education</md-text>
	</md-dt-td>
	<md-dt-td>
	最高学历
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	学历

**可选值有**：
<md-enum>
<md-enum-item key="1" >小学</md-enum-item>
<md-enum-item key="2" >初中</md-enum-item>
<md-enum-item key="3" >高中</md-enum-item>
<md-enum-item key="4" >职业高级中学</md-enum-item>
<md-enum-item key="5" >中等专业学校</md-enum-item>
<md-enum-item key="6" >大专</md-enum-item>
<md-enum-item key="7" >本科</md-enum-item>
<md-enum-item key="8" >硕士</md-enum-item>
<md-enum-item key="9" >博士</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >school</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	毕业学校
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >major</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	专业
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >degree</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	学位

**可选值有**：
<md-enum>
<md-enum-item key="1" >学士</md-enum-item>
<md-enum-item key="2" >硕士</md-enum-item>
<md-enum-item key="3" >博士</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	开始日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >end</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	结束日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >education</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >education\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	教育经历
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	学历

**可选值有**：
<md-enum>
<md-enum-item key="1" >小学</md-enum-item>
<md-enum-item key="2" >初中</md-enum-item>
<md-enum-item key="3" >高中</md-enum-item>
<md-enum-item key="4" >职业高级中学</md-enum-item>
<md-enum-item key="5" >中等专业学校</md-enum-item>
<md-enum-item key="6" >大专</md-enum-item>
<md-enum-item key="7" >本科</md-enum-item>
<md-enum-item key="8" >硕士</md-enum-item>
<md-enum-item key="9" >博士</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >school</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	毕业学校
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >major</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	专业
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >degree</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	学位

**可选值有**：
<md-enum>
<md-enum-item key="1" >学士</md-enum-item>
<md-enum-item key="2" >硕士</md-enum-item>
<md-enum-item key="3" >博士</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	开始日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >end</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	结束日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >former_work_exp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >work_experience</md-text>
	</md-dt-td>
	<md-dt-td>
	前工作经历
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >company</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	公司
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >department</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >job</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职位
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	开始日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >end</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	截止日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工作描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >work_exp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >work_experience\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	工作经历
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >company</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	公司
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >department</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >job</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职位
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	开始日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >end</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	截止日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工作描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id_photo_po_side</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	身份证照片（人像面）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下载文件所需要的 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mime_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	大小
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id_photo_em_side</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	身份证照片（国徽面）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下载文件所需要的 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mime_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	大小
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id_photo</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	证件照
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下载文件所需要的 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mime_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	大小
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >diploma_photo</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	学位证书
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下载文件所需要的 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mime_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	大小
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >graduation_cert</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	毕业证书
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下载文件所需要的 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mime_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	大小
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >cert_of_merit</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	奖励证明
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下载文件所需要的 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mime_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	大小
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >offboarding_file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	离职证明
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下载文件所需要的 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >mime_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	大小
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >cancel_onboarding_reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	取消入职原因

**可选值有**：
<md-enum>
<md-enum-item key="1" >个人原因</md-enum-item>
<md-enum-item key="2" >原单位留任</md-enum-item>
<md-enum-item key="3" >接受其他 Offer</md-enum-item>
<md-enum-item key="4" >其他</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >cancel_onboarding_notes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	取消入职备注
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >employee_form_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	入职登记表状态

**可选值有**：
<md-enum>
<md-enum-item key="1" >未发送</md-enum-item>
<md-enum-item key="2" >待提交</md-enum-item>
<md-enum-item key="3" >已提交</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	创建时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >update_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	更新时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_fields\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >label</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段名称
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
	自定义字段类型

**可选值有**：
<md-enum>
<md-enum-item key="text" >文本类型</md-enum-item>
<md-enum-item key="date" >日期类型，如 2020-01-01</md-enum-item>
<md-enum-item key="option" >枚举类型</md-enum-item>
<md-enum-item key="file" >附件类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	根据 type 不同，结构不同，不同 type 对应的数据结构在 type 的枚举值中有描述
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
        "items": [
            {
                "user_id": "ou_db362c0e79f5a26db1ca8e94698ee417",
                "system_fields": {
                    "name": "张三",
                    "en_name": "Tony Zhang",
                    "email": "a@b.com",
                    "mobile": "(+86) 13812345678",
                    "department_id": "od-4d551617a5da3cec26666d33175dc8ca",
                    "manager": {
                        "user_id": "ou_db362c0e79f5a26db1ca8e94698ee417",
                        "name": "李四",
                        "en_name": "Tom Li"
                    },
                    "job": {
                        "id": 1695838220091399,
                        "name": "测试工程师"
                    },
                    "job_level": {
                        "id": 1695838220091399,
                        "name": "CEO"
                    },
                    "work_location": {
                        "id": 1695838220091399,
                        "name": "武汉"
                    },
                    "gender": 1,
                    "birthday": "2020-01-01",
                    "native_region": {
                        "iso_code": "CHN-11",
                        "name": "北京"
                    },
                    "ethnicity": 2,
                    "marital_status": 2,
                    "political_status": 2,
                    "entered_workforce_date": "2020-01-01",
                    "id_type": 1,
                    "id_number": "110122XXXXXX",
                    "hukou_type": 1,
                    "hukou_location": "北京市海淀区XXXX",
                    "bank_account_number": "1243253453",
                    "bank_name": "招商银行",
                    "social_security_account": "123124124",
                    "provident_fund_account": "123124235",
                    "employee_no": "TM-00001",
                    "employee_type": 1,
                    "status": 2,
                    "hire_date": "2020-01-01",
                    "probation_months": 2,
                    "conversion_date": "2020-01-01",
                    "application": 1,
                    "application_status": 2,
                    "last_day": "2020-01-01",
                    "departure_type": 1,
                    "departure_reason": 4,
                    "departure_notes": "世界那么大",
                    "contract_company": {
                        "id": 1695838220091399,
                        "name": "油条一号"
                    },
                    "contract_type": 1,
                    "contract_start_date": "2020-01-01",
                    "contract_expiration_date": "2020-01-01",
                    "contract_sign_times": 2,
                    "personal_email": "personal@email.com",
                    "family_address": "北京市海淀区XXXXX",
                    "primary_emergency_contact": {
                        "name": "张三",
                        "relationship": 1,
                        "mobile": "(+86) 13812345678"
                    },
                    "emergency_contact": [
                        {
                            "name": "张三",
                            "relationship": 1,
                            "mobile": "(+86) 13812345678"
                        }
                    ],
                    "highest_level_of_edu": {
                        "level": 8,
                        "school": "XXXX大学",
                        "major": "XXX专业",
                        "degree": 2,
                        "start": "2020-01-01",
                        "end": "2020-01-01"
                    },
                    "education": [
                        {
                            "level": 8,
                            "school": "XXXX大学",
                            "major": "XXX专业",
                            "degree": 2,
                            "start": "2020-01-01",
                            "end": "2020-01-01"
                        }
                    ],
                    "former_work_exp": {
                        "company": "XXXX公司",
                        "department": "部门1",
                        "job": "职位",
                        "start": "2020-01-01",
                        "end": "2020-01-01",
                        "description": "工作描述"
                    },
                    "work_exp": [
                        {
                            "company": "XXXX公司",
                            "department": "部门1",
                            "job": "职位",
                            "start": "2020-01-01",
                            "end": "2020-01-01",
                            "description": "工作描述"
                        }
                    ],
                    "id_photo_po_side": [
                        {
                            "id": "c7273e07ed9e40a394f88c7dccb49212",
                            "mime_type": "png",
                            "name": "Custom Code.png",
                            "size": 57380
                        }
                    ],
                    "id_photo_em_side": [
                        {
                            "id": "c7273e07ed9e40a394f88c7dccb49212",
                            "mime_type": "png",
                            "name": "Custom Code.png",
                            "size": 57380
                        }
                    ],
                    "id_photo": [
                        {
                            "id": "c7273e07ed9e40a394f88c7dccb49212",
                            "mime_type": "png",
                            "name": "Custom Code.png",
                            "size": 57380
                        }
                    ],
                    "diploma_photo": [
                        {
                            "id": "c7273e07ed9e40a394f88c7dccb49212",
                            "mime_type": "png",
                            "name": "Custom Code.png",
                            "size": 57380
                        }
                    ],
                    "graduation_cert": [
                        {
                            "id": "c7273e07ed9e40a394f88c7dccb49212",
                            "mime_type": "png",
                            "name": "Custom Code.png",
                            "size": 57380
                        }
                    ],
                    "cert_of_merit": [
                        {
                            "id": "c7273e07ed9e40a394f88c7dccb49212",
                            "mime_type": "png",
                            "name": "Custom Code.png",
                            "size": 57380
                        }
                    ],
                    "offboarding_file": [
                        {
                            "id": "c7273e07ed9e40a394f88c7dccb49212",
                            "mime_type": "png",
                            "name": "Custom Code.png",
                            "size": 57380
                        }
                    ],
                    "cancel_onboarding_reason": 2,
                    "cancel_onboarding_notes": "个人原因",
                    "employee_form_status": 1,
                    "create_time": 1608690517811,
                    "update_time": 1608690517811
                },
                "custom_fields": [
                    {
                        "key": "field_xxxxxxxx",
                        "label": "自定义字段 1",
                        "type": "date",
                        "value": "2021-01-13"
                    }
                ]
            }
        ],
        "page_token": "10",
        "has_more": true
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
  <md-td>500</md-td>
  <md-td>1241001</md-td>
  <md-td>服务器内部错误</md-td>
  <md-td>重试或联系飞书人事（标准版）客服</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1241002</md-td>
  <md-td>请求参数错误</md-td>
  <md-td>检查查询参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1241004</md-td>
  <md-td>你的企业尚未开通飞书人事（标准版）。如需开通，请前往「飞书管理后台」启用飞书人事（标准版）</md-td>
  <md-td>前往「飞书管理后台」启用飞书人事（标准版）</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




