---
title: "iOS桌面快捷菜单_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/desktop-shortcut-menu/ios-shortcutexternal_swift/ios-shortcutexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS桌面快捷菜单_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKShortcutExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供桌面快捷菜单协议，用于实现自定义的桌面快捷菜单

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKShortcutExternal
import LKKABridge

class MyShortcutImpl: KAShortcutProtocol {
    var type: String { "demo" } // 快捷方式唯一标识
    var icon: UIApplicationShortcutIcon { UIApplicationShortcutIcon(type: .add) } // 快捷方式 icon 图标
    var localizedTitle: String { "Demo" } // 标题文案
    var localizedSubtitle: String? { "副标题" } // 副标题, 可选
    var appLinkURL: String { "lark://demo" } // 长按后跳转的页面对应的 AppLink URL
}

let api = KAAPI(channel: "YOUR_CHANNEL")
api.register(shortcut: MyShortcutImpl.init, cache: true)
```

## PROTOCOL
### KAShortcutProtocol
桌面快捷菜单协议，用于实现自定义的桌面快捷菜单

```swift
protocol KAShortcutProtocol: AnyObject {
    var type: String { get } // 快捷方式唯一标识
    var icon: UIApplicationShortcutIcon { get } // 快捷方式 icon 图标
    var localizedTitle: String { get } // 标题文案
    var localizedSubtitle: String? { get } // 副标题, 可选
    var appLinkURL: String { get } // 长按后跳转的页面对应的 AppLink URL
}
```

## CLASS
### LKShortcutItem
快捷菜单项，开发者不直接使用

```swift
class LKShortcutItem: NSObject {
    static let kaPrefixIdentifier = "ka_shortcut"
    let type: String
    let icon: UIApplicationShortcutIcon
    let title: String
    let subtitle: String?
    let appLinkURL: String
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| kaPrefixIdentifier | String | 前缀标识 | "ka_shortcut" |
| type | String | 类型标识 | - |
| icon | UIApplicationShortcutIcon | 图标 | - |
| title | String | 标题 | - |
| subtitle | String? | 副标题 | nil |
| appLinkURL | String | AppLink URL | - |

#### 方法列表
#### `init(item: KAShortcutProtocol)`
根据协议实例初始化快捷菜单项

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| item | KAShortcutProtocol | 协议实现实例 | - |

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    func register(
        shortcut: @escaping () -> KAShortcutProtocol?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )
}
```

#### 方法列表
#### `register(shortcut:cache:file:function:line:column:)`
注册 `KAShortcutProtocol` 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| shortcut | () -> KAShortcutProtocol? | 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

### _KAAPIWrapper

```swift
extension _KAAPIWrapper {
    func register(
        shortcut: @escaping () -> KAShortcutProtocol?,
        cache: Bool
    )
}
```

#### 方法列表
#### `register(shortcut:cache:)`
注册 `KAShortcutProtocol` 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| shortcut | () -> KAShortcutProtocol? | 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例 | - |
