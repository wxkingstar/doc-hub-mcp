---
title: "Android生命周期（7.18及以上）"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/life-cycle/android/android-life-cycle-2
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745906612000
---
最后更新于 2025-04-29

# Android生命周期（7.18及以上）

| 组件类型 |最低飞书版本|生效基线|
|------|--|--|
| 协议组件 |7.18|2.6.2及以上基线|

## 组件说明
飞书应用的生命周期相关回调包括应用启动、进入前台、进入后台和飞书账号登录、登出等事件。开发者可以注册相应的回调函数，以便在这些事件发生时执行特定的业务逻辑。

## 流程概述
```
       ┌─┐                                                        
       ║"│                                                        
       └┬┘                                                        
       ┌┼┐                                                        
        │             ┌─────────────┐          ┌────┐             
       ┌┴┐            │LifecycleImpl│          │Lark│             
      User            └──────┬──────┘          └──┬─┘             
        │               Open APP                 ┌┴┐              
        │──────────────────────────────────────> │ │              
        │                    │                   │ │              
        │                    │                   │ │ ────┐        
        │                    │                   │ │     │ Init   
        │                    │                   │ │ <───┘        
        │                    │                   └┬┘              
        │                    │      onStart       │               
        │                    │<───────────────────│               
        │                    │                    │               
        │                Login                   ┌┴┐              
        │──────────────────────────────────────> │ │              
        │                    │                   │ │              
        │                    │                   │ │              
        │   ╔══════╤═════════╪═══════════════════╪═╪═══════════╗  
        │   ║ ALT  │  success│                   │ │           ║  
        │   ╟──────┘         │                   │ │           ║  
        │   ║                │ onLoginSuccess    │ │           ║  
        │   ║                │<───────────────── │ │           ║  
        │   ╠════════════════╪═══════════════════╪═╪═══════════╣  
        │   ║ [fail]         │                   │ │           ║  
        │   ║                │   onLoginFail     │ │           ║  
        │   ║                │<───────────────── │ │           ║  
        │   ╚════════════════╪═══════════════════╪═╪═══════════╝  
        │                    │                   └┬┘              
        │            go to background             │               
        │────────────────────────────────────────>│               
        │                    │                    │               
        │                    │      onPause       │               
        │                    │<───────────────────│               
        │                    │                    │               
        │           go to foreground             ┌┴┐              
        │──────────────────────────────────────> │ │              
        │                    │                   └┬┘              
        │                    │     onResume       │               
        │                    │<───────────────────│               
        │                    │                    │               
        │                logout                  ┌┴┐              
        │──────────────────────────────────────> │ │              
        │                    │                   └┬┘              
        │                    │     onLogout       │               
        │                    │<───────────────────│               
      User            ┌──────┴──────┐          ┌──┴─┐             
       ┌─┐            │LifecycleImpl│          │Lark│             
       ║"│            └─────────────┘          └────┘             
       └┬┘                                                        
       ┌┼┐                                                        
        │                                                         
       ┌┴┐                                                        

```

## API 列表
### lifecycle-api

#### Packages

| Name |
|---|
| com.ss.android.lark.alchemy.lifecycle |

/com.ss.android.lark.alchemy.lifecycle

### AppState

open class AppState

应用前后台状态

#### Properties

| Name | Summary |
|---|---|
| isFront | val isFront: Boolean |

#### Functions

| Name | Summary |
|---|---|
| create | open fun create(isFront: Boolean): AppState<br>创建 AppState 的实例。 仅供飞书方调用！ |

##### create

open fun create(isFront: Boolean): AppState

创建 AppState 的实例。 

仅供飞书方调用！

###### Return

AppState 实例。

###### Parameters

| Name | Description |
|---|---|
| isFront | 应用是否在前台。 |

/com.ss.android.lark.alchemy.lifecycle

### ILifecycleApi

interface ILifecycleApi

飞书应用的生命周期相关回调包括应用启动、进入前台、进入后台和飞书账号登录、登出等事件。 开发者可以注册相应的回调函数，以便在这些事件发生时执行特定的业务逻辑。

See [LifecycleImpl](https://github.com/larksuite/alchemy_app_demo/blob/main/alchemy_app_demo_android/lifecycle-api-impl/src/main/java/com/sample/android/alchemy/lifecycle/LifecycleImpl.kt)

#### Functions

| Name | Summary |
|---|---|
| onAppStateChanged | abstract fun onAppStateChanged(context: Context, oldState: AppState, newState: AppState)<br>应用前后台状态变化时调用。 |
| onLoginFail | abstract fun onLoginFail(context: Context, isFastLogin: Boolean)<br>飞书账号登录失败时调用。 |
| onLoginSuccess | abstract fun onLoginSuccess(context: Context, isFastLogin: Boolean)<br>飞书账号登录成功时调用。 |
| onLogout | abstract fun onLogout(context: Context)<br>飞书账号登出时调用。 |
| onPause | abstract fun onPause(context: Context)<br>应用切到后台时调用。 |
| onResume | abstract fun onResume(context: Context)<br>应用切到前台时调用。 |
| onStart | abstract fun onStart(context: Context)<br>应用启动时调用。 |

##### onAppStateChanged

abstract fun onAppStateChanged(context: Context, oldState: AppState, newState: AppState)

应用前后台状态变化时调用。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |
| oldState | 老状态。 |
| newState | 新状态。 |

##### onLoginFail

abstract fun onLoginFail(context: Context, isFastLogin: Boolean)

飞书账号登录失败时调用。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |
| isFastLogin | 冷启动免密登录飞书该值为true。 |

##### onLoginSuccess

abstract fun onLoginSuccess(context: Context, isFastLogin: Boolean)

飞书账号登录成功时调用。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |
| isFastLogin | 冷启动免密登录飞书该值为true。 |

##### onLogout

abstract fun onLogout(context: Context)

飞书账号登出时调用。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |

##### onPause

abstract fun onPause(context: Context)

应用切到后台时调用。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |

##### onResume

abstract fun onResume(context: Context)

应用切到前台时调用。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |

##### onStart

abstract fun onStart(context: Context)

应用启动时调用。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |

/com.ss.android.lark.alchemy.lifecycle

### Lifecycle

annotation class Lifecycle

标记 ILifecycleApi 的实现类。

## 接入说明
通过原生集成工具，选择 2.6.2 及以上基线，并启用 lifecycle-api 组件

## 更新日志
| 版本号           |Release Note|
|---------------|---|
| 1.0.0-release |从 core-component-api 迁移至 lifecycle-api|
