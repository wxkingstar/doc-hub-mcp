---
title: "重新获取 app_ticket"
source_url: https://open.feishu.cn/document/server-docs/authentication-management/access-token/app_ticket_resend
last_remote_update: 2024-05-17
last_remote_update_timestamp: 1715917838000
---
最后更新于 2024-05-17

# 重新获取 app_ticket

开放平台每隔 1 小时会向应用推送 app_ticket 事件，事件体内包含了 app_ticket。应用也可以主动调用此接口，触发开放平台即时推送 app_ticket 事件。了解事件信息可参见[app_ticket 事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/event/app_ticket-events)。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/auth/v3/app_ticket/resend
HTTP Method | POST
支持的应用类型 | 商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 无

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
app_id | string | 是 | 应用唯一标识，创建应用后获得。有关`app_id` 的详细介绍。请参考[通用参数](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)介绍  
**示例值：** "cli_slkdjalasdkjasd"
app_secret | string | 是 | 应用秘钥，创建应用后获得。有关 `app_secret` 的详细介绍，请参考[通用参数](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)介绍  
**示例值：** "dskLLdkasdjlasdKK"

### 请求体示例

```json
{
    "app_id": "cli_slkdjalasdkjasd",
    "app_secret": "dskLLdkasdjlasdKK"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述

### 响应体示例

```json
{
    "code": 0,
    "msg": "success"
}
```

### 错误码
有关错误码的详细介绍，请参考[通用错误码](https://open.feishu.cn/document/ukTMukTMukTM/ugjM14COyUjL4ITN)介绍。
