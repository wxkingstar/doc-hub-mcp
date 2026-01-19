---
title: "Android扫码能力(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/scanning-ability/android-scanning-ability/android-scanning-ability-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android扫码能力(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| qrcode-api | 协议组件 | 1.1.2-release | 7.58.0 |

## 功能简介
当用户在飞书中扫描二维码时，飞书会触发扫码回调事件。开发者可以注册相应的回调函数来处理该事件，并获取扫码结果

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，明确组件作用域为全局
- 保留原有扫码拦截与后处理能力，接口方法签名不变

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```java
import com.ss.android.lark.plugin.annotation.TrimisImpl;
import com.ss.android.lark.qrcode.IQRCodeApi;

@TrimisImpl(IQRCodeApi.class)
public class QRCodeService10 implements IQRCodeApi {
    @Override
    boolean interceptHandle(Context context, String result) {
        // 在飞书内置处理前拦截扫码结果
        return false; // 返回 true 表示已消费，飞书不再处理
    }

@Override
    boolean handle(Context context, String result) {
        // 在飞书内置处理后继续处理扫码结果
        return false; // 返回 true 表示已消费
    }
}
```

## INTERFACE
### IQRCodeApi
当用户在飞书中扫描二维码时，飞书会触发扫码回调事件。开发者可以注册相应的回调函数来处理该事件，并获取扫码结果

```kotlin
@JvmDefaultWithCompatibility
@TrimisScope(ScopeType.GLOBAL)
interface IQRCodeApi {
    @Deprecated("从飞书7.32版本开始废弃", ReplaceWith("interceptHandle(context, result)"))
    fun interceptHandle(result: String): Boolean // 飞书扫码逻辑处理之前调用

fun interceptHandle(context: Context, result: String): Boolean // 飞书扫码逻辑处理之前调用

@Deprecated("从飞书7.32版本开始废弃", ReplaceWith("handle(context, result)"))
    fun handle(result: String): Boolean // 飞书扫码逻辑处理之后调用

fun handle(context: Context, result: String): Boolean // 飞书扫码逻辑处理之后调用
}
```

#### 方法列表
#### `interceptHandle(context: Context, result: String): Boolean`
飞书扫码逻辑处理之前调用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| result | String | 是 | 扫码结果 |

**返回值**：是否处理成功

#### `handle(context: Context, result: String): Boolean`
飞书扫码逻辑处理之后调用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| result | String | 是 | 扫码结果 |

**返回值**：是否处理成功

## ANNOTATION
### QRCodeImpl
标记 IQRCodeApi 的实现类

```java
@BasePlugin(value = IQRCodeApi.class)
@interface QRCodeImpl {
}
```
