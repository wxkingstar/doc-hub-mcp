---
title: "iOS消息菜单容器_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/message-menu-container/menusexternal_swift/ios-menusexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS消息菜单容器_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKMenusExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
消息菜单协议，用于在消息菜单中增加自定义项

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKMenusExternal
import LKKABridge

class MyMenusImpl: KAMenusProtocol {
    var icon: UIImage {
        return UIImage(named: "custom_icon")!
    }

var label: String {
        return "自定义菜单"
    }

func canInitialize(_ actionContext: ActionContext) -> Bool {
        return true
    }

func onClick(_ actionContext: ActionContext) {
        // 处理点击事件
    }
}

let api = KAAPI(channel: "YOUR_CHANNEL")
api.register(menu: MyMenusImpl.init, cache: true)
```

## PROTOCOL
### KAMenusProtocol
消息菜单协议，用于在消息菜单中增加自定义项

```swift
protocol KAMenusProtocol: AnyObject {
    var icon: UIImage { get }	// 菜单项图标
    var label: String { get }	// 菜单项文案
    func canInitialize(_ actionContext: ActionContext) -> Bool	// 飞书菜单容器依据该接口返回值，决定是否展示该菜单
    func onClick(_ actionContext: ActionContext) -> Void	// 点击菜单项时的响应函数
}
```

#### 方法列表
#### `func canInitialize(_ actionContext: ActionContext) -> Bool`
飞书菜单容器依据该接口返回值，决定是否展示该菜单

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| actionContext | ActionContext | 飞书封装的消息上下文 | - |

**返回值**：是否展示该菜单

#### `func onClick(_ actionContext: ActionContext) -> Void`
点击菜单项时的响应函数

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| actionContext | ActionContext | 飞书封装的消息上下文 | - |

## CLASS
### ActionContext
飞书封装的消息上下文类型

```swift
class ActionContext: NSObject {
    var actionChat: ActionChat	// 消息所属对话
    var actionMode: ActionMode	// 选中的消息类型
    var actionMessages: [ActionMessage]	// 选中的消息列表
    init(actionChat: ActionChat, actionMode: ActionMode, actionMessages: [ActionMessage])	// 构造函数
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| actionChat | ActionChat | 消息所属对话 | - |
| actionMode | ActionMode | 选中的消息类型 | - |
| actionMessages | [ActionMessage] | 选中的消息列表 | - |

#### 方法列表
#### `init(actionChat: ActionChat, actionMode: ActionMode, actionMessages: [ActionMessage])`
构造函数

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| actionChat | ActionChat | 消息所属对话 | - |
| actionMode | ActionMode | 选中的消息类型 | - |
| actionMessages | [ActionMessage] | 选中的消息列表 | - |

### ActionChat
消息所属对话

```swift
class ActionChat: NSObject {
    var chatId: String	// 对话 ID
    init(chatId: String)	// 构造函数
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| chatId | String | 对话 ID | - |

#### 方法列表
#### `init(chatId: String)`
构造函数

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| chatId | String | 对话 ID | - |

### ActionMessage
选中的消息

```swift
class ActionMessage: NSObject {
    var id: String	// 消息 ID
    var type: MessageType	// 消息类型
    init(id: String, type: MessageType)	// 构造函数
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| id | String | 消息 ID | - |
| type | MessageType | 消息类型 | - |

#### 方法列表
#### `init(id: String, type: MessageType)`
构造函数

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| id | String | 消息 ID | - |
| type | MessageType | 消息类型 | - |

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    func register(
        menu: @escaping () -> KAMenusProtocol?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )
}
```

#### 方法列表
#### `func register(menu: () -> KAMenusProtocol?, cache: Bool, file: String, function: String, line: Int, column: Int)`
注册 `KAMenusProtocol` 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| menu | () -> KAMenusProtocol? | `KAMenusProtocol` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

### _KAAPIWrapper

```swift
extension _KAAPIWrapper {
    func register(
        menu: @escaping () -> KAMenusProtocol?,
        cache: Bool
    )
}
```

#### 方法列表
#### `func register(menu: () -> KAMenusProtocol?, cache: Bool)`
注册 `KAMenusProtocol` 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| menu | () -> KAMenusProtocol? | `KAMenusProtocol` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 `false` 时，每次调用协议方法都会重新初始化实例 | - |

## ENUM
### ActionMode
选中的消息类型

```swift
enum ActionMode: Int
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| single | 0 | 选中单条消息 |
| multi | 1 | 选中多条消息 |

### ActionMessage.MessageType
消息类型

```swift
enum MessageType
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| image | - | 图片消息 |
| video | - | 视频消息 |
| file | - | 文件消息 |
| others | - | 其他消息类型 |
