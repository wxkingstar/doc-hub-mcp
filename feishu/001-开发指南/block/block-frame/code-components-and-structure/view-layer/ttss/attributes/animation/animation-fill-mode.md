<!--
title: animation-fill-mode
id: 6989248828935946242
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-fill-mode
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/animation/animation-fill-mode
-->
# animation-fill-mode

## 介绍

用于设置动画首尾帧的填充方式。

## 语法

```css
animation-fill-mode: none;

animation-fill-mode: forwards;

animation-fill-mode: backwards;

animation-fill-mode: both;
```

### 取值

-   `none`

**默认值。** 当动画未执行时，动画将不会将任何样式应用于目标，而是已经赋予给该元素的`TTSS`规则来显示该元素。

-   `forwards`

当动画未执行时，动画将不会将任何样式应用于目标，而是已经赋予给该元素的`TTSS`规则来显示该元素。

## 标准化语法

```css
animation-fill-mode: none | forwards | backwards | both
```