---
title: "iOS组件通用注册接口能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/kabridge/kabridge_oc/kabridge_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS组件通用注册接口能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKKABridge | 能力组件 | 7.54.0 | 7.54.0 |

## 功能简介
KA 对外 API 的入口，支持 Objective-C 的方法，需要在这个类上面扩展提供

## 更新日志
- 移除 SWIFT_CLASS 与 SWIFT_UNAVAILABLE 相关标注
- 将 OBJC_DESIGNATED_INITIALIZER 改为 NS_DESIGNATED_INITIALIZER
- 将 SWIFT_UNAVAILABLE_MSG 改为 NS_UNAVAILABLE
- 将 _KAAPIWrapper 中 api、file、function、line 属性由 readonly 改为 readwrite

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
@import LKKABridge;

// 协议组件
@import LKJsApiExternal;
@import LKTabExternal;
@import LKLifecycleExternal;
@import LKQRCodeExternal;
@import LKMenusExternal;
@import LKNativeAppExtensionExternal;
@import LKWebContainerExternal;
@import LKShortcutExternal;
@import LKVideoChatExternal;
@import LKSecurityExternal;

// 能力组件
@import LKAppLinkExternal;
@import LKMessageExternal;
@import LKKeyValueExternal;
@import LKWebViewApiExternal;
@import LKNativeAppOpenApiExternal;
@import LKStatisticsExternal;
@import LKPassportExternal;
@import LKPassportOperationExternal;
@import LKSettingExternal;
@import LKLoggerExternal;
@import LKSecurityAbilityExternal;

#import "ka_auto_generated.h"

/// 注册协议组件
@interface ProtocolImplRegistry: NSObject

@end

@implementation ProtocolImplRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    

/*********************************/
    /********* 注册协议组件 ************/
    /*********************************/

// 注册 JsApi 扩展协议实现
    [KAAPI_REGISTER registerWithNativeAppPluginDelegate:^id<KANativeAppPluginDelegate> {
        return [[LKJsApiExternalIMP alloc] init];
    } cache:YES];

// 注册 Tab 容器协议实现
    [KAAPI_REGISTER registerWithTab:^id<KATabProtocol> {
        return [[LKTabExternalIMP alloc] init];
    } cache:YES];

// 注册生命周期协议实现
    [KAAPI_REGISTER registerWithLifecycle:^id<KALifecycleProtocol> {
        return [[LKLifecycleExternalIMP alloc] init];
    } cache:YES];

// 注册消息菜单协议实现
    [KAAPI_REGISTER registerWithMenu:^id<KAMenusProtocol> {
        return [[LKMenusExternalIMP alloc] init];
    } cache:YES];

// 注册扫码能力协议实现
    [KAAPI_REGISTER registerWithQrcodeAPIDelegate:^id<KAQRCodeApiDelegate> {
        return [[LKQRCodeExternalIMP alloc] init];
    } cache:YES];

// 注册原生集成应用协议实现
    [KAAPI_REGISTER registerWithNativeApp:^id<KANativeAppExtensionProtocol> {
        return [[KANativeAppExtensionIMP alloc] init];
    } cache:YES];
    [KAAPI_REGISTER registerWithOpenNativeApp:^id<OpenNativeAppProtocol> {
        return [[OpenNativeAppIMP alloc] init];
    } cache:YES];

// 注册 WebContainer 协议实现
    [KAAPI_REGISTER registerWithWebContainer:^id<KAWebContainerProtocol> {
        return [[LKWebContainerExternalIMP alloc] init];
    } cache:YES];

// 注册桌面快捷菜单协议实现
    [KAAPI_REGISTER registerWithShortcut:^id<KAShortcutProtocol> {
        return [[LKShortcutExternalIMP alloc] init];
    } cache:YES];

// 注册视频会议协议实现
    [KAAPI_REGISTER registerWithVideoChatDelegate:^id<KAVideoChatDelegate> {
        return [[LKVideoChatExternalIMP alloc] init];
    } cache:YES];

// 注册安全管控协议实现
    // 暂无

/*********************************/
    /********* 调用能力组件 ************/
    /*********************************/
    // AppLink 能力
    id<KANavigator> navigator = api.navigator; 
    [navigator openWithUrl...];
    ...

// 消息能力
    id<KAMessageNavigator> message = api.messageNavigator;
    [message forwardWithMessage...]
    ...

// 存储 KV 能力
    id<KAKeyValueProtocol> store = api.kvstore; 
    [store hasWithKey...];
    ...

// 网页能力
    id<KAWebViewApiDelegate> web_view_api = api.webViewApi;
    [web_view_api setCookieWithCookie...];
    ...

// 客户端 OpenAPI 能力
    id<KANativeAppOpenApiDelegate> open_api = api.nativeAppOpenApi;
    [open_api invokeOpenApiWithAppID...];
    ...

// 埋点能力
    id<KAStatisticsProtocol> statistics = api.statistics;
    [statistics initConfigWithAppId...];
    [statistics sendEventWithName...];
    ...

// Passport 能力
    id<KAPassportProtocol> passport = api.passport;
    [passport getDeviceId...];
    id<KAPassportOperationProtocol> operator = api.passportOperator;
    [operator logoutFeiShu...];
    ...

// Setting 能力
    id<KASettingProtocol> setting = api.settings;
    [setting getConfigWithSpace...];
    ...

// Logger 能力
    id<KALoggerProtocol> logger = api.logger;
    [logger infoWithTag...];
    ...

// 安全管控能力
    id<LKPasteboardApi> pasteboard = api.pasteboard;
    [pasteboard getTextWithAppId:...];
    ...
}

@end

/********* 协议组件实现 ************/
// JsApi 扩展协议实现
@interface LKJsApiExternalIMP : NSObject<KANativeAppPluginDelegate>
...
@end

@implementation LKJsApiExternalIMP
...
@end

// Tab 容器协议实现
@interface LKTabExternalIMP : NSObject<KATabProtocol>
...
@end

@implementation LKTabExternalIMP
...
@end

// 生命周期协议实现
@interface LKLifecycleExternalIMP : NSObject<KALifecycleProtocol>
...
@end

@implementation LKLifecycleExternalIMP
...
@end

// 消息菜单协议实现
@interface LKMenusExternalIMP : NSObject<KAMenusProtocol>
...
@end

@implementation LKMenusExternalIMP
...
@end

// 扫码能力协议实现
@interface LKQRCodeExternalIMP : NSObject<KAQRCodeApiDelegate>
...
@end

@implementation LKQRCodeExternalIMP
...
@end

// 原生集成应用协议实现
@interface KANativeAppExtensionIMP : NSObject<KANativeAppExtensionProtocol>
...
@end

@implementation KANativeAppExtensionIMP
...
@end

@interface OpenNativeAppIMP : NSObject<OpenNativeAppProtocol>
...
@end

@implementation OpenNativeAppIMP
...
@end

// WebContainer 协议实现
@interface LKWebContainerExternalIMP : NSObject<KAWebContainerProtocol>
...
@end

@implementation LKWebContainerExternalIMP
...
@end

// 桌面快捷菜单协议实现
@interface LKShortcutExternalIMP : NSObject<KAShortcutProtocol>
...
@end

@implementation LKShortcutExternalIMP
...
@end

// 视频会议协议实现
@interface LKVideoChatExternalIMP : NSObject<KAVideoChatDelegate>
...
@end

@implementation LKVideoChatExternalIMP
...
@end

// 注册安全管控协议实现
@interface LKVideoChatExternalIMP : NSObject<KAVideoChatDelegate>
...
@end

@implementation LKVideoChatExternalIMP
...
@end
```

## MACRO
### KAAPI_REGISTER
在 OC 中快速构造 _KAAPIWrapper 实例

```objective-c
#define KAAPI_REGISTER \
[[_KAAPIWrapper alloc] initWithApi:[[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]] \
                              file:@(__FILE__) \
                          function:@(__FUNCTION__) \
                              line:__LINE__]
```

## CLASS
### KAAPI
KA 对外 API 的入口，支持 Objective-C 的方法，需要在这个类上面扩展提供

```objective-c
@interface KAAPI : NSObject

- (nonnull instancetype)initWithChannel:(NSString * _Nonnull)channel NS_DESIGNATED_INITIALIZER; // 指定初始化方法
- (instancetype)init NS_UNAVAILABLE; // 禁用默认初始化
+ (instancetype)new NS_UNAVAILABLE; // 禁用默认 new

@property (nonatomic, strong, readonly) NSString* channelID; // 渠道 ID

@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| channelID | NSString * | 渠道 ID |

#### 方法列表
#### `- (nonnull instancetype)initWithChannel:(NSString * _Nonnull)channel`
指定初始化方法

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| channel | NSString * _Nonnull | 渠道标识 |

**返回值**：KAAPI 实例

### _KAAPIWrapper
KAAPI 的包装类，用于宏 KAAPI_REGISTER

```objective-c
@interface _KAAPIWrapper : NSObject

@property (nonatomic, strong) KAAPI *api; // 关联的 KAAPI 实例
@property (nonatomic, copy) NSString *file; // 文件名
@property (nonatomic, copy) NSString *function; // 函数名
@property (nonatomic) NSInteger line; // 行号

- (instancetype)initWithApi:(KAAPI *)api file:(NSString *)file function:(NSString *)function line:(NSInteger)line;

@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| api | KAAPI * | 关联的 KAAPI 实例 |
| file | NSString * | 文件名 |
| function | NSString * | 函数名 |
| line | NSInteger | 行号 |

#### 方法列表
#### `- (instancetype)initWithApi:(KAAPI *)api file:(NSString *)file function:(NSString *)function line:(NSInteger)line`
初始化方法

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| api | KAAPI * | 关联的 KAAPI 实例 |
| file | NSString * | 文件名 |
| function | NSString * | 函数名 |
| line | NSInteger | 行号 |

**返回值**：_KAAPIWrapper 实例
