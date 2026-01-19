---
title: "iOS Setting能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/setting-ability/ios-settingexternal_swift/ios-settingexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS Setting能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKSettingExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供获取远端 Setting 配置的能力

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKSettingExternal
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
let settings = api.settings
let config = settings?.getConfig(space: "demo", key: "test_key")
```

## PROTOCOL
### KASettingProtocol
Setting 能力组件接口协议，用于获取 Setting 配置

```swift
protocol KASettingProtocol: AnyObject {
    func getConfig(space: String, key: String) -> [String: Any]	// 获取 config
}
```

#### 方法列表
#### `func getConfig(space: String, key: String) -> [String: Any]`
获取远端配置

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| space | String | isv space | - |
| key | String | isv key | - |

**返回值**：远端配置

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var settings: KASettingProtocol?	// Setting 能力接口实例
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| settings | KASettingProtocol? | Setting 能力接口实例 | nil |
