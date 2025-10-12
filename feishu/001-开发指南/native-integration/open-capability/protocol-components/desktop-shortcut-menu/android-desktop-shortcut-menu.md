<!--
title: Android桌面快捷菜单
id: 7323094391425663004
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/desktop-shortcut-menu/android-desktop-shortcut-menu
updatedAt: 1745906654000
source: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/desktop-shortcut-menu/android-desktop-shortcut-menu
-->
# Android桌面快捷菜单

| 组件类型 | 最低飞书版本 |生效基线|
|------|--------|--|
| 协议组件 | 7.6    |2.5.1及以上版本|

## 组件说明
飞书开放桌面快捷方式菜单入口，通过该API开发者可以集成自有菜单到飞书桌面快捷方式

## 流程概述
```                                                                                                                     
       ┌─┐                                                                 
       ║"│                                                                 
       └┬┘                                                                 
       ┌┼┐                                                                 
        │             ┌────────────┐           ┌─────────────┐             
       ┌┴┐            │ShortcutImpl│           │Feishu Client│             
      User            └──────┬─────┘           └──────┬──────┘             
        │            Request shortcuts               ┌┴┐                   
        │──────────────────────────────────────────> │ │                   
        │                    │                       │ │                   
        │                    │                       │ │                   
        │   ╔════════════════╪═════╤═════════════════╪═╪═══════════════╗   
        │   ║ GET CUSTOM SHORTCUT  │                 │ │               ║   
        │   ╟──────────────────────┘   getId         │ │               ║   
        │   ║               │ │ <────────────────────│ │               ║   
        │   ║               └┬┘                      │ │               ║   
        │   ║                │         id            │ │               ║   
        │   ║                │─────────────────────> │ │               ║   
        │   ║                │                       │ │               ║   
        │   ║               ┌┴┐       getIcon        │ │               ║   
        │   ║               │ │ <────────────────────│ │               ║   
        │   ║               └┬┘                      │ │               ║   
        │   ║                │     icon resId        │ │               ║   
        │   ║                │─────────────────────> │ │               ║   
        │   ║                │                       │ │               ║   
        │   ║               ┌┴┐       getLabel       │ │               ║   
        │   ║               │ │ <────────────────────│ │               ║   
        │   ║               └┬┘                      │ │               ║   
        │   ║                │        label          │ │               ║   
        │   ║                │─────────────────────> │ │               ║   
        │   ║                │                       └┬┘               ║   
        │   ║               ┌┴┐      getAppLink       │                ║   
        │   ║               │ │ <─────────────────────│                ║   
        │   ║               └┬┘                       │                ║   
        │   ║                │        appLink         │                ║   
        │   ║                │───────────────────────>│                ║   
        │   ╚════════════════╪════════════════════════╪════════════════╝   
        │                    │                        │                    
        │                    │                        │                    
        │                    │                        │────┐               
        │                    │                        │    │ Show shortcuts
        │                    │                        │<───┘               
        │           Click custom shortcut             │                    
        │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─>│                    
        │                    │                        │                    
        │                    │                        │────┐               
        │                    │                        │    │ Open appLink  
        │                    │                        │<───┘               
      User            ┌──────┴─────┐           ┌──────┴──────┐             
       ┌─┐            │ShortcutImpl│           │Feishu Client│             
       ║"│            └────────────┘           └─────────────┘             
       └┬┘                                                                 
       ┌┼┐                                                                 
        │                                                                  
       ┌┴┐                                                                 

```

## API 列表
### shortcut-api

#### Packages

| Name |
|---|
| com.ss.android.lark.shortcut |





/com.ss.android.lark.shortcut

### IShortcutApi

interface IShortcutApi

飞书开放桌面快捷方式菜单入口，通过该API开发者可以集成自有菜单到飞书桌面快捷方式。

能展示的快捷菜单数量是有限的，在不同的系统启动器上有不同的限制，而且飞书内置的快捷菜单优先级更高。

#### Functions

| Name | Summary |
|---|---|
| getApplink | abstract fun getApplink(context: Context): String<br>快捷方式点击之后跳转的飞书页面，支持飞书 AppLink |
| getIcon | **@** **DrawableRes** <br>abstract fun getIcon(context: Context): Int<br>桌面快捷方式菜单图标 |
| getId | abstract fun getId(context: Context): String?<br>快捷方式唯一Id。 如果返回的Id为空，将不会展示快捷方式菜单。 |
| getLongLabel | abstract fun getLongLabel(context: Context): String<br>设置桌面快捷方式菜单文字，展示逻辑同[Android原生 ShortcutInfo](https://developer.android.com/reference/android/content/pm/ShortcutInfo.Builder) |
| getShortLabel | abstract fun getShortLabel(context: Context): String<br>设置桌面快捷方式菜单文字 |


##### getApplink

abstract fun getApplink(context: Context): String

快捷方式点击之后跳转的飞书页面，支持飞书 AppLink

###### Return

页面 App Link。支持的AppLink见/ssl:ttdoc/uYjL24iN/ucjN1UjL3YTN14yN2UTN

###### Parameters

| Name | Description |
|---|---|
| context | Context |


##### getIcon

**@** **DrawableRes** 

abstract fun getIcon(context: Context): Int

桌面快捷方式菜单图标

###### Return

图标资源Id

###### Parameters

| Name | Description |
|---|---|
| context | Context |


##### getId

abstract fun getId(context: Context): String?

快捷方式唯一Id。 如果返回的Id为空，将不会展示快捷方式菜单。

###### Return

唯一标识Id

###### Parameters

| Name | Description |
|---|---|
| context | Context |


##### getLongLabel

abstract fun getLongLabel(context: Context): String

设置桌面快捷方式菜单文字，展示逻辑同[Android原生 ShortcutInfo](https://developer.android.com/reference/android/content/pm/ShortcutInfo.Builder)

###### Return

快捷方式文字

###### Parameters

| Name | Description |
|---|---|
| context | Context |


##### getShortLabel

abstract fun getShortLabel(context: Context): String

设置桌面快捷方式菜单文字

###### Return

快捷方式文字

###### Parameters

| Name | Description |
|---|---|
| context | Context |


/com.ss.android.lark.shortcut

### ShortcutImpl

annotation class ShortcutImpl

标记 IShortcutApi 的实现类。


## 接入说明
通过原生集成工具，选择 2.5.1 及以上基线，并启用shortcut-api组件，实现IShortcutApi

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.0.1 |新功能：能力开放|

