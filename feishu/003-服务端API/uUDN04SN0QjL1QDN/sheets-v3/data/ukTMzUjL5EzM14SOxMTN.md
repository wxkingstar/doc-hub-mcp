<!--
title: 读取多个范围
id: 6907569743420325890
fullPath: /ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN
updatedAt: 1729677592000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/data-operation/reading-multiple-ranges
-->
# 读取多个范围

读取电子表格中多个指定范围的数据。

## 使用限制

- 该接口返回数据的最大限制为 10 MB。
- 该接口不支持获取跨表引用和数组公式的计算结果。
## 前提条件

调用此接口前，请确保当前调用身份（tenant_access_token 或 user_access_token）已有电子表格的阅读、编辑等文档权限，否则接口将返回 HTTP 403 或 400 状态码。了解更多，参考[如何为应用或用户开通文档权限](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_batch_get </md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[100 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
      <md-th style="width: 18%;">名称</md-th>  
      <md-th style="width: 15%;">类型</md-th>  
       <md-th style="width: 15%;">必填</md-th>  
      <md-th>描述</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>Authorization</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
              <md-td>
  通过访问凭证（access_token）对调用者身份进行鉴权。可选值：
- <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>：        租户授权凭证。应用代表租户（即企业或团队）执行对应操作。示例值："Bearer t-7f1bcd13fc57d46bac21793aabcef"
          
- <md-tag mode="inline" type="token-user">user_access_token</md-tag>：用户授权凭证。应用代表用户执行对应操作。示例值："Bearer u-7f1bcd13fc57d46bac21793aabcef"
了解更多，参考[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。

        </md-td>
</md-tr>
     <md-tr> 
      <md-td>Content-Type</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
     <md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
   
  </md-tbody> 
</md-table>
:::


### 路径参数
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 20%;">名称</md-th>
            <md-th style="width: 20%;">类型</md-th>
            <md-th style="width: 10%;">必填</md-th>
            <md-th style="width: 50%;">描述</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>spreadsheetToken</md-td>
            <md-td>string</md-td>
            <md-td>是</md-td>
    <md-td>电子表格的 token。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)
          
**示例值**："Iow7sNNEphp3WbtnbCscPqabcef"
          </md-td>

        </md-tr>
    </md-tbody>
</md-table>
:::


### 查询参数  
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 25%;">名称</md-th>
            <md-th style="width: 15%;">类型</md-th>
            <md-th style="width: 10%;">必填</md-th>
            <md-th style="width: 50%;">描述</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>ranges</md-td>
            <md-td>string</md-td>
            <md-td>是</md-td>
            <md-td>多个查询范围，范围之间使用逗号分隔，如 `Q7PlXT!A2:B6,0b6377!B1:C8`。range 的格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：
- `sheetId` 为工作表 ID，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取
- `<开始位置>:<结束位置>` 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。`range`支持四种写法，详情参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)

**注意**：若使用 `<sheetId>!<开始单元格>:<结束列>` 的写法时，仅支持获取 100 列数据。</md-td>
        </md-tr>
        <md-tr>
            <md-td>valueRenderOption</md-td>
            <md-td>string</md-td>
            <md-td>否</md-td>
            <md-td>指定单元格数据的格式。可选值如下所示。当参数缺省时，默认不进行公式计算，返回公式本身，且单元格为数值格式。
- ToString：返回纯文本的值（数值类型除外）
- Formula：单元格中含有公式时，返回公式本身
- FormattedValue：计算并格式化单元格
- UnformattedValue：计算但不对单元格进行格式化</md-td>
        </md-tr>
        <md-tr>
            <md-td>dateTimeRenderOption</md-td>
            <md-td>string</md-td>
            <md-td>否</md-td>
            <md-td>指定数据类型为日期、时间、或时间日期的单元格数据的格式。
- 若不传值，默认返回浮点数值，整数部分为自 1899 年 12 月 30 日以来的天数；小数部分为该时间占 24 小时的份额。例如：若时间为 1900 年 1 月 1 日中午 12 点，则默认返回 2.5。其中，2 表示 1900 年 1 月 1 日为 1899 年12 月 30 日之后的 2 天；0.5 表示 12 点占 24 小时的二分之一，即 12/24=0.5。
- 可选值为 FormattedString，此时接口将计算并对日期、时间、或时间日期类型的数据格式化并返回格式化后的字符串，但不会对数字进行格式化。</md-td>
        </md-tr>
        <md-tr>
            <md-td>user_id_type</md-td>
            <md-td>string</md-td>
            <md-td>否</md-td>
            <md-td>当单元格中包含@用户等涉及用户信息的元素时，该参数可指定返回的用户 ID 类型。默认为 `lark_id`，建议选择 `open_id` 或 `union_id`。了解更多，参考[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。可选值：
- `open_id`：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。了解更多：[如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)

- `union_id`：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。了解更多：[如何获取 Union ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-td>
        </md-tr>
    </md-tbody>
</md-table>

:::
###  cURL 请求示例
```bash
curl --location --request GET 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jabcef/values_batch_get?ranges=Q7PlXT!A2:B6,0b6377!B1:C8&valueRenderOption=ToString&dateTimeRenderOption=FormattedString' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
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
  <md-text type="field-name">code</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-text>
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
  <md-text type="field-name">data</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">-</md-text>
</md-dt-td>
<md-dt-td>
  -
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="1">
<md-dt-td>
  <md-text type="field-name">revision</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-text>
</md-dt-td>
<md-dt-td>
  工作表的版本号。从 0 开始计数，更新一次版本号加一。
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="1">
<md-dt-td>
  <md-text type="field-name">spreadsheetToken</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>
  表格的 token
</md-dt-td>
    </md-dt-tr>
<md-dt-tr level="1">
  <md-dt-td>
<md-text type="field-name">totalCells</md-text>
  </md-dt-td>
  <md-dt-td>
<md-text type="field-type">int</md-text>
  </md-dt-td>
  <md-dt-td>
读取的单元格总数
  </md-dt-td>
</md-dt-tr>

    <md-dt-tr level="1">
<md-dt-td>
  <md-text type="field-name">valueRanges</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">-</md-text>
</md-dt-td>
<md-dt-td>
  读取的值与范围
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">majorDimension</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>
	
返回的 values 数组中数据的呈现维度。固定取值 ROWS，即数据为从左到右、从上到下的读取顺序。
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">range</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">string</md-dt-td>
<md-dt-td>
  读取的范围。为空时表示查询范围没有数据。
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">revision</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-dt-td>
<md-dt-td>
工作表的版本号。从 0 开始计数，更新一次版本号加一。
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">values</md-dt-td>
<md-dt-td>
  <md-text type="field-type">array<array<Object>></md-dt-td>
<md-dt-td>
  指定范围中的数据
</md-dt-td>
    </md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::
  
### 响应体示例

```json
{
    "code": 0,
    "data": {
        "revision": 87,
        "spreadsheetToken": "shtcngNygNfuqhxTBf588jabcef",
        "totalCells": 6,
        "valueRanges": [
            {
                "majorDimension": "ROWS",
                "range": "6e5ed3!A2:B3",
                "revision": 87,
                "values": [
                    [
                        "World",
                        1
                    ],
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                "majorDimension": "ROWS",
                "range": "4FRjKE!B1:B2",
                "revision": 87,
                "values": [
                    [
                        "test"
                    ],
                    [
                        "test"
                    ]
                ]
            }
        ]
    },
    "msg": "success"
}
```  
  
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)