---
title: "iOS视频会议_OC(7.18-7.31)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/video-conference/ios-videochatexternal_oc/ios-videochatexternal_oc-718
---
最后更新于 2025-04-29

# iOS视频会议_OC(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKVideoChatExternal | 1.1.3 | 该组件提供集成飞书视频会议组件API，开发者可以按需监听视频会议状态变更的时机，注册自定义的行为；飞书视频会议状态发生变化时，将执行开发者注入的功能 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKKABridge; // 引入 KAAPI
@import LKVideoChatExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKVideoChatExternalRegistry: NSObject

@end

@implementation LKVideoChatExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [api registerWithVideoChatDelegate:^id<KAVideoChatDelegate> {
            return [[LKVideoChatExternalIMP alloc] init];
        } cache:YES];
}

@end

/// `KAVideoChatDelegate`协议实现类
@interface LKVideoChatExternalIMP : NSObject<KAVideoChatDelegate>
...
@end

@implementation LKVideoChatExternalIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKVideoChatExternal)

`#include <interface_LKVideoChatExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithVideoChatDelegate:cache:**(void videoChatDelegate, BOOL cache) |

### **function registerWithVideoChatDelegate:cache:**

注册`KAVideoChatDelegate`协议实例，OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithVideoChatDelegate:cache:(
    void videoChatDelegate,
    BOOL cache
)
```

**Parameters**: 

* **videoChatDelegate** `KAVideoChatDelegate`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 

-------------------------------

## KAAPI(SWIFT_EXTENSIONLKVideoChatExternal)

`#include <interface_LKVideoChatExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithVideoChatDelegate:cache:file:function:line:column:**(void videoChatDelegate, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |

### **function registerWithVideoChatDelegate:cache:file:function:line:column:**

注册`KAVideoChatDelegate`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithVideoChatDelegate:cache:file:function:line:column:(
    void videoChatDelegate,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```

**Parameters**: 

* **videoChatDelegate** `KAVideoChatDelegate`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 

-------------------------------

## KAMeeting

会议信息 
`#include <interface_LKVideoChatExternal-Swift.h>`

Inherits from NSObject

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **initWithMeetingID:type:isMicrophoneMuted:isCameraMuted:**(NSString *_Nonnull meetingID, enum KAMeetingType type, BOOL isMicrophoneMuted, BOOL OBJC_DESIGNATED_INITIALIZER) |
| virtual nonnull instancetype | **SWIFT_UNAVAILABLE**() |
| virtual "-init is unavailable" | **SWIFT_UNAVAILABLE_MSG**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nonnull | **meetingID** <br>会议 ID  |
| enum KAMeetingType | **type** <br>会议类型  |
| BOOL | **isMicrophoneMuted** <br>麦克风是否禁用  |
| BOOL | **isCameraMuted** <br>摄像头是否禁用  |

### **function initWithMeetingID:type:isMicrophoneMuted:isCameraMuted:**

会议信息构造函数 

```cpp
virtual nonnull instancetype initWithMeetingID:type:isMicrophoneMuted:isCameraMuted:(
    NSString *_Nonnull meetingID,
    enum KAMeetingType type,
    BOOL isMicrophoneMuted,
    BOOL OBJC_DESIGNATED_INITIALIZER
)
```

**Parameters**: 

* **meetingID** 会议 ID
  * **type** 会议类型
  * **isMicrophoneMuted** 麦克风是否禁用
  * **isCameraMuted** 摄像头是否禁用 

### **function SWIFT_UNAVAILABLE**

```cpp
virtual nonnull instancetype SWIFT_UNAVAILABLE()
```

### **function SWIFT_UNAVAILABLE_MSG**

```cpp
static virtual "-init is unavailable" SWIFT_UNAVAILABLE_MSG()
```

### **property meetingID**

会议 ID 
```cpp
NSString *_Nonnull meetingID;
```

### **property type**

会议类型 
```cpp
enum KAMeetingType type;
```

### **property isMicrophoneMuted**

麦克风是否禁用 
```cpp
BOOL isMicrophoneMuted;
```

### **property isCameraMuted**

摄像头是否禁用 
```cpp
BOOL isCameraMuted;
```

-------------------------------

## KAVideoChatDelegate

视频会议组件协议，用于注册自定义的视频会议事件回调函数 
`#include <interface_LKVideoChatExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **onStartWithMeeting:**(KAMeeting *_Nonnull meeting) |
| virtual void | **onStopWithMeeting:**(KAMeeting *_Nonnull meeting) |
| virtual void | **onFloatWindowStartWithMeeting:**(KAMeeting *_Nonnull meeting) |
| virtual void | **onFloatWindowStopWithMeeting:**(KAMeeting *_Nonnull meeting) |
| virtual void | **onShareDocumentStartWithMeeting:isSharedByMe:**(KAMeeting *_Nonnull meeting, BOOL isSharedByMe) |
| virtual void | **onShareDocumentStopWithMeeting:isSharedByMe:**(KAMeeting *_Nonnull meeting, BOOL isSharedByMe) |
| virtual void | **onShareScreenStartWithMeeting:isSharedByMe:**(KAMeeting *_Nonnull meeting, BOOL isSharedByMe) |
| virtual void | **onShareScreenStopWithMeeting:isSharedByMe:**(KAMeeting *_Nonnull meeting, BOOL isSharedByMe) |
| virtual void | **onShareWhiteBoardStartWithMeeting:isSharedByMe:**(KAMeeting *_Nonnull meeting, BOOL isSharedByMe) |
| virtual void | **onShareWhiteBoardStopWithMeeting:isSharedByMe:**(KAMeeting *_Nonnull meeting, BOOL isSharedByMe) |
| virtual void | **onMicrophoneMutedWithMeeting:**(KAMeeting *_Nonnull meeting) |
| virtual void | **onMicrophoneUnmutedWithMeeting:**(KAMeeting *_Nonnull meeting) |
| virtual void | **onCameraMutedWithMeeting:**(KAMeeting *_Nonnull meeting) |
| virtual void | **onCameraUnmutedWithMeeting:**(KAMeeting *_Nonnull meeting) |

### **function onStartWithMeeting:**

会议开始 

```cpp
virtual void onStartWithMeeting:(
    KAMeeting *_Nonnull meeting
)
```

**Parameters**: 

* **meeting** 会议信息 

### **function onStopWithMeeting:**

会议结束 

```cpp
virtual void onStopWithMeeting:(
    KAMeeting *_Nonnull meeting
)
```

**Parameters**: 

* **meeting** 会议信息 

### **function onFloatWindowStartWithMeeting:**

开启小窗 

```cpp
virtual void onFloatWindowStartWithMeeting:(
    KAMeeting *_Nonnull meeting
)
```

**Parameters**: 

* **meeting** 会议信息 

### **function onFloatWindowStopWithMeeting:**

关闭小窗 

```cpp
virtual void onFloatWindowStopWithMeeting:(
    KAMeeting *_Nonnull meeting
)
```

**Parameters**: 

* **meeting** 会议信息 

### **function onShareDocumentStartWithMeeting:isSharedByMe:**

开启会议分享文档 

```cpp
virtual void onShareDocumentStartWithMeeting:isSharedByMe:(
    KAMeeting *_Nonnull meeting,
    BOOL isSharedByMe
)
```

**Parameters**: 

* **meeting** 会议信息
  * **isSharedByMe** 是否由用户发起分享 

### **function onShareDocumentStopWithMeeting:isSharedByMe:**

关闭会议分享文档 

```cpp
virtual void onShareDocumentStopWithMeeting:isSharedByMe:(
    KAMeeting *_Nonnull meeting,
    BOOL isSharedByMe
)
```

**Parameters**: 

* **meeting** 会议信息
  * **isSharedByMe** 是否由用户发起分享 

### **function onShareScreenStartWithMeeting:isSharedByMe:**

开启会议屏幕分享, 盒子投屏 

```cpp
virtual void onShareScreenStartWithMeeting:isSharedByMe:(
    KAMeeting *_Nonnull meeting,
    BOOL isSharedByMe
)
```

**Parameters**: 

* **meeting** 会议信息
  * **isSharedByMe** 是否由用户发起分享 

### **function onShareScreenStopWithMeeting:isSharedByMe:**

关闭会议屏幕分享, 盒子投屏 

```cpp
virtual void onShareScreenStopWithMeeting:isSharedByMe:(
    KAMeeting *_Nonnull meeting,
    BOOL isSharedByMe
)
```

**Parameters**: 

* **meeting** 会议信息
  * **isSharedByMe** 是否由用户发起分享 

### **function onShareWhiteBoardStartWithMeeting:isSharedByMe:**

开启会议分享白板 

```cpp
virtual void onShareWhiteBoardStartWithMeeting:isSharedByMe:(
    KAMeeting *_Nonnull meeting,
    BOOL isSharedByMe
)
```

**Parameters**: 

* **meeting** 会议信息
  * **isSharedByMe** 是否由用户发起分享 

### **function onShareWhiteBoardStopWithMeeting:isSharedByMe:**

关闭会议分享白板 

```cpp
virtual void onShareWhiteBoardStopWithMeeting:isSharedByMe:(
    KAMeeting *_Nonnull meeting,
    BOOL isSharedByMe
)
```

**Parameters**: 

* **meeting** 会议信息
  * **isSharedByMe** 是否由用户发起分享 

### **function onMicrophoneMutedWithMeeting:**

关闭麦克风 

```cpp
virtual void onMicrophoneMutedWithMeeting:(
    KAMeeting *_Nonnull meeting
)
```

**Parameters**: 

* **meeting** 会议信息 

### **function onMicrophoneUnmutedWithMeeting:**

开启麦克风 

```cpp
virtual void onMicrophoneUnmutedWithMeeting:(
    KAMeeting *_Nonnull meeting
)
```

**Parameters**: 

* **meeting** 会议信息 

### **function onCameraMutedWithMeeting:**

关闭摄像头 

```cpp
virtual void onCameraMutedWithMeeting:(
    KAMeeting *_Nonnull meeting
)
```

**Parameters**: 

* **meeting** 会议信息 

### **function onCameraUnmutedWithMeeting:**

开启摄像头 

```cpp
virtual void onCameraUnmutedWithMeeting:(
    KAMeeting *_Nonnull meeting
)
```

**Parameters**: 

* **meeting** 会议信息 

-------------------------------
