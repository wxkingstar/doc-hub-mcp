<!--
title: Android接入文档
id: 7377639694459944988
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/development-guide/android-access-documentation
updatedAt: 1741258777000
source: https://open.feishu.cn/document/native-integration/development-guide/android-access-documentation
-->
# Android接入文档
## 开发详解
### 工程结构
#### 在线模式

   
```javascript 
    ├── alchemy
    │   ├── base_config.json
    │   ├── env_config.json
    │   ├── gradles
    │   └── integration_config.json
    ├── app
    │   ├── build.gradle
    │   ├── proguard-rules.pro
    │   └── src
    ├── build.gradle
    ├── native-app-extension-ability-impl
    │   ├── build.gradle
    │   ├── consumer-rules.pro
    │   ├── proguard-rules.pro
    │   └── src
    ├── native-app-extension-api-impl
    │   ├── build.gradle
    │   ├── consumer-rules.pro
    │   ├── proguard-rules.pro
    │   └── src
    └── settings.gradle
 
``` 


  
- alchemy 原生集成相关配置，勿手动改动文件内容
    - base_config.json 原生集成基础配置，选中基线版本、集成引擎版本等
    - env_config.json 原生集成账号、集成工具、CI 服务服务请求服务地址等配置
    - gradles 文件夹，原生集成用到的 gradle 相关脚本
        - publish.gradle 组件集成、发布相关逻辑
    - integration_config.json 集成相关配置，主要描述启用、卸载 原生集成组件与本地模块的绑定关系
- app 模块，暂未使用
- build.gralde 工程级别 gradle 配置
- native-app-extension-ability-impl、native-app-extension-api-impl 原生集成协议组件的实现模块，基于飞书协议实现自有逻辑、业务集成，开发者重点逻辑实现部分
- setting.gradle 工程级别，模块描述
    
#### 离线模式


```javascript 
    ├── alchemy
    │   ├── base_config.json
    │   ├── env_config.json
    │   ├── gradles
    │   └── integration_config.json
    ├── app
    │   ├── build.gradle
    │   ├── proguard-rules.pro
    │   └── src
    ├── build.gradle
    ├── native-app-extension-ability-impl
    │   ├── build.gradle
    │   ├── src
    ├── native-app-extension-api-impl
    │   ├── build.gradle
    │   ├── src
    ├── plugin_app
    │   ├── build.gradle
    │   └── src
    ├── settings.gradle
    
   ```
    
    
   
- alchemy 原生集成相关配置，勿手动改动文件内容
    - base_config.json 原生集成基础配置，选中基线版本、集成引擎版本等
    - env_config.json 原生集成账号、集成工具、CI 服务服务请求服务地址等配置
    - gradles 文件夹，原生集成用到的 gradle 相关脚本
    - integration_config.json 集成相关配置，主要描述启用、卸载 原生集成组件与本地模块的绑定关系
- app 模块，离线模式构建时模拟飞书真实环境，内部配置勿改动
- build.gralde 工程级别 gradle 配置
- native-app-extension-ability-impl、native-app-extension-api-impl 原生集成协议组件的实现模块，基于飞书协议实现自有逻辑、业务集成，开发者重点逻辑实现部分
- plugin_app 离线模式，组装开发者集成模块，产出离线开发产物
- setting.gradle 工程级别，模块描述


###   操作详解
 
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 18%;">集成工具操作</md-th>
      <md-th style="width: 50%;"> Android 原理解释</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td>关联模块</md-td>
      <md-td>选择工程子模块、新建本地工程子模块，并依赖对应的协议组件、能力组件。依赖关系会落盘在上文提到的 integration_config.json 文件。
协议组件在子工程需要有开发者对飞书 Api 协议的实现，能力组件关联之后，可调用飞书相关的能力选择工程子模块、新建本地工程子模块，并依赖对应的协议组件、能力组件。依赖关系会落盘在上文提到的 integration_config.json 文件。
协议组件在子工程需要有开发者对飞书 Api 协议的实现，能力组件关联之后，可调用飞书相关的能力</md-td>
    </md-tr>
    <md-tr>
      <md-td>升级组件</md-td>
      <md-td>当基线组件有新版本时，点击升级按钮可将相应组件版本号升级到最新版本</md-td>
    </md-tr>
    <md-tr>
      <md-td>创建实现类</md-td>
      <md-td>在模块子工程创建协议的实现类，用来添加开发者实现</md-td>
    </md-tr>
    <md-tr>
      <md-td>在线模式-集成</md-td>
      <md-td>选择本地的一个、多个子模块，创建集成单。该集成单，本质为一组模块的版本组合，后续可基于该组合完成构建</md-td>
    </md-tr>
    <md-tr>
      <md-td>在线模式-发布</md-td>
      <md-td>经过集成单构建的本地调试包，验证通过之后，可以通过发布功能将集成单关联的组件发布到飞书 Maven 仓库，用来后续给客户做交付</md-td>
    </md-tr>
    <md-tr>
      <md-td>离线模式-冲突检测</md-td>
      <md-td>离线模式，飞书包、开发者工程独立编译，环境是隔离的，因此需要在开发者环境基于飞书环境的描述文件额外运行冲突检测，发现并解决飞书、开发者有版本冲突的三方依赖</md-td>
    </md-tr>
    <md-tr>
      <md-td>离线模式-开始构建</md-td>
      <md-td>离线模式，在开发者工程完成开发者部分的构建。然后通过飞书集成工具提供的服务，将开发者部分的构建产物，与飞书母包完成融合，产出最终的定制版飞书</md-td>
    </md-tr>
</md-tbody>
</md-table>
::: 
    
    
 ###   实现详解

```javascript 
    @NativeAppExtensionImpl
    public class NativeAppExtension implements INativeAppExtension, INativeAppPageRouter {
        private static final String TAG = "NativeAppExtension";
        @Override
        public void init() {
        }
        @Override
        public void destroy() {
        }
        @Override
        public String getAppId() {
            return "";
        }
        @Override
        public void pageRoute(Context context, String linkUrl) {
        }
    }
```
- 实现飞书协议组件的 Api 协议。如上示例中的 INativeAppExtension
- 添加注解，用于飞书运行时找到开发者实现。如上示例中的 @NativeAppExtensionImpl
- 在实现类实现对应的方法，完成开发者自有业务逻辑的接入。如上示例中的 pageRoute，完成开发者自定义的登录页面的跳转。

###   代码示例
[alchemy_app_demo_android](http://github.com/larksuite/alchemy_app_demo/blob/main/alchemy_app_demo_android/README.md)

## 构建详解
###   在线模式
- 基于第1 步的开发过程，开发者完成开发之后，通过集成工具的集成、发布功能，将实现组件发布到飞书环境，结合后续飞书控制台的产品、项目的配置，这部分组件最终会在飞书侧交付构建过程中集成到飞书包内。

###   离线模式
- 基于第 1 步的开发过程，开发者完成开发之后，通过集成工具的构建功能，或者飞书提供的 CI 构建脚本配置，在客户自有环境完成自有业务产物构建、与飞书融合操作，并产出最终飞书包。
- 这个过程中，融合用到的飞书母包、环境信息等，通过集成工具在飞书在客户环境私有部署相关资源拉取到。


