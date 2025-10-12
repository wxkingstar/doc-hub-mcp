---
title: "CanvasContext.setMiterLimit"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-setMiterLimit
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431421000
---
最后更新于 2025-01-21

# CanvasContext.setMiterLimit(number limit)

设置线连接点渲染的斜面倾斜程度

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
limit | number | 是 |  | 斜面倾斜程度

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
const miterLimitList = [1, 2, 3, 4];

for (let i = 0; i < miterLimitList.length; ++i) {
  ctx.beginPath();
  ctx.setLineWidth(10);
  ctx.lineJoin = "miter";
  ctx.setMiterLimit(miterLimitList[i]);
  ctx.moveTo(10 + 40 * i, 10);
  ctx.lineTo(100 + 40 * i, 50);
  ctx.lineTo(10 + 40 * i, 90);
  ctx.stroke();
}

ctx.draw();
```
