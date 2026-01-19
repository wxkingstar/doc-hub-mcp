---
title: "Harmony原生集成工作台应用"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/harmony-native-app/harmony-native-integrated-workplace-app
last_remote_update: 2025-10-31
last_remote_update_timestamp: 1761877041000
---
最后更新于 2025-10-31

# alchemy_nativelauncher_api - Harmony 原生集成启动器 - 能力组件

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| alchemy_nativelauncher_api | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
提供启动原生集成应用的能力，支持通过工作台组件唯一标识和配置链接启动原生应用

### 更新日志
- 新增 IAlchemyNativeLauncher 接口，支持获取原生应用 ID 和启动原生应用

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyNativeLauncher } from '@ohos/alchemy_nativelauncher_api'

export class KARuntimeManager {
  private nativeLauncher?: IAlchemyNativeLauncher;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.nativeLauncher = runtime.getAlchemyNativeLauncher();
    const appId = this.nativeLauncher?.getNativeAppId();
    this.nativeLauncher?.launchNativeApp(12345, 'https://example.com/app');
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
| componentUniqueId | number | 是 | 工作台组件的uniqueId |
| linkUrl | string | 是 | 开发者后台配置的原生集成应用的applink链接 |
