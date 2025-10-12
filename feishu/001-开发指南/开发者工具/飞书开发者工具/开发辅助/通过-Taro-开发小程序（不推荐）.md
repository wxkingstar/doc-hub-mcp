---
title: "通过 Taro 开发小程序（不推荐）"
source_url: https://open.feishu.cn/document/tools-and-resources/development-tools/develop-gadget-with-taro
last_remote_update: 2024-12-05
last_remote_update_timestamp: 1733390540000
---
最后更新于 2024-12-05

# 基于 Taro 开发小程序

**Taro** 是一个开放式跨端跨框架解决方案，通过 Taro 能够有效提升开发效率，并可以打破运行平台的限制降低维护成本。

-   支持常用开发框架。使用小程序的原生代码编辑非常复杂，而 Taro 则支持使用完整的 **React /** **Vue** **/ Vue3 / Nerv** 等框架来进行开发。
-   一套代码多平台运行。Taro 可以支持转换到 H5、ReactNative 以及任意小程序平台。当业务要求同时在不同的平台都可以提供服务时，针对不同的端去编写多套代码的成本显然非常高，如果使用 Taro 则只编写一套代码就能够适配到多端的能力就显得极为需要。

# 创建飞书应用

操作平台：[飞书开放平台-开发者后台](https://open.feishu.cn/app/)

## 创建飞书应用

进入[飞书开放平台—开发者后台](http://open.feishu.cn/app)创建一个名为 `hello-world` 的自建应用。

创建成功后，可以看到 `hello-world` 应用被添加到企业自建应用目录中，点击进入应用详情页可以看到新创建的应用。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ba88e9e7bf7ee16dd117bc86eb0d5c6b_mNvDZLCXIF.png?lazyload=true&width=1280&height=429)

在**应用详情**页点击左侧菜单栏 **凭证与基础信息** ，查看右侧 **应用凭证** 下的 App ID（App ID 是应用的唯一标识），点击可以直接复制应用的 App ID。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4a114e617cc58fe5b6729cbbb3a5ef3e_9TYeH0Snm5.png?lazyload=true&width=1640&height=1227)

## 配置飞书应用

-   配置协作成员

若你的应用需要多人协作管理，则你可以在「成员管理」模块为应用添加管理员、开发人员和运营同学。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/91befc52ee683bd537e7093f258d1124_3ZwSgg4W1f.png?lazyload=true&width=1916&height=954)

-   根据需要申请权限

若你需要调用飞书提供的接口，则需要模块根据接口的需要在「权限管理」来申请具体的权限

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/704a6f32da169393617ada663a3b3047_1QcP9EBGkC.png?lazyload=true&width=1897&height=916)

-   根据需要订阅事件

飞书向应用推送订阅的事件，例如部门变更、签到通知、打卡通知等。若你需要实时获取某些事件的发生，则你可以在「事件订阅」模块进行配置，告知飞书需要推送消息到哪个 url，并选择具体的事件

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ae9b6edd1a756a4348a3fb4b195f0857_TMFVLzn6ho.png?lazyload=true&width=1906&height=968)

# 基于 Taro 开发应用
操作手册：[Taro 开发工具](https://docs.taro.zone/docs/GETTING-STARTED)

## 安装 Taro 开发工具

> Taro 项目基于 node，请确保已具备较新的 node 环境（>=12.0.0），推荐使用 node 版本管理工具 [nvm](https://github.com/creationix/nvm) 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 。

首先，你需要使用 npm 或者 yarn 全局安装 `@tarojs/cli`，或者直接使用 [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b):

```
 # 使用 npm 安装 CLI
$ npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

## 项目初始化

如果是首次创建项目，可以通过 CLI 工具快速创建模版项目，并基于此进行二次开发。

```shell
taro init myApp
```

## 编译小程序

从Taro v3.1+ 开始，使用 Taro 插件能支持编译飞书小程序，具体可参考[通过Taro开发飞书小程序](https://docs.taro.zone/docs/GETTING-STARTED#%E9%A3%9E%E4%B9%A6%E5%B0%8F%E7%A8%8B%E5%BA%8F)

-   安装插件

```
yarn add @tarojs/plugin-platform-lark
```

-   配置插件，插件使用方式可以参考[这里](https://github.com/NervJS/taro-plugin-platform-lark)

```js
config = {
  // ...
  plugins: [
    '@tarojs/plugin-platform-lark'
  ]
}
```

-   配置项目

在项目根目录下创建 project.lark.json 或 project.tt.json (这个配置文件包含在官方模版中)，常用的的配置内容如下，这里的 appid 需要填写创建飞书应用时拿到的 App ID，后面调试和上传飞书小程序会用到：

```json
{
  "miniprogramRoot": "./",
  "projectname": "taro-lark",
  "description": "taro-lark",
  "appid": "touristappid",
  "setting": {
    "urlCheck": true,
    "es6": true,
    "postcss": false,
    "minified": false
  },
  "compileType": "miniprogram"
}
```

- 添加编译命令

在 package.json 中添加打包命令：

```json
{
  "scripts": {
    "build:lark": "taro build --type lark",
    "dev:lark": "npm run build:lark -- --watch"
  }
}
```

-   编译项目

```
# yarn
$ yarn dev:lark
$ yarn build:lark

# npm script
$ npm run dev:lark
$ npm run build:lark

# 仅限全局安装
$ taro build --type lark --watch
$ taro build --type lark

# npx 用户也可以使用
$ npx taro build --type lark --watch
$ npx taro build --type lark

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type lark --watch # Windows
$ NODE_ENV=production taro build --type lark --watch # Mac
```

编译完成后，你会发现文件目录如下：

```
├── dist                   编译结果目录
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── pages              页面文件目录
|   |   ├── index          index页面目录
|   |   |   ├── index.js   index页面逻辑
|   |   |   └── index.css  index页面样式
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```

##

# 调试与上传小程序

操作工具：[飞书开发者工具](https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN)

-   ## 调试飞书小程序

1.  下载[飞书开发者工具](https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN)并安装。
2.  点击「导入项目」，选择 Taro 编译后的 **dist目录。（注意：不能把整个项目文件都直接导入）**

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/86e07a2a5859303dbf49c87f184b1f9d_vNFqJdBjOi.png?lazyload=true&width=2856&height=1482)

3.  打开项目后，关闭「编辑器」。这是因为 dist 文件夹下是对 Taro 项目编译后的产物，所以不能直接修改 dist 文件。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/3839133d3c0759ed1bb2ab43d67ed7e4_zLj8Gnh5JH.png?lazyload=true&width=2856&height=1744)

4.  通过模拟器与调试器，在飞书开发者工具上进行调试。
5.  点击「预览」或「真机调试」，体验小程序在真机上运行的效果。

注意，完成这一步需要先登录飞书开发者工具，且登录身份需要与应用的协作者保持一致。具体可参考「配置协作成员」

6.  若发现效果不符合预期，则需要进入 Taro 项目修改代码，重新编译后再重复上述步骤。若效果已符合预期，就完成代码开发。

## 上传小程序包

完成代码开发、预览和调试之后可以直接通过飞书开发者工具上传小程序代码。

# 发布飞书应用
操作平台：[飞书开放平台-开发者后台](https://open.feishu.cn/app/)

## 开启小程序

在开发者后台中**应用详情页 > 应用功能 > 小程序**下，打开 **启用小程序**开关，选择最新小程序的版本，点击保存按钮，确认保存成功。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce655cd035540b0ac246899f24ab0172_uQJeKq7Agi.png?lazyload=true&width=1280&height=741)

## 更新小程序版本

紧接着上一步，在开发者后台中**应用详情页 > 应用功能 > 小程序**下，打开 **启用小程序**开关，选择最新小程序的版本，点击保存按钮，确认保存成功。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce655cd035540b0ac246899f24ab0172_lkJA6p64Nk.png?lazyload=true&width=1280&height=741)

## 发布应用

1.  在应用详情页面，点击左侧 **版本管理与发布** 进入版本管理与发布页面，点击 **创建版本** 按钮，进入创建版本详情页。
1.  在创建版本页面下，填写以下信息：

-   版本号： **1.0.0 或者其他正确的版本号**

-   最低兼容飞书版本： **你需要兼容的版本**

-   更新说明： **你的更新说明**

-   可用性状态： **自己和其他你需要使用该应用的用户**

填写完成后点击底部 **保存** 按钮。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e836a5876612bdfbd0dd3b0fcce22834_NNwn2vNZQW.png?lazyload=true&width=1280&height=936)

3. 保存成功后，点击右上角 **申请发布** 按钮。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ab4222fa3ec19fb7339b269a64af824a_mwuOIAJpQh.png?lazyload=true&width=1280&height=780)

**在管理员对这个发布申请完成审核之后**，我们就可以在后台看到应用处于 **已发布** 状态。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f8db3056df9e5a98c8b58b46d2d2cc0a_D9oxkLygz5.png?lazyload=true&width=1280&height=780)

# FAQ

Q：使用 Taro + TypeScript 来开发飞书小程序时，API 和组件的类型提示错误如何处理？

A：飞书小程序相关的类型提示需要从插件中手动引入，也就是要在项目中 global.d.ts 文件头部添加如下一行：

```
/// <reference path="./node_modules/@tarojs/plugin-platform-lark/types/shims-lark.d.ts" />
```

Q：Taro 项目编译出错如何处理？

A：可以使用 Taro 官方的[问题反馈途径](https://github.com/NervJS/taro/issues)，提相关的 issue。

Q：飞书新开放的接口和组件还不支持怎么办？

A：可以通过「飞书开发者工具/反馈」与我们联系，也可以通过 Taro 官方的[插件](https://github.com/NervJS/taro-plugin-inject)来解决。
