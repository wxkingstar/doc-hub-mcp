---
title: "Harmony 路由能力(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/router-capabitity/alchemy_nativerouter-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Harmony 路由能力(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_nativerouter_api | 能力组件 | 1.0.0 | 7.58.0 |

## 功能简介
提供 Harmony 平台原生集成路由管理能力，支持注册、解注册原生路由，以及页面注册、跳转、回退和清空等操作

### 更新日志
- 新增原生集成路由管理接口 IAlchemyNativeRouterManager
- 新增原生集成路由接口 INativeRouter
- 新增路由使用场景枚举 NativeRouterScene
- 新增原生集成路由配置接口 NativeRouterConfig

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyNativeRouterManager, INativeRouter, NativeRouterScene, NativeRouterConfig } from '@ohos/alchemy_nativerouter_api'

export class KARuntimeManager {
  private nativeRouterManager?: IAlchemyNativeRouterManager
  private nativeRouter?: INativeRouter

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.nativeRouterManager = runtime.getAlchemyNativeRouterManager()

// 注册原生集成路由
    this.nativeRouter = this.nativeRouterManager?.registerNativeRouter(
      'myNativeRouter',
      NativeRouterScene.NATIVE_LAUNCHER
    )

// 注册原生页面
    const config: NativeRouterConfig = {
      routeName: 'nativePage',
      builder: nativePageBuilder
    }
    this.nativeRouter?.registerNativePage([config])

// 页面跳转
    this.nativeRouter?.nativePageGo(
      this.getUniqueId(),
      'nativePage',
      new Map([['key', 'value']])
    )
  }
}
```

## INTERFACE
### IAlchemyNativeRouterManager
原生集成路由管理类

```ets
interface IAlchemyNativeRouterManager {
  registerNativeRouter(nativeRouterId: string, nativeRouterScene: NativeRouterScene): INativeRouter // 注册原生集成路由
  unregisterNativeRouter(nativeRouterId: string): void // 解注册原生集成路由
}
```

#### 方法列表
#### `registerNativeRouter(nativeRouterId: string, nativeRouterScene: NativeRouterScene): INativeRouter`
注册原生集成路由，通过此方法会创建一个原生集成路由并注册到飞书路由框架中

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| nativeRouterId | string | 是 | 原生集成路由id，需保证唯一性 |
| nativeRouterScene | NativeRouterScene | 是 | 原生集成路由的使用场景 |

**返回值**：原生集成路由实例

#### `unregisterNativeRouter(nativeRouterId: string): void`
解注册原生集成路由

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| nativeRouterId | string | 是 | 原生集成路由id |

### INativeRouter
原生集成路由接口

```ets
interface INativeRouter {
  registerNativePage(configArray: NativeRouterConfig[]): void // 注册页面
  nativePageGo(componentUniqueId: number, routerName: string, params?: Map<string, Unknown>): boolean // 页面跳转
  nativePageBack(componentUniqueId: number): void // 页面回退
  nativePageClear(componentUniqueId: number): void // 页面清空
}
```

#### 方法列表
#### `registerNativePage(configArray: NativeRouterConfig[]): void`
注册页面

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| configArray | NativeRouterConfig[] | 是 | 原生页面配置数组 |

#### `nativePageGo(componentUniqueId: number, routerName: string, params?: Map<string, Unknown>): boolean`
页面跳转

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| componentUniqueId | number | 是 | 当前组件的UniqueId，可通过this.getUniqueId()获取 |
| routerName | string | 是 | 目标页面的路由名称 |
| params | Map<string, Unknown> | 否 | 页面跳转传参 |

**返回值**：跳转是否成功

#### `nativePageBack(componentUniqueId: number): void`
页面回退

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| componentUniqueId | number | 是 | 当前组件的UniqueId，可通过this.getUniqueId()获取 |

#### `nativePageClear(componentUniqueId: number): void`
页面清空

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| componentUniqueId | number | 是 | 当前组件的UniqueId，可通过this.getUniqueId()获取 |

### NativeRouterConfig
原生集成路由配置接口

```ets
interface NativeRouterConfig {
  routeName: string // 原生页面的routeName
  builder: WrappedBuilder<[Map<string, Unknown>]> // 原生页面的全局@Builder
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| routeName | string | 原生页面的routeName，非法字符: 空格 ? & // | - |
| builder | WrappedBuilder<[Map<string, Unknown>]> | 原生页面的全局@Builder | - |

## ENUM
### NativeRouterScene
路由使用场景

```ets
enum NativeRouterScene {
  NATIVE_LAUNCHER
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| NATIVE_LAUNCHER | ROUTER_SCENE_NATIVE_LAUNCHER | 原生集成应用场景 |
