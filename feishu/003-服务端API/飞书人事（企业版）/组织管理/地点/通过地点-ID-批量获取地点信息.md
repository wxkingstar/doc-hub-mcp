---
title: "通过地点 ID 批量获取地点信息"
source_url: https://open.feishu.cn/document/corehr-v1/organization-management/location/batch_get
last_remote_update: 2024-12-06
last_remote_update_timestamp: 1733479516000
---
最后更新于 2024-12-06

# 通过地点 ID 批量获取地点信息

该接口用于根据地点 ID批量查询地点信息，信息包含地点名称、描述、地点用途、工时制度、区域设置、时区以及关联的地址信息等。

**注意事项**：延迟说明：数据库主从延迟 2s 以内，即：直接创建地点后2s内调用此接口可能查询不到数据。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v2/locations/batch_get
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 获取地点信息(corehr:locations:read)  
            更新地点信息(corehr:locations:write)

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
location_ids | string\[\] | 是 | 地点 ID 列表， 地点维护管理员在 飞书人事系统，组织管理模块维护的地点记录 ID。ID获取方式：  
- 调用[【创建地点】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/location/create)[【批量分页查询地点】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/location/list)等接口可以返回地点ID  
**示例值**：["1215"]  
**数据校验规则**：  
- 长度范围：`1` ～ `100`

### 请求体示例
```json
{
    "location_ids": [
        "1215"
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
items | location\[\] | 查询的地点信息
location_id | string | 地点 ID，地点维护管理员在 飞书人事系统，组织管理模块维护的地点记录 ID。
hiberarchy_common | hiberarchy_common | 地点基本信息，该结构维护了地点的名称、编码、启用状态、上级地点 等基础信息。
parent_id | string | 上级地点，在创建场景下， 该字段必填，枚举值及详细信息可通过[【查询地点列表】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/location/list)接口查询获得
name | i18n\[\] | 地点名称
lang | string | 语言  
- 中文用zh-CN，英文用en-US。
value | string | 文本内容
type | enum | 组织类型
enum_name | string | 地点类型 ，枚举值及详细信息可通过[【批量查询枚举信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询获得。  
- 请求参数object_api_name=organization；custom_api_name=org_type  
- 该接口返回固定值location
display | i18n\[\] | 枚举多语展示
lang | string | 语言  
- 中文用zh-CN，英文用en-US。
value | string | 文本内容
active | boolean | 启用状态，true为启用，fasle为停用
effective_time | string | 当前版本生效日期  
- 返回格式：YYYY-MM-DD 00:00:00（最小单位到日）  
- 日期范围:1900-01-01 00:00:00～9999-12-31 00:00:00  
- 详情可以参考[时间轴介绍](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/about-timeline-version)  
- 该字段和data.effective_time值一致
expiration_time | string | 当前版本失效日期  
- 返回格式：YYYY-MM-DD 00:00:00（最小单位到日）  
- 日期范围:1900-01-01 00:00:00～9999-12-31 00:00:00  
- 系统默认为失效日期当天的 00:00:00 失效  
- 详情可以参考[时间轴介绍](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/about-timeline-version)  
- 该字段和data.expiration_time值一致
code | string | 地点编码
description | i18n\[\] | 描述
lang | string | 语言  
- 中文用zh-CN，英文用en-US。
value | string | 文本内容
tree_order | string | 树形排序(可忽略)，代表同层级的部门排序序号（该功能暂不支持，可忽略）
list_order | string | 列表排序(可忽略)，代表所有部门的混排序号（该功能暂不支持，可忽略）
custom_fields | object_field_data\[\] | 自定义字段（该功能暂不支持，可忽略）
field_name | string | 自定义字段 API Name，即自定义字段的唯一标识
value | string | 字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同。如：```("\"123\"", "\"123.23\"", "\"true\"", [\"id1\",\"id2\"], \"2006-01-02 15:04:05\")```
location_usage_list | enum\[\] | 地点用途，枚举值及详细信息可通过[【批量查询地点用途】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询获得。  
- 请求参数object_api_name=location；custom_api_name=location_usage
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言  
- 中文用zh-CN，英文用en-US。
value | string | 文本内容
address | address\[\] | 地址
full_address_local_script | string | 完整地址（本地文字）
full_address_western_script | string | 完整地址（西方文字）
address_id | string | 地址 ID
country_region_id | string | 国家 / 地区 ID  
可通过[【查询国家/地区信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-country_region/search)接口获取
region_id | string | 主要行政区 ID  
可通过[【查询省份/行政区信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/basic_info-country_region_subdivision/search)接口获取
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
枚举值可通过[【获取字段详情】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口查询，查询参数如下：   
- object_api_name = "address"   
- custom_api_name = "address_type"
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言  
- 中文用zh-CN，英文用en-US。
value | string | 文本内容
is_primary | boolean | 主要地址
is_public | boolean | 公开地址
custom_fields | custom_field_data\[\] | 自定义字段（该功能暂不支持，可忽略）
custom_api_name | string | 自定义字段 apiname，即自定义字段的唯一标识
name | custom_name | 自定义字段名称
zh_cn | string | 中文
en_us | string | 英文
type | int | 自定义字段类型，详细见[获取自定义字段列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/query)
value | string | 字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同。如：```("\"123\"", "\"123.23\"", "\"true\"", [\"id1\",\"id2\"], \"2006-01-02 15:04:05\")```
working_hours_type_id | string | 工时制度 ID，枚举值及详细信息可通过[【批量查询工时制度】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/working_hours_type/list)接口查询获得
effective_time | string | 版本生效时间  
- 填写格式：YY-MM-DD 00:00:00  
- 生效时间， 系统默认为填写日期当天的 00:00:00 生效   
- 详情可以参考[时间轴介绍](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/about-timeline-version)  
- 该字段和data.hiberarchy_common.effective_time值一致
expiration_time | string | 版本失效时间  
- 填写格式： YYYY-MM-DD 00:00:00  
- 本次编辑的记录版本失效的时间， 如果用户在本次操作的生效日期之后修改了地点信息，则系统会将下一次操作的日期作为当前记录的失效时间。   
- 系统默认为填写日期当天的 00:00:00 失效  
- 详情可以参考[时间轴介绍](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/about-timeline-version)  
- 该字段和data.hiberarchy_common.expiration_time值一致
custom_fields | custom_field_data\[\] | 自定义字段（该功能暂不支持，可忽略）
custom_api_name | string | 自定义字段 apiname，即自定义字段的唯一标识
name | custom_name | 自定义字段名称
zh_cn | string | 中文
en_us | string | 英文
type | int | 自定义字段类型，详细见[获取自定义字段列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/query)
value | string | 字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同。如：```("\"123\"", "\"123.23\"", "\"true\"", [\"id1\",\"id2\"], \"2006-01-02 15:04:05\")```
locale | enum | 区域设置ID ，枚举值及详细信息可通过[【批量查询枚举信息】](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/feishu-people-enum-constant)接口查询获得
enum_name | string | 枚举值
display | i18n\[\] | 枚举多语展示
lang | string | 语言  
- 中文用zh-CN，英文用en-US。
value | string | 文本内容
time_zone_id | string | 时区
display_language_id | string | 默认显示语言

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "items": [
            {
                "location_id": "4718803945687580505",
                "hiberarchy_common": {
                    "parent_id": "4719168654814483759",
                    "name": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ],
                    "type": {
                        "enum_name": "location",
                        "display": [
                            {
                                "lang": "zh-CN",
                                "value": " 地点"
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
                            "value": "\"Sandy\""
                        }
                    ]
                },
                "location_usage_list": [
                    {
                        "enum_name": "work_location",
                        "display": [
                            {
                                "lang": "zh-CN",
                                "value": "中文示例"
                            }
                        ]
                    }
                ],
                "address": [
                    {
                        "full_address_local_script": "中国北京北京",
                        "full_address_western_script": "Beijing, Beijing, China,",
                        "address_id": "6989822217869624863",
                        "country_region_id": "6862995757234914824",
                        "region_id": "6863326815667095047",
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
                                "enum_name": "home_address",
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
                                "custom_api_name": " custom_field_1__c",
                                "name": {
                                    "zh_cn": "自定义姓名",
                                    "en_us": "Custom Name"
                                },
                                "type": 1,
                                "value": "\"231\""
                            }
                        ]
                    }
                ],
                "working_hours_type_id": "4690238309151997779",
                "effective_time": "2020-05-01 00:00:00",
                "expiration_time": "2020-05-02 00:00:00",
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
                ],
                "locale": {
                    "enum_name": "zh_cn",
                    "display": [
                        {
                            "lang": "zh-CN",
                            "value": "中文示例"
                        }
                    ]
                },
                "time_zone_id": "123456789",
                "display_language_id": "123456789"
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 1160001 | 参数错误 | 校验传参是否正确
