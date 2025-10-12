---
title: "createCameraContext"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/camera/createcameracontext
last_remote_update: 2024-09-18
last_remote_update_timestamp: 1726645178000
---
最后更新于 2024-09-18

# createCameraContext

创建 [`camera`](https://open.feishu.cn/document/uYjL24iN/uYTNuYTNuYTN/camera) 上下文 `CameraContext` 对象。

`CameraContext` 与页面内唯一的 [`camera`](https://open.feishu.cn/document/uYjL24iN/uYTNuYTNuYTN/camera) 组件绑定，操作对应的 [`camera`](https://open.feishu.cn/document/uYjL24iN/uYTNuYTNuYTN/camera) 组件。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.21.0+ | V5.21.0+ | **X** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2Fcomponent%2Fpages%2Fcamera%2Fcamera)
网页应用 | **X** | **X** | **X** | 预览

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
id | string | 是 |  | [`camera`](https://open.feishu.cn/document/uYjL24iN/uYTNuYTNuYTN/camera) 组件的 id

## 输出
返回值：`CameraContext`，该对象的方法列表参见下表：

方法 | 介绍
--- | ---
[CameraContext.setZoom](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/camera/cameracontext/setzoom) | 设置缩放级别
[CameraContext.takePhoto](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/camera/cameracontext/takephoto) | 拍摄照片
[CameraContext.startRecord](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/camera/cameracontext/startrecord) | 开始录像
[CameraContext.stopRecord](https://open.feishu.cn/document/uYjL24iN/ukDOukDOukDO/camera/cameracontext/stoprecord) | 结束录像

## 示例代码

```js
// 传入的 id 参数需与组件 TTML 中定义的 id 属性相同
const cameraContext = tt.createCameraContext('myCamera');
```
