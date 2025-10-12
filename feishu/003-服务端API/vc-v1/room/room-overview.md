<!--
title: 资源介绍
id: 7160517357592035331
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/room-overview
updatedAt: 1684403660000
source: https://open.feishu.cn/document/server-docs/vc-v1/room/room-overview
-->
# 资源介绍

用户可以进行查询会议室层级、创建会议室层级、更新会议室层级等操作

## 方法

:::html
<md-alert type="tip">
  对应原固定层级会议室API如下：<br>
  * [获取会议室列表](/ssl:ttdoc/ukTMukTMukTM/uADOyUjLwgjM14CM4ITN)<br>
  * [查询会议室详情](/ssl:ttdoc/ukTMukTMukTM/uEDOyUjLxgjM14SM4ITN)
  * [创建会议室](/ssl:ttdoc/ukTMukTMukTM/uITNwYjLyUDM24iM1AjN)
  * [更新会议室](/ssl:ttdoc/ukTMukTMukTM/uMTNwYjLzUDM24yM1AjN)
  * [删除会议室](/ssl:ttdoc/ukTMukTMukTM/uUzMxYjL1MTM24SNzEjN)
</md-alert>
  若租户已切换至会议室灵活层级，调用固定层级接口时将会采用兼容逻辑，可能导致体验降级。建议使用灵活层级接口
:::

**[查询会议室列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/list)**

&emsp;&emsp;该接口可以用来查询某个会议室层级下会议室列表

**[查询会议室详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/get)**

&emsp;&emsp;该接口可以使用会议室ID查询会议室详情

**[批量查询会议室详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/mget)**

&emsp;&emsp;该接口可以使用会议室ID批量查询会议室详情

**[创建会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/create)**

&emsp;&emsp;该接口用于创建会议室

**[更新会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/patch)**

&emsp;&emsp;该接口可以用来更新某个会议室的信息

**[删除会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/delete)**

&emsp;&emsp;该接口可以用来删除某个会议室

**[搜索会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/search)**

&emsp;&emsp;该接口可以用来搜索会议室，支持使用关键词进行搜索，也支持使用自定义会议室ID进行查询



## 事件

:::html
<md-alert type="tip">
  对应原非多层级会议室事件如下：<br>
  * [会议室创建](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/meeting_room-v1/meeting_room/events/created)
  * [会议室属性变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/meeting_room-v1/meeting_room/events/updated)
  * [会议室删除](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/meeting_room-v1/meeting_room/events/deleted)
</md-alert>
:::

**[创建会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/events/created)**

&emsp;&emsp;当创建会议室时，会触发该事件

**[更新会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/events/updated)**

&emsp;&emsp;当更新会议室时，会触发该事件

**[删除会议室](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/events/deleted)**

&emsp;&emsp;当删除会议室时，会触发该事件

## 字段说明

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: $$$vc.v1.room.method.create.request.body.table.param-column.width$$$;">名称</md-dt-th>
      <md-dt-th style="width: $$$vc.v1.room.method.create.request.body.table.type-column.width$$$;">类型</md-dt-th>
      <md-dt-th style="width: $$$vc.v1.room.method.create.request.body.table.required-column.width$$$;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: $$$vc.v1.room.method.create.request.body.table.desc-column.width$$$;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
    
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >room_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	会议室ID
      
**示例值**："omm_4de32cf10a4358788ff4e09e37ebbf9b"
	</md-dt-td>
</md-dt-tr>
    
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	会议室名称
      
**示例值**："测试会议室"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >capacity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	会议室能容纳的人数

**示例值**：10
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
	会议室的相关描述

**示例值**："测试会议室描述"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >custom_room_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义的会议室ID

**示例值**："1234"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >room_level_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	层级ID

**示例值**："omb_4ad1a2c7a2fbc5fc9570f38456931293"
    
层级信息可以参考：[会议室层级概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/room-level-overview)
	</md-dt-td>
</md-dt-tr>

    
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >path</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	层级路径

**示例值**：["omb_4ad1a2c7a2fbc5fc9570f38456931293"]
    
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >room_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >room_status</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会议室状态
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否启用会议室

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >schedule_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会议室未来状态为启用或禁用

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >disable_start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	禁用开始时间（unix时间，单位sec）

**示例值**："1652356050"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >disable_end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	禁用结束时间（unix时间，单位sec，数值0表示永久禁用）

**示例值**："1652442450"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >disable_reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	禁用原因

**示例值**："测试占用"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >contact_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	联系人列表，id类型由user_id_type参数决定

**示例值**：["ou_3ec3f6a28a0d08c45d895276e8e5e19b"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >disable_notice</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否在禁用时发送通知给预定了该会议室的员工

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >resume_notice</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否在恢复启用时发送通知给预定了该会议室的员工

**示例值**：true
	</md-dt-td>
</md-dt-tr>
    
    
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >device</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >device\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	设施信息列表    
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
	是
	</md-dt-td>
	<md-dt-td>
	设施名称

**示例值**：电话
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::


## 数据示例
:::html
<md-code-json>
{
  	"room_id": "omm_4de32cf10a4358788ff4e09e37ebbf9b",
    "name": "测试会议室",
    "capacity": 10,
    "description": "测试会议室描述",
    "custom_room_id": "1234",
    "room_level_id": "omb_4ad1a2c7a2fbc5fc9570f38456931293",
  	"path": [
  		"omb_4ad1a2c7a2fbc5fc9570f38456931293"
  	],
    "room_status": {
        "status": true,
        "schedule_status": true,
        "disable_start_time": "1652356050",
        "disable_end_time": "1652442450",
        "disable_reason": "测试占用",
        "contact_ids": [
            "ou_3ec3f6a28a0d08c45d895276e8e5e19b"
        ],
        "disable_notice": true,
        "resume_notice": true
    },
  	"device": [
  		{
  			"name": "电话"
  		}
  	]
}
</md-code-json>
:::