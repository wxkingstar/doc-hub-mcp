---
title: "RequestTask.abort"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/initiating-request/requesttask/abort
---
最后更新于 2025-01-21

# RequestTask.abort

调用 RequestTask.abort() 中断请求任务。

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
try {
    const requestTask = tt.request({"url":"https://www.toutiao.com","data":{"noncestr":1637496519175},"header":{"content-type":"application/json"},"method":"GET","dataType":"json","responseType":"text"});
    requestTask.abort();
} catch (error) {
    console.log(`abort fail: ${JSON.stringify(error)}`);
}
```
