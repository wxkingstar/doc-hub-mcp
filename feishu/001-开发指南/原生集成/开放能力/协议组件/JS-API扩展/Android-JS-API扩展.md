---
title: "Android JS API扩展"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/js-api-extension/android-js-api-ex
last_remote_update: 2025-07-02
last_remote_update_timestamp: 1751449528000
---
最后更新于 2025-07-02

# Android JS API扩展

| 组件类型 |最低飞书版本|生效基线|
|------|--|--|
| 能力组件 |5.22|2.0.2及以上版本|

## 组件说明
通过调用飞书开放平台的 OpenAPI 能力，开发者的原生应用可以调用飞书开放平台接口，实现更丰富和个性化的功能；通过实现对应的协议API，可以将自有的原生集成的业务逻辑、能力，暴露给基于飞书小程序、H5开发的页面，供其通过JsBridge调用。

## 流程概述
```
       ┌─┐                                                                                       
       ║"│                                                                                       
       └┬┘                                                                                       
       ┌┼┐                                                                                       
        │             ┌──────────┐                          ┌──────┐                             
       ┌┴┐            │JSAPI IMPL│                          │Feishu│                             
      User            └─────┬────┘                          └───┬──┘                             
        │                  User opens the app                   │                                
        │──────────────────────────────────────────────────────>│                                
        │                   │                                   │                                
        │                   │                                   │────┐                           
        │                   │                                   │    │ Initialize the application
        │                   │                                   │<───┘                           
        │                   │                                   │                                
        │                 Open H5/miniprogram                   │                                
        │──────────────────────────────────────────────────────>│                                
        │                   │                                   │                                
        │                   │                                   │────┐                           
        │                   │                                   │    │ Call invoke CustomAPI     
        │                   │                                   │<───┘                           
        │                   │                                   │                                
        │                   │getPluginName && getPluginApiNames │                                
        │                   │<──────────────────────────────────│                                
        │                   │                                   │                                
        │                   │ Return configuration information  │                                
        │                   │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─>│                                
        │                   │                                   │                                
        │                   │       Call handle function        │                                
        │                   │<──────────────────────────────────│                                
        │                   │                                   │                                
        │                   │     Return processing result      │                                
        │                   │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─>│                                
        │                   │                                   │                                
        │                   │                                   │────┐                           
        │                   │                                   │    │ Display processing result 
        │                   │                                   │<───┘                           
        │                   │                                   │                                
        │            User operation response event              │                                
        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │                                
      User            ┌─────┴────┐                          ┌───┴──┐                             
       ┌─┐            │JSAPI IMPL│                          │Feishu│                             
       ║"│            └──────────┘                          └──────┘                             
       └┬┘                                                                                       
       ┌┼┐                                                                                       
        │                                                                                        
       ┌┴┐                                                                                       

```

## API 列表
### native-app-extension-ability

#### Packages

| Name |
|---|
| com.ss.android.lark.extension_interfaces |
| com.ss.android.lark.extension_model |

/com.ss.android.lark.extension_interfaces

### ApiGateway

annotation class ApiGateway

/com.ss.android.lark.extension_interfaces

### ApiResult

enum ApiResult

API 调用结果枚举

#### Entries

| Name | Description |
|---|---|
| SUCCESS | 成功 |
| FAIL | 失败 |

/com.ss.android.lark.extension_interfaces

### IApiCallback

interface IApiCallback

Api 回调接口

#### Functions

| Name | Summary |
|---|---|
| onResult | abstract fun onResult(result: ApiResult, data: JSONObject) |

##### onResult

abstract fun onResult(result: ApiResult, data: JSONObject)

/com.ss.android.lark.extension_interfaces

### IApiGateway

interface IApiGateway

客户端 Open API 调用

#### Functions

| Name | Summary |
|---|---|
| invokeLarkApi | abstract fun invokeLarkApi(**@** **NonNull** context: Context, **@** **NonNull** event: NativeAppPluginEvent, **@** **Nullable** callback: IApiCallback)<br>调用飞书客户端 OpenAPI |

##### invokeLarkApi

abstract fun invokeLarkApi(**@** **NonNull** context: Context, **@** **NonNull** event: NativeAppPluginEvent, **@** **Nullable** callback: IApiCallback)

调用飞书客户端 OpenAPI

###### Parameters

| Name | Description |
|---|---|
| context | Context |
| event | 事件 |
| callback | 回调 |

/com.ss.android.lark.extension_interfaces

### INativeAppPlugin

interface INativeAppPlugin

自定义 JS API 实现类。

#### Functions

| Name | Summary |
|---|---|
| handleActivityResult | abstract fun handleActivityResult(requestCode: Int, resultCode: Int, data: Intent): Boolean<br>接收 onActivityResult |
| handleEvent | abstract fun handleEvent(**@** **NonNull** context: Context, **@** **NonNull** event: NativeAppPluginEvent, **@** **Nullable** callback: IApiCallback): NativeAppPluginResult<br>事件处理方法 |
| onCreate | abstract fun onCreate(pluginContext: INativeAppPluginContext)<br>plugin onCreate |
| release | abstract fun release()<br>release plugin |

##### handleActivityResult

abstract fun handleActivityResult(requestCode: Int, resultCode: Int, data: Intent): Boolean

接收 onActivityResult

##### handleEvent

abstract fun handleEvent(**@** **NonNull** context: Context, **@** **NonNull** event: NativeAppPluginEvent, **@** **Nullable** callback: IApiCallback): NativeAppPluginResult

事件处理方法

###### Return

result

###### Parameters

| Name | Description |
|---|---|
| context | context |
| event | event |
| callback | callback |

##### onCreate

abstract fun onCreate(pluginContext: INativeAppPluginContext)

plugin onCreate

##### release

abstract fun release()

release plugin

/com.ss.android.lark.extension_interfaces

### INativeAppPluginContext

interface INativeAppPluginContext

NativeAppPlugin 上下文

#### Functions

| Name | Summary |
|---|---|
| fireEvent | abstract fun fireEvent(**@** **NonNull** event: NativeAppCustomEvent)<br>向 JS 发送第三方 Event |

##### fireEvent

abstract fun fireEvent(**@** **NonNull** event: NativeAppCustomEvent)

向 JS 发送第三方 Event

/com.ss.android.lark.extension_interfaces

### INativeAppPluginFactory

interface INativeAppPluginFactory

自定义JS API的工厂。

#### Functions

| Name | Summary |
|---|---|
| createPlugin | **@** **NonNull** <br>abstract fun createPlugin(): INativeAppPlugin<br>返回 INativeAppPlugin 实例 |
| getPluginApiNames | abstract fun getPluginApiNames(): List&lt;String&gt;<br>返回Plugin支持的api name list |
| getPluginName | **@** **NonNull** <br>abstract fun getPluginName(): String<br>返回Plugin唯一的名字，用于后续的注册与调用 |

##### createPlugin

**@** **NonNull** 

abstract fun createPlugin(): INativeAppPlugin

返回 INativeAppPlugin 实例

###### Return

native app plugin

##### getPluginApiNames

abstract fun getPluginApiNames(): List&lt;String&gt;

返回Plugin支持的api name list

###### Return

api name list

##### getPluginName

**@** **NonNull** 

abstract fun getPluginName(): String

返回Plugin唯一的名字，用于后续的注册与调用

###### Return

插件名称。

/com.ss.android.lark.extension_interfaces

### NativeAppPlugin

annotation class NativeAppPlugin

/com.ss.android.lark.extension_interfaces

### NativeAppPluginFactory

annotation class NativeAppPluginFactory

/com.ss.android.lark.extension_model

### NativeAppCustomEvent

open class NativeAppCustomEvent : Parcelable

#### Constructors

- 
   constructor(eventName: String, params: JSONObject)

#### Properties

| Name | Summary |
|---|---|
| CONTENTS_FILE_DESCRIPTOR | val CONTENTS_FILE_DESCRIPTOR: Int = 1 |
| CREATOR | val CREATOR: Parcelable.Creator&lt;NativeAppCustomEvent&gt; |
| eventName | open var eventName: String |
| params | open var params: JSONObject |
| PARCELABLE_WRITE_RETURN_VALUE | val PARCELABLE_WRITE_RETURN_VALUE: Int = 1 |

#### Functions

| Name | Summary |
|---|---|
| describeContents | open fun describeContents(): Int |
| writeToParcel | open fun writeToParcel(parcel: Parcel, i: Int) |

##### NativeAppCustomEvent

constructor(eventName: String, params: JSONObject)

##### describeContents

open fun describeContents(): Int

##### writeToParcel

open fun writeToParcel(parcel: Parcel, i: Int)

/com.ss.android.lark.extension_model

### NativeAppPluginEvent

open class NativeAppPluginEvent : Parcelable

#### Constructors

- 
   constructor(**@** **NonNull** eventName: String, **@** **NonNull** appId: String, **@** **Nullable** params: JSONObject)

#### Properties

| Name | Summary |
|---|---|
| CONTENTS_FILE_DESCRIPTOR | val CONTENTS_FILE_DESCRIPTOR: Int = 1 |
| CREATOR | val CREATOR: Parcelable.Creator&lt;NativeAppPluginEvent&gt; |
| PARCELABLE_WRITE_RETURN_VALUE | val PARCELABLE_WRITE_RETURN_VALUE: Int = 1 |

#### Functions

| Name | Summary |
|---|---|
| describeContents | open fun describeContents(): Int |
| getAppId | **@** **Nullable** <br>open fun getAppId(): String |
| getEventName | **@** **NonNull** <br>open fun getEventName(): String |
| getParams | **@** **Nullable** <br>open fun getParams(): JSONObject |
| writeToParcel | open fun writeToParcel(dest: Parcel, flags: Int) |

##### NativeAppPluginEvent

constructor(**@** **NonNull** eventName: String, **@** **NonNull** appId: String, **@** **Nullable** params: JSONObject)

##### describeContents

open fun describeContents(): Int

##### getAppId

**@** **Nullable** 

open fun getAppId(): String

##### getEventName

**@** **NonNull** 

open fun getEventName(): String

##### getParams

**@** **Nullable** 

open fun getParams(): JSONObject

##### writeToParcel

open fun writeToParcel(dest: Parcel, flags: Int)

/com.ss.android.lark.extension_model

### NativeAppPluginResult

open class NativeAppPluginResult : Parcelable

Js API 调用结果。

#### Constructors

- 
   constructor(**@** **Nullable** result: JSONObject, errorCode: Int, **@** **Nullable** errorMsg: String)

初始化API调用结果。
- 
   constructor(**@** **Nullable** result: JSONObject)

#### Properties

| Name | Summary |
|---|---|
| CONTENTS_FILE_DESCRIPTOR | val CONTENTS_FILE_DESCRIPTOR: Int = 1 |
| CREATOR | val CREATOR: Parcelable.Creator&lt;NativeAppPluginResult&gt; |
| ERROR_CODE_NO_ERROR | val ERROR_CODE_NO_ERROR: Int = 0 |
| ERROR_MSG_NO_ERROR | val ERROR_MSG_NO_ERROR: String = &quot;ok&quot; |
| PARCELABLE_WRITE_RETURN_VALUE | val PARCELABLE_WRITE_RETURN_VALUE: Int = 1 |

#### Functions

| Name | Summary |
|---|---|
| describeContents | open fun describeContents(): Int |
| getErrorCode | open fun getErrorCode(): Int |
| getErrorMsg | open fun getErrorMsg(): String |
| getResult | open fun getResult(): JSONObject |
| writeToParcel | open fun writeToParcel(dest: Parcel, flags: Int) |

##### NativeAppPluginResult

constructor(**@** **Nullable** result: JSONObject, errorCode: Int, **@** **Nullable** errorMsg: String)

初始化API调用结果。

constructor(**@** **Nullable** result: JSONObject)

##### describeContents

open fun describeContents(): Int

##### getErrorCode

open fun getErrorCode(): Int

##### getErrorMsg

open fun getErrorMsg(): String

##### getResult

open fun getResult(): JSONObject

##### writeToParcel

open fun writeToParcel(dest: Parcel, flags: Int)

## 接入说明
通过原生集成工具，选择 2.0.2 及以上基线

### 目前已支持客户端调用的 API List
| API | 文档                                                                                                                         |
| --- |----------------------------------------------------------------------------------------------------------------------------|
| login | [login - 客户端文档 - 开发文档 - 飞书开放平台](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM)                                |
| getUserInfo | [getUserInfo - 客户端文档 - 开发文档 - 飞书开放平台](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM)                      |
| chooseImage | [chooseImage - 客户端文档 - 开发文档 - 飞书开放平台](https://open.feishu.cn/document/uYjL24iN/uMTMx4yMxEjLzETM)                      |
| previewImage | [previewImage - 客户端文档 - 开发文档 - 飞书开放平台](https://open.feishu.cn/document/uYjL24iN/uMDOx4yM4EjLzgTM)                     |
| openDocument | [openDocument - 客户端文档 - 开发文档 - 飞书开放平台](https://open.feishu.cn/document/uYjL24iN/ukTN24SO1YjL5UjN)                     |
| filePicker | [filePicker - 客户端文档 - 开发文档 - 飞书开放平台](https://open.feishu.cn/document/uYjL24iN/uETM04SMxQjLxEDN)                       |
| enterProfile | [enterProfile - 客户端文档 - 开发文档 - 飞书开放平台](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/user/enterprofile) |
| showToast | [showToast - 客户端文档 - 开发文档 - 飞书开放平台](https://open.feishu.cn/document/uYjL24iN/ugzMy4COzIjL4MjM)                                                                                      |

### 前端H5、小程序调用
```javascript
// H5应用或小程序调用飞书开放API（标准流程）
// H5应用或小程序调用自定义能力
tt.invokeCustomAPI({
    // xxx客户端扩展API Plugin中添加的ApiName
    name: "",
    args: {paramKe:paramValue},
    success(res) {

},
    fail(res) {

}
});
```

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 2.0.0 |新功能：功能开放|
