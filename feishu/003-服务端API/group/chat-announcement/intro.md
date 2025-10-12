<!--
title: 群公告概述
id: 7016681170402803713
fullPath: /uAjLw4CM/ukTMukTMukTM/im-v1/chat/chat-announcement/intro
updatedAt: 1730259072000
source: https://open.feishu.cn/document/server-docs/group/chat-announcement/intro
-->
# 群公告概述

群公告是群组中的公告文档，采用飞书云文档承载，每个群组只有一个群公告。通过 OpenAPI 可更新或查看群公告。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2f0df6b6c6eb9dff2c9d70757c0d0ff5_VNctE69YtB.png?height=584&lazyload=true&maxWidth=600&width=1798)

## 字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 55%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >content</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群公告内容，以云文档序列化信息的形式展示，对应的数据结构说明参考[旧版文档数据结构参考](/ssl:ttdoc/ukTMukTMukTM/ukDM2YjL5AjN24SOwYjN)。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >revision</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	公告文档当前的版本号，纯数字。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >create_time</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	公告文档生成的时间戳（秒）
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >update_time</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	公告文档更新的时间戳（秒）
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >owner_id_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	公告文档所有者的 ID 类型

- 如果所有者是用户，取值为`open_id` `user_id` `union_id` 其中之一，不同 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
- 如果所有者是机器人，为机器人应用的 `app_id`，详情参见[通用参数](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)。


**可选值有：**
- `user_id`：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。
- `union_id`：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。
- `open_id`：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。
- `app_id`：飞书开放平台应用的唯一标识。在创建应用时，由系统自动生成，用户不能自行修改。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >owner_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	公告文档所有者 ID，ID 类型与 owner_id_type 的取值一致。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >modifier_id_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	公告文档最新修改者的 ID 类型

 - 如果修改者是用户，取值为`open_id` `user_id` `union_id` 其中之一，不同 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
- 如果修改者是机器人，为机器人应用的 `app_id`，详情参见[通用参数](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)。

**可选值有：**
- `user_id`：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。
- `union_id`：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。
- `open_id`：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。
- `app_id`：飞书开放平台应用的唯一标识。在创建应用时，由系统自动生成，用户不能自行修改。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >modifier_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	文档最新修改者 ID，ID 类型与 modifier_id_type 的取值一致。
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::
### 数据示例
```json
{
        "content": "{\"title\":{\"elements\":[{\"type\":\"textRun\",\"textRun\":{\"text\":\"announcement\",\"style\":{},\"location\":{\"zoneId\":\"0\",\"startIndex\":0,\"endIndex\":12}}}],\"location\":{\"zoneId\":\"0\",\"startIndex\":0,\"endIndex\":12},\"lineId\":\"4m10Rp\"},\"body\":{\"blocks\":[{\"type\":\"paragraph\",\"paragraph\":{\"elements\":[{\"type\":\"textRun\",\"textRun\":{\"text\":\"Announcement.\",\"style\":{},\"location\":{\"zoneId\":\"0\",\"startIndex\":13,\"endIndex\":26}}}],\"location\":{\"zoneId\":\"0\",\"startIndex\":13,\"endIndex\":26},\"lineId\":\"5VYRPT\"}},{\"type\":\"paragraph\",\"paragraph\":{\"elements\":[],\"location\":{\"zoneId\":\"0\",\"startIndex\":27,\"endIndex\":27}}}]}}",
        "revision": "12",
        "create_time": "1609296809",
        "update_time": "1609296809",
        "owner_id_type": "open_id",
        "owner_id": "ou_7d8a6e6df7621556ce0d21922b676706ccs",
        "modifier_id_type": "open_id",
        "modifier_id": "ou_7d8a6e6df7621556ce0d21922b676706ccs"
}
```
