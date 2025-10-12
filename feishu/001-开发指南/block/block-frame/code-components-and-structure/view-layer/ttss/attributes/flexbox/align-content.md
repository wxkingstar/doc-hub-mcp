<!--
title: align-content
id: 6989248828936192002
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/align-content
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/flexbox/align-content
-->
# align-content

## 介绍

属性设置`flex`容器内的各个元素在垂直方向上的排列方式。

## 语法

```css
align-content: stretch;

align-content: center;

align-content: flex-start;

align-content: flex-end;

align-content: space-between;

align-content: space-around;
```

### 取值

-   `stretch`

**默认值。** 弹性元素在交叉轴方向被拉伸到与容器相同的高度或宽度。

-   `center`

元素在交叉轴居中。

-   `flex-start`

元素在交叉轴上对齐起始位置。

-   `flex-end`

元素在交叉轴上对齐结尾位置。

-   `space-between`

使元素位于各行间留有空白的容器内。

-   `space-around`

使元素位于各行之前，之间和之后都留有空白的容器内。

## 标准化语法

```css
align-content: stretch | center | flex-start | flex-end | space-between | space-around
```