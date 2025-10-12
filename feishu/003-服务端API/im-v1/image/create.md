<!--
title: 上传图片
id: 6946222931479445505
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create
updatedAt: 1724222423000
source: https://open.feishu.cn/document/server-docs/im-v1/image/create
-->
# 上传图片

调用本接口将图片上传至飞书开放平台，支持上传 JPG、JPEG、PNG、WEBP、GIF、BMP、ICO、TIFF、HEIC 格式的图片，但需要注意 TIFF、HEIC 上传后会被转为 JPG 格式。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=image&method=create)

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

## 使用场景

如果需要发送图片消息，或者将图片作为头像，则需要先调用本接口将图片上传至开放平台，平台会返回一个图片标识（image_key），后续使用该 Key 值调用其他 API。例如：

- [发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)时，如果需要发送图片，则需要先调用本接口上传图片（上传时图片类型需要选择 **用于发送消息**），并使用返回结果中的 image_key 发送图片消息。
- [创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)时，如果需要设置用户头像，则需要先调用本接口将头像上传（上传时图片类型需要选择 **用于设置头像**），并使用返回结果中的 image_key 设置头像。

## 前提条件

应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。

## 使用限制

- 上传的图片大小不能超过 10 MB，且不支持上传大小为 0 的图片。
- 上传图片的分辨率限制：
	- GIF 图片分辨率不能超过 2000 x 2000，其他图片分辨率不能超过 12000 x 12000。
	- 用于设置头像的图片分辨率不能超过 4096 x 4096。

如需上传高分辨率图片，可使用[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create)接口，将图片作为文件进行上传。注意该方式不支持将图片文件设置为头像。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/images</md-td>
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
	<md-text type="field-name" >image_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	图片类型

**示例值**："message"

**可选值有**：
<md-enum>
<md-enum-item key="message" >用于发送消息</md-enum-item>
<md-enum-item key="avatar" >用于设置头像</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >image</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >file</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	图片内容。传值方式可以参考请求体示例。

**注意**：

- 上传的图片大小不能超过 10 MB，也不能上传大小为 0 的图片。
- 分辨率限制：
	- GIF 图片分辨率不能超过 2000 x 2000，其他图片分辨率不能超过 12000 x 12000。
	- 用于设置头像的图片分辨率不能超过 4096 x 4096。

**示例值**：二进制文件
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例

```HTTP
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="image_type";

message
---7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="image";
Content-Type: application/octet-stream

二进制文件
---7MA4YWxkTrZu0gW
```

**cURL示例**

```
curl --location --request POST 'https://open.feishu.cn/open-apis/im/v1/images' \
--header 'Authorization: Bearer t-39eec8560faa3dded7971873eb649fd40e70e0f1' \
--header 'Content-Type: multipart/form-data' \
--form 'image_type="message"' \
--form 'image=@"/path/image.jpg"'
```

**HTTP示例**
```
POST /open-apis/im/v1/images HTTP/1.1
Host: open.feishu.cn
Authorization: Bearer t-ddf4732fda4aa8a8b1639ee42e8477001d8d5f7c
Content-Length: 285
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="image_type"

message
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="image"; filename="image.jpg"
Content-Type: image/jpeg

(data)
----WebKitFormBoundary7MA4YWxkTrZu0gW
```

**Python示例代码**
```
import requests
from requests_toolbelt import MultipartEncoder
# 输入pip install requests_toolbelt 安装依赖库

def uploadImage():
    url = "https://open.feishu.cn/open-apis/im/v1/images"
    form = {'image_type': 'message',
            'image': (open('path/testimage.png', 'rb'))}  # 需要替换具体的path 
    multi_form = MultipartEncoder(form)
    headers = {
        'Authorization': 'Bearer t-xxx',  ## 获取tenant_access_token, 需要替换为实际的token
    }
    headers['Content-Type'] = multi_form.content_type
    response = requests.request("POST", url, headers=headers, data=multi_form)
    print(response.headers['X-Tt-Logid'])  # for debug or oncall
    print(response.content)  # Print Response

if __name__ == '__main__':
    uploadImage()
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
	<md-text type="field-name" >image_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	图片的 Key
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
    "data": {
        "image_key": "img_v2_xxx"
    },
    "msg": "success"
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
  <md-td>应用信息被停写，请稍后再试。</md-td>
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
  <md-td>234011</md-td>
  <md-td>Can't regonnize the image format.</md-td>
  <md-td>不支持的图片格式。目前仅支持上传 JPG、JPEG、PNG、WEBP、GIF、BMP、ICO、TIFF、HEIC 格式的图片。

</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234039</md-td>
  <md-td>Image resolution exceeds limit.</md-td>
  <md-td>分辨率超出限制。

- GIF 图片分辨率不能大于 2000 x 2000
- 其他图片分辨率不能大于 12000 x 12000
- 用于设置头像的图片分辨率不能超过 4096 x 4096

如有需要，请使用[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create)接口以文件形式上传高分辨率图片。</md-td>
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


