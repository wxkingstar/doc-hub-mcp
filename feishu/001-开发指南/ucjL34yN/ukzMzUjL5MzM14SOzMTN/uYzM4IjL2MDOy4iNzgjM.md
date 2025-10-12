<!--
title: 分享小程序
id: 6907569745299537922
fullPath: /uYjL24iN/uYzM4IjL2MDOy4iNzgjM
updatedAt: 1698638062000
source: https://open.feishu.cn/document/client-docs/gadget/open-capabilities/gadget-sharing
-->
# 分享小程序

你可以通过小程序的分享功能将小程序分享至群组或个人，被分享者通过小程序卡片可以快速打开并使用小程序。本文主要介绍如何将小程序分享到飞书会话中。

## 前提条件

- 小程序的分享功能需要确保飞书客户端符合以下版本范围。
	- 移动端：飞书 V2.9 版本及以上。
	- 桌面端：飞书 V3.11 版本及以上。

- 调用小程序分享能力之前，需要确保已调用 [login](/ssl:ttdoc/uYjL24iN/uYzMuYzMuYzM) API 成功登入小程序。


## 实现分享功能的函数

在小程序页面函数中包含了 onShareAppMessage 函数，通过该函数可以指定分享的标题、跳转链接和预览图，最终以卡片形式分享到飞书群组或个人。关于函数的介绍与字段说明，可参见[配置页面分享](/ssl:ttdoc/uYjL24iN/uQDNuQDNuQDN#14f1d526)。

- 默认情况下，分享的小程序使用当前屏幕截图的上半部分作为预览图，你也可以通过 imageUrl 参数设置自定义预览图。
- 如果不配置 onShareAppMessage 函数，当前页面不会出现分享按钮。

:::note
配置 onShareAppMessage 函数后，除了实现分享功能之外，还会在小程序右上角的菜单中显示转发按钮。
:::

onShareAppMessage 函数的示例代码配置如下：

```js
Page({
    onShareAppMessage: function (opt) {
        console.log(opt);
        return {
            title: opt.from === 'button' ? 'Button Share' : 'Menu Share',
            path: '/page/API/pages/share/share?a=b&from=' + opt.from,
            PCPath: '/page/API/pages/share/share?a=b&from=' + opt.from,
            PCMode: 'sidebar-semi',
            imageUrl: "https://xxx.jpg",	// 当不需要自定义预览图时，无需传入 imageUrl 参数。
            success(res) {
                console.log('success', res);
            },
            fail(errr) {
                console.error(errr);
            },
        };
    }
})
```


## 配置分享功能入口

调用 onShareAppMessage 函数实现分享功能后，你可以从小程序右上角的菜单中分享小程序，也可以在小程序内添加分享按钮进行分享。

### 入口一：从菜单分享小程序页面

对小程序的某一页面配置分享功能后，用户在使用小程序时，进入该页面可以在右上角的菜单列表中看到分享按钮。点击 **分享**，并选择分享给飞书群组或个人，最终分享信息以消息卡片的形式展现在会话中。示例操作如下：

1. 在小程序右上角的菜单中，点击 **分享**。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/145e4a459973ebf07887769bf6a8ec94_getRUBbSr9.png?height=1230&lazyload=true&maxWidth=600&width=1440)


2. 分享至指定飞书会话后，可查看到小程序的消息卡片信息。
	
    会话内的用户点击卡片，会跳转到小程序对应的页面。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e6b0cbb2705a9c255fc503a716ac7c59_tpyCrFacar.png?height=1116&lazyload=true&maxWidth=300&width=562)


### 入口二：从应用内部分享小程序页面

你可以在指定的页面内添加 [button](/ssl:ttdoc/uYjL24iN/uIjNuIjNuIjN) 组件，并将组件对应的 `open-type` 设置为 `share`，以实现在应用内部分享小程序。button 组件的示例效果如下图，如果小程序的用户点击该分享按钮，并选择分享给飞书群组或个人，则最终分享消息会以消息卡片的形式展现在飞书会话内。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/72fd2572514dc2344fc9a21ca7d0a267_MAQEGKpgmR.png?height=1118&lazyload=true&maxWidth=300&width=538)