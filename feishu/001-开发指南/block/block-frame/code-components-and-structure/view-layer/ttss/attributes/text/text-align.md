<!--
title: text-align
id: 6989248828935716866
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-align
updatedAt: 1657871780000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/text/text-align
-->
# text-align

## 介绍

定义行内内容（例如文字）如何相对它的块父元素对齐。

它并不控制块元素自己的对齐，只控制它的行内内容的对齐。

## 语法

```css
text-align: left;

text-align: right;

text-align: center;

text-align: start;

text-align: end;
```

### 取值

-   `left`

行内内容向左侧边对齐。

-   `right`

行内内容向右侧边对齐。

-   `center`

行内内容居中。

-   `start`

文字对齐阅读开始方向侧边。

`LTR`模式下等加`left`；`RTL`模式下等价`right`。

-   `end`

文字对齐阅读开始方向侧边。

`LTR`模式下等加`right`；`RTL`模式下等价`left`。

## 标准化语法

```css
text-align: left | right | center | start | end
```