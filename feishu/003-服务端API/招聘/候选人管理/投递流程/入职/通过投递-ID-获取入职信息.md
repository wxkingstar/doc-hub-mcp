---
title: "通过投递 ID 获取入职信息"
source_url: https://open.feishu.cn/document/server-docs/hire-v1/candidate-management/delivery-process-management/onboard/get_by_application
---
最后更新于 2025-09-25

# 通过投递 ID 获取入职信息

通过投递 ID 获取员工入职信息。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/employees/get_by_application
HTTP Method | GET
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 更新招聘员工信息(hire:employee)  
            获取招聘员工信息(hire:employee:readonly)
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
application_id | string | 是 | 投递ID，可通过[获取投递列表](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application/list)接口获取  
**示例值**：7379910335417927975
user_id_type | string | 否 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)
department_id_type | string | 否 | 指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见[部门资源介绍](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)。  
**示例值**："department_id"  
**可选值有**：  
- open_department_id：由系统自动生成的部门 ID， ID前缀固定为 `od-`，在租户内全局唯一。  
- department_id：支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内，department_id 具有唯一性。  
- people_admin_department_id：以 people_admin_department_id 来标识部门，该 ID 类型即将下线，不推荐使用  
**默认值**：`people_admin_department_id`
job_level_id_type | string | 否 | 此次调用中使用的「职级 ID」的类型  
**示例值**："people_admin_job_level_id"  
**可选值有**：  
- people_admin_job_level_id：「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。  
- job_level_id：「飞书管理后台」适用的职级 ID，通过[获取租户职级列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/list)接口获取  
**默认值**：`people_admin_job_level_id`
job_family_id_type | string | 否 | 此次调用中使用的「序列 ID」的类型  
**示例值**："people_admin_job_category_id"  
**可选值有**：  
- people_admin_job_category_id：「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。  
- job_family_id：「飞书管理后台」适用的序列 ID，通过[获取租户序列列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/list)接口获取  
**默认值**：`people_admin_job_category_id`
employee_type_id_type | string | 否 | 此次调用中使用的「人员类型 ID」的类型  
**示例值**："people_admin_employee_type_id"  
**可选值有**：  
- people_admin_employee_type_id：「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。  
- employee_type_enum_id：「飞书管理后台」适用的人员类型 ID，通过[查询人员类型](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口获取  
**默认值**：`people_admin_employee_type_id`

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
employee | employee | 员工信息
id | string | 员工 ID
application_id | string | 投递 ID
onboard_status | int | 入职状态  
**可选值有**：  
- 1：已入职  
- 2：已离职
conversion_status | int | 转正状态  
**可选值有**：  
- 1：未转正  
- 2：已转正
onboard_time | int | 实际入职时间，毫秒级时间戳
expected_conversion_time | int | 预期转正时间，毫秒级时间戳
actual_conversion_time | int | 实际转正时间，毫秒级时间戳
overboard_time | int | 离职时间，毫秒级时间戳
overboard_note | string | 离职原因
onboard_city_code | string | 办公地点 Code 码，详情请查看[「查询地点列表」](https://open.larkoffice.com/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/location/query)接口
department | string | 入职部门 ID，与入参`department_id_type `类型一致
leader | string | 直属上级 ID，与入参`user_id_type`类型一致
sequence | string | 序列 ID，与入参`job_family_id_type `类型一致
level | string | 职级 ID，与入参`job_level_id_type `类型一致
employee_type | string | 员工类型 ID，与入参`employee_type_id_type `类型一致
job_requirement_id | string | 招聘需求 ID，详情请查看：[获取招聘需求信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/job_requirement/list_by_id)
external_employment_id | string | 飞书人事的雇佣ID

### 响应体示例
```json
{
    "code": 0,
    "msg": "ok",
    "data": {
        "employee": {
            "id": "7095600054216542508",
            "application_id": "7073372582620416300",
            "onboard_status": 2,
            "conversion_status": 2,
            "onboard_time": 1637596800000,
            "expected_conversion_time": 1637596800000,
            "actual_conversion_time": 1637596800000,
            "overboard_time": 1637596800000,
            "overboard_note": "职业发展考虑",
            "onboard_city_code": "CT_2",
            "department": "6966123381141866028",
            "leader": "ou-xxx",
            "sequence": "6937934036379650311",
            "level": "7006234385490345986",
            "employee_type": "1",
            "job_requirement_id": "123123123213",
            "external_employment_id": "6969595949493939291"
        }
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1002001 | System error | 请根据实际报错信息定位或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1002002 | Parameter error | 检查参数是否正确，例如类型，大小
400 | 1002903 | Employee does not exist | 请确认入参 `employee_id` 是否正确
