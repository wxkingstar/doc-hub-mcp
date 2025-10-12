<!--
title: 创建浮动图片
id: 6976178542817230851
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/create
updatedAt: 1744612290000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/spreadsheet-sheet-float_image/create
-->
# 创建浮动图片

在电子表格工作表的指定位置创建一张浮动图片。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=sheets&version=v3&resource=spreadsheet.sheet.float_image&method=create)

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

你已调用[上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)或[分片上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare)上传图片至表格并获取了图片的 `file_token`，作为本接口中图片的 `float_image_token`。

 ## 使用限制

- 图片大小不得超过 20 MB。
- 单个电子表格最多支持放置 4,000 张不同 token 的图片，即表格内不重复的图片（包括浮动图片和单元格图片）总数不超过 4,000 张。将相同 token 的图片多次放置在表格的不同位置，数量上仅算一张图片。

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images</md-td>
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
            <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            <md-perm name="sheets:spreadsheet:write_only" desc="编辑电子表格" support_app_types="custom,isv" tags="">编辑电子表格</md-perm>
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
-  电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
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
	电子表格工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。

**示例值**："0beg12"
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
	<md-text type="field-name" >float_image_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	工作表内浮动图片的唯一标识。可不传由系统自动生成，也可选择自定义。

**数据校验规则**：
长度为 10，由 0-9、a-z、A-Z 组合而成。

**示例值**："ye06SS14ph"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >float_image_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	浮动图片的 token。通过[上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)或[分片上传素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare)上传图片至表格，获得素材的 `file_token`，即为 float_image_token。

**注意**：
该参数必填，请忽略左侧必填列的”否”。

**示例值**："boxcnrHpsg1QDqXAAAyachabcef"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	浮动图片左上角所在单元格位置，只允许单个单元格的形式，如 "ahgsch!A1:A1"。了解更多，参考[浮动图片使用指南](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)。

**注意**：
该参数必填，请忽略左侧必填列的”否”。

**示例值**："ahgsch!A1:A1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	浮动图片的宽度，单位为像素。不传会默认采用图片实际宽度，如果传则需要大于等于 20 像素。了解更多，参考[浮动图片使用指南](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)。

**示例值**：100
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >height</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	浮动图片的高度，单位为像素。不传会默认采用图片实际高度，如果传则需要大于等于 20 像素。了解更多，参考[浮动图片使用指南](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)。

**示例值**：100
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >offset_x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	浮动图片左上角距离所在单元格左上角的横向偏移，单位为像素，默认为 0，设置的值需要大于等于 0、小于浮动图片左上角所在单元格的宽度。了解更多，参考[浮动图片使用指南](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)。

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >offset_y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	浮动图片左上角距离所在单元格左上角的纵向偏移，单位为像素，默认为 0。设置的值需要大于等于 0、小于浮动图片左上角所在单元格的高度。了解更多，参考[浮动图片使用指南](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)。

**示例值**：0
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "float_image_id": "ye06SS14ph",
    "float_image_token": "boxcnrHpsg1QDqXAAAyachabcef",
    "range": "ahgsch!A1:A1",
    "width": 100,
    "height": 100,
    "offset_x": 0,
    "offset_y": 0
}
</md-code-json>
:::

### cURL 请求示例

```bash
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/shtbchuIXPxjaYxsZzQxBqxxxxx/sheets/ea131a/float_images' \
--header 'Authorization: Bearer t-f148d9ee6b5c07373a2671e795e9e855a6f171f6' \
--header 'Content-Type: application/json' \
--data-raw '{
    "float_image_id": "ye06SS14p9",
   "float_image_token": "boxbcbQEhbFAe0XJvGzkD165FGb",
    "offset_x": 0,
    "offset_y": 0,
    "range": "ea131a!C3:C3"
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
	<md-text type="field-name" >float_image</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >float_image</md-text>
	</md-dt-td>
	<md-dt-td>
	浮动图片的相关参数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >float_image_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	浮动图片的唯一标识。用于对图片进行增删改查操作。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >float_image_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	浮动图片的 token，用于图片的上传和下载操作。你可通过该 token，调用[下载素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download)接口下载图片。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	浮动图片左上角所在单元格位置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >width</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	浮动图片的宽度，单位为像素。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >height</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	浮动图片的高度，单位为像素。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >offset_x</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	浮动图片左上角距离所在单元格左上角的横向偏移，单位为像素。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >offset_y</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	浮动图片左上角距离所在单元格左上角的纵向偏移，单位为像素。
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
        "float_image": {
            "float_image_id": "ye06SS14ph",
            "float_image_token": "boxbcbQsaSqIXsxxxxx1HCPJFbh",
            "range": "ahgsch!A1:A1",
            "width": 100,
            "height": 100,
            "offset_x": 0,
            "offset_y": 0
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
  <md-td>1310229</md-td>
  <md-td>Wrong URL Param</md-td>
  <md-td>检查 URL 中的路径参数是否填写正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310217</md-td>
  <md-td>Too Many Request</md-td>
  <md-td>请求发送过于频繁，请稍后重试</md-td>
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
  <md-td>服务内部错误，请l联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310214</md-td>
  <md-td>SpreadSheet Not Found</md-td>
  <md-td>电子表格 token 不存在。请检查表格 token 是否填写</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310213</md-td>
  <md-td>Permission Fail</md-td>
  <md-td>没有文档权限。参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)问题 3 开通文档权限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310215</md-td>
  <md-td>Sheet Id Not Found</md-td>
  <md-td>工作表 ID 不存在。请检查工作表 ID 是否填写</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310202</md-td>
  <md-td>Wrong Range</md-td>
  <md-td>`range` 参数填写错误。请检查 `range` 参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310245</md-td>
  <md-td>Wrong Float Image Token</md-td>
  <md-td>浮动图片 token 填写错误。请检查 `float_image_token` 参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310244</md-td>
  <md-td>Exist Float Image Id</md-td>
  <md-td>浮动图片 ID 已存在，请重新自定义 `float_image_id` 参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310243</md-td>
  <md-td>Wrong Float Image Id</md-td>
  <md-td>浮动图片 ID 错误，请确保 `float_image_id` 参数字符长度为 10，且由 0-9、a-z、A-Z 组合而成</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310211</md-td>
  <md-td>Wrong Sheet Id</md-td>
  <md-td>电子表格工作表的 ID 错误。请检查工作表的 ID</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310247</md-td>
  <md-td>Image Excess</md-td>
  <md-td>图片总数超出限制。单个电子表格最多支持放置 4,000 张不同 token 的图片，即表格内不重复的图片（包括浮动图片和单元格图片）总数不超过 4,000 张</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310246</md-td>
  <md-td>Wrong Float Image Value</md-td>
  <md-td>图片宽高或者偏移参数错误。请检查 `width`、`heigh`t、`offset_x` 和 `offset_y` 参数填写是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310218</md-td>
  <md-td>Locked Cell</md-td>
  <md-td>`range` 参数对应的单元格位置为保护范围。你可调用[删除保护范围](/ssl:ttdoc/ukTMukTMukTM/uYTM5YjL2ETO24iNxkjN)接口为该单元格删除保护范围或重新设置 `range` 参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310226</md-td>
  <md-td>Excess Limit</md-td>
  <md-td>超出限制，参考响应体中的错误提示</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310242</md-td>
  <md-td>In Mix state</md-td>
  <md-td>当前表格数据位于用户机房，正在将数据恢复到 SaaS 环境中，请稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1315203</md-td>
  <md-td>Server Error</md-td>
  <md-td>服务内部错误，请l联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310249</md-td>
  <md-td>Spreadsheet Deleted</md-td>
  <md-td>电子表格被删除，请恢复表格后重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




