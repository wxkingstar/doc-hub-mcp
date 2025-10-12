---
title: "更新 Offer 状态"
source_url: https://open.feishu.cn/document/server-docs/hire-v1/candidate-management/delivery-process-management/offer/offer_status
last_remote_update: 2024-09-05
last_remote_update_timestamp: 1725526529000
---
最后更新于 2024-09-05

# 更新 Offer 状态

通过 Offer ID 更新候选人 Offer 的「Offer 审批状态」或 「Offer 发送和接受状态」。

## 注意事项

- 若当前 Offer 是通过飞书招聘发起的审批，则不可通过此接口更新「Offer 审批状态」。
- 若当前 Offer 通过飞书招聘发送过候选人，则不可通过此接口更新「Offer 发送和接受状态」。
- 若当前 Offer 所属投递阶段已进入「待入职」阶段，则不可通过此接口更新「Offer 审批状态」和「Offer 发送和接受状态」。

## 前提条件
- 更新 Offer 审批状态前，请前往「飞书招聘」-「设置」-「Offer 设置」-「Offer 规则设置」开启「通过 OA 系统创建和审批 Offer」。
- 更新 Offer 发送和接受状态前，请前往「飞书招聘」-「设置」-「Offer 设置」-「Offer 规则设置」开启「通过 OA 系统发送 Offer」。

## Offer 状态说明

### Offer 状态分类
- Offer 被创建后，状态为`「Offer 已创建」`
- Offer 审批状态：`「Offer 审批中」`、`「Offer 审批通过」`、`「Offer 审批不通过」`、`「Offer 审批已撤回」`
- Offer 发送和接受状态：`「Offer 已发送」`、`「Offer 已失效」`、`「Offer 被候选人接受」`、`「Offer 被候选人拒绝」`

### Offer 状态流转图
![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/6faaeda86bbe8f1b9f2c7ef91062edd2_xU7rL7qrof.png)

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/offers/:offer_id/offer_status
HTTP Method | PATCH
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 更新 offer 信息(hire:offer)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
offer_id | string | Offer ID，如何获取请参考[获取 Offer 列表](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/offer/list)  
**示例值**："6930815272790114324"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
offer_status | int | 是 | Offer 状态  
**示例值**：6  
**可选值有**：  
- 2：Offer 审批中  
- 3：Offer 审批已撤回  
- 4：Offer 审批通过  
- 5：Offer 审批不通过  
- 6：Offer 已发送  
- 7：Offer 被候选人接受  
- 8：Offer 被候选人拒绝  
- 9：Offer 已失效  
- 10：Offer 已创建
expiration_date | string | 否 | Offer 失效时间  
**注意**：当请求参数 offer_status 为「Offer 已发送」时必填  
**值格式**："YYYY-MM-DD"  
**示例值**："2023-01-01"
termination_reason_id_list | string\[\] | 否 | 终止原因 ID 列表，可通过[获取终止投递原因](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/termination_reason/list)接口获取  
**最大长度**：  
50  
**注意**：当请求参数 offer_status 为「Offer 被候选人拒绝」时必填  
**示例值**：["6891560630172518670"]
termination_reason_note | string | 否 | Offer 终止备注信息  
**示例值**："不符合期望"

### 请求体示例
```json
{
    "offer_status": 6,
    "expiration_date": "2023-01-01",
    "termination_reason_id_list": [
        "6891560630172518670"
    ],
    "termination_reason_note": "不符合期望"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {}
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1002001 | 系统错误 | 请根据实际报错信息定位或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1002002 | 参数错误 | 检查参数是否正确，例如类型，大小
400 | 1002064 | Offer 不存在 | Offer ID 非法，请检查入参 `offer_id` 是否正确
500 | 1002069 | Offer 审批状态更新失败 | 确认 Offer 当前状态，更新 Offer 审批状态需遵循状态流转规则
400 | 1002070 | 当前 Offer 已通过飞书招聘发起过审批，不可再通过此接口更新 Offer 状态 | 确认 Offer 是否已由飞书招聘系统发起审批
400 | 1002071 | 当前投递阶段不可更新Offer 接受状态 | 确认当前投递阶段是否在「待入职」之前
400 | 1002072 | 不可将 Offer 置为已失效 | 确认当前 Offer 的状态为「已发出」或「候选人已接受」
500 | 1002073 | 当前 Offer 已通过飞书招聘发送给候选人，不可通过该接口更新 Offer 发送和接受状态 | 确实当前 Offer 是否已经在飞书招聘系统发送给候选人
500 | 1002074 | 同步开关尚未打开，仅支持在招聘系统中创建   
 Offer、修改 Offer 状态和发送 Offer | 请前往「飞书招聘」-「设置」-「Offer 设置」-「Offer 规则设置」开启对应开关
