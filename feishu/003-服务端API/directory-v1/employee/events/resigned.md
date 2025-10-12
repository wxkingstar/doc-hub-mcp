<!--
title: 员工离职
id: 7419214646853091332
fullPath: /uAjLw4CM/ukTMukTMukTM/directory-v1/employee/events/resigned
updatedAt: 1752754133000
source: https://open.feishu.cn/document/directory-v1/employee/events/resigned
-->
# 员工离职

有员工离职时接收事件通知。


## 前提条件
你需要在应用中配置事件订阅，这样才可以在事件触发时接收到事件数据。了解事件订阅可参见[事件概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。


## 注意事项
该事件有部分字段权限要求，你可以参考相应的参数描述获取参数所需的权限。只有当应用开通了相应的字段权限后，才可以成功接收到完整的事件体数据。申请权限的具体操作，参见[申请 API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。{使用示例}(url=/api/tools/api_explore/api_explore_config?project=directory&version=v1&resource=employee&event=resigned)

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
      <md-td>directory.employee.resigned_v1</md-td>
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
            
    </md-th>
      <md-td>
            <md-perm name="directory:employee:read" desc="调用 API 获取员工信息" support_app_types="custom,isv" tags="">调用 API 获取员工信息</md-perm>
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
        <md-perm name="directory:department.external_id:read" desc="查看部门自定义 ID" support_app_types="custom,isv" tags="">查看部门自定义 ID</md-perm>
        <md-perm name="directory:employee.base.active_status:read" desc="查看员工账号活跃状态" support_app_types="custom,isv" tags="">查看员工账号活跃状态</md-perm>
        <md-perm name="directory:employee.base.avatar:read" desc="查看员工的头像" support_app_types="custom,isv" tags="">查看员工的头像</md-perm>
        <md-perm name="directory:employee.base.background_image:read" desc="查看员工的名片页自定义背景图" support_app_types="custom,isv" tags="">查看员工的名片页自定义背景图</md-perm>
        <md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
        <md-perm name="directory:employee.base.custom_field:read" desc="查看员工自定义字段值" support_app_types="custom,isv" tags="">查看员工自定义字段值</md-perm>
        <md-perm name="directory:employee.base.department:read" desc="查看员工所属部门信息" support_app_types="custom,isv" tags="">查看员工所属部门信息</md-perm>
        <md-perm name="directory:employee.base.dept_order:read" desc="查看员工在部门内的排序" support_app_types="custom,isv" tags="">查看员工在部门内的排序</md-perm>
        <md-perm name="directory:employee.base.description:read" desc="查看员工的个性签名" support_app_types="custom,isv" tags="">查看员工的个性签名</md-perm>
        <md-perm name="directory:employee.base.dotted_line_leaders:read" desc="查看员工虚线上级 ID" support_app_types="custom,isv" tags="">查看员工虚线上级 ID</md-perm>
        <md-perm name="directory:employee.base.email:read" desc="查看员工联系邮箱" support_app_types="custom,isv" tags="">查看员工联系邮箱</md-perm>
        <md-perm name="directory:employee.base.gender:read" desc="查看员工性别" support_app_types="custom,isv" tags="">查看员工性别</md-perm>
        <md-perm name="directory:employee.base.is_resigned:read" desc="查看员工离职状态" support_app_types="custom,isv" tags="">查看员工离职状态</md-perm>
        <md-perm name="directory:employee.base.leader:read" desc="查看员工上级信息" support_app_types="custom,isv" tags="">查看员工上级信息</md-perm>
        <md-perm name="directory:employee.base.leader_id:read" desc="查看员工直属上级 ID" support_app_types="custom,isv" tags="">查看员工直属上级 ID</md-perm>
        <md-perm name="directory:employee.base.mobile:read" desc="查看员工手机号" support_app_types="custom,isv" tags="">查看员工手机号</md-perm>
        <md-perm name="directory:employee.base.name.another_name:read" desc="查看员工的别名" support_app_types="custom,isv" tags="">查看员工的别名</md-perm>
        <md-perm name="directory:employee.base.name.name:read" desc="查看员工的姓名" support_app_types="custom,isv" tags="">查看员工的姓名</md-perm>
        <md-perm name="directory:employee.base.resign_time:read" desc="查看员工离职时间" support_app_types="custom,isv" tags="">查看员工离职时间</md-perm>
        <md-perm name="directory:employee.base.status:read" desc="查看员工状态信息" support_app_types="custom,isv" tags="">查看员工状态信息</md-perm>
        <md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
        <md-perm name="directory:employee.work.work_station:read" desc="查看员工的工位" support_app_types="custom,isv" tags="">查看员工的工位</md-perm>
        <md-perm name="directory:employee.work.employment_type:read" desc="查看员工的员工类型" support_app_types="custom,isv" tags="">查看员工的员工类型</md-perm>
        <md-perm name="directory:employee.work.extension_number:read" desc="查看员工的分机号" support_app_types="custom,isv" tags="">查看员工的分机号</md-perm>
        <md-perm name="directory:employee.work.job_number:read" desc="查看员工的工号" support_app_types="custom,isv" tags="">查看员工的工号</md-perm>
        <md-perm name="directory:employee.work.job_title:read" desc="查看员工职务信息" support_app_types="custom,isv" tags="">查看员工职务信息</md-perm>
        <md-perm name="directory:employee.work.join_date:read" desc="查看员工的入职日期" support_app_types="custom,isv" tags="">查看员工的入职日期</md-perm>
        <md-perm name="directory:employee.work.resign_date:read" desc="查看员工离职日期" support_app_types="custom,isv" tags="">查看员工离职日期</md-perm>
        <md-perm name="directory:employee.work.resign_reason:read" desc="查看员工离职原因" support_app_types="custom,isv" tags="">查看员工离职原因</md-perm>
        <md-perm name="directory:employee.work.resign_remark:read" desc="查看员工离职备注" support_app_types="custom,isv" tags="">查看员工离职备注</md-perm>
        <md-perm name="directory:employee.work.resign_type:read" desc="查看员工离职类型" support_app_types="custom,isv" tags="">查看员工离职类型</md-perm>
        <md-perm name="directory:employee.work.staff_status:read" desc="查看员工的人事状态" support_app_types="custom,isv" tags="">查看员工的人事状态</md-perm>
        <md-perm name="directory:employee.work.work_country_or_region:read" desc="查看员工的工作国家/地区" support_app_types="custom,isv" tags="">查看员工的工作国家/地区</md-perm>
        <md-perm name="directory:employee.work.work_place:read" desc="查看员工的工作地点" support_app_types="custom,isv" tags="">查看员工的工作地点</md-perm>
        <md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
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



### 事件体
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
	<md-text type="field-name" >schema</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件模式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >header</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >event_header</md-text>
	</md-dt-td>
	<md-dt-td>
	事件头
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >event_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >event_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件创建时间戳（单位：毫秒）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >app_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >tenant_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	租户 Key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >event</md-text>
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
	<md-text type="field-name" >employee</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >employee_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	员工实体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >base_info</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >employee_base_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	员工基础信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >employee_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的open_id,ID类型参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	i18n文本

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
<md-perm name="directory:employee.base.name.name:read" desc="查看员工的姓名" support_app_types="custom,isv" tags="">查看员工的姓名</md-perm>
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


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化locale
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	value
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >another_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	别名

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
<md-perm name="directory:employee.base.name.another_name:read" desc="查看员工的别名" support_app_types="custom,isv" tags="">查看员工的别名</md-perm>
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
	手机号

**数据校验规则**：

- 最大长度：`255` 字符

**字段权限要求**：
<md-perm name="directory:employee.base.mobile:read" desc="查看员工手机号" support_app_types="custom,isv" tags="">查看员工手机号</md-perm>
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
	用户的联系邮箱

**数据校验规则**：

- 最大长度：`255` 字符

**字段权限要求**：
<md-perm name="directory:employee.base.email:read" desc="查看员工联系邮箱" support_app_types="custom,isv" tags="">查看员工联系邮箱</md-perm>
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
<md-enum-item key="0" >未知</md-enum-item>
<md-enum-item key="1" >男</md-enum-item>
<md-enum-item key="2" >女</md-enum-item>
<md-enum-item key="3" >其他</md-enum-item>
</md-enum>

**字段权限要求**：
<md-perm name="directory:employee.base.gender:read" desc="查看员工性别" support_app_types="custom,isv" tags="">查看员工性别</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >departments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门信息

**数据校验规则**：

- 长度范围：`0` ～ `20`

**字段权限要求**：
<md-perm name="directory:employee.base.department:read" desc="查看员工所属部门信息" support_app_types="custom,isv" tags="">查看员工所属部门信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门ID,部门ID类型为 open_department_id，了解部门 ID 可参见[部门资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)。

**数据校验规则**：

- 最大长度：`64` 字符

**字段权限要求（满足任一）**：
<md-perm name="directory:department.base:read" desc="查看部门基础信息" support_app_types="custom,isv" tags="">查看部门基础信息</md-perm>
<md-perm name="directory:department.external_id:read" desc="查看部门自定义 ID" support_app_types="custom,isv" tags="">查看部门自定义 ID</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >employee_order_in_departments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_department_sort_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	用户在部门内的排序信息， 第一个部门为主部门

**数据校验规则**：

- 长度范围：`0` ～ `20`

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.department:read" desc="查看员工所属部门信息" support_app_types="custom,isv" tags="">查看员工所属部门信息</md-perm>
<md-perm name="directory:employee.base.dept_order:read" desc="查看员工在部门内的排序" support_app_types="custom,isv" tags="">查看员工在部门内的排序</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门id，部门id类型为 open_department_id，了解部门 ID 可参见[部门资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >order_weight_in_deparment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户在部门内的排序权重
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >order_weight_among_deparments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户多个部门间的排序权重
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	个人签名

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
<md-perm name="directory:employee.base.description:read" desc="查看员工的个性签名" support_app_types="custom,isv" tags="">查看员工的个性签名</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >active_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	用户活跃状态

**可选值有**：
<md-enum>
<md-enum-item key="1" >未激活</md-enum-item>
<md-enum-item key="2" >激活</md-enum-item>
<md-enum-item key="3" >冻结</md-enum-item>
<md-enum-item key="4" >主动退出</md-enum-item>
<md-enum-item key="5" >未加入</md-enum-item>
</md-enum>

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.active_status:read" desc="查看员工账号活跃状态" support_app_types="custom,isv" tags="">查看员工账号活跃状态</md-perm>
<md-perm name="directory:employee.base.status:read" desc="查看员工状态信息" support_app_types="custom,isv" tags="">查看员工状态信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_resigned</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否离职

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.is_resigned:read" desc="查看员工离职状态" support_app_types="custom,isv" tags="">查看员工离职状态</md-perm>
<md-perm name="directory:employee.base.status:read" desc="查看员工状态信息" support_app_types="custom,isv" tags="">查看员工状态信息</md-perm>
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
	直属上级的用户open_id，了解用户 ID 可参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.leader:read" desc="查看员工上级信息" support_app_types="custom,isv" tags="">查看员工上级信息</md-perm>
<md-perm name="directory:employee.base.leader_id:read" desc="查看员工直属上级 ID" support_app_types="custom,isv" tags="">查看员工直属上级 ID</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >dotted_line_leader_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	虚线上级的用户open_id，了解用户 ID 可参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**数据校验规则**：

- 长度范围：`0` ～ `10`

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.dotted_line_leaders:read" desc="查看员工虚线上级 ID" support_app_types="custom,isv" tags="">查看员工虚线上级 ID</md-perm>
<md-perm name="directory:employee.base.leader:read" desc="查看员工上级信息" support_app_types="custom,isv" tags="">查看员工上级信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >custom_field_values</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_field_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段值

**数据校验规则**：

- 长度范围：`0` ～ `100`

**字段权限要求**：
<md-perm name="directory:employee.base.custom_field:read" desc="查看员工自定义字段值" support_app_types="custom,isv" tags="">查看员工自定义字段值</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
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


<md-dt-tr level="4">
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
<md-enum-item key="10" >多选枚举类型(目前仅支持文本类型)</md-enum-item>
<md-enum-item key="11" >人员列表</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	i18n文本
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


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化locale
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	value
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
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


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >link_text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	i18n文本
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
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


<md-dt-tr level="6">
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


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化locale
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="7">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	value
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
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


<md-dt-tr level="5">
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


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >enum_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >enum_value</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >enum_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	选项结果ID

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
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


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >user_values</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	人员字段值

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	人员ID列表，了解用户 ID 可参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >user_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	人员类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >员工</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >resign_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	离职时间

**字段权限要求**：
<md-perm name="directory:employee.base.resign_time:read" desc="查看员工离职时间" support_app_types="custom,isv" tags="">查看员工离职时间</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >image_link</md-text>
	</md-dt-td>
	<md-dt-td>
	头像url

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.avatar:read" desc="查看员工的头像" support_app_types="custom,isv" tags="">查看员工的头像</md-perm>
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >avatar_72</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	72*72像素头像链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >avatar_240</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	240*240像素头像链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >avatar_640</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	640*640像素头像链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >avatar_origin</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	原始头像链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >background_image</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义背景图 url

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.background_image:read" desc="查看员工的名片页自定义背景图" support_app_types="custom,isv" tags="">查看员工的名片页自定义背景图</md-perm>
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_info</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >employee_work_entity</md-text>
	</md-dt-td>
	<md-dt-td>
	员工工作信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >work_country_or_region</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工作地国家/地区

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.work_country_or_region:read" desc="查看员工的工作国家/地区" support_app_types="custom,isv" tags="">查看员工的工作国家/地区</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >work_place</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >place</md-text>
	</md-dt-td>
	<md-dt-td>
	地点，为管理后台中工作信息的"工作城市"字段

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.work_place:read" desc="查看员工的工作地点" support_app_types="custom,isv" tags="">查看员工的工作地点</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >place_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >work_station</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	员工工位信息

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.work_station:read" desc="查看员工的工位" support_app_types="custom,isv" tags="">查看员工的工位</md-perm>
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


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化locale
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	value
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >job_number</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工号

**数据校验规则**：

- 最大长度：`255` 字符

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.job_number:read" desc="查看员工的工号" support_app_types="custom,isv" tags="">查看员工的工号</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >extension_number</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分机号

**数据校验规则**：

- 最大长度：`99` 字符

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.extension_number:read" desc="查看员工的分机号" support_app_types="custom,isv" tags="">查看员工的分机号</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >join_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	入职日期，例如：2007-03-20

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.join_date:read" desc="查看员工的入职日期" support_app_types="custom,isv" tags="">查看员工的入职日期</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >employment_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	员工类型

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.employment_type:read" desc="查看员工的员工类型" support_app_types="custom,isv" tags="">查看员工的员工类型</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >staff_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	员工人事状态

**可选值有**：
<md-enum>
<md-enum-item key="1" >在职</md-enum-item>
<md-enum-item key="2" >离职</md-enum-item>
<md-enum-item key="3" >待入职</md-enum-item>
<md-enum-item key="4" >取消入职</md-enum-item>
<md-enum-item key="5" >待离职</md-enum-item>
</md-enum>

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.staff_status:read" desc="查看员工的人事状态" support_app_types="custom,isv" tags="">查看员工的人事状态</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >job_title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >job_title</md-text>
	</md-dt-td>
	<md-dt-td>
	职务

**字段权限要求**：
<md-perm name="directory:employee.work.job_title:read" desc="查看员工职务信息" support_app_types="custom,isv" tags="">查看员工职务信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >job_title_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	ID

**数据校验规则**：

- 最大长度：`64` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >resign_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	离职日期，例如：2007-03-20

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.resign_date:read" desc="查看员工离职日期" support_app_types="custom,isv" tags="">查看员工离职日期</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >resign_reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	离职原因

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.resign_reason:read" desc="查看员工离职原因" support_app_types="custom,isv" tags="">查看员工离职原因</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >resign_remark</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	离职备注

**数据校验规则**：

- 最大长度：`5000` 字符

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.resign_remark:read" desc="查看员工离职备注" support_app_types="custom,isv" tags="">查看员工离职备注</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >resign_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	离职类型

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.resign_type:read" desc="查看员工离职类型" support_app_types="custom,isv" tags="">查看员工离职类型</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >abnormal</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >abnormal_record</md-text>
	</md-dt-td>
	<md-dt-td>
	字段异常信息
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

**数据校验规则**：

- 取值范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >field_errors</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, abnormal_code&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	列级异常，key为字段名,value为下列枚举
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
	字段名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码

**可选值有**：
<md-enum>
<md-enum-item key="0" >成功</md-enum-item>
<md-enum-item key="1000" >没权限</md-enum-item>
<md-enum-item key="2000" >字段查询异常</md-enum-item>
<md-enum-item key="2003" >字段不存在</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`0` ～ `3000`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 事件体示例
:::html
<md-code-json>
{
    "schema": "2.0",
    "header": {
        "event_id": "7c939b92cfc5c45367f4cd4c2ce082f2",
        "token": "",
        "create_time": "1726288902000",
        "event_type": "directory.employee.resigned_v1",
        "tenant_key": "133c1eae3c0f1748",
        "app_id": "cli_a23f3400fe78901b"
    },
    "event": {
        "abnormal": {
            "row_error": 0
        },
        "employee": {
            "base_info": {
                "active_status": 5,
                  "avatar": {
                    "avatar_72": "https://i******le.feishu.cn/static-resource/v1/as******************************io~?image_size=72x72&cut_type=&quality=&format=png&sticker_format=.webp",
                    "avatar_240": "https://i******le.feishu.cn/static-resource/v1/as******************************io~?image_size=240x240&cut_type=&quality=&format=png&sticker_format=.webp",
                    "avatar_640": "https://i******le.feishu.cn/static-resource/v1/as******************************io~?image_size=640x640&cut_type=&quality=&format=png&sticker_format=.webp",
                    "avatar_origin": "https://i******le.feishu.cn/static-resource/v1/vas******************************io~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"
                },
                "custom_field_values": [
                    {
                        "enum_value": {
                            "enum_ids": [
                                "E-xxxxx"
                            ],
                            "enum_type": 1
                        },
                        "field_key": "C-xxxxx",
                        "field_type": 3
                    }
                ],
                "departments": [
                    {
                        "department_id": "od-xxxxx"
                    }
                ],
                "description": "",
                "employee_id": "ou_xxxxx",
                "is_resigned": true,
                "leader_id": "ou_xxxxx",
                "mobile": "+86136xxxxxxxxxx",
                "name": {
                    "another_name": "xxxxx"
                }
            },
            "work_info": {
                "employment_type": 1,
                "job_number": "xxxxx"
            }
        }
    }
}
</md-code-json>
:::






### 事件订阅示例代码

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
	"github.com/larksuite/oapi-sdk-go/v3/service/directory/v1"
	larkws "github.com/larksuite/oapi-sdk-go/v3/ws"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2EmployeeResignedV1(func(ctx context.Context, event *larkdirectory.P2EmployeeResignedV1) error {
			fmt.Printf("[ OnP2EmployeeResignedV1 access ], data: %s\n", larkcore.Prettify(event))
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


def do_p2_directory_employee_resigned_v1(data: lark.directory.v1.P2DirectoryEmployeeResignedV1) -> None:
    print(f'[ do_p2_directory_employee_resigned_v1 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_directory_employee_resigned_v1(do_p2_directory_employee_resigned_v1) \
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

import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.service.directory.DirectoryService;
import com.lark.oapi.service.directory.v1.model.P2EmployeeResignedV1;
import com.lark.oapi.event.EventDispatcher;
import com.lark.oapi.ws.Client;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
public class Sample {
    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("", "")
            .onP2EmployeeResignedV1(new DirectoryService.P2EmployeeResignedV1Handler() {
                @Override
                public void handle(P2EmployeeResignedV1 event) throws Exception {
                    System.out.printf("[ onP2EmployeeResignedV1 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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
        'directory.employee.resigned_v1': async (data) => {
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
	"github.com/larksuite/oapi-sdk-go/v3/service/directory/v1"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2EmployeeResignedV1(func(ctx context.Context, event *larkdirectory.P2EmployeeResignedV1) error {
			fmt.Printf("[ OnP2EmployeeResignedV1 access ], data: %s\n", larkcore.Prettify(event))
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


def do_p2_directory_employee_resigned_v1(data: lark.directory.v1.P2DirectoryEmployeeResignedV1) -> None:
    print(f'[ do_p2_directory_employee_resigned_v1 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_directory_employee_resigned_v1(do_p2_directory_employee_resigned_v1) \
    .build()


# 创建路由处理器 Create route handler
@app.route("/webhook/event", methods=["POST"])
def event():
    resp = event_handler.do(parse_req())
    return parse_resp(resp)

if __name__ == "__main__":
    app.run(port=7777)

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="java-sdk">

package com.lark.oapi.sample.event;

import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.service.directory.DirectoryService;
import com.lark.oapi.service.directory.v1.model.P2EmployeeResignedV1;
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
            .onP2EmployeeResignedV1(new DirectoryService.P2EmployeeResignedV1Handler() {
                @Override
                public void handle(P2EmployeeResignedV1 event) throws Exception {
                    System.out.printf("[ onP2EmployeeResignedV1 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
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
    'directory.employee.resigned_v1': async (data) => {
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
