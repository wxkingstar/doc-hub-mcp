---
title: "iOS Logger能力_Swift(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/logger-capability/loggerexternal_swift/loggerexternal_swift_742
---
最后更新于 2025-04-21

# iOS Logger能力_Swift(7.42)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKLoggerExternal | 1.1.3 | 通过该组件，开发者可以指定日志的级别、内容和其他相关信息。此外，飞书还支持日志回捞功能，开发者可以通过相应的API检索和获取之前记录的日志信息。这样可以方便地进行日志分析、故障排查和性能优化等工作 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKLoggerExternal
import LKKABridge

let logger = KAAPI(channel: /* channel_id */).logger
logger?.verbose(...)
logger?.debug(...)
logger?.info(...)
logger?.warning(...)
logger?.error(...)
```

## PROTOCOL

### KALoggerProtocol

Logger 协议，用于打印日志

```swift
public protocol KALoggerProtocol: AnyObject
```

#### Methods
#### `verbose(tag:_:)`

输出更多 debug 的信息

```swift
func verbose(tag: String, _ msg: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| tag | tag name |
| msg | verbose information |

#### `debug(tag:_:)`

只在 debug 下输出信息

```swift
func debug(tag: String, _ msg: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| tag | tag name |
| msg | debug information |

#### `info(tag:_:)`

输出普通信息

```swift
func info(tag: String, _ msg: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| tag | tag name |
| msg | info information |

#### `warning(tag:_:)`

输出警告信息

```swift
func warning(tag: String, _ msg: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| tag | tag name |
| msg | warning information |

#### `error(tag:_:)`

输出错误信息

```swift
func error(tag: String, _ msg: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| tag | tag name |
| msg | error information |
## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `logger`

Logger 能力接口实例

```swift
@objc public var logger: KALoggerProtocol?
```
