---
title: "Android消息能力(7.1)"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/message-capabilities/android-message-capabilities
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android消息能力(7.1)

|组件类型| 最低飞书版本 |生效基线|
|--|--------|--|
|能力组件| 7.1   |2.4.5|

## 组件说明
通过该能力，能够调用飞书的部分消息能力，比如，转发文件到飞书消息、获取飞书消息中的资源文件

## API 列表
### message-api

#### Packages

| Name |
|---|
| com.ss.android.lark.ka.message.api |
| com.ss.android.lark.ka.message.api.callback |
| com.ss.android.lark.ka.message.api.model |

/com.ss.android.lark.ka.message.api

### IMessageApi

interface IMessageApi

通过该能力，能够调用飞书的部分消息能力，比如，转发文件到飞书消息、获取飞书消息中的资源文件

例子： [TestDownloadResource](https://github.com/larksuite/alchemy_app_demo/blob/main/alchemy_app_demo_android/message-action-api-impl/src/main/java/com/sample/android/alchemy/message/TestDownloadResource.kt)

#### Functions

| Name | Summary |
|---|---|
| downloadResource | abstract fun downloadResource(messageInfo: MessageInfo, callback: Callback&lt;Message&gt;)<br>下载资源文件 |
| forward | abstract fun forward(context: Context, message: Message)<br>转发消息到飞书，目前仅支持文件 |
| getMessageResource | abstract fun getMessageResource(actionMessages: List&lt;ActionMessage&gt;, callback: Callback&lt;List&lt;MessageInfo&gt;&gt;)<br>获取消息资源信息 |

##### downloadResource

abstract fun downloadResource(messageInfo: MessageInfo, callback: Callback&lt;Message&gt;)

下载资源文件

###### Parameters

| Name | Description |
|---|---|
| messageInfo | 资源信息 |
| callback | 下载完成回调 |

##### forward

abstract fun forward(context: Context, message: Message)

转发消息到飞书，目前仅支持文件

###### Parameters

| Name | Description |
|---|---|
| context | Context |
| message | 消息 |

##### getMessageResource

abstract fun getMessageResource(actionMessages: List&lt;ActionMessage&gt;, callback: Callback&lt;List&lt;MessageInfo&gt;&gt;)

获取消息资源信息

###### Parameters

| Name | Description |
|---|---|
| actionMessages | actionContext中一组message数据 |
| callback | 返回消息中包含的资源信息 |

/com.ss.android.lark.ka.message.api

### MessageImpl

annotation class MessageImpl

标记 IMessageApi 的实现类。

/com.ss.android.lark.ka.message.api.callback

### Callback

interface Callback&lt;T&gt;

获取数据的回调。

###### Parameters

| Name | Description |
|---|---|
| &lt;T&gt; | 回调参数类型 |

#### Functions

| Name | Summary |
|---|---|
| onFail | abstract fun onFail(code: Int, **@** **Nullable** msg: String)<br>失败回调。 |
| onSuccess | abstract fun onSuccess(**@** **NonNull** t: T)<br>成功回调。 |

##### onFail

abstract fun onFail(code: Int, **@** **Nullable** msg: String)

失败回调。

###### Parameters

| Name | Description |
|---|---|
| code | 错误码。 |
| msg | 错误信息。 |

##### onSuccess

abstract fun onSuccess(**@** **NonNull** t: T)

成功回调。

###### Parameters

| Name | Description |
|---|---|
| t | 数据。 |

/com.ss.android.lark.ka.message.api.model

### FileMessageBody

class FileMessageBody : MessageBody

文件消息体。

#### Constructors

- 
   constructor()

#### Properties

| Name | Summary |
|---|---|
| uri | **@** **Nullable** <br>**@get:** **Nullable** <br>open var uri: Uri |

##### FileMessageBody

constructor()

/com.ss.android.lark.ka.message.api.model

### IMessageBody

interface IMessageBody

消息体。

/com.ss.android.lark.ka.message.api.model

### Message

open class Message

消息。

#### Constructors

- 
   constructor(**@** **NonNull** messageType: MessageType, **@** **NonNull** messageBody: IMessageBody)

#### Properties

| Name | Summary |
|---|---|
| messageBody | **@** **NonNull** <br>**@get:** **NonNull** <br>val messageBody: IMessageBody |
| messageType | **@** **NonNull** <br>**@get:** **NonNull** <br>val messageType: MessageType |

##### Message

constructor(**@** **NonNull** messageType: MessageType, **@** **NonNull** messageBody: IMessageBody)

/com.ss.android.lark.ka.message.api.model

### MessageInfo

open class MessageInfo

#### Types

| Name | Summary |
|---|---|
| Builder | class Builder |

#### Properties

| Name | Summary |
|---|---|
| channelId | **@** **Nullable** <br>**@get:** **Nullable** <br>open val channelId: String |
| key | **@** **Nullable** <br>**@get:** **Nullable** <br>open val key: String |
| messageId | **@** **NonNull** <br>**@get:** **NonNull** <br>val messageId: String |
| mime | **@** **Nullable** <br>**@get:** **Nullable** <br>open val mime: String |
| name | **@** **Nullable** <br>**@get:** **Nullable** <br>open val name: String |
| size | val size: Long |
| type | **@** **NonNull** <br>**@get:** **NonNull** <br>val type: MessageType |

/com.ss.android.lark.ka.message.api.model

### MessageType

enum MessageType

消息类型。

#### Entries

| Name | Description |
|---|---|
| FILE | 文件 |
| IMAGE | 图片 |
| MEDIA | 视频 |

/com.ss.android.lark.ka.message.api.model/MessageInfo

### Builder

class Builder

#### Constructors

- 
   constructor()

#### Functions

| Name | Summary |
|---|---|
| build | open fun build(): MessageInfo |
| channelId | open fun channelId(channelId: String): MessageInfo.Builder |
| key | open fun key(key: String): MessageInfo.Builder |
| messageId | open fun messageId(**@** **NonNull** messageId: String): MessageInfo.Builder |
| mime | open fun mime(mime: String): MessageInfo.Builder |
| name | open fun name(name: String): MessageInfo.Builder |
| size | open fun size(size: Long): MessageInfo.Builder |
| type | open fun type(**@** **NonNull** messageType: MessageType): MessageInfo.Builder |

##### Builder

constructor()

## 接入说明
通过原生集成工具，选择 2.4.5 及以上基线，并启用message-api组件

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.0.1 |新功能：能力开放|
