---
title: "InnerAudioContext.onSeeked"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/audio/inneraudiocontext/onSeeked
last_remote_update: 2025-05-08
last_remote_update_timestamp: 1746694133000
---
最后更新于 2025-05-08

# InnerAudioContext.onSeeked(function callback)

监听音频完成跳转操作的事件

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✕** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Finneraudio%2Finneraudio)
网页应用 | **✕** | **✕** | **✕** | **✕** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出
无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Finneraudio%2Finneraudio)

</div> 

```js
const innerAudioContext = tt.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = 'https://someaudiourl';
const cb = ()=>{console.log(“进度跳转完成”)};
innerAudioContext.onSeeked(cb);
```
