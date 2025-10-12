<!--
title: max-height
id: 6989248828928049153
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/max-height
updatedAt: 1657871783000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/max-height
-->
# max-height

## 介绍

用来给元素设置最大高度值。

定义了 `max-height` 的元素会在达到 `max-height` 值之后避免进一步按照 `height` 属性设置变大。

`max-height` 会覆盖 `height` 设置, 但 `min-height` 设置会覆盖 `max-height`。

## 语法

```css
/* <length> */

max-height: 120px;

max-height: 10em;

/* <percentage> */

max-height: 75%;
```

### 取值

-   `<length>`

固定的最大高度。负值会让该声明失效。

-   `<percentage>`

以父级块级容器高度的百分比作为最大高度。

### 标准化语法

```css
max-height: <length> | <percentage>
```
