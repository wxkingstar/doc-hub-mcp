---
title: "Harmony 消息能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/message-capabilities/harmony-message-capability
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# message - 消息能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| message | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
提供 Harmony 平台的消息转发、获取消息信息及下载消息资源的能力

### 更新日志
- 新增 IMessageAPI 接口，支持消息转发、获取消息信息及下载消息资源功能
- 新增 ActionContext、ActionMessage、Message、MessageBody、MessageInfo 接口定义
- 新增 MessageType 枚举，定义消息类型

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IMessageAPI } from '@ohos/alchemy_message_api'

export class KARuntimeManager {
  private messageAPI?: IMessageAPI;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.messageAPI = runtime.getMessageAPI();

// 转发消息示例
    const message = { type: MessageType.IMAGE, body: { uri: 'https://example.com/image.jpg' } };
    this.messageAPI?.forward(12345, message);

// 获取消息信息示例
    const actionMessage = { id: 'msg123', type: MessageType.FILE };
    this.messageAPI?.getMessageResource(actionMessage).then(info => {
      console.info('Message info:', info);
    });

// 其他方法省略...
  }
}
```

## INTERFACE
### IMessageAPI
消息能力

```ets
interface IMessageAPI {
  forward(uniqueId: number, message: Message): void // 转发消息到聊天（该版本暂时只支持调出转发面板，不支持转发内容）
  getMessageResource(actionMessage: ActionMessage): Promise<MessageInfo | undefined> // 获取消息相关信息
  downloadResource(messageInfo: MessageInfo): Promise<Message | undefined> // 通过消息信息下载消息资源，失败时返回undefined（该版本暂不支持下载资源）
}
```

#### 方法列表
#### `forward(uniqueId: number, message: Message): void`
转发消息到聊天（该版本暂时只支持调出转发面板，不支持转发内容）

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| uniqueId | number | 是 | 当前组件的UniqueId，一般可由this.getUniqueId()获取 |
| message | Message | 是 | 消息内容 |

#### `getMessageResource(actionMessage: ActionMessage): Promise<MessageInfo | undefined>`
获取消息相关信息

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| actionMessage | ActionMessage | 是 | 消息类型和ID |

**返回值**：消息信息或undefined

#### `downloadResource(messageInfo: MessageInfo): Promise<Message | undefined>`
通过消息信息下载消息资源，失败时返回undefined（该版本暂不支持下载资源）

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| messageInfo | MessageInfo | 是 | 消息信息 |

**返回值**：消息内容或undefined

### ActionContext
动作上下文

```ets
interface ActionContext {
  message: ActionMessage
  uniqueId: number
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| message | ActionMessage | 消息信息 | - |
| uniqueId | number | 组件唯一标识 | - |

### ActionMessage
动作消息

```ets
interface ActionMessage {
  id: string
  type: MessageType
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| id | string | 消息ID | - |
| type | MessageType | 消息类型 | - |

### Message
消息

```ets
interface Message {
  readonly type: MessageType
  readonly body: MessageBody
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| type | MessageType | 消息类型 | - |
| body | MessageBody | 消息体 | - |

### MessageBody
消息体

```ets
interface MessageBody {
  readonly uri: string
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| uri | string | 资源URI | - |

### MessageInfo
消息信息

```ets
interface MessageInfo {
  readonly key: string
  readonly messageId: string
  readonly channelId: string | undefined
  readonly type: MessageType
  readonly name: string
  readonly size: number
  readonly mime: string | undefined
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | string | 消息键 | - |
| messageId | string | 消息ID | - |
| channelId | string | 频道ID | - |
| type | MessageType | 消息类型 | - |
| name | string | 消息名称 | - |
| size | number | 消息大小 | - |
| mime | string | MIME类型 | - |

## ENUM
### MessageType
消息类型

```ets
enum MessageType {
  FILE,
  IMAGE,
  MEDIA,
  OTHER,
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| FILE | 0 | 文件类型 |
| IMAGE | 1 | 图片类型 |
| MEDIA | 2 | 媒体类型 |
| OTHER | 3 | 其他类型 |
