---
title: "iOS安全管控_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/securityexternal/ios-securityexternal_swift/ios-securityexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139832000
---
最后更新于 2025-11-03

# iOS安全管控_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKSecurityExternal | 协议组件 | 1.1.0 | 7.54.0 |

## 功能简介
提供飞书安全管控相关协议，支持截屏保护豁免、剪贴板访问控制等能力

### 更新日志
- 新增 LKSecurityEMMApi 协议，支持截屏保护豁免与恢复
- 新增 LKPasteboardProtectionDelegate 协议，支持剪贴板访问控制

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKSecurityExternal
import LKKABridge

// 实现 LKSecurityEMMApi
class MySecurityEMMImpl: LKSecurityEMMApi {
    func requestExemptionAction(biz: LKSecurityBizType, action: LKActionType) throws {
        // 实现豁免请求逻辑
    }
}

// 实现 LKPasteboardProtectionDelegate
class MyPasteboardProtectionImpl: LKPasteboardProtectionDelegate {
    func canPaste(clipdataAppID: String?, currentAppID: String?, currentUrl: String?) -> Bool {
        // 实现剪贴板访问控制逻辑
        return true
    }
}

// 初始化并注册
let api = KAAPI(channel: "YOUR_CHANNEL")
api.register(exemptionDelegate: MySecurityEMMImpl.init)
api.register(pasteProtectionDelegate: MyPasteboardProtectionImpl.init)
```

## PROTOCOL
### LKSecurityEMMApi
安全管控协议

```swift
protocol LKSecurityEMMApi {
    func requestExemptionAction(biz: LKSecurityBizType, action: LKActionType) throws	// 请求豁免
}
```

#### 方法列表
#### `func requestExemptionAction(biz: LKSecurityBizType, action: LKActionType) throws`
请求豁免

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| biz | LKSecurityBizType | 安全管控项 | - |
| action | LKActionType | 安全管控执行动作 | - |

### LKPasteboardProtectionDelegate
剪贴板管控协议

```swift
protocol LKPasteboardProtectionDelegate {
    func canPaste(clipdataAppID: String?, currentAppID: String?, currentUrl: String?) -> Bool	// 是否允许访问剪贴板
}
```

#### 方法列表
#### `func canPaste(clipdataAppID: String?, currentAppID: String?, currentUrl: String?) -> Bool`
是否允许访问剪贴板

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| clipdataAppID | String? | clip data app id | - |
| currentAppID | String? | 当前 app id | - |
| currentUrl | String? | 当前 url | - |

**返回值**：是否允许访问剪贴板

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    func register(exemptionDelegate: @escaping () -> LKSecurityEMMApi?, file: String = #file, function: String = #function, line: Int = #line, column: Int = #column)
    func register(pasteProtectionDelegate: @escaping () -> LKPasteboardProtectionDelegate?, file: String = #file, function: String = #function, line: Int = #line, column: Int = #column)
}
```

#### 方法列表
#### `func register(exemptionDelegate: @escaping () -> LKSecurityEMMApi?, file: String, function: String, line: Int, column: Int)`
注册 LKSecurityEMMApi 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| exemptionDelegate | () -> LKSecurityEMMApi? | LKSecurityEMMApi 协议实现类的初始化函数 | - |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

#### `func register(pasteProtectionDelegate: @escaping () -> LKPasteboardProtectionDelegate?, file: String, function: String, line: Int, column: Int)`
注册 LKPasteboardProtectionDelegate 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| pasteProtectionDelegate | () -> LKPasteboardProtectionDelegate? | LKPasteboardProtectionDelegate 协议实现类的初始化函数 | - |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

## ENUM
### LKSecurityBizType
飞书安全管控功能

```swift
enum LKSecurityBizType: Int
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| screenCaptureProtection | 0 | 截屏保护 |

### LKActionType
执行动作

```swift
enum LKActionType: Int
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| exempt | 1 | 豁免 |
| resume | 2 | 恢复 |
