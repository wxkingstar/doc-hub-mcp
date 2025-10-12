---
title: "获取事件出口 IP"
source_url: https://open.feishu.cn/document/server-docs/event-subscription-guide/list
---
最后更新于 2023-11-09

# 获取事件出口 IP

飞书开放平台向应用配置的回调地址推送事件时，是通过特定的 IP 发送出去的，应用可以通过本接口获取所有相关的 IP 地址。

**注意事项**：IP 地址有变更可能，建议定期拉取最新 IP 地址，并自动更新至防火墙规则。此外， IP 变更时，开放平台将会推送卡片消息和发布更新日志提前告知开发者。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/event/v1/outbound_ip
HTTP Method | GET
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取事件的出口 IP(event:ip_list)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

### 查询参数

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
page_size | int | 否 | 分页大小  
**示例值**：10  
**数据校验规则**：  
- 最大值：`50`
page_token | string | 否 | 分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果  
**示例值**："xxx"

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
ip_list | string\[\] | outbound ip
page_token | string | 分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
has_more | boolean | 是否还有更多项

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "ip_list": [
            "1.1.1.1"
        ],
        "page_token": "xxx",
        "has_more": false
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 1810001 | param is invalid | 检查分页参数是否正确
