---
title: "top"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/position/top
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871780000
---
最后更新于 2022-07-15

# top

## 介绍

`top`属性定义了定位元素的上外边距边界与其包含块上边界之间的偏移，非定位元素设置此属性无效。即只有设置了如下属性的元素才可以使用`top`属性。

```css
position: fixed;
position: absolute;
```

`top`的效果取决于元素的`position`属性：当`position`设置为 `absolute`或`fixed`时，`top`属性指定了定位元素上外边距边界与其包含块上边界之间的偏移。

## 语法

```css
/* <length> */
top: 3px;
top: 2rpx;
top: 2.4em;
top: 3rem;
/* 参照于包含块高度的百分比 */
top: 10%;
/* Keyword value */
top: auto;
/* calc */
top: calc(1px + 1px);
```

### 取值

-   `auto`

-   `<length>`

-   `<percentage>`

-   `calc()`

## 标准化语法

```css
top: auto | <length> | <percentage> | <function>
```
