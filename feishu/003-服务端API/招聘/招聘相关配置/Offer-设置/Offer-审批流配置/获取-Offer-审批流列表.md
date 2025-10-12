---
title: "获取 Offer 审批流列表"
source_url: https://open.feishu.cn/document/server-docs/hire-v1/recruitment-related-configuration/offer-settings/offer_approval_template/list
---
最后更新于 2025-08-19

# 获取 Offer 审批流列表

获取飞书招聘系统中默认和自定义 Offer 审批流列表。Offer 审批流可以在「飞书招聘」-「设置」-「Offer 设置」-「Offer 审批设置」中维护。可在职位设置的「Offer 审批流程」中使用。

**注意事项**：若当前租户开通了「飞书人事」，且使用了「流程平台」配置的审批流，当前接口无法获取「流程平台」配置的审批流。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/offer_approval_templates
HTTP Method | GET
接口频率限制 | [10 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取 offer 审批流配置信息(hire:offer_approval_template:readonly)

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
page_size | int | 否 | 分页大小。最大为 200  
**示例值**：100  
**默认值**：`10`
department_id_type | string | 否 | 此次调用中使用的部门 ID 的类型  
**示例值**：department_id  
**可选值有**：  
- open_department_id：以 open_department_id 来标识部门，该 ID 为[获取单个部门信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get)  
中的 open_department_id  
- department_id：以 department_id 来标识部门，该 ID 为[获取单个部门信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get)  
中的 department_id  
- people_admin_department_id：以 people_admin_department_id 来标识部门，该 ID 类型即将下线，不推荐使用  
**默认值**：`people_admin_department_id`

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
has_more | boolean | 是否还有更多项
page_token | string | 分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
items | offer_approval_template\[\] | Offer 审批流列表
id | string | Offer 审批流 ID
name | i18n | Offer 审批流名称
zh_cn | string | Offer 审批流中文名
en_us | string | Offer 审批流英文名
create_time | string | 创建时间戳（单位：毫秒）
remark | string | 备注
department_list | department\[\] | 适用部门
id | string | 部门 ID，与入参`department_id_type`类型一致
name | string | 部门中文名
en_name | string | 部门英文名

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
                    "zh_cn": "Offer 审批流1",
                    "en_us": "Offer approval flow config 1"
                },
                "create_time": "1628512038000",
                "remark": "test",
                "department_list": [
                    {
                        "id": "1213213123123",
                        "name": "部门名A",
                        "en_name": "DepartmentA"
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
500 | 1002001 | System error | 请根据实际报错信息定位或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1002002 | Invalid parameter | 检查参数是否正确，例如类型，大小
