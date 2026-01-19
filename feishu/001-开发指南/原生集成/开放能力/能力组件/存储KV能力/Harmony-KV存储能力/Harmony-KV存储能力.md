---
title: "Harmony KV存储能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/storage-kv-capability/harmony-kv-stroage-ability
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# alchemy_kvstorage_api - Harmony KV 存储能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_kvstorage_api | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
提供全局空间与用户空间下的键值对存储能力，支持多种基础数据类型及数组、Uint8Array 的持久化读写

### 更新日志
- 首次发布，提供全局与用户两套 KV 存储接口

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyGlobalKVStorage, IAlchemyUserKVStorage } from '@ohos/alchemy_kvstorage_api'

export class KARuntimeManager {
  private globalKV?: IAlchemyGlobalKVStorage
  private userKV?: IAlchemyUserKVStorage

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.globalKV = runtime.getAlchemyGlobalKVStorage()
    this.userKV = runtime.getAlchemyUserKVStorage()

// 全局空间写入
    this.globalKV?.put('theme', 'dark')
    const theme = this.globalKV?.get('theme', 'light')

// 用户空间写入
    this.userKV?.put('token', 'abc123')
    const token = this.userKV?.get('token')

// 其他方法省略...
  }
}
```

## INTERFACE
### IAlchemyGlobalKVStorage
全局空间下，存储 KV 能力

```ets
interface IAlchemyGlobalKVStorage {
  put<T extends AlchemyStoreType>(key: string, value?: T): void // 存储数据
  get<T extends AlchemyStoreType>(key: string, defaultValue?: T): T | undefined // 获取数据
  contains(key: string): boolean // 获取 KV 中是否存在特定的键
  remove(key: string): boolean // 移除特定的键
  flush(): Promise<void> // 将数据变更持久化
  getAllKeys(): Array<string> // 获取 KV 中所有的键值对
  erase(): void // 清空 KV
}
```

#### 方法列表
#### `put<T extends AlchemyStoreType>(key: string, value?: T): void`
存储数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | string | 是 | 键 |
| value | T | 否 | 值 |

#### `get<T extends AlchemyStoreType>(key: string, defaultValue?: T): T | undefined`
获取数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | string | 是 | 键 |
| defaultValue | T | 否 | 默认值 |

**返回值**：key 对应的值。如果不存在，则返回 defaultValue

#### `contains(key: string): boolean`
获取 KV 中是否存在特定的键

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | string | 是 | 键 |

**返回值**：key 对应的值是否存在

#### `remove(key: string): boolean`
移除特定的键

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | string | 是 | 键 |

**返回值**：是否移除成功

#### `flush(): Promise<void>`
将数据变更持久化，put 操作已自动调用 flush()，但显式调用可确保数据安全持久化

**返回值**：返回 Promise，在持久化操作完成时 resolve

#### `getAllKeys(): Array<string>`
获取 KV 中所有的键值对

**返回值**：KV 中所有的键值对

#### `erase(): void`
清空 KV

### IAlchemyUserKVStorage
用户空间下，存储 KV 能力

```ets
interface IAlchemyUserKVStorage {
  put<T extends AlchemyStoreType>(key: string, value?: T): void // 存储数据
  get<T extends AlchemyStoreType>(key: string, defaultValue?: T): T | undefined // 获取数据
  contains(key: string): boolean // 获取 KV 中是否存在特定的键
  remove(key: string): boolean // 移除特定的键
  flush(): Promise<void> // 将数据变更持久化
  getAllKeys(): Array<string> // 获取 KV 中所有的键值对
  erase(): void // 清空 KV
}
```

#### 方法列表
#### `put<T extends AlchemyStoreType>(key: string, value?: T): void`
存储数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | string | 是 | 键 |
| value | T | 否 | 值 |

#### `get<T extends AlchemyStoreType>(key: string, defaultValue?: T): T | undefined`
获取数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | string | 是 | 键 |
| defaultValue | T | 否 | 默认值 |

**返回值**：key 对应的值。如果不存在，则返回 defaultValue

#### `contains(key: string): boolean`
获取 KV 中是否存在特定的键

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | string | 是 | 键 |

**返回值**：key 对应的值是否存在

#### `remove(key: string): boolean`
移除特定的键

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| key | string | 是 | 键 |

**返回值**：是否移除成功

#### `flush(): Promise<void>`
将数据变更持久化，put 操作已自动调用 flush()，但显式调用可确保数据安全持久化

**返回值**：返回 Promise，在持久化操作完成时 resolve

#### `getAllKeys(): Array<string>`
获取 KV 中所有的键值对

**返回值**：KV 中所有的键值对

#### `erase(): void`
清空 KV

## TYPE
### AlchemyStoreType
KV 存储支持的值类型

```ets
type AlchemyStoreType = number | string | boolean | Array<number> | Array<string> | Array<boolean> | Uint8Array
```

## CONST
### ALCHEMY_REPO_DOMAIN
KV 存储仓库域名

```ets
const ALCHEMY_REPO_DOMAIN = "ALCHEMY"
```

| 常量名 | 类型 | 值 | 描述 |
| --- | --- | --- | --- |
| ALCHEMY_REPO_DOMAIN | string | "ALCHEMY" | KV 存储仓库域名 |

### ALCHEMY_GLOBAL_REPO_NAME
全局仓库名称

```ets
const ALCHEMY_GLOBAL_REPO_NAME = "GLOBAL_REPO"
```

| 常量名 | 类型 | 值 | 描述 |
| --- | --- | --- | --- |
| ALCHEMY_GLOBAL_REPO_NAME | string | "GLOBAL_REPO" | 全局仓库名称 |

### ALCHEMY_USER_REPO_NAME
用户仓库名称

```ets
const ALCHEMY_USER_REPO_NAME = "USER_REPO"
```

| 常量名 | 类型 | 值 | 描述 |
| --- | --- | --- | --- |
| ALCHEMY_USER_REPO_NAME | string | "USER_REPO" | 用户仓库名称 |
