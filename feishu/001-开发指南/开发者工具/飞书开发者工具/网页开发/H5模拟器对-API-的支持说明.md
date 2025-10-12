---
title: "H5模拟器对 API 的支持说明"
source_url: https://open.feishu.cn/document/tools-and-resources/development-tools/development-of-h5-in-tools/how-to-debug-apis-in-monitor-of-h5-
last_remote_update: 2024-06-17
last_remote_update_timestamp: 1718623591000
---
最后更新于 2024-06-17

# 开发者工具 H5 API 支持说明

## 开放接口

#### 登录

API 名称 | 模拟器
--- | ---
[requestAuthCode](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/20220308) | **2.13.0**

#### 用户信息

API 名称 | 模拟器
--- | ---
[getUserInfo](https://open.feishu.cn/document/uYjL24iN/ucjMx4yNyEjL3ITM) | **2.0.0**

#### 设置

API 名称 | 模拟器
--- | ---
[openSetting](https://open.feishu.cn/document/uYjL24iN/uUzMx4SNzEjL1MTM) | **2.0.0**
[getSetting](https://open.feishu.cn/document/uYjL24iN/uQzMx4CNzEjL0MTM) | **2.0.0**

#### 授权

API 名称 | 模拟器
--- | ---
[authorize](https://open.feishu.cn/document/uYjL24iN/ugzMx4COzEjL4MTM) | **2.0.0**

#### 安全密码验证

API 名称 | 模拟器
--- | ---
[startPasswordVerify](https://open.feishu.cn/document/uYjL24iN/ugTO3IjL4kzNy4CO5cjM) | **2.0.0**

#### 系统认证

API 名称 | 模拟器
--- | ---
[startDeviceCredential](https://open.feishu.cn/document/uYjL24iN/uIDN14iM0UjLyQTN) | **2.0.0**

#### 水印

API 名称 | 模拟器
--- | ---
[checkWatermark](https://open.feishu.cn/document/uYjL24iN/ukTM1EjL5ETNx4SOxUTM) | **2.0.0**

#### 邮件

API 名称 | 模拟器
--- | ---
[mailto](https://open.feishu.cn/document/uYjL24iN/uAjNwEjLwYDMx4CM2ATM) | **2.0.0**

## 界面
#### 交互反馈

API 名称 | 模拟器
--- | ---
[showModal](https://open.feishu.cn/document/uYjL24iN/ugDNy4CO0IjL4QjM) | **2.0.0**

#### 导航栏

API 名称 | 模拟器
--- | ---
[setNavigationBar](https://open.feishu.cn/document/uYjL24iN/uYjMy4iNyIjL2IjM/setnavigationbar) | **2.21.2**
[onLeftNavigationBarClick](https://open.feishu.cn/document/uYjL24iN/uYjMy4iNyIjL2IjM/onleftnavigationbarclick) | **2.21.2**
[onRightNavigationBarClick](https://open.feishu.cn/document/uYjL24iN/uYjMy4iNyIjL2IjM/onrightnavigationbarclick) | **2.21.2**

## 设备
#### Wi-Fi

API 名称 | 模拟器
--- | ---
[getConnectedWifi](https://open.feishu.cn/document/uYjL24iN/ugjNx4CO2EjL4YTM) | **2.0.0**
[getWifiStatus](https://open.feishu.cn/document/uYjL24iN/uYTN4QjL2UDO04iN1gDN) | **2.0.0**

#### 剪贴板

API 名称 | 模拟器
--- | ---
[setClipboardData](https://open.feishu.cn/document/uYjL24iN/ugzNx4CO3EjL4cTM) | **2.0.0**
[getClipboardData](https://open.feishu.cn/document/uYjL24iN/uczNx4yN3EjL3cTM) | **2.0.0**

#### 网络状态

API 名称 | 模拟器
--- | ---
[getNetworkType](https://open.feishu.cn/document/uYjL24iN/uYjNx4iN2EjL2YTM) | **2.0.0**

#### 屏幕亮度

API 名称 | 模拟器
--- | ---
[setScreenBrightness](https://open.feishu.cn/document/uYjL24iN/uIjNx4iM2EjLyYTM/set-screen-brightness) | **2.0.0**
[getScreenBrightness](https://open.feishu.cn/document/uYjL24iN/uIjNx4iM2EjLyYTM/get-screen-brightness) | **2.0.0**
[setKeepScreenOn](https://open.feishu.cn/document/uYjL24iN/ukzNx4SO3EjL5cTM) | **2.0.0**

#### 拨打电话

API 名称 | 模拟器
--- | ---
[makePhoneCall](https://open.feishu.cn/document/uYjL24iN/uUzNx4SN3EjL1cTM) | **2.0.0**

#### 震动

API 名称 | 模拟器
--- | ---
[vibrateShort](https://open.feishu.cn/document/uYjL24iN/uADOx4CM4EjLwgTM) | **2.0.0**
[vibrateLong](https://open.feishu.cn/document/uYjL24iN/uEDOx4SM4EjLxgTM) | **2.0.0**

#### 罗盘

API 名称 | 模拟器
--- | ---
[startCompass](https://open.feishu.cn/document/uYjL24iN/uIzNx4iM3EjLycTM) | **2.0.0**
[stopCompass](https://open.feishu.cn/document/uYjL24iN/uMzNx4yM3EjLzcTM) | **2.0.0**

## 文件

API 名称 | 模拟器
--- | ---
[saveFile](https://open.feishu.cn/document/uYjL24iN/ugDOz4CO4MjL4gzM) | **2.0.0**
[filePicker](https://open.feishu.cn/document/uYjL24iN/uETM04SMxQjLxEDN) | **2.0.0**
[getFileSystemManager](https://open.feishu.cn/document/uYjL24iN/uETOuETOuETO/tt_get_file_system_manager) | **2.10.0**
[FileSystemManager.readFile](https://open.feishu.cn/document/uYjL24iN/uETOuETOuETO/file_system_manager/file_system_manager_read_file) | **2.10.0**

## 媒体
#### 图片

API 名称 | 模拟器
--- | ---
[saveImageToPhotosAlbum](https://open.feishu.cn/document/uYjL24iN/uUTMx4SNxEjL1ETM) | **2.0.0**
[chooseImage](https://open.feishu.cn/document/uYjL24iN/uMTMx4yMxEjLzETM) | **2.0.0**
[previewImage](https://open.feishu.cn/document/uYjL24iN/uMDOx4yM4EjLzgTM) | **2.0.0**
[compressImage](https://open.feishu.cn/document/uYjL24iN/uMjN24yM2YjLzYjN) | **2.0.0**

#### 视频

API 名称 | 模拟器
--- | ---
[saveVideoToPhotosAlbum](https://open.feishu.cn/document/uYjL24iN/ucDOx4yN4EjL3gTM) | **2.0.0**
[chooseVideo](https://open.feishu.cn/document/uYjL24iN/uEjMx4SMyEjLxITM) | **2.0.0**

## 导航

API 名称 | 模拟器
--- | ---
[openSchema](https://open.feishu.cn/document/uYjL24iN/ukzN4IjL5cDOy4SO3gjM) | **2.0.0**
