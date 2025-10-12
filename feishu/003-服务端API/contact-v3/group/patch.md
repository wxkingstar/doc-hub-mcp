<!--
title: 更新用户组
id: 7008085931593007107
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/patch
updatedAt: 1720166883000
source: https://open.feishu.cn/document/server-docs/contact-v3/group/patch
-->
# 更新用户组

调用该接口更新指定用户组的名称或描述。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=group&method=patch)

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

- 应用的通讯录权限范围需要符合以下任一设置，才可以成功调用本接口。了解应用通讯录权限范围，可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。

     - 通讯录权限范围设置为 **全部员工**。
     - 由企业管理员在管理后台设置应用可见范围内包含当前待更新的用户组，然后应用的通讯录权限范围设置为 **与应用的可用范围一致**。

- API 方式暂不支持更新动态用户组。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/group/:group_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
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
            <md-perm name="contact:group" desc="更新用户组信息" support_app_types="custom" tags="">更新用户组信息</md-perm>
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
	<md-text type="field-name" >group_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户组 ID。

用户组 ID 可在创建用户组时从返回值中获取，你也可以调用[查询用户组列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/simplelist)接口，获取用户组的 ID。

**示例值**："g187131"
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
	此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见[部门 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0)。

**示例值**：open_department_id

**可选值有**：
<md-enum>
<md-enum-item key="department_id" >支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。</md-enum-item>
<md-enum-item key="open_department_id" >由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。</md-enum-item>
</md-enum>
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
	用户组名字，长度不能超过 100 字符。

**说明**：用户组名称企业内唯一，如重复设置则会创建失败。

**默认值**：空，表示不更新用户组名字。

**示例值**："外包 IT 用户组"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户组描述，长度不能超过 500 字符。

**默认值**：空，表示不更新用户组描述。

**示例值**："IT 外包用户组，需要进行细粒度权限管控"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "name": "外包 IT 用户组",
    "description": "IT 外包用户组，需要进行细粒度权限管控"
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
  <md-td>500</md-td>
  <md-td>40003</md-td>
  <md-td>internal error</md-td>
  <md-td>内部错误，你可以获取请求的 X-Request-Id，并联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42002</md-td>
  <md-td>invalid group_id</md-td>
  <md-td>用户组 ID 无效。请检查传入的用户组 ID 是否正确，你可以调用[查询用户组列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/simplelist)接口，获取用户组的 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42013</md-td>
  <md-td>group name exceed limit</md-td>
  <md-td>用户组名字长度超过最大限制。请求时 name 参数取值的长度不能超过 100 字符。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42014</md-td>
  <md-td>group description exceed limit</md-td>
  <md-td>用户组描述长度超过最大限制。请求时 description 取值的长度不能超过 500 字符。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>42009</md-td>
  <md-td>no userGroup authority error</md-td>
  <md-td>缺少用户组权限。应用的通讯录权限范围需要符合以下任一设置，才可以成功调用本接口。

- 通讯录权限范围设置为 **全部员工**。
- 由企业管理员在管理后台设置应用可见范围内包含当前待更新的用户组，然后应用的通讯录权限范围设置为 **与应用的可用范围一致**。

了解应用通讯录权限范围，可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42015</md-td>
  <md-td>user group disable</md-td>
  <md-td>用户组功能未开启。请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)处理。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>47009</md-td>
  <md-td>duplicated name error</md-td>
  <md-td>用户组名称重复。用户组名称在企业内唯一，你可以尝试更换其他名称后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40001</md-td>
  <md-td>parameter invalid</md-td>
  <md-td>参数错误。请检查输入参数是否设置有误，你可以参考接口文档内的参数描述，修复输入参数值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42018</md-td>
  <md-td>exist invalid dynamic group rule</md-td>
  <md-td>存在非法的动态用户组规则，请检查请求参数后重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42019</md-td>
  <md-td>exist invalid dynamic group rule expression</md-td>
  <md-td>动态用户组匹配规则错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42020</md-td>
  <md-td>exist unsupported dynamic group rule expression field</md-td>
  <md-td>动态用户组的匹配规则表达式中传入了不支持的成员属性</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42021</md-td>
  <md-td>exist unsupported dynamic group operation</md-td>
  <md-td>动态用户组的匹配规则表达式中传入了不支持的关系操作指令</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42022</md-td>
  <md-td>exist invalid expression value or values</md-td>
  <md-td>动态用户组的匹配规则表达式中传入了错误、不支持的值，或者传入的单值、多值与关系操作符不匹配</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42024</md-td>
  <md-td>no permission to create a dynamic group</md-td>
  <md-td>没有创建动态用户组的权限，请确认后重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42025</md-td>
  <md-td>invalid joinner rule</md-td>
  <md-td>非法的连接规则，请修改后重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42026</md-td>
  <md-td>department scope exceed limit</md-td>
  <md-td>部门范围超过限制，请确认后重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


