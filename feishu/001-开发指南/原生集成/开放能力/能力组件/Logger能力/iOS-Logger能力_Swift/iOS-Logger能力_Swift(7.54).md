---
title: "iOS Logger能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/logger-capability/loggerexternal_swift/loggerexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS Logger能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKLoggerExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供统一日志打印能力，支持 verbose、debug、info、warning、error 五级日志输出

### 更新日志
- 首次发布，提供日志协议 KALoggerProtocol 及 KAAPI 扩展获取方式

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKLoggerExternal
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
api.logger?.verbose(tag: "Demo", "verbose message")
api.logger?.debug(tag: "Demo", "debug message")
api.logger?.info(tag: "Demo", "info message")
// 其余方法省略...
```

## PROTOCOL
### KALoggerProtocol
Logger 协议，用于打印日志

```swift
protocol KALoggerProtocol: AnyObject {
    func verbose(tag: String, _ msg: String)	// 输出更多 debug 的信息
    func debug(tag: String, _ msg: String)	// 只在 debug 下输出信息
    func info(tag: String, _ msg: String)	// 输出普通信息
    func warning(tag: String, _ msg: String)	// 输出警告信息
    func error(tag: String, _ msg: String)	// 输出错误信息
}
```

#### 方法列表
#### `func verbose(tag: String, _ msg: String)`
输出更多 debug 的信息

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| tag | String | tag name | - |
| msg | String | verbose information | - |

#### `func debug(tag: String, _ msg: String)`
只在 debug 下输出信息

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| tag | String | tag name | - |
| msg | String | debug information | - |

#### `func info(tag: String, _ msg: String)`
输出普通信息

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| tag | String | tag name | - |
| msg | String | info information | - |

#### `func warning(tag: String, _ msg: String)`
输出警告信息

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| tag | String | tag name | - |
| msg | String | warning information | - |

#### `func error(tag: String, _ msg: String)`
输出错误信息

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| tag | String | tag name | - |
| msg | String | error information | - |

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var logger: KALoggerProtocol?	// Logger 能力接口实例
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| logger | KALoggerProtocol? | Logger 能力接口实例 | nil |
