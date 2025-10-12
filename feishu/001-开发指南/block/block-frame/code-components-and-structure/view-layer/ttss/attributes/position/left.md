<!--
title: left
id: 6989248828936159234
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/left
updatedAt: 1657871780000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/position/left
-->
# left

## 介绍

`left`属性定义了定位元素的上外边距边界与其包含块上边界之间的偏移，非定位元素设置此属性无效。即只有设置了如下属性的元素才可以使用`left`属性。

```css
position: fixed;
position: absolute;
```

`left`的效果取决于元素的`position`属性：当`position`设置为 `absolute`或`fixed`时，`left`属性指定了定位元素左外边距边界与其包含块左边界之间的偏移。

## 语法

```css
/* <length> values */
left: 3px;
left: 2rpx;
left: 2.4em;
left: 3rem;
/* 参照于包含块高度的百分比 */
left: 10%;
/* Keyword value */
left: auto;
/* calc */
left: calc(1px + 1px);
```

### 取值

-   `auto`

-   `<length>`

-   `<percentage>`


-   `calc()`

## 标准化语法

```css
left: auto | <length> | <percentage> | <function>
```