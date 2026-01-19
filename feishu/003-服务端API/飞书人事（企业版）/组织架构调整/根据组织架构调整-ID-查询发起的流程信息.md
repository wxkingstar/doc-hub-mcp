---
title: "根据组织架构调整 ID 查询发起的流程信息"
source_url: https://open.feishu.cn/document/corehr-v1/approval_groups/get-2
last_remote_update: 2025-10-14
last_remote_update_timestamp: 1760409267000
---
最后更新于 2025-10-14

# 根据组织架构调整 ID 查询发起的流程信息

用户通过『飞书人事-我的团队/人员管理-组织架构』 发起一个组织架构调整会根据 审批流配置发起 一个或多个审批。之后用户可以通过组织架构调整 ID 查询对应的流程ID，以及审批流状态。如需查询单个审批的详情数据，可通过[根据流程 ID 查询组织架构调整记录](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/approval_groups/get)获取。

**注意事项**：- 用户使用该接口前需提前获取 根据组织架构调整 ID 获取组织架构调整流程信息 权限
- 延迟说明：数据库主从延迟2s以内，即：用户接收到流程状态变更消息后2s内调用此接口可能查询不到数据。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v2/drafts/:draft_id
HTTP Method | GET
接口频率限制 | [5 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 根据组织架构调整 ID 获取组织架构调整流程信息(corehr:draft:read)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户 user ID(contact:user.employee_id:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
draft_id | string | 组织架构调整 ID。用户在「飞书人事-我的团队/人员管理 -组织架构-发起调整」时生成的唯一 ID，可通过「组织架构调整状态变更事件」的事件获取  
**示例值**："6893014062142064111"

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

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
draft_id | string | 组织架构调整 ID
draft_status | string | 组织架构调整状态  
**可选值有**：  
- 0：编辑中，  
==（流程中的组织架构调整不会是该状态）== 该状态是指用户在『飞书人事-我的团队/人员管理-组织架构-发起调整』 中进行编辑时的状态。  
- 1：审批中，流程成功发起，并等待审批人审批。 可以通过『飞书人事-审批-我发起的』 / 『飞书人事-我的团队/人员管理-组织架构-调整记录』 找到审批单据。  
- 2：已完成，  
==该状态不代表调整的记录生效完成==   
由于记录可能是未来生效， 因此记录的状态需通过 人员异动变更事件 和 部门变更事件获取。  
    - 人员异动变更事件:[飞书人事-异动-事件](/ssl:/ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_change/job-change-events)   
    - 部门变更事件: [飞书人事-组织管理-事件](/ssl:/ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/department/events/created)   
    - 岗位变更事件: 【飞书人事-岗职务管理-岗位-事件】(岗位灰度内)  
- 3：已撤销，用户主动撤销审批， 流程会进入已撤销状态。单次调整中的所有流程均为撤销态时，调整才会流转为撤销态。
process_infos | process_info\[\] | 组织架构调整流程信息列表
process_id | string | 组织架构调整流程 ID。详情数据可通过[根据流程 ID 查询组织架构调整记录](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/approval_groups/get)获取。
approval_group_status | string | 组织架构调整流程状态 ==（不建议使用，推荐使用draft_status）==  
**可选值有**：  
- 0：待发起，是指该审批单据还未成功发起。  
- 1：审批中， 流程成功发起，并等待审批人审批。 可以通过『飞书人事-审批-我发起的』 / 『飞书人事-我的团队/人员管理-组织架构-调整记录』 找到审批单据。   
- 2：审批通过，该单据已通过审批， 调整记录等待写入。 一方面，组织架构调整支持拆单功能， 同一个调整可能发起多个审批， 当前审批单可能依赖其他审批通过才能写入。  
- 3：已完成,  
==该状态不代表调整的记录生效完成== 由于记录可能是未来生效， 因此记录的状态需通过 人员异动变更事件 和 部门变更事件获取。  
    - 人员异动变更事件：[飞书人事-异动-事件](/ssl:/ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/job_change/job-change-events)  
    - 部门变更事件: [飞书人事-组织管理-事件](/ssl:/ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/department/events/created)  
    - 岗位变更事件: 【飞书人事-岗职务管理-岗位-事件】(岗位灰度内)  
- 4：已拒绝： 审批未通过。  
- 5：已撤销，用户主动撤销审批， 流程会进入已撤销状态。

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "draft_id": "6991776076699549697",
        "draft_status": "1",
        "process_infos": [
            {
                "process_id": "6991776076699549697",
                "approval_group_status": "1"
            }
        ]
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 1161000 | Adjustment draft not found | 请检查组织架构调整 ID 是否正确
400 | 1162001 | Approval process not found | 请检查组织架构调整 ID 是否正确
