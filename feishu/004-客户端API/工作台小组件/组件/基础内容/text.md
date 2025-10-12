---
title: "text"
source_url: https://open.feishu.cn/document/client-docs/block/component/basic-content/text
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871937000
---
最后更新于 2022-07-15

# text
用于展示一段文本。

## 属性

| **名称**      | **类型**                      | **默认值** | **是否必填** | **说明**     |
| ----------- | --------------------------- | ------- | ------ | ---------- | ---------- |
| bindtap       | (event: TouchEvent) => void                      | -      | 否      | 组件的点击事件    |

## 注意事项
- 移动端渲染模式下，不支持 text 组件嵌套。
- 移动端渲染模式下，text 默认表现为`display: flex`；PC 端渲染模式下，text 默认表现为`display: inline`。
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
            "item": "text",
            "isNew": true
    }
}
</md-block-entity>
   <md-block-appLink>
{
    "openDetail": 1, 
    "title": "text", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22component%22%2C%22item%22%3A%22text%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "component",
            "item": "text",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
</md-block-appLink>
<md-block-item type="TTML">
```html
<view scroll-y style="height: 600px; width: 100%;background-color: rgba(31, 35, 41, 0.05);">
  <view class="content">
    <view class="content-title">
      <text class="content-title-font">text</text>
    </view>
    <view class="text-content">
      <view tt:for="{{commonData.lines}}" tt:key="{{index}}" class="text-line">
        <text class="text-line-font">text小组件官方示例</text>
      </view>
    </view>
    <view class="text-button-container">
      <text style="width: 120px" class="button button-normal" bindtap="addHandler">
        添加一行文字
      </text>
      <text style="width: 120px" class="button button-normal" bindtap="delHandler">
        删除一行文字
      </text>
    </view>
  </view>
</view>
```
</md-block-item>
<md-block-item type="TTSS">
```css
.text-btn-add {
  margin-right: 12px;
}

.text-content {
  margin-top: 24px;
  padding: 24px;
  height: 200px;
  background-color: #FFF;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.text-line {
  line-height: 24px;
  padding-bottom: 8px;
}

.text-line-font {
  font-size: 16px;
}

.text-button-container {
  display: flex;
  padding-top: 24px;
}

.button {
  display: inline-block;
  box-sizing: border-box;
  height: 32px;
  line-height: 30px;
  padding: 0 15px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #3370ff;
  background-color: #fff;
  color: #3370ff;
}

.button-normal {
  border: 1px solid #BBBFC4;
  padding: 0 11px;
  color: #1F2329;
}

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
```
</md-block-item>
<md-block-item type="JS">

```javascript
Block({
  data:{
    commonData: {
      lines: ['text_ex', 'text_ex'],
      template: 'text_ex',
      max: 5,
      min: 1,
      addDisabled: false,
      delDisabled: false,
    },
    containerHeight: '',
    },
    onLoad(){
      tt.hideBlockLoading();
    },
    methods:{
      addHandler() {
        const { commonData } = this.data;
          if (commonData.max > commonData.lines.length  ) {
              const length = commonData.lines.length;
              this.setData({
                commonData: {
                  ...commonData,
                  lines: [...commonData.lines, commonData.template],
                  addDisabled: length + 1 === commonData.max,
                  delDisabled: false
                }
              });
          }
      },
      delHandler() {  
        const { commonData } = this.data;
          if (commonData.lines.length > commonData.min) {
            const length = commonData.lines.length;
              this.setData({
                commonData: {
                  ...commonData,
                  lines: commonData.lines.slice(1),
                  addDisabled: false,
                  delDisabled: length - 1 === commonData.min
                }
              })
          }
      }
    }
})
```
</md-block-item>
</md-block>
