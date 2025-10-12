---
title: "min-height"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/min-height
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871783000
---
最后更新于 2022-07-15

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
