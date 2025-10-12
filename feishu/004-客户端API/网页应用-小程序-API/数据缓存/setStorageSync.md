---
title: "setStorageSync"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/cache/setstoragesync
---
最后更新于 2025-01-21

# setStorageSync

调用 setStorageSync(string key, type data) 以键值对的形式设置本地缓存数据。

## 注意事项

单个 key 允许存储的最大数据长度为 1 MB，所有数据存储上限为 10 MB。同时，受用户设备存储空间、缓存清理等机制的限制，可能会导致信息丢失，因此请不要将重要数据存放在本地数据缓存中。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fstorage%2Fstorage)
网页应用 | **x** | **x** | **x** | **x** | /

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
key | string | 是 | \- | 键名。最小长度为 1 字符。示例值：name
data | [本地缓存数据类型](https://open.feishu.cn/document/uYjL24iN/uMTOz4yM5MjLzkzM) | 否 | undefined | 键名对应的数据。示例值：DemoName

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
     [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fstorage%2Fstorage)

</div> 

```js
try {
    tt.setStorageSync("name", "DemoName");
} catch (error) {
    console.log(`setStorageSync fail: ${JSON.stringify(error)}`);
}
```
