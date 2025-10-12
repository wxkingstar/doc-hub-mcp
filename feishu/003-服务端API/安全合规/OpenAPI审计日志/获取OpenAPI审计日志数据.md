---
title: "获取OpenAPI审计日志数据"
source_url: https://open.feishu.cn/document/security_and_compliance-v1/openapi_log/list_data
last_remote_update: 2024-04-26
last_remote_update_timestamp: 1714121397000
---
最后更新于 2024-04-26

# 获取OpenAPI审计日志数据

该接口用于获取OpenAPI审计日志数据

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/security_and_compliance/v1/openapi_logs/list_data
HTTP Method | POST
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 查看 OpenAPI 审计日志(security_and_compliance:audit_log.openapi_log:readonly)

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
api_keys | string\[\] | 否 | 飞书开放平台定义的API，参考：[API列表](https://open.feishu.cn/document/server-docs/api-call-guide/server-api-list)  
**示例值**：["POST/open-apis/authen/v1/access_token"]  
**数据校验规则**：  
- 最大长度：`100`
start_time | int | 否 | 以秒为单位的起始时间戳  
**示例值**：1610613336
end_time | int | 否 | 以秒为单位的终止时间戳  
**示例值**：1610613336
app_id | string | 否 | 调用OpenAPI的应用唯一标识，可以前往 [开发者后台](https://open.feishu.cn/app) > 应用详情页 > 凭证与基础信息中获取 app_id  
**示例值**："cli_xxx"
page_size | int | 否 | 分页大小  
**示例值**：20  
**数据校验规则**：  
- 取值范围：`1` ～ `100`
page_token | string | 否 | 分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果  
**示例值**："xxx"

### 请求体示例
```json
{
    "api_keys": [
        "POST/open-apis/authen/v1/access_token"
    ],
    "start_time": 1610613336,
    "end_time": 1610613336,
    "app_id": "cli_xxx",
    "page_size": 20,
    "page_token": "xxx"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
items | openapi_log\[\] | openapi日志列表
id | string | openapi日志唯一标识
api_key | string | 飞书开放平台定义的API
event_time | int | 日志产生的时间，以秒为单位的时间戳
app_id | string | 调用OpenAPI的应用唯一标识
ip | string | 发起调用api的ip地址
log_detail | openapi_log_detail | openapi调用日志详情
path | string | http请求路径
method | string | http请求方法
query_param | string | http查询参数
payload | string | http请求体
status_code | int | http状态码
response | string | http响应体，仅返回code，msg，error信息等
page_token | string | 分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
has_more | boolean | 是否还有更多项

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "items": [
            {
                "id": "10000",
                "api_key": "POST/open-apis/demo/v1/example",
                "event_time": 1610613336,
                "app_id": "cli_xxx",
                "ip": "192.123.12.1",
                "log_detail": {
                    "path": "/open-apis/demo/v1/example",
                    "method": "POST",
                    "query_param": "{}",
                    "payload": "{\"param1\": \"val1\", \"param2\": \"val2\"}",
                    "status_code": 0,
                    "response": "{\"code\": 0, \"msg\": \"ok\"}"
                }
            }
        ],
        "page_token": "xxxx",
        "has_more": false
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1780001 | Internal Server Error | 请重试，若仍有异常请联系开放平台技术支持
400 | 1780103 | Request Param Error | 参照文档说明检查输入参数
