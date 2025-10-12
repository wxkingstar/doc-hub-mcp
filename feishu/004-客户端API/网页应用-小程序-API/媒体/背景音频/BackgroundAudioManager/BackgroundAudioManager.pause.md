---
title: "BackgroundAudioManager.pause"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/backgroundaudio/backgroundaudiomanager/pause
last_remote_update: 2022-12-08
last_remote_update_timestamp: 1670481081000
---
最后更新于 2022-12-08

# BackgroundAudioManager.pause()

背景音频暂停

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.20.0+ | V5.20.0+ | **X** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbackground-audio%2FbackgroundAudio)
网页应用 | **X** | **X** | **X** | 预览

## 输入
无

## 输出
无
## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>
  <div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fbackground-audio%2FbackgroundAudio)

</div> 

```js
const bam = this.backgroundAudioManager = tt.getBackgroundAudioManager();
bam.src = 'https://someaudiourl';
bam.play();
bam.pause();
```
