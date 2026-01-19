---
title: "iOS JS API扩展能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/js-api-extension/jsapiexternal_oc/ios-jsapiexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS JS API扩展能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| LKJsApiExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供 H5 与原生应用之间的双向通信能力，允许 H5 调用原生插件接口并接收回调结果

## 更新日志
- 将 LKNativeAppAPIExternal 更名为 LKJsApiExternal
- 统一 Swift 协议标识符为 LKJsApiExternal 命名空间
- 移除 NativeAppPublicKit 的条件编译依赖

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKJsApiExternal;

@interface LKJsApiExternalRegistry: NSObject
@end
@implementation LKJsApiExternalRegistry
+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];
    [KAAPI_REGISTER registerWithNativeAppPluginDelegate:^id<KANativeAppPluginDelegate> {
        return [[LKJsApiExternalIMP alloc] init];
    } cache:YES];
}
@end

@interface LKJsApiExternalIMP : NSObject<KANativeAppPluginDelegate>
@end
@implementation LKJsApiExternalIMP
- (NSString *)getPluginName {
    return @"demoPlugin";
}
- (NSArray<NSString *> *)getPluginApiNames {
    return @[@"demoApi"];
}
- (void)handleWithEvent:(KANativeAppAPIEvent *)event callback:(void (^)(BOOL, NSDictionary<NSString *, id> * _Nullable))callback {
    if ([event.name isEqualToString:@"demoApi"]) {
        callback(YES, @{@"result": @"success"});
    }
}
- (void)setContextWithContext:(id<NativeAppPluginContextProtocol>)context {
    // 保存上下文用于持续回调
}
@end
```

## PROTOCOL
### KANativeAppPluginDelegate
JsAPI 协议，用于响应 Js 发送的事件

```objective-c
@protocol KANativeAppPluginDelegate
- (NSString *)getPluginName;	// 返回 Plugin 唯一的名字，用于后续的注册与调用
- (NSArray<NSString *> *)getPluginApiNames;	// 支持的 api name list
- (void)handleWithEvent:(KANativeAppAPIEvent *)event callback:(void (^)(BOOL, NSDictionary<NSString *, id> * _Nullable))callback;	// 事件处理方法
- (void)setContextWithContext:(id<NativeAppPluginContextProtocol>)context;
@end
```

#### 方法列表
#### `- (NSString *)getPluginName`
返回 Plugin 唯一的名字，用于后续的注册与调用

**返回值**：Plugin 名字

#### `- (NSArray<NSString *> *)getPluginApiNames`
支持的 api name list

**返回值**：api list

#### `- (void)handleWithEvent:(KANativeAppAPIEvent *)event callback:(void (^)(BOOL, NSDictionary<NSString *, id> * _Nullable))callback`
事件处理方法

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| event | KANativeAppAPIEvent * | H5/web 传回的 api name 和参数 |
| callback | void (^)(BOOL, NSDictionary<NSString *, id> * _Nullable) | 回调函数 |

#### `- (void)setContextWithContext:(id<NativeAppPluginContextProtocol>)context`
设置上下文

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| context | id<NativeAppPluginContextProtocol> | 插件上下文 |

## CLASS
### KANativeAppAPIEvent
Js 发送的事件

```objective-c
@interface KANativeAppAPIEvent : NSObject
@property (nonatomic, copy) NSDictionary<NSString *, id> * _Nullable params;	// 事件参数
@property (nonatomic, strong) NSString * _Nonnull name;	// 事件名
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- |
| params | NSDictionary<NSString *, id> * _Nullable | 事件参数 |
| name | NSString * _Nonnull | 事件名 |

## EXTENSION
### KAAPI

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKJsApiExternal))
- (void)registerWithNativeAppPluginDelegate:(id <KANativeAppPluginDelegate> _Nullable (^ _Nonnull)(void))nativeAppPluginDelegate cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column;	// 注册 KANativeAppPluginDelegate 协议实例，由 Swift 代码调用
@end
```

#### 方法列表
#### `- (void)registerWithNativeAppPluginDelegate:(id <KANativeAppPluginDelegate> _Nullable (^ _Nonnull)(void))nativeAppPluginDelegate cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column`
注册 KANativeAppPluginDelegate 协议实例，由 Swift 代码调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| nativeAppPluginDelegate | id <KANativeAppPluginDelegate> _Nullable (^ _Nonnull)(void) | KANativeAppPluginDelegate 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | NSString * _Nonnull | 注册代码所在文件 |
| function | NSString * _Nonnull | 注册代码所在函数 |
| line | NSInteger | 注册代码所在行 |
| column | NSInteger | 注册代码所在列 |

### _KAAPIWrapper

```objective-c
@interface _KAAPIWrapper (SWIFT_EXTENSION(LKJsApiExternal))
- (void)registerWithNativeAppPluginDelegate:(id <KANativeAppPluginDelegate> _Nullable (^ _Nonnull)(void))nativeAppPluginDelegate cache:(BOOL)cache;	// 注册 KANativeAppPluginDelegate 协议实例。OC 代码中由 KAAPI_REGISTER 宏调用
@end
```

#### 方法列表
#### `- (void)registerWithNativeAppPluginDelegate:(id <KANativeAppPluginDelegate> _Nullable (^ _Nonnull)(void))nativeAppPluginDelegate cache:(BOOL)cache`
注册 KANativeAppPluginDelegate 协议实例。OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| nativeAppPluginDelegate | id <KANativeAppPluginDelegate> _Nullable (^ _Nonnull)(void) | KANativeAppPluginDelegate 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
