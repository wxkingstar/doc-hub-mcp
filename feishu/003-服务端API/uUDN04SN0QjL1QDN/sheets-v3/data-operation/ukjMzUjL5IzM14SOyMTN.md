<!--
title: 设置单元格样式 
id: 6907569523176783873
fullPath: /ukTMukTMukTM/ukjMzUjL5IzM14SOyMTN
updatedAt: 1726646324000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/data-operation/set-cell-style
-->
# 设置单元格样式

设置单元格中数据的样式。支持设置字体、背景、边框等样式。

## 使用限制
- 单次设置的范围不可超过 5,000 行 100 列。
- 在设置边框样式时，单次更新的单元格数量不可超过 30,000 个。

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/style </md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PUT</md-td>
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
<md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
### 请求体



:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 30%;">名称</md-dt-th>
      <md-dt-th style="width: 10%;">类型</md-dt-th>
      <md-dt-th style="width: 10%;">必填</md-dt-th>
      <md-dt-th style="width: 50%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >appendStyle</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >object</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
设置单元格样式。
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
⁣设置样式的范围。格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：
- `sheetId` 为工作表 ID，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取。
- `<开始位置>:<结束位置>` 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。`range`支持四种写法，详情参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >style</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >object</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
需要更新的样式
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >font</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >object</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
字体相关样式
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >bold</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >bool</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
是否加粗。默认值 false。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >italic</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >bool</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
是否斜体。默认值 false。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >fontSize</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
字体大小，如 10pt/1.5。其中 10pt 表示字号，取值范围为 [9,36]pt。1.5 为行距，固定为 1.5px。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >clean</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >bool</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
是否清除字体格式，默认为 false。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >textDecoration</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
文本的其它样式，可选值：
- 0：默认样式，不加下划线和删除线
- 1：下划线
- 2：删除线
- 3： 下划线和删除线
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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
数字格式，详见[电子表格支持的数字格式类型](/ssl:ttdoc/ukTMukTMukTM/uMjM2UjLzIjN14yMyYTN)。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >hAlign</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
水平对齐方式。可选值：
- 0：左对齐
- 1：中对齐
- 2：右对齐
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >vAlign</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
垂直对齐方式。可选值：
- 0：上对齐
- 1：中对齐
- 2：下对齐
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >foreColor</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
字体颜色，用十六进制颜色代码表示。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >backColor</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
背景颜色，用十六进制颜色代码表示。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >borderType</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
边框类型，可选值：
- FULL_BORDER：全边框，即四周都有边框
- OUTER_BORDER：外边框，只有外侧有边框
- INNER_BORDER：内边框，只有内部有边框
- NO_BORDER：无边框，即没有任何边框
- LEFT_BORDER：左边框，只有左侧有边框
- RIGHT_BORDER：右边框，只有右侧有边框
- TOP_BORDER：上边框，只有顶部有边框
- BOTTOM_BORDER：下边框，只有底部有边框
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >borderColor</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
边框颜色，用十六进制颜色代码表示。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >clean</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >bool</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
是否清除所有格式。默认值为 false。
</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::

### 请求体示例

```json
{
  "appendStyle":{
     "range": "1QXD0s!A3:C4",
     "style":{
          "font":{
              "bold":true,
              "italic":true,
              "fontSize":"10pt/1.5",
              "clean":false  
              },    
          "textDecoration":0,
          "formatter":"",
          "hAlign": 0 , 
          "vAlign":0,   
          "foreColor":"#000000",
          "backColor":"#21d11f",
          "borderType":"FULL_BORDER",
          "borderColor": "#ff0000",
          "clean": false 
          }
      }
}
```
### cURL 请求示例

```bash
curl --location --request PUT 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jabcef/style' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
  "appendStyle":{
     "range": "1QXD0s!A3:C4",
     "style":{
          "font":{
              "bold":true,
              "italic":true,
              "fontSize":"10pt/1.5",
              "clean":false  
              },    
          "textDecoration":0,
          "formatter":"",
          "hAlign": 0 , 
          "vAlign":0,   
          "foreColor":"#000000",
          "backColor":"#21d11f",
          "borderType":"FULL_BORDER",
          "borderColor": "#ff0000",
          "clean": false 
          }
      }
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
	<md-text type="field-name" >updates</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >object</md-text>
	</md-dt-td>
	<md-dt-td>
	更新的单元格信息
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >revision</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	工作表的版本号。从 0 开始计数，更新一次版本号加一。
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >spreadsheetToken</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
电子表格的 token
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >updatedRange</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
设置样式的范围
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >updatedRows</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
设置样式的行数
	</md-dt-td>
</md-dt-tr>

    
<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >updatedColumns</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
设置样式的列数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >updatedCells</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
设置样式的单元格总数
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
        "updates": {
            "revision": 89,
            "spreadsheetToken": "shtcngNygNfuqhxTBf588jabcef",
            "updatedCells": 6,
            "updatedColumns": 3,
            "updatedRange": "6e5ed3!A3:C4",
            "updatedRows": 2
        }
    },
    "msg": "success"
}
```
  
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)


