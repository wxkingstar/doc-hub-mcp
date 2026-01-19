---
title: "Android 应用加载（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/onload/android-onload-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android 应用加载（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| onload-api | 协议组件 | 1.0.2-release | 7.58.0 |

## 功能简介
为外部客户提供全局空间与用户空间下的 SPI API 实例注入能力，支持在应用加载阶段将能力接口注入到对应作用域

### 更新日志
- 新增 IOnloadGlobalModule 接口，用于在全局作用域注入 SPI API 实例
- 新增 IOnloadUserModule 接口，用于在用户作用域注入 SPI API 实例

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

**全局作用域示例**
```java
import com.ss.android.lark.core.spi.ISpiApi;
import com.ss.android.lark.onload_api.IOnloadGlobalModule;

public class OnloadGlobalModuleImpl implements IOnloadGlobalModule {
    @Override
    public void loadGlobalModule(ISpiApi globalSpiApi) {
        // 通过 SPI 获取任意全局能力接口
        // IAppLinkApi api = globalSpiApi.getGlobalService(IAppLinkApi.class);
        // 调用具体能力...
    }
}
```

**用户作用域示例**
```java
import com.ss.android.lark.core.spi.ISpiApi;
import com.ss.android.lark.onload_api.IOnloadUserModule;

public class OnloadUserModuleImpl implements IOnloadUserModule {
    @Override
    public void loadUserModule(ISpiApi userSpiApi) {
        // 通过 SPI 获取任意用户能力接口
        // ISettingApi api = userSpiApi.getGlobalService(ISettingApi.class);
        // 调用具体能力...
    }
}
```

## INTERFACE
### IOnloadGlobalModule
用于对外部客户提供全局空间下的 SPI API 实例

```java
@TrimisScope(ScopeType.GLOBAL)
interface IOnloadGlobalModule {
    void loadGlobalModule(ISpiApi globalSpiApi); // 加载全局模块
}
```

#### 方法列表
#### `void loadGlobalModule(ISpiApi globalSpiApi)`
加载全局模块

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| globalSpiApi | ISpiApi | 是 | 全局 SPI API 实例 |

### IOnloadUserModule
用于对外部客户提供用户空间下的 SPI API 实例

```java
@TrimisScope(ScopeType.USER)
interface IOnloadUserModule {
    void loadUserModule(ISpiApi userSpiApi); // 加载用户模块
}
```

#### 方法列表
#### `void loadUserModule(ISpiApi userSpiApi)`
加载用户模块

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| userSpiApi | ISpiApi | 是 | 用户 SPI API 实例 |
