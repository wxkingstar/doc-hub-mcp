---
title: "max-width"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/max-width
---
最后更新于 2022-07-15

# max-width

## 介绍

用来给元素设置最大宽度值。

定义了 `max-width` 的元素会在达到 `max-width` 值之后避免进一步按照 `width` 属性设置变大。 `max-width` 会覆盖 `width` 设置，但 `min-width` 设置会覆盖 `max-width`。

## 语法

```css
/* <length> */

max-width: 120px;

max-width: 10em;

/* <percentage> */

max-width: 75%;
```

### 取值

-   `<length>`

固定的最大宽度。负值会让该声明失效。

-   `<percentage>`

以父级块级容器宽度的百分比作为最大宽度。

### 标准化语法

```css
max-width: <length> | <percentage>
```
