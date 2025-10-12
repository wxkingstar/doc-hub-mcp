---
title: "获取 Top 用户列表"
source_url: https://open.feishu.cn/document/server-docs/vc-v1/report/get_top_user
last_remote_update: 2024-04-29
last_remote_update_timestamp: 1714359532000
---
最后更新于 2024-04-29

# 获取 Top 用户列表

获取一段时间内组织内会议使用的 Top 用户列表。

**注意事项**：支持最近90天内的数据查询；默认返回前10位，最多可查询前100位

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/vc/v1/reports/get_top_user
HTTP Method | GET
接口频率限制 | [特殊频控](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取会议报告(vc:report:readonly)
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
start_time | string | 是 | 开始时间（unix时间，单位sec）  
**示例值**：1608888867
end_time | string | 是 | 结束时间（unix时间，单位sec）  
**示例值**：1608889966
limit | int | 是 | 取前多少位  
**示例值**：10
order_by | int | 是 | 排序依据（降序）  
**示例值**：1  
**可选值有**：  
- 1：会议数量  
- 2：会议时长
unit | int | 否 | 数据驻留地（传参前提是租户存在多个驻留地数据且开通了该查询功能）  
**示例值**：0  
**可选值有**：  
- 0：中国大陆  
- 1：美国  
- 2：新加坡  
- 3：日本
user_id_type | string | 否 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
top_user_report | report_top_user\[\] | top用户列表
id | string | 用户ID
name | string | 用户名
user_type | int | 用户类型  
**可选值有**：  
- 1：飞书用户  
- 2：rooms用户  
- 3：文档用户  
- 4：neo单品用户  
- 5：neo单品游客用户  
- 6：pstn用户  
- 7：sip用户
meeting_count | string | 会议数量
meeting_duration | string | 会议时长（单位min）

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "top_user_report": [
            {
                "id": "ou_3ec3f6a28a0d08c45d895276e8e5e19b",
                "name": "name",
                "user_type": 1,
                "meeting_count": "100",
                "meeting_duration": "3000"
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 121001 | internal error | 服务器内部错误，如果重试无效可联系管理员
400 | 121002 | not support | 暂不支持该功能
400 | 121003 | param error | 参数错误，检查参数的取值范围（请按照上面字段说明自查）
400 | 122359 | The request you send is not a valid {lark_id} or not exists | 同错误码99992359，Top用户列表中可能含有飞书会议室，建议 user_id_type 中不传输 user_id
