<!--
title: 群成员概述
id: 7016681170402787329
fullPath: /uAjLw4CM/ukTMukTMukTM/im-v1/chat/chat-member/intro
updatedAt: 1730257094000
source: https://open.feishu.cn/document/server-docs/group/chat-member/intro
-->
# 群成员概述

群成员包括用户和机器人。在飞书群组内，支持添加用户或者机器人作为群成员，同时支持将用户或者机器人设置为群管理员。开放平台提供了管理群成员的相关接口与事件：

- 指定群管理员、邀请成员入群、将成员移出群以及获取群成员列表等接口
- 用户进群、用户出群、机器人进群、机器人被移出群以及用户与机器人发起会话等事件


## 字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >items</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >list_member\[\]</md-text>
	</md-td>
	<md-td>
	群成员列表
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >member_id_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	成员的用户 ID 类型，ID 类型包括 `open_id`、`user_id`、`union_id`。了解更多参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >member_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	成员的用户 ID，ID 类型与 member_id_type 取值一致。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	群成员的名字
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::

### 数据示例
```json
{
  "items": [
    {
      "member_id_type": "user_id",
      "member_id": "4d7a3c6g",
      "name": "李健"
    }
  ]
}
```
