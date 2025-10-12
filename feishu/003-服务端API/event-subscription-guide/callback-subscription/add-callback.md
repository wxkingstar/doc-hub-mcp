<!--
title: 步骤二：添加回调
id: 7338430742970925060
fullPath: /uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/add-callback
updatedAt: 1744008284000
source: https://open.feishu.cn/document/event-subscription-guide/callback-subscription/add-callback
-->
# 步骤二：添加回调

配置回调请求地址后，你可以根据实际需要添加所需的回调。后续当触发回调时，飞书服务器会向回调请求地址推送回调信息，以便你在业务服务器内快速响应回调。

## 操作步骤

1. 登录 [开发者后台](https://open.feishu.cn/app)。
2. 进入指定应用，并在应用详情页的左侧导航栏，选择 **开发配置** > **事件与回调**。
3. 在 **事件与回调** 页面，点击 **回调配置** 页签。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a4216594fb8299e989df776f882afd65_IGdX54SfR4.png?height=1210&lazyload=true&maxWidth=600&width=2748)

4. 在页面底部的 **已订阅的回调** 区域，点击 **添加回调**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e69ec38b9f981fe8ca21251381aa4dd8_yCLxWd2bZE.png?height=1088&lazyload=true&maxWidth=600&width=2310)

5. 选择所需回调，并点击 **确认添加**。
    
    目前支持选择 [拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)、[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)、[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)回调。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/570531525bd97b8487c45d63b3cbc8f7_uRWBK68mnG.png?height=1174&lazyload=true&maxWidth=600&width=1636)

6. 发布应用。

    
    1. 在左侧导航栏选择 **应用发布** > **版本管理与发布**，并在页面右上角点击 **创建版本**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3d0f5f5c946776a29257a0b69cacdc1a_VLY6Uhi2Pt.png?height=1296&lazyload=true&maxWidth=600&width=2942)
    
    2. 在 **版本详情** 页面，根据实际需要完成应用版本号、默认能力、更新说明以及可用范围等配置项。
    
    3. 在页面底部点击 **保存**，并在弹出的对话框中点击**申请线上发布**。
        
        成功发起申请后，你需要等待企业管理员完成应用审核。待审核通过后应用会自动发布，此时回调订阅相关配置才会生效。