<!--
title: 资源介绍
id: 7160517357591969795
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/room-level-overview
updatedAt: 1684403639000
source: https://open.feishu.cn/document/server-docs/vc-v1/room_level/room-level-overview
-->
# 资源介绍

用户可以进行查询会议室层级、创建会议室层级、更新会议室层级等操作

## 方法

:::html
<md-alert type="tip">
  对应原固定层级会议室API如下：<br>
  * [获取建筑物列表](/ssl:ttdoc/ukTMukTMukTM/ugzNyUjL4cjM14CO3ITN)
  * [查询建筑物详情](/ssl:ttdoc/ukTMukTMukTM/ukzNyUjL5cjM14SO3ITN)
  * [创建建筑物](/ssl:ttdoc/ukTMukTMukTM/uATNwYjLwUDM24CM1AjN)
  * [更新建筑物](/ssl:ttdoc/ukTMukTMukTM/uETNwYjLxUDM24SM1AjN)
  * [删除建筑物](/ssl:ttdoc/ukTMukTMukTM/uMzMxYjLzMTM24yMzEjN)
</md-alert>
   若租户已切换至会议室灵活层级，调用固定层级接口时将会采用兼容逻辑，可能导致体验降级。建议使用灵活层级接口
:::

**[查询会议室层级列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/list)**

&emsp;&emsp;该接口用来查询某个会议室层级下的子层级列表

**[查询会议室层级详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/get)**

&emsp;&emsp;该接口可以使用会议室层级ID查询会议室层级详情

**[批量查询会议室层级详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/mget)**

&emsp;&emsp;该接口可以使用会议室层级ID批量查询会议室层级详情

**[创建会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/create)**

&emsp;&emsp;该接口用于创建会议室层级

**[更新会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/patch)**

&emsp;&emsp;该接口可以用来更新某个会议室层级的信息

**[删除会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/del)**

&emsp;&emsp;该接口可以用来删除某个会议室层级

**[搜索会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/search)**

&emsp;&emsp;该接口可以用来搜索会议室层级，支持使用自定义会议室层级ID进行查询

## 事件

**[创建会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/events/created)**

&emsp;&emsp;当创建会议室层级时，会触发该事件

**[更新会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/events/updated)**

&emsp;&emsp;当更新会议室层级时，会触发该事件

**[删除会议室层级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/events/deleted)**

&emsp;&emsp;当删除会议室层级时，会触发该事件

## 字段说明

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: $$$vc.v1.room_level.method.create.request.body.table.param-column.width$$$;">名称</md-dt-th>
      <md-dt-th style="width: $$$vc.v1.room_level.method.create.request.body.table.type-column.width$$$;">类型</md-dt-th>
      <md-dt-th style="width: $$$vc.v1.room_level.method.create.request.body.table.required-column.width$$$;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: $$$vc.v1.room_level.method.create.request.body.table.desc-column.width$$$;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
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

**示例值**："omb_57c9cc7d9a81e27e54c8fabfd02759e7"
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
	层级名称

**示例值**："测试层级"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >parent_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	父层级ID

**示例值**："omb_4ad1a2c7a2fbc5fc9570f38456931293"
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
	<md-text type="field-name" >has_child</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否有子层级

**示例值**：true
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >custom_group_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义层级ID

**示例值**："10000"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::


### 请求体示例
:::html
<md-code-json>
{
  "room_level_id": "omb_57c9cc7d9a81e27e54c8fabfd02759e7",
  "name": "测试层级",
  "parent_id": "omb_4ad1a2c7a2fbc5fc9570f38456931293",
  "path": [
	 "omb_4ad1a2c7a2fbc5fc9570f38456931293"
  ],
  "has_child": false,
  "custom_group_id": "10000"
}
</md-code-json>
:::
