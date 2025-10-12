---
title: "offGetWifiList"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/wi-fi/offgetwifilist
---
最后更新于 2025-01-21

# offGetWifiList(function callback)

offGetWifiList(function callback) 用于取消监听获取到 Wi-Fi 列表数据事件。
**Notice**：该接口需要与 [onGetWifiList](https://open.feishu.cn/document/uYjL24iN/uYDO4UjL2gDO14iN4gTN) 接口配套使用。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **X** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fwifilist%2Fwifilist)
网页应用 | V3.44.0+ | **X** | **X** | V7.35.0+ | 预览

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 | \- | 获取到 Wi-Fi 列表数据事件的回调函数。

## 输出
无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fwifilist%2Fwifilist)
          预览网页应用

</div> 

```js
tt.offGetWifiList(function(res){
	console.log(JSON.stringify(res));
})
```
