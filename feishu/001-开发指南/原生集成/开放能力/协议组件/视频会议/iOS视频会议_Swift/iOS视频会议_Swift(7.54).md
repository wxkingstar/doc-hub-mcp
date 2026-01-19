---
title: "iOS视频会议_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/video-conference/ios-videochatexternal_swift/ios-videochatexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS视频会议_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKVideoChatExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
视频会议组件协议，用于注册自定义的视频会议事件回调函数

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKVideoChatExternal
import LKKABridge

class MyVideoChatImpl: KAVideoChatDelegate {
    func onStart(meeting: KAMeeting) {
        // 处理会议开始事件
    }

func onStop(meeting: KAMeeting) {
        // 处理会议结束事件
    }

func onFloatWindowStart(meeting: KAMeeting) {
        // 处理开启小窗事件
    }

// 其余方法省略...
}

let api = KAAPI(channel: "YOUR_CHANNEL")
api.register(videoChatDelegate: MyVideoChatImpl.init, cache: true)
```

## PROTOCOL
### KAVideoChatDelegate
视频会议组件协议，用于注册自定义的视频会议事件回调函数

```swift
protocol KAVideoChatDelegate {
    func onStart(meeting: KAMeeting)	// 会议开始
    func onStop(meeting: KAMeeting)	// 会议结束
    func onFloatWindowStart(meeting: KAMeeting)	// 开启小窗
    func onFloatWindowStop(meeting: KAMeeting)	// 关闭小窗
    func onShareDocumentStart(meeting: KAMeeting, isSharedByMe: Bool)	// 开启会议分享文档
    func onShareDocumentStop(meeting: KAMeeting, isSharedByMe: Bool)	// 关闭会议分享文档
    func onShareScreenStart(meeting: KAMeeting, isSharedByMe: Bool)	// 开启会议屏幕分享, 盒子投屏
    func onShareScreenStop(meeting: KAMeeting, isSharedByMe: Bool)	// 关闭会议屏幕分享, 盒子投屏
    func onShareWhiteBoardStart(meeting: KAMeeting, isSharedByMe: Bool)	// 开启会议分享白板
    func onShareWhiteBoardStop(meeting: KAMeeting, isSharedByMe: Bool)	// 关闭会议分享白板
    func onMicrophoneMuted(meeting: KAMeeting)	// 关闭麦克风
    func onMicrophoneUnmuted(meeting: KAMeeting)	// 开启麦克风
    func onCameraMuted(meeting: KAMeeting)	// 关闭摄像头
    func onCameraUnmuted(meeting: KAMeeting)	// 开启摄像头
}
```

#### 方法列表
#### `func onStart(meeting: KAMeeting)`
会议开始

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |

#### `func onStop(meeting: KAMeeting)`
会议结束

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |

#### `func onFloatWindowStart(meeting: KAMeeting)`
开启小窗

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |

#### `func onFloatWindowStop(meeting: KAMeeting)`
关闭小窗

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |

#### `func onShareDocumentStart(meeting: KAMeeting, isSharedByMe: Bool)`
开启会议分享文档

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |
| isSharedByMe | Bool | 是否由用户发起分享 | - |

#### `func onShareDocumentStop(meeting: KAMeeting, isSharedByMe: Bool)`
关闭会议分享文档

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |
| isSharedByMe | Bool | 是否由用户发起分享 | - |

#### `func onShareScreenStart(meeting: KAMeeting, isSharedByMe: Bool)`
开启会议屏幕分享, 盒子投屏

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |
| isSharedByMe | Bool | 是否由用户发起分享 | - |

#### `func onShareScreenStop(meeting: KAMeeting, isSharedByMe: Bool)`
关闭会议屏幕分享, 盒子投屏

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |
| isSharedByMe | Bool | 是否由用户发起分享 | - |

#### `func onShareWhiteBoardStart(meeting: KAMeeting, isSharedByMe: Bool)`
开启会议分享白板

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |
| isSharedByMe | Bool | 是否由用户发起分享 | - |

#### `func onShareWhiteBoardStop(meeting: KAMeeting, isSharedByMe: Bool)`
关闭会议分享白板

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |
| isSharedByMe | Bool | 是否由用户发起分享 | - |

#### `func onMicrophoneMuted(meeting: KAMeeting)`
关闭麦克风

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |

#### `func onMicrophoneUnmuted(meeting: KAMeeting)`
开启麦克风

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |

#### `func onCameraMuted(meeting: KAMeeting)`
关闭摄像头

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |

#### `func onCameraUnmuted(meeting: KAMeeting)`
开启摄像头

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meeting | KAMeeting | 会议信息 | - |

## CLASS
### KAMeeting
会议信息

```swift
class KAMeeting: NSObject {
    var meetingID: String	// 会议 ID
    var type: KAMeetingType	// 会议类型
    var isMicrophoneMuted: Bool	// 麦克风是否禁用
    var isCameraMuted: Bool	// 摄像头是否禁用

init(meetingID: String, type: KAMeetingType, isMicrophoneMuted: Bool, isCameraMuted: Bool)	// 会议信息构造函数
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meetingID | String | 会议 ID | - |
| type | KAMeetingType | 会议类型 | - |
| isMicrophoneMuted | Bool | 麦克风是否禁用 | - |
| isCameraMuted | Bool | 摄像头是否禁用 | - |

#### 方法列表
#### `init(meetingID: String, type: KAMeetingType, isMicrophoneMuted: Bool, isCameraMuted: Bool)`
会议信息构造函数

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| meetingID | String | 会议 ID | - |
| type | KAMeetingType | 会议类型 | - |
| isMicrophoneMuted | Bool | 麦克风是否禁用 | - |
| isCameraMuted | Bool | 摄像头是否禁用 | - |

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    func register(
        videoChatDelegate: @escaping () -> KAVideoChatDelegate?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )
}
```

#### 方法列表
#### `func register(videoChatDelegate: @escaping () -> KAVideoChatDelegate?, cache: Bool, file: String, function: String, line: Int, column: Int)`
注册`KAVideoChatDelegate`协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| videoChatDelegate | () -> KAVideoChatDelegate? | `KAVideoChatDelegate`协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

### _KAAPIWrapper

```swift
extension _KAAPIWrapper {
    func register(
        videoChatDelegate: @escaping () -> KAVideoChatDelegate?,
        cache: Bool
    )
}
```

#### 方法列表
#### `func register(videoChatDelegate: @escaping () -> KAVideoChatDelegate?, cache: Bool)`
注册`KAVideoChatDelegate`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| videoChatDelegate | () -> KAVideoChatDelegate? | `KAVideoChatDelegate`协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 | - |

## ENUM
### KAMeetingType
会议类型

```swift
enum KAMeetingType: Int
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| call | 1 | 语音 |
| meet | 2 | 视频 |
