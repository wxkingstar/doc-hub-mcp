<!--
title: flex-shrink
id: 6989248828936126466
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-shrink
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/flexbox/flex-shrink
-->
# flex-shrink

## 介绍

定义`flex`元素在主轴的缩放系数。`flex`容器将元素排版完后，如果存在元素溢出，会根据元素的缩放系数比例将对应的元素进行缩放保证元素不会溢出容器。

## 语法

```css
flex-shrink: 2;

flex-shrink: 0;
```

### 取值

-   `<number>`

纯数字，负值无效，`0`表示不会缩放，默认为`1`。

## 标准化语法

```css
flex-shrink: <number>
```

## 例子

```html
<view class="container">
  <view class="height" style="background-color:rgba(0,255,0,0.2);flex-shrink:1;">
    <text>flex-shrink:1</text>
  </view>
  <view class="height" style="background-color:rgba(0,255,0,0.2);flex-shrink:2;margin-left:10px;">
    <text>flex-shrink:2</text>
  </view>
  <view class="height" style="background-color:rgba(0,0,255,0.2);flex-shrink:0;margin-left:10px;width:30%">
    <text>Item Two</text>
  </view>
  <view class="height" style="background-color:rgba(255,0,0,0.2);flex-shrink:0;margin-left:10px;width:40%">
    <text>Item Three</text>
  </view>
</view>
```

## 注意事项

-   此属性不具备继承关系。