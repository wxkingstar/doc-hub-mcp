---
title: "CameraContext.setZoom"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/camera/cameracontext/setzoom
last_remote_update: 2024-09-18
last_remote_update_timestamp: 1726645190000
---
最后更新于 2024-09-18

# CameraContext.setZoom

设置缩放级别

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.21.0+ | V5.21.0+ | **X** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2Fcomponent%2Fpages%2Fcamera%2Fcamera)
网页应用 | **X** | **X** | **X** | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
zoom | number | 是 |  | - 缩放级别，范围[1, maxZoom]。zoom 可取小数。maxZoom 可在 bindinitdone 返回值中获取。  
- 如果超出范围取边界值。

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
zoom | number | 实际设置的缩放级别。由于系统限制，某些机型可能无法设置成指定值，会改用最接近的可设值。

## 示例代码

```js
// 传入的 id 参数需与组件 TTML 中定义的 id 属性相同
const cameraContext = tt.createCameraContext('myCamera');

// zoom 需不超过 maxZoom
cameraContext.setZoom({
  zoom: 1.5
});
```
