---
title: "解除 Exchange 账户绑定"
source_url: https://open.feishu.cn/document/server-docs/calendar-v4/exchange_binding/delete
---
最后更新于 2024-07-10

# 解除 Exchange 账户绑定

调用该接口解除 Exchange 账户和飞书账户的绑定关系，Exchange 账户解除绑定后才能和其他飞书账户继续绑定。

**注意事项**：当前身份需要是企业超级管理员。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/calendar/v4/exchange_bindings/:exchange_binding_id
HTTP Method | DELETE
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 更新日历及日程信息(calendar:calendar)  
            删除 Exchange 绑定关系(calendar:exchange.bindings:delete)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
exchange_binding_id | string | Exchange 绑定的唯一标识 ID。调用 [将 Exchange 账户绑定到飞书账户](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/create) 绑定时，可从返回结果中获取 exchange_binding_id。  
**示例值**："ZW1haWxfYWRtaW5fZXhhbXBsZUBvdXRsb29rLmNvbSBlbWFpbF9hY2NvdW50X2V4YW1wbGVAb3V0bG9vay5jb20="

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {}
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
