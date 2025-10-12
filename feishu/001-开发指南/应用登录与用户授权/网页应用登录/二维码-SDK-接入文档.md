---
title: "二维码 SDK 接入文档"
source_url: https://open.feishu.cn/document/sso/web-application-sso/qr-sdk-documentation
last_remote_update: 2024-11-29
last_remote_update_timestamp: 1732848765000
---
最后更新于 2024-11-29

# 二维码 SDK 接入文档

## 概述

为了实现在网页内部完成授权登录的流程，避免跳转到飞书登录页，保证流畅的体验，可以接入二维码 SDK 将飞书登录的二维码嵌入到网页中。当用户扫码成功后可以通过获取到的授权码来完成后续的授权登录流程。warning
授权码的有效期是 5 分钟，且只能被使用一次。
## 使用方法

在网页中通过 `script` 标签引入 SDK:

```js
<script src="https://lf-package-cn.feishucdn.com/obj/feishu-static/lark/passport/qrcode/LarkSSOSDKWebQRCode-1.0.3.js"></script>
```

引入 SDK 后，通过全局对象 `window.QRLogin` 创建实例:

```js
var QRLoginObj = QRLogin({
    id:"login_container",
    goto: "https://passport.feishu.cn/suite/passport/oauth/authorize?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code&state=STATE",
    width: "500",
    height: "500",
    style: "width:500px;height:600px"//可选的，二维码html标签的style属性
});
```

`window.QRLogin` 入参字段说明：

| 字段名         | 类型           | 属性        | 描述        |
| --------- | --------------- | ------- | --------- |
|`id` | `string` | required | 二维码展示区域的元素id |
| `goto` | `string` | required | 授权页面地址。暂不支持新版登录流程，请参考旧版[登录流程](https://open.feishu.cn/document/common-capabilities/sso/web-application-sso/web-app-overview)
| `width` | `string` | optional | 二维码展示区域的宽（二维码的尺寸固定为250px*250px) |
| `height` | `string` | optional | 二维码展示区域的高 |
| `style` | `string` | optional |  二维码展示区域的样式 | 

`window.QRLogin` 会返回一个方法 `matchOrigin` 用来校验域名是否匹配飞书的域名，并同时会返回一个方法 `matchData` 用来校验数据是否合法。

通过如下方式监听用户扫码事件，当用户扫码并确认授权后，即可获取 `tmp_code`，开发者应将其拼接到入参中的 `goto` 参数后，并跳转到该地址：

```js
var handleMessage = function (event) {         
    // 使用 matchOrigin 和 matchData 方法来判断 message 和来自的页面 url 是否合法
    if(QRLoginObj.matchOrigin(event.origin) && QRLoginObj.matchData(event.data)) { 
        var loginTmpCode = event.data.tmp_code; 
      	// 在授权页面地址上拼接上参数 tmp_code，并跳转
        window.location.href = `${goto}&tmp_code=${loginTmpCode}`;
    }
};

if (typeof window.addEventListener != 'undefined') {   
    window.addEventListener('message', handleMessage, false);} 
else if (typeof window.attachEvent != 'undefined') { 
    window.attachEvent('onmessage', handleMessage);
}
```
之后飞书 OAuth 服务端会返回一个 302 响应，将浏览器重定向到指定的 `redirect_uri` 地址，同时携带 `code`  和 `state` 查询参数。例如，假设你在 `goto` 参数中拼接的 `redirect_uri` 为 [https://example.com/api/oauth/callback/feishu](https://example.com/api/oauth/callback/feishu)，`state` 参数值为 `RANDOMSTRING`，则对应的 302 响应重定向地址为：
```
https://example.com/api/oauth/callback/feishu?code=59bg7a22c77622sqp4c92bbd675954gg&state=RANDOMSTRING 
```
开发者应监听该地址的请求，从中解析出 `code` 以及 `state`：
1. 其中的 `code` 参数即授权码，你可以使用该授权码调用[获取 user_access_token](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)接口获取 `user_access_token`；
1. 安全起见，开发者应校验此处返回的 `state` 参数的值与初始化 SDK 时传递的 `goto` 参数中拼接的 `state` 参数的值是否一致，如果不一致应立刻终止流程。
