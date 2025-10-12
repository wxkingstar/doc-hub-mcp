---
title: "查询部门 HRBP"
source_url: https://open.feishu.cn/document/corehr-v1/authorization/get_by_department
last_remote_update: 2024-12-17
last_remote_update_timestamp: 1734434079000
---
最后更新于 2024-12-17

# 查询部门 HRBP

查询部门的 HRBP 信息，包括来自上级部门的 HRBP。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v2/bps/get_by_department
HTTP Method | POST
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 查看部门 BP 信息(corehr:bp.get_by_department:read)
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
user_id_type | string | 否 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
- people_corehr_id：以飞书人事的 ID 来识别用户  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)
department_id_type | string | 否 | 此次调用中使用的部门 ID 类型  
**示例值**：open_department_id  
**可选值有**：  
- open_department_id：以 open_department_id 来标识部门  
- department_id：以 department_id 来标识部门  
- people_corehr_department_id：以 people_corehr_department_id 来标识部门  
**默认值**：`open_department_id`

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
department_id | string | 是 | 部门 ID，ID类型与department_id_type的取值意义一致。  
  >   
可以使用 [ID转换服务](https://open.larkoffice.com/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/common_data-id/convert)换取 ==department_id==  
  >   
部门id也可通过[搜索部门信息](https://open.larkoffice.com/document/server-docs/corehr-v1/organization-management/department/search)接口获取。  
**示例值**："6893014062142064111"

### 请求体示例
```json
{
    "department_id": "6893014062142064111"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
items | department_hrbp\[\] | 部门 HRBP 信息，依次为部门及各层级上级部门
department_id | string | 部门 ID，ID类型与department_id_type的取值意义一致。  
  >   
如想获取部门详细信息，可通过[搜索部门信息](https://open.larkoffice.com/document/server-docs/corehr-v1/organization-management/department/search)接口获取。
hrbp_ids | string\[\] | 部门 HRBP 员工 ID，ID类型与user_id_type的取值意义一致。  
  >   
如想获取员工详细信息，可通过[搜索员工信息](https://open.larkoffice.com/document/server-docs/corehr-v1/employee/search)接口获取。

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "items": [
            {
                "department_id": "4719456877659520852",
                "hrbp_ids": [
                    "4719456877659520852"
                ]
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 1161401 | Incorrect parameter type | 请检查字符串、数字等的参数类型
400 | 1161402 | Incorrect parameter range | 请检查数字类型参数是否超出约定范围
400 | 1161403 | Incorrect parameter length | 请检查List，Map等容器类型参数
400 | 1161404 | Missing or invalid parameter | 请检查参数是否有效
400 | 1161405 | Parameter parsing error | 请检查请求体json格式是否正确
400 | 1161406 | Parameter exceeds the optional range | 请检查枚举类参数的可选范围
500 | 1161501 | System internal error | 请参考详细错误信息，如有问题请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
