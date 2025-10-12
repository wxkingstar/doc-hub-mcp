---
title: "Android Applink能力（7.18及以上）"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/applink-capability/android/android
---
最后更新于 2025-04-29

# Android Applink能力（7.18及以上）

|组件类型|最低飞书版本|生效基线|
|--|--|--|
|能力组件|7.18|2.6.2及以上基线|

## 组件说明
通过该API能力，可以调用飞书的页面跳转、路由能力。

## API 列表
### applink-api

#### Packages

| Name |
|---|
| com.ss.android.lark.alchemy.applink |

/com.ss.android.lark.alchemy.applink

### AppLinkImpl

annotation class AppLinkImpl

标记 IAppLinkApi 的实现类。 

仅供飞书侧使用

/com.ss.android.lark.alchemy.applink

### IAppLinkApi

interface IAppLinkApi

调用飞书的页面跳转、路由能力。

#### Functions

| Name | Summary |
|---|---|
| openAppLink | abstract fun openAppLink(**@** **NonNull** context: Context, **@** **NonNull** appLinkUrl: String): Boolean<br>调用飞书的页面跳转、路由能力。 |

##### openAppLink

abstract fun openAppLink(**@** **NonNull** context: Context, **@** **NonNull** appLinkUrl: String): Boolean

调用飞书的页面跳转、路由能力。

###### Return

跳转是否成功。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |
| appLinkUrl | 需要跳转的页面 App Link 地址。 |

## 接入说明
通过原生集成工具，选择 2.6.2 及以上基线，启用 applink-api 组件

## 更新日志
|版本号|Release Note|
|---|---|
|1.0.0|从 core-component-api 迁移至 applink-api|
