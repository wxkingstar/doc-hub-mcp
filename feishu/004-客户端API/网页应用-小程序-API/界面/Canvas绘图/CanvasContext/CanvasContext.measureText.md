---
title: "CanvasContext.measureText"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-measureText
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431422000
---
最后更新于 2025-01-21

# CanvasContext.measureText(string text)

测量文字宽度

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.9.0+ | V3.9.0+ | V3.9.0+ | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
text | string | 是 |  | 需要测量的文字

## 输出

返回值：

名称 | 数据类型 | 描述
--- | --- | ---
width | number | 文字宽度

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
ctx.font = "italic bold 20px cursive";
const metrics = ctx.measureText("Hello Block");
console.log("MeasureText Result:", metrics.width);
```
