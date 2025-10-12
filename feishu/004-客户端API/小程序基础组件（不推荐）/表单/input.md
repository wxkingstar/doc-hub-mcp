---
title: "input"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/form/input
---
最后更新于 2022-10-19

# input

输入框。

|属性名|类型|默认值|说明|
|-----|---|-----|---|
|value|String||输入框的默认值|
|type|String|text|input 的类型，详情见后面的说明|
|password|Boolean|false|是否为密码输入|
|placeholder|String||占位字符|
|placeholder-style|String||占位符的样式|
|disabled|Boolean|false|是否禁用|
|maxlength|Number|140|最大输入长度|
|focus|Boolean|false|获取焦点|
|bindinput|EventHandler||键盘输入时触发，e.detail={value, cursor}
|bindfocus|EventHandler||输入框聚焦时触发，<br>event.detail={value,height}，height 为键盘高度|
|bindblur|EventHandler||输入框失去焦点时触发，<br>event.detail={value: value}|
|bindconfirm|EventHandler||用户点击键盘的完成按钮时触发，<br>event.detail={value: value}|

type的取值范围：

|值|说明|
|--|--|
|text|文本输入键盘|
|number|数字输入键盘|
|idcard|身份证输入键盘，支持输入[0-9]以及‘X’ **(飞书[V5.2.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上支持输入‘X’，PC端不支持身份证输入键盘)**|
|digit|带小数点的数字键盘，支持输入[0-9]，‘-’，‘.’以及‘,’ **(飞书[V5.2.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上支持输入‘-‘，’,’)**| warnning
避免过于频繁地在 bindinput 回调里执行 `setData({value: ...})` warnning
请避免对 input 组件设定内边距（Padding）样式，否则有可能产生不可预期的渲染效果（例如可交互区域高度计算错误等）。建议以给外层标签设置内边距来实现类似效果。

示例代码：

```html
<view class="page-cells page-cells_after-title">
    <view class="page-cell page-cell_input">
        <input class="page-input"
            placeholder="这个只有在按钮点击的时候才聚焦" focus="{{focus}}" />
    </view>
</view>
<view class="btn-area">
  <button bindtap="bindButtonTap">使得输入框获取焦点</button>
</view>

<view class="page-cells page-cells_after-title">
<view class="page-cell page-cell_input">
    <input class="page-input"
        placeholder="focus详情"
        bindfocus="onfocus" bindconfirm="onconfirm" />
</view>
</view>

<view class="btn-area">{{focusDetail}}</view>

<view class="page-cells page-cells_after-title">
<view class="page-cell page-cell_input">
    <input class="page-input" placeholder="blur测试" bindblur="onblur" />
</view>
</view>
```

```js
Page({
  data: {
    focus: false,
  },
  bindButtonTap: function (e) {
    this.setData({
      focus: true,
    })
  },
  onfocus: function (e) {
    console.log(e)
    this.setData({focusDetail: JSON.stringify(e.detail)})
  },
  onblur: function (e) {
    tt.showToast({title: 'blur'})
  },
  onconfirm: function (e) {
    tt.showToast({title: 'confirm'})
  }
})
```
<br>
![图片名称](http://sf3-cn.feishucdn.com/obj/website-img/1687b85fe1a110015bf890d9ce9ba766_13.png?lazyload=true&width=1880&height=1036)
<br>
