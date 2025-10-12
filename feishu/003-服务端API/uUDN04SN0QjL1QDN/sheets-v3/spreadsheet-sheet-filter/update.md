<!--
title: 更新筛选
id: 6966945328390684674
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/update
updatedAt: 1722417437000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/spreadsheet-sheet-filter/update
-->
# 更新筛选

在电子表格工作表筛选范围中，更新指定列的筛选条件。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=sheets&version=v3&resource=spreadsheet.sheet.filter&method=update)

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PUT</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[20 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
	工作表 ID，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取。

**示例值**："8fe9d6"
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
	<md-text type="field-name" >col</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	指定要更新筛选条件的列。

**示例值**："G"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >condition</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >condition</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	设置筛选条件。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >filter_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	筛选类型，枚举值如下所示。了解更多，参考[筛选指南](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/filter-user-guide)。
- multiValue ：多值筛选
- number ：数字筛选
- text ：文本筛选
- color ：颜色筛选
- clear ：清除某列的筛选条件

**示例值**："text"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >compare_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	比较类型。不同筛选类型的比较类型的枚举值不同，详情参考[筛选指南](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/filter-user-guide)。

**示例值**："beginsWith"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >expected</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	筛选参数。不同筛选类型的筛选参数限制不同，详情参考[筛选指南](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/filter-user-guide)。

**示例值**：["a"]
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "col": "G",
    "condition": {
        "filter_type": "text",
        "compare_type": "beginsWith",
        "expected": [
            "a"
        ]
    }
}
</md-code-json>
:::

### cURL 请求示例

```BASH
curl --location --request PUT 'https://open.feishu.cn/open-apis/sheets/v3/spreadsheets/shtcnSUVpFeJ7Q2yVN9/sheets/6e2914/filter' \
--header 'Authorization: Bearer t-719d578dc63f6bd37e30cdb0394798a709070fec' \
--header 'Content-Type: application/json' \
--data-raw '{
    "col": "G",
    "condition": {
        "filter_type": "text",
        "compare_type": "beginsWith",
        "expected": ["a"]
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


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {}
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
  <md-td>1310234</md-td>
  <md-td>Marshal Error</md-td>
  <md-td>服务内部错误，[详询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310235</md-td>
  <md-td>Retry Later</md-td>
  <md-td>请求超时，一般是由于服务器任务过多。请稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1315203</md-td>
  <md-td>Server Error</md-td>
  <md-td>服务内部错误，[详询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1315201</md-td>
  <md-td>Server Error</md-td>
  <md-td>服务内部错误，[详询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310226</md-td>
  <md-td>Excess Limit</md-td>
  <md-td>超出限制。请参考响应体中的错误提示排查</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310215</md-td>
  <md-td>Sheet Id Not Found</md-td>
  <md-td>工作表未找到。检查工作表的 ID 是否正确。获取方式见[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310214</md-td>
  <md-td>SpreadSheet Not Found</md-td>
  <md-td>表格未找到。检查表格 token 是否正确。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310218</md-td>
  <md-td>Locked Cell</md-td>
  <md-td>筛选范围被保护。请[取消保护范围](/ssl:ttdoc/ukTMukTMukTM/uYTM5YjL2ETO24iNxkjN)后再筛选</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310213</md-td>
  <md-td>Permission Fail</md-td>
  <md-td>没有文档相应权限。参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN)问题 2 和问题 3 开通应用权限和文档权限</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310206</md-td>
  <md-td>Empty Sheet Id</md-td>
  <md-td>工作表 ID 为空。请填写工作表的 ID。获取方式见[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310229</md-td>
  <md-td>Wrong URL Param</md-td>
  <md-td>URL 中的路径参数错误。请检查路径参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310202</md-td>
  <md-td>Wrong Range</md-td>
  <md-td>区域范围错误。请检查 range 参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310236</md-td>
  <md-td>Wrong Filter Value</md-td>
  <md-td>筛选条件错误。请检查筛选条件</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310211</md-td>
  <md-td>Wrong Sheet Id</md-td>
  <md-td>工作表 ID 错误。请检查工作表的 ID 是否正确。获取方式见[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310242</md-td>
  <md-td>In Mix state</md-td>
  <md-td>当前表格数据位于用户机房，正在将数据恢复到 SaaS 环境中，请稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310249</md-td>
  <md-td>Spreadsheet Deleted</md-td>
  <md-td>表格已被删除。请恢复表格后重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




