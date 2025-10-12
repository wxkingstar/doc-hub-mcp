---
title: "获取 Offer 申请表列表"
source_url: https://open.feishu.cn/document/server-docs/hire-v1/recruitment-related-configuration/offer-settings/offer_application_form/list
last_remote_update: 2024-10-25
last_remote_update_timestamp: 1729853701000
---
最后更新于 2024-10-25

# 获取 Offer 申请表列表

获取 Offer 申请表列表，可获取的信息包括申请表名称、创建时间等。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/offer_application_forms
HTTP Method | GET
接口频率限制 | [10 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取 offer 申请表信息(hire:offer_schema:readonly)

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
page_token | string | 否 | 分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果  
**示例值**：1231231987
page_size | int | 否 | 分页大小，**无效参数，请忽略**  
**示例值**：100  
**默认值**：`1`  
**数据校验规则**：  
- 最大值：`100`

- **注意**：该接口暂不支持分页查询功能，上述`page_token`和`page_size`参数无效，会返回全部的Offer申请表。

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
has_more | boolean | 是否还有更多项
page_token | string | 分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
items | offer_apply_form\[\] | Offer 申请表列表
id | string | 申请表ID
name | i18n | 申请表名称
zh_cn | string | 中文名称
en_us | string | 英文名称
create_time | string | 创建时间，毫秒时间戳

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "has_more": true,
        "page_token": "1234452132",
        "items": [
            {
                "id": "1213213123123",
                "name": {
                    "zh_cn": "管培生offer申请表",
                    "en_us": "offer application form for trainee"
                },
                "create_time": "1628512038000"
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1002001 | 系统错误 | 请根据实际报错信息定位或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1002002 | 参数错误 | 检查参数是否正确，例如类型，大小
