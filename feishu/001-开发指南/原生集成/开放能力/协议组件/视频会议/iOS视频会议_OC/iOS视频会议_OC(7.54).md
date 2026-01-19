---
title: "iOS视频会议_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/video-conference/ios-videochatexternal_oc/ios-videochatexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS视频会议_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKVideoChatExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
视频会议组件协议，用于注册自定义的视频会议事件回调函数

## 更新日志
- 新增 `KAVideoChatDelegate` 协议，提供会议生命周期、媒体状态、分享状态等事件回调
- 新增 `KAMeeting` 类，封装会议信息
- 新增 `KAMeetingType` 枚举，定义会议类型
- 新增 `KAAPI` 与 `_KAAPIWrapper` 扩展，支持注册协议实现

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKVideoChatExternal;

@interface LKVideoChatExternalRegistry : NSObject
@end
@implementation LKVideoChatExternalRegistry
+ (void)load {
    NSString *channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];
    [KAAPI_REGISTER registerWithVideoChatDelegate:^id<KAVideoChatDelegate> {
        return [[LKVideoChatExternalIMP alloc] init];
    } cache:YES];
}
@end

@interface LKVideoChatExternalIMP : NSObject<KAVideoChatDelegate>
@end
@implementation LKVideoChatExternalIMP
- (void)onStartWithMeeting:(KAMeeting *)meeting {
    // 会议开始
}
- (void)onStopWithMeeting:(KAMeeting *)meeting {
    // 会议结束
}
// 其余方法省略...
@end
```

## PROTOCOL
### KAVideoChatDelegate
视频会议组件协议，用于注册自定义的视频会议事件回调函数

```objective-c
@protocol KAVideoChatDelegate
- (void)onStartWithMeeting:(KAMeeting * _Nonnull)meeting;	// 会议开始
- (void)onStopWithMeeting:(KAMeeting * _Nonnull)meeting;	// 会议结束
- (void)onFloatWindowStartWithMeeting:(KAMeeting * _Nonnull)meeting;	// 开启小窗
- (void)onFloatWindowStopWithMeeting:(KAMeeting * _Nonnull)meeting;	// 关闭小窗
- (void)onShareDocumentStartWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe;	// 开启会议分享文档
- (void)onShareDocumentStopWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe;	// 关闭会议分享文档
- (void)onShareScreenStartWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe;	// 开启会议屏幕分享, 盒子投屏
- (void)onShareScreenStopWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe;	// 关闭会议屏幕分享, 盒子投屏
- (void)onShareWhiteBoardStartWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe;	// 开启会议分享白板
- (void)onShareWhiteBoardStopWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe;	// 关闭会议分享白板
- (void)onMicrophoneMutedWithMeeting:(KAMeeting * _Nonnull)meeting;	// 关闭麦克风
- (void)onMicrophoneUnmutedWithMeeting:(KAMeeting * _Nonnull)meeting;	// 开启麦克风
- (void)onCameraMutedWithMeeting:(KAMeeting * _Nonnull)meeting;	// 关闭摄像头
- (void)onCameraUnmutedWithMeeting:(KAMeeting * _Nonnull)meeting;	// 开启摄像头
@end
```

#### 方法列表
#### `- (void)onStartWithMeeting:(KAMeeting * _Nonnull)meeting`
会议开始

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |

#### `- (void)onStopWithMeeting:(KAMeeting * _Nonnull)meeting`
会议结束

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |

#### `- (void)onFloatWindowStartWithMeeting:(KAMeeting * _Nonnull)meeting`
开启小窗

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |

#### `- (void)onFloatWindowStopWithMeeting:(KAMeeting * _Nonnull)meeting`
关闭小窗

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |

#### `- (void)onShareDocumentStartWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe`
开启会议分享文档

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |
| isSharedByMe | BOOL | 是否由用户发起分享 |

#### `- (void)onShareDocumentStopWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe`
关闭会议分享文档

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |
| isSharedByMe | BOOL | 是否由用户发起分享 |

#### `- (void)onShareScreenStartWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe`
开启会议屏幕分享, 盒子投屏

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |
| isSharedByMe | BOOL | 是否由用户发起分享 |

#### `- (void)onShareScreenStopWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe`
关闭会议屏幕分享, 盒子投屏

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |
| isSharedByMe | BOOL | 是否由用户发起分享 |

#### `- (void)onShareWhiteBoardStartWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe`
开启会议分享白板

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |
| isSharedByMe | BOOL | 是否由用户发起分享 |

#### `- (void)onShareWhiteBoardStopWithMeeting:(KAMeeting * _Nonnull)meeting isSharedByMe:(BOOL)isSharedByMe`
关闭会议分享白板

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |
| isSharedByMe | BOOL | 是否由用户发起分享 |

#### `- (void)onMicrophoneMutedWithMeeting:(KAMeeting * _Nonnull)meeting`
关闭麦克风

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |

#### `- (void)onMicrophoneUnmutedWithMeeting:(KAMeeting * _Nonnull)meeting`
开启麦克风

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |

#### `- (void)onCameraMutedWithMeeting:(KAMeeting * _Nonnull)meeting`
关闭摄像头

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |

#### `- (void)onCameraUnmutedWithMeeting:(KAMeeting * _Nonnull)meeting`
开启摄像头

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meeting | KAMeeting * _Nonnull | 会议信息 |

## CLASS
### KAMeeting
会议信息

```objective-c
@interface KAMeeting : NSObject
@property (nonatomic, copy) NSString * _Nonnull meetingID;	// 会议 ID
@property (nonatomic) enum KAMeetingType type;	// 会议类型
@property (nonatomic) BOOL isMicrophoneMuted;	// 麦克风是否禁用
@property (nonatomic) BOOL isCameraMuted;	// 摄像头是否禁用
- (nonnull instancetype)initWithMeetingID:(NSString * _Nonnull)meetingID type:(enum KAMeetingType)type isMicrophoneMuted:(BOOL)isMicrophoneMuted isCameraMuted:(BOOL)isCameraMuted OBJC_DESIGNATED_INITIALIZER;
- (nonnull instancetype)init SWIFT_UNAVAILABLE;
+ (nonnull instancetype)new SWIFT_UNAVAILABLE_MSG("-init is unavailable");
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| meetingID | NSString * _Nonnull | 会议 ID |
| type | enum KAMeetingType | 会议类型 |
| isMicrophoneMuted | BOOL | 麦克风是否禁用 |
| isCameraMuted | BOOL | 摄像头是否禁用 |

#### 方法列表
#### `- (nonnull instancetype)initWithMeetingID:(NSString * _Nonnull)meetingID type:(enum KAMeetingType)type isMicrophoneMuted:(BOOL)isMicrophoneMuted isCameraMuted:(BOOL)isCameraMuted`
会议信息构造函数

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| meetingID | NSString * _Nonnull | 会议 ID |
| type | enum KAMeetingType | 会议类型 |
| isMicrophoneMuted | BOOL | 麦克风是否禁用 |
| isCameraMuted | BOOL | 摄像头是否禁用 |

**返回值**：KAMeeting 实例

## EXTENSION
### KAAPI (SWIFT_EXTENSION(LKVideoChatExternal))

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKVideoChatExternal))
- (void)registerWithVideoChatDelegate:(id <KAVideoChatDelegate> _Nullable (^ _Nonnull)(void))videoChatDelegate cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column;
@end
```

#### 方法列表
#### `- (void)registerWithVideoChatDelegate:(id <KAVideoChatDelegate> _Nullable (^ _Nonnull)(void))videoChatDelegate cache:(BOOL)cache file:(NSString * _Nonnull)file function:(NSString * _Nonnull)function line:(NSInteger)line column:(NSInteger)column`
注册 `KAVideoChatDelegate` 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| videoChatDelegate | id <KAVideoChatDelegate> _Nullable (^ _Nonnull)(void) | `KAVideoChatDelegate` 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | NSString * _Nonnull | 注册代码所在文件 |
| function | NSString * _Nonnull | 注册代码所在函数 |
| line | NSInteger | 注册代码所在行 |
| column | NSInteger | 注册代码所在列 |

### _KAAPIWrapper (SWIFT_EXTENSION(LKVideoChatExternal))

```objective-c
@interface _KAAPIWrapper (SWIFT_EXTENSION(LKVideoChatExternal))
- (void)registerWithVideoChatDelegate:(id <KAVideoChatDelegate> _Nullable (^ _Nonnull)(void))videoChatDelegate cache:(BOOL)cache;
@end
```

#### 方法列表
#### `- (void)registerWithVideoChatDelegate:(id <KAVideoChatDelegate> _Nullable (^ _Nonnull)(void))videoChatDelegate cache:(BOOL)cache`
注册 `KAVideoChatDelegate` 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| videoChatDelegate | id <KAVideoChatDelegate> _Nullable (^ _Nonnull)(void) | `KAVideoChatDelegate` 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 `false` 时，每次调用协议方法都会重新初始化实例 |

## ENUM
### KAMeetingType
会议类型

```objective-c
typedef SWIFT_ENUM(NSInteger, KAMeetingType, open)
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| KAMeetingTypeCall | 1 | 语音 |
| KAMeetingTypeMeet | 2 | 视频 |
