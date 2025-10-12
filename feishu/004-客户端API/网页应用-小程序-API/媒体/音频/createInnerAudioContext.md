---
title: "createInnerAudioContext"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/audio/createinneraudiocontext
---
最后更新于 2025-05-08

# createInnerAudioContext()

创建`innerAudioContext`实例，通过它能够操作音频播放。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✕** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Finneraudio%2Finneraudio)
网页应用 | **✕** | **✕** | **✕** | **✕** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
autoplay | boolean | 否 | true | 是否自动播放音频
src | string | 是 |  | 要播放音频的资源地址，支持网络url路径和本地路径播放。支持的格式有：MP3、WAV、⁣M4A
obeyMuteSwitch | boolean | 否 | true | 是否遵循系统静音开关。若需实现静音模式下播放，请设置为 `false`

## 输出
返回值：`innerAudioContext`，该对象的方法列表参见下表：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法

方法 | 介绍
--- | ---
[play](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/play) | 播放
[pause](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/pause) | 暂停播放
[stop](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/stop) | 停止播放
[seek](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/seek) | 跳转到指定位置播放，数据格式为number，单位为s
[destroy](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/destroy) | 销毁当前 innerAudioContext 实例
[onCanplay](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onCanplay) | 监听音频 Canplay 状态，但不保证后面可以流畅播放
[offCanplay](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offCanplay) | 取消监听 Canplay 事件
[onPlay](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onPlay) | 监听音频 Play 事件
[offPlay](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offPlay) | 取消监听 Play 事件
[onPause](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onPause) | 监听音频 Pause 事件
[offPause](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offPause) | 取消监听 Pause 事件
[onStop](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onStop) | 监听音频 Stop 事件
[offStop](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offStop) | 取消监听 Stop 事件
[onEnded](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onEnded) | 监听音频 Ended 事件
[offEnded](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offEnded) | 取消监听 Ended 事件
[onTimeUpdate](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onTimeUpdate) | 监听音频 TimeUpdate 事件
[offTimeUpdate](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offTimeUpdate) | 取消监听 TimeUpdate 事件
[onError](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onError) | 监听音频 Error 事件
[offError](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offError) | 取消监听 Error 事件
[onWaiting](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onWaiting) | 监听音频 Waiting 事件，当音频因为数据不足，需要停下来加载时会触发
[offWaiting](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offWaiting) | 取消监听 Waiting 事件
[onSeeking](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onSeeking) | 音频进行 seek 操作事件
[offSeeking](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offSeeking) | 取消监听 Seeking 事件
[onSeeked](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/onSeeked) | 音频完成 seek 操作事件
[offSeeked](https://open.feishu.cn/document/uYjL24iN/uETMx4SMxEjLxETM/inneraudiocontext/offSeeked) | 取消监听 Seeked 事件

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Finneraudio%2Finneraudio)

</div> 

```js
const innerAudioContext = tt.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3';
innerAudioContext.onPlay(() => {
    console.log('开始播放');
});
innerAudioContext.onError((error) => {
    console.log(error)
});
innerAudioContext.onTimeUpdate((res) => {
    this.setData({
        progress: innerAudioContext.currentTime / innerAudioContext.duration
    });
})
```
