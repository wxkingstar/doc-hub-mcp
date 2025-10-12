---
title: "CanvasContext.transform"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-transform
---
最后更新于 2025-01-21

# CanvasContext.transform(number a, number b, number c, number d, number e, number f)

坐标转换矩阵叠加，每一次调用会在乘以前一次的变换矩阵

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
a | number | 是 |  | 水平缩放(M11)
b | number | 是 |  | 垂直倾斜(M12)
c | number | 是 |  | 水平倾斜(M21)
d | number | 是 |  | 垂直缩放(M22)
e | number | 是 |  | 水平平移(dx)
f | number | 是 |  | 垂直平移(dy)

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
// 两者会叠加
ctx.transform(1, 1, 0, 1, 0, 0);
ctx.transform(1, 1, 0, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);

ctx.draw();
```
