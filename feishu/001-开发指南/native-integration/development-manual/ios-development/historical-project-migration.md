<!--
title: 历史工程迁移
id: 7439344654212743171
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/ios-development/historical-project-migration
updatedAt: 1732157988000
source: https://open.feishu.cn/document/native-integration/development-manual/ios-development/historical-project-migration
-->
# 历史工程迁移
## 迁移原因
为了更好地管理集成发布的流程与代码，我们优化了工程结构。该变更涉及工程目录结构以及配置文件中的数据结构，新版工程结构与旧有工程不兼容，因此旧工程需要经过迁移才能由新版集成工具打开。

## 准备工作
1. 基于最新版本的原生集成工具
1. 确保基线版本为 2.5.0
  
  

## 迁移步骤
1. ### 打开目录
      打开旧项目目录
2. ### env_config.json
确保旧项目目录的alchemy文件夹下有env_config.json文件，如果不存在，请从具有该文件的项目中复制一个

3. ### Gemfile

打开下的Gemfile，确保如下所示的activesupport和cocoapods的版本号

```javascript 
gem 'activesupport', '< 7.0' # ruby 2.6兼容

gem 'cocoapods', '1.13.0'
```

4. ### 复制文件

      进入[飞书原生集成工具IDE下载更新文档](https://feishu.feishu.cn/docx/OtX9dXCqYoA9njxawAKcnTd7nob)中，将下面文件复制到旧项目目录中，将内容解压到**旧项目目录中(会有部分文件被覆盖的提示，请确认覆盖)**
      
	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/da8bc8e94cb85abd3a1a62f7f8361b9a_cEsRvxQA4N.png?height=842&lazyload=true&maxWidth=500&width=994)
    
5. ### 迁移组件

下面会以一些旧工程使用的组件为例，分别说明其迁移过程

#### 5.1常规组件: 以LKJsApiExternal为例
其在项目中的目录名称为LKJsApiExternalIMP，目录结构如下
	
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8916dca811b73885068a3a82d8a19f0a_66PR7WzNhm.jpeg?height=350&lazyload=true&maxWidth=500&width=760)
    
1. 在LKJsApiExternalIMP目录下创建Framework文件夹
2. 如果不存在src目录，创建src目录
3. 如果在src目录外，存在.m/.mm/.h/.swift文件, 请移动到src目录中
4. 打开项目目录下的alchemy文件夹，如果不存在integration_config_v2.json，创建
5. 根据alchemy目录下integration_config.json对应信息，在integration_config_v2.json中加入组件的信息，以LKJsApiExternalIMP为例，其在integration_config.json中的部分为

```javascript 
........................................................
    "LKJsApiExternal" : {
        "publishName" : "LKJsApiExternalIMP" ,
        "integrationTypes" : [
            1,
            256
        ],
        "localVersion" : "1.0.1" ,
        "publishVersion" : "0.0.1" ,
        "componentName" : "LKJsApiExternal"
    },
........................................................
```

开始在integration_config_v2.json中加入对应内容，两种情况：
- 如果integration_config_v2.json不存在，那么创建integration_config_v2.json并且加入以下内容保存，代码备注部分替换为integration_config.json中对应值

```javascript 
[
    {
        "integrationModuleName" : " 填入integration_config.json部分的publishName: LKJsApiExternalIMP " ,
        "publishName" : " 填入integration_config.json部分的publishName: LKJsApiExternalIMP " ,
        "dependencies" : [
            {
                "version" : " 填入integration_config.json部分的localVersion: 1.0.1 " ,
                "name" : " 填入integration_config.json部分的componentName: LKJsApiExternal " ,
                "templateUrl" : "" ,
                "integrationType" : 填入integration_config.json部分的integrationTypes数组值的第一个值 1
            }
        ]
    }
 ]
```

- 如果integration_config_v2.json已经存在，那么在integration_config_v2.json最外层的Json数组加入和上面相同的内容


```javascript 
[
    {
        已经存在的内容
        ..............................................
    },
    {
        已经存在的内容
         ..............................................
    },
    在最后加入
    {
       上面的新内容
         ..............................................
    }
 
 ]
```

6. 将LKJsApiExternalIMP.podspec中内容替换为下面内容，代码注释部分替换为integration_config.json中对应值

```javascript 
require 'json'
isLocalIntegrationMode = ENV['is_local_integration_mode'].nil?? false : ENV['is_local_integration_mode']
Pod::Spec.new do |spec|
  spec.name = '填入integration_config.json部分的publishName: LKJsApiExternalIMP'
  spec.version      = "0.0.1"
  spec.summary      = "pod for local build."
  spec.homepage     = "git@code.byted.org:lark/xcode-extension.git"
  spec.license      = "MIT"
  spec.author       = { "guhaowei" => "guhaowei@bytedance.com" }
  spec.source       = { :git => "https://code.byted.org/lark/xcode-extension", :tag => "#{spec.version}" }
  spec.vendored_frameworks = "Framework/*.framework"
  spec.ios.deployment_target = '11.0'
  spec.swift_version = '5.0'
  
  puts "Check isLocalIntegrationMode #{spec.name}: #{isLocalIntegrationMode.to_s}"
  if isLocalIntegrationMode
    spec.source_files = 'src/**/*.{h,m,mm,swift}'
    file = File.read('../alchemy/integration_config_v2.json')
    data_hash = JSON.parse(file)
    added_dependencies = {}
    current_module = data_hash.find { |item| item['publishName'] == spec.name }
    if current_module
      associated_components = current_module['dependencies']
      # 遍历 associated_components

      associated_components.each do |item|
        key = item["name"]
        if !added_dependencies.key?(key)
          # 只有当依赖项还未添加时，才添加依赖项

          version = item['version']
          # 将 key 和 localVersion 添加到 podspec 的 dependency 列表

          spec.dependency key, version
          # 记录已添加的依赖项

          added_dependencies[key] = true
        end
      end
    end
  end  
end
```

#### 5.2 Bundle/Plugins/Extension组件: 以LarkKAPlugins为例

其在项目中的目录名称为LarkKAPluginsIMP，目录结构如下

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/54f21172d69b384dcff6bdc6b48877e0_kafNCnLHzx.jpeg?height=246&lazyload=true&maxWidth=500&width=546)
    
- 执行 **“5.1 常规组件: 以LKJsApiExternal为例”的步骤3，4**，将LarkKAPluginsIMP的信息加入到integration_config_v2.json中

#### 5.3 复合多组件(SubSpec): 以KAEMMServiceIMP为例

其在项目中的目录名称为KAEMMServiceIMP，目录结构如下

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce2f583b5b9833fcc151eb8a1a9c0b11_VfyJrywCak.jpeg?height=388&lazyload=true&maxWidth=500&width=724)
    
KAEMMServiceIMP下集成了**3个组件，KAEMMService/LKJsApiExternal/LKWebContainerExternal**
1. 在LKJsApiExternalIMP目录下创建Framework文件夹
1. 如果不存在src目录，创建src目录
1. 如果在src目录外，存在.m/.mm/.h/.swift文件, 请移动到src目录中，移动后，目录结构应该为

```javascript 
KAEMMServiceIMP
|-- src
    |-- EmmIMP
    |-- JSIMP
    |-- WebIMP
|-- KAEMMServiceIMP.podspec
|-- Framework
```

4. 打开项目目录下的alchemy文件夹，如果不存在integration_config_v2.json，创建
4. 根据alchemy目录下integration_config.json对应信息和使用了哪些组件(**KAEMMService/LKJsApiExternal/LKWebContainerExternal**)，在integration_config_v2.json中加入组件的信息，两种情况:
  - 如果integration_config_v2.json不存在，那么创建integration_config_v2.json并且加入以下内容保存，代码注释部分替换为integration_config.json中对应值
  
```javascript 
[
    {
        "integrationModuleName" : " 填入integration_config.json部分的publishName: KAEMMServiceIMP " ,
        "publishName" : " 填入integration_config.json部分的publishName: KAEMMServiceIMP " ,
        "dependencies" : [
            {
                "version" : " 填入integration_config.json部分的localVersion: 1.0.1 " ,
                "name" : " 填入integration_config.json部分的componentName: KAEMMService " ,
                "templateUrl" : "" ,
                "integrationType" : 填入integration_config.json部分的integrationTypes数组值的第一个值 1
            },
            {
                "version" : " 填入integration_config.json部分的localVersion: 1.0.1 " ,
                "name" : " 填入integration_config.json部分的componentName: LKJsApiExternal " ,
                "templateUrl" : "" ,
                "integrationType" : 填入integration_config.json部分的integrationTypes数组值的第一个值 1
            },
            {
                "version" : " 填入integration_config.json部分的localVersion: 1.0.1 " ,
                "name" : " 填入integration_config.json部分的componentName: LKWebContainerExternal " ,
                "templateUrl" : "" ,
                "integrationType" : 填入integration_config.json部分的integrationTypes数组值的第一个值 1
            }
        ]
    }
 ]
```

  - 如果integration_config_v2.json已经存在，那么在integration_config_v2.json最外层的Json数组加入和上面相同的内容

```javascript 
[
    {
        已经存在的内容
        ..............................................
    },
    {
        已经存在的内容
         ..............................................
    },
    在最后加入
    {
       上面的新内容
         ..............................................
    }
 
 ]
```

6. 将KAEMMServiceIMP.podspec中内容替换为下面内容，代码注释部分替换为integration_config.json中对应值，旧项目的SubSpec需要做特殊处理

```javascript 
require 'json'
isLocalIntegrationMode = ENV['is_local_integration_mode'].nil?? false : ENV['is_local_integration_mode']
Pod::Spec.new do |spec|
  spec.name = '填入integration_config.json部分的publishName: KAEMMServiceIMP'
  spec.version      = "0.0.1"
  spec.summary      = "pod for local build."
  spec.homepage     = "git@code.byted.org:lark/xcode-extension.git"
  spec.license      = "MIT"
  spec.author       = { "guhaowei" => "guhaowei@bytedance.com" }
  spec.source       = { :git => "https://code.byted.org/lark/xcode-extension", :tag => "#{spec.version}" }
  spec.vendored_frameworks = "Framework/*.framework"
  spec.ios.deployment_target = '11.0'
  spec.swift_version = '5.0'
  
  puts "Check isLocalIntegrationMode #{spec.name}: #{isLocalIntegrationMode.to_s}"
    if isLocalIntegrationMode
      spec.subspec '旧PodSpec中定义的SubSpec名称，这里是第一个SubSpec：LKEMMServiceIMP' do |ss|
  # 针对被依赖的组件KAEMMService

        ss.source_files = 'SubSpec对应的源文件，这里应该是src/EmmIMP/**/*.{h,m,mm,swift}'
        file = File.read('../alchemy/integration_config_v2.json')
        data_hash = JSON.parse(file)
        added_dependencies = {}
        current_module = data_hash.find { |item| item['publishName'] == '填入integration_config.json部分的publishName: KAEMMServiceIMP' }
        if current_module
          associated_components = current_module['dependencies']
          # 遍历 associated_components

          associated_components.each do |item|
            key = item["name"]
            if key == '填入被依赖的组件名称，这里是KAEMMService'
              # 只有当依赖项还未添加时，才添加依赖项

              version = item['version']
              # 将 key 和 localVersion 添加到 podspec 的 dependency 列表

              ss.dependency key, version
            end
          end
        end
      end  
    end
    if isLocalIntegrationMode
       spec.subspec '旧PodSpec中定义的SubSpec名称，这里是第二个SubSpec：LKJsApiExternalIMP' do |ss|
  # 针对被依赖的组件LKJsApiExternal

        ss.source_files = 'SubSpec对应的源文件，这里应该是src/JSIMP/**/*.{h,m,mm,swift}'
        file = File.read('../alchemy/integration_config_v2.json')
        data_hash = JSON.parse(file)
        added_dependencies = {}
        current_module = data_hash.find { |item| item['publishName'] == '填入integration_config.json部分的publishName: KAEMMServiceIMP' }
        if current_module
          associated_components = current_module['dependencies']
          # 遍历 associated_components

          associated_components.each do |item|
            key = item["name"]
            if key == '填入被依赖的组件名称，这里是LKJsApiExternal'
              # 只有当依赖项还未添加时，才添加依赖项

              version = item['version']
              # 将 key 和 localVersion 添加到 podspec 的 dependency 列表

              ss.dependency key, version
            end
          end
        end
      end  
    end
    if isLocalIntegrationMode
        spec.subspec '旧PodSpec中定义的SubSpec名称，这里是第三个SubSpec：LKWebContainerExternalIMP' do |ss|
      # 针对被依赖的组件LKWebContainerExternal

        ss.source_files = 'SubSpec对应的源文件，这里应该是src/WebIMP/**/*.{h,m,mm,swift}'
        file = File.read('../alchemy/integration_config_v2.json')
        data_hash = JSON.parse(file)
        added_dependencies = {}
        current_module = data_hash.find { |item| item['publishName'] == '填入integration_config.json部分的publishName: KAEMMServiceIMP' }
        if current_module
          associated_components = current_module['dependencies']
          # 遍历 associated_components

          associated_components.each do |item|
            key = item["name"]
            if key == '填入被依赖的组件名称，这里是LKWebContainerExternal'
              # 只有当依赖项还未添加时，才添加依赖项

              version = item['version']
              # 将 key 和 localVersion 添加到 podspec 的 dependency 列表

              ss.dependency key, version
            end
          end
        end
      end  
    end
end
```
7. 如果迁移成功，在成功载入工程后，点击"查看本地模块按钮"，可以看到如下的信息

	![image (31).png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c7b8c50e0fa6af5022c83d920b76db76_LGmc5Q7ePg.png?height=1472&lazyload=true&maxWidth=500&width=1920)