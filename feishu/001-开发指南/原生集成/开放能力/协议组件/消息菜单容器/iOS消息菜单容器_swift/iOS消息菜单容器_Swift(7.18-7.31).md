---
title: "iOS消息菜单容器_Swift(7.18-7.31)"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/message-menu-container/ios-message-menu-container
---
最后更新于 2025-04-29

# iOS消息菜单容器_Swift(7.18-7.31)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKMenusExternal | 1.1.1 | 该组件提供消息菜单注册能力，开发者可以根据自身业务需要，在飞书的聊天页面消息菜单中自定义注册菜单，并处理相应的点击逻辑 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKMenusExternal
import LKKABridge

// 自定义的`KAMenusProtocol`实现类
@objc
public class LKMenusExternalIMP: KAMenusProtocol {    
    var icon: UIImage = ...
    var label: String = ...
    func canInitialize(_ actionContext: LKMenusExternal.ActionContext) -> Bool { ... }
    func onClick(_ actionContext: LKMenusExternal.ActionContext) { ... }
}

// 注册自定义的`KAMenusProtocol`实例
let api = KAAPI(channel: channel)
api.register(menu: LKMenusExternalIMP.init, cache: true)
```

## PROTOCOL

### KAMenusProtocol

消息菜单协议，用于在消息菜单中增加自定义项

```swift
public protocol KAMenusProtocol: AnyObject
```

#### Properties
#### `icon`

菜单项图标

```swift
var icon: UIImage
```

#### `label`

菜单项文案

```swift
var label: String
```

#### Methods
#### `canInitialize(_:)`

飞书菜单容器依据该接口返回值，决定是否展示该菜单
- Returns: 是否展示该菜单

```swift
func canInitialize(_ actionContext: ActionContext) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| actionContext | 飞书封装的消息上下文 |

#### `onClick(_:)`

点击菜单项时的响应函数

```swift
func onClick(_ actionContext: ActionContext) -> Void
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| actionContext | 飞书封装的消息上下文 |
## CLASS

### ActionChat

消息所属对话

```swift
public class ActionChat: NSObject
```

#### Properties
#### `chatId`

对话 ID

```swift
public var chatId: String
```

#### Methods
#### `init(chatId:)`

构造函数

```swift
public init(chatId: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| chatId | 对话 ID |
## CLASS

### ActionContext

飞书封装的消息上下文类型

```swift
public class ActionContext: NSObject
```

#### Properties
#### `actionChat`

消息所属对话

```swift
public var actionChat: ActionChat
```

#### `actionMode`

选中的消息类型

```swift
public var actionMode: ActionMode
```

#### `actionMessages`

选中的消息列表

```swift
public var actionMessages: [ActionMessage]
```

#### Methods
#### `init(actionChat:actionMode:actionMessages:)`

构造函数

```swift
public init(actionChat: ActionChat, actionMode: ActionMode, actionMessages: [ActionMessage])
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| actionChat | 消息所属对话 |
| actionMode | 选中的消息类型 |
| actionMessages | 选中的消息列表 |
## CLASS

### ActionMessage

选中的消息

```swift
public class ActionMessage: NSObject
```

#### Properties
#### `id`

消息 ID

```swift
public var id: String
```

#### `type`

消息类型

```swift
public var type: MessageType
```

#### Methods
#### `init(id:type:)`

构造函数

```swift
public init(id: String, type: MessageType)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| id | 消息 ID |
| type | 消息 类型 |
## ENUM

### ActionMessage.MessageType

消息类型

```swift
public enum MessageType
```

#### Cases
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

#### `file`

文件消息

```swift
case file
```

#### `others`

其他消息类型

```swift
case others
```

## ENUM

### ActionMode

选中的消息类型

```swift
public enum ActionMode: Int
```

#### Cases
#### `single`

选中单条消息

```swift
case single = 0
```

#### `multi`

选中多条消息

```swift
case multi = 1
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(menu:cache:file:function:line:column:)`

注册`KAMenusProtocol`协议实例，由 Swift 代码调用

```swift
@objc public func register(
    menu: @escaping () -> KAMenusProtocol?,
    cache: Bool = false,
    file: String = #file,
    function: String = #function,
    line: Int = #line,
    column: Int = #column
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| menu | `KAMenusProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | 注册代码所在文件 |
| function | 注册代码所在函数 |
| line | 注册代码所在行 |
| column | 注册代码所在列 |
## EXTENSION

### _KAAPIWrapper
```swift
extension _KAAPIWrapper
```

#### Methods
#### `register(menu:cache:)`

注册`KAMenusProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

```swift
public func register(
    menu: @escaping () -> KAMenusProtocol?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| menu | `KAMenusProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |
