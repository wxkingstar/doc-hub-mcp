---
title: "clearStorageSync"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/cache/clearstoragesync
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434433000
---
最后更新于 2025-01-21

# clearStorageSync

调用 clearStorageSync() 清理全部本地缓存数据。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fstorage%2Fstorage)
网页应用 | **x** | **x** | **x** | **x** | /

## 输入
无

## 输出
无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
      [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fstorage%2Fstorage)

</div> 

```js
try {
    tt.clearStorageSync();
} catch (error) {
    console.log(`clearStorageSync fail: ${JSON.stringify(error)}`);
}
```
