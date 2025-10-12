<!--
title: 修改用户部分信息
id: 6943913881476792347
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch
updatedAt: 1759976721000
source: https://open.feishu.cn/document/server-docs/contact-v3/user/patch
-->
# 修改用户部分信息

调用该接口更新通讯录中指定用户的信息，包括名称、邮箱、手机号、所属部门以及自定义字段等信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=user&method=patch)

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

## 注意事项

- 发送请求时，未传递的参数不会更新。
- 并发操作冻结用户时，因事务冲突会遇到概率性的接口调用失败。因此，请尝试降低请求速率或改为串行执行。
- 更新 `department_ids`、`is_frozen` 时，限制调用频率为 1 QPS。
- userAccessToken只允许修改这三个字段'Name'、'EnName'、'AvatarKey'。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/users/:user_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
            <md-perm name="contact:user.base" desc="更新用户基本信息" support_app_types="custom" tags="">更新用户基本信息</md-perm>
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
        <md-perm name="directory:employee.base.email:read" desc="查看员工工作邮箱" support_app_types="custom,isv" tags="">查看员工工作邮箱</md-perm>
        <md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
        <md-perm name="contact:user.department:readonly" desc="获取用户组织架构信息" support_app_types="custom,isv" tags="">获取用户组织架构信息</md-perm>
        <md-perm name="contact:user.dotted_line_leader_info.read" desc="查看成员的虚线上级 ID" support_app_types="custom,isv" tags="">查看成员的虚线上级 ID</md-perm>
        <md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
        <md-perm name="contact:user.employee_number:read" desc="查看成员工号" support_app_types="custom,isv" tags="">查看成员工号</md-perm>
        <md-perm name="contact:user.gender:readonly" desc="获取用户性别" support_app_types="custom,isv" tags="">获取用户性别</md-perm>
        <md-perm name="contact:user.job_level:readonly" desc="查询用户职级" support_app_types="custom" tags="">查询用户职级</md-perm>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
        <md-perm name="contact:user.phone:readonly" desc="获取用户手机号" support_app_types="custom" tags="">获取用户手机号</md-perm>
        <md-perm name="contact:user.email:readonly" desc="获取用户邮箱信息" support_app_types="custom" tags="">获取用户邮箱信息</md-perm>
        <md-perm name="contact:user.job_family:readonly" desc="查询用户所属的工作序列" support_app_types="custom" tags="">查询用户所属的工作序列</md-perm>
        <md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
        <md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
        <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
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
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 ID，ID 类型需要与查询参数中的 user_id_type 类型保持一致。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
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
	<md-text type="field-name" >department_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	此次调用中使用的部门 ID 类型。关于部门 ID 的详细介绍，可参见[部门 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0)。

**示例值**：open_department_id

**可选值有**：
<md-enum>
<md-enum-item key="department_id" >支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。</md-enum-item>
<md-enum-item key="open_department_id" >由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。</md-enum-item>
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
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户名。长度不能超过 255 字符。

**示例值**："张三"

**数据校验规则**：

- 最小长度：`1` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >en_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	英文名。长度不能超过 255 字符。

**示例值**："San Zhang"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >nickname</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	别名。长度不能超过 255 字符。

**示例值**："Alex Zhang"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	邮箱。

**注意**：
- 当设置非中国大陆的手机号时，必须同时设置邮箱。
- 在当前租户下，邮箱不可重复。

**示例值**："zhangsan@gmail.com"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >mobile</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	手机号。

**注意**：
- 在当前租户下，手机号不可重复。
- 未认证企业仅支持添加中国大陆手机号；通过飞书认证的企业允许添加海外手机号。
- 国际电话区号的前缀中，必须包含加号 **+**。

取值示例：

- 中国大陆手机号：13011111111 或 +8613011111111
- 非中国大陆手机号：+41446681800

**示例值**："13011111111"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >mobile_visible</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	手机号码是否可见。

**可选值有**：

- true：可见。
- false：不可见。不可见时，企业内的员工将无法查看该用户的手机号码。

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >gender</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	性别。

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="0" >保密</md-enum-item>
<md-enum-item key="1" >男</md-enum-item>
<md-enum-item key="2" >女</md-enum-item>
<md-enum-item key="3" >其他</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >avatar_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	头像的文件 Key。你可以通过[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传并获取头像文件 Key，上传时图片类型需要选择 用于设置头像

**示例值**："2500c7a9-5fff-4d9a-a2de-3d59614ae28g"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >department_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户所属部门的 ID 列表。

- 一个用户可属于多个部门。最多可归属 50 个部门。
- 部门 ID 类型与查询参数 `department_id_type` 的取值保持一致。
- 你可以调用[搜索部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/search)接口，通过部门名称关键词获取对应的部门 ID。

**示例值**：["od-4e6ac4d14bcd5071a37a39de902c7141"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >leader_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户的直接主管的用户 ID，ID 类型与查询参数 `user_id_type` 的取值保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >city</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	工作城市。字符长度上限为 100。

- 调用[获取租户工作城市列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/work_city/list)获取当前租户内已有的工作城市列表。
- 如果你传入的工作城市名称不存在，则系统会自动生成该工作城市。工作城市的枚举值数量上限为 10,000。

**示例值**："杭州"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >country</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	国家或地区 Code 缩写。具体写入格式参考 [国家/地区 Code 参照表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/country-code-description)。

**示例值**："CN"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >work_station</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	工位。字符长度上限为 255。

**示例值**："北楼-H34"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >join_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	入职时间。秒级时间戳格式，表示从 1970 年 1 月 1 日开始所经过的秒数。
修改用户信息传入 0 时，入职时间则会置空。

 

**示例值**：2147483647
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >employee_no</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	工号。字符长度上限为 255。

**示例值**："1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >employee_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	员工类型。

**可选值有**：
- 1：正式员工
- 2：实习生
- 3：外包
- 4：劳务
- 5：顾问   

该参数支持读取自定义的员工类型的 int 值。你可通过[获取人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口获取到该租户的自定义员工类型的编号值（enum_value）。

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >orders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_order\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户排序信息。该参数用于标记通讯录下组织架构的人员顺序，人员可能存在多个部门中，且有不同的排序。
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
	否
	</md-dt-td>
	<md-dt-td>
	排序信息对应的部门 ID。表示用户所在的、且需要排序的部门。

**注意**：

- 部门 ID 类型与查询参数 department_id_type 的取值保持一致。
- 该参数所传入的部门 ID 必须在用户所属的部门 ID 列表（department_ids 参数）内。

**示例值**："od-4e6ac4d14bcd5071a37a39de902c7141"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >user_order</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户在其直属部门内的排序，数值越大，排序越靠前。

**注意**：该参数为 int 类型，取值时不能超出 int 的最大值。

**示例值**：100
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >department_order</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户所属的多个部门间的排序，数值越大，排序越靠前。

**注意**：该参数为 int 类型，取值时不能超出 int 的最大值。

**示例值**：100
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >is_primary_dept</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	标识是否为用户的唯一主部门，主部门为用户所属部门中排序第一的部门（department_order 最大）。

**可选值有**：

- true：是
- false：否

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >custom_attrs</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_custom_attr\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义字段。设置参数前建议你先了解[自定义字段资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr/overview)。

**注意事项**：当企业管理员在管理后台配置了自定义字段，且开启了 **允许开放平台 API 调用** 功能后，该字段才会生效。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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
	自定义字段类型。

**可选值有**：   
- TEXT：文本
- HREF：网页
- ENUMERATION：枚举
- PICTURE_ENUM：图片
- GENERIC_USER：用户

**示例值**："TEXT"
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
	否
	</md-dt-td>
	<md-dt-td>
	自定义字段 ID。

**示例值**："DemoId"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_custom_attr_value</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义字段取值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	- 字段类型为 TEXT 时，该参数定义字段值，必填。
- 字段类型为 HREF 时，该参数定义网页标题，必填。

长度不能超过 100 字符。

**示例值**："DemoText"
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
	否
	</md-dt-td>
	<md-dt-td>
	字段类型为 HREF 时，该参数定义默认 URL。例如，手机端跳转小程序，PC端跳转网页。

**示例值**："http://www.fs.cn"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >pc_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段类型为 HREF 时，该参数定义 PC 端 URL。

**示例值**："http://www.fs.cn"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >option_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段类型为 ENUMERATION 或 PICTURE_ENUM 时，该参数定义选项 ID。

**示例值**："edcvfrtg"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >generic_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_attr_generic_user</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段类型为 GENERIC_USER 时，该参数定义引用人员。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
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
	引用人员的用户 ID。

- 自定义字段涉及的人员 ID，仅支持传入user_id格式的标识，该限制不受查询参数中user_id_type的取值影响。

- 如何获取用户 ID 可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

**示例值**："9b2fabg5"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	用户类型。

**可选值有**：
1：用户

**说明**：目前仅支持取值 1，表示用户。

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >enterprise_email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	企业邮箱。
      
**注意事项**：企业管理员在管理后台启用飞书邮箱服务后，才会生效该参数。如果设置企业邮箱失败，请联系企业管理员确认是否在管理后台启用了相应的企业邮箱域名。

**示例值**："demo@mail.com"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >job_title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	职务名称。字符数量上限为 255。

- 你可以调用[获取租户职务列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_title/list)接口获取相应的租户名称。
- 如果传入的职务名称不存在，则系统会自动创建并使用该名称。职务枚举值数量上限为 10,000。

**示例值**："xxxxx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >is_frozen</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否是暂停状态的用户。

**可选值有**：
- true：是
- false：否

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >job_level_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	职级 ID。你可以调用[获取租户职级列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/list)接口查询相应的职级 ID。

**示例值**："mga5oa8ayjlp9rb"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >job_family_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	序列 ID。你可以调用[获取租户序列列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/list)接口查询相应的序列 ID。

**示例值**："mga5oa8ayjlpzjq"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >subscription_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分配给用户的席位 ID 列表。

**注意事项**：
- 该字段需开通 **分配用户席位** 权限。
- 你可通过[获取企业席位信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant-product_assign_info/query)接口，获取到当前租户的可用席位 ID。

**示例值**：["23213213213123123"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >dotted_line_leader_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	虚线上级的用户 ID 列表。

- ID 类型与查询参数 `user_id_type` 的取值保持一致。

- 如何获取用户 ID 可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

**示例值**：["ou_7dab8a3d3cdcc9da365777c7ad535d62"]
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "name": "张三",
    "en_name": "San Zhang",
    "nickname": "Alex Zhang",
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
            "department_order": 100,
            "is_primary_dept": true
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
    "job_title": "xxxxx",
    "is_frozen": false,
    "job_level_id": "mga5oa8ayjlp9rb",
    "job_family_id": "mga5oa8ayjlpzjq",
    "subscription_ids": [
        "23213213213123123"
    ],
    "dotted_line_leader_user_ids": [
        "ou_7dab8a3d3cdcc9da365777c7ad535d62"
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
	<md-text type="field-name" >user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user</md-text>
	</md-dt-td>
	<md-dt-td>
	用户信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >union_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 union_id，是应用开发商发布的不同应用中同一用户的标识。不同用户 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
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
	用户的 user_id，租户内用户的唯一标识。不同用户 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 open_id，应用内用户的唯一标识。不同用户 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
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
	用户名。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >en_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文名。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >nickname</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	别名。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	邮箱。

**字段权限要求（满足任一）**：
<md-perm name="directory:employee.base.email:read" desc="查看员工工作邮箱" support_app_types="custom,isv" tags="">查看员工工作邮箱</md-perm>
<md-perm name="contact:user.email:readonly" desc="获取用户邮箱信息" support_app_types="custom" tags="">获取用户邮箱信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mobile</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	手机号。

**字段权限要求**：
<md-perm name="contact:user.phone:readonly" desc="获取用户手机号" support_app_types="custom" tags="">获取用户手机号</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mobile_visible</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	手机号码是否可见。

**可能值有**：

- true：可见。
- false：不可见。不可见时，企业内的员工将无法查看该用户的手机号码。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >gender</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	性别。

**可选值有**：
<md-enum>
<md-enum-item key="0" >保密</md-enum-item>
<md-enum-item key="1" >男</md-enum-item>
<md-enum-item key="2" >女</md-enum-item>
<md-enum-item key="3" >其他</md-enum-item>
</md-enum>

**字段权限要求（满足任一）**：
<md-perm name="contact:user.gender:readonly" desc="获取用户性别" support_app_types="custom,isv" tags="">获取用户性别</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >avatar</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >avatar_info</md-text>
	</md-dt-td>
	<md-dt-td>
	用户头像信息。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_72</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	72*72 像素头像链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_240</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	240*240 像素头像链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_640</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	640*640 像素头像链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_origin</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	原始头像链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_status</md-text>
	</md-dt-td>
	<md-dt-td>
	用户状态。通过 is_frozen、is_resigned、is_activated、is_exited 布尔值类型参数进行展示。

用户状态的转关逻辑可参见[用户资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/field-overview#4302b5a1)。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_frozen</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为暂停状态。

**可能值有**：

- true：是
- false：否
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
	是否为离职状态。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_activated</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为激活状态。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_exited</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为主动退出状态。主动退出一段时间后用户状态会自动转为已离职。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_unjoin</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为未加入状态，需要用户自主确认才能加入企业或团队。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >department_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	用户所属部门的 ID 列表，一个用户可属于多个部门。ID 值的类型与查询参数中的 department_id_type 的取值保持一致。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.department:readonly" desc="获取用户组织架构信息" support_app_types="custom,isv" tags="">获取用户组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >leader_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的直接主管的用户ID。ID 值的类型与查询参数中的user_id_type 的取值保持一致。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.department:readonly" desc="获取用户组织架构信息" support_app_types="custom,isv" tags="">获取用户组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >city</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工作城市。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >country</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	国家或地区 Code 缩写，具体格式参考 [国家/地区 Code 参照表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/country-code-description)。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_station</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工位。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >join_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	入职时间。秒级时间戳格式，表示从 1970 年 1 月 1 日开始所经过的秒数。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_tenant_manager</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	用户是否为租户超级管理员。

**可能值有**：
- true：是
- false：否

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >employee_no</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工号。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee_number:read" desc="查看成员工号" support_app_types="custom,isv" tags="">查看成员工号</md-perm>
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >employee_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	员工类型。

**可能值有**：

- 1：正式员工
- 2：实习生
- 3：外包
- 4：劳务
- 5：顾问   

同时支持自定义员工类型的 int 值。你可通过[获取人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口获取到当前租户内自定义员工类型的名称。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >orders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_order\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	用户排序信息。用于标记通讯录下组织架构的人员顺序，人员可能存在多个部门中，且有不同的排序。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.department:readonly" desc="获取用户组织架构信息" support_app_types="custom,isv" tags="">获取用户组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
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
	排序信息对应的部门 ID，表示用户所在的、且需要排序的部门。ID 值的类型与查询参数中的 department_id_type 的取值保持一致。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >user_order</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	用户在其直属部门内的排序。数值越大，排序越靠前。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >department_order</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	用户所属的多个部门间的排序。数值越大，排序越靠前。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_primary_dept</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	标识是否为用户的唯一主部门。主部门为用户所属部门中排序第一的部门(department_order 最大)。

**可能值有**：
- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_attrs</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_custom_attr\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段。

**注意事项**：当企业管理员在管理后台配置了自定义字段，且开启了 **允许开放平台 API 调用** 功能后，该字段才会生效。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
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
	自定义字段类型。

**可能值有**：
- TEXT：文本
- HREF：网页
- ENUMERATION：枚举
- PICTURE_ENUM：图片
- GENERIC_USER：用户
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段 ID。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_custom_attr_value</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段取值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	- 字段类型为 TEXT 时，该参数返回定义的字段值。
- 字段类型为 HREF 时，该参数返回定义的网页标题。
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
	字段类型为 HREF 时，该参数返回定义的默认 URL。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >pc_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型为 HREF 时，该参数返回定义的 PC 端 URL。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >option_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型为 ENUMERATION 或 PICTURE_ENUM 时，该参数返回定义的选项 ID。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >option_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举类型中选项的选项值。
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
	图片类型中图片选项的名称。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >picture_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	图片类型中图片选项的链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >generic_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_attr_generic_user</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型为 GENERIC_USER 时，该参数返回定义的引用人员。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	引用人员的 user_id。ID 类型与查询参数 user_id_type 的取值保持一致。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	用户类型。目前固定为 1，表示用户类型。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >enterprise_email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	企业邮箱。
      
**注意事项**：企业管理员在管理后台启用飞书邮箱服务后，才会生效该参数。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职务。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_frozen</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为暂停状态的用户。

**可能值有**：
- true：是
- false：否
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
	职级 ID。

**字段权限要求**：
<md-perm name="contact:user.job_level:readonly" desc="查询用户职级" support_app_types="custom" tags="">查询用户职级</md-perm>
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
	序列 ID。

**字段权限要求**：
<md-perm name="contact:user.job_family:readonly" desc="查询用户所属的工作序列" support_app_types="custom" tags="">查询用户所属的工作序列</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >dotted_line_leader_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	虚线上级的用户 ID。ID 类型与查询参数 user_id_type 的取值保持一致。

**字段权限要求**：
<md-perm name="contact:user.dotted_line_leader_info.read" desc="查看成员的虚线上级 ID" support_app_types="custom,isv" tags="">查看成员的虚线上级 ID</md-perm>
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
        "user": {
            "union_id": "on_94a1ee5551019f18cd73d9f111898cf2",
            "user_id": "3e3cf96b",
            "open_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
            "name": "张三",
            "en_name": "San Zhang",
            "nickname": "Alex Zhang",
            "email": "zhangsan@gmail.com",
            "mobile": "13011111111",
            "mobile_visible": false,
            "gender": 1,
            "avatar": {
                "avatar_72": "https://foo.icon.com/xxxx",
                "avatar_240": "https://foo.icon.com/xxxx",
                "avatar_640": "https://foo.icon.com/xxxx",
                "avatar_origin": "https://foo.icon.com/xxxx"
            },
            "status": {
                "is_frozen": false,
                "is_resigned": false,
                "is_activated": true,
                "is_exited": false,
                "is_unjoin": false
            },
            "department_ids": [
                "od-4e6ac4d14bcd5071a37a39de902c7141"
            ],
            "leader_user_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
            "city": "杭州",
            "country": "CN",
            "work_station": "北楼-H34",
            "join_time": 2147483647,
            "is_tenant_manager": false,
            "employee_no": "1",
            "employee_type": 1,
            "orders": [
                {
                    "department_id": "od-4e6ac4d14bcd5071a37a39de902c7141",
                    "user_order": 100,
                    "department_order": 100,
                    "is_primary_dept": true
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
                        "option_value": "option",
                        "name": "name",
                        "picture_url": "https://xxxxxxxxxxxxxxxxxx",
                        "generic_user": {
                            "id": "9b2fabg5",
                            "type": 1
                        }
                    }
                }
            ],
            "enterprise_email": "demo@mail.com",
            "job_title": "xxxxx",
            "is_frozen": false,
            "job_level_id": "mga5oa8ayjlp9rb",
            "job_family_id": "mga5oa8ayjlpzjq",
            "dotted_line_leader_user_ids": [
                "ou_7dab8a3d3cdcc9da365777c7ad535d62"
            ]
        }
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
  <md-td>40001</md-td>
  <md-td>param error</md-td>
  <md-td>参数错误，请对照接口文档修改输入参数后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41001</md-td>
  <md-td>mobile has already exist error</md-td>
  <md-td>手机号已存在。你需要修改传入的手机号，确保租户内唯一。如何通过手机号查询用户信息，可参见[通过手机号或邮箱获取用户 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41002</md-td>
  <md-td>email has already exist error</md-td>
  <md-td>邮箱已存在。你需要修改传入的邮箱，确保租户内唯一。如何通过邮箱查询用户信息，可参见[通过手机号或邮箱获取用户 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id)。</md-td>
</md-tr>


<md-tr>
  <md-td>409</md-td>
  <md-td>41003</md-td>
  <md-td>user account conflict error</md-td>
  <md-td>用户的联系方式属于两个不同的飞书账号，导致添加失败。建议换用其它手机号或邮箱创建用户，或是先注销手机号或邮箱对应的用户帐号，然后再尝试创建。注销流程参见[注销账号](https://www.feishu.cn/hc/zh-CN/articles/360049067831)。如果问题仍未解决，请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41004</md-td>
  <md-td>mobile is invalid error</md-td>
  <md-td>手机号不合法。你需要参考接口文档提供的手机号参数描述，传入正确可用的手机号格式。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41005</md-td>
  <md-td>email is invalid error</md-td>
  <md-td>邮箱不合法。你需要参考接口文档提供的邮箱参数描述，传入正确可用的邮箱。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41006</md-td>
  <md-td>no user name error</md-td>
  <md-td>没有设置用户名称。请求时必须传入 name 参数。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41009</md-td>
  <md-td>no email or mobile error</md-td>
  <md-td>电子邮箱和手机号不能都为空。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41010</md-td>
  <md-td>no mobile error</md-td>
  <md-td>手机号不能为空。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41011</md-td>
  <md-td>user id already exist error</md-td>
  <md-td>user_id 重复。user_id 是用户在企业内的唯一ID，传入时如果重复可尝试更换其他自定义的 user_id。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41014</md-td>
  <md-td> user name sensitive error</md-td>
  <md-td>传入的 name 中包含敏感信息。如有疑问，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41016</md-td>
  <md-td>department has too many users  error</md-td>
  <md-td>部门内的用户数量过多。用户所属部门中的用户数量不能超过 500，建议你修改用户的所属部门。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41017</md-td>
  <md-td>department is required error</md-td>
  <md-td>部门信息不能为空。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41018</md-td>
  <md-td>position info is invalid error</md-td>
  <md-td>岗位信息无效。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41019</md-td>
  <md-td>position department is invalid error</md-td>
  <md-td>岗位部门无效。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41020</md-td>
  <md-td>position code has already exist  error</md-td>
  <md-td>岗位code无效。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41021</md-td>
  <md-td>position multiple main count error</md-td>
  <md-td>一个用户至多只能有设置一个主岗。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41022</md-td>
  <md-td>user tenant not match error</md-td>
  <md-td>用户租户不匹配。你需要检查是否使用其他企业的凭证访问了当前企业的资源。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41023</md-td>
  <md-td>update department conflict position department error</md-td>
  <md-td>用户的岗位部门必须与用户的部门一致，更新用户部门需要同时更新相应的岗位部门，否则阻断更新操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41024</md-td>
  <md-td>update position department conflict department error</md-td>
  <md-td>用户的岗位部门必须与用户的部门一致，用户的新岗位部门也必须是用户的部门之一，否则阻断更新操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41025</md-td>
  <md-td>order department invalid error</md-td>
  <md-td>排序信息中的部门无效。请求中，用户排序信息的部门 ID，必须是用户所属部门的部门 ID 之一。</md-td>
</md-tr>


<md-tr>
  <md-td>405</md-td>
  <md-td>41028</md-td>
  <md-td>user multi department need upgrade visibility error</md-td>
  <md-td>企业管理后台的权限规则未升级，不支持多部门。你需要登录[管理后台](https://feishu.cn/admin)，在 **安全** > **成员权限** > **组织架构可见范围** 页面内，根据页面提示提升权限规则。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41029</md-td>
  <md-td>create or update user multi department error</md-td>
  <md-td>当前企业不支持用户同时加入多个部门，如有疑问，请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41030</md-td>
  <md-td>set leader to oneself error</md-td>
  <md-td>不能将直属上级设置为自己。你需要将传入的直属上级参数值修改为用户实际对应的直属上级用户 ID，如无直属上级，则无需设置。</md-td>
</md-tr>


<md-tr>
  <md-td>504</md-td>
  <md-td>41031</md-td>
  <md-td>position feature not enable error</md-td>
  <md-td>当前企业不支持设置用户岗位信息，如有疑问，请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>504</md-td>
  <md-td>41032</md-td>
  <md-td>user multi department feature not enable error</md-td>
  <md-td>当前企业不支持用户同时加入多个部门，如有疑问，请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41033</md-td>
  <md-td>user in too many departments  error</md-td>
  <md-td>用户所属部门过多。设置的用户所属部门（department_ids）数量不能超过 50 个。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41034</md-td>
  <md-td>email prefix already exist error</md-td>
  <md-td>邮箱前缀（`@`符号前的内容）已存在。更换为其他邮箱前缀后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41035</md-td>
  <md-td>email prefix is invalid error</md-td>
  <md-td>邮箱前缀（`@`符号前的内容）不合法。请检查拼写是否有误。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41036</md-td>
  <md-td>avatar key is invalid error</md-td>
  <md-td>头像的文件 Key 无效。你可以重新调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，将头像文件上传后获取相应的 Key。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41037</md-td>
  <md-td>avatar key is sensitive error</md-td>
  <md-td>头像的文件 Key存在敏感信息。你可以重新调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，将头像文件上传后获取相应的 Key。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41038</md-td>
  <md-td>gender is invalid error</md-td>
  <md-td>性别参数不合法。你需要参考性别参数描述，传入正确的枚举值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41040</md-td>
  <md-td>user name is null error</md-td>
  <md-td>用户名不能为空。请求时必须传入 name 参数。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41041</md-td>
  <md-td>department id is not assigned  error</md-td>
  <md-td>未分配部门 ID。请求时必须传入用户所属部门 ID 列表参数（department_ids）</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41042</md-td>
  <md-td>join time is invalid error</md-td>
  <md-td>用户加入时间不能为空。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41043</md-td>
  <md-td>employee id is invalid error</md-td>
  <md-td>无效的 user id。 user_id 的取值长度不能超过 64 个字符。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41044</md-td>
  <md-td>Custom attribute is not set error</md-td>
  <md-td>自定义字段属性设置有误。设置用户自定义字段时，必须指明设定的字段ID，字段 ID 可以通过[获取企业自定义用户字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr/list)接口查询。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41045</md-td>
  <md-td>Custom attribute id is not exist error</md-td>
  <md-td>自定义字段 ID 不存在。你可以调用[获取企业自定义用户字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr/list)接口，获取正确的字段 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41046</md-td>
  <md-td>Custom attribute value is not set error</md-td>
  <md-td>自定义字段值设置有误。设置自定义字段时，需要传入相应的 value 字段。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41047</md-td>
  <md-td>Custom attribute href text  is null error</md-td>
  <md-td>HREF 类型自定义字段的 text 属性为空。如果你设置了 HREF 类型的自定义字段，则 text 字段为必填字段。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41048</md-td>
  <md-td>Custom attribute href url  is null error</md-td>
  <md-td>HREF 类型自定义字段的 url 属性为空。如果你设置了 HREF 类型的自定义字段，则 url 字段为必填字段。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41050</md-td>
  <md-td>no user authority error</md-td>
  <md-td>无用户权限。需将当前操作的用户添加到应用或用户的权限范围内。根据调用 API 的身份不同，解决方案也不同，具体说明如下：

- **使用 tenant_access_token 调用 API**

    当前操作的用户需要添加在应用的通讯录权限范围内。通讯录权限范围定义了应用在调用通讯录 API 时可获取的部门、用户的数据范围。应用无法访问不在通讯录权限范围内的数据。

    由开发者登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **开发配置** > **权限管理** > **数据权限** 页面内，配置 **通讯录权限范围**，添加指定用户。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a1b281bca2708c7b4d8cdb75b74db80b_d3B7kadw3c.png?height=278&maxWidth=550&width=1383)

    已发布的应用企业管理员可在[管理后台](http://feishu.cn/admin) > **工作台** > **应用管理** 页面，修改应用的通讯录权限范围。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/30410ff315a6728260c9964a7f035d4a_vtiypMAKJu.png?height=278&maxWidth=550&width=1383)

- **使用 user_access_token 调用 API**

    当你使用用户身份调用通讯录 API 时，可操作的权限范围不受应用的通讯录权限范围影响，而是受当前用户的组织架构可见范围影响，该范围限制了用户在企业内可见的组织架构数据范围。

    由企业管理员在[管理后台](http://feishu.cn/admin) > **安全** > **成员权限** 页面中，点击 **组织架构可见范围** 进行管理。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6699f09b56c17798cb192d06795dc980_hcP4nRZadC.png?height=278&maxWidth=550&width=1383)


完整介绍参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41051</md-td>
  <md-td>user id info not provide error</md-td>
  <md-td>用户ID没有填写。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>40004</md-td>
  <md-td>no dept authority error</md-td>
  <md-td>无部门权限。当前操作的部门需在应用的通讯录权限范围内。通讯录权限范围的介绍与设置方式，参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>41056</md-td>
  <md-td>no field authority error</md-td>
  <md-td>没有字段权限。你需要参考接口文档的字段权限要求，为应用依次开通这些字段权限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41057</md-td>
  <md-td>invalid employee type error</md-td>
  <md-td>员工类型设置错误。员工类型的可选值有：
- 1：正式员工
- 2：实习生
- 3：外包
- 4：劳务
- 5：顾问   

同时支持读取自定义的员工类型的 int 值。你可通过[获取人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口获取到该租户的自定义员工类型的编号值（enum_value）。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41059</md-td>
  <md-td>invalid employee type error</md-td>
  <md-td>员工类型设置错误。员工类型的可选值有：
- 1：正式员工
- 2：实习生
- 3：外包
- 4：劳务
- 5：顾问   

同时支持读取自定义的员工类型的 int 值。你可通过[获取人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口获取到该租户的自定义员工类型的编号值（enum_value）。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41060</md-td>
  <md-td>inactive employee type error</md-td>
  <md-td>员工类型在企业内未激活。你可以调用[获取人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口获取员工类型的使用状态（enum_status），仅可选择已激活的类型。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41063</md-td>
  <md-td>job_title length exceed 100 character</md-td>
  <md-td>设置的职务字符长度超过了 100 个字符。你需要减少设置的职务字符长度。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42008</md-td>
  <md-td>tenant id is invalid error</md-td>
  <md-td>请检查请求租户是否为合法租户。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41068</md-td>
  <md-td>Number of email aliases exceeds the upper limit</md-td>
  <md-td>企业邮箱账户已经达到上限。请咨询企业管理员企业邮箱配额情况。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41069</md-td>
  <md-td>Business email is in the recycle bin</md-td>
  <md-td>企业邮箱处于回收站内，此时无法被使用。如需使用该企业邮箱，则需要先释放邮箱（在企业邮箱回收站内永久删除该邮箱），然后再使用。详情参见[员工离职后企业邮箱还能继续使用吗](https://www.feishu.cn/hc/zh-CN/articles/715885646166-%E7%AE%A1%E7%90%86%E5%91%98%E8%BD%AC%E7%A7%BB%E7%A6%BB%E8%81%8C%E6%88%90%E5%91%98%E7%9A%84%E9%82%AE%E4%BB%B6#tabs0|lineguid-bkqnq)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41070</md-td>
  <md-td>name length exceed 255 character</md-td>
  <md-td>用户名长度超过 255 个字符。你需要减少设置的用户名字符长度。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41071</md-td>
  <md-td>en_name length exceed 255 character</md-td>
  <md-td>用户英文名长度超过 255 个字符。你需要减少设置的用户英文名字符长度。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41072</md-td>
  <md-td>nickname length exceed 255 character</md-td>
  <md-td>用户别名长度超过 255 个字符。你需要减少设置的用户别名字符长度。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44001</md-td>
  <md-td>business email domain not available error</md-td>
  <md-td>企业无对应的企业邮域名。企业管理员必须在管理后台开通企业邮箱后，才可以在创建用户时设置企业邮箱地址。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44002</md-td>
  <md-td>update order must update department together</md-td>
  <md-td>修改用户部门排序（order）时，请求必须同时带上用户所属部门 ID 列表（department_ids）。此外，用户排序中设置的部门 ID，必须包含在用户所属部门 ID 列表中。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44003</md-td>
  <md-td>avatarkey and description cannot be empty when update resigned user</md-td>
  <md-td>更新离职用户时，头像 Key 和信息不能为空。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44006</md-td>
  <md-td>name length exceed 255 character</md-td>
  <md-td>用户名长度超过 255 个字符。你需要减少设置的用户名字符长度。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44007</md-td>
  <md-td>en_name length exceed 255 character</md-td>
  <md-td>用户英文名长度超过 255 个字符。你需要减少设置的用户英文名字符长度。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44008</md-td>
  <md-td>nickname length exceed 255 character</md-td>
  <md-td>用户别名长度超过 255 个字符。你需要减少设置的用户别名字符长度。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44010</md-td>
  <md-td>unJoined user not allow to update</md-td>
  <md-td>不允许更新未加入状态的用户信息。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44011</md-td>
  <md-td>exited user not allow to update</md-td>
  <md-td>禁止更新主动退出状态的用户信息。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42006</md-td>
  <md-td>user has resigned error</md-td>
  <md-td>用户已经离职，无法更新信息。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44013</md-td>
  <md-td>User enterprise Email password is not valid</md-td>
  <md-td>用户的企业邮箱密码无效。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44014</md-td>
  <md-td>Can not update inactive user email when email equal enterprise</md-td>
  <md-td>当用户邮箱为企业邮箱时，无法更新。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44015</md-td>
  <md-td>can not update password when user already have password</md-td>
  <md-td>已有用户密码时无法更新密码。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44016</md-td>
  <md-td>can not set enterprise email password</md-td>
  <md-td>无法设置企业邮箱密码。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44017</md-td>
  <md-td>Suite_Admin_Common_UnableToEditUpper</md-td>
  <md-td>传入的内容被风险控制，你需要检查内容是否合法。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44018</md-td>
  <md-td>lark not support +86 mobile</md-td>
  <md-td>Lark 不支持使用 +86 前缀的手机号。请修改后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44019</md-td>
  <md-td>feishu only support +86 mobile</md-td>
  <md-td>未认证企业仅支持添加中国大陆 +86 手机号，添加非 +86 手机号请先完成飞书认证，完成认证后次日可添加。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44020</md-td>
  <md-td>mobile and email need together exist</md-td>
  <md-td>已认证企业，添加非 +86 手机号成员时必须同时添加邮箱。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44024</md-td>
  <md-td>User enterprise email has already been registered as a member's account</md-td>
  <md-td>企业邮箱已注册。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44025</md-td>
  <md-td>update user lock error,wait some seconds and retry</md-td>
  <md-td>并发更新User受限，请等待一段时间重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44035</md-td>
  <md-td>departmentID is invaild</md-td>
  <md-td>部门 ID 是无效的。你可以调用[搜索部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/search)接口，通过部门名称关键词获取对应的部门 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44036</md-td>
  <md-td>freeze tenant founder is forbidden</md-td>
  <md-td>不允许将租户创建者的状态跟改为冻结。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44038</md-td>
  <md-td>req set user geo not find in geo list</md-td>
  <md-td>您设置的数据驻留地（geo） 不在系统支持的 geo 列表中。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44041</md-td>
  <md-td>anonymize user info is not allowed to update</md-td>
  <md-td>已匿名的用户信息不允许更新。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44044</md-td>
  <md-td>invalid job level id</md-td>
  <md-td>职级 ID 无效。你可以调用[获取租户职级列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/list)接口查询相应的职级 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44045</md-td>
  <md-td>invalid job family id</md-td>
  <md-td>序列 ID 无效。你可以调用[获取租户序列列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/list)接口查询相应的序列 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44046</md-td>
  <md-td>user license subscription id must not empty in multi-license tenant</md-td>
  <md-td>多许可证租户内创建用户时，必须指定席位 ID 参数。你可以调用[获取企业席位信息接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant-product_assign_info/query)接口查询席位详情，然后选择使用正确可用的席位 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44047</md-td>
  <md-td>license subscription id exceed limit</md-td>
  <md-td>设置的席位 ID 已超过上限，请更换席位 ID。你可以调用[获取企业席位信息接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant-product_assign_info/query)接口查询席位详情，然后选择使用正确可用的席位 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44048</md-td>
  <md-td>user license subscription id invalid</md-td>
  <md-td>请确认传入的席位 ID 正确有效。你可以调用[获取企业席位信息接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant-product_assign_info/query)接口查询席位详情，然后选择使用正确可用的席位 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44049</md-td>
  <md-td>license subscription update fail</md-td>
  <md-td>更新席位信息失败，请重试。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>44050</md-td>
  <md-td>not set subscription ids auth</md-td>
  <md-td>未开通 **分配用户席位** 权限。你需要在 [开发者后台](https://open.feishu.cn/app) > **应用详情页** > **权限管理** > **API 权限** 内申请 **分配用户席位** 权限，并确保权限生效。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44051</md-td>
  <md-td>employee_no already existed</md-td>
  <md-td>员工工号重复，请修改后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44052</md-td>
  <md-td>Unable to edit members because your current plan has expired</md-td>
  <md-td>飞书版本过期，无法编辑用户。因版本过期导致的租户人数超过版本上限，需要减少租户人数或者升级版本。关于飞书版本的介绍可参见[版本对比](feishu.cn/service)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44053</md-td>
  <md-td>Unable to edit data from external data sources</md-td>
  <md-td>无法编辑来自外部数据源的数据。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44057</md-td>
  <md-td>update user success and create city fail</md-td>
  <md-td>更新成功但创建工作城市失败。

可能原因：

1. 枚举值数量超过上限。工作城市的枚举值数量上限为 10,000。
2. 传入的值不合法。单个工作城市字符数量上限为 100，且需要传入真实有效的城市名称。
3. 传入的工作城市未启用。你可以调用[获取租户工作城市列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/work_city/list)接口，获取状态为已启用的工作城市。

如问题仍未解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44058</md-td>
  <md-td>update user success and create job title fail</md-td>
  <md-td>更新成功但创建职务失败。

可能原因：

1. 枚举值数量超过上限。职务枚举值上限为 10,000。
2. 传入的值不合法。单个职务的字符上限为 255。
3. 传入的职务未启用。你可以调用[获取租户职务列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_title/list)接口，获取状态为已启用的职务。

如问题仍未解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44059</md-td>
  <md-td>update user success and create city and job title fail</md-td>
  <md-td>更新成功但创建工作城市、职务失败。

可能原因：

1. 枚举值数量超过上限。工作城市、职务的枚举值数量上限均为 10,000。
2. 传入的值不合法。单个工作城市字符数量上限为 100；单个职务的字符上限为 255。传入的内容也需要确保有效、无敏感信息。
3. 枚举值未启用。你可以调用[获取租户工作城市列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/work_city/list)接口，获取状态为已启用的工作城市信息。你可以调用[获取租户职务列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_title/list)，获取状态为已启用的职务信息。
如问题仍未解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41410</md-td>
  <md-td>user primary dept must be the first department in the order</md-td>
  <md-td>主部门必须为用户所属部门中排序第一的部门。请求时，is_primary_dept 为 true 的部门，department_order 取值必须为排序列表（orders）中的最大值。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


