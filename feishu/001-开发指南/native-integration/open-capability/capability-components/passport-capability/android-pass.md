<!--
title: Android Passport能力
id: 7275260403409616900
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/passport-capability/android-pass
updatedAt: 1745906655000
source: https://open.feishu.cn/document/native-integration/open-capability/capability-components/passport-capability/android-pass
-->
# Android Passport能力

|组件类型| 最低飞书版本 |生效基线|
|--|--------|--|
|能力组件| 5.22  |2.0.2及以上版本|


## 组件说明
通过该API能力，可以调用飞书passport部分能力，比如获取用户登录状态、did等。

## API 列表
### passport-api

#### Packages

| Name |
|---|
| com.ss.android.lark.ka.passport.api |





/com.ss.android.lark.ka.passport.api

### IPassportApi

interface IPassportApi

通过该API能力，可以调用飞书passport部分能力，比如获取用户登录状态、did等。

#### Types

| Name | Summary |
|---|---|
| Callback | interface Callback |
| GetDataCallback | interface GetDataCallback&lt;T&gt; |

#### Functions

| Name | Summary |
|---|---|
| checkLarkStatus | abstract fun checkLarkStatus(**@** **NonNull** callback: IPassportApi.Callback)<br>检查当前用户的登录状态 |
| getDeviceId | **@** **NonNull** <br>abstract fun getDeviceId(): String<br>获取设备唯一标识 由于合规等要求，设备唯一标识可能会发生变化，详情请查看API文档。 |
| getSid | **@** **NonNull** <br>abstract fun getSid(): String<br>获取用户session唯一标识 |
| isFeishuLogin | abstract fun isFeishuLogin(): Boolean<br>获取飞书是否登录 |
| logoutAllUser | abstract fun logoutAllUser(**@** **NonNull** scene: String, **@** **Nullable** callback: IPassportApi.GetDataCallback&lt;Boolean&gt;)<br>调用接口后，登出当前设备所有用户，详情查看API文档 |
| logoutFeishu | abstract fun logoutFeishu()<br>登出飞书 |
| switchTenant | abstract fun switchTenant(**@** **Nullable** domain: String, **@** **Nullable** callback: IPassportApi.GetDataCallback&lt;Boolean&gt;)<br>切换租户。 如果 domain 为空或者空字符串，会调用callback. |


##### checkLarkStatus

abstract fun checkLarkStatus(**@** **NonNull** callback: IPassportApi.Callback)

检查当前用户的登录状态

###### Parameters

| Name | Description |
|---|---|
| callback | 异步返回登录状态 |


##### getDeviceId

**@** **NonNull** 

abstract fun getDeviceId(): String

获取设备唯一标识 由于合规等要求，设备唯一标识可能会发生变化，详情请查看API文档。

###### Return

设备唯一标识。如果无可用值，会返回空字符串。


##### getSid

**@** **NonNull** 

abstract fun getSid(): String

获取用户session唯一标识

###### Return

用户session唯一标识。如果无可用值，会返回空字符串。


##### isFeishuLogin

abstract fun isFeishuLogin(): Boolean

获取飞书是否登录

###### Return

飞书是否登录


##### logoutAllUser

abstract fun logoutAllUser(**@** **NonNull** scene: String, **@** **Nullable** callback: IPassportApi.GetDataCallback&lt;Boolean&gt;)

调用接口后，登出当前设备所有用户，详情查看API文档

###### Parameters

| Name | Description |
|---|---|
| scene | 登出场景参数，由飞书Passport提供 |
| callback | 登出回调 |


##### logoutFeishu

abstract fun logoutFeishu()

登出飞书


##### switchTenant

abstract fun switchTenant(**@** **Nullable** domain: String, **@** **Nullable** callback: IPassportApi.GetDataCallback&lt;Boolean&gt;)

切换租户。 如果 domain 为空或者空字符串，会调用callback.onFail

###### Parameters

| Name | Description |
|---|---|
| domain | 租户域名 |
| callback | 切换回调 |


/com.ss.android.lark.ka.passport.api

### PassportImpl

annotation class PassportImpl


/com.ss.android.lark.ka.passport.api/IPassportApi

### Callback

interface Callback

#### Functions

| Name | Summary |
|---|---|
| onFail | abstract fun onFail(**@** **NonNull** msg: String)<br>调用失败 |
| onSuccess | abstract fun onSuccess(isValid: Boolean, **@** **NonNull** msg: String)<br>调用成功 |


##### onFail

abstract fun onFail(**@** **NonNull** msg: String)

调用失败

###### Parameters

| Name | Description |
|---|---|
| msg | 失败原因 |


##### onSuccess

abstract fun onSuccess(isValid: Boolean, **@** **NonNull** msg: String)

调用成功

###### Parameters

| Name | Description |
|---|---|
| isValid | 登录态是否有效 |
| msg | 额外说明。如果没有额外说明，为空字符串。 |


/com.ss.android.lark.ka.passport.api/IPassportApi

### GetDataCallback

interface GetDataCallback&lt;T&gt;

#### Functions

| Name | Summary |
|---|---|
| onFail | abstract fun onFail(**@** **NonNull** msg: String) |
| onSuccess | abstract fun onSuccess(**@** **NonNull** data: T) |


##### onFail

abstract fun onFail(**@** **NonNull** msg: String)


##### onSuccess

abstract fun onSuccess(**@** **NonNull** data: T)


## 接入说明
通过原生集成工具，选择 2.0.2 及以上基线，并启用 passport-api 组件

## 更新日志
| 版本号 | Release Note |
| --- | --- |
| 1.0.0-release | 新功能：能力开放 |
| 1.1.2-release | 新功能：增加切换租户能力API |
| 1.2.0-release | 新功能：增加获取飞书是否登录的API （从core-component-api迁移）；增加退出飞书登录的API （从core-component-api迁移） |（从core-component-api迁移）；增加退出飞书登录的API （从core-component-api迁移）

