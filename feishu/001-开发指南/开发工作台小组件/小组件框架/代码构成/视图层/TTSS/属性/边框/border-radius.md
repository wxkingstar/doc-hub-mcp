---
title: "border-radius"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/border/border-radius
---
最后更新于 2022-07-15

# border-radius

## 介绍

用于添加圆角边框。

## 语法

```css
border-radius: 1em / 5em;

/* 等价于： */

border-top-left-radius: 1em 5em;

border-top-right-radius: 1em 5em;

border-bottom-right-radius: 1em 5em;

border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* 等价于： */

border-top-left-radius: 4px 2px;

border-top-right-radius: 3px 4px;

border-bottom-right-radius: 6px 2px;

border-bottom-left-radius: 3px 4px;
```

### 取值

-   `<length>`

定义圆角的形状。

-   `<percentage>`

以百分比定义圆角的形状

## 标准化语法

```css
border-radius: [<length> | <percentage>]{1, 2}
```
