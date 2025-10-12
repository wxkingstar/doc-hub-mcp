---
title: "生成 CalDAV 配置"
source_url: https://open.feishu.cn/document/server-docs/calendar-v4/setting/generate_caldav_conf
last_remote_update: 2024-07-10
last_remote_update_timestamp: 1720582462000
---
最后更新于 2024-07-10

# 生成 CalDAV 配置

调用该接口为当前用户生成一个 CalDAV 账号密码，用于将飞书日历信息同步到本地设备日历。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/calendar/v4/settings/generate_caldav_conf
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 更新日历及日程信息(calendar:calendar)  
            生成 CalDAV 配置信息(calendar:settings.caldav:create)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
device_name | string | 否 | 需要同步日历的设备名，在日历中用来展示。  
**默认值**：空  
**示例值**："iPhone"  
**数据校验规则**：  
- 最大长度：`100` 字符

### 请求体示例
```json
{
    "device_name": "iPhone"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
password | string | CalDAV 密码。
user_name | string | CalDAV 用户名。
server_address | string | 服务器地址
device_name | string | 设备名。与你发送请求时传入的设备名一致。

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "password": "A67h23sd8",
        "user_name": "ZhangSan",
        "server_address": "caldav.domain.com",
        "device_name": "iPhone"
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

更多错误码信息，参见[通用错误码](https://open.feishu.cn/document/ukTMukTMukTM/ugjM14COyUjL4ITN)。
