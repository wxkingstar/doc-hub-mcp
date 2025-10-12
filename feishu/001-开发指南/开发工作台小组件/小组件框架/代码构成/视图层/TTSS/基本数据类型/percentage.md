---
title: "percentage"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/basic-data-type/percentage
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871784000
---
最后更新于 2022-07-15

# percentage

## 介绍

`<percentage>`表述一个百分比值。许多`TTSS`属性都可以取百分比值，经常用以根据父对象来确定大小。百分比值由一个`<number>`具体数值后跟着`%`符号构成，在`%`和`数值`之间是不允许有空格。许多长度属性使用百分比，如 `width`，`height`，`margin`，`padding`。

## 示例

```html
<view>
  <text style="width: 50%; margin-left: 20%; background-color: #00FF00;">
      Width: 50%, Left margin: 20%
  </text>
  <text style="width: 30%; margin-left: 60%; background-color: #FF0000;">
      Width: 30%, Left margin: 60%
  </text>
</view>
```
