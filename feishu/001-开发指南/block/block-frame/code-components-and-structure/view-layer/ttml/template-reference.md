<!--
title: 引用
id: 6989248828935929858
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttml/template-reference
updatedAt: 1657871749000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttml/template-reference
-->
# 引用


TTML 提供两种文件引用方式：`import` 和 `include`。

## import

`import` 可以在该文件中使用目标文件定义的 `template`，如：

在 item.ttml 中定义了一个叫 `item` 的 `template`：

```html
<!-- item.ttml -->
<template name="item">
    <text>{{text}}</text>
</template>
```

在 index.ttml 中引用了 item.ttml，就可以使用 `item` 模板：

```html
<!-- index.ttml -->
<import src="item.ttml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

### import 的作用域

`import` 有作用域的概念，即只会 `import` 目标文件中定义的 `template`，而不会 `import` 目标文件 `import` 的 `template`。

**如：C import B，B import A，在 C 中可以使用 B 定义的 template，在 B 中可以使用 A 定义的 template，但是 C 不能使用 A 定义的 template。**

```html
<!-- A.ttml -->
<template name="A"> <text> A template </text></template>

<!-- B.ttml -->
<import src="a.ttml"/>
<template name="B">
    <text> B template </text>
</template>

<!-- C.ttml -->
<import src="b.ttml"/>
<template is="A"/><!-- Error! Can not use tempalte when not import A. -->

<template is="B"/>
```

## include

include 可以将目标文件除了 `<template/>` 外的整个代码引入，相当于是拷贝到 include 位置，如：

```html
<!-- index.ttml -->
<include src="header.ttml"/>
<view><text>body</text></view>
<include src="footer.ttml"/>

<!-- header.ttml -->
<view><text>header</text></view>

<!-- footer.ttml -->
<view><text>footer</text></view>
```
