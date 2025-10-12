<!--
title: 更新部门 ID
id: 7257363132833546242
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/update_department_id
updatedAt: 1720167100000
source: https://open.feishu.cn/document/contact-v3/department/update_department_id
-->
# 更新部门ID

调用该接口可以更新部门的自定义 ID，即 department_id。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=department&method=update_department_id)

:::html
<md-alert type="tip">

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

## 注意事项

本接口仅支持使用应用身份（tenant_access_token）调用。调用时，应用的通讯录权限范围内需要包含当前被操作的部门。了解权限范围参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/departments/:department_id/update_department_id</md-td>
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
            
      </md-th>
      <md-td>
            <md-perm name="contact:contact:update_department_id" desc="更新部门 ID" support_app_types="custom" tags="">更新部门 ID</md-perm>
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
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	需要更新自定义 ID 的部门 ID，该 ID 类型需要与查询参数 department_id_type 的取值一致。ID 获取方式说明：

- 调用[创建部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create)接口后，可从返回结果中获取到部门 ID 信息。
- 部门 API 提供了多种获取其他部门 ID 的方式，如[获取子部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)、[获取父部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/parent)、[搜索部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/search)，你可以选择合适的 API 进行查询。

**示例值**："od-d6b83d25c129775723a36f52495c4f81"

**数据校验规则**：

- 最大长度：`64` 字符
- 正则校验：`^[a-zA-Z0-9][a-zA-Z0-9_\-@.]{0,63}$`
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
	<md-text type="field-name" >new_department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	新的自定义部门 ID，即部门的 department_id。

**注意**：

- 不能以 `od-` 开头。
- 不能设置为 `0`。
- 不能与其他未删除部门的 department_id 重复。

**示例值**："NewDevDepartID"

**数据校验规则**：

- 最大长度：`128` 字符
- 正则校验：`^0|[^od][A-Za-z0-9]*`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "new_department_id": "NewDevDepartID"
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
  <md-td>40001</md-td>
  <md-td>invalid params</md-td>
  <md-td>参数错误，请对照接口文档修改输入参数后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43009</md-td>
  <md-td>exceed update custom dept limit error</md-td>
  <md-td>超过最大更新限制。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>40007</md-td>
  <md-td>can not update dept custom id error</md-td>
  <md-td>无法更新部门自定义 ID。你需要在应用的通讯录权限范围内添加当前操作的部门。了解应用的通讯录权限范围，可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>42008</md-td>
  <md-td>tenant id is invalid error</md-td>
  <md-td>租户身份无效。请求时，请确保设置的请求头 Authorization 与待操作资源同属一个租户下。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


