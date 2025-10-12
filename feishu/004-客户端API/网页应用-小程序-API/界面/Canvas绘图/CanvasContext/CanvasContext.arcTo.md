---
title: "CanvasContext.arcTo"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-arcTo
---
最后更新于 2025-01-21

# CanvasContext.arcTo(number x1, number y1, number x2, number y2, number radius)

移动并添加弧线到当前路径中

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
x1 | number | 是 |  | 控制点1 x 坐标
y1 | number | 是 |  | 控制点1 y 坐标
x2 | number | 是 |  | 控制点2 x 坐标
y2 | number | 是 |  | 控制点2 y 坐标
radius | number | 是 |  | x 坐标

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
ctx.beginPath();
ctx.fillRect(100, 100, 5, 5);
ctx.fillRect(180, 80, 5, 5);
ctx.fillRect(160, 180, 5, 5);
ctx.moveTo(62, 112);
ctx.lineTo(182, 82);
ctx.lineTo(162, 182);
// 绘制切线弧
ctx.moveTo(103, 103);
ctx.arcTo(183, 83, 162, 182, 40);
ctx.stroke();

ctx.draw();
```
