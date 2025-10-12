---
title: "CanvasContext.setTextBaseline"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-setTextBaseline
---
最后更新于 2025-01-21

# CanvasContext.setTextBaseline(string align)

设置字体的对齐基线

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
align | string | 是 |  | 对齐方式  
**可选值**：  
- `top` 字体顶部基线  
- `hanging` 字体悬停基线  
- `middle` 字体中部基线  
- `alphabetic` 字体默认基线  
- `ideographic` 实际渲染字体基线，通常用于表意文字  
- `bottom` 基线为字体底线

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
const textBaselineList = ["top", "middle", "bottom", "normal"];

ctx.strokeStyle = "red";
ctx.moveTo(5, 75);
ctx.lineTo(295, 75);
ctx.stroke();
ctx.font = "20px sans-serif";

for (let i = 0; i < textBaselineList.length; ++i) {
  ctx.setTextBaseline(textBaselineList[i]);
  ctx.fillText(textBaselineList[i], 5 + 70 * i, 75);
}

ctx.draw();
```
