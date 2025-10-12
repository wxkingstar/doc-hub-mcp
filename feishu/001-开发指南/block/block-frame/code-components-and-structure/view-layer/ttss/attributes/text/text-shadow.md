<!--
title: text-shadow
id: 6989248828936601602
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-shadow
updatedAt: 1657871780000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/text/text-shadow
-->
# text-shadow

## 介绍

为文字添加阴影。可以为文字添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在 X 和 Y 方向的偏移量、模糊半径和颜色值组成。

## 语法

```css
/** 无阴影 */

text-shadow: none;

/** offset-x | offset-y | blur-radius | color */

text-shadow: 1px 1px 2px red;
```

## 标准化语法

```css
text-shadow: none | [ <length>{3} <color> ]
```