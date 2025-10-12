<!--
title: 用户资源介绍
id: 6997733381623595009
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/field-overview
updatedAt: 1723606525000
source: https://open.feishu.cn/document/server-docs/contact-v3/user/field-overview
-->
#  用户资源介绍

用户是通讯录中的基础资源，对应企业组织架构中的成员实体。

## 基本概念

在调用通讯录 API 之前，建议你了解以下基本概念。

### 用户 ID

在调用通讯录 API 时，你将会用到用户的多种身份标识，包括 `user_id`、`open_id` 和 `union_id`。

- user_id 是用户在某一租户内的身份标识。
- open_id 是用户在某一应用内的身份标识。
- union_id 是用户在同一应用服务商所开发的多个应用下的身份标识。

你可以根据实际应用场景选择合适的用户 ID。例如，应用服务商想查询当前应用下的某一用户是否在使用其开发的其他应用，则可以通过用户的 union_id 来查询判断。

- 有关用户身份的详细介绍，可参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。
- 如何选择用户 ID，可参见[如何选择使用哪种 ID](/ssl:ttdoc/home/user-identity-introduction/user-id)。

### 用户状态

在调用通讯录 API 时，你可能会查询到用户的多种状态（`status` 参数，可调用[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)、[批量获取用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch)接口查询用户状态），包括是否激活、是否暂停、是否离职、是否主动退出、是否未加入。用户的各类状态之间的转换关系如下图所示。

![用户状态图.svg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2b66abcda4e4b890903ae475d6e682f3_QRXBt6OGQG.png?height=944&lazyload=true&maxWidth=700&width=2282)


##  字段说明

:::html
<md-table>

  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 55%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >user_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	租户内用户的唯一标识。user_id 可以自定义设置，也可以由系统随机生成。关于用户 ID 的详细说明，参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。
      
**自定义 user_id 时要遵循以下数据校验规则**：

- 最大长度：`64` 字符

- 正则校验：不能包含空格字
      
**示例值**："u273y71"

**字段权限要求**：<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
	</md-td>
</md-tr>

<md-tr>
	<md-td>
	<md-text type="field-name" >open_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	应用内用户的唯一标识，同一用户在不同应用内的 open_id 不同。关于用户 ID 的详细说明，参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"


	</md-td>
</md-tr>
    
    <md-tr>
	<md-td>
	<md-text type="field-name" >union_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
    在同一应用服务商所开发的多个应用内用户的唯一标识。应用开发商可以通过用户的 union_id，把其开发的多个应用内的同一个用户关联起来。关于用户 ID 的详细说明，参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**示例值**："on_cad4860e7af114fb4ff6c5d496d1dd76"

	</md-td>
</md-tr>
<md-tr>
	<md-td>
	<md-text type="field-name" >name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	用户名。长度不能超过 255 字符。

**示例值**："张三"

**字段权限要求（满足任一）**：
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >en_name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	英文名。长度不能超过 255 字符。

**示例值**："San Zhang"

**字段权限要求（满足任一）**：
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >email</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	邮箱。

**示例值**："zhangsan@gmail.com"

**字段权限要求**：
<md-perm name="contact:user.email:readonly" desc="获取用户邮箱信息" support_app_types="custom" tags="">获取用户邮箱信息</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >mobile</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	手机号。
    
**使用限制**：
- 在本企业内手机号不可重复。
- 未认证企业仅支持添加中国大陆手机号；通过飞书认证的企业允许添加海外手机号。

**示例值**："13011111111"

**字段权限要求**：
<md-perm name="contact:user.phone:readonly" desc="获取用户手机号" support_app_types="custom" tags="">获取用户手机号</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >mobile_visible</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >boolean</md-text>
	</md-td>
	<md-td>
	手机号码是否可见。

**可选值有**：
- true：可见。
- false：不可见。不可见时，组织员工将无法查看该员工的手机号码。

**默认值**： true

**示例值**：false
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >gender</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	性别。

**可选值有**：
- 0：保密
- 1：男
- 2：女
- 3：其他
      

**字段权限要求（满足任一）**：
<md-perm name="contact:user.gender:readonly" desc="获取用户性别" support_app_types="custom,isv" tags="">获取用户性别</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
 
**示例值**：1
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >avatar_key</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	头像的文件 Key。你可以通过[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传并获取头像文件 Key。
      
**示例值**："2500c7a9-5fff-4d9a-a2de-3d59614ae28g"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >department_ids</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-td>
	<md-td>
	用户所属部门的 ID 列表。关于部门资源的详细说明，可参见[部门资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)。

**示例值**：od-4e6ac4d14bcd5071a37a39de902c7141
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >leader_user_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	用户的直接主管的用户 ID（open_id）。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >city</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	工作城市。

**示例值**："杭州"

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >country</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	国家或地区。格式为国家或地区缩写 Code，具体参见[国家或地区 Code 参照表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/country-code-description)。

**示例值**："CN"

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >work_station</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	工位。

**示例值**："北楼-H34"

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >join_time</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	入职时间。秒级时间戳格式，表示从 1970 年 1 月 1 日开始所经过的秒数。

**示例值**：2147483647

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >employee_no</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	工号。

**示例值**："1"

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >employee_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	员工类型。
      
**可选值有**：
- 1：正式员工
- 2：实习生
- 3：外包
- 4：劳务
- 5：顾问   
      
同时接口可读取到自定义员工类型的 int 值。你可以调用[查询人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口，获取到当前租户内自定义员工类型的名称。   

**示例值**：1
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >orders</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >user_order\[\]</md-text>
	</md-td>
	<md-td>
	用户排序信息。该参数用于标记通讯录下组织架构的人员顺序，人员可能存在多个部门中，且有不同的排序。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >department_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	排序信息对应的部门 ID。关于部门资源的详细说明，可参见[部门资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0)。
  
**示例值**："od-4e6ac4d14bcd5071a37a39de902c7141"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >user_order</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	用户在其直属部门内的排序。数值越大，排序越靠前。

**示例值**：100
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >department_order</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	用户所属的多个部门之间的排序。数值越大，排序越靠前。

**示例值**：100
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >custom_attrs</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >user_custom_attr\[\]</md-text>
	</md-td>
	<md-td>
	自定义字段。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	自定义字段类型
- TEXT：文本
- HREF：网页
- ENUMERATION：枚举
- PICTURE_ENUM：图片
- GENERIC_USER：用户

**示例值**："TEXT"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	自定义字段 ID。

**示例值**："DemoId"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >value</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >user_custom_attr_value</md-text>
	</md-td>
	<md-td>
	自定义字段取值。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >text</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
- 字段类型为 TEXT 时，该参数取值为定义的字段值。
- 字段类型为 HREF 时，该参数取值为定义的网页标题。

**示例值**："DemoText"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >url</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	字段类型为 HREF 时，该参数取值为定义的默认 URL。

**示例值**："http://www.fs.cn"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >pc_url</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	字段类型为 HREF 时，该参数取值为定义的 PC 端 URL。

**示例值**："http://www.fs.cn"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >option_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	字段类型为 ENUMERATION 或 PICTURE_ENUM 时，该参数取值为定义的选项值。

**示例值**："edcvfrtg"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >generic_user</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >custom_attr_generic_user</md-text>
	</md-td>
	<md-td>
	字段类型为 GENERIC_USER 时，该参数取值为定义的引用人员。该类型的自定义字段主要用于在成员名片页展示对另一用户的引用，实现成员名片页之间的跳转。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	被引用的用户的 user_id。

**示例值**："9b2fabg5"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	用户类型。目前仅支持取值 1，表示用户。

**示例值**：1
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >enterprise_email</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	企业邮箱。
      
**注意事项**：企业管理员在管理后台启用飞书邮箱服务后，才会生效该参数。

**示例值**："demo@mail.com"

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >job_title</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	职务。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
	</md-td>
</md-tr>

:::

##  数据示例
```json
{
    "user_id": "u273y71",
    "open_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
    "union_id": "ou_be2c1742f2bb189469bdd33f0b1516ea",
    "name": "张三",
    "en_name": "San Zhang",
    "email": "zhangsan@gmail.com",
    "mobile": "13011111111",
    "mobile_visible": false,
    "gender": 1,
    "avatar_key": "2500c7a9-5fff-4d9a-a2de-3d59614ae28g",
    "department_ids": [
        "od-4e6ac4d14bcd5071a37a39de902c7141"
    ],
    "leader_user_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
    "city": "杭州",
    "country": "CN",
    "work_station": "北楼-H34",
    "join_time": 2147483647,
    "employee_no": "1",
    "employee_type": 1,
    "orders": [
        {
            "department_id": "od-4e6ac4d14bcd5071a37a39de902c7141",
            "user_order": 100,
            "department_order": 100
        }
    ],
    "custom_attrs": [
        {
            "type": "TEXT",
            "id": "DemoId",
            "value": {
                "text": "DemoText",
                "url": "http://www.fs.cn",
                "pc_url": "http://www.fs.cn",
                "option_id": "edcvfrtg",
                "generic_user": {
                    "id": "9b2fabg5",
                    "type": 1
                }
            }
        }
    ],
    "enterprise_email": "demo@mail.com",
    "job_title": "xxxxx"
}
```
