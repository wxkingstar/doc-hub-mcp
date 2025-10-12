---
title: "box-sizing"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/box-sizing
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871782000
---
最后更新于 2022-07-15

# box-sizing

## 介绍

定义应该如何计算一个元素的总宽度和总高度

## 语法

```
box-sizing: content-box;

box-sizing: border-box;
```

### 取值

-   `border-box`

`width` 和 `height` 属性包括内容，内边距和边框，但不包括外边距。 注意，填充和边框将在盒子内 , 例如, `.box {width: 350px; border: 10px solid black;}` 导致在视图中呈现的宽度为 `350px` 的盒子。 内容框不能为负，并且被分配到`0`，使得不可能使用 `border-box` 使元素消失。

尺寸计算公式： `width = border + padding + 内容的宽度` 、`height = border + padding + 内容的高度`

宽度和高度的计算值都不包含内容的边框（`border`）和内边距（`padding`）。

-   `content-box`

标准盒子模型。`width` 与 `height` 只包括内容的宽和高，不包括边框（`border`），内边距（`padding`），外边距（`margin`）。 注意: 内边距、边框和外边距都在这个盒子的外部。 比如说，`.box {width: 350px; border: 10px solid black;}`在视图中的渲染的实际宽度将是`370px`。

尺寸计算公式： `width = 内容的宽度` 、`height = 内容的高度`

### 标准化语法

```
box-sizing: border-box | content-box;
```

## 例子

```
<view class="content-box">
	<text>Content box</text>
</view>

<view class="border-box">
	<text>Border box</text>
</view>
```

```
view {

width: 160px;

height: 80px;

padding: 20px;

border: 8px solid red;

background: yellow;

}

.content-box {

box-sizing: content-box;

/* Total width: 160px + (2 * 20px) + (2 * 8px) = 216px

Total height: 80px + (2 * 20px) + (2 * 8px) = 136px

Content box width: 160px

Content box height: 80px */

}

.border-box {

box-sizing: border-box;

/* Total width: 160px

Total height: 80px

Content box width: 160px - (2 * 20px) - (2 * 8px) = 104px

Content box height: 80px - (2 * 20px) - (2 * 8px) = 24px */

}
```
