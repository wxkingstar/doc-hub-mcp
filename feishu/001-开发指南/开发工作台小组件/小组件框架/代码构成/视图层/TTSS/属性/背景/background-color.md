---
title: "background-color"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/background/background-color
---
最后更新于 2022-07-15

# background-color

## 介绍

`background-color`属性指定元素的背景颜色。它的作用范围是元素的总大小，包括填充和边框。

## 语法

```css
/* Keyword values */
background-color: red;
background-color: indigo;
/* Hexadecimal value */
background-color: #bbff00; /* Fully opaque */
background-color: #bf0; /* Fully opaque shorthand */
background-color: #11ffee00; /* Fully transparent */
background-color: #1fe0; /* Fully transparent shorthand  */
background-color: #11ffeeff; /* Fully opaque */
background-color: #1fef; /* Fully opaque shorthand  */
/* RGB value */
background-color: rgb(255, 255, 128); /* Fully opaque */
background-color: rgba(117, 190, 218, 0.5); /* 50% transparent */
/* HSL value */
background-color: hsl(50, 33%, 25%); /* Fully opaque */
background-color: hsla(50, 33%, 25%, 0.75); /* 75% transparent */
/* Special keyword values */
background-color: transparent;
```

### 取值

-   `<color>`

指定背景颜色

-   `transparent`

**默认值。** 指定背景颜色为透明。

## 标准化语法

```css
background-color: <color> | transparent
```
