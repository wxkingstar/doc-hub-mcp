<!--
title: 批量获取条件格式
id: 6939784115499909148
fullPath: /ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-get
updatedAt: 1723186034000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/conditionformat/condition-format-get
-->
# 获取条件格式

根据工作表 ID 获取详细的条件格式信息，最多支持同时查询 10 个工作表的条件格式。

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheet_token/condition_formats    </md-td>
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
- <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>：	租户授权凭证。应用代表租户（即企业或团队）执行对应操作。示例值："Bearer t-7f1bcd13fc57d46bac21793aabcef"

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
  <md-tr>
      <md-th>名称</md-th>
      <md-th>类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
  </md-tr>  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>spreadsheet_token</md-td>
       <md-td>string</md-td>
       <md-td>电子表格的 token。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
-  电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)</md-td>

**示例值**："Iow7sNNEphp3WbtnbCscPqabcef"
    </md-tr>
</md-tbody>
</md-table>
::: 
### 查询参数

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 30%;">参数</md-dt-th>
<md-dt-th style="width: 20%;">类型</md-dt-th>
<md-dt-th style="width: 10%;">是否必填</md-dt-th>
<md-dt-th style="width: 40%;">说明</md-dt-th>
</md-dt-tr>

  </md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name">sheet_ids</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">array&lt;string&gt;</md-text>
</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>电子表格工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。多个 ID 使用逗号分隔。
  
  
**示例值**：`xxxID1,xxxID2`
</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::  

###  cURL 请求示例
```bash
curl --location --request GET 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/condition_formats?sheet_ids=Q7PlXT' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
```
## 响应  
### 响应体




:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 30%;">参数</md-dt-th>
<md-dt-th style="width: 20%;">类型</md-dt-th>
<md-dt-th style="width: 40%;">说明</md-dt-th>
</md-dt-tr>

  </md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name">sheet_condition_formats</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">array&lt;interface&gt;</md-text>
</md-dt-td>

<md-dt-td>表格的条件格式信息
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name">sheet_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-text>
</md-dt-td>

<md-dt-td>电子表格工作表的 ID
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name">condition_format</md-text>
</md-dt-td>
<md-dt-td>/</md-dt-td>

<md-dt-td>条件格式的详细信息</md-dt-td>
</md-dt-tr>
  
  

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">cf_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>条件格式的 ID
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">ranges</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">array&lt;string&gt;</md-text>
</md-dt-td>

<md-dt-td>条件格式应用的范围，支持以下枚举值，了解更多，参考[条件格式指南](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-guide)。

- `sheetId`：填写工作表 ID，表示将条件格式应用于整表
- `sheetId!{开始行索引}:{结束行索引}`：填写工作表 ID 和行数区间，表示将条件格式应用于整行
- `sheetId!{开始列索引}:{结束列索引}`：填写工作表 ID 和列的区间，表示将条件格式应用于整列
- `sheetId!{开始单元格}:{结束单元格}`：填写工作表 ID 和单元格区间，表示将条件格式应用于单元格选定的区域中
- `sheetId!{开始单元格}:{结束列索引}`：填写工作表 ID、起始单元格和结束列，表示省略结束行，使用表格的最后行作为结束行
  
**示例值**：["40a7b0!C3:C3"]
  </md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">rule_type</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-text>
</md-dt-td>

<md-dt-td>创建条件时的规则类型。枚举值：
- containsBlanks：为空
- notContainsBlanks：不为空
- duplicateValues：重复值
- uniqueValues：唯一值
- cellIs：限定值范围
- containsText：包含内容
- timePeriod：日期</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">attrs</md-text>
</md-dt-td>
<md-dt-td><md-text type="field-type">array&lt;object&gt;</md-dt-td>

<md-dt-td>`rule_type` 参数对应的具体属性信息。了解更多，参考[条件格式指南](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-guide)。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">operator</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>

<md-dt-td>操作方法。了解更多，参考[条件格式指南](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-guide)。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">time_period</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>

<md-dt-td>时间范围。当 `rule_type` 为 `timePeriod` 时，返回该参数，且 `operator` 参数仅支持 `is`。枚举值：
  
- yesterday：昨天
- today：今天
- tomorrow：明天
- last7Days：最近 7 天

  
  
  
  </md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">formula</md-dt-td>
<md-dt-td>
<md-text type="field-type">array&lt;string&gt;</md-dt-td>

<md-dt-td>公式。当 `rule_type` 为 `cellIs` 时，返回该参数。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">text</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>

<md-dt-td>文本。当 `rule_type` 为 `containsText` 时，返回该参数。值为用户自定义。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">style</md-dt-td>
<md-dt-td>/</md-dt-td>

<md-dt-td>条件格式的样式。支持设置字体样式、文本装饰、字体颜色和背景颜色。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">font</md-dt-td>
<md-dt-td>/</md-dt-td>

<md-dt-td>符合条件的数据的字体样式</md-dt-td>
</md-dt-tr>
<md-dt-tr level="4">
<md-dt-td>
<md-text type="field-name">bold</md-dt-td>
<md-dt-td>
<md-text type="field-type">bool</md-dt-td>

<md-dt-td>字体是否加粗</md-dt-td>
</md-dt-tr>
<md-dt-tr level="4">
<md-dt-td>
<md-text type="field-name">italic</md-dt-td>
<md-dt-td>
<md-text type="field-type">bool</md-dt-td>

<md-dt-td>字体是否为斜体</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">text_decoration</md-dt-td>
<md-dt-td>
<md-text type="field-type">int</md-dt-td>

<md-dt-td>文本装饰。为文本设置下划线或删除线。可选值：
- 0：无下划线和删除线
- 1：下划线
- 2：删除线
- 3：同时设置下划线和删除线</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">fore_color</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>

<md-dt-td>字体颜色的十六进制代码。如 #faf1d1。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">back_color</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>

<md-dt-td>背景颜色的十六进制代码。如 #faf1d1。</md-dt-td>
</md-dt-tr>
  </md-dt-tbody>
</md-dt-table>
:::

### 响应体示例

```json
{
    "code": 0,
    "msg": "Success",
    "data": {
        "sheet_condition_formats": [
            {
                "condition_format": {
                    "cf_id": "r9sYuhgAl6",
                    "ranges": [
                        "uEnW3A!C4:C4"
                    ],
                    "rule_type": "timePeriod",
                    "attrs": [
                        {
                            "operator": "is",
                            "time_period": "today"
                        }
                    ],
                    "style": {
                        "back_color": "#d9f5d6",
                        "font": {
                            "bold": true,
                            "italic": false
                        },
                        "fore_color": "#faf1d1",
                        "text_decoration": 3
                    }
                },
                "sheet_id": "uEnW3A"
            }
        ]
    }
}
```
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)