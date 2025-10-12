---
title: "flex-wrap"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/flexbox/flex-wrap
---
最后更新于 2022-07-15

# flex-wrap

## 介绍

定义`flex`容器中的元素的在主轴的显示是单行（列）或者多行（列），以及在多行（列）情况下的堆叠方向。

## 语法

```css
flex-wrap: nowrap;

flex-wrap: wrap;

flex-wrap: wrap-reverse;
```

### 取值

-   `nowrap`

**默认值。** `flex`容器中的元素按照主轴的方向排列，有溢出容器的可能。

-   `wrap`

`flex`容器中的元素按照主轴的方向排列，元素会被打断放到不同的行（列）保证主轴方向元素不会溢出容器。

-   `wrap-reverse`

和`wrap`的行为一样，但是行（列）的增加方向相反。

## 标准化语法

```css
flex-wrap: nowrap | wrap | wrap-reverse
```
