---
title: "right"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/position/right
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871780000
---
最后更新于 2022-07-15

# right

## 介绍

`right`属性定义了定位元素的右外边距边界与其包含块右边界之间的偏移，非定位元素设置此属性无效。即只有设置了如下属性的元素才可以使用`right`属性。

```css
position: fixed;
position: absolute;
```

`right`的效果取决于元素的`position`属性：当`position`设置为 `absolute`或`fixed`时，`right`属性指定了定位元素右外边距边界与其包含块右边界之间的偏移。

## 语法

```css
/* <length> values */
right: 3px;
right: 2rpx;
right: 2.4em;
right: 3rem;
/* 参照于包含块高度的百分比 */
right: 10%;
/* Keyword value */
right: auto;
/* calc */
right: calc(1px + 1px);
```

### 取值

-   `auto`

-   `<length>`

-   `<percentage>`

-   `calc()`

## 标准化语法

```css
right: auto | <length> | <percentage> | <function>
```
