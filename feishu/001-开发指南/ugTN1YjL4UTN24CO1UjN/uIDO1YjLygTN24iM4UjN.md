<!--
title: 小程序
id: 6907569744329949185
fullPath: /ugTN1YjL4UTN24CO1UjN/uIDO1YjLygTN24iM4UjN
updatedAt: 1652857245000
source: https://open.feishu.cn/document/faq/gadget
-->
# 小程序
## 小程序常见问题

**1. 可以通过 web-view 组件打开外部浏览器、访问链接吗？**

答：web-view 的网页链接是固定在内置浏览器打开的，不能跳转到外部浏览器打开。但是可以考虑使用[openSchema](/ssl:ttdoc/uYjL24iN/ukzN4IjL5cDOy4SO3gjM)来实现。

**2. 小程序可以获取用户的手机号吗？**

答：因为手机号是用户的敏感数据，飞书无法直接提供用户手机号。你可在小程序内用清晰的文案、操作流程等引导用户绑定、录入自己的手机号，以实现相关业务需求。

**3. 我已经上传了小程序，并且完成了应用发版。为什么我的一些同事在工作台看不到这个应用？**

答：请在管理后台确认你的同事在该应用的“可见性范围”之内。

**4. 我的小程序配置了机器人，打开应用是默认打开机器人，无法进入小程序。**

答：请确认 **开发者后台** - **版本管理与发布** - **创建版本** 时，PC 客户端默认的应用能力是否选择 **小程序**，非 **小程序** 能力就不会打开小程序。   
![图片名称](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/59d0f620c603cb1f4490076392cb3bd7_rK3nbXFLua.png?lazyload=true&width=2438&height=858)


## AppLink


**1. 什么是 AppLink？**

答：AppLink 协议 是一个 URL 协议。AppLink 协议可以用于打开飞书或者飞书的一个页面。 例如  [https://applink.feishu.cn/client/op/open?key1=value1&key2=value2](https://applink.feishu.cn/client/op/open?key1=value1&key2=value2)  就是一个 AppLink。

**2. 我能否通过 Applink 加入新的群聊？**

答：不可以，目前只能打开你已加入的群聊（如下图）。详见[AppLink 协议](/ssl:ttdoc/uYjL24iN/ucjN1UjL3YTN14yN2UTN)。

![Screen Shot 2022-05-16 at 11.07.39.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/784ef3aca94a0080618724511ddcbe19_AtTWViEQJs.png?lazyload=true&width=1712&height=448)


## 跳转链接

**1. 跳转到具体页面，必须对该页面的路径进行转码吗？**

答：建议转码，如“pages/detail/index?instanceId=123”必须转码为“pages%2Fdetail%2Findex%3FinstanceId%3D123”。

**2. 用户通过飞书 和 外部浏览器 都可以打开我的 H5 应用。我该如何区分用户是来自飞书还是外部浏览器？**

答：最简单的方式是在配置网页的时候，配置一个自定义参数，来源不同，参数不同，以此来进行来源判别。最准确的方式是调用 JSAPI 来判定是否为飞书环境。另外，不建议通过 User-Agent 来对环境进行判断，因为 User-Agent 很容易被外部篡改和模仿。

**3. 在飞书桌面端工作台中，是否能够以 sidebar 模式打开小程序？**

答：不能。请以消息卡片作为入口形式，打开 [sidebar模式](/ssl:ttdoc/uYjL24iN/uIjNzUjLyYzM14iM2MTN#%E4%BE%A7%E8%BE%B9%E6%A0%8F%EF%BC%88Sidebar%EF%BC%89%E6%A8%A1%E5%BC%8F) 的小程序。

