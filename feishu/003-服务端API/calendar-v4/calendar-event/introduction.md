<!--
title: 日程资源介绍
id: 7062619112195342340
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/introduction
updatedAt: 1712716165000
source: https://open.feishu.cn/document/server-docs/calendar-v4/calendar-event/introduction
-->
#  日程资源介绍

日程是存在于日历内的实例资源，你可以通过关联特定日期或时间段、参与人、地点等规则，构建指定主题内容的工作安排。例如，个人工作提醒、团队会议沟通、活动直播等类型的日程。你可以通过日程资源 API 构建与管理日程。本文将会介绍用于定义日程的详细配置的属性信息。

##  字段说明

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >event_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程 ID，只读字段，是日程实体的唯一标志。

获取方式如下，获取日程 ID 后，可通过日程 ID 查询、更新或删除日程。
- [创建日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/create)
- [获取日程列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list)
- [搜索日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/search)
          
**示例值**："efa67a98-06a8-4df5-8559-746c8f4477ef_0"
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >organizer_calendar_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程组织者的日历 ID，只读字段。 <br>

- 关于 `calendar_id`，可参见 [日历资源概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/introduction)。
- 关于日程组织者，可参见本文的 **日程组织者** 章节。

          
**示例值**："feishu.cn_ZefWrFi6e12ds@group.calendar.feishu.cn"<br>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >summary</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程标题。<br>
          
**示例值**："Daily Meeting"<br>
          
**数据校验规则**：<br>
- **最大长度**：`1000` 字符
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >description</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程描述。<br>
          
**示例值**："Discuss today's work schedule."<br>
          
**数据校验规则**：<br>
- **最大长度**：`40960` 字符
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >start_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >time_info</md-text>
        </md-td>
        <md-td>
日程开始时间的相关信息。对于重复日程，表示重复日程内首个日程 instance 的开始时间。<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟date</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
全天日程的开始日期。与 `timestamp` 字段互斥，当此字段有值时，表示当前日程是全天日程。<br>
          
**格式要求**：需满足 [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339) 中的 `date` 格式。<br>
          
**示例值**："2018-09-01"<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟timestamp</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程开始时间的时间戳，用于指定具体的日程开始时间。与 `date` 字段互斥。例如，"1602504000" 表示 2020-10-12T12:00:00+00:00。 
          
**示例值**："1602504000"<br>

**数据校验规则**：<br>
- **数据范围**：`1` ~ `16725225600`<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟timezone</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程开始时间的时区。
          
- 全天日程时区固定为 `UTC`，即 UTC +0
- 非全天日程时区默认为 `Asia/Shanghai`

**格式要求**：需满足 [IANA Time Zone Database](https://www.iana.org/time-zones) 中的时区定义。
          
**示例值**："Asia/Shanghai"<br>

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >end_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >time_info</md-text>
        </md-td>
        <md-td>
日程结束时间的相关信息。对于重复日程，表示重复日程内首个日程 instance 的结束时间。<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟date</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
全天日程的结束日期。与 `timestamp` 字段互斥，当此字段有值时，表示当前日程是全天日程。<br>

**格式要求**：需满足 [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339) 中的 `date` 格式。          
          
**示例值**："2018-09-01"<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟timestamp</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程结束时间的时间戳，用于指定具体的日程结束时间。与 `date` 字段互斥。例如，"1602504000" 表示 2020-10-12T12:00:00+00:00。
          
**示例值**："1602504000"<br>

**数据校验规则**：<br>
- **数据范围**：`1` ~ `16725225600`<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟timezone</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程结束时间的时区。
          
- 全天日程时区固定为 `UTC`，即 UTC +0
- 非全天日程时区默认为 `Asia/Shanghai`

**格式要求**：需满足 [IANA Time Zone Database](https://www.iana.org/time-zones) 中的时区定义。
          
**示例值**："Asia/Shanghai"<br>

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >vchat</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >vchat</md-text>
        </md-td>
        <md-td>
日程绑定的视频会议信息。<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟vc_type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
视频会议类型。<br>
          
**可选值有**：
- `vc`：飞书视频会议
- `third_party`：第三方会议链接
- `no_meeting`：无视频会议
- `lark_live`：飞书直播，只读字段，该类型视频会议只能由飞书系统生成。

**示例值**："vc"<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟meeting_url</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
视频会议的参会链接。<br>

- 当 `vc_type` 类型为 `vc`、`lark_live` 时，仅支持读取链接。<br>
- 当 `vc_type` 类型为 `third_party` 时，支持写入与读取链接。<br>

**示例值**："https://example.com"<br>
          
**数据校验规则**：<br>
- **长度范围**：`1` ~ `2000` 字符
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟icon_type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
当 `vc_type` 为 `third_party` 时，该字段定义飞书客户端展示的视频会议 Icon 类型。<br>
          
**可选值有**：
- `vc`：飞书视频会议 Icon
- `live`：飞书直播 Icon
- `default`：默认类型 Icon

**示例值**："vc"<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟description</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
当 `vc_type` 为 `third_party` 时，该字段定义飞书客户端展示的视频会议提醒文案。<br>

**示例值**："发起视频会议"<br>
          
**数据校验规则**：<br>
- **最大长度**：`500` 字符
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >visibility</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程详情的公开范围。<br>
          
**可选值有**：
- `default`：订阅该日程所在日历的用户，如果有权查看该日历中其他日程的详情，那么就能看到此日程的详情。
- `public`：订阅该日程所在日历的用户，都能查看此日程详情。
- `private`：订阅该日程所在日历的用户，无法查看此日程的详情，除非他们拥有该日历 `writer` 或 `owner` 级别的访问控制（ACL）。关于 ACL，请参考 [用户访问控制资源概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/introduction)。

**示例值**："default"<br>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >attendee_ability</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程参与人权限。<br> 

**可选值有**：
- `none`：日程参与人无法编辑日程、无法邀请其它参与人、无法查看参与人列表。
- `can_see_others`：日程参与人无法编辑日程、无法邀请其它参与人、可以查看参与人列表。
- `can_invite_others`：日程参与人无法编辑日程、可以邀请其它参与人、可以查看参与人列表。
- `can_modify_event`：日程参与人可以编辑日程、可以邀请其它参与人、可以查看参与人列表。
          
**示例值**："can_invite_others"<br>
          

        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >status</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
日程状态，只读字段。<br>


**可选值有**：
- `tentative`：日程暂未回应。
- `confirmed`：日程已确认。
- `cancelled`：日程已删除，当该日程是例外日程时，需要额外处理，可参考本文**重复日程**章节。

**示例值**："confirmed"<br>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >free_busy_status</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
当前身份下，日程所在日历上对应时间段的忙闲状态。相关 API 参见 [查询主日历日程忙闲信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/freebusy/list)。<br>

**可选值有**：
- `busy`：该日程对应的时间段在日历忙闲上标记为忙碌。
- `free`：该日程对应的时间段在日历忙闲上标记为空闲。

**示例值**："busy"<br>
          
**当前身份**：由请求 API 时的鉴权方式决定，详细说明参见[API 访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >location</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >event_location</md-text>
        </md-td>
        <md-td>
日程地点信息。<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟name</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
地点名称。<br>
          
**示例值**："东方明珠"<br>
          
**数据校验规则**：<br>
- **长度范围**：`1` ~ `512` 字符
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟address</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
地点地址。<br>
          
**示例值**：”普通市和平区世纪大道1号“<br>
          
**数据校验规则**：<br>
- **长度范围**：`1` ~ `255` 字符
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟latitude</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >float</md-text>
        </md-td>
        <md-td>
地点坐标纬度信息。国内地点采用 GCJ-02 标准，海外地点采用 WGS84 标准。<br>
          
**示例值**：31.239702224731445<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟longitude</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >float</md-text>
        </md-td>
        <md-td>
地点坐标经度信息。国内地点采用 GCJ-02 标准，海外地点采用 WGS84 标准。<br>
          
**示例值**：121.49971771240234<br>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >color</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>
        <md-td>
当前身份下的日程颜色信息，取值通过日程颜色 RGB 值的 int32 表示，其中，24~31 位为透明度、16~23 位为红、8~15 位为绿、0~7 位为蓝。例如，-11034625 表示 RGB 值 (87, 159, 255)。<br>

- 飞书客户端展示日程颜色时，会将该值映射到预设色板上最相近的颜色。<br>

- 当日程颜色值为 0 或 -1 时，日程颜色展示将跟随日历颜色。关于日历颜色，可参见[日历资源概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/introduction)。
          
**示例值**：-11034625<br>
          
**当前身份**：由请求 API 时的鉴权方式决定，详细说明参见 [API 访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)<br>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >reminders</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >reminder[]</md-text>
        </md-td>
        <md-td>
当前身份下，该日程的提醒列表。<br>
          
**当前身份**：由请求 API 时的鉴权方式决定，详细说明参见 [API 访问凭证概述](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟minutes</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>
        <md-td>
日程提醒时间的偏移量。例如，取值为 5 表示在日程开始前 5 分钟提醒；取值为 -5 表示在日程开始后 5 分钟。<br>
          
**示例值**：5<br>
          
**数据校验规则**：<br>
- **数据范围**：`-20160` ~ `20160`
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >recurrence</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
重复日程的重复性规则，使用 [RFC5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.8.5.3) 中的 `RRULE` 定义。非重复日程或例外日程的该字段为空。关于重复日程和例外日程，可参考下文 **重复日程** 章节。
          
**示例值**：“FREQ=DAILY;COUNT=10”<br>
          
**数据校验规则**：<br>
- **最大长度**：`2000` 字符
- **格式要求**：满足 [RFC5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.8.5.3) 中的 `RRULE` 定义；且 `COUNT` 和 `UNTIL` 不能同时出现
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >is_exception</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>
        <md-td>
该日程是否是一个重复日程的例外日程，只读字段。关于重复日程和例外日程，可参考下文 **重复日程** 章节。


**示例值**：true<br>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >recurring_event_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
当 `is_exception` 为 true 时有效，表示该例外日程关联的重复日程的 `event_id`。关于重复日程和例外日程，可参考下文 **重复日程** 章节。

**只读字段**<br>

**示例值**："f9b7f399-14d1-4614-a5b1-306295995d8f_0"<br>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >schemas</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >schema[]</md-text>
        </md-td>
        <md-td>
用于控制飞书客户端日程详情页部分 UI 的自定义信息。<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟ui_name</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
UI 名称，飞书客户端日程详情页按钮或区域的唯一标识。<br>

**可选值有**：
- `ForwardIcon`：日程转发按钮
- `MeetingChatIcon`：会议群聊按钮
- `MeetingMinutesIcon`：会议纪要按钮
- `MeetingVideo`：视频会议区域
- `RSVP`：接受/拒绝/待定区域
- `Attendee`：参与者区域
- `OrganizerOrCreator`：组织者/创建者区域

**示例值**："ForwardIcon"<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟ui_status</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
UI 自定义状态。<br>
          
**可选值有**：
- `hide`：隐藏显示

**示例值**："hide"<br>
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟app_link</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
当 `ui_name` 对应的 UI 为按钮时，该字段指定点击后跳转的链接，只读字段。
        </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::

###  数据示例
```json
{
    "event_id": "07e1c96d-c59a-4987-98a7-ed7938c32b70_0",
    "organizer_calendar_id": "feishu.cn_9c6UTwO7wkkY3F35l7wvxa@group.calendar.feishu.cn",
    "summary": "Daily Meeting",
    "description": "Discuss today's work schedule.",
    "start_time": {
        "timestamp": "1654041600",
        "timezone": "Asia/Shanghai"
    },
    "end_time": {
        "timestamp": "1654059600",
        "timezone": "Asia/Shanghai"
    },
    "vchat": {
        "description": "Example Third Party Vchat",
        "icon_type": "vc",
        "meeting_url": "https://example.com",
        "vc_type": "third_party"
    },
    "visibility": "default",
    "attendee_ability": "can_invite_others",
    "status": "confirmed",
    "free_busy_status": "busy",
    "location": {
        "address": "普通市和平区世纪大道1号",
        "latitude": 31.239702224731445,
        "longitude": 121.49971771240234,
        "name": "东方明珠"
    },
    "color": -1,
    "reminders": [
        {
            "minutes": 30
        }
    ],
    "recurrence": "",
    "is_exception": false
}
```



## 日程组织者
每个日程都有组织者，表示日程创建时所在的日历。例如：

- 应用使用 `tenant_access_token` 在主日历上创建了日程，那日程的组织者是应用的主日历。
- 应用使用某用户的 `user_access_token` 在主日历上创建了日程，那日程的组织者是用户的主日历。
- 如果日程被创建在共享日历上，那共享日历便是日程组织者。

日程组织者和对组织者日历有权限的用户，对日程有完整权限。

##  重复日程
重复日程会按指定的重复性规则发生多次，产生多个实例（instance），例如周会、日会等，这些日程 instance 通常具有相同的标题、描述、参与人等。

### 重复性规则
重复日程的时间由两部分数据来定义：
- 日程的 `start` 和 `end` 字段，定义重复日程每一次重复时的时间。
- 日程的 `recurrence` 字段，定义重复日程的规则。

日程的 `recurrence` 字段使用 [RFC5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.8.5.3) 中的 `RRULE` 定义，`RRULE` 一般由以下几个部分组成：
- `FREQ`：日程重复的频率，必填项。例如 `DAILY` 或 `WEEKLY`。
- `INTERVAL`：与 `FREQ` 配合，细化频率信息。例如 `FREQ=DAILY;INTERVAL=2` 表示每两天重复一次。
- `COUNT`：日程重复的次数。
- `UNTIL`：日程重复的最后时间。
- `BYDAY`：日程重复的特定日期，例如 `FREQ=WEEKLY;BYDAY=MO` 表示每周一重复。
:::note
`COUNT` 和 `UNTIL` 不能同时出现在 `RRULE` 中。
:::

### 例外日程

重复日程由多个不同时间的日程 instance 组成，当某个 instance 的信息被修改，与重复日程产生区别后，该 instance 被称为例外日程。例外日程可能有与原重复日程不同的标题、描述、开始时间、参与人等信息，例外日程也可以被单独删除。

当例外日程的 `status` 为 `cancelled` 时，表明该重复日程的此次 instance 被取消，不应该再展示给用户。应用应该把  `status` 为 `cancelled` 的例外日程与关联的重复日程绑定，避免产生错误的展示信息。

