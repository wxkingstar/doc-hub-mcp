---
title: "步骤四：小程序适配 PC 端"
source_url: https://open.feishu.cn/document/develop-gadgets-(not-recommended)/develop-a-gadget-in-5-minutes/adapt-to-pc
---
最后更新于 2023-08-25

# 步骤四：小程序适配 PC 端

飞书小程序支持在移动端或 PC 端运行。你可以直接使用移动端的小程序代码在 PC 端运行，也可以为你的应用在 PC 端开发独立的小程序。小程序在 PC 端的运行模式支持小窗口和大窗口。

## 小窗口模式

1. 打开已经开发完成的小程序项目，在开发工具左上角单击 **真机调试** 功能并选择 **PC 端** ，然后选择 PC 端模式为 **Window-Semi** 模式。
更多配置说明，可参考 [PC小程序](https://open.feishu.cn/document/uYjL24iN/uIjNzUjLyYzM14iM2MTN)。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/9612e4ae3820b378244f71e4011e320e_LbWcd2vsJP.png?height=1331&lazyload=true&maxWidth=600&width=1640)

2. 在飞书内，通过弹出的小窗口调试小程序。
你需要确保飞书开发者工具的登录账号与飞书登录账号为同一账号，否则真机调试时无法自动唤起小窗口模式的小程序调试页面。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/278d41fef7aa340201ed8279637c7a76_H2hU0p7wl6.png?height=1638&lazyload=true&maxWidth=600&width=2180)

## 大窗口模式

1. 打开已经开发完成的小程序项目，在开发工具左上角单击 **真机调试** 功能并选择 **PC 端** ，然后选择 PC 端模式为 **AppCenter** 模式。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e5fb81feb283d93b2df7c818f9cb5686_e4sNUc4tcT.png?height=954&lazyload=true&maxWidth=600&width=2086)

2. 在飞书内，通过弹出的大窗口调试小程序。
你需要确保飞书开发者工具的登录账号与飞书登录账号为同一账号，否则真机调试时无法自动唤起大窗口模式的小程序调试页面。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/60e815c43669fbb0933320b373f06503_BsKIsckISy.png?height=1658&lazyload=true&maxWidth=600&width=2202)

## 为 PC 端开发适配的小程序

在大窗口模式下，如果你认为移动端小程序代码配置的页面样式不适配（例如，按钮样式过长），则可以为 PC 端开发独立的小程序，以适配 PC 页面的展示效果。

1. 在飞书开发者工具内，将`app.json`文件替换为以下内容，并保存。

`ext`节点中单独为 PC 端定义了新的首页`pages/PC/pc-index`。

```
    {
      "pages":[
        "pages/index/index",
        "pages/PC/pc-index"
      ],
      "window":{
        "backgroundTextStyle":"light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "小程序",
        "navigationBarTextStyle":"black"
      },
      "ext": {
        "defaultPages": {
          "sidebarMode": "pages/index",
          "PCMode": "pages/PC/pc-index"
        }
      }
    }
    ```

2. 依次创建以下文件。

- `pages/PC/pc-index.ttml`
    - `pages/PC/pc-index.js`
    - `pages/PC/pc-index.ttss`

PC端小窗口模式仍然沿用 移动端模式的首页配置，即`"sidebarMode": "pages/index"`

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/30c417895f8b98d03e3a21e211f4cef0_t6UJIsMSJ7.png?height=926&lazyload=true&maxWidth=240&width=426)

3. 将之前已写的 `index.js` `index.ttml` `index.ttss`中的内容对应复制到`pc-index.js` `pc-index.ttml` `pc-index.ttss`文件中，然后保存文件。

4. 打开`pc-index.ttss`文件，将按钮的样式调整为以下代码，将button组件的宽度设定为100px：

```
    .personal-sign-button {
      margin-top: 25px;
      width: 100px;
    }
    ```

5. 再次在开发工具左上角单击 **真机调试** 功能并选择 **PC端** ，然后选择PC端模式为 **AppCenter** 模式。

如下图所示，PC端的按钮效果已调整。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/977f20f6aac533c348832cdf8abfdae8_JRD4lWvkOE.png?height=831&lazyload=true&maxWidth=600&width=1640)

## 相关操作

飞书提供了独立为 PC 小程序写一个代码程序包的方式。只需要在 [开发者后台](https://open.feishu.cn/app) 单独为 PC 小程序上传示例代码包即可。更多用法参见 [PC 小程序](https://open.feishu.cn/document/uYjL24iN/uIjNzUjLyYzM14iM2MTN)。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e6a1e2a03f37b62229f780e227a9bb7_hdFvsCH4JW.png?height=1458&lazyload=true&maxWidth=600&width=2490)
