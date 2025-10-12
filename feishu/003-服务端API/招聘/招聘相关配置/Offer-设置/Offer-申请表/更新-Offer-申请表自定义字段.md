---
title: "更新 Offer 申请表自定义字段"
source_url: https://open.feishu.cn/document/server-docs/hire-v1/recruitment-related-configuration/offer-settings/offer_application_form/update
last_remote_update: 2024-08-08
last_remote_update_timestamp: 1723086407000
---
最后更新于 2024-08-08

# 更新 Offer 申请表自定义字段

本接口支持修改 Offer 申请表的自定义字段，Offer 申请表的定义可参考「飞书招聘」-「设置」-「Offer 设置」-「Offer 申请表设置」中的内容。

## 注意事项

- Offer 申请表通过版本 (schema_id) 进行变更管理，自定义字段每次修改，全量申请表的 schema_id 会同步更新。
- 本接口不支持修改自定义字段类型。
- 本接口不支持修改字段类型为「公式」类型的字段值。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/offer_custom_fields/:offer_custom_field_id
HTTP Method | PUT
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 更新 offer 自定义字段信息(hire:offer_selection_object)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
offer_custom_field_id | string | Offer 申请表自定义字段 ID，可通过接口[获取 Offer 申请表信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/offer_application_form/get)获取  
**示例值**："6906755946257615112"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
name | i18n | 是 | 自定义字段名称，zh_cn和en_us必填其一
zh_cn | string | 否 | 字段中文名称  
**示例值**："就职状态"
en_us | string | 否 | 字段英文名称  
**示例值**："Employment status"
config | offer_custom_field_config | 否 | 自定义字段配置信息
options | offer_custom_field_config_option\[\] | 否 | 选项列表，仅字段类型为「单选」、「多选」时需传配置选项信息。字段类型可通过接口[获取 Offer 申请表信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/offer_application_form/get)获取
name | i18n | 是 | 选项名称，zh_cn和en_us必填其一
zh_cn | string | 否 | 选项中文名称  
**示例值**："无业"
en_us | string | 否 | 选项英文名称  
**示例值**："Unemployed"

### 请求体示例
```json
{
    "name": {
        "zh_cn": "就职状态",
        "en_us": "Employment status"
    },
    "config": {
        "options": [
            {
                "name": {
                    "zh_cn": "无业",
                    "en_us": "Unemployed"
                }
            }
        ]
    }
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {}
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1002001 | 系统错误 | 请根据实际报错信息定位或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1002002 | 参数错误 | 检查参数是否正确，例如类型，大小
200 | 1002065 | 入参选项错误 | 请检查自定义字段类型，仅当自定义字段类型为「单选」或「多选」时需要传入选项信息，其余情况不传。字段类型可通过接口[获取 Offer 申请表信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/offer_application_form/get)获取
