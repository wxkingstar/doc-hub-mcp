---
title: "width"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/width
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871783000
---
最后更新于 2022-07-15

# width

## 介绍

指定了一个元素的宽度。

默认情况下，这个属性决定的是内容区（`content area`）的宽度，但是如果将 `box-sizing` 设置为 `border-box`, 这个属性决定的将是边框区域（`border area`）的宽度。

## 语法

```css
/* <length> */

width: 120px;

width: 10em;

/* <percentage> */

width: 75%;
```

### 取值

-   `auto`

容器的宽度将由其内容的总宽度决定。

-   `<length>`

将宽度定义为一个绝对值。

-   `<percentage>`

将宽度定义为相对包含块宽度的百分比。

### 标准化语法

```css
width: auto | <length> | <percentage>
```
