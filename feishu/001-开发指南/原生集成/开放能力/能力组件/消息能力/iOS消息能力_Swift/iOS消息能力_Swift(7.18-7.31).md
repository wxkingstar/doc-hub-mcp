---
title: "iOS消息能力_Swift(7.18-7.31)"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/message-capabilities/ios-message-capabilities
---
最后更新于 2025-04-29

# iOS消息能力_Swift(7.18-7.31)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKMessageExternal | 1.1.3 | 通过该组件，开发者能够调用飞书的部分消息能力，比如，转发文件到飞书消息、获取飞书消息中的资源文件 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKMessageExternal
import LKKABridge

let navigator = KAAPI(channel: /* channel_id */).messageNavigator
navigator?.forward(...)
navigator?.getResources(...)
navigator?.downloadResource(...)
```

## PROTOCOL

### KAFileMessageProtocol

文件消息体 Protocol

```swift
public protocol KAFileMessageProtocol: KAMessageBodyProtocol
```

#### Properties
#### `filePath`

文件路径

```swift
var filePath: String
```

## PROTOCOL

### KAMessageBodyProtocol

消息体 Protocol

```swift
public protocol KAMessageBodyProtocol: AnyObject
```

## PROTOCOL

### KAMessageNavigator

消息能力接口协议

```swift
public protocol KAMessageNavigator
```

#### Methods
#### `forward(message:)`

转发消息

```swift
func forward(message: KAMessage)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| message | 待转发的消息 |

#### `getResources(messages:onSuccess:onError:)`

获取消息资源

```swift
func getResources(
    messages: [ActionMessage],
    onSuccess: @escaping ([MessageInfo]) -> Void,
    onError: @escaping (Error) -> Void
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| messages | 消息描述 |
| onSuccess | 获取消息成功后的回调函数 |
| onError | 获取消息失败后的回调函数 |

#### `downloadResource(messageInfo:onSuccess:onError:)`

下载消息资源

```swift
func downloadResource(
    messageInfo: MessageInfo,
    onSuccess: @escaping (String) -> Void,
    onError: @escaping (Error) -> Void
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| messageInfo | 消息描述 |
| onSuccess | 下载成功后的回调函数 |
| onError | 下载失败后的回调函数 |
## CLASS

### KAMessage

发送的消息

```swift
public class KAMessage: NSObject
```

#### Properties
#### `type`

消息类型

```swift
public var type: KAMessageType
```

#### `body`

消息体

```swift
public var body: KAMessageBodyProtocol
```

#### Methods
#### `init(type:body:)`

构造函数

```swift
public init(type: KAMessageType, body: KAMessageBodyProtocol)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| type | 消息类型 |
| body | 消息体 |
## CLASS

### MessageInfo

消息描述

```swift
public class MessageInfo: NSObject
```

#### Properties
#### `type`

消息类型

```swift
public var type: KAMessageInfoType
```

#### `key`

消息标识

```swift
public var key: String
```

#### `messageID`

消息 ID

```swift
public var messageID: String
```

#### `channelID`

消息 channel

```swift
public var channelID: String
```

#### `name`

消息名

```swift
public var name: String
```

#### `size`

消息大小

```swift
public var size: UInt64
```

#### `mime`

消息拓展

```swift
public var mime: String
```

#### Methods
#### `init(type:key:messageID:channelID:name:size:mime:)`

构造函数

```swift
public init(
    type: KAMessageInfoType,
    key: String,
    messageID: String,
    channelID: String,
    name: String,
    size: UInt64,
    mime: String
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| type | 消息类型 |
| key | 消息标识 |
| messageID | 消息 ID |
| channelID | 消息 channel |
| name | 消息名 |
| size | 消息大小 |
| mime | 消息拓展 |
## ENUM

### KAMessageInfoType

消息描述类型

```swift
public enum KAMessageInfoType: Int
```

#### Cases
#### `file`

文件消息

```swift
case file
```

#### `image`

图片消息

```swift
case image
```

#### `video`

视频消息

```swift
case video
```

## ENUM

### KAMessageType

消息类型

```swift
public enum KAMessageType: Int
```

#### Cases
#### `file`

文件消息

```swift
case file
```

#### `image`

图片消息

```swift
case image
```

#### `video`

视频消息

```swift
case video
```

#### `others`

其他消息

```swift
case others
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `messageNavigator`

消息能力接口实例

```swift
@objc public var messageNavigator: KAMessageNavigator?
```
