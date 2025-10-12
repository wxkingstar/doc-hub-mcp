---
title: "查询员工 HRBP / 属地 BP"
source_url: https://open.feishu.cn/document/corehr-v1/authorization/batch_get
---
最后更新于 2024-12-17

# 查询员工 HRBP / 属地 BP

查询员工的 HRBP 和属地 BP，包括来自上级部门的 HRBP 和属地 BP。
**注意事项**：该接口会按照应用拥有的「员工资源」的权限范围返回数据，请确定在「开发者后台 - 权限管理 - 数据权限 - 飞书人事（企业版）数据权限范围」中已申请「员工资源」权限范围

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v2/employees/bps/batch_get
HTTP Method | POST
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 查看员工的部分 BP 信息(corehr:employee.bp:read)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        查看员工的全部 BP 信息(corehr:employee.all_bp:read)  
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

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
employment_ids | string\[\] | 是 | 员工ID，ID类型与user_id_type的取值意义一致。  
  >   
如果你需要不同类型的ID进行转换，可以使用 [ID转换服务](https://open.larkoffice.com/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/common_data-id/convert) 换取 ==employment_id==  
**示例值**：["7140964208476371111"]  
**数据校验规则**：  
- 长度范围：`1` ～ `100`
get_all | boolean | 否 | 是否获取全部 BP，true 为获取员工所在部门及来自上级部门的全部 HRBP 和属地 BP，false 为仅获取员工的直属 HRBP 和属地 BP（当员工所在部门、属地无 BP 时，会上钻找到最近的 BP），默认为 false  
**示例值**：true  
**默认值**：`false`

### 请求体示例
```json
{
    "employment_ids": [
        "7140964208476371111"
    ],
    "get_all": true
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
employment_direct_bps | employment_bp\[\] | 员工直属 BP 信息，当员工所在部门、属地无 BP 时，会上钻找到最近的 BP
employment_id | string | 员工雇佣 ID  
>  
可以使用[搜索员工信息](https://open.larkoffice.com/document/server-docs/corehr-v1/employee/search)接口获取员工其他信息。
hrbp_ids | string\[\] | 员工直属 HRBP 雇佣 ID
location_bp_ids | string\[\] | 员工直属属地 BP 雇佣 ID
employment_all_bps | employment_bp\[\] | 员工全部 BP 信息  
**字段权限要求**：  
查看员工的全部 BP 信息(corehr:employee.all_bp:read)
employment_id | string | 员工雇佣 ID
hrbp_ids | string\[\] | 员工所在部门及上级部门全部 HRBP 雇佣 ID
location_bp_ids | string\[\] | 员工所在部门及上级部门全部属地 BP 雇佣 ID

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "employment_direct_bps": [
            {
                "employment_id": "6863326262618752123",
                "hrbp_ids": [
                    "6863326262618752123"
                ],
                "location_bp_ids": [
                    "6863326262618752123"
                ]
            }
        ],
        "employment_all_bps": [
            {
                "employment_id": "6863326262618752123",
                "hrbp_ids": [
                    "6863326262618752123"
                ],
                "location_bp_ids": [
                    "6863326262618752123"
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
