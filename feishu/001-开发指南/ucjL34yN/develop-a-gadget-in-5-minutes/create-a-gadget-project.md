<!--
title: 步骤二：创建小程序项目
id: 6975811364980834306
fullPath: /home/develop-a-gadget-in-5-minutes/create-a-gadget-project
updatedAt: 1702277899000
source: https://open.feishu.cn/document/develop-gadgets-(not-recommended)/develop-a-gadget-in-5-minutes/create-a-gadget-project
-->
# 步骤二：创建小程序项目

为应用开通小程序能力后，你需要在本地通过飞书开发者工具构建小程序项目。


## 步骤一：登录飞书开发者工具
:::html
<md-td>
1. 打开飞书开发者工具。

2. 单击左下角 **登录** 按钮，选择登录环境为 **Feishu**，单击 **登录**。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a2f4824831e2c615573640fbd36de820_xcfIvM6vCq.png?lazyload=true&width=1744&height=1204?lazyload=true&width=1744&height=1204" style="width:70%"/>

3. 在弹出的登录页面中，登录你的飞书账号。

	你可以选择使用飞书移动端扫码登录，或使用手机号、邮箱进行登录。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/5814c557c7a34412a7e11ab612597079~tplv-goo7wpa0wc-image.image?lazyload=true&width=1204&height=1444" style="width:40%"/>

4. 登录成功后，单击左下角用户名，选择 **切换团队**。
    
    
    你登录时的所在企业（团队） 必须与开发者后台创建自建应用的所在企业（团队） 一致。否则会导致应用关联不上，预览和调试失败。
    
	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cb81902de6228247423abdd00440b854_gMVDwfj79b.png?lazyload=true&width=1744&height=1204" style="width:70%"/>
</md-td>
:::
## 步骤二：创建小程序项目
:::html
<md-td>
1. 在飞书开发者工具左侧目录中选择 **小程序**，单击 **`+`** 创建项目。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a3922873393ed42d68711d2c3a38df9c_spKQ7ewgy5.png?lazyload=true&width=1744&height=1204" style="width:70%"/>

2. 在 **选择项目模板** 页面，选择**空白模板**，单击 **下一步** 。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/21a538aa874781ddb4700565ae80f0a3_FxYCc54n2I.png?lazyload=true&width=1744&height=1204" style="width:70%"/>

3. 在 **填写项目信息** 页面，填写项目名称和项目路径。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/c88251fe21974bffb28c07823ef351f7~tplv-goo7wpa0wc-image.image?lazyload=true&width=1744&height=1204" style="width:70%"/>

	创建成功后的项目如下图所示。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/5c2a498d889f46738521ffbb28e4570b~tplv-goo7wpa0wc-image.image?lazyload=true&width=3334&height=2114" style="width:70%"/>

4. 打开`project.config.json`文件，修改 **appid** 的值为已创建的测试版应用的App ID。

	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d32cbb018b273d88a64add07d43667c4_zP4r5y9VCI.png?lazyload=true&width=2784&height=1916" style="width:70%"/>

5. 打开`app.json`文件，修改 **navigationBarTitleText** 的值为`MiniAppDemo`。

	<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/d6d4ed49077f4ac997837e459ab20cd8~tplv-goo7wpa0wc-image.image?lazyload=true&width=1646&height=1260" style="width:70%"/>
</md-td>
:::
:::note
更多小程序项目配置说明，可参考[项目配置](/ssl:ttdoc/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-project-configuration)。
:::

