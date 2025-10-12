<!--
title: iOS存储KV能力_Swift(7.18-7.31)
id: 7275260403409698820
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/storage-kv-capability/ios-storag
updatedAt: 1745895177000
source: https://open.feishu.cn/document/native-integration/open-capability/capability-components/storage-kv-capability/ios-storag
-->
# iOS存储KV能力_Swift(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKKeyValueExternal | 1.1.3 | 通过该组件，开发者可以调用飞书的 KV 存储 API，实现数据的读取、写入、更新和删除等操作。这样可以方便地管理和维护应用所需的数据，并确保数据的一致性和可用性可以调用飞书的页面跳转、路由能力 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```swift
import LKKeyValueExternal
import LKKABridge

let store = KAAPI(channel: /* channel_id */).kvstore
store?.has(...)
store?.set(...)
store?.getInt(...)
store?.clear(...)
...
```

## PROTOCOL

### KAKeyValueProtocol

KV 存储能力协议，用于调用 KVStorage 能力

```swift
public protocol KAKeyValueProtocol: AnyObject
```

#### Methods
#### `has(key:)`

判断 KVStorage 中 key 是否存在
- Returns: key 是否存在

```swift
func has(key: String) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |

#### `set(key:stringValue:)`

在 KVStorage 中存储字符串
- Returns: 存储是否成功

```swift
func set(key: String, stringValue: String) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |
| stringValue | 待存储的字符串值 |

#### `set(key:intValue:)`

在 KVStorage 中存储 Int 值
- Returns: 存储是否成功

```swift
func set(key: String, intValue: Int) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |
| intValue | 待存储的 Int 值 |

#### `set(key:floatValue:)`

在 KVStorage 中存储 Float 值
- Returns: 存储是否成功

```swift
func set(key: String, floatValue: Float) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |
| floatValue | 待存储的 Float 值 |

#### `set(key:doubleValue:)`

在 KVStorage 中存储 Double 值
- Returns: 存储是否成功

```swift
func set(key: String, doubleValue: Double) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |
| doubleValue | 待存储的 Double 值 |

#### `set(key:boolValue:)`

在 KVStorage 中存储布尔值
- Returns: 存储是否成功

```swift
func set(key: String, boolValue: Bool) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |
| boolValue | 待存储的布尔值 |

#### `set(key:dataValue:)`

在 KVStorage 中存储`Data`值
- Returns: 存储是否成功

```swift
func set(key: String, dataValue: Data) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |
| dataValue | 待存储的`Data`值 |

#### `getString(key:)`

获取  KVStorage 中存储的字符串
- Returns: 存储的字符串值

```swift
func getString(key: String) -> String
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |

#### `getInt(key:)`

获取  KVStorage 中存储的 Int 值
- Returns: 存储的 Int 值

```swift
func getInt(key: String) -> Int
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |

#### `getFloat(key:)`

获取  KVStorage 中存储的 Float 值
- Returns: 存储的 Float 值

```swift
func getFloat(key: String) -> Float
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |

#### `getDouble(key:)`

获取  KVStorage 中存储的 Double 值
- Returns: 存储的 Double 值

```swift
func getDouble(key: String) -> Double
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |

#### `getBool(key:)`

获取  KVStorage 中存储的布尔值
- Returns: 存储的布尔值

```swift
func getBool(key: String) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |

#### `getData(key:)`

获取  KVStorage 中存储的`Data`值
- Returns: 存储的`Data`值

```swift
func getData(key: String) -> Data
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |

#### `clear(key:)`

清除 KVStorage 中存储的值
- Returns: 清除操作是否成功

```swift
func clear(key: String) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| key | 存储标识 |

#### `clearAll()`

清除 KVStorage 中存储的所有值
- Returns: 清除操作是否成功

```swift
func clearAll() -> Bool
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `kvstore`

KVStorage 能力接口实例

```swift
@objc public var kvstore: KAKeyValueProtocol?
```
