---
title: "iOS埋点能力_Swift(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/event-tracking-capabilities/ios-statisticsexternal_swift/ios-statisticsexternal_swift_742
last_remote_update: 2025-04-21
last_remote_update_timestamp: 1745215563000
---
最后更新于 2025-04-21

# iOS埋点能力_Swift(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKStatisticsExternal | 1.1.3 | 通过该组件，可以调用飞书的埋点统计能力，将业务数据上报到埋点平台 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKStatisticsExternal
import LKKABridge

let statistics = KAAPI(channel: /* channel_id */).statistics
statistics?.initConfig(...)
statistics?.sendEvent( ... )
```

## PROTOCOL

### KAStatisticsProtocol

埋点能力接口协议，用于向埋点平台上报数据

```swift
public protocol KAStatisticsProtocol: AnyObject
```

#### Methods
#### `initConfig(appId:registerHost:appLogHost:commonParams:)`

配置，用于初始化统计组件

```swift
func initConfig(appId: String, registerHost: String, appLogHost: String, commonParams: [String: AnyHashable])
```

#### `sendEvent(name:)`

埋点

```swift
func sendEvent(name: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| name | 事件名称 |

#### `sendEvent(name:params:)`

埋点

```swift
func sendEvent(name: String, params: [String: String])
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| name | 事件名称 |
| params | 事件参数 |
## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `statistics`

埋点能力接口实例

```swift
@objc public var statistics: KAStatisticsProtocol?
```
