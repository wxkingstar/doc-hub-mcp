---
title: "Android存储KV能力(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/storage-kv-capability/android-storage-kv-capability/android-storage-kv-capability-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android KV存储能力(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| kv-api | ability组件 | 1.0.7-release | 7.58.0 |

## 功能简介
通过调用飞书的 KV 存储 API，开发者可以实现数据的读取、写入、更新和删除等操作。这样可以方便地管理和维护应用所需的数据，并确保数据的一致性和可用性。

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，明确接口作用域为全局
- 新增 `KVStorageImpl` 注解，用于标记 `IKVStorageApi` 的实现类

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.alchemy.kv.IKVStorageApi
import com.ss.android.lark.onload_api.IOnloadGlobalModule

class OnloadModuleImpl : IOnloadGlobalModule {
    override fun loadGlobalModule(globalSpiApi: ISpiApi?) {
        // 通过SPI获取KV存储能力接口
        val kvApi = globalSpiApi?.getGlobalService(IKVStorageApi::class.java)

// 存储String类型数据
        kvApi?.putString("user_name", "Alice")

// 获取String类型数据
        val userName = kvApi?.getString("user_name", "default")

// 其他方法省略...
    }
}
```

## INTERFACE
### IKVStorageApi
存储KV能力

```java
@TrimisScope(ScopeType.GLOBAL)
interface IKVStorageApi {
    void putString(String key, String value); // 存储String类型数据
    String getString(String key, String defValue); // 获取String类型数据
    void putInt(String key, int value); // 存储 int 类型数据
    int getInt(String key, int defValue); // 获取 int 类型数据
    void putLong(String key, long value); // 存储 long 类型数据
    long getLong(String key, long defValue); // 获取 long 类型数据
    void putBoolean(String key, boolean value); // 存储 boolean 类型数据
    boolean getBoolean(String key, boolean defValue); // 获取 boolean 类型数据
    void putFloat(String key, float value); // 存储 float 类型数据
    float getFloat(String key, float defValue); // 获取 float 类型数据
    boolean contains(String key); // 获取KV中是否存在特定的键
    void remove(String key); // 移除特定的键
    Map<String, ?> getAll(); // 获取KV中所有的键值对
    void clear(); // 清空KV
}
```

#### 方法列表
#### `putString(String key, String value)`
存储String类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| value | String | 是 | 值 |

#### `getString(String key, String defValue)`
获取String类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| defValue | String | 是 | 默认值 |

**返回值**：`key`对应的值。如果不存在，则返回`defValue`

#### `putInt(String key, int value)`
存储 int 类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| value | int | 是 | 值 |

#### `getInt(String key, int defValue)`
获取 int 类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| defValue | int | 是 | 默认值 |

**返回值**：`key`对应的值。如果不存在，则返回`defValue`

#### `putLong(String key, long value)`
存储 long 类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| value | long | 是 | 值 |

#### `getLong(String key, long defValue)`
获取 long 类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| defValue | long | 是 | 默认值 |

**返回值**：`key`对应的值。如果不存在，则返回`defValue`

#### `putBoolean(String key, boolean value)`
存储 boolean 类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| value | boolean | 是 | 值 |

#### `getBoolean(String key, boolean defValue)`
获取 boolean 类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| defValue | boolean | 是 | 默认值 |

**返回值**：`key`对应的值。如果不存在，则返回`defValue`

#### `putFloat(String key, float value)`
存储 float 类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| value | float | 是 | 值 |

#### `getFloat(String key, float defValue)`
获取 float 类型数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |
| defValue | float | 是 | 默认值 |

**返回值**：`key`对应的值。如果不存在，则返回`defValue`

#### `contains(String key)`
获取KV中是否存在特定的键

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |

**返回值**：`key`对应的值是否存在

#### `remove(String key)`
移除特定的键

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | String | 是 | 键 |

#### `getAll()`
获取KV中所有的键值对

**返回值**：KV中所有的键值对

#### `clear()`
清空KV

## ANNOTATION
### KVStorageImpl
标记 `IKVStorageApi` 的实现类

**仅供飞书侧使用**

```java
@BasePlugin(value = IKVStorageApi.class)
@interface KVStorageImpl {
}
```
