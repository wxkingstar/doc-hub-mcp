---
title: "downloadFile"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/download/downloadfile
---
最后更新于 2025-01-21

# downloadFile

调用 downloadFile(Object object) 下载网络文件到本地临时目录。

## 注意事项

- HTTP 请求方式为 GET。
- tt.downloadFile 的最大并发限制为 5 个。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fdownload-file%2Fdownload-file)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
url | string | 是 | \- | 文件地址。示例值：https://open.feishu.com/a.txt
header | object | 是 | {} | 请求头（Header）。示例值：{\"Content-Type\": \"application/json\"}
filePath | string | 否 | \- | 指定文件下载后存储的路径 (本地路径)。格式示例为 `ttfile://temp/feishu.png` 或 `ttfile://user/feishu.png`，其中 `ttfile://temp/` 和 `ttfile://user/` 为下载目录，`feishu.png` 为文件名。更多详情可参见[文件系统](https://open.feishu.cn/document/uYjL24iN/uETOuETOuETO/file-system)。  
- 默认的下载目录为 `ttfile://temp/`  
- 示例值：ttfile://temp/feishu.png  
**Notice**：**注意**：飞书 [V3.43.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
tempFilePath | string | 文件本地路径.
statusCode | number | 返回 HTTP 状态码。
errMsg | string | 错误消息。
trace | string | 请求 ID，用于请求问题的诊断和全链路追踪。

`fail`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
tempFilePath | string | 文件本地路径。
statusCode | number | 返回 HTTP 状态码。
errMsg | string | 错误消息。

返回值 `downloadTask`，该对象的方法列表参见下表：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法。

方法 | 介绍
--- | ---
[onProgressUpdate](https://open.feishu.cn/document/uYjL24iN/ugDNugDNugDN/downloadfile/onprogressupdate) | 监听下载进度。
[abort](https://open.feishu.cn/document/uYjL24iN/ugDNugDNugDN/downloadfile/abort) | 中断请求任务。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fdownload-file%2Fdownload-file)

</div> 

```js
tt.downloadFile({
    "url": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F19100120461512E-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640079653&t=22aafb14cb145c11fc833022d61507c5",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`downloadFile fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
    "trace": "021637487932728d06e52699ed7c796bac157dc5fca6dde1vbbbb",
    "tempFilePath": "ttfile://temp/src=http___img.jj20.com_up_allimg_tp05_19100120461512E-0-lp.jpg&refer=http___img.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
    "statusCode": 200,
    "errMsg": "downloadFile:ok"
}
``` 

`fail`返回对象示例：
```json
{
    "errMsg": "downloadFile:fail 不支持的URL",
    "tempFilePath": "",
    "statusCode": "0"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
