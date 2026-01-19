---
title: "iOS安全管控_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/securityexternal/ios-securityexternal_oc/ios-securityexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS安全管控_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| LKSecurityExternal | 协议组件 | 1.1.0 | 7.54.0 |

## 功能简介
提供剪贴板访问控制与安全管控豁免能力

## 更新日志
- LKSecurityEMMApi 的 requestExemptionActionWithBiz:action: 方法新增 error 参数，支持错误回调
- 所有 register 方法统一使用 KAAPI 扩展方式暴露

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
// 协议组件示例
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKSecurityExternal;

@interface LKSecurityExternalRegistry: NSObject
@end
@implementation LKSecurityExternalRegistry
+(void)load {
    NSString *channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];

// 注册剪贴板管控协议
    [KAAPI_REGISTER registerWithPasteProtectionDelegate:^id<LKPasteboardProtectionDelegate> {
        return [[LKPasteboardProtectionIMP alloc] init];
    } cache:YES];

// 注册安全管控协议
    [KAAPI_REGISTER registerWithExemptionDelegate:^id<LKSecurityEMMApi> {
        return [[LKSecurityEMMIMP alloc] init];
    } cache:YES];
}
@end

// 剪贴板管控协议实现
@interface LKPasteboardProtectionIMP : NSObject<LKPasteboardProtectionDelegate>
@end
@implementation LKPasteboardProtectionIMP
- (BOOL)canPasteWithClipdataAppID:(NSString *)clipdataAppID currentAppID:(NSString *)currentAppID currentUrl:(NSString *)currentUrl {
    // 实现剪贴板访问控制逻辑
    return YES;
}
@end

// 安全管控协议实现
@interface LKSecurityEMMIMP : NSObject<LKSecurityEMMApi>
@end
@implementation LKSecurityEMMIMP
- (BOOL)requestExemptionActionWithBiz:(LKSecurityBizType)biz action:(LKActionType)action error:(NSError **)error {
    // 实现安全管控豁免逻辑
    return YES;
}
@end
```

## PROTOCOL
### LKPasteboardProtectionDelegate
剪贴板管控协议

```objective-c
@protocol LKPasteboardProtectionDelegate
- (BOOL)canPasteWithClipdataAppID:(NSString *)clipdataAppID currentAppID:(NSString *)currentAppID currentUrl:(NSString *)currentUrl; // 是否允许访问剪贴板
@end
```

#### 方法列表
#### `- (BOOL)canPasteWithClipdataAppID:(NSString *)clipdataAppID currentAppID:(NSString *)currentAppID currentUrl:(NSString *)currentUrl`
是否允许访问剪贴板

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| clipdataAppID | NSString * | clip data app id |
| currentAppID | NSString * | 当前 app id |
| currentUrl | NSString * | 当前 url |

**返回值**：是否允许访问剪贴板

### LKSecurityEMMApi
安全管控协议

```objective-c
@protocol LKSecurityEMMApi
- (BOOL)requestExemptionActionWithBiz:(LKSecurityBizType)biz action:(LKActionType)action error:(NSError **)error; // 请求豁免
@end
```

#### 方法列表
#### `- (BOOL)requestExemptionActionWithBiz:(LKSecurityBizType)biz action:(LKActionType)action error:(NSError **)error`
请求豁免

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| biz | LKSecurityBizType | 安全管控项 |
| action | LKActionType | 安全管控执行动作 |
| error | NSError ** | 错误信息 |

**返回值**：请求是否成功

## EXTENSION
### KAAPI (SWIFT_EXTENSION(LKSecurityExternal))

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKSecurityExternal))
- (void)registerWithPasteProtectionDelegate:(id<LKPasteboardProtectionDelegate> _Nullable (^ _Nonnull)(void))pasteProtectionDelegate file:(NSString *)file function:(NSString *)function line:(NSInteger)line column:(NSInteger)column; // 注册LKPasteboardProtectionDelegate协议实例，由 Swift 代码调用
- (void)registerWithExemptionDelegate:(id<LKSecurityEMMApi> _Nullable (^ _Nonnull)(void))exemptionDelegate file:(NSString *)file function:(NSString *)function line:(NSInteger)line column:(NSInteger)column; // 注册LKSecurityEMMApi协议实例，由 Swift 代码调用
@end
```

#### 方法列表
#### `- (void)registerWithPasteProtectionDelegate:(id<LKPasteboardProtectionDelegate> _Nullable (^ _Nonnull)(void))pasteProtectionDelegate file:(NSString *)file function:(NSString *)function line:(NSInteger)line column:(NSInteger)column`
注册LKPasteboardProtectionDelegate协议实例，由 Swift 代码调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| pasteProtectionDelegate | id<LKPasteboardProtectionDelegate> _Nullable (^ _Nonnull)(void) | LKPasteboardProtectionDelegate协议实现类的初始化函数 |
| file | NSString * | 注册代码所在文件 |
| function | NSString * | 注册代码所在函数 |
| line | NSInteger | 注册代码所在行 |
| column | NSInteger | 注册代码所在列 |

#### `- (void)registerWithExemptionDelegate:(id<LKSecurityEMMApi> _Nullable (^ _Nonnull)(void))exemptionDelegate file:(NSString *)file function:(NSString *)function line:(NSInteger)line column:(NSInteger)column`
注册LKSecurityEMMApi协议实例，由 Swift 代码调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| exemptionDelegate | id<LKSecurityEMMApi> _Nullable (^ _Nonnull)(void) | LKSecurityEMMApi协议实现类的初始化函数 |
| file | NSString * | 注册代码所在文件 |
| function | NSString * | 注册代码所在函数 |
| line | NSInteger | 注册代码所在行 |
| column | NSInteger | 注册代码所在列 |

## ENUM
### LKActionType
执行动作

```objective-c
typedef SWIFT_ENUM(NSInteger, LKActionType, closed)
```

#### 枚举成员
| 成员名 | 原始值 | 描述
| --- | --- | --- |
| LKActionTypeExempt | 1 | 豁免 |
| LKActionTypeResume | 2 | 恢复 |

### LKSecurityBizType
飞书安全管控功能

```objective-c
typedef SWIFT_ENUM(NSInteger, LKSecurityBizType, closed)
```

#### 枚举成员
| 成员名 | 原始值 | 描述
| --- | --- | --- |
| LKSecurityBizTypeScreenCaptureProtection | 0 | 截屏保护 |
