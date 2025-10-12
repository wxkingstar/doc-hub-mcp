---
title: "createVideoContext"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/video/createvideocontext
---
最后更新于 2025-07-04

# 	createVideoContext(string id, object component)
此 API 及 VideoContext 相关 API 仅用于小程序 [video](https://open.feishu.cn/document/uYjL24iN/uYzNuYzNuYzN) 组件，不支持网页应用，且与 HTML <video> 标签无关

创建 `VideoContext` 实例，通过 id 跟一个 `video` 组件绑定，操作对应的 `video` 组件。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V4.3.0+ | V4.3.0+ | V6.1.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2Fcomponent%2Fpages%2Fvideo%2Fvideo)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
id | string | 是 |  | video 组件 id  
**示例值**：myVideo
component | object | 否 |  | 在自定义组件下，当前组件实例的this，以操作组件内 video 组件

## 输出

返回值：`VideoContext`，该对象的方法列表参见下表：

方法 | 介绍
--- | ---
[VideoContext.play](https://open.feishu.cn/document/uYjL24iN/uITMx4iMxEjLyETM/videocontext/play) | 播放视频
[VideoContext.pause](https://open.feishu.cn/document/uYjL24iN/uITMx4iMxEjLyETM/videocontext/pause) | 暂停视频
[VideoContext.stop](https://open.feishu.cn/document/uYjL24iN/uITMx4iMxEjLyETM/videocontext/stop) | 停止视频
[VideoContext.seek](https://open.feishu.cn/document/uYjL24iN/uITMx4iMxEjLyETM/videocontext/seek) | 跳转到指定位置
[VideoContext.requestFullScreen](https://open.feishu.cn/document/uYjL24iN/uITMx4iMxEjLyETM/videocontext/requestfullscreen) | 进入全屏
[VideoContext.exitFullScreen](https://open.feishu.cn/document/uYjL24iN/uITMx4iMxEjLyETM/videocontext/exitfullscreen) | 退出全屏
[VideoContext.playbackRate](https://open.feishu.cn/document/uYjL24iN/uITMx4iMxEjLyETM/videocontext/playbackrate) | 设置视频倍速播放

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2Fcomponent%2Fpages%2Fvideo%2Fvideo)

</div> 

```html
<video id="myVideo"
  src="http://sf3-cn.feishucdn.com/obj/ttfe/tma/test.mp4"
  loop="{{true}}"
  initial-time=5
  auto-fullscreen="{{true}}"
  bindtimeupdate="bindupdatetime"
  muted="{{myMuted}}">
</video>
```

```js
Page({
  onReady (res) {
    this.videoContext = tt.createVideoContext('myVideo');
  },
  pause: function () {
      this.videoContext.pause();
  }
})
```
