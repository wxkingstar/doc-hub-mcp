---
title: "padding"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/padding
---
最后更新于 2022-07-15

# padding

## 介绍

TTSS 简写属性，控制元素所有四条边的内边距区域。一个元素的内边距区域指的是其内容与其边框之间的空间。

## 语法

```css
/* 应用于所有边 */

padding: 1em;

/* 上边下边 | 左边右边 */

padding: 5% 10%;

/* 上边 | 左边右边 | 下边 */

padding: 1em 2em 2em;

/* 上边 | 右边 | 下边 | 左边 */

padding: 5px 1em 0 2em;
```

### 取值

-   `<length>`

以固定值为内边距。

-   `<percentage>`

相对于包含块的宽度，以百分比值为内边距。

### 标准化语法

```css
padding: [<length> | <percentage>]{1, 4}
```

## 例子

```html
<view class="a"><text>此元素有合适的内边距。</text></view>
<view class="b"><text>此元素的内边距很大！</text></view>
```

```css
.a {
  background-color: red;
  padding: 20px 50px;
}

.b {
  background-color: blue;
  padding: 110px 50px 50px 110px;
}
```
