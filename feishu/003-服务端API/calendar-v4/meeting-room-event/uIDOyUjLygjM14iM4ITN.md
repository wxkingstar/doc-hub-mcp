<!--
title: 查询会议室忙闲
id: 6907569524100956161
fullPath: /ukTMukTMukTM/uIDOyUjLygjM14iM4ITN
updatedAt: 1748414883000
source: https://open.feishu.cn/document/server-docs/calendar-v4/meeting-room-event/query-room-availability
-->
# 查询会议室忙闲

调用该接口获取指定会议室的忙碌、空闲日程信息。

:::note
查询结果中：
- 非重复日程只有唯一的实例信息。
- 重复日程可能存在多个实例信息，根据日程重复规则和时间范围进行扩展。建议查询的时间区间为 30 天内。
:::

## 请求
:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/meeting_room/freebusy/batch_get</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>

   <md-tr>
     <md-th>支持的应用类型</md-th>
      <md-td>
	  <md-app-support types="custom,isv"></md-app-support>
      </md-td>
   </md-tr>


    
    
    <md-tr>
      <md-th>
 权限要求
 <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
</md-th>
      <md-td>
<md-perm name="calendar:room:readonly" desc="获取会议室信息" support_app_types="custom,isv" tags="">获取会议室信息</md-perm>
</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 18%;">名称</md-th>  
      <md-th style="width: 15%;">类型</md-th>  
       <md-th style="width: 15%;">必填</md-th>  
      <md-th>描述</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>Authorization</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>
          
**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"
          
 [了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
	</md-td>
</md-tr>
     <md-tr> 
      <md-td>Content-Type</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
     <md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
   
  </md-tbody> 
</md-table>
:::


### 查询参数
| **参数** | **参数类型** | **必须** | **说明**                                                     |
| -------- | ------------ | -------- | ------------------------------------------------------------ |
| room_ids | array<string>       | 是       | 会议室 ID。你可以通过[查询会议室列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/list)或[搜索会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/search)接口获取指定会议室 ID。<br>1. room_ids个数不要超过20。 <br>2. GET 请求中传入多个会议室 ID 的格式示例为 `room_ids=omm_83d09ad4f6896e02029a6a075f71xxxx&room_ids=omm_eada1d61a550955240c28757e7dexxxx`。 |
| time_min | string       | 是       | 查询的起始时间，需要遵循 [RFC3339](https://tools.ietf.org/html/rfc3339) 格式，示例：2019-09-04T08:45:00+08:00。<br>**注意**：传入该参数时需要进行 URL 编码。 |
| time_max | string       | 是       | 查询的结束时间，需要遵循 [RFC3339](https://tools.ietf.org/html/rfc3339) 格式，示例：2019-09-04T09:45:00+08:00。<br>**注意**：传入该参数时需要进行 URL 编码。 |

## 响应
### 响应体

| **参数**    |**类型**| **说明**                                             |
| ----------- |-----| ---------------------------------------------------- |
| code        |int| 返回码，非 0 表示失败。                                |
| msg         |string| 返回码的描述，`success` 表示成功，其他为错误提示信息。 |
| data        |-|返回信息。                                         |
| ∟time_min   |string|查询会议室忙闲的起始时间。         |
| ∟time_max   |string| 查询会议室忙闲的结束时间。         |
| ∟free_busy  |-| 会议室忙闲信息列表。                                      |
| &nbsp;&nbsp;&nbsp;∟room_id   | string| 会议室 ID。  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;∟start_time |string| 忙碌日程的起始时间。                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;∟end_time   |string| 忙碌日程的结束时间。                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;∟uid   |string| 日程的唯一 ID。                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;∟original_time   |int| 日程实例的原始时间。非重复性日程和重复性日程，此处为 0；重复性日程的例外日程，此处为对应的 original_time 值（时间戳类型）。  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;∟organizer_info   |-| 日程组织者信息。私密日程不会返回该信息。                               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;∟name   |string| 组织者姓名。使用应用身份创建的日程不会返回该信息。                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;∟open_id  |string| 组织者的 open_id。                                 |

### 响应体示例
```json
{
    "code":0,
    "msg":"success",
    "data":{
        "time_max":"2019-09-04T09:45:00+08:00",
        "time_min":"2019-09-04T08:45:00+08:00",
        "free_busy":{
            "omm_83d09ad4f6896e02029a6a075f71c9d1":[
                {
                    "end_time":"2019-09-04T09:30:00+08:00",
                    "organizer_info": {
                        "name": "张三",
                        "open_id": "ou_09379914ab6dde664x9daf84d8b13842"
                    },
                    "start_time":"2019-09-04T09:00:00+08:00",
                    "original_time": 0,
                    "uid": "bff6b51f-b7c1-40c6-b8ef-aef966c9ffc7"
                }
            ],
            "omm_c7e9ef91ec9f3c007f1dfb2503918981": [
                {
                    "end_time": "2020-01-14T19:00:00+08:00",
                    "organizer_info": {
                        "name": "xxx",
                        "open_id": "ou_09379914ab6dde66499daf94d8b13842"
                    },
                    "original_time": 1578997800,
                    "start_time": "2020-01-14T18:30:00+08:00",
                    "uid": "5632b176-4f0e-44eb-8331-c4b155ed270f"
                }
           ]
        }
    }
}
```

### 错误码

可前往查阅[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。



