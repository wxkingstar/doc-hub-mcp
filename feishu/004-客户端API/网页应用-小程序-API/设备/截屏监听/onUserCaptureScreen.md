---
title: "onUserCaptureScreen"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/user-screenshot-event/onusercapturescreen
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737433107000
---
最后更新于 2025-01-21

# onUserCaptureScreen

onUserCaptureScreen(function callback) 用于监听用户主动截屏事件。用户使用系统截屏按键截屏时触发。
该接口建议配合 [offUserCaptureScreen](https://open.feishu.cn/document/uYjL24iN/uQjNwEjL0YDMx4CN2ATM) 使用。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.4.0+ | V2.4.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fon-user-capture-screen%2Fon-user-capture-screen)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.35.0+ | 预览

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 | \- | 该事件的回调函数。

## 输出
无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fon-user-capture-screen%2Fon-user-capture-screen)
          预览网页应用

</div> 

```js
tt.onUserCaptureScreen(function(res) {
    console.log(JSON.stringify(res));
});
```
