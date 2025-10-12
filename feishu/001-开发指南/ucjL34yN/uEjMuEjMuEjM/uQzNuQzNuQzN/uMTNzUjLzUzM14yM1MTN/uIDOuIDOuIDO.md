<!--
title: 条件渲染
id: 6907569742384807938
fullPath: /uYjL24iN/uIDOuIDOuIDO
updatedAt: 1692954148000
source: https://open.feishu.cn/document/client-docs/gadget/framework/ui-layer/ttml-introduction/ttml-condition-rendering
-->
# 条件渲染

## tt:if

在框架中，使用 `tt:if="{{condition}}"` 来判断是否需要渲染该代码块。

```html
<!-- index.ttml -->
<view tt:if="{{condition}}"> True </view>
```

```js
// index.js
Page({
  data: {
    condition: true
  }
})
```

你也可以使用 `tt:elif` 和 `tt:else` 来添加一个 else 块。

```html
<view tt:if="{{length > 5}}"> 1 </view>
<view tt:elif="{{length > 2}}"> 2 </view>
<view tt:else> 3 </view>
```

## block tt:if

如果你需要同时控制多个标签的渲染，可以使用 `block` 和 `tt:if`，`block` 不会在实际展示页面中产生任何标签。

```html
<block tt:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

## hidden

你也可以通过一个更加简单的属性来控制标签的展示。

::: note
- 因为 `tt:if` 之中的模板也可能包含数据绑定，所以当 `tt:if` 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。同时 `tt:if` 是惰性的，如果在初始渲染时条件为 false，则框架什么也不处理。在条件第一次变为 true 时，才开始局部渲染。
<br>
相比之下，`hidden` 就更加简单：组件始终会被渲染，只是简单的控制显示与隐藏。

- 一般来说，`tt:if` 有更高的切换消耗而 `hidden` 有更高的初始渲染消耗。因此，在需要频繁切换的场景时，推荐使用 `hidden`。在运行时条件可能不改变的场景中，推荐使用 `tt:if`。
:::

```html
<!-- index.ttml -->
<view hidden="{{condition}}"> True </view>
```