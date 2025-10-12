---
title: "align-self"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/flexbox/align-self
---
最后更新于 2022-07-15

# align-self

## 介绍

属性指定当前`flex`行中的`flex`元素（设置元素在其父元素中的交叉轴方向上的对齐方式），并覆盖`align-items`的值。

## 语法

```css
align-self: stretch;

align-self: center;

align-self: flex-start;

align-self: flex-end;
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

## 标准化语法

```css
align-self: stretch | center | flex-start | flex-end
```
