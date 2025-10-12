<!--
title: 获取日程列表
id: 6952888507002798107
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list
updatedAt: 1745206891000
source: https://open.feishu.cn/document/server-docs/calendar-v4/calendar-event/list
-->
# 获取日程列表

调用该接口以当前身份（应用或用户）获取指定日历下的日程列表。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar&version=v4&resource=calendar.event&method=list)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="tip">
- 当前身份由 Header Authorization 的 Token 类型决定。tenant_access_token 指应用身份，user_access_token 指用户身份。
- 当前身份必须对日历有 reader、writer 或 owner 权限，且仅支持获取 primary、shared 和 resource 类型的日历的日程列表，暂不支持 google、exchange 类型的日历。你可以调用[查询日历信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/get)接口，获取当前身份对该日历的访问权限以及日历类型信息。
- page_token 请求参数分页用于拉取存量数据，sync_token 请求参数用于增量同步变更数据。目前仅当传入 anchor_time 时，会返回 page_token。
- 为了确保你在调用接口时日程同步数据的一致性，当你在使用 sync_token 请求参数时，不能同时传入 start_time 和 end_time，否则可能造成日程数据缺失。
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
      <md-td>https://open.feishu.cn/open-apis/calendar/v4/calendars/:calendar_id/events</md-td>
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
    <md-tr>
      <md-th>
            字段权限要求
      </md-th>
      <md-td>
        <md-alert type="tip" icon="none">
        该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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

**示例值**："feishu.cn_xxxxxxxxxx@group.calendar.feishu.cn"
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
	<md-text type="field-name" >page_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	一次请求要求返回的最大日程数量。实际返回的日程数量可能小于该值，也可能为空，可以根据响应体里的has_more字段来判断是否还有更多日程。

**示例值**：50

**默认值**：`500`

**数据校验规则**：

- 取值范围：`50` ～ `1000`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >anchor_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	时间锚点，Unix 时间戳（秒）。anchor_time 用于设置一个时间点，以便直接拉取该时间点之后的日程数据，从而避免拉取全量日程数据。可使用 page_token 或 sync_token 进行分页或增量拉取 anchor_time 之后的所有日程数据。

**使用说明**：

- 对于单次日程，会获取到 **日程结束时间 >= anchor_time** 的日程信息。
- 对于重复性日程，目前设置 anchor_time 后均会获取到，包括在 anchor_time 之前的已结束的历史重复性日程。
- 对于例外日程，会获取到 **original_time >= anchor_time** 以及 **日程结束时间 >= anchor_time** 的日程信息，其中 original_time 从例外日程 ID 中获取，ID 结构为 `{uid}_{original_time}`。

**注意**：该参数不可与 start_time 和 end_time 一起使用。

**默认值**：空

**示例值**：1609430400
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

**示例值**：ListCalendarsPageToken_1632452910_1632539310
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >sync_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	增量同步标记，第一次请求不填。当分页查询结束（page_token 返回值为空）时，接口会返回 sync_token 字段，下次调用可使用该 sync_token 增量获取日历变更数据。

**默认值**：空

**示例值**：ListCalendarsSyncToken_1632452910
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	时间区间的开始时间， Unix 时间戳（秒），与end_time搭配使用，用于拉取指定时间区间内的日程数据.

**注意**：

- 该方式只能一次性返回数据，无法进行分页。一次性返回的数据大小受page_size限制，超过限制的数据将被截断。
- 在使用start_time和end_time时，不能与page_token或sync_token一起使用。
- 在使用start_time和end_time时，不能与anchor_time一起使用。

**默认值**：空

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
	否
	</md-dt-td>
	<md-dt-td>
	时间区间的结束时间， Unix 时间戳（秒）。与start_time搭配使用，用于拉取指定时间区间内的日程数据.

**注意**：

- 该方式只能一次性返回数据，无法进行分页。一次性返回的数据大小受page_size限制，超过限制的数据将被截断。
- 在使用start_time和end_time时不能与page_token或sync_token一起使用。
- 在使用start_time和end_time时，不能与anchor_time一起使用。

**默认值**：空

**示例值**：1631777271
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID 类型

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	<md-text type="field-name" >has_more</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否还有更多项
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
	<md-text type="field-name" >sync_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	增量同步标记。当 has_more 为 false 时，会同步返回新的 sync_token，下次请求需要带上 sync_token 增量获取日历变更数据。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >calendar.event\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	日程列表，当返回为空时，请根据has_more的值判断是否还有更多数据。
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
	日程 ID。后续可通过该 ID 查询、更新或删除日程信息。更多信息可参见[日程 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/introduction)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >organizer_calendar_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程组织者的日历 ID。关于日历 ID 可参见[日历 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/introduction)。
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
	日程标题。
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
	<md-text type="field-name" >vchat</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >vchat</md-text>
	</md-dt-td>
	<md-dt-td>
	视频会议信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >vc_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	视频会议类型，可以为空，表示在首次添加日程参与人时，会自动生成飞书视频会议 URL。

**可选值有**：
<md-enum>
<md-enum-item key="vc" >飞书视频会议。取该类型时，vchat 内的其他字段无效。</md-enum-item>
<md-enum-item key="third_party" >第三方链接视频会议。取该类型时，vchat 内仅生效 icon_type、description、meeting_url 字段。</md-enum-item>
<md-enum-item key="no_meeting" >无视频会议。取该类型时，vchat 内的其他字段无效。</md-enum-item>
<md-enum-item key="lark_live" >飞书直播，只读参数。</md-enum-item>
<md-enum-item key="unknown" >未知类型，用于兼容的只读参数。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >icon_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	第三方视频会议 icon 类型，可以为空，表示展示默认 icon。

**可选值有**：
<md-enum>
<md-enum-item key="vc" >飞书视频会议 icon</md-enum-item>
<md-enum-item key="live" >直播视频会议 icon</md-enum-item>
<md-enum-item key="default" >默认 icon</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	第三方视频会议文案。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >meeting_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	视频会议 URL。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >visibility</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程公开范围。仅新建日程时对所有参与人生效，之后修改该属性仅对当前身份生效。

**可选值有**：
<md-enum>
<md-enum-item key="default" >默认权限，跟随日历权限，即默认仅向他人显示是否忙碌</md-enum-item>
<md-enum-item key="public" >公开，显示日程详情</md-enum-item>
<md-enum-item key="private" >私密，仅自己可见详情</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >attendee_ability</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	参与人权限。

**可选值有**：
<md-enum>
<md-enum-item key="none" >无法编辑日程、无法邀请其它参与人、无法查看参与人列表</md-enum-item>
<md-enum-item key="can_see_others" >无法编辑日程、无法邀请其它参与人、可以查看参与人列表</md-enum-item>
<md-enum-item key="can_invite_others" >无法编辑日程、可以邀请其它参与人、可以查看参与人列表</md-enum-item>
<md-enum-item key="can_modify_event" >可以编辑日程、可以邀请其它参与人、可以查看参与人列表</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >free_busy_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程占用的忙闲状态。仅新建日程时对所有参与人生效，之后修改该属性仅对当前身份生效。

**可选值有**：
<md-enum>
<md-enum-item key="busy" >忙碌</md-enum-item>
<md-enum-item key="free" >空闲</md-enum-item>
</md-enum>
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


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	日程颜色，由颜色 RGB 值的 int32 表示。

**说明**：
- 仅对当前身份生效。
- 取值为 0 或 -1 时，表示默认跟随日历颜色。
- 客户端展示时会映射到色板上最接近的一种颜色。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >reminders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	日程提醒列表。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >minutes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	日程提醒时间的偏移量。该参数仅对当前身份生效。

- 正数时表示在日程开始前 X 分钟提醒。
- 负数时表示在日程开始后 X 分钟提醒。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >recurrence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	重复日程的重复性规则，规则格式可参见 [rfc5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10)。
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
	日程是否是一个重复日程的例外日程。了解例外日程，可参见[例外日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/introduction#71c5ec78)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >recurring_event_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	例外日程对应的原重复日程的 event_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程的创建时间（秒级时间戳）。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >schemas</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	日程自定义信息，控制日程详情页的 UI 展示。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ui_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	UI 名称。可能值： 
- ForwardIcon：日程转发按钮 
- MeetingChatIcon：会议群聊按钮 
- MeetingMinutesIcon：会议纪要按钮 
- MeetingVideo：视频会议区域 
- RSVP：接受、拒绝、待定区域 
- Attendee: 参与者区域 
- OrganizerOrCreator：组织者或创建者区域
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ui_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	UI 项自定义状态。

**可选值有**：
<md-enum>
<md-enum-item key="hide" >隐藏显示</md-enum-item>
<md-enum-item key="readonly" >只读</md-enum-item>
<md-enum-item key="editable" >可编辑</md-enum-item>
<md-enum-item key="unknown" >未知 UI 项自定义状态，仅用于读取时兼容</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >app_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	按钮点击后跳转的链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >event_organizer</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >event_organizer</md-text>
	</md-dt-td>
	<md-dt-td>
	日程组织者信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程组织者 user ID。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >display_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日程组织者姓名。
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
	日程的 app_link，跳转到具体的某个日程。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >attachments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	日程附件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >file_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件大小
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
	附件名称
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
        "has_more": false,
        "page_token": "ListCalendarsPageToken_1632452910_1632539310",
        "sync_token": "ListCalendarsSyncToken_1632452910",
        "items": [
            {
                "event_id": "00592a0e-7edf-4678-bc9d-1b77383ef08e_0",
                "organizer_calendar_id": "feishu.cn_xxxxxxxxxx@group.calendar.feishu.cn",
                "summary": "日程标题",
                "description": "日程描述",
                "start_time": {
                    "date": "2018-09-01",
                    "timestamp": "1602504000",
                    "timezone": "Asia/Shanghai"
                },
                "end_time": {
                    "date": "2018-09-01",
                    "timestamp": "1602504000",
                    "timezone": "Asia/Shanghai"
                },
                "vchat": {
                    "vc_type": "third_party",
                    "icon_type": "vc",
                    "description": "发起视频会议",
                    "meeting_url": "https://example.com"
                },
                "visibility": "default",
                "attendee_ability": "can_see_others",
                "free_busy_status": "busy",
                "location": {
                    "name": "地点名称",
                    "address": "地点地址",
                    "latitude": 1.100000023841858,
                    "longitude": 2.200000047683716
                },
                "color": -1,
                "reminders": [
                    {
                        "minutes": 5
                    }
                ],
                "recurrence": "FREQ=DAILY;INTERVAL=1",
                "status": "confirmed",
                "is_exception": false,
                "recurring_event_id": "1cd45aaa-fa70-4195-80b7-c93b2e208f45",
                "create_time": "1602504000",
                "schemas": [
                    {
                        "ui_name": "ForwardIcon",
                        "ui_status": "hide",
                        "app_link": "https://applink.feishu.cn/client/calendar/event/detail?calendarId=xxxxxx&key=xxxxxx&originalTime=xxxxxx&startTime=xxxxxx"
                    }
                ],
                "event_organizer": {
                    "user_id": "ou_xxxxxx",
                    "display_name": "孙二二"
                },
                "app_link": "https://applink.larkoffice.com/client/calendar/event/detail?calendarId=7039673579105026066&key=aeac9c56-aeb1-4179-a21b-02f278f59048&originalTime=0&startTime=1700496000",
                "attachments": [
                    {
                        "file_token": "xAAAAA",
                        "file_size": "2345",
                        "name": "附件.jpeg"
                    }
                ]
            }
        ]
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
  <md-td>page_token 或 sync_token 已过期。你需要置空 token 参数值，然后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>190009</md-td>
  <md-td>sync token cannot be used with other request restrictions</md-td>
  <md-td>sync_token 不可与其他有冲突的参数一起使用。你需要参考 sync_token 参数描述修改为正确的参数配置。</md-td>
</md-tr>


<md-tr>
  <md-td>429</md-td>
  <md-td>190010</md-td>
  <md-td>current operation rate limited</md-td>
  <md-td>当前操作被限流，原因一般为公用资源并发抢占失败。你可以适当降低当前操作频率，然后重试。</md-td>
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


