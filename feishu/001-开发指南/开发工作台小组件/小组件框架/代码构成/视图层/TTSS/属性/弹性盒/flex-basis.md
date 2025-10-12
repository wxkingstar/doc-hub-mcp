---
title: "flex-basis"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/flexbox/flex-basis
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871781000
---
最后更新于 2022-07-15

# flex-basis

## 介绍

定义`flex`元素在`flex`容器的主轴上的初始大小，在`flex`容器中与`width`/`height`表示大小的含义一致，优先级比`width`/`height`高，受`box-sizing`影响决定占用主轴的空间。

## 语法

```css
flex-basis: 10em;

flex-basis: 3px;

flex-basis: 10%;

flex-basis: auto;
```

### 取值

-   `auto`

**默认值。** 参照自身的`width`和`height`属性。

-   `<length>`

绝对尺寸大小。

-   `<percentage>`

相对于父元素尺寸的百分比。

## 标准化语法

```css
flex-basis: auto | <length> | <percentage>
```

## 例子

```html
<view class="container">
  <view style="flex-basis:auto;background-color:rgba(255,0,200,0.2);flex-grow:1">
    <text>flex-basis:auto</text>
  </view>
  <view style="margin-left:5px;background-color:rgba(0,0,255,0.2);flex-grow:1">
    <text>Item Two</text>
  </view>
  <view style="margin-left:5px;background-color:rgba(0,0,255,0.2);flex-grow:1">
    <text>Item Three</text>
  </view>
</view>
```

## 注意事项

-   此属性不具备继承关系。
