---
title: "iOS桌面快捷菜单_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/desktop-shortcut-menu/ios-shortcutexternal_oc/ios-shortcutexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS桌面快捷菜单_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKShortcutExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供桌面快捷菜单协议，用于实现自定义的桌面快捷菜单

## 更新日志
- 将 `KAShortcutProtocol` 的 `icon` 属性从 `nonatomic, readonly` 改为 `nonatomic, readonly, strong`
- 将 `LKShortcutItem` 的 `icon` 属性从 `nonatomic, readonly` 改为 `nonatomic, readonly, strong`
- 将 `LKShortcutItem` 的 `title` 属性从 `nonatomic, readonly` 改为 `nonatomic, readonly, copy`
- 将 `LKShortcutItem` 的 `subtitle` 属性从 `nonatomic, readonly` 改为 `nonatomic, readonly, copy`
- 将 `LKShortcutItem` 的 `appLinkURL` 属性从 `nonatomic, readonly` 改为 `nonatomic, readonly, copy`

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKShortcutExternal;

@interface LKShortcutExternalRegistry : NSObject
@end

@implementation LKShortcutExternalRegistry
+ (void)load {
    NSString *channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];
    [KAAPI_REGISTER registerWithShortcut:^id<KAShortcutProtocol> {
        return [[LKShortcutExternalIMP alloc] init];
    } cache:YES];
}
@end

@interface LKShortcutExternalIMP : NSObject<KAShortcutProtocol>
@end

@implementation LKShortcutExternalIMP
- (NSString *)type {
    return @"com.example.shortcut";
}
- (UIApplicationShortcutIcon *)icon {
    return [UIApplicationShortcutIcon iconWithTemplateImageName:@"shortcut_icon"];
}
- (NSString *)localizedTitle {
    return @"快捷菜单";
}
- (NSString *)localizedSubtitle {
    return @"副标题";
}
- (NSString *)appLinkURL {
    return @"applink://example/shortcut";
}
@end
```

## PROTOCOL
### KAShortcutProtocol
桌面快捷菜单协议，用于实现自定义的桌面快捷菜单

```objective-c
@protocol KAShortcutProtocol
@property (nonatomic, readonly, copy) NSString * _Nonnull type; // 快捷方式唯一标识
@property (nonatomic, readonly, strong) UIApplicationShortcutIcon * _Nonnull icon; // 快捷方式 icon 图标 https://developer.apple.com/documentation/uikit/uiapplicationshortcuticon
@property (nonatomic, readonly, copy) NSString * _Nonnull localizedTitle; // 标题文案
@property (nonatomic, readonly, copy) NSString * _Nullable localizedSubtitle; // 副标题, 可选
@property (nonatomic, readonly, copy) NSString * _Nonnull appLinkURL; // 长按后跳转的页面对应的AppLink URL
@end
```

## CLASS
### LKShortcutItem
快捷菜单项，开发者不直接使用

```objective-c
@interface LKShortcutItem : NSObject
+ (NSString * _Nonnull)kaPrefixIdentifier; // 返回快捷菜单前缀标识
@property (nonatomic, readonly, copy) NSString * _Nonnull type; // 快捷方式唯一标识
@property (nonatomic, readonly, strong) UIApplicationShortcutIcon * _Nonnull icon; // 快捷方式图标
@property (nonatomic, readonly, copy) NSString * _Nonnull title; // 标题
@property (nonatomic, readonly, copy) NSString * _Nullable subtitle; // 副标题
@property (nonatomic, readonly, copy) NSString * _Nonnull appLinkURL; // 长按后跳转的页面对应的AppLink URL
- (nonnull instancetype)initWithItem:(id <KAShortcutProtocol> _Nonnull)item; // 使用协议实例初始化快捷菜单项
@end
```

## EXTENSION
### KAAPI (SWIFT_EXTENSION(LKShortcutExternal))

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKShortcutExternal))
- (void)registerWithShortcut:(id <KAShortcutProtocol> _Nullable (^ _Nonnull)(void))shortcut cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column; // 注册 KAShortcutProtocol 协议实例，由 Swift 代码调用
@end
```

### _KAAPIWrapper (SWIFT_EXTENSION(LKShortcutExternal))

```objective-c
@interface _KAAPIWrapper (SWIFT_EXTENSION(LKShortcutExternal))
- (void)registerWithShortcut:(id <KAShortcutProtocol> _Nullable (^ _Nonnull)(void))shortcut cache:(BOOL)cache; // 注册 KAShortcutProtocol 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用
@end
```
