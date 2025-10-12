<!--
title: 页面路由
id: 6907569523176816641
fullPath: /uYjL24iN/uUDNuUDNuUDN
updatedAt: 1692954135000
source: https://open.feishu.cn/document/client-docs/gadget/framework/logic-layer/page-routing
-->
# 页面路由

小程序中所有页面的路由由小程序框架管理。框架以栈的形式维护小程序的所有页面，其中页面栈最多为十层。

## 页面栈

当发生路由切换的时候，页面栈的表现如下表所示。

|路由方式|表现类型|
|-----|---|
|初始化|新页面入栈。|
|打开新页面|新页面入栈。|
|页面重定向|当前页面出栈，新页面入栈。|
|页面返回|页面不断出栈，直到目标返回页。|
|Tab 切换|页面全部出栈，只留下新的 Tab 页面。|
|重加载|页面全部出栈，只留下新的页面。|

**getCurrentPages()**

你可以通过 `getCurrentPages()` 函数获取当前页面栈的实例。函数以数组形式按栈的顺序进行获取，第一个元素为首页，最后一个元素为当前页面。

## 路由方式

路由的控制接口说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">路由方式</md-th>
<md-th style="width:50%">触发时机</md-th>
<md-th style="width:15%">路由前页面</md-th>
<md-th style="width:20%">路由后页面</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>初始化</md-td>
<md-td>小程序打开的第一个页面。</md-td>
<md-td>\-</md-td>
<md-td>onLoad, onShow</md-td>
</md-tr>

<md-tr>
<md-td>打开新页面</md-td>
<md-td>调用 API [`tt.navigateTo`](/ssl:ttdoc/uYjL24iN/uYTOz4iN5MjL2kzM) 或使用组件 [`<navigator open-type="navigateTo"/>`](/ssl:ttdoc/uYjL24iN/uMzNuMzNuMzN)。</md-td>
<md-td>onHide</md-td>
<md-td>onLoad, onShow</md-td>
</md-tr>

<md-tr>
<md-td>页面重定向</md-td>
<md-td>调用 API [`tt.redirectTo`](/ssl:ttdoc/uYjL24iN/ucTOz4yN5MjL3kzM) 或使用组件 [`<navigator open-type="redirectTo"/>`](/ssl:ttdoc/uYjL24iN/uMzNuMzNuMzN)。</md-td>
<md-td>onUnload</md-td>
<md-td>onLoad, onShow</md-td>
</md-tr>

<md-tr>
<md-td>页面返回</md-td>
<md-td>调用 API [`tt.navigateBack`](/ssl:ttdoc/uYjL24iN/uADM04CMwQjLwADN) 或使用组件 [`<navigator open-type="navigateBack"/>`](/ssl:ttdoc/uYjL24iN/uMzNuMzNuMzN) 或用户按左上角返回按钮。</md-td>
<md-td>onUnload</md-td>
<md-td>onShow</md-td>
</md-tr>

<md-tr>
<md-td>Tab 切换</md-td>
<md-td>调用 API [`tt.switchTab`](/ssl:ttdoc/uYjL24iN/ukTOz4SO5MjL5kzM) 或使用组件 [`<navigator open-type="switchTab"/>`](/ssl:ttdoc/uYjL24iN/uMzNuMzNuMzN) 或用户切换 Tab。</md-td>
<md-td>\-</md-td>
<md-td>各类情况，可参见下文 **Tab 切换对应的生命周期** 表。</md-td>
</md-tr>

<md-tr>
<md-td>重启动</md-td>
<md-td>调用 API [`tt.reLaunch`](/ssl:ttdoc/uYjL24iN/uEDM04SMwQjLxADN) 或使用组件 [`<navigator open-type="reLaunch"/>`](/ssl:ttdoc/uYjL24iN/uMzNuMzNuMzN)。</md-td>
<md-td>onUnload</md-td>
<md-td>onLoad, onShow</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

::: note
* navigateTo 、 redirectTo 只能打开非 tabBar 页面。
* switchTab 只能打开 tabBar 页面。
* reLaunch 可以打开任意页面。
* 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
* 调用页面路由带的参数可以在目标页面的 onLoad 中获取。 
:::

**Tab 切换对应的生命周期**

示例场景：A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">路由方式</md-th>
<md-th style="width:20%">触发时机</md-th>
<md-th style="width:60%">路由前页面</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>A</md-td>
<md-td>A</md-td>
<md-td>Nothing happend</md-td>
</md-tr>

<md-tr>
<md-td>A</md-td>
<md-td>B</md-td>
<md-td>A.onHide(), B.onLoad(), B.onShow()</md-td>
</md-tr>

<md-tr>
<md-td>A</md-td>
<md-td>B（再次打开）</md-td>
<md-td>A.onHide(), B.onShow()</md-td>
</md-tr>

<md-tr>
<md-td>C</md-td>
<md-td>A</md-td>
<md-td>C.onUnload(), A.onShow()</md-td>
</md-tr>

<md-tr>
<md-td>C</md-td>
<md-td>B</md-td>
<md-td>C.onUnload(), B.onLoad(), B.onShow()</md-td>
</md-tr>

<md-tr>
<md-td>D</md-td>
<md-td>B</md-td>
<md-td>	D.onUnload(), C.onUnload(), B.onLoad(), B.onShow()</md-td>
</md-tr>

<md-tr>
<md-td>D（从转发进入）</md-td>
<md-td>A</md-td>
<md-td>D.onUnload(), A.onLoad(), A.onShow()</md-td>
</md-tr>

<md-tr>
<md-td>D（从转发进入）</md-td>
<md-td>B</md-td>
<md-td>D.onUnload(), B.onLoad(), B.onShow()</md-td>
</md-tr>

</md-tbody>
</md-table>
:::