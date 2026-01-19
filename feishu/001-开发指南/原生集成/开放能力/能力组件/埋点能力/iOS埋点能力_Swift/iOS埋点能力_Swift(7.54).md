---
title: "iOS埋点能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/event-tracking-capabilities/ios-statisticsexternal_swift/ios-statisticsexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS埋点能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKStatisticsExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
向埋点平台上报数据

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKStatisticsExternal
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
let statistics = api.statistics

statistics?.initConfig(
    appId: "your_app_id",
    registerHost: "https://register.example.com",
    appLogHost: "https://log.example.com",
    commonParams: ["platform": "iOS"]
)

statistics?.sendEvent(name: "page_view")
statistics?.sendEvent(name: "button_click", params: ["button_id": "submit"])
```

## PROTOCOL
### KAStatisticsProtocol
埋点能力接口协议，用于向埋点平台上报数据

```swift
protocol KAStatisticsProtocol: AnyObject {
    func initConfig(appId: String, registerHost: String, appLogHost: String, commonParams: [String: AnyHashable])	// 配置，用于初始化统计组件
    func sendEvent(name: String)	// 埋点
    func sendEvent(name: String, params: [String: String])	// 埋点
}
```

#### 方法列表
#### `func initConfig(appId: String, registerHost: String, appLogHost: String, commonParams: [String: AnyHashable])`
配置，用于初始化统计组件

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| appId | String | 应用 ID | - |
| registerHost | String | 注册服务器地址 | - |
| appLogHost | String | 日志服务器地址 | - |
| commonParams | [String: AnyHashable] | 公共参数 | - |

#### `func sendEvent(name: String)`
埋点

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| name | String | 事件名称 | - |

#### `func sendEvent(name: String, params: [String: String])`
埋点

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| name | String | 事件名称 | - |
| params | [String: String] | 事件参数 | - |

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var statistics: KAStatisticsProtocol?	// 埋点能力接口实例
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| statistics | KAStatisticsProtocol? | 埋点能力接口实例 | nil |
