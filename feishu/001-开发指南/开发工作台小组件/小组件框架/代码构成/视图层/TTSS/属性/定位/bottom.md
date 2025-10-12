---
title: "bottom"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/position/bottom
---
最后更新于 2022-07-15

# bottom

## 介绍

`bottom`属性定义了定位元素的下外边距边界与其包含块下边界之间的偏移，非定位元素设置此属性无效。即只有设置了如下属性的元素才可以使用`bottom`属性。

```css
position: fixed;
position: absolute;
```

`bottom`的效果取决于元素的`position`属性：当`position`设置为 `absolute`或`fixed`时，`bottom`属性指定了定位元素下外边距边界与其包含块下边界之间的偏移。

## 语法

```css
/* <length> values */
bottom: 3px;
bottom: 2rpx;
bottom: 2.4em;
bottom: 3rem;
/* 参照于包含块高度的百分比 */
bottom: 10%;
/* Keyword value */
bottom: auto;
/* calc */
bottom: calc(1px + 1px);
```

### 取值

-   `auto`

-   `<length>`

-   `<percentage>`

-   `calc()`

## 标准化语法

```css
bottom: auto | <length> | <percentage> | <function>
```
