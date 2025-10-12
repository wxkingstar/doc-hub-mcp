<!--
title: 步骤一：创建并配置应用
id: 7254822274065891330
fullPath: /home/quickly-build-a-feishu-calendar-schedule/step-1-create-and-configure-an-application
updatedAt: 1698392893000
source: https://open.feishu.cn/document/quickly-build-a-feishu-calendar-schedule/step-1-create-and-configure-an-application
-->
# 步骤一：创建并配置应用

:::html
<!--
你需要创建一个企业自建应用，并配置应用权限、事件订阅。
-->
:::

你需要创建一个企业自建应用，开通机器人能力，并配置调用 API 所需的应用权限。

## 操作步骤

1. 登录[飞书开发者后台](https://open.feishu.cn/app)。

2. 在开发者后台首页，单击 **创建企业自建应用**，填写应用名称、描述以及图标信息，然后单击 **创建**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8024a7e2fd42054b4653d54fc884ae54_qKO5ET4eIv.png?height=1526&lazyload=true&maxWidth=600&width=2512)

3. 关联测试企业，生成测试版本的应用。
    
    1. 在应用详情页左侧导航栏，进入 **测试企业和人员** 页面，并在页面右上角单击 **创建测试企业**。
        
    
        为了满足开发测试阶段频繁变更配置的需求，飞书开放平台提供了[测试企业与人员功能](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)。在开发阶段，推荐开发者使用测试版应用，此**版本中涉及的权限和配置变更都会直接生效，无需管理员审核**，客户端的测试也将在测试租户进行。在所有的开发测试完成之后，切换、手动同步到正式版应用，仅提交一次审核即可，大大加速了开发效率，也降低了对管理员的打扰。
        
        
    2. 在 **创建测试企业** 对话框，填写 **测试企业名称**、**手机号**、**验证码**，并单击 **确认创建**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/85af43ae4f1337a78e80d3608c590449_au3BpdItGj.png?height=1378&lazyload=true&maxWidth=600&width=3572)

    3. 创建测试企业后，在 **操作** 列，单击 **关联应用**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/341586fdf85d2297f0eb9ef2e85a1b09_RIQvReJ8Z7.png?height=552&lazyload=true&maxWidth=600&width=2950)

    4. 测试企业关联应用后，在页面顶部切换企业应用为测试版应用。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5d934d17429ce3722de3fafa4ae4356e_1UzqOGJmSH.png?height=804&lazyload=true&maxWidth=600&width=3576)

4. 在 **应用能力** > **添加应用能力** 页面的 **按能力添加** 页签，找到 **机器人** 卡片，并点击 **添加**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ea9f1cf27f5b1ba83c1226e9ac894e6b_yq4NjGOtJM.png?height=1306&lazyload=true&maxWidth=600&width=2856)

5. 在 **开发配置** > **权限管理** 页面，为应用添加以下权限。
    
    - 获取用户 user ID
    
    - 更新日历及日程信息
    
    - 获取日历、日程及忙闲信息
    
    - 获取会议室信息
    
    你可以直接将以下权限 Keys 粘贴到权限搜索框，点击 **批量开通** 权限。
    
    ```
   contact:user.employee_id:readonly,calendar:calendar,calendar:calendar:readonly,calendar:room:readonly
    ```
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/169d57ed8fc7d1e86f4d7f688d947905_iYlsuZbHg4.png?height=1296&lazyload=true&maxWidth=600&width=2880)


:::html
<!--
6. 配置事件订阅，订阅 **日程回复** 事件。
    
    1. 在 **开发配置** > **事件订阅** 页面，填写 **请求地址配置**。
        

        请求地址用于接收开放平台向应用推送的事件消息。当应用订阅的事件发生时，开放平台会向该请求地址发送相应的 HTTP POST 请求。关于配置请求地址的详细说明，参见[配置请求地址](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case)。
        
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/111fe34fb16fbbcd3553fe60b3c6a5d3_4MTDR8xb3P.png?height=1088&lazyload=true&maxWidth=600&width=2882)

    2. 在 **事件订阅** 页面点击 **添加事件**，搜索并添加 **日程回复** 事件。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/aa5e1c155e30f95506690a6853d86dc4_Um7Y7HO5WR.png?height=1188&lazyload=true&maxWidth=600&width=1656)
-->
:::