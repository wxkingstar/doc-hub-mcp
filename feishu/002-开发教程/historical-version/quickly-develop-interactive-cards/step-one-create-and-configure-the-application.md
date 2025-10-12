<!--
title: 步骤一：创建并配置应用
id: 7238450199739465732
fullPath: /home/quickly-develop-interactive-cards/step-one-create-and-configure-the-application
updatedAt: 1720776312000
source: https://open.feishu.cn/document/historical-version/quickly-develop-interactive-cards/step-one-create-and-configure-the-application
-->
# 步骤一：创建并配置应用

在本步骤，你将创建一个测试应用，并为应用开启机器人能力及 OpenAPI 权限，为后续通过机器人应用发起审批操作做准备。

## 一、创建测试应用

在本步骤，你将创建一个测试版的企业自建应用。

### 操作步骤

1. 登录 [飞书开发者后台](https://open.feishu.cn/app)。

2. 单击 **创建企业自建应用**，然后填写应用 **名称** 和 **应用描述**，单击 **创建**。
	
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/522891e448cfd297ef1c8a47c66676ba_dtHSYUcC2N.png?height=1236&lazyload=true&maxWidth=500&width=1036)

3. 在左侧导航栏单击进入 **测试企业和人员** 页面，单击 **创建测试企业**，填写 **测试企业名称**、**手机号**、**验证码**，单击 **确认创建**。
    
::: note
为了满足开发测试阶段频繁变更配置的需求，飞书开放平台提供了[测试企业与人员](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)功能。在开发阶段，推荐开发者使用测试版应用，此版本中涉及的**权限和配置变更都会直接生效，无需管理员审核**，客户端的测试也将在测试租户进行。在所有的开发测试完成之后，切换、手动同步到正式版应用，仅提交一次审核即可，大大加速了开发效率，也降低了对管理员的打扰。
:::

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dc74dca16da2445b0996f0d00e8584af_xi72GSo1ES.png?height=600&lazyload=true&maxWidth=500&width=1192)
    

4. 在创建完成的测试企业操作栏，单击 **关联应用**，即可为当前应用自动生成测试版本。
     
     ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4202be5e53167a7c40376eb6487b6e08_9b9b7ErrGL.png?height=660&lazyload=true&maxWidth=500&width=2252)
     
5. 左侧导航栏，单击应用名称右侧的切换图标并选择 **切换至测试版本。**
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5f1f18e8ea79283471f74d880fdce927_EX8Khle2XB.png?height=870&lazyload=true&maxWidth=500&width=2114)

## 二、开通应用权限

通过本步骤您将为创建的测试应用开启机器人能力并开通对应的应用权限，用于后续的 OpenAPI 调用。

### 操作步骤

1. 在 **添加应用能力** 页面，添加 **机器人** 功能。
   
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/131c64e20014db88431cc33362940279_XVdFDupCSq.png?height=1580&lazyload=true&maxWidth=500&width=2432)
   
2. 在 **权限管理** 页面，搜索并开通以下权限。

	`im:message:send_as_bot`：以应用的身份发消息
  
   	 ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/46487433df8c6890dfa98b1cb7996cb4_fTI7fwQ0i5.png?height=1268&lazyload=true&maxWidth=600&width=2866)