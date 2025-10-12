---
title: "RecorderManager.getState"
source_url: https://open.feishu.cn/document/web-app/gadget-api/media/record/recordermanager/getstate
last_remote_update: 2025-05-08
last_remote_update_timestamp: 1746694167000
---
最后更新于 2025-05-08

# RecorderManager.getState()

获取当前录音状态

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V7.13.0+ | V7.13.0+ | **X** | V7.43.0+ | 预览
网页应用 | V7.13.0+ | V7.13.0+ | **X** | V7.43.0+ | 预览

## 输入
无

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
state | string | 当前的录音状态

### state
|值|说明|
|--|----|
|recording|录音中|
|paused|录音已暂停|
|stopped|录音已停止|
|error|录音已出错|

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
recorderManager.pause();

recorderManager.getState({
  success: (res) => {
    console.log(JSON.stringify(res));
  },
});
```
