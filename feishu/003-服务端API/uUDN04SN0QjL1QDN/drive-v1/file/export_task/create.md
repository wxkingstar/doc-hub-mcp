<!--
title: 创建导出任务
id: 7089034521211191298
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/create
updatedAt: 1740477085000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/export_task/create
-->
# 创建导出任务

该接口用于创建导出文件的任务，并返回导出任务 ID。导出文件指将飞书文档、电子表格、多维表格导出为本地文件，包括 Word、Excel、PDF、CSV 格式。该接口为异步接口，需要继续调用[查询导出任务结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/get)接口获取导出结果。了解完整的导出步骤，参考[导出云文档概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/export-user-guide)。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=export_task&method=create)

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/export_tasks</md-td>
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
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="docs:document:export" desc="导出云文档" support_app_types="custom" tags="">导出云文档</md-perm>
            <md-perm name="drive:export:readonly" desc="导出云文档" support_app_types="custom" tags="">导出云文档</md-perm>
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
	<md-text type="field-name" >file_extension</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	将云文档导出为本地文件后，本地文件的扩展名。了解各类云文档支持导出的文件格式，参考[导出云文档概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/export-user-guide)。

**示例值**："csv"

**可选值有**：
<md-enum>
<md-enum-item key="docx" >Microsoft Word 格式</md-enum-item>
<md-enum-item key="pdf" >PDF 格式</md-enum-item>
<md-enum-item key="xlsx" >Microsoft Excel 格式</md-enum-item>
<md-enum-item key="csv" >CSV 格式</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	要导出的云文档的 token。获取方式参考 [如何获取云文档相关 token](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)。

**示例值**："Fm7osyjtMh5o7Ktrv32c73abcef"

**数据校验规则**：

- 最大长度：`27` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
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
	要导出的云文档的类型 。可通过云文档的链接判断。

**示例值**："sheet"

**可选值有**：
<md-enum>
<md-enum-item key="doc" >旧版飞书文档。支持导出扩展名为 docx 和 pdf 的文件。已不推荐使用。</md-enum-item>
<md-enum-item key="sheet" >飞书电子表格。支持导出扩展名为 xlsx 和 csv 的文件。</md-enum-item>
<md-enum-item key="bitable" >飞书多维表格。支持导出扩展名为 xlsx 和 csv 格式的文件。</md-enum-item>
<md-enum-item key="docx" >新版飞书文档。支持导出扩展名为 docx 和 pdf 格式的文件。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >sub_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	导出飞书电子表格或多维表格为 CSV 文件时，需传入电子表格工作表的 ID 或多维表格数据表的 ID：
- 电子表格可调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 接口获取返回的 `sheet_id` 的值作为该参数的值
- 多维表格可调用[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)接口获取返回的 `table_id` 的值作为该参数的值

**示例值**："6e5ed3"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "file_extension": "csv",
    "token": "Fm7osyjtMh5o7Ktrv32c73abcef",
    "type": "sheet",
    "sub_id": "6e5ed3"
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
	<md-text type="field-name" >ticket</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	导出任务的 ID
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
        "ticket": "6933093124755423251"
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
  <md-td>500</md-td>
  <md-td>1069901</md-td>
  <md-td>internal error</md-td>
  <md-td>服务内部错误。请联系[技术支持](https://applink.feishu.cn/client/helpdesk/open)</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1069902</md-td>
  <md-td>no permission</md-td>
  <md-td>当前访问身份没有文档阅读或编辑权限。请参考以下方式解决：
- 如果你使用的是 `tenant_access_token`，意味着当前应用没有文档阅读或编辑权限。你需通过云文档网页页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加文档权限。
- 如果你使用的是 `user_access_token`，意味着当前用户没有文档阅读或编辑权限。你需通过云文档网页页面右上方 **分享** 入口为当前用户添加文档权限。

了解具体操作步骤或其它添加权限方式，参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069904</md-td>
  <md-td>invalid param</md-td>
  <md-td>无效参数。请检查导出 CSV 文件时是否传入电子表格中工作表的 ID</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1069906</md-td>
  <md-td>docs deleted</md-td>
  <md-td>文档已被删除</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1069914</md-td>
  <md-td>invalid file token</md-td>
  <md-td>导出文档 token 不合法。参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)了解如何获取文档 token。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1069918</md-td>
  <md-td>file extension and  
 type mismatch</md-td>
  <md-td>导出文件类型与云文档类型不匹配</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>1069923</md-td>
  <md-td>too many requests</md-td>
  <md-td>请求发生限频，请降低请求频率并稍后重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

:::html
<md-table>
    <md-tr>
      <md-th style="width: 15%; text-align: left;">HTTP状态码</md-th>
      <md-th style="width: 15%; text-align: left;">错误码</md-th>
      <md-th style="width: 30%; text-align: left;">描述</md-th>
      <md-th style="width: 30%; text-align: left;">排查建议</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td >200</md-td>
      <md-td >600</md-td>
      <md-td>hybrid resource expired</md-td>
      <md-td>混合部署数据已转移到私有化机房，请稍后重试</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

其他错误码可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)


