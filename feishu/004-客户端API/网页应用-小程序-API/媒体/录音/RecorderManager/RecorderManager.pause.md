---
title: "RecorderManager.pause"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/record/recordermanager/pause
last_remote_update: 2025-05-08
last_remote_update_timestamp: 1746694156000
---
最后更新于 2025-05-08

# RecorderManager.pause()

暂停录音

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvoice%2Fvoice)
网页应用 | **✓** | **✓** | **X** | V7.43.0+ | 预览

## 输入

无

## 输出
无

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

recorderManager.start(options);
recorderManager.pause();
```
