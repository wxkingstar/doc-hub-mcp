---
title: "CameraErrno"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/camera/cameraerrno
last_remote_update: 2022-12-07
last_remote_update_timestamp: 1670386616000
---
最后更新于 2022-12-07

# CameraErrno

Errno规则可参见 [Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.21.0+ | V5.21.0+ | **X** | 预览
网页应用 | **X** | **X** | **X** | 预览

### CameraErrno错误码字典

| **errno** | **errString** | **含义**                 |**归属**| **最低版本**
| ------ | ------ | ---------------------- | ---------- |----------|
|9000099| Failed to get component id | createCameraContext指定的id，和dom指定的id不对应时，api调用抛错 | 组件 | 5.21.0
|9005400| internalError | 内部错误 | Camera| 5.21.0
|9005401| Camera init error | 相机初始化错误 | Camera| 5.21.0
|9005402| Not allow to invoke @{apiName} in 'scanCode' mode | scanCode 模式下@{apiName}不可用 | Camera| 5.27.0
|9005411| StartRecord record already started | 已在录制状态 | Camera| 5.21.0
|9005412| StartRecord camera error | 开启录制时camera内部错误 | Camera| 5.21.0
|9005421| StopRecord record not started | 未开启录制 | Camera| 5.21.0
|9005422| StopRecord camera error | 停止录制时camera内部错误 | Camera| 5.21.0
|9005423| StopRecord save file error | 录制保存文件错误 | Camera| 5.21.0
|9005431| SetZoom fail: time out | setZoom超时 | Camera| 5.21.0
|9005441| TakePhoto camera error | 拍照时camera内部错误 | Camera| 5.21.0
|9005442| TakePhoto save file error | 拍照保存文件错误 | Camera| 5.21.0
|9005443| TakePhoto last capture not finish | 上次拍照未结束 | Camera| 5.21.0
|9005501| Camera init error | Camera 初始化错误 | Camera| 5.21.0
|9005502| Cannot add more than one camera component | 同一页面添加多于一个camera组件 | Camera| 5.21.0
|9005503| Failed to get component id | 未给组件设置id | Camera| 5.21.0
