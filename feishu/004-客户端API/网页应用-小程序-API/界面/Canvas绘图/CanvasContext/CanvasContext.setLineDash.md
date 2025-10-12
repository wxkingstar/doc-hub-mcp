---
title: "CanvasContext.setLineDash"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-setLineDash
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431421000
---
最后更新于 2025-01-21

# CanvasContext.setLineDash(number[] segments, number offset)

设置间断线

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
segments | number[] | 是 |  | 间断线的分块
offset | number | 否 |  | 间断线起点偏移值

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
let height = 15;

const drawDashedLine = (pattern) => {
  ctx.beginPath();
  ctx.setLineDash(pattern);
  ctx.moveTo(0, height);
  ctx.lineTo(300, height);
  ctx.stroke();
  height += 20;
};

drawDashedLine([]);
drawDashedLine([1, 1]);
drawDashedLine([10, 10]);
drawDashedLine([20, 5]);
drawDashedLine([15, 3, 3, 3]);
drawDashedLine([20, 3, 3, 3, 3, 3, 3, 3]);
drawDashedLine([12, 3, 3]);  // Equals [12, 3, 3, 12, 3, 3]

ctx.draw();
```
