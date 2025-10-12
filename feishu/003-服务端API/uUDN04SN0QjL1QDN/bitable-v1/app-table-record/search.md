<!--
title: 查询记录
id: 7312729248342360068
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search
updatedAt: 1746675494000
source: https://open.feishu.cn/document/docs/bitable-v1/app-table-record/search
-->
# 查询记录

该接口用于查询数据表中的现有记录，单次最多查询 500 行记录，支持分页获取。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=bitable&version=v1&resource=app.table.record&method=search)

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

若多维表格开启了高级权限，你需确保调用身份拥有多维表格的可管理权限，否则可能出现调用成功但返回数据为空的情况。了解具体步骤，参考[如何为应用或用户开通文档权限](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。

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
      <md-td>https://open.feishu.cn/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/search</md-td>
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
            <md-perm name="base:record:retrieve" desc="根据条件搜索记录" support_app_types="custom,isv" tags="">根据条件搜索记录</md-perm>
            <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
            <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" support_app_types="custom,isv" tags="">查看、评论和导出多维表格</md-perm>
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
        <md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	<md-text type="field-name" >app_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格 App 的唯一标识。不同形态的多维表格，其 app_token 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 app_token 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 obj_type 的值为 bitable 时，obj_token 字段的值才是多维表格的 app_token。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。

**示例值**："NQRxbRkBMa6OnZsjtERcxhNWnNh"

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >table_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格数据表的唯一标识。获取方式：
- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`
- 也可通过[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)接口获取 `table_id`

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/18741fe2a0d3cafafaf9949b263bb57d_yD1wkOrSju.png?height=746&lazyload=true&maxWidth=700&width=2976)

**示例值**："tbl0xe5g8PP3U3cS"

**数据校验规则**：

- 长度范围：`0` ～ `50` 字符
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
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果

**示例值**：eVQrYzJBNDNONlk4VFZBZVlSdzlKdFJ4bVVHVExENDNKVHoxaVdiVnViQT0=
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页大小。最大值为 500

**示例值**：10

**默认值**：`20`
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
	<md-text type="field-name" >view_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	多维表格中视图的唯一标识。获取方式：

- 在多维表格的 URL 地址栏中，view_id 是下图中高亮部分：
    ![view_id.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/140668632c97e0095832219001d17c54_DJMgVH9x2S.png?height=748&lazyload=true&width=2998)
- 通过[列出视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/list)接口获取。暂时无法获取到嵌入到云文档中的多维表格的 view_id。

**注意**：
当 filter 参数 或 sort 参数不为空时，请求视为对数据表中的全部数据做条件过滤，指定的 view_id 会被忽略。

**示例值**："vewqhz51lk"

**数据校验规则**：

- 长度范围：`0` ～ `50` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >field_names</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段名称，用于指定本次查询返回记录中包含的字段

**示例值**：["字段1","字段2"]

**数据校验规则**：

- 长度范围：`0` ～ `200`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >sort</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >sort\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	排序条件

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >field_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段名称

**示例值**："多行文本"

**数据校验规则**：

- 长度范围：`0` ～ `1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >desc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否倒序排序

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >filter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >filter_info</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	包含条件筛选信息的对象。了解 filter 填写指南和使用示例（如怎样同时使用 `and` 和 `or` 逻辑链接词），参考[记录筛选参数填写指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/record-filter-guide)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >conjunction</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表示条件之间的逻辑连接词，该字段必填，请忽略左侧必填列的否

**示例值**："and"

**可选值有**：
<md-enum>
<md-enum-item key="and" >满足全部条件</md-enum-item>
<md-enum-item key="or" >满足任一条件</md-enum-item>
</md-enum>

**数据校验规则**：

- 长度范围：`0` ～ `10` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >conditions</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >condition\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	筛选条件集合

**数据校验规则**：

- 长度范围：`0` ～ `50`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >field_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	筛选条件的左值，值为字段的名称

**示例值**："字段1"

**数据校验规则**：

- 长度范围：`0` ～ `1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	条件运算符

**示例值**："is"

**可选值有**：
<md-enum>
<md-enum-item key="is" >等于</md-enum-item>
<md-enum-item key="isNot" >不等于（不支持日期字段，了解如何查询日期字段，参考[日期字段填写说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/record-filter-guide#29d9dc89)）</md-enum-item>
<md-enum-item key="contains" >包含（不支持日期字段）</md-enum-item>
<md-enum-item key="doesNotContain" >不包含（不支持日期字段）</md-enum-item>
<md-enum-item key="isEmpty" >为空</md-enum-item>
<md-enum-item key="isNotEmpty" >不为空</md-enum-item>
<md-enum-item key="isGreater" >大于</md-enum-item>
<md-enum-item key="isGreaterEqual" >大于等于（不支持日期字段）</md-enum-item>
<md-enum-item key="isLess" >小于</md-enum-item>
<md-enum-item key="isLessEqual" >小于等于（不支持日期字段）</md-enum-item>
<md-enum-item key="like" >LIKE 运算符。暂未支持</md-enum-item>
<md-enum-item key="in" >IN 运算符。暂未支持</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	条件的值，可以是单个值或多个值的数组。不同字段类型和不同的 operator 可填的值不同。详情参考[字段目标值（value）填写说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/record-filter-guide#3e0fd644)。

**示例值**：["文本内容"]

**数据校验规则**：

- 长度范围：`0` ～ `10`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >automatic_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否自动计算并返回创建时间（created_time）、修改时间（last_modified_time）、创建人（created_by）、修改人（last_modified_by）这四类字段。默认为 false，表示不返回。

**示例值**：false
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
  "view_id": "vewqhz51lk",
  "field_names": [
    "字段1",
    "字段2"
  ],
  "sort": [
    {
      "field_name": "多行文本",
      "desc": true
    }
  ],
  "filter": {
    "conjunction": "and",
    "conditions": [
      {
        "field_name": "职位",
        "operator": "is",
        "value": [
          "初级销售员"
        ]
      },
      {
        "field_name": "销售额",
        "operator": "isGreater",
        "value": [
          "10000.0"
        ]
      }
    ]
  },
  "automatic_fields": false
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
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.record\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	数组类型。record 结果。了解 record 数据结构，参考[数据结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bitable/development-guide/bitable-structure)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, union&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	记录字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >record_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	记录 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >created_by</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >person</md-text>
	</md-dt-td>
	<md-dt-td>
	创建人
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
	人员 ID。与查询参数 user_id_type 指定的类型一致。
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
	中文姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >en_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	邮箱
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	头像链接

**字段权限要求（满足任一）**：
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >created_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	创建时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >last_modified_by</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >person</md-text>
	</md-dt-td>
	<md-dt-td>
	修改人
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
	人员 ID。与查询参数 user_id_type 指定的类型一致。
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
	中文姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >en_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	邮箱
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	头像链接

**字段权限要求（满足任一）**：
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="history">以应用身份读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >last_modified_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	最近更新时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >shared_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	记录分享链接(批量获取记录接口将返回该字段)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >record_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	记录链接(检索记录接口将返回该字段)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >has_more</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否还有更多项
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >total</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	记录总数
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
    "data":{
        "has_more":false,
        "items":[
            {
                "created_by":{
                    "avatar_url":"https://internal-api-lark-file.feishu.cn/static-resource/v1/06d568cb-f464-4c2e-bd03-76512c545c5j~?image_size=72x72&amp;cut_type=default-face&amp;quality=&amp;format=jpeg&amp;sticker_format=.webp",
                    "email":"",
                    "en_name":"测试1",
                    "id":"ou_92945f86a98bba075174776959c90eda",
                    "name":"测试1"
                },
                "created_time":1691049973000,
                "fields":{
                    "人员":[
                        {
                            "avatar_url":"https://internal-api-lark-file.feishu.cn/static-resource/v1/b2-7619-4b8a-b27b-c72d90b06a2j~?image_size=72x72&amp;cut_type=default-face&amp;quality=&amp;format=jpeg&amp;sticker_format=.webp",
                            "email":"zhangsan.leben@bytedance.com",
                            "en_name":"ZhangSan",
                            "id":"ou_2910013f1e6456f16a0ce75ede950a0a",
                            "name":"张三"
                        },
                        {
                            "avatar_url":"https://internal-api-lark-file.feishu.cn/static-resource/v1/v2_q86-fcb6-4f18-85c7-87ca8881e50j~?image_size=72x72&amp;cut_type=default-face&amp;quality=&amp;format=jpeg&amp;sticker_format=.webp",
                            "email":"lisi.00@bytedance.com",
                            "en_name":"LiSi",
                            "id":"ou_e04138c9633dd0d2ea166d79f548ab5d",
                            "name":"李四"
                        }
                    ],
                    "修改人":[
                        {
                            "avatar_url":"https://internal-api-lark-file.feishu.cn/static-resource/v1/06d568cb-f464-4c2e-bd03-76512c545c5j~?image_size=72x72&amp;cut_type=default-face&amp;quality=&amp;format=jpeg&amp;sticker_format=.webp",
                            "email":"",
                            "en_name":"测试1",
                            "id":"ou_92945f86a98bba075174776959c90eda",
                            "name":"测试1"
                        }
                    ],
                    "创建人":[
                        {
                            "avatar_url":"https://internal-api-lark-file.feishu.cn/static-resource/v1/06d568cb-f464-4c2e-bd03-76512c545c5j~?image_size=72x72&amp;cut_type=default-face&amp;quality=&amp;format=jpeg&amp;sticker_format=.webp",
                            "email":"",
                            "en_name":"测试1",
                            "id":"ou_92945f86a98bba075174776959c90eda",
                            "name":"测试1"
                        }
                    ],
                    "创建时间":1691049973000,
                    "单向关联":{
                        "link_record_ids":[
                            "recnVYsuqV"
                        ]
                    },
                    "单选":"选项1",
                    "双向关联":{
                        "link_record_ids":[
                            "recqLvMaXT",
                            "recrdld32q"
                        ]
                    },
                    "地理位置":{
                        "address":"东长安街",
                        "adname":"东城区",
                        "cityname":"北京市",
                        "full_address":"天安门广场，北京市东城区东长安街",
                        "location":"116.397755,39.903179",
                        "name":"天安门广场",
                        "pname":"北京市"
                    },
                    "复选框":true,
                    "多行文本":[
                        {
                            "text":"多行文本内容1",
                            "type":"text"
                        },
                        {
                            "mentionNotify":false,
                            "mentionType":"User",
                            "name":"张三",
                            "text":"@张三",
                            "token":"ou_2910013f1e6456f16a0ce75ede950a0a",
                            "type":"mention"
                        }
                    ],
                    "多选":[
                        "选项1",
                        "选项2"
                    ],
                    "数字":2323.2323,
                    "日期":1690992000000,
                    "最后更新时间":1702455191000,
                    "条码":[
                        {
                            "text":"123",
                            "type":"text"
                        }
                    ],
                    "电话号码":"131xxxx6666",
                    "自动编号":"17",
                    "群组":[
                        {
                            "avatar_url":"https://internal-api-lark-file.feishu-boe.cn/static-resource/v1/v2_c8d2cd50-ba29-476f-b7f1-5b5917cb18ej~?image_size=72x72&amp;cut_type=&amp;quality=&amp;format=jpeg&amp;sticker_format=.webp",
                            "id":"oc_cd07f55f14d6f4a4f1b51504e7e97f48",
                            "name":"武侠聊天组"
                        }
                    ],
                    "评分":3,
                    "货币":1,
                    "超链接":{
                        "link":"https://bitable.feishu.cn",
                        "text":"飞书多维表格官网"
                    },
                    "进度":0.66,
                    "附件":[
                        {
                            "file_token":"Vl3FbVkvnowlgpxpqsAbBrtFcrd",
                            "name":"飞书.jpeg",
                            "size":32975,
                            "tmp_url":"https://open.feishu.cn/open-apis/drive/v1/medias/batch_get_tmp_download_url?file_tokens=Vl3FbVk11owlgpxpqsAbBrtFcrd&amp;extra=%7B%22bitablePerm%22%3A%7B%22tableId%22%3A%22tblBJyX6jZteblYv%22%2C%22rev%22%3A90%7D%7D",
                            "type":"image/jpeg",
                            "url":"https://open.feishu.cn/open-apis/drive/v1/medias/Vl3FbVk11owlgpxpqsAbBrtFcrd/download?extra=%7B%22bitablePerm%22%3A%7B%22tableId%22%3A%22tblBJyX6jZteblYv%22%2C%22rev%22%3A90%7D%7D"
                        }
                    ]
                },
                "last_modified_by":{
                    "avatar_url":"https://internal-api-lark-file.feishu.cn/static-resource/v1/06d568cb-f464-4c2e-bd03-76512c545c5j~?image_size=72x72&amp;cut_type=default-face&amp;quality=&amp;format=jpeg&amp;sticker_format=.webp",
                    "email":"",
                    "en_name":"测试1",
                    "id":"ou_92945f86a98bba075174776959c90eda",
                    "name":"测试1"
                },
                "last_modified_time":1702455191000,
                "record_id":"recyOaMB2F"
            }
        ],
        "total":1
    },
    "msg":"success"
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
  <md-td>200</md-td>
  <md-td>1254000</md-td>
  <md-td>WrongRequestJson</md-td>
  <md-td>请求体错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254001</md-td>
  <md-td>WrongRequestBody</md-td>
  <md-td>请求体错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254002</md-td>
  <md-td>Fail</md-td>
  <md-td>导致报 1254002 错误码的场景较多，请参考以下建议排查：
- 如果单次操作的内容变更较大，请尝试在单次操作中减少数据量
- 如果你并发调用了接口，请尝试控制请求间隔，稍后重试
- 如果在知识库（wiki）中创建多维表格，请检查你是否使用了知识库[创建知识空间节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/create)接口创建多维表格。在此场景下不能使用[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)接口
- 请检查接口参数是否有误。例如，在分页查询多维表格时，传递了无效的 page_token，或传递了错误的数据表的 table_id
- 如果该报错偶尔发生，可能是服务器超时或不稳定，请重试解决</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254003</md-td>
  <md-td>WrongBaseToken</md-td>
  <md-td>app_token 错误。app_token 是多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254004</md-td>
  <md-td>WrongTableId</md-td>
  <md-td>table_id 错误。table_id 是多维表格数据表的唯一标识。获取方式：
- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`
- 也可通过[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)接口获取 `table_id`

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/18741fe2a0d3cafafaf9949b263bb57d_yD1wkOrSju.png?height=746&lazyload=true&maxWidth=700&width=2976)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254005</md-td>
  <md-td>WrongViewId</md-td>
  <md-td>view_id 错误。view_id 是多维表格中视图的唯一标识。获取方式：

- 在多维表格的 URL 地址栏中，`view_id` 是下图中高亮部分：
    ![view_id.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/140668632c97e0095832219001d17c54_DJMgVH9x2S.png?height=748&lazyload=true&width=2998)
- 通过[列出视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/list)接口获取。暂时无法获取到嵌入到云文档中的多维表格的 `view_id`。

**注意**：
当 `filter` 参数 或 `sort` 参数不为空时，请求视为对数据表中的全部数据做条件过滤，指定的 `view_id` 会被忽略。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254006</md-td>
  <md-td>WrongRecordId</md-td>
  <md-td>record_id 错误。record_id 是数据表中一条记录的唯一标识。通过[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口获取</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254007</md-td>
  <md-td>EmptyValue</md-td>
  <md-td>空值</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254008</md-td>
  <md-td>EmptyView</md-td>
  <md-td>空视图</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254009</md-td>
  <md-td>WrongFieldId</md-td>
  <md-td>field_id 错误。field_id 是数据表中一个字段的唯一标识。通过[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254010</md-td>
  <md-td>ReqConvError</md-td>
  <md-td>请求错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254011</md-td>
  <md-td>Page size must greater than 0.</md-td>
  <md-td>page_size参数非法</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254016</md-td>
  <md-td>InvalidSort</md-td>
  <md-td>排序条件 Sort 参数错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254018</md-td>
  <md-td>InvalidFilter</md-td>
  <md-td>filter 参数错误。请参考[记录过滤参数填写指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/record-filter-guide)了解如何填写 filter 参数。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254024</md-td>
  <md-td>InvalidFieldNames</md-td>
  <md-td>field_names 参数错误。请检查接口中字段名称和多维表格中的字段名称是否完全匹配。如果难以排查，建议你调用[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取字段名称，因为根据表格页面的 UI 名称可能会忽略空格、换行或特殊符号等差异</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254030</md-td>
  <md-td>TooLargeResponse</md-td>
  <md-td>响应体过大</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254036</md-td>
  <md-td>Bitable is copying, please try again later.</md-td>
  <md-td>复制多维表格为异步操作，该错误码表示当前多维表格仍在复制中，在复制期间无法操作当前多维表格。需要等待复制完成后再操作</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254040</md-td>
  <md-td>BaseTokenNotFound</md-td>
  <md-td>app_token 不存在。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254041</md-td>
  <md-td>TableIdNotFound</md-td>
  <md-td>table_id 不存在。获取方式：
- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`
- 也可通过[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)接口获取 `table_id`

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/18741fe2a0d3cafafaf9949b263bb57d_yD1wkOrSju.png?height=746&lazyload=true&maxWidth=700&width=2976)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254042</md-td>
  <md-td>ViewIdNotFound</md-td>
  <md-td>view_id 不存在。获取方式：

- 在多维表格的 URL 地址栏中，`view_id` 是下图中高亮部分：
    ![view_id.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/140668632c97e0095832219001d17c54_DJMgVH9x2S.png?height=748&lazyload=true&width=2998)
- 通过[列出视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/list)接口获取。暂时无法获取到嵌入到云文档中的多维表格的 `view_id`。

**注意**：
当 `filter` 参数 或 `sort` 参数不为空时，请求视为对数据表中的全部数据做条件过滤，指定的 `view_id` 会被忽略。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254043</md-td>
  <md-td>RecordIdNotFound</md-td>
  <md-td>record_id 不存在。record_id 是数据表中一条记录的唯一标识。请通过[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口获取</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254044</md-td>
  <md-td>FieldIdNotFound</md-td>
  <md-td>field_id  不存在。field_id  是数据表中一个字段的唯一标识。通过[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254045</md-td>
  <md-td>FieldNameNotFound</md-td>
  <md-td>字段名称不存在。请检查：
- 接口中字段名称和多维表格中的字段名称是否完全匹配。如果难以排查，建议你调用[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取字段名称，因为根据表格页面的 UI 名称可能会忽略空格、换行或特殊符号等差异。
- 表格是否开启了高级权限但调用身份缺少对应字段的权限。你需要为调用身份授予高级权限：
  - 对用户授予高级权限，你需要在多维表格页面右上方 **分享** 入口为当前用户添加可管理权限。![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df3911b4f747d75914f35a46962d667d_dAsfLjv3QC.png?height=546&lazyload=true&maxWidth=550)
  - 对应用授予高级权限，你需通过多维表格页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加可管理权限。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&maxWidth=550&width=3278)
   
     ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9f3353931fafeea16a39f0eb887db175_0tjzC9P3zU.png?maxWidth=550)
    **注意**：
    在 **添加文档应用** 前，你需确保目标应用至少开通了一个多维表格的 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。    
  - 你也可以在 **多维表格高级权限设置** 中添加用户或一个包含应用的群组, 给予这个群自定义的读写等权限。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254060</md-td>
  <md-td>TextFieldConvFail</md-td>
  <md-td>多行文本字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254061</md-td>
  <md-td>NumberFieldConvFail</md-td>
  <md-td>数字字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254062</md-td>
  <md-td>SingleSelectFieldConvFail</md-td>
  <md-td>单选字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254063</md-td>
  <md-td>MultiSelectFieldConvFail</md-td>
  <md-td>多选字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254064</md-td>
  <md-td>DatetimeFieldConvFail</md-td>
  <md-td>日期字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254065</md-td>
  <md-td>CheckboxFieldConvFail</md-td>
  <md-td>复选框字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254066</md-td>
  <md-td>UserFieldConvFail</md-td>
  <md-td>人员字段有误。原因可能是：
- `user_id_type` 参数指定的 ID 类型与传入的 ID 类型不匹配
- 传入了不识别的类型或结构，目前只支持填写 `id` 参数，且需要传入数组
- 跨应用传入了 `open_id`。如果跨应用传入 ID，建议使用 `user_id`。不同应用获取的 `open_id` 不能交叉使用
- 若想对人员字段传空，可传 null</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254067</md-td>
  <md-td>LinkFieldConvFail</md-td>
  <md-td>关联字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254068</md-td>
  <md-td>URLFieldConvFail</md-td>
  <md-td>超链接字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254069</md-td>
  <md-td>AttachFieldConvFail</md-td>
  <md-td>附件字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254072</md-td>
  <md-td>Failed to convert phone field, please make sure it is correct.</md-td>
  <md-td>电话字段错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254100</md-td>
  <md-td>TableExceedLimit</md-td>
  <md-td>数据表或仪表盘数量超限。每个多维表格中，数据表加仪表盘的数量最多为 100 个</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254101</md-td>
  <md-td>ViewExceedLimit</md-td>
  <md-td>视图数量超限, 限制200个</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254102</md-td>
  <md-td>FileExceedLimit</md-td>
  <md-td>文件数量超限</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254103</md-td>
  <md-td>RecordExceedLimit</md-td>
  <md-td>记录数量超限, 限制20,000条</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254104</md-td>
  <md-td>RecordAddOnceExceedLimit</md-td>
  <md-td>单次添加记录数量超限, 单次调用最多更新 1,000 条记录</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254107</md-td>
  <md-td>FilterLengthExceedLimit</md-td>
  <md-td>Filter长度超限, 限制2,000个字符</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254108</md-td>
  <md-td>SortLengthExceedLimit</md-td>
  <md-td>Sort长度超限, 限制1,000个字符</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254109</md-td>
  <md-td>FormulaTableSizeExceedLimit</md-td>
  <md-td>公式表大小超限</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254130</md-td>
  <md-td>TooLargeCell</md-td>
  <md-td>格子内容过大</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254290</md-td>
  <md-td>TooManyRequest</md-td>
  <md-td>请求过快，稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254291</md-td>
  <md-td>Write conflict</md-td>
  <md-td>在同一个数据表中，并发调用了读写接口或请求过快，出现冲突。请参考以下建议解决：
- 确保没有并发调用多维表格读写相关接口
- 若操作量较大，建议在接口与接口之间增加 0.5 或 1 秒的延迟，也可在报错中增加重试逻辑，确保业务的稳定性
- 对于写接口，可以将接口中的查询参数 `ignore_consistency_check` 设置为 true，表示在读写操作时，暂时忽略一致性检查，以提高性能</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254301</md-td>
  <md-td>OperationTypeError</md-td>
  <md-td>多维表格未开启高级权限或不支持开启高级权限</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254302</md-td>
  <md-td>Permission denied.</md-td>
  <md-td>调用身份缺少多维表格的高级权限。你需给予调用身份数据表的 **可管理** 权限或多维表格的 **可管理** 等权限，再重新调用。具体步骤如下所示：

- 对用户授予高级权限，你可在 **多维表格高级权限设置** 中添加用户，为用户开通足够权限；或在多维表格页面右上方 **分享** 入口为当前用户添加可管理权限。详情参考飞书帮助中心文档[使用多维表格高级权限](https://www.feishu.cn/hc/zh-CN/articles/588604550568-%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC%E9%AB%98%E7%BA%A7%E6%9D%83%E9%99%90)。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df3911b4f747d75914f35a46962d667d_dAsfLjv3QC.png?height=546&lazyload=true&maxWidth=550)
    
- 对应用授予高级权限，你需通过多维表格页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加可管理权限。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&lazyload=true&maxWidth=550&width=3278)
   
     ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9f3353931fafeea16a39f0eb887db175_0tjzC9P3zU.png?height=728&lazyload=true&maxWidth=550&width=890)
    
    **注意**：
    在 **添加文档应用** 前，你需确保目标应用至少开通了一个多维表格的 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。    

- 你也可以在 **多维表格高级权限设置** 中添加用户或一个包含应用的群组，给予这个群自定义的读写等权限。  </md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254303</md-td>
  <md-td>AttachPermNotAllow</md-td>
  <md-td>附件无权限</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255001</md-td>
  <md-td>InternalError</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255002</md-td>
  <md-td>RpcError</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255003</md-td>
  <md-td>MarshalError</md-td>
  <md-td>序列化错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255004</md-td>
  <md-td>UmMarshalError</md-td>
  <md-td>反序列化错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255005</md-td>
  <md-td>ConvError</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>504</md-td>
  <md-td>1255040</md-td>
  <md-td>Request timed out, please try again later</md-td>
  <md-td>请求超时，进行重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254607</md-td>
  <md-td>Data not ready, please try again later</md-td>
  <md-td>该报错一般是由于前置操作未执行完成，或本次操作数据太大，服务器计算超时导致。遇到该错误码时，建议等待一段时间后重试。通常有以下几种原因：

- **编辑操作频繁**：开发者对多维表格的编辑操作非常频繁。可能会导致由于等待前置操作处理完成耗时过长而超时的情况。多维表格底层对数据表的处理基于版本维度的串行方式，不支持并发。因此，并发请求时容易出现此类错误，不建议开发者对单个数据表进行并发请求。

- **批量操作负载重**：开发者在多维表格中进行批量新增、删除等操作时，如果数据表的数据量非常大，可能会导致单次请求耗时过长，最终导致请求超时。建议开发者适当降低批量请求的 page_size 以减少请求耗时。
- **资源分配与计算开销**：资源分配是基于单文档维度的，如果读接口涉及公式计算、排序等计算逻辑，会占用较多资源。例如，并发读取一个文档下的多个数据表也可能导致该文档阻塞。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




