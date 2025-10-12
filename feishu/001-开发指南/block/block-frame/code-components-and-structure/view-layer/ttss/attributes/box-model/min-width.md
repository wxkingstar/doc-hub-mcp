<!--
title: min-width
id: 6989248889124274178
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/min-width
updatedAt: 1657871783000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/min-width
-->
# min-width

## 介绍

用来给给定元素设置最小宽度。它可以阻止`width`属性的应用值小于`min-width`的值。 `min-width`的值会同时覆盖`max-width`和`width`。

## 语法

```css
/* <length> */

min-width: 120px;

min-width: 10em;

/* <percentage> */

min-width: 75%;
```

### 取值

-   `<length>`

固定的最小宽度。负值会让该声明失效。

-   `<percentage>`

以父级块级容器宽度的百分比作为最小宽度。

### 标准化语法

```css
min-width: <length> | <percentage>
```
