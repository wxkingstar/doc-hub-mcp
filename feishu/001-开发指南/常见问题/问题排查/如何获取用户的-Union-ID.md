---
title: "如何获取用户的 Union ID"
source_url: https://open.feishu.cn/document/faq/trouble-shooting/how-to-obtain-union-id
---
最后更新于 2025-01-21

# 如何获取指定用户的 Union ID

用户的 Union ID 是用户在同一应用服务商提供的多个应用间的统一身份。通过该类 ID 让应用开发商可以把同个用户(以 user_id 为标识）在多个应用中的身份关联起来。在需要跨应用做用户 ID 关联的场景中，开发者可以使用飞书开放平台提供的 union_id。union_id 以 on_ 为前缀，如 `on_cad4860e7af114fb4ff6c5d496d1dd76`。详情参考 [用户身份概述](https://open.feishu.cn/document/home/user-identity-introduction/introduction)。

本文介绍用户 Union ID 的获取方式。

## 方式一：通过 API 调试台获取

API 调试台提供一键获取用户 ID 的能力，你可以通过可视化操作快速获取企业内指定用户的 ID。
私有化环境不支持 API 调试台。

1. 登录 [API 调试台](https://open.feishu.cn/api-explorer)，找到[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口。

2. 在 **查询参数** 页签，将 **user_id_type** 设置为 **union_id**，然后点击 **快速复制 union_id**。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/9be62b0ad06ba894c0c88e6874eea513_J9gXc3veok.png?height=785&lazyload=true&maxWidth=550&width=741)

2. 在弹窗中，搜索或选择指定用户，并点击 **复制成员 ID**，获取用户的 union_id。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ad87520f17256db45ef504c6ee9b3b50_yJoTFglHIm.png?height=639&lazyload=true&maxWidth=550&width=803)

## 方式二：调用 OpenAPI 获取
### 前提条件

[已开通「通过手机号或邮箱获取用户 ID」权限（`contact:user.id:readonly`）](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-fix-the-99991672-error)

### 1. 打开 API 调试台，并找到「通过手机号或邮箱获取用户 ID」API
私有化环境不支持 API 调试台。

打开飞书开放平台 [API 调试台](https://open.feishu.cn/api-explorer?from=op_doc&project=contact&version=v3&resource=user&apiName=batch_get_id)，并在左侧 API 目录中找到「通讯录」下的「通过手机号或邮箱获取用户 ID」，点击该 API 切换当前调试 API 为「通过手机号或邮箱获取用户 ID」。

> 可以在API 列表顶部的搜索框输入「通过手机号或邮箱获取用户 ID」来快速定位。

![OUNstwkd000033.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/2c34087b72f9cd7c0b53ae7d085369e3_awl5jJ2kOI.png?height=1512&lazyload=true&width=3050)

### 2. 获取鉴权凭证，并设置参数

1. 点击 API 调试台左侧「查看鉴权凭证」中 tenant_access_token 中的「点击获取」（如果之前已经获取过，则可以点击刷新按钮刷新鉴权凭证。

2. 点击右侧参数列表，将查询参数 Tab 中的 *user_id_type* 参数设置为 *union_id*。

3. 切换至请求体 Tab，将请求体中的 ID 删除，并修改 *mobiles* 参数，设为用户手机号。

![sRqy3ytQ000034.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/758e6ef6a5ca831b9ea1e4da52a14da9_kwwCnRZucF.png?height=1564&lazyload=true&width=3056)

### 3. 调试，并获得 Union ID

点击右侧「开始调试」，调用接口。调用成功后，在下方响应体中即可拿到用户的 Union ID。

![L9ZJJgeO000109.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/209b33ce4617075e784ecd0a248689ee_vvdqHMTps1.png?height=1466&lazyload=true&width=2982)
