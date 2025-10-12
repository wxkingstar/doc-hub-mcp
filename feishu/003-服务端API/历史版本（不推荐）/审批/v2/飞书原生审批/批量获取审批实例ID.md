---
title: "批量获取审批实例ID"
source_url: https://open.feishu.cn/document/server-docs/historic-version/approval/v2/feishu-native-approval/batch-obtain-approval-instance-ids
---
最后更新于 2022-07-08

# 批量获取审批实例
**注意事项**：为了更好地提升接口文档的的易理解性，我们对文档进行了升级，请尽快迁移至[新版本>>](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list)
根据 approval_code 批量获取审批实例的 instance_code，用于拉取租户下某个审批定义的全部审批实例。
默认以审批创建时间排序。

## 请求

基本 | 
--- | ---
HTTP URL | https://www.feishu.cn/approval/openapi/v2/instance/list
HTTP Method | POST
支持的应用类型 | 自建应用、商店应用
权限要求  
 **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 访问审批应用(approval:approval:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
 [了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 请求体

| 名称         | 类型           | 必须        | 说明        |
| --------- | --------------- | -------   | --------- |
|approval_code | string | 是 |  审批定义唯一标识 |
|start_time |long | 是 | 审批实例创建时间区间（毫秒）  |
|end_time | long | 是 |审批实例创建时间区间（毫秒） |
|offset | int | 是 | 查询偏移量 |
|limit | int | 是 | 查询限制量 注:不得大于100 |

### 请求体示例

```json
{
    "approval_code":"7C468A54-8745-2245-9675-08B7C63E7A85",
    "start_time":1567690398020,
    "end_time":1567690398020,
    "offset":0,
    "limit":100
}
````

## 响应

### 响应体

| 参数         |类型         |必须  | 说明        |
| --------- | ----------|----- | --------- |
|code |int |是 |错误码，非0表示失败 |
|msg | string |是| 返回码的描述|
|data | map |是| 返回业务信息 |
|&emsp;∟instance_code_list|list<string>|是|审批实例 Code|

### 响应体示例

```json
{
    "code":0,
    "msg":"success",
    "data": {
    	"instance_code_list": [
            "357C21A0-2069-4F6B-955F-1DFBE6710C51",
            "A6F07B2A-0503-4197-8FD7-FEB40C79B47B",
            "3D9ED45B-0806-4B55-8356-BC0FF517408C",
            "33BF276D-0217-436D-A565-3081E5000E63",
            "F7765ABC-2609-49D3-B040-1BCBFD15E3B8",
        ]
    }
}
```
