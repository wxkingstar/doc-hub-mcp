---
title: "BackgroundAudioManager.onWaiting"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/backgroundaudio/backgroundaudiomanager/onwaiting
---
最后更新于 2022-12-08

# BackgroundAudioManager.onWaiting(function callback)

监听背景音频加载中事件。当音频因为数据不足，需要停下来加载时会触发

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.20.0+ | V5.20.0+ | **X** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbackground-audio%2FbackgroundAudio)
网页应用 | **X** | **X** | **X** | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性
## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>
  <div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fbackground-audio%2FbackgroundAudio)

</div> 

```js
const bam = this.backgroundAudioManager = tt.getBackgroundAudioManager();
bam.src = 'https://someaudiourl';
const cb = ()=>{console.log(“正在等待数据”)};
bam.onWaiting(cb);
```
