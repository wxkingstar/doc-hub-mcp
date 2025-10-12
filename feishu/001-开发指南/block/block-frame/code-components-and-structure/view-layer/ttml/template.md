<!--
title: 模版
id: 6989248828935487490
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttml/template
updatedAt: 1657871749000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttml/template
-->
# 模板


TTML 提供模板（template 标签），可以在模板中定义代码片段，然后在不同的地方使用。

## 定义模板

使用 `name` 属性，作为模板的名字。然后在 `<template/>` 内定义代码片段，如：

```html
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

`template` 内的作用域是与外界独立的，你无法使用任何外界的变量（也包括模板定义所在实例的 `data`），只能使用主动传递给模板的变量（见*使用模板*）。

> `name` 不支持插值表达式。

当模板被定义之后，只能在当前 TTML 内使用或者通过引用在其他 TTML 下使用。

模板的定义不受所在位置的影响，所有的模板定义都会被提升到顶层，不允许模板重名。

## 使用模板

使用 `is` 属性，声明需要的使用的模板，然后将模板所需要的 `data` 传入，如：

```html
<template is="msgItem" data="{{index: 0, msg: 'Hello', time: 'Today'}}"/>
```

还可以使用插值表达式动态决定渲染哪个模板：

```html
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block tt:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 === 0 ? 'even' : 'odd'}}"/>
</block>
```
