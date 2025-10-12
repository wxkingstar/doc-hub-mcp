---
title: "CanvasContext.arc"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-arc
---
最后更新于 2025-01-21

# CanvasContext.arc(number x, number y, number radius, number startAngle, number endAngle, string counterclockwise)

添加圆弧到当前路径中

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
x | number | 是 |  | 圆心 x 坐标
y | number | 是 |  | 圆心 y 坐标
radius | number | 是 |  | 半径
startAngle | number | 是 |  | 圆开始弧度
endAngle | number | 是 |  | 圆结束弧度
counterclockwise | string | 否 | false | 是否是逆时针计算

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
ctx.arc(100, 100, 60, 0, 1.5 * Math.PI, false);
ctx.fill();

ctx.draw();
```
