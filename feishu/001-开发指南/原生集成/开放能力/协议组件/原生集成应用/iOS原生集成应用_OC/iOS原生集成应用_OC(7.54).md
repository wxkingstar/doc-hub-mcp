---
title: "iOS原生集成应用_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/ios-nativeappextensionexternal_oc/ios-nativeappextensionexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS原生集成应用_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- | 
| LKNativeAppExtensionExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供原生集成应用协议，用于注册自定义 SSO 登录页及工作台原生应用页面

## 更新日志
- 将 KANativeAppExtensionProtocol 的 pageRouteWithLink:from: 方法更名为 pageRoute:from:
- 将协议所在模块从 LKWebContainerExternal 迁移至 LKNativeAppExtensionExternal
- 新增 OpenNativeAppProtocol 协议用于工作台原生应用页面注册

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKNativeAppExtensionExternal;

@interface NativeAppExtensionRegistry : NSObject
@end
@implementation NativeAppExtensionRegistry
+ (void)load {
    NSString *channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];

// 注册 SSO 登录页协议
    [KAAPI_REGISTER registerWithNativeApp:^id<KANativeAppExtensionProtocol> {
        return [[KANativeAppExtensionIMP alloc] init];
    } cache:YES];

// 注册工作台原生应用协议
    [KAAPI_REGISTER registerWithOpenNativeApp:^id<OpenNativeAppProtocol> {
        return [[OpenNativeAppIMP alloc] init];
    } cache:YES];
}
@end

// SSO 登录页协议实现
@interface KANativeAppExtensionIMP : NSObject<KANativeAppExtensionProtocol>
@end
@implementation KANativeAppExtensionIMP
- (void)pageRoute:(NSURL *)link from:(UIViewController *)from {
    // 处理自定义登录页跳转
}
- (NSString *)appId {
    return @"your_app_id";
}
@end

// 工作台原生应用协议实现
@interface OpenNativeAppIMP : NSObject<OpenNativeAppProtocol>
@end
@implementation OpenNativeAppIMP
- (NSString *)getNativeAppId {
    return @"your_native_app_id";
}
- (UIViewController *)setupVCWithUrl:(NSString *)url {
    // 返回自定义工作台页面
    return [[UIViewController alloc] init];
}
@end
```

## PROTOCOL
### KANativeAppExtensionProtocol
原生集成应用协议，用于注册自定义的 SSO 登录页。为了实现自定义登录页面，用户需要实现该协议并使用 KAAPI 注册。飞书启动时，会跳转至 pageRoute 方法中返回的自定义 ViewController 页面

```objective-c
@protocol KANativeAppExtensionProtocol
- (void)pageRoute:(NSURL *)link from:(UIViewController *)from;	// Opens a custom page via FeiShu applink
- (NSString *)appId;	// The app ID of the integrated native application
@optional
- (void)destroy;	// Called when the instance is being destroyed (not effective?)
@end
```

#### 方法列表
#### `- (void)pageRoute:(NSURL *)link from:(UIViewController *)from`
Opens a custom page via FeiShu applink

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| link | NSURL * | The applink URL |
| from | UIViewController * | The source view controller, which can be nil |

#### `- (NSString *)appId`
The app ID of the integrated native application

**返回值**：返回 app id

#### `- (void)destroy`
Called when the instance is being destroyed (not effective?)

### NativeAppExtensionProtocol
开放平台的原生集成应用相关协议要实现的基 Protocol，定义 NativeApp 的通用能力。用户通过 OpenNativeAppProtocol 协议实现自定义的原生集成应用实现类时，需要先实现 NativeAppExtensionProtocol

```objective-c
@protocol NativeAppExtensionProtocol
- (NSString *)getNativeAppId;	// 返回 NativeApp 的相关信息(appId)
@end
```

#### 方法列表
#### `- (NSString *)getNativeAppId`
返回 NativeApp 的相关信息(appId)

**返回值**：返回 app id

### OpenNativeAppProtocol
打开工作台应用时触发，用于注册开发者自定义的应用页面。用户通过实现并注册该协议，可以在工作台中加入自定义的原生集成应用。实现该协议的类需要先实现 NativeAppExtensionProtocol

```objective-c
@protocol OpenNativeAppProtocol <NativeAppExtensionProtocol>
- (UIViewController *)setupVCWithUrl:(NSString *)url;	// 打开与getNativeAppId返回值关联的工作台应用时，调用该方法返回应用页面
@end
```

#### 方法列表
#### `- (UIViewController *)setupVCWithUrl:(NSString *)url`
打开与getNativeAppId返回值关联的工作台应用时，调用该方法返回应用页面

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| url | NSString * | 跳转时原生集成应用的 applink 地址 |

**返回值**：自定义的应用页面

## CLASS
### KAAPI
组件通用注册接口

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKNativeAppExtensionExternal))
- (void)registerWithNativeApp:(id <KANativeAppExtensionProtocol> _Nullable (^ _Nonnull)(void))nativeApp cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column;	// 注册KANativeAppExtensionProtocol协议实例，由 Swift 代码调用
- (void)registerWithOpenNativeApp:(id <OpenNativeAppProtocol> _Nullable (^ _Nonnull)(void))openNativeApp cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column;	// 注册OpenNativeAppProtocol协议实例，由 Swift 代码调用
@end
```

#### 方法列表
#### `- (void)registerWithNativeApp:(id <KANativeAppExtensionProtocol> _Nullable (^ _Nonnull)(void))nativeApp cache:(BOOL)cache file:(NSString *)file function:(NSString *)function line:(NSInteger)line column:(NSInteger)column`
注册KANativeAppExtensionProtocol协议实例，由 Swift 代码调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| nativeApp | id <KANativeAppExtensionProtocol> _Nullable (^ _Nonnull)(void) | KANativeAppExtensionProtocol协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | NSString * | 注册代码所在文件 |
| function | NSString * | 注册代码所在函数 |
| line | NSInteger | 注册代码所在行 |
| column | NSInteger | 注册代码所在列 |

#### `- (void)registerWithOpenNativeApp:(id <OpenNativeAppProtocol> _Nullable (^ _Nonnull)(void))openNativeApp cache:(BOOL)cache file:(NSString *)file function:(NSString *)function line:(NSInteger)line column:(NSInteger)column`
注册OpenNativeAppProtocol协议实例，由 Swift 代码调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| openNativeApp | id <OpenNativeAppProtocol> _Nullable (^ _Nonnull)(void) | OpenNativeAppProtocol协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | NSString * | 注册代码所在文件 |
| function | NSString * | 注册代码所在函数 |
| line | NSInteger | 注册代码所在行 |
| column | NSInteger | 注册代码所在列 |

## EXTENSION
### _KAAPIWrapper

```objective-c
@interface _KAAPIWrapper (SWIFT_EXTENSION(LKNativeAppExtensionExternal))
- (void)registerWithNativeApp:(id <KANativeAppExtensionProtocol> _Nullable (^ _Nonnull)(void))nativeApp cache:(BOOL)cache;	// 注册KANativeAppExtensionProtocol协议实例，OC 代码中由 KAAPI_REGISTER宏调用
- (void)registerWithOpenNativeApp:(id <OpenNativeAppProtocol> _Nullable (^ _Nonnull)(void))openNativeApp cache:(BOOL)cache;	// 注册OpenNativeAppProtocol协议实例，OC 代码中由 KAAPI_REGISTER宏调用
@end
```

#### 方法列表
#### `- (void)registerWithNativeApp:(id <KANativeAppExtensionProtocol> _Nullable (^ _Nonnull)(void))nativeApp cache:(BOOL)cache`
注册KANativeAppExtensionProtocol协议实例，OC 代码中由 KAAPI_REGISTER宏调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| nativeApp | id <KANativeAppExtensionProtocol> _Nullable (^ _Nonnull)(void) | KANativeAppExtensionProtocol协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为false时，每次调用协议方法都会重新初始化实例 |

#### `- (void)registerWithOpenNativeApp:(id <OpenNativeAppProtocol> _Nullable (^ _Nonnull)(void))openNativeApp cache:(BOOL)cache`
注册OpenNativeAppProtocol协议实例，OC 代码中由 KAAPI_REGISTER宏调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| openNativeApp | id <OpenNativeAppProtocol> _Nullable (^ _Nonnull)(void) | OpenNativeAppProtocol协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为false时，每次调用协议方法都会重新初始化实例 |
