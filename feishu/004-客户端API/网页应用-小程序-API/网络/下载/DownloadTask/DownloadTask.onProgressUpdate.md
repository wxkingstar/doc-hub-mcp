---
title: "DownloadTask.onProgressUpdate"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/download/downloadfile/onprogressupdate
---
最后更新于 2025-01-21

# DownloadTask.onProgressUpdate(function callback)

`downLoadFile`的调用结果在通过回调传递的同时会返回一个`downloadTask`对象，通过`onProgressUpdate`方法监听下载进度。

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
progress | number | 下载进度
totalBytesWritten | number | 已经下载的数据长度，单位 byte
totalBytesExpectedToWrite | number | 预期需要下载的数据总长度，单位 byte

## 示例代码

```js
const downloadTask = tt.downloadFile({"url":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F19100120461512E-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640079653&t=22aafb14cb145c11fc833022d61507c5"});
downloadTask.onProgressUpdate(function(res) {
    console.log(JSON.stringify(res));
});
```

回调函数返回对象示例：

```json
{
    "totalBytesWritten": 208788,
    "progress": 100,
    "totalBytesExpectedToWrite": 208788
}
```
