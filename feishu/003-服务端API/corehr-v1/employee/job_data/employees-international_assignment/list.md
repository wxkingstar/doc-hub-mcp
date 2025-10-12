<!--
title: 批量查询外派信息
id: 7418041559249354755
fullPath: /uAjLw4CM/ukTMukTMukTM/corehr-v2/employees-international_assignment/list
updatedAt: 1749438642000
source: https://open.feishu.cn/document/corehr-v1/employee/job_data/employees-international_assignment/list
-->
# 批量查询外派信息

查询员工的外派信息：外派类型、外派地点、职务、职级、上级等。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=corehr&version=v2&resource=employees.international_assignment&method=list)

:::html
<md-alert type="tip">
- 本接口会按照「员工资源」权限范围返回数据，请确定在「开发者后台 - 权限管理 - 数据权限」中已申请此数据权限
- 字段未返回请检查：字段权限、用户该字段有值，以及「飞书人事-人员档案设置」中字段是否启用
- 数据按照外派 ID 降序返回
- 关于自定义字段格式，本接口已升级，不需要复杂转义了，可参考[自定义字段说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom-fields-guide)-入职
</md-alert>
:::

:::html
<md-alert type="warn">
- 延迟说明：搜索同步延迟 10s 以内，即：直接创建、更新对象后 10s 内调用此接口可能查询不到数据。
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
      <md-td>https://open.feishu.cn/open-apis/corehr/v2/employees/international_assignments</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[5 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="corehr:employees.international_assignment:read" desc="读取外派信息" support_app_types="custom" tags="">读取外派信息</md-perm>
            <md-perm name="corehr:employees.international_assignment:write" desc="读写外派信息" support_app_types="custom" tags="">读写外派信息</md-perm>
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
        <md-perm name="corehr:employment.international_assignment.compensation_type:read" desc="读取外派薪资类型" support_app_types="custom" tags="">读取外派薪资类型</md-perm>
        <md-perm name="corehr:employment.international_assignment.compensation_type:write" desc="读写外派薪资类型" support_app_types="custom" tags="">读写外派薪资类型</md-perm>
        <md-perm name="corehr:employment.international_assignment.custom_field:read" desc="读取外派自定义字段" support_app_types="custom" tags="">读取外派自定义字段</md-perm>
        <md-perm name="corehr:employment.international_assignment.custom_field:write" desc="读写外派自定义字段" support_app_types="custom" tags="">读写外派自定义字段</md-perm>
        <md-perm name="corehr:employment.international_assignment.job:read" desc="读取外派职务" support_app_types="custom" tags="">读取外派职务</md-perm>
        <md-perm name="corehr:employment.international_assignment.job:write" desc="读写外派职务" support_app_types="custom" tags="">读写外派职务</md-perm>
        <md-perm name="corehr:employment.international_assignment.job_grade:read" desc="读取外派职等" support_app_types="custom" tags="">读取外派职等</md-perm>
        <md-perm name="corehr:employment.international_assignment.job_grade:write" desc="读写外派职等" support_app_types="custom" tags="">读写外派职等</md-perm>
        <md-perm name="corehr:employment.international_assignment.job_level:read" desc="读取外派职级" support_app_types="custom" tags="">读取外派职级</md-perm>
        <md-perm name="corehr:employment.international_assignment.job_level:write" desc="读写外派职级" support_app_types="custom" tags="">读写外派职级</md-perm>
        <md-perm name="corehr:employment.international_assignment.position:read" desc="读取外派岗位" support_app_types="custom" tags="">读取外派岗位</md-perm>
        <md-perm name="corehr:employment.international_assignment.position:write" desc="读写外派岗位" support_app_types="custom" tags="">读写外派岗位</md-perm>
        <md-perm name="corehr:employment.international_assignment.service_company:read" desc="读取外派公司" support_app_types="custom" tags="">读取外派公司</md-perm>
        <md-perm name="corehr:employment.international_assignment.service_company:write" desc="读写外派公司" support_app_types="custom" tags="">读写外派公司</md-perm>
        <md-perm name="corehr:employment.international_assignment.weekly_working_hours:read" desc="读取外派周工作时长" support_app_types="custom" tags="">读取外派周工作时长</md-perm>
        <md-perm name="corehr:employment.international_assignment.weekly_working_hours:write" desc="读写外派周工作时长" support_app_types="custom" tags="">读写外派周工作时长</md-perm>
        <md-perm name="corehr:employment.international_assignment.work_calendar:read" desc="读取外派工作日历" support_app_types="custom" tags="">读取外派工作日历</md-perm>
        <md-perm name="corehr:employment.international_assignment.work_calendar:write" desc="读写外派工作日历" support_app_types="custom" tags="">读写外派工作日历</md-perm>
        <md-perm name="corehr:employment.international_assignment.work_location:read" desc="读取外派地点" support_app_types="custom" tags="">读取外派地点</md-perm>
        <md-perm name="corehr:employment.international_assignment.work_location:write" desc="读写外派地点" support_app_types="custom" tags="">读写外派地点</md-perm>
        <md-perm name="corehr:employment.international_assignment.work_shift:read" desc="读取外派排班类型" support_app_types="custom" tags="">读取外派排班类型</md-perm>
        <md-perm name="corehr:employment.international_assignment.work_shift:write" desc="读写外派排班类型" support_app_types="custom" tags="">读写外派排班类型</md-perm>
        <md-perm name="corehr:employment.international_assignment.working_hours_type:read" desc="读取外派工时制度" support_app_types="custom" tags="">读取外派工时制度</md-perm>
        <md-perm name="corehr:employment.international_assignment.working_hours_type:write" desc="读写外派工时制度" support_app_types="custom" tags="">读写外派工时制度</md-perm>
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
<md-enum-item key="people_corehr_id" >以飞书人事的 ID 来识别用户</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	此次调用中使用的部门 ID 类型

**示例值**：open_department_id

**可选值有**：
<md-enum>
<md-enum-item key="open_department_id" >以 open_department_id 来标识部门</md-enum-item>
<md-enum-item key="department_id" >以 department_id 来标识部门</md-enum-item>
<md-enum-item key="people_corehr_department_id" >以 people_corehr_department_id 来标识部门</md-enum-item>
</md-enum>

**默认值**：`open_department_id`
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
	分页大小

**示例值**：100

**默认值**：`200`

**数据校验规则**：

- 取值范围：`1` ～ `200`
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

**示例值**：123456
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >employment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	雇佣ID
- 可通过[【批量查询员工信息】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee/batch_get)获取详细信息
- 类型必须与 user_id_type 一致

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >international_assignment_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派 ID
- 指定外派记录 ID 查询时，请将 page_size 设为最大值，不返回 has_more 参数

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >effective_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派开始日期
- 范围筛选，格式：yyyy-mm-dd~yyyy-mm-dd

**示例值**：
- "2024-01-01~2024-02-02"
- "~2024-02-02"
- "2024-01-01~"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >expiration_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派结束日期
- 范围筛选，格式：yyyy-mm-dd~yyyy-mm-dd

**示例值**：
- "2024-01-01~2024-02-02"
- "~2024-02-02"
- "2024-01-01~"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >employment_status_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	雇佣状态
- 可通过[【获取字段详情】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：
  - object_api_name：employment
  - custom_api_name：employment_status

**示例值**：hired

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >work_location_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派工作地点
- 可通过[【批量查询地点】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/location/list)获取
- 需要以下权限点之一：
  - <md-perm name="corehr:employment.international_assignment.work_location:read" desc="读取外派地点" support_app_types="custom,isv" >读取外派地点</md-perm>
  - <md-perm name="corehr:employment.international_assignment.work_location:write" desc="读写外派地点" support_app_types="custom,isv" >读写外派地点</md-perm>

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >department_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派部门
- 可通过[【批量查询部门】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/department/batch_get)获取
- 类型与 department_id_type 一致

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >direct_manager_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派直属上级
- 可通过[【批量查询员工信息】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee/batch_get)获取
- 类型与 user_id_type 一致

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >dotted_line_manager_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派虚线上级
- 可通过[【批量查询员工信息】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee/batch_get)获取
- 类型与 user_id_type 一致

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >position_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派岗位
- 功能灰度中，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.position:read" desc="读取外派岗位" support_app_types="custom,isv" >读取外派岗位</md-perm>
   - <md-perm name="corehr:employment.international_assignment.position:write" desc="读写外派岗位" support_app_types="custom,isv" >读写外派岗位</md-perm>

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >job_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派职务
- 可通过[【批量查询职务】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/job/list)获取
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.job:read" desc="读取外派职务" support_app_types="custom,isv" >读取外派职务</md-perm>
   - <md-perm name="corehr:employment.international_assignment.job:write" desc="读写外派职务" support_app_types="custom,isv" >读写外派职务</md-perm>

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >job_family_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派序列
- 可通过[【批量查询序列】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_family/list)获取

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >job_level_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派职级
- 可通过[【批量查询职级】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_level/list)获取
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.job_level:read" desc="读取外派职级" support_app_types="custom,isv" >读取外派职级</md-perm>
   - <md-perm name="corehr:employment.international_assignment.job_level:write" desc="读写外派职级" support_app_types="custom,isv" >读写外派职级</md-perm>

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >job_grade_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派职等
- 可通过[【查询职等】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/job_grade/query)获取
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.job_grade:read" desc="读取外派职等" support_app_types="custom,isv" >读取外派职等</md-perm>
   - <md-perm name="corehr:employment.international_assignment.job_grade:write" desc="读写外派职等" support_app_types="custom,isv" >读写外派职等</md-perm>

**示例值**：7127921432117937708

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >working_hours_type_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派工时制度
- 可通过[【批量查询工时制度】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/working_hours_type/list)获取
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.working_hours_type:read" desc="读取外派工时制度" support_app_types="custom,isv" >读取外派工时制度</md-perm>
   - <md-perm name="corehr:employment.international_assignment.working_hours_type:write" desc="读写外派工时制度" support_app_types="custom,isv" >读写外派工时制度</md-perm>

**示例值**：7293840937989473836

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >service_company_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派任职公司
- 可通过[【批量查询公司】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/company/list)获取
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.service_company:read" desc="读取外派公司" support_app_types="custom,isv" >读取外派公司</md-perm>
   - <md-perm name="corehr:employment.international_assignment.service_company:write" desc="读写外派公司" support_app_types="custom,isv" >读写外派公司</md-perm>

**示例值**：7293840937989473836

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >weekly_working_hours_v2</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派周工作时长
- 限制两位小数
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.weekly_working_hours:read" desc="读取外派周工作时长" support_app_types="custom,isv" >读取外派周工作时长</md-perm>
   - <md-perm name="corehr:employment.international_assignment.weekly_working_hours:write" desc="读写外派周工作时长" support_app_types="custom,isv" >读写外派周工作时长</md-perm>

**示例值**：10

**数据校验规则**：

- 取值范围：`0` ～ `168`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >work_shift_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派排班类型
- 可通过[【获取字段详情】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：
    - object_api_name：job_data
    - custom_api_name：work_shift
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.work_shift:read" desc="读取外派排班类型" support_app_types="custom,isv" >读取外派排班类型</md-perm>
   - <md-perm name="corehr:employment.international_assignment.work_shift:write" desc="读写外派排班类型" support_app_types="custom,isv" >读写外派排班类型</md-perm>

**示例值**：work_shift

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >compensation_type_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派薪资类型
- 可通过[【获取字段详情】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：
  - object_api_name：job_data
  - custom_api_name：compensation_type
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.compensation_type:read" desc="读取外派薪资类型" support_app_types="custom,isv" >读取外派薪资类型</md-perm>
   - <md-perm name="corehr:employment.international_assignment.compensation_type:write" desc="读写外派薪资类型" support_app_types="custom,isv" >读写外派薪资类型</md-perm>

**示例值**：hourly

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >international_assignment_expected_end_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派预计结束日期
- 范围筛选，格式：yyyy-mm-dd~yyyy-mm-dd

**示例值**：- "2024-01-01~2024-02-02"
- "~2024-02-02"
- "2024-01-01~"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >international_assignment_status_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派状态
- 可通过[【获取字段详情】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：
    - object_api_name：international_assignment
    - custom_api_name：international_assignment_status

**示例值**：on_assignment

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >international_assignment_type_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派类型
- 可通过[【获取字段详情】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：
    - object_api_name：international_assignment
    - custom_api_name：international_assignment_type

**示例值**：global_assignment

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >work_calendar_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外派工作日历
- 可通过[【查询工作日历】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/leave/work_calendar)获取详细信息
- 需要以下权限点之一：
   - <md-perm name="corehr:employment.international_assignment.work_calendar:read" desc="读取外派工作日历" support_app_types="custom,isv" >读取外派工作日历</md-perm>
   - <md-perm name="corehr:employment.international_assignment.work_calendar:write" desc="读写外派工作日历" support_app_types="custom,isv" >读写外派工作日历</md-perm>

**示例值**：7293840937989473836

**数据校验规则**：

- 长度范围：`0` ～ `100`
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
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >employees.international_assignment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	外派信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_location_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	外派工作地点 ID
  - 可通过[【查询单个地点】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/location/get)获取详细信息

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.work_location:read" desc="读取外派地点" support_app_types="custom" tags="">读取外派地点</md-perm>
<md-perm name="corehr:employment.international_assignment.work_location:write" desc="读写外派地点" support_app_types="custom" tags="">读写外派地点</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >service_company</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	外派任职公司 ID
- 可通过[【查询单个公司】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/company/get)获取详细信息

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.service_company:read" desc="读取外派公司" support_app_types="custom" tags="">读取外派公司</md-perm>
<md-perm name="corehr:employment.international_assignment.service_company:write" desc="读写外派公司" support_app_types="custom" tags="">读写外派公司</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_shift</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >enum</md-text>
	</md-dt-td>
	<md-dt-td>
	排班类型
- 可通过[【获取字段详情】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：
  - object_api_name：job_data
  - custom_api_name：work_shift

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.work_shift:read" desc="读取外派排班类型" support_app_types="custom" tags="">读取外派排班类型</md-perm>
<md-perm name="corehr:employment.international_assignment.work_shift:write" desc="读写外派排班类型" support_app_types="custom" tags="">读写外派排班类型</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >enum_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >display</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举多语展示
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >lang</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	语言编码（IETF BCP 47）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >working_hours_type_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工时制度ID
-  可通过[【查询单个工时制度】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/working_hours_type/get)获取详细信息

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.working_hours_type:read" desc="读取外派工时制度" support_app_types="custom" tags="">读取外派工时制度</md-perm>
<md-perm name="corehr:employment.international_assignment.working_hours_type:write" desc="读写外派工时制度" support_app_types="custom" tags="">读写外派工时制度</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >employee_type_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	人员类型ID
- 可通过[【查询单个人员类型】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/employee_type/get)获取详细信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >weekly_working_hours_v2</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	周工作时长

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.weekly_working_hours:read" desc="读取外派周工作时长" support_app_types="custom" tags="">读取外派周工作时长</md-perm>
<md-perm name="corehr:employment.international_assignment.weekly_working_hours:write" desc="读写外派周工作时长" support_app_types="custom" tags="">读写外派周工作时长</md-perm>
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
	部门 ID
- 可通过[【查询单个部门】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/department/get)获取详细信息
- 类型与 department_id_type 一致
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职务 ID
- 可通过[【查询单个职务】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job/get)获取详细信息

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.job:read" desc="读取外派职务" support_app_types="custom" tags="">读取外派职务</md-perm>
<md-perm name="corehr:employment.international_assignment.job:write" desc="读写外派职务" support_app_types="custom" tags="">读写外派职务</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_family_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	序列 ID
- 可通过[【查询单个序列】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_family/get)获取详细信息

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.job_level:read" desc="读取外派职级" support_app_types="custom" tags="">读取外派职级</md-perm>
<md-perm name="corehr:employment.international_assignment.job_level:write" desc="读写外派职级" support_app_types="custom" tags="">读写外派职级</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_level_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职级 ID
- 可通过[【查询单个职级】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_level/get)获取详细信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_grade_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职等 ID
- 可通过[【查询职等】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/job_grade/query)获取详细信息

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.job_grade:read" desc="读取外派职等" support_app_types="custom" tags="">读取外派职等</md-perm>
<md-perm name="corehr:employment.international_assignment.job_grade:write" desc="读写外派职等" support_app_types="custom" tags="">读写外派职等</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >compensation_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >enum</md-text>
	</md-dt-td>
	<md-dt-td>
	薪资类型
 - 可通过[【获取字段详情】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：
  - object_api_name：job_data
  - custom_api_name：compensation_type

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.compensation_type:read" desc="读取外派薪资类型" support_app_types="custom" tags="">读取外派薪资类型</md-perm>
<md-perm name="corehr:employment.international_assignment.compensation_type:write" desc="读写外派薪资类型" support_app_types="custom" tags="">读写外派薪资类型</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >enum_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >display</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举多语展示
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >lang</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	语言编码（IETF BCP 47）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >direct_manager_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	直属上级雇佣 ID
- 可通过[【批量查询员工信息】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee/batch_get)获取详细信息
- 类型与 user_id_type 一致
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >dotted_line_manager_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	虚线上级雇佣 ID
- 可通过[【批量查询员工信息】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee/batch_get)获取详细信息
- 类型与 user_id_type 一致
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_calendar_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工作日历 ID
- 可通过[【查询工作日历】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/leave/work_calendar)获取详细信息

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.work_calendar:read" desc="读取外派工作日历" support_app_types="custom" tags="">读取外派工作日历</md-perm>
<md-perm name="corehr:employment.international_assignment.work_calendar:write" desc="读写外派工作日历" support_app_types="custom" tags="">读写外派工作日历</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >position_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	岗位 ID
- 尚未支持，预留字段

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.position:read" desc="读取外派岗位" support_app_types="custom" tags="">读取外派岗位</md-perm>
<md-perm name="corehr:employment.international_assignment.position:write" desc="读写外派岗位" support_app_types="custom" tags="">读写外派岗位</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >employment_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	雇佣 ID
- 可通过[【批量查询员工信息】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee/batch_get)获取详细信息
- 类型与 user_id_type 一致
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >object_field_data\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段
- 请参考[【自定义字段说明】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom-fields-guide)

**字段权限要求（满足任一）**：
<md-perm name="corehr:employment.international_assignment.custom_field:read" desc="读取外派自定义字段" support_app_types="custom" tags="">读取外派自定义字段</md-perm>
<md-perm name="corehr:employment.international_assignment.custom_field:write" desc="读写外派自定义字段" support_app_types="custom" tags="">读写外派自定义字段</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >field_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段名
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
	字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同
- 该返回值是将原始值 `json.Marshal` 后返回，使用 `json.Unmarshal` 解析到指定对象即可
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >international_assignment_reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	外派原因说明
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	备注
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >international_assignment_expected_end_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	预计结束日期
- 格式：yyyy-mm-dd
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >international_assignment_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >enum</md-text>
	</md-dt-td>
	<md-dt-td>
	外派状态
- 可通过[【获取字段详情】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：
  - object_api_name：international_assignment
  - custom_api_name：international_assignment_status
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >enum_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >display</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举多语展示
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >lang</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	语言编码（IETF BCP 47）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >international_assignment_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >enum</md-text>
	</md-dt-td>
	<md-dt-td>
	外派类型
- 可通过[【获取字段详情】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：
  - object_api_name：international_assignment
  - custom_api_name：international_assignment_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >enum_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >display</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举多语展示
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >lang</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	语言编码（IETF BCP 47）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >effective_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	开始日期
- 格式：yyyy-mm-dd
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >expiration_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	结束日期
- 格式：yyyy-mm-dd
- 在外派未结束时，该值默认为 9999-12-31
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
	外派ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >no_authority_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	无权限的雇佣ID
- 在指定雇佣ID【employment_ids】查询时该参数生效
- 类型与 user_id_type 一致
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
                "work_location_id": "7127921432117937708",
                "service_company": "7127921432117937708",
                "work_shift": {
                    "enum_name": "phone_type",
                    "display": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ]
                },
                "working_hours_type_id": "7127921432117937708",
                "employee_type_id": "7127921432117937708",
                "weekly_working_hours_v2": 8,
                "department_id": "7127921432117937708",
                "job_id": "7127921432117937708",
                "job_family_id": "7127921432117937708",
                "job_level_id": "7127921432117937708",
                "job_grade_id": "7127921432117937708",
                "compensation_type": {
                    "enum_name": "phone_type",
                    "display": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ]
                },
                "direct_manager_id": "7127921432117937708",
                "dotted_line_manager_id": "7127921432117937708",
                "work_calendar_id": "7127921432117937708",
                "position_id": "7127921432117937708",
                "employment_id": "7127921432117937708",
                "custom_fields": [
                    {
                        "field_name": "name",
                        "value": "Sandy"
                    }
                ],
                "international_assignment_reason": "xxx 项目派遣",
                "description": "xxx 项目",
                "international_assignment_expected_end_date": "2024-01-02",
                "international_assignment_status": {
                    "enum_name": "phone_type",
                    "display": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ]
                },
                "international_assignment_type": {
                    "enum_name": "phone_type",
                    "display": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ]
                },
                "effective_time": "2024-01-02",
                "expiration_time": "2024-01-02",
                "id": "7127921432117937708"
            }
        ],
        "no_authority_ids": [
            "7127921432117937708"
        ],
        "page_token": "123",
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
  <md-td>400</md-td>
  <md-td>1160001</md-td>
  <md-td>参数错误</md-td>
  <md-td>检查参数</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1160002</md-td>
  <md-td>未知错误</md-td>
  <md-td>稍后重试或联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




