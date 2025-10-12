---
title: "text"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/basic-content/text
last_remote_update: 2022-03-08
last_remote_update_timestamp: 1646733959000
---
最后更新于 2022-03-08

# text

文本。

|属性名|类型|默认值|说明|最低版本|
|----|--|--|--|-----|
|selectable|Boolean|false|是否可以选中文字||
|space|String||是否显示连续的空格，可以取值: `ensp`, `emsp`, `nbsp`||
|decode|Boolean|false|是否转义||
- 除了文本组件以外的其他组件内的文字都无法长按选中；
- `<text/>` 元素内只支持 `<text/>` 嵌套；
- 文本中的 ``\n`` 会换行。 warnning
`<text/>` 是个组件，性能不如文本节点，如无必要，请优先使用纯文本节点（即文本不被 text 组件包裹）。

## 示例代码

```html
<view class="text-box">
  <view><text>{{demo_text}}</text></view>
  <view><text selectable>{{select_texts}}</text></view>
  <view><text decode>&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;</text></view>
  <view><text space="ensp">{{spaces}}</text></view>
  <view><text space="nbsp">{{spaces}}</text></view>
  <view><text space="emsp">{{spaces}}</text></view>
  <view><text>hello\nworld</text></view>
</view>
```

```js
const iText = i18n.text

var texts = [
  'line 1',
  'line 2',
  'line 3',
  'line 4',
  'line 5'
];

Page({
  data: {
    text: '',
    canAdd: true,
    canRemove: false,
    ...iText
  },
  onShow(args) {
    console.log('page---onShow')
    console.log(args)
    console.log('-------------')
  },
  onLoad(args) {
    console.log('page---onLoad')
    console.log(args)
    console.log('-------------')
  },
  extraLine: [],
  add: function (e) {
    var that = this;
    this.extraLine.push(texts[this.extraLine.length % 12])
    this.setData({
      text: this.extraLine.join('\n'),
      canAdd: this.extraLine.length < 12,
      canRemove: this.extraLine.length > 0
    })
    setTimeout(function () {
      that.setData({
        scrollTop: 99999
      });
    }, 0)
  },
  remove: function (e) {
    var that = this;
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: this.extraLine.join('\n'),
        canAdd: this.extraLine.length < 12,
        canRemove: this.extraLine.length > 0,
      })
    }
    setTimeout(function () {
      that.setData({
        scrollTop: 99999
      });
    }, 0)
  }
})
```

```css
.text-box{
  padding: 40rpx 60rpx;
  background-color: #FFFFFF;
  font-size: 25rpx;
  color: #353535;
  line-height: 2em;
}
```

```json
{
    "navigationBarTitleText": "text"
}

```
