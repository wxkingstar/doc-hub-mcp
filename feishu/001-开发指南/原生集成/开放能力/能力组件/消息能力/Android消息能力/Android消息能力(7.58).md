---
title: "Android消息能力(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/message-capabilities/message-api/android-message-capabilities-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android消息能力(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| message-api | ability 组件 | 1.1.6-release | 7.58.0 |

## 功能简介
通过该能力，能够调用飞书的部分消息能力，比如，转发文件到飞书消息、获取飞书消息中的资源文件

### 更新日志
- 新增 `@TrimisScope(ScopeType.USER)` 注解，明确接口作用域为 USER
- 新增 `downloadResource` 方法，支持下载资源文件到本地
- `getMessageResource` 方法参数由 `ActionMessage` 改为 `List<ActionMessage>`，支持批量获取资源信息

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.ka.message.api.IMessageApi
import com.ss.android.lark.onload_api.IOnloadUserModule

class OnloadModuleImpl : IOnloadUserModule {
    override fun loadUserModule(userSpiApi: ISpiApi?) {
        // 通过SPI获取消息能力接口
        val messageApi = userSpiApi?.getGlobalService(IMessageApi::class.java)

// 转发文件消息
        val fileMessage = Message(MessageType.FILE, FileMessageBody())
        messageApi?.forward(context, fileMessage)

// 获取消息资源信息
        val actionMessages = listOf(ActionMessage(...))
        messageApi?.getMessageResource(actionMessages, object : Callback<List<MessageInfo>> {
            override fun onSuccess(result: List<MessageInfo>) { }
            override fun onFail(code: Int, msg: String?) { }
        })

// 其他方法省略...
    }
}
```

## INTERFACE
### IMessageApi
通过该能力，能够调用飞书的部分消息能力，比如，转发文件到飞书消息、获取飞书消息中的资源文件

```kotlin
@Keep
@TrimisScope(ScopeType.USER)
interface IMessageApi {
    fun forward(context: Context, message: Message) // 转发消息到飞书，目前仅支持文件
    fun getMessageResource(actionMessages: List<ActionMessage>, callback: Callback<List<MessageInfo>>) // 获取消息资源信息
    fun downloadResource(messageInfo: MessageInfo, callback: Callback<Message>) // 下载资源文件
}
```

#### 方法列表
#### `forward(context: Context, message: Message)`
转发消息到飞书，目前仅支持文件

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| message | Message | 是 | 消息 |

#### `getMessageResource(actionMessages: List<ActionMessage>, callback: Callback<List<MessageInfo>>)`
获取消息资源信息

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| actionMessages | List<ActionMessage> | 是 | actionContext 中一组 message 数据 |
| callback | Callback<List<MessageInfo>> | 是 | 返回消息中包含的资源信息 |

#### `downloadResource(messageInfo: MessageInfo, callback: Callback<Message>)`
下载资源文件

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| messageInfo | MessageInfo | 是 | 资源信息 |
| callback | Callback<Message> | 是 | 下载完成回调 |

### Callback
获取数据的回调

```java
interface Callback<T> {
    void onSuccess(@NonNull T t) // 成功回调
    void onFail(int code, @Nullable String msg) // 失败回调
}
```

#### 方法列表
#### `onSuccess(t: T)`
成功回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| t | T | 是 | 数据 |

#### `onFail(code: Int, msg: String?)`
失败回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- |
| code | int | 是 | 错误码 |
| msg | String | 否 | 错误信息 |

## CLASS
### Message
消息

```java
class Message {
    @NonNull
    private final MessageType messageType
    @NonNull
    private final IMessageBody messageBody

Message(@NonNull MessageType messageType, @NonNull IMessageBody messageBody)

@NonNull
    MessageType getMessageType() // 获取消息类型

@NonNull
    IMessageBody getMessageBody() // 获取消息体
}
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| messageType | MessageType | 消息类型 |
| messageBody | IMessageBody | 消息体 |

### MessageInfo
消息资源信息

```java
class MessageInfo {
    private MessageInfo(Builder builder)

@Nullable
    String getKey() // 获取资源的唯一标识
    @NonNull
    String getMessageId() // 获取消息的唯一标识
    @Nullable
    String getChannelId() // 获取消息所在的 channelId
    @NonNull
    MessageType getType() // 获取消息类型
    @Nullable
    String getName() // 获取资源名称
    long getSize() // 获取资源大小
    @Nullable
    String getMime() // 获取资源的 mime
}
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| key | String | 资源的唯一标识 |
| messageId | String | 消息的唯一标识 |
| channelId | String | 消息所在的 channelId |
| type | MessageType | 消息类型 |
| name | String | 资源名称 |
| size | long | 资源大小 |
| mime | String | 资源的 mime 类型 |

### MessageInfo.Builder
MessageInfo 的构建器

```java
static class Builder {
    Builder key(String key)
    Builder messageId(@NonNull String messageId)
    Builder channelId(String channelId)
    Builder name(String name)
    Builder size(long size)
    Builder mime(String mime)
    Builder type(@NonNull MessageType messageType)
    MessageInfo build()
}
```

#### 方法列表
#### `key(key: String)`
设置资源的唯一标识

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 否 | 资源的唯一标识 |

#### `messageId(messageId: String)`
设置消息的唯一标识

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| messageId | String | 是 | 消息的唯一标识 |

#### `channelId(channelId: String)`
设置消息所在的 channelId

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| channelId | String | 否 | 消息所在的 channelId |

#### `name(name: String)`
设置资源名称

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| name | String | 否 | 资源名称 |

#### `size(size: long)`
设置资源大小

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| size | long | 否 | 资源大小 |

#### `mime(mime: String)`
设置资源的 mime 类型

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| mime | String | 否 | 资源的 mime 类型 |

#### `type(messageType: MessageType)`
设置消息类型

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| messageType | MessageType | 是 | 消息类型 |

#### `build()`
构建 MessageInfo 实例

**返回值**：MessageInfo 实例

### MessageBody
消息体

```java
class MessageBody implements IMessageBody {
    @Nullable
    Uri getUri() // 获取资源的 Uri
    void setUri(@Nullable Uri uri) // 设置资源的 Uri
}
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| uri | Uri | 资源的 Uri |

### FileMessageBody
文件消息体

```java
@Keep
final class FileMessageBody extends MessageBody {
}
```

## ENUM
### MessageType
消息类型

```java
enum MessageType {
    FILE,   // 文件
    IMAGE,  // 图片
    MEDIA   // 视频
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| FILE | 0 | 文件 |
| IMAGE | 1 | 图片 |
| MEDIA | 2 | 视频 |

## ANNOTATION
### MessageImpl
标记 IMessageApi 的实现类

**仅供飞书侧使用**

```java
@BasePlugin(IMessageApi.class)
@interface MessageImpl {
}
```
