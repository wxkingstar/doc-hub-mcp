<!--
title: 步骤五：配置事件订阅
id: 7238450199739400196
fullPath: /home/quickly-develop-interactive-cards/step-5-configure-event-subscription
updatedAt: 1693214321000
source: https://open.feishu.cn/document/historical-version/quickly-develop-interactive-cards/step-5-configure-event-subscription
-->
# 步骤五：配置事件订阅

机器人接收的消息会以回调事件请求的形式，通过 POST 请求送达到服务端处理。本地服务启动后，回调事件无法请求到内网，需配置公网请求 URL。

:::warning
本教程为了方便实现，使用了反向代理工具 [localtunnel](https://www.npmjs.com/package/localtunnel) 完成内网穿透，暴露本地服务的公网访问入口。**该工具仅适用于开发测试阶段，不可用于生产环境，使用前请确认是否符合所在公司网络安全政策。**
:::

## 操作步骤

1. 运行以下命令获得公网 URL。
   
   ```
   npx localtunnel --port 3000
   ```
   
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b68e66dc3f470208819082758d08886a_sqNT7De44x.png?height=148&lazyload=true&maxWidth=600&width=1048)

2. 在 **事件订阅** 页面，配置 **请求网址 URL**，填入的请求网址为上一步使用代理工具生成的`公网 URL+/webhook/event`。
	
:::note
保存请求网址 URL 时会请求到后端服务，**请求期间需保证本地服务为启动状态**。
:::
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f31f85462d4d29315140d24b23406779_HDzlncfL6d.png?height=964&lazyload=true&maxWidth=600&width=2296)
    
3. 在 **事件订阅** 页面，单击 **添加事件**，搜索并添加 [接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件。
	
:::note
监听事件需要开通对应的权限，为了成功订阅 [接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive) 事件，需要在 **权限管理** 页面，为应用开通 **读取用户发给机器人的单聊消息（im:message.p2p_msg:readonly）** 权限。为了方便演示，在本教程中，已经在[步骤一](/ssl:ttdoc/home/quickly-develop-interactive-cards/step-one-create-and-configure-the-application)中统一开通了所需权限。
:::

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f0d65775d5f65d9b266c70ec8d5419bf_KW3Dp5NApZ.png?height=1276&lazyload=true&maxWidth=600&width=2856)

4. 在 **机器人** 页面，配置 **消息卡片请求网址，** 填入的请求网址为上一步使用代理工具生成的`公网 URL+/webhook/message-card`。
	
:::note
保存请求网址 URL 时会请求到后端服务，**请求期间需保证服务为启动状态**。
:::

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/009b95bb16ba434450b56137d0108862_NP7gDt4WuE.png?height=1002&lazyload=true&maxWidth=600&width=2902)