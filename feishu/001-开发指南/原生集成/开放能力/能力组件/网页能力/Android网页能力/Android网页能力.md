---
title: "Android网页能力"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/web-capabilities/android-web-cap
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android网页能力

|组件类型| 最低飞书版本 |生效基线|
|--|--------|-|
|能力组件| 5.22   |2.0.2及以上版本|

## 组件说明
通过使用该 API 能力，开发者可以实现在飞书的 H5 容器中设置自定义的 cookie，或追加自定义的 User Agent 信息。
这样可以为开发者提供更多的灵活性和个性化定制的能力，以满足不同的业务需求和用户体验要求。

## API 列表
### webview-api

#### Packages

| Name |
|---|
| com.ss.android.lark.webview |

/com.ss.android.lark.webview

### IWebViewApi

interface IWebViewApi

LarkWebView 相关 API

#### Functions

| Name | Summary |
|---|---|
| appendUserAgent | abstract fun appendUserAgent(userAgent: String) |
| setCookie | abstract fun setCookie(**@** **NonNull** url: String, **@** **NonNull** value: String) |

##### appendUserAgent

abstract fun appendUserAgent(userAgent: String)

###### Parameters

| Name | Description |
|---|---|
| userAgent | 要注入的userAgent相关字段（建议application启动直接注入，确保一次性注入完全，多次调用注入不同的值会造成覆盖） |

##### setCookie

abstract fun setCookie(**@** **NonNull** url: String, **@** **NonNull** value: String)

/com.ss.android.lark.webview

### WebViewApi

annotation class WebViewApi

LarkWebView 相关 API

## 接入说明
通过原生集成工具，选择 2.0.2 及以上基线，并启用 webview-api 组件

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.0.3 |新功能：能力开放|
