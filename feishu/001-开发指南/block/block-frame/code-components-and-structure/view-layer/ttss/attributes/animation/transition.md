<!--
title: transition
id: 6989248828928540673
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/animation/transition
-->
# transition

## 介绍

用于设置元素过渡动画效果，是`transition-property`、`transition-duration`、`transition-timing-function`、`transition-delay`的简写属性。

## 语法

```css
/* property name | duration | delay */
transition: width 4s 1s;

/* property name | duration | timing function */

transition: background-color 4s ease-in-out;

/* property name | duration | timing function | delay */

transition: opacity 4s ease-in-out 1s;
```

## 标准化语法

```css
transition: <transition-property> || <transition-duration> || <transition-timing-function> || <transition-delay>
```