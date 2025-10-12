---
title: "根据适用条件获取工作日历 ID"
source_url: https://open.feishu.cn/document/corehr-v1/leave/calendar_by_scope
---
最后更新于 2025-02-21

# 根据适用条件获取工作日历 ID

根据日历的适用范围，获取工作日历 ID。适用范围包含工作地点，工时制度等。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v1/leaves/calendar_by_scope
HTTP Method | GET
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 获取核心人事信息(corehr:corehr:readonly)  
            获取休假信息(corehr:leave:read)  
            查询工作日历(corehr:work_calendar:read)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
或  
`user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

### 查询参数

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
wk_department_id | string | 否 | 用户所属部门的ID列表。  
可以通过[批量查询任职信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_data/list)获取所属部门的 ID  
**示例值**："6722331851580982798"
wk_country_region_id | string | 否 | 国家/地区 ID。  
可以通过[批量查询任职信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_data/list) 获取所属国家/地区 ID  
**示例值**："6722331851580982798"
wk_employee_type_id | string | 否 | 人员类型ID。  
可以通过[批量查询任职信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_data/list) 获取所属人员类型ID  
**示例值**："6722331851580982798"
wk_work_location_id | string | 否 | 工作地点ID。  
可以通过[批量查询任职信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_data/list) 获取工作地点ID  
**示例值**："6722331851580982798"
wk_working_hours_type_id | string | 否 | 工时制度ID。  
可以通过[批量查询任职信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_data/list) 获取工时制度ID  
**示例值**："6722331851124982728"
wk_job_family_id | string | 否 | 职务序列ID。  
可以通过[批量查询任职信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_data/list) 获取职务序列ID。  
**示例值**："8234534456354534546"
wk_company_id | string | 否 | 公司 ID。  
可以通过[批量查询任职信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_data/list)获取公司 ID  
**示例值**："6235435355464465434"

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
calendar_wk_id | string | 工作日历id

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "calendar_wk_id": "6722331851580982798"
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 1160001 | param is invalid | 参数错误,  
租户ID为空或者必填参数没有传入。
400 | 1160002 | GetEmploymentCalendar failed | 获取日历错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW) 。
400 | 1160003 | GetByCalendarID failed | 根据日历获取详情错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW) 。
