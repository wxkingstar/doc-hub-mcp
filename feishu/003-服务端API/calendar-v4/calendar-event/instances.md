<!--
title: 获取重复日程实例
id: 7317471576948850689
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/instances
updatedAt: 1721111225000
source: https://open.feishu.cn/document/calendar-v4/calendar-event/instances
-->
# 获取重复日程实例

调用该接口以当前身份（应用或用户）获取指定日历中的某一重复日程信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar&version=v4&resource=calendar.event&method=instances)

:::html
<md-alert type="tip">
当前身份由 Header Authorization 的 Token 类型决定。tenant_access_token 指应用身份，user_access_token 指用户身份。
</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="error">

</md-alert>
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
      <md-td>https://open.feishu.cn/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/instances</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="calendar:calendar" desc="更新日历及日程信息" support_app_types="custom,isv" tags="">更新日历及日程信息</md-perm>
            <md-perm name="calendar:calendar.event:read" desc="读取日程信息" support_app_types="custom,isv" tags="">读取日程信息</md-perm>
            <md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" support_app_types="custom,isv" tags="">获取日历、日程及忙闲信息</md-perm>
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
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 13%;">类型</md-th>
       <md-th style="width: 15%;" filters="是,否" >必填</md-th>
      <md-th  style="width: 37%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>Authorization</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
</md-tr>
</md-tbody>
</md-table>
:::



### 路径参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >calendar_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日历 ID。关于日历 ID 可参见[日历 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/introduction)。

**示例值**："feishu.cn_HF9U2MbibE8PPpjro6xjqa@group.calendar.feishu.cn"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >event_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程 ID。

创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。
- [获取日程列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list)
- [搜索日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/search)

**示例值**："75d28f9b-e35c-4230-8a83-4a661497db54_0"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	开始时间，Unix 时间戳，单位为秒。该参数与 end_time 用于设置时间范围，即重复日程的查询区间为 （start_time, end_time）

**注意**：start_time 与 end_time 之间的时间区间不能超过 2年。

**示例值**：1631777271
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	结束时间，Unix 时间戳，单位为秒。该参数与 start_time 用于设置时间范围，即重复日程的查询区间为 （start_time, end_time）

**注意**：start_time 与 end_time 之间的时间区间不能超过 2年。

**示例值**：1631777271
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	一次调用返回的日程数量上限。

**示例值**：10

**默认值**：`50`

**数据校验规则**：

- 取值范围：`10` ～ `500`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果

**示例值**：eVQrYzJBNDNONlk4VFZBZVlSdzlKdFJ4bVVHVExENDNKVHoxaVdiVnViQT0=
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





## 响应





### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	重复日程的日程 instance 列表。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >event_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程实例 ID。

**注意**：重复日程实例的 ID 与其他日程 ID 不同，其 ID 包含了实例原始时间（Original time），数据格式为秒级时间戳。例如：`2cf525f0-1e67-4b04-ad4d-30b7f003903c_1713168000`，其中 `1713168000` 即为实例原始时间。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >summary</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程主题。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程描述。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >time_info</md-text>
	</md-dt-td>
	<md-dt-td>
	日程开始时间。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	开始时间，仅全天日程使用该字段，[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 格式，例如，2018-09-01。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >timestamp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	秒级时间戳，指日程具体的开始时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >timezone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	时区。使用 IANA Time Zone Database 标准。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >time_info</md-text>
	</md-dt-td>
	<md-dt-td>
	日程结束时间。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	结束时间，仅全天日程使用该字段，[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 格式，例如，2018-09-01。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >timestamp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	秒级时间戳，指日程具体的结束时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >timezone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	时区。使用 IANA Time Zone Database 标准。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程状态。

**可选值有**：
<md-enum>
<md-enum-item key="tentative" >未回应</md-enum-item>
<md-enum-item key="confirmed" >已确认</md-enum-item>
<md-enum-item key="cancelled" >日程已取消</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_exception</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	日程是否是重复日程的例外日程。了解例外日程，可参见[例外日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/introduction#71c5ec78)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >app_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程的 app_link，用于跳转到具体的某个日程。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >location</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >event_location</md-text>
	</md-dt-td>
	<md-dt-td>
	日程地点。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	地点名称。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >address</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	地点地址。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >latitude</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	地点坐标纬度信息。
- 对于国内的地点，采用 GCJ-02 标准
- 对于海外的地点，采用 WGS84 标准
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >longitude</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	地点坐标经度信息。
- 对于国内的地点，采用 GCJ-02 标准
- 对于海外的地点，采用 WGS84 标准
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >has_more</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否还有更多项
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {
        "items": [
            {
                "event_id": "75d28f9b-e35c-4230-8a83-4a661497db54_1602504000",
                "summary": "日程主题",
                "description": "desc",
                "start_time": {
                    "date": "2018-09-01",
                    "timestamp": "1602504000",
                    "timezone": "Asia/Shanghai"
                },
                "end_time": {
                    "date": "2018-09-01",
                    "timestamp": "1602504400",
                    "timezone": "Asia/Shanghai"
                },
                "status": "confirmed",
                "is_exception": false,
                "app_link": "https://applink.larkoffice.com/client/calendar/event/detail?calendarId=7039673579105026066&key=aeac9c56-aeb1-4179-a21b-02f278f59048&originalTime=0&startTime=1700496000",
                "location": {
                    "name": "上海",
                    "address": "徐汇区",
                    "latitude": 23.4444,
                    "longitude": 23.4444
                }
            }
        ],
        "page_token": "eVQrYzJBNDNONlk4VFZBZVlSdzlKdFJ4bVVHVExENDNKVHoxaVdiVnViQT0=",
        "has_more": true
    }
}
</md-code-json>
:::



### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>400</md-td>
  <md-td>190002</md-td>
  <md-td>invalid parameters in request</md-td>
  <md-td>无效的请求参数。排查建议如下：

- 确认请求参数的字段名称、传参类型正确。
- 确认已经申请了相应资源的权限。
- 确认相应资源未被删除。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>190003</md-td>
  <md-td>internal service error</md-td>
  <md-td>内部服务错误，请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>190004</md-td>
  <md-td>method rate limited</md-td>
  <md-td>方法频率限制。建议稍后再试，并适当减小请求 QPS。</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>190005</md-td>
  <md-td>app rate limited</md-td>
  <md-td>应用频率限制。建议稍后再试，并适当减小请求 QPS。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>190006</md-td>
  <md-td>wrong unit for app tenant</md-td>
  <md-td>请求错误，检查应用 App ID 和 App Secret 是否正确。如仍无法解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>190007</md-td>
  <md-td>app bot_id not found</md-td>
  <md-td>应用的 bot_id 没有找到。你需要确保应用开启了[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。如仍未解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>190008</md-td>
  <md-td>page_token or sync_token expired</md-td>
  <md-td>page_token或者sync_token已过期，请置空token再重试</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>190010</md-td>
  <md-td>current operation rate limited</md-td>
  <md-td>当前操作被限流，原因一般为公用资源并发抢占失败。你可以适当降低当前操作频率，然后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>190011</md-td>
  <md-td>tenant encrypt key has been deleted</md-td>
  <md-td>加解密状态的自主密钥被删除，被该秘钥加密的数据不可用。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>190012</md-td>
  <md-td>tenant decrypt key has been deleted</md-td>
  <md-td>仅解密状态的自主密钥被删除，被该秘钥加密的数据不可用。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>191000</md-td>
  <md-td>calendar not found</md-td>
  <md-td>日历没有找到。你需要检查并改为正确的日历 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>191001</md-td>
  <md-td>invalid calendar_id</md-td>
  <md-td>calendar_id 无效。你需要检查并改为正确的日历 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>191002</md-td>
  <md-td>no calendar access_role</md-td>
  <md-td>当前身份没有日历的访问权限。如需查询某一日历信息，则需要确保当前身份拥有该日历的访问权限。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>191003</md-td>
  <md-td>calendar is deleted</md-td>
  <md-td>日历已经被删除。你需要检查并改为正确的日历 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>191004</md-td>
  <md-td>invalid calendar type</md-td>
  <md-td>日历类型错误。你可以调用[查询日历信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/get)接口获取日历类型信息，然后确保日历类型适用于当前接口。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>193000</md-td>
  <md-td>invalid event_id</md-td>
  <md-td>event_id 无效。你需要检查并改为正确的日程 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>193001</md-td>
  <md-td>event not found</md-td>
  <md-td>日程未找到。你需要确保传入了正确的日程 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>193002</md-td>
  <md-td>no permission to operate event</md-td>
  <md-td>无权限操作。你需要确保有日历以及日程的编辑权限。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>193003</md-td>
  <md-td>event is deleted</md-td>
  <md-td>日程已经被删除。你需要检查并改为正确的日程 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>195100</md-td>
  <md-td>user is dismiss or not exist in the tenant</md-td>
  <md-td>当前身份或指定用户已经离职，或者不在该租户内。请检查并改为正确的身份来调用接口。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


