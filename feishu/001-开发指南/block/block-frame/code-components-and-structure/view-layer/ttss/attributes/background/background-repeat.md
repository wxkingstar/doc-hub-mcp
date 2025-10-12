<!--
title: background-repeat
id: 6989248828936028162
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-repeat
updatedAt: 1657871782000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/background/background-repeat
-->
# background-repeat

## 介绍

`background-repeat`属性设定背景图片是否重复渲染以及如何重复渲染。可以用逗号分隔的列表来描述一个或多个背景图片的重复设定，在默认情况下在水平和竖直方向上均重复。背景图片的设置位置由`background-position`来决定，如果`background-position`未设，那么起始放置在左上角。

## 语法

```css
background-repeat: no-repeat;
background-repeat: repeat-x;
background-repeat: repeat-y
background-repeat: repeat;
```

### 取值

-   `repeat`

背景图片在水平和竖直方向上重复渲染，边缘图片如果没有刚好贴合则元素范围外的部分会被剪切。

-   `repeat-x`

背景图片在水平方向上重复渲染，边缘图片如果没有刚好贴合则元素范围外的部分会被剪切。

-   `repeat-y`

背景图片在竖直方向上重复渲染，边缘图片如果没有刚好贴合则元素范围外的部分会被剪切。

-   `no-repeat`

背景图片不重复渲染，图片只会显示一次。

### 标准化语法

```css
background-repeat: repeat | repeat-x | repeat-y | no-repeat
```