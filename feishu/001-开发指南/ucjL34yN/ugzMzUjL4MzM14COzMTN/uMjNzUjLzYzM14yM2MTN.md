<!--
title: 小程序运行机制
id: 6907569524099596289
fullPath: /uYjL24iN/uMjNzUjLzYzM14yM2MTN
updatedAt: 1692949715000
source: https://open.feishu.cn/document/client-docs/gadget/gadget-operation/operating-mechanism
-->
# 小程序运行机制

小程序运行时包含了启动、前后台，以及销毁机制。本文介绍这些运行机制，并提供启动机制的相关说明。

## 启动小程序

小程序的启动分为两种：

- 冷启动：用户首次打开小程序，或者小程序被客户端主动销毁后再次打开，此时的小程序都需要重新加载启动，该启动方式即为冷启动。

- 热启动：假设用户历史操作中已打开了小程序，后将小程序切至后台运行，然后在一定时间内重新打开该小程序。此时的小程序无需重新启动，只需将后台运行状态切换至前台即可，该切换过程即为热启动。

:::note
在飞书客户端打开小程序存在多种场景，关于这些场景的说明，以及场景对应的小程序打开方式说明，参见[启动小程序相关说明](/ssl:ttdoc/uYjL24iN/uMjNzUjLzYzM14yM2MTN#e716871e)。
:::


## 小程序的前台、后台状态

1. 启动小程序后，小程序的界面展示给用户，此时小程序处于 **前台** 状态。

2. 当用户在小程序右上角点击胶囊按钮关闭小程序，或者按了设备 Home 键离开飞书时，小程序并没有直接销毁，而是进入了 **后台** 状态。

3. 当用户再次打开飞书客户端或再次打开小程序时，小程序又会从 **后台** 进入 **前台** 状态。

## 销毁小程序

### 移动端小程序

一般情况下，只有当小程序进入后台一定时间，或者系统资源占用过高时才会被销毁。具体包括以下几种情况：

- 当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间（5 分钟）后小程序会被销毁。

- 当小程序占用系统资源过高，可能会被系统销毁或被客户端主动回收。

  - 在 iOS 端，当飞书客户端收到内存告警时，会主动进行所有后台小程序的销毁。
  
  - 在 Android 上，最多允许 4 个小程序同时存在，如果超过 4 个在运行，系统会销毁最久未被使用的小程序。
  
### 桌面端小程序

在桌面端，只要小程序没有关闭，会一直处于运行状态。如果关闭了小程序，则会直接被销毁。桌面端小程序有小窗口模式（sidebar）、tab 页签模式（appCenter）、大窗口模式（window）三种。不同模式下的销毁情况如下：

- 小窗口模式（sidebar）：在会话列表中切换会话，或切换飞书最左侧的一级导航栏，都会关闭小程序并直接销毁。

- tab 页签模式（appCenter）：关闭应用 tab 页签，或者关闭小程序，都会直接销毁小程序。

- 大窗口模式（window）：窗口关闭后，小程序会关闭并直接销毁。


## 启动小程序相关说明

### 启动场景

小程序的[场景值](/ssl:ttdoc/uYjL24iN/uQzMzUjL0MzM14CNzMTN)描述了用户打开小程序的路径。小程序在飞书客户端有多种打开场景。不同场景下，你能够指定的打开页或桌面端模式的规则也不同，具体说明参见下表。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">场景值</md-th>
<md-th style="width:20%">能否指定页面</md-th>
<md-th style="width:25%">桌面端小程序模式</md-th>
<md-th style="width:35%">启动场景说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>1001</md-td>
<md-td>否</md-td>
<md-td>不可设置</md-td>
<md-td>从工作台的应用打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1002</md-td>
<md-td>是</md-td>
<md-td>不可设置</md-td>
<md-td>通过会话列表的列表项打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1005</md-td>
<md-td>否</md-td>
<md-td>不可设置</md-td>
<md-td>基于全局搜索功能搜索应用卡片，并通过卡片打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1006</md-td>
<md-td>否</md-td>
<md-td>不可设置</md-td>
<md-td>在工作台中搜索应用卡片，并通过卡片打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1007</md-td>
<md-td>是</md-td>
<md-td>可设置以下模式：
- sidebar
- appCenter
- window</md-td>
<md-td>通过单人聊天会话中的小程序消息卡片（cardlink）打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1008</md-td>
<md-td>是</md-td>
<md-td>可设置以下模式：
- sidebar
- appCenter
- window</md-td>
<md-td>通过多人聊天会话中的小程序消息卡片（cardlink）打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1009</md-td>
<md-td>是</md-td>
<md-td>可设置以下模式：
- sidebar
- appCenter
- window</md-td>
<md-td>在单人聊天会话中，通过小程序消息卡片的内部操作或内部链接打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1010</md-td>
<md-td>是</md-td>
<md-td>可设置以下模式：
- sidebar
- appCenter
- window</md-td>
<md-td>在多人聊天会话中，通过小程序消息卡片的内部操作或内部链接打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1024</md-td>
<md-td>否</md-td>
<md-td>不可设置</md-td>
<md-td>通过应用（小程序、机器人）profile 页打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1069</md-td>
<md-td>是</md-td>
<md-td>可设置以下模式：
- sidebar
- appCenter
- window</md-td>
<md-td>通过第三方应用打开小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1502</md-td>
<md-td>是</md-td>
<md-td>可设置以下模式：
- sidebar
- appCenter
- window</md-td>
<md-td>在一个小程序的 AppCenter 模式中操作打开另一个小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1503</md-td>
<md-td>是</md-td>
<md-td>可设置以下模式：
- sidebar
- appCenter
- window</md-td>
<md-td>在一个小程序的 Window 模式中操作打开另一个小程序。</md-td>
</md-tr>

<md-tr>
<md-td>1504</md-td>
<md-td>是</md-td>
<md-td>可设置以下模式：
- sidebar
- appCenter
- window</md-td>
<md-td>在一个小程序的 Sidebar 模式中操作打开另一个小程序。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

:::note
根据能否指定打开的页面，可以将小程序打开场景分为不能指定页面、能指定页面两类。在桌面端，由于多了模式的概念，打开场景还可以被分为另外两类：不能指定模式、能指定模式。一般不能指定模式的场景是端内的固定入口，能指定模式的场景是暴露给小程序开发者的配置入口。
:::

### 打开逻辑

如果使用热启动的方式打开小程序，可能会自动产生一些跳转。根据不同的[启动场景分类](/ssl:ttdoc/uYjL24iN/uMjNzUjLzYzM14yM2MTN#87726ae6#b216a87b)，可以将这些自动跳转归类为如下表所示。

:::note
下表 **指定参数是否不同** 列字段，是指 AppLink 打开小程序协议中的 `relaunch` 参数，该参数仅当 AppLink 中传入 `path` 参数时才会生效。关于协议中相关参数的详细说明，可参见[打开小程序](/ssl:ttdoc/uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-a-gadget)。
:::

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">上一次打开的页面</md-th>
<md-th style="width:20%">当前打开的页面</md-th>
<md-th style="width:20%">指定参数是否不同</md-th>
<md-th style="width:40%">效果</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>A</md-td>
<md-td>A</md-td>
<md-td>不指定</md-td>
<md-td>保留原来的状态。</md-td>
</md-tr>

<md-tr>
<md-td>A</md-td>
<md-td>B</md-td>
<md-td>不指定</md-td>
<md-td>清空原来的页面栈，打开指定页。</md-td>
</md-tr>

<md-tr>
<md-td>B</md-td>
<md-td>A</md-td>
<md-td>不指定</md-td>
<md-td>清空原来的页面栈，打开指定页。</md-td>
</md-tr>

<md-tr>
<md-td>B</md-td>
<md-td>B</md-td>
<md-td>不指定</md-td>
<md-td>清空原来的页面栈，打开指定页。</md-td>
</md-tr>

<md-tr>
<md-td>B</md-td>
<md-td>B</md-td>
<md-td>否</md-td>
<md-td>保留原来的状态。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

桌面端也会按照上述规则打开小程序，但由于桌面端区分 Sidebar、AppCenter、Window 模式，且同一个小程序的不同模式可能会共存，因此，打开逻辑也和模式相关，具体说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">当前运行的模式</md-th>
<md-th style="width:25%">打开模式</md-th>
<md-th style="width:50%">效果</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>Window</md-td>
<md-td>AppCenter</md-td>
<md-td>热启动 Window 模式。</md-td>
</md-tr>

<md-tr>
<md-td>Window</md-td>
<md-td>Window</md-td>
<md-td>热启动 Window 模式。</md-td>
</md-tr>

<md-tr>
<md-td>Window</md-td>
<md-td>Sidebar</md-td>
<md-td>冷启动 Sidebar 模式。</md-td>
</md-tr>

<md-tr>
<md-td>AppCenter</md-td>
<md-td>Window</md-td>
<md-td>根据当前是否有 Window 模式在运行做相应处理。</md-td>
</md-tr>

<md-tr>
<md-td>AppCenter</md-td>
<md-td>AppCenter</md-td>
<md-td>热启动 AppCenter 模式。</md-td>
</md-tr>

<md-tr>
<md-td>AppCenter</md-td>
<md-td>Sidebar</md-td>
<md-td>冷启动 Sidebar 模式。</md-td>
</md-tr>

<md-tr>
<md-td>Sidebar</md-td>
<md-td>Window</md-td>
<md-td>根据当前是否有 Window 模式在运行做相应处理。</md-td>
</md-tr>

<md-tr>
<md-td>Sidebar</md-td>
<md-td>AppCenter</md-td>
<md-td>根据当前是否有 AppCenter 模式在运行做相应处理。</md-td>
</md-tr>

<md-tr>
<md-td>Sidebar</md-td>
<md-td>Sidebar</md-td>
<md-td>冷启动 Sidebar 模式。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::