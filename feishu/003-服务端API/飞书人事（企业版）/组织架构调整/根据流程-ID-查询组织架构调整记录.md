---
title: "根据流程 ID 查询组织架构调整记录"
source_url: https://open.feishu.cn/document/corehr-v1/approval_groups/get
last_remote_update: 2025-08-25
last_remote_update_timestamp: 1756109364000
---
最后更新于 2025-08-25

# 根据流程 ID 查询组织架构调整记录

用户通过『飞书人事-我的团队-组织架构』 发起一个组织架构调整会根据 审批流配置发起 一个或多个审批。  之后用户可通过流程 process 的单据 ID， 查询到该审批进行的状态， 以及该流程中涉及到的 组织架构信息（包括部门变更、人员变更记录 ID、岗位变更记录 ID）。
如需查询具体变更详情：

- 部门变更：[批量查询部门变更接口](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/approval_groups/open_query_department_change_list_by_ids)

- 员工变更：[批量查询员工变更接口](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/approval_groups/open_query_job_change_list_by_ids)

**注意事项**：- 用户使用该接口前需提前获取 组织架构调整流程信息 权限
- 延迟说明：数据库主从延迟2s以内，即：用户接收到流程状态变更消息后2s内调用此接口可能查询不到数据。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/corehr/v2/approval_groups/:process_id
HTTP Method | GET
接口频率限制 | [5 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取组织架构调整流程信息(corehr:approval_groups:read)
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
process_id | string | 组织架构调整流程 ID， 用户通过『飞书人事-我的团队-组织架构』或『飞书 人事-人员管理-组织架构』 发起一个组织架构调整，并提交审批后，系统会根据管理员在审批流程中配置的规则，生成 一个或多个审批单据。  
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
approval_group | approval_group | 组织架构调整流程信息
approval_group_id | string | 组织架构调整审批组 ID， 该 ID 和 process_id 一一对应
process_id | string | 组织架构调整对应的流程 ID， 与入参 process_id 对应。
approval_group_status | string | 组织架构调整流程状态，枚举类型， 描述该审批单据的状态。  
**注意事项**：【不推荐使用，无法区分审批通过、执行失败和等待执行状态，推荐使用approval_group_status_v2】  
**可选值有**：  
- 0：待发起，是指该审批单据还未成功发起。  
- 1：审批中， 流程成功发起，并等待审批人审批。 可以通过『飞书人事-审批-我发起的』 / 『飞书人事-我的团队/人员管理-组织架构-调整记录』 找到审批单据。   
- 2：审批通过，该单据已通过审批， 调整记录等待写入。 一方面，组织架构调整支持拆单功能， 同一个调整可能发起多个审批， 当前审批单可能依赖其他审批通过才能写入。  
- 3：已完成，审批单中所有调整记录均写入完成。  
==该状态不代表调整的记录生效完成== 由于记录可能是未来生效， 因此记录的状态需通过 人员异动变更事件、部门变更事件 和 岗位变更事件 获取。  
    - 人员异动变更事件：[飞书人事-异动-事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/job_change/events/status_updated)  
    - 部门变更事件: [飞书人事-组织管理-事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/department/events/created)  
    - 岗位变更事件: 【飞书人事-岗职务管理-岗位-事件】(岗位灰度内)  
- 4：已拒绝，审批未通过。  
- 5：已撤销，用户主动撤销审批，流程会进入已撤销状态。
approval_group_status_v2 | int | 组织架构调整流程状态，枚举类型， 描述该审批单据的状态。  
**可选值有**：  
- 0：待发起，是指该审批单据还未成功发起。  
- 1：审批中， 流程成功发起，并等待审批人审批。 可以通过『飞书人事-审批-我发起的』 / 『飞书人事-我的团队/人员管理-组织架构-调整记录』 找到审批单据。   
- 2：审批通过，该单据已通过审批， 调整记录等待写入。   
- 3：已完成，审批单中所有调整记录均写入完成。  
==该状态不代表调整的记录生效完成== 由于记录可能是未来生效， 因此记录的状态需通过 人员异动变更事件 、部门变更事件  和 岗位变更事件 获取。  
    - 人员异动变更事件：[飞书人事-异动-事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/job_change/events/status_updated)  
    - 部门变更事件: [飞书人事-组织管理-事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/department/events/created)  
    - 岗位变更事件: 【飞书人事-岗职务管理-岗位-事件】(岗位灰度内)  
- 4：已拒绝，审批未通过。  
- 5：已撤销，用户主动撤销审批， 流程会进入已撤销状态。  
- 6：执行失败 或 等待执行。  
    - 该类型事件触发时机如下：  
        - 商业化租户，未配置拆分审批流（整单）：  
            - 审批单中存在执行失败的调整项，此时审批单状态为【执行失败】，会触发该类型事件发送。  
        - 商业化租户，且配置拆分审批流（合单）：  
            - 审批单中存在执行失败的调整项，此时审批单状态为【执行失败】，会触发该类型事件发送。  
            - 审批单执行生效依赖另一个同时发起的还处于审批中状态审批单的执行结果，此时审批单状态为【等待执行】，会触发该类型事件发送。当被依赖审批单审批通过后，该审批单会根据执行结果再次发送【已完成】或【执行失败】事件。  
        - 字节租户：  
            - 审批单中存在执行失败的调整项，此时审批单状态为【执行失败】，会触发该类型事件发送。  
            - 包含人员异动的审批单，审批通过时间早于审批单生效时间，此时审批单状态为【等待执行】，会触发该类型事件发送。到达审批单生效时间后，会根据执行结果再次发送【已完成】或【执行失败】事件。  
    - 用户收到该事件后，可通过以下接口查询审批单中包含调整记录的状态和变更详情：  
        - 人员调整记录：[批量查询人员调整内容](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/approval_groups/open_query_job_change_list_by_ids) ==调整记录状态待支持==  
        - 部门调整记录：[批量查询部门调整内容](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/approval_groups/open_query_department_change_list_by_ids)  
        - 岗位调整记录：【飞书人事-组织架构调整-批量查询岗位调整内容】(岗位灰度内)==调整记录状态待支持==
topic | string | 调整主题， 用户在『飞书人事-我的团队/人员管理 -组织架构-发起调整』填写的调整变更主题
adjust_reason | string | 调整原因，用户在『飞书人事-我的团队/人员管理 -组织架构-发起调整』填写的调整变更详细原因， 便于审批人批阅。
effective_date | string | 生效日期  
- 日期格式：YYYY-MM-DD  
- 最小值： 1900-01-01  
- 最大值： 9999-12-31
created_by | string | 发起人，在『飞书人事-我的团队/人员管理 -组织架构-发起调整』填写的调整变更发起人。
draft_id | string | 组织架构调整 ID，用户在『飞书人事-我的团队/人员管理 -组织架构-发起调整』 时生成的唯一 ID。
draft_status | string | 流程对应组织架构调整的状态：  process_status 是发起审批后的状态，而  draft_status 则是整个组织架构调整的状态。  
**可选值有**：  
- 0：编辑中，  
==（流程中的组织架构调整不会是该状态）== 该状态是指用户在『飞书人事-我的团队/人员管理-组织架构-发起调整』 中进行编辑时的状态。  
- 1：审批中，流程成功发起，并等待审批人审批。 可以通过『飞书人事-审批-我发起的』 / 『飞书人事-我的团队/人员管理-组织架构-调整记录』 找到审批单据。  
- 2：已完成，  
==该状态不代表调整的记录生效完成==   
由于记录可能是未来生效， 因此记录的状态需通过 人员异动变更事件 和 部门变更事件获取。  
    - 人员异动变更事件：[飞书人事-异动-事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/job_change/events/status_updated)  
    - 部门变更事件: [飞书人事-组织管理-事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/department/events/created)  
    - 岗位变更事件: 【飞书人事-岗职务管理-岗位-事件】（岗位灰度内）  
- 3：已撤销，用户主动撤销审批， 流程会进入已撤销状态。
department_changes | string\[\] | 关联的部门调整记录 ID 列表。   
- 部门变更详情可通过：[批量查询部门变更接口](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/approval_groups/open_query_department_change_list_by_ids)获取
job_changes | string\[\] | 关联的人员调整记录 ID 列表,  组织架构调整仅允许调整系统已存在的人员， 当发起审批后会生成一个 job_change 的记录用于记录变更过程。  
- 员工变更：[批量查询员工变更接口](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/approval_groups/open_query_job_change_list_by_ids)
position_changes | string\[\] | 关联的岗位调整记录 ID 列表。  
- 功能灰度中，开通岗位功能后可通过接口【批量查询岗位变更接口】获取岗位变更详情

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "approval_group": {
            "approval_group_id": "6991776076699549697",
            "process_id": "6991776076699549697",
            "approval_group_status": "1",
            "approval_group_status_v2": 1,
            "topic": "因组织发展需要， 变更XXX 部门组织架构",
            "adjust_reason": "例如：因业务扩展需要， 现需增设 XXX 和 XXX 两个区域部门，便于上午拓展。 ",
            "effective_date": "2022-03-01",
            "created_by": "6974641477444060708",
            "draft_id": "6991776076699549697",
            "draft_status": "Edit",
            "department_changes": [
                "7044427347159741231 "
            ],
            "job_changes": [
                "7044427347159746085"
            ],
            "position_changes": [
                "7044427347159746085"
            ]
        }
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
200 | 1162001 | Approval process not found | 请检查审批流 ID 是否正确
200 | 1161000 | Adjustment draft not found | 请确认组织架构调整记录是否存在
