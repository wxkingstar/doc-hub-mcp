<!--
title: 步骤一：创建并配置应用
id: 6999971130074480668
fullPath: /home/event-based-messaging/subscribe-to-user-group-entry-events-and-send
updatedAt: 1720776182000
source: https://open.feishu.cn/document/event-based-messaging/subscribe-to-user-group-entry-events-and-send
-->
# 步骤一：创建并配置应用

你需要创建一个企业自建应用，并配置应用权限、事件订阅。

## 操作步骤

1. 登录[飞书开发者后台](https://open.feishu.cn/app)。

2. 在开发者后台首页，单击 **创建企业自建应用**，填写应用名称、描述以及图标信息，然后单击 **创建**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/89e5b015032296920042feb1fe521f43_dGASZ6EtCH.png?height=1364&lazyload=true&maxWidth=400&width=1170)

3. 关联测试企业，生成测试版本的应用。
    
    1. 在应用详情页左侧导航栏，进入 **测试企业和人员** 页面，并在页面右上角单击 **创建测试企业**。
        

        为了满足开发测试阶段频繁变更配置的需求，飞书开放平台提供了[测试企业与人员功能](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)。在开发阶段，推荐开发者使用测试版应用，此**版本中涉及的权限和配置变更都会直接生效，无需管理员审核**，客户端的测试也将在测试租户进行。在所有的开发测试完成之后，切换、手动同步到正式版应用，仅提交一次审核即可，大大加速了开发效率，也降低了对管理员的打扰。

    
    2. 在 **创建测试企业** 对话框，填写 **测试企业名称**、**手机号**、**验证码**，并单击 **确认创建**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2cbe7241da118eea0bd957091dbd5583_mlbOvMWfnV.png?height=564&lazyload=true&maxWidth=400&width=1166)
       
    3. 创建测试企业后，在 **操作** 列，单击 **关联应用**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/341586fdf85d2297f0eb9ef2e85a1b09_05Djky85Cr.png?height=552&lazyload=true&maxWidth=600&width=2950)

    4. 测试企业关联应用后，在页面顶部切换企业应用为测试版应用。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d934d17429ce3722de3fafa4ae4356e_9KgabewSLB.png?height=804&lazyload=true&maxWidth=600&width=3576)
       
4. 在 **应用能力** > **添加应用能力** 页面的 **按能力添加** 页签，找到 **机器人** 卡片，并点击 **添加**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22df3052a9b08d8ac1d80398fc9ff2a8_yIooXQFkBx.png?height=892&lazyload=true&maxWidth=600&width=1692)

5. 在 **开发配置** > **权限管理** 页面，添加以下 API 权限。

	- `im:message:send_as_bot`：以应用的身份发消息
	- `im:chat.members:read`：查看群成员
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b00bb990f4caee2e7146060a3039d3b2_x3z4QxI6M6.png?height=818&lazyload=true&maxWidth=600&width=2212)
   
6. 配置事件订阅，订阅 **用户进群** 事件。
    
    1. 在 **开发配置** > **事件与回调** > **事件配置** 页面，点击 **配置订阅方式** 右侧编辑图标。
    2. 选择 **将事件发送至开发者服务器**，并填写 **请求地址**。
        
        请求地址用于接收开放平台向应用推送的事件消息。当应用订阅的事件发生时，开放平台会向该请求地址发送相应的 HTTP POST 请求。关于配置请求地址的详细说明，参见[配置请求地址](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case)。

        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e4bad2761d994e0e79a877405835864b_KQdTYhI1LU.png?height=990&lazyload=true&maxWidth=600&width=1770)
    
    3. 在 **已添加事件** 区域点击 **添加事件**，搜索并添加 **用户进群v2.0** 事件。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/762edc06d6d40a4d14cbb8c1370260eb_nUKgyLLPPe.png?height=1222&lazyload=true&maxWidth=600&width=1680)