---
title: "Harmony JS API扩展（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/js-api-extension/harmony-js-apiextension/harmony-js-api-extension-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Harmony JS API 扩展（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_customapi_api | 协议组件 | 1.0.0 | 7.58.0 |

## 功能简介
提供 Harmony 平台自定义 API 插件能力，支持开发者注册并处理自定义 API 调用，同时支持连续回调机制

### 更新日志
- 新增 IAlchemyCustomApiPlugin 接口，用于定义自定义 API 插件
- 新增 CustomApiResult 类，用于封装 API 调用结果
- 新增 CustomApiResultType 枚举，定义结果状态
- 新增 INativeAppPluginContext 接口，支持连续回调
- 新增 NativeAppCustomEvent 类，用于连续回调事件

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyCustomApiPlugin, CustomApiResult, CustomApiResultType } from '@ohos/alchemy_customapi_api'

export class MyAlchemyCustomApiPluginImpl implements IAlchemyCustomApiPlugin {
  onCreate(pluginContext: INativeAppPluginContext): void {
    // 插件初始化逻辑
  }

getPluginApiNames(): string[] {
    return ['getUserInfo', 'getLocation']
  }

handleEvent(apiName: string, callback: CustomApiResultCallback, params?: object): void {
    if (apiName === 'getUserInfo') {
      callback(new CustomApiResult(CustomApiResultType.SUCCESS, { userId: '12345' }))
    } else {
      callback(new CustomApiResult(CustomApiResultType.FAIL))
    }
  }
}
```

## INTERFACE
### IAlchemyCustomApiPlugin
原生集成 自定义Api插件

```ets
interface IAlchemyCustomApiPlugin {
  onCreate(pluginContext: INativeAppPluginContext): void // 插件创建完成，可通过此方法获取支持连续回调的Context
  getPluginApiNames(): string[] // 获取当前Plugin支持的全部apiName
  handleEvent(apiName: string, callback: CustomApiResultCallback, params?: object): void // 处理自定义api的业务逻辑
}
```

#### 方法列表
#### `onCreate(pluginContext: INativeAppPluginContext): void`
插件创建完成，可通过此方法获取支持连续回调的Context

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| pluginContext | INativeAppPluginContext | 是 | 支持连续回调的Context |

#### `getPluginApiNames(): string[]`
获取当前Plugin支持的全部apiName

**返回值**：当前插件支持的所有 API 名称数组

#### `handleEvent(apiName: string, callback: CustomApiResultCallback, params?: object): void`
处理自定义api的业务逻辑

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| apiName | string | 是 | api名称 |
| callback | CustomApiResultCallback | 是 | 自定义API的返回结果回调 |
| params | object | 否 | 参数 |

### INativeAppPluginContext
支持连续回调的Context

```ets
interface INativeAppPluginContext {
  fireEvent(event: NativeAppCustomEvent): void // 发送连续回调事件，仅支持在小程序或网页应用场景下使用
}
```

#### 方法列表
#### `fireEvent(event: NativeAppCustomEvent): void`
发送连续回调事件，仅支持在小程序或网页应用场景下使用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| event | NativeAppCustomEvent | 是 | 事件对象 |

## CLASS
### CustomApiResult
自定义Api结果类

```ets
class CustomApiResult {
  resultType: CustomApiResultType // 结果类型
  resultData?: object // 结果数据
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| resultType | CustomApiResultType | 结果类型 | - |
| resultData | object | 结果数据 | - |

### NativeAppCustomEvent
自定义连续回调事件

```ets
class NativeAppCustomEvent {
  eventName: string // 事件名称
  data: object // 连续回调数据
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| eventName | string | 事件名称 | - |
| data | object | 连续回调数据 | - |

## ENUM
### CustomApiResultType
自定义Api结果类型枚举

```ets
enum CustomApiResultType {
  SUCCESS,
  FAIL
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| SUCCESS | 0 | 成功 |
| FAIL | 1 | 失败 |

## TYPE
### CustomApiResultCallback
自定义Api结果回调类型

```ets
type CustomApiResultCallback = (result: CustomApiResult) => void
```
