---
title: "通过员工ID批量获取社保增减员记录"
source_url: https://open.feishu.cn/document/corehr-v1/basic-compensation/social_archive/query-2
---
最后更新于 2025-09-15

# 批量获取社保增减员记录

通过员工ID批量获取社保增减员记录

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/compensation/v1/social_archive_adjust_record/query
HTTP Method | POST
接口频率限制 | [10 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取员工增减员记录信息(corehr:compensation.social_adjust_record:read)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户 user ID(contact:user.employee_id:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 查询参数

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
user_id_type | string | 是 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
- people_corehr_id：以people_corehr_id来识别用户  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
user_id_list | string\[\] | 是 | 用户ID列表，与入参 user_id_type 类型一致  
**示例值**：["7134995965475620396"]  
**数据校验规则**：  
- 长度范围：`0` ～ `200`
record_type | string | 是 | 增减员类型, increase: 增员; attrition: 减员  
**示例值**："increase"  
**可选值有**：  
- increase：增员  
- attrition：减员  
**数据校验规则**：  
- 长度范围：`1` ～ `32` 字符

### 请求体示例
```json
{
    "user_id_list": [
        "7134995965475620396"
    ],
    "record_type": "increase"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
records | social_archive_adjust_record\[\] | 增/减员记录
user_id | string | 员工ID，与入参 user_id_type 类型一致
record_type | string | 类型，increase: 增员; attrition: 减员  
**可选值有**：  
- increase：增员  
- attrition：减员
details | social_archive_detail\[\] | 员工增减员记录，包括社保、公积金记录
description | i18n | 调整说明
zh_cn | string | 中文描述
en_us | string | 英文描述
insurance_type | string | 类型。social_insurance: 社保; provident_fund: 公积金  
**可选值有**：  
- social_insurance：社保  
- provident_fund：公积金
insurance_status | string | 参保状态，非「参保」状态下，基数、险种数据等为空  
**可选值有**：  
- contribution：参保  
- not_contribution：不参保  
- stopped_contribution：停保
id | string | 员工参保档案ID（返回为空，增减员记录中无此数据）
tid | string | 员工参保档案调整记录ID（返回为空，增减员记录中无此数据）
plan_id | string | 参保方案ID，详细信息可通过[查询参保方案](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/compensation-v1/social_plan/query)接口获取。当record_type为attrition时，不返回该数据
plan_tid | string | 参保方案版本ID。当record_type为attrition时，不返回该数据
location_id | string | 参保城市ID，可通过[获取地点信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/location/list)接口查询详细信息。当record_type为attrition时，不返回该数据
company_id | string | 社保缴纳主体ID，可通过[获取公司主体](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/company/batch_get)接口查询详细信息。当record_type为attrition时，不返回该数据
account_type | string | 社保账户类型。当record_type为attrition时，不返回该数据
insurance_account | string | 社保账号。当record_type为attrition时，不返回该数据
base_salary | string | 申报缴纳基数，单位：元。当record_type为attrition时，不返回该数据
insurance_details | social_archive_item\[\] | 险种数据详情。当record_type为attrition时，不返回该数据
insurance_id | string | 险种ID，可通过[获取险种配置列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/compensation-v1/social_insurance/list)接口查询
company_deduction | string | 企业缴纳金额，单位：元
company_setting | social_plan_item_setting | 企业缴纳配置
lower_limit | string | 基数下限，浮点数，保留二位小数，单位：元
upper_limit | string | 基数上限，浮点数，保留二位小数，单位：元
payment_ratio | string | 缴纳比例，浮点数，默认填充到二位小数，支持输入到四位，单位为 %
payment_rounding_rule | string | 缴纳金舍入规则。rounding: 四舍五入; round_up: 向上舍入; round_down: 向下舍入  
**可选值有**：  
- rounding：四舍五入  
- round_up：向上舍入  
- round_down：向下舍入
payment_decimals | int | 缴纳金小数位数，0位小数-6位小数之间选择
fixed_payment | string | 附加固定金额，浮点数，保留二位小数，单位：元
personal_deduction | string | 个人缴纳金额，单位：元
personal_setting | social_plan_item_setting | 个人缴纳配置
lower_limit | string | 基数下限，浮点数，保留二位小数，单位：元
upper_limit | string | 基数上限，浮点数，保留二位小数，单位：元
payment_ratio | string | 缴纳比例，浮点数，默认填充到二位小数，支持输入到四位，单位为 %
payment_rounding_rule | string | 缴纳金舍入规则。rounding: 四舍五入; round_up: 向上舍入; round_down: 向下舍入  
**可选值有**：  
- rounding：四舍五入  
- round_up：向上舍入  
- round_down：向下舍入
payment_decimals | int | 缴纳金小数位数，0位小数-6位小数之间选择
fixed_payment | string | 附加固定金额，浮点数，保留二位小数，单位：元
payment_frequency | string | 缴纳频率  
**可选值有**：  
- annually：每年  
- monthly：每月  
- quarterly：每季度
payment_months | int\[\] | 缴纳月份，1月～12月
effective_date | string | 档案生效时间，yyyy-MM-dd

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "records": [
            {
                "user_id": "9960875",
                "record_type": "increase",
                "details": [
                    {
                        "description": {
                            "zh_cn": "2024年社保基数调整",
                            "en_us": "2024 Social Insurance Base Adjustment"
                        },
                        "insurance_type": "social_insurance",
                        "insurance_status": "contribution",
                        "id": "null",
                        "tid": "null",
                        "plan_id": "7199837930276308524",
                        "plan_tid": "7199643907243361836",
                        "location_id": "7152398273176192556",
                        "company_id": "7096372135576618540",
                        "account_type": "associated_company",
                        "insurance_account": "ac123456",
                        "base_salary": "1000.10",
                        "insurance_details": [
                            {
                                "insurance_id": "7200725830765790764",
                                "company_deduction": "2000.20",
                                "company_setting": {
                                    "lower_limit": "1000.00",
                                    "upper_limit": "2000.00",
                                    "payment_ratio": "8.00",
                                    "payment_rounding_rule": "rounding",
                                    "payment_decimals": 2,
                                    "fixed_payment": "200.00"
                                },
                                "personal_deduction": "1000.20",
                                "personal_setting": {
                                    "lower_limit": "1000.00",
                                    "upper_limit": "2000.00",
                                    "payment_ratio": "8.00",
                                    "payment_rounding_rule": "round_down",
                                    "payment_decimals": 2,
                                    "fixed_payment": "200.00"
                                },
                                "payment_frequency": "monthly",
                                "payment_months": [
                                    1
                                ]
                            }
                        ],
                        "effective_date": "2024-01-01"
                    }
                ]
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 2290001 | server error | 服务端异常，请稍后重试
400 | 2290002 | param is invalid | 请检查请求参数的格式或值是否符合接口要求，参考文档中的参数说明
