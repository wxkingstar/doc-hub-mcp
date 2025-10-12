<!--
title: 查询打卡流水
id: 7044467124773535745
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/get
updatedAt: 1723544609000
source: https://open.feishu.cn/document/server-docs/attendance-v1/user_task/get
-->
# 查询打卡流水

通过打卡记录 ID 获取用户的打卡流水记录。返回信息主要包含：
* 用户id和创建者id
* 记录信息
* 打卡位置信息、时间信息
* 打卡方式信息
   * GPS 打卡：location_name（定位地址信息）
   * Wi-Fi 打卡：ssid（wifi名称）、bssid（mac地址）
   * 考勤机打卡：device_id（考勤机设备id）

对应页面功能打卡管理-[打卡记录](https://example.feishu.cn/people/workforce-management/manage/statistics/flow){尝试一下}(url=/api/tools/api_explore/api_explore_config?project=attendance&version=v1&resource=user_flow&method=get)

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
      <md-td>https://open.feishu.cn/open-apis/attendance/v1/user_flows/:user_flow_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
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
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="attendance:task" desc="写入打卡数据" support_app_types="custom,isv" tags="">写入打卡数据</md-perm>
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
</md-tbody>
</md-table>
:::



### 路径参数
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
	<md-text type="field-name" >user_flow_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡流水记录 ID，获取方式：1）[批量查询打卡流水记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/query) 2）[获取打卡结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_task/query) 3）[导入打卡流水记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/batch_create)

**示例值**："6708236686834352397"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	响应体中的 user_id 和 creator_id 的员工ID类型。如果没有后台管理权限，可使用[通过手机号或邮箱获取用户 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id)

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
	<md-text type="field-type" >user_flow</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >record_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	对应打卡流水记录ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	记录生成方式，在开放平台调用时，此参数无效，内部值始终是7

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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >check_result</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	打卡结果，目前仅支持PendingApproval待生效。如需获取打卡结果请使用[获取打卡结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_task/query)

**可选值有**：
<md-enum>
<md-enum-item key="NoNeedCheck" >无需打卡</md-enum-item>
<md-enum-item key="SystemCheck" >系统打卡</md-enum-item>
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


<md-dt-tr level="1">
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


<md-dt-tr level="1">
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
  <md-td>组织架构服务系统错误</md-td>
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




