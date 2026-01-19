---
title: "iOS安全能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/securityabilityexternal/ios-securityabilityexternal_swift/ios-securityabilityexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS安全能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKSecurityAbilityExternal | 能力组件 | 1.1.0 | 7.54.0 |

## 功能简介
安全能力接口协议，用于安全地访问剪贴板内容

### 更新日志
- 首次发布，提供剪贴板文字与图片的读写能力

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
let pasteboard = api.pasteboard

// 写入文字
pasteboard?.setText(appId: "com.example.app", text: "Hello World")

// 读取文字
let text = pasteboard?.getText(appId: "com.example.app")

// 写入图片
let image = UIImage(named: "example")!
pasteboard?.setImage(appId: "com.example.app", image: image)

// 读取图片
let image = pasteboard?.getImage(appId: "com.example.app")
```

## PROTOCOL
### LKPasteboardApi
安全能力接口协议，用于安全地访问剪贴板内容

```swift
protocol LKPasteboardApi {
    func getText(appId: String?) -> String?	// 获取剪贴板文字
    func setText(appId: String?, text: String)	// 设置剪贴板文字
    func getImage(appId: String?) -> UIImage?	// 获取剪贴板图片
    func setImage(appId: String?, image: UIImage)	// 设置剪贴板图片
}
```

#### 方法列表
#### `func getText(appId: String?) -> String?`
获取剪贴板文字

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| appId | String? | app id | nil |

**返回值**：剪贴板文字内容

#### `func setText(appId: String?, text: String)`
设置剪贴板文字

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| appId | String? | app id | nil |
| text | String | 剪贴板文字内容 | - |

#### `func getImage(appId: String?) -> UIImage?`
获取剪贴板图片

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| appId | String? | app id | nil |

**返回值**：剪贴板图片内容

#### `func setImage(appId: String?, image: UIImage)`
设置剪贴板图片

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| appId | String? | app id | nil |
| image | UIImage | 剪贴板图片内容 | - |

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var pasteboard: LKPasteboardApi? {	// 安全能力接口实例
        KA.resolver(channel: channelID).resolve(LKPasteboardApi.self)
    }
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| pasteboard | LKPasteboardApi? | 安全能力接口实例 | nil |
