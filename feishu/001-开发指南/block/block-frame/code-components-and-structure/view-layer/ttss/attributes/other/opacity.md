<!--
title: opacity
id: 6989248828928376833
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/opacity
updatedAt: 1657871783000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/other/opacity
-->
# opacity

## 介绍

`opacity`属性指定了一个元素的透明度。

## 语法

```css
opacity: 0;

opacity: 0.3;

opacity: 1;
```

### 取值

-   `number`

number 是一个`0.0`到`1.0`范围内的数字值，默认值为`1`。这个数值既包含也代表通道的透明度，也就是`alpha`通道的值。任何一个溢出这个取值区间的值，尽管有效，但会被解析为在取值范围内最靠近它的值。

| 值         | 释义      |
| --------- | ------- |
| 0         | 元素完全透明  |
| 0 < n < 1 | 元素半透明   |
| 1         | 元素完全不透明 |

### 标准化语法

```css
opacity: <number>
```