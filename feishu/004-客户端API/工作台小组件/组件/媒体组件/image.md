---
title: "image"
source_url: https://open.feishu.cn/document/client-docs/block/component/media-component/image
---
最后更新于 2023-04-12

# image
用于展示图片。

## 属性
### 基本属性

| **名称**      | **类型**                      | **默认值** | **是否必填** | **说明**     |
| ----------- | --------------------------- | ------- | ------ | ---------- | ---------- |
| src       | string                                                | ''            | 否      | 图片资源地址         | PC 端 1.0.0 |
| mode      | string |  'scaleToFill'  |   否  | 图片剪裁方式。包括：<br>**scaleToFill**：不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 标签，此为**默认属性** 。<br>**aspectFit**：保持纵横比缩放图片，使图片的长边能完全显示出来。可以完整地将图片显示出来。<br>**aspectFill**：保持纵横比缩放图片，只保证图片的短边能完全显示出来。图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。<br>**center**：不缩放图片，只显示图片的中间区域。 |
| bindload  | (event: LoadEvent) => void                            | -         | 否      | 当图片加载成功时执行     | PC 端 1.0.0 |
| binderror | (event: ErrorEvent) => void                           | -             | 否      | 当图片加载错误时执行     | PC 端 1.0.0 |

### 扩展属性
#### LoadEvent

继承自 [BaseEvent](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system)，以下为扩展属性。

| **属性**   | **类型** | **说明**  |
| -------- | ------ | ------- | ---------- |
| detail    | object | 额外的信息  | PC 端 1.0.0 |
|  ∟ width  | number | 图片的宽   | PC 端 1.0.0 |
|  ∟ height | number | 图片的高   | PC 端 1.0.0 |

#### ErrorEvent

继承自 [BaseEvent](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system)，以下为扩展属性。

| **属性**   | **类型** | **说明**  |
| -------- | ------ | ------- | ---------- |
| detail    | object | 额外的信息  | PC 端 1.0.0 |
|  ∟ errMsg | string | 错误信息   | PC 端 1.0.0 |

## 注意事项
- 不支持本地图片，请使用网络图片或者使用遵循 [data 协议](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) 的图片。
- 移动端模式下，image 无默认宽高，因此开发者必须手动设置宽高。

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
    	"item": "image",
    	"isNew": true
    }
}
</md-block-entity>
  <md-block-appLink>
{
    "openDetail": 1, 
    "title": "image", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22component%22%2C%22item%22%3A%22getSystemInfo%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "component",
            "item": "image",
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
    <view>
      <text class="m-content-title-font">image</text>
    </view>
    <view style="padding-top: 24px;">
      <image
        style="width: 100%; border-radius: 0; height: 174px"
        class="image-content"
        src="{{commonData.url}}"
        mode="{{commonData.value}}"  
      />
    </view>
  </view>
    <picker mode="selector" style="width: 100%; height: 48px; padding-top: 24px; box-sizing: content-box;" range="{{commonData.mode}}" value="{{commonData.index}}" bindchange="imagePickerHandler">
      <view style="width: 100%;" class="picker-choose m-picker-choose">
        <text class="m-picker-title">图片适配方式</text>
        <view style="display: flex; flex-direction: row;">
          <text class="picker-choose-font m-picker-choose-font">{{commonData.value}}</text>
          <view class="form-arrow m-picker-arrow"></view>
        </view>
      </view>
    </picker>
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

.image-content {
  height: 200px;
  background-color: #FFF;
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

.picker-choose-font {
  line-height: 22px;
  font-size: 14px;
}

.form-arrow {
  position: relative;
}

.m-picker-arrow {
  margin: 10px 0px 0px 4px;
  width: 16px;
  height: 16px;
  flex-grow: 0;
  background: url('https://sf3-scmcdn-cn.feishucdn.com/obj/larkdeveloper/block-demo-image/icon-right-outlined-2.png') no-repeat center;
  background-size: 100% 100%;
}
```
</md-block-item>
<md-block-item type="JS">

```javascript
Block({
  data:{
    commonData: {
      url: 'https://sf3-cn.feishucdn.com/obj/eden-cn/eseh7nupevhps/block/image.png',
      mode: ['scaleToFill', 'aspectFit', 'aspectFill', 'center'],
      index: 0,
      value: 'scaleToFill'
    },
  },
  onLoad(){
    tt.hideBlockLoading();
  },
  methods:{
    imagePickerHandler(e) {
      const { value } = e.detail;
      const { commonData } = this.data;

this.setData({
        commonData: {
          ...commonData,
          index: value,
          value: commonData.mode[value],
        }
      });
    }
  }
})
```

</md-block-item>
</md-block>
