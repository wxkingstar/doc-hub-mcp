---
title: "iOS Passport能力_Swift(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/passport-capability/ios-passportexternal_swift/ios-passportexternal_swift_742
last_remote_update: 2025-04-21
last_remote_update_timestamp: 1745215563000
---
最后更新于 2025-04-21

# iOS Passport能力_Swift(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKPassportExternal | 1.3.5 | 通过该组件，可以调用飞书passport部分能力，比如获取用户登录状态、did等 |
| LKPassportOperationExternal | 1.1.3 | 该组件拓展了 `LKPassportExternal` 组件提供的 Passport 能力，增加了登出飞书的功能 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKPassportExternal
import LKKABridge

let passport = KAAPI(channel: /* channel_id */).passport
passport?.getDeviceId()
passport?.checkLarkStatus(...)
passport?.getUserSid()
passport?.switchTenant(...)
passport?.logoutAllUser(...)
```

```swift
import LKPassportOperationExternal
import LKKABridge

let operator = KAAPI(channel: /* channel_id */).passportOperator
operator?.logoutFeishu()
```

## PROTOCOL

### KAPassportProtocol

Passport 能力接口协议

```swift
public protocol KAPassportProtocol: AnyObject
```

#### Methods
#### `getDeviceId()`

获取飞书设备唯一表示
- Returns: device id

```swift
func getDeviceId() -> String
```

#### `checkLarkStatus(onSuccess:onFail:)`

检查飞书当前用户的登录状态

```swift
func checkLarkStatus(onSuccess: @escaping (Bool, String?) -> Void, onFail: @escaping(String) -> Void)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| onSuccess | 接口调用成功，block 返回值：登录态是否有效和额外说明 |
| onFail | 接口调用成功，block 返回值：失败原因 |

#### `getUserSid()`

获取飞书当前用户 SID

```swift
func getUserSid() -> String?
```

#### `switchTenant(_:completion:)`

切换 KA 内部租户

```swift
func switchTenant(_ tenantDomain: String, completion: @escaping (Bool, Error?) -> Void)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| tenantDomain | 租户域名 |
| completion | Passport 内部完成切换后的回调，bool 标识切换流程成功/失败 |

#### `logoutAllUser(scene:completion:)`

登出所有用户

```swift
func logoutAllUser(scene: String, completion: @escaping (Bool, Error?) -> Void)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| scene | 场景 key (飞书侧提供) |
| completion | 登出完成后的回调，bool 标识流程成功/失败 |
## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `passport`

Passport 能力接口实例

```swift
@objc public var passport: KAPassportProtocol?
```
--------------
## PROTOCOL

### KAPassportOperationProtocol

Passport 能力拓展协议

```swift
public protocol KAPassportOperationProtocol: AnyObject
```

#### Methods
#### `logoutFeiShu()`

登出飞书账号

```swift
func logoutFeiShu()
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `passportOperator`

Passport 能力拓展接口例

```swift
@objc public var passportOperator: KAPassportOperationProtocol?
```
