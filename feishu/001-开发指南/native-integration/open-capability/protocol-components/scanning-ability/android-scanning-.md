<!--
title: Android扫码能力
id: 7275218961529028612
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/scanning-ability/android-scanning-
updatedAt: 1745906612000
source: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/scanning-ability/android-scanning-
-->
# Android扫码能力

| 组件类型 | 最低飞书版本 |生效基线|
|------|--------|--|
| 协议组件 | 5.22   |2.0.2及以上版本|

## 组件说明
当用户在飞书中扫描二维码时，飞书会触发扫码回调事件。开发者可以注册相应的回调函数来处理该事件，并获取扫码结果。

:::html
<md-alert>
该组件仅支持单实例，如果有多个实现只会有某一个实现被调用。
</md-alert>
:::

## 流程概述
```                                             
                         ┌─┐                                                                               
                         ║"│                                                                               
                         └┬┘                                                                               
                         ┌┼┐                                                                               
                          │             ┌──────────┐           ┌─────────────┐                             
                         ┌┴┐            │QRCodeImpl│           │Feishu Client│                             
                        User            └─────┬────┘           └──────┬──────┘                             
                          │              Scan the Code                │                                    
                          │──────────────────────────────────────────>│                                    
                          │                   │                       │                                    
                          │                   │                       │────┐                               
                          │                   │                       │    │ Read the code                 
                          │                   │                       │<───┘                               
                          │                   │                       │                                    
                          │                   │   interceptHandle     │                                    
                          │                   │<──────────────────────│                                    
                          │                   │                       │                                    
                          │                   │                       │                                    
          ╔══════╤════════╪═══════════════════╪═══════════════════════╪═══════════════════════════════════╗
          ║ ALT  │  intercept                 │                       │                                   ║
          ╟──────┘        │                   │                       │                                   ║
          ║               │                   │         yes           │                                   ║
          ║               │                   │──────────────────────>│                                   ║
          ║               │                   │                       │                                   ║
          ║               │                   │                       │────┐                              ║
          ║               │                   │                       │    │ Stop process                 ║
          ║               │                   │                       │<───┘                              ║
          ╠═══════════════╪═══════════════════╪═══════════════════════╪═══════════════════════════════════╣
          ║ [not intercept]                   │                       │                                   ║
          ║               │                   │          no           │                                   ║
          ║               │                   │──────────────────────>│                                   ║
          ║               │                   │                       │                                   ║
          ║               │                   │                       │────┐                              ║
          ║               │                   │                       │    │ Request builtin handlers     ║
          ║               │                   │                       │<───┘                              ║
          ║               │                   │                       │                                   ║
          ║               │                   │                       │                                   ║
          ║         ╔═════╪╤══════════════════╪═══════════════════════╪═══════════════════════╗           ║
          ║         ║ ALT  │  not handled by builtin                  │                       ║           ║
          ║         ╟──────┘                  │                       │                       ║           ║
          ║         ║     │                   │        handle         │                       ║           ║
          ║         ║     │                   │<──────────────────────│                       ║           ║
          ║         ║     │                   │                       │                       ║           ║
          ║         ║     │                   │                       │                       ║           ║
          ║         ║     │   ╔══════╤════════╪═══════════════════════╪════════════════╗      ║           ║
          ║         ║     │   ║ ALT  │  handle│                       │                ║      ║           ║
          ║         ║     │   ╟──────┘        │                       │                ║      ║           ║
          ║         ║     │   ║               │         yes           │                ║      ║           ║
          ║         ║     │   ║               │──────────────────────>│                ║      ║           ║
          ║         ║     │   ╠═══════════════╪═══════════════════════╪════════════════╣      ║           ║
          ║         ║     │   ║ [not handle]  │                       │                ║      ║           ║
          ║         ║     │   ║               │          no           │                ║      ║           ║
          ║         ║     │   ║               │──────────────────────>│                ║      ║           ║
          ║         ║     │   ╚═══════════════╪═══════════════════════╪════════════════╝      ║           ║
          ║         ╠═════╪═══════════════════╪═══════════════════════╪═══════════════════════╣           ║
          ║         ║ [handled by builtin]    │                       │                       ║           ║
          ║         ║     │                   │                       │────┐                  ║           ║
          ║         ║     │                   │                       │    │ Stop process     ║           ║
          ║         ║     │                   │                       │<───┘                  ║           ║
          ║         ╚═════╪═══════════════════╪═══════════════════════╪═══════════════════════╝           ║
          ╚═══════════════╪═══════════════════╪═══════════════════════╪═══════════════════════════════════╝
                          │                   │                       │                                    
                          │              Code processed               │                                    
                          │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │                                    
                        User            ┌─────┴────┐           ┌──────┴──────┐                             
                         ┌─┐            │QRCodeImpl│           │Feishu Client│                             
                         ║"│            └──────────┘           └─────────────┘                             
                         └┬┘                                                                               
                         ┌┼┐                                                                               
                          │                                                                                
                         ┌┴┐                                                                               

```

## API 列表
### qrcode-api

#### Packages

| Name |
|---|
| com.ss.android.lark.qrcode |





/com.ss.android.lark.qrcode

### IQRCodeApi

interface IQRCodeApi

当用户在飞书中扫描二维码时，飞书会触发扫码回调事件。开发者可以注册相应的回调函数来处理该事件，并获取扫码结果。

#### Functions

| Name | Summary |
|---|---|
| handle | open fun ~~handle~~(result: String): Boolean<br>open fun handle(context: Context, result: String): Boolean<br>飞书扫码逻辑处理之后调用 |
| interceptHandle | open fun ~~interceptHandle~~(result: String): Boolean<br>open fun interceptHandle(context: Context, result: String): Boolean<br>飞书扫码逻辑处理之前调用 |


##### handle

open fun handle(context: Context, result: String): Boolean

飞书扫码逻辑处理之后调用

###### Return

是否处理成功

###### Parameters

| Name | Description |
|---|---|
| result | 扫码结果 |
| context | Context |

open fun ~~handle~~(result: String): Boolean

:::html
<md-alert type="warn">
**Deprecated**

从飞书7.32版本开始废弃

**Replace with**

```kotlin
handle(context, result)
```
</md-alert>
:::

飞书扫码逻辑处理之后调用

###### Return

是否处理成功

###### Parameters

| Name | Description |
|---|---|
| result | 扫码结果 |


##### interceptHandle

open fun interceptHandle(context: Context, result: String): Boolean

飞书扫码逻辑处理之前调用

###### Return

是否处理成功

###### Since

7.32

###### Parameters

| Name | Description |
|---|---|
| result | 扫码结果 |
| context | Context |

open fun ~~interceptHandle~~(result: String): Boolean

:::html
<md-alert type="warn">
**Deprecated**

从飞书7.32版本开始废弃

**Replace with**

```kotlin
interceptHandle(context, result)
```
</md-alert>
:::

飞书扫码逻辑处理之前调用

###### Return

是否处理成功

###### Parameters

| Name | Description |
|---|---|
| result | 扫码结果 |


/com.ss.android.lark.qrcode

### QRCodeImpl

annotation class QRCodeImpl

标记 IQRCodeApi 的实现类。


## 接入说明
通过原生集成工具，选择 2.0.2 及以上基线，并启用 qrcode-api 组件

## 更新日志
| 版本号           |Release Note|
|---------------|---|
| 1.1.0          |新功能：interceptHandle 与 handle 提供带 Context 的参数回调版本。现在可以利用回调中的参数直接实现打开页面的功能。|
| 1.0.0          |新功能：能力开放|

