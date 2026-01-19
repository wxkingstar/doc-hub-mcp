---
title: "iOS Tab容器_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/ios-tabexternal_oc/ios-tabexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS Tab容器_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| LKTabExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供自定义 Tab 容器的协议定义与注册能力，支持在 Swift 与 OC 环境中注册 Tab 实现

## 更新日志
- 将 `KATabProtocol` 从 `LKWebContainerExternal` 迁移至 `LKTabExternal`
- 新增 `_KAAPIWrapper` 扩展，用于 OC 宏注册
- 调整 `tabViewController` 属性声明方式，由 `strong` 改为 `copy`

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKTabExternal;

@interface LKTabExternalRegistry: NSObject
@end
@implementation LKTabExternalRegistry
+(void)load {
    NSString *channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];
    [KAAPI_REGISTER registerWithTab:^id<KATabProtocol> {
        return [[LKTabExternalIMP alloc] init];
    } cache:YES];
}
@end

@interface LKTabExternalIMP : NSObject<KATabProtocol>
@end
@implementation LKTabExternalIMP
- (NSString *)appId {
    return @"your_app_id";
}
- (BOOL)showNaviBar {
    return YES;
}
- (UIViewController * _Nonnull (^)(void))tabViewController {
    return ^{
        return [[UIViewController alloc] init];
    };
}
- (UIButton * _Nullable (^)(UIViewController * _Nonnull))firstNaviBarButton {
    return nil;
}
- (UIButton * _Nullable (^)(UIViewController * _Nonnull))secondNaviBarButton {
    return nil;
}
- (NSString *)naviBarTitle {
    return @"Tab Title";
}
- (void (^)(void))tabSingleClick {
    return ^{
        // 单击处理
    };
}
- (void (^)(void))tabDoubleClick {
    return ^{
        // 双击处理
    };
}
@end
```

## PROTOCOL
### KATabProtocol
Tab 容器协议，用于实现自定义的 Tab

```objective-c
@protocol KATabProtocol
@property (nonatomic, readonly, copy) NSString * _Nonnull appId;	// appId，和开平申请的 appId 一致
@property (nonatomic, readonly) BOOL showNaviBar;	// 是否展示 navi bar
@property (nonatomic, readonly, copy) UIViewController * _Nonnull (^ _Nonnull tabViewController)(void);	// tab 对应的 ViewController
@property (nonatomic, readonly, copy) UIButton * _Nullable (^ _Nullable firstNaviBarButton)(UIViewController * _Nonnull);	// navi bar 上方右侧第一个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController
@property (nonatomic, readonly, copy) UIButton * _Nullable (^ _Nullable secondNaviBarButton)(UIViewController * _Nonnull);	// navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController
@property (nonatomic, readonly, copy) NSString * _Nullable naviBarTitle;	// navi bar 标题，仅当 showNaviBar 为 true 时生效
@property (nonatomic, readonly, copy) void (^ _Nullable tabSingleClick)(void);	// tab 单击事件
@property (nonatomic, readonly, copy) void (^ _Nullable tabDoubleClick)(void);	// tab 双击事件
@end
```

## EXTENSION
### KAAPI
```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKTabExternal))
- (void)registerWithTab:(id <KATabProtocol> _Nullable (^ _Nonnull)(void))tab cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column;	// 注册 KATabProtocol 协议实例，由 Swift 代码调用
@end
```

### _KAAPIWrapper
```objective-c
@interface _KAAPIWrapper (SWIFT_EXTENSION(LKTabExternal))
- (void)registerWithTab:(id <KATabProtocol> _Nullable (^ _Nonnull)(void))tab cache:(BOOL)cache;	// 注册 KATabProtocol 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用
@end
```
