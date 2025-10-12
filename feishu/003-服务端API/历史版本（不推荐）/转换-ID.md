---
title: "转换 ID"
source_url: https://open.feishu.cn/document/historic-version/id_convert
last_remote_update: 2025-03-07
last_remote_update_timestamp: 1741353057000
---
最后更新于 2025-03-07

# 转换 ID

将[消息 ID](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro#44c58e1c)（ `message_id` ）转换为卡片实体 ID（`card_id`）。用于将由[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)等接口返回的消息 ID 转换为卡片实体 ID，以进一步对卡片进行全量更新、局部更新、或文本流式更新操作。

**注意事项**：本接口已不推荐使用。要基于接口创建卡片、发送卡片，推荐你调用[创建卡片实体](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/create)接口获取卡片实体 ID，再调用[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口发送卡片。

## 提示

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/cardkit/v1/cards/id_convert
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取卡片信息(cardkit:card:read)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
message_id | string | 是 | 消息 ID。通过[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)等接口获取。其消息类型（msg_type）需为卡片（interactive）  
**示例值**："om_fbdf6ed2e17f1d98e78fb26c1370186e"  
**数据校验规则**：  
- 长度范围：`1` ～ `50` 字符

### 请求体示例
```json
{
    "message_id": "om_fbdf6ed2e17f1d98e78fb26c1370186e"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
card_id | string | 消息 ID 对应的卡片 ID。可用于对该卡片进行全量更新、局部更新、或文本流式更新操作

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "card_id": "7355403067414003715"
    }
}
```
