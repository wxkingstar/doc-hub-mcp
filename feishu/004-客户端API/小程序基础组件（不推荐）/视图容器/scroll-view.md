---
title: "scroll-view"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/view-container/scroll-view
---
最后更新于 2024-06-26

# scroll-view

可滚动视图区域。

|属性名|类型|默认值|说明|
|----|--|--|--|
|scroll-x|Boolean|false|设置为横向滚动|
|scroll-y|Boolean|false|设置为竖向滚动|
|upper-threshold|Number|50|距顶部/左边多远时（单位 px），触发 scrolltoupper 事件。|
|lower-threshold|Number|50|距底部/右边多远时（单位 px），触发 scrolltolower 事件。|
|scroll-top|Number||设置竖向滚动条位置|
|scroll-left|Number||设置横向滚动条位置|
|scroll-into-view|String||值应为某子元素id（id 不能以数字开头）。<br>设置哪个方向可滚动，则在哪个方向滚动到该元素。|
|scroll-with-animation|Boolean|false|在设置滚动条位置时使用动画过渡|
|enable-flex|Boolean|false|启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点|
|bindscroll|EventHandler||滚动时触发|
|bindscrolltoupper|EventHandler||滚动到顶部/左边|
|bindscrolltolower|EventHandler||滚动到底部/右边|
|show-scroll-bar|Boolean|false|滚动条显隐控，**PC 端 7.22.0 版本后废弃**|
- 使用竖向滚动时，需要给 <scroll-view/> 一个固定高度，通过 ttss 设置 height。
- scroll-into-view 只能包含 [-_a-zA-Z0-9]。

## 代码示例

```html
<view class="container">
  <view class="page-section-title">
    <text>Vertical Scroll\n纵向滚动</text>
  </view>

<scroll-view class="sub-container" style="height: 300rpx;"
      scroll-y
      scroll-with-animation
      bindscrolltoupper="upper"
      bindscrolltolower="lower"
      bindscroll="scroll"
      scroll-into-view="{{toView}}"
      scroll-top="{{scrollTop}}"
  >
    <view id="demo1" class="scroll-view-item demo-text-1"></view>
    <view id="demo2"  class="scroll-view-item demo-text-2"></view>
    <view id="demo3" class="scroll-view-item demo-text-3"></view>
  </scroll-view>

<view class="sub-container">
    <button bindtap="tap">Scroll into</button>
    <button bindtap="tapMove">Move</button>
  </view>

<view class="page-section-title">
      <text>Horizontal Scroll\n横向滚动</text>
  </view>

<scroll-view class="scroll-view_H sub-container" scroll-x>
      <view id="demo1" class="scroll-view-item_H demo-text-1"></view>
      <view id="demo2"  class="scroll-view-item_H demo-text-2"></view>
      <view id="demo3" class="scroll-view-item_H demo-text-3"></view>
  </scroll-view>
</view>

```

```js
var order = ['demo1', 'demo2', 'demo3']
Page({
  data: {
    toView: 'demo1',
    scrollTop: 0,
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i < order.length - 1 ? i + 1 : 0],
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 20
    })
  }
})
```

```css
.page-section-title{
  padding: 0 40rpx;
  font-size: 25rpx;
  line-height: 2em;
}

.sub-container{
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.scroll-view_H{
  white-space: nowrap;
}
.scroll-view-item{
  height: 300rpx;
}
.scroll-view-item_H{
  display: inline-block;
  width: 100%;
  height: 300rpx;
}
```

```json
{
    "navigationBarTitleText": "scroll-view"
}
```
