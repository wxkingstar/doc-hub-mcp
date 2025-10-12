<!--
title: 通用参数
id: 6976829516543623171
fullPath: /ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology
updatedAt: 1732848720000
source: https://open.feishu.cn/document/server-docs/api-call-guide/terminology
-->
# 通用参数
为了满足多样化的应用场景，飞书开放平台提供了丰富的 API 和事件，供开发者调用或订阅。这些 API 和事件会涉及到一些通用参数，在此进行统一介绍。
通用参数可能作为请求参数，也可能作为响应参数。在使用飞书开放平台提供的 API 和事件之前，建议先了解一下这些通用参数的含义。
## 应用相关

### app_id

`app_id` 是飞书开放平台应用的唯一标识。在创建应用时，由系统自动生成，用户不能自行修改。可以在[开发者后台](https://open.feishu.cn/app)的 **凭证与基础信息** 页面查看 `app_id`。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/75a323a2311bf02b984645398d9a04f4_IzV8lIb35K.png?height=524&lazyload=true&maxWidth=600&width=3594)

### app_secret

`app_secret` 是应用的秘钥。在创建应用时，由系统自动生成，在调用某些 API 时，需要将 `app_secret` 作为请求参数之一。用户可以在[开发者后台](http://www.feishu.cn/admin)的 **凭证与基础信息** 页面查询或重置秘钥。

### app_ticket

`app_ticket` 是商店应用使用到的一个字段，用于提升商店应用的安全性。
调用[接口](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token)获取商店应用的 `app_access_token` 时，需要携带 `app_ticket` 作为请求参数之一。该字段的获取方式如下：

1. 创建商店应用后，为应用配置[事件订阅](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)，订阅 [app_ticket 事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/event/app_ticket-events)。

	订阅后，飞书开放平台会以 1 次/小时的频率自动向应用推送 `app_ticket`。
    
2. （可选）调用 [重新获取 app_ticket](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_ticket_resend) 接口，主动触发 [app_ticket 事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/event/app_ticket-events)。


## 企业相关

### tenant_key

`tenant_key` 是企业唯一标识，一个 tenant_key 在实际应用场景中对应唯一的企业。应用有如下两种方式获取 `tenant_key`：
- 企业安装应用时，开放平台通过事件推送给应用。
- 用户登录授权时，飞书开放平台会返回 `tenant_key`。

### department_id

department_id 是允许用户自定义的一种部门 ID。该类 ID 支持复用已经被删除部门的 department_id，因此，该类 ID 不是部门的全局唯一标识，仅是未删除部门范围内的唯一标识。

- 在创建部门时，如果未自定义配置 department_id，则开放平台会随机生成一个字符串作为部门的 department_id。
- 如果你的企业内部系统已有维护中的部门 ID，你可以将这些部门 ID 写入到飞书通讯录的部门 department_id 属性中，由此实现飞书部门 ID 和企业内部系统部门 ID 的一致性，节省跨系统调用的映射成本。
- 如果你需要确保部门 ID 在企业内全局唯一，则推荐你使用部门的 open_department_id 管理维护部门。


### open_department_id

open_department_id 是由开放平台自动生成的部门 ID，固定以 `od-` 开头。单个部门的 open_department_id 在不同应用、不同开发主体内均为相同取值，该取值在企业内全局唯一。

## 用户相关

飞书对用户身份体系有充分地设计，为了满足不同开发场景的需求，飞书设置了 `user_id`、`open_id` 和 `union_id` 等不同的用户标识。详细的介绍，请参考[用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。

开发一个应用时，合理的 ID 选择逻辑如下：
- 创建的应用不存在跨应用的数据关联互通场景，使用 `open_id` 即可。
- 需要跨应用关联数据，但是其开发者归属同一个企业组织，可以使用 `union_id`。
- 需要跨应用关联数据，并且这些应用可能是不同的组织开发的，但是应用的用户归属在同一个企业内，则使用 `user_id`。

## 访问凭证

为了提升 API 调用的安全性，飞书开放平台设计了访问凭证机制。在调用接口前，应用需要先获取所需的访问凭证。

访问凭证也称为 `access_token`，包括三种：
- 应用身份短期令牌，参数名为 `app_access_token`。
- 应用访问凭证，参数名为 `tenant_access_token`。
- 用户访问凭证，参数名 `user_access_token`。


了解如何获取访问凭证，请参考[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。

了解飞书开放平台的权限体系，可以参考[访问权限介绍](/ssl:ttdoc/home/introduction-to-scope-and-authorization/overview)。

### app_access_token

`app_access_token` 是应用身份的短期令牌，开放平台根据 `app_access_token` 识别调用方的应用身份。

如何获取 `app_access_token`，参考[商店应用获取 app_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token)、[自建应用获取 app_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token_internal)。

### tenant_access_token

`tenant_access_token` 是应用访问凭证，使用该凭证将以应用身份调用 API，可读写的数据范围由应用自身的[数据权限范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)决定。

如何获取 `tenant_access_token`，参考[商店应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)、[自建应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)。

### user_access_token

`user_access_token` 是用户访问凭证。使用该凭证将以用户身份调用 API，可读写的数据范围由用户可读写的数据范围决定。

如何获取 `user_access_token`。参考[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)。


## 其他

### chat_id

`chat_id` 是会话（包括单聊、群聊）的唯一标识。

### open_message_id

`open_message_id` 是消息体的唯一标识。
