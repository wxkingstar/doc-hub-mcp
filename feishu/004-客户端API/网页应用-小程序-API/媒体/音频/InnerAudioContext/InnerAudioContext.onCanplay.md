---
title: "InnerAudioContext.onCanplay"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/audio/inneraudiocontext/oncanplay
last_remote_update: 2025-05-08
last_remote_update_timestamp: 1746694133000
---
最后更新于 2025-05-08

# InnerAudioContext.onCanplay(function callback)

在音频进入可播放状态后触发回调函数
**Notice**：注意事项：
- 开始播放后仍有可能再次进入等待播放状态

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✕** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%E8%BF%99%E9%87%8C%E4%B8%80%E5%AE%9A%E8%A6%81%E4%BF%AE%E6%94%B9%E6%88%90%E5%85%B7%E4%BD%93%E7%9A%84%E8%B7%AF%E5%BE%84)
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
innerAudioContext.onCanPlay(() => {
    console.log('可以开始播放');
});
```
