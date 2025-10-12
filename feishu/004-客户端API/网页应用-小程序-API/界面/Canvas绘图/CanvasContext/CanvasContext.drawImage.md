---
title: "CanvasContext.drawImage"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/canvas-drawing/canvascontext/canvascontext-drawImage
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431443000
---
最后更新于 2025-01-21

# CanvasContext.drawImage(string image, number sx, number sy, number sw, number sh, number dx, number dy, number dw, number dh)

绘制图像到画布

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
image | string | 否 |  | 需要绘制的图片路径  
**Notice**：- 支持本地图片（调用其他API得到的路径，如[chooseImage](https://open.feishu.cn/document/uYjL24iN/uMTMx4yMxEjLzETM)、[downloadFile](https://open.feishu.cn/document/uYjL24iN/ucDMx4yNwEjL3ATM)等）  
- 支持网络图片，可以直接使用  
- 不允许跨域网络图片直接使用，可以通过[downloadFile](https://open.feishu.cn/document/uYjL24iN/ucDMx4yNwEjL3ATM)下载到本地后使用
sx | number | 否 |  | 需要绘制到画布中的，image的矩形（裁剪）选择框的左上角 x 坐标
sy | number | 否 |  | 需要绘制到画布中的，image的矩形（裁剪）选择框的左上角 y 坐标
sw | number | 否 |  | 需要绘制到画布中的，image的矩形（裁剪）选择框的宽度
sh | number | 否 |  | 需要绘制到画布中的，image的矩形（裁剪）选择框的高度
dx | number | 否 |  | image的左上角在目标 canvas 上 x 轴的位置
dy | number | 否 |  | image的左上角在目标 canvas 上 y 轴的位置
dw | number | 否 |  | 在目标画布上绘制image的宽度，允许对绘制的image进行缩放
dh | number | 否 |  | 在目标画布上绘制image的高度，允许对绘制的image进行缩放

## 输出

无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
    预览小程序

</div> 

```javascript
ctx.drawImage(
  "https://sf3-cn.feishucdn.com/obj/eden-cn/eseh7nupevhps/block/image.png",
  0,
  0,
  150,
  100
);
ctx.draw();
```
