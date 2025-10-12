<!--
title: 新增人员类型
id: 6985055606752575516
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/create
updatedAt: 1720166959000
source: https://open.feishu.cn/document/server-docs/contact-v3/employee_type_enum/create
-->
# 新增人员类型

调用该接口新增一个自定义的人员类型。人员类型是用户属性之一，用于灵活标记用户的身份类型。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=employee_type_enum&method=create)

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

## 使用限制

自定义的人员类型数量上限为 255，其中创建后又删除的自定义人员类型也会计入数量限制内。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/employee_type_enums</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[20 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	人员类型的选项内容。

**示例值**："专家"

**数据校验规则**：

- 长度范围：`1` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >enum_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	人员类型的选项类型。新增人员类型时固定取值为 `2` 即可。

**示例值**：2

**可选值有**：
<md-enum>
<md-enum-item key="1" >内置类型，只读。新增人员类型时不支持选择该类型。</md-enum-item>
<md-enum-item key="2" >自定义。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >enum_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	人员类型的选项激活状态。只有已激活的选项可以用于配置用户属性。

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >激活</md-enum-item>
<md-enum-item key="2" >未激活</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >i18n_content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_content\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	选项内容的国际化配置。

**说明**：在飞书客户端查看用户人员类型时，系统会根据客户端语言环境，自动展示相匹配的选项语言。如果相应语言不在选项国际化配置当中，则会展示默认选项内容（即 content 字段）。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >locale</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	语言版本。例如：

- zh_cn：中文
- en_us：英文
- ja_jp：日文

**示例值**："zh_cn"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	语言版本对应的内容。

**数据校验规则：**

长度范围：`1` 字符 ～ `100` 字符

**示例值**："专家（中文）"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "content": "专家",
    "enum_type": 2,
    "enum_status": 1,
    "i18n_content": [
        {
            "locale": "zh_cn",
            "value": "专家（中文）"
        }
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
	<md-text type="field-name" >employee_type_enum</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >employee_type_enum</md-text>
	</md-dt-td>
	<md-dt-td>
	新建的人员类型信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >enum_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	人员类型的选项 ID。后续可以使用该 ID 更新、删除选项。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >enum_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	人员类型的选项编号，新增人员类型后，由系统生成的编号。后续可使用该编号配置用户的人员类型属性。例如，调用[创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)接口时，employee_type 参数值对应的就是当前的 enum_value。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	选项内容。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >enum_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	选项类型。

**可选值有**：
<md-enum>
<md-enum-item key="1" >内置类型</md-enum-item>
<md-enum-item key="2" >自定义</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >enum_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	选项的激活状态。

**可选值有**：
<md-enum>
<md-enum-item key="1" >激活</md-enum-item>
<md-enum-item key="2" >未激活</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >i18n_content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_content\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	选项内容的国际化配置。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >locale</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	语言版本。例如：

- zh_cn：中文
- en_us：英文
- ja_jp：日文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	语言版本对应的内容。
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
        "employee_type_enum": {
            "enum_id": "exGeIjow7zIqWMy+ONkFxA==",
            "enum_value": "2",
            "content": "专家",
            "enum_type": 2,
            "enum_status": 1,
            "i18n_content": [
                {
                    "locale": "zh_cn",
                    "value": "专家（中文）"
                }
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
  <md-td>42301</md-td>
  <md-td>param content duplicate</md-td>
  <md-td>content 取值重复。当前已有相同 content 取值的自定义人员类型，无需再次添加。你也可以更换其他 content 值后，重新尝试添加人员类型。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42302</md-td>
  <md-td>param i18n_content duplicate</md-td>
  <md-td>i18n_content 取值重复。当前已有相同 i18n_content 取值的自定义人员类型，无需再次添加。你也可以更换其他 i18n_content 值后，重新尝试添加人员类型。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42303</md-td>
  <md-td>exceed content max num</md-td>
  <md-td>超过最大限制。你需要参考接口文档的参数描述，设置符合要求的参数值。例如，传入的 content 值长度不能超过 100 字符。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


