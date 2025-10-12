<!--
title: 配置桌面端小程序
id: 6907569743419850754
fullPath: /uYjL24iN/uIjNzUjLyYzM14iM2MTN
updatedAt: 1692949740000
source: https://open.feishu.cn/document/client-docs/gadget/introduction/-pc-gadget
-->
# 配置桌面端小程序

飞书小程序可运行在移动端和桌面端，其中，你可以根据实际情况，选择直接使用移动端的小程序代码在桌面端运行，也可以为你的应用在桌面端开发独立的小程序。桌面端的小程序支持小窗口和大窗口模式，且支持多种打开方式，便于你开发适配于桌面端大屏幕的小程序。本文介绍桌面端小程序的窗口模式、打开方式，以及桌面端小程序的代码包类型。

## 桌面端小程序的运行模式

### 小窗口模式

小程序在桌面端运行时，默认支持小窗口模式。该模式运行时的效果与移动端的效果较为接近，示例效果如下图所示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4a8562938590c6b7128e97c6146e1d1d_u0nBx5oshF.png?height=1272&lazyload=true&maxWidth=600&width=2182)

### 大窗口模式

小程序提供了 [ext 全局配置项](/ssl:ttdoc/uYjL24iN/uEDNuEDNuEDN#8959728c)。你可以在小程序的项目中，通过根目录下的 app.json 文件，设置 ext > defaultPages > PCMode 参数，来指定大窗口模式的默认启动页面。
```
{
  "pages": [
    "pages/index/index",
    "pages/logs/index",
    "pages/order/inde",
    "pages/chat/index"
  ],
  "ext": {
    "defaultPages": {
      "sidebarMode": "pages/component/index",//小窗口模式启动小程序时的默认启动页面
      "PCMode": "pages/PC/component/index"//大窗口模式启动小程序时的默认启动页面
    }
  }
}
```
当配置生效后，在桌面端打开小程序时将会使用大窗口模式。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a82c7c24bdb6617c7c5540c9e0459dc9_O5JdwXEik0.png?height=1212&lazyload=true&maxWidth=600&width=1822)

- 启用小程序的大窗口模式后，在飞书桌面端的工作台中打开小程序时，将默认使用大窗口模式。

- 启用小程序的大窗口模式后，如果你的小程序应用同时还启用了机器人、网页应用的能力，则在飞书客户端对应的应用卡片内，会显示 **打开应用** 的入口。如果没有配置大窗口模式（PCMode）的页面，或者配置未生效，则不会显示 **打开应用** 入口。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2b987d9958a35adf0cb1e3aa2850d472_oKMBXLE68F.png?height=1152&lazyload=true&maxWidth=600&width=2118)

### Applink 打开小程序的方式

除了通过小窗口、大窗口模式直接打开桌面端小程序，你还可以通过 [Applink](/ssl:ttdoc/uYjL24iN/ucjN1UjL3YTN14yN2UTN) 打开小程序。该方式可以在 Applink 链接中添加`mode`参数控制小程序的打开方式。
- 小窗口模式的`mode`参数取值范围

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">mode 参数值</md-th>
<md-th style="width:40%">场景说明</md-th>
<md-th style="width:40%">效果示例</md-th>

</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>mode=sidebar-semi</md-td>
<md-td>在 IM 聊天页面启动时，以侧边栏的形式打开小程序。</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/57fddcbfaf01a265e5dc9f8529b7453d_Yw66YX0Qjg.png?height=1226&lazyload=true&width=2104)</md-td>
</md-tr>

<md-tr>
<md-td>mode=sidebar-semi</md-td>
<md-td>在 IM 聊天页面之外的场景启动小程序时，会以独立小窗口的形式打开。</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7073f53b6efc1bea1aa3419230d3b1f0_vJDUU2Zj5j.png?height=1166&lazyload=true&width=2062)</md-td>
</md-tr>

<md-tr>
<md-td>mode=window-semi</md-td>
<md-td>以独立小窗口的形式打开小程序。</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/02d37d9aa8628c3b5f7472f72361a859_sQV1PvnRzh.png?height=1272&lazyload=true&width=2182)</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

- 大窗口模式的`mode`参数取值范围

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">mode 参数值</md-th>
<md-th style="width:40%">场景说明</md-th>
<md-th style="width:40%">效果示例</md-th>

</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>mode=appCenter</md-td>
<md-td>以工作台 tab 页签的形式打开小程序。</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/da3e81a9ed0feb4f3527ce209338eeaa_4T3qyCiw6d.png?height=1206&lazyload=true&width=1820)</md-td>
</md-tr>

<md-tr>
<md-td>mode=window</md-td>
<md-td>以独立大窗口的形式打开小程序。</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/937c1f77a7d426223ad82ddc40f7ca6b_YMZ7YfFuZC.png?height=1184&lazyload=true&width=2026)</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 桌面端小程序代码包

当你使用[飞书开发者工具](/ssl:ttdoc/uYjL24iN/ucDOzYjL3gzM24yN4MjN)开发并上传小程序后，在[开发者后台](https://open.feishu.cn/app)对应的小程序应用中，需要完成相应的移动端、桌面端小程序配置，其中在配置桌面端小程序时，需要先选择小程序代码包。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ff90b4f125548d01282c166cdd2bfa34_xsSBbCsV5b.png?height=1208&lazyload=true&maxWidth=600&width=2216)

桌面端小程序可选择的代码包有移动端小程序包，以及独立小程序包。

- 移动端小程序包：如果你希望在同一个工程内同时维护移动端和桌面端小程序，则可以在完成小程序开发后，仅上传一份移动端小程序至开发者后台的应用中，并在应用的小程序配置中，为桌面端选择使用移动端小程序代码包。

- 独立小程序包：如果你希望独立维护移动端小程序和桌面端小程序，则可以分别上传各端小程序至开发者后台的应用中，并在应用的小程序配置中，为桌面端选择使用独立小程序包。

以上两类小程序包所实现的桌面端小程序，在最终的使用上没有差异，你可以根据研发团队在小程序开发阶段的习惯选择适配的方式。

### 使用移动端小程序包

开放平台默认允许桌面端小程序使用移动端小程序包，当你在小程序应用中为桌面端配置了 **使用移动端小程序包** 后，无需其他单独的配置，只需要在桌面端完成小程序的功能测试即可。

使用该代码包后，桌面端小程序的打开方式会按照[运行模式](/ssl:ttdoc/uYjL24iN/uIjNzUjLyYzM14iM2MTN#37991f21)中设置的 mode 参数执行。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dc71b0b278e51dafc30ccf02fd073451_mZbMJoQIkz.png?height=444&lazyload=true&maxWidth=600&width=1678)

### 不使用移动端小程序包

当你在飞书开发者工具内，仅上传移动端小程序时，可以在开发者后台的小程序应用中选择 **不使用移动端小程序包**。选择该类型后，当在桌面端使用 Applink 等方式打开小程序时，会以二维码的方式引导用户使用飞书移动端扫码打开应用。

- 飞书开发者工具上传移动端小程序图示如下。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/96595f7dfa611d40690e74f3d69812fa_XZkDkkWeaj.png?height=1584&lazyload=true&maxWidth=600&width=2878)

- 开发者后台的小程序应用中，小程序配置图示如下。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/88e58051f6886098c6026bd4db5bef1d_2eCMpHKzxX.png?height=930&lazyload=true&maxWidth=600&width=1690)

- 在桌面端打开小程序时，出现的二维码示例如下图所示。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c79faa9b501411585f29efa0e5317e36_AQ75cG61vE.png?height=1540&lazyload=true&maxWidth=600&width=2868)

### 使用桌面端独立小程序包

如果你希望独立维护移动端小程序代码和桌面端小程序代码，则在飞书开发者工具内上传小程序时，可以分别上传移动端和桌面端。当你上传桌面端小程序后，在开发者后台的小程序应用中可以选择 **使用独立小程序包**。

- 飞书开发者工具上传桌面端小程序图示如下。
    
:::note
在飞书开发者工具内上传 PC 端，可以避免桌面端小程序的 PCMode 参数配置不生效。
:::
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/de3deae3d439f346fa277490e9ad87a4_fGn9eHjVXd.png?height=1584&lazyload=true&maxWidth=600&width=2880)

- 开发者后台的小程序应用中，小程序配置图示如下。
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/681412055a1ce914a41b9279cff21779_5a5IFHM2Gm.png?height=946&lazyload=true&maxWidth=600&width=1710)