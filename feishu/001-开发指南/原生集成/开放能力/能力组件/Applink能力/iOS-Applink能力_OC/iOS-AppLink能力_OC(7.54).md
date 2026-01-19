---
title: "iOS AppLink能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/applink-capability/ios-applink-capability_oc/ios-applink-capability_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS AppLink能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKAppLinkExternal | 能力组件 | 1.3.0 | 7.54.0 |

## 功能简介
提供 AppLink 跳转、页面 push / pop / present 等导航能力

## 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKAppLinkExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KANavigator> navigator = api.navigator;
[navigator openWithUrl:[NSURL URLWithString:@"applink://example"] from:self];
[navigator pushWithVc:vc style:KAPushStyleDefault completion:nil];
[navigator popWithVc:vc completion:nil];
// 其余方法省略
```

## PROTOCOL
### KANavigator
AppLink 能力协议，用于调用 AppLink 能力

```objective-c
@protocol KANavigator
- (void)openWithUrl:(NSURL * _Nonnull)url from:(UIViewController * _Nonnull)from;	// 从 from vc push 到下个 applink url
- (void)pushWithVc:(UIViewController * _Nonnull)vc style:(enum KAPushStyle)style completion:(void (^ _Nullable)(void))completion;	// 从当前 window 顶部 vc 的 navigation controller push vc，如果当前无 navigation controller 可能失败
- (void)popWithVc:(UIViewController * _Nonnull)vc completion:(void (^ _Nullable)(void))completion;	// 从当前 window 顶部 vc 的 navigation controllers 中移除 vc，如果当前无 navigation controller 可能失败
- (void)presentWithVc:(UIViewController * _Nonnull)vc completion:(void (^ _Nullable)(void))completion;	// 从当前 window 顶部 vc present 入参 vc
@end
```

#### 方法列表
#### `- (void)openWithUrl:(NSURL * _Nonnull)url from:(UIViewController * _Nonnull)from`
从 from vc push 到下个 applink url

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| url | NSURL * _Nonnull | applink url |
| from | UIViewController * _Nonnull | from vc |

#### `- (void)pushWithVc:(UIViewController * _Nonnull)vc style:(enum KAPushStyle)style completion:(void (^ _Nullable)(void))completion`
从当前 window 顶部 vc 的 navigation controller push vc，如果当前无 navigation controller 可能失败

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| vc | UIViewController * _Nonnull | 需要 push 的 vc |
| style | enum KAPushStyle | push 方式 |
| completion | void (^ _Nullable)(void) | 完成回调 |

#### `- (void)popWithVc:(UIViewController * _Nonnull)vc completion:(void (^ _Nullable)(void))completion`
从当前 window 顶部 vc 的 navigation controllers 中移除 vc，如果当前无 navigation controller 可能失败

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| vc | UIViewController * _Nonnull | 需要 push 的 vc |
| completion | void (^ _Nullable)(void) | 完成回调 |

#### `- (void)presentWithVc:(UIViewController * _Nonnull)vc completion:(void (^ _Nullable)(void))completion`
从当前 window 顶部 vc present 入参 vc

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| vc | UIViewController * _Nonnull | 需要 push 的 vc |
| completion | void (^ _Nullable)(void) | 完成回调 |

## EXTENSION
### KAAPI (SWIFT_EXTENSION(LKAppLinkExternal))

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKAppLinkExternal))
@property (nonatomic, readonly, strong) id <KANavigator> _Nullable navigator;	// AppLink 能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| navigator | id <KANavigator> _Nullable | AppLink 能力接口实例 |

## ENUM
### KAPushStyle
push VC 的方式

```objective-c
typedef SWIFT_ENUM(NSInteger, KAPushStyle, open)
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| KAPushStyleDefault | 0 | 根据设备类型默认，在 iPad 的 split view 上时，会在 detail push 新页面 |
| KAPushStyleDetail | 1 | 在 iPad 的 split view 上时，会在 detail set 新页面，无法通过 pop 移除，需要继续调用 detail 覆盖原页面，建议使用 default |
