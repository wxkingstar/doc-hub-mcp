---
title: "通过 uni-app 开发小程序（不推荐）"
source_url: https://open.feishu.cn/document/tools-and-resources/development-tools/develop-gadget-with-uni-app
---
最后更新于 2024-12-05

# 基于uniapp框架开发飞书小程序

uni-app 是一个开放式跨端跨框架解决方案，通过 uni-app 能够有效提升开发效率，并可以打破运行平台的限制降低维护成本。

-   支持常用开发框架。使用小程序的原生代码编辑非常复杂，而 uni-app 则支持使用完整的**Vue**框架来进行开发，不需要转换开发思维、不需要更改开发习惯。
-   是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、Web（响应式）、以及各种小程序平台。

# 1.创建飞书应用
操作平台：[飞书开放平台-开发者后台](https://open.feishu.cn/app/)

## 创建飞书应用

进入[飞书开放平台—开发者后台](http://open.feishu.cn/app)创建一个名为 `hello-world` 的自建应用。

创建成功后，可以看到 `hello-world` 应用被添加到企业自建应用目录中，点击进入应用详情页可以看到新创建的应用。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ba88e9e7bf7ee16dd117bc86eb0d5c6b_tZ6iQ639C3.png?lazyload=true&width=1280&height=429)

在**应用详情**页点击左侧菜单栏 **凭证与基础信息** ，查看右侧 **应用凭证** 下的 App ID（App ID 是应用的唯一标识），点击可以直接复制应用的 App ID。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/d12aa36912edccdd898afac124d4b20a_49fyu3QgKa.png?lazyload=true&width=1640&height=1127)

## 配置飞书应用

-   配置协作成员

若你的应用需要多人协作管理，则你可以在「成员管理」模块为应用添加管理员、开发人员和运营同学。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/b3435eb9b1b476751c27d84094130955_PzalPumWQ1.png?lazyload=true&width=1640&height=760)

-   根据需要申请权限

若你需要调用飞书提供的接口，则需要模块根据接口的需要在「权限管理」来申请具体的权限

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/23ad7963718bcd4768dba88ff5e7bbe7_LGba6aERlv.png?lazyload=true&width=1640&height=741)

-   根据需要订阅事件

飞书向应用推送订阅的事件，例如部门变更、签到通知、打卡通知等。若你需要实时获取某些事件的发生，则你可以在「事件订阅」模块进行配置，告知飞书需要推送消息到哪个 url，并选择具体的事件

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/c5a0b201e907eaa65bbfbcb30fa8d1f8_7W0gwNpQfS.png?lazyload=true&width=1640&height=820)

# 2.基于 uni-app 开发飞书小程序
所需工具：
- 通过[HbuilderX](https://www.dcloud.io/hbuilderx.html)开发应用
- 通过[飞书开发者工具](https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN)调试与上传代码包

## 创建uni-app项目

点击工具栏里的文件 -> 新建 -> 项目，选择`uni-app`类型，输入工程名，选择模板，点击创建，即可成功创建。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8cdd48e3877f268d8568ab3141cdf3e2_LE0UCkI8uC.png?lazyload=true&width=1910&height=1144)

## 调试飞书小程序

1. 进入 hello-world 项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 飞书开发者工具。此时，在「项目路径/unpackage/dist」下会出现 dev 文件夹。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/b2dd6a72cfa5d5f40a321c106b6bcef6_i3SYZSYpsS.png?lazyload=true&width=1908&height=1150)

**注意：** 如果是第一次使用，需要先配置飞书开发者工具的安装路径，才能运行成功。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/6903ebc818f6f4ff0af4ce67d90c4581_olCBi0EV1o.png?lazyload=true&width=2876&height=790)

2.  打开飞书开发者工具并单击「导入项目」，选择「项目路径/unpackage/dist/dev/mp-lark」中的 「mp-lark」文件夹

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/570299c774ee2c9c128805821410882c_oS94ZqsBVm.png?lazyload=true&width=2838&height=1460)

3.  在「详情/项目信息」中，将已创建飞书应用的 APPID 进行更新

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/3755d75d326aaaf3e03dadfbd391c1e0_7kdN9YfHu7.png?lazyload=true&width=1684&height=998)

4.  通过模拟器与调试器，在飞书开发者工具上进行调试
4.  点击「预览」或「真机调试」，体验小程序在真机上运行的效果。

注意，完成这一步需要先登录飞书开发者工具，且登录身份需要与应用的协作者保持一致。具体可参考「配置协作成员」

6.  若发现效果不符合预期，则需要进入 uni-app 开发工具修改代码，重新编译后再重复上述步骤。若效果已符合预期，就完成代码开发

## 发布飞书小程序

由于运行模式下不压缩代码且含有 sourcemap，体积较大；所以若要正式发布，需要先在 HbuilderX 中进行发布。

点击 HbuilderX 工具栏的发行 -> 小程序 -> 飞书（仅适用于 uni-app），此时，在「项目路径/unpackage/dist」下会出现 build 文件夹。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e8df76c74e27b86cfa3c557ff4aebaa_gjwAPYUnRn.png?lazyload=true&width=1692&height=980)

## 上传小程序代码包

1.  在飞书开发者工具中重新导入「项目路径unpackage/dist/build/mp-lark」。

需要选择build文件夹下的文件

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/c6b00d14ef5007f6679c57a3cc5f72b5_YnnlkDWGLa.png?lazyload=true&width=2838&height=1362)

2.  在「详情/项目信息」中，将已创建飞书应用的 APPID 进行更新

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/3755d75d326aaaf3e03dadfbd391c1e0_8pnerwb12Y.png?lazyload=true&width=1684&height=998)

3.点击「上传」即可完成飞书开发者工具 上传小程序代码。

# 3.发布飞书应用
操作平台：[飞书开放平台-开发者后台](https://open.feishu.cn/app/)

## 开启小程序

在开发者后台中**应用详情页 > 应用功能 > 小程序**下，打开 **启用小程序**开关，选择最新小程序的版本，点击保存按钮，确认保存成功。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce655cd035540b0ac246899f24ab0172_8Kf9eWDBf6.png?lazyload=true&width=1280&height=741)

## 更新小程序版本

紧接着上一步，在开发者后台中**应用详情页 > 应用功能 > 小程序**下，打开 **启用小程序**开关，选择最新小程序的版本，点击保存按钮，确认保存成功。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce655cd035540b0ac246899f24ab0172_4tpoVgiqCN.png?lazyload=true&width=1280&height=741)

## 发布应用

1.  在应用详情页面，点击左侧 **版本管理与发布** 进入版本管理与发布页面，点击 **创建版本** 按钮，进入创建版本详情页。
1.  在创建版本页面下，填写以下信息：

-   版本号： **1.0.0** ******或者其他正确的版本号**

-   最低兼容飞书版本： **你需要兼容的版本**

-   更新说明： **你的更新说明**

-   可用性状态： **自己和其他你需要使用该应用的用户**

填写完成后点击底部 **保存** 按钮。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e836a5876612bdfbd0dd3b0fcce22834_1PS1W6ECk8.png?lazyload=true&width=1280&height=936)

3. 保存成功后，点击右上角 **申请发布** 按钮。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ab4222fa3ec19fb7339b269a64af824a_DZLnJMwJNH.png?lazyload=true&width=1280&height=780)

**在管理员对这个发布申请完成审核之后**，我们就可以在后台看到应用处于 **已发布** 状态。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f8db3056df9e5a98c8b58b46d2d2cc0a_I4UlGnYQEn.png?lazyload=true&width=1280&height=780)

# FAQ

**Q：** 飞书新开放的接口和组件还不支持怎么办？

**A：** 可以通过「飞书开发者工具/反馈」与我们联系

**Q** **：** HBuilderX 找不到运行飞书开发者工具的入口怎么办

**A：** 若正式版本中无法找到飞书开发者工具，则可以先下载 HbuilderX 的 alpha 版本

**Q：** HBuilderX 无法正常启动飞书开发者工具怎么办

**A：** 若 HBuilderX 不能正常启动飞书开发者工具，需要开发者手动启动，然后将 uni-app 生成小程序工程的路径拷贝到飞书开发者工具里面，在 HBuilderX 里面开发，在飞书开发者工具里面就可看到实时的效果。
