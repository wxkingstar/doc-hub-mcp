<!--
title: min-height
id: 6989248889123946498
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/min-height
updatedAt: 1657871783000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/min-height
-->
# min-height

## 介绍

用来给给定元素设置最小高度。它可以阻止 `height` 属性的应用值小于 `min-height` 的值。 `min-height` 的值会同时覆盖 `max-height` 和 `height`。

## 语法

```css
/* <length> */

min-height: 120px;

min-height: 10em;

/* <percentage> */

min-height: 75%;
```

### 取值

-   `<length>`

固定的最小高度。负值会让该声明失效。

-   `<percentage>`

以父级块级容器高度的百分比作为最小高度。

### 标准化语法

```css
min-height: <length> | <percentage>
```
