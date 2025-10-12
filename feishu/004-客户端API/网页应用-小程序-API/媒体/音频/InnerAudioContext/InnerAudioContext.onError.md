---
title: "InnerAudioContext.onError"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/audio/inneraudiocontext/onerror
---
最后更新于 2025-05-08

# InnerAudioContext.onError(function callback)

监听音频播放错误事件

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✕** | V7.43.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Finneraudio%2Finneraudio)
网页应用 | **✕** | **✕** | **✕** | **✕** | /

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
|1303101|Unable to play. Audio src is invalid|src 为空或不合法|
|1303102|Unable to play. Audio src request failed|播放地址请求失败|
|1303103|Unable to play. DNS lookup failed|DNS 解析失败|
|1303104|Unable to play. Audio engine error|音频播放器内部错误|
|1303105|Unable to play. Network error|网络错误|

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Finneraudio%2Finneraudio)

</div> 

```js
const innerAudioContext = tt.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = 'https://someaudiourl';
const cb = (error)=>{console.error('播放错误',error.errno, error.errString)}
innerAudioContext.onError(cb);
```
