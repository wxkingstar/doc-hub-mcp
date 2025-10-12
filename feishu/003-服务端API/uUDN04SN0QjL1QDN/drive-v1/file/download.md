<!--
title: 下载文件
id: 6979562676003946524
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/download
updatedAt: 1744787717000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/download/download
-->
# 下载文件

下载云空间中的文件，如 PDF 文件。不包含飞书文档、电子表格以及多维表格等在线文档。该接口支持通过在请求头添加 `Range` 参数分片下载部分文件。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=file&method=download)

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

调用此接口之前，你需确保应用已拥有文件的下载权限。否则接口将返回 403 的 HTTP 状态码。参考[云空间常见问题](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq)第五点了解如何分享文件的下载权限给应用。更多云文档接口权限问题，参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN)。

## 注意事项

本接口仅支持下载云空间中的资源文件。要下载云文档中的素材（如图片、附件等），需调用[下载素材](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download)接口。

## 使用限制

该接口调用频率上限为 5 QPS，10000 次/天。否则会返回 1061045 错误码，可通过稍后重试解决。

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/files/:file_token/download</md-td>
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
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
            <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
            <md-perm name="drive:file:download" desc="下载云空间下的文件" support_app_types="custom,isv" tags="">下载云空间下的文件</md-perm>
            <md-perm name="drive:file:readonly" desc="查看和下载云空间中的文件" support_app_types="custom,isv" tags="">查看和下载云空间中的文件</md-perm>
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
      <md-td>在 HTTP 请求头中，通过指定 `Range` 来下载文件的部分内容，单位是字节（byte）。该参数的格式为 `Range: bytes=start-end`，示例值为 `Range: bytes=0-1024`，表示下载第 0 个字节到第 1024 个字节之间的数据。</md-td>
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
	文件的 token，获取方式见[文件概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/file-overview)。

**示例值**："boxcnabCdefgabcef"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

### 请求示例
以下代码示例展示如何使用 `cURL` 命令下载文件，并将文件命名为 local_file。
```bash
# 将 Token 为 file_token 的云空间中的文件下载到本地，并命名为 local_file，注意 file_token、local_file 和 authorization 要替换为真实值
curl -i -X GET 'https://open.feishu.cn/open-apis/drive/v1/files/{file_token}/download' -o "{local_file}" \
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
        <md-text type="field-name" >Content-Type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
        文件的`MIME`，比如：`application/vnd.openxmlformats-officedocument.wordprocessingml.document`
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >Content-Disposition</md-text>
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
| 200 | 文件成功下载。返回文件二进制流。 |  
| 206 | 下载部分内容成功。接口将返回指定 Range 的部分文件的二进制流。 |  
| 403 | 没有下载文件的权限。要下载文件，你需确保调用身份拥有文档资源权限。详情参考[云文档常见问题 3](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)开通权限。 |  
| 404 | 文件 token 不存在或文件被删除。请检查 token 是否有误以及文件是否存在。注意放置在文件夹和知识库中的文件，其 token 的获取方式不同，详情参考[文件概述-文件 token 获取方式](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/file-overview#2b224832)。 ||
| 500 | 服务端内部异常。请重试或联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。 |  

## 后续操作
接口调用成功后，你可以通过访问你在下载时指定的本地下载目录，对已下载的文件进行下一步操作。




