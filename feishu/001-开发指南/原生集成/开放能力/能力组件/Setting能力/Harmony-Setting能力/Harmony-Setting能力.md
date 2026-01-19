---
title: "Harmony Setting能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/setting-ability/harmony-setting-capability
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# alchemy_config_api - Harmony Setting能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| alchemy_config_api | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
配置相关能力

### 更新日志
- 新增 IAlchemyUserConfig 接口，提供获取配置信息的能力

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyUserConfig } from '@ohos/alchemy_config_api'

export class KARuntimeManager {
  private alchemyUserConfig?: IAlchemyUserConfig;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.alchemyUserConfig = runtime.getAlchemyUserConfig();
    const config = this.alchemyUserConfig?.getConfig('namespace1', 'key1');
    console.info('Config:', JSON.stringify(config));
  }
}
```

## INTERFACE
### IAlchemyUserConfig
配置相关能力

```ets
interface IAlchemyUserConfig {
  getConfig(namespace: string, key: string): Record<string, object> // 获取配置相关信息
}
```

#### 方法列表
#### `getConfig(namespace: string, key: string): Record<string, object>`
获取配置相关信息

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| namespace | string | 是 | 配置表中的命名空间 |
| key | string | 是 | 配置表中的key |

**返回值**：配置表，格式为 Record<string, object>
