---
title: "AppLink的应用"
source_url: https://open.feishu.cn/document/common-capabilities/applink-protocol/applink-introduction/applink-application
last_remote_update: 2022-05-06
last_remote_update_timestamp: 1651824924000
---
最后更新于 2022-05-06

#  AppLink的应用
AppLink协议较为灵活，支持从飞书内部或外部应用打开。当在飞书加载的网页中使用APPLink时，建议使用我们推荐的三种方式来应用APPLink，详见下文。

## 支持从飞书应用外部打开
**在一些条件下**，点击 AppLink 可以直接打开飞书。这些条件与系统、应用、网络、用户行为等因素有关。

在 AppLink 直接打开飞书的**条件不能满足时**，就会通过网页的形式打开 AppLink。AppLink 网页会默认展示下载引导内容，同时自动尝试打开飞书。 
- **PC 端点击 AppLink 一定会先通过网页打开，再尝试打开飞书。**
- AppLink 网页打开飞书可能会伴随弹窗提示，不同的浏览器上表现会略有差异。
- 通过AppLink打开PC端web-view时，请求头Accept-Language差异如下
  1. 3.41版本之前由系统语言决定
  2. 3.41-3.42.4版本默认固定为英文
  3. 3.42.5版本之后由飞书语言决定
  4. 小程序和H5中另分别通过**getSystemInfo**和**getAppLanguage** API提供语言信息

## 支持从飞书应用内部打开
支持从应用内的以下渠道打开 AppLink
- 扫码
- 识别二维码
- 聊天消息中的 AppLink 链接跳转
- 消息卡片中的 AppLink 链接跳转
- 应用内网页中 AppLink 链接跳转

## 在飞书加载的网页中使用Applink
飞书可以通过H5应用或小程序web-view组件等方式加载网页，这类网页中往往需要通过Applink来使用飞书提供的一些能力，比如跳转聊天或打开一个小程序等。
飞书在3.41.0版本对H5应用和小程序web-view组件里加载网页的Webview进行了优化和升级，为了帮助开发者能更好地兼容和使用飞书提供的能力，在这个优化中，对Webview里打开Applink的方式进行了规范。
为了让Applink能够在飞书升级的过程中正常使用，不受版本更新的影响，我们推荐在飞书内加载的网页通过以下方式来使用Applink:

通过修改window.location.href的方式打开Applink
```javascript
window.location.href='https://applink.feishu.cn/client/chat/open?openId=1234567890'
```

通过<a />标签的方式打开Applink
```javascript
<a href="https://applink.feishu.cn/client/chat/open?openId=1234567890" target="xxx" />
```

通过window.open的方式打开Applink(IOS不支持)
```javascript
window.open('https://applink.feishu.cn/client/chat/open?openId=1234567890')
```
通过上述几种方式打开的Applink，能够保障在后续飞书的升级中可以正常使用。如果你的网页中不是通过上述方式打开的Applink，飞书不保证这些调用方式能够在后续升级版本中持续被支持。请尽快修改成推荐方式，以确保你的功能能正常使用。
