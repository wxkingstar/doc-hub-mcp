---
title: "button"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/form/button
last_remote_update: 2022-06-21
last_remote_update_timestamp: 1655800293000
---
最后更新于 2022-06-21

# button

按钮。

|属性名|类型|默认值|说明|
|-----|---|-----|---|
|size|String|default|按钮的大小|
|type|String|default|按钮的样式类型|
|shape|String|default|按钮的形状。**目前仅PC端支持**|
|plain|Boolean|false|是否镂空，背景色透明。**目前仅PC端大窗口支持**|
|disabled|Boolean|false|是否禁用|
|loading|Boolean|false|是否带 loading 图标|
|form-type|String||用于嵌在 `<form/>` 组件中，控制 submit/reset|
|open-type|String||用于调用开放能力|
|hover-class|String|button-hover|点击状态的样式类|
|hover-start-time|Number|20|按住后多久出现点击态，单位毫秒|
|hover-stay-time|Number|70|手指松开后点击态保留时间，单位毫秒|
|hover-stop-propagation|Boolean|false|指定是否阻止本节点的祖先节点出现点击态|
button-hover 的样式为 `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`

**size 属性**

|值|说明|
|--|--|
|huge|巨大尺寸 (**目前仅PC支持**)|
|large|大尺寸  (**目前仅PC支持**)|
|default|默认大小|
|mini|小尺寸|

**type 属性**

|值|说明|
|--|---|
|primary|主要按钮|
|default|次要按钮|
|dashed|虚框按钮 (**目前仅PC支持**)|
|warn|危险按钮|
|danger|高危按钮 (**目前仅PC支持**)|
|text|文字按钮 (**目前仅PC支持**)|

**shape 属性**
**目前仅PC支持** 

|值|说明|
|--|--|
|rectangle|无圆角|
|default|常规圆角|
|round|全圆角|

**form-type 属性**

|值|说明|
|--|---|
|submit|提交表单|
|reset|重置表单|

**open-type 属性**
目前只支持share

|值|说明|
|--|---|
|share|触发用户转发, 分享内容到飞书。**移动端2.9版本，PC端3.11版本开始支持**|

## 示例代码

```html
<view class="container">
  <view class="page-body">
    <view class="btn-area" id="buttonContainer">
      <button type="primary">{{main_operation_normal}}</button>
      <button type="primary" loading="true">{{main_operation_loading}}</button>
      <button type="primary" disabled="true">{{main_operation_disabled}}</button>

<button type="default">{{secondary_operation_normal}}</button>
      <button type="default" loading>{{secondary_operation_loading}}</button>
      <button type="default" disabled="true">{{secondary_operation_disabled}}</button>

<button type="warn">{{warning_operation_normal}}</button>
      <button type="warn" loading>{{warning_operation_loading}}</button>
      <button type="warn" disabled="true">{{warning_operation_disabled}}</button>

<view class="button-sp-area">
        <button type="primary" plain="true">{{button}}</button>
        <button type="primary" disabled="true" plain="true">{{disabled_button}}</button>

<button type="default" plain="true">{{button}}</button>
        <button type="default" disabled="true" plain="true">{{button}}</button>

<button class="mini-btn" type="primary" size="mini">{{button}}</button>
        <button class="mini-btn" type="default" size="mini">{{button}}</button>
        <button class="mini-btn" type="warn" size="mini">{{button}}</button>
      </view>
    </view>
  </view>

</view>
```

```js
const iButton = i18n.button

var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    ...iButton 
  },
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  }
}

for (var i = 0; i < types.length; ++i) {
  (function(type) {
    pageObject[type] = function(e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page(pageObject)

```

```css
button{
  margin-top: 30rpx;
  margin-bottom: 30rpx;
}
.button-sp-area{
  margin: 0 auto;
  width: 60%;
}
.mini-btn{
  margin-right: 10rpx;
}
```

```json
{
    "navigationBarTitleText": "button"
}
```
