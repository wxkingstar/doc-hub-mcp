<!--
title: 获取数据范式
id: 7100866111462178844
fullPath: /uAjLw4CM/ukTMukTMukTM/search-v2/schema/get
updatedAt: 1680147723000
source: https://open.feishu.cn/document/server-docs/search-v2/open-search/schema/get
-->
# 获取数据范式

获取单个数据范式。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=search&version=v2&resource=schema&method=get)

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
      <md-td>https://open.feishu.cn/open-apis/search/v2/schemas/:schema_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
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
            <md-perm name="search:data_source" desc="查询、创建、修改和删除自定义搜索数据源、数据范式或数据项" support_app_types="custom,isv" tags="">查询、创建、修改和删除自定义搜索数据源、数据范式或数据项</md-perm>
            <md-perm name="search:data_source:readonly" desc="查询自定义搜索数据源、数据范式或数据项" support_app_types="custom,isv" tags="">查询自定义搜索数据源、数据范式或数据项</md-perm>
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
	<md-text type="field-name" >schema_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户自定义数据范式的唯一标识

**示例值**："custom_schema_id"

**数据校验规则**：

- 最大长度：`40` 字符

- 正则校验：`^[a-zA-Z][a-zA-Z0-9-_].*$`
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
	<md-text type="field-name" >schema</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema</md-text>
	</md-dt-td>
	<md-dt-td>
	数据范式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >properties</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema_property\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	数据范式的属性定义
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	属性名
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
	属性类型

**可选值有**：
<md-enum>
<md-enum-item key="text" >长文本类型</md-enum-item>
<md-enum-item key="int" >64位整数类型</md-enum-item>
<md-enum-item key="tag" >标签类型</md-enum-item>
<md-enum-item key="timestamp" >Unix 时间戳类型（单位为秒）</md-enum-item>
<md-enum-item key="double" >浮点数类型（小数）</md-enum-item>
<md-enum-item key="tinytext" >短文本类型，（utf8 编码）长度小于 140 的文本。在设置 search_options 时，与 text 类型有区别，支持更多召回策略</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_searchable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	该属性是否可用作搜索，默认为 false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_sortable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	该属性是否可用作搜索结果排序，默认为 false。如果为 true，需要再配置 sortOptions
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_returnable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	该属性是否可用作返回字段，为 false 时，该字段不会被召回和展示。默认为 false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >sort_options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema_sort_options</md-text>
	</md-dt-td>
	<md-dt-td>
	属性排序的可选配置，当 is_sortable 为 true 时，该字段为必填字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >priority</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	排序的优先级，可选范围为 0~4，0为最高优先级。如果优先级相同，则随机进行排序。默认为0

**可选值有**：
<md-enum>
<md-enum-item key="0" >最高优先级</md-enum-item>
<md-enum-item key="1" >次高优先级</md-enum-item>
<md-enum-item key="2" >次次高优先级</md-enum-item>
<md-enum-item key="3" >次低优先级</md-enum-item>
<md-enum-item key="4" >最低优先级</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >order</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	排序的顺序。默认为 desc

**可选值有**：
<md-enum>
<md-enum-item key="asc" >升序</md-enum-item>
<md-enum-item key="desc" >降序</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >type_definitions</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema_type_definitions</md-text>
	</md-dt-td>
	<md-dt-td>
	相关类型数据的定义和约束
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >tag</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema_tag_options\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	标签类型的定义
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	tag 对应的枚举值名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	标签对应的颜色

**可选值有**：
<md-enum>
<md-enum-item key="red" >含警示性、敏感性的提示信息</md-enum-item>
<md-enum-item key="green" >表示成功、完成、完毕的提示信息</md-enum-item>
<md-enum-item key="blue" >组件架构、职能等中性信息</md-enum-item>
<md-enum-item key="grey" >中立系统提示信息（慎重使用）</md-enum-item>
<md-enum-item key="yellow" >焦点信息、推广性信息</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	标签中展示的文本
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >search_options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema_search_options</md-text>
	</md-dt-td>
	<md-dt-td>
	属性搜索的可选配置，当 is_searchable 为 true 时，该字段为必填参数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >enable_semantic_match</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否支持语义切词召回。默认不支持（推荐使用在长文本的场景）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >enable_exact_match</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否支持精确匹配。默认不支持（推荐使用在短文本、需要精确查找的场景）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >enable_prefix_match</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否支持前缀匹配（短文本的默认的分词/召回策略。前缀长度为 1-12）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >enable_number_suffix_match</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否支持数据后缀匹配。默认不支持（推荐使用在短文本、有数字后缀查找的场景。后缀长度为3-12）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >enable_camel_match</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否支持驼峰英文匹配。默认不支持（推荐使用在短文本，且包含驼峰形式英文的查找场景）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >display</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema_display</md-text>
	</md-dt-td>
	<md-dt-td>
	数据展示相关配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >card_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	搜索数据的展示卡片


卡片详细信息请参考 [通用模块接入指南](/document/uAjLw4CM/ukTMukTMukTM/search-v2/common-template-intergration-handbook)  "请求创建数据范式"部分

**可选值有**：
<md-enum>
<md-enum-item key="search_common_card" >普通 common 卡片</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >fields_mapping</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema_display_field_mapping\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	数据字段名称和展示字段名称的映射关系。如果没有设置，则只会展示 与展示字段名称同名的 数据字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >display_field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	展示字段名称，与 card_key 有关，每个模版能展示的字段不同。该字段不能重复
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >data_field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据字段的名称。需要确保该字段对应在 schema 属性定义中的 is_returnable 为 true，否则无法展示。需要使用 ${xxx} 的规则来描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >schema_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户自定义数据范式的唯一标识
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
    "data": {
        "schema": {
            "display": {
                "card_key": "search_common_card",
                "fields_mapping": [
                    {
                        "data_field": "${priority}",
                        "display_field": "tag1"
                    },
                    {
                        "data_field": "${description}",
                        "display_field": "summary"
                    }
                ]
            },
            "properties": [
                {
                    "is_returnable": true,
                    "is_searchable": true,
                    "name": "description",
                    "search_options": {
                        "enable_camel_match": false,
                        "enable_exact_match": false,
                        "enable_number_suffix_match": false,
                        "enable_prefix_match": false,
                        "enable_semantic_match": true
                    },
                    "type": "text"
                },
                {
                    "is_returnable": true,
                    "name": "icon_url",
                    "type": "text"
                },
                {
                    "name": "rank",
                    "sort_options": {
                        "order": "asc"
                    },
                    "type": "int"
                },
                {
                    "is_returnable": true,
                    "name": "priority",
                    "type": "tag",
                    "type_definitions": {
                        "tag": [
                            {
                                "color": "red",
                                "name": "type",
                                "text": "type"
                            }
                        ]
                    }
                }
            ],
            "schema_id": "example_schema"
        }
    },
    "msg": "success"
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
  <md-td>1270001</md-td>
  <md-td>系统内部错误</md-td>
  <md-td>联系系统开发人员协助定位</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1270002</md-td>
  <md-td>参数错误</md-td>
  <md-td>根据错误信息和文档排查非法参数</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1270003</md-td>
  <md-td>调用失败</md-td>
  <md-td>如果重试后仍然失败，请联系系统开发人员</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1270005</md-td>
  <md-td>该功能仅对旗舰版可用</md-td>
  <md-td>请联系销售人员升级套餐以使用此高级功能</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1273004</md-td>
  <md-td>记录不存在</md-td>
  <md-td>检查请求的记录是否真实存在</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::




