---
title: "UploadTask.abort"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/upload/uploadtask/abort
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434091000
---
最后更新于 2025-01-21

# UploadTask.abort()

`uplaodFile`调用结果在通过回调传递的同时会返回一个`uploadTask`对象，可以通过该对象的`abort`方法中断请求任务。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

无

## 输出

无

## 示例代码

```js
  const uploadTask = tt.uploadFile({
    "url": "https://cloudapi.bytedance.net/faas/services/tt594x/invoke/imgupload",
    "filePath": filePath,
    "name": "test.jpeg"
  })
  uploadTask.onProgressUpdate(function(res) {
    console.log("uploading")
    console.log(res)
    uploadTask.abort()
  })
```
