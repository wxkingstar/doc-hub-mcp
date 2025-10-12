<!--
title: content
id: 6989248889124028418
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/content
updatedAt: 1657871783000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/other/content
-->
# content

## 介绍

用于在元素的 `::before` 和 `::after` 伪元素中插入内容。默认是行内内容，不过该内容创建的框类型可以用属性 `display` 控制。

## 语法

```css
/* Keywords that cannot be combined with other values */

content: normal

content: none

content: counter

/* <string> value */

content: 'prefix'

/* <uri> value */

content: url(http://www.example.com/test.html)

/* <counter> values */

content: chapter_counter

/* attr() value linked to the HTML attribute value */

content: attr(value string)

/* Language- and position-dependant keywords */

content: open-quote

content: close-quote

content: no-open-quote

content: no-close-quote
```

### 取值

-   `none`

**默认值。** 不会产生伪类元素。

-   `normal`

`:before` 和 `:after` 伪类元素中会被视为`none`。

-   `open-quote`

设置为开始引号。

-   `close-quote`

设置为闭合引号。

-   `no-open-quote`

移除内容的开始引号。

-   `no-close-quote`

移除内容的闭合引号。

-   `<string>`

设置为该文本内容。

-   `url()`

设置某种媒体（图像，声音，视频等内容）。

-   `counter()`

设定计数器内容。

-   `attr()`

指定为某个属性的内容。

### 标准化语法

```css
content: none | normal | counter | open-quote | close-quote | no-open-quote | no-close-quote | <string> | <function>
```

## 例子

```html
<a>this is a.</a>
```

```css
a::after {
  content: 'this is after a.';
}
```

上述例子最终会显示：this is a.this is after a.
