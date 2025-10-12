---
title: "picker-view"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/form/picker-view
last_remote_update: 2022-03-08
last_remote_update_timestamp: 1646733934000
---
最后更新于 2022-03-08

# picker-view

嵌入页面的滚动选择器。

|属性名|类型|默认值|说明|飞书版本需求|
|-----|---|-----|---|---|
|value|NumberArray||数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），<br>数字大于 picker-view-column 可选项长度时，选择最后一项。||
|indicator-style|String||设置选择器中间选中框的样式||
|mask-style|String||设置蒙层的样式||
|bindchange|EventHandle||当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；<br>value 为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始||
|bindpickstart|EventHandle||当选择开始时触发该事件，event.detail = {column: number}|`≥3.44`|
|bindpickover|EventHandle||当选择过程中经过新的值的时候，此时只会触发 pickover 不会触发 change 事件，event.detail = {column: number, row: number}|`≥3.44`|
|bindpickend|EventHandle||当选择结束的时候并且在动画结束之后触发该事件（暂时不能保证 pickend 和 change 事件触发的先后顺序关系），event.detail = {column: number}|`≥3.44`|

## picker-view-column

仅可放置于 <picker-view /> 中，其子节点的高度会自动设置成与 picker-view 的选中框的高度一致

## 示例代码

```html
<view class="container">
  <view class="page-body">
    <view class="page-section">
      <view>
        <view style="text-align: center;">{{year}}-{{month}}-{{day}}</view>
        <picker-view indicator-style="height: 50px;" mask-style="background-color: blue; z-index: 0;" style="height: 750rpx;" value="{{value}}" bindchange="bindChange">
          <picker-view-column>
             <view tt:for="{{years}}" style="line-height: 50px; text-align: center;">{{item}}</view>
          </picker-view-column>
          <picker-view-column style="text-align: center;">
             <view tt:for="{{months}}" style="line-height: 50px; text-align: center;">{{item}}</view>
          </picker-view-column>
          <picker-view-column style="text-align: center;">
            <view tt:for="{{days}}" style="line-height: 50px; text-align: center;">{{item}}</view>
          </picker-view-column>
        </picker-view>
      </view>
    </view>
  </view>

</view>
```

```js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
	years.push(i)
}

for (let i = 1; i <= 12; i++) {
	months.push(i)
}

for (let i = 1; i <= 31; i++) {
	days.push(i)
}

Page({
	data: {
		years: years,
		year: date.getFullYear(),
		months: months,
		month: 2,
		days: days,
		day: 2,
		year: date.getFullYear(),
		value: [9999, 1, 1],
	},
	bindChange: function (e) {
		const val = e.detail.value
		this.setData({
			year: this.data.years[val[0]],
			month: this.data.months[val[1]],
			day: this.data.days[val[2]]
		})
	}
})
```

```json
{
    "navigationBarTitleText": "picker-view"
}
```
