---
title: "iOS扫码能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/scanning-ability/ios-qrcodeexternal_oc/ios-qrcodeexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS扫码能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKQRCodeExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供扫码结果自定义回调能力，允许业务在飞书扫码逻辑前后插入自定义处理逻辑

## 更新日志
- 将 `SWIFT_EXTENSION(LKWebContainerExternal)` 改为 `SWIFT_EXTENSION(LKQRCodeExternal)`
- 协议定义 `SWIFT_PROTOCOL` 标识符由 `_TtP22LKWebContainerExternal17KAQRCodeApiDelegate_` 更新为 `_TtP16LKQRCodeExternal19KAQRCodeApiDelegate_`

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKQRCodeExternal;

@interface LKQRCodeExternalRegistry: NSObject
@end
@implementation LKQRCodeExternalRegistry
+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];
    [KAAPI_REGISTER registerWithQrcodeAPIDelegate:^id<KAQRCodeApiDelegate> {
        return [[LKQRCodeExternalIMP alloc] init];
    } cache:YES];
}
@end

@interface LKQRCodeExternalIMP : NSObject<KAQRCodeApiDelegate>
@end
@implementation LKQRCodeExternalIMP
- (BOOL)interceptHandleWithResult:(NSString *)result {
    // 在飞书扫码逻辑之前处理
    return NO;
}
- (BOOL)handleWithResult:(NSString *)result {
    // 在飞书扫码逻辑之后处理
    return NO;
}
@end
```

## PROTOCOL
### KAQRCodeApiDelegate
扫码能力协议，用于自定义扫码结果回调函数

```objective-c
@protocol KAQRCodeApiDelegate
- (BOOL)interceptHandleWithResult:(NSString * _Nonnull)result;	// 飞书扫码逻辑之前调用
- (BOOL)handleWithResult:(NSString * _Nonnull)result;	// 飞书扫码逻辑处理之后调用
@end
```

#### 方法列表
#### `- (BOOL)interceptHandleWithResult:(NSString * _Nonnull)result`
飞书扫码逻辑之前调用

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| result | NSString * _Nonnull | 扫码结果 |

**返回值**：是否承载本次扫码结果

#### `- (BOOL)handleWithResult:(NSString * _Nonnull)result`
飞书扫码逻辑处理之后调用

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| result | NSString * _Nonnull | 扫码结果 |

**返回值**：是否承载本次扫码结果

## EXTENSION
### KAAPI

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKQRCodeExternal))
- (void)registerWithQrcodeAPIDelegate:(id <KAQRCodeApiDelegate> _Nullable (^ _Nonnull)(void))qrcodeAPIDelegate cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column;	// 注册KAQRCodeApiDelegate协议实例，由 Swift 代码调用
@end
```

#### 方法列表
#### `- (void)registerWithQrcodeAPIDelegate:(id <KAQRCodeApiDelegate> _Nullable (^ _Nonnull)(void))qrcodeAPIDelegate cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column`
注册 KAQRCodeApiDelegate 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| qrcodeAPIDelegate | id <KAQRCodeApiDelegate> _Nullable (^ _Nonnull)(void) | KAQRCodeApiDelegate 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | NSString * _Nonnull | 注册代码所在文件 |
| function | NSString * _Nonnull | 注册代码所在函数 |
| line | NSInteger | 注册代码所在行 |
| column | NSInteger | 注册代码所在列 |

### _KAAPIWrapper

```objective-c
@interface _KAAPIWrapper (SWIFT_EXTENSION(LKQRCodeExternal))
- (void)registerWithQrcodeAPIDelegate:(id <KAQRCodeApiDelegate> _Nullable (^ _Nonnull)(void))qrcodeAPIDelegate cache:(BOOL)cache;	// 注册KAQRCodeApiDelegate协议实例，OC 代码中由 KAAPI_REGISTER宏调用
@end
```

#### 方法列表
#### `- (void)registerWithQrcodeAPIDelegate:(id <KAQRCodeApiDelegate> _Nullable (^ _Nonnull)(void))qrcodeAPIDelegate cache:(BOOL)cache`
注册 KAQRCodeApiDelegate 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| qrcodeAPIDelegate | id <KAQRCodeApiDelegate> _Nullable (^ _Nonnull)(void) | KAQRCodeApiDelegate 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
