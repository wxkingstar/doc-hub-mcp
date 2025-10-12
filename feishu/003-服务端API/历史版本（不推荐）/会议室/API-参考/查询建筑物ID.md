---
title: "查询建筑物ID"
source_url: https://open.feishu.cn/document/server-docs/historic-version/meeting_room-v1/api-reference/obtain-building-id
---
最后更新于 2022-07-20

# 查询建筑物ID

该接口用于根据租户自定义建筑 ID 查询建筑 ID。
## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/meeting_room/building/batch_get_id?custom_building_ids=test01&custom_building_ids=test02
HTTP Method | GET
支持的应用类型 | 自建应用、商店应用
权限要求  
 **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取会议室信息(calendar:room:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
 [了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 查询参数

| **参数**     | **参数类型** | **必须** | **说明**                                                     |
| ------------ | ------------ | -------- | ------------------------------------------------------------ |
| custom_building_ids | string       | 是       | 用于查询指定建筑物的租户自定义建筑ID |

## 响应

### 响应体

| **参数**     | **说明**                                             |
| ------------ | ---------------------------------------------------- |
| code         | 返回码，非 0 表示失败                                |
| msg          | 返回码的描述，"success" 表示成功，其他为错误提示信息 |
| data         | 返回业务信息                                         |
| ∟buildings   | 建筑列表                                             |
| &nbsp;&nbsp;&nbsp;∟building_id | 建筑物ID                                            |
| &nbsp;&nbsp;&nbsp;∟custom_building_id | 租户自定义建筑物ID              |

### 响应体示例

```json
{
    "code":0,
    "msg":"success",
    "data":{
        "buildings":[
            {
                "building_id":"omb_8ec170b937536a5d87c23b418b83f9bb",
                "custom_bulding_id":"test01"
            },
            {
                "building_id":"omb_38570e4f0fd9ecf15030d3cc8b388f3a",
                "custom_bulding_id":"test02"
            }
        ]
    }
}
```

### 错误码

具体可参考：[服务端错误码说明](https://open.feishu.cn/document/ukTMukTMukTM/ugjM14COyUjL4ITN)
