---
title: "Android原生集成应用"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/native-integrated-application/andr
---
最后更新于 2025-07-02

# Android原生集成应用

| 组件类型 | 最低飞书版本 |生效基线|
|------|--------|--|
| 协议组件 | 5.22   |2.0.2及以上版本|

## 组件说明
该组件通过开放平台的流程创建应用并开启原生集成应用，开发者可以实现原生集成应用与飞书的无缝集成，提供更丰富的功能和更便捷的用户体验。这样可以增强应用的可用性，提升用户的工作效率和体验质量。

## API 列表
### native-app-extension-api

#### Packages

| Name |
|---|
| com.ss.android.lark.extension_api |

/com.ss.android.lark.extension_api

### INativeAppExtension

interface INativeAppExtension

原生页面的基类接口，用于实现原生登录SSO页面或原生控制台应用时需要先实现此接口。

#### Functions

| Name | Summary |
|---|---|
| destroy | abstract fun destroy()<br>应用销毁 |
| getAppId | abstract fun getAppId(): String<br>在开放平台管理后台申请的原生应用appId |
| init | abstract fun init()<br>应用初始化 |

##### destroy

abstract fun destroy()

应用销毁

##### getAppId

abstract fun getAppId(): String

在开放平台管理后台申请的原生应用appId

###### Return

appId

##### init

abstract fun init()

应用初始化

/com.ss.android.lark.extension_api

### INativeAppLauncher

interface INativeAppLauncher

启动本地应用接口，用于打开在工作台/搜索中展示的本地应用

#### Functions

| Name | Summary |
|---|---|
| launchNativeApp | abstract fun launchNativeApp(context: Context, linkUrl: String)<br>打开本地应用 |

##### launchNativeApp

abstract fun launchNativeApp(context: Context, linkUrl: String)

打开本地应用

###### Parameters

| Name | Description |
|---|---|
| context | Context |
| linkUrl | 本地应用配置的 AppLink |

/com.ss.android.lark.extension_api

### INativeAppPageRouter

interface INativeAppPageRouter

启动原生登录页面接口，用于注册自定义的 SSO 登录页

#### Functions

| Name | Summary |
|---|---|
| pageRoute | abstract fun pageRoute(context: Context, linkUrl: String)<br>原生登录路由能力，收到appLink后可以跳转到的自定义的原生页面 |

##### pageRoute

abstract fun pageRoute(context: Context, linkUrl: String)

原生登录路由能力，收到appLink后可以跳转到的自定义的原生页面

###### Parameters

| Name | Description |
|---|---|
| linkUrl |

/com.ss.android.lark.extension_api

### NativeAppExtensionImpl

annotation class NativeAppExtensionImpl

## 接入说明
通过原生集成工具，选择 2.0.2 及以上基线，并启用 native-app-extension-api 组件

## 更新日志
| 版本号           |Release Note|
|---------------|---|
| 2.0.0-release |新功能：调整API接口类位置|
| 1.0.13 | 新功能：能力开放 |
