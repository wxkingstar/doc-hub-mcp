---
title: "Animation.bottom"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/animation/animation/animation_bottom
---
最后更新于 2025-01-21

# Animation.bottom(number|string value)

设置 bottom 值

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fanimation%2Fanimation)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
value | number | string | 是 | / | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值

## 输出

返回值：  

`Animation` 实例

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fanimation%2Fanimation)

</div> 

```js
const animation = tt.createAnimation();

animation.bottom(20).step();
```
