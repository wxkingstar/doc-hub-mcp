<!--
title: 获取字段详情
id: 7112009113388138524
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param
updatedAt: 1736481380000
source: https://open.feishu.cn/document/server-docs/corehr-v1/basic-infomation/custom_field/get_by_param
-->
# 获取字段详情

获取「飞书人事」对象下某字段的详细信息，支持系统预置字段和自定义字段。可通过该接口获取某个选项字段包含的选项列表，某个自定义分组中包含的字段列表等。使用方式可参考「[如何通过 OpenAPI 维护自定义字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/how-to)」{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=corehr&version=v1&resource=custom_field&method=get_by_param)

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
      <md-td>https://open.feishu.cn/open-apis/corehr/v1/custom_fields/get_by_param</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="corehr:common_data.meta_data:read" desc="获取元数据信息" support_app_types="custom,isv" tags="">获取元数据信息</md-perm>
            <md-perm name="corehr:corehr:readonly" desc="获取核心人事信息" support_app_types="custom,isv" tags="">获取核心人事信息</md-perm>
            <md-perm name="corehr:corehr" desc="更新核心人事信息" support_app_types="custom" tags="">更新核心人事信息</md-perm>
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
	<md-text type="field-name" >object_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	所属对象 API name，可从[获取飞书人事对象列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/list_object_api_name)接口列举所有对象及其 API name

**示例值**：offboarding_info
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >custom_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	字段 API name，可通过[获取自定义字段列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/query)接口中返回的 `custom_api_name` 字段获取

**示例值**：custom_field_33__c
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_field</md-text>
	</md-dt-td>
	<md-dt-td>
	字段详情
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段 API name，即字段的唯一标识
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
	字段名称
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


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	描述
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


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_open</md-text>
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
	<md-text type="field-name" >is_required</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否必填
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_unique</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否唯一
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >object_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	所属对象 apiname
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型

**可选值有：**
- 1：文本 Text，“文本”和“超链接”属于该类型
- 2：布尔 Boolean
- 3：数字 Number
- 4：枚举 Enum，“单选”和“单选”属于该类型
- 5：查找 Lookup，“人员（单选）”、“人员（多选）”及“人员档案管理”页面中用户添加的自定义分组属于该类型
- 6：自动编码 Auto Number
- 7：日期时间 Date Time
- 8：附件 Attachment，“附件单选”和“附件多选”为该类型
- 9：图片 Image
- 10：计算字段 Calculated
- 11：反向查找 Back Lookup
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >common_schema_config</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >common_schema_config</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型配置信息，可以用来区分同一字段类型下的不同子类型。当前仅字段类型为「文本」「布尔」「数字」「枚举」「日期时间」「附件」「图片」时返回相应的配置信息，其余类型暂不返回
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >text_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	文本配置信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_multilingual</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否多语言
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_multiline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否多行
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >max_length</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	最大长度
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_url_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否是“超链接”类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >number_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	数字配置信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >number_field_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	数字类型

**可选值有：**
- `1`：Percent 百分比（定点小数）
- `2`：Integer 整数
- `3`：Value 数值（定点小数）
- `4`：Money 金额（定点小数）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >decimal_places</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	小数点后的位数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >round_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	四舍五入规则

**可选值有：**
- `0`：Round 四舍五入
- `1`：Ceil 向上舍入
- `2`：Floor 向下舍入
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >decimal_total_places</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	整数+小数的最大总位数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >enum_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >enum_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	选项配置信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >enum_field_option_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >common_schema_option\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	选项信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	枚举常量集 API name，即一组选项集合的唯一标识。系统预置的枚举常量集可在[枚举常量介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/feishu-people-enum-constant)文档中查询到
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	选项名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
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


<md-dt-tr level="6">
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


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	选项描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
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


<md-dt-tr level="6">
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


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >is_open</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否启用
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_multiple</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为多选
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >lookup_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >lookup_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	查找字段配置信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >lookup_obj_api_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	查找字段所引用对象的 API name。对于“人员（单选）”和“人员（多选）”，其值为 `employment`。可通过[获取自定义字段列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/query)接口传入此参数的值来查询自定义分组中定义的自定义字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_multiple</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为多值。例如“人员（单选）字段”此属性为 false，而“人员（多选）”字段此属性为 true。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >date_time_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >date_time_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	日期时间配置信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >date_time_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	时间类型枚举

**可选值有：**
- `1`：Date 日期，如 2020-01-01
- `2`：Time  时间，如 11:52:00
- `3`：DateTime 日期时间，如 2020-01-01 11:52:00
- `4`：CusDateTime 时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >attachment_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	附件配置信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_multiple</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否支持多个文件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >file_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	废弃属性，不建议使用，通常为空值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >image_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >image_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	图片配置信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >image_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	图片类型枚举

**可选值有：**
- `1`：Avatar 头像
- `2`：BadgePhoto 工卡照片
- `3`：Logo 标志
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >display_style</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	显示样式枚举

**可选值有：**
- `1`：SquareImage 方形
- `2`：RoundImage  圆形
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >calculated_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >calculated_field_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	计算字段配置信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建时间，秒级时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >update_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	更新时间，秒级时间戳
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
        "data": {
            "custom_api_name": "custom_field_33__c",
            "name": {
                "zh_cn": "cn",
                "en_us": "en"
            },
            "description": {
                "zh_cn": "cn",
                "en_us": "en"
            },
            "is_open": true,
            "is_required": true,
            "is_unique": true,
            "object_api_name": "offboarding_info",
            "type": 1,
            "common_schema_config": {
                "text_field_setting": {
                    "is_multilingual": true,
                    "is_multiline": true,
                    "max_length": 1,
                    "is_url_type": true
                },
                "number_field_setting": {
                    "number_field_type": 1,
                    "decimal_places": 1,
                    "round_type": 1,
                    "decimal_total_places": 1
                },
                "enum_field_setting": {
                    "enum_field_option_list": [
                        {
                            "api_name": "custom_enum_option_33",
                            "name": {
                                "zh_cn": "cn",
                                "en_us": "en"
                            },
                            "description": {
                                "zh_cn": "cn",
                                "en_us": "en"
                            },
                            "is_open": true
                        }
                    ],
                    "is_multiple": false
                },
                "lookup_field_setting": {
                    "lookup_obj_api_name": "employment",
                    "is_multiple": false
                },
                "date_time_field_setting": {
                    "date_time_type": 1
                },
                "attachment_field_setting": {
                    "is_multiple": false,
                    "file_type": 1
                },
                "image_field_setting": {
                    "image_type": 1,
                    "display_style": 1
                },
                "calculated_field_setting": {
                    "type": 1
                }
            },
            "create_time": "1625542287",
            "update_time": "1625542639"
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
  <md-td>500</md-td>
  <md-td>1160005</md-td>
  <md-td>custom field format error</md-td>
  <md-td>存在非法的字段脏数据，请[联系技术支持]((https://applink.feishu.cn/TLJpeNdW))处理</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1160006</md-td>
  <md-td>required parameter is empty</md-td>
  <md-td>请检查输入参数，确认必填参数均已正确填写</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1160997</md-td>
  <md-td>unknown meta rpc error</md-td>
  <md-td>服务内部错误，请稍后重试。如有问题请[联系技术支持]((https://applink.feishu.cn/TLJpeNdW))</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1162010</md-td>
  <md-td>object does not exist</md-td>
  <md-td>找不到指定对象，请检查 object_api_name 入参是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1162020</md-td>
  <md-td>field does not exist</md-td>
  <md-td>找不到指定字段，请检查 custom_api_name 入参是否正确</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




