---
title: "CameraContext.takePhoto"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/camera/cameracontext/takephoto
last_remote_update: 2024-09-18
last_remote_update_timestamp: 1726645203000
---
最后更新于 2024-09-18

# CameraContext.takePhoto

拍摄照片

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.21.0+ | V5.21.0+ | **X** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2Fcomponent%2Fpages%2Fcamera%2Fcamera)
网页应用 | **X** | **X** | **X** | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
quality | Enum&lt;string&gt; | 否 | medium | 成像质量
selfieMirror | boolean | 否 | true | 是否开启镜像

## 参数说明

### quality 合法值
|值|说明|
|--|----|
|low|低|
|medium|中|
|high|高|

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
tempImagePath | string | 照片文件的临时路径 (本地路径)，安卓是 jpg 图片格式，ios是jpeg

## 示例代码

```js
// 传入的 id 参数需与组件 TTML 中定义的 id 属性相同
const cameraContext = tt.createCameraContext('myCamera');

// 拍照并保存到相册
cameraContext.takePhoto({
  quality: 'high',
  selfieMirror: false,
  success: (res) => {
    console.log('takePhoto success:', res);
    tt.saveImageToPhotosAlbum({
      filePath: res.tempImagePath,
      success: (photo) => {
        console.log('saveImageToPhotosAlbum success:', photo);
      },
      fail: (photo) => {
        console.log('saveImageToPhotosAlbum fail:', photo);
      }
    });
  },
  fail: (res) => {
    console.log('takePhoto fail:', res);
  }
});
```
