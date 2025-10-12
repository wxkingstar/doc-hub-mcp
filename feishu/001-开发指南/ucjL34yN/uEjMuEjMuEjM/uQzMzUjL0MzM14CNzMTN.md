<!--
title: 场景值
id: 6907569745298898946
fullPath: /uYjL24iN/uQzMzUjL0MzM14CNzMTN
updatedAt: 1708602704000
source: https://open.feishu.cn/document/client-docs/gadget/framework/scene-values
-->
# 场景值

场景值用于描述用户打开小程序的路径。小程序在客户端打开有多种场景，本文将介绍各个场景对应的场景值。

## 获取场景值

你可以通过以下方式获取场景值：

- 方式一：在`App`的`onLaunch`方法、`onShow`方法的`options`参数中，可以获取到场景值（`scene`）。

- 调用 [tt.getLaunchOptionsSync](/ssl:ttdoc/uYjL24iN/uAzM1YjLwMTN24CMzUjN) 接口，获取返回值里的 scene 字段。

## 场景值定义

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">场景值</md-th>
<md-th style="width:60%">场景</md-th>
<md-th style="width:25%">适用终端</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>1000</md-td>
<md-td>尚未进行定义的场景。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1001</md-td>
<md-td>从应用中心主入口（应用中心首页和应用分类列表）打开。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1002</md-td>
<md-td>从会话列表的列表项打开。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1005</md-td>
<md-td>从全局搜索里搜出的结果卡片打开。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1007</md-td>
<md-td>从单人聊天会话中小程序消息卡片打开。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1008</md-td>
<md-td>从多人聊天会话中小程序消息卡片打开。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1009</md-td>
<md-td>从单人聊天会话消息所包含的链接或者按钮打开。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1010</md-td>
<md-td>从多人聊天会话消息所包含的链接或者按钮打开。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1011</md-td>
<md-td>通过扫描二维码打开。</md-td>
<md-td>移动端</md-td>
</md-tr>

<md-tr>
<md-td>1012</md-td>
<md-td>长按图片识别二维码。</md-td>
<md-td>移动端</md-td>
</md-tr>

<md-tr>
<md-td>1013</md-td>
<md-td>扫描手机相册中选取的二维码。</md-td>
<md-td>移动端</md-td>
</md-tr>

<md-tr>
<md-td>1024</md-td>
<md-td>从应用（小程序、机器人）的 profile 页打开。</md-td>
<md-td>移动端</md-td>
</md-tr>

<md-tr>
<md-td>1037</md-td>
<md-td>在一个小程序内打开另一个小程序。</md-td>
<md-td>移动端</md-td>
</md-tr>

<md-tr>
<md-td>1038</md-td>
<md-td>从另一个小程序返回上一个小程序。</md-td>
<md-td>移动端</md-td>
</md-tr>

<md-tr>
<md-td>1069</md-td>
<md-td>通过第三方应用打开小程序。</md-td>
<md-td>移动端</md-td>
</md-tr>

<md-tr>
<md-td>1187</md-td>
<md-td>从多任务浮窗启动。</md-td>
<md-td>移动端（[V5.22.0 及以上版本支持](/ssl:ttdoc/uYjL24iN/uAjMuAjMuAjM/version-compatibility)）</md-td>
</md-tr>

<md-tr>
<md-td>1502</md-td>
<md-td>PC 端小程序的 appCenter 模式中打开另一个小程序。</md-td>
<md-td>PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1503</md-td>
<md-td>PC 端小程序的 window 模式中打开另一个小程序。</md-td>
<md-td>PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1504</md-td>
<md-td>通过 IM 的工具栏入口打开小程序。</md-td>
<md-td>PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1505</md-td>
<md-td>在 Mail 打开小程序。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1506</md-td>
<md-td>通过客户端的主导航入口打开小程序。
<md-alert type="tip">
请在 Page 的生命周期获取该 Scene。
</md-alert>
</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1507</md-td>
<md-td>通过客户端的快捷导航入口打开小程序。
<md-alert type="tip">
请在 Page 的生命周期获取该 Scene。
</md-alert>
</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1508</md-td>
<md-td>	在一个小程序的主导航模式中操作打开另一个小程序。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1509</md-td>
<md-td>从单聊的菜单（加号图标）中打开小程序。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1510</md-td>
<md-td>从群聊的菜单（加号图标）中打开小程序。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1511</md-td>
<md-td>消息卡片末尾应用标识链接打开小程序。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1512</md-td>
<md-td>从 appCenter 模式切换至 window 模式。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1513</md-td>
<md-td>通过拦截 web-url 访问移动端小程序。</md-td>
<md-td>移动端</md-td>
</md-tr>

<md-tr>
<md-td>1514</md-td>
<md-td>通过小组或小组详情页打开小程序。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1515</md-td>
<md-td>移动端云空间打开小程序。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1516</md-td>
<md-td>从消息快捷操作打开小程序。</md-td>
<md-td>移动端 & PC 端</md-td>
</md-tr>

<md-tr>
<md-td>1517</md-td>
<md-td>从桌面快捷方式打开小程序。</md-td>
<md-td>移动端</md-td>
</md-tr>

</md-tbody>
</md-table>
:::