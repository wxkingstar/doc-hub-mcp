<!--
title: 下载素材
id: 6979562676003913756
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download
updatedAt: 1735881802000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/media/download
-->
# 下载素材

下载各类云文档中的素材，例如电子表格中的图片。该接口支持通过在请求头添加`Range` 参数分片下载素材。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=media&method=download)

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


## 使用限制

该接口调用频率上限为 5 QPS，10000 次/天。

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/medias/:file_token/download</md-td>
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

### 部分下载

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
      <md-td>Range</md-td>
      <md-td>string</md-td>
      <md-td>否</md-td>
      <md-td>在 HTTP 请求头中，通过指定 `Range` 来下载素材的部分内容，单位是字节（byte）。该参数的格式为 `Range: bytes=start-end`，示例值为 `Range: bytes=0-1024`，表示下载第 0 个字节到第 1024 个字节之间的数据。</md-td>
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
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	素材文件的 token。获取方式如下所示：
* 新版文档：通过[获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)接口获取指定文件块（File Block）或图片块（Image Block）的 token，即为素材的 token。
* 电子表格：通过[读取多个范围](/ssl:ttdoc/ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN)接口获取指定附件的 
 `fileToken` 参数，即为素材的 token。
* 多维表格：通过[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口获取指定附件的 `file_token`，即为素材的 token。

**示例值**："boxcnrHpsg1QDqXAAAyachabcef"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >extra</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	拥有高级权限的多维表格在下载素材时，需要添加额外的扩展信息作为 URL 查询参数鉴权。详情参考[素材概述-extra 参数说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction)。

**示例值**：无
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

### 请求示例
以下代码展示如何使用 `cURL` 命令下载素材。并将素材命名为 local_file。
```bash
# 将 Token 为 file_token 的素材下载到本地，并命名为 local_file，注意 file_token、local_file 和 authorization 要替换为真实值
curl -i -X GET 'https://open.feishu.cn/open-apis/drive/v1/medias/{file_token}/download' -o "{local_file}" \
-H 'Authorization: {authorization}'
```



## 响应

### 响应头
:::html
<md-table>
  <md-thead>
      <tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 15%;">类型</md-th>
      <md-th >描述</md-th>
      </tr>
  </md-thead>
  <md-tbody>

<md-tr>
        <md-td>
        <md-text type="field-name" >content-type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
        素材文件的`MIME`
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >content-disposition</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
        文件名
        </md-td>
</md-tr>
  </md-tbody>
</md-table>
:::

HTTP状态码为 200 时，表示成功

返回文件二进制流

## 状态码

| HTTP 状态码 | 描述 |  
|---|---|---|
| 200 | 素材成功下载。返回文件二进制流。 |  
| 206 | 下载部分内容成功。接口将返回指定 Range 的部分文件的二进制流。 |  
|400 | 对于开启了高级权限的多维表格，你需确保已正确添加额外的扩展信息作为 URL 查询参数鉴权。详情参考[素材概述-extra 参数说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction)。|
| 403 | 没有下载素材的权限。要下载云文档中的素材，你需确保调用身份拥有文档资源权限。详情参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)开通权限。如果多维表格开启了高级权限，你需确保调用身份拥有可管理权限。 |  
| 404 | 素材 token 不存在或素材被删除。请检查 token 是否有误以及素材是否存在。 ||
| 500 | 服务端内部异常。请重试或联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。 |  

## 后续操作


接口调用成功后，你可以通过访问你在下载时指定的本地下载目录，对已下载的素材进行下一步操作。



