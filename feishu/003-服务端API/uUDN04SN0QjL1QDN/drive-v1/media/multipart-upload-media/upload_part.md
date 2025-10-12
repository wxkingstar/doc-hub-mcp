<!--
title: 分片上传素材-上传分片
id: 6979562676003979292
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_part
updatedAt: 1725537089000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/media/multipart-upload-media/upload_part
-->
# 分片上传素材-上传分片

根据 [预上传](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare)接口返回的上传事务 ID 和分片策略上传对应的素材分片。上传完成后，你可调用 [分片上传素材（完成上传）](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_finish)触发完成上传。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=media&method=upload_part)

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/medias/upload_part</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
            <md-perm name="docs:document.media:upload" desc="上传图片和附件到云文档中" support_app_types="custom,isv" tags="">上传图片和附件到云文档中</md-perm>
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
<md-td>

**示例值**："multipart/form-data; boundary=---7MA4YWxkTrZu0gW"</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

::: note
更多云文档接口权限问题，参考[常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN)。
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
	<md-text type="field-name" >upload_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	分片上传事务的 ID。通过调用[分片上传素材（预上传）](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare)接口获取。

**示例值**："7111211691345512356"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >seq</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	块号，从 0 开始计数。

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	块的大小，单位为字节。

**示例值**：4194304
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >checksum</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材文件的 Adler-32 校验和

**示例值**："3248270248"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	素材文件分片的二进制内容

**示例值**：file binary
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例

```HTTP
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="upload_id";

7111211691345512356
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="seq";

0
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="size";

4194304
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="checksum";

3248270248
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file";
Content-Type: application/octet-stream

file binary
---7MA4YWxkTrZu0gW
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
  <md-td>1061001</md-td>
  <md-td>internal error.</md-td>
  <md-td>服务内部错误，包括超时，错误码没处理。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061002</md-td>
  <md-td>params error.</md-td>
  <md-td>请检查请求参数是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1061003</md-td>
  <md-td>not found.</md-td>
  <md-td>请确认对应资源是否存在。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1061004</md-td>
  <md-td>forbidden.</md-td>
  <md-td>请确认当前身份是否有对应上传节点的的权限，如用户是否有上传到指定doc的编辑权限。</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>1061005</md-td>
  <md-td>auth failed.</md-td>
  <md-td>请使用正确身份访问该接口。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1061006</md-td>
  <md-td>internal time out.</md-td>
  <md-td>服务内部超时，可稍后再试。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1061007</md-td>
  <md-td>file has been delete.</md-td>
  <md-td>请确认对应节点未被删除。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061008</md-td>
  <md-td>invalid file name.</md-td>
  <md-td>请检查文件名，当前文件名过长或者为空。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061021</md-td>
  <md-td>upload id expire.</md-td>
  <md-td>上传事务过期，请重头开始上传。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061041</md-td>
  <md-td>parent node has been deleted.</md-td>
  <md-td>请确认上传点未被删除。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061042</md-td>
  <md-td>parent node out of limit.</md-td>
  <md-td>在当前上传点上传过多素材，请更换上传点。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061043</md-td>
  <md-td>file size beyond limit.</md-td>
  <md-td>请检查文件长度以避免超出限制。具体限制请参考[飞书帮助中心](https://www.feishu.cn/hc/zh-CN/articles/360049067549)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061044</md-td>
  <md-td>parent node not exist.</md-td>
  <md-td>请确认上传点是否存在。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1061045</md-td>
  <md-td>can retry.</md-td>
  <md-td>内部可重试错误，请稍后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061109</md-td>
  <md-td>file name cqc not passed.</md-td>
  <md-td>请确保上传的文件和文件名合规。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061113</md-td>
  <md-td>file cqc not passed.</md-td>
  <md-td>请确保上传的文件和文件名合规。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061101</md-td>
  <md-td>file quota exceeded.</md-td>
  <md-td>租户容量超限，请确保租户有足够容量进行上传。</md-td>
</md-tr>


<md-tr>
  <md-td>202</md-td>
  <md-td>1062004</md-td>
  <md-td>cover generating.</md-td>
  <md-td>缩略图正在生成中，请稍后再试。</md-td>
</md-tr>


<md-tr>
  <md-td>202</md-td>
  <md-td>1062005</md-td>
  <md-td>file type not support cover.</md-td>
  <md-td>此文件类型不支持生成缩略图。</md-td>
</md-tr>


<md-tr>
  <md-td>202</md-td>
  <md-td>1062006</md-td>
  <md-td>cover no exist.</md-td>
  <md-td>缩略图正在生成中，请稍后再试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062007</md-td>
  <md-td>upload user not match.</md-td>
  <md-td>请确保当前请求身份和上传任务的身份为同一个。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062008</md-td>
  <md-td>checksum param Invalid.</md-td>
  <md-td>请确保文件/文件块的checksum正确。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062009</md-td>
  <md-td>the actual size is inconsistent with the parameter declaration size.</md-td>
  <md-td>实际传输的文件大小和参数说明的大小不符合一致。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062010</md-td>
  <md-td>block missing, please upload all blocks.</md-td>
  <md-td>部分文件分片缺失，请确保所有文件分片上传完成。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062011</md-td>
  <md-td>block num out of bounds.</md-td>
  <md-td>上传过多文件分片，请确保上传的为对应文件。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061547</md-td>
  <md-td>attachment parent-child relation number exceed.</md-td>
  <md-td>特指上传到文档的素材超出限制。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061061</md-td>
  <md-td>user quota exceeded.</md-td>
  <md-td>个人容量超限，请确保个人有足够容量进行上传。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1061073</md-td>
  <md-td>no scope auth.</md-td>
  <md-td>没有申请接口权限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062012</md-td>
  <md-td>file copying.</md-td>
  <md-td>文件正在拷贝中。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062013</md-td>
  <md-td>file damaged.</md-td>
  <md-td>文件拷贝失败。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1062014</md-td>
  <md-td>dedupe no support.</md-td>
  <md-td>不允许秒传。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062051</md-td>
  <md-td>client connect close.</md-td>
  <md-td>客户端断开连接。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062505</md-td>
  <md-td>parent node out of size.</md-td>
  <md-td>云空间中所有层级的节点总和超限。上限为 40 万个，请检查节点数量。了解更多，参考[云空间概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062506</md-td>
  <md-td>parent node out of depth.</md-td>
  <md-td>云空间目录深度超限制（15限制）。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1062507</md-td>
  <md-td>parent node out of sibling num.</md-td>
  <md-td>云空间中根目录或文件夹的单层节点超限。上限为 1500 个，你可通过将文件新建到不同文件夹中解决。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




