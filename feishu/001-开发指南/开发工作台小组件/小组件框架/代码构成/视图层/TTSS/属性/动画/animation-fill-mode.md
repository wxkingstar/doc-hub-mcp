---
title: "animation-fill-mode"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/animation/animation-fill-mode
---
最后更新于 2022-07-15

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
