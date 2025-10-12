<!--
title: 修改字段枚举值选项
id: 7385867895124328452
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/common_data-meta_data/edit_enum_option
updatedAt: 1726138279000
source: https://open.feishu.cn/document/corehr-v1/basic-infomation/custom_field/edit_enum_option
-->
# 修改字段枚举值选项

对于当前已有的所有自定义枚举字段，以及部分系统预置枚举字段，通过本接口可修改字段中已有可选项的展示名称、停启用状态{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=corehr&version=v1&resource=common_data.meta_data&method=edit_enum_option)

:::html
<md-alert type="tip">
本接口当前允许修改的系统预置字段如下：
  - person（个人信息）：gender（性别）、marital_status（婚姻状态）
  - address（地址）：address_type（地址类型）
  - national_id（证件）：national_id_type（证件类型）
  - education（教育经历）：degree（学位）、level_of_education（学历）
  - person_info_chn (个人附加信息) ： hukou_type（户口类型）
  - emergency_contact（紧急联系人）：relationship（关系）
  - dependent（家庭成员）：relationship_with_dependent（关系）
  - job_data （任职信息）：employee_type (人员类型)
  - probation （试用期对象）：final_assessment_grade （试用期最终考核等级）
  - department（部门）：subtype（部门类型）
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
      <md-td>https://open.feishu.cn/open-apis/corehr/v1/common_data/meta_data/edit_enum_option</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="corehr:common_data.meta_data:write" desc="读写元数据信息" support_app_types="custom" tags="">读写元数据信息</md-perm>
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
	<md-text type="field-name" >client_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户若希望避免重试导致多次重复请求，可填写随机字符串，系统根据 client_token 是否一致来判断是否为同一请求

**示例值**：6727817538283013641
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
	<md-text type="field-name" >object_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	所属对象 API name，可通过[获取飞书人事对象列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/list_object_api_name)接口中返回的 `object_api_name` 字段获取

**示例值**："probation_management"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >enum_field_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	枚举字段 API name，可通过[获取自定义字段列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/query)接口中返回的 `custom_api_name` 字段获取

**示例值**："final_assessment_grade"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >enum_field_option</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >enum_field_option</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	枚举选项
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >option_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	枚举值选项 API Name，即选项的唯一标识

**示例值**："grade_e"

**数据校验规则**：

- 长度范围：`1` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >active</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否启用

**示例值**：true
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
	是
	</md-dt-td>
	<md-dt-td>
	选项名称（需填写至少一个语种）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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
	中文

**示例值**："cn"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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
	英文

**示例值**："en"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "object_api_name": "probation_management",
    "enum_field_api_name": "final_assessment_grade",
    "enum_field_option": {
        "option_api_name": "grade_e",
        "active": true,
        "name": {
            "zh_cn": "cn",
            "en_us": "en"
        }
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >enum_field_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举字段 API name
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >enum_field_options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >enum_field_option\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举全部选项列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >option_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举值选项 API Name，即选项的唯一标识
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >active</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否启用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	选项名称（需填写至少一个语种）
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
	中文
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
	英文
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
        "enum_field_api_name": "final_assessment_grade",
        "enum_field_options": [
            {
                "option_api_name": "grade_e",
                "active": true,
                "name": {
                    "zh_cn": "cn",
                    "en_us": "en"
                }
            }
        ]
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
  <md-td>500</md-td>
  <md-td>1161999</md-td>
  <md-td>System error. Please try again later or contact technical support.</md-td>
  <md-td>服务内部错误，请稍后重试。如有问题请[联系技术支持]((https://applink.feishu.cn/TLJpeNdW))</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1160004</md-td>
  <md-td>client_token repeat</md-td>
  <md-td>入参中的 client_token 重复，请检查是否有非预期的并发重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1162010</md-td>
  <md-td>object does not exist</md-td>
  <md-td>对象不存在，请检查 object_api_name 入参是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1162020</md-td>
  <md-td>field does not exist</md-td>
  <md-td>字段不存在，请检查 enum_field_api_name 入参是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1162023</md-td>
  <md-td>the type of field does not match</md-td>
  <md-td>字段类型不匹配，请检查 enum_field_option 入参是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1162030</md-td>
  <md-td>enum set does not exist</md-td>
  <md-td>枚举常量集不存在，请[联系技术支持]((https://applink.feishu.cn/TLJpeNdW))处理</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1162032</md-td>
  <md-td>the enum option api name already exists</md-td>
  <md-td>枚举选项的 API name 已存在，无法创建同名的新选项，请检查入参</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1162034</md-td>
  <md-td>the associated enum set does not support changes yet</md-td>
  <md-td>所修改的系统预置枚举常量集不在系统允许的范围内。请参考文档开头说明的允许范围</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1162040</md-td>
  <md-td>enum option does not exist</md-td>
  <md-td>枚举选项不存在，请[联系技术支持]((https://applink.feishu.cn/TLJpeNdW))处理</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




