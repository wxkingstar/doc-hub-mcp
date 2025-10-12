<!--
title: 步骤一：创建并配置应用
id: 7088144643670802433
fullPath: /home/todos-daily-reminder-of-weekly-report/list-of-apis
updatedAt: 1720776094000
source: https://open.feishu.cn/document/historical-version/todos-daily-reminder-of-weekly-report/list-of-apis
-->
# 步骤一：创建并配置应用

在本步骤，你将创建一个测试版应用，并为应用开通相关的 API 权限及文档阅读权限，为后续调用服务端接口及获取云文档信息做准备。
:::html
<md-td>

## 步骤一：创建测试应用
1. 登录[飞书开发者后台](https://open.feishu.cn/app)。

2. 在开发者后台首页，单击 **创建企业自建应用**，填写应用名称和应用描述，单击 **创建**。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/ac8587a6984946978b4d2f826e926afc~tplv-goo7wpa0wc-image.image?lazyload=true&width=2552&height=1736" style="width:70%"/>

3. 在左侧导航栏单击进入 **测试企业和人员** 页面，单击 **创建测试企业**，填写 **测试企业名称**、**手机号**、**验证码**，单击 **确认创建**。

	<img src="https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/dc74dca16da2445b0996f0d00e8584af_P0P8gaPatc.png?lazyload=true&width=1192&height=600" style="width:40%"/>

4. 在创建完成的测试企业操作栏，单击 **关联应用**，即可为当前应用自动生成测试版本。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/f6b93c2cd24b4fbd9acac4544bf11254~tplv-goo7wpa0wc-image.image?lazyload=true&width=2252&height=660" style="width:70%"/>

5. 左侧导航栏，单击应用名称右侧的切换图标并选择 **切换至测试版本**。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/cd9d194f43a9497ab9866f041c9b1028~tplv-goo7wpa0wc-image.image?lazyload=true&width=1398&height=672" style="width:70%"/>

## 步骤二：配置应用权限

1. 单击进入**添加应用能力**页面，添加**机器人**功能。

	需要使用机器人能力发送消息到群组。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/6459f4dc478b44e6a6229a67011d881d~tplv-goo7wpa0wc-image.image?lazyload=true&width=2432&height=1580" style="width:70%"/>

2. 在左侧导航栏选择 **权限管理**，在 **API 权限** 页面开通以下权限。

	* **docs:doc:readonly**：查询、评论和导出文档
	* **wiki:wiki:readonly**：查看知识库
	* **im:chat:read**：查看群信息
	* **im:message:send_as_bot**：以应用身份发消息

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6885e840bf2e5309f8faf488eb40760b_XWxBQcpr1G.png?lazyload=true&width=2178&height=1638" style="width:70%"/>

## 步骤三：为应用开通知识库文档权限

在本步骤你将在周报管理这个知识库中，为已创建的应用开通**可阅读**权限。

1. 登录 [飞书云文档](https://feishu.cn/drive/home/) ，进入周报知识库。

2. 进入周报文档的根节点，依次选择`···` > **更多** > **添加文档应用**。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/6fb1811d10b04f6794e2aca8cf1e6890~tplv-goo7wpa0wc-image.image?lazyload=true&width=2196&height=1426" style="width:70%"/>

3. 在弹出的对话框中搜索应用名称，然后赋予其 **可阅读** 权限。


    访问应用非自有资源时，应用必须拥有该资源的权限，并且需要开启机器人能力。


	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/75d82845295a47038c0292da5c40f7a8~tplv-goo7wpa0wc-image.image?lazyload=true&width=1808&height=1148" style="width:70%"/>

</md-td>
:::