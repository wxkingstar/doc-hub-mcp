<!--
title: 多维表格记录视图开发指南
id: 7259595966479056897
fullPath: /uAjLw4CM/uYjL24iN/base-extensions/base-automation-extensions/base-record-view-extension-development-guide
updatedAt: 1755081408000
source: https://open.feishu.cn/document/base-extensions/base-record-view-extension-development-guide
-->
# 多维表格记录视图开发指南

## 步骤一：创建插件应用

1. 登录[飞书开发者后台](https://open.feishu.cn/app)。
1. 在开发者后台首页，单击 **创建企业自建应用**，填写应用名称、描述以及图标信息，然后单击 **创建**。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/acdac87264faa1ba8ff7858aaf4907cb_rNnyMYMQR2.png?height=1526&lazyload=true&width=2512)
> 本指南以 **企业自建应用** 为例介绍如何开发多维表格记录视图插件。如果你想创建一个给不同企业使用的应用，可选择 **创建商店应用**。创建商店应用请参考[一、服务商入驻](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uUzNwEjL1cDMx4SN3ATM)。关于 **商店应用** 和 **企业自建应用** 更详细的区别和介绍请查阅 [应用类型简介 - 快速了解飞书中的应用类型 - 开发文档 - 飞书开放平台](/ssl:ttdoc/home/app-types-introduction/overview)。
  
3. 点击左侧 **添加应用能力**，选择 **多维表格插件** ，选择 **记录视图**，最后点击 **+添加**。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/35a93fae56fba125b9aed0640df38388_tWateZGFgV.png?height=1652&lazyload=true&width=3088)![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/af4cfd6e86bb52239145f2d508d79563_PhoyNHbP45.png?height=1652&lazyload=true&width=3088)
4. 记录 App ID 和 BlockTypeID。
在创建出来的页面，记录下 BlockTypeID，切换到 **凭证与基础信息**，记录下 App ID。App ID 和 BlockTypeID将用于项目初始化。

![1.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e8cb00cb15d9a7112d296c22fc50d31a_wPk4qrdZq3.png?height=1632&lazyload=true&width=3070)

![2.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c9beb2bb1e502d89eef472fd732383b1_9FbToKC42W.png?height=1642&lazyload=true&width=3068)



5. 添加域名白名单（可选）
如云文档小组件或多维表格插件在运行时需发起网络请求，则应配置服务器域名白名单。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d95ffbafd9067a848b506289b5c77a09_GLvcWnf0HW.png?lazyload=true&width=3126&height=1708)
  

## 步骤二：搭建开发环境

你需要在本地安装飞书开发者工具并使用工具初始化自动化插件项目。

1. 安装 CLI。
```
npm install @lark-opdev/cli@latest -g -f
```
> CLI 详细使用方式和指令请参考：[飞书开发者工具-命令行](/ssl:ttdoc/uYjL24iN/uEzMzUjLxMzM14SMzMTN/ide-with-commands)。
2. 登录 CLI。
    - CLI 初次使用需要登录，打开终端，执行下面命令登录：
    ```
    opdev login
    ```
    - 这里开发环境选择 `Feishu`：

    ![cli登陆.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/518971a6fc6cbdcef4e3484fc70a06a4_P57faD0tIQ.png?height=264&lazyload=true&width=1680)


    - 选择开发环境后会自动打开浏览器扫码登录页面，请根据指示进行登录：

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/29a9d31d89de178dbb46556595685fc0_eahms9LlJK.png?height=1826&lazyload=true&width=2344)

    - 扫码完成登录后命令行会提示登录成功：

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d09ec83ffa1cff6b5afba3ffde0f46d9_IW2r3RyVnd.png?height=100&lazyload=true&width=734)

3. 创建项目。
使用下面命令创建模板项目：
    - app-dir 需替换成你项目的目录名。
    - view-dir 需替换成你插件的目录名。
    ```
    opdev create ${app-dir}/${view-dir}  -a bitable-extensions -s record-view
    ```
    创建过程中会询问 `Do you need to create a new application?`
    - 选择`No`，则会要求填写步骤一中获取的 ID 信息 ： App ID 和 BlockTypeID。你也可以在创建完成后的项目中修改block.json文件中的blockTypeID和app.json文件中的appId，让代码用于你的其它应用插件。关于这2个文件的详细说明，可以参考本文中问题整理中的**代码上传的原理与二次开发**。

    ![11.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ac5794deb3f0eb5680dcfd7db55b9376_ybELitxpvw.png?height=164&lazyload=true&width=1630)

    >生成的模板task-manager是一个 React Demo Project，符合 NPM Module 定义，如果需要创建其他模板比如vue模板，可以使用`opdev create`命令，按照提示填写项目存放路径，并选择对应模板即可。
    > ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a05d4404ad9c504480516b3e41b71ed4_CiAwJE0zju.png?height=230&lazyload=true&width=1290)
    > 在生成模板的 `block.json` 文件中的 `blockTypeID` 字段就是初始化的时候命令行中所填的 BlockTypeID 。
    >
    > `app.json` 文件中的 `appId` 就是初始化的时候命令行中所填写的 App ID。
    - 选择 Yes ，如果没有ISV资质，将自动创建一个**企业自建应用**以及一个**视图插件**。

    ![12.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7da896035d2beb56f4feb263a6b4148c_uxB7ioDn0r.png?height=202&lazyload=true&width=1654)


    如果有ISV资质，则可以选择创建商店应用`Store Apps`，或者企业自建应用 `Custom Apps`。

4. 初始化项目。
使用下面命令安装项目依赖：
```
cd ${app-dir}/${view-dir} 
npm install
```

## 步骤三：调试

默认创建出来的项目使用 React + Typescript + Webpack 作为开发环境；你也可以选择习惯使用的开发环境，例如 Vue；但请保持使用 Webpack 开发，并安装 [@lark-opdev/block-bitable-webpack-utils](https://www.npmjs.com/package/@lark-opdev/block-bitable-webpack-utils)。

1. 进入调试
执行下面命令启动 WebpackDevServer 进入开发调试。
```
npm run start
```
其会自动帮你打开一篇多维表格文档，并带上 `debugPort=${当前应用端口}` 的调试参数。
ps.如果页面无法点击，无法操作，可以尝试把url上的vb字段去掉。

2. 文档中添加记录视图组件。在打开的多维表格页面中，点击展开按钮。

![13.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3069bd330de9a79ddf4d96ded8f40640_RiuGJ6Aa98.png?height=1148&lazyload=true&width=3474)

3. 点击展开面板右侧的 **+** 号按钮。

![14.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/00cd72cfe5b296e13cb74078a4595ac3_CBVFDjWYMC.png?height=1132&lazyload=true&width=3440)



4. 选择你本地开发的组件（一般是 blk_xxx），点击 **+** **添加插件**。

![15.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1cd341f1dc1fbc4e8239e6f5928a7eef_8F89eheM6P.png?height=1136&lazyload=true&width=2364)



5. 在新 Tab 中调试你的插件。


![16.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1e2758f02a5835af07fdbbd59ff9cff8_fQILjmC3h6.png?height=1006&lazyload=true&width=2378)


### 通过 SDK 调用 API

我们通过 [@lark-opdev/block-bitable-api](https://www.npmjs.com/package/@lark-opdev/block-bitable-api) 这个 SDK 提供了一些 API 能力，可以读写 Bitable 数据，API 列表请参考API列表。
```
// 调用示例
import { bitable } from "@lark-opdev/block-bitable-api";
const tableMetaList = await bitable.base.getTableMetaList();
```

### 申请 API 对应的权限

1. API 的调用受权限管控，请根据具体 API 所需的调用权限进入[开发者后台](https://open.feishu.cn/app/)，找到 **权限管理** 页面，申请 **查看、评论、编辑和管理多维表格（bitable:app）** 和 **查看、评论和导出多维表格（bitable:app:readonly）** 权限。

	点击 **开通权限**，在右侧弹出的界面内选择 **用户身份权限 user_access_token**，再开通权限。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/45d2e61db36c7c9e745ea5dea40cb133_uKCRt8Cdz0.png?height=1560&lazyload=true&maxWidth=600&width=2884)
        
2. （可选）发布应用。 

	如果以上申请的权限在当前租户管理员设置的权限等级是免审权限，则可以申请后直接生效。如果以上申请的权限为需要审核权限，则必须发布应用使配置生效。
    
    1. 在应用详情页左侧进入 **应用发布 > 版本管理与发布** 功能页。
    2. 点击 **创建版本**。

		![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/262335c6bf6833243c30d83c9d8a470d_Jeb9sNPu00.png?height=842&lazyload=true&maxWidth=600&width=2882)
        
    3. 在 **版本详情** 页面，配置应用的版本号、能力、更新说明、可用范围等信息，并在页面底部点击 **保存**。
    4. 在弹窗内点击 **确认发布**。

		提交后需要等待企业管理员审核，审核通过后应用将发布成功，申请的 API 权限才会正式生效。

### 优化调试

- 如果你期望更换打开的多维表格文档，可以更改 `block.json` 中的 `url` 属性。
```
{
  "manifestVersion": 1,
  "blockTypeID": "blk_xxxxxxxxxxxx",
  "projectName": "任务管理小应用",
  "url": "https://example.feishu.cn/base/xxxxxxxxxx"
}
```

## 步骤四：发布与安装

### 发布

1. 上传代码
你可以使用下面命令来使用编译并上传：
```
npm run upload
```
也可以使用下面命令来只上传：
```
opdev upload ./dist
```
上传过程中，需要输入**插件的版本号**，请使用形如 `0.0.1` 的语义化版本（参考：[Semver](https://semver.org/)），且保证版本递增。
你也可以修改block.json文件中的blockTypeID和app.json文件中的appId，让代码用于你的其它应用插件。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c5de5fee643f17a072f933efc0be180d_4rK1W8eqtx.png?height=132&lazyload=true&width=852)

2. 重新进入开发者后台，切换到 **多维表格记录视图**。**小组件版本** 选刚上传时填入的版本号，然后上传图标、填写名称和介绍。最后点击 **保存**。

![20.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d2790f339e867a068e8401d28ab8c77b_f4vnQPR8IA.png?height=1832&lazyload=true&width=3140)


3. 发布
    > 这里以 **企业自建应用** 的发布流程为例。 如果你使用的是 **商店应用**，则需要注意商家发布需要经过严格的审核流程，详细流程请参考[一、服务商入驻](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uUzNwEjL1cDMx4SN3ATM)。


    - 切换到 **版本管理与发布**。然后点击 **创建版本**，填入 **应用** **版本** **号**、**更新说明**（注意：这里的版本是应用版本，一个应用可能有多个插件）。


    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/216148bb03adbc1a63c78a5cfc793324_k1SsNsYNPr.png?height=1722&lazyload=true&width=2940)
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5e790d449a2a769654c24b723e862f9e_btlmCpcETZ.png?height=1704&lazyload=true&width=2388)

    - 确认权限和可见性范围，确认无误后点击 **保存**。
    - 点击 **申请线上发布**，等待管理员审核。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/160cda2a9be1bcf76b4e54bd1e8dd2ce_kEudovrgv8.png?height=1520&lazyload=true&width=3806)

### 安装

这里以企业自建应用为例，应用审核通过后可见用户便可以将你的插件安装到多维表格记录视图中：


![14.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/00cd72cfe5b296e13cb74078a4595ac3_b4eMBvC2rD.png?height=1132&lazyload=true&width=3440)

点击添加插件按钮：



![21.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/308f7e323520bde77108dd6f9da654d6_NQ8Ceu0abq.png?height=1166&lazyload=true&width=2354)

添加后便能够在多维表格的记录视图中看到你的应用了：


![22.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6471530ad344cd3da37a587ec8c1ea3d_7KW2RXrFsD.png?height=884&lazyload=true&width=2248)




## 常见问题

### Q：代码上传的原理与二次开发
当执行npm run upload时，开发工具@lark-opdev/cli会在执行该命令的目录同层级下寻找app.json，并识别其中的appId字段，其中appId的含义便是开放平台中的你的应用的应用凭证，如果想将代码上传到其他的应用，就可以修改app.json中的appId字段为目标应用的appId



![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b62b3ab961ffb3c12969e2a8e5c983df_hMdu7r7yDc.png?height=936&lazyload=true&width=2630)


接下来会在执行该命令下一层级的目录中的block.json中找到blockTypeID，这里的blockTypeID是应用（appId对应的应用）中的某个应用能力的BlockTypeID。

需要注意应用能力的类型需要与代码的模板类型对应上，比如自动化插件代码中的blockTypeID只能填写开放平台中的**多维表格自动化操作**类型的BlockTypeID，而不可填写为**多维表格记录视图**或者**多维表格数据表视图**的BlockTypeID。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e3a1c35fe6cb2b637a299fa56a9ca9e1_NQVm0eXJbG.png?height=788&lazyload=true&width=1956)


然后@lark-opdev/cli会在当前登陆用户的应用中根据根据app.json中appId找到需要上传的目标应用，然后根据blockTypeID在该应用下找到对应的应用能力，最终将代码上传到该应用能力。


如果想要将代码上传到其他的应用能力中，就可以直接修改这2个文件，之后再执行`npm run upload`。

如果上传失败，可以使用`opdev whoami` 命令查看当前登录用户。确保当前用户的开放平台中拥有app.json中appId对应的应用，并且该应用中拥有block.json中blockTypeID对应的应用能力。


