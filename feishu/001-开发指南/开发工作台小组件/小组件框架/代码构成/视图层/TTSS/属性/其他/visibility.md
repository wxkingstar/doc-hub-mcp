---
title: "visibility"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/other/visibility
---
最后更新于 2022-07-15

# visibility

## 介绍

用于显示或隐藏元素而不更改文档的布局。元素在设置了 `visibility` 之后，绑定在该元素身上的 `tap` 事件会失效。

## 语法

```css
/* 默认值，表示元素正常显示。 */

visibility: visible;

/* 隐藏元素，但是其他元素的布局不改变，相当于此元素变成透明。*/

visibility: hidden;
```

### 取值

-   `visible`

元素正常显示

-   `hidden`

隐藏元素，但是其他元素的布局不改变，相当于此元素变成透明

### 标准化语法

```css
visibility: visible | hidden;
```

## 例子

```html
<view class="container">
    <text style="visibility:visible">hello world</text>
    <text style="visibility:hidden">hidden world</text>
</view>
```

```css
.container{
    width:750rpx;
    height:300px;
    background-color:#fff;
    visibility: visible;
}
```

## 注意事项

`visibility: hidden` Android 端无效，需要设置 `flatten=false`

```html
<view class="container">
    <text style="visibility:visible">hello world</text>
    <text flatten={{false}}>hidden world</text>
</view>
```
