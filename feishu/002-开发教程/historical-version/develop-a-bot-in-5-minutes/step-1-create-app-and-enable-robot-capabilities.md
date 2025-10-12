<!--
title: 步骤一：创建并配置应用
id: 7251512254597169180
fullPath: /home/develop-a-bot-in-5-minutes/step-1-create-app-and-enable-robot-capabilities
updatedAt: 1735526102000
source: https://open.feishu.cn/document/historical-version/develop-a-bot-in-5-minutes/step-1-create-app-and-enable-robot-capabilities
-->
# 步骤一：创建并配置应用

:::html
<md-td>
1. 在 [开发者后台](https://open.feishu.cn/app)，创建 **企业自建应用**，填写**名称**及**应用描述**，点击 **创建。**

    <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/396cce462bf6c487c47bcd1defb176d1_BJe8ZwFxG7.png" style="width:50%" />

2. 在应用列表中，点击应用名称或应用图标进入应用详情页。

    <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/59f7c9e178f2a479b15ca13ed409de30_1SvrSEqaH7.png?lazyload=true&width=2550&height=1514" style="width:70%" />

3. 在左侧导航栏点击切换至 **添加应用能力** 页面，点击 **机器人** 下方的 **添加能力** 按钮。

    <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f1390e0bd5046d35fe931496fa328742_4aeZozvxvm.png?lazyload=true&width=2586&height=1606" style="width:70%" />

4. 在左侧导航栏点击进入 **测试企业和人员** 页面，点击 **创建测试企业**，填写 **测试企业名称**、**手机号**、**验证码**，点击 **确认创建**。

	为了满足开发测试阶段频繁变更配置的需求，飞书开放平台提供了[测试企业与人员功能](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)。在开发阶段，推荐开发者使用测试版应用，此**版本中涉及的权限和配置变更都会直接生效，无需管理员审核**，客户端的测试也将在测试租户进行。在所有的开发测试完成之后，切换、手动同步到正式版应用，仅提交一次审核即可，大大加速了开发效率，也降低了对管理员的打扰。


	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dc74dca16da2445b0996f0d00e8584af_owd3xwapw7.png?lazyload=true&width=1192&height=600" style="width:50%" />

  
5. 在创建完成的测试企业操作栏，点击 **关联应用**，即可为当前应用自动生成测试版本。

   <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f3e9f47e3c48f93315c1cb6c0ef6973d_LW8YaM8Vcz.png?lazyload=true&width=2218&height=790" style="width:70%" />

6. 在左侧导航栏，点击应用名称右侧的切换图标并选择 **切换至测试版本**。

   <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1a214c6c9025733258ef537370036844_WxaLU00J73.png?lazyload=true&width=1484&height=754" style="width:70%" />

7. 配置应用权限。
  
	1. 查询 [接收消息事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive) 依赖的权限清单，根据推送消息的场景，确定需要开通的应用权限。
    
    	本示例中所需的权限如下图所示：
    
   		 <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/acfac4110f1ac2937db5e4fbfea30bd2_7za7tRKlG2.png?lazyload=true&width=1804&height=1274" style="width:70%" />
  
	2. 在左侧导航栏点击切换至 **权限管理 > API 权限** 页面，搜索需要的权限配置，并开通权限 **读取用户发给机器人的单聊消息（im:message.p2p_msg:readonly）**。
  

    	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/406788c3b3ce891768866d18aa2d5e5b_LnV7BrVLS8.png" style="width:70%" /> 
    
	3. 搜索并开通`获取与发送单聊、群组消息`权限，使机器人拥有发送消息的能力。
  
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/12cb48369617257d28ad331de1de0ca4_RFE1ya7v1g.png?lazyload=true&width=2032&height=720" style="width:70%" />
</md-td>
:::