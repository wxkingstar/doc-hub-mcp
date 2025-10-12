---
title: "批量获取人才ID"
source_url: https://open.feishu.cn/document/server-docs/hire-v1/candidate-management/talent/batch_get_id
last_remote_update: 2024-09-06
last_remote_update_timestamp: 1725615241000
---
最后更新于 2024-09-06

# 批量获取人才ID

通过手机号、邮箱、证件号，批量查询人才ID

**注意事项**：- 入参的手机号、邮箱、证件号至少需要传一种，否则无法查询到人才数据
- 入参的手机号、邮箱、证件号是AND的逻辑关系。也就是当条件同时满足时才会返回人才数据。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/talents/batch_get_id
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 获取人才信息(hire:talent:readonly)  
            更新人才信息(hire:talent)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取人才入职状态(hire:talent_onboard_status:readonly)

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
mobile_code | string | 否 | 国际区号，遵守国际统一标准，请参考[百度百科-国际长途电话区号](https://baike.baidu.com/item/%E5%9B%BD%E9%99%85%E9%95%BF%E9%80%94%E7%94%B5%E8%AF%9D%E5%8C%BA%E5%8F%B7%E8%A1%A8/12803495?fr=ge_ala)。传入手机号但没传区号的情况下，默认为中国大陆区号："86"  
**示例值**："86"
mobile_number_list | string\[\] | 否 | 手机号列表  
**示例值**：["182900291190"]
email_list | string\[\] | 否 | 邮箱列表  
**示例值**：["foo@bytedance.com"]
identification_type | int | 否 | 证件类型，枚举定义详见文档：[枚举常量介绍](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/enum)  
的 IdentificationType。传入证件号的情况下必须传入该参数  
**示例值**：1
identification_number_list | string\[\] | 否 | 证件号列表  
**示例值**：["510403xxxxxxxx"]

### 请求体示例
```json
{
    "mobile_code": "86",
    "mobile_number_list": [
        "182900291190"
    ],
    "email_list": [
        "foo@bytedance.com"
    ],
    "identification_type": 1,
    "identification_number_list": [
        "510403xxxxxxxx"
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
talent_list | talent_batch_info\[\] | 人才信息列表
talent_id | string | 人才 ID，详情请查看：[获取人才信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/talent/get)
mobile_code | string | 国际区号，遵守国际统一标准，请参考[百度百科-国际长途电话区号](https://baike.baidu.com/item/%E5%9B%BD%E9%99%85%E9%95%BF%E9%80%94%E7%94%B5%E8%AF%9D%E5%8C%BA%E5%8F%B7%E8%A1%A8/12803495?fr=ge_ala)，仅当入参传入`mobile_number_list `时返回
mobile_number | string | 手机号，仅当入参传入`mobile_number_list`时返回
email | string | 邮箱，仅当入参传入`email_list `时返回
identification_type | int | 证件类型，枚举定义详见文档：[枚举常量介绍](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/enum)  
的 IdentificationType，仅当入参传入`identification_number_list `时返回
identification_number | string | 证件号，仅当入参传入`identification_number_list `时返回
is_onboarded | boolean | 是否已入职  
**可选值有**：  
- false：未入职  
- true：已入职  
**字段权限要求**：  
获取人才入职状态(hire:talent_onboard_status:readonly)

### 响应体示例
```json
{
    "code": 0,
    "msg": "ok",
    "data": {
        "talent_list": [
            {
                "talent_id": "6891560630172518670",
                "mobile_code": "86",
                "mobile_number": "182900291190",
                "email": "foo@bytedance.com",
                "identification_type": 1,
                "identification_number": "510403xxxxxxxx",
                "is_onboarded": true
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
200 | 1002001 | 系统错误 | 请根据实际报错信息定位或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1002009 | 手机号不正确 | 请检查入参`mobile_code `或`mobile_number_list `是否正确
