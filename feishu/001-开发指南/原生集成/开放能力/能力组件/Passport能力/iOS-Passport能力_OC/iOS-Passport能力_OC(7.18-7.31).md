---
title: "iOS Passport能力_OC(7.18-7.31)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/passport-capability/ios-passportexternal_oc/ios-passportexternal_oc-718
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895177000
---
最后更新于 2025-04-29

# iOS Passport能力_OC(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKPassportExternal | 1.3.5 | 通过该组件，可以调用飞书passport部分能力，比如获取用户登录状态、did等 |
| LKPassportOperationExternal | 1.1.3 | 该组件拓展了 `LKPassportExternal` 组件提供的 Passport 能力，增加了登出飞书的功能 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKPassportExternal;
@import LKPassportOperationExternal;
@import LKKABridge;
#import "ka_auto_generated.h"

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KAPassportProtocol> passport = api.passport;
[passport getDeviceId];
[passport checkLarkStatusOnSuccess:... onFail:...];
[passport getUserSid];
[passport switchTenant:... completion:...];
[passport logoutAllUserWithScene:... completion:...];

id<KAPassportOperationProtocol> operator = api.passportOperator;
[operator logoutFeiShu];

@end
```

## KAAPI(SWIFT_EXTENSIONLKPassportExternal)

`#include <interface_LKPassportExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< KAPassportProtocol > _Nullable | **passport** <br>Passport 能力接口实例  |

### **property passport**

Passport 能力接口实例 
```cpp
id< KAPassportProtocol > _Nullable passport;
```

-------------------------------

## KAPassportProtocol

Passport 能力接口协议 
`#include <interface_LKPassportExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual NSString *_Nonnull | **getDeviceId**() |
| virtual void | **checkLarkStatusOnSuccess:onFail:**(BOOL onSuccess, NSString *_Nullable onSuccess, NSString *_Nonnull onFail) |
| virtual NSString *_Nullable | **getUserSid**()<br>获取飞书当前用户 SID  |
| virtual void | **switchTenant:completion:**(NSString *_Nonnull tenantDomain, BOOL completion, NSError *_Nullable completion) |
| virtual void | **logoutAllUserWithScene:completion:**(NSString *_Nonnull scene, BOOL completion, NSError *_Nullable completion) |

### **function getDeviceId**

获取飞书设备唯一表示

returns: device id 

```cpp
virtual NSString *_Nonnull getDeviceId()
```

### **function checkLarkStatusOnSuccess:onFail:**

检查飞书当前用户的登录状态 

```cpp
virtual void checkLarkStatusOnSuccess:onFail:(
    BOOL onSuccess,
    NSString *_Nullable onSuccess,
    NSString *_Nonnull onFail
)
```

**Parameters**: 

* **onSuccess** 接口调用成功，block 返回值：登录态是否有效和额外说明
  * **onFail** 接口调用成功，block 返回值：失败原因 

### **function getUserSid**

获取飞书当前用户 SID 
```cpp
virtual NSString *_Nullable getUserSid()
```

### **function switchTenant:completion:**

切换 KA 内部租户 

```cpp
virtual void switchTenant:completion:(
    NSString *_Nonnull tenantDomain,
    BOOL completion,
    NSError *_Nullable completion
)
```

**Parameters**: 

* **tenantDomain** 租户域名
  * **completion** Passport 内部完成切换后的回调，bool 标识切换流程成功/失败 

### **function logoutAllUserWithScene:completion:**

登出所有用户 

```cpp
virtual void logoutAllUserWithScene:completion:(
    NSString *_Nonnull scene,
    BOOL completion,
    NSError *_Nullable completion
)
```

**Parameters**: 

* **scene** 场景 key (飞书侧提供)
  * **completion** 登出完成后的回调，bool 标识流程成功/失败 

-------------------------------

## KAAPI(SWIFT_EXTENSIONLKPassportOperationExternal)

`#include <interface_LKPassportOperationExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< KAPassportOperationProtocol > _Nullable | **passportOperator** <br>Passport 能力拓展接口例  |

### **property passportOperator**

Passport 能力拓展接口例 
```cpp
id< KAPassportOperationProtocol > _Nullable passportOperator;
```

-------------------------------

## KAPassportOperationProtocol

Passport 能力拓展协议 
`#include <interface_LKPassportOperationExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **logoutFeiShu**()<br>登出飞书账号  |

### **function logoutFeiShu**

登出飞书账号 
```cpp
virtual void logoutFeiShu()
```

-------------------------------
