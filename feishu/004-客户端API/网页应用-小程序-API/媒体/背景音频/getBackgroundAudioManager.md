---
title: "getBackgroundAudioManager"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/backgroundaudio/getbackgroundaudiomanager
---
最后更新于 2022-12-08

# getBackgroundAudioManager()

创建`backgroundAudioManager`实例，通过它能够操作背景音频播放。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.20.0+ | V5.20.0+ | **✕** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbackground-audio%2FbackgroundAudio)
网页应用 | **✕** | **✕** | **✕** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
src | string | 是 |  | 要播放背景音频的资源地址，目前仅支持网络url路径
startTime | number | 否 |  | 开始播放的位置（单位：s）,默认为0
title | string | 否 |  | 背景音频标题, 用于原生音频播放器背景音频标题。默认为小程序名称。
coverImgUrl | string | 否 |  | 背景音频封面图 URL，用于做原生音频播放器背景图。浮窗控件展示图片url。默认是小程序图标
audioPage | object | 否 |  | 设置点击悬浮控件跳转当前小程序指定页面，数据格式为 {path:"(音乐播放路径)",query:{name:''}}。默认为启动到小程序离开的页面。
duration | number | 否 |  | 当前背景音频总时长(单位 s)，只读
currentTime | number | 否 |  | 当前背景音频进度(单位 s)，只读
paused | boolean | 否 |  | 当前背景音频是否处于暂停状态，只读
buffered | number | 否 |  | 当前背景音频已缓冲部分(单位 s)，只读
playbackRate | number | 否 |  | 播放速度。范围 0.5 ～ 2.0，默认为 1.0

## 输出
返回值：`backgroundAudioManager`，该对象的方法列表参见下表：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法

方法 | 介绍
--- | ---
[play](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/play) | 播放
[pause](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/pause) | 暂停播放
[stop](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/stop) | 停止播放
[seek](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/seek) | 跳转到指定位置播放，数据格式为number，单位为s
[onCanplay](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/oncanplay) | 监听背景音频 Canplay 状态，但不保证后面可以流畅播放
[onPlay](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/onplay) | 监听背景音频 Play 事件
[onPause](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/onpause) | 监听背景音频 Pause 事件
[onStop](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/onstop) | 监听背景音频 Stop 事件
[onEnded](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/onended) | 监听背景音频 Ended 事件
[onTimeUpdate](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/ontimeupdate) | 监听背景音频 TimeUpdate 事件
[onError](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/onerror) | 监听背景音频 Error 事件
[onWaiting](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/onwaiting) | 监听背景音频 Waiting 事件，当背景音频因为数据不足，需要停下来加载时会触发
[onSeeking](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/onseeking) | 背景音频进行 seek 操作事件
[onSeeked](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/backgroundaudio/backgroundaudiomanager/onseeked) | 背景音频完成 seek 操作事件

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fbackground-audio%2FbackgroundAudio)

</div> 

```js
const bam = this.backgroundAudioManager = tt.getBackgroundAudioManager();
bam.src = 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3';
bam.title = '背景音频';
bam.playbackRate = 1.0
bam.onPlay(() => {
    console.log('开始播放');
});
bam.onError((error) => {
    console.log(error)
});
bam.onTimeUpdate((res) => {
    this.setData({
        progress: bam.currentTime / bam.duration
    });
})
```
