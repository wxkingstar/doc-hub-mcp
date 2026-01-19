---
title: "Harmony 原生集成工作台应用（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/harmony-native-app/alchemy_nativelauncher758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Harmony 原生集成工作台应用（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_nativelauncher_api | 协议组件 | 1.0.0 | 7.58.0 |

## 功能简介
提供启动原生集成应用的能力，支持通过工作台组件唯一标识和配置链接启动原生应用

### 更新日志
- 新增 IAlchemyNativeLauncher 接口，支持获取原生应用 ID 和启动原生应用

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyNativeLauncher } from '@ohos/alchemy_nativelauncher_api'

export class MyAlchemyNativeLauncherImpl implements IAlchemyNativeLauncher {
  getNativeAppId(): string {
    return 'your_native_app_id'
  }

launchNativeApp(componentUniqueId: number, linkUrl: string): void {
    // 启动原生集成应用的具体实现
  }
}
```

## INTERFACE
### IAlchemyNativeLauncher
原生集成应用协议接口

```ets
interface IAlchemyNativeLauncher {
  getNativeAppId(): string // 返回开发者后台申请的打开原生集成应用能力的应用ID
  launchNativeApp(componentUniqueId: number, linkUrl: string): void // 启动原生集成应用
}
```

#### 方法列表
#### `getNativeAppId(): string`
返回开发者后台申请的打开原生集成应用能力的应用ID

**返回值**：开发者后台申请的应用ID

#### `launchNativeApp(componentUniqueId: number, linkUrl: string): void`
启动原生集成应用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| componentUniqueId | number | 是 | 工作台组件的 uniqueId |
| linkUrl | string | 是 | 开发者后台配置的原生集成应用的 applink 链接 |
