---
title: "CustomizedInput.onError"
source_url: https://open.feishu.cn/document/web-app/gadget-api/interface/customized-input/customizedinput/onerror
---
最后更新于 2025-07-04

# CustomizedInput.onError(function callback)

监听错误回调。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V6.4.0+ | V6.4.0+ | **X** | V7.47.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 | \- | 该事件的回调函数

## 输出
回调函数返回标准 [Errno](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno) 错误码对象。以下为错误码枚举：

errno | errString | 描述
--- | --- | ---
9011201 | Request at user openID error, eventType: @{eventType} | 获取联系人 openID 错误，eventType 表示请求 openID 的场景。该错误通常由于没有调用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) 登录接口导致。eventType 取以下值：  
- picSelect：onPicSelect 回调时  
- modelSelect：onModelSelect 回调时  
- publish：onPublish 回调时  
- hide：onHide 回调时

## 示例代码

```js
const customizedInput = tt.getCustomizedInput();
customizedInput.onError(function(res) {
    console.log(JSON.stringify(res));
});
```
