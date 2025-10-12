---
title: "iOS 跨域场景无法正确存取cookie"
source_url: https://open.feishu.cn/document/develop-web-apps/faq/cross-domain-cookie
last_remote_update: 2023-12-13
last_remote_update_timestamp: 1702448170000
---
最后更新于 2023-12-13

# iOS 跨域场景无法正确存取cookie
## 问题表现

网页应用开发者在页面A中引用了页面B(A和B使用了不同的域名)，这个时候页面B就被认为是第三方链接，产生了跨域访问的场景，此时在B页面中进行了cookie的读取或者设置操作就会失败。常见的场景是在网页中内嵌了云文档链接，或者问卷链接等场景。

![IMG_B50AAF3C3CD2-1.jpeg](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/adb7a941daea12491144140f42552f62_MGQOhbXNrp.jpeg?height=2436&lazyload=true&maxWidth=400&width=1125)

## 问题原因
飞书在iOS系统上使用了WKWebview加载网页，而苹果在2017年发布了[ITP策略](https://webkit.org/blog/7675/intelligent-tracking-prevention/)开始限制WKWebview上的第三方cookie使用，并在2020年开始[完全阻止第三方cookie](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)，所以出现了跨域场景下第三方的页面无法设置和读取cookie。
iOS在系统设置-Safari浏览器中预留了关闭跨域cookie限制的开关，但是对其他App无效。

## 解决方案

### 场景一:拥有跨域页面开发权限

此类场景一般是一个公司内的两个业务系统，只是域名不同，但是账号体系是相同的，开发者也同时具有两个页面的代码权限，那么就可以通过服务端来中转需要传递的数据，在页面A中将需要传递的数据存储在服务端上，并生成信息加密标识，然后通过页面间通信的方式将加密标识传递给页面B，然后在页面B中请求服务端直接获取信息即可;页面间传值有以下两种方式:

#### postMessage

[window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) 方法可以安全地实现对象之间的跨域通信；例如，在页面和它生成的弹出窗口之间，或者页面和嵌入其中的 iframe 之间。

#### URL传值

在页面A中生成一份加密的access_token，然后在加载iframe链接的时候将加密token通过URL查询参数的方式带给iframe，然后在iframe的代码中拿着加密的access_token请求服务端接口完成身份验证并获取数据。

### 场景二:跨域页面为第三方页面

产生跨域cookie问题的页面为第三方页面,通常是自建应用想要内嵌展示云文档、问卷等链接；这类场景无法通过修改内嵌页代码的方式进行兼容，所以如果出现了第三方网站需要使用cookie的场景，那么建议使用新页面来加载第三方页面，比如[window.location.href](https://developer.mozilla.org/en-US/docs/Web/API/Location/href)或者[window.open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)。
