<!--
title: 步骤六：发布小程序
id: 6975811364980981762
fullPath: /home/develop-a-gadget-in-5-minutes/upload-project-and-release
updatedAt: 1692952786000
source: https://open.feishu.cn/document/develop-gadgets-(not-recommended)/develop-a-gadget-in-5-minutes/upload-project-and-release
-->
# 步骤六：发布小程序
 
当小程序完成所有测试后，你可以参考本文操作步骤正式将小程序发布上线。

## 步骤一：上传正式版小程序包
:::html
<md-td>

1. 登录[开发者后台](https://open.feishu.cn/app)，进入测试应用详情页。

2. 单击应用名称右侧的切换图标并选择 **切换至正式版本**。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/32504d5b09235a22ccc32f37b2dbe24e_5IfITYqUx2.png?lazyload=true&width=1334&height=644" style="width:70%"/>

3. 在正式版应用的**凭证与基础信息**页面，复制应用的**App ID**。

4. 打开飞书开发者工具，单击右上角头像，然后将开发者工具的团队切换为正式团队。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1f0b34fd6b9ae69e01c03a6be56ad654_6oFFh5b8bn.png?lazyload=true&width=1842&height=984" style="width:70%"/>

5. 修改`project.config.json`文件中的**appid**为正式版应用的App ID，然后使用快捷键`Ctrl` + `S`保存。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/13a7a495fb2070296c5e1755c01c49c6_cqx8I5o1mb.png?lazyload=true&width=1726&height=748" style="width:70%"/>

6. 单击右上角 **上传**，然后在弹出的页面中选择 **平台** 和 **版本号**，最后单击 **上传** 按钮完成上传。

7. 返回开发者后台，然后选择小程序 **版本号** 和 **最低兼容飞书版本** ，最后单击 **保存**。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6dd2811525c19796103d16251ce0de30_1c6vBxtWxM.png?lazyload=true&width=1904&height=1246" style="width:70%"/>

## 步骤二：发布小程序

1. 在应用详情页，单击 **版本管理与发布**，然后在版本管理与发布页面单击右上角 **创建版本** 按钮，进入创建版本详情页。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/906173888de4f93506e8a3a0d0116df4_eHfOgR03Tk.png?lazyload=true&width=2812&height=1446" style="width:70%"/>

2. 在创建版本页面下，填写以下信息，填写完成后单击底部 **保存** 按钮。

    * **应用版本号**： 输入当前应用的应用版本号，格式：`x.y.z`。
    * **移动端的默认能力**： 选择移动端默认打开的能力，本文选择小程序。
    * **更新说明**： 此次版本的更新说明。
    * **可用范围**：设置为需要访问和使用当前应用的用户范围。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/4870c388481140b497d086215236b281~tplv-goo7wpa0wc-image.image?lazyload=true&width=1366&height=1532" style="width:70%"/>

3. 保存成功后，单击右上角 **申请线上发布** 按钮。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5e4bcf5f74267c94b578061a2898c970_7GNT7eo6Xx.png?lazyload=true&width=2198&height=1010" style="width:70%"/>

4. 应用申请发布后，企业管理员可以在[企业管理后台](https://feishu.cn/admin/index) > **工作台** > **应用审核** 页面进行审核。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b4cee08c5f21761f5a076b505fcbf70a_lmNhKdlIwR.png?lazyload=true&width=2850&height=838" style="width:70%"/>

5. 审核通过后，打开移动端飞书，进入工作台即可看到已发布成功的小程序应用。

	新发布的版本需要管理员审核通过后 5 分钟左右才会正式生效。

  	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/5deb8f8c60b74de59fe90c2b4e3acbcc~tplv-goo7wpa0wc-image.image?lazyload=true&width=2411&height=2532" style="width:70%"/>

</md-td>
::::
  
  
  
  