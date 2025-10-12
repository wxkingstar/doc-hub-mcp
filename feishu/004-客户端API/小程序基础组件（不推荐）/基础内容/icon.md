---
title: "icon"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/basic-content/icon
---
最后更新于 2022-03-08

# icon

图标。

|属性名|类型|默认值|说明|
|----|--|--|--|
|type|String||icon 的类型，有效值：success 、 success_no_circle 、 info 、 warn 、 waiting 、 clear 、 cancel 、 download 、 search 。|
|size|Number|24|icon 的大小，单位 px。|
|color|String||icon 的颜色|

## 代码示例

```html
<view class="container">
  <text class="title-text">{{i18nText.default_style}}</text>
  <view class="background" >
    <view class="icon-line" tt:for="{{icons}}" tt:for-item="iconline">
      <view class="ttui-flex__item icon-single-wrapper" tt:for="{{iconline}}" tt:for-item="icon">
        <label>
          <icon type="{{icon}}"></icon>
          {{icon}}
        </label>
      </view>
    </view>
  </view>
  <text class="title-text">{{i18nText.title_size}}</text>
  <view class="background icon-line">
    <view class="icon-wrapper" tt:for="{{sizes}}">
      <icon color="#50ABF9" size="{{item}}" type="success"></icon>
      <view class="icon-size">{{item}}</view>
    </view>
  </view>
  <text class="title-text">{{i18nText.title_color}}</text>
  <view class="icon-line background">
    <view class="icon-wrapper" tt:for="{{colors}}">
      <icon size="36" color="{{item}}" type="success"></icon>
    </view>
  <view>
</view>

```

```js
const iIcon = i18n.icon

Page({
  data :{
    icons: [
      ['success', 'success_no_circle'],
      ['info', 'warn'],
      ['waiting', 'clear'],
      ['cancel', 'download'],
      ['search']
    ],
    sizes: [66, 48, 36, 24],
    colors: ['#222222', '#CACACA', '', '#50ABF9'],
    i18nText: iIcon
  },
})
```

```css
.background {
  background-color: #FFFFFF;
  margin-bottom: 40rpx;
}

.title-text {
  font-size: 28rpx;
  margin-left: 20rpx;
}

.icon-line {
  display: flex;
  padding: 24rpx 10rpx;
}

.icon-single-wrapper {
  margin-left: 20rpx;
  width: 50%;
}

.icon-wrapper {
  float: left;
  margin: 10rpx 20rpx;
}

.icon-size {
  text-align: center;
}
```

```json
{
    "navigationBarTitleText": "icon"
}
```
