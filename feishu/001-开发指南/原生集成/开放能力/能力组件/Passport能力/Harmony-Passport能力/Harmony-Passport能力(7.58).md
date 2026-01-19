---
title: "Harmony Passport能力(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/passport-capability/harmony-passportcapability/harmony-passport-capability-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Harmony Passport能力(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_passport_api | 能力组件 | 1.0.0 | 7.58.0 |

## 功能简介
Passport 能力组件

### 更新日志
- 新增登出全部用户能力，支持传入登出原因和场景
- 新增获取设备ID、用户 session 唯一标识能力
- 新增飞书登录状态检查能力
- 新增切换租户 IDP 能力

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyPassport, LogoutReason, LogoutScene } from '@ohos/alchemy_passport_api'

export class KARuntimeManager {
  private alchemyPassport?: IAlchemyPassport;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.alchemyPassport = runtime.getAlchemyPassport();

// 获取设备ID
    const deviceId = this.alchemyPassport?.getDeviceId();

// 检查飞书登录状态
    this.alchemyPassport?.checkLarkStatus().then(status => {
      console.info('Lark status:', status.isValid);
    });

// 登出全部用户
    this.alchemyPassport?.logoutAll(LogoutReason.PLACE_HOLDER, LogoutScene.KA_EMM_SDK_LOGOUT);

// 其他方法省略...
  }
}
```

## INTERFACE
### IAlchemyPassport
Passport 能力组件

```ets
interface IAlchemyPassport {
  logoutFeishu(): void // 登出飞书
  logoutAll(logoutReason: LogoutReason, logoutScene: LogoutScene): Promise<LogoutResult> // 登出全部用户
  getDeviceId(): string // 获取设备ID
  checkLarkStatus(): Promise<LarkStatus> // 异步返回登录状态
  getSid(): string // 获取用户session唯一标识
  isFeishuLogin(): boolean // 获取飞书是否登录
  switchTenant(domain: string | undefined, uniqueId: number | undefined): Promise<boolean> // 切换idp
}
```

#### 方法列表
#### `logoutFeishu(): void`
登出飞书

#### `logoutAll(logoutReason: LogoutReason, logoutScene: LogoutScene): Promise<LogoutResult>`
登出全部用户

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| logoutReason | LogoutReason | 是 | 登出原因 |
| logoutScene | LogoutScene | 是 | 登出场景 |

**返回值**：LogoutEndContext#isSuccess，是否登出成功

#### `getDeviceId(): string`
获取设备ID

**返回值**：设备ID

#### `checkLarkStatus(): Promise<LarkStatus>`
异步返回登录状态

**返回值**：Promise<LarkStatus>

#### `getSid(): string`
获取用户session唯一标识

**返回值**：sid

#### `isFeishuLogin(): boolean`
获取飞书是否登录

#### `switchTenant(domain: string | undefined, uniqueId: number | undefined): Promise<boolean>`
切换idp

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| domain | string \| undefined | 是 | - |
| uniqueId | number \| undefined | 是 | 组件唯一标识，用于飞书内路由跳转，可在 Component 中调用 this.getUniqueId() |

## ENUM
### LogoutReason
登出原因枚举

```ets
const enum LogoutReason {
  PLACE_HOLDER,
  EMM_TASK
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| PLACE_HOLDER | 0 | 占位 |
| EMM_TASK | 1 | 指掌易 |

### LogoutScene
登出场景枚举

```ets
const enum LogoutScene {
  KA_EMM_SDK_LOGOUT
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| KA_EMM_SDK_LOGOUT | "ka_emm_sdk_logout" | 指掌易登出 |

## TYPE
### LogoutResult
登出结果

```ets
interface LogoutResult {
  isSuccess: boolean
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| isSuccess | boolean | 是否登出成功 | - |

### LarkStatus
前台用户状态

```ets
interface LarkStatus {
  isValid: boolean
  msg: string
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| isValid | boolean | 是否session有效 | - |
| msg | string | 调用失败原因 | - |
