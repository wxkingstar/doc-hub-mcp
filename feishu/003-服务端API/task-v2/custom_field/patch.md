<!--
title: 更新自定义字段
id: 7270765454292254722
fullPath: /uAjLw4CM/ukTMukTMukTM/task-v2/custom_field/patch
updatedAt: 1697081024000
source: https://open.feishu.cn/document/task-v2/custom_field/patch
-->
# 更新自定义字段

更新一个自定义字段的名称和设定。更新时，将`update_fields`字段中填写所有要修改的任务字段名，同时在`custom_field`字段中填写要修改的字段的新值即可。自定义字段不允许修改类型，只能根据类型修改其设置。

`update_fields`支持更新的字段包括：

* `name`：自定义字段名称
* `number_setting` ：数字类型设置（当且仅当要更新的自定义字段类型是数字时)
* `member_setting` ：人员类型设置（当且仅当要更新的自定义字段类型是人员时)
* `datetime_setting` ：日期类型设置 (当且仅当要更新的自定义字段类型是日期时)
* `single_select_setting`：单选类型设置 (当且仅当要更新的自定义字段类型是单选时)
* `multi_select_setting`：多选类型设置 (当且仅当要更新的自定义字段类型是多选时)
* `text_setting`: 文本类型设置（目前文本类型没有可设置项）

当更改某个设置时，如果不填写一个字段，表示不覆盖原有的设定。比如，对于一个数字，原有的setting是:
```json
"number_setting": {
     "format": "normal",
     "decimal_count": 2,
     "separator": "none",
     "custom_symbol": "L",
     "custom_symbol_position": "right"
}
```

使用如下参数调用接口：
```
PATCH /task/v2/custom_fields/:custom_field_guid
{
  "custom_field": {
    "number_setting": {
      "decimal_count": 4
    }
  },
  "update_fields": ["number_setting"]
}
```

表示仅仅将小数位数从2改为4，其余的设置`format`, `separator`, `custom_field`等都不变。

对于单选/多选类型的自定义字段，其设定是一个选项列表。更新时，使用方式接近使用App的界面。使用者不必传入字段的所有选项，而是只需要提供最终希望界面可见（is_hidden=false) 的选项。原有字段中的选项如果没有出现在输入中，则被置为`is_hidden=true`并放到所有可见选项之后。

对于某一个更新的选项，如果提供了option_guid，将视作更新该选项（此时option_guid必须存在于当前字段，否则会返回错误）；如果不提供，将视作新建一个选项（新的选项的option_guid会在reponse中被返回)。

例如，一个单选字段原来有3个选项A，B，C，D。其中C是隐藏的。用户可以这样更新选项：

```
PATCH /task/v2/custom_fields/:custom_field_guid
{
   "custom_field": {
      "single_select_setting": {
         "optoins": [
            {
               "name": "E",
               "color_index": 25
            },
            {
               "guid": "<option_guid of A>"
               "name": "A2"
            },
            {
               "guid": "<option_guid of C>",
            },
         ]
      }
   },
   "update_fields": ["single_select_setting"]
}
```

调用后最终得到了新的选项列表E, A, C, B, D。其中：

* 选项E被新建出来，其`color_index`被设为了25。
* 选项A被更新，其名称被改为了"A2"。但其color_index因为没有设置而保持不变；
* 选项整体顺序遵循用户的输入顺序，即E，A，C。同时E，A，C作为直接的输入，其is_hidden均被设为了false，其中，C原本是is_hidden=true，也会被设置为is_hidden=false。
* 选项B和D因为用户没有输入，其`is_hidden`被置为了true，并且被放到了所有用户输入的选项之后。

如果只是单纯的希望修改用户可见的选项的顺序，比如从原本的选项A,B,C修改为C,B,A，可以这样调用接口：
```
PATCH /task/v2/custom_fields/:custom_field_guid
{
   "custom_field": {
      "single_select_setting": {
         "optoins": [
            {
               "guid": "<option_guid_of_C>"
            },
            {
               "guid": "<option_guid of B>"
            },
            {
               "guid": "<option_guid of A>",
            },
         ]
      }
   },
  "update_fields": ["single_select_setting"]
}
```

如果希望直接将字段里的所有选项都标记为不可见，可以这样调用接口：
```
PATCH /task/v2/custom_fields/:custom_field_guid
{
  "custom_field": {
      "single_select_setting": {
         "optoins": []
      }
   },
  "update_fields": ["single_select_setting"]
}
```

更新单选/多选字段的选项必须满足“可见选项名字不能重复”的约束。否则会返回错误。开发者需要自行保证输入的选项名不可以重复。

如希望只更新单个选项，或者希望单独设置某个选项的is_hidden，本接口无法支持，但可以使用[更新自定义字段选项](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/custom_field-option/patch)接口实现。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=task&version=v2&resource=custom_field&method=patch)

:::html
<md-alert type="tip">
更新自定义字段需要拥有自定义字段的编辑权限。
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
      <md-td>https://open.feishu.cn/open-apis/task/v2/custom_fields/:custom_field_guid</md-td>
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
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="task:custom_field:write" desc="查看、创建、更新自定义字段" support_app_types="custom,isv" tags="">查看、创建、更新自定义字段</md-perm>
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
	<md-text type="field-name" >custom_field_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段GUID。自定义字段GUID。可以通过[创建自定义字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/custom_field/create)接口创建, 或者通过[列取自定义字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/custom_field/list)接口查询得到。

**示例值**："5ffbe0ca-6600-41e0-a634-2b38cbcf13b8"
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
	<md-text type="field-name" >custom_field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >input_custom_field</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	要修改的自定义字段数据
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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
	字段名称，支持最大50个字符。

**示例值**："优先级"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >number_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	数字类型的字段设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >format</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	数字展示的格式

**示例值**："normal"

**可选值有**：
<md-enum>
<md-enum-item key="normal" >常规数字</md-enum-item>
<md-enum-item key="percentage" >百分比格式</md-enum-item>
<md-enum-item key="cny" >人民币格式</md-enum-item>
<md-enum-item key="usd" >美元格式</md-enum-item>
<md-enum-item key="custom" >自定义符号</md-enum-item>
</md-enum>

**默认值**：`normal`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_symbol</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义符号，支持最大4个字符。只有`format`设为"custom"时才会生效。

**示例值**："€"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_symbol_position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义符号显示的位置。

**示例值**："left"

**可选值有**：
<md-enum>
<md-enum-item key="left" >自定义符号放在数字左边</md-enum-item>
<md-enum-item key="right" >自定义符号放在数字右边</md-enum-item>
</md-enum>

**默认值**：`right`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >separator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分隔符样式

**示例值**："thousand"

**可选值有**：
<md-enum>
<md-enum-item key="none" >无分隔符</md-enum-item>
<md-enum-item key="thousand" >千分位分隔符</md-enum-item>
</md-enum>

**默认值**：`none`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >decimal_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	保留小数位数。输入的数字值的小数位数如果比该设置多，多余的位数将被四舍五入后舍弃。如果`format`为"percentage"，表示变为百分数之后的小数位数。

**示例值**：2

**默认值**：`0`

**数据校验规则**：

- 取值范围：`0` ～ `6`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >member_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	人员类型的字段设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >multi</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否支持多选

**示例值**：true

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >datetime_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >datetime_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	时间日期类型的字段设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >format</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日期显示格式。支持
<md-enum>
<md-enum-item key="yyyy-mm-dd">以短横分隔的年月日，例如2023-08-24</md-enum-item>
<md-enum-item key="yyyy/mm/dd">以斜杠分隔的年月日，例如2023/08/04</md-enum-item>
<md-enum-item key="mm/dd/yyyy">以斜杠分隔的月日年，例如08/24/2023</md-enum-item>
<md-enum-item key="dd/mm/yyyy">以斜杠分隔的日月年，例如24/08/2023</md-enum-item>
</md-enum>

**示例值**："yyyy/mm/dd"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >single_select_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >select_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单选设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >option\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单选选项

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	选项的GUID。如果填写表示更新；不填写表示新建。

**示例值**："4216f79b-3fda-4dc6-a0c4-a16022e47152"
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
	否
	</md-dt-td>
	<md-dt-td>
	选项名称，最大50个字符

**示例值**："高优"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >color_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	选项的颜色索引值，可以是0～54中的一个数字。

**示例值**：1

**数据校验规则**：

- 取值范围：`0` ～ `54`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >multi_select_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >select_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	多选设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >option\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	多选选项

**数据校验规则**：

- 长度范围：`0` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	选项的GUID。如果填写表示更新；不填写表示新建。

**示例值**："4216f79b-3fda-4dc6-a0c4-a16022e47152"
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
	否
	</md-dt-td>
	<md-dt-td>
	选项名称，最大50个字符

**示例值**："高优"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >color_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	选项的颜色索引值，可以是0～54中的一个数字。

**示例值**：1

**数据校验规则**：

- 取值范围：`0` ～ `54`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >text_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本类型设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >update_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	要修改的自定义字段类型，支持：
* `name`：自定义字段名称。
* `number_setting` ：数字类型设置（当且仅当要更新的自定义字段类型是数字时)
* `member_setting` ：人员类型设置（当且仅当要更新的自定义字段类型是人员时)
* `datetime_setting` ：日期类型设置 (当且仅当要更新的自定义字段类型是日期时)
* `single_select_setting`：单选类型设置 (当且仅当要更新的自定义字段类型是单选时)
* `multi_select_setting`：多选类型设置 (当且仅当要更新的自定义字段类型是多选时)
* `text_setting`: 文本类型设置（当前无可设置项）

**示例值**：["name"]

**数据校验规则**：

- 长度范围：`1` ～ `20`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "custom_field": {
        "name": "优先级",
        "number_setting": {
            "format": "normal",
            "custom_symbol": "€",
            "custom_symbol_position": "left",
            "separator": "thousand",
            "decimal_count": 2
        },
        "member_setting": {
            "multi": true
        },
        "datetime_setting": {
            "format": "yyyy/mm/dd"
        },
        "single_select_setting": {
            "options": [
                {
                    "guid": "4216f79b-3fda-4dc6-a0c4-a16022e47152",
                    "name": "高优",
                    "color_index": 1
                }
            ]
        },
        "multi_select_setting": {
            "options": [
                {
                    "guid": "4216f79b-3fda-4dc6-a0c4-a16022e47152",
                    "name": "高优",
                    "color_index": 1
                }
            ]
        },
        "text_setting": {}
    },
    "update_fields": [
        "name"
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
	<md-text type="field-name" >custom_field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_field</md-text>
	</md-dt-td>
	<md-dt-td>
	修改后的自定义字段设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段的GUID
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
	自定义字段名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >number_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	数字类型的字段设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >format</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数字展示的格式

**可选值有**：
<md-enum>
<md-enum-item key="normal" >常规数字</md-enum-item>
<md-enum-item key="percentage" >百分比格式</md-enum-item>
<md-enum-item key="cny" >人民币格式</md-enum-item>
<md-enum-item key="usd" >美元格式</md-enum-item>
<md-enum-item key="custom" >自定义符号</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >custom_symbol</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义符号。只有`format`设为custom时才会生效。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >custom_symbol_position</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义符号显示的位置。

**可选值有**：
<md-enum>
<md-enum-item key="left" >自定义符号放在数字左边</md-enum-item>
<md-enum-item key="right" >自定义符号放在数字右边</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >separator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分隔符样式

**可选值有**：
<md-enum>
<md-enum-item key="none" >无分隔符</md-enum-item>
<md-enum-item key="thousand" >千分位分隔符</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >decimal_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	保留小数位数。输入的数字值的小数位数如果比该设置多，多余的位数将被四舍五入后舍弃。如果`format`为"percentage"，表示变为百分数之后的小数位数。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >member_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	人员类型的字段设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >multi</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否支持多选
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >datetime_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >datetime_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	时间日期类型的字段设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >format</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日期显示格式。支持
<md-enum>
<md-enum-item key="yyyy-mm-dd" >以短横分隔的年月日，例如2023-08-24</md-enum-item>
<md-enum-item key="yyyy/mm/dd" >以斜杠分隔的年月日，例如2023/08/04</md-enum-item>
<md-enum-item key="mm/dd/yyyy" >以斜杠分隔的月日年，例如08/24/2023</md-enum-item>
<md-enum-item key="dd/mm/yyyy" >以斜杠分隔的日月年，例如24/08/2023</md-enum-item>
</md-enum>

	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >single_select_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >select_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	单选类型的字段设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >option\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	选项
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	选项的GUID
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
	选项名称，最大50个字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >color_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	选项的颜色索引值，可以是0～54中的一个数字。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_hidden</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	选项是否隐藏。隐藏后的选项在界面不可见，也不可以再通过openapi将字段值设为该选项。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >multi_select_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >select_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	多选类型的字段设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >option\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	选项
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	选项的GUID
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
	选项名称，最大50个字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >color_index</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	选项的颜色索引值，可以是0～54中的一个数字。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_hidden</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	选项是否隐藏。隐藏后的选项在界面不可见，也不可以再通过openapi将字段值设为该选项。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >creator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member</md-text>
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
	表示member的id
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
	成员的类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >role</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员角色
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >created_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段创建的时间戳(ms)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >updated_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段的更新时间戳(ms)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >text_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >text_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	文本类型的字段设置
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
        "custom_field": {
            "guid": "34d4b29f-3d58-4bc5-b752-6be80fb687c8",
            "name": "优先级",
            "type": "number",
            "number_setting": {
                "format": "normal",
                "custom_symbol": "自定义符号",
                "custom_symbol_position": "left",
                "separator": "thousand",
                "decimal_count": 2
            },
            "member_setting": {
                "multi": true
            },
            "datetime_setting": {
                "format": "yyyy/mm/dd"
            },
            "single_select_setting": {
                "options": [
                    {
                        "guid": "4216f79b-3fda-4dc6-a0c4-a16022e47152",
                        "name": "高优",
                        "color_index": 1,
                        "is_hidden": false
                    }
                ]
            },
            "multi_select_setting": {
                "options": [
                    {
                        "guid": "4216f79b-3fda-4dc6-a0c4-a16022e47152",
                        "name": "高优",
                        "color_index": 1,
                        "is_hidden": false
                    }
                ]
            },
            "creator": {
                "id": "ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f",
                "type": "user",
                "role": "editor"
            },
            "created_at": "1688196600000",
            "updated_at": "1688196600000",
            "text_setting": {}
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
  <md-td>1470400</md-td>
  <md-td>请求参数错误，如向`update_fields`传入不支持更新的名称。</md-td>
  <md-td>错误原因见返回的msg提示的信息。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1470403</md-td>
  <md-td>缺少编辑自定义字段的权限。</md-td>
  <md-td>确认调用身份拥有编辑自定义字段的权限。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1470404</md-td>
  <md-td>要编辑的自定义字段不存在或已删除。</md-td>
  <md-td>确认要编辑的自定义字段不存在或已删除。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1470500</md-td>
  <md-td>服务器错误。</md-td>
  <md-td>尝试重试调用。如持续失败，请联系支持人员进行反馈。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




