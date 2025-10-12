---
title: "form"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/form/form
---
最后更新于 2022-03-08

# form

表单，将组件内的用户输入的 `<switch/>` `<input/>` `<checkbox/>` `<slider/>` `<radio/>` `<picker/>` 的值提交。

当点击 `<form/>` 表单中 `formType` 为 `submit` 的 `<button/>` 组件时，会将表单组件中的 `value` 值进行提交，需要在表单组件中加上 `name` 来作为 `key`。

|属性名|类型|默认值|说明|
|-----|---|-----|---|
|bindsubmit|EventHandle||携带 form 中的数据触发 submit 事件，<br>event.detail = {value : {'name': 'value'} , target: ''}	|
|bindreset|EventHandle||表单重置时会触发 reset 事件|

## 代码示例

```html
<view class="container">
  <view class="page-body">
    <form catchsubmit="formSubmit" catchreset="formReset">
      <view class="page-section page-section-gap">
        <view class="page-section-title">switch</view>
        <switch name="switch"/>
      </view>

<view class="page-section page-section-gap">
        <view class="page-section-title">radio</view>
        <radio-group name="radio">
          <label><radio value="radio1"/>{{option_one}}</label>
          <label><radio value="radio2"/>{{option_two}}</label>
        </radio-group>
      </view>

<view class="page-section page-section-gap">
        <view class="page-section-title">checkbox</view>
        <checkbox-group name="checkbox">
          <label><checkbox value="checkbox1"/>{{option_one}}</label>
          <label><checkbox value="checkbox2"/>{{option_two}}</label>
        </checkbox-group>
      </view>

<view class="page-section page-section-gap">
        <view class="page-section-title">slider</view>
        <slider value="50" name="slider" show-value ></slider>
      </view>

<view class="page-section">
        <view class="page-section-title">input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__bd">
              <input class="weui-input" name="input" placeholder={{input_placeholder}} />
            </view>
          </view>
        </view>
      </view>

<view class="btn-area">
        <button type="primary" formType="submit">{{submit}}</button>
        <button formType="reset">{{reset}}</button>
      </view>
    </form>
  </view>

</view>

```

```js
const form = i18n.form

Page({
  data: {
    pickerHidden: true,
    chosen: '',
    ...form
  },
  pickerConfirm: function (e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },
  pickerCancel: function (e) {
    this.setData({
      pickerHidden: true
    })
  },
  pickerShow: function (e) {
    this.setData({
      pickerHidden: false
    })
  },
  formSubmit: function (e) {
    console.log('form submit，data：', e.detail.value)
  },
  formReset: function (e) {
    console.log('form reset，data：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})

```

```css
label {
  display: inline-block;
  min-width: 270rpx;
  margin-right: 20rpx;
}
form{
  width: 100%;
}
.picker-text {
  margin-left: 20rpx;
  position: relative;
}
```

```json
{
    "navigationBarTitleText": "form"
}
```
