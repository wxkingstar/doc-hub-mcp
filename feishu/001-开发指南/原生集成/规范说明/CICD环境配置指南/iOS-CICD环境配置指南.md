---
title: "iOS CICD环境配置指南"
source_url: https://open.feishu.cn/document/native-integration/specification-description/cicd/ios-cicd
last_remote_update: 2023-10-08
last_remote_update_timestamp: 1696745251000
---
最后更新于 2023-10-08

# iOS CICD环境配置指南
## 离线模式构建简介

原生集成离线模式针对在客户私有化环境进行构建场景，搭建了融合双方二进制产物的能力基建。流程包括融合产物依赖冲突检测，符号冲突检测，描述文件debug能力检测，二进制融合与重签，为客户生成交付或本地调试的最终产物。

## 离线模式构建前置配置

### p12证书

构建的远端或本地机器需要安装证书的p12文件，安装p12的方式如下：
1. 点击导出的p12文件，双击后在 **钥匙串** 列表选择 **系统**，点击 **添加**

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/57e00b15f157305fd953b341d0369fd6_Zu6RwMRnht.png?height=618&lazyload=true&maxWidth=500&width=1070)

2. 使用密码或指纹添加钥匙串访问，输入p12的密码，即可添加完成。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4cd96bd6580e5438482f0ec58d68ea45_AZzldD9WD6.png?height=309&lazyload=true&width=1264)

### 描述文件配置与落仓

#### 描述文件配置

飞书ipa包内存在8个mobileprovision描述文件，重签时需要描述文件的地址落仓到IDE工程中。描述文件的权限配置如下：
1. 主描述文件权限配置：描述文件的权限将直接影响ipa包中某些功能的使用，如需要本地进行断点调试，请在向苹果申请描述文件时将“get-task-allow”设置为true。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/a4f1d5fa45a4764b80e8c302f83bd72d_fp6xqUj4rg.png?height=1698&lazyload=true&maxWidth=600&width=1632)

2. 插件描述文件配置：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/be1166ce15f0df753ea8147631630e21_9Pon3PIvHg.png?height=406&lazyload=true&width=1600)

#### 描述文件落仓

飞书标准插件与开发者自定义插件落仓配置在IDE工程目录下的alchemy/base_config.json文件中，请参照注释内容填写mobileprovisionConfig中各个描述文件的存放地址：
```json
{
    "hostVersion": "6.1", 
    "mobileprovisionConfig": {
        "debug" : {
        // 填写证书的SHA-1字段
        "sha1": "", 
        // 填写Lark中主描述文件和插件中描述文件的路径
        "Main": "",  
        "SmartWidgetExtension": "",
        "IntentsExtension": "",
        "NotificationContentExtension": "",
        "NotificationServiceExtension": "",
        "ShareExtension": "",
        "Feishu": "",
        "LarkAppIntents": "" 
        // 如果需要添加自定义插件，请在下方按如下格式补充:
        // key: 插件的bunlde id, value: 描述文件的路径，例如：
        "com.bytedance.ee.lark.broadcast": "user/MobileProvision/broadcast.mobileprovision"
        },
        "release" : {
        // 填写证书的SHA-1字段
        "sha1": "", 
        // 填写Lark中主描述文件和插件中描述文件的路径
        "Main": "",  
        "SmartWidgetExtension": "",
        "IntentsExtension": "",
        "NotificationContentExtension": "",
        "NotificationServiceExtension": "",
        "ShareExtension": "",
        "Feishu": "",
        "LarkAppIntents": "" 
        // 如果需要添加自定义插件，请在下方按如下格式补充:
        // key: 插件的bunlde id, value: 描述文件的路径，例如：
        "com.bytedance.ee.lark.broadcast": "user/MobileProvision/broadcast.mobileprovision"
        }
    }
}
```

## 使用说明

### 原生集成工具使用

CI环境下，点击原生集成工具的构建按钮即可自动执行产物下载，依赖检测，符号冲突检测，产物融合与重签的操作。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/7782fb9be54a5976b0fd8c638ae6fbd3_jsxp4ynIWE.png?height=601&lazyload=true&maxWidth=600&width=862)

### CI,CD环境使用

1. 宿主产物下载：

**参数:**

| 参数名                   | 描述              | 值            | 是否必填 |
| --------------------- | --------------- | ------------ | ---- |
| --download_simulator | 是否下载模拟器包        | 布尔类型，默认为True | 否    |
| --channel            | 宿主产物对应channel名称 | 字符串类型        | 是    |
| --version            | 宿主产物版本号         | 字符串类型        | 是    |
| --tenantID           | 当前IDE用户的租户ID    | 字符串类型        | 是    |
| --unit               | 宿主产物的所属地区类型     | 字符串类型        | 是    |
**命令：**

在IDE工程目录中使用如下命令执行宿主产物下载：
```json
python3 alchemy_ios_scripts/download_productions.py --download_simulator "" --channel "" --version "" --tenantID "" --unit ""
```
2. 依赖检测：

**命令：**
```json
ruby alchemy_ios_scripts/pods_version_check.rb
```
3. 符号冲突检测：

**命令：**
```json
ruby alchemy_ios_scripts/alchemy_symbol_check.rb
```
4. 描述文件Debug能力检测：

**命令：**
```json
python3 alchemy_ios_scripts/check_mobileprovision_debug.py
```
5. 宿主包融合与重签：

**参数:**
| 参数名            | 描述      | 值    | 是否必填 |
| -------------- | ------- | ---- | ---- |
| is_ide_pattern | 是否为CD模式 | 布尔类型 | 是    |

**命令：**
```json
ruby alchemy_ios_scripts/replace_frameworks_resign.rb false
```

## 更新日志

| 版本号   | Release Note                                                                                                    |
| ----- | --------------------------------------------------------------------------------------------------------------- |
| 1.0.0 | 新功能：新CI/CD离线模式简介，使用离线模式CI/CD的的前置配置和CD模式命令行操作
