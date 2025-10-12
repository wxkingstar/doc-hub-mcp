<!--
title: 回复会议室日程实例
id: 6907569745299226626
fullPath: /ukTMukTMukTM/uYzN4UjL2cDO14iN3gTN
updatedAt: 1714445591000
source: https://open.feishu.cn/document/server-docs/calendar-v4/meeting-room-event/reply-meeting-room-event-instance
-->
# 回复会议室日程实例

调用该接口用于回复会议室日程实例，支持回复未签到释放、提前结束释放、被管理员置为接受、被管理员置为拒绝。

:::note
**说明**：你可以先调用[查询会议室忙闲](/ssl:ttdoc/ukTMukTMukTM/uIDOyUjLygjM14iM4ITN)接口，获取指定会议室的某一日程的 uid、original_time 信息，然后再调用本接口回复会议室日程。<BR>
**ID说明**：日程 ID（event_id）格式为 `<Uid>_<Original time>`，因此你可以通过 event_id 获取日程的 Uid 和 Original time。例如，日程 ID 为 `c32537e6-e0a8-4506-b42f-47440655cdb4_0` ，则 Uid 为 `c32537e6-e0a8-4506-b42f-47440655cdb4`、Original time 为 `0`。
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
      <md-td>https://open.feishu.cn/open-apis/meeting_room/instance/reply</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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

### 请求体

| **参数** | **参数类型** | **必须** | **说明**                                                     |
| -------- | ------------ | -------- | ------------------------------------------------------------ |
| room_id | string       | 是       | 会议室 ID。                                      |
| uid | string       | 是       | 会议室对应的日程 Uid。|
| original_time | int       | 是       | 日程实例原始时间。非重复性日程和重复性日程，此处传 0；重复性日程的例外日程，此处传对应的 original_time 值（时间戳类型）。 |
| status | string       | 是       | 回复状态。<br>**可选值有：**<br> - NOT_CHECK_IN：未签到<br>- ENDED_BEFORE_DUE：提前结束<br>- ACCEPTED_BY_ADMIN：被管理员置为接受<br>DECLINED_BY_ADMIN：被管理员置为拒绝|

### 请求体示例

```json
{
        "room_id":"omm_c7e9ef91ec9f3c007f1dfb2503918981",
        "uid":"bff6b51f-b7c1-40c6-b8ef-aef966c9ffc7",
        "original_time":0,
        "status":"NOT_CHECK_IN"
} 
```

## 响应
### 响应体

| **参数**    |**类型**| **说明**                                             |
| ----------- |---| ---------------------------------------------------- |
| code        |int| 返回码，非 0 表示失败。<br>**说明**：如果返回 105003 表示 original_time 不合法。该问题可能是重复日程的整个开始时间被修改导致的，建议应用重新查询会议室的日程列表，获取最新的 original_time，然后再次尝试调用本接口。                             |
| msg         |string| 返回码的描述，`success` 表示成功，其他为错误提示信息。 |

### 响应体示例

```json
{
    "code": 0,
    "msg": "success"
}
```

### 错误码

可前往查阅[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


