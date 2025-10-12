<!--
title: 获取 access_token
id: 7000686273376681987
fullPath: /common-capabilities/sso/api/get-access_token
updatedAt: 1732848744000
source: https://open.feishu.cn/document/deprecated-guide/app-login/api-reference/get-access_token
-->
# 获取 access_token
:::html
<md-alert type="error">
此版本为历史版本，已不推荐使用，新版请参考 [获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)
</md-alert>
:::

开发者网页前端或客户端 [获取 code](/ssl:ttdoc/common-capabilities/sso/web-application-sso/web-app-overview#3bc4d3a8) 之后，需要把 code 传递给开发者的服务器，然后通过开发者服务器调用飞书服务器来获取可用于访问用户信息的 access_token。access_token 是开发者用户获取用户信息的唯一凭证，开发者服务器需要严格保证 access_token 的安全，并禁止把 access_token 传递给客户端。

**请求方法** ：`POST`

**请求地址** ：`https://passport.feishu.cn/suite/passport/oauth/token`

**请求 Header**：
| 字段         | 值           | 
| --------- | --------------- |
| `Content-Type` | `application/x-www-form-urlencoded` |

**请求参数** ：

| 参数         | 描述           | 类型        | 是否必须        |
| --------- | --------------- | -------   |  --------- |
|`grant_type` | OAuth 2.0规定的授权类型，此处必须是 authorization_code | `string` | 是 |
|`client_id` | 应用的唯一ID，在开发者后台【凭证和基础信息】中可以获得 | `string` | 是 |
|`client_secret` | 应用的密钥信息，在开发者后台【凭证和基础信息】中可以获得，使用挑战码模式时不填写此参数，其他情况必须填写 | `string` | 否 |
|`code` | [登录流程](/ssl:ttdoc/common-capabilities/sso/web-application-sso/web-app-overview)中获取的授权码 | `string` | 是 |
| `redirect_uri` | [登录流程](/ssl:ttdoc/common-capabilities/sso/web-application-sso/web-app-overview)中的redirect_uri参数 | `string` | 移动端登录：否 <br> Web端登录：是|


**返回 Header** ：
| 字段         | 值           | 
| --------- | --------------- |
| `Content-Type` | `application/json;charset=UTF-8` |

**返回参数**：
| 参数         | 描述           | 类型        | 是否必须        |
| --------- | --------------- | -------   |  --------- |
|`access_token` | 飞书服务器授权的`access_token`，用于调用其他接口 | `string` | 是 |
|`token_type` | OAuth 2.0协议规定的Token类型，固定为 `Bearer` | `string` | 是 |
|`expires_in` | `access_token` 的有效期，三方应用服务器需要根据此返回值来控制`access_token`的有效时间 | `int` | 是 |
|`refresh_token` | 当 `access_token` 过期时，通过 `refresh_token`来刷新，获取新的 `access_token` | `string` | 否 |
|`refresh_expires_in` | `refresh_token` 的有效期 | `int` | 否 |
**返回示例**：
```json
{
    "access_token": "Q7JWnaIM_kRChuLfreHmpArjOEayt.5XUBJcZr.V0Gst4FdQCtvrd9sAViLXQnQgkpL19brGOjKZQTxb",
    "token_type": "Bearer",
    "expires_in": 3600,    
    "refresh_token": "oQ0mMq6MCcueAv0pwx2fQQhxqv__CbLu6G8ySFwafeKww2Def2BJdOkW3.9gCFM.LBQgFri901QaqeuL",
    "refresh_expires_in": 864000
}
```
