---
title: "查询部门 / 地点的 HRBP / 属地 BP"
source_url: https://open.feishu.cn/document/server-docs/corehr-v1/authorization/query
---
最后更新于 2024-12-17

# 查询部门 / 地点的 HRBP / 属地 BP

通过部门或工作地点，查询对应的 HRBP / 属地 BP，返回的信息中包含BP的员工ID、部门ID、属地ID等信息。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v1/security_groups/query
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 获取用户授权数据(corehr:authorization:read)  
            获取核心人事信息(corehr:corehr:readonly)  
            更新核心人事信息(corehr:corehr)  
            查询部门/地点的HRBP/属地BP(corehr:authorization.bp:read)

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
department_id_type | string | 否 | 此次调用中使用的部门 ID 类型  
**示例值**：people_corehr_department_id  
**可选值有**：  
- open_department_id：以 open_department_id 来标识部门  
- department_id：以 department_id 来标识部门  
- people_corehr_department_id：以 people_corehr_department_id 来标识部门  
**默认值**：`people_corehr_department_id`

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
item_list | bp_role_organization\[\] | 是 | 角色列表，一次最多支持查询 50 个
role_key | string | 是 | 角色类型的唯一标识  
- HRBP：与部门有关，role_key 固定为 「hrbp」  
- 属地 BP：与部门、工作地点有关，role_key 固定为 「location_bp」  
**示例值**："location_bp"
department_id | string | 是 | 部门 ID，查询 HRBP 需输入部门 ID，ID类型与department_id_type的取值意义一致。  
  >   
可以使用 [ID转换服务](https://open.larkoffice.com/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/common_data-id/convert)换取 ==department_id==  
  >   
部门id也可通过[搜索部门信息](https://open.larkoffice.com/document/server-docs/corehr-v1/organization-management/department/search)接口获取。  
**示例值**："7063072995761456670"
work_location_id | string | 否 | 工作地点 ID，查询属地 BP 需要输入部门 ID 与 工作地点 ID  
>  
可从[批量查询地点](https://open.larkoffice.com/document/server-docs/corehr-v1/organization-management/location/list)接口获取，或者在「[飞书人事](https://people.feishu.cn/people/)-组织管理-地点」中查看。  
**示例值**："6892687221355185677"
updated_at_gte | string | 否 | 授权时间大于  
**示例值**："1729773628"
updated_at_lte | string | 否 | 授权时间小于  
**示例值**："1729773628"

### 请求体示例
```json
{
    "item_list": [
        {
            "role_key": "location_bp",
            "department_id": "7063072995761456670",
            "work_location_id": "6892687221355185677"
        }
    ],
    "updated_at_gte": "1729773628",
    "updated_at_lte": "1729773628"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
hrbp_list | hrbp\[\] | HRBP/属地 BP 信息
employment_id_list | string\[\] | HRBP/属地 BP 的雇员ID ：  
对于 HRBP 而言，若入参的部门没有找到对应的 HRBP，将向上找寻，即向其上级部门取对应的 HRBP，且同一部门可能有多个 HRBP；  
对于 属地 BP 而言，若入参的部门和地点没有找到对应的属地 BP，将优先拿地点向上找寻，即向其上级地点取对应的属地 BP  
  >   
如想获取BP的详细信息，可通过[搜索员工信息](https://open.larkoffice.com/document/server-docs/corehr-v1/employee/search)接口获取。
department_id | string | 部门 ID  
  >   
如想获取部门详细信息，可通过[搜索部门信息](https://open.larkoffice.com/document/server-docs/corehr-v1/organization-management/department/search)接口获取。
work_location_id | string | 工作地点 ID

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "hrbp_list": [
            {
                "employment_id_list": [
                    "['7063072995761456670']"
                ],
                "department_id": "7063072995761456670",
                "work_location_id": "6892687221355185677"
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 1161403 | Incorrect parameter length | 请检查List，Map等容器类型参数
400 | 1161404 | Missing or invalid parameter | 请检查参数是否有效
400 | 1161406 | Parameter exceeds the optional range | 参数超过可选范围，请检查枚举类参数的可选范围
500 | 1161501 | System internal error | 请参考详细错误信息，如有问题请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
