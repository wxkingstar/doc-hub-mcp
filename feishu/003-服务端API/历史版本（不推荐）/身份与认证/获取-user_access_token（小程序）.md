---
title: "获取 user_access_token（小程序）"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/login/code2session
last_remote_update: 2023-06-26
last_remote_update_timestamp: 1687769386000
---
最后更新于 2023-06-26

# 获取 user_access_token（小程序）

通过 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM)接口获取到登录凭证`code`后，开发者可以通过服务器发送请求的方式获取 session_key 和 用户凭证信息。

本接口适用于 [小程序登录](https://open.feishu.cn/document/uYjL24iN/uETO5QjLxkTO04SM5kDN) 及[小组件登录](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/guide/open-ability/block-login)。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/mina/v2/tokenLoginValidate
HTTP Method | POST
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 无

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `app_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：获取与使用access_token](https://open.feishu.cn/document/ukTMukTMukTM/uMTNz4yM1MjLzUzM)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 请求体
参数 | 类型 | 必填 | 说明 
-- | -- | -- | -- 
code | string | 是 | [登录](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM)时获取的 code

### 请求体示例
```json
{
     "code": "2ef0bb04e272d274"
}
```

## 响应
### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
&emsp;∟&nbsp;open_id | string | 用户的[Open ID](https://open.feishu.cn/document/home/user-identity-introduction/open-id)，用于在同一个应用中对用户进行标识
&emsp;∟&nbsp;employee_id | string | 用户的[User ID](https://open.feishu.cn/document/home/user-identity-introduction/user-id)，在职员工在企业内的唯一标识   
**仅当开通以下权限后 返回该字段**：  
获取用户 user ID(contact:user.employee_id:readonly)
&emsp;∟&nbsp;session_key | string | 会话密钥
&emsp;∟&nbsp;tenant_key | string | 用户所在企业唯一标识
&emsp;∟&nbsp;access_token | string | [user_access_token](https://open.feishu.cn/document/ukTMukTMukTM/uMTNz4yM1MjLzUzM)，用户身份访问凭证
&emsp;∟&nbsp;expires_in | int | [user_access_token](https://open.feishu.cn/document/ukTMukTMukTM/uMTNz4yM1MjLzUzM)过期时间戳
&emsp;∟&nbsp;refresh_token | string | 刷新用户 access_token 时使用的 token，过期时间为30天。刷新access_token 接口说明请查看[文档](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/authen/refresh_access_token)

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
    	"open_id": "ou_194fcfc5e4b78db556a040ff5e42c0",
    	"employee_id":"6c486g",
    	"session_key": "e3aeb7df000c835365c630dac91bcf",
    	"tenant_key":"2c5914ac018f97",
    	"access_token":"u-tpwcnx2XzIcq8yHyJ6KL",
    	"expires_in":1565512680,
    	"refresh_token":"ur-W9dGvBJyVtwZmrwh0vBn"
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
200 | 10202 | access token invalid | 检查 access_token 是否过期
200 | 10213 | code appid not match | 1. 获取code的应用与该接口的应用必须是同一个应用，请确认是否跨应用调用  
2. code 仅能使用一次，请确认是否重复使用或者过期
200 | 10226 | invalid code | code不合法，请检查code是否合法或者过期
200 | 10228 | user to app has no visibility | 当前用户没有可见性

## 已知问题
返回的data中会包含一个union_id，该参数已废弃，与开放平台中常用的[Union ID](https://open.feishu.cn/document/home/user-identity-introduction/union-id)不是一个概念，请勿使用；如需要使用[Union ID](https://open.feishu.cn/document/home/user-identity-introduction/union-id)，可通过[获取单个用户信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)获取
