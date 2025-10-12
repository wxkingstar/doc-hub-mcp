<!--
title: 步骤一：创建并配置应用
id: 7235587981825146883
fullPath: /home/management-weekly-report-based-docs/step-1-create-and-configure-an-application
updatedAt: 1720776072000
source: https://open.feishu.cn/document/historical-version/management-weekly-report-based-docs/step-1-create-and-configure-an-application
-->
# 步骤一：创建并配置应用

在本步骤，你将创建一个测试应用，并获取应用凭证信息，用于调用服务端接口。
:::html
<md-td>
## 创建测试应用

1. 登录[飞书开发者后台](https://open.feishu.cn/app)。

2. 在开发者后台首页，单击 **创建企业自建应用**，填写应用名称、描述以及图标信息，然后单击 **创建**。
  
	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/a2974a05952d46c5b5484acaca920f5c~tplv-goo7wpa0wc-image.image?lazyload=true&width=2552&height=1736" style="width:50%"/>

3. 在应用详情页左侧导航栏，进入 **测试企业和人员** 页面，并在页面右上角单击 **创建测试企业**。
    
    :::note
    为了满足开发测试阶段频繁变更配置的需求，飞书开放平台提供了[测试企业与人员功能](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)。在开发阶段，推荐开发者使用测试版应用，此**版本中涉及的权限和配置变更都会直接生效，无需管理员审核**，客户端的测试也将在测试租户进行。在所有的开发测试完成之后，切换、手动同步到正式版应用，仅提交一次审核即可，大大加速了开发效率，也降低了对管理员的打扰。
    :::
    
4. 在 **创建测试企业** 对话框，填写测试企业名称、手机号、验证码，并单击 **确认创建**。
	
  	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/553affd1642149f59c0990b6a484eb08~tplv-goo7wpa0wc-image.image?lazyload=true&width=1192&height=600" style="width:40%"/>

  5. 创建测试企业后，在 **操作** 列，单击 **关联应用**。
  
		<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/cca2ba62c3cf41e681ac87a53219507a~tplv-goo7wpa0wc-image.image?lazyload=true&width=2252&height=660" style="width:60%"/>

5. 在页面左侧导航栏，单击应用名称右侧的切换图标并选择 **切换至测试版本**。
  
	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/43305c23850247daba5ea54e02baf6a0~tplv-goo7wpa0wc-image.image?lazyload=true&width=1398&height=672" style="width:50%"/>
</md-td>
:::
## 开通应用权限

:::html
<md-td>
1. 在左侧导航栏，单击 **添加应用能力**，添加 **机器人** 功能，允许使用机器人发送消息。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/6a04adc27cf548879f668319b0074772~tplv-goo7wpa0wc-image.image?lazyload=true&width=2432&height=1580" style="width:60%"/>

2. 在左侧导航栏选择 **权限管理**，在 **API 权限** 页面开通以下权限。
   
     * **drive:drive**：查看、评论、编辑和管理云空间中所有文件
     * **wiki:wiki**：查看、编辑和管理知识库
     * **im:chat:read**：查看群信息
     * **im:message:send_as_bot**：以应用的身份发消息
  
     <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/161502081e71a012ab0e15adeaa77084_a0HMQF5ZMx.png?lazyload=true&width=2650&height=1640" style="width:60%"/>

3. 在左侧导航栏，单击 **安全设置**，添加 **重定向URL** 为 `http://127.0.0.1:3000`，允许后续知识库管理账号添加该测试应用为知识库成员。
  
	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/451b0c1c4989bd6ec62874ddd98bad06_dQdGt4Cwld.png?lazyload=true&width=2558&height=1162" style="width:60%"/>
</md-td>
:::
