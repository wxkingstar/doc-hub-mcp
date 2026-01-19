---
title: "iOS消息能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/message-capabilities/ios-messageexternal_swift/ios-messageexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS消息能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKMessageExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供消息转发、资源获取与下载等消息相关能力

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKMessageExternal
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
let navigator = api.messageNavigator

// 转发消息
let message = KAMessage(type: .file, body: MyFileMessageImpl())
navigator?.forward(message: message)

// 获取消息资源
let actionMessages: [ActionMessage] = [...]
navigator?.getResources(
    messages: actionMessages,
    onSuccess: { infos in
        // 处理获取到的消息信息
    },
    onError: { error in
        // 处理错误
    }
)

// 下载消息资源
let info = MessageInfo(
    type: .file,
    key: "file_key",
    messageID: "msg_123",
    channelID: "channel_456",
    name: "example.pdf",
    size: 1024,
    mime: "application/pdf"
)
navigator?.downloadResource(
    messageInfo: info,
    onSuccess: { path in
        // 处理下载成功
    },
    onError: { error in
        // 处理错误
    }
)
```

## PROTOCOL
### KAMessageBodyProtocol
消息体 Protocol

```swift
protocol KAMessageBodyProtocol: AnyObject {
}
```

### KAFileMessageProtocol
文件消息体 Protocol

```swift
protocol KAFileMessageProtocol: KAMessageBodyProtocol {
    var filePath: String { get } // 文件路径
}
```

### KAMessageNavigator
消息能力接口协议

```swift
protocol KAMessageNavigator {
    func forward(message: KAMessage) // 转发消息

func getResources(
        messages: [ActionMessage],
        onSuccess: @escaping ([MessageInfo]) -> Void,
        onError: @escaping (Error) -> Void
    ) // 获取消息资源

func downloadResource(
        messageInfo: MessageInfo,
        onSuccess: @escaping (String) -> Void,
        onError: @escaping (Error) -> Void
    ) // 下载消息资源
}
```

#### 方法列表
#### `func forward(message: KAMessage)`
转发消息

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| message | KAMessage | 待转发的消息 | - |

#### `func getResources(messages: [ActionMessage], onSuccess: @escaping ([MessageInfo]) -> Void, onError: @escaping (Error) -> Void)`
获取消息资源

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| messages | [ActionMessage] | 消息描述 | - |
| onSuccess | ([MessageInfo]) -> Void | 获取消息成功后的回调函数 | - |
| onError | (Error) -> Void | 获取消息失败后的回调函数 | - |

#### `func downloadResource(messageInfo: MessageInfo, onSuccess: @escaping (String) -> Void, onError: @escaping (Error) -> Void)`
下载消息资源

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| messageInfo | MessageInfo | 消息描述 | - |
| onSuccess | (String) -> Void | 下载成功后的回调函数 | - |
| onError | (Error) -> Void | 下载失败后的回调函数 | - |

## CLASS
### KAMessage
发送的消息

```swift
class KAMessage: NSObject {
    var type: KAMessageType // 消息类型
    var body: KAMessageBodyProtocol // 消息体

init(type: KAMessageType, body: KAMessageBodyProtocol) // 构造函数
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| type | KAMessageType | 消息类型 | - |
| body | KAMessageBodyProtocol | 消息体 | - |

#### 方法列表
#### `init(type: KAMessageType, body: KAMessageBodyProtocol)`
构造函数

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| type | KAMessageType | 消息类型 | - |
| body | KAMessageBodyProtocol | 消息体 | - |

### MessageInfo
消息描述

```swift
class MessageInfo: NSObject {
    var type: KAMessageInfoType // 消息类型
    var key: String // 消息标识
    var messageID: String // 消息 ID
    var channelID: String // 消息 channel
    var name: String // 消息名
    var size: UInt64 // 消息大小
    var mime: String // 消息拓展

init(
        type: KAMessageInfoType,
        key: String,
        messageID: String,
        channelID: String,
        name: String,
        size: UInt64,
        mime: String
    ) // 构造函数
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| type | KAMessageInfoType | 消息类型 | - |
| key | String | 消息标识 | - |
| messageID | String | 消息 ID | - |
| channelID | String | 消息 channel | - |
| name | String | 消息名 | - |
| size | UInt64 | 消息大小 | - |
| mime | String | 消息拓展 | - |

#### 方法列表
#### `init(type: KAMessageInfoType, key: String, messageID: String, channelID: String, name: String, size: UInt64, mime: String)`
构造函数

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| type | KAMessageInfoType | 消息类型 | - |
| key | String | 消息标识 | - |
| messageID | String | 消息 ID | - |
| channelID | String | 消息 channel | - |
| name | String | 消息名 | - |
| size | UInt64 | 消息大小 | - |
| mime | String | 消息拓展 | - |

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var messageNavigator: KAMessageNavigator? // 消息能力接口实例
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| messageNavigator | KAMessageNavigator? | 消息能力接口实例 | - |

## ENUM
### KAMessageType
消息类型

```swift
enum KAMessageType: Int
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| file | - | 文件消息 |
| image | - | 图片消息 |
| video | - | 视频消息 |
| others | - | 其他消息 |

### KAMessageInfoType
消息描述类型

```swift
enum KAMessageInfoType: Int
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| file | - | 文件消息 |
| image | - | 图片消息 |
| video | - | 视频消息 |
