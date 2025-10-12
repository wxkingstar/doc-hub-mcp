---
title: "CameraContext.stopRecord"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/camera/cameracontext/stoprecord
---
最后更新于 2024-09-18

# CameraContext.stopRecord

结束录像

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.21.0+ | V5.21.0+ | **X** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2Fcomponent%2Fpages%2Fcamera%2Fcamera)
网页应用 | **X** | **X** | **X** | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
compressed | boolean | 否 |  | 启动视频压缩，压缩效果同chooseVideo  
**Notice**：- 仅iOS生效

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
tempThumbPath | string | 封面图片文件的临时路径 (本地路径)
tempVideoPath | string | 视频的文件的临时路径 (本地路径)

## 示例代码

```js
// 传入的 id 参数需与组件 TTML 中定义的 id 属性相同
const cameraContext = tt.createCameraContext('myCamera');

// 结束录像并保存到相册
cameraContext.stopRecord({
  compressed: false,
  success: (res) => {
    console.log("stopRecord success:", res);
    tt.saveVideoToPhotosAlbum({
      filePath: res.tempVideoPath,
      success: (video) => {
        console.log("saveVideoToPhotosAlbum success:", video);
      },
      fail: (video) => {
        console.log("saveVideoToPhotosAlbum fail:", video);
      }
    });
  },
  fail: (res) => {
    console.log("stopRecord fail:", res);
  }
});
```
