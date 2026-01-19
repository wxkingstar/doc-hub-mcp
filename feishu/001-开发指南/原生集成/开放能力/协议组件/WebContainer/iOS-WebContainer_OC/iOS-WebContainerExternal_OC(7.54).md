---
title: "iOS WebContainerExternal_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/webcontainer/ios-webcontainerexternal_oc/ios-webcontainerexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS WebContainerExternal_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- | 
| LKWebContainerExternal | 协议组件 | 1.3.0 | 7.54.0 |

## 功能简介
提供 WebContainer 组件协议，用于实现自定义的 Web 事件回调函数

## 更新日志
- 移除 KAWebContainerButtonConfig 的 hide 属性
- 移除 KAWebContainerErrorPageConfig 的 hideBigImage 属性

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKWebContainerExternal;

@interface LKWebContainerExternalRegistry: NSObject
@end
@implementation LKWebContainerExternalRegistry
+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];
    [KAAPI_REGISTER registerWithWebContainer:^id<KAWebContainerProtocol> {
        return [[LKWebContainerExternalIMP alloc] init];
    } cache:YES];
}
@end

@interface LKWebContainerExternalIMP : NSObject<KAWebContainerProtocol>
@end
@implementation LKWebContainerExternalIMP
- (void)onOpenWithUrl:(NSString *)url onSuccess:(void (^)(void))onSuccess onFail:(void (^)(NSInteger))onFail {
    // 实现自定义打开逻辑
}
- (void)onCloseWithUrl:(NSString *)url {
    // 实现自定义关闭逻辑
}
- (void)onTabVisibilityChangedWithSelected:(BOOL)selected tabParams:(TabParams *)tabParams {
    // 实现 Tab 可见性变化逻辑
}
- (KAWebContainerErrorPageConfig *)errorPageConfig {
    // 返回错误页配置
    return [[KAWebContainerErrorPageConfig alloc] init];
}
@end
```

## PROTOCOL
### KAWebContainerProtocol
WebContainer 组件协议，用于实现自定义的 Web 事件回调函数

```objective-c
@protocol KAWebContainerProtocol
- (void)onOpenWithUrl:(NSString * _Nonnull)url onSuccess:(void (^ _Nonnull)(void))onSuccess onFail:(void (^ _Nonnull)(NSInteger))onFail; // 网页容器打开即将loadUrl的时候调用
- (void)onCloseWithUrl:(NSString * _Nonnull)url; // 网页容器即将关闭的时候调用
- (void)onTabVisibilityChangedWithSelected:(BOOL)selected tabParams:(TabParams * _Nonnull)tabParams; // 主导航模式下手动切换Tab的时候调用
- (KAWebContainerErrorPageConfig * _Nullable)errorPageConfig; // 当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息
@optional
- (NSString * _Nonnull)kaIdentity; // 返回业务 tag
@end
```

#### 方法列表
#### `- (void)onOpenWithUrl:(NSString * _Nonnull)url onSuccess:(void (^ _Nonnull)(void))onSuccess onFail:(void (^ _Nonnull)(NSInteger))onFail`
网页容器打开即将 loadUrl 的时候调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| url | NSString * _Nonnull | 加载的 h5 url |
| onSuccess | void (^ _Nonnull)(void) | 流程处理完，通知网页容器继续加载 |
| onFail | void (^ _Nonnull)(NSInteger) | 流程处理异常，通知网页容器展示错误页 |

#### `- (void)onCloseWithUrl:(NSString * _Nonnull)url`
网页容器即将关闭的时候调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| url | NSString * _Nonnull | 即将关闭的页面 h5 url |

#### `- (void)onTabVisibilityChangedWithSelected:(BOOL)selected tabParams:(TabParams * _Nonnull)tabParams`
主导航模式下手动切换 Tab 的时候调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| selected | BOOL | true 表示当前 Tab 被选中，false 表示当前 Tab 未被选中 |
| tabParams | TabParams * _Nonnull | 主导航模式网页应用切换的时候一些业务参数 |

#### `- (KAWebContainerErrorPageConfig * _Nullable)errorPageConfig`
当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息

**返回值**：错误页配置

#### `- (NSString * _Nonnull)kaIdentity`
返回业务 tag

**返回值**：kaIdentity

## CLASS
### KAWebContainerButtonConfig
异常页按钮配置

```objective-c
@interface KAWebContainerButtonConfig : NSObject
@property (nonatomic, copy) NSString * _Nullable text; // 文案
@property (nonatomic, copy) NSString * _Nullable eventName; // 事件名
@property (nonatomic, copy) NSString * _Nullable eventExtra; // 补充信息
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- | 
| text | NSString * _Nullable | 文案 | 
| eventName | NSString * _Nullable | 事件名 | 
| eventExtra | NSString * _Nullable | 补充信息 | 

### KAWebContainerErrorPageConfig
异常页配置

```objective-c
@interface KAWebContainerErrorPageConfig : NSObject
@property (nonatomic, copy) NSString * _Nullable title; // 标题
@property (nonatomic, copy) NSString * _Nullable contentTitle; // 内容标题
@property (nonatomic, copy) NSString * _Nullable content; // 内容
@property (nonatomic, strong) KAWebContainerButtonConfig * _Nullable vpnConfig; // VPN 按钮配置
@property (nonatomic, strong) KAWebContainerButtonConfig * _Nullable refreshConfig; // 刷新按钮配置
- (nonnull instancetype)init OBJC_DESIGNATED_INITIALIZER;
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- | 
| title | NSString * _Nullable | 标题 | 
| contentTitle | NSString * _Nullable | 内容标题 | 
| content | NSString * _Nullable | 内容 | 
| vpnConfig | KAWebContainerButtonConfig * _Nullable | VPN 按钮配置 | 
| refreshConfig | KAWebContainerButtonConfig * _Nullable | 刷新按钮配置 | 

### TabParams
主导航模式网页应用切换的时候一些业务参数

```objective-c
@interface TabParams : NSObject
@property (nonatomic, copy) NSString * _Nonnull originalUrl; // originalUrl: 首次加载的链接
@property (nonatomic, copy) NSString * _Nonnull currentUrl; // currentUrl: 当前正在展现页面的链接
@property (nonatomic, copy) NSString * _Nonnull appId; // appId: 注册应用的id
- (nonnull instancetype)initWithOriginalUrl:(NSString * _Nonnull)originalUrl currentUrl:(NSString * _Nonnull)currentUrl appId:(NSString * _Nonnull)appId OBJC_DESIGNATED_INITIALIZER;
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- | 
| originalUrl | NSString * _Nonnull | originalUrl: 首次加载的链接 | 
| currentUrl | NSString * _Nonnull | currentUrl: 当前正在展现页面的链接 | 
| appId | NSString * _Nonnull | appId: 注册应用的id | 

#### 方法列表
#### `- (nonnull instancetype)initWithOriginalUrl:(NSString * _Nonnull)originalUrl currentUrl:(NSString * _Nonnull)currentUrl appId:(NSString * _Nonnull)appId`
构造函数

| 参数名称 |  类型 | 描述 | 
| --- | --- | --- |
| originalUrl | NSString * _Nonnull | 首次加载的链接 |
| currentUrl | NSString * _Nonnull | 当前正在展现页面的链接 |
| appId | NSString * _Nonnull | 注册应用的id |

## EXTENSION
### KAAPI (SWIFT_EXTENSION(LKWebContainerExternal))

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKWebContainerExternal))
- (void)registerWithWebContainer:(id <KAWebContainerProtocol> _Nullable (^ _Nonnull)(void))webContainer cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column;
@end
```

#### 方法列表
#### `- (void)registerWithWebContainer:(id <KAWebContainerProtocol> _Nullable (^ _Nonnull)(void))webContainer cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column`
注册 KAWebContainerProtocol 协议实例，由 Swift 代码调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| webContainer | id <KAWebContainerProtocol> _Nullable (^ _Nonnull)(void) | KAWebContainerProtocol 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | NSString * _Nonnull | 注册代码所在文件 |
| function | NSString * _Nonnull | 注册代码所在函数 |
| line | NSInteger | 注册代码所在行 |
| column | NSInteger | 注册代码所在列 |

### _KAAPIWrapper (SWIFT_EXTENSION(LKWebContainerExternal))

```objective-c
@interface _KAAPIWrapper (SWIFT_EXTENSION(LKWebContainerExternal))
- (void)registerWithWebContainer:(id <KAWebContainerProtocol> _Nullable (^ _Nonnull)(void))webContainer cache:(BOOL)cache;
@end
```

#### 方法列表
#### `- (void)registerWithWebContainer:(id <KAWebContainerProtocol> _Nullable (^ _Nonnull)(void))webContainer cache:(BOOL)cache`
注册 KAWebContainerProtocol 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| webContainer | id <KAWebContainerProtocol> _Nullable (^ _Nonnull)(void) | KAWebContainerProtocol 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
