<!--
title: 上传素材
id: 6979562676003831836
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all
updatedAt: 1740463288000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/media/upload_all
-->
# 上传素材

将文件、图片、视频等素材上传到指定云文档中。素材将显示在对应云文档中，在云空间中不会显示。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=drive&version=v1&resource=media&method=upload_all)

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

- 素材大小不得超过 20 MB。要上传大于 20 MB 的文件，你需使用分片上传素材相关接口。详情参考[素材概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction)。
- 该接口调用频率上限为 5 QPS，10000 次/天。

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
      <md-td>https://open.feishu.cn/open-apis/drive/v1/medias/upload_all</md-td>
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
	<md-text type="field-name" >file_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	要上传的素材的名称

**示例值**："demo.jpeg"

**数据校验规则**：

- 最大长度：`250` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >parent_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	上传点的类型。你可根据上传的素材类型与云文档类型确定上传点类型。例如，要将一张图片插入到新版文档（文件类型为 `docx`）中，需指定上传点为 `docx_image `；要将一个附件上传到新版文档中，需指定上传点为 `docx_file`。

**示例值**："docx_image"

**可选值有**：
<md-enum>
<md-enum-item key="doc_image" >旧版文档图片</md-enum-item>
<md-enum-item key="docx_image" >新版文档图片</md-enum-item>
<md-enum-item key="sheet_image" >电子表格图片</md-enum-item>
<md-enum-item key="doc_file" >旧版文档文件</md-enum-item>
<md-enum-item key="docx_file" >新版文档文件</md-enum-item>
<md-enum-item key="sheet_file" >电子表格文件</md-enum-item>
<md-enum-item key="vc_virtual_background" >vc 虚拟背景（灰度中，暂未开放）</md-enum-item>
<md-enum-item key="bitable_image" >多维表格图片</md-enum-item>
<md-enum-item key="bitable_file" >多维表格文件</md-enum-item>
<md-enum-item key="moments" >同事圈（灰度中，暂未开放）</md-enum-item>
<md-enum-item key="ccm_import_open" >云文档导入文件</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >parent_node</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	上传点的 token，即要上传的云文档的 token，用于指定素材将要上传到的云文档或位置。参考[素材概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction)了解上传点类型与上传点 token 的对应关系
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
	文件的大小，单位为字节

**示例值**：1024

**数据校验规则**：

- 最大值：`20971520`
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
	文件的 Adler-32 校验和

**示例值**："3248270248"
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
	以下场景的上传点需通过该参数传入素材所在云文档的 token。extra 参数的格式为`"{\"drive_route_token\":\"素材所在云文档的 token\"}"`。详情参考[素材概述-extra 参数说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction#3b8635d3)。


**示例值**："{\"drive_route_token\":\"doxcnXgNGAtaAraIRVeCfmabcef\"}"
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
	文件的二进制内容

**示例值**：file binary
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

### cURL示例
```
curl --location --request POST 'https://open.feishu.cn/open-apis/drive/v1/medias/upload_all' \
--header 'Authorization: Bearer t-43b270c035ddffdcf79c9eb548d06318ca4abcef' \
--form 'file_name="demo.jpeg"' \
--form 'parent_type="doc_image"' \
--form 'parent_node="doccnFivLCfJfblZjGZtxgabcef"' \
--form 'size="1024"' \
--form 'file=@"/Path/demo.jpeg"'
--form 'extra="{\"drive_route_token\":\"doxcnXgNGAtaAraIRVeCfmabcef\"}"'
```

### Python示例
```python
import os
import requests
from requests_toolbelt import MultipartEncoder

def upload_media():
    file_path = "path/demo.jpeg"
    file_size = os.path.getsize(file_path)
    url = "https://open.feishu.cn/open-apis/drive/v1/medias/upload_all"
    form = {'file_name': 'demo.jpeg',
            'parent_type': 'doc_image',
            'parent_node': 'doccnFivLCfJfblZjGZtxgabcef',
            'size': str(file_size),
            'file': (open(file_path, 'rb'))}  
    multi_form = MultipartEncoder(form)
    headers = {
        'Authorization': 'Bearer t-e13d5ec1954e82e458f3ce04491c54ea8c9abcef',  ## 获取tenant_access_token, 需要替换为实际的token
    }
    headers['Content-Type'] = multi_form.content_type
    response = requests.request("POST", url, headers=headers, data=multi_form)

if __name__ == '__main__':
    upload_media()
```



### 请求体示例

```HTTP
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file_name";

demo.jpeg
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="parent_type";

docx_image
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="parent_node";


---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="size";

1024
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="checksum";

3248270248
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="extra";

{\"drive_route_token\":\"doxcnXgNGAtaAraIRVeCfmabcef\"}
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	素材文件的 token。
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
        "file_token": "boxcnrHpsg1QDqXAAAyachabcef"
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
  <md-td>当前调用身份没有文件或文件夹的阅读或编辑等权限。请参考以下方式解决：

- 若上传素材，请确保当前调用身份具有目标云文档的编辑权限
- 若上传文件，请确保当前调用身份具有文件夹的编辑权限
- 若对文件或文件夹进行增删改等操作，请确保调用身份具有足够文档权限：
    - 对于新建文件接口，调用身份需要有目标文件夹的编辑权限
    - 对于复制文件接口，调用身份需要有文件的阅读或编辑权限、并且具有目标文件夹的编辑权限
    - 对于移动文件接口，调用身份需要有被移动文件的可管理权限、被移动文件所在位置的编辑权限、目标位置的编辑权限
    - 对于删除文件接口，调用身份需要具有以下两种权限之一：
        - 该应用或用户是文件所有者并且具有该文件所在父文件夹的编辑权限
        - 该应用或用户并非文件所有者，但是该文件所在父文件夹的所有者或者拥有该父文件夹的所有权限（full access）

了解开通权限步骤，参考[如何为应用开通云文档相关资源的权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app)。</md-td>
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
  <md-td>请检查文件长度以避免超出限制。[具体限制请参考](https://www.feishu.cn/hc/zh-CN/articles/360049067549)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1061044</md-td>
  <md-td>parent node not exist.</md-td>
  <md-td>`parent_node` 不存在。请确认上传点 token 是否有误：
- 对于上传文件接口，请参考[文件夹 token 获取方式](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/folder-overview#-717d325)确认是否填写了正确的文件夹 token
- 对于上传素材接口，请参考[上传点类型和上传点 token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/introduction#cc82be3c) 确认 `parent_node` 是否填写正确</md-td>
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




