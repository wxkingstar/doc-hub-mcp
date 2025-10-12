<!--
title: 步骤二：下载并配置示例代码
id: 7017436995158392835
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-development-tutorial/robot-creates-group-chat
updatedAt: 1743143472000
source: https://open.feishu.cn/document/home/message-development-tutorial/robot-creates-group-chat
-->
# 步骤二：下载并配置示例代码

在本步骤中，你将下载并运行教程提供的示例代码。示例代码需要本地已安装 Python 开发环境。

## 操作步骤

1. 在本地终端内，执行以下命令，下载[示例代码](https://github.com/larksuite/oapi-sdk-python-demo)至本地。
    
```
git clone https://github.com/larksuite/oapi-sdk-python-demo.git
```

:::note
你需要使用 `git` 命令下载示例代码至本地，`git` 安装地址： [Git Downloads](https://book.git-scm.com/downloads)。
:::


2. 使用 [PyCharm](https://www.jetbrains.com/zh-cn/pycharm/) 打开示例代码项目。

3. 在项目路径中，找到并打开 `/config.py` 文件。

4. 修改应用对应的 **APP_ID**、**APP_SECRET**、**ENCRYPT_KEY**、**VERIFICATION_TOKEN** 参数信息。
		
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/57ead72e814782df613922d317dc69f9_cphTIAw7Oe.png?height=786&lazyload=true&maxWidth=600&width=1550)
     
    参数配置说明：
    
    - 应用凭证 **APP_ID**、**APP_SECRET** 的获取方式如下：
    
       登录[飞书开发者后台](https://open.feishu.cn/app)，进入应用详情页，在 **凭证与基础信息** > **应用凭证** 区域，获取 **App ID** 和 **App Secret**。
       
       ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f7f89950be7e57c2760a8b5b1f5e17c9_f03ln7sGRK.png?height=524&lazyload=true&maxWidth=600&width=3594)

    - **ENCRYPT_KEY** 用于教程后续配置事件订阅后，向指定的请求地址推送加密的事件。**VERIFICATION_TOKEN** 用于事件和卡片的回调验证。两者获取方式如下：
    
    	登录[飞书开发者后台](https://open.feishu.cn/app)，进入应用详情页，在 **事件与回调 > 加密策略** 页面获取 **ENCRYPT_KEY**（首次获取时需要点击刷新图标生成 Encrypt Key） 和 **VERIFICATION_TOKEN**。  

		![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a7bb3ecd87a8b4ea6ce531162c8f1536_pKkTqqxEIa.png?height=666&lazyload=true&maxWidth=600&width=1688)
    
:::note
关于 Encrypt Key 和 Verification Token 的更多介绍与配置说明，参见[配置加密策略](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/choose-a-subscription-mode/send-notifications-to-developers-server#afe3a809)。
:::