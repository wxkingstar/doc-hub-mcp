---
title: "Android Logger能力（7.18）"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/logger-capability/android-logger-capability/android
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# Android Logger能力（7.18）

|组件类型| 最低飞书版本 |生效基线|
|--|--------|--|
|能力组件| 7.18   |从 core-component-api 迁移至 logger-api|

## 组件说明
通过调用飞书的打印日志 API，开发者可以指定日志的级别、内容和其他相关信息。此外，飞书还支持日志回捞功能，开发者可以通过相应的API检索和获取之前记录的日志信息。这样可以方便地进行日志分析、故障排查和性能优化等工作。

## API 列表
### logger-api

#### Packages

| Name |
|---|
| com.ss.android.lark.alchemy.logger |

### Package-level declarations

#### Types

| Name | Summary |
|---|---|
| ILoggerApi | interface ILoggerApi<br>日志打印能力。 |
| LoggerImpl | annotation class LoggerImpl<br>标记 ILoggerApi 的实现类。 **仅供飞书侧使用** |

/com.ss.android.lark.alchemy.logger

### ILoggerApi

interface ILoggerApi

日志打印能力。

#### Functions

| Name | Summary |
|---|---|
| d | abstract fun d(tag: String, msg: String)<br>打印 debug 日志。 **注意该级别的日志在Release包中可能被移除。** |
| e | abstract fun e(tag: String, msg: String, throwable: Throwable)<br>打印 error 日志。 |
| i | abstract fun i(tag: String, msg: String)<br>打印 info 日志。 |
| v | abstract fun v(tag: String, msg: String)<br>打印 verbose 日志。 **注意该级别的日志在Release包中可能被移除。** |
| w | abstract fun w(tag: String, msg: String)<br>打印 warn 日志。 |

/com.ss.android.lark.alchemy.logger/ILoggerApi

##### d

abstract fun d(tag: String, msg: String)

打印 debug 日志。 

**注意该级别的日志在Release包中可能被移除。**

###### Parameters

| Name | Description |
|---|---|
| tag | 日志标签。 |
| msg | 日志内容。 |

/com.ss.android.lark.alchemy.logger/ILoggerApi

##### e

abstract fun e(tag: String, msg: String, throwable: Throwable)

打印 error 日志。

###### Parameters

| Name | Description |
|---|---|
| tag | 日志标签。 |
| msg | 日志内容。 |
| throwable | 异常。可以为 `null`。 |

/com.ss.android.lark.alchemy.logger/ILoggerApi

##### i

abstract fun i(tag: String, msg: String)

打印 info 日志。

###### Parameters

| Name | Description |
|---|---|
| tag | 日志标签。 |
| msg | 日志内容。 |

/com.ss.android.lark.alchemy.logger/ILoggerApi

##### v

abstract fun v(tag: String, msg: String)

打印 verbose 日志。 

**注意该级别的日志在Release包中可能被移除。**

###### Parameters

| Name | Description |
|---|---|
| tag | 日志标签。 |
| msg | 日志内容。 |

/com.ss.android.lark.alchemy.logger/ILoggerApi

##### w

abstract fun w(tag: String, msg: String)

打印 warn 日志。

###### Parameters

| Name | Description |
|---|---|
| tag | 日志标签。 |
| msg | 日志内容。 |

/com.ss.android.lark.alchemy.logger

### LoggerImpl

annotation class LoggerImpl

标记 ILoggerApi 的实现类。 

**仅供飞书侧使用**

#### Functions

| Name | Summary |
|---|---|
| annotationType | abstract fun annotationType(): Class&lt;out Annotation&gt; |
| equals | abstract fun equals(p: Any): Boolean |
| hashCode | abstract fun hashCode(): Int |
| toString | abstract fun toString(): String |

## 接入说明
通过原生集成工具，选择 2.6.2及以上基线，并启用 logger-api 组件

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.0.1 |新功能：能力开放|
