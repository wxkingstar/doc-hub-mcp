---
title: "ID 转换"
source_url: https://open.feishu.cn/document/corehr-v1/common_data-id/convert
last_remote_update: 2024-04-28
last_remote_update_timestamp: 1714300114000
---
最后更新于 2024-04-28

# ID 转换

该接口用来进行飞书人事和飞书通讯录、people admin 的各种 ID 转换（仅适用于飞书人事新链路租户）

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v1/common_data/id/convert
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取 ID 转换信息(corehr:common_data.id.convert:read)
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
id_transform_type | int | 是 | ID 转换类型  
**示例值**：1  
**可选值有**：  
- 1：飞书人事 -> 飞书通讯录  
- 2：飞书通讯录 -> 飞书人事  
- 3：people admin -> 飞书通讯录  
- 4：people admin -> 飞书人事
id_type | string | 是 | 要转换的ID类型  
**示例值**：user_id  
**可选值有**：  
- user_id：员工ID，当选择 user_id 且 id_transform_type 为 1、2、4 时，feishu_user_id_type 必填  
- department_id：部门ID，当选择 department_id 且 id_transform_type 为 1、2、4 时，feishu_department_id_type 必填  
- job_level_id：职级ID  
- job_family_id：序列ID  
- employee_type_id：人员类型ID，people admin 的人员类型ID 即为飞书通讯录人员类型的  enum_value，因此id_transform_type 为 3 时无须转换
feishu_user_id_type | string | 否 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)
feishu_department_id_type | string | 否 | 此次调用中使用的部门 ID 类型  
**示例值**：open_department_id  
**可选值有**：  
- open_department_id：以 open_department_id 来标识部门  
- department_id：以 department_id 来标识部门  
**默认值**：`open_department_id`

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
ids | string\[\] | 是 | ID 列表（最多传入 100 个 ID，ID 长度限制 50 个字符）  
**示例值**：["6891251722631891445"]  
**数据校验规则**：  
- 长度范围：`1` ～ `100`

### 请求体示例
```json
{
    "ids": [
        "6891251722631891445"
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
items | id_info\[\] | ID 信息列表
id | string | 传入的 ID
target_id | string | 目标 ID 值

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "items": [
            {
                "id": "7224321696097404460",
                "target_id": "7224321696097404461"
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 1160001 | Param Invalid | 请检查参数是否符合
