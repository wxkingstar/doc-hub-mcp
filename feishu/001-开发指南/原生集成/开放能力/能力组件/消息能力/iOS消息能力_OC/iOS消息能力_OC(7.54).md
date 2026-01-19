---
title: "iOS消息能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/message-capabilities/ios-messageexternal_oc/ios-messageexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS消息能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| LKMessageExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供消息转发、资源获取与下载等消息相关能力

## 更新日志
- 新增 KAAPI 扩展属性 messageNavigator，用于获取消息能力接口实例
- 新增 KAMessageBodyProtocol 作为所有消息体的基协议
- 新增 KAFileMessageProtocol 继承自 KAMessageBodyProtocol，用于描述文件消息
- 新增 KAMessage 类，用于封装待发送的消息
- 新增 MessageInfo 类，用于描述消息资源
- 新增 KAMessageType 与 KAMessageInfoType 枚举，用于区分消息类型

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKMessageExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KAMessageNavigator> message = api.messageNavigator;

// 转发消息
KAMessage *msg = [[KAMessage alloc] initWithType:KAMessageTypeFile body:fileBody];
[message forwardWithMessage:msg];

// 获取消息资源
[message getResourcesWithMessages:@[actionMsg] onSuccess:^(NSArray<MessageInfo *> *infos) {
    // 处理成功回调
} onError:^(NSError *error) {
    // 处理失败回调
}];

// 下载消息资源
[message downloadResourceWithMessageInfo:info onSuccess:^(NSString *path) {
    // 处理下载成功
} onError:^(NSError *error) {
    // 处理下载失败
}];
```

## PROTOCOL
### KAMessageBodyProtocol
消息体 Protocol

```objective-c
@protocol KAMessageBodyProtocol
@end
```

### KAFileMessageProtocol
文件消息体 Protocol

```objective-c
@protocol KAFileMessageProtocol <KAMessageBodyProtocol>
@property (nonatomic, readonly, copy) NSString * _Nonnull filePath;	// 文件路径
@end
```

### KAMessageNavigator
消息能力接口协议

```objective-c
@protocol KAMessageNavigator
- (void)forwardWithMessage:(KAMessage * _Nonnull)message;	// 转发消息
- (void)getResourcesWithMessages:(NSArray<ActionMessage *> * _Nonnull)messages onSuccess:(void (^ _Nonnull)(NSArray<MessageInfo *> * _Nonnull))onSuccess onError:(void (^ _Nonnull)(NSError * _Nonnull))onError;	// 获取消息资源
- (void)downloadResourceWithMessageInfo:(MessageInfo * _Nonnull)messageInfo onSuccess:(void (^ _Nonnull)(NSString * _Nonnull))onSuccess onError:(void (^ _Nonnull)(NSError * _Nonnull))onError;	// 下载消息资源
@end
```

#### 方法列表
#### `- (void)forwardWithMessage:(KAMessage * _Nonnull)message`
转发消息

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| message | KAMessage * _Nonnull | 待转发的消息 |

#### `- (void)getResourcesWithMessages:(NSArray<ActionMessage *> * _Nonnull)messages onSuccess:(void (^ _Nonnull)(NSArray<MessageInfo *> * _Nonnull))onSuccess onError:(void (^ _Nonnull)(NSError * _Nonnull))onError`
获取消息资源

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| messages | NSArray<ActionMessage *> * _Nonnull | 消息描述 |
| onSuccess | void (^ _Nonnull)(NSArray<MessageInfo *> * _Nonnull) | 获取消息成功后的回调函数 |
| onError | void (^ _Nonnull)(NSError * _Nonnull) | 获取消息失败后的回调函数 |

#### `- (void)downloadResourceWithMessageInfo:(MessageInfo * _Nonnull)messageInfo onSuccess:(void (^ _Nonnull)(NSString * _Nonnull))onSuccess onError:(void (^ _Nonnull)(NSError * _Nonnull))onError`
下载消息资源

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| messageInfo | MessageInfo * _Nonnull | 消息描述 |
| onSuccess | void (^ _Nonnull)(NSString * _Nonnull) | 下载成功后的回调函数 |
| onError | void (^ _Nonnull)(NSError * _Nonnull) | 下载失败后的回调函数 |

## CLASS
### KAMessage
发送的消息

```objective-c
@interface KAMessage : NSObject
@property (nonatomic) enum KAMessageType type;	// 消息类型
@property (nonatomic, strong) id <KAMessageBodyProtocol> _Nonnull body;	// 消息体
- (nonnull instancetype)initWithType:(enum KAMessageType)type body:(id <KAMessageBodyProtocol> _Nonnull)body OBJC_DESIGNATED_INITIALIZER;
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- | 
| type | enum KAMessageType | 消息类型 | 
| body | id <KAMessageBodyProtocol> _Nonnull | 消息体 | 

#### 方法列表
#### `- (nonnull instancetype)initWithType:(enum KAMessageType)type body:(id <KAMessageBodyProtocol> _Nonnull)body`
构造函数

| 参数名称 |  类型 | 描述 | 
| --- | --- | --- |
| type | enum KAMessageType | 消息类型 |
| body | id <KAMessageBodyProtocol> _Nonnull | 消息体 |

**返回值**：KAMessage 实例

### MessageInfo
消息描述

```objective-c
@interface MessageInfo : NSObject
@property (nonatomic) enum KAMessageInfoType type;	// 消息类型
@property (nonatomic, copy) NSString * _Nonnull key;	// 消息标识
@property (nonatomic, copy) NSString * _Nonnull messageID;	// 消息 ID
@property (nonatomic, copy) NSString * _Nonnull channelID;	// 消息 channel
@property (nonatomic, copy) NSString * _Nonnull name;	// 消息名
@property (nonatomic) uint64_t size;	// 消息大小
@property (nonatomic, copy) NSString * _Nonnull mime;	// 消息拓展
- (nonnull instancetype)initWithType:(enum KAMessageInfoType)type key:(NSString * _Nonnull)key messageID:(NSString * _Nonnull)messageID channelID:(NSString * _Nonnull)channelID name:(NSString * _Nonnull)name size:(uint64_t)size mime:(NSString * _Nonnull)mime OBJC_DESIGNATED_INITIALIZER;
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- |
| type | enum KAMessageInfoType | 消息类型 |
| key | NSString * _Nonnull | 消息标识 |
| messageID | NSString * _Nonnull | 消息 ID |
| channelID | NSString * _Nonnull | 消息 channel |
| name | NSString * _Nonnull | 消息名 |
| size | uint64_t | 消息大小 |
| mime | NSString * _Nonnull | 消息拓展 |

#### 方法列表
#### `- (nonnull instancetype)initWithType:(enum KAMessageInfoType)type key:(NSString * _Nonnull)key messageID:(NSString * _Nonnull)messageID channelID:(NSString * _Nonnull)channelID name:(NSString * _Nonnull)name size:(uint64_t)size mime:(NSString * _Nonnull)mime`
构造函数

| 参数名称 |  类型 | 描述 | 
| --- | --- | --- |
| type | enum KAMessageInfoType | 消息类型 |
| key | NSString * _Nonnull | 消息标识 |
| messageID | NSString * _Nonnull | 消息 ID |
| channelID | NSString * _Nonnull | 消息 channel |
| name | NSString * _Nonnull | 消息名 |
| size | uint64_t | 消息大小 |
| mime | NSString * _Nonnull | 消息拓展 |

**返回值**：MessageInfo 实例

## EXTENSION
### KAAPI

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKMessageExternal))
@property (nonatomic, readonly, strong) id <KAMessageNavigator> _Nullable messageNavigator;	// 消息能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- |
| messageNavigator | id <KAMessageNavigator> _Nullable | 消息能力接口实例 |

## ENUM
### KAMessageType
消息类型

```objective-c
typedef SWIFT_ENUM(NSInteger, KAMessageType, open)
```

#### 枚举成员
| 成员名 | 原始值 | 描述
| --- | --- | --- |
| KAMessageTypeFile | 0 | 文件消息 |
| KAMessageTypeImage | 1 | 图片消息 |
| KAMessageTypeVideo | 2 | 视频消息 |
| KAMessageTypeOthers | 3 | 其他消息 |

### KAMessageInfoType
消息描述类型

```objective-c
typedef SWIFT_ENUM(NSInteger, KAMessageInfoType, open)
```

#### 枚举成员
| 成员名 | 原始值 | 描述
| --- | --- | --- |
| KAMessageInfoTypeFile | 0 | 文件消息 |
| KAMessageInfoTypeImage | 1 | 图片消息 |
| KAMessageInfoTypeVideo | 2 | 视频消息 |
