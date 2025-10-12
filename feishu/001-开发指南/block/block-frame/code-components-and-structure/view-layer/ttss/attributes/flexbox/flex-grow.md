<!--
title: flex-grow
id: 6989248828928557057
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-grow
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/flexbox/flex-grow
-->
# flex-grow

## 介绍

定义`flex`元素在主轴的增长系数。`flex`容器将元素排版完后，如果存在剩余空间，会根据元素的增长系数比例进行剩余空间的分配。

## 语法

```css
flex-grow: 2;

flex-grow: 0;
```

### 取值

-   `<number>`

纯数字，负值无效，默认为`0`。

## 标准化语法

```css
flex-grow: <number>
```

## 例子

```html
<view class="container">
  <view class="height" style="background-color:rgba(0,255,0,0.2);flex-grow:1;">
    <text>flex-grow:1</text>
  </view>
  <view class="height" style="background-color:rgba(0,0,255,0.2);flex-grow:0;margin-left:10px;order:-2">
    <text>Item Two</text>
  </view>
  <view class="height" style="background-color:rgba(255,0,0,0.2);flex-grow:0margin-left:10px;order:1">
    <text>Item Three</text>
  </view>
</view>
```

## 注意事项

-   此属性不具备继承关系。