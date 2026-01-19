---
title: "Android 视频聊天（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/video-conference/android_video_conference/android_video_conference-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android 视频聊天（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| videochat-api | 协议组件 | 1.0.2-release | 7.58.0 |

## 功能简介
通过集成飞书视频会议组件 API，开发者可以按需监听视频会议状态变更的时机，注册自定义的行为；飞书视频会议状态发生变化时，将执行开发者注入的功能

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，明确接口作用域为全局  
- 投屏与白板共享相关回调新增 `isMeSharer` 参数，用于区分当前用户是否为共享者

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.videochat.IVideoChatApi
import com.ss.android.lark.onload_api.IOnloadGlobalModule

class OnloadModuleImpl : IOnloadGlobalModule {
    override fun loadGlobalModule(globalSpiApi: ISpiApi?) {
        // 通过 SPI 获取视频会议能力接口
        val videoChatApi = globalSpiApi?.getGlobalService(IVideoChatApi::class.java)

// 注册实现类（需自行实现 IVideoChatApi）
        // 例如：globalSpiApi?.registerGlobalService(IVideoChatApi::class.java, YourImpl())

// 其他方法省略...
    }
}
```

## INTERFACE
### IVideoChatApi
通过集成飞书视频会议组件 API，开发者可以按需监听视频会议状态变更的时机，注册自定义的行为；飞书视频会议状态发生变化时，将执行开发者注入的功能  
**注意在一些版本上，onXXStart、onXXStop、onMute、onUnmuted 这些方法会在任何一个状态变化时回调，而不是只有在回调名称对应的状态变化时回调**  
例如，当麦克风打开时，除了回调 `onMicrophoneUnmuted`，还会根据摄像头的状态回调 `onCameraMuted` 或者 `onCameraUnmuted`

```kotlin
@TrimisScope(ScopeType.GLOBAL)
interface IVideoChatApi {
    fun onStart(id: String, type: Type)                              // 会议开始时回调
    fun onStop(id: String, type: Type)                               // 会议结束时回调
    fun onFloatWindowStart(id: String, type: Type)                   // 会议进入悬浮小窗模式时回调
    fun onFloatWindowStop(id: String, type: Type)                    // 会议退出悬浮小窗模式时回调
    fun onShareDocumentStart(id: String, type: Type)                 // 会议开始共享文档时回调
    fun onShareDocumentStop(id: String, type: Type)                // 会议结束共享文档时回调
    fun onShareScreenStart(id: String, type: Type, isMeSharer: Boolean)   // 会议开始投屏时回调
    fun onShareScreenStop(id: String, type: Type, isMeSharer: Boolean)    // 会议结束投屏时回调
    fun onShareWhiteBoardStart(id: String, type: Type, isMeSharer: Boolean) // 会议开始共享白板时回调
    fun onShareWhiteBoardStop(id: String, type: Type, isMeSharer: Boolean) // 会议结束共享白板时回调
    fun onMicrophoneMuted(id: String, type: Type)                    // 会议关闭麦克风时回调
    fun onMicrophoneUnmuted(id: String, type: Type)                  // 会议打开麦克风时回调
    fun onCameraMuted(id: String, type: Type)                        // 会议关闭摄像头时回调
    fun onCameraUnmuted(id: String, type: Type)                      // 会议打开摄像头时回调
}
```

#### 方法列表
#### `onStart(id: String, type: Type)`
会议开始时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

#### `onStop(id: String, type: Type)`
会议结束时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

#### `onFloatWindowStart(id: String, type: Type)`
会议进入悬浮小窗模式时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

#### `onFloatWindowStop(id: String, type: Type)`
会议退出悬浮小窗模式时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

#### `onShareDocumentStart(id: String, type: Type)`
会议开始共享文档时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

#### `onShareDocumentStop(id: String, type: Type)`
会议结束共享文档时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

#### `onShareScreenStart(id: String, type: Type, isMeSharer: Boolean)`
会议开始投屏时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |
| isMeSharer | Boolean | 是 | 是否是当前用户共享 |

#### `onShareScreenStop(id: String, type: Type, isMeSharer: Boolean)`
会议结束投屏时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |
| isMeSharer | Boolean | 是 | 是否是当前用户共享 |

#### `onShareWhiteBoardStart(id: String, type: Type, isMeSharer: Boolean)`
会议开始共享白板时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |
| isMeSharer | Boolean | 是 | 是否是当前用户共享 |

#### `onShareWhiteBoardStop(id: String, type: Type, isMeSharer: Boolean)`
会议结束共享白板时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |
| isMeSharer | Boolean | 是 | 是否是当前用户共享 |

#### `onMicrophoneMuted(id: String, type: Type)`
会议关闭麦克风时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

#### `onMicrophoneUnmuted(id: String, type: Type)`
会议打开麦克风时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

#### `onCameraMuted(id: String, type: Type)`
会议关闭摄像头时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

#### `onCameraUnmuted(id: String, type: Type)`
会议打开摄像头时回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | String | 是 | 会议 id |
| type | Type | 是 | 会议类型 |

## ENUM
### Type
会议类型

```kotlin
enum class Type(val type: Int) {
    UNKNOWN(0),   // 未知
    CALL(1),      // 电话会议
    MEET(2)       // 视频会议
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| UNKNOWN | 0 | 未知 |
| CALL | 1 | 电话会议 |
| MEET | 2 | 视频会议 |

## ANNOTATION
### VideoChatImpl
标记 IVideoChatApi 的实现类

```java
@BasePlugin(value = IVideoChatApi.class)
@interface VideoChatImpl {
}
```
