---
title: "checkbox-group"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/form/checkbox-group
---
最后更新于 2022-03-08

# checkbox-group

多项选择器，内部由多个<checkbox/>组成。

|属性名|类型|默认值|说明|
|----|--|------|---|
|bindchange|EventHandler||`<checkbox-group/>` 中选中项发生改变时触发 `change `事件，<br>detail = {value:[选中的 checkbox 的 value 的数组]}|

## checkbox

多选项目。

|属性名|类型|默认值|说明|
|-----|---|-----|---|
|value|String||选项的值|
|disabled|Boolean|false|是否禁用|
|checked|Boolean|false|当前是否选中，可用来设置默认选中|
|color|Color||checkbox 的颜色，同 css 的 color|

## 代码示例

```html
<view class="container">
  <view class="page-body">
    <view class="page-section page-section-gap">
      <view class="page-section-title">{{default_style}}</view>
      <label class="checkbox">
        <checkbox value="cb" checked="true"/>{{selected}}
      </label>
      <label class="checkbox">
        <checkbox value="cb" />{{unselected}}
      </label>
    </view>

<view class="page-section">
      <view class="page-section-title">{{recommend_display_style}}</view>
      <view class="weui-cells weui-cells_after-title">
        <checkbox-group bindchange="checkboxChange">
          <label class="weui-cell weui-check__label" tt:for="{{items}}" tt:key="{{item.value}}">
            <view class="weui-cell__hd">
              <checkbox value="{{item.value}}"
                checked="{{item.checked}}"/>
            </view>
            <view class="weui-cell__bd">{{item.name}}</view>
          </label>
        </checkbox-group>
      </view>
    </view>
  </view>

</view>

```

```js
const checkbox = i18n.checkbox

Page({
  data: {
    items: [
      {value: 'watermelon', name: 'watermelon'},
      {value: 'apple', name: 'apple', checked: 'true'},
      {value: 'pear', name: 'pear'},
      {value: 'banana', name: 'banana'},
      {value: 'orange', name: 'orange'},
      {value: 'grape', name: 'grape'},
    ],
    ...checkbox
  },
  checkboxChange: function(e) {
    console.log('Checkbox change，value：', e.detail.value)

var items = this.data.items, values = e.detail.value;
    for (var i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false;

for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if(items[i].value == values[j]){
          items[i].checked = true;
          break
        }
      }
    }

this.setData({
      items: items
    })
  }
})

```

```css
.checkbox{
  margin-right: 20rpx;
}
```

```json
{
    "navigationBarTitleText": "checkbox"
}

```
