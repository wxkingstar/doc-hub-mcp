---
title: "如何获取用户的 Open ID"
source_url: https://open.feishu.cn/document/faq/trouble-shooting/how-to-obtain-openid
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737444617000
---
最后更新于 2025-01-21

# 如何获取指定用户的 Open ID

Open ID 是用户在应用内的身份标识，同一个用户在不同应用中的 open_id 不同，其值统一以 `ou_` 为前缀，如 `ou_c99c5f35d542efc7ee492afe11af19ef`。详情参考 [用户身份概述](https://open.feishu.cn/document/home/user-identity-introduction/introduction)。

本文介绍用户 Open ID 的获取方式。

## 方式一：通过 API 调试台获取

API 调试台提供一键获取用户 ID 的能力，你可以通过可视化操作快速获取企业内指定用户的 ID。
私有化环境不支持 API 调试台。

1. 登录 [API 调试台](https://open.feishu.cn/api-explorer)，找到[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口。

2. 在 **查询参数** 页签，将 **user_id_type** 设置为 **open_id**，然后点击 **快速复制 open_id**。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/01db3212166ba3c4cff5676d019bbd2e_GgP97y4WB1.png?height=774&lazyload=true&maxWidth=500&width=747)

2. 在弹窗中，搜索或选择指定用户，并点击 **复制成员 ID**，获取用户的 open_id。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/cafe235d091a4551c7da7544b20c0b97_1nKvIuWzq3.png?height=640&lazyload=true&maxWidth=500&width=806)

## 方式二：调用 OpenAPI 获取

调用[通过手机号或邮箱获取用户 ID](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id)接口，通过用户的邮箱或者手机号码获取用户的 open_id。调用方式如下：

1. 应用需要申请 [通过手机号或邮箱获取用户 ID 权限（`contact:user.id:readonly`）](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-fix-the-99991672-error) 权限。

2. 请求时，查询参数 **user_id_type** 需要设置为 **open_id**，请求参数传入指定用户的邮箱地址（**emails**）或者手机号码（**mobiles**）。

其他参数参考 API 文档详细说明填写即可，此处不再赘述。

3. 发送请求，在返回结果中获取用户的 open_id。

该接口返回参数 **user_id** 的值与查询参数 **user_id_type** 的取值相匹配。例如，**user_id_type** 取值为 **open_id**，则返回参数 **user_id** 实际值是以 `ou_` 字符为前缀的 open_id。
