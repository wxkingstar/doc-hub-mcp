---
title: "Harmony App通用能力(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/app-common-capability/alchemy_app_api-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Harmony App通用能力(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_app_api | 能力组件 | 1.0.0 | 7.58.0 |

## 功能简介
App 通用能力

### 更新日志
- 新增 IAlchemyApp 接口，提供获取 UIContext 的能力

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyApp } from '@ohos/alchemy_app_api'

export class KARuntimeManager {
  private alchemyApp?: IAlchemyApp;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.alchemyApp = runtime.getAlchemyApp();
    const context = this.alchemyApp?.getUIContext();
  }
}
```

## INTERFACE
### IAlchemyApp
App 通用能力

```ets
interface IAlchemyApp {
  getUIContext(): UIContext | undefined // 获取 UIContext
}
```

#### 方法列表
#### `getUIContext(): UIContext | undefined`
获取 UIContext

**返回值**：UIContext 实例或 undefined
