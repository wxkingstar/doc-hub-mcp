---
title: "animation-duration"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/animation/animation-duration
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871781000
---
最后更新于 2022-07-15

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
