---
title: "根据方案ID和生效日期批量查询参保方案"
source_url: https://open.feishu.cn/document/corehr-v1/basic-compensation/social_plan/query
last_remote_update: 2025-08-22
last_remote_update_timestamp: 1755844166000
---
最后更新于 2025-08-22

# 根据方案ID和生效日期批量查询参保方案

通过plan_ids列表和effective_date联合过滤数据库中的参保方案数据

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/compensation/v1/social_plans/query
HTTP Method | POST
接口频率限制 | [10 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 查询参保方案信息(corehr:compensation.social_plan:read)

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
plan_ids | string\[\] | 是 | 参保方案ID列表，最少1个，最大200，可以通过[通过员工ID批量获取社保增减员记录  
](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/compensation-v1/social_archive_adjust_record/query)或[批量获取员工参保档案  
](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/compensation-v1/social_archive/query)接口获取  
**示例值**：["10001"]  
**数据校验规则**：  
- 长度范围：`0` ～ `200`
effective_date | string | 是 | 生效日期，查询在该日期生效的参保方案数据，日期格式为：YYYY-mm-dd，长度为 10 字符  
**示例值**："2024-01-01"

### 请求体示例
```json
{
    "plan_ids": [
        "10001"
    ],
    "effective_date": "2024-01-01"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
plans | social_plan\[\] | 方案列表
plan_id | string | 参保方案ID
plan_tid | string | 参保方案版本ID
name | i18n | 参保方案名称
zh_cn | string | 中文名称
en_us | string | 英文名称
effective_date | string | 生效时间，yyyy-MM-dd
active | boolean | 是否启用
insurance_type | string | 险种类型. social_insurance: 社保; provident_fund: 公积金  
**可选值有**：  
- social_insurance：社保  
- provident_fund：公积金
scope | social_plan_scope | 参保方案适用范围
is_all | boolean | 是否适用于全部
rules | social_plan_condition\[\]\[\] | rules：配置的条件规则。返回两层结构：[条件组[条件]]。多个 [条件组] 之间是 或 的关系，一个条件组内的多个 [条件] 是 且 的关系。  
比如：rules: [[1,2],[3,4]]，业务含义为：(1 and 2) or (3 and 4)  
rules [][]social_plan_condition 适用范围  
- left_type  int  可选值有：  
``1``：参保城市  
``2``：缴纳主体   
- operator  int  可选值有：  
``1``：包含  
- right_values  []string  
	- 当left_type=1时，是参保城市ID  
	- 当left_type=2时，是缴纳主体ID
item_detail | social_plan_item_detail\[\] | 参保信息
item_id | string | 险种ID，可通过[获取险种配置列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/compensation-v1/social_insurance/list)接口查询
item_name | i18n | 险种名
zh_cn | string | 中文名称
en_us | string | 英文名称
item_setting_of_person | social_plan_item_setting | 个人缴纳配置
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
item_setting_of_company | social_plan_item_setting | 企业缴纳配置
lower_limit | string | 基数下限，浮点数，保留二位小数，单位：元
upper_limit | string | 基数上限，浮点数，保留二位小数，单位：元
payment_ratio | string | 缴纳比例，浮点数，默认填充到二位小数，支持输入到四位，单位为 %
payment_rounding_rule | string | 缴纳金舍入规则。rounding: 四舍五入; round_up: 向上舍入; round_down: 向下舍入  
**可选值有**：  
- rounding：四舍五入  
- round_up：向上舍入  
- round_down：向下舍入
payment_decimals | int | 缴纳金小数位数，0-6之间选择
fixed_payment | string | 附加固定金额，浮点数，保留二位小数，单位：元
payment_frequency | string | 缴纳频率  
**可选值有**：  
- annually：每年  
- monthly：每月  
- quarterly：每季度
payment_months | int\[\] | 缴纳月份，1月～12月
remark | i18n | 备注
zh_cn | string | 中文名称
en_us | string | 英文名称

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "plans": [
            {
                "plan_id": "7198138281677325868",
                "plan_tid": "7198138281677358636",
                "name": {
                    "zh_cn": "sky-公积金参保方案",
                    "en_us": "sky-provident fund plan test"
                },
                "effective_date": "2024-01-01",
                "active": false,
                "insurance_type": "provident_fund",
                "scope": {
                    "is_all": true,
                    "rules": [
                        [
                            {
                                "left_type": 1,
                                "operator": 1,
                                "right_values": [
                                    "1"
                                ]
                            }
                        ]
                    ]
                },
                "item_detail": [
                    {
                        "item_id": "7200726176044680748",
                        "item_name": {
                            "zh_cn": "养老保险",
                            "en_us": "endowment insurance"
                        },
                        "item_setting_of_person": {
                            "lower_limit": "1000.00",
                            "upper_limit": "2000.00",
                            "payment_ratio": "8.00",
                            "payment_rounding_rule": "rounding",
                            "payment_decimals": 2,
                            "fixed_payment": "200.00"
                        },
                        "item_setting_of_company": {
                            "lower_limit": "1000.00",
                            "upper_limit": "2000.00",
                            "payment_ratio": "8.00",
                            "payment_rounding_rule": "round_down",
                            "payment_decimals": 2,
                            "fixed_payment": "200.00"
                        },
                        "payment_frequency": "quarterly",
                        "payment_months": [
                            1
                        ]
                    }
                ],
                "remark": {
                    "zh_cn": "中文备注",
                    "en_us": "english remark"
                }
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 2290001 | server error | 服务端异常，请稍后重试
400 | 2290002 | param is invalid | 请检查请求参数的格式或值是否符合接口要求，参考请求参数部分的[通过员工ID批量获取社保增减员记录](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/compensation-v1/social_archive_adjust_record/query)或[批量获取员工参保档案](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/compensation-v1/social_archive/query)接口文档
