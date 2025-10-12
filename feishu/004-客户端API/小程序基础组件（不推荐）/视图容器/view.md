---
title: "view"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/view-container/view
---
最后更新于 2022-03-08

# view

视图容器，类似 DIV。

|属性名|类型|默认值|说明|
|----|--|--|--|
|hover-class|String|none|指定按下去的样式类。<br>当 hover-class="none" 时，没有点击态效果。|
|hover-start-time|Number|50|按住后多久出现点击态，单位毫秒。|
|hover-stay-time|Number|400|手指松开后点击态保留时间，单位毫秒。|
|hover-stop-propagation|Boolean|false|指定是否阻止本节点的祖先节点出现点击态。|

## 代码示例

```html
<view class="container">

<view class="page-body">
    <view class="page-section">
      <view class="page-section-title">
        <text>{{direction_row}}</text>
      </view>
    <view>
      <view class="page-section-spacing">
        <view class="flex-wrp" style="flex-direction:row;">
          <view hover-class="hover" class="flex-item demo-text-1"></view>
          <view hover-class="hover" class="flex-item demo-text-2"></view>
          <view hover-class="hover" class="flex-item demo-text-3"></view>
        </view>
      </view>
    </view>
    <view class="page-section">
      <view class="page-section-title">
        <text>{{direction_column}}</text>
      </view>
      <view class="flex-wrp" style="flex-direction:column;">
        <view class="flex-item flex-item-V demo-text-1"></view>
        <view class="flex-item flex-item-V demo-text-2"></view>
        <view class="flex-item flex-item-V demo-text-3"></view>
      </view>
    </view>
  </view>
</view>
```

```js
const iText = i18n.view

Page({
  data: {
    ...iText
  }
})
```

```css
.flex-wrp{
  display:flex;
}
.flex-item{
  width: 200rpx;
  height: 300rpx;
  font-size: 26rpx;
}
.flex-item-V{
  margin: 0 auto;
  width: 300rpx;
  height: 200rpx;
}

.page-section{
  margin-top: 40rpx;
}

.hover{
  background-color: green;
}
```

```json
{
    "navigationBarTitleText": "view"
}

```
