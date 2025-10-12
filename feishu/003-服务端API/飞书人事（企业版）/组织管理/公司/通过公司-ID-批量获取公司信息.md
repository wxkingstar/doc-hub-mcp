---
title: "通过公司 ID 批量获取公司信息"
source_url: https://open.feishu.cn/document/corehr-v1/organization-management/company/batch_get
last_remote_update: 2024-11-27
last_remote_update_timestamp: 1732680232000
---
最后更新于 2024-11-27

# 通过 ID 批量查询公司信息

通过 ID 批量查询公司信息
**注意事项**：如果你只需要查询某一条公司信息，建议通过[【查询单个公司】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/company/get)获取公司信息。
**注意事项**：延迟说明：
- **数据库主从延迟2s以内，即：直接创建公司后2s内调用此接口可能查询不到数据**
- **响应体registered_office_address_info （注册地址）、office_address_info （办公地址）下的full_address_local_script（完整地址，本地文字）、full_address_western_script（完整地址，西方文字）字段为计算字段，延迟5s以内，堆积时会延长**

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v2/companies/batch_get
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 获取公司信息(corehr:company:read)  
            查看、创建、更新、删除公司信息(corehr:company:write)

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
company_ids | string\[\] | 是 | 需要查询的公司ID列表。ID获取方式：  
- 调用[【创建公司】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/company/create)[【批量查询公司】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/company/list)等接口可以返回部门ID  
**示例值**：["151515"]  
**数据校验规则**：  
- 长度范围：`1` ～ `100`

### 请求体示例
```json
{
    "company_ids": [
        "151515"
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
items | company\[\] | 查询的公司信息
company_id | string | 公司 ID
hiberarchy_common | hiberarchy_common | 公司基本信息
parent_id | string | 上级公司ID
name | i18n\[\] | 公司名称
lang | string | 语言信息，中文用zh-CN，英文用en-US
value | string | 文本内容
type | enum | 类型
enum_name | string | 区域设置ID ，枚举值及详细信息可通过[【批量查询枚举信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询获得。  
- 请求参数object_api_name=organization；custom_api_name=org_type
display | i18n\[\] | 枚举多语展示
lang | string | 语言编码（IETF BCP 47）
value | string | 文本内容
active | boolean | 启用
effective_time | string | 当前版本生效日期  
- 返回格式：YYYY-MM-DD 00:00:00（最小单位到日）  
- 日期范围:1900-01-01 00:00:00～9999-12-31 23:59:59
expiration_time | string | 当前版本失效日期  
- 返回格式：YYYY-MM-DD 00:00:00（最小单位到日）  
- 日期范围:1900-01-01 00:00:00～9999-12-31 23:59:59
code | string | 编码
description | i18n\[\] | 描述
lang | string | 语言信息，中文用zh-CN，英文用en-US
value | string | 文本内容
tree_order | string | 树形排序（该功能暂不支持，可忽略）
list_order | string | 列表排序（该功能暂不支持，可忽略）
custom_fields | object_field_data\[\] | 自定义字段（该功能暂不支持，可忽略）
field_name | string | 字段名
value | string | 字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(123, 123.23, true, [\"id1\",\"id2\], 2006-01-02 15:04:05])
type | enum | 公司性质，通过[获取字段详情](https://open.larkoffice.com/document/server-docs/corehr-v1/basic-infomation/custom_field/get_by_param)查询获取。请求参数：object_api_name=company；custom_api_name=type。
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言编码（IETF BCP 47）
value | string | 文本内容
industry_list | enum\[\] | 所在行业，通过[获取字段详情](https://open.larkoffice.com/document/server-docs/corehr-v1/basic-infomation/custom_field/get_by_param)查询获取。请求参数：object_api_name=company；custom_api_name=industry。
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言信息，中文用zh-CN，英文用en-US
value | string | 文本内容
legal_representative | i18n\[\] | 法定代表人
lang | string | 语言信息，中文用zh-CN，英文用en-US
value | string | 文本内容
post_code | string | 邮编
tax_payer_id | string | 纳税人识别号
confidential | boolean | 是否保密
sub_type_list | enum\[\] | 公司主体类型，通过[获取字段详情](https://open.larkoffice.com/document/server-docs/corehr-v1/basic-infomation/custom_field/get_by_param)查询获取。请求参数：object_api_name=company；custom_api_name=subtype。
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言编码（IETF BCP 47）
value | string | 文本内容
branch_company | boolean | 是否为分公司
primary_manager | i18n\[\] | 主要负责人
lang | string | 语言编码（IETF BCP 47）
value | string | 文本内容
currency | currency | 默认币种
currency_id | string | 货币 ID。  
- 调用[【查询货币信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-currency/search)接口返回货币详细信息
country_region_id_list | string\[\] | 货币所属国家/地区 ID 列表，详细信息可通过[查询国家/地区信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-country_region/search)接口查询获得
currency_name | i18n\[\] | 货币名称
lang | string | 语言信息，中文用zh-CN，英文用en-US
value | string | 文本内容
numeric_code | int | 数字代码（ISO 4217），对应币种的指代代码，通过系统内部查找，通过[查询货币信息v2](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-currency/search)查询获取。
currency_alpha_3_code | string | 法定货币对应代码，如CNY、USD等，通过[查询货币信息v2](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-currency/search)查询获取。
status | int | 状态  
**可选值有**：  
- 1：生效  
- 0：失效
phone | phone_number_and_area_code | 电话
area_code | enum | - 电话区号  
通过[获取字段详情](https://open.larkoffice.com/document/server-docs/corehr-v1/basic-infomation/custom_field/get_by_param)查询获取。请求参数：object_api_name=phone；custom_api_name=international_area_code。
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言信息，中文用zh-CN，英文用en-US
value | string | 文本内容
phone_number | string | 号码
fax | phone_number_and_area_code | 传真
area_code | enum | 传真区号  
- 通过[获取字段详情](https://open.larkoffice.com/document/server-docs/corehr-v1/basic-infomation/custom_field/get_by_param)查询获取。请求参数：object_api_name=phone；custom_api_name=international_area_code。
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言信息，中文用zh-CN，英文用en-US
value | string | 文本内容
phone_number | string | 号码
registered_office_address | i18n\[\] | 完整注册地址
lang | string | 语言编码（IETF BCP 47）
value | string | 文本内容
office_address | i18n\[\] | 完整办公地址
lang | string | 语言信息，中文用zh-CN，英文用en-US
value | string | 文本内容
registered_office_address_info | address | 注册地址
full_address_local_script | string | 完整地址（本地文字）
full_address_western_script | string | 完整地址（西方文字）
address_id | string | 地址 ID
country_region_id | string | 国家 / 地区 ID。各国家/地区填写字段可参考[地址填写规则](https://bytedance.larkoffice.com/wiki/GoL4wAKAXis3OWku72YcEjTxnKe?sheet=0sMjoP)查询。可通过  
[查询国家/地区信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-country_region/search)查询获取。
region_id | string | 主要行政区ID.可通过  
[查询省份/主要行政区信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-country_region_subdivision/search)查询获取。
city_id | string | 城市。  
- 调用[【查询城市信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-city/search)接口返回城市详细信息
distinct_id | string | 区/县。  
- 调用[【查询区县信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-district/search)接口返回区县详细信息
address_line1 | string | 地址行 1
address_line2 | string | 地址行 2
address_line3 | string | 地址行 3
address_line4 | string | 地址行 4
address_line5 | string | 地址行 5
address_line6 | string | 地址行 6
address_line7 | string | 地址行 7
address_line8 | string | 地址行 8
address_line9 | string | 地址行 9
local_address_line1 | string | 地址行 1（非拉丁语系的本地文字）
local_address_line2 | string | 地址行 2（非拉丁语系的本地文字）
local_address_line3 | string | 地址行 3（非拉丁语系的本地文字）
local_address_line4 | string | 地址行 4（非拉丁语系的本地文字）
local_address_line5 | string | 地址行 5（非拉丁语系的本地文字）
local_address_line6 | string | 地址行 6（非拉丁语系的本地文字）
local_address_line7 | string | 地址行 7（非拉丁语系的本地文字）
local_address_line8 | string | 地址行 8（非拉丁语系的本地文字）
local_address_line9 | string | 地址行 9（非拉丁语系的本地文字）
postal_code | string | 邮政编码
address_type_list | enum\[\] | 地址类型
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言编码（IETF BCP 47）
value | string | 文本内容
is_primary | boolean | 主要地址
is_public | boolean | 公开地址
custom_fields | custom_field_data\[\] | 自定义字段（该功能暂不支持，可忽略）
custom_api_name | string | 自定义字段 apiname，即自定义字段的唯一标识
name | custom_name | 自定义字段名称
zh_cn | string | 中文
en_us | string | 英文
type | int | 自定义字段类型
value | string | 字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同（如 123, 123.23, "true", ["id1","id2"], "2006-01-02 15:04:05"）
office_address_info | address | 办公地址
full_address_local_script | string | 完整地址（本地文字）
full_address_western_script | string | 完整地址（西方文字）
address_id | string | 地址 ID
country_region_id | string | 国家 / 地区 ID。各国家/地区填写字段可参考[地址填写规则](https://bytedance.larkoffice.com/wiki/GoL4wAKAXis3OWku72YcEjTxnKe?sheet=0sMjoP)查询。可通过  
[查询国家/地区信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-country_region/search)查询获取。
region_id | string | 主要行政区ID.可通过  
[查询省份/主要行政区信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-country_region_subdivision/search)查询获取。
city_id | string | 城市。  
- 调用[【查询城市信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-city/search)接口返回城市详细信息
distinct_id | string | 区/县。  
- 调用[【查询区县信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-district/search)接口返回区县详细信息
address_line1 | string | 地址行 1
address_line2 | string | 地址行 2
address_line3 | string | 地址行 3
address_line4 | string | 地址行 4
address_line5 | string | 地址行 5
address_line6 | string | 地址行 6
address_line7 | string | 地址行 7
address_line8 | string | 地址行 8
address_line9 | string | 地址行 9
local_address_line1 | string | 地址行 1（非拉丁语系的本地文字）
local_address_line2 | string | 地址行 2（非拉丁语系的本地文字）
local_address_line3 | string | 地址行 3（非拉丁语系的本地文字）
local_address_line4 | string | 地址行 4（非拉丁语系的本地文字）
local_address_line5 | string | 地址行 5（非拉丁语系的本地文字）
local_address_line6 | string | 地址行 6（非拉丁语系的本地文字）
local_address_line7 | string | 地址行 7（非拉丁语系的本地文字）
local_address_line8 | string | 地址行 8（非拉丁语系的本地文字）
local_address_line9 | string | 地址行 9（非拉丁语系的本地文字）
postal_code | string | 邮政编码
address_type_list | enum\[\] | 地址类型
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言编码（IETF BCP 47）
value | string | 文本内容
is_primary | boolean | 主要地址
is_public | boolean | 公开地址
custom_fields | custom_field_data\[\] | 自定义字段
custom_api_name | string | 自定义字段 apiname，即自定义字段的唯一标识
name | custom_name | 自定义字段名称
zh_cn | string | 中文
en_us | string | 英文
type | int | 自定义字段类型
value | string | 字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同（如 123, 123.23, "true", ["id1","id2"], "2006-01-02 15:04:05"）
custom_fields | custom_field_data\[\] | 自定义字段（该功能暂不支持，可忽略）
custom_api_name | string | 自定义字段 apiname，即自定义字段的唯一标识
name | custom_name | 自定义字段名称
zh_cn | string | 中文
en_us | string | 英文
type | int | 自定义字段类型
value | string | 字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同（如 123, 123.23, "true", ["id1","id2"], "2006-01-02 15:04:05"）

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "items": [
            {
                "company_id": "4692472714243080020",
                "hiberarchy_common": {
                    "parent_id": "4719168654814483759",
                    "name": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ],
                    "type": {
                        "enum_name": "phone_type",
                        "display": [
                            {
                                "lang": "zh-CN",
                                "value": "中文示例"
                            }
                        ]
                    },
                    "active": true,
                    "effective_time": "2020-05-01 00:00:00",
                    "expiration_time": "2020-05-02 00:00:00",
                    "code": "12456",
                    "description": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ],
                    "tree_order": "123",
                    "list_order": "123",
                    "custom_fields": [
                        {
                            "field_name": "name",
                            "value": "Sandy"
                        }
                    ]
                },
                "type": {
                    "enum_name": "phone_type",
                    "display": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ]
                },
                "industry_list": [
                    {
                        "enum_name": "phone_type",
                        "display": [
                            {
                                "lang": "zh-CN",
                                "value": "中文示例"
                            }
                        ]
                    }
                ],
                "legal_representative": [
                    {
                        "lang": "zh-CN",
                        "value": "中文示例"
                    }
                ],
                "post_code": "邮编",
                "tax_payer_id": "123456840",
                "confidential": true,
                "sub_type_list": [
                    {
                        "enum_name": "phone_type",
                        "display": [
                            {
                                "lang": "zh-CN",
                                "value": "中文示例"
                            }
                        ]
                    }
                ],
                "branch_company": true,
                "primary_manager": [
                    {
                        "lang": "zh-CN",
                        "value": "中文示例"
                    }
                ],
                "currency": {
                    "currency_id": "6863329932261459464",
                    "country_region_id_list": [
                        "6862995757234914824"
                    ],
                    "currency_name": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ],
                    "numeric_code": 156,
                    "currency_alpha_3_code": "CNY",
                    "status": 1
                },
                "phone": {
                    "area_code": {
                        "enum_name": "phone_type",
                        "display": [
                            {
                                "lang": "zh-CN",
                                "value": "中文示例"
                            }
                        ]
                    },
                    "phone_number": "213213"
                },
                "fax": {
                    "area_code": {
                        "enum_name": "phone_type",
                        "display": [
                            {
                                "lang": "zh-CN",
                                "value": "中文示例"
                            }
                        ]
                    },
                    "phone_number": "213213"
                },
                "registered_office_address": [
                    {
                        "lang": "zh-CN",
                        "value": "中文示例"
                    }
                ],
                "office_address": [
                    {
                        "lang": "zh-CN",
                        "value": "中文示例"
                    }
                ],
                "registered_office_address_info": {
                    "full_address_local_script": "中国北京北京",
                    "full_address_western_script": "Beijing, Beijing, China,",
                    "address_id": "6989822217869624863",
                    "country_region_id": "6862995757234914824",
                    "region_id": "6863326815667095047",
                    "city_id": "6863333254578046471",
                    "distinct_id": "6863333254578046471",
                    "address_line1": "丹佛测试地址-纽埃时区",
                    "address_line2": "PoewH",
                    "address_line3": "PoewH",
                    "address_line4": "jmwJc",
                    "address_line5": "jmwJc",
                    "address_line6": "jmwJc",
                    "address_line7": "jmwJc",
                    "address_line8": "rafSu",
                    "address_line9": "McPRG",
                    "local_address_line1": "丹佛测试地址-纽埃时区",
                    "local_address_line2": "PoewH",
                    "local_address_line3": "PoewH",
                    "local_address_line4": "jmwJc",
                    "local_address_line5": "jmwJc",
                    "local_address_line6": "jmwJc",
                    "local_address_line7": "jmwJc",
                    "local_address_line8": "rafSu",
                    "local_address_line9": "McPRG",
                    "postal_code": "611530",
                    "address_type_list": [
                        {
                            "enum_name": "phone_type",
                            "display": [
                                {
                                    "lang": "zh-CN",
                                    "value": "中文示例"
                                }
                            ]
                        }
                    ],
                    "is_primary": true,
                    "is_public": true,
                    "custom_fields": [
                        {
                            "custom_api_name": "name",
                            "name": {
                                "zh_cn": "自定义姓名",
                                "en_us": "Custom Name"
                            },
                            "type": 1,
                            "value": "\"231\""
                        }
                    ]
                },
                "office_address_info": {
                    "full_address_local_script": "中国北京北京",
                    "full_address_western_script": "Beijing, Beijing, China,",
                    "address_id": "6989822217869624863",
                    "country_region_id": "6862995757234914824",
                    "region_id": "6863326815667095047",
                    "city_id": "6863333254578046471",
                    "distinct_id": "6863333254578046471",
                    "address_line1": "丹佛测试地址-纽埃时区",
                    "address_line2": "PoewH",
                    "address_line3": "PoewH",
                    "address_line4": "jmwJc",
                    "address_line5": "jmwJc",
                    "address_line6": "jmwJc",
                    "address_line7": "jmwJc",
                    "address_line8": "rafSu",
                    "address_line9": "McPRG",
                    "local_address_line1": "丹佛测试地址-纽埃时区",
                    "local_address_line2": "PoewH",
                    "local_address_line3": "PoewH",
                    "local_address_line4": "jmwJc",
                    "local_address_line5": "jmwJc",
                    "local_address_line6": "jmwJc",
                    "local_address_line7": "jmwJc",
                    "local_address_line8": "rafSu",
                    "local_address_line9": "McPRG",
                    "postal_code": "611530",
                    "address_type_list": [
                        {
                            "enum_name": "phone_type",
                            "display": [
                                {
                                    "lang": "zh-CN",
                                    "value": "中文示例"
                                }
                            ]
                        }
                    ],
                    "is_primary": true,
                    "is_public": true,
                    "custom_fields": [
                        {
                            "custom_api_name": "name",
                            "name": {
                                "zh_cn": "自定义姓名",
                                "en_us": "Custom Name"
                            },
                            "type": 1,
                            "value": "\"231\""
                        }
                    ]
                },
                "custom_fields": [
                    {
                        "custom_api_name": "name",
                        "name": {
                            "zh_cn": "自定义姓名",
                            "en_us": "Custom Name"
                        },
                        "type": 1,
                        "value": "\"231\""
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
400 | 1160001 | Param is invalid | 请检查传参是否正确
