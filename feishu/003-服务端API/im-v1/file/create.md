<!--
title: 上传文件
id: 6946222931479461889
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create
updatedAt: 1724222424000
source: https://open.feishu.cn/document/server-docs/im-v1/file/create
-->
# 上传文件

调用该接口将本地文件上传至开放平台，支持上传音频、视频、文档等文件类型。上传后接口会返回文件的 Key，使用该 Key 值可以调用其他 OpenAPI。例如，调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口，发送文件。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=file&method=create)

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

应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。

## 使用限制

文件大小不得超过 30 MB，且不允许上传空文件。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/files</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="im:resource" desc="获取与上传图片或文件资源 " support_app_types="custom,isv" tags="">获取与上传图片或文件资源 </md-perm>
            <md-perm name="im:resource:upload" desc="上传文件V2" support_app_types="custom,isv" tags="history,offline">上传文件V2</md-perm>
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

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

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
	<md-text type="field-name" >file_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	待上传的文件类型

**示例值**："mp4"

**可选值有**：
<md-enum>
<md-enum-item key="opus" >OPUS 音频文件。其他格式的音频文件，请转为 OPUS 格式后上传。可使用 ffmpeg 转换格式：`ffmpeg -i  SourceFile.mp3 -acodec libopus -ac 1 -ar 16000 TargetFile.opus`</md-enum-item>
<md-enum-item key="mp4" >MP4 格式视频文件</md-enum-item>
<md-enum-item key="pdf" >PDF 格式文件</md-enum-item>
<md-enum-item key="doc" >DOC 格式文件</md-enum-item>
<md-enum-item key="xls" >XLS 格式文件</md-enum-item>
<md-enum-item key="ppt" >PPT 格式文件</md-enum-item>
<md-enum-item key="stream" >stream 格式文件。若上传文件不属于以上枚举类型，可以使用 stream 格式</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


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
	带后缀的文件名

**示例值**："测试视频.mp4"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >duration</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文件的时长（视频、音频），单位：毫秒。不传值时无法显示文件的具体时长。

**示例值**：3000
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
	文件内容，具体的传值方式可参考请求体示例。

**注意**：文件大小不得超过 30 MB，且不允许上传空文件。

**示例值**：二进制文件
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例

```HTTP
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file_type";

mp4
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file_name";

测试视频.mp4
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="duration";

3000
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file";
Content-Type: application/octet-stream

二进制文件
---7MA4YWxkTrZu0gW
```

:::note
以下示例代码中需要自行替换文件路径和鉴权Token
:::

**cURL示例**
```
curl --location --request POST 'https://open.feishu.cn/open-apis/im/v1/files' \
--header 'Authorization: Bearer t-39eec8560faa3dded7971873eb649fd40e70e0f1' \
--form 'file_type="mp4"' \
--form 'file_name="测试视频.mp4"' \
--form 'duration="3000"' \
--form 'file=@"/path/测试视频.mp4"'
```

**HTTP示例**
```
POST /open-apis/im/v1/files HTTP/1.1
Host: open.feishu.cn
Authorization: Bearer t-ddf4732fda4aa8a8b1639ee42e8477001d8d5f7c
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Length: 471

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file_type"

mp4
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="测试视频.mp4"
Content-Type: <Content-Type header here>

(data)
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="duration"

3000
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file_name"

测试视频.mp4
----WebKitFormBoundary7MA4YWxkTrZu0gW
```

**Python请求示例**
```
import requests
from requests_toolbelt import MultipartEncoder
# 请注意使用时替换文件path和Authorization
def upload():
  url = "https://open.feishu.cn/open-apis/im/v1/files"
  form = {'file_type': 'stream',
          'file_name': 'text.txt',
          'file':  ('text.txt', open('path/text.txt', 'rb'), 'text/plain')} # 需要替换具体的path  具体的格式参考  https://www.w3school.com.cn/media/media_mimeref.asp
  multi_form = MultipartEncoder(form)
  headers = {
    'Authorization': 'Bearer xxx', ## 获取tenant_access_token, 需要替换为实际的token
  }
  headers['Content-Type'] = multi_form.content_type
  response = requests.request("POST", url, headers=headers, data=multi_form)
  print(response.headers['X-Tt-Logid']) # for debug or oncall
  print(response.content) # Print Response
# Press the green button in the gutter to run the script.

if __name__ == '__main__':
    upload()
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
	<md-text type="field-name" >file_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件的 Key
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
        "file_key": "file_456a92d6-c6ea-4de4-ac3f-7afcf44ac78g"
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
  <md-td>232096</md-td>
  <md-td>Meta writing has stopped, please try again later.</md-td>
  <md-td>应用信息被停写，请稍后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234001</md-td>
  <md-td>Invalid request param.</md-td>
  <md-td>请求参数无效，请根据接口文档描述检查请求参数是否正确。</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>234002</md-td>
  <md-td>Unauthorized.</md-td>
  <md-td>接口鉴权失败，请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234006</md-td>
  <md-td>The file size exceed the max value.</md-td>
  <md-td>资源大小超出限制。
- 文件限制：不超过 30 MB
- 图片限制：不超过 10 MB</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234007</md-td>
  <md-td>App does not enable bot feature.</md-td>
  <md-td>应用没有启用机器人能力。启用方式参见[如何启用机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234010</md-td>
  <md-td>File's size can't be 0.</md-td>
  <md-td>请勿上传大小为 0 的文件。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234041</md-td>
  <md-td>Tenant master key has been deleted, please contact the tenant administrator.</md-td>
  <md-td>租户加密密钥被删除，请联系租户管理员。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234042</md-td>
  <md-td>Hybrid deployment tenant storage error, such as full storage space, please contact tenant administrator.</md-td>
  <md-td>请求出现混部租户存储错误，如存储空间已满等，请联系租户管理员或[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


