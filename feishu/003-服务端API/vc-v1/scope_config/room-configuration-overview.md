<!--
title: 资源介绍
id: 7160517357592018947
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/scope_config/room-configuration-overview
updatedAt: 1679042149000
source: https://open.feishu.cn/document/server-docs/vc-v1/scope_config/room-configuration-overview
-->
# 资源介绍

会议室配置用于对飞书会议室的背景设置、资源管理等进行配置。

## 接口

:::html
<md-alert type="tip">
  对应原固定层级会议室配置API如下：<br>
  * [查询会议室配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_config/query)
  * [设置会议室配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_config/set)
</md-alert>
:::

**[查询会议室配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/scope_config/get)**

&emsp;&emsp;该接口可以用来查询某个会议层级范围下或者某个会议室的配置

**[设置会议室配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/scope_config/create)**

&emsp;&emsp;该接口可以用来设置某个会议层级范围下或者某个会议室的配置

**[查询会议室预定限制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve_config/reserve_scope)**

&emsp;&emsp;该接口可以用来查询某个会议层级范围下或者某个会议室的预定限制

**[更新会议室预定限制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve_config/patch)**

&emsp;&emsp;该接口可以用来设置某个会议层级范围下或者某个会议室的预定限制

**[查询会议室预定管理员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve_config-admin/get)**

&emsp;&emsp;该接口可以用来查询某个会议层级范围下或者某个会议室的预定管理员

**[更新会议室预定管理员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve_config-admin/patch)**

&emsp;&emsp;该接口可以用来设置某个会议层级范围下或者某个会议室的预定管理员

### 字段说明

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: $$$vc.v1.scope_config.method.create.request.body.table.param-column.width$$$;">名称</md-dt-th>
      <md-dt-th style="width: $$$vc.v1.scope_config.method.create.request.body.table.type-column.width$$$;">类型</md-dt-th>
      <md-dt-th style="width: $$$vc.v1.scope_config.method.create.request.body.table.required-column.width$$$;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: $$$vc.v1.scope_config.method.create.request.body.table.desc-column.width$$$;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >scope_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	查询节点范围

**示例值**: 1

**可选值有**:
<md-enum>
<md-enum-item key="1" >会议室层级</md-enum-item>
<md-enum-item key="2" >会议室</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >scope_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	查询节点ID：如果scope_type为1，则为层级ID，如果scope_type为2，则为会议室ID

**示例值**: "omm_608d34d82d531b27fa993902d350a307"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >scope_config</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >room_config</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	节点配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >room_background</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	飞书会议室背景图

**示例值**: "https://lf1-ttcdn-tos.pstatp.com/obj/xxx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >display_background</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	飞书会议室背景图

**示例值**: "https://lf1-ttcdn-tos.pstatp.com/obj/xxx"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >digital_signage</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >room_digital_signage</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	飞书会议室数字标牌
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >enable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否开启数字标牌功能

**示例值**: true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mute</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否静音播放

**示例值**: true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >start_display</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程会议开始前n分钟结束播放

**示例值**: 3
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >stop_display</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会议结束后n分钟开始播放

**示例值**: 3
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >materials</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >room_digital_signage_material\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材ID

**示例值**: "7847784676276"
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
	否
	</md-dt-td>
	<md-dt-td>
	素材名称

**示例值**: "name"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >material_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材类型

**示例值**: 1

**可选值有**:
<md-enum>
<md-enum-item key="1" >图片</md-enum-item>
<md-enum-item key="2" >视频</md-enum-item>
<md-enum-item key="3" >GIF</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材URL

**示例值**: "url"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >duration</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	播放时长（单位sec）

**示例值**: 15
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >cover</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
  素材封面url

**示例值**: "url"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >md5</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材文件md5

**示例值**: "md5"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >vid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材文件vid

**示例值**: "vid"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材文件大小（单位byte）

**示例值**: "100
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >room_box_digital_signage</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >room_digital_signage</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	飞书投屏盒子数字标牌
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >enable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否开启数字标牌功能

**示例值**: true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mute</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否静音播放

**示例值**: true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >start_display</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日程会议开始前n分钟结束播放

**示例值**: 3
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >stop_display</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	会议结束后n分钟开始播放

**示例值**: 3
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >materials</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >room_digital_signage_material\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材ID

**示例值**: "7847784676276"
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
	否
	</md-dt-td>
	<md-dt-td>
	素材名称

**示例值**: "name"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >material_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材类型

**示例值**: 1

**可选值有**:
<md-enum>
<md-enum-item key="1" >图片</md-enum-item>
<md-enum-item key="2" >视频</md-enum-item>
<md-enum-item key="3" >GIF</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材URL

**示例值**: "url"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >duration</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	播放时长（单位sec）

**示例值**: 15
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >cover</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
  素材封面url

**示例值**: "url"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >md5</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材文件md5

**示例值**: "md5"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >vid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材文件vid

**示例值**: "vid"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	素材文件大小（单位byte）

**示例值**: "100
	</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
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

<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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


<md-dt-tr level="2">
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

  </md-dt-tbody>
</md-dt-table>
:::


### 请求体示例

:::html
<md-code-json>
{
    "scope_type": 1,
    "scope_id": "omm_608d34d82d531b27fa993902d350a307",
    "scope_config": {
        "room_background": "https://lf1-ttcdn-tos.pstatp.com/obj/xxx",
        "display_background": "https://lf1-ttcdn-tos.pstatp.com/obj/xxx",
        "digital_signage": {
            "enable": true,
            "mute": true,
            "start_display": 3,
            "stop_display": 3,
            "materials": [
                {
                    "id": "7847784676276",
                    "name": "name",
                    "material_type": 0,
                    "url": "url",
                    "duration": 15,
                    "cover": "url",
                    "md5": "md5",
                    "vid": "vid",
                    "size": "100"
                }
            ]
        },
        "room_box_digital_signage": {
            "enable": true,
            "mute": true,
            "start_display": 3,
            "stop_display": 3,
            "materials": [
                {
                    "id": "7847784676276",
                    "name": "name",
                    "material_type": 0,
                    "url": "url",
                    "duration": 15,
                    "cover": "url",
                    "md5": "md5",
                    "vid": "vid",
                    "size": "100"
                }
            ]
        },
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
        }
    }
}
</md-code-json>
:::

