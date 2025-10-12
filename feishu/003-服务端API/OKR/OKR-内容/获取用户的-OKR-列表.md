---
title: "获取用户的 OKR 列表"
source_url: https://open.feishu.cn/document/server-docs/okr-v1/okr/list
last_remote_update: 2024-04-25
last_remote_update_timestamp: 1714017377000
---
最后更新于 2024-04-25

# 获取用户的 OKR 列表

根据用户的 id 获取 OKR 列表。

**注意事项**：使用`tenant_access_token`需要额外申请权限以应用身份访问OKR信息

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/okr/v1/users/:user_id/okrs
HTTP Method | GET
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 获取 OKR 信息(okr:okr:readonly)  
            更新 OKR 信息(okr:okr)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户 user ID(contact:user.employee_id:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
或  
`user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
user_id | string | 目标用户id  
**示例值**："ou-asdasdasdasdasd"

### 查询参数

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
user_id_type | string | 否 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
- people_admin_id：以people_admin_id来识别用户  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)
offset | string | 是 | 请求列表的偏移（对应响应体的 okr_list 字段），offset>=0  
**示例值**：0
limit | string | 是 | 列表长度，0-10  
**示例值**：5
lang | string | 否 | 请求OKR的语言版本（比如@的人名），lang=en_us/zh_cn  
**示例值**：zh_cn  
**默认值**：`zh_cn`
period_ids | string\[\] | 否 | period_id列表，最多10个  
**示例值**：6990181559036610092  
**数据校验规则**：  
- 最大长度：`10`

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
total | int | OKR周期总数
okr_list | okr_batch\[\] | OKR 列表
id | string | OKR ID
permission | int | OKR的访问权限  
**可选值有**：  
- 0：此时OKR只返回id  
- 1：返回OKR的其他具体字段
period_id | string | OKR 周期 ID
name | string | 名称
objective_list | okr_objective\[\] | Objective列表
id | string | Objective ID
permission | int | 权限  
**可选值有**：  
- 0：此时OKR只返回id  
- 1：返回OKR的其他具体字段
content | string | Objective 内容
progress_report | string | Objective 备注内容
score | int | Objective 分数（0 - 100）
weight | number(float) | Objective的权重（0 - 100）
progress_rate | okr_objective_progress_rate | Objective进度
percent | int | Objective 进度百分比 >= 0
status | string | Objective 进度状态:  
- "-1" 暂无  
- "0" 正常  
- "1" 风险  
- "2" 延期
kr_list | okr_objective_kr\[\] | Objective KeyResult 列表
id | string | Key Result ID
content | string | KeyResult 内容
score | int | KeyResult打分（0 - 100）
weight | int | KeyResult权重（0 - 100）（废弃）
kr_weight | number(float) | KeyResult的权重（0 - 100）
progress_rate | okr_objective_progress_rate | KR进度
percent | int | Objective 进度百分比 >= 0
status | string | Objective 进度状态:  
- "-1" 暂无  
- "0" 正常  
- "1" 风险  
- "2" 延期
progress_record_list | progress_record_simplify\[\] | 该KR的进度列表
id | string | OKR 进展记录ID
progress_rate_percent_last_updated_time | string | 最后一次进度百分比更新时间 毫秒
progress_rate_status_last_updated_time | string | 最后一次状态更新时间 毫秒
progress_record_last_updated_time | string | 最后一次在侧边栏新增或者编辑进展的时间 毫秒
progress_report_last_updated_time | string | 最后一次编辑备注的时间 毫秒
score_last_updated_time | string | 最后一次打分更新时间 毫秒
deadline | string | 截止时间 毫秒
mentioned_user_list | okr_objective_aligned_objective_owner\[\] | 该Objective提到的人员列表
open_id | string | 用户的 open_id
user_id | string | 用户的 user_id
aligned_objective_list | okr_objective_aligned_objective\[\] | 对齐到该Objective的Objective列表
id | string | Objective的ID
okr_id | string | OKR的ID
owner | okr_objective_aligned_objective_owner | 该Objective的Owner
open_id | string | 用户的 open_id
user_id | string | 用户的 user_id
aligning_objective_list | okr_objective_aligned_objective\[\] | 该Objective对齐到的Objective列表
id | string | Objective的ID
okr_id | string | OKR的ID
owner | okr_objective_aligned_objective_owner | 该Objective的Owner
open_id | string | 用户的 open_id
user_id | string | 用户的 user_id
progress_record_list | progress_record_simplify\[\] | 该Objective的进度列表
id | string | OKR 进展记录ID
progress_rate_percent_last_updated_time | string | 最后一次进度百分比更新时间 毫秒
progress_rate_status_last_updated_time | string | 最后一次状态更新时间 毫秒
progress_record_last_updated_time | string | 最后一次在侧边栏新增或者编辑进展的时间 毫秒
progress_report_last_updated_time | string | 最后一次编辑备注的时间 毫秒
score_last_updated_time | string | 最后一次打分更新时间 毫秒
deadline | string | 截止时间 毫秒
mentioned_user_list | okr_objective_aligned_objective_owner\[\] | 该Objective提到的人员列表
open_id | string | 用户的 open_id
user_id | string | 用户的 user_id
confirm_status | int | OKR确认状态  
**可选值有**：  
- 0：初始状态  
- 1：待提交/未提交  
- 2：待处理/待确认  
- 3：已拒绝/已建议  
- 4：已通过/已确认

### 响应体示例
```json
{
    "code": 0,
    "data": {
        "okr_list": [
            {
                "confirm_status": 4,
                "id": "7072252816005349396",
                "name": "2022 年 3 月",
                "objective_list": [
                    {
                        "aligned_objective_list": [],
                        "aligning_objective_list": [],
                        "content": "需求@刘三",
                        "deadline": "1648656000000",
                        "id": "7073360513731690515",
                        "kr_list": [
                            {
                                "content": "1111@张三9",
                                "deadline": "1648656000000",
                                "id": "7073360471990140948",
                                "kr_weight": 50,
                                "mentioned_user_list": [
                                    {
                                        "open_id": "ou_a79faffdb6aee3618f0da4d42b192466",
                                        "user_id": "6887399402823058952"
                                    }
                                ],
                                "progress_rate": {
                                    "percent": 60,
                                    "status": "1"
                                },
                                "progress_rate_percent_last_updated_time": "1646907176099",
                                "progress_rate_status_last_updated_time": "1646907176099",
                                "progress_record_last_updated_time": "1646907586253",
                                "progress_record_list": [
                                    {
                                        "id": "7073411057431199764"
                                    }
                                ],
                                "progress_report_last_updated_time": "0",
                                "score": 100,
                                "score_last_updated_time": "1646907586244",
                                "weight": 50
                            }
                        ],
                        "mentioned_user_list": [
                            {
                                "open_id": "ou_ab08720df94e64045cc8c2b7694ef2a0",
                                "user_id": "6886701186532001294"
                            }
                        ],
                        "permission": 1,
                        "progress_rate": {
                            "percent": 30,
                            "status": "0"
                        },
                        "progress_rate_percent_last_updated_time": "1646907261326",
                        "progress_rate_status_last_updated_time": "1646907261326",
                        "progress_record_last_updated_time": "1646907590448",
                        "progress_record_list": [
                            {
                                "id": "7073360502990061587"
                            }
                        ],
                        "progress_report": "红豆泥",
                        "progress_report_last_updated_time": "1646907387911",
                        "score": 100,
                        "score_last_updated_time": "1646907590472",
                        "weight": 40
                    }
                ],
                "period_id": "7067724095781142548",
                "permission": 1
            }
        ],
        "total": 14
    },
    "msg": "success"
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1009999 | Unknown error. Please contact Feishu Assistant or your customer success manager. | 内部错误，请联系飞书助手或您的客户成功经理
500 | 1009998 | system exception | 系统异常
400 | 1001001 | Invalid parameters. Please check document and modify accordingly. | 无效的参数，请对照文档检查输入的参数
400 | 1001002 | No permission. | 您无权访问该接口，请确认您的登录凭证
400 | 1001003 | User not found. | 用户不存在
400 | 1001004 | OKR data not found. | 对应ID的数据不存在
