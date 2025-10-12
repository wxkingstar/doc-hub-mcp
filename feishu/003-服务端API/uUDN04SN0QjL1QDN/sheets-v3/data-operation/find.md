<!--
title: 查找单元格
id: 6982374372208590850
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/find
updatedAt: 1722417436000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/data-operation/find
-->
# 查找单元格

在指定范围内查找符合查找条件的单元格。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=sheets&version=v3&resource=spreadsheet.sheet&method=find)

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

请求参数 `range` 所指定的范围不可大于实际数据区域，否则将报错。例如，当工作表只有 200 行、而 `range` 参数的范围为 1 到 201 行时，接口将返回 1310202 错误码。

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/find</md-td>
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
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
            <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
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
	<md-text type="field-name" >spreadsheet_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	电子表格的 token。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)

**示例值**："Iow7sNNEphp3WbtnbCscPqabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >sheet_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工作表的 ID，获取方式见[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)。

**示例值**："PNIfrm"
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
	<md-text type="field-name" >find_condition</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >find_condition</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	指定查找单元格的条件。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	查找范围。格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：
- `sheetId` 为工作表 ID，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取
- `<开始位置>:<结束位置>` 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。`range`支持四种写法，详情参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)

**示例值**："PNIfrm!A1:C5"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >match_case</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否忽略查找字符串的大小写，默认为 false。
- `true`：忽略字符串中字母大小写差异
- `false`：区分字符串中字母大小写

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >match_entire_cell</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字符串是否需要完全匹配整个单元格，默认值为 false。
- `true`：完全匹配单元格，比如 `find` 参数 取值为 "hello"，则单元格中的内容必须为 "hello" 才会匹配替换
- `false`：允许部分匹配单元格，比如 `find` 取值为 "hello"，则单元格中的内容包含 "hello" 即可匹配替换

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >search_by_regex</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否使用正则表达式查找，默认值为 false。
- `true`：使用正则表达式
- `false`：不使用正则表达式

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >include_formulas</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否仅搜索单元格公式，默认值为 false。
- `true`：仅搜索单元格公式
- `false`：仅搜索单元格内容

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >find</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	查找的字符串。当`search_by_regex` 字段为 true 时，你需填入正则表达式

**示例值**："如下所示：
- 字符串查找示例： "hello"
- 正则表达式查找示例："[A-Z]\w+"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "find_condition": {
        "range": "PNIfrm!A1:C5",
        "match_case": true,
        "match_entire_cell": false,
        "search_by_regex": false,
        "include_formulas": false
    },
    "find": "hello"
}
</md-code-json>
:::

### 请求示例
```bash
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/shtcnmBA*****yGehy8/sheets/PNIfrm/find' \
--header 'Authorization: Bearer u-3iqkd6KWzRLzNeXfeuCMEb' \
--header 'Content-Type: application/json' \
--data-raw '{
    "find_condition": {
        "range": "PNIfrm!A1:C5",
        "match_case": true,
        "match_entire_cell": false,
        "search_by_regex": false,
        "include_formulas": false
    },
    "find": "hello"
}'
```

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
	<md-text type="field-name" >find_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >find_replace_result</md-text>
	</md-dt-td>
	<md-dt-td>
	符合条件的信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >matched_cells</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	符合查找条件的单元格数组，不包含公式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >matched_formula_cells</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	符合查找条件的含有公式的单元格数组
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >rows_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	符合查找条件的总行数
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
        "find_result": {
            "matched_cells": [
                "A1"
            ],
            "matched_formula_cells": [
                "B3"
            ],
            "rows_count": 2
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
  <md-td>1310242</md-td>
  <md-td>In Mix state</md-td>
  <md-td>当前表格数据位于用户机房，正在将数据恢复到 SaaS 环境中，请稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310211</md-td>
  <md-td>Wrong Sheet Id</md-td>
  <md-td>检查工作表的 ID 是否正确。获取方式见[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310248</md-td>
  <md-td>Wrong Regular Expression</md-td>
  <md-td>检查正则表达式是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310202</md-td>
  <md-td>Wrong Range</md-td>
  <md-td>区域范围错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310229</md-td>
  <md-td>Wrong URL Param</md-td>
  <md-td>检查 URL 参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310204</md-td>
  <md-td>Wrong Request Body</md-td>
  <md-td>参考响应体中的错误提示检查请求体参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310213</md-td>
  <md-td>Permission Fail</md-td>
  <md-td>没有文档相应权限。参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN)问题 2 和问题 3 开通应用权限和文档权限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310218</md-td>
  <md-td>Locked Cell</md-td>
  <md-td>检查操作的是否为保护范围</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310214</md-td>
  <md-td>SpreadSheet Not Found</md-td>
  <md-td>检查表格 token 是否正确。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310215</md-td>
  <md-td>Sheet Id Not Found</md-td>
  <md-td>检查工作表的 ID 是否正确。获取方式见[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310226</md-td>
  <md-td>Excess Limit</md-td>
  <md-td>超出限制，参考响应体中的错误提示</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310217</md-td>
  <md-td>Too Many Request</md-td>
  <md-td>检查请求是否发送过于频繁</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310235</md-td>
  <md-td>Retry Later</md-td>
  <md-td>稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1315201</md-td>
  <md-td>Server Error</md-td>
  <md-td>服务内部错误，[详询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1315203</md-td>
  <md-td>Server Error</md-td>
  <md-td>服务内部错误，[详询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310249</md-td>
  <md-td>Spreadsheet Deleted</md-td>
  <md-td>表格已被删除，请恢复表格后重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




