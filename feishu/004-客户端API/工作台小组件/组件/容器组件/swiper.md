---
title: "swiper"
source_url: https://open.feishu.cn/document/client-docs/block/component/container-component/swiper
---
最后更新于 2023-04-20

# swiper
滑块视图容器。
内部只允许使用 swiper-item 组件来描述具体滑块内容，否则会导致未定义的行为。

## 属性
### 基本属性

名称 | 数据类型 | 必填 | 默认值 | 说明
--- | --- | --- | --- | ---
indicator-dots | boolean | 否 | - iOS/Android: true  
- PC: false | 是否显示面板指示点  
**Notice**：由于历史版本原因默认值不一致，建议开发者手动设置此属性保持表现一致。
indicator-color | string | 否 | rgba(0,0,0,.3) | 指示点颜色  
**Notice**：建议使用 rgba 方式设置颜色，hex color 暂不支持。
indicator-active-color | string | 否 | rgba(0,0,0,0) | 当前选中的指示点颜色  
**Notice**：建议使用 rgba 方式设置颜色，hex color 暂不支持。
autoplay | boolean | 否 | - iOS  
  - < V6.1: true  
  - \>= V6.1: false  
- Android: true  
- PC: false | 是否自动切换  
**Notice**：由于历史版本原因默认值不一致，建议开发者手动设置此属性保持表现一致。
current | number | 否 | 0 | 当前选中滑块的index
current-item-id | string | 否 | '' | 当前选中滑块的组件id，不能与current属性同时指定
interval | number | 否 | 5000 | 自动切换时间间隔（单位ms）
duration | number | 否 | 500 | 滑动动画时长（单位ms）
circular | boolean | 否 | false | 是否循环播放（首尾衔接）
touchable | boolean | 否 | true | 是否监听用户的触摸事件
vertical | boolean | 否 | false | 滑块放置方向是否为竖直（移动端暂不支持该属性）
bindchange | (e: ChangeEvent) => void | 否 | \- | current 改变时会触发 change 事件

### 扩展属性
继承自 ChangeEvent，以下为扩展属性。

| **属性**   | **类型** | **说明**  |
| -------- | ------ | ------- | ---------- |
| detail   | object | 额外的信息   | PC 端 1.0.0 |
|  ∟ current | string | 当前选中滑块的 index  | PC 端 1.0.0 |
|  ∟ source | string | 触发 change 事件的原因，`source="autoplay"`表示自动播放导致 <swiper> 切换，`source="touch"`表示用户划动导致 <swiper> 切换，`source=""`说明是其他原因 | PC 端 1.0.0 |

## swiper-item

滑块视图内容。仅可放置在 `<swiper/>` 组件中，宽高自动设置为100%。

| 属性名     | 类型     | 默认值 | **是否必填** | 说明    |
| ------- | ------ | --- |  --- |----- |
| item-id | string | "" | 否 | 组件 id |

## 注意事项
- 移动端不支持手动选中滑块的 index。
- iOS不支持duration属性。
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
    	"item": "swiper",
    	"isNew": true
    }
}
</md-block-entity>
   <md-block-appLink>
{
    "openDetail": 1, 
    "title": "swiper", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22component%22%2C%22item%22%3A%22getSystemInfo%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "component",
            "item": "swiper",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
</md-block-appLink>
<md-block-item type="TTML">
```html
<template name="time-line">
  <view class="line-container" >
    <text class="m-picker-title"></text>
    <view style="display: flex; flex-direction: row; border: 0.5px solid #BBBFC4; border-radius: 4px; width: 132px;">
      <view class="time-line-container-control" bindtap="numberChange" data-key="{{item.key}}" data-type="down">
        <view class="minus">
        </view>
      </view>
      <text class="time-number">{{item.value}}</text>
      <view class="time-line-container-control" bindtap="numberChange" data-key="{{item.key}}" data-type="up">
        <view class="plus">
      </view>
      </view>
    </view>
  </view>
</template>

<template name="number-input">
  <view class="number_input-container">
    <view class="number_input form-square">
      <text class="number_input-content">{{value}}</text>
      <view class="number_input-btns">
        <view
          class="form-arrow number_input-btn number_input-up {{upDisabled ? 'number_input-btn-disable' : ''}}"
          bindtap="{{handler}}"
          data-key="{{key}}"
          data-type="up"
        ></view>
        <view
          class="form-arrow number_input-btn number_input-down {{downDisabled ? 'number_input-btn-disable' : ''}}"
          bindtap="{{handler}}"
          data-key="{{key}}"
          data-type="down"
        ></view>
      </view>
    </view>
  </view>
</template>

<scroll-view scroll-y style="height: {{containerHeight}}px; width: 100%; background-color: rgba(31, 35, 41, 0.05);">
  <view
    class="content m-content"
  >
    <view>
      <text class="m-content-title-font ">Swiper</text>
    </view>
    <swiper
      style="width: 100%"
      class="swiper-container m-swiper-container"
      indicator-dots="{{commonData.indicatorDots}}"
      autoplay="{{commonData.autoplay}}"
      current="{{commonData.value}}"
      circular="{{commonData.circular}}"
      interval="{{commonData.interval}}"
      duration="{{commonData.duration}}"
      bindchange="onSwiperChange"
    >
      <swiper-item tt:for="{{commonData.items}}" class="swiper-item swiper-item-{{index}} m-swiper-item">
        <view style="width: 100%; display: linear; linear-orientation: vertical;}}">
          <text class="swiper-item-font m-swiper-item-font">{{commonData.items[index]}}</text>
        </view>
      </swiper-item>
    </swiper>
  </view>
  <view class="property-container property-container-bg">
    <view tt:for="{{commonData.options}}" style="display: flex; align-items: center;{{index === 0 ? ' border-top: 0px;' : ''}}" class="line-container">
      <text class="m-picker-title">{{commonData.itemLabel[item.title]}}</text>
      <view class="switch-container{{commonData[item.key] === true ? ' switch-container-checked' : ''}}" bindtap="swiperOptionChange" data-key="{{item.key}}">
        <view class="switch-circle{{commonData[item.key] === true ? '-checked' : ''}}"></view>
      </view>
    </view>
    <template
      is="time-line"
      tt:for="{{commonData.numberInputOptions}}"
      data="{{theme: theme, item: item}}"
    ></template>
  </view>
</scroll-view>
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

.content-title {
  margin-bottom: 8px;
}

.content-title-font {
  font-size: 30px;
  font-weight: bold;
}

.view-content {
  display: flex;
  justify-content: center;
  max-width: 540px;
}

.view-vertical {
  flex-direction: column;
}

.view-item {
  width: 33.3%;
  height: 300px;
  cursor: pointer;
  user-select: none;
  line-height: 300px;
  text-align: center;
}

.view-item-font {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
}

.view-vertical .view-item {
  width: 100%;
  height: 100px;
  line-height: 100px;
}

.swiper-container {
  margin-top: 24px;
}

.swiper-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 4px;
  margin-left: 0.5px;
}

.swiper-item-font {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  line-height: 348px;
}

.swiper-item-0 {
  background-color: #4E83FD;
}

.swiper-item-1 {
  background-color: #7EDAFB;
}

.swiper-item-2 {
  background-color: #00D6B9;
}

.swiper-item-3 {
  background-color: #FFC60A;
}

.swiper-item-4 {
  background-color: #7F3BF5;
}

.switch-container {
  width: 48px;
  height: 28px;
  border-radius: 28px;
  background-color: #BBBFC4;
  position: relative;
}

.switch-container-checked {
  position: relative;
  background-color: #3370FF;
}

.switch-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #FFFFFF;
  position: absolute;
  top: 2px;
  left: 2px;
}

.switch-circle-checked {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #FFFFFF;
  position: absolute;
  top: 2px;
  right: 2px;
}

.resize-api-container .m-json-content {
  max-width: unset;
  width: 150px;
  align-self: center;
  background-image: url('https://sf3-scmcdn-cn.feishucdn.com/obj/larkdeveloper/block-demo-image/icon-close-outlined.png');
}

.m-fake-block {
  max-width: 9999px;
  width: 100%;
}

.m-button {
  height: 48px;
  line-height: 48px;
  margin-right: 0px;
  padding: 0;
  font-size: 17px!important;
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
  background: url('data:image/svg+xml;utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.00017%2010.5759L13.4213%205.15476C13.5515%205.02459%2013.7625%205.02459%2013.8927%205.15476L14.3641%205.62616C14.4943%205.75634%2014.4943%205.96739%2014.3641%206.09757L8.47157%2011.9901C8.21122%2012.2505%207.78911%2012.2505%207.52876%2011.9901L1.63621%206.09757C1.50603%205.96739%201.50603%205.75634%201.63621%205.62616L2.10761%205.15476C2.23778%205.02459%202.44884%205.02459%202.57901%205.15476L8.00017%2010.5759Z%22%20fill%3D%22%238F959E%22%2F%3E%3C%2Fsvg%3E') no-repeat center;
}

.m-swiper-container {
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 174px;
}

.m-swiper-item {
  height: 100%;
  display: linear;
  linear-orientation: vertical;
}

.m-swiper-item-font {
  line-height: 174px;
  text-align: center;
}

.line-container {
  width: 100%; 
  display: flex; 
  justify-content: space-between; 
  padding: 5px 16px 5px 0px; 
  box-sizing: border-box; 
  border-top: 0.5px solid rgba(31, 35, 41, 0.15);
}

.plus {
  width: 16px;
  height: 16px;
  background: url('https://sf3-scmcdn-cn.feishucdn.com/obj/larkdeveloper/block-demo-image/icon-add-outlined.png');
  background-size: 100% 100%;
}

.minus {
  width: 16px;
  height: 16px;
  background: url('https://sf3-scmcdn-cn.feishucdn.com/obj/larkdeveloper/block-demo-image/icon-reduce-outlined.png');
  background-size: 100% 100%;
}

.time-number {
  border-left: 1px solid #BBBFC4; 
  border-right: 1px solid #BBBFC4; 
  font-size: 14px; 
  line-height: 22px;
  text-align: center;
  box-sizing: content-box;
  margin: 0 auto;
  flex: 1;
  padding: 6px 0;
}

.dark-swiper-item-0 {
  background-color: #2E65D1;
}

.dark-swiper-item-1 {
  background-color: #2782A3;
}

.dark-swiper-item-2 {
  background-color: #34D9C3;
}

.dark-swiper-item-3 {
  background-color: #FFCB1F;
}

.dark-swiper-item-4 {
  background-color: #9762F5;
}

.dark-plus {
  width: 16px;
  height: 16px;
  background: url('https://sf3-scmcdn-cn.feishucdn.com/obj/larkdeveloper/block-demo-image/icon-add-outlined-dark.png');
  background-size: 100% 100%;
}

.dark-minus {
  width: 16px;
  height: 16px;
  background: url('https://sf3-scmcdn-cn.feishucdn.com/obj/larkdeveloper/block-demo-image/icon-reduce-outlined-dark.png');
  background-size: 100% 100%;
}

.swiper-container {
  margin-top: 24px;
}

.swiper-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 4px;
  margin-left: 0.5px;
}

.swiper-item-font {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  line-height: 348px;
}

.swiper-item-0 {
  background-color: #4E83FD;
}

.swiper-item-1 {
  background-color: #7EDAFB;
}

.swiper-item-2 {
  background-color: #00D6B9;
}

.swiper-item-3 {
  background-color: #FFC60A;
}

.swiper-item-4 {
  background-color: #7F3BF5;
}

```
</md-block-item>
<md-block-item type="JS">

```javascript
Block({
  data:{
    commonData: {
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 500,
    value: 0,
    items: ['A', 'B', 'C', 'D', 'E'],
    itemLabel: {'swiper_display':'显示指示点', 'swiper_loop':'循环播放', 'swiper_auto':'自动播放'},
    options: [{
      key: 'indicatorDots',
      title: 'swiper_display'
    }, {
      key: 'circular',
      title: 'swiper_loop'
    }, {
      key: 'autoplay',
      title: 'swiper_auto'
    }],
    numberInputOptions: [{
      key: 'interval', 
      label: 'swiper_slides_advancs_interval', 
      min: 500, 
      max: 2000, 
      step: 100, 
      value: 500,
      upDisabled: false,
      downDisabled: true,
      handler: 'numberChange'
    }, {
      key: 'duration', 
      label: 'swiper_autp_slide_interval', 
      min: 2000,
      max: 10000,
      step: 500,
      value: 5000,
      upDisabled: false,
      downDisabled: false,
      handler: 'numberChange'
    }]
  },
  },
  onLoad(){
    tt.hideBlockLoading();
  },
  methods:{
    onSwiperChange(e) {
      const { current } = e.detail;
      const { commonData } = this.data;
      commonData.value = current;

this.setData({
        commonData
      });
    },
    swiperOptionChange(e) {
      const { key } = e.currentTarget.dataset;
      const { commonData } = this.data;
      commonData[key] = !this.data.commonData[key];

this.setData({
        commonData
      });
    },
    numberChange(e) {
      const { type, key } = e.currentTarget.dataset;
      const index = key === 'interval' ? 0 : 1;
      const { min, max, step, value, upDisabled: UP, downDisabled: DOWN } = this.data.commonData.numberInputOptions[index];
      const offset = type === 'up' ? step : -step;
      const currentValue = value + offset;
      const { upDisabled, downDisabled } = getDisabled(currentValue, max, min);

if ((type === 'up' && currentValue > max) || (type === 'down' && currentValue < min)) {
        return;
      }
      const { commonData } = this.data; 
      commonData.numberInputOptions[index].value = currentValue;
      commonData.numberInputOptions[index].upDisabled = upDisabled;
      commonData.numberInputOptions[index].downDisabled = downDisabled;

this.setData({
        commonData
      });
    }
  }
})

function getDisabled (value, max, min) {
  return {
    upDisabled: value >= max,
    downDisabled: value <= min
  }
}
```

</md-block-item>
</md-block>
