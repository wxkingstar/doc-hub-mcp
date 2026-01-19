---
title: "iOS Passport能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/passport-capability/ios-passportexternal_oc/ios-passportexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS Passport能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| LKPassportExternal | 能力组件 | 1.4.0 | 7.54.0 |
| LKPassportOperationExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供飞书登录验证、租户切换、登出等 Passport 能力

## 更新日志
- 方法命名风格统一：去除旧版本方法名中的 With 前缀，如 `checkLarkStatusWithOnSuccess:onFail:` 改为 `checkLarkStatusOnSuccess:onFail:`
- 方法命名风格统一：去除旧版本方法名中的 With 前缀，如 `switchTenantWithTenantDomain:completion:` 改为 `switchTenant:completion:`

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKPassportExternal;
@import LKPassportOperationExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];

// Passport 能力
id<KAPassportProtocol> passport = api.passport;
[passport getDeviceId];
[passport checkLarkStatusOnSuccess:^(BOOL isValid, NSString * _Nullable extra) {
    // 处理成功回调
} onFail:^(NSString * _Nonnull error) {
    // 处理失败回调
}];
[passport getUserSid];
// 其余方法省略

// Passport 拓展能力
id<KAPassportOperationProtocol> operator = api.passportOperator;
[operator logoutFeiShu];
```

## PROTOCOL
### KAPassportProtocol
Passport 能力接口协议

```objective-c
@protocol KAPassportProtocol
- (NSString * _Nonnull)getDeviceId;	// 获取飞书设备唯一表示
- (void)checkLarkStatusOnSuccess:(void (^ _Nonnull)(BOOL, NSString * _Nullable))onSuccess onFail:(void (^ _Nonnull)(NSString * _Nonnull))onFail;	// 检查飞书当前用户的登录状态
- (NSString * _Nullable)getUserSid;	// 获取飞书当前用户 SID
- (void)switchTenant:(NSString * _Nonnull)tenantDomain completion:(void (^ _Nonnull)(BOOL, NSError * _Nullable))completion;	// 切换 KA 内部租户
- (void)logoutAllUserWithScene:(NSString * _Nonnull)scene completion:(void (^ _Nonnull)(BOOL, NSError * _Nullable))completion;	// 登出所有用户
@end
```

#### 方法列表
#### `- (NSString * _Nonnull)getDeviceId`
获取飞书设备唯一表示

**返回值**：device id

#### `- (void)checkLarkStatusOnSuccess:(void (^ _Nonnull)(BOOL, NSString * _Nullable))onSuccess onFail:(void (^ _Nonnull)(NSString * _Nonnull))onFail`
检查飞书当前用户的登录状态

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| onSuccess | void (^)(BOOL, NSString * _Nullable) | 接口调用成功，block 返回值：登录态是否有效和额外说明 |
| onFail | void (^)(NSString * _Nonnull) | 接口调用成功，block 返回值：失败原因 |

#### `- (NSString * _Nullable)getUserSid`
获取飞书当前用户 SID

**返回值**：用户 SID

#### `- (void)switchTenant:(NSString * _Nonnull)tenantDomain completion:(void (^ _Nonnull)(BOOL, NSError * _Nullable))completion`
切换 KA 内部租户

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| tenantDomain | NSString * _Nonnull | 租户域名 |
| completion | void (^)(BOOL, NSError * _Nullable) | Passport 内部完成切换后的回调，bool 标识切换流程成功/失败 |

#### `- (void)logoutAllUserWithScene:(NSString * _Nonnull)scene completion:(void (^ _Nonnull)(BOOL, NSError * _Nullable))completion`
登出所有用户

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| scene | NSString * _Nonnull | 场景 key (飞书侧提供) |
| completion | void (^)(BOOL, NSError * _Nullable) | 登出完成后的回调，bool 标识流程成功/失败 |

### KAPassportOperationProtocol
Passport 能力拓展协议

```objective-c
@protocol KAPassportOperationProtocol
- (void)logoutFeiShu;	// 登出飞书账号
@end
```

#### 方法列表
#### `- (void)logoutFeiShu`
登出飞书账号

## EXTENSION
### KAAPI (SWIFT_EXTENSION(LKPassportExternal))

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKPassportExternal))
@property (nonatomic, readonly, strong) id <KAPassportProtocol> _Nullable passport;	// Passport 能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| passport | id <KAPassportProtocol> _Nullable | Passport 能力接口实例 |

### KAAPI (SWIFT_EXTENSION(LKPassportOperationExternal))

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKPassportOperationExternal))
@property (nonatomic, readonly, strong) id <KAPassportOperationProtocol> _Nullable passportOperator;	// Passport 能力拓展接口例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| passportOperator | id <KAPassportOperationProtocol> _Nullable | Passport 能力拓展接口例 |
