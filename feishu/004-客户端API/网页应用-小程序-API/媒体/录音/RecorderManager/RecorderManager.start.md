---
title: "RecorderManager.start"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/record/recordermanager/start
last_remote_update: 2025-05-08
last_remote_update_timestamp: 1746691763000
---
最后更新于 2025-05-08

# RecorderManager.start(object options)

开始录音

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvoice%2Fvoice)
网页应用 | **✓** | **✓** | **X** | V7.43.0+ | 预览

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述 | 最低版本
--- | --- | --- | --- | --- | ---
options | object | 否 | \- | 录音参数 | \-
&emsp;  
                    ∟  
                &nbsp;  
                    duration | number | 否 | 60000 | 录音的时长，单位 ms，最大值 600000（10 分钟） | \-
&emsp;  
                    ∟  
                &nbsp;  
                    sampleRate | number | 否 | 8000 | 采样率  
**可选值**：  
- `8000`：8000 采样率  
- `16000`：16000 采样率  
- `44100`：44100 采样率 | \-
&emsp;  
                    ∟  
                &nbsp;  
                    numberOfChannels | number | 否 | 2 | 录音通道数  
**可选值**：  
- `1`：一个通道  
- `2`：两个通道 | \-
&emsp;  
                    ∟  
                &nbsp;  
                    frameSize | number | 否 | \- | 帧大小，单位 KB。如果设置了值，那么每当录音内容达到帧大小时会通过 onFrameRecorded 返回内容  
**Notice**：**注意**：由于iOS系统机制，iOS设备onFrameRecorded 返回内容大小会波动，不完全与frameSize大小相同 | \-
&emsp;  
                    ∟  
                &nbsp;  
                    format | string | 否 | - Android、Harmony: `wav`  
- iOS: `aac` | 录制文件格式。Android、Harmony 与 iOS 支持的格式有所不同  
- Android、Harmony：仅支持 `wav`（文件后缀 .wav）  
- iOS：支持以下取值  
	- `aac`（文件后缀 .m4a）  
    - `wav`（文件后缀 .wav） | 7.13
&emsp;  
                    ∟  
                &nbsp;  
                    audioSource | string | 否 | - Android: `mic`  
- iOS: `auto` | 指定录音的音频输入源。  
**可选值**：               
- `auto`：自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，Android和iOS均支持  
- `buildInMic`：手机麦克风，仅限 iOS    
- `headsetMic`：耳机麦克风，仅限 iOS     
- `mic`：默认为手机麦克风， 仅限 Android，具体可参考 [AudioSource](https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource)。  
- `camcorder`：适用于录制音视频内容，仅限 Android  
- `voice_communication`：适用于实时沟通，仅限 Android  
- `voice_recognition`：适用于语音识别，仅限 Android   
**Notice**：**注意**：Harmony暂不支持指定录音的音频输入源。仅支持mic | 7.42

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
  frameSize: 50
};

recorderManager.start(options);
```

## 注意事项

在iOS设备上 start 有可能会遇到系统报错，在实现时候可以监听错误回调，进行重试逻辑。

```js

/// 假定，最多重试 3 次
  var leftRetryTimes = 3

recorderManager.onError((error) => {
     this.onRecordError(error)
  });

onRecordError(error) {
    console.log('onError:', error);
    /// 如果是start失败报错
    const _this = this
    if (error.errno === 1305003 && error.errString.includes('OperateRecorder start failed')) {
      if (this.data.leftRetryTimes > 0) {
        _this.recorderManager.stop();
        setTimeout( () => {
          console.log('retry start record, left times: ', _this.data.leftRetryTimes)
          _this.data.leftRetryTimes -= 1;
          _this.startRecord()
        }, 500)
      } else {
        console.log('retry start record failed')
      }
    }
  },

```
