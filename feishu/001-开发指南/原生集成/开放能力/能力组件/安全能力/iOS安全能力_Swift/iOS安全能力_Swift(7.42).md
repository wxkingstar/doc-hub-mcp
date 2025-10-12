---
title: "iOS安全能力_Swift(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/securityabilityexternal/ios-securityabilityexternal_swift_742
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895177000
---
最后更新于 2025-04-29

# iOS安全能力_Swift(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKSecurityAbilityExternal | 1.0.0 | 该组件提供安全能力接口，用于安全地访问剪贴板内容 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKSecurityAbilityExternal
import LKKABridge

let pasteboard = KAAPI(channel: /* channel_id */).pasteboard
pasteboard?.getText(...)
pasteboard?.setText(...)
pasteboard?.getImage(...)
pasteboard?.setImage(...)
```

## PROTOCOL

### LKPasteboardApi

安全能力接口协议，用于安全地访问剪贴板内容

```swift
public protocol LKPasteboardApi
```

#### Methods
#### `getText(appId:)`

获取剪贴板文字
- Returns: 剪贴板文字内容

```swift
func getText(appId: String?) -> String?
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| appId | app id |

#### `setText(appId:text:)`

设置剪贴板文字

```swift
func setText(appId: String?, text: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| appId | app id |
| text | 剪贴板文字内容 |

#### `getImage(appId:)`

获取剪贴板图片
- Returns: 剪贴板图片内容

```swift
func getImage(appId: String?) -> UIImage?
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| appId | app id |

#### `setImage(appId:image:)`

设置剪贴板图片

```swift
func setImage(appId: String?, image: UIImage)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| appId | app id |
| text | 剪贴板图片内容 |
## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `pasteboard`

安全能力接口实例

```swift
@objc public var pasteboard: LKPasteboardApi?
```
