---
title: "web-view"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/other/web-view
---
最后更新于 2024-06-06

# web-view

web-view 组件是一个可以用来承载网页的容器，会自动铺满整个页面。**开发者需到开发者后台配置网页的可信域名，否则跳转后的页面将被安全拦截（显示为报错页面）**。
注意事项：
- web-view可信域名配置与校验已于2021年11月30日上线，V5.1.0 以上飞书客户端将支持该功能。开发者可以在开发者后台完成配置，详见下文「可信域名配置」。
- **不建议** 在web-view中打开飞书云文档，为保障更好的打开体验，建议使用 [openDocument](https://open.feishu.cn/document/uYjL24iN/ukTN24SO1YjL5UjN) 或 [openSchema](https://open.feishu.cn/document/uYjL24iN/ukzN4IjL5cDOy4SO3gjM) 打开云文档。
- **不建议** 在web-view承载的网页的根节点或者body节点设置字体大小，会影响小程序右上角自带的按钮图标的大小，可能会造成图标错位的情况。

|属性名|类型|默认值|说明|
|-----|---|-----|---|
|src|String|N/A|webview 指向网页的链接。需登录[开发者后台](https://open.feishu.cn/app)，进行小程序web-view可信域名配置。|
|progressbar-color|String|N/A|进度条颜色，HexColor|
|bindload|EventHandler|N/A|网页加载成功时候触发此事件。e.detail = { src }|
|binderror|EventHandler|N/A|网页加载失败的时候触发此事件。e.detail = { src }|
|bindmessage|EventHandler|N/A|网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。|
bindload binderror 支持版本 3.8+

## 代码示例

```html
<view class="container">
  <view class="page-body">
    <view class="page-section page-section-gap">
      <web-view src="https://m.baike.com" bindload="loadDone" binderror = "errorLoad" progressbar-color="#CC3333"></web-view>
    </view>
  </view>
</view>
```

```js
Page({
  loadDone(e) {
    tt.showToast({
      title: "success",
      duration: 2000,
      success: res => {
        console.log(JSON.stringify(res))
      },
      fail: res => {
        console.log(JSON.stringify(res))
      }
    })
  },
  errorLoad(e) {
    tt.showModal({
      title: 'load failed',
      content: e.detail.src,
      showCancel: false,
      cancelColor: '#000000',
      confirmText: 'confirm',
      confirmColor: '#3CC51F',
      success: res => {
        console.log(JSON.stringify(res))
      },
      fail: res => {
        console.log(JSON.stringify(res))
      }
    })
  },
})
```

```json
{
    "navigationBarTitleText": "web-view"
}
```

## API
`<web-view />` 网页中可使用 [JSSDK](https://lf1-cdn-tos.bytegoofy.com/goofy/ee/spm/lark/jssdk/webview/jssdk-1.0.4.js) 提供的接口返回小程序页面。支持的接口有 
* web-view 组件的 sdk 与[网页应用 JSSDK](https://open.feishu.cn/document/uYjL24iN/uITO4IjLykDOy4iM5gjM)不同，因为[网页应用 JSSDK](https://open.feishu.cn/document/uYjL24iN/uITO4IjLykDOy4iM5gjM)是作用在网页容器上的，而web-view是小程序的一个UI组件，请注意不要误用。
* PC 端暂不支持以下 API。

|接口名|说明|
|-----|---|
|tt.miniProgram.redirectTo|参数与小程序接口一致|
|tt.miniProgram.navigateTo|参数与小程序接口一致|
|tt.miniProgram.switchTab|参数与小程序接口一致|
|tt.miniProgram.reLaunch|参数与小程序接口一致|
|tt.miniProgram.navigateBack|参数与小程序接口一致|
|tt.miniProgram.postMessage|向小程序发送消息，会在特定时机（小程序后退、组件销毁、分享）触发组件的message事件|
通过 history.pushState 修改浏览器路径不会触发 bindLoad 事件
redirectTo、navigateTo等页面跳转的api只支持url为 / 开始的绝对路径

## 可信域名配置
支持版本 5.1+
1. 打开[开发者后台](https://open.feishu.cn/app) > 应用详情 > 安全设置，在“Web-view 可信域名”模块中填写符合规范的链接；
2. 在[开发者后台](https://open.feishu.cn/app)  > 应用详情 > 版本管理与发布，完成小程序的版本发布；
3. 在[飞书开发者工具](https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN)（需升级为 V2.7.1）中调试并校验链接，确认链接可正常跳转。

![后台中文版.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/3d82af75e21bdfacbaf46fb9d5012dbc_7et9khdnVW.png?height=2076&lazyload=true&width=3280)
