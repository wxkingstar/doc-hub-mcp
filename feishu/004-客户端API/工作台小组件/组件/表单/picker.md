---
title: "picker"
source_url: https://open.feishu.cn/document/client-docs/block/component/form/picker
last_remote_update: 2024-11-06
last_remote_update_timestamp: 1730865156000
---
最后更新于 2024-11-06

# picker
滚动选择器，现支持 4 种选择器，通过 mode 属性来设置，分别是：
- 普通选择器
- 多列选择器
- 时间选择器
- 日期选择器

mode默认属性为普通选择器。

## 属性

| **名称**      | **类型**                      | **默认值** | **是否必填** | **说明**     |
| ----------- | --------------------------- | ------- | ------ | ---------- | ---------- |
| mode       | string         | selector                                                 |   否  | 选择器模式，共有：selector、multiSelector、time、date 四种模式                                                                                                                       | PC 端 1.0.0 |
| disabled   | boolean        | false                                                     |否 | 禁用该组件，禁用时不可点击，也不会弹出弹框                                                                                                                                                | PC 端 1.0.0 |
| bindcancel | EventHandler   | -                                                     |否 | 点击取消或者点击上方区域收起 picker 时触发                                                                                                                                              | PC 端 1.0.0 |
| value      | number, string | ''                                                     |否 | 被选中的值。它有下列三种情况：当`mode === 'selector'`或者`mode === 'multiSelector'`时，此值为被选中项的编号；当`mode === 'time'`时，此值表示选中的时间，格式为`hh:mm`；当`mode === 'date'`时，此值表示选中的日期，格式为`'YYYY-MM-DD'` | PC 端 1.0.0 |
| range      | Array          | []                                                   |  否| 用于指定 picker 列表中的待选数据。当`mode === 'selector'`或者`mode === 'multiSelector'`时有效                                                                                         | PC 端 1.0.0 |
| range-key  | String         | ''                                                     |否 | 用于指定显示在picker列表中的内容，其值为对象数组的key。当且仅当 range 为对象数组时有效                                                                                                           |否 | PC 端 1.0.0 |
| start      | string         | 当`mode === 'time'`时，为`'00:00'`当`mode === 'date'`时，没有默认值|否 | 表示有效时间范围的开始。当`mode === 'time'`或者`mode === 'date'`时有效。当`mode === 'time'`时，格式为`'hh:mm'`当`mode === 'date'`时，格式为`'YYYY-MM-DD'`                                           | PC 端 1.0.0 |
| end        | string         | 当`mode === 'time'`时，为`'23:59'`当`mode === 'date'`时，没有默认值|否 | 表示有效时间范围结束。当`mode === 'time'`或者`mode === 'date'`时有效。当`mode === 'time'`时，格式为`'hh:mm'`当`mode === 'date'`时，格式为`'YYYY-MM-DD'`                                            | PC 端 1.0.0 |
| fields     | string         |          day                                            | 否 | 有效值 year,month,day，表示选择器的粒度。当`mode === 'date'`时有效。                                                                                                                   | PC 端 1.0.0 |
| cancel-string  |  string  |  Cancel | 否 | 修改“取消”按钮的文案 |  |
| confirm-string  |  string  |  Confirm | 否 | 修改“确认”按钮的文案 |  |

## 示例代码
<md-block>
<md-block-entity>
{
    "blockID": "mock-blockID", 
	"blockTypeID": "blk_610a0f3659c04004c56b2b90", 
    "sourceMeta": {

}, 
    "sourceData": {
    	"tab": "component",
    	"item": "picker",
    	"isNew": true
    }
}
</md-block-entity>
 <md-block-appLink>
{
    "openDetail": 1, 
    "title": "picker", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22component%22%2C%22item%22%3A%22getSystemInfo%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "component",
            "item": "picker",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
</md-block-appLink>
<md-block-item type="TTML">
```html
<view scroll-y style="height: 600px; width: 100%;background-color: rgba(31, 35, 41, 0.05);">
  <view style="padding-bottom: 24px;" class="content m-content">
    <view>
      <text class="m-content-title-font">picker</text>
    </view>
  </view>
  <view class="property-container property-container-bg">
    <view tt:for="{{commonData.elements}}" style="width: 100%;">
      <picker mode="{{item.mode}}" style="width: 100%; box-sizing: content-box;" range="{{item.range}}" value="{{item.value}}" start="{{item.start}}" end="{{item.end}}" fields="{{item.fields}}" bindchange="pickerHandler" bindcolumnchange="columnChangeHandler" data-key="{{item.key}}">
        <view style="width: 100%; border: 0px;" class="picker-choose m-picker-choose">
          <text class="m-picker-title">{{commonData.labelText[item.title]}}</text>
          <view style="display: flex; flex-direction: row;">
            <text class="picker-choose-font m-picker-choose-font">{{item.multiValue || item.range[item.value] || item.value}}</text>
            <view class="form-arrow m-picker-arrow"></view>
          </view>
        </view>
      </picker>
    </view>
  </view>
</view>
```
</md-block-item>
<md-block-item type="TTSS">
```css

.content {
  padding: 40px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.m-content {
  padding: 24px 16px 0;
}

.m-content-title-font {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

.m-sub-title-font {
  font-size: 16px;
}

.sub-title-font {
  font-size: 14px;
  font-family: PingFang SC;
  line-height: 22px;
}

.content-title {
  margin-bottom: 8px;
}

.content-title-font {
  font-size: 30px;
  font-weight: bold;
}

.m-picker-choose {
  max-width: unset;
  border-radius: 0;
  border-left: 0px solid black;
  border-right: 0px solid black;
  height: 48px;
  padding: 5px 16px;
  box-sizing: border-box;
}

.m-picker-title {
  font-size: 16px;
  line-height: 36px;
  font-family: PingFang SC;
}

.m-picker-choose-font {
  font-size: 14px;
  line-height: 36px;
  color: #8F959E;
}

.m-picker-arrow {
  margin: 10px 0px 0px 4px;
  width: 16px;
  height: 16px;
  flex-grow: 0;
  background: url('https://sf3-scmcdn-cn.feishucdn.com/obj/larkdeveloper/block-demo-image/icon-right-outlined-2.png') no-repeat center;
  background-size: 100% 100%;
}

.picker-pc {
  max-width: 540px;
}

.picker-choose {
  display: flex;
  justify-content: space-between;
  height: 22px;
  background-color: #FFF;
  padding: 5px 12px 5px 0;
  border-radius: 4px;
  border: 0.5px solid rgba(31, 35, 41, 0.15);
}

.picker-choose-font {
  line-height: 22px;
  font-size: 14px;
}

.picker-arrow {
  margin-left: 10px;
  width: 22px;
  height: 22px;
  flex-grow: 0;
  background: url('https://sf3-scmcdn-cn.feishucdn.com/obj/larkdeveloper/block-demo-image/icon-right-outlined-2.png') no-repeat center;
}

.form-arrow {
  position: relative;
}

.property-container {
  margin-top: 24px; 
  padding-left: 16px; 
  box-sizing: border-box; 
  border-top: 0.5px solid rgba(31, 35, 41, 0.15); 
  border-bottom: 0.5px solid rgba(31, 35, 41, 0.15); 
  display: flex; 
  flex-direction: column;
  width: 100%;
}

.property-container-bg {
  background: white; 
}

```
</md-block-item>
<md-block-item type="JS">

```javascript
Block({
  data:{
    commonData: {
      labelText: {
        'picker_common':'普通选择器',
        'picker_multi':'多列选择器',
        'picker_time':'时间选择器',
        'picker_date':'日期选择器',
      },
      elements: [{
        title: 'picker_common',
        mode: 'selector',
        range: ['A', 'B', 'C'],
        key: 0,
        value: 0
      }, {
        title: 'picker_multi',
        mode: 'multiSelector',
        range: [['2018', '2019', '2020', '2021'], ['spring', 'summer', 'autumn', 'winter'], ['sunny', 'rainy', 'cloudy']],
        key: 1,
        multiValue: '2018, spring, sunny',
        value: [0, 0, 0]
      }, {
        title: 'picker_time',
        mode: 'time',
        start: '00:00',
        end: '23:59',
        key: 2,
        value: '12:01'
      }, {
        title: 'picker_date',
        mode: 'date',
        start: '2010-01-01',
        end: '2030-12-31',
        fields: 'day',
        key: 3,
        value: '2021-07-20'
      }],
    },
  },
  onLoad(){
    tt.hideBlockLoading();
  },
  methods:{
    pickerHandler(e) {
    const { value } = e.detail;
    const { key } = e.currentTarget.dataset;
    const { commonData } = this.data;
    commonData.elements[key].value = value; 
    this.setData({
      commonData
    });
  },
  columnChangeHandler(e) {
    const { key } = e.currentTarget.dataset;
    if (!key) {
      return;
    }
    const { column, value } = e.detail;
    const { commonData } = this.data;
    const { value: multiArray, range } = commonData.elements[1];

multiArray[column] = value;
    commonData.elements[1].value = multiArray;
    commonData.elements[1].multiValue = range.map((v, idx) => v[multiArray[idx]]).join(', ');

this.setData({
      commonData
    });
  }
  }
})
```

</md-block-item>
</md-block>
