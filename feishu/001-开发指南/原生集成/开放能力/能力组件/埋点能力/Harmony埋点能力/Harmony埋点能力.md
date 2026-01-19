---
title: "Harmony埋点能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/event-tracking-capabilities/harmony-statistic-capability
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# alchemy_statistics_api - Harmony 埋点统计能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| alchemy_statistics_api | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
通过该 API 能力，可以调用飞书的埋点统计能力，将业务数据上报到埋点平台。私有化部署客户需要搭配火山 toB Finder 部署使用

### 更新日志
- 新增 IAlchemyStatistics 接口，提供埋点初始化与事件上报能力

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyStatistics } from '@ohos/alchemy_statistics_api'

export class KARuntimeManager {
  private alchemyStatistics?: IAlchemyStatistics;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.alchemyStatistics = runtime.getAlchemyStatistics();
    // 初始化埋点配置
    this.alchemyStatistics?.initConfig(
      'your_app_id',
      'register.example.com',
      'log.example.com',
      {
        user_unique_id: 'user123',
        abSwitch: true,
        autoTrackSwitch: false
      }
    );
    // 上报事件
    this.alchemyStatistics?.sendEventJson('page_view', {
      page_name: 'home',
      duration: 120
    });
  }
}
```

## INTERFACE
### IAlchemyStatistics
通过该 API 能力，可以调用飞书的埋点统计能力，将业务数据上报到埋点平台。私有化部署客户需要搭配火山 toB Finder 部署使用

```ets
interface IAlchemyStatistics {
  initConfig(appId: string, registerHost: string, appLogHost: string, configParams: ConfigParams): void // 初始化埋点配置
  sendEvent(event: string, json: string): void // 上报事件
  sendEventJson(event: string, json?: EventParams): void // 上报事件
}
```

#### 方法列表
#### `initConfig(appId: string, registerHost: string, appLogHost: string, configParams: ConfigParams): void`
初始化埋点配置

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| appId | string | 是 | 在火山注册的应用 id |
| registerHost | string | 是 | 注册设备域名，不能携带 `https://` |
| appLogHost | string | 是 | 埋点域名，不能携带 `https://` |
| configParams | ConfigParams | 是 | 设置参数 |

#### `sendEvent(event: string, json: string): void`
上报事件

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| event | string | 是 | 埋点事件名称 |
| json | string | 是 | 埋点参数 |

#### `sendEventJson(event: string, json?: EventParams): void`
上报事件

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| event | string | 是 | 埋点事件名称 |
| json | EventParams | 否 | 埋点参数 |

## TYPE
### EventParams
埋点事件参数类型

```ets
type EventParams = Record<string, string | number | boolean | string[]>
```

### ConfigParams
埋点配置参数类型

```ets
type ConfigParams = Record<string, string | number | boolean | string[] | CustomHeader>
```

### CustomHeader
自定义请求头类型

```ets
type CustomHeader = Record<string, string | number | boolean | string[]>
```
