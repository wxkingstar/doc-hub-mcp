<!--
title: 表情回复概述
id: 7148778513528553500
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/overview-of-message-reaction-resources
updatedAt: 1724222390000
source: https://open.feishu.cn/document/server-docs/im-v1/message-reaction/overview-of-message-reaction-resources
-->
# 表情回复概述

表情回复是指在一条消息下回复的飞书表情，效果图如下。消息业务提供了添加、删除以及获取表情回复的 OpenAPI。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9a708f13fc3171755c4775644b51a343_rFORE1ozRT.png?height=192&lazyload=true&maxWidth=350&width=594)


## 字段说明
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: $$$im.v1.message.reaction.method.create.response.body.table.param-column.width$$$;">名称</md-dt-th>
      <md-dt-th style="width: $$$im.v1.message.reaction.method.create.response.body.table.type-column.width$$$;">类型</md-dt-th>
      <md-dt-th style="width: $$$im.v1.message.reaction.method.create.response.body.table.desc-column.width$$$;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >reaction_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	表情回复 ID，是表情回复的唯一标识。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
		添加消息表情回复的操作人。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >operator_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		操作人 ID，具体的取值与 `operator_type` 相关：
      
- 当 `operator_type` 取值 `app` 时返回机器人所属的应用 ID（App ID）。
- 当 `operator_type` 取值 `user` 时返回用户 ID（user_id、open_id 或者 union_id）。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >operator_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	操作人身份。

**可选值有**：
<md-enum>
<md-enum-item key="app" >应用</md-enum-item>
<md-enum-item key="user" >用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >action_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		添加消息表情回复的时间。Unix 时间戳，单位：ms
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >reaction_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >emoji</md-text>
	</md-dt-td>
	<md-dt-td>
	表情类型。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >emoji_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	emoji 类型。取值对应的表情参考[表情文案说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/emojis-introduce)。
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

## 数据示例
```json
{
    "reaction_id": "ZCaCIjUBVVWSrm5L-3ZTw****",
    "operator": {
        "operator_id": "ou_ff0b7ba35fb****",
        "operator_type": "user"
    },
    "action_time": "1626086391570",
    "reaction_type": {
        "emoji_type": "SMILE"
    }
}
```
