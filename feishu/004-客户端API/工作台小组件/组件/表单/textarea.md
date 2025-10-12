---
title: "textarea"
source_url: https://open.feishu.cn/document/client-docs/block/component/form/textarea
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871968000
---
最后更新于 2022-07-15

# textarea
多行文本输入框组件，用户可以通过键盘与其进行交互。

## 属性
### 基本属性

| **名称**      | **类型**                      | **默认值** | **是否必填** | **说明**     |
| ----------- | --------------------------- | ------- | ------ | ---------- | ---------- |
| value       | string                      | ''      | 否      | 输入框的初始值    | PC 端 1.0.0 |
| placeholder | string                      | ''     | 否      | 占位字符       | PC 端 1.0.0 |
| disabled    | boolean                     | false   | 否      | 是否禁止输入     | PC 端 1.0.0 |
| maxlength   | number                      | 140     | 否      | 最大输入长度     | PC 端 1.0.0 |
| focus       | boolean                     | false   | 否      | 自动获取焦点       | PC 端 1.0.0 |
| cursor      | number                      | -1     | 否      | 指定聚焦时光标的位置 (移动端暂不支持) | PC 端 1.0.0 |
| bindinput   | (event: InputEvent) => void | -      | 否      | 键盘输入时触发    | PC 端 1.0.0 |
| bindfocus   | (event: FocusEvent) => void | -      | 否      | 输入框获得焦点时触发 | PC 端 1.0.0 |
| bindblur    | (event: BlurEvent) => void  | -      | 否      | 输入框失去焦点时触发 | PC 端 1.0.0 |

### 扩展属性
#### InputEvent

继承自 [BaseEvent](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system)，以下为扩展属性。

| **属性**    | **类型** | **说明**     |
| --------- | ------ | ---------- | ---------- |
| detail    | object | 额外的信息      | PC 端 1.0.0 |
|  ∟ value  | string | 当前输入框的值    | PC 端 1.0.0 |
|  ∟ cursor | number | 当前输入框的光标位置 (移动端暂不支持) | PC 端 1.0.0 |

#### FocusEvent

继承自 [BaseEvent](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system)，以下为扩展属性。

| **属性**   | **类型** | **说明**  |
| -------- | ------ | ------- | ---------- |
| detail   | object | 额外的信息   | PC 端 1.0.0 |
|  ∟ value | string | 当前输入框的值 | PC 端 1.0.0 |
| ∟ height | string | 键盘高度    | PC 端 1.0.0 |

#### BlurEvent

继承自 [BaseEvent](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system)，以下为扩展属性。

| **属性**   | **类型** | **说明**  |
| -------- | ------ | ------- | ---------- |
| detail   | object | 额外的信息   | PC 端 1.0.0 |
|  ∟ value | string | 当前输入框的值 | PC 端 1.0.0 |

## 注意事项
> 当存在其它输入型组件时，需要主动关闭 focus 属性，避免出现光标偏移。

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
    	"item": "textarea",
    	"isNew": true
    }
}
</md-block-entity>
 <md-block-appLink>
{
    "openDetail": 1, 
    "title": "textarea", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22component%22%2C%22item%22%3A%22getSystemInfo%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "component",
            "item": "textarea",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
</md-block-appLink>
<md-block-item type="TTML">
```html
<view scroll-y style="height: 600px; width: 100%; background-color: rgba(31, 35, 41, 0.05);">
  <view style="padding-bottom: 0" class="content m-content">
    <view>
      <text class="m-content-title-font">textarea</text>
    </view>
  </view>
  <view style="padding: 0 0 40px; box-sizing: border-box;" class="content m-content">
    <view tt:for="{{commonData.elements}}"  style="width: 100%; display: flex; flex-direction: column;">
      <view style="padding-top: 16px; padding-bottom: 5px; padding-left: 16px; padding-right: 16px;" class="sub-title">
        <text class="sub-title-font m-sub-title-font">{{commonData.textLabel[item.title]}}</text>
      </view>
      <view style="width: 100%">
        <textarea class="textarea-content m-textarea-content" focus="{{item.focus}}" placeholder="{{commonData.textLabel[item.placeholder]}}" placeholder-color="rgba(143, 149, 158, 1)"></textarea>
      </view>
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

.m-textarea-content {
  width: 100%;
  padding: 13px 16px;
  max-width: unset;
  border-left: 0px solid rgba(0, 0, 0, 0);
  border-right: 0px solid rgba(0, 0, 0, 0);
  font-size: 16px;
}

.textarea-content {
  max-width: 540px;
  height: 92px;
  border-radius: 4px;
  background-color: #FFF;
}

```
</md-block-item>
<md-block-item type="JS">

```javascript
Block({
  data:{
    commonData: {
      textLabel: {
        'input_auto_focus':'自动聚焦',
        'input_auto_placheholder':'输入区自动聚焦',
        'textarea_height_fixed':'高度固定',
        'textarea_height_fixed_placheholder':'输入区高度固定，超出这一高度会出现滚动条'
      },
      elements: [{
        title: 'input_auto_focus',
        placeholder: 'input_auto_placheholder',
        focus: true,
      }, {
        title: 'textarea_height_fixed',
        placeholder: 'textarea_height_fixed_placheholder',
      }]
    }
  },
  onLoad(){
    tt.hideBlockLoading();
  }
})
```
</md-block-item>
</md-block>
