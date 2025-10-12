---
title: "image"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/media/image
last_remote_update: 2022-04-10
last_remote_update_timestamp: 1649576491000
---
最后更新于 2022-04-10

# image

图片。

|属性名|类型|默认值|说明|
|----|--|---|--|
|src|String||图片资源地址|
|mode|String|scaleToFill|图片剪裁方式，详情见后面的表格|
|lazy-load|Boolean|false|图片懒加载。只针对 page 与 scroll-view 下的 image 有效|
|binderror|EventHandler||当错误发生时触发|
|bindload|EventHandler||当图片加载完时触发|
image 组件默认的宽度是300px、高度是225px

mode取值范围：

|模式|值|说明|
|---|--|--|
|缩放|scaleToFill|不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素|
|缩放|aspectFit|保持纵横比缩放图片，使图片的长边能完全显示出来。<br>也就是说，可以完整地将图片显示出来。|
|缩放|aspectFill|保持纵横比缩放图片，只保证图片的短边能完全显示出来。<br>也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。|
|缩放 |widthFix|宽度不变，高度自动变化，保持原图宽高比不变|
|裁剪|top|不缩放图片，只显示图片的顶部区域|
|裁剪|bottom|不缩放图片，只显示图片的底部区域|
|裁剪|center|不缩放图片，只显示图片的中间区域|
|裁剪|left|不缩放图片，只显示图片的左边区域|
|裁剪|right|不缩放图片，只显示图片的右边区域|
|裁剪|top left|不缩放图片，只显示图片的左上边区域|
|裁剪|top right|不缩放图片，只显示图片的右上边区域|
|裁剪|bottom left|不缩放图片，只显示图片的左下边区域|
|裁剪|bottom right|不缩放图片，只显示图片的右下边区域|

## 代码示例

```html
<view class="container">
  <view class="page-body">
    <view class="page-section page-section-gap">
      <view class="page-section-title">{{local_image}}</view>
      <view class="page-section-ctn">
        <image style="width:20px; height: 20px;" src="../../resources/pic/logo.png" mode="bottom right"/>
      </view>
    </view>
    <view class="page-section page-section-gap">
      <view class="page-section-title">{{net_image}}</view>
      <view class="page-section-ctn">
        <image class="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset_2007-1.jpg/800px-Sunset_2007-1.jpg"/>
      </view>
    </view>
  </view>

</view>

```

```js
const iImage = i18n.image

Page({
    data :{
        ...iImage
    }
})
```

```css
.page-section-ctn {
  text-align: center;
}

.image {
  margin-top: 30rpx;
  width: 316rpx;
  height: 216rpx;
}
```

```json
{
    "navigationBarTitleText": "image"
}
```
