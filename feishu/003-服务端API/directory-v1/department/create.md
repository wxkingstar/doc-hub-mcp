<!--
title: 创建部门
id: 7359428154233536516
fullPath: /uAjLw4CM/ukTMukTMukTM/directory-v1/department/create
updatedAt: 1752138940000
source: https://open.feishu.cn/document/directory-v1/department/create
-->
# 创建部门

本接口用于用于在企业通讯录中创建新部门，支持设置部门名称、父部门、负责人等信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=directory&version=v1&resource=department&method=create)

:::html
<md-alert type="tip">
注意：
- 只能在当前应用的通讯录授权范围内的部门下创建部门，如果要在根部门下创建子部门，必须拥有全员权限。可以在 开发者后台-应用详情-权限管理中 查看通讯录授权范围。
- 本接口中支持的user_access_token 默认为管理员用户，将校验管理员管理范围。当用户有多个管理员身份均可创建部门时，管理员管理范围取最大集。管理员权限可查看帮助中心文档：[管理员创建管理员角色及分配权限](https://www.feishu.cn/hc/zh-CN/articles/360043495213-%E7%AE%A1%E7%90%86%E5%91%98%E5%88%9B%E5%BB%BA%E7%AE%A1%E7%90%86%E5%91%98%E8%A7%92%E8%89%B2%E5%8F%8A%E5%88%86%E9%85%8D%E6%9D%83%E9%99%90#tabs0|lineguid-dU31C)
- 拥有本接口权限后，即可写入部门信息。但创建部门后仅返回应用有权限的字段数据，如果需要指定字段请按照文档中的描述申请对应权限。
- 本接口仅对自建应用开放。
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
      <md-td>https://open.feishu.cn/open-apis/directory/v1/departments</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="directory:department.create:write" desc="创建部门" support_app_types="custom" tags="">创建部门</md-perm>
            <md-perm name="directory:department:write" desc="创建、更新、删除部门" support_app_types="custom" tags="">创建、更新、删除部门</md-perm>
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
<md-enum-item key="department_id" >用来标识租户内一个唯一的部门</md-enum-item>
<md-enum-item key="open_department_id" >用来在具体某个应用中标识一个部门，同一个部门 在不同应用中的 open_department_id 不相同。</md-enum-item>
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
	<md-text type="field-name" >department</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >create_department</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	创建部门
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >custom_department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	标识租户内一个唯一的部门，支持自定义，未自定义时系统自动生成。ID支持修改。注意：
1. 除需要满足正则规则外，同时不能以od-开头
2. 正则校验：^[a-zA-Z0-9][a-zA-Z0-9_\-@.]{0,63}$

**示例值**："eersdf"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门名称，最多可输入 100 字

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
	是
	</md-dt-td>
	<md-dt-td>
	默认值

**示例值**："张三

**数据校验规则**：

长度范围：1-64 字符"
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
	否
	</md-dt-td>
	<md-dt-td>
	国际化值，key为zh_cn, ja_jp, en_us, value为对应的值

**示例值**：{
                    "zh_cn": "中文",
                    "ja_jp": "ja_jp_name",
                    "en_us": "en_us_name"
                }
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >parent_department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	父部门ID，与department_id_type类型保持一致
。如果父部门为根部门，该参数值为 “0”

**示例值**："h121900"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >leaders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department_leader\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门负责人

**数据校验规则**：

- 长度范围：`0` ～ `20`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >leader_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	部门负责人类型

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >主</md-enum-item>
<md-enum-item key="2" >副</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >leader_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	部门负责人ID，与employee_id_type类型保持一致


**示例值**："u273y71"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >order_weight</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	在上级部门下的排序权重，返回结果按order_weight降序排列

**示例值**："100"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >enabled_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否启用

**示例值**：true
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
	否
	</md-dt-td>
	<md-dt-td>
	部门自定义字段值

**数据校验规则**：

- 长度范围：`0` ～ `100`
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
	否
	</md-dt-td>
	<md-dt-td>
	自定义字段类型

**示例值**："1"

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


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >text_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	否
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
	是
	</md-dt-td>
	<md-dt-td>
	默认值

**示例值**："张三"
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
	否
	</md-dt-td>
	<md-dt-td>
	国际化值，key为zh_cn, ja_jp, en_us, value为对应的值

**示例值**：{
                    "zh_cn": "中文",
                    "ja_jp": "ja_jp_name",
                    "en_us": "en_us_name"
                }
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
	否
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
	是
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
	是
	</md-dt-td>
	<md-dt-td>
	默认值

**示例值**："张三"
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
	否
	</md-dt-td>
	<md-dt-td>
	国际化值，key为zh_cn, ja_jp, en_us, value为对应的值

**示例值**：{"zh_cn":"张三"}
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
	是
	</md-dt-td>
	<md-dt-td>
	移动端网页链接

**示例值**："https://m.bytedance.com/afnasjfna"
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
	是
	</md-dt-td>
	<md-dt-td>
	桌面端网页链接

**示例值**："http://www.fs.cn"
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
	否
	</md-dt-td>
	<md-dt-td>
	枚举字段值
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
	是
	</md-dt-td>
	<md-dt-td>
	选项结果ID

**示例值**：["dsa213sa"]

**数据校验规则**：

- 长度范围：`0` ～ `100`
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
	是
	</md-dt-td>
	<md-dt-td>
	选项类型

**示例值**："1"

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
	否
	</md-dt-td>
	<md-dt-td>
	人员字段值

**数据校验规则**：

- 长度范围：`0` ～ `100`
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
	是
	</md-dt-td>
	<md-dt-td>
	人员ID，与employee_id_type类型保持一致


**示例值**：["asdbjw1s"]

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >phone_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >phone_value</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	电话字段值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >phone_number</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	电话号

**示例值**："18812345678"
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
	否
	</md-dt-td>
	<md-dt-td>
	分机号

**示例值**："234234234

长度范围：0-99字符"
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
	否
	</md-dt-td>
	<md-dt-td>
	自定义字段key

**示例值**："C-1000001"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{"department":{"custom_department_id":"eersdf",
"name":{"default_value":"张三

**数据校验规则**：

长度范围：1-64 字符",
"i18n_value":{
                    "zh_cn": "中文",
                    "ja_jp": "ja_jp_name",
                    "en_us": "en_us_name"
                }},
"parent_department_id":"h121900",
"leaders":[{
    "leader_type": 1,
    "leader_id": "u273y71"
}],
"order_weight":"100",
"enabled_status":true,
"custom_field_values":[{"field_type":"1",
"text_value":{"default_value":"张三",
"i18n_value":{
                    "zh_cn": "中文",
                    "ja_jp": "ja_jp_name",
                    "en_us": "en_us_name"
                }},
"url_value":{"link_text":{"default_value":"张三",
"i18n_value":{"zh_cn":"张三"}},
"url":"https://m.bytedance.com/afnasjfna",
"pcurl":"http://www.fs.cn"},
"enum_value":{"enum_ids":["dsa213sa"],
"enum_type":"1"},
"user_values":[{
    "ids": [
        "asdbjw1s"
    ]
}],
"phone_value":{"phone_number":"18812345678",
"extension_number":"234234234

长度范围：0-99字符"},
"field_key":"C-1000001"}]}}
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
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门ID
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
        "department_id": "eesdasd"
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
  <md-td>2221305</md-td>
  <md-td>Request parameter error</md-td>
  <md-td>请求参数错误，具体参照错误信息。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221306</md-td>
  <md-td>ExternalID repeat</md-td>
  <md-td>租户内自定义ID重复，请更换自定义ID后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221307</md-td>
  <md-td>Exceed department limit</md-td>
  <md-td>部门数量超限，请减少部门数量至限制内。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221309</md-td>
  <md-td>Department does not exist</md-td>
  <md-td>父部门不存在，请确认父部门ID是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221311</md-td>
  <md-td>Internationalized name duplication</md-td>
  <md-td>部门的英文名称已存在，请使用其他名称 或 部门的日文名称已存在，请使用其他名称
</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221312</md-td>
  <md-td>Exceed department level depth</md-td>
  <md-td>部门层级过深，部门层级上限为25</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221313</md-td>
  <md-td>ExternalID invalid</md-td>
  <md-td>自定义id长度不可超过 64 个字符
</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221317</md-td>
  <md-td>Department direct sub departments exceed limits</md-td>
  <md-td>部门直属子部门数上限为1000</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221319</md-td>
  <md-td>Department name duplicate when creating and updating</md-td>
  <md-td>创建和更新时，部门名重复，XX（部门名字）已存在，请使用其他名称
</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221300</md-td>
  <md-td>Department common error</md-td>
  <md-td>服务异常，请重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221328</md-td>
  <md-td>Description invalid</md-td>
  <md-td>默认值或多语言值超过100字，请检查并修改。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221331</md-td>
  <md-td>Custom field value invalid</md-td>
  <md-td>自定义字段值不合法，具体参照错误信息</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221333</md-td>
  <md-td>Department name can not contain '/'</md-td>
  <md-td>部门名称不能包含"/"</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221334</md-td>
  <md-td>Department ID duplicate</md-td>
  <md-td>部门ID已被使用，更换部门ID后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2224001</md-td>
  <md-td>No permission to operate</md-td>
  <md-td>无接口权限，请为应用申请接口权限，具体操作参见相关文档。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2224002</md-td>
  <md-td>No permission to operate record</md-td>
  <md-td>没有行记录权限，请联系管理员获取行记录权限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2224003</md-td>
  <md-td>No permission to operate dependent object</md-td>
  <md-td>无权限操作相关实体，如父部门、部门Leader，请确认是否有权限操作相关实体。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221349</md-td>
  <md-td>Department has member, can not disable department</md-td>
  <md-td>部门下还有成员，不可停用</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221350</md-td>
  <md-td>Department has child, can not disable department</md-td>
  <md-td>部门下还有子部门，不可停用</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221351</md-td>
  <md-td>Department parent is disabled, can not enable</md-td>
  <md-td>父部门为停用，不可启用当前部门</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221352</md-td>
  <md-td>Department parent is disabled</md-td>
  <md-td>父部门为停用状态，请先启用父部门。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




