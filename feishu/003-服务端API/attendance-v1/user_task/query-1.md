<!--
title: 查询打卡结果
id: 7044467124773421057
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_task/query
updatedAt: 1729735417000
source: https://open.feishu.cn/document/server-docs/attendance-v1/user_task/query
-->
# 查询打卡结果

获取企业内员工的实际打卡结果，包括：
* 打卡任务列表
	* 打卡记录id
	* 用户信息
	* 考勤组id
	* 班次id
	* 考勤记录
		* 上班记录
		* 下班记录
		* 上班打卡结果
		* 下班打卡结果
		* 上班打卡结果补充
		* 下班打卡结果补充
		* 上班打卡时间
		* 下班打卡时间
* 无效用户id列表
* 没有权限用户ID列表{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=attendance&version=v1&resource=user_task&method=query)

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
- 如果企业给一个员工设定的班次是上午 9 点和下午 6 点各打一次上下班卡，即使员工在这期间打了多次卡，该接口也只会返回 1 条记录。
- 如果要获取打卡的详细数据，如打卡位置等信息，可使用[查询打卡流水](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/get)或[批量查询打卡流水](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/query)的接口
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
      <md-td>https://open.feishu.cn/open-apis/attendance/v1/user_tasks/query</md-td>
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
            <md-perm name="attendance:task:readonly" desc="导出打卡数据" support_app_types="custom" tags="">导出打卡数据</md-perm>
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
	员工ID类型。如果没有后台管理权限，可使用[通过手机号或邮箱获取用户 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id)

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
	<md-text type="field-name" >ignore_invalid_users</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否忽略无效和没有权限的用户，对应employee_type。如果 true，则返回有效用户的信息，并告知无效和没有权限的用户信息；如果 false，且 user_ids 中存在无效或没有权限的用户，则返回错误

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >include_terminated_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	由于新入职员工可以复用已离职员工的 employee_no/employee_id，对应employee_type。如果 true，则返回 employee_no/employee_id 对应的所有在职 + 离职员工的数据；如果 false，则只返回 employee_no/employee_id 对应的在职或最近一个离职员工的数据

**示例值**：true
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
	<md-text type="field-name" >user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	employee_no 或 employee_id 列表，对应employee_type，长度不超过 50

**示例值**：["abd754f7"]
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >check_date_from</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	查询的起始工作日，格式为yyyyMMdd

**示例值**：20190817
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >check_date_to</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	查询的结束工作日，格式为yyyyMMdd

**示例值**：20190820
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >need_overtime_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否需要加班班段打卡结果；当need_overtime_result=true时，会返回加班班段，加班班段通过task_shift_type=1标识，加班班段上下班与正常班段相连时会出现共用record_id情况。例如：9-18为正常班次，18-19为加班班次，打卡结果中records 会出现两段，分别为9-18，18-19 且两段上下班record_id相同（check_in_record_id和check_out_record_id相同）。非相连加班班次正常分段返回。当need_overtime_result=false时，仅返回正常班段且task_shift_type=0。

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
    "user_ids": [
        "abd754f7"
    ],
    "check_date_from": 20190817,
    "check_date_to": 20190820,
    "need_overtime_result": true
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
	<md-text type="field-name" >user_task_results</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_task\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡任务列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >result_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡记录 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 ID，对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >employee_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户姓名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	日期，格式为yyyyMMdd
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
	考勤组 ID（特别说明：1代表未加入考勤组），可用于[按 ID 查询考勤组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/group/get)
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
	班次 ID（特别说明：9代表默认班次），可用于[按 ID 查询班次](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/get)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >records</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task_result\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	用户考勤记录
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_in_record_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	上班打卡记录 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_in_record</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_flow</md-text>
	</md-dt-td>
	<md-dt-td>
	上班打卡记录
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 ID，对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >creator_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	记录创建者 ID，对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >location_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡位置名称信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >check_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡时间，精确到秒的时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >comment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡备注
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >record_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤内部的打卡记录ID（导入时此参数无效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ssid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡 Wi-Fi 的 SSID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >bssid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡 Wi-Fi 的 MAC 地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为外勤打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_wifi</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为 Wi-Fi 打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	记录生成方式

**可选值有**：
<md-enum>
<md-enum-item key="0" >用户打卡</md-enum-item>
<md-enum-item key="1" >管理员修改</md-enum-item>
<md-enum-item key="2" >用户补卡</md-enum-item>
<md-enum-item key="3" >系统自动生成</md-enum-item>
<md-enum-item key="4" >下班免打卡</md-enum-item>
<md-enum-item key="5" >考勤机</md-enum-item>
<md-enum-item key="6" >极速打卡</md-enum-item>
<md-enum-item key="7" >考勤开放平台导入</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >photo_urls</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡照片列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >device_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡设备ID（只支持小程序打卡，导入时无效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >check_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡结果。目前仅返回 `PendingApproval`，表示待生效。如需获取上班打卡结果，请使用 `check_in_result` 参数。

**可选值有**：
<md-enum>
<md-enum-item key="NoNeedCheck" >无需打卡</md-enum-item>
<md-enum-item key="SystemCheck" >系统打卡（已弃用）</md-enum-item>
<md-enum-item key="Normal" >正常</md-enum-item>
<md-enum-item key="Early" >早退</md-enum-item>
<md-enum-item key="Late" >迟到</md-enum-item>
<md-enum-item key="SeriousLate" >严重迟到</md-enum-item>
<md-enum-item key="Lack" >缺卡</md-enum-item>
<md-enum-item key="Invalid" >无效</md-enum-item>
<md-enum-item key="None" >无状态</md-enum-item>
<md-enum-item key="Todo" >尚未打卡</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >external_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户导入的外部打卡记录ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >idempotent_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	唯一幂等键
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_out_record_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下班打卡记录 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_out_record</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_flow</md-text>
	</md-dt-td>
	<md-dt-td>
	下班打卡记录
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户 ID，对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >creator_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	记录创建者 ID，对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >location_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡位置名称信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >check_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡时间，精确到秒的时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >comment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡备注
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >record_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	考勤内部的打卡记录ID（导入时此参数无效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ssid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡 Wi-Fi 的 SSID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >bssid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡 Wi-Fi 的 MAC 地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_field</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为外勤打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >is_wifi</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为 Wi-Fi 打卡
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	记录生成方式

**可选值有**：
<md-enum>
<md-enum-item key="0" >用户打卡</md-enum-item>
<md-enum-item key="1" >管理员修改</md-enum-item>
<md-enum-item key="2" >用户补卡</md-enum-item>
<md-enum-item key="3" >系统自动生成</md-enum-item>
<md-enum-item key="4" >下班免打卡</md-enum-item>
<md-enum-item key="5" >考勤机</md-enum-item>
<md-enum-item key="6" >极速打卡</md-enum-item>
<md-enum-item key="7" >考勤开放平台导入</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >photo_urls</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡照片列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >device_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡设备ID（只支持小程序打卡，导入时无效）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >check_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡结果。目前仅返回 `PendingApproval`，表示待生效。如需获取下班打卡结果，请使用 `check_out_result` 参数。

**可选值有**：
<md-enum>
<md-enum-item key="NoNeedCheck" >无需打卡</md-enum-item>
<md-enum-item key="SystemCheck" >系统打卡（已弃用）</md-enum-item>
<md-enum-item key="Normal" >正常</md-enum-item>
<md-enum-item key="Early" >早退</md-enum-item>
<md-enum-item key="Late" >迟到</md-enum-item>
<md-enum-item key="SeriousLate" >严重迟到</md-enum-item>
<md-enum-item key="Lack" >缺卡</md-enum-item>
<md-enum-item key="Invalid" >无效</md-enum-item>
<md-enum-item key="None" >无状态</md-enum-item>
<md-enum-item key="Todo" >尚未打卡</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >external_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户导入的外部打卡记录ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >idempotent_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	唯一幂等键
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_in_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	上班打卡结果

**可选值有**：
<md-enum>
<md-enum-item key="NoNeedCheck" >无需打卡</md-enum-item>
<md-enum-item key="SystemCheck" >系统打卡（已弃用）</md-enum-item>
<md-enum-item key="Normal" >正常</md-enum-item>
<md-enum-item key="Early" >早退</md-enum-item>
<md-enum-item key="Late" >迟到</md-enum-item>
<md-enum-item key="Lack" >缺卡</md-enum-item>
<md-enum-item key="Todo" >未打卡</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_out_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下班打卡结果

**可选值有**：
<md-enum>
<md-enum-item key="NoNeedCheck" >无需打卡</md-enum-item>
<md-enum-item key="SystemCheck" >系统打卡（已弃用）</md-enum-item>
<md-enum-item key="Normal" >正常</md-enum-item>
<md-enum-item key="Early" >早退</md-enum-item>
<md-enum-item key="Late" >迟到</md-enum-item>
<md-enum-item key="Lack" >缺卡</md-enum-item>
<md-enum-item key="Todo" >未打卡</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_in_result_supplement</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	上班打卡结果补充

**可选值有**：
<md-enum>
<md-enum-item key="None" >无</md-enum-item>
<md-enum-item key="ManagerModification" >管理员修改</md-enum-item>
<md-enum-item key="CardReplacement" >补卡通过</md-enum-item>
<md-enum-item key="ShiftChange" >换班</md-enum-item>
<md-enum-item key="Travel" >出差</md-enum-item>
<md-enum-item key="Leave" >请假</md-enum-item>
<md-enum-item key="GoOut" >外出</md-enum-item>
<md-enum-item key="CardReplacementApplication" >补卡申请中</md-enum-item>
<md-enum-item key="FieldPunch" >外勤打卡</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_out_result_supplement</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下班打卡结果补充

**可选值有**：
<md-enum>
<md-enum-item key="None" >无</md-enum-item>
<md-enum-item key="ManagerModification" >管理员修改</md-enum-item>
<md-enum-item key="CardReplacement" >补卡通过</md-enum-item>
<md-enum-item key="ShiftChange" >换班</md-enum-item>
<md-enum-item key="Travel" >出差</md-enum-item>
<md-enum-item key="Leave" >请假</md-enum-item>
<md-enum-item key="GoOut" >外出</md-enum-item>
<md-enum-item key="CardReplacementApplication" >补卡申请中</md-enum-item>
<md-enum-item key="FieldPunch" >外勤打卡</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_in_shift_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	上班打卡时间，秒级时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >check_out_shift_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	下班打卡时间，秒级时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >task_shift_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	班次类型，0正常，1加班班次
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >invalid_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	无效用户 ID 列表，对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >unauthorized_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	没有权限用户 ID 列表，对应employee_type
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
        "user_task_results": [
            {
                "result_id": "6709359313699356941",
                "user_id": "abd754f7",
                "employee_name": "张三",
                "day": 20190819,
                "group_id": "6737202939523236110",
                "shift_id": "6753520403404030215",
                "records": [
                    {
                        "check_in_record_id": "6709359313699356941",
                        "check_in_record": {
                            "user_id": "abd754f7",
                            "creator_id": "abd754f7",
                            "location_name": "西溪八方城",
                            "check_time": "1611476284",
                            "comment": "上班打卡",
                            "record_id": "6709359313699356941",
                            "ssid": "b0:b8:67:5c:1d:72",
                            "bssid": "b0:b8:67:5c:1d:72",
                            "is_field": true,
                            "is_wifi": true,
                            "type": 7,
                            "photo_urls": [
                                "https://time.clockin.biz/manage/download/6840389754748502021"
                            ],
                            "device_id": "99e0609ee053448596502691a81428654d7ded64c7bd85acd982d26b3636c37d",
                            "check_result": "Invalid",
                            "external_id": "record_123",
                            "idempotent_id": "****_***"
                        },
                        "check_out_record_id": "6709359313699356942",
                        "check_out_record": {
                            "user_id": "abd754f7",
                            "creator_id": "abd754f7",
                            "location_name": "西溪八方城",
                            "check_time": "1611476284",
                            "comment": "上班打卡",
                            "record_id": "6709359313699356941",
                            "ssid": "b0:b8:67:5c:1d:72",
                            "bssid": "b0:b8:67:5c:1d:72",
                            "is_field": true,
                            "is_wifi": true,
                            "type": 7,
                            "photo_urls": [
                                "https://time.clockin.biz/manage/download/6840389754748502021"
                            ],
                            "device_id": "99e0609ee053448596502691a81428654d7ded64c7bd85acd982d26b3636c37d",
                            "check_result": "Invalid",
                            "external_id": "record_123",
                            "idempotent_id": "****_***"
                        },
                        "check_in_result": "SystemCheck",
                        "check_out_result": "SystemCheck",
                        "check_in_result_supplement": "None",
                        "check_out_result_supplement": "None",
                        "check_in_shift_time": "1609722000",
                        "check_out_shift_time": "1609754400",
                        "task_shift_type": 0
                    }
                ]
            }
        ],
        "invalid_user_ids": [
            "abd754f7"
        ],
        "unauthorized_user_ids": [
            "abd754f7"
        ]
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
  <md-td>500</md-td>
  <md-td>1225000</md-td>
  <md-td>param is invalis</md-td>
  <md-td>请参考实际返回的错误信息排查问题。例如“internal server error”代表内部服务异常。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1226500</md-td>
  <md-td>历史错误码，不再使用</md-td>
  <md-td>-</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1227500</md-td>
  <md-td>param is invalis</md-td>
  <md-td>班次服务异常错误码，请参考实际返回的错误信息排查问题。例如“[BatchGetLarkIDByOpenID] not find user larkID”代表没有找到对应lark uid。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220600</md-td>
  <md-td>通用错误信息</md-td>
  <md-td>通用错误信息包含多条，详细的错误信息以及处理建议可参见[错误信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/attendance-development-guidelines)。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




