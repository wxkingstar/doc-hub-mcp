<!--
title: 更新字段
id: 6960166873968508931
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/update
updatedAt: 1736393538000
source: https://open.feishu.cn/document/server-docs/docs/bitable-v1/app-table-field/update
-->
# 更新字段

在多维表格数据表中更新一个字段。更新字段时为全量更新，property 等字段会被完全覆盖。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=bitable&version=v1&resource=app.table.field&method=update)

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

## 前提条件

调用此接口前，请确保当前调用身份（tenant_access_token 或 user_access_token）已有多维表格的编辑等文档权限，否则接口将返回 HTTP 403 或 400 状态码。了解更多，参考[如何为应用或用户开通文档权限](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。

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
      <md-td>https://open.feishu.cn/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PUT</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[10 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="base:field:update" desc="更新字段" support_app_types="custom,isv" tags="">更新字段</md-perm>
            <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
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
	多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。

**示例值**："appbcbWCzen6D8dezhoCH2RpMAh"
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

**示例值**："tblsRc9GRRXKqhvW"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >field_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据表中一个字段的唯一标识。通过[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取。

**示例值**："fldPTb0U2y"
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
	<md-text type="field-name" >field_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	多维表格字段名称。名称中的首尾空格将会被去除。

**示例值**："任务名称"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	要更新的字段的类型。不支持更新 19 查找引用字段类型。

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >文本</md-enum-item>
<md-enum-item key="2" >数字</md-enum-item>
<md-enum-item key="3" >单选</md-enum-item>
<md-enum-item key="4" >多选</md-enum-item>
<md-enum-item key="5" >日期</md-enum-item>
<md-enum-item key="7" >复选框</md-enum-item>
<md-enum-item key="11" >人员</md-enum-item>
<md-enum-item key="13" >电话号码</md-enum-item>
<md-enum-item key="15" >超链接</md-enum-item>
<md-enum-item key="17" >附件</md-enum-item>
<md-enum-item key="18" >单项关联</md-enum-item>
<md-enum-item key="20" >公式（不支持设置公式表达式）</md-enum-item>
<md-enum-item key="21" >双向关联</md-enum-item>
<md-enum-item key="22" >地理位置</md-enum-item>
<md-enum-item key="23" >群组</md-enum-item>
<md-enum-item key="1001" >创建时间</md-enum-item>
<md-enum-item key="1002" >最后更新时间</md-enum-item>
<md-enum-item key="1003" >创建人</md-enum-item>
<md-enum-item key="1004" >修改人</md-enum-item>
<md-enum-item key="1005" >自动编号</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >property</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.property</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段属性，了解如何填写字段，参考[字段编辑指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.property.option\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单选、多选字段的选项信息
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
	否
	</md-dt-td>
	<md-dt-td>
	选项名称

**示例值**："红色"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	选项 ID

**示例值**："optKl35lnG"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	选项颜色，详情参考[字段编辑指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide)。

**示例值**：0

**数据校验规则**：

- 取值范围：`0` ～ `54`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >formatter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	数字、公式字段的显示格式。详情参考[字段编辑指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide)。

**示例值**："0"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >date_formatter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日期、创建时间、最后更新时间字段的显示格式。详情参考[字段编辑指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide)。

**示例值**："yyyy/MM/dd HH:mm"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >auto_fill</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日期字段中新纪录自动填写创建时间

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >multiple</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	人员字段中允许添加多个成员，单向关联、双向关联中允许添加多个记录

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >table_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单向关联、双向关联字段中关联的数据表的 ID

**示例值**："tblsRc9GRRXKqhvW"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >table_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单向关联、双向关联字段中关联的数据表的名称

**示例值**："table2"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >back_field_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	双向关联字段中，关联的数据表中对应的双向关联字段名称

**示例值**："table1-双向关联"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >auto_serial</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.field.property.auto_serial</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自动编号类型
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
	是
	</md-dt-td>
	<md-dt-td>
	自动编号类型

**示例值**："auto_increment_number"

**可选值有**：
<md-enum>
<md-enum-item key="custom" >自定义编号</md-enum-item>
<md-enum-item key="auto_increment_number" >自增数字</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.field.property.auto_serial.options\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自动编号规则列表
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
	是
	</md-dt-td>
	<md-dt-td>
	自动编号的可选规则项类型

**示例值**："created_time"

**可选值有**：
<md-enum>
<md-enum-item key="system_number" >自增数字位，value 范围为 1-9</md-enum-item>
<md-enum-item key="fixed_text" >固定字符，最大长度：20</md-enum-item>
<md-enum-item key="created_time" >创建时间，支持格式 "yyyyMMdd"、"yyyyMM"、"yyyy"、"MMdd"、"MM"、"dd"</md-enum-item>
</md-enum>
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
	是
	</md-dt-td>
	<md-dt-td>
	与自动编号的可选规则项类型相对应的取值

**示例值**："yyyyMMdd"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >location</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.field.property.location</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	地理位置输入方式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >input_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	地理位置输入限制

**示例值**："not_limit"

**可选值有**：
<md-enum>
<md-enum-item key="only_mobile" >只允许移动端上传</md-enum-item>
<md-enum-item key="not_limit" >无限制</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >formula_expression</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	公式字段的表达式

**示例值**："bitable::$table[tblNj92WQBAasdEf].$field[fldMV60rYs]*2"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >allowed_edit_modes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >allowed_edit_modes</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段支持的编辑模式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >manual</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否允许手动录入

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >scan</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否允许移动端录入

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >min</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	进度、评分等字段的数据范围最小值

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >max</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	进度、评分等字段的数据范围最大值

**示例值**：10
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >range_customize</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	进度等字段是否支持自定义范围

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >currency_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	货币币种

**示例值**："CNY"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >rating</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rating</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评分字段的相关设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >symbol</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评分字段的符号展示

**示例值**："star"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.property.type</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	设置公式字段的数据类型

**注意**：非所有多维表格都支持该能力。请参考[获取多维表格元数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/get)接口返回的formula_type 判断，当 `formula_type` 等于 2 时，表示需要设置该字段。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >data_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	公式字段对应的数据类型

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >多行文本（默认值）、条码</md-enum-item>
<md-enum-item key="2" >数字（默认值）、进度、货币、评分</md-enum-item>
<md-enum-item key="3" >单选</md-enum-item>
<md-enum-item key="4" >多选</md-enum-item>
<md-enum-item key="5" >日期</md-enum-item>
<md-enum-item key="7" >复选框</md-enum-item>
<md-enum-item key="11" >人员</md-enum-item>
<md-enum-item key="13" >电话号码</md-enum-item>
<md-enum-item key="15" >超链接</md-enum-item>
<md-enum-item key="17" >附件</md-enum-item>
<md-enum-item key="18" >单向关联</md-enum-item>
<md-enum-item key="20" >公式</md-enum-item>
<md-enum-item key="21" >双向关联</md-enum-item>
<md-enum-item key="22" >地理位置</md-enum-item>
<md-enum-item key="23" >群组</md-enum-item>
<md-enum-item key="1001" >创建时间</md-enum-item>
<md-enum-item key="1002" >最后更新时间</md-enum-item>
<md-enum-item key="1003" >创建人</md-enum-item>
<md-enum-item key="1004" >修改人</md-enum-item>
<md-enum-item key="1005" >自动编号</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ui_property</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.property.type.ui_property</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	公式数据属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >currency_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	货币币种

**示例值**："CNY"

**数据校验规则**：

- 长度范围：`0` ～ `20` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >formatter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	数字、公式字段的显示格式

**示例值**："0"

**数据校验规则**：

- 长度范围：`0` ～ `50` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >range_customize</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	进度等字段是否支持自定义范围

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >min</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	进度、评分等字段的数据范围最小值

**示例值**：1

**数据校验规则**：

- 取值范围：`0` ～ `1`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >max</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	进度、评分等字段的数据范围最大值

**示例值**：100

**数据校验规则**：

- 取值范围：`1` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >date_formatter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日期、创建时间、最后更新时间字段的显示格式

**示例值**："yyyy/MM/dd"

**数据校验规则**：

- 长度范围：`0` ～ `50` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >rating</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rating</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评分字段的相关设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >symbol</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	评分字段的符号展示

**示例值**："star"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ui_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	公式字段在界面上的展示类型，例如进度字段是数字的一种展示形态

**示例值**："Progress"

**可选值有**：
<md-enum>
<md-enum-item key="Number" >数字</md-enum-item>
<md-enum-item key="Progress" >进度</md-enum-item>
<md-enum-item key="Currency" >货币</md-enum-item>
<md-enum-item key="Rating" >评分</md-enum-item>
<md-enum-item key="DateTime" >日期</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.description</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段的描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >disable_sync</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否禁止同步该描述，只在新增、修改字段时生效。枚举值：
- true：表示禁止同步该描述内容到表单的问题描述
- false：允许同步该描述

**示例值**：true

**默认值**：`true`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段描述内容

**示例值**："这是一个字段描述"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >ui_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段在界面上的展示类型，例如进度字段是数字的一种展示形态

**示例值**："Progress"

**可选值有**：
<md-enum>
<md-enum-item key="Text" >文本</md-enum-item>
<md-enum-item key="Email" >邮箱地址</md-enum-item>
<md-enum-item key="Barcode" >条码</md-enum-item>
<md-enum-item key="Number" >数字</md-enum-item>
<md-enum-item key="Progress" >进度</md-enum-item>
<md-enum-item key="Currency" >货币</md-enum-item>
<md-enum-item key="Rating" >评分</md-enum-item>
<md-enum-item key="SingleSelect" >单选</md-enum-item>
<md-enum-item key="MultiSelect" >多选</md-enum-item>
<md-enum-item key="DateTime" >日期</md-enum-item>
<md-enum-item key="Checkbox" >复选框</md-enum-item>
<md-enum-item key="User" >人员</md-enum-item>
<md-enum-item key="GroupChat" >群组</md-enum-item>
<md-enum-item key="Phone" >电话号码</md-enum-item>
<md-enum-item key="Url" >超链接</md-enum-item>
<md-enum-item key="Attachment" >附件</md-enum-item>
<md-enum-item key="SingleLink" >单向关联</md-enum-item>
<md-enum-item key="Formula" >公式</md-enum-item>
<md-enum-item key="DuplexLink" >双向关联</md-enum-item>
<md-enum-item key="Location" >地理位置</md-enum-item>
<md-enum-item key="CreatedTime" >创建时间</md-enum-item>
<md-enum-item key="ModifiedTime" >最后更新时间</md-enum-item>
<md-enum-item key="CreatedUser" >创建人</md-enum-item>
<md-enum-item key="ModifiedUser" >修改人</md-enum-item>
<md-enum-item key="AutoNumber" >自动编号</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "field_name": "人员",
    "type": 11,
    "property": {
        "multiple": true
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
	<md-text type="field-name" >field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field</md-text>
	</md-dt-td>
	<md-dt-td>
	字段
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
	多维表格字段名称。名称中的首尾空格将会被去除。
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
	多维表格字段类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >文本</md-enum-item>
<md-enum-item key="2" >数字</md-enum-item>
<md-enum-item key="3" >单选</md-enum-item>
<md-enum-item key="4" >多选</md-enum-item>
<md-enum-item key="5" >日期</md-enum-item>
<md-enum-item key="7" >复选框</md-enum-item>
<md-enum-item key="11" >人员</md-enum-item>
<md-enum-item key="13" >电话号码</md-enum-item>
<md-enum-item key="15" >超链接</md-enum-item>
<md-enum-item key="17" >附件</md-enum-item>
<md-enum-item key="18" >关联</md-enum-item>
<md-enum-item key="20" >公式</md-enum-item>
<md-enum-item key="21" >双向关联</md-enum-item>
<md-enum-item key="22" >地理位置</md-enum-item>
<md-enum-item key="23" >群组</md-enum-item>
<md-enum-item key="1001" >创建时间</md-enum-item>
<md-enum-item key="1002" >最后更新时间</md-enum-item>
<md-enum-item key="1003" >创建人</md-enum-item>
<md-enum-item key="1004" >修改人</md-enum-item>
<md-enum-item key="1005" >自动编号</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >property</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.property</md-text>
	</md-dt-td>
	<md-dt-td>
	字段属性，具体参考：[字段编辑指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.property.option\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	单选、多选字段的选项信息
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
	选项名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	选项 ID，创建时不允许指定 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	选项颜色
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >formatter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数字、公式字段的显示格式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >date_formatter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日期、创建时间、最后更新时间字段的显示格式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >auto_fill</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	日期字段中新纪录自动填写创建时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >multiple</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	人员字段中允许添加多个成员，单向关联、双向关联中允许添加多个记录
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >table_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	单向关联、双向关联字段中关联的数据表的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >table_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	单向关联、双向关联字段中关联的数据表的名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >back_field_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	双向关联字段中关联的数据表中对应的双向关联字段的名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >auto_serial</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.field.property.auto_serial</md-text>
	</md-dt-td>
	<md-dt-td>
	自动编号类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自动编号类型

**可选值有**：
<md-enum>
<md-enum-item key="custom" >自定义编号</md-enum-item>
<md-enum-item key="auto_increment_number" >自增数字</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >options</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.field.property.auto_serial.options\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	自动编号规则列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自动编号的可选规则项类型

**可选值有**：
<md-enum>
<md-enum-item key="system_number" >自增数字位,value范围1-9</md-enum-item>
<md-enum-item key="fixed_text" >固定字符，最大长度：20</md-enum-item>
<md-enum-item key="created_time" >创建时间，支持格式 "yyyyMMdd"、"yyyyMM"、"yyyy"、"MMdd"、"MM"、"dd"</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	与自动编号的可选规则项类型相对应的取值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >location</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.field.property.location</md-text>
	</md-dt-td>
	<md-dt-td>
	地理位置输入方式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >input_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	地理位置输入限制

**可选值有**：
<md-enum>
<md-enum-item key="only_mobile" >只允许移动端上传</md-enum-item>
<md-enum-item key="not_limit" >无限制</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >formula_expression</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	公式字段的表达式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >allowed_edit_modes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >allowed_edit_modes</md-text>
	</md-dt-td>
	<md-dt-td>
	字段支持的编辑模式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >manual</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否允许手动录入
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >scan</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否允许移动端录入
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >min</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	进度、评分等字段的数据范围最小值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >max</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	进度、评分等字段的数据范围最大值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >range_customize</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	进度等字段是否支持自定义范围
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >currency_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	货币币种
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >rating</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rating</md-text>
	</md-dt-td>
	<md-dt-td>
	评分字段的相关设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >symbol</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	评分字段的符号展示
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.property.type</md-text>
	</md-dt-td>
	<md-dt-td>
	设置公式字段的数据类型

非所有文档都支持该能力，参考[获取多维表格元数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/get)接口返回的formula_type信息。formula_typ等于2表示需要设置该字段。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >data_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	公式字段对应的数据类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >多行文本（默认值）、条码</md-enum-item>
<md-enum-item key="2" >数字（默认值）、进度、货币、评分</md-enum-item>
<md-enum-item key="3" >单选</md-enum-item>
<md-enum-item key="4" >多选</md-enum-item>
<md-enum-item key="5" >日期</md-enum-item>
<md-enum-item key="7" >复选框</md-enum-item>
<md-enum-item key="11" >人员</md-enum-item>
<md-enum-item key="13" >电话号码</md-enum-item>
<md-enum-item key="15" >超链接</md-enum-item>
<md-enum-item key="17" >附件</md-enum-item>
<md-enum-item key="18" >单向关联</md-enum-item>
<md-enum-item key="20" >公式</md-enum-item>
<md-enum-item key="21" >双向关联</md-enum-item>
<md-enum-item key="22" >地理位置</md-enum-item>
<md-enum-item key="23" >群组</md-enum-item>
<md-enum-item key="1001" >创建时间</md-enum-item>
<md-enum-item key="1002" >最后更新时间</md-enum-item>
<md-enum-item key="1003" >创建人</md-enum-item>
<md-enum-item key="1004" >修改人</md-enum-item>
<md-enum-item key="1005" >自动编号</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ui_property</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.property.type.ui_property</md-text>
	</md-dt-td>
	<md-dt-td>
	公式数据属性
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >currency_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	货币币种
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >formatter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数字、公式字段的显示格式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >range_customize</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	进度等字段是否支持自定义范围
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >min</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	进度、评分等字段的数据范围最小值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >max</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	进度、评分等字段的数据范围最大值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >date_formatter</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日期、创建时间、最后更新时间字段的显示格式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >rating</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rating</md-text>
	</md-dt-td>
	<md-dt-td>
	评分字段的相关设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >symbol</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	评分字段的符号展示
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ui_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	公式字段在界面上的展示类型，例如进度字段是数字的一种展示形态

**可选值有**：
<md-enum>
<md-enum-item key="Number" >数字</md-enum-item>
<md-enum-item key="Progress" >进度</md-enum-item>
<md-enum-item key="Currency" >货币</md-enum-item>
<md-enum-item key="Rating" >评分</md-enum-item>
<md-enum-item key="DateTime" >日期</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app.table.field.description</md-text>
	</md-dt-td>
	<md-dt-td>
	字段的描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >disable_sync</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否禁止同步，如果为true，表示禁止同步该描述内容到表单的问题描述（只在新增、修改字段时生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段描述内容
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_primary</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否是索引列
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >field_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格字段 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ui_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段在界面上的展示类型，例如进度字段是数字的一种展示形态

**可选值有**：
<md-enum>
<md-enum-item key="Text" >文本</md-enum-item>
<md-enum-item key="Email" >邮箱地址</md-enum-item>
<md-enum-item key="Barcode" >条码</md-enum-item>
<md-enum-item key="Number" >数字</md-enum-item>
<md-enum-item key="Progress" >进度</md-enum-item>
<md-enum-item key="Currency" >货币</md-enum-item>
<md-enum-item key="Rating" >评分</md-enum-item>
<md-enum-item key="SingleSelect" >单选</md-enum-item>
<md-enum-item key="MultiSelect" >多选</md-enum-item>
<md-enum-item key="DateTime" >日期</md-enum-item>
<md-enum-item key="Checkbox" >复选框</md-enum-item>
<md-enum-item key="User" >人员</md-enum-item>
<md-enum-item key="GroupChat" >群组</md-enum-item>
<md-enum-item key="Phone" >电话号码</md-enum-item>
<md-enum-item key="Url" >超链接</md-enum-item>
<md-enum-item key="Attachment" >附件</md-enum-item>
<md-enum-item key="SingleLink" >单向关联</md-enum-item>
<md-enum-item key="Formula" >公式</md-enum-item>
<md-enum-item key="DuplexLink" >双向关联</md-enum-item>
<md-enum-item key="Location" >地理位置</md-enum-item>
<md-enum-item key="CreatedTime" >创建时间</md-enum-item>
<md-enum-item key="ModifiedTime" >最后更新时间</md-enum-item>
<md-enum-item key="CreatedUser" >创建人</md-enum-item>
<md-enum-item key="ModifiedUser" >修改人</md-enum-item>
<md-enum-item key="AutoNumber" >自动编号</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_hidden</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否是隐藏字段
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
        "field": {
            "field_id": "fldEPIQAXw",
            "field_name": "人员",
            "is_primary": false,
            "property": {
                "multiple": true
            },
            "type": 11
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
  <md-td>200</md-td>
  <md-td>1254012</md-td>
  <md-td>NotSupportFieldOrView</md-td>
  <md-td>不支持的字段或视图。注意数据表的初始索引字段仅支持以下类型：
- 1：文本
- 2：数字
- 5：日期
- 13：电话号码
- 15：超链接
- 20：公式
- 22：地理位置</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254013</md-td>
  <md-td>TableNameDuplicated</md-td>
  <md-td>表名重复</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254014</md-td>
  <md-td>FieldNameDuplicated</md-td>
  <md-td>字段名重复</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254015</md-td>
  <md-td>FieldTypeValueNotMatch</md-td>
  <md-td>字段类型和值不匹配</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254026</md-td>
  <md-td>EmptyOptionName</md-td>
  <md-td>选项名不能为空</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254028</md-td>
  <md-td>EmptyFieldName</md-td>
  <md-td>字段名为空</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254029</md-td>
  <md-td>InvalidFieldName</md-td>
  <md-td>字段名无效</md-td>
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
  <md-td>Base is copying, please try again later.</md-td>
  <md-td>多维表格副本复制中，稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254040</md-td>
  <md-td>BaseTokenNotFound</md-td>
  <md-td>app_token 不存在。app_token 是多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254041</md-td>
  <md-td>TableIdNotFound</md-td>
  <md-td>table_id 不存在。table_id 是多维表格数据表的唯一标识。获取方式：
- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`
- 也可通过[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)接口获取 `table_id`

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/18741fe2a0d3cafafaf9949b263bb57d_yD1wkOrSju.png?height=746&lazyload=true&maxWidth=700&width=2976)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254042</md-td>
  <md-td>ViewIdNotFound</md-td>
  <md-td>view_id 不存在。view_id 是多维表格中视图的唯一标识。获取方式：

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
  <md-td>record_id 不存在。record_id 是数据表中一条记录的唯一标识。通过[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口获取</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254044</md-td>
  <md-td>FieldIdNotFound</md-td>
  <md-td>field_id  不存在。field_id 是数据表中一个字段的唯一标识。通过[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254060</md-td>
  <md-td>TextFieldConvFail</md-td>
  <md-td>文本字段错误</md-td>
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
  <md-td>1254070</md-td>
  <md-td>ActionValidateFailed</md-td>
  <md-td>Action验证失败</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254080</md-td>
  <md-td>TextFieldPropertyError</md-td>
  <md-td>文本字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254081</md-td>
  <md-td>NumberFieldPropertyError</md-td>
  <md-td>数字字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254082</md-td>
  <md-td>SingleSelectFieldPropertyError</md-td>
  <md-td>单选字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254083</md-td>
  <md-td>MultiSelectFieldPropertyError</md-td>
  <md-td>多选字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254084</md-td>
  <md-td>DateFieldPropertyError</md-td>
  <md-td>日期字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254085</md-td>
  <md-td>CheckboxFieldPropertyError</md-td>
  <md-td>复选框字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254086</md-td>
  <md-td>UserFieldPropertyError</md-td>
  <md-td>人员字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254087</md-td>
  <md-td>URLFieldPropertyError</md-td>
  <md-td>超链接字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254088</md-td>
  <md-td>AttachFieldPropertyError</md-td>
  <md-td>附件字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254089</md-td>
  <md-td>LinkFieldPropertyError</md-td>
  <md-td>单向关联字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254090</md-td>
  <md-td>LookUpFieldPropertyError</md-td>
  <md-td>查找引用字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254091</md-td>
  <md-td>FormulaFieldPropertyError</md-td>
  <md-td>公式字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254092</md-td>
  <md-td>DuplexLinkFieldPropertyError</md-td>
  <md-td>双向关联字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254093</md-td>
  <md-td>CreatedTimeFieldPropertyError</md-td>
  <md-td>创建时间字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254094</md-td>
  <md-td>ModifiedTimeFieldPropertyError</md-td>
  <md-td>最后更新时间字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254095</md-td>
  <md-td>CreatedUserFieldPropertyError</md-td>
  <md-td>创建人字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254096</md-td>
  <md-td>ModifiedUserFieldPropertyError</md-td>
  <md-td>修改人字段property错误。请参考[字段编辑指南-字段的属性 property](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide#887ee1cd)查看字段的 property 结构。</md-td>
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
  <md-td>1254105</md-td>
  <md-td>ColumnExceedLimit</md-td>
  <md-td>字段数量超限</md-td>
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
  <md-td>1254606</md-td>
  <md-td>DataNotChange</md-td>
  <md-td>数据无变更</md-td>
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
  <md-td>反序列化错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
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


<md-tr>
  <md-td>403</md-td>
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
  <md-td>403</md-td>
  <md-td>1254304</md-td>
  <md-td>Permission denied.</md-td>
  <md-td>仅企业版和旗舰版飞书支持行列权限</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1254608</md-td>
  <md-td>ReqRecommited</md-td>
  <md-td>基于同一个多维表格版本重复提交了更新请求（传入了相同的 client_token），常见于并发或时间间隔极短的请求，例如并发将一个视图的信息更新为相同的内容。建议稍后重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




