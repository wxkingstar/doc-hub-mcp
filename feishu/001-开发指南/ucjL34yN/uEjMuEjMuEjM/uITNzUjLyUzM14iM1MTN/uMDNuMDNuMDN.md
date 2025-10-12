<!--
title: 小程序 App 函数
id: 6907569743420719106
fullPath: /uYjL24iN/uMDNuMDNuMDN
updatedAt: 1692954186000
source: https://open.feishu.cn/document/client-docs/gadget/framework/framework-interface/launching-apps
-->
# 小程序 App 函数

App(Object params) 是小程序框架启动小程序的入口函数, 你可以通过 App(Object params) 的参数指定小程序的生命周期函数和其他一些自定义参数。

## 注意事项

App(Object params) 必须在 app.js 中调用，并且只能调用一次，否则会出现不符合预期的结果。

## 参数说明

App(Object params) 的参数说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">属性</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:15%">是否必填</md-th>
<md-th style="width:25%">描述</md-th>
<md-th style="width:30%">触发时机</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>onLaunch</md-td>
<md-td>function</md-td>
<md-td>否</md-td>
<md-td>生命周期函数，监听小程序初始化。</md-td>
<md-td>当小程序初始化完成时，会触发 onLaunch（全局只触发一次）。该参数也可以使用 [tt.getLaunchOptionsSync](/ssl:ttdoc/uYjL24iN/uAzM1YjLwMTN24CMzUjN) 获取。</md-td>
</md-tr>

<md-tr>
<md-td>onShow</md-td>
<md-td>function</md-td>
<md-td>否</md-td>
<md-td>生命周期函数，监听小程序显示。</md-td>
<md-td>当小程序启动，或从后台进入前台显示，会触发 onShow。</md-td>
</md-tr>

<md-tr>
<md-td>onHide</md-td>
<md-td>function</md-td>
<md-td>否</md-td>
<md-td>生命周期函数，监听小程序隐藏。</md-td>
<md-td>当小程序从前台进入后台，会触发 onHide。</md-td>
</md-tr>

<md-tr>
<md-td>onError</md-td>
<md-td>function</md-td>
<md-td>否</md-td>
<md-td>错误监听函数。</md-td>
<md-td>当小程序发生脚本错误，或者 API 调用失败时，会触发 onError 并带上错误信息。</md-td>
</md-tr>

<md-tr>
<md-td>onThemeChange</md-td>
<md-td>function</md-td>
<md-td>否</md-td>
<md-td>监听系统主题色变化。</md-td>
<md-td>当系统主题色发生变化时触发，同 [tt.onThemeChange](/ssl:ttdoc/uYjL24iN/uUTOuUTOuUTO/darkmode/onthemechange) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>其他</md-td>
<md-td>Any</md-td>
<md-td>否</md-td>
<md-td>你可以添加任意的函数或数据到 Object 参数中，用 this 可以访问。</md-td>
<md-td>\-</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

:::note
iOS 由于自身系统特性，需要注意：
- 从屏幕右上角向下轻扫出现控制中心时，触发一次 onShow。
- 从屏幕顶部中央往下轻扫出现通知中心时，触发两次 onShow。
:::

## 示例代码

```js
App({
  onLaunch: function(options) {
    // Do something initial when launch.
  },
  onShow: function(options) {
      // Do something when show.
  },
  onHide: function() {
      // Do something when hide.
  },
  onError: function(msg) {
    console.log(msg)
  },
  onThemeChange: function({ theme }) {
    console.log(`Current theme is ${theme}`);
  },
  globalData: 'I am global data'
})
```

## onPageNotFound

App() 函数中包含 onPageNotFound 监听器。当要打开的页面并不存在时，会回调这个监听器，并返回以下字段。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:60%">描述</md-th>

</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>path</md-td>
<md-td>String</md-td>
<md-td>不存在页面的路径。</md-td>
</md-tr>

<md-tr>
<md-td>query</md-td>
<md-td>Object</md-td>
<md-td>打开不存在页面的 query。</md-td>
</md-tr>

<md-tr>
<md-td>isEntryPage</md-td>
<md-td>Boolean</md-td>
<md-td>是否本次启动的首个页面。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

示例代码如下：

```js
App({
  onPageNotFound(res) {
    tt.redirectTo({
      url: 'pages/...'
    }) // 重定向页面；如果是 tabbar 页面，请使用 tt.switchTab
  }
})
```

## getApp()

getApp() 用于获取小程序全局唯一的 App 实例。你可以使用该方法获取在 App() 设置的全局变量，或者一些通用方法。示例代码如下：

```js
var appInstance = getApp()
console.log(appInstance.globalData) // I am global data
```
