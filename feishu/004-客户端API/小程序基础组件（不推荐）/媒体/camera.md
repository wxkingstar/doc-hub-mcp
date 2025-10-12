---
title: "camera"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/media/camera
last_remote_update: 2023-08-10
last_remote_update_timestamp: 1691634624000
---
最后更新于 2023-08-10

# camera

相机
**Notice**：相关API: [`tt.createCameraContext`](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/camera/createcameracontext)

调用前需要用户授权 `scope.camera`。了解如何授权，可查看[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。
## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.21.0+ | V5.21.0+ | **X** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2Fcomponent%2Fpages%2Fcamera%2Fcamera)

## 属性说明

属性名 | 类型 | 默认值 | 是否必填 | 是否可动态修改 | 描述 | 最低版本
--- | --- | --- | --- | --- | --- | ---
id | string |  | 是 | 否 | 组件标识符，当前页面内必须唯一 | 5.21.0
resolution | Enum&lt;string&gt; | medium | 否 | 否 | 分辨率 | 5.21.0
device-position | Enum&lt;string&gt; | back | 否 | 是 | 摄像头朝向 | 5.21.0
flash | Enum&lt;string&gt; | auto | 否 | 是 | 闪光灯 | 5.21.0
mode | Enum&lt;string&gt; | normal | 否 | 否 | 应用模式 | 5.27.0
scan-code-type | Enum&lt;string&gt; | continuous | 否 | 否 | 扫码回调方式 | 5.27.0
bindstop | EventHandler |  | 否 | 是 | 摄像头在非正常终止时触发，如退出后台等情况 | 5.21.0
binderror | EventHandler |  | 否 | 是 | 用户不允许使用摄像头、相机创建失败等情况触发 | 5.21.0
bindinitdone | EventHandler |  | 否 | 是 | - 相机初始化完成时触发，`e.detail = {maxZoom, devicePosition}`  
- 从stop状态回到可用状态时重新触发回调。  
- 切换摄像头时，关闭上一个摄像头并开启下一个摄像头。因此会先调用bindstop方法，再调用bindinitdone方法。 | 5.21.0
bindscancode | EventHandler |  | 否 | 是 | 在扫码识别成功时触发，仅在`mode="scanCode"`时生效 | 5.27.0
bindlumadetect | EventHandler |  | 否 | 是 | 暗光检测回调，仅在`mode="scanCode"`时生效 | 5.27.0

## Bug & Tip
1. `tip`: 同一页面只能插入一个`camera`组件
2. `tip`: 请注意原生组件使用限制
3. `tip`: 受自研浏览器内核覆盖率的限制，camera 组件在层级上不保证一定为同层渲染，是否支持同层渲染可参考 `bindinserted` 回调说明。在非同层渲染场景下，开发者需对界面做相应适配，避免在 `camera` 组件上方覆盖其他组件。同层渲染相关注意事项请参考 [原生组件与同层渲染](https://open.feishu.cn/document/uYjL24iN/uUTM5UjL1ETO14SNxkTN/native-component)。

## ScanCode Tip
当`mode`为`scanCode`时：
1. `tip`: `flash`为 `auto`/`off`表示关闭手电筒，`on`/`torch`表示打开手电筒
2. `tip`: `device-position`不支持切换，仅支持`back`
3. `tip`: `takePhoto`, `startRecord`, `stopRecord`均不可用

## 参数说明

### resolution 合法值
|值|说明|最低版本
|--|----|--
|low|低|5.21.0
|medium|中|5.21.0
|high|高|5.21.0
### device-position 合法值

|值|说明|最低版本
|--|----|--
|front|前置|5.21.0
|back|后置|5.21.0
### flash 合法值

|值|说明|最低版本
|--|--|--
|auto|自动（仅 iOS 支持）|5.21.0
|on|打开|5.21.0
|off|关闭|5.21.0
|torch|常亮|5.21.0
### mode 合法值

|值|说明|最低版本
|--|----|--
|normal|相机模式|5.21.0
|scanCode|扫码模式|5.27.0
### scan-code-type 合法值

|值|说明|最低版本
|--|--------|--
|continuous|连续回调，只要画面内有可扫的码，bindscancode就会持续回调|5.27.0
|single|触发式回调，只有当前后扫的码不同时，bindscancode才会回调|5.27.0
### bindinitdone
- 相机初次初始化时调用
- 相机每次由stop恢复可用时调用
``` JavaScript
interface BindInitDoneDetail {
  maxZoom: number; // 指代最大变焦范围，相关接口见CameraContext.setZoom
  devicePosition: string; // 与 device-position 属性对应
}
```
### bindinserted
- 相机组件被插入到页面时调用
- 此回调当前用于告知是否开启同层渲染
```JavaScript
interface BindInsertedDetail {
  isRenderInSameLayer: boolean; // 当前是否开启同层渲染
}
```
### bindscancode
```JavaScript
enum ScanCodeType {
    QR_CODE = 'QR_CODE',
    VORTEX_CODE = 'VORTEX_CODE',
    UPC_A_CODE = 'UPC_A_CODE',
    UPC_E_CODE = 'UPC_E_CODE',
    EAN_8_CODE = 'EAN_8_CODE',
    EAN_13_CODE = 'EAN_13_CODE',
    CODE39_CODE = 'CODE39_CODE',
    CODE128_CODE = 'CODE128_CODE',
    DATA_MATRIX = 'DATA_MATRIX',
    PDF_417 = 'PDF_417'
}

interface BindScanCodeDetail {
    type?: ScanCodeType;
    result?: string;
}
```
### bindlumadetect
- 暗光检测回调，只在mode="scanCode"时生效
- 回调时机: 相机初始化或 scene 发生改变时
```JavaScript
interface BindLumaDetectDetail {
    scene: number; // 暗光返回0, 亮光返回1
}
```

## 代码示例

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [扫码预览效果](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2Fcomponent%2Fpages%2Fcamera%2Fcamera)

</div> 

TTML文件
```html 
<scroll-view class="page-body">
  <view class="page-body-wrapper">
    <camera
    id="myCamera"
    binderror="binderror"
    bindstop="bindstop"
    bindinitdone="bindinitdone"
    bindinserted="bindinserted"
    style="width: 100%; height: 300px"/>

<view class="btn-area">
      <button type="primary" bindtap="takePhoto">{{take_photo}}</button>
    </view>

<view class="btn-area">
      <button type="primary" bindtap="startRecord">{{start_record}}</button>
    </view>
    <view class="btn-area">
      <button type="primary" bindtap="stopRecord">{{stop_record}}</button>
    </view>
    <view class="preview-tips" tt:if="{{src}}">{{preview_tips}}</view>
    <view class="btn-area" tt:if="{{src}}">
      <button type="primary" bindtap="previewImage">{{preview_image}}</button>
    </view>
    <video tt:if="{{videoSrc}}" class="video" src="{{videoSrc}}"/>

</view>
</scroll-view>
``` 
JS文件
```javascript 
const camera = i18n.cameraComponent

Page({
  data: {
    ...camera,
    src: undefined,
    videoSrc: undefined,
    maxZoom: undefined,
    currentDevicePosition: undefined,
  },

onReady: function () {
    this.ctx = tt.createCameraContext('myCamera');
  },
  takePhoto: function () {
    this.ctx.takePhoto({
      success: res => {
        console.log('takePhoto success', res);
        this.setData({
          src: res.tempImagePath
        });
      },
      fail: res => {
        console.log('takePhoto fail', res);
      }
    });
  },

startRecord: function () {
    this.ctx.startRecord({
      timeoutCallback: res => {
        console.log('startRecord timeout', res);
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        });
      },
      success: res => {
        console.log('startRecord success', res);
      },
      fail: res => {
        console.log('startRecord fail', res);
      }
    });
  },

stopRecord: function () {
    this.ctx.stopRecord({
      compressed: this.data.stopRecordCompressed,
      success: res => {
        console.log('stopRecord success', res);
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        });
      },
      fail: res => {
        console.log('stopRecord fail', res);
      }
    });
  },

binderror: function (e) {
    console.log('binderror', e);
  },

bindstop: function (e) {
    console.log('bindstop', e);
  },

bindinitdone: function (e) {
    console.log('bindinitdone', e.detail);
    this.setData({
      maxZoom: e.detail.maxZoom,
      currentDevicePosition: e.detail.devicePosition,
    })
  },

previewImage: function () {
    let image = this.data.src;
    tt.previewImage({
      urls: [image]
    })
  },
})

```
TTSS文件
```css
.preview-tips {
  margin: 20rpx 0;  
}

.video {
  margin: 50px auto;
  width: 100%;
  height: 300px;
}

.picker{
  padding: 19rpx 32rpx;
  background-color: #FFFFFF;
}
.section__title{
  padding: 48rpx 32rpx 8rpx 32rpx;
  font-size: medium;
  color: #999999;
}

.view-above {
  position: absolute;
  width: 100%;
  height: 40px;
  top: 40px;
}
.preview-tips {
  margin: 20rpx 0;  
}

.video {
  margin: 50px auto;
  width: 100%;
  height: 300px;
}
```
