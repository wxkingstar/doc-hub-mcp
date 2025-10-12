---
title: "iOS接入文档"
source_url: https://open.feishu.cn/document/native-integration/development-guide/ios-access-documentation
last_remote_update: 2025-03-06
last_remote_update_timestamp: 1741258788000
---
最后更新于 2025-03-06

# iOS接入文档
## 开发详解

### 工程结构
```javascript 
├── Gemfile
├── Gemfile.lock
├── KAAlchemyClient   
│   └── main.m
├── KAAlchemyClient.xcworkspace
├── LKJsApiExternalIMP
│   ├── LKJsApiExternalIMP.podspec
│   └── src
│......
│
├── Podfile
├── Podfile.lock
└── alchemy
    ├── base_config.json
    ├── env_config.json
    └── integration_config_v2.json
```
- Gemfile + Gemfile.lock: gem 依赖项及版本
- KAAlchemyClient：工程入口
- LKJsApiExternalIMP 等（Optional）：原生集成组件模块。包括所有开发者自定义的原生集成**协议组件**实现，以及使用了原生集成**能力组件**的代码。
- Podfile + Podfile.lock: pod 依赖项及版本
- alchemy
    - base_config.json：原生集成基础配置，选中基线版本、集成引擎版本等
    - env_config.json：原生集成账号、集成工具、CI 服务服务请求服务地址等配置
    - integration_config_v2.json：集成相关配置，主要描述启用、卸载 原生集成组件与本地模块的绑定关系warning
    非必要切勿手动修改`./alchemy` 文件夹下的配置文件

### 创建工程
1. 启动飞书原生集成工具创建工程
如果使用 git 版本管理工具，推荐在工程目录下的`.gitignore`文件中增加如下条目

```javascript 
.bundle/
.alchemy_bundle_*
Demo.zip
AlchemyEngineCLILog.log
Pods/
framework_build.sh
local_pod_manager.rb
pod_script.sh
temp_pod.zip
temp_pod/
KAAlchemyClientBuild/
alchemy/alchemy_scripts
alchemy/ruby.tar.xz
alchemy/ruby_3.2.3
alchemy/alchemy_scripts.zip
alchemy_temp/
alchemy_ios_files/
LKKAContainerFramework/
LKKAContainer/
```
2. 创建本地模块并关联组件
    1. 打开工程，点击协议组件或能力组件
    1. 选择待实现的协议组件或要使用的能力组件，点击模块管理
    1. 在列表中选择已有模块或创建新的本地模块，后者会在工程目录下生成模块同名文件夹
    1. 勾选模块进行关联，原生集成工具会在模块中添加对应的组件依赖
2. 参考原生集成“开放能力”中的协议组件与能力组件规范，实现接口函数，完成自定义功能
    1. 开发者的源码需要放在本地模块的`src`目录下。例如，`LKJsApiExternalIMP`模块中的代码均置于`./LKJsApiExternalIMP/src`目录下
    1. 如果用户要加入自有的 framework，需将其置于本地模块目录的`Framework`目录下

### 实现详解

#### 协议组件

开发者引入组件，实现组件中定义的协议函数，并参考组件规范文档在 Object-C 代码的`load`函数中注册自定义的实现。
以[WebContainer](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/webcontainer/ios-webcontainer)协议组件为例，该组件允许开发者自定义 App 打开或关闭网页时的行为。
1. 引入`LKWebContainerExternal`组件，实现组件中`KAWebContainerProtocol`协议

```javascript 
import LKWebContainerExternal
public class MyWebContainer: KAWebContainerProtocol{
    // 用户打开 Web 页面时触发
    public func onOpen(url: String, onSuccess: @escaping () -> Void, onFail: @escaping (_ code: Int) -> Void) {
        /* custom impl */
    }

// 用户关闭 Web 页面时触发
    public func onClose(url: String) {
        /* custom impl */
    }

// 用户切换主导航里的网页应用时调用
    public func onTabVisibilityChanged(selected: Bool, tabParams: LKWebContainerExternal.TabParams) {
        /* custom impl */
    }

// Web 访问返回错误时的错误页配置
    public func errorPageConfig() -> LKWebContainerExternal.KAWebContainerErrorPageConfig? {
        let config: LKWebContainerExternal.KAWebContainerErrorPageConfig = /* custom config */
        return config
    }
}
```
2. 定义注册类`MyWebContainerLoader`，实现注册方法
```javascript
import LKKABridge // 引入 KAAPI 注册类
@objcMembers
public class MyWebContainerLoader: NSObject {
    // 标注为objc，以备在 Object-C 代码中调用
    @objc public class func swiftLoad(channel: String) {
        let api = KAAPI(channel: channel)
        api.register(webContainer: MyWebContainer.init)
    }
}
```
3. 创建 Object-C(.m) 文件，创建调用注册类`MyWebContainerLoader`的注册方法
```javascript
#import <Foundation/Foundation.h>
#import <LKWebContainerExternalIMP-Swift.h>
#import <LKWebContainerExternal/LKWebContainerExternal-Swift.h>
#import "ka_auto_generated.h" // getChannel
@interface MyRegistry: NSObject
@end
@implementation MyRegistry
+(void)load {
    char *channel = getChannel // 获取 channel id
    NSString *channelStr = [NSString stringWithUTF8String:channel];
    [MyWebContainerLoader swiftLoadWithChannel:channelStr];
}
@end
```
**注：**
1. 组件实现支持 Swift 或 Object-C 语言。协议的注册方法标注为`@objc`，以备在 Object-C 代码中调用。
1. 推荐在 Object-C 代码中定义一个**注册类**，并在其`load`函数中完成**实现类**的注册。注意`load`函数会在加载动态库的类定义时运行。若要在`load`中添加其他初始化代码，需要注意其执行时机。

#### 能力组件

开发者引入组件，即可直接通过组件中的 API 调用原生集成能力。
以[存储KV能力](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/storage-kv-capability/ios-storag)组件为例，该组件允许用户通过飞书的 KV 存取功能维护数据

```javascript 
import LKKeyValueExternal
func kvDemo() {
    let store = KAKeyValueExternal.getKVStore()
    let key = "SampleKey"
    store?.set(key: key, stringValue: "SampleValue")

let has = store?.has(key: key) ?? false
    print("Set value success: (has)")

let value = store?.getString(key: key) ?? "N/A"
    print("Value is (value)")

store?.clearAll( )
}
```
### 代码示例
[alchemy_app_demo_ios](http://https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

## 构建详解

### 在线集成
1. 点击工程详情中的`集成`按钮新建集成单
1. 选择需要集成的本地模块与远端组件，创建集成单
1. 在集成单列表中选择集成单进行构建，生成测试包
1. 测试包验证通过之后，在集成单详情中点击发布，用于后续交付

### 离线构建

点击工程详情中的`构建飞书`按钮，生成测试包
