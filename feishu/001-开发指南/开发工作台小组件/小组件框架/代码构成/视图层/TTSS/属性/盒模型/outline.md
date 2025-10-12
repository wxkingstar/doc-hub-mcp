---
title: "outline"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/outline
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871783000
---
最后更新于 2022-07-15

# outline

## 介绍

用于设置轮廓的样式。

该属性可按顺序设置 `outline-color`、`outline-style`、`outline-width`。

`border` 和 `outline` 很类似，但有如下区别：

-   轮廓不占据空间，绘制于元素内容周围。

-   根据规范，轮廓通常是矩形，但也可以是非矩形的。

## 语法

```css
/* 样式 */

outline: solid;

/* 颜色 | 样式 */

outline: #f66 dashed;

/* 样式 | 宽度 */

outline: inset thick;

/* 颜色 | 样式 | 宽度 */

outline: green solid 3px;
```

### 标准化语法

```css
outline: <outline-color> || <outline-style> || <outline-width>
```

## 例子

```html
<view> <text>This text has a special focus style. </text></view>
```

```css
view {
  border: 1px solid;
  border-radius: 3px;
  margin: 10px;
  padding: 5px;
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
```
