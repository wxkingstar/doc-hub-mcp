---
title: "Android CICD 环境配置指南"
source_url: https://open.feishu.cn/document/native-integration/specification-description/cicd/android-cicd
last_remote_update: 2023-10-08
last_remote_update_timestamp: 1696745251000
---
最后更新于 2023-10-08

# Android CICD 环境配置指南
## 离线模式构建简介

原生集成离线模式针对在客户私有化环境进行构建场景，搭建了融合双方二进制产物的能力基建。流程包括依赖冲突检测与二进制融合，为客户生成交付或本地调试的最终产物。

## 命令使用说明

如果没有特殊声明，所有`「参数」`均可通过 gradle 的项目属性 ([project properties](https://docs.gradle.org/current/userguide/build_environment.html#sec:project_properties))设置。这类参数可以通过两种方式声明：
- `gradle.properties` 文件内部声明。以 参数 `larkChannel` 为例，文件中声明 `larkChannel=abc` 代表该参数的值为 abc。
- 命令行 `-P` 参数声明。这种方式的优先级高于 `gradle.properties`。以 参数 `larkChannel` 为例，执行命令时带上 `-P"larkChannel"=abc` 即可。此处的双引号`"`是为了避免 Windows 系统无法正确识别带有 `.` 的「参数」，其他操作系统可以不保留。

<br>
`「参数」`的优先级顺序：命令行参数 > `gradle.properties` 配置 > 环境变量 > 默认值。

<br>
如果没有特殊声明，gradle 命令均在`「插件 app」` 模块执行。`「插件 app」` 模块指的是 `build.gradle` 中依赖了 `lark.integration.plugin` 插件的模块，使用 IDE 插件创建出来的工程默认 `plugin_app` 为`「插件 app」`模块。

## 依赖冲突检测

- **用途：**
检测原生集成工程内的依赖与飞书依赖是否有冲突。

- **命令：**
`checkDependency${当前Variant，例如Debug与Release}`

- **必填参数:**

| 参数名                                | 描述          | 值                  |
| ---------------------------------- | ----------- | ------------------ |
| **com.ss.android.lark.constraint** | 是否使用飞书的依赖约束 | false （只能填写 false） |
- **例子：**
```shell
./gradlew :plugin_app:checkDependency(Debug|Release) -P"com.ss.android.lark.constraint"=false
```

## 开发与构建

### 生成公共依赖信息

**用途：**
根据飞书提供的依赖信息与原生集成工程内的依赖信息得出双方的公共依赖，这些公共依赖将强制使用飞书的版本。

**执行时机：**
修改完原生集成工程的依赖后需要执行。
CD 脚本中必须执行。

**命令：**
`initDependency${当前Variant，例如Debug与Release}`
**注意事项**：最终产物是否可调试与命令的`variant`指向的`buildType`的`isDebuggable`属性相同，与`variant`名称无关。

**必填参数：**
| 参数名                                | 描述          | 值                  |
| ---------------------------------- | ----------- | ------------------ |
| **com.ss.android.lark.constraint** | 是否使用飞书的依赖约束 | false （只能填写 false） |

**例子：**
```shell
./gradlew :plugin_app:initDependency(Debug|Release) -P"com.ss.android.lark.constraint"=false
```

### 构建

- **用途：**
生成包含原生集成代码的飞书包。

- **命令:**
`larkBundle${当前Variant，例如Debug与Release}`

- **选填参数：**
1. 身份验证相关：推荐手动配置值，避免使用默认值。

| 参数名          | 环境变量           | 描述         | 默认值           |
| ------------ | -------------- | ---------- | ------------- |
| larkUnit     | LARK_UNIT      | 当前 unit    | 根据创建的模板工程配置* |
| larkTenantID | LARK_TENANT_ID | 当前租户 ID    | 根据创建的模板工程配置* |
| larkChannel  | LARK_CHANNEL   | 当前 Channel | 根据创建的模板工程配置* |

根据创建的模板工程配置*：选取的默认值会在编译日志中输出。

<br>

2. 构建相关

| 参数名                  | 环境变量                | 描述                                                                                                                     | 默认值                             |
| -------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| larkAbi              | LARK_ABI            | 包的架构 (32 或 64)                                                                                                         | 64                              |
| larkOutputArchive    | LARK_OUTPUT_ARCHIVE | 最终产物的地址                                                                                                                | alchemy/build/packed_signed.apk |
| larkArscMerge        | 无                   | 是否将插件 arsc （以及其管理的资源，后略） 合并到宿主                                                                                         | true                            |
| larkRemovePluginArsc | 无                   | 如果合并插件 arsc 到宿主，是否移除插件内的arsc                                                                                           | true                            |
| larkMergeCode        | 无                   | 是否将插件中的 dex、so 与其他资源合并到宿主。只有开启了该选项时，才会将插件的静态注册 `provider` 与 `receiver` 合并到宿主。                                          | false                           |
| larkCustomSign       | LARK_CUSTOM_SIGN    | 可执行的命令，如"python3 xxx.py" 或者 "bash xxx.sh"；该命令需要支持参数`--input` 与 `--output`，因为构建会调用 `命令 --input srcApk --output destApk` | 无                               |

- **例子：**
```shell
./gradlew :plugin_app:larkBundle(Debug|Release) -P"larkCustomSign"="python3 sign.py"
```
对应的 sign.py:
``` javascript

# sign.py

import argparse

def parse_args():
    """Parses command line arguments"""
    parser = argparse.ArgumentParser()
    parser.add_argument("-i", "--input", help="需要签名的apk")
    parser.add_argument("-o", "--output", help="签名后的路径")
    return parser.parse_args()

def sign_apk(src: str, dst: str):
    pass

def main():
    args = parse_args()
    sign_apk(args.input, args.output)

if __name__ == '__main__':
    main()

```
