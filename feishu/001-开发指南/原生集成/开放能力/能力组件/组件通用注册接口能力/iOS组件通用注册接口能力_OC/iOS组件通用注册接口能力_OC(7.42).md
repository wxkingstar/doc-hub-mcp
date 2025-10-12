---
title: "iOS组件通用注册接口能力_OC(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/kabridge/kabridge_oc/kabridge_oc_742
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895177000
---
最后更新于 2025-04-29

# 组件通用注册接口能力_OC(7.42)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKKABridge | 1.0.9 | 该模块提供了通用的能力组件和协议组件接口`KAAPI`，可以通过该接口注册协议组件实例，或者调用能力组件接口方法 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
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
