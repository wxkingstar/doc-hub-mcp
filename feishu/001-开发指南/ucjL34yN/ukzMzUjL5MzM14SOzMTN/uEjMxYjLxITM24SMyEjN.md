<!--
title: 配置跳转应用的白名单
id: 6907569742387724290
fullPath: /uYjL24iN/uEjMxYjLxITM24SMyEjN
updatedAt: 1693276989000
source: https://open.feishu.cn/document/client-docs/gadget/open-capabilities/jump-to-other-gadget
-->
# 配置跳转应用的白名单

小程序引擎支持通过调用 [openSchema](/ssl:ttdoc/uYjL24iN/ukzN4IjL5cDOy4SO3gjM) 函数跳转到指定的应用链接。在跳转时，小程序引擎会校验（PC 端只有当 external 参数为 false 时才会校验）链接是否符合开发者后台的应用中，配置的协议名白名单规则，不符合规则的链接将无法打开。本文主要介绍如何配置协议名白名单。

## 使用说明

- 当应用未添加白名单时, 不会生效 openSchema 函数的跳转功能。
- 白名单内支持匹配链接的 scheme 和 host。
- 在白名单中输入 `*:*` 表示通配，即允许跳转至任意应用链接。
- 在应用中配置协议名白名单后，不需要重新发布应用版本，只需重启应用即可生效。


## 操作步骤

1. 登录[开发者后台](https://open.feishu.cn/app)。

2. 从应用列表中选择需要配置白名单的应用。
	
:::note
由于是为小程序配置白名单，因此需要确保选择的应用中已开启了小程序能力。
:::

3. 在左侧导航栏，选择 **开发配置** > **安全设置**。


4. 在页面中找到 **协议名白名单** 区域。

5. 在对应的输入框中填写白名单链接，并点击 **添加**。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8563eb1ff23e9247a0705558660a4430_XLC6jXraY0.png?height=1248&lazyload=true&maxWidth=600&width=2106)
    
	你也可以点击 **批量修改**，在输入框中批量增加白名单。
	
    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1686b8be81c6caa5fe630ed1d5e6c432_ZDpmCV0lWY.png?height=1248&lazyload=true&maxWidth=600&width=2090)
    
    白名单示例配置如下：
    
    - `http://*`：表示允许打开所有 scheme 为 http 的链接。
    - `open.feishu.cn`：表示允许打开 `https://open.feishu.cn` 下的链接。
    - `http://open.feishu.cn`：表示允许打开 `http://open.feishu.cn` 下的链接。
    - `https://applink.feishu.cn`：表示允许打开飞书 AppLink。
    - `*:*`：表示允许打开任意链接。