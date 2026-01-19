---
title: "Harmony Applink 能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/applink-capability/harmony-applink-ability/harmony-applink
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# alchemy_applink_api - Harmony AppLink能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| alchemy_applink_api | 能力组件 | 1.0.3 | 7.32.0 |

## 功能简介
提供在 Harmony 平台中调用飞书 App Link 进行页面跳转与路由的能力，支持用户上下文及全局无用户上下文两种场景

### 更新日志
- 新增 IAlchemyGlobalAppLink 接口，支持登录前或无用户上下文场景下的全局 App Link 跳转

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyAppLink, IAlchemyGlobalAppLink } from '@ohos/alchemy_applink_api'

export class KARuntimeManager {
  private alchemyAppLink?: IAlchemyAppLink
  private alchemyGlobalAppLink?: IAlchemyGlobalAppLink

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.alchemyAppLink = runtime.getAlchemyAppLink()
    this.alchemyGlobalAppLink = runtime.getAlchemyGlobalAppLink()

// 用户上下文场景
    this.alchemyAppLink?.openAppLink('lark://docs/doccnxxxxx')

// 全局无用户上下文场景
    this.alchemyGlobalAppLink?.openAppLink('lark://login', 1001)
  }
}
```

## INTERFACE
### IAlchemyAppLink
调用飞书的页面跳转、路由能力

```ets
interface IAlchemyAppLink {
  openAppLink(url: string): void // 调用飞书的页面跳转、路由能力
}
```

#### 方法列表
#### `openAppLink(url: string)`
调用飞书的页面跳转、路由能力

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| url | string | 是 | 需要跳转的页面 App Link 地址 |

### IAlchemyGlobalAppLink
全局空间下，调用飞书的页面跳转、路由能力，主要用于登录前或无用户上下文的场景

```ets
interface IAlchemyGlobalAppLink {
  openAppLink(url: string, componentId?: number): void // 调用飞书的页面跳转、路由能力
}
```

#### 方法列表
#### `openAppLink(url: string, componentId?: number)`
调用飞书的页面跳转、路由能力

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| url | string | 是 | 需要跳转的页面 App Link 地址 |
| componentId | number | 否 | 可选的组件ID，如果不提供将使用默认值 |
