---
title: "Harmony生命周期"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/harmony-lifecycle
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# alchemy_lifecycle_api - Harmony 生命周期能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_lifecycle_api | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
飞书应用的生命周期相关回调，包括应用启动、进入前台、进入后台和飞书账号登录、登出等操作。开发者可以注册相应的回调函数，以便在这些时间发生时执行特定的业务逻辑

### 更新日志
- 首次发布，提供完整的生命周期回调能力

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyLifeCycle, LoginEndContext, LogoutEndContext } from '@ohos/alchemy_lifecycle_api'

export class MyAlchemyLifeCycleImpl implements IAlchemyLifeCycle {
  onCreate(context: Context): void {
    KARuntimeManager.getInstance().getGlobalLogger()?.logInfo('LifeCycleImpl onCreate')
  }

onForeground(): void {
    KARuntimeManager.getInstance().getGlobalLogger()?.logInfo('LifeCycleImpl onForeground')
  }

onBackground(): void {
    KARuntimeManager.getInstance().getGlobalLogger()?.logInfo('LifeCycleImpl onBackground')
  }

// 其他方法省略...
}
```

## INTERFACE
### IAlchemyLifeCycle
飞书应用的生命周期相关回调，包括应用启动、进入前台、进入后台和飞书账号登录、登出等操作。开发者可以注册相应的回调函数，以便在这些时间发生时执行特定的业务逻辑

```ets
interface IAlchemyLifeCycle {
  onCreate(context: Context): void // AbilityStage.onCreate()
  onForeground(): void // 应用切到前台时
  onBackground(): void // 应用切到后台时
  onLoginEnd(context: LoginEndContext): void // 用户登录上线成功后触发（包括切换租户），A上线就通知A，B上线就通知用户B
  onLogoutEnd(endContext: LogoutEndContext): void // 用户登出下线成功后触发：A登出，通知A
  onSwitchUserSuccess(): void // 切换租户上线成功后触发：A -> B，通知B onSwitchUserSuccess，A 不做任何通知
}
```

#### 方法列表
#### `onCreate(context: Context): void`
AbilityStage.onCreate()

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | - |

#### `onForeground(): void`
应用切到前台时

#### `onBackground(): void`
应用切到后台时

#### `onLoginEnd(context: LoginEndContext): void`
用户登录上线成功后触发（包括切换租户），A上线就通知A，B上线就通知用户B

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | LoginEndContext | 是 | 登录结束上下文信息 |

#### `onLogoutEnd(endContext: LogoutEndContext): void`
用户登出下线成功后触发：A登出，通知A

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| endContext | LogoutEndContext | 是 | 登出结束上下文信息 |

#### `onSwitchUserSuccess(): void`
切换租户上线成功后触发：A -> B，通知B onSwitchUserSuccess，A 不做任何通知

### LoginEndContext
登录结束上下文信息

```ets
interface LoginEndContext {
  isSuccess: boolean // 是否登录成功
  isFastLogin: boolean // 是否免密登录(例如登录情况下打开app)
  isFirstLogin: boolean // 是否为首次登录
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| isSuccess | boolean | 是否登录成功 | - |
| isFastLogin | boolean | 是否免密登录(例如登录情况下打开app) | - |
| isFirstLogin | boolean | 是否为首次登录 | - |

### LogoutEndContext
登出结束上下文信息

```ets
interface LogoutEndContext {
  isSuccess: boolean // 是否登录成功
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| isSuccess | boolean | 是否登录成功 | - |
