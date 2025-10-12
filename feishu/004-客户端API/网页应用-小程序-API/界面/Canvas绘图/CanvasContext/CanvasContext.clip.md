---
title: "CanvasContext.clip"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-clip
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431443000
---
最后更新于 2025-01-21

# CanvasContext.clip()

剪切当前路径，限制后续的渲染范围

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

无

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
ctx.save();
ctx.arc(100, 100, 75, 0, Math.PI * 2, false);
ctx.clip();
ctx.fillRect(0, 0, 100, 100);

ctx.restore();
ctx.draw();
```
