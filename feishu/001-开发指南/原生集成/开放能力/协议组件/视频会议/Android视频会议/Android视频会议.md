---
title: "Android视频会议"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/video-conference/android-video-conference
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android视频会议

| 组件类型 | 最低飞书版本 |生效基线|
|------|--------|--|
| 协议组件 | 7.1    |2.4.5及以上|

## 组件说明
通过集成飞书视频会议组件API，开发者可以按需监听视频会议状态变更的时机，注册自定义的行为；飞书视频会议状态发生变化时，将执行开发者注入的功能

## 流程概述
```                                                                                                                     
                      ┌─┐                                                              
                      ║"│                                                              
                      └┬┘                                                              
                      ┌┼┐                                                              
                       │             ┌─────────────┐          ┌─────────────┐          
                      ┌┴┐            │VideoChatImpl│          │Feishu Client│          
                     User            └──────┬──────┘          └──────┬──────┘          
                       │              enter meeting                 ┌┴┐                
                       │──────────────────────────────────────────> │ │                
                       │                    │                       └┬┘                
                       │                    │        onStart         │                 
                       │                    │<───────────────────────│                 
                       │                    │                        │                 
                       │                    │                        │                 
          ╔════════════╪═════╤══════════════╪════════════════════════╪════════════════╗
          ║ MEETING ACTIONS  │              │                        │                ║
          ╟──────────────────┘          start (xx)                  ┌┴┐               ║
          ║            │──────────────────────────────────────────> │ │               ║
          ║            │                    │                       │ │               ║
          ║      ╔═════╧════════════════════╧═══════════════════════╧═╧════╗          ║
          ║      ║float window, share document, etc.                      ░║          ║
          ║      ╚═════╤════════════════════╤══════════════════════════════╝          ║
          ║            │                    │       onXXStart        │                ║
          ║            │                    │<───────────────────────│                ║
          ║            │                    │                        │                ║
          ║            │                stop (xx)                   ┌┴┐               ║
          ║            │──────────────────────────────────────────> │ │               ║
          ║            │                    │                       └┬┘               ║
          ║            │                    │       onXXStop         │                ║
          ║            │                    │<───────────────────────│                ║
          ║            │                    │                        │                ║
          ║            │                mute (xx)                   ┌┴┐               ║
          ║            │──────────────────────────────────────────> │ │               ║
          ║            │                    │                       │ │               ║
          ║      ╔═════╧════════════════════╧═══════════════════════╧═╧════╗          ║
          ║      ║microphone or camera                                    ░║          ║
          ║      ╚═════╤════════════════════╤══════════════════════════════╝          ║
          ║            │                    │       onXXMuted        │                ║
          ║            │                    │<───────────────────────│                ║
          ║            │                    │                        │                ║
          ║            │               unmute (xx)                  ┌┴┐               ║
          ║            │──────────────────────────────────────────> │ │               ║
          ║            │                    │                       └┬┘               ║
          ║            │                    │      onXXUnmuted       │                ║
          ║            │                    │<───────────────────────│                ║
          ╚════════════╪════════════════════╪════════════════════════╪════════════════╝
                       │                    │                        │                 
                       │              leave meeting                 ┌┴┐                
                       │──────────────────────────────────────────> │ │                
                       │                    │                       └┬┘                
                       │                    │        onStop          │                 
                       │                    │<───────────────────────│                 
                     User            ┌──────┴──────┐          ┌──────┴──────┐          
                      ┌─┐            │VideoChatImpl│          │Feishu Client│          
                      ║"│            └─────────────┘          └─────────────┘          
                      └┬┘                                                              
                      ┌┼┐                                                              
                       │                                                               
                      ┌┴┐                                                              

```

## API 列表
### videochat-api

#### Packages

| Name |
|---|
| com.ss.android.lark.videochat |

/com.ss.android.lark.videochat

### IVideoChatApi

interface IVideoChatApi

通过集成飞书视频会议组件API，开发者可以按需监听视频会议状态变更的时机，注册自定义的行为； 飞书视频会议状态发生变化时，将执行开发者注入的功能。

注意在一些版本上，onXXStart、onXXStop、onMute、onUnmuted这些方法会在任何一个状态变化时回调， 而不是只有在回调名称对应的状态变化时回调。 例如，当麦克风打开时，除了回调onMicrophoneMuted, 还会根据摄像头的状态回调onCameraMuted或者onCameraUnmuted。

#### Types

| Name | Summary |
|---|---|
| Type | enum Type : Enum&lt;IVideoChatApi.Type&gt; <br>会议类型 |

#### Functions

| Name | Summary |
|---|---|
| onCameraMuted | abstract fun onCameraMuted(id: String, type: IVideoChatApi.Type)<br>会议关闭摄像头时回调 |
| onCameraUnmuted | abstract fun onCameraUnmuted(id: String, type: IVideoChatApi.Type)<br>会议打开摄像头时回调 |
| onFloatWindowStart | abstract fun onFloatWindowStart(id: String, type: IVideoChatApi.Type)<br>会议进入悬浮小窗模式时回调 |
| onFloatWindowStop | abstract fun onFloatWindowStop(id: String, type: IVideoChatApi.Type)<br>会议退出悬浮小窗模式时回调 |
| onMicrophoneMuted | abstract fun onMicrophoneMuted(id: String, type: IVideoChatApi.Type)<br>会议关闭麦克风时回调 |
| onMicrophoneUnmuted | abstract fun onMicrophoneUnmuted(id: String, type: IVideoChatApi.Type)<br>会议打开麦克风时回调 |
| onShareDocumentStart | abstract fun onShareDocumentStart(id: String, type: IVideoChatApi.Type)<br>会议开始共享文档时回调 |
| onShareDocumentStop | abstract fun onShareDocumentStop(id: String, type: IVideoChatApi.Type)<br>会议结束共享文档时回调 |
| onShareScreenStart | abstract fun onShareScreenStart(id: String, type: IVideoChatApi.Type, isMeSharer: Boolean)<br>会议开始投屏时回调 |
| onShareScreenStop | abstract fun onShareScreenStop(id: String, type: IVideoChatApi.Type, isMeSharer: Boolean)<br>会议结束投屏时回调 |
| onShareWhiteBoardStart | abstract fun onShareWhiteBoardStart(id: String, type: IVideoChatApi.Type, isMeSharer: Boolean)<br>会议开始共享白板时回调 |
| onShareWhiteBoardStop | abstract fun onShareWhiteBoardStop(id: String, type: IVideoChatApi.Type, isMeSharer: Boolean)<br>会议结束共享白板时回调 |
| onStart | abstract fun onStart(id: String, type: IVideoChatApi.Type)<br>会议开始时回调。 |
| onStop | abstract fun onStop(id: String, type: IVideoChatApi.Type)<br>会议结束时回调。 |

##### onCameraMuted

abstract fun onCameraMuted(id: String, type: IVideoChatApi.Type)

会议关闭摄像头时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onCameraUnmuted

abstract fun onCameraUnmuted(id: String, type: IVideoChatApi.Type)

会议打开摄像头时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onFloatWindowStart

abstract fun onFloatWindowStart(id: String, type: IVideoChatApi.Type)

会议进入悬浮小窗模式时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onFloatWindowStop

abstract fun onFloatWindowStop(id: String, type: IVideoChatApi.Type)

会议退出悬浮小窗模式时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onMicrophoneMuted

abstract fun onMicrophoneMuted(id: String, type: IVideoChatApi.Type)

会议关闭麦克风时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onMicrophoneUnmuted

abstract fun onMicrophoneUnmuted(id: String, type: IVideoChatApi.Type)

会议打开麦克风时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onShareDocumentStart

abstract fun onShareDocumentStart(id: String, type: IVideoChatApi.Type)

会议开始共享文档时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onShareDocumentStop

abstract fun onShareDocumentStop(id: String, type: IVideoChatApi.Type)

会议结束共享文档时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onShareScreenStart

abstract fun onShareScreenStart(id: String, type: IVideoChatApi.Type, isMeSharer: Boolean)

会议开始投屏时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onShareScreenStop

abstract fun onShareScreenStop(id: String, type: IVideoChatApi.Type, isMeSharer: Boolean)

会议结束投屏时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onShareWhiteBoardStart

abstract fun onShareWhiteBoardStart(id: String, type: IVideoChatApi.Type, isMeSharer: Boolean)

会议开始共享白板时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |
| isMeSharer | 是否是当前用户共享 |

##### onShareWhiteBoardStop

abstract fun onShareWhiteBoardStop(id: String, type: IVideoChatApi.Type, isMeSharer: Boolean)

会议结束共享白板时回调

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |
| isMeSharer | 是否是当前用户共享 |

##### onStart

abstract fun onStart(id: String, type: IVideoChatApi.Type)

会议开始时回调。

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

##### onStop

abstract fun onStop(id: String, type: IVideoChatApi.Type)

会议结束时回调。

###### Parameters

| Name | Description |
|---|---|
| id | 会议id |
| type | 会议类型 |

/com.ss.android.lark.videochat

### VideoChatImpl

annotation class VideoChatImpl

标记 IVideoChatApi 的实现类。

/com.ss.android.lark.videochat/IVideoChatApi

### Type

enum Type : Enum&lt;IVideoChatApi.Type&gt; 

会议类型

#### Entries

| Name | Description |
|---|---|
| UNKNOWN | 未知 |
| CALL | 电话会议 |
| MEET | 视频会议 |

#### Properties

| Name | Summary |
|---|---|
| name | val name: String |
| ordinal | val ordinal: Int |
| type | val type: Int |

## 接入说明
通过原生集成工具，选择 2.4.5 及以上基线，并启用 videochat-api 组件，并实现 IVideoChatApi

## 常见问题
接口中返回的会议id信息若在后续流程泄漏，可能造成会议被加入等信息泄露风险，建议开发者对于该id的日志打印等操作谨慎

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.0.0 |新功能：能力开放|
