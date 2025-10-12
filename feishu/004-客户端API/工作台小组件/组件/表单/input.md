---
title: "input"
source_url: https://open.feishu.cn/document/client-docs/block/component/form/input
---
最后更新于 2022-07-15

# input
单行文本输入框组件，用户可以通过键盘与其进行交互。

## 属性
### 基本属性

| **名称**      | **类型**                      | **默认值** | **是否必填** | **说明**     |
| ----------- | --------------------------- | ------- | ------ | ---------- | ---------- |
| value       | string                        | ''      | 否      | 输入框的初始值        | PC 端 1.0.0 |
| type        | string | 'text'  | 否      | 输入框类型，共有：text、number、digit 三种类型 | PC 端 1.0.0 |
| placeholder | string                        | ''      | 否      | 占位字符           | PC 端 1.0.0 |
| disabled    | boolean                       | false   | 否      | 是否禁止使用         | PC 端 1.0.0 |
| maxlength   | number                        | 140     | 否      | 最大输入长度         | PC 端 1.0.0 |
| focus       | boolean                       | false   | 否      | 获取焦点           | PC 端 1.0.0 |
| bindinput   | (event: InputEvent) => void   | -      | 否      | 键盘输入时触发        | PC 端 1.0.0 |
| bindfocus   | (event: FocusEvent) => void   | -      | 否      | 输入框获得焦点时触发     | PC 端 1.0.0 |
| bindblur    | (event: BlurEvent) => void    | -      | 否      | 输入框失去焦点时触发     | PC 端 1.0.0 |
| bindconfirm | (event: ConfirmEvent) => void | -      | 否      | 用户点击键盘的完成按钮时触发 | PC 端 1.0.0 |

### 扩展属性
#### InputEvent

继承自 [BaseEvent](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system)，以下为扩展属性。

| **属性**    | **类型** | **说明**     |
| --------- | ------ | ---------- | ---------- |
| detail    | object | 额外的信息      | PC 端 1.0.0 |
|  ∟ value  | string | 当前输入框的值    | PC 端 1.0.0 |
|  ∟ cursor | number | 当前输入框的光标下标 | PC 端 1.0.0 |

#### FocusEvent

继承自 [BaseEvent](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system)，以下为扩展属性。

| **属性**   | **类型** | **说明**  |
| -------- | ------ | ------- | ---------- |
| detail   | object | 额外的信息   | PC 端 1.0.0 |
|  ∟ value | string | 当前输入框的值 | PC 端 1.0.0 |

#### BlurEvent

继承自 [BaseEvent](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system)，以下为扩展属性。

| **属性**   | **类型** | **说明**  |
| -------- | ------ | ------- | ---------- |
| detail   | object | 额外的信息   | PC 端 1.0.0 |
|  ∟ value | string | 当前输入框的值 | PC 端 1.0.0 |

#### ConfirmEvent

继承自 [BaseEvent](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system)，以下为扩展属性。

| **属性**   | **类型** | **说明**  |
| -------- | ------ | ------- | ---------- |
| detail   | object | 额外的信息   | PC 端 1.0.0 |
|  ∟ value | string | 当前输入框的值 | PC 端 1.0.0 |

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
    	"item": "input",
    	"isNew": true
    }
}
</md-block-entity>
 <md-block-appLink>
{
    "openDetail": 1, 
    "title": "input", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22component%22%2C%22item%22%3A%22getSystemInfo%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "component",
            "item": "input",
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
      <text class="m-content-title-font">input</text>
    </view>
  </view>
  <view style="padding: 0 0 40px; box-sizing: border-box;" class="content m-content">
    <view tt:for="{{commonData.elements}}" style="width: 100%; display: flex; flex-direction: column;">
      <view style="padding-top: 16px; padding-bottom: 5px; padding-left: 16px; padding-right: 16px;" class="sub-title">
        <text class="sub-title-font m-sub-title-font">{{commonData.textLabel[item.title]}} {{item.displayValue}}</text>
      </view>
      <view style="width: 100%;">
        <input data-key="{{item.key}}" data-uid="{{item.id}}" class=" m-input-background  m-input-content" 
        type="{{item.type}}" value="{{item.value}}" focus="{{item.focus}}" placeholder="{{commonData.textLabel[item.placeholder]}}" 
        maxlength="{{item.maxlength === undefined ? 140 : item.maxlength}}" bindinput="inputHandler"/>
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

.m-input-content {
  height: 48px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: unset;
  border-left: 0px solid rgba(0, 0, 0, 0);
  border-right: 0px solid rgba(0, 0, 0, 0);
}

.m-input-background {
  background: white;
}

.input-content {
  max-width: 540px;
}

```
</md-block-item>
<md-block-item type="JS">

```javascript
Block({
  data:{
   commonData: {
    textLabel:{
      'input_auto_focus':'自动聚焦',
      'input_auto_placheholder':'输入区自动聚焦',
      'input_max_input_length':'设置最大输入长度',
      'input_max_placheholder':'最大输入长度为10个字符',
      'input_access_input_value':'实时获取输入值',
      'input_value_placheholder':'输入同步到视图中',
      'input_ctrl':'控制输入',
      'input_ctrl_placheholder':'连续输入两个1 会变成2',
      'input_number':'数字输入',
      'input_number_placheholder':'数字输入框'
    },
    elements: [{
      title: 'input_auto_focus',
      placeholder: 'input_auto_placheholder',
      type: 'text',
      key: '',
      id: 0,
      focus: true
    }, {
      title: 'input_max_input_length',
      placeholder: 'input_max_placheholder',
      type: 'text',
      focus: false,
      key: '',
      id: 1,
      maxlength: '10'
    }, {
      title: 'input_access_input_value',
      placeholder: 'input_value_placheholder',
      type: 'text',
      key: 'sync',
      displayValue: '',
      id: 2,
      focus: false
    }, {
      title: 'input_ctrl',
      placeholder: 'input_ctrl_placheholder',
      type: 'number',
      key: 'serial',
      focus: false,
      id: 3,
      value: ''
    }, {
      title: 'input_number',
      placeholder: 'input_number_placheholder',
      type: 'number',
      key: '',
      id: 4,
      focus: false
    }],
  },
  },
  onLoad(){
    tt.hideBlockLoading();
  },
  methods: {
    syncContent(e) {
      const { value } = e.detail;
      const { commonData } = this.data;
      commonData.elements[2].value = commonData.elements[2].displayValue = value;
      this.setData({
        commonData
      });
    },
    changeSerialOneToTwo(e) {
      const { value } = e.detail;
      const { commonData } = this.data;

if (value.length >= 2) {
        if (value.endsWith('11')) {
          commonData.elements[3].value = value.slice(0, -2) + '2';
          this.setData({
            commonData
          });
        }
      }
    },
    inputHandler(e) {
      const { key } = e.currentTarget.dataset;
      switch (key) {
        case 'sync':
          this.methods.syncContent.call(this, e);
          break;
        case 'serial':
          this.methods.changeSerialOneToTwo.call(this, e);
          break;
      }
    }
  }
})
```

</md-block-item>
</md-block>
