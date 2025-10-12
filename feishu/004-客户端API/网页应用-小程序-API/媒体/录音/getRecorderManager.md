---
title: "getRecorderManager"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/record/getrecordermanager
last_remote_update: 2025-05-08
last_remote_update_timestamp: 1746694144000
---
最后更新于 2025-05-08

# 	getRecorderManager()

获取全局唯一的 `recorderManager` 。通过 `recorderManager` 进行录音操作和管理。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvoice%2Fvoice)
网页应用 | **✓** | **✓** | **X** | V7.43.0+ | 预览

## 输入
无
## 输出

返回值：

名称 | 数据类型 | 描述
--- | --- | ---
recorderManager | object | [RecorderManager](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/recordermanager) 对象
&emsp;  
                    ∟  
                &nbsp;  
                    [start](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/start) | function | 开始录音
&emsp;  
                    ∟  
                &nbsp;  
                    [pause](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/pause) | function | 暂停录音
&emsp;  
                    ∟  
                &nbsp;  
                    [resume](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/resume) | function | 继续录音
&emsp;  
                    ∟  
                &nbsp;  
                    [stop](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/stop) | function | 停止录音
&emsp;  
                    ∟  
                &nbsp;  
                    [getState](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/getstate) | function | 获取当前录音状态
&emsp;  
                    ∟  
                &nbsp;  
                    [onStart](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onstart) | function | 录音开始事件回调
&emsp;  
                    ∟  
                &nbsp;  
                    [onPause](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onpause) | function | 录音暂停事件回调
&emsp;  
                    ∟  
                &nbsp;  
                    [onResume](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onresume) | function | 录音恢复事件回调
&emsp;  
                    ∟  
                &nbsp;  
                    [onStop](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onstop) | function | 录音停止事件回调，res对象带有一个类型为string的属性tempFilePath，表示录音文件的地址。
&emsp;  
                    ∟  
                &nbsp;  
                    [onFrameRecorded](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onframerecorded) | function | 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
&emsp;  
                    ∟  
                &nbsp;  
                    [onError](https://open.feishu.cn/document/uYjL24iN/uATMx4CMxEjLwETM/recordermanager/onerror) | function | 监听录音错误事件

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
