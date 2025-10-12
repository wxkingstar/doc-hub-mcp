---
title: "如何选择使用不同类型的 Token"
source_url: https://open.feishu.cn/document/faq/trouble-shooting/how-to-choose-which-type-of-token-to-use
---
最后更新于 2024-12-03

# 如何选择使用不同类型的 Token

在调用飞书开放平台 OpenAPI 时，可能会用到 tenant_access_token、user_access_token 或 app_access_token 这些访问凭证（Token）。本文将介绍如何选择不同的访问凭证，以及如何获取访问凭证。warning
由于`app_access_token`的使用场景比较少（一般用于 [商店应用获取 tenant_access_token](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)），飞书开放平台正在逐步统一`app_access_token`和`tenant_access_token`两个凭证。因此这里主要介绍`tenant_access_token`和`user_access_token`。

## tenant_access_token

tenant_access_token 代表使用**应用的身份**操作 OpenAPI，API 所能操作的数据资源范围受限于**应用的身份所能操作的资源范围**。

如果你的业务逻辑不需要操作用户的数据资源，仅需操作应用自己拥有的资源（比如在应用自己的文档目录空间下创建云文档），则推荐使用 tenant_access_token，无需额外申请授权。

tenant_access_token 获取方式如下：
- [自建应用获取 tenant_access_token](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)
- [商店应用获取 tenant_access_token](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)

## user_access_token

user_access_token 代表使用**应用的使用者的身份**操作 OpenAPI，API 所能操作的数据资源范围受限于**用户的身份所能操作的资源范围**。

如果你的业务逻辑需要操作用户的数据资源，则推荐使用 user_access_token。以通讯录为例，如果使用 tenant_access_token 调用通讯录，则需在开发者后台「权限管理」页面配置应用的通讯录权限范围；而使用 user_access_token 则无需单独配置通讯录权限范围，该范围遵循 user_access_token 所属的用户的通讯录权限范围。

user_access_token 获取方式参见[获取 user_access_token](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)。

## 相关文档

[获取访问凭证](https://open.feishu.cn/document/ukTMukTMukTM/uMTNz4yM1MjLzUzM)
