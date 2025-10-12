<!--
title: 创建电子表格
id: 6969763153149476865
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/create
updatedAt: 1746601146000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/spreadsheet/create
-->
# 创建电子表格

在云空间指定目录下创建电子表格。可自定义表格标题。不支持带内容创建表格。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=sheets&version=v3&resource=spreadsheet&method=create)

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
要基于模板创建电子表格，可先获取模板电子表格的 `spreadsheet_token` 作为文件 token，再调用[复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)接口创建电子表格。
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
      <md-td>https://open.feishu.cn/open-apis/sheets/v3/spreadsheets</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="sheets:spreadsheet:create" desc="创建电子表格" support_app_types="custom,isv" tags="">创建电子表格</md-perm>
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
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	表格标题

**示例值**："Sales sheet"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >folder_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文件夹 token。你可通过以下两种方式获取文件夹的 token：
- 文件夹的 URL：https://sample.feishu.cn/drive/folder/==fldbcO1UuPz8VwnpPx5a92abcef==
- 调用开放平台接口获取：
    - 调用[获取我的空间（root folder）元数据](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)接口获取根目录（即根文件夹）的 token。
    - 继续调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)接口，获取根目录下文件夹的 token。


**提示**：要在知识库中创建电子表格，你需调用[创建知识空间节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/create)接口，并选择表格（sheet）类型。

**示例值**："fldbcO1UuPz8VwnpPx5a92abcef"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "title": "Sales sheet",
    "folder_token": "fldbcO1UuPz8VwnpPx5a92abcef"
}
</md-code-json>
:::

### cURL 请求示例

```bash
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v3/spreadsheets' \
--header 'Authorization: Bearer u-3iqkd6KWzRLzNdXfeuCMEb' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"sales sheet",
    "folder_token":"fldbcO1UuPz8VwnpPx5a92abcef"
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
	<md-text type="field-name" >spreadsheet</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >spreadsheet</md-text>
	</md-dt-td>
	<md-dt-td>
	电子表格的基础信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	电子表格标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >folder_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件夹 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	电子表格的 URL 链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >spreadsheet_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	电子表格 token
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
        "spreadsheet": {
            "title": "Sales sheet",
            "folder_token": "fldbcO1UuPz8VwnpPx5a92abcef",
            "url": "https://example.feishu.cn/sheets/Iow7sNNEphp3WbtnbCscPqabcef",
            "spreadsheet_token": "Iow7sNNEphp3WbtnbCscPqabcef"
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
  <md-td>500</md-td>
  <md-td>1315203</md-td>
  <md-td>Server Error</md-td>
  <md-td>服务内部错误，[详询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310204</md-td>
  <md-td>Wrong Request Body</md-td>
  <md-td>检查请求体参数, 参考响应体中的错误提示</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1310213</md-td>
  <md-td>Permission Fail</md-td>
  <md-td>当前调用身份没有电子表格的阅读（获取相关接口）或编辑（创建、更新等相关接口）权限。请参考以下方式解决：
- 如果你使用的是 `tenant_access_token`，意味着当前应用没有电子表格的阅读或编辑权限。你需通过电子表格网页页面右上方 **「...」** -> **「...更多」** ->**「添加文档应用」** 入口为应用添加权限。

    **说明**：在 **添加文档应用** 前，你需确保目标应用至少开通了一个云文档 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。

   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&maxWidth=550&width=3278)

- 如果你使用的是 `user_access_token`，意味着当前用户没有电子表格的阅读或编辑权限。你需通过电子表格网页页面右上方 **分享** 入口为当前用户添加权限。

  ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e052d3bac56f9441296ae22e2969d63_a2DEYrJup8.png?height=278&maxWidth=550&width=1383)

了解具体操作步骤或其它添加权限方式，参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。</md-td>
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
  <md-td>400</md-td>
  <md-td>1310226</md-td>
  <md-td>Excess Limit</md-td>
  <md-td>超出限制，参考响应体中的错误提示</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




