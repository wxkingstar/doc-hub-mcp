<!--
title: 恢复离职员工
id: 7359428234122821636
fullPath: /uAjLw4CM/ukTMukTMukTM/directory-v1/employee/resurrect
updatedAt: 1752138889000
source: https://open.feishu.cn/document/directory-v1/employee/resurrect
-->
# 恢复离职员工

该接口用于恢复已离职的成员，恢复已离职成员至在职状态。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=directory&version=v1&resource=employee&method=resurrect)

:::html
<md-alert type="tip">
注意：
- 恢复离职员工为在职，需要企业的版本在商业专业版及以上，可通过管理后台>设置>版本信息查看企业当前版本，且员工需要在离职 30 天内。恢复后，部分用户数据仍不可恢复，请谨慎调用。
- 待恢复成员的用户 ID 不能被企业内其他成员使用，可通过[批量获取员工列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/filter)接口查询用户ID是否存在。如有重复，请先离职对应的成员，否则接口会报错。
- 待恢复成员的手机号和邮箱不能被企业内其他成员使用，可通过[批量获取员工列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/filter)接口查询手机号/邮箱是否存在。如有重复，请先修改对应成员的信息，否则接口会报错。
- 本接口支持tenant_access_token和user_access_token，两种token的获取方式可参照[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。
  - 使用tenant_access_token时，只能在将离职员工恢复到当前应用通讯录授权范围内的部门之下。
  - 使用user_access_token 时，默认为管理员用户，将校验管理员管理范围。当用户有多个管理员身份均可恢复离职员工时，管理员管理范围取最大集。
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
      <md-td>https://open.feishu.cn/open-apis/directory/v1/employees/:employee_id/resurrect</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[10 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="directory:employee.resurrect:write" desc="恢复离职员工" support_app_types="custom" tags="">恢复离职员工</md-perm>
            <md-perm name="directory:employee:write" desc="创建、更新、离职、恢复员工" support_app_types="custom" tags="">创建、更新、离职、恢复员工</md-perm>
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
	<md-text type="field-name" >employee_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	员工ID，与employee_id_type类型保持一致

**示例值**："eedasdas"
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
	部门ID类型

**示例值**：open_department_id

**可选值有**：
<md-enum>
<md-enum-item key="department_id" >department_id</md-enum-item>
<md-enum-item key="open_department_id" >open_department_id</md-enum-item>
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
	<md-text type="field-name" >employee_order_in_departments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >upsert_user_department_sort_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门信息

**数据校验规则**：

- 长度范围：`0` ～ `10`
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
	部门id，与department_id_type类型保持一致

**示例值**："easdiedqds"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >order_weight_in_deparment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户在部门内的排序权重

**数据校验规则：**

长度范围：1～ 3

**示例值**："100"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >order_weight_among_deparments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户多个部门间的排序权重


**数据校验规则：**

长度范围：1～ 3

**示例值**："20"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >is_main_department</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否为用户的主部门（用户只能有一个主部门，且排序权重应最大，不填则默认使用排序第一的部门作为主部门)

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >resurrect_employee_options</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	选项
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
	否
	</md-dt-td>
	<md-dt-td>
	分配给员工的席位ID列表。可通过下方接口获取到该租户的可用席位ID，参见[获取席位信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant-product_assign_info/query)。当在混合license模式下，此字段为必填。

**示例值**：["435456345245"]

**数据校验规则**：

- 长度范围：`0` ～ `20`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "employee_order_in_departments": [
        {
            "department_id": "easdiedqds",
            "order_weight_in_deparment": "100",
            "order_weight_among_deparments": "20",
            "is_main_department": true
        }
    ],
    "options": {
        "subscription_ids": [
            "435456345245"
        ]
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


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {}
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
  <md-td>2221268</md-td>
  <md-td>Tenant not in the access list</md-td>
  <md-td>租户无法恢复员工，请检查租户是否在访问列表中。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221269</md-td>
  <md-td>Resurrect user info duplicated</md-td>
  <md-td>员工信息与在职员工有冲突，请检查员工信息是否与在职员工重复。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221270</md-td>
  <md-td>Can't resurrect user in delete process</md-td>
  <md-td>员工已在离职流程中，暂时无法恢复，请稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221271</md-td>
  <md-td>User exceed billing seats limit</md-td>
  <md-td>超过席位限制，暂时无法恢复员工，请联系管理员增加计费席位。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221272</md-td>
  <md-td>User exceed tenant limit</md-td>
  <md-td>员工人数超过租户限制，暂时无法恢复员工，请检查租户员工人数限制并调整。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221273</md-td>
  <md-td>User exceed certification seats limit</md-td>
  <md-td>超过认证席位限制，暂时无法恢复员工，请联系管理员增加认证席位。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221274</md-td>
  <md-td>User exceed feature contact seats limit</md-td>
  <md-td>员工超过通讯录席位上限，请调整通讯录席位上限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221275</md-td>
  <md-td>Tenant version not allow resurrection</md-td>
  <md-td>租户版本不允许恢复员工，请升级租户版本至支持恢复员工的版本。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221123</md-td>
  <md-td>The user refused to join the tenant and cannot be resurrect</md-td>
  <md-td>员工拒绝加入租户，无法恢复，请联系员工确认是否同意加入租户。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221140</md-td>
  <md-td>Department number exceeds limit</md-td>
  <md-td>部门人数超过限制，无法恢复，请检查部门人数限制并调整。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221252</md-td>
  <md-td>Hybrid license tenant prohibits passing empty licenses to create users</md-td>
  <md-td>混合许可证租户禁止传递空许可证，请添加席位信息，（可通过[获取企业席位信息接口](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant-product_assign_info/query)获取可用席位ID）</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221253</md-td>
  <md-td>Designated licenseID is insufficient</md-td>
  <md-td>席位不足，请修改席位信息。（可通过[获取企业席位信息接口](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant-product_assign_info/query)获取可用席位ID）</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221254</md-td>
  <md-td>Designated licenseID is invalid</md-td>
  <md-td>无效的席位信息，请修改席位信息。（可通过[获取企业席位信息接口](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant-product_assign_info/query)获取可用席位ID）</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2224001</md-td>
  <md-td>No permission to operate</md-td>
  <md-td>无操作权限，请检查当前应用的权限或企业版本是否是商业专业版本及以上。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2224002</md-td>
  <md-td>No permission to operate record</md-td>
  <md-td>无操作该记录权限，请检查当前应用的数据管理范围的权限或当前应用所操作的成员是否可恢复。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2224003</md-td>
  <md-td>No permission to operate dependent object</md-td>
  <md-td>无操作依赖对象权限，请检查要恢复到的部门是否有权限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221248</md-td>
  <md-td>Resurrect exceeds seat limit</md-td>
  <md-td>席位超限，请修改席位信息。（可通过[获取企业席位信息接口](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant-product_assign_info/query)获取可用席位ID）</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>2221255</md-td>
  <md-td>Main department must be the first</md-td>
  <md-td>主部门必须在第一个，请修改所属部门排序信息</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




