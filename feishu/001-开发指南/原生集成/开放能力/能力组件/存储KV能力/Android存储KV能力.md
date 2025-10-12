---
title: "Android存储KV能力"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/storage-kv-capability/android-st
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745906654000
---
最后更新于 2025-04-29

# Android存储KV能力

|组件类型|最低飞书版本|生效基线|
|--|--|--|
|能力组件|5.22|2.0.2及以上版本|

## 组件说明
通过调用飞书的 KV 存储 API，开发者可以实现数据的读取、写入、更新和删除等操作。这样可以方便地管理和维护应用所需的数据，并确保数据的一致性和可用性。

## API 列表
### kv-api

#### Packages

| Name |
|---|
| com.ss.android.lark.kv |

/com.ss.android.lark.kv

### IKVStorageApi

interface IKVStorageApi

存储KV能力。

#### Functions

| Name | Summary |
|---|---|
| clear | abstract fun clear()<br>清空KV。 |
| contains | abstract fun contains(key: String): Boolean<br>获取KV中是否存在特定的键。 |
| getAll | abstract fun getAll(): Map&lt;String, out Any&gt;<br>获取KV中所有的键值对。 |
| getBoolean | abstract fun getBoolean(key: String, defValue: Boolean): Boolean<br>获取 boolean 类型数据。 |
| getFloat | abstract fun getFloat(key: String, defValue: Float): Float<br>获取 float 类型数据。 |
| getInt | abstract fun getInt(key: String, defValue: Int): Int<br>获取 int 类型数据。 |
| getLong | abstract fun getLong(key: String, defValue: Long): Long<br>获取 long 类型数据。 |
| getString | abstract fun getString(key: String, defValue: String): String<br>获取String类型数据。 |
| putBoolean | abstract fun putBoolean(key: String, value: Boolean)<br>存储 boolean 类型数据。 |
| putFloat | abstract fun putFloat(key: String, value: Float)<br>存储 float 类型数据。 |
| putInt | abstract fun putInt(key: String, value: Int)<br>存储 int 类型数据。 |
| putLong | abstract fun putLong(key: String, value: Long)<br>存储 long 类型数据。 |
| putString | abstract fun putString(key: String, value: String)<br>存储String类型数据。 |
| remove | abstract fun remove(key: String)<br>移除特定的键。 |

##### clear

abstract fun clear()

清空KV。

##### contains

abstract fun contains(key: String): Boolean

获取KV中是否存在特定的键。

###### Return

`key`对应的值是否存在。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |

##### getAll

abstract fun getAll(): Map&lt;String, out Any&gt;

获取KV中所有的键值对。

###### Return

KV中所有的键值对。

##### getBoolean

abstract fun getBoolean(key: String, defValue: Boolean): Boolean

获取 boolean 类型数据。

###### Return

`key`对应的值。如果不存在，则返回`defValue`。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| defValue | 默认值 |

##### getFloat

abstract fun getFloat(key: String, defValue: Float): Float

获取 float 类型数据。

###### Return

`key`对应的值。如果不存在，则返回`defValue`。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| defValue | 默认值 |

##### getInt

abstract fun getInt(key: String, defValue: Int): Int

获取 int 类型数据。

###### Return

`key`对应的值。如果不存在，则返回`defValue`。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| defValue | 默认值 |

##### getLong

abstract fun getLong(key: String, defValue: Long): Long

获取 long 类型数据。

###### Return

`key`对应的值。如果不存在，则返回`defValue`。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| defValue | 默认值 |

##### getString

abstract fun getString(key: String, defValue: String): String

获取String类型数据。

###### Return

`key`对应的值。如果不存在，则返回`defValue`。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| defValue | 默认值 |

##### putBoolean

abstract fun putBoolean(key: String, value: Boolean)

存储 boolean 类型数据。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| value | 值 |

##### putFloat

abstract fun putFloat(key: String, value: Float)

存储 float 类型数据。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| value | 值 |

##### putInt

abstract fun putInt(key: String, value: Int)

存储 int 类型数据。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| value | 值 |

##### putLong

abstract fun putLong(key: String, value: Long)

存储 long 类型数据。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| value | 值 |

##### putString

abstract fun putString(key: String, value: String)

存储String类型数据。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |
| value | 值 |

##### remove

abstract fun remove(key: String)

移除特定的键。

###### Parameters

| Name | Description |
|---|---|
| key | 键 |

/com.ss.android.lark.kv

### KVStorageImpl

annotation class KVStorageImpl

标记 IKVStorageApi 的实现类。 

仅供飞书侧使用

## 接入说明
通过原生集成工具，选择 2.0.2 以上基线，启用kv-api组件

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.0.1 |新功能：能力开放|
