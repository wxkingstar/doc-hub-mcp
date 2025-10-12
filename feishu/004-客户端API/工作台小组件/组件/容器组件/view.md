---
title: "view"
source_url: https://open.feishu.cn/document/client-docs/block/component/container-component/view
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871937000
---
最后更新于 2022-07-15

# view
承载其他组件的视图容器，可以类比作 div 标签。

## 属性

| **名称**      | **类型**                     | **默认值** | **是否必填** | **说明**     |
| ----------- | --------------------------- | ------- | ------ | ---------- | ---------- |
| bindtap       | (event: TouchEvent) => void   | -      | 否      | 组件的点击事件    |

## 注意事项
view 组件不支持直接嵌套文字。
- 正确写法：
	```html
	<view><text>潮起终究潮落</text></view>
	```
- 错误写法：
	```html
	<view>潮起终究潮落</view>
	```

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
    	"item": "view",
    	"isNew": true
    }
}
</md-block-entity>
  <md-block-appLink>
{
    "openDetail": 1, 
    "title": "view", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22component%22%2C%22item%22%3A%22view%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "component",
            "item": "view",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
</md-block-appLink>
<md-block-item type="TTML">
```html
<view scroll-y style="height: 600px; width: 100%;background-color: rgba(31, 35, 41, 0.05);">
  <view class="content m-content">
    <view class="content-title">
      <text class="m-content-title-font">View</text>
    </view>

<view
      tt:if="{{!commonData.checked}}"
      class="view-content view-vertical"
      style="display: flex; flex-direction: column; margin-top: 24px;"
    >
      <view
      tt:for="{{commonData.items}}"
      style="'display: flex; flex-direction: column; justify-content: center;"
      class="view-item view-item-{{index}}"
      implicit-animation="false"
      ><text class="view-item-font m-view-item-font">{{commonData.items[index]}}</text></view>
    </view>

<view
      tt:if="{{commonData.checked}}"
      class="view-content"
      style="display: flex; flex-direction: row; margin-top: 24px;"
    >
    <view
      tt:for="{{commonData.items}}"
      style="display: flex; flex-direction: column; justify-content: center;"
      class="view-item view-item-{{index}}"
      implicit-animation="false"
      ><text class="view-item-font m-view-item-font">{{commonData.items[index]}}</text></view>
    </view>
  </view>
  <view class="picker-choose m-picker-choose" style="display: flex; align-items: center; margin-top: 24px;">
    <text class="m-picker-title">纵向布局</text>
    <view class="switch-container{{commonData.checked ? ' switch-container-checked' : ''}}" bindtap="onLayoutChange">
      <view class="switch-circle{{commonData.checked ? '-checked' : ''}}"></view>
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

.view-item-0 {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #4E83FD;
}

.view-item-1 {
  background-color: #7EDAFB;
}

.view-item-2 {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #00D6B9;
}

.view-vertical .view-item-0 {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.view-vertical .view-item-2 {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.view-sub-title {
  padding: 24px 0 12px 0;
}

.view-sub-title-font {
  font-size: 14px;
  font-weight: bold;
  font-family: PingFang SC;
  line-height: 22px;
}
.dark-view-item-1 {
  background-color: #2E65D1;
}

.dark-view-item-2 {
  background-color: #2782A3;
}

.dark-view-item-3 {
  background-color: #34D9C3;
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

```
</md-block-item>
<md-block-item type="JS">

```javascript
Block({
  data:{
    commonData: {
      items: ['A', 'B', 'C'],
      checked: false
    },
    platform: '',
    containerHeight: '',
    theme:'',
  },
  onLoad(){
    tt.hideBlockLoading();
  },
  methods:{
    onLayoutChange() {
      const { commonData } = this.data;
      commonData.checked = !commonData.checked;

this.setData({
        commonData
      });
    }
  }
})
```
</md-block-item>
</md-block>
