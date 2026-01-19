---
title: "Android 文件详情容器(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/file_detail_container/android-file-detail-container-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android 文件详情容器(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| file-detail-container-api | 协议组件 | 1.0.10-release | 7.58.0 |

## 功能简介
为第三方 SDK 提供文件本地预览能力扩展点，通过实现 IFileDetailPlugin 接口并标记 @FileDetailPlugin 注解即可接入飞书文件详情页

### 更新日志
- 首次发布，提供文件后缀预览判断、本地预览 Fragment 创建及优先级配置能力

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```java
import com.ss.android.lark.plugin.annotation.TrimisImpl;
import com.ss.android.lark.filedetailapi.container.IFileDetailPlugin;

@TrimisImpl(IFileDetailPlugin.class)
public class FileDetailPluginImpl implements IFileDetailPlugin {
    @Override
    public int getPriority() {
        return TYPE_HIGH;
    }

@Override
    public boolean canPreview(String fileExtension) {
        return "xyz".equalsIgnoreCase(fileExtension);
    }

@Override
    public Fragment getLocalPreviewFragment(Context context, String fileName, String filePath) {
        return XyzPreviewFragment.newInstance(fileName, filePath);
    }

@Override
    public void checkAndInit() {
        // 初始化预览 SDK
    }
}
```

## INTERFACE
### IFileDetailPlugin
文件详情插件(外部)

```java
interface IFileDetailPlugin {
    int getPriority(); // 应用实现的优先级，第三方SDK的优先级一般为 TYPE_HIGH
    boolean canPreview(String fileExtension); // 通过文件后缀判断能否预览文件
    Fragment getLocalPreviewFragment(Context context, String fileName, String filePath); // 获取用于预览文件的 Fragment
    void checkAndInit(); 
}
```

#### 方法列表
#### `int getPriority()`
应用实现的优先级，第三方SDK的优先级一般为 TYPE_HIGH

**返回值**：优先级

#### `boolean canPreview(String fileExtension)`
通过文件后缀判断能否预览文件

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| fileExtension | String | 是 | 不带 . |

**返回值**：能否预览

#### `Fragment getLocalPreviewFragment(Context context, String fileName, String filePath)`
获取用于预览文件的 Fragment

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | - |
| fileName | String | 是 | - |
| filePath | String | 是 | - |

**返回值**：预览 Fragment

#### `void checkAndInit()`

## ANNOTATION
### FileDetailPlugin
标记实现类为文件详情插件

```java
@interface FileDetailPlugin {
}
```

## CONSTANT
### 优先级常量
文件详情插件优先级定义

```java
int TYPE_HIGH = 1;
int TYPE_MIDDLE = 2;
int TYPE_LOW = 3;
```

| 常量名 | 类型 | 值 | 描述 |
| --- | --- | --- | --- |
| TYPE_HIGH | int | 1 | 高优先级，第三方 SDK 推荐值 |
| TYPE_MIDDLE | int | 2 | 中优先级 |
| TYPE_LOW | int | 3 | 低优先级 |
