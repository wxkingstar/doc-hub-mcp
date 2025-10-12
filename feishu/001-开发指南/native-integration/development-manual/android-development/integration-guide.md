<!--
title: 集成指南
id: 7273741289253765124
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/android-development/integration-guide
updatedAt: 1732159513000
source: https://open.feishu.cn/document/native-integration/development-manual/android-development/integration-guide
-->
# 集成指南

## 前置准备

- 权限开通：提供飞书账号，联系飞书项目经理开通权限，并获取服务域名
- 原生集成插件下载：[飞书原生集成工具IDE下载更新文档](http://feishu.feishu.cn/docx/OtX9dXCqYoA9njxawAKcnTd7nob)


## 工程创建指南

### 账号登录

1. 从上面列表中下载对应的飞书原生集成工具插件安装，并重启Android studio

 	 ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/55076a53eccd14f8da1196202725f157_laUykeQl5A.png?height=1328&lazyload=true&maxWidth=500&width=2040)

2. 打开Android studio，进入功能列表页
    1. 功能列表页展示当前账号所有的工程。
    1. 点击工程，可进入代码开发
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/edbb623ae106e225cf47acd592c17f47_i3zGbWz4H9.png?height=1334&lazyload=true&maxWidth=500&width=2050)

3. 在未登录的情况下，Android有两个入口可触发登录流程
    1. 工程列表页，点击「New Feishu Project」触发登录流程，
    1. 工程列表页，打开已有工程，侧边栏点击「飞书原生集成工具」后，点击「登录飞书」触发登录流程
 
 	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/634d33a06cc3acbc863cb4e88ef2b72f_D3V9nSsqt3.png?height=1334&lazyload=true&maxWidth=500&width=2050)
    <br>
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6c3994e1de9bc14c2196b068f166a477_XEVvHCFbup.png?height=1430&lazyload=true&maxWidth=500&width=2416)
4. 触发登录流程后，首先填写服务域名。具体域名可联系对应飞书技术支持同学获取
4. 域名填写后，点击「校验域名」
    1. 校验成功后可进行下一步；
    1. 校验失败时，需要重新填写正确的域名
    
	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c765099d1afb493fa1b7bf96e4d8f870_9bjdjVTJ0B.png?height=1358&lazyload=true&maxWidth=500&width=1800)
    <br>
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/12d1ac09f8ae62ee4f2490ff0cc48b7f_B3CRbW9Hf5.png?height=1358&lazyload=true&maxWidth=500&width=1800)
    <br>
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a9485c7dc11a5c4eadbb4ae33121ffd8_aSiKNtE6Fj.png?height=1358&lazyload=true&maxWidth=500&width=1800)
  
  
6. 域名校验通过后，登录开通权限的飞书账号。飞书账号登录成功后点击“下一步”

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/adaab9b58cdafc3ad68dd96316648496_3rRfKot2iY.png?height=1358&lazyload=true&maxWidth=500&width=1800)
    <br>
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3bbb5cf2eac03fccd96614cc24955584_6nxQ5oexVe.png?height=1380&lazyload=true&maxWidth=500&width=1800)
  
  
  
7. 下拉选择对应要交付的客户名称及客户channel。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/aad1e456b7eb2cfc8abc01a8b2bfdd3e_45cVnfSxpt.png?height=1358&lazyload=true&maxWidth=500&width=1800)
  

### 新工程创建

1. 登录完成后，在工程列表页，点击「新建飞书工程」新建工程
    1. 工程列表页展示当前域名+飞书账号下的所有工程。
    1. 同一个工程可以推送给多个客户（channel)，以当前登录的客户为准。可在右上角点击切换客户
    1. 点击具体存储路径，可查看具体文件夹中的工程内容。点击可进入Android Studio中进行代码开发
	
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/756d76c1b6cf27ab87b871c6fe70634b_cIbu2Vtkxl.png?height=663&lazyload=true&maxWidth=500&width=800)
2. 第一步：选择基线版本、需要开发调用的的组件
2. 未选择的组件，可在后续开发时继续获取
	
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7a09589783907524a9afa699d7cd8586_3D1Qzw1rJb.png?height=1358&lazyload=true&maxWidth=500&width=1800)
  
4. 第二步：填写工程名称及存储路径等基本信息
4. 同一存储路径下，工程名称不可重复
	
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e93b8c92293441f8d3bc26222f210f2c_taeNCRZYdq.png?height=1358&lazyload=true&maxWidth=500&width=1800)
    <br>
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ae7bac8471f19c49120eabbf9ac64871_KhInu9M6ky.png?height=1358&lazyload=true&maxWidth=500&width=1800)
  
6. 创建完成后进入到工程内
    1. 左侧展示已经创建出来的工程内容；
    1. 点击右侧「飞书原生集成工具」，可以查看具体的组件能力
    
	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/86fe009a055cedc54d2284cd34297415_eVnroHiHAY.png?height=1440&lazyload=true&maxWidth=500&width=2422)
    
7. 工程创建完成后，支持切换客户及channel，支持退出登录

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/68573349060b8287a780d4233d7c59e9_eU63EjKVCP.png?height=1434&lazyload=true&maxWidth=500&width=2416)

:::warning
注意：飞书原生集成开发模式分为在线模式、离线模式两种，根据登录的账号、域名、客户判断。**离线模式和在线模式不可混用。**
- 不可在离线工程里面，切换在线模式的客户及channel
- 不可在在线工程里面，切换离线模式的客户及channel
:::

### 历史工程迁移

历史工程需要按照文档迁移，迁移后才可使用本地构建相关功能[历史工程迁移](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/android-development/historical-project-migration)

  
:::note
飞书原生集成根据客户的实际情况，提供了多种构建形式
- 在线模式：开发阶段，通过集成单将一个或多个本地模块、远端组件，在飞书环境下构建出调试包，支持本地构建、远端构建，支持自主打客户包调试，支持单工程支持交付多家客户，并且可提前构建含客户全部SDK的测试包，提前避免多SDK冲突。开发完成后，基于集成单将组件发布到飞书环境，在飞书环境完成最终飞书包构建。
- 离线模式：开发阶段，通过飞书集成工具提供的服务，在开发者工程完成开发者部分代码的构建，并在本地环境完成与飞书母包的融合，产出最终的飞书包。开发完成，在客户私有化环境，自行搭建 CI 流程完成最终飞书包构建。
:::

## 在线模式构建

### **【组件列表】**

1. 组件分为协议组件、能力组件
    1. 协议组件：客户提供实现，飞书调用。此组件可以获取，并发布
    1. 能力组件：飞书提供实现，客户调用 **。** 此组件不可发布
    
	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/924d3a55938b79245688f3f1f67f11ac_qkR1ititeU.png?height=1518&lazyload=true&maxWidth=500&width=2744)
   
2. 当基线组件有新版本时，点击 **升级** ，会升级到当前组件最新的版本号
2. 组件支持 **模块管理** ，可以将组件关联到本地模块中，整体一起集成构建
    1. 默认为空，点击 **添加本地模块** 可创建模块
    1. **勾选** 模块并确认保存，即可将组件关联到本地模块上；**取消勾选**，则组件不再关联到对应的本地模块上。组件与本地模块的关联关系为多对多
    1. 已经勾选关联的本地模块，支持点击 **创建实现类**，在模块子工程创建协议的实现类，用来添加开发者实现
    1. 此处不支持删除已创建的本地模块。若有删除诉求，可直接在代码里面操作删除，从而避免在此处直接删除影响代码开发
	
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7da80a6702a2717d55bb2243de0f6fc4_ZvxfqTG6n5.png?height=1510&lazyload=true&maxWidth=500&width=2738)
   
4. 点击 **查看本地模块，** 可以查看所有创建完成的本地模块，以及模块下关联的所有组件

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b6b74d1d3c84c93e911e189c7fed071b_0MekSVJoUv.png?height=1510&lazyload=true&maxWidth=500&width=2734)
5. 点击 **集成** 可以将所有已经开发的一个或多个本地模块、远端组件创建为集成单。本质为一组模块的版本组合，后续可基于该组合完成构建
    1. 输入集成单名称，选择兼容的飞书版本范围，选择要集成的本地模块、远端组件
    1. 支持自定义已选择的本地模块名称，支持删除已选择的本地模块
    1. 集成单创建完成后，可直接 **去构建**，进入**集成单列表** - **构建详情**页；也可取消，后续按需构建
    
	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/626e32ad6714101ae823cda59c6b127b_triOleoM8u.png?height=1516&lazyload=true&maxWidth=500&width=2730)
    <br>
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5b28c461323985d648cba837dbcb0872_oTgLvy6G9X.png?height=1508&lazyload=true&maxWidth=500&width=2738)
  
  

### 【集成单列表】

1. 所有创建的集成单，都会进入到 **集成单列表**
1. 点击 **集成单详情**，可以查看集成单内容，包含集成单名称、兼容的飞书版本、集成的远端组件
    1. 支持基于集成单内的组件，去构建测试包。点击 **去构建**，进入 **构建详情** 页面
    1. 点击 **编辑**，支持编辑修改集成单名称、兼容飞书版本、远端组件
    1. 验证通过的集成单组件，可以点击 **发布** 去发布所有组件。发布成功的组件会进入到 **发布列表**，同时会进入到[原生集成控制台](https://delivery.feishu.cn/page/console/micro-app/alchemy-web/product-list/list?pageNum=1)，用于后续的出包配置测试交付
    
	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4e672dce5b6b5dc53645a5f69556c316_9Uh2hxj4Un.png?height=1502&lazyload=true&maxWidth=500&width=2736)
    <br>
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d77ad3be24cba79669bcf299a01ec702_9teA5iwEeT.png?height=1508&lazyload=true&maxWidth=500&width=2738)
  
  
3. 点击 **构建详情** ，可选择参数发起构建测试包
    1. 包版本：构建的组件支持的飞书测试包版本
    1. 包类型：32位、64位
    1. 构建环境：选择所需要构建测试包的客户环境
    1. 其他SDK：客户会集成其他家的SDK，可能与当前厂商功能互斥。可通过构建带客户所有SDK的测试包验证
    1. 加速构建：
        1. 开启加速构建时，会使用老代码构建，但是会提升构建速度到分钟级别
        1. 关闭加速构建时，会使用最新代码构建，但是会降低构建速度到小时级别
        
	所有参数选择完成后，点击 **本地构建** 触发构建测试包。构建列表会缓存最近两周构建的测试包数据，开发者可按需下载；点击 **查看详情** 可查看构建的测试包的具体参数配置
    
	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c061926e5a5213f2b5f1eaf8040d4b15_O3TDEF9HKe.png?height=1506&lazyload=true&maxWidth=500&width=2728) 
    <br>
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/41df78be7243982a7a4520ce1490a7be_ONOLkrhphC.png?height=1508&lazyload=true&maxWidth=500&width=2736)
  

### **【发布列表】**

1. **集成单详情** 页面里点击 **发布** 并发布成功的组件，会进入到 **发布列表**，支持按照发布状态筛选
    1. 发布成功：安全合规、兼容性检测通过的组件，显示发布成功；
    1. 发布中：操作发布的组件，飞书侧会进行自动化安全合规、兼容性检测，检测过程中为发布中状态
    1. 发布失败：安全合规、兼容性检测不通过的组件，显示发布失败，点击发布详情里的「检测不通过」支持查看具体不通过的代码原因
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5fddc687ce5dd65dcd3c7dabd3447b50_7nrzNqnq3d.png?height=743&lazyload=true&maxWidth=500&width=1372)
:::note
注意：发布中、发布失败状态的组件是集成单上线前发布的历史组件；集成单上线后，发布列表只展示发布成功的组件，不展示发布中、发布失败的过程数据。
发布成功的组件会进入到[原生集成控制台](https://delivery.feishu.cn/page/console/micro-app/alchemy-web/product-list/list?pageNum=1)，用于组装产品及交付客户等后续流程
:::



### 【调试】
本地构建包为可调试的包。通过 Android Studio 的 Attach Debugger to Android Process 功能可断点调试本地的代码。勾选 Show all processes 然后再选中相应进程即可。<br>
  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/70c0c63cd55489c82e176b50cf41fdc1_SlMrZ2cCo9.png?height=1030&lazyload=true&maxWidth=500&width=1286)

## 离线模式构建

离线模式面向私有化客户，如有需要，请联系飞书项目经理
1. 组件列表分为协议组件、能力组件
    1. 协议组件：客户提供实现，飞书调用。
    1. 能力组件：飞书提供实现，客户调用 **。**
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6b5ba9825bd93eb9ade1eb806b6df769_6acO5D1Hpr.png?height=1514&lazyload=true&maxWidth=500&width=2736)
1. 当基线组件有新版本时，点击 **升级** ，会升级到当前组件最新的版本号
1. 组件支持 **模块管理** ，可以将组件关联到本地模块中，整体一起集成构建
    1. 默认为空，点击 **添加本地模块** 可创建模块
    1. **勾选** 模块并确认保存，即可将组件关联到本地模块上；**取消勾选**，则组件不再关联到对应的本地模块上。组件与本地模块的关联关系为多对多
    1. 此处不支持删除已创建的本地模块。若有删除诉求，可直接在代码里面操作删除，从而避免在此处直接删除影响代码开发
    
	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3f2727a31f58b74e5499065863d8a9b7_NDAtKXrtGr.png?height=1498&lazyload=true&maxWidth=500&width=2730)
    
4. 组件获取并开发完成后，可以根据包类型（Debug包/Release包）、包位数（32位/64位）构建飞书母包，并进行自动化冲突检测
    1. 点击「开始构建」支持根据选项构建飞书母包，构建后的包会在客户的环境下进行集成
    1. 点击「冲突检测」会进行自动化的冲突检测
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/efda52f7d396052dd04fad8298b9ff98_vDZin51Oem.png?height=1510&lazyload=true&maxWidth=500&width=2744)
    
构建出来的飞书母包，会在客户的环境下进行后续的集成、测试等交付流程