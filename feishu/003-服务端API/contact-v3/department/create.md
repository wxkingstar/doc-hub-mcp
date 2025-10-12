<!--
title: 创建部门
id: 6943913881476857883
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create
updatedAt: 1731554781000
source: https://open.feishu.cn/document/server-docs/contact-v3/department/create
-->
# 创建部门

调用该接口在通讯录内创建一个部门。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=department&method=create)

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

只可在应用的通讯录权限范围内的部门下创建部门。如果需要在根部门下创建子部门，则应用的通讯录权限范围需要设置为 **全部成员**。了解更多可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。

## 使用限制

- 单租户内部门总数上限为 30,000。
- 单租户内单个部门的直属成员数量上限为 10,000。
- 单租户内单个部门的直属子部门数量上限为 1,000。
- 部门层级上限为 25 层。
- 该接口不支持设置自定义部门字段。如果必须在创建部门时设置自定义部门字段，请联系企业管理员在 [管理后台](https://feishu.cn/admin) > **组织架构** > **成员与部门** > **部门** 功能页创建部门并设置自定义部门字段。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/departments</md-td>
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
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
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
        <md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
        <md-perm name="contact:department.base:readonly" desc="获取部门基础信息" support_app_types="custom,isv" tags="">获取部门基础信息</md-perm>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
        <md-perm name="contact:department.hrbp:readonly" desc="查询部门 HRBP 信息" support_app_types="custom" tags="">查询部门 HRBP 信息</md-perm>
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

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

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
	此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见[部门 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0)。

**默认值**：open_department_id

**示例值**：open_department_id

**可选值有**：
<md-enum>
<md-enum-item key="department_id" >支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。</md-enum-item>
<md-enum-item key="open_department_id" >由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >client_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用于幂等判断是否为同一请求，避免重复请求。字符串类型，需要你自行生成参数值。

**默认值**：空

**示例值**：473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
	是
	</md-dt-td>
	<md-dt-td>
	部门名称。

**注意**：

- 不可包含斜杠（`/`）。
- 不能与存量部门名称重复。

**示例值**："DemoName"

**数据校验规则**：

- 最小长度：`1` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >i18n_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department_i18n_name</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门名称的国际化配置。

**注意**：
- 不可包含斜杠（`/`）。
- 不能与存量部门名称的国际化配置重复。

**默认值**：空
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门的中文名。

**示例值**："Demo名称"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门的日文名。

**示例值**："デモ名"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门的英文名。

**示例值**："Demo Name"
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
	是
	</md-dt-td>
	<md-dt-td>
	父部门的 ID，ID 类型与查询参数的 department_id_type 取值一致。部门 ID 获取方式：

- 如果当前是在根部门下创建部门，则该参数值为 `0`。
- 部门 API 提供了多种获取其他部门 ID 的方式，如[获取子部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)、[获取父部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/parent)、[搜索部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/search)，你可以选择合适的 API 进行查询。

**示例值**："D067"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
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
	自定义部门 ID。

**注意**：

- 不能以 `od-` 开头。
- 不能设置为 `0`、`1`。

**默认值**：空，表示由系统自动生成 ID。

**示例值**："D096"

**数据校验规则**：

- 最大长度：`64` 字符
- 正则校验：`^[a-zA-Z0-9][a-zA-Z0-9_\-@.]{0,63}$`
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
	部门主管的用户 ID。ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

**默认值**：空

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >order</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门的排序，即部门在其同级部门的展示顺序。取值格式为 String 类型的非负整数，数值越小，排序越靠前。

**注意**：order 值唯一，即传入的值不能与存量部门的 order 值重复。因此创建部门时，建议你规划好同级部门的排序，按顺序设置不同的 order 值。

**默认值**：空，默认情况下新建的部门排在存量部门之后。

**示例值**："100"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >unit_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门绑定的单位自定义 ID 列表，当前只支持绑定一个单位。

- 了解单位信息参见[资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/overview)。
- 调用[获取单位列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/list)接口，可获取单位 ID。

**默认值**：空

**示例值**：["custom_unit_id"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >create_group_chat</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否创建部门群。
      
**可选值有：**

- true：创建
- false（默认值）：不创建

**说明**：创建部门群时，群名默认为部门名，群主默认为部门主负责人。

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >leaders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >departmentLeader\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门负责人信息。

**注意**：
- 配置该参数时，必须指定一名主负责人。
- 设置多名负责人时，仅支持将某一负责人设置为主负责人。
- 如果同时设置了部门主管（leader_user_id），则此处设置的部门主负责人必须与部门主管为同一个人。

**默认值**：空
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >leaderType</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	负责人类型。

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >主负责人</md-enum-item>
<md-enum-item key="2" >副负责人</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >leaderID</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	负责人的用户 ID，ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >group_chat_employee_types</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门群的人员类型限制。

人员类型的取值范围如下。该参数支持设置多个类型值，若有多个，用英文 `,` 分隔：

- 1：正式员工
- 2：实习生
- 3：外包
- 4：劳务
- 5：顾问

该参数支持传入自定义人员类型对应的编号。你可以调用[查询人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口获取相应编号（enum_value）。

**默认值**：空

**示例值**：[1]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >department_hrbps</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门 HRBP 的用户 ID 列表。 ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

**默认值**：空

**示例值**：["ou_7dab8a3d3cdcc9da365777c7ad535d62"]

**数据校验规则**：

- 最大长度：`500`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "name": "DemoName",
    "i18n_name": {
        "zh_cn": "Demo名称",
        "ja_jp": "デモ名",
        "en_us": "Demo Name"
    },
    "parent_department_id": "D067",
    "department_id": "D096",
    "leader_user_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
    "order": "100",
    "unit_ids": [
        "custom_unit_id"
    ],
    "create_group_chat": false,
    "leaders": [
        {
            "leaderType": 1,
            "leaderID": "ou_7dab8a3d3cdcc9da365777c7ad535d62"
        }
    ],
    "group_chat_employee_types": [
        1
    ],
    "department_hrbps": [
        "ou_7dab8a3d3cdcc9da365777c7ad535d62"
    ]
}
</md-code-json>
:::

**Go 请求示例**
```go
import (
	"context"

	"github.com/larksuite/oapi-sdk-go/v3"
	"github.com/larksuite/oapi-sdk-go/v3/service/contact/v3"
)

func main() {
	// 创建 Client
	client := lark.NewClient("appID", "appSecret")

	// 创建请求对象
	req := larkcontact.NewCreateDepartmentReqBuilder().
		Department(larkcontact.NewDepartmentBuilder().
			Name(`DemoName`).
			ParentDepartmentId(`D067`).
			Build()).
		Build()

	// 发起请求
	resp, err := client.Contact.Department.Create(context.Background(), req)
}
```

**Java 请求示例**
```java
import com.lark.oapi.Client;
import com.lark.oapi.service.contact.v3.model.*;
import com.lark.oapi.core.request.RequestOptions;

public class Main {

    public static void main(String arg[]) throws Exception {
        // 构建client
        Client client = Client.newBuilder("appId", "appSecret").build();

        // 创建请求对象
        CreateDepartmentReq req = CreateDepartmentReq.newBuilder()
                .department(Department.newBuilder()
                        .name("DemoName")
                        .parentDepartmentId("D067")
                        .build())
                .build();

        // 发起请求
        CreateDepartmentResp resp = client.contact().department().create(req, RequestOptions.newBuilder().build());
    }
}
```

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
	<md-text type="field-name" >department</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department</md-text>
	</md-dt-td>
	<md-dt-td>
	部门信息。
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
	部门名称。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.base:readonly" desc="获取部门基础信息" support_app_types="custom,isv" tags="">获取部门基础信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >i18n_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department_i18n_name</md-text>
	</md-dt-td>
	<md-dt-td>
	部门名称的国际化配置。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.base:readonly" desc="获取部门基础信息" support_app_types="custom,isv" tags="">获取部门基础信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门的中文名。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门的日文名。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门的英文名。
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
	父部门的部门 ID。

- ID 类型与查询参数的 department_id_type 取值保持一致。
-  当父部门为根部门时，该参数值为 `0`。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
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
	自定义部门 ID。如果你在输入参数中没有设置 department_id 值，则该参数值会由系统自动生成。后续可以使用该 ID 删除、修改、查询部门信息。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.base:readonly" desc="获取部门基础信息" support_app_types="custom,isv" tags="">获取部门基础信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门的 open_department_id，由系统自动生成。后续可以使用该 ID 删除、修改、查询部门信息。
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
	部门主管的用户 ID，ID 类型与查询参数的 user_id_type 取值保持一致。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >chat_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门群的群 ID。后续可以使用[获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)，获取群的详细信息。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.base:readonly" desc="获取部门基础信息" support_app_types="custom,isv" tags="">获取部门基础信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >order</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	部门的排序，即部门在其同级部门的展示顺序。取值越小排序越靠前。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >unit_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门绑定的单位自定义 ID 列表，当前只支持一个。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >member_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	当前部门及其下属部门的用户（包含部门负责人）个数。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >department_status</md-text>
	</md-dt-td>
	<md-dt-td>
	部门状态。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.base:readonly" desc="获取部门基础信息" support_app_types="custom,isv" tags="">获取部门基础信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_deleted</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否被删除。

**可能值有：**

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >leaders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >departmentLeader\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门负责人信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >leaderType</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	负责人类型。

**可选值有**：
<md-enum>
<md-enum-item key="1" >主负责人</md-enum-item>
<md-enum-item key="2" >副负责人</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >leaderID</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	负责人的用户 ID，ID 类型与查询参数的 user_id_type 取值保持一致。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >group_chat_employee_types</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门群的人员类型限制。人员类型的可能值如下：

- 1：正式员工
- 2：实习生
- 3：外包
- 4：劳务
- 5：顾问

如果是自定义人员类型，则会返回对应的编号。你可以调用[查询人员类型](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口，获取相应编号（enum_value）对应的自定义人员类型信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >department_hrbps</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门 HRBP 的用户 ID 列表，ID 类型与查询参数的 user_id_type 取值保持一致。

**字段权限要求**：
<md-perm name="contact:department.hrbp:readonly" desc="查询部门 HRBP 信息" support_app_types="custom" tags="">查询部门 HRBP 信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >primary_member_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	当前部门的主属成员数量。

**说明**：部门的主属成员是指，成员的主部门为当前部门。

**字段权限要求（满足任一）**：
<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code":0,
    "msg":"success",
    "data":{
        "department":{
            "name":"DemoName",
            "i18n_name":{
                "zh_cn":"Demo名称",
                "ja_jp":"デモ名",
                "en_us":"Demo Name"
            },
            "parent_department_id":"D067",
            "department_id":"D096",
            "open_department_id":"od-4e6ac4d14bcd5071a37a39de902c7141",
            "leader_user_id":"ou_7dab8a3d3cdcc9da365777c7ad535d62",
            "chat_id":"oc_5ad11d72b830411d72b836c20",
            "order":"100",
            "unit_ids":[
                "custom_unit_id"
            ],
            "member_count":100,
            "status":{
                "is_deleted":false
            },
            "leaders":[
                {
                    "leaderID":"ou_357368f98775f04bea02afc6b1d33478",
                    "leaderType":1
                }
            ],
            "department_hrbps":[
                "ou_7dab8a3d3cdcc9da365777c7ad535d62",
                "ou_7dab8a3d3cdcc9da365777c7ad535d63"
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
  <md-td>43005</md-td>
  <md-td>duplicate order error</md-td>
  <md-td>order 取值重复。部门的 order 参数值必须唯一，不能与存量部门的 order 值相同，你可以更新 order 取值后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40018</md-td>
  <md-td>param error</md-td>
  <md-td>参数错误。请检查传入的参数值是否有误。例如，是否符合参数数据类型、是否符合参数描述的要求等。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43008</md-td>
  <md-td>custom dept id invalid error</md-td>
  <md-td>自定义的部门 ID 不合法。你需要检查传入的 department_id 参数值，该值不能以 `od-` 开头、不能取值为 `0`、长度不能超过 64 字符。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43013</md-td>
  <md-td>dept too many children error</md-td>
  <md-td>子部门数量过多。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40003</md-td>
  <md-td>internal error</md-td>
  <md-td>内部错误，请获取请求的 X-Request-Id，并联系[技术支持](https://applink.feishu.cn/TLJpeNdW)进行反馈。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>40004</md-td>
  <md-td>no dept authority error</md-td>
  <md-td>应用没有部门权限，检查该部门是否在应用的通讯录权限范围内。你可以登录[开发者后台](https://open.feishu.cn/app) ，在应用详情页的 **开发配置 > 权限管理 > 数据权限** 功能页查看 **通讯录权限范围** 内是否有相应部门，如果没有则需要在 **通讯录权限范围** 内添加上部门，并发布应用使配置生效。具体操作参考[配置应用数据权限](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)。

**注意**：如果通讯录权限范围设置的是 **与应用的可用范围一致**，则你需要在应用发布阶段（点击 **应用发布 > 版本管理与发布 > 创建版本** 后的 **版本详情** 页面内）配置应用的可用范围，并发布应用使配置生效。具体操作参考[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40008</md-td>
  <md-td>dept Info is null error</md-td>
  <md-td>部门信息不能为空。请求时需要确保传入了完整的请求参数（必填参数不能为空）。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40010</md-td>
  <md-td>chat id is invalid error</md-td>
  <md-td>部门群 ID 格式错误。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>40014</md-td>
  <md-td>no parent dept authority error</md-td>
  <md-td>没有父部门权限。传入的父部门需要在应用的通讯录权限范围内。如何设置通讯录权限范围，参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>43000</md-td>
  <md-td>dept has already exist error</md-td>
  <md-td>部门已存在。无需重复创建部门，或者修改请求参数后，重试创建新的部门。</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>40016</md-td>
  <md-td>dept name can not be nul error</md-td>
  <md-td>部门名不能为空。请求时必须传入 name 值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42006</md-td>
  <md-td>user has resigned error</md-td>
  <md-td>用户已离职。已离职的用户不能设置为部门主管、部门负责人以及 HRBP。请更换为在职用户后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41012</md-td>
  <md-td>user id invalid error</md-td>
  <md-td>用户 ID 无效。你需要检查传入的用户 ID 类型是否与查询参数 user_id_type 设置的类型一致，并检查是否传入了正确的用户 ID。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40021</md-td>
  <md-td>no a same request error</md-td>
  <md-td>两次操作不是同一个请求，请检查 request 值是否有改动。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43004</md-td>
  <md-td>illegal unit error</md-td>
  <md-td>单位设置错误。请求时如果需要为部门关联单位，则需要传入正确的单位 ID（unit_ids）。目前只支持关联一个单位，你可以调用[获取单位列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/list)接口查询单位 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43007</md-td>
  <md-td>duplicated department custom id error</md-td>
  <md-td>自定义的部门 ID 重复。你需要修改传入的 department_id，并重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>44101</md-td>
  <md-td>miss parent department id error</md-td>
  <md-td>缺少父部门 ID。请求时必须传入 parent_department_id 参数值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43017</md-td>
  <md-td>relate dept over limit</md-td>
  <md-td>指定的单位已关联 1000 个部门，无法继续关联部门。如果必须将当前部门关联至该单位，请先调用[解除部门与单位的绑定关系](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/unbind_department)接口，将该单位中其他某一部门解除绑定关系，然后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43018</md-td>
  <md-td>duplicate i18n name</md-td>
  <md-td>部门名称的国际化配置重复。你需要修改 i18n_name 参数配置后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43019</md-td>
  <md-td>exceed dept max level</md-td>
  <md-td>部门层级深度已达到 25 层，不能继续创建子部门。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43021</md-td>
  <md-td>department chat not exist</md-td>
  <md-td>部门群不存在。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43022</md-td>
  <md-td>department name duplicate</md-td>
  <md-td>部门名重复。你需要修改传入的 name 参数值，并重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43023</md-td>
  <md-td>dept structure no permissione</md-td>
  <md-td>组织架构没有权限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43024</md-td>
  <md-td>dept structure tenant lock fail</md-td>
  <md-td>部门结构变动获取租户锁失败。由并发请求产生的冲突，请稍后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43025</md-td>
  <md-td>top department leader unjoined</md-td>
  <md-td>用户未加入，不能成为部门负责人。你需要将部门负责人修改为通讯录内包含的在职员工。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43026</md-td>
  <md-td>employee type is not valid</md-td>
  <md-td>人员类型无效。你需要参考接口文档中 group_chat_employee_types 的参数描述，设置正确的人员类型。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43028</md-td>
  <md-td>invalid department hrbps</md-td>
  <md-td>部门的 HRBP 不合法。请求时，部门 HRBP 的用户 ID 可设置多个，你需要检查设置的用户 ID 类型是否与查询参数 user_id_type 设置的类型保持一致，并检查用户 ID 取值是否正确。用户 ID 获取方式可参见[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43029</md-td>
  <md-td>dept name not contain separator</md-td>
  <md-td>部门名称不能包含斜杠（`/`）。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


