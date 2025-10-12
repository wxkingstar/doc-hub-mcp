---
title: "RecorderManager"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/record/recordermanager/recordermanager
---
最后更新于 2025-05-08

# RecorderManager

全局唯一的录音管理器，可通过
[getRecorderManager](https://open.feishu.cn/document/uYjL24iN/uQDOx4CN4EjL0gTM)获取。
调用前需要用户授权 `scope.record`，**请开发者兼容用户拒绝授权的场景**。
该页面假设你已经阅读过了[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。如果你对小程序 API 权限还不太了解，推荐你先阅读它。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvoice%2Fvoice)
网页应用 | **✓** | **✓** | **X** | V7.43.0+ | 预览

## 方法

方法 | 介绍
--- | ---
[RecorderManager.start](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/start) | 开始录音
[RecorderManager.pause](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/pause) | 暂停录音
[RecorderManager.resume](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/resume) | 继续录音
[RecorderManager.stop](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/stop) | 停止录音
[RecorderManager.getState](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/getstate) | 获取当前录音状态
[RecorderManager.onStart](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onstart) | 录音开始事件回调
[RecorderManager.onPause](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onpause) | 录音暂停事件回调
[RecorderManager.onResume](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onresume) | 录音恢复事件回调
[RecorderManager.onStop](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onstop) | 录音停止事件回调，res对象带有一个类型为string的属性tempFilePath，表示录音文件的地址。
[RecorderManager.onFrameRecorded](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onframerecorded) | 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
[RecorderManager.onError](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onerror) | 监听录音错误事件

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvoice%2Fvoice)
        预览网页应用

</div> 

```js
const recorderManager = tt.getRecorderManager();

recorderManager.onStart(() => {
    console.log('recorder start')
});
recorderManager.onPause(() => {
    console.log('recorder pause')
});
recorderManager.onResume(() => {
    console.log('recorder onResume')
});
recorderManager.onStop((res) => {
    console.log('recorder stop', res)
    const { tempFilePath } = res
});
recorderManager.onFrameRecorded((res) => {
    const { frameBuffer } = res
    console.log('frameBuffer.byteLength', frameBuffer.byteLength)
});

const options = {
    duration: 10000,
    sampleRate: 44100,
    numberOfChannels: 1,
    format: 'aac',
    frameSize: 50
};

recorderManager.start(options);
```

## 已知问题

-  Android 暂不支持设置 format 参数，默认表现为 `wav`
-  iOS 在 7.13 及以上版本客户端支持设置 format 参数，支持的录制格式详见 [RecorderManager.start](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/start)
