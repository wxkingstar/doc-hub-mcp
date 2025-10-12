---
title: "animation-direction"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/animation/animation-direction
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871781000
---
最后更新于 2022-07-15

# animation-direction

## 介绍

用于设置播放动画的方向。

## 语法

```css
animation-direction: normal;

animation-direction: reverse;

animation-direction: alternate;

animation-direction: alternate-reverse;
```

### 取值

-   `normal`

**默认值。** 每个循环内动画向前循环，换言之，每个动画循环结束，动画重置到起点重新开始。

-   `reverse`

反向运行动画，每周期结束动画由尾到头运行。

-   `alternate`

动画交替反向运行，反向运行时，动画按步后退，同时，带时间功能的函数也反向。

-   `alternate-reverse`

反向交替， 反向开始交替。动画第一次运行时是反向的，然后下一次是正向，后面依次循环。决定奇数次或偶数次的计数从`1`开始。

## 标准化语法

```css
animation-direction: normal | reverse | alternate | alternate-reverse
```
