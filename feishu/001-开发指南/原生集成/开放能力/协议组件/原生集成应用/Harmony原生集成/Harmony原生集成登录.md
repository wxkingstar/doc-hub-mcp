---
title: "Harmony原生集成登录"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/harmony-native-app/harmony-native-integration-login
last_remote_update: 2025-10-31
last_remote_update_timestamp: 1761877041000
---
最后更新于 2025-10-31

# alchemy_nativeapp_extension_api - Harmony 原生集成应用扩展 - 能力组件

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| alchemy_nativeapp_extension_api | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
飞书原生集成应用插件，原生应用可实现该插件跳转 Native 登录页

### 更新日志
- 首次发布，提供原生集成应用生命周期管理及自定义登录页跳转能力

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyNativeAppExtension } from '@ohos/alchemy_nativeapp_extension_api'

export class KARuntimeManager {
  private nativeAppExt?: IAlchemyNativeAppExtension;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.nativeAppExt = runtime.getAlchemyNativeAppExtension();
    this.nativeAppExt?.init();
  }
}

export class MyAlchemyNativeAppExtensionImpl implements IAlchemyNativeAppExtension {
  init(): void {
    console.info('NativeAppExtension init');
  }

destroy(): void {
    console.info('NativeAppExtension destroy');
  }

getAppId(): string {
    return 'com.example.nativeapp';
  }

pageRoute(linkUrl: string): void {
    console.info(`Navigate to native login page: ${linkUrl}`);
  }
}
```

## INTERFACE
### IAlchemyNativeAppExtension
飞书原生集成应用插件，原生应用可实现该插件跳转 Native 登录页

```ets
interface IAlchemyNativeAppExtension {
  init(): void // 飞书初始化原生集成应用的时候调用
  destroy(): void // 飞书销毁原生集成应用的时候调用
  getAppId(): string // 返回 appId
  pageRoute(linkUrl: string): void // 登录前场景唤起自定义登录页面，例如：企业自定义 SSO 登录
}
```

#### 方法列表
#### `init(): void`
飞书初始化原生集成应用的时候调用

#### `destroy(): void`
飞书销毁原生集成应用的时候调用

#### `getAppId(): string`
返回 appId

**返回值**：应用唯一标识

#### `pageRoute(linkUrl: string): void`
登录前场景唤起自定义登录页面，例如：企业自定义 SSO 登录

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| linkUrl | string | 是 | 打开原生集成应用的 applink 地址 |
