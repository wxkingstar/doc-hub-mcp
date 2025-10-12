---
title: "canvas"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/other/canvas
---
最后更新于 2022-09-08

# canvas

画布。

|属性名|类型|默认值|说明|
|------|--|-----|--|
|canvas-id|String||canvas 组件的标识，必须设置该属性|
 `canvas`组件的默认宽度为 300px，高度为 225px

## 代码示例

```html
<view class="container">
  <view class="page-body">
    <view class="page-body-wrapper">
      <canvas canvas-id="canvas" class="canvas"></canvas>
    </view>
  </view>
</view>
```

```js
Page({
  data :{},
  onShow: function (res) {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    }
    this.interval = setInterval(this.drawBall, 17)
  },
  drawBall: function () {
    var p = this.position
    p.x += p.vx
    p.y += p.vy
    if (p.x >= 300) {
      p.vx = -2
    }
    if (p.x <= 7) {
      p.vx = 2
    }
    if (p.y >= 300) {
      p.vy = -2
    }
    if (p.y <= 7) {
      p.vy = 2
    }

var context = tt.createCanvasContext('canvas')

function ball(x, y) {
      context.beginPath(0)
      context.arc(x, y, 5, 0, Math.PI * 2)
      context.setFillStyle('#1aad19')
      context.fill()
      context.stroke()
    }

ball(p.x, 150)
    ball(150, p.y)
    ball(300 - p.x, 150)
    ball(150, 300 - p.y)
    ball(p.x, p.y)
    ball(300 - p.x, 300 - p.y)
    ball(p.x, 300 - p.y)
    ball(300 - p.x, p.y)

console.log('will call context.draw');
    context.draw();
  },
  onUnload: function () {
    clearInterval(this.interval)
  }, exportImage: function () {
    tt.canvasToTempFilePath({
      canvasId: 'canvas',
      fileType: "jpg",
      x: 100,
      y: 200,
      width: 100,
      height: 200,
      destWidth: 300,
      destHeight: 400,
      quality: 1,
      success: function (res) {
        console.log(" canvasToTempFilePath success")
        console.log(res.tempFilePath)
        tt.showToast({
          title: "success"
        })
      }, fail: function () {
        console.log(" canvasToTempFilePath fail")
      }

})
  }
})

```

```css
.canvas {
  width: 305px;
  height: 305px;
  background-color: #fff;
}
```

```json
{
    "navigationBarTitleText": "canvas"
}
```
