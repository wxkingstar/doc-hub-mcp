---
title: "picker"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/form/picker
last_remote_update: 2022-12-02
last_remote_update_timestamp: 1669965145000
---
最后更新于 2022-12-02

# picker

从底部弹起的滚动选择器，现支持五种选择器，通过 mode 属性来设置，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。

## mode = selector

普通选择器。

|属性名|类型|默认值|说明|
|----|----|-----|---|
|range|Array/Object Array|[ ]|mode 为 selector 或 multiSelector 时，range 有效|
|range-key|String||当 range 是一个 Object Array 时，<br>通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
|value|Number|0|value 的值表示选择了 range 中的第几个（下标从 0 开始）|
|bindchange|EventHandler||value 改变时触发 change 事件，event.detail = {value: value}|
|disabled|Boolean|false|是否禁用|
|bindcancel|EventHandler||取消选择收起 picker 时触发|

## mode = multiSelector

多列选择器。

|属性名|类型|默认值|说明|
|-----|---|-----|---|
|range|二维Array/Object Array|[ ]|mode 为 selector 或 multiSelector 时，range 有效。<br>二维数组，长度表示多少列，<br>数组的每项表示每列的数据，如 [["a","b"], ["c","d"]]|
|range-key|String||同普通选择器|
|value|Array|[]|value 每一项的值表示选择了 range 对应项中的第几个<br>（下标从 0 开始）|
|bindchange|EventHandler||value 改变时触发 change 事件，<br>event.detail = {value: value}|
|bindcolumnchange|EventHandler||某一列的值改变时触发 columnchange 事件，<br>event.detail = {column: column, value: value}，<br>column 的值表示改变了第几列（下标从0开始），<br>value 的值表示变更值的下标|
|bindcancel|EventHandler||取消选择时触发|
|disabled|Boolean|false|是否禁用|

## mode = time

时间选择器。

|属性名|类型|默认值|说明|
|-----|---|-----|---|
|value|String||表示选中的时间，格式为"hh:mm"|
|start|String||表示有效时间范围的开始，字符串格式为"hh:mm"|
|end|String||表示有效时间范围的结束，字符串格式为"hh:mm"|
|bindchange|EventHandler||value 改变时触发 change 事件，event.detail = {value: value}|
|bindcancel|EventHandler||取消选择时触发|
|disabled|Boolean|false|是否禁用|

## mode = date

日期选择器。

|属性名|类型|默认值|说明|
|-----|--|------|---|
|value|String||表示选中的日期，格式为"YYYY-MM-DD"|
|start|String||表示有效日期范围的开始，字符串格式为"YYYY-MM-DD" **（PC 端: 飞书[V5.5](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持）**|
|end|String||表示有效日期范围的结束，字符串格式为"YYYY-MM-DD" **（PC 端: 飞书[V5.5](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持）**|
|fields|String|day|有效值 year,month,day，表示选择器的粒度|
|bindchange|EventHandler||value 改变时触发 change 事件，event.detail = {value: value}|
|bindcancel|EventHandler||取消选择时触发|
|disabled|Boolean|false|是否禁用|

## mode = region

地区选择器。 
**PC端暂不支持**

|属性名|类型|默认值|说明|
|-----|--|------|---|
|value|Array||表示选中的省市区，默认选中每一列的第一个值|
|custom-item|String||可为每一列的顶部添加一个自定义的项|
|bindchange|EventHandler||value 改变时触发 change 事件，<br>event.detail = {value: value}|
|bindcancel|EventHandler||取消选择时触发|
|disabled|Boolean|false|是否禁用|

## 示例代码 
该组件PC端和手机端组件交互效果不同，手机端展示效果请扫码预览查看

```html
<view class="container">
  <view class="page-body">
    <view class="page-section">

<view class="section">
        <view class="section__title">{{custom_picker}}</view>
        <picker bindchange="bindPickerChange" value="{{index}}" range="{{array}}">
          <view class="picker">
            {{current_option}}{{array[index]}}
          </view>
        </picker>
      </view>
			<view class="section">
        <view class="section__title">{{custom_object_picker}}</view>
        <picker bindchange="bindObjectPickerChange" value="{{objectIndex}}" range="{{objectArray}}" range-key="en">
          <view class="picker">
            {{current_option}}{{objectArray[objectIndex]['en']}}
          </view>
        </picker>
      </view>

<view class="section">
        <view class="section__title">{{multiSelector}}</view>
        <picker mode="multiSelector" bindchange="bindMultiPickerChange" bindcolumnchange="bindMultiPickerColumnChange" value="{{multiIndex}}" range="{{multiArray}}">
          <view class="picker">
            {{current_option}}{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
          </view>
        </picker>
      </view>
      <view class="section">
        <view class="section__title">{{time_picker}}</view>
        <picker mode="time" value="{{time}}" start="{{timeStart}}" end="{{timeEnd}}" bindchange="bindTimeChange">
          <view class="picker">
            {{current_option}} {{time}}
          </view>
        </picker>
      </view>

<view class="section">
        <view class="section__title">{{date_picker}}</view>
        <picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="bindYearDateChange" fields="year">
          <view class="picker">
            {{current_option}} {{yearDate}}
          </view>
        </picker>
      </view>
			<view class="section">
        <view class="section__title">{{date_picker}}</view>
        <picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="bindMonthDateChange" fields="month">
          <view class="picker">
            {{current_option}} {{monthDate}}
          </view>
        </picker>
      </view>
			<view class="section">
        <view class="section__title">{{date_picker}}</view>
        <picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="bindDayDateChange" fields="day">
          <view class="picker">
            {{current_option}} {{dayDate}}
          </view>
        </picker>
      </view>
      <view class="section">
        <view class="section__title">Province City District picker</view>
        <picker mode="region" bindchange="bindRegionChange" value="{{region}}" custom-item="{{customItem}}">
          <view class="picker">
            {{current_option}}{{region[0]}}，{{region[1]}}，{{region[2]}}
          </view>
        </picker>
      </view>
    </view>
  </view>

</view>

```

```js
const iPicker = i18n.picker

var ms = [
	[// 0
		'plant',
		'animal'
	],
	[// 1
		[// 1 0
			'tree',
			'grass',
			'vine',
			'flower',
			'leaf'
		],
		[// 1 1
			'fish',
			'amphibian',
			'reptile',
			'test'
		]
	],
	[// 2
		[// 2 0
			['pine', 'sycamore'],
			['rice'],
			['morning glory', 'creeper'],
			['chrysanthemum', 'Overlord flower', 'orchid'],
			['Maple leaf', 'coniferous']
		],
		[// 2 1
			['squid', 'Pike'],
			['frag', 'daxie'],
			['lizard', 'tortoise', 'gecko'],
			[]
		]
	]
];

Page({
	data: {
		array: ['USA', 'China', 'Brasil', 'Japan'],
		index: 0,
		objectArray: [
			{
				id: 0,
				name: 'USA',
				en: 'USA'
			},
			{
				id: 1,
				name: 'China',
				en: 'China'
			},
			{
				id: 2,
				name: 'Brasil',
				en: "Brasil"
			},
			{
				id: 3,
				name: 'Japan',
				en: "Japan"
			}
		],
		objectIndex: 0,
		multiArray: [
			[
				'plant',
				'animal'
			],
			[// 1 0
				'tree',
				'grass',
				'vine',
				'flower',
				'leaf'
			],
			[
				'pine',
				'sycamore'
			],
		],
		multiIndex: [0, 0, 0],
		objectMultiIndex: [0, 0, 0],
		yearDate: '2016',
		monthDate: '2016-09',
		dayDate: '2016-09-01',
		time: '12:01',
		region: ["Beijing", "Beijing", "Chao Yang District"],
		customItem: '--',
		timeStart: '09:01',
		timeEnd: '21:01',
		...iPicker
	},
	topButtopClick() {
		console.log('tappend');
		setTimeout(() => {
			this.setData({
				index: 4,
				array: ['USA', 'China', 'Brasil', 'Japan', 'France'],
				timeStart: "09:03",
				multiIndex: [1, 1, 1]
			})
			console.log('changed');
		}, 5000);
	},
	bindPickerChange: function (e) {
		console.log('picker send value:', e.detail.value)
		this.setData({
			index: e.detail.value
		})
	},
	bindObjectPickerChange: function (e) {
		console.log('picker send value:', e.detail.value)
		this.setData({
			objectIndex: e.detail.value
		})
	},
	bindMultiPickerChange: function (e) {
		console.log('picker send value:', e.detail.value)
		this.setData({
			multiIndex: e.detail.value
		})
	},
	bindMultiPickerColumnChange: function (e) {
		// return;
		console.log('Modified Column:', e.detail.column, '，Value:', e.detail.value);
		var data = {
			multiArray: this.data.multiArray,
			multiIndex: this.data.multiIndex
		};
		switch (e.detail.column) {
			case 0:
				data.multiIndex[0] = e.detail.value;
				data.multiIndex[1] = 0;
				data.multiIndex[2] = 0;

data.multiArray[1] = ms[1][data.multiIndex[0]];
				data.multiArray[2] = ms[2][data.multiIndex[0]][data.multiIndex[1]];
				break;
			case 1:
				data.multiIndex[1] = e.detail.value;
				data.multiIndex[2] = 0;

data.multiArray[2] = ms[2][data.multiIndex[0]][data.multiIndex[1]];
				break;
			case 2:
				data.multiIndex[2] = e.detail.value;
				break;
		}
		this.setData(data);
	},
	bindYearDateChange: function (e) {
		console.log('picker send value:', e.detail.value)
		this.setData({
			yearDate: e.detail.value
		})
	},
	bindMonthDateChange: function (e) {
		console.log('picker send value:', e.detail.value)
		this.setData({
			monthDate: e.detail.value
		})
	},
	bindDayDateChange: function (e) {
		console.log('picker send value:', e.detail.value)
		this.setData({
			dayDate: e.detail.value
		})
	},
	bindTimeChange: function (e) {
		console.log('picker send value:', e.detail.value)
		this.setData({
			time: e.detail.value
		})
	},
	bindRegionChange: function (e) {
		console.log('picker send value:', e.detail.value)
		this.setData({
			region: e.detail.value
		})
	}
})

```

```css
.picker{
  padding: 19rpx 32rpx;
  background-color: #FFFFFF;
}

.section__title{
  padding: 48rpx 32rpx 8rpx 32rpx;
  font-size: medium;
  color: #999999;
}
```

```json
{
    "navigationBarTitleText": "picker"
}

```
