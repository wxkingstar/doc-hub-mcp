<!--
title: 资源介绍
id: 7359428154233503748
fullPath: /uAjLw4CM/ukTMukTMukTM/directory-v1/employee/resources-introduction
updatedAt: 1747972133000
source: https://open.feishu.cn/document/directory-v1/employee/resources-introduction
-->
# 资源定义
员工指飞书企业内身份为「Employee」的成员，等同于通讯录OpenAPI中的「User」。

员工在飞书的身份标识包括`employee_id`、`open_id` 和 `union_id`，其中`employee_id`的值等同于通讯录中的 `user_id`，其余两个也和通讯录的User的值相同。有关员工各类ID的详细介绍，参考 [用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。

员工生命周期流转的逻辑与通讯录的User一致，见下图：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3d1df8724712e1ffc99aa3aaa07d1759_0o9r5pTnJj.png?height=679&lazyload=true&width=1201)


# 字段说明

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
<md-text type="field-name" >base_info</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >employee_base_entity</md-text>
</md-dt-td>
<md-dt-td>
员工基础信息
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >employee_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
企业内在职员工的唯一标识。支持自定义，未自定义时系统自动生成。ID支持修改。
获取employee_id的方式：
- 企业管理员在 管理后台 > 组织架构 > 成员与部门 页面，点击 成员详情，查询员工ID
- 通过 [批量获取员工列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/filter) 的接口，通过手机号或邮箱查询员工ID。
<br>`employee_id_type`为`open_id`或者`union_id`时无需权限，使用`employee_id`类型时，权限要求如下<br>**字段权限要求**：
<md-perm name="directory:employee.base.external_id:read" desc="查看员工自定义 ID" support_app_types="custom,isv" tags="">查看员工自定义 ID</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >name</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >i18n_text</md-text>
</md-dt-td>
<md-dt-td>
员工的姓名

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
<md-perm name="directory:employee.base.name.name:read" desc="查看员工的姓名" support_app_types="custom,isv" tags="">查看员工的姓名</md-perm>
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >mobile</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
员工的手机号。注意：
1. 在企业内的在职员工中不可重复。
2. 未认证企业仅支持添加中国大陆手机号，通过飞书认证的企业允许添加海外手机号。
3. 国际电话区号前缀中必须包含加号 +。

**字段权限要求**：
<md-perm name="directory:employee.base.mobile:read" desc="查看员工手机号" support_app_types="custom,isv" tags="">查看员工手机号</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >email</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
员工在工作中的邮箱。注意：
1. 在企业内的在职员工中不可重复。
2. 非中国大陆手机号成员必须同时添加邮箱。

**字段权限要求**：
<md-perm name="directory:employee.base.email:read" desc="查看员工工作邮箱" support_app_types="custom,isv" tags="">查看员工联系邮箱</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >enterprise_email</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
企业邮箱

**字段权限要求**：
<md-perm name="directory:employee.base.enterprise_email:read" desc="查看员工企业邮箱" support_app_types="custom,isv" tags="">查看员工企业邮箱</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >departments</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >department\[\]</md-text>
</md-dt-td>
<md-dt-td>
员工所属的部门信息。一个员工可属于多个部门，排在第一个的为主部门

**字段权限要求**：
<md-perm name="directory:employee.base.department:read" desc="查看员工所属部门信息" support_app_types="custom,isv" tags="">查看员工所属部门信息</md-perm>
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
部门ID

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
部门成员与子部门计数

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
部门负责人ID
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
父部门ID

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
自定义字段

**字段权限要求**：
<md-perm name="directory:department.custom_field:read" desc="查看部门自定义字段信息" support_app_types="custom,isv" tags="">查看部门自定义字段信息</md-perm>
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
枚举
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
人员ID
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
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


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >department_path_infos</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >department_base_info\[\]</md-text>
</md-dt-td>
<md-dt-td>
部门路径信息，排列顺序为根部门到末级部门

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
部门ID
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
部门名称
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
<md-text type="field-name" >employee_order_in_departments</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >user_department_sort_info\[\]</md-text>
</md-dt-td>
<md-dt-td>
用户在部门内的排序信息， 第一个部门为主部门

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.department:read" desc="查看员工所属部门信息" support_app_types="custom,isv" tags="">查看员工所属部门信息</md-perm>
<md-perm name="directory:employee.base.dept_order:read" desc="查看员工在部门内的排序" support_app_types="custom,isv" tags="">查看员工在部门内的排序</md-perm>
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
部门id
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >active_status</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
员工的账号活跃状态

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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >leader_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
员工的直属上级ID

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.leader:read" desc="查看员工上级信息" support_app_types="custom,isv" tags="">查看员工上级信息</md-perm>
<md-perm name="directory:employee.base.leader_id:read" desc="查看员工直属上级 ID" support_app_types="custom,isv" tags="">查看员工直属上级 ID</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >dotted_line_leader_ids</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string\[\]</md-text>
</md-dt-td>
<md-dt-td>
员工的虚线上级ID

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.dotted_line_leaders:read" desc="查看员工虚线上级 ID" support_app_types="custom,isv" tags="">查看员工虚线上级 ID</md-perm>
<md-perm name="directory:employee.base.leader:read" desc="查看员工上级信息" support_app_types="custom,isv" tags="">查看员工上级信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >is_primary_admin</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >boolean</md-text>
</md-dt-td>
<md-dt-td>
是否租户超级管理员

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.is_primary_admin:read" desc="查看员工是否是超级管理员" support_app_types="custom,isv" tags="">查看员工是否是超级管理员</md-perm>
<md-perm name="directory:employee.base.role:read" desc="查看员工角色信息" support_app_types="custom,isv" tags="">查看员工角色信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >enterprise_email_aliases</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string\[\]</md-text>
</md-dt-td>
<md-dt-td>
员工的企业邮箱别名。当成员希望针对不同人使用不同的邮箱地址进行邮件往来时，可为其企业邮箱添加别名。添加后，成员可使用别名发送邮件，也可接受发送至别名的邮件。

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.enterprise_email:read" desc="查看员工企业邮箱" support_app_types="custom,isv" tags="">查看员工企业邮箱</md-perm>
<md-perm name="directory:employee.base.enterprise_email_alias:read" desc="查看员工的企业邮箱别名" support_app_types="custom,isv" tags="">查看员工的企业邮箱别名</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >custom_field_values</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >custom_field_value\[\]</md-text>
</md-dt-td>
<md-dt-td>
自定义字段值

**字段权限要求**：
<md-perm name="directory:employee.base.custom_field:read" desc="查看员工自定义字段值" support_app_types="custom,isv" tags="">查看员工自定义字段值</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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
<md-text type="field-name" >url_value</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >url_value</md-text>
</md-dt-td>
<md-dt-td>
网页链接字段值
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
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
<md-text type="field-name" >url</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
移动端网页链接
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
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


<md-dt-tr level="2">
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


<md-dt-tr level="3">
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


<md-dt-tr level="3">
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


<md-dt-tr level="2">
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


<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >ids</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string\[\]</md-text>
</md-dt-td>
<md-dt-td>
人员ID
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >department_path_infos</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >department_base_info\[\]\[\]</md-text>
</md-dt-td>
<md-dt-td>
全部直属部门对应的全路径。排列顺序为根部门到末级部门<br>对应结构
``` json
[
/*所属部门A相关部门路径*/
[
{/*根部门*/},
{/*A的父部门*/},
{
  "department_id": "abcdefg",
  "i18n_text": {
      "default_value": "A",
      "i18n_value": {
          "zh_cn": "A cn name",
          "en_us": "A en name"
      }
  }
}
]
]
```

**字段权限要求**：
<md-perm name="directory:employee.base.department_path:read" desc="查看员工部门路径" support_app_types="custom,isv" tags="">查看员工部门路径</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >resign_time</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
离职时间。离职操作的时间，系统自动生成，无法写入

**字段权限要求**：
<md-perm name="directory:employee.base.resign_time:read" desc="查看员工离职时间" support_app_types="custom,isv" tags="">查看员工离职时间</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >avatar</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >image_link</md-text>
</md-dt-td>
<md-dt-td>
员工的头像url

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.avatar:read" desc="查看员工的头像" support_app_types="custom,isv" tags="">查看员工的头像</md-perm>
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >background_image</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
员工的自定义背景图url

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.background_image:read" desc="查看员工的名片页自定义背景图" support_app_types="custom,isv" tags="">查看员工的名片页自定义背景图</md-perm>
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >is_admin</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >boolean</md-text>
</md-dt-td>
<md-dt-td>
是否租户普通管理员

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.is_admin:read" desc="查看员工是否是普通管理员" support_app_types="custom,isv" tags="">查看员工是否是普通管理员</md-perm>
<md-perm name="directory:employee.base.role:read" desc="查看员工角色信息" support_app_types="custom,isv" tags="">查看员工角色信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
<md-perm name="directory:employee.base.data_source:read" desc="查看员工数据来源" support_app_types="custom,isv" tags="">查看员工数据来源</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >geo_name</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
员工数据驻留地

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
<md-perm name="directory:employee.base.geo:read" desc="查看员工数据驻留地" support_app_types="custom,isv" tags="">查看员工数据驻留地</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >subscription_ids</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string\[\]</md-text>
</md-dt-td>
<md-dt-td>
分配给员工的席位ID列表。

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.base:read" desc="查看员工个人基本信息" support_app_types="custom,isv" tags="">查看员工个人基本信息</md-perm>
<md-perm name="directory:employee.base.subscription_ids:read" desc="查看员工席位信息" support_app_types="custom,isv" tags="">查看员工席位信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >work_country_or_region</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
工作地国家/地区 [如何查询国家/地区的编码含义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/mdm-v3/batch_country_region/get)

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.work_country_or_region:read" desc="查看员工的工作国家/地区" support_app_types="custom,isv" tags="">查看员工的工作国家/地区</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >work_place</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >place</md-text>
</md-dt-td>
<md-dt-td>
工作地点

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.work_place:read" desc="查看员工的工作地点" support_app_types="custom,isv" tags="">查看员工的工作地点</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >place_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
ID，不存在时默认返回"0"
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >place_name</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >i18n_text</md-text>
</md-dt-td>
<md-dt-td>
工作地点的名称

**字段权限要求**：
<md-perm name="directory:place.base:read" desc="查看地点基础信息" support_app_types="custom,isv" tags="">查看地点基础信息</md-perm>
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
<md-text type="field-name" >is_enabled</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >boolean</md-text>
</md-dt-td>
<md-dt-td>
是否启用

**字段权限要求**：
<md-perm name="directory:place.status:read" desc="查看地点状态" support_app_types="custom,isv" tags="">查看地点状态</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >description</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >i18n_text</md-text>
</md-dt-td>
<md-dt-td>
描述

**字段权限要求**：
<md-perm name="directory:place.base:read" desc="查看地点基础信息" support_app_types="custom,isv" tags="">查看地点基础信息</md-perm>
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >work_station</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >i18n_text</md-text>
</md-dt-td>
<md-dt-td>
工位

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.work_station:read" desc="查看员工的工位" support_app_types="custom,isv" tags="">查看员工的工位</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >job_number</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
工号

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.job_number:read" desc="查看员工的工号" support_app_types="custom,isv" tags="">查看员工的工号</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >extension_number</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
分机号

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.base_work:read" desc="查看员工基础工作信息" support_app_types="custom,isv" tags="">查看员工基础工作信息</md-perm>
<md-perm name="directory:employee.work.extension_number:read" desc="查看员工的分机号" support_app_types="custom,isv" tags="">查看员工的分机号</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >join_date</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
入职日期。如“2007-03-20”

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.join_date:read" desc="查看员工的入职日期" support_app_types="custom,isv" tags="">查看员工的入职日期</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >employment_type</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
**可选值有**：
<md-enum>
<md-enum-item key="0" >未知</md-enum-item>
<md-enum-item key="1" >全职</md-enum-item>
<md-enum-item key="2" >实习</md-enum-item>
<md-enum-item key="3" >外包</md-enum-item>
<md-enum-item key="4" >劳务</md-enum-item>
<md-enum-item key="5" >顾问</md-enum-item>
</md-enum>
或者使用租户内自定义的员工类型

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.employment_type:read" desc="查看员工的员工类型" support_app_types="custom,isv" tags="">查看员工的员工类型</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >job_title_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
ID，不存在时默认返回"0"
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >job_title_name</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >i18n_text</md-text>
</md-dt-td>
<md-dt-td>
职务名称

**字段权限要求**：
<md-perm name="directory:job_title.base:read" desc="查看职务基础信息" support_app_types="custom,isv" tags="">查看职务基础信息</md-perm>
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
<md-text type="field-name" >is_enabled</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >boolean</md-text>
</md-dt-td>
<md-dt-td>
是否启用

**字段权限要求**：
<md-perm name="directory:job_title.status:read" desc="查看职务状态" support_app_types="custom,isv" tags="">查看职务状态</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >description</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >i18n_text</md-text>
</md-dt-td>
<md-dt-td>
描述

**字段权限要求**：
<md-perm name="directory:job_title.base:read" desc="查看职务基础信息" support_app_types="custom,isv" tags="">查看职务基础信息</md-perm>
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >job_family</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >job_family</md-text>
</md-dt-td>
<md-dt-td>
序列

**字段权限要求**：
<md-perm name="directory:employee.work.job_family:read" desc="查看员工的工作序列信息" support_app_types="custom" tags="">查看员工的工作序列信息</md-perm>
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
ID，不存在时默认返回"0"
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >job_family_name</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >i18n_text</md-text>
</md-dt-td>
<md-dt-td>
i18n文本

**字段权限要求**：
<md-perm name="directory:job_family.base:read" desc="查看工作序列的信息" support_app_types="custom" tags="">查看工作序列的信息</md-perm>
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
<md-text type="field-name" >is_enabled</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >boolean</md-text>
</md-dt-td>
<md-dt-td>
是否启用

**字段权限要求**：
<md-perm name="directory:job_family.status:read" desc="查看企业中工作序列的状态信息" support_app_types="custom" tags="">查看企业中工作序列的状态信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >parent_job_family_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
上级序列

**字段权限要求**：
<md-perm name="directory:job_family.path:read" desc="查看工作序列的路径信息" support_app_types="custom" tags="">查看工作序列的路径信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >description</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >i18n_text</md-text>
</md-dt-td>
<md-dt-td>
i18n文本

**字段权限要求**：
<md-perm name="directory:job_family.base:read" desc="查看工作序列的信息" support_app_types="custom" tags="">查看工作序列的信息</md-perm>
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


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >resign_date</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
离职日期 2007-03-20

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.resign_date:read" desc="查看员工离职日期" support_app_types="custom,isv" tags="">查看员工离职日期</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >resign_reason</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
离职原因<br>
**示例值**："1"

**可选值有**：
<md-enum>
<md-enum-item key="1" >薪酬不符合预期</md-enum-item>
<md-enum-item key="2" >工作时间过长</md-enum-item>
<md-enum-item key="3" >不满意工作内容</md-enum-item>
<md-enum-item key="4" >不认可上级或管理层</md-enum-item>
<md-enum-item key="5" >职业发展机会有限</md-enum-item>
<md-enum-item key="6" >对公司文化缺乏认同</md-enum-item>
<md-enum-item key="7" >组织架构调整（主动离职）</md-enum-item>
<md-enum-item key="8" >合同到期</md-enum-item>
<md-enum-item key="9" >跳槽</md-enum-item>
<md-enum-item key="10" >转行</md-enum-item>
<md-enum-item key="11" >家庭原因</md-enum-item>
<md-enum-item key="12" >健康状况不佳</md-enum-item>
<md-enum-item key="13" >工作地点原因</md-enum-item>
<md-enum-item key="14" >其他(主动离职)</md-enum-item>
<md-enum-item key="15" >意外</md-enum-item>
<md-enum-item key="16" >身故</md-enum-item>
<md-enum-item key="17" >解雇</md-enum-item>
<md-enum-item key="18" >试用期不通过</md-enum-item>
<md-enum-item key="19" >工作表现不佳</md-enum-item>
<md-enum-item key="20" >工作产出低</md-enum-item>
<md-enum-item key="21" >组织架构调整（被动离职）</md-enum-item>
<md-enum-item key="22" >违纪</md-enum-item>
<md-enum-item key="23" >违法</md-enum-item>
<md-enum-item key="24" >其他（被动离职）</md-enum-item>
<md-enum-item key="25" >其他（其他）</md-enum-item>
</md-enum>

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.resign_reason:read" desc="查看员工离职原因" support_app_types="custom,isv" tags="">查看员工离职原因</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >resign_remark</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
离职备注

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.resign_remark:read" desc="查看员工离职备注" support_app_types="custom,isv" tags="">查看员工离职备注</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >resign_type</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
离职类型<br>**示例值**："1"

**可选值有**：
<md-enum>
<md-enum-item key="1" >主动</md-enum-item>
<md-enum-item key="2" >被动</md-enum-item>
<md-enum-item key="3" >其他</md-enum-item>
</md-enum>

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.work.resign_type:read" desc="查看员工离职类型" support_app_types="custom,isv" tags="">查看员工离职类型</md-perm>
<md-perm name="directory:employee.work.employment:read" desc="查看员工雇佣信息" support_app_types="custom" tags="history,offline">查看员工雇佣信息</md-perm>
</md-dt-td>
</md-dt-tr>

</md-dt-tbody>




</md-dt-table>
:::



## 数据示例

```json 
{
    "base_info": {
        "employee_id": "u273y71",
        "name": {
            "last_name": {
                "value": "王",
                "i18n_value": [
                    {
                        "language": "zh_cn",
                        "value": "王"
                    },
                    {
                        "language": "en_us",
                        "value": "Wang"
                    }
                ],
                "default_locale": "zh_cn"
            },
            "first_name": {
                "value": "小明",
                "i18n_value": [
                    {
                        "language": "zh_cn",
                        "value": "小明"
                    },
                    {
                        "language": "en_us",
                        "value": "Xiaoming"
                    }
                ],
                "default_locale": "zh_cn"
            },
            "name": {
                "value": "王小明",
                "i18n_value": [
                    {
                        "language": "zh_cn",
                        "value": "王小明"
                    },
                    {
                        "language": "en_us",
                        "value": "Wang Xiaoming"
                    }
                ],
                "default_locale": "zh_cn"
            },
            "another_name": {
                "value": "王明"
            }
        },
        "avatar_key": "2500c7a9-5fff-4d9a-a2de-3d59614ae28g",
        "background_image_key": "2500c7a9-5fff-4d9a-a2de-3d59614ae28g",
        "description": "新成员请多关照",
        "mobile": "+8613011111111",
        "email": "zhangsan@gmail.com",
        "enterprise_email": "zhangsan@gmail.com",
        "enterprise_email_alias": [
            "zhangsan_1@gmail.com",
            "zhangsan_2@gmail.com"
        ],
        "gender": 1,
        "departments": [
            {
                "department_id": "D100",
                "name": {
                    "value": "销售部",
                    "i18n_value": {
                        "language": "en_us",
                        "value": "Sale"
                    },
                    "default_locale": "zh_cn"
                },
                "parent_department_id": "D90",
                "leaders": [
                    {
                        "leader_ID": "u273y69",
                        "DepartmentLeaderType": 1
                    }
                ],
                "has_child": true,
                "department_count": {
                    "recursive_members_count": 100,
                    "direct_members_count": 90,
                    "recursive_members_count_exclue_leaders": 80,
                    "recursive_departments_count": 20,
                    "direct_departments_count": 10
                },
                "order_weight": 1
            }
        ],
        "employee_order_in_departments": [
            {
                "department_id": "D100",
                "order_weight_in_deparment": 100,
                "order_weight_among_deparments": 1
            }
        ],
        "department_path_infos": [
            {
                "department_id": "D100",
                "path_infos": [
                    {
                        "department_id": "h121921",
                        "department_name": {
                            "value": "根部门",
                            "i18n_value": {
                                "language": "en_us",
                                "value": "root"
                            },
                            "default_locale": "zh_cn"
                        }
                    },
                    {
                        "department_id": "D100",
                        "department_name": {
                            "value": "子部门",
                            "i18n_value": {
                                "language": "en_us",
                                "value": "leaf"
                            },
                            "default_locale": "zh_cn"
                        }
                    }
                ]
            }
        ],
        "leader_id": "2e1cf73b",
        "dotted_line_leader_ids": [
            "2b1ae26b"
        ],
        "active_status": 1,
        "is_resigned": false,
        "is_primary_admin": false,
        "is_admin": true,
        "custom_field_values": [
            {
                "field_id": "DemoId",
                "field_value": {
                    "field_type": 1,
                    "text_value": "DemoText"
                }
            },
            {
                "field_id": "DemoId_2",
                "field_value": {
                    "field_type": 4,
                    "user_value": [
                        "9b2fabg5"
                    ]
                }
            }
        ],
        "resign_time": 348970,
        "data_source": 1,
        "geo_name": "cn",
        "subscription_ids": [
            "23213213213123123"
        ]
    },
    "work_info": {
        "work_country_or_region": "MDCT00000040",
        "work_place": {
            "place_id": "mga5oa8ayjlp9rb",
            "place_name": {
                "value": "北京市"
            },
            "is_enable": true,
            "description": "主要的工作地点"
        },
        "work_station": {
            "value": "北楼-H34",
            "i18n_value": {
                "language": "en_us",
                "value": "North-H34"
            },
            "default_locale": "zh_cn"
        },
        "job_number": "2845435",
        "extension_number": "080",
        "join_date": "2007-03-20",
        "employment_type": 2,
        "staff_status": 1,
        "positions": [
            {
                "position_code": "fga7b946",
                "position_name": "销售",
                "is_main_position": true,
                "department_id": "D100",
                "leader_id": "2e1cf73b",
                "leader_position_code": "e71b94gb"
            }
        ],
        "job_title": {
            "job_title_id": "mga5oa8ayjlp9rb",
            "job_title_name": {
                "value": "销售"
            },
            "is_enable": true,
            "description": {
                "value": "销售岗位"
            }
        },
        "job_family": {
            "description": {
                "default_value": ""
            },
            "is_enabled": true,
            "job_family_id": "5rbknygz18kv2ge",
            "job_family_name": {
                "default_value": "研发",
                "i18n_value": {
                    "en_us": "研发en",
                    "ja_jp": "研发jp",
                    "zh_cn": "研发cn"
                }
            },
            "parent_job_family_id": "0"
        }
    }
}

``` 

