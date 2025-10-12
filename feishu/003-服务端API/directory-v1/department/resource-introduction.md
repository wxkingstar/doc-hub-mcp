<!--
title: 资源介绍
id: 7359428154233634820
fullPath: /uAjLw4CM/ukTMukTMukTM/directory-v1/department/resource-introduction
updatedAt: 1749798702000
source: https://open.feishu.cn/document/directory-v1/department/resource-introduction
-->
# 资源定义
部门是飞书组织架构里的一个基础实体，每个员工都归属于一个或多个部门。
部门在飞书的身份标识包括`department_id`、`open_department_id`。有关department各类ID的详细介绍，参考 
[部门ID说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0)。


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


<md-dt-tr level="0">
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >recursive_members_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门成员数量，包含部门内所有层级子部门的成员数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >direct_members_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门成员数量，仅包含直属成员数，不包含子部门成员数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >recursive_members_count_exclude_leaders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门成员数量，包含部门内所有层级子部门的成员数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >recursive_departments_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门成员数量，包含部门内所有层级子部门的成员数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >direct_departments_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门成员数量，仅包含直属成员数，不包含子部门成员数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
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


<md-dt-tr level="0">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="0">
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


<md-dt-tr level="0">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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
    
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >enabled_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>

**字段权限要求**：
<md-perm name="directory:department.status:read" desc="查看部门的停启用状态" support_app_types="custom,isv" tags="">查看部门的停启用状态</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
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


<md-dt-tr level="0">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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
	<md-text type="field-name" >url_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >url_value</md-text>
	</md-dt-td>
	<md-dt-td>
	网页链接字段值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	移动端网页链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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


<md-dt-tr level="1">
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


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="1">
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


<md-dt-tr level="2">
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


<md-dt-tr level="0">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="0">
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
</md-dt-tbody>
</md-dt-table>
:::



## 数据示例

```json 
 {
    "department_id": "D100",
    "open_department_id": "od-4e6ac4d14bcd5071a37a39de902c7141",
    "name": {
        "value": "销售部",
        "i18n_value":{
            "language": "en_us"
                "value": "Sale"
            }
        },
    "parent_department_id": "D90",
    "leaders": [
        {
            "leader_ID": "u273y69",
            "DepartmentLeaderType": 1
        }
    ],
    "has_child":true,
    "department_count": {
        "recursive_members_count": 100,
        "direct_members_count": 90,
        "recursive_members_count_exclue_leaders":80,
        "recursive_departments_count": 20,
        "direct_departments_count": 10
    },
    "enabled_status": true,
    "order_weight": 1,
    "department_path_info": [
        {
            "department_id": "D102",
            "department_name":{
                "value": "北京科技有限公司",
                "i18n_value":{
                    "language": "en_us"
                        "value": "Beijing Technology Co., Ltd"
                }
            }
        },
        {
            "department_id": "D101",
            "department_name":{
                "value": "华北大区",
                "i18n_value":{
                    "language": "en_us"
                        "value": "North China Region"
                }
            }
        },
        {
            "department_id": "D100",
            "department_name":{
                "value": "销售部",
                "i18n_value":{
                    "language": "en_us"
                        "value": "Sale"
                }
            }
        }
    ],
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
    "data_source":1   
}

``` 

