<!--
title: 如何获取用户的 User ID
id: 7168502655055282177
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id
updatedAt: 1737444639000
source: https://open.feishu.cn/document/faq/trouble-shooting/how-to-obtain-user-id
-->
# 如何获取自己的 User ID？

User ID 是用户在租户内的身份。 同一个飞书用户在租户 A 和租户 B 内的 user_id 是不同的。详情参考 [用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。

本文介绍用户 User ID 的获取方式。


## 方式一：通过 API 调试台获取


API 调试台提供一键获取用户 ID 的能力，你可以通过可视化操作快速获取企业内指定用户的 ID。

:::note
私有化环境不支持 API 调试台。
:::

1. 登录 [API 调试台](https://open.feishu.cn/api-explorer)，找到[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口。
3. 在 **权限配置** 页签下，找到 **获取用户 user ID** 权限并开通。

	
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8b45f1013e79acfd835087aa898d78df_d8UAv8cNSc.png?height=785&lazyload=true&maxWidth=500&width=737)
    
3. 在 **API 调试台** 页签的 **查询参数** 处，将 **receive_id_type** 设置为 **user_id**，然后点击 **快速复制 user_id**。
      

	
	
	
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/074c04102f2c86d343aa6b5bdb684b2e_dMlOcj9nZ0.png?height=704&lazyload=true&maxWidth=500&width=730)


     
 2. 在弹窗中，搜索或选择指定用户，并点击 **复制成员 ID**，获取用户的 user_id。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6854e0a78406e34562bbf3126e31ca01_Ig9VIXY0pc.png?height=641&lazyload=true&maxWidth=500&width=805)
   
## 方式二：调用 OpenAPI 获取

### 前提条件

- 已开通 [「通过手机号或邮箱获取用户 ID」权限（`contact:user.id:readonly`）](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-fix-the-99991672-error)
- 已开通 [「获取用户 User ID」权限（`contact:user.employee_id:readonly`）](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-fix-the-99991672-error)


### 1. 打开 API 调试台，并找到「通过手机号或邮箱获取用户 ID」API

:::note
私有化环境不支持 API 调试台。
:::

打开飞书开放平台 [API 调试台](https://open.feishu.cn/api-explorer?from=op_doc&project=contact&version=v3&resource=user&apiName=batch_get_id)，并在左侧 API 目录中找到「通讯录」下的「通过手机号或邮箱获取用户 ID」，点击该 API 切换当前调试 API 为「通过手机号或邮箱获取用户 ID」。

> 可以在API 列表顶部的搜索框输入「通过手机号或邮箱获取用户 ID」来快速定位。

![OUNstwkd000033.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2c34087b72f9cd7c0b53ae7d085369e3_awl5jJ2kOI.png?height=1512&lazyload=true&width=3050)

### 2. 获取鉴权凭证，并设置参数

1. 点击 API 调试台左侧「查看鉴权凭证」中 tenant_access_token 中的「点击获取」（如果之前已经获取过，则可以点击刷新按钮刷新鉴权凭证。

2. 点击右侧参数列表，将查询参数 Tab 中的 *user_id_type* 参数设置为 *user_id*。

3. 切换至请求体 Tab，将请求体中的 ID 删除，并修改 *mobiles* 参数，设为你自己的手机号。

![sRqy3ytQ000034.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/758e6ef6a5ca831b9ea1e4da52a14da9_kwwCnRZucF.png?height=1564&lazyload=true&width=3056)


### 3. 调试，并获得 User ID

点击右侧「开始调试」，调用接口。调用成功后，在下方响应体中即可拿到你自己的 User ID。


![YL097EUO000043.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cf9348b02173ed6cef65eccb7143229e_G6aStmd7H5.png?height=1578&lazyload=true&width=3030)