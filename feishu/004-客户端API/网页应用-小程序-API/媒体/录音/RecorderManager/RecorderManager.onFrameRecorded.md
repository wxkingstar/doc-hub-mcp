---
title: "RecorderManager.onFrameRecorded"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/record/recordermanager/onframerecorded
---
最后更新于 2025-05-08

# RecorderManager.onFrameRecorded(function callback)

监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvoice%2Fvoice)
网页应用 | **✓** | **✓** | **X** | V7.43.0+ | 预览

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
frameBuffer | ArrayBuffer | 帧数据
isLastFrame | boolean | 是否为最后一帧

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvoice%2Fvoice)
        预览网页应用

</div> 

```js
const recorderManager = tt.getRecorderManager();
const options = {
  duration: 100000,
  sampleRate: 44100,
  numberOfChannels: 2,
  encodeBitRate: 320000,
  frameSize: 50
};

recorderManager.onFrameRecorded((res) => {
  console.log('recorder complete framebuffer:', res.frameBuffer);
  console.log('recorder complete isLastFrame:', res.isLastFrame);
});

recorderManager.start(options);
```
