---
title: "switch"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/form/switch
---
最后更新于 2022-03-08

# switch

开关选择器。

|属性名|类型|默认值|说明|
|-----|---|-----|---|
|checked|Boolean|false|是否选中|
|type|String|switch|样式，有效值：switch，checkbox|
|bindchange|EventHandle||checked 改变时触发该事件，event.detail={value:checked}|
|color|Color|#04BE02|switch的颜色，同 css 的 color|

## 代码示例

```html
<view class="container">
  <view class="page-body">
    <view class="page-section page-section-gap">
      <view class="page-section-title">{{default_style}}</view>
      <view class="body-view">
        <switch checked bindchange="switch1Change"/>
        <switch bindchange="switch2Change"/>
      </view>
    </view>

<view class="page-section">
      <view class="page-section-title">{{recommend_display_style}}</view>
      <view class="weui-cells weui-cells_after-title">
        <view class="weui-cell weui-cell_switch">
          <view class="weui-cell__bd">{{selected}}</view>
          <view class="weui-cell__ft">
            <switch checked />
          </view>
        </view>
        <view class="weui-cell weui-cell_switch">
          <view class="weui-cell__bd">{{unselected}}</view>
          <view class="weui-cell__ft">
            <switch />
          </view>
        </view>
      </view>
    </view>
  </view>

</view>

```

```js
const iSwitch = i18n.switch
console.log(i18n)

Page({
  data: {
    ...iSwitch
  },
  switch1Change: function (e){
    console.log('switch1 change ，data:', e.detail.value)
  },
  switch2Change: function (e){
    console.log('switch2 change ，data:', e.detail.value)
  }
})
```

```json
{
    "navigationBarTitleText": "switch"
}
```
