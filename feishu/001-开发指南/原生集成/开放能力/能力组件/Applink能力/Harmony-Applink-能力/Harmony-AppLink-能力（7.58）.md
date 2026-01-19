---
title: "Harmony AppLink 能力（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/applink-capability/harmony-applink-capability/alchemy_applink_api-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Harmony AppLink 能力（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_applink_api | 能力组件 | 1.0.0 | 7.58.0 |

## 功能简介
提供在 Harmony 平台中调用飞书 App Link 进行页面跳转与路由的能力，支持用户上下文及全局无用户上下文两种场景

### 更新日志
- 精简接口定义，仅保留 IAlchemyAppLink 接口，移除 IAlchemyGlobalAppLink 接口及相关全局跳转能力

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyAppLink } from '@ohos/alchemy_applink_api'

export class KARuntimeManager {
  private alchemyAppLink?: IAlchemyAppLink

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.alchemyAppLink = runtime.getAlchemyAppLink()

// 用户上下文场景
    this.alchemyAppLink?.openAppLink('lark://docs/doccnxxxxx')
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
