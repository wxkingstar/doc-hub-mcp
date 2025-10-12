---
title: "CameraContext.startRecord"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/camera/cameracontext/startrecord
last_remote_update: 2024-09-18
last_remote_update_timestamp: 1726645215000
---
最后更新于 2024-09-18

# CameraContext.startRecord

开始录像
**Notice**：- 调用前需要用户授权 `scope.record`。了解如何授权，可查看[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.21.0+ | V5.21.0+ | **X** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2Fcomponent%2Fpages%2Fcamera%2Fcamera)
网页应用 | **X** | **X** | **X** | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
timeout | number | 否 | 30 | 录制时长上限，最长 300s

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

cameraContext.startRecord({
  timeout: 60,
  success: (res) => {
    console.log("startRecord success:", res);
  },
  fail: (res) => {
    console.log("startRecord fail:", res);
  }
});
```
