<!--
title: 小程序接入指南
id: 7330871628166414364
fullPath: /uYjL24iN/ukzMzUjL5MzM14SOzMTN/gadget-incremental-authorization-access-guide
updatedAt: 1735033980000
source: https://open.feishu.cn/document/sso/web-application-end-user-consent/gadget-incremental-authorization-access-guide
-->
# 小程序接入指南

## 整体流程

![gadget_incremental_auth_cn](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5cc59adf88b1d80406b93b91b7d63f0e_Rmh8Xk9aKl.jpeg?height=2226&lazyload=true&width=2560)

## 操作步骤
### 第一步：申请所需权限

根据开发者实际调用 API 所需的权限，在权限管理模块内进行申请开通，并发布应用使配置生效。关于申请权限的介绍可见：[申请 API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)，应用发布流程可参考文档[自建应用发布流程](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process)和[商店应用发布流程](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYjMyUjL2IjM14iNyITN)。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6ed3d748ee4258f066a55fd29c34534e_nl4iHYIYpd.png?height=873&lazyload=true&width=1886)

### 第二步：请求用户授权

通过调用端内应用获取授权码接口 [requestAccess](/ssl:ttdoc/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [login](/ssl:ttdoc/uYjL24iN/uYzMuYzMuYzM) 接口 )，并通过 scopeList 参数传入需要用户授权的权限 ( 空数组表示仅授予应用获取用户凭证信息权限 [获取登录用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/user_info/get) )。

:::note
相应权限需要在步骤一中已申请开通。如果请求授权的点位未开通，页面将返回报错当前应用未申请相关权限，无法授权。
:::

```javascript
if (tt.requestAccess) {
  tt.requestAccess({
    // 需要用户授权的三方应用权限，权限点位需要在步骤一中已申请开通
    scopeList: ["admin:app.admin_id:readonly", "calendar:calendar"],
    // 用来维护请求状态的附加字符串，应用可以根据此字符串来判断上下文关系
    state: "RANDOMSTATE",
    success: (res) => {
      // 用户授权成功后返回预授权码
      const { code } = res;
    },
    fail: (error) => {
      // 用户拒绝授权或者授权失败，返回相应的errno和errString
      const { errno, errString } = error;
    },
  });
} else { // 客户端版本过低，改为调用 tt.login
  tt.login({
    success: (res) => {
      // 登录成功后返回预授权码
      const { code } = res;
    },
    fail: (error) => {
      // 登录失败，返回相应的errno和errString
      const { errno, errString } = error;
    },
  });
}
```
用户将进入飞书授权页面，页面展示应用向用户增量申请的授权权限列表，历史已授权给应用的权限信息将不再展示。

![auth_sheet_cn](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/084015004ad984b07edfb258ce72b4da_90NpliBuUy.png?height=902&lazyload=true&width=600)

### 第三步：用户同意授权，获取授权码
用户同意授权后，接口会返回授权码 code

| 名称         | 类型           | 描述       
| --------- | --------------- | -------  
|`code` | `string` | 临时登录凭证，有效期 3 分钟，只能使用一次 |
|`state` | `string` | 用来维护请求状态的附加字符串，应用可以根据此字符串来判断上下文关系 |

如果用户拒绝授权，则授权框会关闭，接口返回 2700002 的错误码。

### 第四步：通过授权码，获取 user_access_token
在应用获取到授权码 code 后，应用通过调用[获取 user_access_token 的接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)来获取 user_access_token 并进行后续服务端 Open API 的调用。

请求 URL：`https://open.feishu.cn/open-apis/authen/v2/oauth/token`

请求方法：`POST`

请求体（JSON 格式）：

:::warning
代码中的参数值仅为示例值，请替换为实际值。
:::

```json
{
    "grant_type": "authorization_code",
    "client_id": "cli_a5ca35a685b0x26e",
    "client_secret": "baBqE5um9LbFGDy3X7LcfxQX1sqpXlwy",
    "code": "a61hb967bd094dge949h79bbexd16dfe"
}
```

响应体（JSON 格式）：
```json
{
    "code": 0,
    "access_token": "eyJhbGciOiJFUzI1NiIs**********X6wrZHYKDxJkWwhdkrYg",
    "expires_in": 7200, // 非固定值，请务必根据响应体中返回的实际值来确定 access_token 的有效期
    "refresh_token": "eyJhbGciOiJFUzI1NiIs**********XXOYOZz1mfgIYHwM8ZJA",
    "refresh_token_expires_in": 604800, // 非固定值，请务必根据响应体中返回的实际值来确定 refresh_token 的有效期
    "scope": "auth:user.id:read offline_access task:task:read user_profile",
    "token_type": "Bearer"
}
```

### 第五步：通过 user_access_token，调用 Open API

使用 user_access_token 调用服务端 Open API 接口时，若接口所需权限点位未经授权，接口会返回报错，您需要重新发起授权流程来获取用户相应的授权。

缺少授权时，调用服务端接口的报错示例：

```json
{
    "code": 99991679,
    "msg": "Unauthorized. You do not have permission to perform the requested operation on the resource. Please request user re-authorization and try again. required one of these privileges: [docx:document, docx:document:readonly]",
    "error": {
        "log_id": "202308071603455425F5854702B4000DB9",
        "permission_violations": [
            {
                "type": "action_privilege_required",
                "subject": "docx:document"
            },
            {
                "type": "action_privilege_required",
                "subject": "docx:document:readonly"
            }
        ]
    }
}
```

### 第六步：刷新 user_access_token（可选）
在 refresh token 有效期内，如有必要，您可以使用 refresh token 刷新生成一个新的 user access token]，更多细节请参考[刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)。

请求 URL：`https://open.feishu.cn/open-apis/authen/v2/oauth/token`

请求方法：`POST`

请求体（JSON 格式）：

:::warning
代码中的参数值仅为示例值，请替换为实际值。
:::

```json
{
    "grant_type": "refresh_token",
    "client_id": "cli_a5ca35a685b0x26e",
    "client_secret": "baBqE5um9LbFGDy3X7LcfxQX1sqpXlwy",
    "refresh_token": "eyJhbGciOiJFUzI1NiIs**********XXOYOZz1mfgIYHwM8ZJA"
}
```

响应体（JSON 格式）：
```json
{
    "code": 0,
    "access_token": "eyJhbGciOiJFUzI1NiIs**********X6wrZHYKDxJkWwhdkrYg",
    "expires_in": 7200, // 非固定值，请务必根据响应体中返回的实际值来确定 access_token 的有效期
    "refresh_token": "eyJhbGciOiJFUzI1NiIs**********VXOYOZYZmfgIYHWM0ZJA",
    "refresh_token_expires_in": 604800, // 非固定值，请务必根据响应体中返回的实际值来确定 refresh_token 的有效期
    "scope": "auth:user.id:read offline_access task:task:read user_profile",
    "token_type": "Bearer"
}
```

