---
title: "CanvasContext.setGlobalAlpha"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-setGlobalAlpha
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431421000
---
最后更新于 2025-01-21

# CanvasContext.setGlobalAlpha(number alpha)

设置全局不透明度

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
alpha | number | 是 |  | 不透明度

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
ctx.setFillStyle("red");
ctx.fillRect(10, 10, 150, 100);
ctx.setGlobalAlpha(0.2);
ctx.setFillStyle("blue");
ctx.fillRect(50, 50, 150, 100);
ctx.setFillStyle("yellow");
ctx.fillRect(100, 100, 150, 100);

ctx.draw();
```
