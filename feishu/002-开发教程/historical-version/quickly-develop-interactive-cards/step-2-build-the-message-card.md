<!--
title: 步骤二：搭建飞书卡片
id: 7238450199739351044
fullPath: /home/quickly-develop-interactive-cards/step-2-build-the-message-card
updatedAt: 1733810765000
source: https://open.feishu.cn/document/historical-version/quickly-develop-interactive-cards/step-2-build-the-message-card
-->
# 步骤二：搭建飞书卡片

本教程介绍如何通过飞书卡片搭建工具搭建三张卡片：带有加班和请假互动操作的审批卡片，加班通过的卡片、请假通过的卡片。

## 操作步骤

1. 登录[飞书卡片搭建工具](https://open.feishu.cn/cardkit?from=open_docs_tutorial)。

1. 在搭建工具首页，点击 **创建空白卡片**。

1. 在 **创建空白卡片** 对话框，填写卡片名称“审批卡片”，并点击 **创建**。

   ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f22be98b1ec6d3d600bd800104375bb2_1Qdi41vzas.png?height=307&lazyload=true&maxWidth=500&width=894)

   你将进入卡片的编辑页面。

5. 在中间的 **卡片预览** 区域，选择需要的模块组件，并完成各模块的编辑。
    
    1. 添加 **标题** 组件，设置标题文本为“审批”。
    2. 添加 **普通文本** 组件，设置文本为“请选择需要的操作”。
    3. 添加 **按钮组** 组件，分别将两个按钮文本设置为“加班”和“请假”，并调整按钮样式。
    
    2. 为区分用户点击哪个按钮，你需要为按钮创建点击事件，添加回传参数。用户点击后，触发的回调会由飞书回传给在开发者后台填入的卡片请求地址：
        
        - 加班：type，work_overtime。
            
            
            ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/68b0e0ee9943829d04d12c62671f9517_4oFF6UheKT.png?height=788&lazyload=true&maxWidth=500&width=1561)
        
        - 请假：type，leave。

            
            ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dce4153c27241e79b37c87604fafc120_gglLcLmupj.png?height=744&lazyload=true&maxWidth=500&width=1542)
    
    5. 在顶部菜单栏单击 **保存**，然后点击**发布**。
6. 卡片发布后，你需参考以下步骤为卡片添加你在步骤一创建的应用。

    1. 在卡片的编辑页面，点击应用图标。

        ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/84660381c76e27f0fca831a39329c6fc_S3lPor2hl2.png?height=500&lazyload=true&maxWidth=500&width=1418)

    2. 在 添加自定义机器人/应用 弹窗中，添加你在步骤一文档中创建的应用，使该应用拥有调用该卡片的权限。

        ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d6e6ff0919b2504c5a4bda9a3c4f6702_rD3eHcGvQG.png?height=250&lazyload=true&maxWidth=500&width=665)
    
5. 参考以上流程继续创建并发布 **加班通过** 及 **请假通过** 的卡片，并绑定应用。三张卡片搭建完成后，你可在 **我的卡片** 中看到已经成功发布的卡片。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d3a0d2aaebf5b303ec91d79652e17089_js7GCo9Dia.png?height=497&lazyload=true&maxWidth=600&width=1335)