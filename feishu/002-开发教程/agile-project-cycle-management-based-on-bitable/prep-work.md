<!--
title: 步骤一：创建并配置应用
id: 7112636765656514562
fullPath: /home/agile-project-cycle-management-based-on-bitable/prep-work
updatedAt: 1733119696000
source: https://open.feishu.cn/document/agile-project-cycle-management-based-on-bitable/prep-work
-->
# 步骤一：创建并配置应用

在本步骤，你将创建一个测试应用，并获取应用凭证信息，用于调用服务端接口。
## 步骤一：创建测试应用
:::html
<md-td>
1. 登录[飞书开发者后台](https://open.feishu.cn/app)。
2. 在开发者后台首页，单击 **创建企业自建应用**，然后填写应用名称和应用描述，单击 **创建**。
  

    <img src="https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/28b3fae35e9a2d4cd9787699c80d4210_Z4RmCTyOkZ.png?lazyload=true&width=2552&height=1736" style="width:60%"/>

3. 在左侧导航栏单击进入 **测试企业和人员** 页面，单击 **创建测试企业**，填写 **测试企业名称**、**手机号**、**验证码**，单击 **确认创建**。
    

	为了满足开发测试阶段频繁变更配置的需求，飞书开放平台提供了[测试企业与人员](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)功能。在开发阶段，推荐开发者使用测试版应用，此版本中涉及的**权限和配置变更都会直接生效，无需管理员审核**，客户端的测试也将在测试租户进行。在所有的开发测试完成之后，切换、手动同步到正式版应用，仅提交一次审核即可，大大加速了开发效率，也降低了对管理员的打扰。

  
    <img src="https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f24d8faf3c7c77461280ea47d48730b2_hIseVl2BIE.png?lazyload=true&width=1192&height=600" style="width:60%"/>

4. 在创建完成的测试企业操作栏，单击 **关联应用**，即可为当前应用自动生成测试版本。

    <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/47712ce82f188505f48f34d2cbc1ea9c_uByuK6nvny.png?lazyload=true&width=2252&height=660" style="width:60%"/>

5. 左侧导航栏，单击应用名称右侧的切换图标并选择 **切换至测试版本**。
  
    <img src="https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/d53f5707fca3681820d5827baa81d9d9_flLmxkrw1D.png?lazyload=true&width=1398&height=672" style="width:60%"/>


## 步骤二：添加应用权限

1. 单击进入**添加应用能力**页面，添加**机器人**功能。
  开启机器人能力之后，才可以使用日历开放接口。

    <img src="https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e9f53cf68f0b73d14fafffef4c1a89cd_mTi9DdK0WH.png?lazyload=true&width=2432&height=1580" style="width:60%"/>

2. 添加权限。
  
	1. 在应用详情页左侧进入 **权限管理** 页面。
	2. 点击 **开通权限**，选择适用的身份权限。

		例如选择 tenant_access_token。

	3. 在顶部搜索栏中，依次搜索以下权限并选中权限左侧的复选框，然后点击 **确认开通权限**。
       * **bitable:app**：查看、评论、编辑和管理多维表格。
       * **calendar:calendar**：更新日历及日程信息。

    	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/57cd5497089c7f2a13c207244940a8bc_rtNxbO4DR1.png?lazyload=true&width=2684&height=1582" style="width:60%"/>

</md-td>
:::