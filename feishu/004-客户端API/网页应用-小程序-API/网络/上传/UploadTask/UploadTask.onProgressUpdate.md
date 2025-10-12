---
title: "UploadTask.onProgressUpdate"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/upload/uploadtask/onprogressupdate
---
最后更新于 2025-01-21

# UploadTask.onProgressUpdate(function callback)

`upoadFile`的调用结果在通过回调传递的同时会返回一个`uploadTask`对象，通过`onProgressUpdate`方法监听上传进度。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

无

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
progress | number | 上传进度
totalBytesSent | number | 已经上传的数据长度，单位 byte
totalBytesExpectedToSend | number | 预期需要上传的数据总长度，单位 byte

## 示例代码

```js
  const uploadTask = tt.uploadFile({
    "url": "https://cloudapi.bytedance.net/faas/services/tt594x/invoke/imgupload",
    "filePath": filePath,
    "name": "test.jpeg"
  })
  uploadTask.onProgressUpdate(function(res) {
    console.log("uploading")
    if (res.progress == 100) {
	  // upload complete
      console.log(res)
    }
  })
```

回调函数返回对象示例：

```json
{
    "totalBytesExpectedToSend": 118561,
    "totalBytesSent": 118561,
    "progress": 100
}
```
