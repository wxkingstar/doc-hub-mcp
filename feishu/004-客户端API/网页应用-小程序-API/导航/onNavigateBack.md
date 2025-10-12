---
title: "onNavigateBack"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/navigation/onnavigateback
---
最后更新于 2025-05-14

# onNavigateBack(function callback)

监听并拦截当前页面的返回按钮点击事件

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.19.0+ | V5.19.0+ | V5.19.0+ | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | 预览

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出

名称 | 数据类型 | 描述
--- | --- | ---
scene | string | 触发返回的事件来源，如导航栏返回，系统返回等  
**可选值** :   
- `navibutton` : 导航栏返回按钮点击  
- `systemback` : Android端系统返回，物理按键

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fnavigator%2Fnavigator)

</div> 

```js
tt.onNavigateBack(function(data){
    if (data.scene === "navibutton") {
        console.log(JSON.stringify(data))
        tt.navigateBack({
            delta: 1
        })
        return
    }
})
```
