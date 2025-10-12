---
title: "CanvasContext.fillText"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-fillText
---
最后更新于 2025-01-21

# CanvasContext.fillText(string text, number x, number y, number maxWidth)

填充文字

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
text | string | 是 |  | 文字
x | number | 是 |  | x 坐标
y | number | 是 |  | y 坐标
maxWidth | number | 否 |  | 文字最大宽度

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
const ctx = tt.createCanvasContext(canvasId);

ctx.setFontSize(20);
ctx.fillText("Hello Block!", 20, 20);

ctx.draw();
```
