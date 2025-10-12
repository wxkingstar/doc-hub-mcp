<!--
title: flex
id: 6989248889123618818
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/flexbox/flex
-->
# flex

## 介绍

定义`flex`元素的伸缩因子以适应`flex`容器的可用空间，目前`flex`属性等同于`flex-grow`。

## 语法

```css
flex: 2;

flex: 0;
```

### 取值

-   `<number>`

目前此值效果与`flex-grow`等同。

## 标准化语法

```css
flex: <number>
```

## 例子

```html
<view style="flex:2;background-color:rgba(255,0,200,0.2)">
  <text>flex:2</text>
</view>

<view style="flex:1;margin-left:5px;background-color:rgba(0,0,255,0.2)">
  <text>flex:1</text>
</view>

<view style="flex:1;margin-left:5px;background-color:rgba(0,0,255,0.2)">
  <text>flex:1</text>
</view>
```

## 注意事项

-   如果`flex`属性被重置（在`Inspector`删除属性或者`DSL`标签复用过程中的属性重置），会默认将`flex-grow`置为默认值`0`，`flex-shrink`被置为默认值`1`，`flex-basis`被置为默认值`auto`。
-   移动端Native模式下，Block实际高度超过容器默认高度，需要使用`flex-shrink: 1`属性去保证Block内容不被压缩