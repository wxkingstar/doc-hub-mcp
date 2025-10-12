<!--
title: 更新日程
id: 6952888507003043867
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/patch
updatedAt: 1759029466000
source: https://open.feishu.cn/document/server-docs/calendar-v4/calendar-event/patch
-->
# 更新日程

以当前身份（应用或用户）更新指定日历上的一个日程，包括日程标题、描述、开始与结束时间、视频会议以及日程地点等信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar&version=v4&resource=calendar.event&method=patch)

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

</md-alert>
:::

## 前提条件

- 当前身份由 Header Authorization 的 Token 类型决定。tenant_access_token 指应用身份，user_access_token 指用户身份。如果使用应用身份调用该接口，则需要确保应用开启了[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 当前身份必须对日历有 writer 或 owner 权限，并且日历的类型只能为 primary 或 shared。你可以调用[查询日历信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/get)接口，获取日历类型以及当前身份对该日历的访问权限。

## 使用限制

- 当前身份为日程组织者时，可修改该接口内的所有可编辑字段。
- 当前身份为日程参与者时，仅可编辑部分字段（包括 visibility、free_busy_status、color、reminders）。
- 重复日程如果存在例外日程，则可以通过该接口更新例外日程。如果重复日程没有例外日程，则无法通过该接口更新重复日程中的某一个日程。

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
      <md-td>https://open.feishu.cn/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
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
            <md-perm name="calendar:calendar.event:update" desc="更新日程" support_app_types="custom,isv" tags="">更新日程</md-perm>
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
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

#### 扩展请求头
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
      <md-td>Locale</md-td>
      <md-td>string</md-td>
      <md-td>否</md-td>
      <md-td>
请求的语言类型。目前支持的语言类型：
- zh_cn：中文
- en_us：英文
- ja_jp：日文

**默认值**: zh_cn
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
	日程所在的日历 ID。ID 获取方式：

- [创建共享日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/create)时，接口会返回日历 ID。
- 调用[查询主日历信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/primary)、[查询日历列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/list)或者[搜索日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/search)接口，获取所需的日历 ID。
- 

**示例值**："feishu.cn_xxxxxxxxxx@group.calendar.feishu.cn"
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
	日程 ID。ID 获取方式：

- [创建日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/create)时，接口会返回日程 ID。
- 调用[获取日程列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list)或者[搜索日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/search)接口，获取所需的日程 ID。

**示例值**："00592a0e-7edf-4678-bc9d-1b77383ef08e_0"
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



### 请求体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >summary</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程标题。

**默认值**：空，表示不更新该字段

**示例值**："团队周会"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程描述。

**注意**：目前 API 方式不支持编辑富文本描述。如果日程描述通过客户端编辑为富文本内容，则使用 API 更新描述会导致富文本格式丢失。

**默认值**：空，表示不更新该字段

**示例值**："讨论项目进展"

**数据校验规则**：

- 最大长度：`40960` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >need_notification</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	更新日程时，是否给日程参与人发送 Bot 通知。

**默认值**：空，表示不更新该字段

**可选值有**：
- true：发送通知
- false：不发送通知

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >time_info</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程开始时间。需要与end_time同时有值才会生效。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	开始时间，仅全天日程使用该字段，[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 格式，例如，2018-09-01。

**注意**：该参数不能与 `timestamp` 同时指定。

**示例值**："2018-09-01"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >timestamp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	秒级时间戳，用于设置具体的开始时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。

**注意**：该参数不能与 `date` 同时指定。

**示例值**："1602504000"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >timezone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	时区。使用 IANA Time Zone Database 标准，例如 Asia/Shanghai。

- 全天日程时区固定为UTC +0
- 非全天日程时区默认为 Asia/Shanghai

**示例值**："Asia/Shanghai"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >time_info</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程结束时间。需要与start_time同时有值才会生效。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	结束时间，仅全天日程使用该字段，[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 格式，例如，2018-09-01。

**注意**：该参数不能与 `timestamp` 同时指定。

**示例值**："2018-09-01"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >timestamp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	秒级时间戳，用于设置具体的结束时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。

**注意**：该参数不能与 `date` 同时指定。

**示例值**："1602504000"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >timezone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	时区。使用 IANA Time Zone Database 标准，例如 Asia/Shanghai。

- 全天日程时区固定为UTC +0
- 非全天日程时区默认为 Asia/Shanghai

**示例值**："Asia/Shanghai"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >vchat</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >vchat</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	视频会议信息。不传值则表示不更新该字段。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >vc_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	视频会议类型。如果无需视频会议，则必须传入 `no_meeting`。

**示例值**："third_party"

**可选值有**：
<md-enum>
<md-enum-item key="vc" >飞书视频会议。取该类型时，vchat 内的其他字段均无效。</md-enum-item>
<md-enum-item key="third_party" >第三方链接视频会议。取该类型时，仅生效 vchat 内的 icon_type、description、meeting_url 字段。</md-enum-item>
<md-enum-item key="no_meeting" >无视频会议。取该类型时，vchat 内的其他字段均无效。</md-enum-item>
<md-enum-item key="lark_live" >飞书直播。该值用于客户端，不支持通过 API 调用，只读。</md-enum-item>
<md-enum-item key="unknown" >未知类型。该值用于客户端做兼容使用，不支持通过 API 调用，只读。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >icon_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	第三方视频会议的 icon 类型。

**默认值**：空，表示不更新该字段

**示例值**："vc"

**可选值有**：
<md-enum>
<md-enum-item key="vc" >飞书视频会议 icon</md-enum-item>
<md-enum-item key="live" >直播视频会议 icon</md-enum-item>
<md-enum-item key="default" >默认 icon</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	第三方视频会议文案。

**默认值**：空，表示不更新该字段

**示例值**："发起视频会议"

**数据校验规则**：

- 长度范围：`0` ～ `500` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >meeting_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	视频会议 URL。

**默认值**：空，表示不更新该字段

**示例值**："https://example.com"

**数据校验规则**：

- 长度范围：`1` ～ `2000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >meeting_settings</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >meeting_settings</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	飞书视频会议（VC）的会前设置，需满足以下全部条件：
- 当 `vc_type` 为 `vc` 时生效。
- 需要有日程的编辑权限。

不传值则表示不更新该字段。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >owner_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	设置会议 owner 的用户 ID，ID 类型需和 user_id_type 保持一致。

该参数需满足以下全部条件才会生效：
-  应用身份（tenant_access_token）请求，且在应用日历上操作日程。
- 首次将日程设置为 VC 会议时，才能设置owner。
- owner 不能为非用户身份。
- owner 不能为外部租户用户身份。

**示例值**："ou_7d8a6e6df7621556ce0d21922b676706ccs"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >join_meeting_permission</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	设置入会范围。

**示例值**："only_organization_employees"

**可选值有**：
<md-enum>
<md-enum-item key="anyone_can_join" >所有人可以加入会议</md-enum-item>
<md-enum-item key="only_organization_employees" >仅企业内用户可以加入会议</md-enum-item>
<md-enum-item key="only_event_attendees" >仅日程参与者可以加入会议</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >assign_hosts</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	通过用户 ID 指定主持人，ID 类型需和 user_id
_type 保持一致。

**注意**：
- 仅日程组织者可以指定主持人。
- 主持人不能是非用户身份。
- 主持人不能是外部租户用户身份。
- 在应用日历上操作日程时，不允许指定主持人。

**示例值**：["ou_7d8a6e6df7621556ce0d21922b676706ccs"]

**数据校验规则**：

- 最大长度：`10`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >auto_record</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否开启自动录制。

**可选值有**：
- true：开启
- false：不开启

**默认值**：空，表示不更新该字段

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_lobby</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否开启等候室。

**可选值有**：
- true：开启
- false：不开启

**默认值**：空，表示不更新该字段

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_attendees_start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否允许日程参与者发起会议。

**注意**：应用日历上操作日程时，该字段必须为 true，否则没有人能发起会议。

**可选值有**：
- true：允许
- false：不允许

**默认值**：空，表示不更新该字段

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >visibility</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程公开范围。

**注意**：更新日程时如果修改了该参数值，则仅对当前身份生效。

**默认值**：空，表示不更新该字段

**示例值**："default"

**可选值有**：
<md-enum>
<md-enum-item key="default" >默认权限，即跟随日历权限，默认仅向他人显示是否忙碌</md-enum-item>
<md-enum-item key="public" >公开，显示日程详情</md-enum-item>
<md-enum-item key="private" >私密，仅自己可见详情</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >attendee_ability</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	参与人权限。

**默认值**：空，表示不更新该字段

**示例值**："can_see_others"

**可选值有**：
<md-enum>
<md-enum-item key="none" >无法编辑日程、无法邀请其他参与人、无法查看参与人列表</md-enum-item>
<md-enum-item key="can_see_others" >无法编辑日程、无法邀请其他参与人、可以查看参与人列表</md-enum-item>
<md-enum-item key="can_invite_others" >无法编辑日程、可以邀请其他参与人、可以查看参与人列表</md-enum-item>
<md-enum-item key="can_modify_event" >可以编辑日程、可以邀请其他参与人、可以查看参与人列表</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >free_busy_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程占用的忙闲状态，新建日程默认为 `busy`。

**注意**：更新日程时如果修改了该参数值，则仅对当前身份生效。

**默认值**：空，表示不更新该字段

**示例值**："busy"

**可选值有**：
<md-enum>
<md-enum-item key="busy" >忙碌</md-enum-item>
<md-enum-item key="free" >空闲</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >location</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >event_location</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程地点。不传值则表示不更新该字段。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	地点名称。

**示例值**："301会议室"

**数据校验规则**：

- 长度范围：`1` ～ `512` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >address</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	地点地址。

**示例值**："公司大楼三层"

**数据校验规则**：

- 长度范围：`1` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >latitude</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	地点坐标纬度信息。
- 对于国内的地点，采用 GCJ-02 标准。
- 对于海外的地点，采用 WGS84 标准。

**示例值**：1.100000023841858
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >longitude</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >number(float)</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	地点坐标经度信息。
- 对于国内的地点，采用 GCJ-02 标准。
- 对于海外的地点，采用 WGS84 标准。

**示例值**：2.200000047683716
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >color</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程颜色，取值通过颜色 RGB 值的 int32 表示。

**注意**：
- 该参数仅对当前身份生效。
- 客户端展示时会映射到色板上最接近的一种颜色。
- 取值为 0 或 -1 时，默认跟随日历颜色。

**默认值**：空，表示不更新该字段

**示例值**：-1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >reminders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程提醒列表。不传值则表示不更新该字段。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >minutes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程提醒时间的偏移量。
- 正数时表示在日程开始前 X 分钟提醒。
- 负数时表示在日程开始后 X 分钟提醒。

**注意**：更新日程时修改该字段仅对当前身份生效。

**示例值**：5

**数据校验规则**：

- 取值范围：`-20160` ～ `20160`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >recurrence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	重复日程的重复性规则，规则设置方式参考[rfc5545](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10)。

**注意**：
- COUNT 和 UNTIL 不支持同时出现。
- 预定会议室重复日程长度不得超过两年。

**默认值**：空，表示不更新该字段

**示例值**："FREQ=DAILY;INTERVAL=1"

**数据校验规则**：

- 最大长度：`2000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >schemas</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >schema\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程自定义信息，控制日程详情页的 UI 展示。schemas字段不传值则表示不更新该字段。

**注意：**
1. schemas传值的情况下，每次都是覆盖更新，即用传入的列表去更新原来的列表。
2. 可以使用[]空列表来清空schemas原来的数据。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >ui_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	UI 名称。

**可选值有**： 
- ForwardIcon：日程转发按钮 
- MeetingChatIcon：会议群聊按钮 
- MeetingMinutesIcon：会议纪要按钮 
- MeetingVideo：视频会议区域 
- RSVP：接受、拒绝、待定区域 
- Attendee：参与者区域 
- OrganizerOrCreator：组织者或创建者区域

**示例值**："ForwardIcon"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >ui_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	UI 项的状态。目前只支持选择 `hide`。

**示例值**："hide"

**可选值有**：
<md-enum>
<md-enum-item key="hide" >隐藏显示</md-enum-item>
<md-enum-item key="readonly" >只读</md-enum-item>
<md-enum-item key="editable" >可编辑</md-enum-item>
<md-enum-item key="unknown" >未知 UI 项自定义状态。该参数仅用于读取时兼容，不支持作为请求参数值传入</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >app_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	按钮点击后跳转的链接。

**注意**：兼容性参数，只读，因此暂不支持传入该请求参数。

**示例值**："https://applink.feishu.cn/client/calendar/event/detail?calendarId=xxxxxx&key=xxxxxx&originalTime=xxxxxx&startTime=xxxxxx"

**数据校验规则**：

- 最大长度：`2000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >attachments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程附件。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	附件 Token。调用[上传素材](https://open.larkoffice.com/document/server-docs/docs/drive-v1/media/upload_all)接口，获取附件的 file_token。在调用上传素材接口时需要注意：

- `parent_type` 需传入固定值 `calender`。
- `parent_node` 需传入与当前接口一致的日历 ID。

**附件校验规则**：附件总大小不超过 25 MB。

**示例值**："boxcnrHpsg1QDqXAAAyachaxxxx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >is_deleted</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否删除附件。

**可选值有**： 
- true：删除
- false：不删除

**默认值**：false

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >event_check_in</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >event_check_in</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程签到设置，为空则不进行日程签到设置。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >enable_check_in</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否启用日程签到。

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >check_in_start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >check_in_time</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程签到开始时间。

**注意**：签到开始时间不能大于或者等于签到结束时间。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >time_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	偏移量(分钟)相对于的日程时间节点类型。

**示例值**："before_event_start"

**可选值有**：
<md-enum>
<md-enum-item key="before_event_start" >日程开始前</md-enum-item>
<md-enum-item key="after_event_start" >日程开始后</md-enum-item>
<md-enum-item key="after_event_end" >日程结束后</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >duration</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	相对于日程开始或者结束的偏移量(分钟)。
- 目前取值只能为列表[0, 5, 15, 30, 60]之一，0表示立即开始。
- 当time_type为before_event_start，duration不能取0。

**示例值**：15

**数据校验规则**：

- 取值范围：`0` ～ `60`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >check_in_end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >check_in_time</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程签到结束时间。

**注意**：签到开始时间不能大于或者等于签到结束时间。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >time_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	偏移量(分钟)相对于的日程时间节点类型。

**示例值**："after_event_end"

**可选值有**：
<md-enum>
<md-enum-item key="before_event_start" >日程开始前</md-enum-item>
<md-enum-item key="after_event_start" >日程开始后</md-enum-item>
<md-enum-item key="after_event_end" >日程结束后</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >duration</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	相对于日程开始或者结束的偏移量(分钟)。
- 目前取值只能为列表[0, 5, 15, 30, 60]之一，0表示立即开始。
- 当time_type为before_event_start，duration不能取0。

**示例值**：0

**数据校验规则**：

- 取值范围：`0` ～ `60`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >need_notify_attendees</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	签到开始时是否自动发送签到通知给参与者

**示例值**：false

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "summary": "团队周会",
    "description": "讨论项目进展",
    "need_notification": false,
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
        "meeting_url": "https://example.com",
        "meeting_settings": {
            "owner_id": "ou_7d8a6e6df7621556ce0d21922b676706ccs",
            "join_meeting_permission": "only_organization_employees",
            "assign_hosts": [
                "ou_7d8a6e6df7621556ce0d21922b676706ccs"
            ],
            "auto_record": false,
            "open_lobby": true,
            "allow_attendees_start": true
        }
    },
    "visibility": "default",
    "attendee_ability": "can_see_others",
    "free_busy_status": "busy",
    "location": {
        "name": "301会议室",
        "address": "公司大楼三层",
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
    "schemas": [
        {
            "ui_name": "ForwardIcon",
            "ui_status": "hide",
            "app_link": "https://applink.feishu.cn/client/calendar/event/detail?calendarId=xxxxxx&key=xxxxxx&originalTime=xxxxxx&startTime=xxxxxx"
        }
    ],
    "attachments": [
        {
            "file_token": "boxcnrHpsg1QDqXAAAyachaxxxx",
            "is_deleted": true
        }
    ],
    "event_check_in": {
        "enable_check_in": true,
        "check_in_start_time": {
            "time_type": "before_event_start",
            "duration": 15
        },
        "check_in_end_time": {
            "time_type": "after_event_end",
            "duration": 0
        },
        "need_notify_attendees": false
    }
}
</md-code-json>
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
	<md-text type="field-name" >event</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >calendar.event</md-text>
	</md-dt-td>
	<md-dt-td>
	更新后的日程实体信息。
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
	日程 ID。后续可通过该 ID 查询、更新或删除日程信息。更多信息参见[日程 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/introduction)。
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
	该日程组织者的日历 ID。关于日历 ID 的说明可参见[日历 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/introduction)。
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
<md-enum-item key="vc" >飞书视频会议。</md-enum-item>
<md-enum-item key="third_party" >第三方链接视频会议。</md-enum-item>
<md-enum-item key="no_meeting" >无视频会议。</md-enum-item>
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
<md-enum-item key="vc" >飞书视频会议 icon。</md-enum-item>
<md-enum-item key="live" >直播视频会议 icon。</md-enum-item>
<md-enum-item key="default" >默认 icon。</md-enum-item>
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


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >meeting_settings</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >meeting_settings</md-text>
	</md-dt-td>
	<md-dt-td>
	飞书视频会议（VC）的会前设置。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >owner_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	会议 owner 的用户 ID 信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >join_meeting_permission</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	设置入会范围。

**可选值有**：
<md-enum>
<md-enum-item key="anyone_can_join" >所有人可以加入会议</md-enum-item>
<md-enum-item key="only_organization_employees" >仅企业内用户可以加入会议</md-enum-item>
<md-enum-item key="only_event_attendees" >仅日程参与者可以加入会议</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >password</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	设置会议密码，仅支持 4-9 位数字
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >assign_hosts</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	主持人的用户 ID 信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >auto_record</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否开启自动录制。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >open_lobby</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否开启等候室。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >allow_attendees_start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否允许日程参与者发起会议。
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
	日程公开范围，仅对当前身份生效。

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
<md-enum-item key="none" >无法编辑日程、无法邀请其他参与人、无法查看参与人列表</md-enum-item>
<md-enum-item key="can_see_others" >无法编辑日程、无法邀请其他参与人、可以查看参与人列表</md-enum-item>
<md-enum-item key="can_invite_others" >无法编辑日程、可以邀请其他参与人、可以查看参与人列表</md-enum-item>
<md-enum-item key="can_modify_event" >可以编辑日程、可以邀请其他参与人、可以查看参与人列表</md-enum-item>
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
	日程占用的忙闲状态，仅对当前身份生效。

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
	UI项自定义状态。

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
	日程的 app_link，用于跳转到具体的某个日程。
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
	<md-text type="field-name" >is_deleted</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否删除附件
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


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >event_check_in</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >event_check_in</md-text>
	</md-dt-td>
	<md-dt-td>
	日程签到设置。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >enable_check_in</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否启用日程签到。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_in_start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >check_in_time</md-text>
	</md-dt-td>
	<md-dt-td>
	日程签到开始时间。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >time_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	偏移量(分钟)相对于的日程时间节点类型。

**可选值有**：
<md-enum>
<md-enum-item key="before_event_start" >日程开始前</md-enum-item>
<md-enum-item key="after_event_start" >日程开始后</md-enum-item>
<md-enum-item key="after_event_end" >日程结束后</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >duration</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	相对于日程开始或者结束的偏移量(分钟)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_in_end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >check_in_time</md-text>
	</md-dt-td>
	<md-dt-td>
	日程签到结束时间。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >time_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	偏移量(分钟)相对于的日程时间节点类型。

**可选值有**：
<md-enum>
<md-enum-item key="before_event_start" >日程开始前</md-enum-item>
<md-enum-item key="after_event_start" >日程开始后</md-enum-item>
<md-enum-item key="after_event_end" >日程结束后</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >duration</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	相对于日程开始或者结束的偏移量(分钟)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >need_notify_attendees</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	签到开始时是否自动发送签到通知给参与者
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
        "event": {
            "event_id": "00592a0e-7edf-4678-bc9d-1b77383ef08e_0",
            "organizer_calendar_id": "feishu.cn_xxxxxxxxxx@group.calendar.feishu.cn",
            "summary": "团队周会",
            "description": "讨论项目进展",
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
                "meeting_url": "https://example.com",
                "meeting_settings": {
                    "owner_id": "ou_7d8a6e6df7621556ce0d21922b676706ccs",
                    "join_meeting_permission": "only_organization_employees",
                    "password": "971024",
                    "assign_hosts": [
                        "ou_7d8a6e6df7621556ce0d21922b676706ccs"
                    ],
                    "auto_record": false,
                    "open_lobby": true,
                    "allow_attendees_start": true
                }
            },
            "visibility": "default",
            "attendee_ability": "can_see_others",
            "free_busy_status": "busy",
            "location": {
                "name": "301会议室",
                "address": "公司大楼三层",
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
            "app_link": "https://applink.feishu.cn/client/calendar/event/detail?calendarId=xxxxxx&key=xxxxxx&originalTime=xxxxxx&startTime=xxxxxx",
            "attachments": [
                {
                    "file_token": "boxcnrHpsg1QDqXAAAyachaxxxx",
                    "file_size": "2345",
                    "is_deleted": false,
                    "name": "附件.jpeg"
                }
            ],
            "event_check_in": {
                "enable_check_in": true,
                "check_in_start_time": {
                    "time_type": "before_event_start",
                    "duration": 15
                },
                "check_in_end_time": {
                    "time_type": "after_event_end",
                    "duration": 0
                },
                "need_notify_attendees": false
            }
        }
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
  <md-td>400</md-td>
  <md-td>190013</md-td>
  <md-td>content being saved is at risk</md-td>
  <md-td>当前保存的内容被风险控制，请检查传入的内容是否合法。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>190014</md-td>
  <md-td>invalid request parameters. check details for more info.</md-td>
  <md-td>无效的请求参数。请从details字段查看详细原因。</md-td>
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
  <md-td>400</md-td>
  <md-td>193101</md-td>
  <md-td>organizer is bot, can not set assign_hosts, and allow_attendees_start must be true</md-td>
  <md-td>组织者是 Bot，无法指定主持人，并且必须设置参与者可以发起会议（allow_attendees_start 取值为 true）。你需要检查并设置正确的组织者相关参数值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>193102</md-td>
  <md-td>only organizer(not bot) can set assign_hosts</md-td>
  <md-td>只有日程组织者可以指定主持人，且组织者不能是应用日历。你需要参考 assign_hosts 参数描述设置正确的参数值。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>195100</md-td>
  <md-td>user is dismiss or not exist in the tenant</md-td>
  <md-td>当前身份或指定用户已经离职，或者不在该租户内。请检查并改为正确的身份来调用接口。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>195112</md-td>
  <md-td>invalid password</md-td>
  <md-td>会议密码无效。会议密码仅支持 4 ~ 9 位的数字。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>195113</md-td>
  <md-td>only organizer can set password</md-td>
  <md-td>仅日程组织者可以设置会议密码。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>193105</md-td>
  <md-td>invalid attachment file token</md-td>
  <md-td>file_token 无效。你需要参考接口文档的 file_token 参数描述，传入正确的参数值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>193106</md-td>
  <md-td>the total size of attachment exceed limit</md-td>
  <md-td>附件大小超过 25 MB。通过 file_token 参数传入的附件大小不能超过25 MB。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>193107</md-td>
  <md-td>no permission to access attachment file token</md-td>
  <md-td>无权访问附件 Token。请检查传入的 file_token 是否正确。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


