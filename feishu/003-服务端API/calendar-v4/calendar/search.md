<!--
title: 搜索日历
id: 6952888507002863643
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/search
updatedAt: 1723013431000
source: https://open.feishu.cn/document/server-docs/calendar-v4/calendar/search
-->
# 搜索日历

调用该接口通过关键字搜索日历，搜索结果为标题或描述包含关键字的公共日历或用户主日历。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar&version=v4&resource=calendar&method=search)

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
- 如果使用应用身份调用该接口，则需要确保应用开启了[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 应用身份不支持搜索用户主日历。
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
      <md-td>https://open.feishu.cn/open-apis/calendar/v4/calendars/search</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="calendar:calendar:read" desc="读取日历信息" support_app_types="custom,isv" tags="">读取日历信息</md-perm>
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
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
</md-tbody>
</md-table>
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

**示例值**：10
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
	一次请求返回的最大日历数量。

**示例值**：10

**默认值**：`20`

**数据校验规则**：

- 最大值：`50`
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
	<md-text type="field-name" >query</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	搜索关键字。接口将会搜索标题或描述中包含该关键字的公共日历或用户主日历。

**示例值**："query words"

**数据校验规则**：

- 长度范围：`1` ～ `200` 字符
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "query": "query words"
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
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >calendar\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	搜索命中的日历列表。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >calendar_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日历 ID。后续可以通过该 ID 查询、更新或删除日历信息。更多信息参见[日历 ID 字段说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/introduction)。
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
	日历标题。
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
	日历描述。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >permissions</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日历公开范围。

**可选值有**：
<md-enum>
<md-enum-item key="private" >私密</md-enum-item>
<md-enum-item key="show_only_free_busy" >仅展示忙闲信息</md-enum-item>
<md-enum-item key="public" >公开，他人可查看日程详情</md-enum-item>
</md-enum>
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
	日历颜色，由颜色 RGB 值的 int32 表示。实际在客户端展示时会映射到色板上最接近的一种颜色，且该字段仅对当前身份生效。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日历类型。

**可选值有**：
<md-enum>
<md-enum-item key="unknown" >未知类型</md-enum-item>
<md-enum-item key="primary" >用户或应用的主日历</md-enum-item>
<md-enum-item key="shared" >由用户或应用创建的共享日历</md-enum-item>
<md-enum-item key="google" >用户绑定的谷歌日历</md-enum-item>
<md-enum-item key="resource" >会议室日历</md-enum-item>
<md-enum-item key="exchange" >用户绑定的 Exchange 日历</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >summary_alias</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日历备注名，仅对当前身份生效。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_deleted</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	对于当前身份，日历是否已经被标记为删除。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_third_party</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	当前日历是否是第三方数据。三方日历及日程只支持读，不支持写入。
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
	当前身份对于该日历的访问权限。

**可选值有**：
<md-enum>
<md-enum-item key="unknown" >未知权限</md-enum-item>
<md-enum-item key="free_busy_reader" >游客，只能看到忙碌、空闲信息</md-enum-item>
<md-enum-item key="reader" >订阅者，可查看所有日程详情</md-enum-item>
<md-enum-item key="writer" >编辑者，可创建及修改日程</md-enum-item>
<md-enum-item key="owner" >管理员，可管理日历及共享设置</md-enum-item>
</md-enum>
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
        "items": [
            {
                "calendar_id": "feishu.cn_xxxxxxxxxx@group.calendar.feishu.cn",
                "summary": "测试日历",
                "description": "使用开放接口创建日历",
                "permissions": "private",
                "color": -1,
                "type": "shared",
                "summary_alias": "日历备注名",
                "is_deleted": false,
                "is_third_party": false,
                "role": "owner"
            }
        ],
        "page_token": "10"
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
  <md-td>195100</md-td>
  <md-td>user is dismiss or not exist in the tenant</md-td>
  <md-td>当前身份或指定用户已经离职，或者不在该租户内。请检查并改为正确的身份来调用接口。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


