---
title: "DownloadTask.abort"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/download/downloadfile/abort
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434070000
---
最后更新于 2025-01-21

# DownloadTask.abort

`downloadFile`的调用结果在通过回调传递的同时会返回一个`downloadTask`对象，可以通过该对象的`abort`方法（`DownloadTask.abort()`）中断请求任务。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

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
const downloadTask2 = tt.downloadFile({"url":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F19100120461512E-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640079653&t=22aafb14cb145c11fc833022d61507c5"});
downloadTask2.abort(function(res) {
    console.log(JSON.stringify(res));
});
```
