---
title: "CanvasContext.setFontSize"
source_url: https://open.feishu.cn/document/client-docs/block/api/canvas/canvascontext/canvascontext-setFontSize
last_remote_update: 2023-10-27
last_remote_update_timestamp: 1698399900000
---
最后更新于 2023-10-27

# CanvasContext.setFontSize

## CanvasContext.setFontSize(number size)

设置字体的大小。

## 参数说明

|**属性**|**类型**|**默认值**|**必填**|**说明**|**最低版本**
|:-|:-|:-|:-|:-|:-|
|size|number|-|是|字体的大小|1.6.0

## 返回值

无

## 示例

### 示例代码

```javascript
const ctx = tt.createCanvasContext("canvas");

const fontSizeList = [20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < fontSizeList.length; ++i) {
  sum += fontSizeList[i];
  ctx.setFontSize(fontSizeList[i]);
  ctx.fillText(fontSizeList[i] + "", sum, sum);
}

ctx.draw();
```

### 示例效果

## Tip
无
