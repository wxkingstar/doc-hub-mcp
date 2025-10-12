---
title: "创建 OKR 周期"
source_url: https://open.feishu.cn/document/server-docs/okr-v1/period/create
last_remote_update: 2024-01-09
last_remote_update_timestamp: 1704766577000
---
最后更新于 2024-01-09

# 创建 OKR 周期

根据周期规则创建一个 OKR 周期。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/okr/v1/periods
HTTP Method | POST
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 更新 OKR 信息(okr:okr)

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
period_rule_id | string | 是 | 周期规则 id  
**示例值**："6969864184272078374"
start_month | string | 是 | 周期起始年月  
**示例值**："2022-01"

### 请求体示例
```json
{
    "period_rule_id": "6969864184272078374",
    "start_month": "2022-01"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
period_id | string | 周期id
start_month | string | 周期起始年月
end_month | string | 周期结束年月

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "period_id": "6969864184272078374",
        "start_month": "2022-01",
        "end_month": "2022-01"
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1009999 | Unknown error. Please contact Feishu Assistant or your customer success manager. | 内部错误，请联系飞书助手或您的客户成功经理
400 | 1001001 | Invalid parameters. Please check document and modify accordingly. | 无效的参数，请对照文档检查输入的参数
403 | 1001002 | No permission. | 您无权访问该接口，请确认您的登录凭证
400 | 1001003 | User not found. | 用户不存在
400 | 1001004 | OKR data not found. | 对应ID的数据不存在
403 | 1000403 | OpenAPI is unavailable in current edition (Standard edition). Please update to Business edition. | 您目前的套餐无法使用开放平台接口功能，请升级至OKR企业版
400 | 1001008 | Conflict period existed. | 对应时间的周期已存在，无需再度创建
400 | 1001009 | Start date does not fit for given period rule. | 起始日期和周期规则不匹配
