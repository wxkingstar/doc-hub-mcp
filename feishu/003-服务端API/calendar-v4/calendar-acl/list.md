<!--
title: 获取访问控制列表
id: 6953067803433009153
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/list
updatedAt: 1721110937000
source: https://open.feishu.cn/document/server-docs/calendar-v4/calendar-acl/list
-->
# 获取访问控制列表

调用该接口以当前身份（应用或用户）获取指定日历的访问控制列表。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar&version=v4&resource=calendar.acl&method=list)

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
- 如果使用应用身份调用该接口，则需要确保应用开启了[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 当前身份需要有日历的 owner 权限，并且日历的类型只能为 primary 或 shared。你可以调用[查询日历信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/get)接口，获取日历类型以及当前身份对该日历的访问权限。
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
      <md-td>https://open.feishu.cn/open-apis/calendar/v4/calendars/:calendar_id/acls</md-td>
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
            <md-perm name="calendar:calendar.acl:read" desc="读取日历访问控制权限" support_app_types="custom,isv" tags="">读取日历访问控制权限</md-perm>
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
	日历 ID。

创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。
- [查询主日历信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/primary)
- [查询日历列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/list)
- [搜索日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/search)

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

**示例值**：xxx
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
	分页大小，即一次请求返回的最大条目数。

**注意**：最小值 10，即取值小于 10 时统一按 10 处理。

**示例值**：10

**默认值**：`20`

**数据校验规则**：

- 最大值：`50`
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
	<md-text type="field-name" >acls</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >calendar.acl\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	日历对应的访问控制列表。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >acl_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	访问控制 ID。该 ID 在单个日历实体内唯一，不同日历实体可能存在重复的访问控制 ID。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >role</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	对日历的访问权限。

**可选值有**：
<md-enum>
<md-enum-item key="unknown" >未知权限。</md-enum-item>
<md-enum-item key="free_busy_reader" >游客，只能看到忙碌、空闲信息。</md-enum-item>
<md-enum-item key="reader" >订阅者，可查看所有日程详情。</md-enum-item>
<md-enum-item key="writer" >编辑者，可创建及修改日程。</md-enum-item>
<md-enum-item key="owner" >管理员，可管理日历及共享设置。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >scope</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >acl_scope</md-text>
	</md-dt-td>
	<md-dt-td>
	权限生效范围。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	权限生效范围的类型。

**可选值有**：
<md-enum>
<md-enum-item key="user" >用户</md-enum-item>
</md-enum>
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
	用户 ID，更多介绍可参见[用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
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
        "acls": [
            {
                "acl_id": "user_xxxxxx",
                "role": "writer",
                "scope": {
                    "type": "user",
                    "user_id": "ou_xxxxxx"
                }
            }
        ],
        "has_more": false,
        "page_token": "xxx"
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
  <md-td>请求错误。你需要检查应用 App ID 和 App Secret 是否正确，如仍未解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
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
  <md-td>404</md-td>
  <md-td>192000</md-td>
  <md-td>acl not found</md-td>
  <md-td>访问控制（ACL）未找到。你需要确保传入了正确的 ACL ID。</md-td>
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


