---
title: "Harmony 安全管控"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/securityexternal/harmony-security-exemption
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# security_exemption_api - 安全豁免能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| security_exemption_api | 能力组件 | 1.0.1 | 7.32.0 |

## 功能简介
提供安全功能豁免与恢复能力，支持截屏保护等安全策略的动态控制

### 更新日志
- 新增安全豁免能力接口 ISecurityExemptionApi，支持按业务类型进行豁免与恢复操作
- 新增 EMM 权限配置与监听能力，支持获取 EMM 权限配置及注册权限变化回调

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { ISecurityExemptionApi, SecurityBizType, SecurityActionType } from '@ohos/security_exemption_api'

export class KARuntimeManager {
  private securityApi?: ISecurityExemptionApi;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.securityApi = runtime.getSecurityExemptionApi();

// 请求截屏保护豁免
    const result = this.securityApi?.requestExemptionAction(
      SecurityBizType.SCREEN_CAPTURE_PROTECT,
      SecurityActionType.EXEMPT
    );

// 其他方法省略...
  }
}
```

## INTERFACE
### ISecurityExemptionApi
安全功能豁免接口

```ets
interface ISecurityExemptionApi {
  requestExemptionAction(securityBizType: SecurityBizType, actionType: SecurityActionType): SecurityActionResult // 请求安全功能豁免或恢复
}
```

#### 方法列表
#### `requestExemptionAction(securityBizType: SecurityBizType, actionType: SecurityActionType): SecurityActionResult`
请求安全功能豁免或恢复

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| securityBizType | SecurityBizType | 是 | 安全功能 |
| actionType | SecurityActionType | 是 | 预期行为 |

**返回值**：执行结果

### EMMCallBack
EMM 权限变化回调接口

```ets
interface EMMCallBack {
  readonly onPermissionChange: (type: SecurityBizType, result: ISecurityEMMPermissionResult) => void // 权限变化回调
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| onPermissionChange | (type: SecurityBizType, result: ISecurityEMMPermissionResult) => void | 权限变化回调 | - |

### ISecurityEMMPermissionResult
EMM 权限结果接口

```ets
interface ISecurityEMMPermissionResult {
  forbid: boolean // 是否禁止
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| forbid | boolean | 是否禁止 | - |

### ISecurityServiceApi
安全服务协议接口

```ets
interface ISecurityServiceApi {
  getEMMPermissionConfig(): Map<SecurityBizType, ISecurityEMMPermissionResult> // 获取 EMM 权限配置
  registerEMMPermissionCallback(block: EMMCallBack): void // 注册 EMM 权限变化监听
}
```

#### 方法列表
#### `getEMMPermissionConfig(): Map<SecurityBizType, ISecurityEMMPermissionResult>`
获取 EMM 权限配置

**返回值**：EMM 权限配置映射

#### `registerEMMPermissionCallback(block: EMMCallBack): void`
注册 EMM 权限变化监听

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| block | EMMCallBack | 是 | 权限变化回调 |

## ENUM
### SecurityBizType
安全功能

```ets
enum SecurityBizType {
  UNKNOWN,
  SCREEN_CAPTURE_PROTECT
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| UNKNOWN | 0 | 未知 |
| SCREEN_CAPTURE_PROTECT | 1 | 截屏保护 |

### SecurityActionType
行为类别

```ets
enum SecurityActionType {
  EXEMPT,
  RESUME
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| EXEMPT | 0 | 豁免 |
| RESUME | 1 | 恢复 |

### SecurityActionResult
执行结果

```ets
enum SecurityActionResult {
  SUCCESS,
  FAILED
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| SUCCESS | 0 | 成功 |
| FAILED | 1 | 失败 |
