---
title: "uploadFile"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/upload/uploadfile
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434091000
---
最后更新于 2025-01-21

# uploadFile

调用 uploadFile(Object object) 将本地文件上传到网络。

## 注意事项

- HTTP 请求方式为 `POST`。
- tt.uploadFile 的最大并发限制为 5 个。
- 传参字段的值为`""`、`undefined`、`null` 会被视为空，如果为非必传参数，则会命中接口定义中的默认值。不符合接口入参类型（例如，定义 string，但传入 object 或 number）会中断调用链路并执行 `fail` 回调。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fupload-file%2Fdownload-file)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
url | string | 是 | \- | 开发者服务器地址。  
**Notice**：**注意**：仅支持 HTTP/HTTPS 协议。
filePath | string | 是 | \- | 要上传文件资源的路径 (本地路径)。
name | string | 是 | \- | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容。
header | object | 否 | \- | HTTP 的请求头（Header）。Header 内 content-type 为 `multipart/form-data`，不可变更。  
**Notice**：**注意**：`header` 不支持设置 `referer`。
formData | object | 否 | \- | HTTP 请求中其他额外的 form data。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
data | string | 返回数据。
statusCode | number | 返回 HTTP 状态码。
errMsg | string | 错误信息。
trace | string | 请求 ID，用于请求问题的诊断和全链路追踪。

`fail`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
trace | string | 请求 ID，用于请求问题的诊断和全链路追踪。  
**Notice**：**注意**：飞书 [V4.7.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持输出该字段。

返回值 `uploadTask`，该对象的方法列表参见下表：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法。

方法 | 介绍
--- | ---
[onProgressUpdate(function callback)](https://open.feishu.cn/document/uYjL24iN/ugDNugDNugDN/uploadtask/onprogressupdate) | 监听上传进度。
[abort()](https://open.feishu.cn/document/uYjL24iN/ugDNugDNugDN/uploadtask/abort) | 中断请求任务。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fupload-file%2Fdownload-file)

</div> 

```js
  const uploadTask = tt.uploadFile({
    // 替换为需要上传的url
    "url": "https://www.bytedance.com/",
    "filePath": filePath,
    "name": "test.jpeg",
    "formData": {
      "param1": "value1",
      "param2": "value2"
    },
    success (res) {
	  // upload Start
      console.log(res)
    },
    fail (res) {
	  // uploadFile Failed
      console.log(res)
    }
  })
```

`success`返回对象示例：

```json
{
    "statusCode": 200,
    "data": "{\"error\":\"xxxx\"}",
    "trace": "021638203108547b7613bd1ebe5586ea6f58e17a92f1544eebbbb",
    "errMsg": "uploadFile:ok"
}
``` 

`fail`返回对象示例：

```json
{
  "errMsg": "uploadFile:fail timeout",
  "trace": "xxxxx"
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
