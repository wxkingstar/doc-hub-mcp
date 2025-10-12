---
title: "margin"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/margin
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871783000
---
最后更新于 2022-07-15

# margin

## 介绍

TTSS 简写属性，控制元素所有四条边的外边距属性。一个元素的外边距控制的是元素外部空出的空间。该属性可以为负值，默认为0。

## 语法

```css
/* 应用于所有边 */
margin: 1em;
/* 上边下边 | 左边右边 */
margin: 5% -10%;
/* 上边 | 左边右边 | 下边 */
margin: -1em 2em 2em;
/* 上边 | 右边 | 下边 | 左边 */
margin: 5px -1em 0 2em;
```

### 取值

-   `<length>`

以固定值为外边距。

-   `<percentage>`

相对于包含块的宽度，以百分比值为外边距。

### 标准化语法

```css
margin: [<length> | <percentage>]{1, 4}
```

## 例子

```html
<view class="outside">
	<text>此元素会显示在包含块之外。</text>
</view>
```

```css
.outside {
  margin: 3em 0 0 -3em;
  background: red;
  width: 66%;
}
```
