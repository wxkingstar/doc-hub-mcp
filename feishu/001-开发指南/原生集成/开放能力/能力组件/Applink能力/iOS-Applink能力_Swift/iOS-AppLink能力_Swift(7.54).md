---
title: "iOS AppLink能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/applink-capability/ios-applink-capability/applinkexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS AppLink能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKAppLinkExternal | 能力组件 | 1.3.0 | 7.54.0 |

## 功能简介
提供 AppLink 跳转能力，支持通过 URL 打开指定页面，以及 push、pop、present 等导航操作

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKAppLinkExternal
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
guard let navigator = api.navigator else { return }

// 通过 URL 打开页面
let url = NSURL(string: "applink://example/page")!
navigator.open(url: url, from: currentViewController)

// push 新页面
let newVC = UIViewController()
navigator.push(vc: newVC, style: .default, completion: nil)

// pop 页面
navigator.pop(vc: newVC, completion: nil)

// present 页面
navigator.present(vc: newVC, completion: nil)
```

## PROTOCOL
### KANavigator
AppLink 能力协议，用于调用 AppLink 能力

```swift
protocol KANavigator {
    func open(url: NSURL, from: UIViewController)	// 从 from vc push 到下个 applink url
    func push(vc: UIViewController, style: KAPushStyle, completion: KACompletion?)	// 从当前 window 顶部 vc 的 navigation controller push vc，如果当前无 navigation controller 可能失败
    func pop(vc: UIViewController, completion: KACompletion?)	// 从当前 window 顶部 vc 的 navigation controllers 中移除 vc，如果当前无 navigation controller 可能失败
    func present(vc: UIViewController, completion: KACompletion?)	// 从当前 window 顶部 vc present 入参 vc
}
```

#### 方法列表
#### `func open(url: NSURL, from: UIViewController)`
从 from vc push 到下个 applink url

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| url | NSURL | applink url | - |
| from | UIViewController | from vc | - |

#### `func push(vc: UIViewController, style: KAPushStyle, completion: KACompletion?)`
从当前 window 顶部 vc 的 navigation controller push vc，如果当前无 navigation controller 可能失败

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| vc | UIViewController | 需要 push 的 vc | - |
| style | KAPushStyle | push 方式 | - |
| completion | KACompletion? | 完成回调 | nil |

#### `func pop(vc: UIViewController, completion: KACompletion?)`
从当前 window 顶部 vc 的 navigation controllers 中移除 vc，如果当前无 navigation controller 可能失败

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| vc | UIViewController | 需要 push 的 vc | - |
| completion | KACompletion? | 完成回调 | nil |

#### `func present(vc: UIViewController, completion: KACompletion?)`
从当前 window 顶部 vc present 入参 vc

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| vc | UIViewController | 需要 push 的 vc | - |
| completion | KACompletion? | 完成回调 | nil |

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var navigator: KANavigator?	// AppLink 能力接口实例
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| navigator | KANavigator? | AppLink 能力接口实例 | - |

## ENUM
### KAPushStyle
push VC 的方式

```swift
enum KAPushStyle: Int
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| `default` | 0 | 根据设备类型默认，在 iPad 的 split view 上时，会在 detail push 新页面 |
| detail | 1 | 在 iPad 的 split view 上时，会在 detail set 新页面，无法通过 pop 移除，需要继续调用 detail 覆盖原页面，建议使用 default |

## TYPEALIAS
### KACompletion
接口调用完成后的回调函数类型

```swift
typealias KACompletion = () -> Void
```
