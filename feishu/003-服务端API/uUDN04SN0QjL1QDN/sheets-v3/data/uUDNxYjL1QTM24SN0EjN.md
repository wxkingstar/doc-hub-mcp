<!--
title: 写入图片
id: 6907568073252585474
fullPath: /ukTMukTMukTM/uUDNxYjL1QTM24SN0EjN
updatedAt: 1741160307000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/data-operation/write-images
-->
# 写入图片

向电子表格某个工作表的单个指定单元格写入图片，支持传入图片的二进制流，支持多种图片格式。

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_image</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
      <md-dt-th style="width: 15%;">名称</md-dt-th>
      <md-dt-th style="width: 15%;">类型</md-dt-th>
      <md-dt-th style="width: 10%;">必填</md-dt-th>
      <md-dt-th>描述</md-dt-th>
    </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

    <md-dt-tr>
      <md-dt-td>range</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>是</md-dt-td>
      <md-dt-td>指定写入图片的单元格。格式为`<sheetId&gt;!&lt;开始单元格&gt;:&lt;结束单元格>`。其中：
- `sheetId` 为工作表 ID，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取
- `<开始单元格>:<结束单元格>` 用于指定单元格，开始单元格与结束单元格需保持一致，如：`A1:A1`。其中，数字表示行索引，字母表示列索引。如 `A1:A1` 表示该工作表第 1 行 A 列的单元格。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)</md-dt-td>
    </md-dt-tr>

    <md-dt-tr>
      <md-dt-td>image</md-dt-td>
      <md-dt-td>array&lt;byte&gt;</md-dt-td>
      <md-dt-td>是</md-dt-td>
      <md-dt-td>需要写入的图片的二进制流，支持 "PNG"、"JPEG"、"JPG"、"GIF"、"BMP"、"JFIF"、"EXIF"、 "TIFF"、"BPG"、"HEIC" 等图片格式。</md-dt-td>
    </md-dt-tr>

    <md-dt-tr>
      <md-dt-td>name</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>是</md-dt-td>
      <md-dt-td>写入的图片名称。

**注意**：该参数需加后缀名，如 `test.png`。支持的后缀名有："PNG"、"JPEG"、"JPG"、"GIF"、"BMP"、"JFIF"、"EXIF"、 "TIFF"、"BPG"、"HEIC"。不区分大小写。
        
        
        </md-dt-td>
    </md-dt-tr>

  </md-dt-tbody>
</md-dt-table>

:::
### 请求体示例
```json
{ 
    "range": "Q7PlXT!H7:H7", 
    "image": [137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,2,0,0,0,1,1,0,0,0,0,220,89,66,39,0,0,0,2,116,82,78,83,0,0,118,147,205,56,0,0,0,10,73,68,65,84,8,215,99,104,0,0,0,130,0,129,221,67,106,244,0,0,0,0,73,69,78,68,174,66,96,130],
    "name": "test.png"
}
```
### cURL 请求示例
```
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jabcef/values_image' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{ 
    "range": "Q7PlXT!H7:H7",
    "image": [137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,2,0,0,0,1,1,0,0,0,0,220,89,66,39,0,0,0,2,116,82,78,83,0,0,118,147,205,56,0,0,0,10,73,68,65,84,8,215,99,104,0,0,0,130,0,129,221,67,106,244,0,0,0,0,73,69,78,68,174,66,96,130],
    "name": "test.png"
}'
```
  
### 使用 Python 获取图片二进制流示例
  
```Python
def uploadImage():
    with open("./07.png", "rb") as f:
        url = "https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/X5assEfmnhepJtthAr4bY9Dlcxb/values_image"
        fb = f.read()
        misssing_padding = 4 - len(fb) % 4
        if misssing_padding:
            fb += b'=' * misssing_padding
        fb = base64.b64encode(fb).decode('utf-8')
        data = {
            "range": "CKu2Rq!A3:A3",
            "image": fb,
            "name": "a.png",
        }
        rsp = requests.post(url, data=json.dumps(data), headers={"Authorization": "Bearer 1nDxwUe_x5aGdZTDrefV5Xwk2hTt10BzMq20kk000Axr",
                                                                 "Content-Type": "application/json"})
        print(rsp.json())
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
<md-text type="field-name" >spreadsheetToken</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
电子表格的 token
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >updatedRange</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
写入图片的范围
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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



  </md-dt-tbody>
</md-dt-table>
:::
### 响应体示例
 
```json
{
    "code": 0,
    "data": {
        "revision": 80,
        "spreadsheetToken": "shtcngNygNfuqhxTBf588jabcef",
        "updateRange": "Q7PlXT!H7:H7"
    },
    "msg": "success"
}
```
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)
