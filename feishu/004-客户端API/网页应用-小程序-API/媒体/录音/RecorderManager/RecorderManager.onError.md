---
title: "RecorderManager.onError"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/record/recordermanager/onerror
last_remote_update: 2025-05-08
last_remote_update_timestamp: 1746694167000
---
最后更新于 2025-05-08

# RecorderManager.onError(function callback)

监听录音错误事件

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvoice%2Fvoice)
网页应用 | **✓** | **✓** | **X** | V7.43.0+ | 预览

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出
回调函数返回对象的属性：
```javascript 
interface OnErrorDetail {
    errno: number;
    errString: string;
}
``` 
|errno|errString|含义|
|--|--|------|
|1305001|Unable to record. A higher priority media event is being processed, ${reason}|开始录制音频抢占播放失败(有优先级更高的业务方在播放)|
|1305002|Unable to record. A higher priority media event is being processed, ${reason}|恢复录制音频抢占播放失败(有优先级更高的业务方在播放)|
|1305003|OperateRecorder ${apiType} failed, reason: ${reason}|start/pause/resume/stop失败|

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

recorderManager.onError((res) => {
  console.error('recorder complete error:', res.errno, res.errString);
});

recorderManager.start(options);
```
