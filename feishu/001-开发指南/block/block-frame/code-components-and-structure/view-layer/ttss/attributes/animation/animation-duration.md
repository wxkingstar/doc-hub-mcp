<!--
title: animation-duration
id: 6989248828936437762
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-duration
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/animation/animation-duration
-->
# animation-duration

## 介绍

用于设置动画持续的时间。

## 语法

```css
/* time */
animation-duration: 100ms;
```

### 取值

-   `<time>`

定义动画的持续时间，默认为`0`。

### 标准化语法

```css
animation-duration: <time>
```

## 注意事项

-   如果持续时间为`0`，则动画不开启。
-   需要注明时间单位（`s`, `ms`），否则动画异常。