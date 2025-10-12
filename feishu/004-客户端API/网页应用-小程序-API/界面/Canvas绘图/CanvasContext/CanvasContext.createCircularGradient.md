---
title: "CanvasContext.createCircularGradient"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-createCircularGradient
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431421000
---
最后更新于 2025-01-21

# CanvasContext.createCircularGradient(number x0, number y0, number r0)

创建圆形渐变管理对象

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
x0 | number | 是 |  | 起始点 X 坐标
y0 | number | 是 |  | 起始点 Y 坐标
r0 | number | 是 |  | 起始点半径

## 输出

返回值：
`CanvasCircularGradient`

名称 | 数据类型 | 描述
--- | --- | ---
addColorStop | (offset: number, color: string) => void | 添加颜色关键点

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
const gradient = ctx.createCircularGradient(100, 100, 100);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "green");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 200);

ctx.draw();
```
