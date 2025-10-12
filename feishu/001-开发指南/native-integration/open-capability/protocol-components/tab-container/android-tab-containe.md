<!--
title: Android Tab容器
id: 7275218961529143300
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/android-tab-containe
updatedAt: 1745906634000
source: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/tab-container/android-tab-containe
-->
# Android Tab容器

| 组件类型 | 最低飞书版本 |生效基线|
|------|--------|--|
| 协议组件 | 5.22   |2.0.2及以上版本基线|

## 组件说明
开发者可以根据自身业务需求，在飞书应用中增加自定义的 Tab，提供更丰富和个性化的功能和内容展示。
这有助于提升用户体验和工作效率，使应用更加易于访问。

## 流程概述
```                                                                                                                                                                                  
               ┌─┐                                                                      
               ║"│                                                                      
               └┬┘                                                                      
               ┌┼┐                                                                      
                │             ┌───────────┐          ┌─────────────┐                    
               ┌┴┐            │TabPageImpl│          │Feishu Client│                    
              User            └─────┬─────┘          └──────┬──────┘                    
                │                Launch App                 │                           
                │──────────────────────────────────────────>│                           
                │                   │                       │                           
                │                   │                       │────┐                      
                │                   │                       │    │ Load navigation bar  
                │                   │                       │<───┘                      
                │                   │                       │                           
                │                  ┌┴┐       getAppId       │                           
                │                  │ │ <────────────────────│                           
                │                  └┬┘                      │                           
                │                   │        appId          │                           
                │                   │──────────────────────>│                           
                │                   │                       │                           
                │                   │                       │                           
          ╔═════╪╤══════════════════╪═══════════════════════╪══════════════════════════╗
          ║ ALT  │  appId is valid: │                       │                          ║
          ╟──────┘                  │                       │                          ║
          ║     │                   │                       │                          ║
          ║     │   ╔═══════════════╪════╤══════════════════╪════════════════╗         ║
          ║     │   ║ RENDER CUSTOM TAB  │                  │                ║         ║
          ║     │   ╟────────────────────getTabViewConfig   │                ║         ║
          ║     │   ║              │ │ <────────────────────│                ║         ║
          ║     │   ║              └┬┘                      │                ║         ║
          ║     │   ║               │    tabViewConfig      │                ║         ║
          ║     │   ║               │──────────────────────>│                ║         ║
          ║     │   ║               │                       │                ║         ║
          ║     │   ║              ┌┴┐    getTabContent     │                ║         ║
          ║     │   ║              │ │ <────────────────────│                ║         ║
          ║     │   ║              └┬┘                      │                ║         ║
          ║     │   ║               │      tabContent       │                ║         ║
          ║     │   ║               │──────────────────────>│                ║         ║
          ║     │   ║               │                       │                ║         ║
          ║     │   ║              ┌┴┐  getTabTitleConfig   │                ║         ║
          ║     │   ║              │ │ <────────────────────│                ║         ║
          ║     │   ║              └┬┘                      │                ║         ║
          ║     │   ║               │    tabTitleConfig     │                ║         ║
          ║     │   ║               │──────────────────────>│                ║         ║
          ║     │   ╚═══════════════╪═══════════════════════╪════════════════╝         ║
          ╠═════╪═══════════════════╪═══════════════════════╪══════════════════════════╣
          ║ [appId is invalid:]     │                       │                          ║
          ║     │                   │                       │────┐                     ║
          ║     │                   │                       │    │ ignore tab impl     ║
          ║     │                   │                       │<───┘                     ║
          ╚═════╪═══════════════════╪═══════════════════════╪══════════════════════════╝
              User            ┌─────┴─────┐          ┌──────┴──────┐                    
               ┌─┐            │TabPageImpl│          │Feishu Client│                    
               ║"│            └───────────┘          └─────────────┘                    
               └┬┘                                                                      
               ┌┼┐                                                                      
                │                                                                       
               ┌┴┐                                                                      

```

## API 列表
### tab-container-api

#### Packages

| Name |
|---|
| com.ss.android.lark.tab |





/com.ss.android.lark.tab

### ITabPageConfig

interface ITabPageConfig

Tab页面配置。

#### Types

| Name | Summary |
|---|---|
| ITabTitleConfig | interface ITabTitleConfig<br>标题栏配置 |
| ITabViewConfig | interface ITabViewConfig<br>导航栏图标的配置。 |
| TabTitleClickListener | interface TabTitleClickListener<br>标题栏点击事件回调。 |
| TabViewClickListener | interface TabViewClickListener<br>TabView点击事件回调。 |

#### Functions

| Name | Summary |
|---|---|
| getAppId | abstract fun getAppId(): String<br>获取原生应用ID标识。 |
| getTabContent | abstract fun getTabContent(): Fragment<br>获取主Tab视图，生命周期的回调由视图内原生组件进行承载。 |
| getTabTitleConfig | abstract fun getTabTitleConfig(): ITabPageConfig.ITabTitleConfig?<br>获取标题栏配置。 |
| getTabViewConfig | abstract fun getTabViewConfig(): ITabPageConfig.ITabViewConfig?<br>获取导航栏展示的Tab图标及文字内容相关配置。 |
| interceptBackPress | abstract fun interceptBackPress(): Boolean<br>响应页面内的设备返回按键事件。 |


##### getAppId

abstract fun getAppId(): String

获取原生应用ID标识。

###### Return

原生应用ID。


##### getTabContent

abstract fun getTabContent(): Fragment

获取主Tab视图，生命周期的回调由视图内原生组件进行承载。

###### Return

获取主Tab视图。


##### getTabTitleConfig

abstract fun getTabTitleConfig(): ITabPageConfig.ITabTitleConfig?

获取标题栏配置。

###### Return

标题栏配置。


##### getTabViewConfig

abstract fun getTabViewConfig(): ITabPageConfig.ITabViewConfig?

获取导航栏展示的Tab图标及文字内容相关配置。

###### Return

导航栏展示的Tab图标及文字内容相关配置。


##### interceptBackPress

abstract fun interceptBackPress(): Boolean

响应页面内的设备返回按键事件。

###### Return

响应页面内的设备返回按键事件 （仅Android系统进行提供）


/com.ss.android.lark.tab

### TabPageConfig

annotation class TabPageConfig

标记 ITabPageConfig 的实现类。


/com.ss.android.lark.tab/ITabPageConfig

### ITabTitleConfig

interface ITabTitleConfig

标题栏配置

#### Types

| Name | Summary |
|---|---|
| IFunctionButton | interface IFunctionButton<br>功能按钮接口 |

#### Functions

| Name | Summary |
|---|---|
| getClickListener | abstract fun getClickListener(): ITabPageConfig.TabTitleClickListener?<br>标题点击事件回调。 |
| getFunctionButtonList | abstract fun getFunctionButtonList(context: Context): List&lt;ITabPageConfig.ITabTitleConfig.IFunctionButton&gt;?<br>功能按钮列表配置。 |
| isShow | abstract fun isShow(): Boolean<br>是否展示标题栏。 |


##### getClickListener

abstract fun getClickListener(): ITabPageConfig.TabTitleClickListener?

标题点击事件回调。

###### Return

ClickListener


##### getFunctionButtonList

abstract fun getFunctionButtonList(context: Context): List&lt;ITabPageConfig.ITabTitleConfig.IFunctionButton&gt;?

功能按钮列表配置。

###### Return

获取功能按钮列表

###### Parameters

| Name | Description |
|---|---|
| context | context |


##### isShow

abstract fun isShow(): Boolean

是否展示标题栏。

###### Return

是否展示标题栏


/com.ss.android.lark.tab/ITabPageConfig

### ITabViewConfig

interface ITabViewConfig

导航栏图标的配置。

#### Functions

| Name | Summary |
|---|---|
| getClickListener | abstract fun getClickListener(): ITabPageConfig.TabViewClickListener?<br>导航栏图标点击回调。 |


##### getClickListener

abstract fun getClickListener(): ITabPageConfig.TabViewClickListener?

导航栏图标点击回调。

###### Return

Tab菜单点击事件回调。


/com.ss.android.lark.tab/ITabPageConfig

### TabTitleClickListener

interface TabTitleClickListener

标题栏点击事件回调。

#### Functions

| Name | Summary |
|---|---|
| onClick | abstract fun onClick()<br>点击事件回调。 |


##### onClick

abstract fun onClick()

点击事件回调。


/com.ss.android.lark.tab/ITabPageConfig

### TabViewClickListener

interface TabViewClickListener

TabView点击事件回调。

#### Functions

| Name | Summary |
|---|---|
| onDoubleClick | abstract fun onDoubleClick()<br>当前TabView选中的条件下，双击 |
| onSingleClick | abstract fun onSingleClick()<br>当前TabView选中的条件下，单击 |


##### onDoubleClick

abstract fun onDoubleClick()

当前TabView选中的条件下，双击


##### onSingleClick

abstract fun onSingleClick()

当前TabView选中的条件下，单击


/com.ss.android.lark.tab/ITabPageConfig/ITabTitleConfig

### IFunctionButton

interface IFunctionButton

功能按钮接口

#### Functions

| Name | Summary |
|---|---|
| getContentView | abstract fun getContentView(): View |


##### getContentView

abstract fun getContentView(): View

###### Return

获取功能按钮View，点击事件交由业务方自行处理


## 接入说明
通过原生集成工具，选择 2.0.2 及以上基线，并启用 tab-container-api 组件。
该组件需要配合在开放平台注册原生应用，并在管理后台配置底部导航栏。
详见[Tab容器应用身份申请指南](https://open.larkoffice.com/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/tab-container-applic)

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.1.0 |新功能：下线ITabPage接口；增加ITabPageConfig接口，适配飞书新版导航栏架构|
| 1.0.3 |新功能：能力开放|

