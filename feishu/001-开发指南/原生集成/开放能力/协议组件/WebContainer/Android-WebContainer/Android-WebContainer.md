---
title: "Android WebContainer"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/webcontainer/android
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android WebContainer

| 组件类型 | 最低飞书版本 | 生效基线     |
|------|--------|----------|
| 协议组件 | 6.1    | 2.1.8及以上 |

## 组件说明
飞书网页容器提供了回调接口，用于在打开和关闭 web 页面时进行处理。同时，该组件还支持定制错误页的内容和处理按钮点击事件。
<md-alert>
onOpen接口同步等待callback回调，之后继续执行网页容器open后续逻辑

## 流程概述
```                                                                                                                     
       ┌─┐                                                                            
       ║"│                                                                            
       └┬┘                                                                            
       ┌┼┐                                                                            
        │             ┌────────────────┐           ┌─────────────┐                    
       ┌┴┐            │WebContainerImpl│           │Feishu Client│                    
      User            └────────┬───────┘           └──────┬──────┘                    
        │                 open web view                   │                           
        │────────────────────────────────────────────────>│                           
        │                      │                          │                           
        │                      │         onOpen           │                           
        │                      │<─────────────────────────│                           
        │                      │                          │                           
        │                      │                          │                           
        │   ╔══════╤═══════════╪══════════════════════════╪══════════════════════════╗
        │   ║ ALT  │  success  │                          │                          ║
        │   ╟──────┘           │                          │                          ║
        │   ║                  │         Success          │                          ║
        │   ║                  │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ >│                          ║
        │   ║                  │                          │                          ║
        │   ║                  │                          │────┐                     ║
        │   ║                  │                          │    │ Load web view       ║
        │   ║                  │                          │<───┘                     ║
        │   ╠══════════════════╪══════════════════════════╪══════════════════════════╣
        │   ║ [fail]           │                          │                          ║
        │   ║                  │          Fail            │                          ║
        │   ║                  │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ >│                          ║
        │   ║                  │                          │                          ║
        │   ║                  │   getErrorPageConfig     │                          ║
        │   ║                  │<─────────────────────────│                          ║
        │   ║                  │                          │                          ║
        │   ║                  │    error page config     │                          ║
        │   ║                  │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ >│                          ║
        │   ║                  │                          │                          ║
        │   ║                  │                          │────┐                     ║
        │   ║                  │                          │    │ Load error page     ║
        │   ║                  │                          │<───┘                     ║
        │   ╚══════════════════╪══════════════════════════╪══════════════════════════╝
        │                      │                          │                           
        │                 close web view                  │                           
        │────────────────────────────────────────────────>│                           
        │                      │                          │                           
        │                      │         onClose          │                           
        │                      │<─────────────────────────│                           
      User            ┌────────┴───────┐           ┌──────┴──────┐                    
       ┌─┐            │WebContainerImpl│           │Feishu Client│                    
       ║"│            └────────────────┘           └─────────────┘                    
       └┬┘                                                                            
       ┌┼┐                                                                            
        │                                                                             
       ┌┴┐                                                                            

```

## API 列表
### web-container-api

#### Packages

| Name |
|---|
| com.ss.android.lark.web |

/com.ss.android.lark.web

### ErrorPageConfig

open class ErrorPageConfig

错误页配置。

#### Constructors

- 
   constructor()

#### Types

| Name | Summary |
|---|---|
| ButtonConfig | open class ButtonConfig<br>按钮配置信息 |

#### Properties

| Name | Summary |
|---|---|
| customContent | open var customContent: String<br>错误页可配置内容, 换行展现 |
| customContentTitle | open var customContentTitle: String<br>错误页内容Title, 加粗体 |
| customRefreshBtnConfig | open var customRefreshBtnConfig: ErrorPageConfig.ButtonConfig<br>重试按钮配置信息 |
| customTitle | open var customTitle: String<br>错误页 Title |
| customVPNBtnConfig | open var customVPNBtnConfig: ErrorPageConfig.ButtonConfig<br>VPN连接按钮配置信息 |

#### Functions

| Name | Summary |
|---|---|
| isHideBigImage | open fun isHideBigImage(): Boolean<br>是否隐藏背景大图。 |
| setHideBigImage | open fun setHideBigImage(hideBigImage: Boolean)<br>设置是否隐藏背景大图。 |

##### ErrorPageConfig

constructor()

##### isHideBigImage

open fun isHideBigImage(): Boolean

是否隐藏背景大图。

###### Return

是否隐藏背景大图。

##### setHideBigImage

open fun setHideBigImage(hideBigImage: Boolean)

设置是否隐藏背景大图。

###### Parameters

| Name | Description |
|---|---|
| hideBigImage | 是否隐藏背景大图。 |

/com.ss.android.lark.web

### IWebContainerApi

interface IWebContainerApi

飞书网页容器提供了回调接口，用于在打开和关闭 web 页面时进行处理。 同时，该组件还支持定制错误页的内容和处理按钮点击事件。

#### Types

| Name | Summary |
|---|---|
| Callback | interface Callback |

#### Functions

| Name | Summary |
|---|---|
| getErrorPageConfig | abstract fun getErrorPageConfig(): ErrorPageConfig?<br>当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息 |
| onClose | abstract fun onClose(url: String)<br>网页容器即将关闭的时候调用 |
| onOpen | abstract fun onOpen(url: String, callback: IWebContainerApi.Callback)<br>网页容器打开即将loadUrl的时候调用 |
| onTabVisibilityChanged | abstract fun onTabVisibilityChanged(selected: Boolean, tabParams: TabParams)<br>主导航模式下手动切换Tab的时候调用 |

##### getErrorPageConfig

abstract fun getErrorPageConfig(): ErrorPageConfig?

当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息

###### Return

CustomErrorPageConfig

##### onClose

abstract fun onClose(url: String)

网页容器即将关闭的时候调用

###### Parameters

| Name | Description |
|---|---|
| url | 即将关闭的页面h5 url |

##### onOpen

abstract fun onOpen(url: String, callback: IWebContainerApi.Callback)

网页容器打开即将loadUrl的时候调用

###### Parameters

| Name | Description |
|---|---|
| url | 加载的h5 url |
| callback |

##### onTabVisibilityChanged

abstract fun onTabVisibilityChanged(selected: Boolean, tabParams: TabParams)

主导航模式下手动切换Tab的时候调用

###### Parameters

| Name | Description |
|---|---|
| selected | true 表示当前Tab被选中, false表示当前Tab未被选中 |
| tabParams | 主导航模式网页应用切换的时候一些业务参数 |

/com.ss.android.lark.web

### TabParams

open class TabParams

主导航模式下网页应用切换的时候一些业务参数。

#### Constructors

- 
   constructor()

#### Properties

| Name | Summary |
|---|---|
| appId | open var appId: String<br>appId: 应用id |
| currentUrl | open var currentUrl: String<br>currentUrl: 当前正在展现页面的链接 |
| originalUrl | open var originalUrl: String<br>originalUrl: 首次加载的链接 |

##### TabParams

constructor()

/com.ss.android.lark.web

### WebContainerApiImpl

annotation class WebContainerApiImpl

标记 IWebContainerApi 的实现类。

/com.ss.android.lark.web/ErrorPageConfig

### ButtonConfig

open class ButtonConfig

按钮配置信息

#### Constructors

- 
   constructor()

#### Properties

| Name | Summary |
|---|---|
| customEvent | open var customEvent: String<br>按钮的custom api event, 仅支持tt. |
| customExtraString | open var customExtraString: String<br>custom api event 参数 |
| customText | open var customText: String<br>按钮的文案 |

#### Functions

| Name | Summary |
|---|---|
| isHideBtn | open fun isHideBtn(): Boolean<br>是否隐藏按钮。 |
| setHideBtn | open fun setHideBtn(hideBtn: Boolean)<br>设置是否隐藏按钮。 |

##### ButtonConfig

constructor()

##### isHideBtn

open fun isHideBtn(): Boolean

是否隐藏按钮。

###### Return

是否隐藏按钮。

##### setHideBtn

open fun setHideBtn(hideBtn: Boolean)

设置是否隐藏按钮。

###### Parameters

| Name | Description |
|---|---|
| hideBtn | 是否隐藏按钮。 |

/com.ss.android.lark.web/IWebContainerApi

### Callback

interface Callback

#### Functions

| Name | Summary |
|---|---|
| onFail | abstract fun onFail(code: Int)<br>内部流程处理异常，通知网页容器展示错误页 |
| onSuccess | abstract fun onSuccess()<br>内部流程处理完，通知网页容器继续加载 |

##### onFail

abstract fun onFail(code: Int)

内部流程处理异常，通知网页容器展示错误页

###### Parameters

| Name | Description |
|---|---|
| code | 异常的code值，网页容器根据code值进行相应的错误展示 |

##### onSuccess

abstract fun onSuccess()

内部流程处理完，通知网页容器继续加载

## 接入说明
通过原生集成工具，选择 2.1.8 及以上基线，并启用web-container-api组件，实现IWebContainerApi接口

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.1.0 |新功能：能力开放|
