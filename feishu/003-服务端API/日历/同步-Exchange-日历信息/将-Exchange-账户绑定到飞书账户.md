---
title: "将 Exchange 账户绑定到飞书账户"
source_url: https://open.feishu.cn/document/server-docs/calendar-v4/exchange_binding/create
last_remote_update: 2024-07-10
last_remote_update_timestamp: 1720582462000
---
最后更新于 2024-07-10

# 将 Exchange 账户绑定到飞书账户

调用该接口将 Exchange 账户绑定到飞书账户，进而支持 Exchange 日历的导入。

**注意事项**：当前身份需要是企业超级管理员。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/calendar/v4/exchange_bindings
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 更新日历及日程信息(calendar:calendar)  
            获取日历、日程及忙闲信息(calendar:calendar:readonly)  
            创建 Exchange 绑定关系(calendar:exchange.bindings:create)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户邮箱信息(contact:user.email:readonly)  
        获取用户 user ID(contact:user.employee_id:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 查询参数

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
user_id_type | string | 否 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
admin_account | string | 否 | Exchange 的 admin 账户。  
**示例值**："email_admin_example@outlook.com"  
**数据校验规则**：  
- 长度范围：`1` ～ `500` 字符
exchange_account | string | 否 | 需绑定的 Exchange 账户。  
**示例值**："email_account_example@outlook.com"  
**数据校验规则**：  
- 长度范围：`1` ～ `500` 字符
user_id | string | 否 | 用户 ID，即 Exchange 账户绑定的飞书账户 ID。关于用户 ID 可参见[用户相关的 ID 概念](https://open.feishu.cn/document/home/user-identity-introduction/introduction)。  
**示例值**："ou_xxxxxxxxxxxxxxxxxx"

### 请求体示例
```json
{
    "admin_account": "email_admin_example@outlook.com",
    "exchange_account": "email_account_example@outlook.com",
    "user_id": "ou_xxxxxxxxxxxxxxxxxx"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | exchange_binding | \-
admin_account | string | Exchange 的 admin 账户。  
**字段权限要求**：  
获取用户邮箱信息(contact:user.email:readonly)
exchange_account | string | 需绑定的 Exchange 账户。  
**字段权限要求**：  
获取用户邮箱信息(contact:user.email:readonly)
user_id | string | 用户 ID，即 Exchange 账户绑定的飞书账户 ID。
status | string | Exchange 账户的同步状态。  
**可选值有**：  
- doing：日历正在同步  
- cal_done：日历同步完成  
- timespan_done：近期时间段同步完成  
- done：日程同步完成  
- err：同步错误
exchange_binding_id | string | Exchange 绑定的唯一标识 ID，是 admin 账户、Exchange 账户、用户三元组的唯一标识 ID。你可以通过该 ID 查询绑定关系、日历同步状态，或者解除绑定关系。

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "admin_account": "email_admin_example@outlook.com",
        "exchange_account": "email_account_example@outlook.com",
        "user_id": "ou_xxxxxxxxxxxxxxxxxx",
        "status": "doing",
        "exchange_binding_id": "ZW1haWxfYWRtaW5fZXhhbXBsZUBvdXRsb29rLmNvbSBlbWFpbF9hY2NvdW50X2V4YW1wbGVAb3V0bG9vay5jb20="
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 190002 | invalid parameters in request | 无效的请求参数。排查建议如下：  
- 确认请求参数的字段名称、传参类型正确。  
- 确认已经申请了相应资源的权限。  
- 确认相应资源未被删除。
500 | 190003 | internal service error | 内部服务错误，请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。
429 | 190004 | method rate limited | 方法频率限制。建议稍后再试，并适当减小请求 QPS。
429 | 190005 | app rate limited | 应用频率限制。建议稍后再试，并适当减小请求 QPS。
403 | 190006 | wrong unit for app tenant | 请求错误，检查应用 App ID 和 App Secret 是否正确。如仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。
404 | 190007 | app bot_id not found | 应用的 bot_id 没有找到。你需要确保应用开启了[机器人能力](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。如仍未解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。
429 | 190010 | current operation rate limited | 当前操作被限流，原因一般为公用资源并发抢占失败。你可以适当降低当前操作频率，然后重试。
404 | 195100 | user is dismiss or not exist in the tenant | 当前身份或指定用户已经离职，或者不在该租户内。请检查并改为正确的身份来调用接口。
403 | 195101 | user is not supper administrator | 当前身份不是该租户的超级管理员。请检查并修改身份信息。
400 | 195102 | exchange_binding_id invalid | exchange_binding_id 无效。你需要检查并修改为正确的 ID。
404 | 195103 | exchange account binding is not found | exchange 账户的绑定关系没有找到。你需要检查输入参数是否填写正确。
403 | 195104 | current tenant not match | 当前租户与 admin 账户绑定的租户不匹配。你需要检查并修改为正确的参数值。
403 | 195105 | admin account binding failed | 管理后台绑定 admin 帐户失败。请在管理后台重新绑定 admin 账户后重试。
404 | 195106 | admin account is not found | admin 账户不存在。你需要检查并修改为正确的参数值。

更多错误码信息，参见[通用错误码](https://open.feishu.cn/document/ukTMukTMukTM/ugjM14COyUjL4ITN)。
