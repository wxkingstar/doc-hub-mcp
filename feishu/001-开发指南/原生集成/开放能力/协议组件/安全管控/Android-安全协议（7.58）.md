---
title: "Android 安全协议（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/securityexternal/android-security-api758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android 安全协议（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | -- | --- | --- |
| security-api | 协议组件 | 1.0.3-release | 7.58.0 |

## 功能简介
提供剪贴板分级管控与 EMN 安全策略豁免 / 恢复的协议定义，客户侧按需实现即可接入飞书安全管控体系

### 更新日志
- 剪贴板协议新增 `@TrimisScope(ScopeType.GLOBAL)`，明确全局作用域
- EMN 协议新增 `@TrimisScope(ScopeType.GLOBAL)`，明确全局作用域

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```java
import com.ss.android.lark.plugin.annotation.TrimisImpl;
import com.ss.android.lark.security.protocol.clipboard.api.IClipboardProtectionApi;

@TrimisImpl(IClipboardProtectionApi.class)
public class ClipboardProtectionService10 implements IClipboardProtectionApi {
    @Override
    public boolean canPaste(String dataAppID, String currentAppID, String currentWebURL) {
        // 客户自定义分级逻辑
        return true;
    }
}
```

```java
import com.ss.android.lark.plugin.annotation.TrimisImpl;
import com.ss.android.lark.security.protocol.emm.api.ISecurityEmmApi;
import com.ss.android.lark.security.protocol.emm.api.SecurityBizType;
import com.ss.android.lark.security.protocol.emm.api.SecurityActionType;

@TrimisImpl(ISecurityEmmApi.class)
public class SecurityEmmService10 implements ISecurityEmmApi {
    @Override
    public void requestExemptionAction(SecurityBizType securityBizType,
                                     SecurityActionType actionType) throws Exception {
        // 客户自定义豁免 / 恢复逻辑
    }
}
```

## INTERFACE
### IClipboardProtectionApi
应用分级管控的协议层，客户侧实现，通过判断当前 app_id 和数据 app_id 的关系来告知飞书是否可以执行粘贴操作

```java
@TrimisScope(ScopeType.GLOBAL)
interface IClipboardProtectionApi {
    boolean canPaste(@Nullable String dataAppID,
                    @Nullable String currentAppID,
                    @Nullable String currentWebURL); // 告知飞书能否粘贴
}
```

#### 方法列表
#### `boolean canPaste(@Nullable String dataAppID, @Nullable String currentAppID, @Nullable String currentWebURL)`
告知飞书能否粘贴

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| dataAppID | String | 否 | 当前剪贴板数据的 AppID，可能为空 |
| currentAppID | String | 否 | 当前目标三方应用的 AppID |
| currentWebURL | String | 否 | 当前三方应用的网页链接，小程序为空 |

**返回值**：返回给飞书是否可以粘贴

### ISecurityEmmApi
需 emm 实现的安全协议

```java
@TrimisScope(ScopeType.GLOBAL)
interface ISecurityEmmApi {
    void requestExemptionAction(@NotNull SecurityBizType securityBizType,
                              @NotNull SecurityActionType actionType) throws Exception; // 请求豁免 / 恢复某个安全功能的管控
}
```

#### 方法列表
#### `void requestExemptionAction(@NotNull SecurityBizType securityBizType, @NotNull SecurityActionType actionType) throws Exception`
请求豁免 / 恢复某个安全功能的管控

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| securityBizType | SecurityBizType | 是 | 安全功能 |
| actionType | SecurityActionType | 是 | 预期行为 |

**抛出**：若执行失败，向上传递自定义异常

## ENUM
### SecurityActionType
行为类别

```java
enum SecurityActionType {
    EXEMPT, // 豁免
    RESUME  // 恢复
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| EXEMPT | 0 | 豁免 |
| RESUME | 1 | 恢复 |

### SecurityBizType
配置功能

```java
enum SecurityBizType {
    SCREEN_CAPTURE_PROTECT // 截屏保护
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| SCREEN_CAPTURE_PROTECT | 0 | 截屏保护 |

## ANNOTATION
### ClipboardProtectionImpl
标记 IClipboardProtectionApi 的实现类

```java
@BasePlugin(IClipboardProtectionApi.class)
@interface ClipboardProtectionImpl {
}
```

### SecurityEmmImpl
标记 ISecurityEmmApi 的实现类

```java
@BasePlugin(ISecurityEmmApi.class)
@interface SecurityEmmImpl {
}
```
