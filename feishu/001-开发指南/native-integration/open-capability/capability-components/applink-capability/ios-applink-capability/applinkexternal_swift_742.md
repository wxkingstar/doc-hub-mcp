<!--
title: iOS AppLink能力_Swift(7.42)
id: 7494104126593122307
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/applink-capability/ios-applink-capability/applinkexternal_swift_742
updatedAt: 1744874196000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/applink-capability/ios-applink-capability/applinkexternal_swift_742
-->
# iOS AppLink能力_Swift(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKAppLinkExternal | 1.2.3 | 通过该组件可以调用飞书的页面跳转、路由能力 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```swift
import LKAppLinkExternal
import LKKABridge

let navigator = KAAPI(channel: /* channel_id */).navigator
navigator?.open(...)
navigator?.push(...)
navigator?.pop(...)
navigator?.present(...)
```

## PROTOCOL

### KANavigator

AppLink 能力协议，用于调用 AppLink 能力

```swift
@objc public protocol KANavigator
```

#### Methods
#### `open(url:from:)`

从 from vc push 到下个 applink url

```swift
func open(url: NSURL, from: UIViewController)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| url | applink url |
| from | from vc |

#### `push(vc:style:completion:)`

从当前  window 顶部 vc 的 navigation controller push vc，如果当前无 navigation controller 可能失败

```swift
func push(vc: UIViewController, style: KAPushStyle, completion: KACompletion?)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| vc | 需要 push 的 vc |
| completion | 完成回调 |
| style | push 方式 |

#### `pop(vc:completion:)`

从当前 window 顶部 vc 的 navigation controllers 中移除 vc，如果当前无 navigation controller 可能失败

```swift
func pop(vc: UIViewController, completion: KACompletion?)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| vc | 需要 push 的 vc |
| completion | 完成回调 |

#### `present(vc:completion:)`

从当前 window 顶部 vc present 入参 vc

```swift
func present(vc: UIViewController, completion: KACompletion?)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| vc | 需要 push 的 vc |
| completion | 完成回调 |
## ENUM

### KAPushStyle

push VC 的方式

```swift
public enum KAPushStyle: Int
```

#### Cases
#### `default`

根据设备类型默认，在 iPad 的 split view 上时，会在 detail push 新页面

```swift
case `default`
```

#### `detail`

在 iPad 的 split view 上时，会在 detail set 新页面，无法通过 pop 移除，需要继续调用 detail 覆盖原页面，建议使用 default

```swift
case detail
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `navigator`

AppLink 能力接口实例

```swift
@objc public var navigator: KANavigator?
```

## TYPEALIAS

### KACompletion

接口调用完成后的回调函数类型

```swift
public typealias KACompletion = () -> Void
```