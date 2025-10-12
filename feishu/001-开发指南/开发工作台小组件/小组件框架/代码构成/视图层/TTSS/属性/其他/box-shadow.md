---
title: "box-shadow"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/other/box-shadow
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871783000
---
最后更新于 2022-07-15

# box-shadow

## 介绍

`box-shadow` 属性用于在元素的框架上添加阴影效果，该属性可设置的值包括 X 轴偏移、Y 轴偏移、阴影模糊半径、阴影扩散半径，和阴影颜色，并以多个逗号分隔。

`box-shadow` 以由逗号分隔的列表来描述一个或多个阴影效果。该属性可以让几乎所有元素的边框产生阴影。如果元素同时设置了 `border-radius`，阴影也会有圆角效果。多个阴影在 z 轴的顺序和多个 `text-shadows` 规则相同（第一个阴影在最上面）。

## 语法

```css
/* x偏移量 | y偏移量 | 阴影颜色 */

box-shadow: 60px -16px teal;

/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */

box-shadow: 10px 5px 5px black;

/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */

box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */

box-shadow: inset 4px 10px gold;

/* 任意数量的阴影，以逗号分隔 */

box-shadow: 3px 3px red, -2px 0 1px olive;
```

指定单个`box-shadow`的用法：

-   给出两个、三个或四个数字值的情况。

-   如果只给出两个值, 这两个值将被浏览器解释为 x 轴上的偏移量 `<offset-x>` 和 `y` 轴上的偏移量 `<offset-y>`。

-   如果给出了第三个值，第三个值将被解释为模糊半径的大小 `<blur-radius>` 。

-   如果给出了第四个值，第四个值将被解释为扩展半径的大小 `<spread-radius>` 。

-   可选， 插页(阴影向内) `inset`。

-   可选， 颜色值 `<color>`。

### 标准化语法

```css
box-shadow: [inset? && <length>{2,4} && <color>]
```

## 例子

```html
<text>
  You may shoot me with your words,

You may cut me with your eyes,

You may kill me with your hatefulness,

But still, like air, I'll rise.
</text>
```

```css
text {
  padding: 20px;
  box-shadow: 
      inset 0 -3em 3em rgba(0, 0, 0, 0.1), 
            0 0 0 2px rgb(255, 255, 255),
            0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
```
