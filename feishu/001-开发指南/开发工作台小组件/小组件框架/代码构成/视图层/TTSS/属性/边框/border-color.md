---
title: "border-color"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/border/border-color
---
最后更新于 2022-07-15

# border-color

## 介绍

用于设置四个边框的颜色，该属性可按顺序设置上边框颜色、右边框颜色、下边框颜色、左边框颜色。

## 语法

```css
/* 四个边框都是红色 */

border-color: red;

/* 上边框是红色 | 右边框是绿色且透明度为0.3 | 下边框缺省与上边框相同 | 左边框缺省与右边框相同 */

border-color: rgb(255, 0, 0) rgba(0, 255, 0, 0.3);

/* 上边框是红色 | 右边框是绿色 | 下边框为自定颜色 | 左边框缺省与右边框相同 */

border-color: #ff0000 #00ff00ff #aabbccdd;
```

### 取值

-   `transparent`

边框颜色为透明。

-   `<color>`

边框具体的颜色。

## 标准化语法

```css
border-color: [transparent | <color>]{1, 4}
```

## 例子

```css
border-color: red;

border-color: rgb(255, 0, 0) rgba(0, 255, 0, 0.3);

border-color: #ff0000 #00ff00ff #aabbccdd;

border-color: black orange transparent pink;

border-color: black rgb(255, 255, 0) #ff00ff pink;

border-color: hsl(89, 43%, 51%) hsla(89, 43%, 51%, 0.3) transparent pink;
```
