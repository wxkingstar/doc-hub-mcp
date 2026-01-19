---
title: "iOS组件通用注册表接口能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/kabridge/lkkabridge_swift/kabridge_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS组件通用注册表接口能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKKABridge | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
KA 对外 API 的入口，支持 Objective-C 的方法，需要在这个类上面扩展提供

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
```

## CLASS
### KAAPI
KA 对外 API 的入口，支持 Objective-C 的方法，需要在这个类上面扩展提供

```swift
class KAAPI: NSObject {
    init(channel: String)	// 指定初始化器
    var channelID: String { get }	// 只读属性，返回当前 channel
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| channelID | String | 只读属性，返回当前 channel | - |

#### 方法列表
#### `init(channel: String)`
指定初始化器

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| channel | String | 渠道标识 | - |

**返回值**：KAAPI 实例

### _KAAPIWrapper
内部包装器，用于记录调用位置信息

```swift
class _KAAPIWrapper: NSObject {
    var api: KAAPI	// 关联的 KAAPI 实例
    var file: String	// 调用文件名
    var function: String	// 调用函数名
    var line: Int	// 调用行号
    init(api: KAAPI, file: String, function: String, line: Int)	// 初始化方法
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| api | KAAPI | 关联的 KAAPI 实例 | - |
| file | String | 调用文件名 | - |
| function | String | 调用函数名 | - |
| line | Int | 调用行号 | - |

#### 方法列表
#### `init(api: KAAPI, file: String, function: String, line: Int)`
初始化方法

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| api | KAAPI | 关联的 KAAPI 实例 | - |
| file | String | 调用文件名 | - |
| function | String | 调用函数名 | - |
| line | Int | 调用行号 | - |

**返回值**：_KAAPIWrapper 实例
