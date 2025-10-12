---
title: "iOS视频会议_Swift(7.18-7.31)"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/video-conference/ios-video-conference
---
最后更新于 2025-04-29

# iOS视频会议_Swift(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKVideoChatExternal | 1.1.3 | 该组件提供集成飞书视频会议组件API，开发者可以按需监听视频会议状态变更的时机，注册自定义的行为；飞书视频会议状态发生变化时，将执行开发者注入的功能 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKVideoChatExternal
import LKKABridge

// 自定义的`KAVideoChatDelegate`实现类
class LKVideoChatExternalIMP: KAVideoChatDelegate {    
    func onStart(meeting: KAMeeting) { ... }
    func onStop(meeting: KAMeeting) { ... }
    func onFloatWindowStart(meeting: KAMeeting) { ... }
    func onFloatWindowStop(meeting: KAMeeting) { ... }
    func onShareDocumentStart(meeting: KAMeeting, isSharedByMe: Bool) { ... }
    func onShareDocumentStop(meeting: KAMeeting, isSharedByMe: Bool) { ... }
    func onShareScreenStart(meeting: KAMeeting, isSharedByMe: Bool) { ... }
    func onShareScreenStop(meeting: KAMeeting, isSharedByMe: Bool) { ... }
    func onShareWhiteBoardStart(meeting: KAMeeting, isSharedByMe: Bool) { ... }
    func onShareWhiteBoardStop(meeting: KAMeeting, isSharedByMe: Bool) { ... }
    func onMicrophoneMuted(meeting: KAMeeting) { ... }
    func onMicrophoneUnmuted(meeting: KAMeeting) { ... }
    func onCameraMuted(meeting: KAMeeting) { ... }
    func onCameraUnmuted(meeting: KAMeeting) { ... }
}

// 注册自定义的`KAVideoChatDelegate`实例
let api = KAAPI(channel: channel)
api.register(videoChatDelegate: LKVideoChatExternalIMP.init, cache: true)
```

## PROTOCOL

### KAVideoChatDelegate

视频会议组件协议，用于注册自定义的视频会议事件回调函数

```swift
public protocol KAVideoChatDelegate
```

#### Methods
#### `onStart(meeting:)`

会议开始

```swift
func onStart(meeting: KAMeeting)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |

#### `onStop(meeting:)`

会议结束

```swift
func onStop(meeting: KAMeeting)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |

#### `onFloatWindowStart(meeting:)`

开启小窗

```swift
func onFloatWindowStart(meeting: KAMeeting)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |

#### `onFloatWindowStop(meeting:)`

关闭小窗

```swift
func onFloatWindowStop(meeting: KAMeeting)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |

#### `onShareDocumentStart(meeting:isSharedByMe:)`

开启会议分享文档

```swift
func onShareDocumentStart(meeting: KAMeeting, isSharedByMe: Bool)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |
| isSharedByMe | 是否由用户发起分享 |

#### `onShareDocumentStop(meeting:isSharedByMe:)`

关闭会议分享文档

```swift
func onShareDocumentStop(meeting: KAMeeting, isSharedByMe: Bool)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |
| isSharedByMe | 是否由用户发起分享 |

#### `onShareScreenStart(meeting:isSharedByMe:)`

开启会议屏幕分享, 盒子投屏

```swift
func onShareScreenStart(meeting: KAMeeting, isSharedByMe: Bool)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |
| isSharedByMe | 是否由用户发起分享 |

#### `onShareScreenStop(meeting:isSharedByMe:)`

关闭会议屏幕分享, 盒子投屏

```swift
func onShareScreenStop(meeting: KAMeeting, isSharedByMe: Bool)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |
| isSharedByMe | 是否由用户发起分享 |

#### `onShareWhiteBoardStart(meeting:isSharedByMe:)`

开启会议分享白板

```swift
func onShareWhiteBoardStart(meeting: KAMeeting, isSharedByMe: Bool)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |
| isSharedByMe | 是否由用户发起分享 |

#### `onShareWhiteBoardStop(meeting:isSharedByMe:)`

关闭会议分享白板

```swift
func onShareWhiteBoardStop(meeting: KAMeeting, isSharedByMe: Bool)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |
| isSharedByMe | 是否由用户发起分享 |

#### `onMicrophoneMuted(meeting:)`

关闭麦克风

```swift
func onMicrophoneMuted(meeting: KAMeeting)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |

#### `onMicrophoneUnmuted(meeting:)`

开启麦克风

```swift
func onMicrophoneUnmuted(meeting: KAMeeting)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |

#### `onCameraMuted(meeting:)`

关闭摄像头

```swift
func onCameraMuted(meeting: KAMeeting)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |

#### `onCameraUnmuted(meeting:)`

开启摄像头

```swift
func onCameraUnmuted(meeting: KAMeeting)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meeting | 会议信息 |
## CLASS

### KAMeeting

会议信息

```swift
public class KAMeeting: NSObject
```

#### Properties
#### `meetingID`

会议 ID

```swift
public var meetingID: String
```

#### `type`

会议类型

```swift
public var type: KAMeetingType
```

#### `isMicrophoneMuted`

麦克风是否禁用

```swift
public var isMicrophoneMuted: Bool
```

#### `isCameraMuted`

摄像头是否禁用

```swift
public var isCameraMuted: Bool
```

#### Methods
#### `init(meetingID:type:isMicrophoneMuted:isCameraMuted:)`

会议信息构造函数

```swift
public init(meetingID: String, type: KAMeetingType, isMicrophoneMuted: Bool, isCameraMuted: Bool)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| meetingID | 会议 ID |
| type | 会议类型 |
| isMicrophoneMuted | 麦克风是否禁用 |
| isCameraMuted | 摄像头是否禁用 |
## ENUM

### KAMeetingType

会议类型

```swift
public enum KAMeetingType: Int
```

#### Cases
#### `call`

语音

```swift
case call = 1
```

#### `meet`

视频

```swift
case meet = 2
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(videoChatDelegate:cache:file:function:line:column:)`

注册`KAVideoChatDelegate`协议实例，由 Swift 代码调用

```swift
@objc public func register(
    videoChatDelegate: @escaping () -> KAVideoChatDelegate?,
    cache: Bool = false,
    file: String = #file,
    function: String = #function,
    line: Int = #line,
    column: Int = #column
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| videoChatDelegate | `KAVideoChatDelegate`协议实现类的初始化函数 |
| cache | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | 注册代码所在文件 |
| function | 注册代码所在函数 |
| line | 注册代码所在行 |
| column | 注册代码所在列 |
## EXTENSION

### _KAAPIWrapper
```swift
extension _KAAPIWrapper
```

#### Methods
#### `register(videoChatDelegate:cache:)`

注册`KAVideoChatDelegate`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

```swift
public func register(
    videoChatDelegate: @escaping () -> KAVideoChatDelegate?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| videoChatDelegate | `KAVideoChatDelegate`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |
