---
title: "查询会议室ID"
source_url: https://open.feishu.cn/document/server-docs/historic-version/meeting_room-v1/api-reference/obtain-meeting-room-id
---
最后更新于 2022-07-20

# 查询会议室ID

该接口用于根据租户自定义会议室ID查询会议室ID。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/meeting_room/room/batch_get_id?custom_room_ids=test01&custom_room_ids=test02
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

| **参数** | **参数类型** | **必须** | **说明**                                                     |
| -------- | ------------ | -------- | ------------------------------------------------------------ |
| custom_room_ids | string       | 是       | 用于查询指定会议室的租户自定义会议室ID      |

## 响应

### 响应体

| **参数**       | **说明**                                                     |
| -------------- | ------------------------------------------------------------ |
| code           | 返回码，非 0 表示失败                                        |
| msg            | 返回码的描述，"success" 表示成功，其他为错误提示信息         |
| data           | 返回业务信息                                                 |
| ∟rooms         | 会议室列表                                                   |
| &nbsp;&nbsp;&nbsp;∟room_id       | 会议室 ID                                                    |
| &nbsp;&nbsp;&nbsp;∟custom_room_id   | 租户自定义会议室 ID                                          |

### 响应体示例

```json
{
    "code":0,
    "msg":"success",
    "data":{
        "rooms":[
            {
                "room_id":"omm_eada1d61a550955240c28757e7dec3af",
                "custom_room_id":"test01"
            },
            {
                "room_id":"omm_83d09ad4f6896e02029a6a075f71c9d1",
                "custom_room_id":"test02"
            }
        ]
    }
}
```

### 错误码

具体可参考：[服务端错误码说明](https://open.feishu.cn/document/ukTMukTMukTM/ugjM14COyUjL4ITN)
