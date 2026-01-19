---
title: "创建外部 Offer"
source_url: https://open.feishu.cn/document/hire-v1/get-candidates/import-external-system-information/import-external-offer-info/create
last_remote_update: 2025-12-02
last_remote_update_timestamp: 1764644266000
---
最后更新于 2025-12-02

# 创建外部 Offer

创建外部 Offer，可用于导入来自其他系统的 Offer 信息。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/external_offers
HTTP Method | POST
接口频率限制 | [10 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 更新外部 Offer(hire:external_offer)

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
external_id | string | 否 | 外部系统 Offer 主键（仅用于幂等）  
- 若不传此值，则不进行幂等校验  
- 若传此值，则用于幂等校验，同一`external_id` 24小时内仅可创建一次  
**示例值**："729557715718"
external_application_id | string | 是 | 外部投递 ID，可通过[查询外部投递列表](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/external_application/list)接口获得  
**示例值**："7395015673275697419"
biz_create_time | string | 否 | Offer 创建时间，毫秒时间戳  
**示例值**："1721899352428"
owner | string | 否 | Offer 负责人姓名  
**示例值**："张三"
offer_status | string | 否 | Offer 状态  
**示例值**："已发送"
attachment_id_list | string\[\] | 否 | Offer 详情附件 ID 列表，可通过[创建附件](https://open.feishu.cn/document/ukTMukTMukTM/uIDN1YjLyQTN24iM0UjN/create_attachment)  
接口返回  
**示例值**：["7404675264888097068"]  
**数据校验规则**：  
- 长度范围：`0` ～ `20`

### 请求体示例
```json
{
    "external_id": "729557715718",
    "external_application_id": "7395015673275697419",
    "biz_create_time": "1721899352428",
    "owner": "张三",
    "offer_status": "已发送",
    "attachment_id_list": [
        "7404675264888097068"
    ]
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
external_offer | external_offer | 外部 Offer
id | string | 外部 Offer ID（由飞书招聘系统生成）
external_application_id | string | 外部投递 ID
biz_create_time | string | Offer 创建时间，毫秒时间戳
owner | string | Offer 负责人姓名
offer_status | string | Offer 状态
attachment_list | external_common_attachment\[\] | Offer 详情附件列表
id | string | 附件 ID，详情可查看：[获取附件信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/attachment/get)
name | string | 附件名称
size | int | 附件大小（单位：字节）

### 响应体示例
```json
{
    "code": 0,
    "msg": "SUCCESS",
    "data": {
        "external_offer": {
            "id": "6989202908470446380",
            "external_application_id": "7395015673275697419",
            "biz_create_time": "1721899352428",
            "owner": "张三",
            "offer_status": "已发送",
            "attachment_list": [
                {
                    "id": "6987954043925432620",
                    "name": "test_resume.pdf",
                    "size": 126371
                }
            ]
        }
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1002001 | System exception | 请根据实际报错信息定位问题或联系[技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1002002 | Invalid parameter | 检查参数是否正确，例如类型，大小
