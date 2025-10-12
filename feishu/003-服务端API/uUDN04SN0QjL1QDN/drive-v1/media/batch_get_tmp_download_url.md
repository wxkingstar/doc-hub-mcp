<!--
title: 获取素材临时下载链接
id: 6979562676003897372
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/batch_get_tmp_download_url
updatedAt: 1740053884000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/media/batch_get_tmp_download_url
-->
# 获取素材临时下载链接

该接口用于获取云文档中素材的临时下载链接。链接的有效期为 24 小时，过期失效。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=media&method=batch_get_tmp_download_url)

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

调用此接口之前，你需确保应用已拥有素材的下载权限。否则接口将返回 403 的 HTTP 状态码。参考[云空间常见问题](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq)第 3 点了解如何分享素材的下载权限给应用。更多云文档接口权限问题，参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN)。

## 注意事项

本接口仅支持下载云文档而非云空间中的资源文件。如要下载云空间中的资源文件，需调用[下载文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/download)接口。

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/medias/batch_get_tmp_download_url</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[特殊频控](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
            <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" support_app_types="custom,isv" tags="">查看、评论和导出多维表格</md-perm>
            <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
            <md-perm name="docs:doc:readonly" desc="查看、评论和导出文档" support_app_types="custom,isv" tags="">查看、评论和导出文档</md-perm>
            <md-perm name="docs:document.media:download" desc="下载云文档中的图片和附件" support_app_types="custom,isv" tags="">下载云文档中的图片和附件</md-perm>
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
</md-tbody>
</md-table>
:::

::: note
更多云文档接口权限问题，参考[常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN)。
:::

### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >file_tokens</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	素材文件的 token。获取方式如下所示：
* 新版文档：通过[获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)接口获取指定文件块（File Block）或图片块（Image Block）的 token，即为素材 token。
* 电子表格：通过[读取多个范围](/ssl:ttdoc/ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN)接口获取指定附件的 
 `fileToken`，即为素材的 token。
* 多维表格：通过[列出记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/list)接口获取指定附件的 `file_token`，即为素材的 token。

如需一次获取多个素材的下载链接，可多次传递本参数及素材的 token 值，格式如下：

`https://{url}?file_tokens={token1}&file_tokens={token2}`

其中：
- `file_tokens` 是参数名，可以多次传递
- `token1` 和 `token2` 为素材的实际 token 值
- 一次最多可传递 5 个素材的 token，但在 API 调试台仅支持传一个 token

**示例值**：boxcnrHpsg1QDqXAAAyachabcef
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >extra</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	拓展信息，如拥有高级权限的多维表格在下载素材时，需要添加额外的扩展信息作为 URL 查询参数鉴权。详情参考[extra 参数说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction)。未正确填写该参数的接口将返回 403 的 HTTP 状态码。

**示例值**：请参考 [extra 参数说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction)
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >tmp_download_urls</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >tmp_download_url\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	临时下载列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	素材的 token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tmp_download_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	素材的临时下载链接
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
        "tmp_download_urls": [
            {
                "file_token": "boxcnrHpsg1QDqXAAAyachabcef",
                "tmp_download_url": "https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ZDA3MzNiNmUwMjE2MGUzZmQ1OGZlOWYzMWQ4YmI0ZjdfMDYzOWNlZjgyMmI1MmY5NTUxZmM0MjJlYWIyMGVjOWZfSUQ6Njk3NjgzMTY0Mjc5OTI5MjQyMl8xNjI0NDMxMDY3OjE2MjQ1MTc0NjdfVjM"
            }
        ]
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
  <md-td>1061002</md-td>
  <md-td>params error.</md-td>
  <md-td>请检查请求参数是否正确。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




