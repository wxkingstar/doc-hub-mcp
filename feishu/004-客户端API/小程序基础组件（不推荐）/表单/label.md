---
title: "label"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/form/label
last_remote_update: 2022-03-08
last_remote_update_timestamp: 1646733929000
---
最后更新于 2022-03-08

# label

用来改进表单组件的可用性，使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件。

for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。

目前可以绑定的控件有：`<button/>`, `<checkbox/>`, `<radio/>`, `<switch/>`。

|属性名|类型|默认值|说明|
|-----|---|-----|---|
|for|String||绑定控件的 id|

## 代码示例

```html
<view class="container">
  <view class="page-body">
    <view class="page-section page-section-gap">
      <view class="page-section-title">{{label_title_one}}</view>
      <checkbox-group class="group" bindchange="checkboxChange">
        <view class="label-1" tt:for="{{checkboxItems}}">
          <label>
            <checkbox value="{{item.name}}" checked="{{item.checked}}"></checkbox>
            <text class="label-1-text">{{item.value}}</text>
          </label>
        </view>
      </checkbox-group>
    </view>

<view class="page-section page-section-gap">
      <view class="page-section-title">{{label_title_two}}</view>
      <radio-group class="group" bindchange="radioChange">
        <view class="label-2" tt:for="{{radioItems}}">
          <radio id="{{item.name}}" value="{{item.name}}" checked="{{item.checked}}"></radio>
          <label class="label-2-text" for="{{item.name}}"><text>{{item.name}}</text></label>
        </view>
      </radio-group>
    </view>

<view class="page-section page-section-gap">
      <view class="page-section-title">{{label_title_three}}</view>
      <label class="label-3">
        <checkbox class="checkbox-3">{{option_one}}</checkbox>
        <checkbox class="checkbox-3">{{option_two}}</checkbox>
        <view class="label-3-text">{{default_one}}</view>
      </label>
    </view>
  </view>

</view>

```

```js
const iLabel = i18n.label

Page({
  data: {
    checkboxItems: [
      {name: 'apple', value: 'apple'},
      {name: 'peal', value: 'peal', checked: 'true'}
    ],
    radioItems: [
      {name: 'apple', value: 'apple'},
      {name: 'peal', value: 'peal', checked: 'true'}
    ],
    hidden: false,
    ...iLabel
  },
  checkboxChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  radioChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i ++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  tapEvent: function (e) {
    console.log('button clicked')
  }
})

```

```css
.label-1, .label-2{
  margin: 30rpx 0;
}
.label-3-text{
  color: #576B95;
  font-size: 28rpx;
}
.checkbox-3{
  display: block;
  margin: 30rpx 0;
}
```

```json
{
    "navigationBarTitleText": "label"
}
```
