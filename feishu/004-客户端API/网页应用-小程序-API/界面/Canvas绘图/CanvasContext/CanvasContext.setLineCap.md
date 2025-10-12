---
title: "CanvasContext.setLineCap"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-setLineCap
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431421000
---
最后更新于 2025-01-21

# CanvasContext.setLineCap(string cap)

设置线端点样式

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
cap | string | 是 |  | 线端点样式  
**可选值**：  
- `butt` 默认样式，端点为方形  
- `round` 端点为弧形，圆心为端点  
- `square` 端点为覆盖弧形的最小方形

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
const lineCap = ["butt", "round", "square"];

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(140, 10);
ctx.moveTo(10, 140);
ctx.lineTo(140, 140);
ctx.stroke();

ctx.strokeStyle = "black";
for (let i = 0; i < lineCap.length; ++i) {
  ctx.lineWidth = 15;
  ctx.setLineCap(lineCap[i]);
  ctx.beginPath();
  ctx.moveTo(25 + i * 50, 10);
  ctx.lineTo(25 + i * 50, 140);
  ctx.stroke();
}

ctx.draw();
```
