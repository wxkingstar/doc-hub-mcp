---
title: "Harmony 视频会议(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/video-conference/harmony-videoconference/harmony-video-conference-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Harmony 视频会议(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_vc_api | 协议组件 | 1.0.0 | 7.58.0 |

## 功能简介
提供 Harmony 平台视频通话（Video Chat）相关事件回调能力，支持 1v1 与多人会议场景下的摄像头、麦克风、共享及小窗状态监听

### 更新日志
- 新增 IAlchemyVideoChat 接口，统一封装视频通话各类事件回调
- 新增 Type 枚举，区分 1v1 会议与多人会议

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyVideoChat, Type } from '@ohos/alchemy_vc_api'

export class MyAlchemyVideoChatImpl implements IAlchemyVideoChat {
  onCameraMuted(id: string, type: Type): void {
    console.info(`Camera muted in ${id}, type: ${type}`)
  }

onCameraUnmuted(id: string, type: Type): void {
    console.info(`Camera unmuted in ${id}, type: ${type}`)
  }

onFloatWindowStart(id: string, type: Type): void {
    console.info(`Float window start in ${id}, type: ${type}`)
  }

// 其他方法省略...
}
```

## INTERFACE
### IAlchemyVideoChat
视频通话事件回调接口，用于监听会议生命周期、媒体状态及共享行为

```ets
interface IAlchemyVideoChat {
  onCameraMuted(id: string, type: Type): void // 关闭摄像头
  onCameraUnmuted(id: string, type: Type): void // 打开摄像头
  onFloatWindowStart(id: string, type: Type): void // 进入VC小窗
  onFloatWindowStop(id: string, type: Type): void // 退出VC小窗
  onMicrophoneMuted(id: string, type: Type): void // 关闭麦克风
  onMicrophoneUnmuted(id: string, type: Type): void // 打开麦克风
  onShareDocumentStart(id: string, type: Type): void // 开始共享文档
  onShareDocumentStop(id: string, type: Type): void // 结束共享文档
  onShareScreenStart(id: string, type: Type, isMeSharer: boolean): void // 开始共享屏幕
  onShareScreenStop(id: string, type: Type, isMeSharer: boolean): void // 结束共享屏幕
  onShareWhiteBoardStart(id: string, type: Type, isMeSharer: boolean): void // 开始白板共享
  onShareWhiteBoardStop(id: string, type: Type, isMeSharer: boolean): void // 结束共享白板
  onStart(id: string, type: Type): void // 会议开始
  onStop(id: string, type: Type): void // 会议结束
}
```

#### 方法列表
#### `onCameraMuted(id: string, type: Type): void`
关闭摄像头

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

#### `onCameraUnmuted(id: string, type: Type): void`
打开摄像头

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

#### `onFloatWindowStart(id: string, type: Type): void`
进入VC小窗

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

#### `onFloatWindowStop(id: string, type: Type): void`
退出VC小窗

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

#### `onMicrophoneMuted(id: string, type: Type): void`
关闭麦克风

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

#### `onMicrophoneUnmuted(id: string, type: Type): void`
打开麦克风

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

#### `onShareDocumentStart(id: string, type: Type): void`
开始共享文档

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

#### `onShareDocumentStop(id: string, type: Type): void`
结束共享文档

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

#### `onShareScreenStart(id: string, type: Type, isMeSharer: boolean): void`
开始共享屏幕

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |
| isMeSharer | boolean | 是 | 共享者是否为自己 |

#### `onShareScreenStop(id: string, type: Type, isMeSharer: boolean): void`
结束共享屏幕

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |
| isMeSharer | boolean | 是 | 共享者是否为自己 |

#### `onShareWhiteBoardStart(id: string, type: Type, isMeSharer: boolean): void`
开始白板共享

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |
| isMeSharer | boolean | 是 | 共享者是否为自己 |

#### `onShareWhiteBoardStop(id: string, type: Type, isMeSharer: boolean): void`
结束共享白板

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |
| isMeSharer | boolean | 是 | 共享者是否为自己 |

#### `onStart(id: string, type: Type): void`
会议开始

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

#### `onStop(id: string, type: Type): void`
会议结束

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| id | string | 是 | 会议id |
| type | Type | 是 | 会议类型：1v1 or 多人 |

## ENUM
### Type
会议类型枚举，用于区分 1v1 会议与多人会议

```ets
enum Type {
  UNKNOWN,
  CALL, // 1v1会议
  MEET // 多人会议
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| UNKNOWN | 0 | 未知类型 |
| CALL | 1 | 1v1会议 |
| MEET | 2 | 多人会议 |
