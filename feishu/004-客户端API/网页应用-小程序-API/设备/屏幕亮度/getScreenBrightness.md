---
title: "getScreenBrightness"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/screen-brightness/get-screen-brightness
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737433043000
---
最后更新于 2025-01-21

# getScreenBrightness

getScreenBrightness(Object object) 用于获取屏幕亮度。
- iOS 端获取系统屏幕亮度。
- Android 端获取当前小程序屏幕亮度。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.42.0+ | V3.42.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fscreen-brightness%2Fscreen-brightness)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
value | number | 屏幕亮度值。取值范围：0 ~ 1，其中，`0` 最暗、`1` 最亮。  
**Notice**：**注意**：Android 端未设置屏幕亮度前，获取的数据为系统默认值，可能会大于 1。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fscreen-brightness%2Fscreen-brightness)
          预览网页应用

</div> 

```js
tt.getScreenBrightness({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`getScreenBrightness fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "getScreenBrightness:ok",
    "value": 0.8206081986427307
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
