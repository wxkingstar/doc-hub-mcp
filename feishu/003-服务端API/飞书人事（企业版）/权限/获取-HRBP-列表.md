---
title: "获取 HRBP 列表"
source_url: https://open.feishu.cn/document/corehr-v1/authorization/list-2
last_remote_update: 2024-07-12
last_remote_update_timestamp: 1720773427000
---
最后更新于 2024-07-12

# 获取 HRBP 列表

获取 HRBP 列表。列表中包含HRBP的ID以及部门ID信息。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v2/bps
HTTP Method | GET
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 查看 BP 列表(corehr:bp.list:read)
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
page_size | int | 是 | 分页大小，最大 500  
**示例值**：500  
**数据校验规则**：  
- 取值范围：`1` ～ `500`
page_token | string | 否 | 分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果  
**示例值**：6891251722631890445
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

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
items | bp\[\] | HRBP 信息
department_id | string | 部门 ID  
  >   
如想获取部门详细信息，可通过[搜索部门信息](https://open.larkoffice.com/document/server-docs/corehr-v1/organization-management/department/search)接口获取。
hrbp_id | string | 部门 HRBP 的雇佣 ID，不包括上级部门的 HRBP  
  >   
如想获取员工详细信息，可通过[搜索员工信息](https://open.larkoffice.com/document/server-docs/corehr-v1/employee/search)接口获取。
page_token | string | 分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
has_more | boolean | 是否还有更多项

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "items": [
            {
                "department_id": "4719456877659520852",
                "hrbp_id": "4719456877659520852"
            }
        ],
        "page_token": "eVQrYzJBNDNONlk4VFZBZVlSdzlKdFJ4bVVHVExENDNKVHoxaVdiVnViQT0=",
        "has_more": true
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
