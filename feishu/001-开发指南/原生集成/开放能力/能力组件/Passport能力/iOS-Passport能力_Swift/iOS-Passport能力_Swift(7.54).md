---
title: "iOS Passport能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/passport-capability/ios-passportexternal_swift/ios-passportexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS Passport能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKPassportExternal | 能力组件 | 1.4.0 | 7.54.0 |
| LKPassportOperationExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供飞书 Passport 登录验证相关能力，包括获取设备 ID、检查登录状态、获取用户 SID、切换租户、登出等功能

### 更新日志
- 新增 Passport 能力接口协议 KAPassportProtocol
- 新增 Passport 能力拓展协议 KAPassportOperationProtocol
- 为 KAAPI 扩展 passport 与 passportOperator 属性

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKPassportExternal
import LKKABridge

// 获取 Passport 能力接口
let api = KAAPI(channel: "YOUR_CHANNEL")
let passport = api.passport
let passportOperator = api.passportOperator

// 获取设备 ID
let deviceId = passport?.getDeviceId()

// 检查登录状态
passport?.checkLarkStatus(
    onSuccess: { isValid, message in
        print("登录状态：\(isValid), 说明：\(message ?? "")")
    },
    onFail: { error in
        print("检查失败：\(error)")
    }
)

// 获取用户 SID
let sid = passport?.getUserSid()

// 切换租户
passport?.switchTenant("example.com") { success, error in
    print("切换结果：\(success)")
}

// 登出所有用户
passport?.logoutAllUser(scene: "logout_scene") { success, error in
    print("登出结果：\(success)")
}

// 登出飞书账号
passportOperator?.logoutFeiShu()
```

## PROTOCOL
### KAPassportProtocol
Passport 能力接口协议

```swift
protocol KAPassportProtocol: AnyObject {
    func getDeviceId() -> String	// 获取飞书设备唯一表示
    func checkLarkStatus(onSuccess: @escaping (Bool, String?) -> Void, onFail: @escaping(String) -> Void)	// 检查飞书当前用户的登录状态
    func getUserSid() -> String?	// 获取飞书当前用户 SID
    func switchTenant(_ tenantDomain: String, completion: @escaping (Bool, Error?) -> Void)	// 切换 KA 内部租户
    func logoutAllUser(scene: String, completion: @escaping (Bool, Error?) -> Void)	// 登出所有用户
}
```

#### 方法列表
#### `func getDeviceId() -> String`
获取飞书设备唯一表示

**返回值**：device id

#### `func checkLarkStatus(onSuccess: @escaping (Bool, String?) -> Void, onFail: @escaping(String) -> Void)`
检查飞书当前用户的登录状态

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| onSuccess | (Bool, String?) -> Void | 接口调用成功，block 返回值：登录态是否有效和额外说明 | - |
| onFail | (String) -> Void | 接口调用成功，block 返回值：失败原因 | - |

#### `func getUserSid() -> String?`
获取飞书当前用户 SID

**返回值**：用户 SID

#### `func switchTenant(_ tenantDomain: String, completion: @escaping (Bool, Error?) -> Void)`
切换 KA 内部租户

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| tenantDomain | String | 租户域名 | - |
| completion | (Bool, Error?) -> Void | Passport 内部完成切换后的回调，bool 标识切换流程成功/失败 | - |

#### `func logoutAllUser(scene: String, completion: @escaping (Bool, Error?) -> Void)`
登出所有用户

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| scene | String | 场景 key (飞书侧提供) | - |
| completion | (Bool, Error?) -> Void | 登出完成后的回调，bool 标识流程成功/失败 | - |

### KAPassportOperationProtocol
Passport 能力拓展协议

```swift
protocol KAPassportOperationProtocol: AnyObject {
    func logoutFeiShu()	// 登出飞书账号
}
```

#### 方法列表
#### `func logoutFeiShu()`
登出飞书账号

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var passport: KAPassportProtocol? {
        KA.resolver(channel: channelID).resolve(KAPassportProtocol.self)
    }
    var passportOperator: KAPassportOperationProtocol? {
        KA.resolver(channel: channelID).resolve(KAPassportOperationProtocol.self)
    }
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| passport | KAPassportProtocol? | Passport 能力接口实例 | - |
| passportOperator | KAPassportOperationProtocol? | Passport 能力拓展接口例 | - |
