---
title: "iOS消息菜单容器_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/message-menu-container/menusexternal_oc/menusexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS消息菜单容器_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- | 
| LKMenusExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
为飞书消息菜单提供自定义菜单项的注册与展示能力，支持单条或多条消息场景

## 更新日志
- 移除旧代码中的 MessageType 枚举及相关属性
- 调整 ActionMessage 构造函数，移除 type 参数
- 统一模块名从 LKWebContainerExternal 改为 LKMenusExternal
- 协议方法命名风格统一为 canInitialize: 与 onClick:

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKMenusExternal;

@interface LKMenusExternalRegistry : NSObject
@end
@implementation LKMenusExternalRegistry
+ (void)load {
    NSString *channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];
    [KAAPI_REGISTER registerWithMenu:^id<KAMenusProtocol> {
        return [[LKMenusExternalIMP alloc] init];
    } cache:YES];
}
@end

@interface LKMenusExternalIMP : NSObject<KAMenusProtocol>
@end
@implementation LKMenusExternalIMP
- (UIImage *)icon {
    return [UIImage imageNamed:@"custom_menu_icon"];
}
- (NSString *)label {
    return @"自定义菜单";
}
- (BOOL)canInitialize:(ActionContext *)actionContext {
    return actionContext.actionMode == ActionModeSingle;
}
- (void)onClick:(ActionContext *)actionContext {
    // 处理点击事件
}
@end
```

## PROTOCOL
### KAMenusProtocol
消息菜单协议，用于在消息菜单中增加自定义项

```objective-c
@protocol KAMenusProtocol <NSObject>
@property (nonatomic, readonly, strong) UIImage * _Nonnull icon;	// 菜单项图标
@property (nonatomic, readonly, copy) NSString * _Nonnull label;	// 菜单项文案
- (BOOL)canInitialize:(ActionContext * _Nonnull)actionContext;	// 飞书菜单容器依据该接口返回值，决定是否展示该菜单
- (void)onClick:(ActionContext * _Nonnull)actionContext;	// 点击菜单项时的响应函数
@end
```

#### 方法列表
#### `- (BOOL)canInitialize:(ActionContext * _Nonnull)actionContext`
飞书菜单容器依据该接口返回值，决定是否展示该菜单

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| actionContext | ActionContext * | 飞书封装的消息上下文 |

**返回值**：是否展示该菜单

#### `- (void)onClick:(ActionContext * _Nonnull)actionContext`
点击菜单项时的响应函数

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| actionContext | ActionContext * | 飞书封装的消息上下文 |

## CLASS
### ActionChat
消息所属对话

```objective-c
@interface ActionChat : NSObject
@property (nonatomic, copy) NSString * _Nonnull chatId;	// 对话 ID
- (nonnull instancetype)initWithChatId:(NSString * _Nonnull)chatId OBJC_DESIGNATED_INITIALIZER;
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- | 
| chatId | NSString * _Nonnull | 对话 ID | 

#### 方法列表
#### `- (nonnull instancetype)initWithChatId:(NSString * _Nonnull)chatId`
构造函数

| 参数名称 |  类型 | 描述 | 
| --- | --- | --- |
| chatId | NSString * _Nonnull | 对话 ID |

**返回值**：ActionChat 实例

### ActionContext
飞书封装的消息上下文类型

```objective-c
@interface ActionContext : NSObject
@property (nonatomic, strong) ActionChat * _Nonnull actionChat;	// 消息所属对话
@property (nonatomic) enum ActionMode actionMode;	// 选中的消息类型
@property (nonatomic, copy) NSArray<ActionMessage *> * _Nonnull actionMessages;	// 选中的消息列表
- (nonnull instancetype)initWithActionChat:(ActionChat * _Nonnull)actionChat actionMode:(enum ActionMode)actionMode actionMessages:(NSArray<ActionMessage *> * _Nonnull)actionMessages OBJC_DESIGNATED_INITIALIZER;
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- | 
| actionChat | ActionChat * _Nonnull | 消息所属对话 | 
| actionMode | enum ActionMode | 选中的消息类型 | 
| actionMessages | NSArray<ActionMessage *> * _Nonnull | 选中的消息列表 | 

#### 方法列表
#### `- (nonnull instancetype)initWithActionChat:(ActionChat * _Nonnull)actionChat actionMode:(enum ActionMode)actionMode actionMessages:(NSArray<ActionMessage *> * _Nonnull)actionMessages`
构造函数

| 参数名称 |  类型 | 描述 | 
| --- | --- | --- |
| actionChat | ActionChat * _Nonnull | 消息所属对话 |
| actionMode | enum ActionMode | 选中的消息类型 |
| actionMessages | NSArray<ActionMessage *> * _Nonnull | 选中的消息列表 |

**返回值**：ActionContext 实例

### ActionMessage
选中的消息

```objective-c
@interface ActionMessage : NSObject
@property (nonatomic, copy) NSString * _Nonnull id;	// 消息 ID
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- | 
| id | NSString * _Nonnull | 消息 ID | 

## EXTENSION
### KAAPI

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKMenusExternal))
- (void)registerWithMenu:(id <KAMenusProtocol> _Nullable (^ _Nonnull)(void))menu cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column;
@end
```

#### 方法列表
#### `- (void)registerWithMenu:(id <KAMenusProtocol> _Nullable (^ _Nonnull)(void))menu cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column`
注册 KAMenusProtocol 协议实例，由 Swift 代码调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| menu | id <KAMenusProtocol> _Nullable (^ _Nonnull)(void) | KAMenusProtocol 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | NSString * _Nonnull | 注册代码所在文件 |
| function | NSString * _Nonnull | 注册代码所在函数 |
| line | NSInteger | 注册代码所在行 |
| column | NSInteger | 注册代码所在列 |

### _KAAPIWrapper

```objective-c
@interface _KAAPIWrapper (SWIFT_EXTENSION(LKMenusExternal))
- (void)registerWithMenu:(id <KAMenusProtocol> _Nullable (^ _Nonnull)(void))menu cache:(BOOL)cache;
@end
```

#### 方法列表
#### `- (void)registerWithMenu:(id <KAMenusProtocol> _Nullable (^ _Nonnull)(void))menu cache:(BOOL)cache`
注册 KAMenusProtocol 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| menu | id <KAMenusProtocol> _Nullable (^ _Nonnull)(void) | KAMenusProtocol 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |

## ENUM
### ActionMode
选中的消息类型

```objective-c
typedef SWIFT_ENUM(NSInteger, ActionMode, open)
```

#### 枚举成员
| 成员名 | 原始值 | 描述
| --- | --- | --- |
| ActionModeSingle | 0 | 选中单条消息 |
| ActionModeMulti | 1 | 选中多条消息 |
