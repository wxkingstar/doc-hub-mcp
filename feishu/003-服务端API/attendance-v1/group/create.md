<!--
title: 创建或修改考勤组
id: 7044467124773683201
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/create
updatedAt: 1750247299000
source: https://open.feishu.cn/document/server-docs/attendance-v1/group/create
-->
# 创建或修改考勤组

考勤组，是对部门或者员工在某个特定场所及特定时间段内的出勤情况（包括上下班、迟到、早退、病假、婚假、丧假、公休、工作时间、加班情况等）的一种规则设定。

通过设置考勤组，可以从部门、员工两个维度，来设定考勤方式、考勤时间、考勤地点等考勤规则。

对应功能同设置-假勤设置-[考勤组](https://example.feishu.cn/people/workforce-management/setting/group/list)的“新建”功能{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=attendance&version=v1&resource=group&method=create)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">
注意：此接口在修改时为数据覆盖，需要传入全部的考勤组信息
</md-alert>
:::

:::html
<md-alert type="tip">
出于安全考虑，如果传入操作人，该接口只允许修改操作人有权限的考勤组。
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
      <md-td>https://open.feishu.cn/open-apis/attendance/v1/groups</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="attendance:rule" desc="写入打卡管理规则" support_app_types="custom" tags="">写入打卡管理规则</md-perm>
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

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

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
	<md-text type="field-name" >employee_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用[通过手机号或邮箱获取用户 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id)

**示例值**：employee_id

**可选值有**：
<md-enum>
<md-enum-item key="employee_id" >员工 employee ID，即[飞书管理后台](https://example.feishu.cn/admin/contacts/departmentanduser) > 组织架构 > 成员与部门 > 成员详情中的用户 ID</md-enum-item>
<md-enum-item key="employee_no" >员工工号，即[飞书管理后台](https://example.feishu.cn/admin/contacts/departmentanduser) > 组织架构 > 成员与部门 > 成员详情中的工号</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >dept_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	部门 ID 的类型

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >暂时只支持部门的 openid。具体概念请参考[部门资源介绍](https://open.larkoffice.com/document/server-docs/contact-v3/department/field-overview)中的open_department_id</md-enum-item>
</md-enum>
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
	<md-text type="field-name" >group</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >group</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	考勤组信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >group_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	考勤组 ID（仅修改时提供）， 需要从[按名称查询考勤组
](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/search)或[查询所有考勤组
](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/list)接口中获取 groupId。如果不填的话，会创建新的考勤组。

**示例值**："6919358128597097404"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >group_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	考勤组名称

**示例值**："开心考勤"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >time_zone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	时区

**示例值**："Asia/Shanghai"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >bind_dept_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	绑定的部门 ID（与「need_punch_members」同时使用时，以当前字段为准）。对应dept_type

**示例值**：["od-fcb45c28a45311afd440b7869541fce8"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >except_dept_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	排除的部门 ID（该字段已下线）

**示例值**：["od-fcb45c28a45311afd440b7869541fce8"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >bind_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	绑定的用户 ID（与「need_punch_members」同时使用时，以当前字段为准），对应employee_type

**示例值**：["52aa1fa1"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >except_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	排除的用户 ID（该字段已下线）

**示例值**：["52aa1fa1"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >group_leader_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	考勤主负责人 ID 列表，必选字段（需至少拥有考勤组管理员权限），对应employee_type

**示例值**：["2bg4a9be"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >sub_group_leader_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	考勤子负责人 ID 列表，对应employee_type

**示例值**：["52aa1fa1"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >allow_out_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否允许外勤打卡，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >out_punch_need_approval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外勤打卡需审批（需要允许外勤打卡才能设置生效），默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >out_punch_need_post_approval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外勤打卡需审批，先打卡后审批（需要允许外勤打卡才能设置生效）

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >out_punch_need_remark</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外勤打卡需填写备注（需要允许外勤打卡才能设置生效），默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >out_punch_need_photo</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外勤打卡需拍照（需要允许外勤打卡才能设置生效），默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >out_punch_allowed_hide_addr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外勤打卡允许员工隐藏详细地址（需要允许外勤打卡才能设置生效），默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >out_punch_allowed_adjust_addr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外勤打卡允许微调地址（需要允许外勤打卡才能设置生效）

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >adjust_range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	微调范围，默认为 50 米

**示例值**：50
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >allow_pc_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否允许 PC 端打卡，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否限制补卡，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >remedy_limit</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否限制补卡次数，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >remedy_limit_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	补卡次数，默认为空

**示例值**：3
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >remedy_date_limit</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否限制补卡时间，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >remedy_date_num</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	补卡时间，几天内补卡，默认为空

**示例值**：3
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy_type_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	允许缺卡补卡（需要允许补卡才能设置生效），默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy_type_late</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	允许迟到补卡（需要允许补卡才能设置生效），默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy_type_early</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	允许早退补卡（需要允许补卡才能设置生效），默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy_type_normal</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	允许正常补卡（需要允许补卡才能设置生效），默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >show_cumulative_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否展示累计时长，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >show_over_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否展示加班时长，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >hide_staff_punch_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否隐藏员工打卡详情，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >hide_clock_in_rule</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否隐藏打卡规则（仅灰度租户有效，如需使用请联系技术支持）

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >face_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否开启人脸识别打卡，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >face_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	人脸识别打卡规则，默认为空

**可选值有：**
* 1：每次打卡均需人脸识别
* 2：疑似作弊打卡时需要人脸识别

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >face_live_need_action</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	人脸打卡规则，默认为空

**可选值有：**
* false：表示开启活体验证 
* true：表示动作验证，仅在 face_punch_cfg = 1 时有效

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >face_downgrade</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	人脸识别失败时是否允许普通拍照打卡，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >replace_basic_pic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	人脸识别失败时是否允许替换基准图片，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >anti_cheat_punch_config</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >anti_cheat_config</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	防作弊打卡配置，不传入时默认关闭/不更新（仅灰度租户有效，如需使用请联系技术支持）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >intercept_suspected_cheat_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否拦截疑似作弊打卡，不传入时默认关闭/不更新；关闭时，其余防作弊开关都会关闭

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >check_cheat_software_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否校验疑似作弊软件打卡，不传入时默认关闭/不更新

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >check_buddy_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否校验疑似他人代打卡，不传入时默认关闭/不更新

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >check_simulate_wifi_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否校验疑似模拟 WI-FI 打卡，不传入时默认关闭/不更新（仅灰度租户有效，如需使用请联系技术支持）

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >check_change_device_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否校验更换设备打卡，不传入时默认关闭/不更新

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_change_device_num</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	同一考勤人员最多可绑定打卡设备数量上限，开启校验更换设备打卡时必填

**示例值**：1

**数据校验规则**：

- 取值范围：`1` ～ `3`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >suspected_cheat_handle_method</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	疑似作弊打卡时的处理方式，开启拦截疑似作弊打卡时必填

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >使用人脸识别打卡</md-enum-item>
<md-enum-item key="2" >仅记录疑似作弊信息</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`1` ～ `2`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >machines</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >machine\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	考勤机列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >machine_sn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	考勤机序列号

**示例值**："FS0701"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >machine_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	考勤机名称

**示例值**："创实 9 楼"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >gps_range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	GPS 打卡的有效范围

**示例值**：300
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >locations</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >location\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	地址列表（仅追加，不会覆盖之前的列表）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >location_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	地址名称

**示例值**："浙江省杭州市余杭区五常街道木桥头西溪八方城"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >location_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	地址类型

**可选值有：**
* 1：GPS
* 2：Wi-Fi
* 8：IP

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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
	地址纬度（需配合gps_range使用）

**示例值**：30.28994
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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
	地址经度（需配合gps_range使用）

**示例值**：120.04509
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ssid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	Wi-Fi 名称

**示例值**："TP-Link-af12ca"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >bssid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	Wi-Fi 的 MAC 地址

**示例值**："08:00:20:0A:8C:6D"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >map_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	地图类型，1：高德， 2：谷歌

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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
	地址名称

**示例值**："北京市海淀区中航广场"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	IP 地址

**示例值**："122.224.123.146"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >feature</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	额外信息，例如：运营商信息

**示例值**："中国电信"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >gps_range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	GPS 打卡的有效范围（历史无效字段）

**示例值**：300
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >group_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	考勤类型

**可选值有：**
* 1：固定班制
* 2：排班制
* 3：自由班制

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >punch_day_shift_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	班次 ID 列表。当考勤类型参数（group_type）设置为固定班制时，必须填够 7 个（从周一至周日）。当考勤类型参数（group_type）设置为排班制或自由班制时，请传入空数组。班次 ID 可以通过[查询所有班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/list) 和[按名称查询班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/query) 获取。休息日填0

**示例值**：["xxx","0","xxx","xxx","0","xxx","xxx","xxx"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >free_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >free_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	配置自由班制
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >free_start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	自由班制打卡开始时间，格式为x点x分，注意这里小时如果小于10点，是不需要补零的

**示例值**："7:00"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >free_end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	自由班制打卡结束时间，格式为x点x分，注意这里小时如果小于10点，是不需要补零的

**示例值**："18:00"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >punch_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	打卡的时间，为 7 位数字，每一位依次代表周一到周日，0 为不上班，1 为上班

**示例值**：1111100
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_day_no_punch_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	工作日不打卡是否记为缺卡，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_hours_demand</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	工作日出勤是否需满足时长要求，默认为空

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_hours</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	每日工作时长（分钟），范围[0,1440]

**示例值**：480
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >calendar_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	国家日历  ID

**可选值有：**
* 0：不根据国家日历排休
* 1：中国大陆
* 2：美国
* 3：日本
* 4：印度
* 5：新加坡

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >need_punch_special_days</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >punch_special_date_shift\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	必须打卡的特殊日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >punch_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	打卡日期，格式为yyyyMMdd

**示例值**：20190101
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >shift_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	班次 ID，可根据[查询所有班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/list) 
和[按名称查询班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/query) 获得

**示例值**："6919668827865513935"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >no_need_punch_special_days</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >punch_special_date_shift\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	无需打卡的特殊日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >punch_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	打卡日期，格式为yyyyMMdd

**示例值**：20190101
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >shift_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	班次 ID，可根据[查询所有班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/list) 
和[按名称查询班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/query) 获得

**示例值**："6919668827865513935"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >work_day_no_punch_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自由班制下工作日不打卡是否记为缺卡，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >effect_now</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否立即生效，默认 false

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >remedy_period_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	补卡周期类型
* 1：按月
* 2：自定义

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >remedy_period_custom_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	补卡自定义周期起始日期，范围0-28号

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >punch_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	打卡类型。

位运算，即如需设置 1 和 2 两种打卡类型，则需要传入加和值 3。

**可选值**：
* 1：GPS 打卡
* 2：Wi-Fi 打卡
* 4：考勤机打卡
* 8：IP 打卡

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >rest_clockIn_need_approval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	休息日打卡需审批。当设置 `rest_clockIn_need_approval=true` 时，休息日一天开始时间会被重置为 4:00。默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >clockIn_need_photo</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	每次打卡均需拍照，默认为空

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >member_status_change</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member_status_change</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	人员异动打卡设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >onboarding_on_no_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否入职日上班无需打卡，默认为空

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >onboarding_off_no_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否入职日下班无需打卡，默认为空

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >offboarding_on_no_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否离职日上班无需打卡，默认为空

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >offboarding_off_no_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否离职日下班无需打卡，默认为空

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >leave_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	请假离岗或返岗是否需打卡，默认为空

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >leave_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >leave_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	请假离岗或返岗打卡规则，单位：分钟
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_late</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为迟到

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为缺卡

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_early</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为早退

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为缺卡

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >not_during_shift</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	班次中间请假，无需在离岗前或返岗后打卡（仅灰度租户有效，如需使用请联系技术支持）

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >go_out_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外出期间是否需打卡，默认为0。0:无需打卡，1:需在上下班时间打卡，2:需在离岗前或返岗后打卡


**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >go_out_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >leave_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	外出期间打卡规则，单位：分钟
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_late</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为迟到

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为缺卡

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_early</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为早退

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为缺卡

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >not_during_shift</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	班次中间外出，无需在离岗前或返岗后打卡（仅灰度租户有效，如需使用请联系技术支持）

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >travel_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	出差期间是否需打卡，默认为0。0:无需打卡，1:需在上了下班时间打卡，2:需在离岗前或返岗后打卡

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >travel_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >leave_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	出差期间打卡规则，单位：分钟
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_late</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为迟到

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为缺卡

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_early</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为早退

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为缺卡

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >not_during_shift</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	无需在出差离岗前或返岗后打卡（出差不生效）

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >need_punch_members</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >punch_member\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	需要打卡的人员集合（仅当不传「bind_dept_ids」和「bind_user_ids」时，才会使用该字段）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >rule_scope_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	圈人方式：
* `0`：无 
* `1`：全部 
* `2`：自定义

**示例值**：0

**默认值**：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >scope_group_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >scope_group</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	圈人规则列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >scope_value_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	**类型**：
* 1: 部门
* 2:人员
* 3: 国家地区
* 4: 员工类型
* 5: 工作城市
* 6: 职级
* 7: 序列
* 8: 职务（企业版）
* 9: 工时制度（企业版）
* 100: 自定义字段（企业版）

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >operation_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	范围类型（是否包含）
* 1: 包含
* 2: 不包含
* 3: 相等
* 4: 小于等于
* 5: 大于等于
* 6: 大于
* 7: 小于
* 8: 不相等

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >right</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >scope_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	如果是人员/部门类型 不需要使用该字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	 标识Key

**示例值**："CH"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
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
	名称

**示例值**："中国大陆"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >member_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门/人员 ID 列表（根据 scope_value_type 判断为部门或人员）

**示例值**：["ec8ddg56"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >custom_field_ID</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	企业版自定义字段唯一键 ID, 需要从飞书人事获取（暂不支持）

**示例值**："123213123"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >custom_field_obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	企业版自定义字段对象类型（暂不支持）
* "Employment": 主数据对象，员工雇佣信息 
* "Person": 主数据对象，个人

**示例值**："employment"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >no_need_punch_members</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >punch_member\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	无需打卡的人员集合（仅当不传「bind_default_dept_ids」和「bind_default_user_ids」时，才会使用该字段）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >rule_scope_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	圈人方式：
* `0`：无 
* `1`：全部 
* `2`：自定义

**示例值**：0

**默认值**：`0`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >scope_group_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >scope_group</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	圈人规则列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >scope_value_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	**类型**：
* 1: 部门
* 2:人员
* 3: 国家地区
* 4: 员工类型
* 5: 工作城市
* 6: 职级
* 7: 序列
* 8: 职务（企业版）
* 9: 工时制度（企业版）
* 100: 自定义字段（企业版）

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >operation_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	范围类型（是否包含）
* 1: 包含
* 2: 不包含
* 3: 相等
* 4: 小于等于
* 5: 大于等于
* 6: 大于
* 7: 小于
* 8: 不相等

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >right</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >scope_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	如果是人员/部门类型 不需要使用该字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	 标识Key

**示例值**："CH"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
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
	名称

**示例值**："中国大陆"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >member_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	部门/人员 ID 列表（根据 scope_value_type 判断为部门或人员）

**示例值**：["ec8ddg56"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >custom_field_ID</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	企业版自定义字段唯一键 ID, 需要从飞书人事获取（暂不支持）

**示例值**："123213123"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >custom_field_obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	企业版自定义字段对象类型（暂不支持）
* "Employment": 主数据对象，员工雇佣信息 
* "Person": 主数据对象，个人

**示例值**："employment"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >save_auto_changes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否允许保存有冲突人员的考勤组。如果 true，则冲突人员将被自动拉入到当前设置的考勤组中，并从原考勤组中移除；如果 false，则需手动调整冲突人员。默认为 false。

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >org_change_auto_adjust</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	当有新员工入职或人员异动，符合条件的人员是否自动加入考勤组。默认为空

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >bind_default_dept_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	参与无需打卡的部门 ID 列表（与「no_need_punch_members」同时使用时，以当前字段为准），对应dept_type

**示例值**：["od-fcb45c28a45311afd440b7869541fce8"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >bind_default_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	参与无需打卡的人员 ID 列表（与「no_need_punch_members」同时使用时，以当前字段为准），对应employee_type

**示例值**：["dd31248a"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >overtime_clock_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >overtime_clock_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加班打卡规则
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_punch_approval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否允许在非打卡时段申请打卡（仅灰度租户有效，如需使用请联系技术支持）

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >need_clock_over_time_start_and_end</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	加班开始和结束需打卡（仅灰度租户有效，如需使用请联系技术支持）

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >new_calendar_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	节假日id，（如果考勤组使用了自定义节假日，请用此参数传入节假日id，可在假勤设置-节假日模块页面路径获取）

**示例值**："7302191700771358252"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >allow_apply_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	定位不准时是否允许申请打卡

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >clock_in_abnormal_settings</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >ClockInAbnormalSettings</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	异常卡豁免配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ignore_until_latest_clockout</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	在最晚下班打卡之前忽略异常卡（仅灰度租户有效，如需使用请联系技术支持）

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >operator_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	操作人uid，对应employee_type，如果您未操作[考勤管理后台“API 接入”流程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/attendance-development-guidelines)，则此字段为必填字段

**示例值**："dd31248a"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "group": {
        "group_id": "6919358128597097404",
        "group_name": "开心考勤",
        "time_zone": "Asia/Shanghai",
        "bind_dept_ids": [
            "od-fcb45c28a45311afd440b7869541fce8"
        ],
        "except_dept_ids": [
            "od-fcb45c28a45311afd440b7869541fce8"
        ],
        "bind_user_ids": [
            "52aa1fa1"
        ],
        "except_user_ids": [
            "52aa1fa1"
        ],
        "group_leader_ids": [
            "2bg4a9be"
        ],
        "sub_group_leader_ids": [
            "52aa1fa1"
        ],
        "allow_out_punch": true,
        "out_punch_need_approval": true,
        "out_punch_need_post_approval": true,
        "out_punch_need_remark": true,
        "out_punch_need_photo": true,
        "out_punch_allowed_hide_addr": true,
        "out_punch_allowed_adjust_addr": true,
        "adjust_range": 50,
        "allow_pc_punch": true,
        "allow_remedy": true,
        "remedy_limit": true,
        "remedy_limit_count": 3,
        "remedy_date_limit": true,
        "remedy_date_num": 3,
        "allow_remedy_type_lack": true,
        "allow_remedy_type_late": true,
        "allow_remedy_type_early": true,
        "allow_remedy_type_normal": true,
        "show_cumulative_time": true,
        "show_over_time": true,
        "hide_staff_punch_time": true,
        "hide_clock_in_rule": false,
        "face_punch": true,
        "face_punch_cfg": 1,
        "face_live_need_action": false,
        "face_downgrade": true,
        "replace_basic_pic": true,
        "anti_cheat_punch_config": {
            "intercept_suspected_cheat_punch": true,
            "check_cheat_software_punch": true,
            "check_buddy_punch": true,
            "check_simulate_wifi_punch": true,
            "check_change_device_punch": true,
            "allow_change_device_num": 1,
            "suspected_cheat_handle_method": 1
        },
        "machines": [
            {
                "machine_sn": "FS0701",
                "machine_name": "创实 9 楼"
            }
        ],
        "gps_range": 300,
        "locations": [
            {
                "location_name": "浙江省杭州市余杭区五常街道木桥头西溪八方城",
                "location_type": 1,
                "latitude": 30.28994,
                "longitude": 120.04509,
                "ssid": "TP-Link-af12ca",
                "bssid": "08:00:20:0A:8C:6D",
                "map_type": 1,
                "address": "北京市海淀区中航广场",
                "ip": "122.224.123.146",
                "feature": "中国电信",
                "gps_range": 300
            }
        ],
        "group_type": 1,
        "punch_day_shift_ids": [
            "xxx",
            "0",
            "xxx",
            "xxx",
            "0",
            "xxx",
            "xxx",
            "xxx"
        ],
        "free_punch_cfg": {
            "free_start_time": "7:00",
            "free_end_time": "18:00",
            "punch_day": 1111100,
            "work_day_no_punch_as_lack": true,
            "work_hours_demand": false,
            "work_hours": 480
        },
        "calendar_id": 1,
        "need_punch_special_days": [
            {
                "punch_day": 20190101,
                "shift_id": "6919668827865513935"
            }
        ],
        "no_need_punch_special_days": [
            {
                "punch_day": 20190101,
                "shift_id": "6919668827865513935"
            }
        ],
        "work_day_no_punch_as_lack": true,
        "effect_now": true,
        "remedy_period_type": 1,
        "remedy_period_custom_date": 1,
        "punch_type": 1,
        "rest_clockIn_need_approval": true,
        "clockIn_need_photo": true,
        "member_status_change": {
            "onboarding_on_no_need_punch": false,
            "onboarding_off_no_need_punch": false,
            "offboarding_on_no_need_punch": false,
            "offboarding_off_no_need_punch": false
        },
        "leave_need_punch": false,
        "leave_need_punch_cfg": {
            "late_minutes_as_late": 0,
            "late_minutes_as_lack": 0,
            "early_minutes_as_early": 0,
            "early_minutes_as_lack": 0,
            "not_during_shift": false
        },
        "go_out_need_punch": 0,
        "go_out_need_punch_cfg": {
            "late_minutes_as_late": 0,
            "late_minutes_as_lack": 0,
            "early_minutes_as_early": 0,
            "early_minutes_as_lack": 0,
            "not_during_shift": false
        },
        "travel_need_punch": 0,
        "travel_need_punch_cfg": {
            "late_minutes_as_late": 0,
            "late_minutes_as_lack": 0,
            "early_minutes_as_early": 0,
            "early_minutes_as_lack": 0,
            "not_during_shift": false
        },
        "need_punch_members": [
            {
                "rule_scope_type": 0,
                "scope_group_list": {
                    "scope_value_type": 1,
                    "operation_type": 1,
                    "right": [
                        {
                            "key": "CH",
                            "name": "中国大陆"
                        }
                    ],
                    "member_ids": [
                        "ec8ddg56"
                    ],
                    "custom_field_ID": "123213123",
                    "custom_field_obj_type": "employment"
                }
            }
        ],
        "no_need_punch_members": [
            {
                "rule_scope_type": 0,
                "scope_group_list": {
                    "scope_value_type": 1,
                    "operation_type": 1,
                    "right": [
                        {
                            "key": "CH",
                            "name": "中国大陆"
                        }
                    ],
                    "member_ids": [
                        "ec8ddg56"
                    ],
                    "custom_field_ID": "123213123",
                    "custom_field_obj_type": "employment"
                }
            }
        ],
        "save_auto_changes": false,
        "org_change_auto_adjust": false,
        "bind_default_dept_ids": [
            "od-fcb45c28a45311afd440b7869541fce8"
        ],
        "bind_default_user_ids": [
            "dd31248a"
        ],
        "overtime_clock_cfg": {
            "allow_punch_approval": false,
            "need_clock_over_time_start_and_end": false
        },
        "new_calendar_id": "7302191700771358252",
        "allow_apply_punch": true,
        "clock_in_abnormal_settings": {
            "ignore_until_latest_clockout": false
        }
    },
    "operator_id": "dd31248a"
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
	<md-text type="field-name" >group</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >group</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤组信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >group_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤组 ID，可用于[按 ID 查询考勤组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/get)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >group_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤组名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >time_zone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	时区
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >bind_dept_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	绑定的部门 ID（与「need_punch_members」同时使用时，以当前字段为准）。对应dept_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >except_dept_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	排除的部门 ID（该字段已下线）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >bind_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	绑定的用户 ID（与「need_punch_members」同时使用时，以当前字段为准），对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >except_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	排除的用户 ID（该字段已下线）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >group_leader_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤主负责人 ID 列表，必选字段（需至少拥有考勤组管理员权限），对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >sub_group_leader_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤子负责人 ID 列表，对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_out_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否允许外勤打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >out_punch_need_approval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	外勤打卡需审批（需要允许外勤打卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >out_punch_need_post_approval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	外勤打卡需审批，先打卡后审批（需要允许外勤打卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >out_punch_need_remark</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	外勤打卡需填写备注（需要允许外勤打卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >out_punch_need_photo</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	外勤打卡需拍照（需要允许外勤打卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >out_punch_allowed_hide_addr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	外勤打卡允许员工隐藏详细地址（需要允许外勤打卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >out_punch_allowed_adjust_addr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	外勤打卡允许微调地址（需要允许外勤打卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >adjust_range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	微调范围，默认为 50 米
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_pc_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否允许 PC 端打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否限制补卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >remedy_limit</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否限制补卡次数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >remedy_limit_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	补卡次数
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >remedy_date_limit</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否限制补卡时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >remedy_date_num</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	补卡时间，几天内补卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy_type_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	允许缺卡补卡（需要允许补卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy_type_late</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	允许迟到补卡（需要允许补卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy_type_early</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	允许早退补卡（需要允许补卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_remedy_type_normal</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	允许正常补卡（需要允许补卡才能设置生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >show_cumulative_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否展示累计时长
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >show_over_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否展示加班时长
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >hide_staff_punch_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否隐藏员工打卡详情
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >hide_clock_in_rule</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否隐藏打卡规则（仅灰度租户有效，如需使用请联系技术支持）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >face_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否开启人脸识别打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >face_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	人脸识别打卡规则

**可选值有：**
* 1：每次打卡均需人脸识别
* 2：疑似作弊打卡时需要人脸识别
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >face_live_need_action</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	人脸打卡规则， false：开启活体验证 true：0动作验证，仅在 face_punch_cfg = 1 时有效
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >face_downgrade</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	人脸识别失败时是否允许普通拍照打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >replace_basic_pic</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	人脸识别失败时是否允许替换基准图片
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >anti_cheat_punch_config</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >anti_cheat_config</md-text>
	</md-dt-td>
	<md-dt-td>
	防作弊打卡配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >intercept_suspected_cheat_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否拦截疑似作弊打卡，默认关闭；关闭时，其余防作弊开关都为关闭
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_cheat_software_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否校验疑似作弊软件打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_buddy_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否校验疑似他人代打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_simulate_wifi_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否校验疑似模拟 WI-FI 打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_change_device_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否校验更换设备打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >allow_change_device_num</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	同一考勤人员最多可绑定打卡设备数量上限，开启校验更换设备打卡时必填
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >suspected_cheat_handle_method</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	疑似作弊打卡时的处理方式，开启拦截疑似作弊打卡时必填

**可选值有**：
<md-enum>
<md-enum-item key="1" >使用人脸识别打卡</md-enum-item>
<md-enum-item key="2" >仅记录疑似作弊信息</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >machines</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >machine\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤机列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >machine_sn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤机序列号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >machine_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤机名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >gps_range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	GPS 打卡的有效范围（不建议使用）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >locations</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >location\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	地址列表（仅追加，不会覆盖之前的列表）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >location_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	地址 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >location_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	地址名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >location_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	地址类型

**可选值有：**
* 1：GPS
* 2：Wi-Fi
* 8：IP
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
	地址纬度
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
	地址经度
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ssid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Wi-Fi 名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >bssid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Wi-Fi 的 MAC 地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >map_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	地图类型，1：高德， 2：谷歌
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
	地址名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	IP 地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >feature</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	额外信息，例如：运营商信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >gps_range</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	GPS 打卡的有效范围
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >group_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤类型

**可选值有：**
* 0：固定班制
* 2：排班制
* 3：自由班制
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >punch_day_shift_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	固定班制返回，可用于[按 ID 查询班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/get)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >free_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >free_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	配置自由班制
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >free_start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自由班制打卡开始时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >free_end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自由班制打卡结束时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >punch_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡的时间，为 7 位数字，每一位依次代表周一到周日，0 为不上班，1 为上班
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >work_day_no_punch_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	工作日不打卡是否记为缺卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >work_hours_demand</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	工作日出勤是否需满足时长要求
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >work_hours</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	每日工作时长（分钟),范围[0,1440]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >calendar_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	国家日历  ID

**可选值有：**
* 0：不根据国家日历排休
* 1：中国大陆
* 2：美国
* 3：日本
* 4：印度
* 5：新加坡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >need_punch_special_days</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >punch_special_date_shift\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	必须打卡的特殊日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >punch_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >shift_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	班次 ID，可用于[按 ID 查询班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/get)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >no_need_punch_special_days</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >punch_special_date_shift\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	无需打卡的特殊日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >punch_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >shift_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	班次 ID，可用于[按 ID 查询班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/get)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_day_no_punch_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	自由班制下工作日不打卡是否记为缺卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >effect_now</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否立即生效，默认 false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >remedy_period_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	补卡周期类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >remedy_period_custom_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	补卡自定义周期起始日期
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >punch_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡类型。

位运算，即如果设置了 1 和 2 两种打卡类型，则对应的参数加和值为 3。

**可选值**：
* 1：GPS 打卡
* 2：Wi-Fi 打卡
* 4：考勤机打卡
* 8：IP 打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >effect_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	生效时间，精确到秒的时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >fixshift_effect_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	固定班次生效时间，精确到秒的时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >member_effect_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	参加考勤的人员、部门变动生效时间，精确到秒的时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >rest_clockIn_need_approval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	休息日打卡需审批
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >clockIn_need_photo</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	每次打卡均需拍照
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >member_status_change</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member_status_change</md-text>
	</md-dt-td>
	<md-dt-td>
	人员异动打卡设置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >onboarding_on_no_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否入职日上班无需打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >onboarding_off_no_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否入职日下班无需打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >offboarding_on_no_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否离职日上班无需打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >offboarding_off_no_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否离职日下班无需打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >leave_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	请假离岗或返岗是否需打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >leave_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >leave_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	请假离岗或返岗打卡规则，单位：分钟
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_late</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为迟到
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为缺卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_early</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为早退
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为缺卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >not_during_shift</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	班次中间请假，无需在离岗前或返岗后打卡（仅灰度租户有效，如需使用请联系技术支持）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >go_out_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	外出期间是否需打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >go_out_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >leave_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	外出期间打卡规则，单位：分钟
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_late</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为迟到
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为缺卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_early</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为早退
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为缺卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >not_during_shift</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	班次中间外出，无需在离岗前或返岗后打卡（仅灰度租户有效，如需使用请联系技术支持）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >travel_need_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	出差期间是否需打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >travel_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >leave_need_punch_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	出差期间打卡规则，单位：分钟
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_late</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为迟到
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >late_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	晚到超过多久记为缺卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_early</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为早退
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >early_minutes_as_lack</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	早走超过多久记为缺卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >not_during_shift</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	无需在出差离岗前或返岗后打卡（出差不生效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >need_punch_members</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >punch_member\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	需要打卡的人员集合（仅当不传「bind_dept_ids」和「bind_user_ids」时，才会使用该字段）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >rule_scope_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	圈人方式：0 无 1全部 2自定义
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >scope_group_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >scope_group</md-text>
	</md-dt-td>
	<md-dt-td>
	圈人规则列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >scope_value_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	**类型**：
* 1: 部门
* 2:人员
* 3: 国家地区
* 4: 员工类型
* 5: 工作城市
* 6: 职级
* 7: 序列
* 8: 职务（企业版）
* 9: 工时制度（企业版）
* 100: 自定义字段（企业版）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >operation_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	范围类型（是否包含）
* 1: 包含
* 2: 不包含
* 3: 相等
* 4: 小于等于
* 5: 大于等于
* 6: 大于
* 7: 小于
* 8: 不相等
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >right</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >scope_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	如果是人员/部门类型 不需要使用该字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	 标识Key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >member_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门/人员 ID 列表（根据 scope_value_type 判断为部门或人员）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >custom_field_ID</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	企业版自定义字段唯一键 ID, 需要从飞书人事那边获取
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >custom_field_obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	企业版自定义字段对象类型
* "Employment": 主数据对象，员工雇佣信息 
* "Person": 主数据对象，个人
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >no_need_punch_members</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >punch_member\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	无需打卡的人员集合（仅当不传「bind_default_dept_ids」和「bind_default_user_ids」时，才会使用该字段）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >rule_scope_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	圈人方式：0 无 1全部 2自定义
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >scope_group_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >scope_group</md-text>
	</md-dt-td>
	<md-dt-td>
	圈人规则列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >scope_value_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	**类型**：
* 1: 部门
* 2:人员
* 3: 国家地区
* 4: 员工类型
* 5: 工作城市
* 6: 职级
* 7: 序列
* 8: 职务（企业版）
* 9: 工时制度（企业版）
* 100: 自定义字段（企业版）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >operation_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	范围类型（是否包含）
* 1: 包含
* 2: 不包含
* 3: 相等
* 4: 小于等于
* 5: 大于等于
* 6: 大于
* 7: 小于
* 8: 不相等
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >right</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >scope_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	如果是人员/部门类型 不需要使用该字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	 标识Key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >member_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	部门/人员id列表（具体类型根据scope_value_type判断）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >custom_field_ID</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	企业版自定义字段唯一键 ID, 需要从飞书人事那边获取
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >custom_field_obj_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	企业版自定义字段对象类型
* "Employment": 主数据对象，员工雇佣信息 
* "Person": 主数据对象，个人
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >save_auto_changes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否允许保存有冲突人员的考勤组。如果 true，则冲突人员将被自动拉入到当前设置的考勤组中，并从原考勤组中移除；如果 false，则需手动调整冲突人员。默认为 false。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >org_change_auto_adjust</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	当有新员工入职或人员异动，符合条件的人员是否自动加入考勤组
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >bind_default_dept_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	参与无需打卡的部门 ID 列表（与「no_need_punch_members」同时使用时，以当前字段为准），对应dept_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >bind_default_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	参与无需打卡的人员 ID 列表（与「no_need_punch_members」同时使用时，以当前字段为准），对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >overtime_clock_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >overtime_clock_cfg</md-text>
	</md-dt-td>
	<md-dt-td>
	加班打卡规则
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >allow_punch_approval</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否允许在非打卡时段申请打卡（仅灰度租户有效，如需使用请联系技术支持）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >need_clock_over_time_start_and_end</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	加班开始和结束需打卡（仅灰度租户有效，如需使用请联系技术支持）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >new_calendar_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	节假日id，（如果考勤组使用了自定义节假日，请用此参数传入节假日id，可在假勤设置-节假日模块页面路径获取）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >allow_apply_punch</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	定位不准时是否允许申请打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >clock_in_abnormal_settings</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >ClockInAbnormalSettings</md-text>
	</md-dt-td>
	<md-dt-td>
	异常卡豁免配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ignore_until_latest_clockout</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	在最晚下班打卡之前忽略异常卡（仅灰度租户有效，如需使用请联系技术支持）
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
        "group": {
            "group_id": "6919358128597097404",
            "group_name": "开心考勤",
            "time_zone": "Asia/Shanghai",
            "bind_dept_ids": [
                "od-fcb45c28a45311afd440b7869541fce8"
            ],
            "except_dept_ids": [
                "od-fcb45c28a45311afd440b7869541fce8"
            ],
            "bind_user_ids": [
                "52aa1fa1"
            ],
            "except_user_ids": [
                "52aa1fa1"
            ],
            "group_leader_ids": [
                "2bg4a9be"
            ],
            "sub_group_leader_ids": [
                "52aa1fa1"
            ],
            "allow_out_punch": true,
            "out_punch_need_approval": true,
            "out_punch_need_post_approval": true,
            "out_punch_need_remark": true,
            "out_punch_need_photo": true,
            "out_punch_allowed_hide_addr": true,
            "out_punch_allowed_adjust_addr": true,
            "adjust_range": 50,
            "allow_pc_punch": true,
            "allow_remedy": true,
            "remedy_limit": true,
            "remedy_limit_count": 3,
            "remedy_date_limit": true,
            "remedy_date_num": 3,
            "allow_remedy_type_lack": true,
            "allow_remedy_type_late": true,
            "allow_remedy_type_early": true,
            "allow_remedy_type_normal": true,
            "show_cumulative_time": true,
            "show_over_time": true,
            "hide_staff_punch_time": true,
            "hide_clock_in_rule": false,
            "face_punch": true,
            "face_punch_cfg": 1,
            "face_live_need_action": false,
            "face_downgrade": true,
            "replace_basic_pic": true,
            "anti_cheat_punch_config": {
                "intercept_suspected_cheat_punch": true,
                "check_cheat_software_punch": true,
                "check_buddy_punch": true,
                "check_simulate_wifi_punch": true,
                "check_change_device_punch": true,
                "allow_change_device_num": 1,
                "suspected_cheat_handle_method": 1
            },
            "machines": [
                {
                    "machine_sn": "FS0701",
                    "machine_name": "创实 9 楼"
                }
            ],
            "gps_range": 300,
            "locations": [
                {
                    "location_id": "6921213751454744578",
                    "location_name": "浙江省杭州市余杭区五常街道木桥头西溪八方城",
                    "location_type": 1,
                    "latitude": 30.28994,
                    "longitude": 120.04509,
                    "ssid": "TP-Link-af12ca",
                    "bssid": "08:00:20:0A:8C:6D",
                    "map_type": 1,
                    "address": "北京市海淀区中航广场",
                    "ip": "122.224.123.146",
                    "feature": "中国电信",
                    "gps_range": 300
                }
            ],
            "group_type": 0,
            "punch_day_shift_ids": [
                "xxx",
                "0",
                "xxx",
                "xxx",
                "0",
                "xxx",
                "xxx",
                "xxx"
            ],
            "free_punch_cfg": {
                "free_start_time": "7:00",
                "free_end_time": "18:00",
                "punch_day": 1111100,
                "work_day_no_punch_as_lack": true,
                "work_hours_demand": false,
                "work_hours": 480
            },
            "calendar_id": 1,
            "need_punch_special_days": [
                {
                    "punch_day": 20190101,
                    "shift_id": "6919668827865513935"
                }
            ],
            "no_need_punch_special_days": [
                {
                    "punch_day": 20190101,
                    "shift_id": "6919668827865513935"
                }
            ],
            "work_day_no_punch_as_lack": true,
            "effect_now": true,
            "remedy_period_type": 0,
            "remedy_period_custom_date": 1,
            "punch_type": 1,
            "effect_time": "1611476284",
            "fixshift_effect_time": "1611476284",
            "member_effect_time": "1611476284",
            "rest_clockIn_need_approval": true,
            "clockIn_need_photo": true,
            "member_status_change": {
                "onboarding_on_no_need_punch": false,
                "onboarding_off_no_need_punch": false,
                "offboarding_on_no_need_punch": false,
                "offboarding_off_no_need_punch": false
            },
            "leave_need_punch": false,
            "leave_need_punch_cfg": {
                "late_minutes_as_late": 0,
                "late_minutes_as_lack": 0,
                "early_minutes_as_early": 0,
                "early_minutes_as_lack": 0,
                "not_during_shift": false
            },
            "go_out_need_punch": 0,
            "go_out_need_punch_cfg": {
                "late_minutes_as_late": 0,
                "late_minutes_as_lack": 0,
                "early_minutes_as_early": 0,
                "early_minutes_as_lack": 0,
                "not_during_shift": false
            },
            "travel_need_punch": 0,
            "travel_need_punch_cfg": {
                "late_minutes_as_late": 0,
                "late_minutes_as_lack": 0,
                "early_minutes_as_early": 0,
                "early_minutes_as_lack": 0,
                "not_during_shift": false
            },
            "need_punch_members": [
                {
                    "rule_scope_type": 0,
                    "scope_group_list": {
                        "scope_value_type": 1,
                        "operation_type": 1,
                        "right": [
                            {
                                "key": "CH",
                                "name": "中国大陆"
                            }
                        ],
                        "member_ids": [
                            "ec8ddg56"
                        ],
                        "custom_field_ID": "123213123",
                        "custom_field_obj_type": "employment"
                    }
                }
            ],
            "no_need_punch_members": [
                {
                    "rule_scope_type": 0,
                    "scope_group_list": {
                        "scope_value_type": 1,
                        "operation_type": 1,
                        "right": [
                            {
                                "key": "CH",
                                "name": "中国大陆"
                            }
                        ],
                        "member_ids": [
                            "ec8ddg56"
                        ],
                        "custom_field_ID": "123213123",
                        "custom_field_obj_type": "employment"
                    }
                }
            ],
            "save_auto_changes": false,
            "org_change_auto_adjust": false,
            "bind_default_dept_ids": [
                "od-fcb45c28a45311afd440b7869541fce8"
            ],
            "bind_default_user_ids": [
                "dd31248a"
            ],
            "overtime_clock_cfg": {
                "allow_punch_approval": false,
                "need_clock_over_time_start_and_end": false
            },
            "new_calendar_id": "7302191700771358252",
            "allow_apply_punch": true,
            "clock_in_abnormal_settings": {
                "ignore_until_latest_clockout": false
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
  <md-td>1220001</md-td>
  <md-td>param is invalis</md-td>
  <md-td>入参校验失败，请根据具体返回的信息检查入参。例如“employee_type invalid”代表人员类型异常。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220002</md-td>
  <md-td>tenant_id is empty</md-td>
  <md-td>请检查入参中的 tenant_access_token是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220003</md-td>
  <md-td>user_id type is not employee_id or employee_no</md-td>
  <md-td>employee_type只支持取值为 employee_id或者employee_no</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220004</md-td>
  <md-td>param is invalis</md-td>
  <md-td>请参考实际返回的错误信息排查问题。例如“user_id is not exist or does not have permission”代表入参传入的用户id不存在或者没有权限。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220005</md-td>
  <md-td>没有权限</md-td>
  <md-td>请前往[考勤管理后台](https://oa.feishu.cn/attendance/manage/member/list)检查数据权限范围</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220600</md-td>
  <md-td>通用错误信息</md-td>
  <md-td>通用错误信息包含多条，详细的错误信息以及处理建议可参见[错误信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/attendance-development-guidelines)。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1225000</md-td>
  <md-td>param is invalis</md-td>
  <md-td>请参考实际返回的错误信息排查问题。例如“internal server error”代表内部服务异常。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1227500</md-td>
  <md-td>param is invalis</md-td>
  <md-td>班次服务异常错误码，请参考实际返回的错误信息排查问题。例如“[BatchGetLarkIDByOpenID] not find user larkID”代表没有找到对应lark uid。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1227000</md-td>
  <md-td>param is invalis</md-td>
  <md-td>请参考实际返回的错误信息排查问题，如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




