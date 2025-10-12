---
title: "刷新已过期的 access_token"
source_url: https://open.feishu.cn/document/deprecated-guide/app-login/api-reference/refresh-access_token
---
最后更新于 2024-11-29

# 刷新已过期的 access_token
**注意事项**：此版本为历史版本，已不推荐使用，新版请参考 [刷新 user_access_token](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)
access_token 过期后，开发者需要使用 refresh_token 重新获取一个有效的 access_token。开发者服务器需要严格保证 refresh_token 的安全，并禁止把 refresh_token 传递给网页前端或客户端。部分模式不支持刷新。

当应用没有服务端时，客户端的 refresh_token 应当加密存储，或立即销毁。

**请求方法** ：`POST`

**请求地址** ：`https://passport.feishu.cn/suite/passport/oauth/token`

**请求 Header**：
| 字段         | 值           | 
| --------- | --------------- |
| `Content-Type` | `application/x-www-form-urlencoded` |

**请求参数** ：

| 参数         | 描述           | 类型        | 是否必须        |
| --------- | --------------- | -------   |  --------- |
|`grant_type` | OAuth 2.0规定的授权类型，此处必须是 refresh_token | `string` | 是 |
|`refresh_token` | 通过第二步获取的refresh_token | `string` | 是 |

**返回 Header** ：
| 字段         | 值           | 
| --------- | --------------- |
| `Content-Type` | `application/json;charset=UTF-8` |

**返回参数**：
| 参数         | 描述           | 类型        | 是否必须        |
| --------- | --------------- | -------   |  --------- |
|`access_token` | 飞书服务器授权的`access_token`，用于调用其他接口 | `string` | 是 |
|`token_type` | OAuth 2.0协议规定的Token类型，固定为 `Bearer` | `string` | 是 |
|`expires_in` | `access_token` 的有效期，三方应用服务器需要根据此返回值来控制`access_token`的有效时间 | `string` | 是 |
|`refresh_token` | 当 `access_token` 过期时，通过 `refresh_token`来刷新，获取新的 `access_token` | `string` | 否 |
|`refresh_expires_in` | `refresh_token` 的有效期，默认值为30天 | `string` | 否 |
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
