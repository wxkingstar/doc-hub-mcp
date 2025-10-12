<!--
title: 注册小程序
id: 6907569523177701377
fullPath: /uYjL24iN/uYjNzUjL2YzM14iN2MTN
updatedAt: 1692954097000
source: https://open.feishu.cn/document/client-docs/gadget/framework/logic-layer/gadget-registration
-->
# 注册小程序

注册小程序的逻辑在 app.js 文件中，在该文件的 App 对象里可以实现对小程序生命周期函数的监听，还可以配置全局共享的数据。

:::note
详细的参数含义和使用说明参考[小程序 App](/ssl:ttdoc/uYjL24iN/uMDNuMDNuMDN)。
:::

```js 
// app.js
App({
  onLaunch (options) {
    // Do something initial when launch.
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  globalData: 'I am global data'
}) 
```

此外，通过 getApp 方法可以在任何页面内获取 App 实例（整个小程序只有一个由全部页面共享的 App 实例），通过 getApp 方法获取 App 实例后，可以访问 App 的数据或调用你注册在 App 上的函数。

```js 
// xxx.js
const appInstance = getApp()
console.log(appInstance.globalData) // I am global data 
```
