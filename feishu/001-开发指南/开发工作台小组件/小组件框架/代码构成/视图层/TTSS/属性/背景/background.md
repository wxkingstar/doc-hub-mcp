---
title: "background"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/background/background
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871782000
---
最后更新于 2022-07-15

# background

## 介绍

`background`属性是如下属性的简写： `background-color` `background-image`

`background`并不要求如上每一种属性都有，没有的即采取默认属性。

## 语法

```css
/* bg-color bg-image */
background: green url('https://www.w3school.com.cn/i/bg_flower.gif');
```

### 标准化语法

```css
background: <bg-color> || <bg-image>
```

## 例子

```html
<text class="warning">Here is a paragraph<text></text></text>
```

```css
.warning {
  background: pink;
}
```

## 注意事项

-   background 组合属性目前仅支持`  background-color ` & `background-image`，其他背景相关属性都必须单独书写
