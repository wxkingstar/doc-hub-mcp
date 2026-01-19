---
title: "Harmony客户端OpenAPI能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/client-openapi-capabilities/harmony-client-openapi-capability
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# alchemy_nativeapp_api - Harmony 原生集成开放平台容器 - 能力组件

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_nativeapp_api | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
提供 Harmony 应用与飞书开放平台原生集成的容器管理能力，支持初始化、调用接口、刷新配置及销毁容器等完整生命周期管理

### 更新日志
- 新增原生集成开放平台容器管理接口 IAlchemyNativeAppManager
- 新增开放平台容器接口 IOpenApiContainer，支持 invokeOpenApi、refreshContainer、destroyContainer 方法
- 新增 OpenApiConfig 配置接口，支持 UIContext 和组件唯一 ID 配置
- 新增 OpenApiResultType 枚举定义 SUCCESS/FAIL 结果类型
- 新增 OpenApiResult 结果类封装接口返回数据
- 新增 OpenApiResultCallback 类型别名定义回调函数签名

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyNativeAppManager, OpenApiConfig, OpenApiResultType } from '@ohos/alchemy_nativeapp_api'

export class KARuntimeManager {
  private nativeAppManager?: IAlchemyNativeAppManager;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.nativeAppManager = runtime.getAlchemyNativeAppManager();

// 初始化容器
    const config: OpenApiConfig = {
      uiContext: getContext(this).getApplicationContext().getUIContext()
    };
    const container = this.nativeAppManager.initOpenApiContainer('app_123456', config);

// 调用开放平台接口
    container.invokeOpenApi('getUserInfo', (result) => {
      if (result.resultType === OpenApiResultType.SUCCESS) {
        console.info('获取用户信息成功:', JSON.stringify(result.resultData));
      } else {
        console.error('获取用户信息失败:', result.resultData);
      }
    }, { user_id: '123' });

// 其他方法省略...
  }
}
```

## INTERFACE
### IAlchemyNativeAppManager
原生集成开放平台容器管理类

```ets
interface IAlchemyNativeAppManager {
  initOpenApiContainer(containerId: string, openApiConfig: OpenApiConfig): IOpenApiContainer // 初始化开放平台容器
}
```

#### 方法列表
#### `initOpenApiContainer(containerId: string, openApiConfig: OpenApiConfig): IOpenApiContainer`
初始化开放平台容器

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| containerId | string | 是 | 原生集成容器id。原生集成应用场景，建议使用开发者后台申请的打开原生集成应用能力的应用ID；非原生集成应用场景，可传入随机字符串作为唯一标识符，用于沙箱数据隔离 |
| openApiConfig | OpenApiConfig | 是 | 开放平台的容器配置信息，后续可通过refreshContainer方法进行刷新 |

**返回值**：开放平台容器实例

### IOpenApiContainer
原生集成开放平台容器

```ets
interface IOpenApiContainer {
  invokeOpenApi(apiName: string, openApiResultCallback: OpenApiResultCallback, params?: object): void // 调用开放平台接口
  refreshContainer(openApiConfig: OpenApiConfig): void // 刷新开放平台容器
  destroyContainer(): void // 销毁开放平台容器
}
```

#### 方法列表
#### `invokeOpenApi(apiName: string, openApiResultCallback: OpenApiResultCallback, params?: object): void`
调用开放平台接口

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| apiName | string | 是 | 接口名称 |
| openApiResultCallback | OpenApiResultCallback | 是 | 接口请求结果回调。result.resultType 接口请求结果 枚举值: SUCCESS、FAIL；result.resultData 接口请求返回数据：请求成功时返回数据结构可参考飞书开放平台官方文档的接口详情页返回结果，请求失败时可参考飞书开放平台官方文档的Errno错误码 https://open.larkoffice.com/document/client-docs/block/api/introduce-of-errno |
| params | object | 否 | 接口请求参数，可参考飞书开放平台官方文档的接口详情页接口传参 https://open.larkoffice.com/document/client-docs/h5/ |

#### `refreshContainer(openApiConfig: OpenApiConfig): void`
刷新开放平台容器

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| openApiConfig | OpenApiConfig | 是 | 开放平台的容器配置信息 |

#### `destroyContainer(): void`
销毁开放平台容器

### OpenApiConfig
原生集成开放平台容器配置

```ets
interface OpenApiConfig {
  uiContext: UIContext // UI上下文
  componentUniqueId?: number // 组件的uniqueId，在组件中可通过this.getUniqueId()获取
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| uiContext | UIContext | 在多窗口场景下，可通过传入指定窗口的uiContext，确保在调用界面相关的开放平台接口时，界面显示和交互的准确性 | - |
| componentUniqueId | number | 当调用开放平台接口时，如果有路由相关的操作，需在初始化开放平台容器时传入，或者在调用接口前通过refreshContainer方法补全该参数 | - |

## ENUM
### OpenApiResultType
原生集成开放平台接口请求结果类型枚举

```ets
enum OpenApiResultType {
  SUCCESS,
  FAIL
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| SUCCESS | 0 | 成功 |
| FAIL | 1 | 失败 |

## CLASS
### OpenApiResult
原生集成开放平台接口请求结果类

```ets
class OpenApiResult {
  resultType: OpenApiResultType // 结果类型
  resultData?: object // 结果数据
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| resultType | OpenApiResultType | 结果类型 | - |
| resultData | object | 结果数据 | - |

## TYPE
### OpenApiResultCallback
原生集成开放平台接口请求结果回调类型

```ets
type OpenApiResultCallback = (result: OpenApiResult) => void
```
