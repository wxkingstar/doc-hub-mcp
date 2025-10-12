<!--
title: 通知补卡审批发起
id: 7044467124773715969
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_task_remedy/create
updatedAt: 1724896959000
source: https://open.feishu.cn/document/server-docs/attendance-v1/user_task_remedy/create
-->
# 通知补卡审批发起

对于只使用飞书考勤系统而未使用飞书审批系统的企业，可以通过该接口，将在三方审批系统中发起的补卡审批数据，写入到飞书考勤系统中，状态为审批中。写入后可以由[通知审批状态更新](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/approval_info/process) 进行状态更新{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=attendance&version=v1&resource=user_task_remedy&method=create)

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
      <md-td>https://open.feishu.cn/open-apis/attendance/v1/user_task_remedys</md-td>
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
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="attendance:task" desc="写入打卡数据" support_app_types="custom,isv" tags="">写入打卡数据</md-perm>
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
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	用户 ID，对应employee_type

**示例值**："abd754f7"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >remedy_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	补卡日期，日期格式yyyyMMdd

**示例值**：20210701
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >punch_no</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	第几次上下班，0：第 1 次上下班，1：第 2 次上下班，2：第 3 次上下班，自由班制填 0

**示例值**：0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >work_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	上班 / 下班，1：上班，2：下班，自由班制填 0

**示例值**：1
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >remedy_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	补卡时间，时间格式为 yyyy-MM-dd HH:mm

**示例值**："2021-07-01 08:00"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	补卡原因

**示例值**："忘记打卡"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	字段已失效

**示例值**："-"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "user_id": "abd754f7",
    "remedy_date": 20210701,
    "punch_no": 0,
    "work_type": 1,
    "remedy_time": "2021-07-01 08:00",
    "reason": "忘记打卡",
    "time": "-"
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
	<md-text type="field-name" >user_remedy</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_task_remedy</md-text>
	</md-dt-td>
	<md-dt-td>
	补卡审批信息
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
	<md-text type="field-name" >remedy_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	补卡日期，日期格式yyyyMMdd
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >punch_no</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	第几次上下班，0：第 1 次上下班，1：第 2 次上下班，2：第 3 次上下班，自由班制填 0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	上班 / 下班，1：上班，2：下班，自由班制填 0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >approval_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批 ID，可用于[通知审批状态更新](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/approval_info/process)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >remedy_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	补卡时间，时间格式为 yyyy-MM-dd HH:mm
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	无效字段，默认数据全部返回的类型为审批中，需要调用[通知审批状态更新](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/approval_info/process)

**可选值有**：
<md-enum>
<md-enum-item key="0" >审批中</md-enum-item>
<md-enum-item key="1" >未通过</md-enum-item>
<md-enum-item key="2" >已通过</md-enum-item>
<md-enum-item key="3" >已取消</md-enum-item>
<md-enum-item key="4" >通过后撤回</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	补卡原因
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无效字段
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
	无效字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无效字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >update_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	无效字段
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
        "user_remedy": {
            "user_id": "abd754f7",
            "remedy_date": 20210701,
            "punch_no": 0,
            "work_type": 1,
            "approval_id": "6737202939523236113",
            "remedy_time": "2021-07-01 08:00",
            "status": 2,
            "reason": "忘记打卡",
            "time": "-",
            "time_zone": "-",
            "create_time": "-",
            "update_time": "-"
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
  <md-td>500</md-td>
  <md-td>1225001</md-td>
  <md-td>param is invalis</md-td>
  <md-td>请参考实际返回的错误信息排查问题。返回错误格式为导入的审批数据，格式为：{"TripErrorRecords":"","OvertimeWorkErrorRecords":"","LeaveErrorRecords":"","OutErrorRecords":""}。如仍无法解决可联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1226501</md-td>
  <md-td>no need remedy</md-td>
  <md-td>当天没有异常考勤，无需补卡</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1226502</md-td>
  <md-td>not allowed remedy</md-td>
  <md-td>考勤组设置不允许补卡</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1226503</md-td>
  <md-td>approval time beyond the time range</md-td>
  <md-td>考勤组设置只允许补过去多少天的卡，超出可补卡日期</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1226504</md-td>
  <md-td>no remedy time left</md-td>
  <md-td>超出补卡次数，当前周期的补卡次数已用完</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




