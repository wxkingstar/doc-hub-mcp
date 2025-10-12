---
title: "swiper"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/view-container/swiper
---
最后更新于 2022-03-08

# swiper

滑块视图容器，其中只可放置 `<swiper-item/>` 组件，否则可能导致异常。

|属性名|类型|默认值|说明|
|----|--|--|--|
|indicator-dots|Boolean|false|是否显示面板指示点|
|indicator-color|String|rgba(0, 0, 0, .3)|指示点颜色|
|indicator-active-color|String|rgba(0, 0, 0, 0)|当前选中的指示点颜色|
|autoplay|Boolean|false|是否自动切换|
|current|Number|0|当前选中滑块的 index|
|current-item-id|String|""|当前选中滑块的组件 id，<br>不能与 current 属性同时指定|
|interval|Number|5000|自动切换时间间隔|
|display-multiple-items|Number|1|同时显示的滑块数量|
|duration|Number|500|滑动动画时长|
|circular|Boolean|false|是否循环播放（首尾衔接）|
|vertical|Boolean|false|滑块放置方向是否为竖直|
|bindchange|EventHandler||current 改变时会触发 change 事件，<br>event.detail = {current: current, source: source}|

`change` 事件的 source 字段表示导致改变的原因，可以有如下值：

* `autoplay` 自动播放导致 swiper 变化
* `touch` 用户划动导致 swiper变化
* 其他原因将用空字符串表示。

# swiper-item

滑块视图内容。仅可放置在 `<swiper/>` 组件中，宽高自动设置为100%。

|属性名|类型|默认值|说明|
|----|--|--|--|
|item-id|String|""|组件 id|

## 代码示例

```html
<view class="container">
  <view class="page-body">
    <view class="page-section page-section-spacing swiper">
      <swiper indicator-dots="{{indicatorDots}}" vertical="{{vertical}}" bindchange="currentChange"
        autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
        <block tt:for="{{background}}" tt:key="*this">
          <swiper-item>
            <view class="swiper-item {{item}}"></view>
          </swiper-item>
        </block>
      </swiper>
    </view>
    <view class="page-section" style="margin-top: 40rpx;margin-bottom: 0;">
      <view class="weui-cells weui-cells_after-title">
        <view class="weui-cell weui-cell_switch">
          <view class="weui-cell__bd">{{indicator}}</view>
          <view class="weui-cell__ft">
            <switch checked="{{indicatorDots}}" bindchange="changeIndicatorDots" />
          </view>
        </view>
        <view class="weui-cell weui-cell_switch">
          <view class="weui-cell__bd">{{auto_play}}</view>
          <view class="weui-cell__ft">
            <switch checked="{{autoplay}}" bindchange="changeAutoplay" />
          </view>
        </view>
        <view class="weui-cell weui-cell_switch">
          <view class="weui-cell__bd">{{vertical_direction}}</view>
          <view class="weui-cell__ft">
            <switch checked="{{vertical}}" bindchange="changeVertical" />
          </view>
        </view>
      </view>
    </view>

<view class="page-section page-section-spacing">
      <view class="page-section-title">
        <text>{{change_duration}}</text>
        <text class="info">{{duration}}</text>
      </view>
      <slider bindchange="durationChange" bindchanging="durationChanging" value="{{duration}}" min="500" max="2000"/>
      <view class="page-section-title">
        <text>{{gap_duration}}</text>
        <text class="info">{{interval}}</text>
      </view>
      <slider bindchange="intervalChange" bindchanging="intervalChanging" value="{{interval}}" min="2000" max="10000"/>
    </view>
  </view>

</view>

```

```js
const swiper = i18n.swiper
Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    ...swiper
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  intervalChanging: function (e){
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e){
    this.setData({
      duration: e.detail.value
    })
  },
  durationChanging: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  currentChange: function (e) {
    console.log(e)
  }
})

```

```css
button{
  margin-bottom: 30rpx;
}
button:last-child{
  margin-bottom: 0;
}
.page-section-title{
  padding: 0;
}
.swiper-item{
  display: block;
  height: 150px;
}
.page-section-title{
  margin-top: 60rpx;
  position: relative;
}
.info{
  position: absolute;
  right: 0;
  color: #353535;
  font-size: 30rpx;
}
.page-foot{
  margin-top: 50rpx;
}
```

```json
{
    "navigationBarTitleText": "swiper"
}

```
