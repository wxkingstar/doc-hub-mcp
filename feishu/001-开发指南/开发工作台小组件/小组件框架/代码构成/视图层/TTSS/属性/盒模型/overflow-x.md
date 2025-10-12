---
title: "overflow-x"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/overflow-x
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871783000
---
最后更新于 2022-07-15

# overflow-x

## 介绍

当块级元素的内容在水平方向发生溢出时如何进行裁剪。

## 语法

```css
overflow-x: visible;

overflow-x: hidden;

overflow-x: auto;
```

### 取值

-   `hidden`

**默认值。** 超出元素框的内容默认会被裁剪。

-   `visible`

内容不会被修剪，可以呈现在元素框之外。

-   `auto`

取决于用户代理。如果内容适合填充框内部，则它看起来与可见内容相同，但仍会建立新的块格式化上下文。如果内容溢出，渲染器会提供滚动条。

### 标准化语法

```css
overflow-x: hidden | visible | auto
```
