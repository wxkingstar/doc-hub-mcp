---
title: "刷新 user_access_token（v1 版本）"
source_url: https://open.feishu.cn/document/server-docs/authentication-management/access-token/create
last_remote_update: 2025-06-26
last_remote_update_timestamp: 1750920600000
---
最后更新于 2025-06-26

# 刷新 user_access_token（v1 版本）
**注意事项**：本接口已成为历史版本，不推荐使用。请使用最新版本：[刷新 user_access_token](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)。

user_access_token 的最大有效期是 2小时左右。当 user_access_token 过期时，可以调用本接口获取新的 user_access_token。

**注意事项**：刷新后请更新本地user_access_token和refresh_token，不要继续使用旧值重复刷新。保证参数是最新值

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/authen/v1/refresh_access_token
HTTP Method | POST
接口频率限制 | [特殊频控](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 无
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户受雇信息(contact:user.employee:readonly)  
        获取用户邮箱信息(contact:user.email:readonly)  
        获取用户 user ID(contact:user.employee_id:readonly)  
        获取用户手机号(contact:user.phone:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `app_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer a-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
grant_type | string | 是 | 授权类型，**固定值**  
**示例值**："refresh_token"
refresh_token | string | 是 | 刷新和获取user_access_token接口均返回 `refresh_token`，**每次请求，请注意使用最新获取到的`refresh_token`**  
**示例值**："ur-oQ0mMq6MCcueAv0pwx2fQQhxqv__CbLu6G8ySFwafeKww2Def2BJdOkW3.9gCFM.LBQgFri901QaqeuL"

### 请求体示例
```json
{
    "grant_type": "refresh_token",
    "refresh_token": "ur-oQ0mMq6MCcueAv0pwx2fQQhxqv__CbLu6G8ySFwafeKww2Def2BJdOkW3.9gCFM.LBQgFri901QaqeuL"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | user_access_token_info | \-
access_token | string | 字段`access_token`即user_access_token，用于获取用户资源和访问某些open api
token_type | string | token 类型
expires_in | int | user_access_token有效期，单位: 秒，有效时间两个小时左右，需要以返回结果为准
name | string | 用户姓名
en_name | string | 用户英文名称
avatar_url | string | 用户头像
avatar_thumb | string | 用户头像 72x72
avatar_middle | string | 用户头像 240x240
avatar_big | string | 用户头像 640x640
open_id | string | 用户在应用内的唯一标识
union_id | string | 用户统一ID
email | string | 用户邮箱  
**字段权限要求**：  
获取用户邮箱信息(contact:user.email:readonly)
enterprise_email | string | 企业邮箱，请先确保已在管理后台启用飞书邮箱服务  
**字段权限要求**：  
获取用户受雇信息(contact:user.employee:readonly)
user_id | string | 用户 user_id  
**字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)
mobile | string | 用户手机号  
**字段权限要求**：  
获取用户手机号(contact:user.phone:readonly)
tenant_key | string | 当前企业标识
refresh_expires_in | int | refresh_token有效期，单位: 秒，一般是30天左右，需要以返回结果为准
refresh_token | string | 刷新 user_access_token时使用的 refresh_token
sid | string | 用户当前登录态session的唯一标识，为空则不返回

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "access_token": "u-Q7JWnaIM_kRChuLfreHmpArjOEayt.5XUBJcZr.V0Gst4FdQCtvrd9sAViLXQnQgkpL19brGOjKZQTxb",
        "token_type": "Bearer",
        "expires_in": 7140,
        "name": "zhangsan",
        "en_name": "Three Zhang",
        "avatar_url": "www.feishu.cn/avatar/icon",
        "avatar_thumb": "www.feishu.cn/avatar/icon_thumb",
        "avatar_middle": "www.feishu.cn/avatar/icon_middle",
        "avatar_big": "www.feishu.cn/avatar/icon_big",
        "open_id": "ou_caecc734c2e3328a62489fe0648c4b98779515d3",
        "union_id": "on_d89jhsdhjsajkda7828enjdj328ydhhw3u43yjhdj",
        "email": "zhangsan@feishu.cn",
        "enterprise_email": "demo@mail.com",
        "user_id": "5d9bdxxx",
        "mobile": "+86130002883xx",
        "tenant_key": "736588c92lxf175d",
        "refresh_expires_in": 2591940,
        "refresh_token": "ur-oQ0mMq6MCcueAv0pwx2fQQhxqv__CbLu6G8ySFwafeKww2Def2BJdOkW3.9gCFM.LBQgFri901QaqeuL",
		"sid": "AAAAAAAAAANjgHsqKEAAEw=="
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
200 | 20001 | Invalid request. Please check request param | 请检查请求参数
200 | 20007 | Failed to generate a user access token. Please try again | 生成失败，请检查参数是否有效，重试
200 | 20008 | User not exist | 用户不存在，换有效帐号
200 | 20009 | Tenant does not install app | 租户没有安装app，请联系租户管理员安装
200 | 20021 | User resigned | 用户离职，请使用有效帐号
200 | 20022 | User frozen | 用户冻结，请使用有效帐号
200 | 20023 | User not registered | 用户未注册，请使用有效帐号
200 | 20024 | App id in user_access_token or refresh_token diff with app id in app_access_token or tenant_access_token. Please keep the app id consistent | 请检查生成两个token的app是否为同一个
200 | 20025 | Lack of app_id or app_secret in request | 缺失app_id或app_secret，请检查参数
200 | 20028 | Invalid app id | 无效app_id，请检查参数
500 | 20050 | System error | 系统错误，请重试
