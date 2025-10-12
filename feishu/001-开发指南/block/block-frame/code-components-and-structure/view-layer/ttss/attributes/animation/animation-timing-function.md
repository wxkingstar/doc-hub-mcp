<!--
title: animation-timing-function
id: 6989248889123930114
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-timing-function
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/animation/animation-timing-function
-->
# animation-timing-function

## 介绍

用于设置播放动画的时间函数。

## 语法

```css
/* keyword */

animation-timing-function: ease;

animation-timing-function: ease-in;

animation-timing-function: ease-out;

/* Function values */

animation-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
```

### 取值

-   `linear`


-   `ease`


-   `ease-in`


-   `ease-out`


-   `ease-in-out`


-   `square-bezier()`


-   `cubic-bezier()`

## 标准化语法

```css
animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | <function>
```

## 注意事项

-   iOS 不支持贝塞尔曲线插值大于`1`（iOS 平台限制）。