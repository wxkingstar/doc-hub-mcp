---
title: "获取 Offer 列表"
source_url: https://open.feishu.cn/document/server-docs/hire-v1/candidate-management/delivery-process-management/offer/list
last_remote_update: 2025-06-23
last_remote_update_timestamp: 1750651200000
---
最后更新于 2025-06-23

# 获取 Offer 列表

根据人才 ID 获取 Offer 列表。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/offers
HTTP Method | GET
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 获取 offer 信息(hire:offer:readonly)  
            更新 offer 信息(hire:offer)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户 user ID(contact:user.employee_id:readonly)

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
page_size | int | 否 | 分页大小，最大为 200  
**示例值**：100  
**默认值**：`10`
talent_id | string | 是 | 人才 ID，如何获取人才 ID 请参考[获取人才列表](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/talent/list)  
**示例值**：7096320678581242123
user_id_type | string | 否 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
- people_admin_id：以people_admin_id来识别用户，即将下线字段，不建议使用  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)
employee_type_id_type | string | 否 | 此次调用中使用的「人员类型 ID」的类型  
**示例值**：`employee_type_enum_id`  
**可选值有**：  
- people_admin_employee_type_id：「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。  
- employee_type_enum_id：「飞书管理后台」适用的人员类型 ID，通过[查询人员类型](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)  
接口获取  
**默认值**：`people_admin_employee_type_id`

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
has_more | boolean | 是否还有更多项
page_token | string | 分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
items | offer_list_info\[\] | Offer 列表
id | string | Offer ID，详情可参考：[获取 Offer 详情](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/offer/get)
job_info | offer_job_info | Offer 职位
job_id | string | Offer 职位 ID，详情可参考：[获取职位详情](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/job/get_detail)
job_name | string | Offer 职位名称
create_time | int | 创建时间戳（单位：毫秒）
offer_status | int | Offer 状态  
**可选值有**：  
- 1：未申请  
- 2：审批中  
- 3：审批已撤回  
- 4：审批通过  
- 5：审批不通过  
- 6：Offer 已发出  
- 7：候选人已接受  
- 8：候选人已拒绝  
- 9：Offer 已失效  
- 10：未审批  
- 11：实习待入职（仅实习 Offer 具有）  
- 12：实习已入职（仅实习 Offer 具有）  
- 13：实习已离职（仅实习 Offer 具有）
offer_type | int | Offer 类型  
**可选值有**：  
- 1：正式 Offer  
- 2：实习 Offer
employee_type | base_bilingual_with_id | Offer 人员类型
id | string | Offer 人员类型 ID，与入参 `employee_type_id_type` 类型一致
zh_name | string | Offer 人员类型中文名称
en_name | string | Offer 人员类型英文名称
application_id | string | Offer 投递 ID，获取投递信息请参考[获取投递信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application/get)

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
                "id": "7096320678581242123",
                "job_info": {
                    "job_id": "7080891505426925854",
                    "job_name": "xx"
                },
                "create_time": 1628512038000,
                "offer_status": 1,
                "offer_type": 1,
                "employee_type": {
                    "id": "1",
                    "zh_name": "正式",
                    "en_name": "Regular"
                },
                "application_id": "7096358713330272526"
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
