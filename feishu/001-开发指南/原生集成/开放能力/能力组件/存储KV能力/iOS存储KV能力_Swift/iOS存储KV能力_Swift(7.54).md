---
title: "iOS存储KV能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/storage-kv-capability/ios-storage-kv-capability_swift/ios-storage-kv-capability_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS存储KV能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKKeyValueExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供键值存储能力，支持字符串、数值、布尔值及二进制数据的持久化读写

### 更新日志
- 首次发布，提供完整的 KV 存储协议与 KAAPI 扩展

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKKeyValueExternal
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
let kv = api.kvstore

// 写入示例
kv?.set(key: "user_name", stringValue: "Alice")
kv?.set(key: "user_age", intValue: 25)
kv?.set(key: "is_vip", boolValue: true)
// ... 其余写入方法省略

// 读取示例
let name = kv?.getString(key: "user_name")
let age = kv?.getInt(key: "user_age")
let vip = kv?.getBool(key: "is_vip")
// ... 其余读取方法省略
```

## PROTOCOL
### KAKeyValueProtocol
KV 存储能力协议，用于调用 KVStorage 能力

```swift
protocol KAKeyValueProtocol: AnyObject {
    func has(key: String) -> Bool	// 判断 KVStorage 中 key 是否存在
    func set(key: String, stringValue: String) -> Bool	// 在 KVStorage 中存储字符串
    func set(key: String, intValue: Int) -> Bool	// 在 KVStorage 中存储 Int 值
    func set(key: String, floatValue: Float) -> Bool	// 在 KVStorage 中存储 Float 值
    func set(key: String, doubleValue: Double) -> Bool	// 在 KVStorage 中存储 Double 值
    func set(key: String, boolValue: Bool) -> Bool	// 在 KVStorage 中存储布尔值
    func set(key: String, dataValue: Data) -> Bool	// 在 KVStorage 中存储`Data`值
    func getString(key: String) -> String	// 获取 KVStorage 中存储的字符串
    func getInt(key: String) -> Int	// 获取 KVStorage 中存储的 Int 值
    func getFloat(key: String) -> Float	// 获取 KVStorage 中存储的 Float 值
    func getDouble(key: String) -> Double	// 获取 KVStorage 中存储的 Double 值
    func getBool(key: String) -> Bool	// 获取 KVStorage 中存储的布尔值
    func getData(key: String) -> Data	// 获取 KVStorage 中存储的`Data`值
    func clear(key: String) -> Bool	// 清除 KVStorage 中存储的值
    func clearAll() -> Bool	// 清除 KVStorage 中存储的所有值
}
```

#### 方法列表
#### `func has(key: String) -> Bool`
判断 KVStorage 中 key 是否存在

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |

**返回值**：key 是否存在

#### `func set(key: String, stringValue: String) -> Bool`
在 KVStorage 中存储字符串

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |
| stringValue | String | 待存储的字符串值 | - |

**返回值**：存储是否成功

#### `func set(key: String, intValue: Int) -> Bool`
在 KVStorage 中存储 Int 值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |
| intValue | Int | 待存储的 Int 值 | - |

**返回值**：存储是否成功

#### `func set(key: String, floatValue: Float) -> Bool`
在 KVStorage 中存储 Float 值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |
| floatValue | Float | 待存储的 Float 值 | - |

**返回值**：存储是否成功

#### `func set(key: String, doubleValue: Double) -> Bool`
在 KVStorage 中存储 Double 值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |
| doubleValue | Double | 待存储的 Double 值 | - |

**返回值**：存储是否成功

#### `func set(key: String, boolValue: Bool) -> Bool`
在 KVStorage 中存储布尔值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |
| boolValue | Bool | 待存储的布尔值 | - |

**返回值**：存储是否成功

#### `func set(key: String, dataValue: Data) -> Bool`
在 KVStorage 中存储`Data`值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |
| dataValue | Data | 待存储的`Data`值 | - |

**返回值**：存储是否成功

#### `func getString(key: String) -> String`
获取 KVStorage 中存储的字符串

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |

**返回值**：存储的字符串值

#### `func getInt(key: String) -> Int`
获取 KVStorage 中存储的 Int 值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |

**返回值**：存储的 Int 值

#### `func getFloat(key: String) -> Float`
获取 KVStorage 中存储的 Float 值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |

**返回值**：存储的 Float 值

#### `func getDouble(key: String) -> Double`
获取 KVStorage 中存储的 Double 值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |

**返回值**：存储的 Double 值

#### `func getBool(key: String) -> Bool`
获取 KVStorage 中存储的布尔值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |

**返回值**：存储的布尔值

#### `func getData(key: String) -> Data`
获取 KVStorage 中存储的`Data`值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |

**返回值**：存储的`Data`值

#### `func clear(key: String) -> Bool`
清除 KVStorage 中存储的值

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| key | String | 存储标识 | - |

**返回值**：清除操作是否成功

#### `func clearAll() -> Bool`
清除 KVStorage 中存储的所有值

**返回值**：清除操作是否成功

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var kvstore: KAKeyValueProtocol?	// KVStorage 能力接口实例
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| kvstore | KAKeyValueProtocol? | KVStorage 能力接口实例 | - |
