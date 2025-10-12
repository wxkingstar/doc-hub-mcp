<!--
title: iOS安全管控_Swift(7.42)
id: 7495606997213823004
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/securityexternal/ios-securityexternal_swift_742
updatedAt: 1745895068000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/securityexternal/ios-securityexternal_swift_742
-->
# iOS安全管控_Swift(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKSecurityExternal | 1.0.0 | 该组件允许开发者通过飞书的安全管控功能，自定义剪贴板的访问等安全相关权限 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



 ```swift
import LKSecurityExternal
import LKKABridge

// 自定义的组件协议实现类
public class LKPasteboardProtectionIMP: LKPasteboardProtectionDelegate {    
    func canPaste(clipdataAppID: String?, currentAppID: String?, currentUrl: String?) -> Bool { 
        ... 
    }
}

public class LKSecurityEMMApiIMP: LKSecurityEMMApi {    
    func requestExemptionAction(biz: LKSecurityBizType, action: LKActionType) throws { ... }
}

// 注册自定义的`LKPasteboardProtectionDelegate`实例
let api = KAAPI(channel: channel)
api.register(pasteProtectionDelegate: LKPasteboardProtectionIMP.init)
api.register(exemptionDelegate: LKSecurityEMMApiIMP.init)
```

## PROTOCOL

### LKPasteboardProtectionDelegate

剪贴板管控协议

```swift
public protocol LKPasteboardProtectionDelegate
```

#### Methods
#### `canPaste(clipdataAppID:currentAppID:currentUrl:)`

是否允许访问剪贴板
- Returns: 是否允许访问剪贴板

```swift
func canPaste(clipdataAppID: String?, currentAppID: String?, currentUrl: String?) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| clipdataAppID | clip data app id |
| currentAppID | 当前 app id |
| currentUrl | 当前 url |
## PROTOCOL

### LKSecurityEMMApi

安全管控协议

```swift
public protocol LKSecurityEMMApi
```

#### Methods
#### `requestExemptionAction(biz:action:)`

请求豁免

```swift
func requestExemptionAction(biz: LKSecurityBizType, action: LKActionType) throws
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| biz | 安全管控项 |
| action | 安全管控执行动作 |
## ENUM

### LKActionType

执行动作

```swift
public enum LKActionType: Int
```

#### Cases
#### `exempt`

豁免

```swift
case exempt = 1
```

#### `resume`

恢复

```swift
case resume = 2
```

## ENUM

### LKSecurityBizType

飞书安全管控功能

```swift
public enum LKSecurityBizType: Int
```

#### Cases
#### `screenCaptureProtection`

截屏保护

```swift
case screenCaptureProtection = 0
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(exemptionDelegate:file:function:line:column:)`

注册`LKSecurityEMMApi`协议实例，由 Swift 代码调用

```swift
public func register(
    exemptionDelegate: @escaping() -> LKSecurityEMMApi?,
    file: String = #file,
    function: String = #function,
    line: Int = #line,
    column: Int = #column)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| exemptionDelegate | `LKSecurityEMMApi`协议实现类的初始化函数 |
| file | 注册代码所在文件 |
| function | 注册代码所在函数 |
| line | 注册代码所在行 |
| column | 注册代码所在列 |

#### `register(pasteProtectionDelegate:file:function:line:column:)`

注册`LKPasteboardProtectionDelegate`协议实例，由 Swift 代码调用

```swift
/    @objc public func register(
  pasteProtectionDelegate: @escaping() -> LKPasteboardProtectionDelegate?,
  file: String = #file,
  function: String = #function,
  line: Int = #line,
  column: Int = #column)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| pasteProtectionDelegate | `LKPasteboardProtectionDelegate`协议实现类的初始化函数 |
| file | 注册代码所在文件 |
| function | 注册代码所在函数 |
| line | 注册代码所在行 |
| column | 注册代码所在列 |