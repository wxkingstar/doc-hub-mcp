<!--
title: 修改发放记录
id: 7239198678939713540
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/leave_accrual_record/patch
updatedAt: 1724136532000
source: https://open.feishu.cn/document/server-docs/attendance-v1/leave_accrual_record/patch
-->
# 修改发放记录


更新发放记录的发放数量和失效日期，对应假勤管理-休假管理-[发放记录](https://example.feishu.cn/people/workforce-management/manage/leave/leave_admin/granting_record){尝试一下}(url=/api/tools/api_explore/api_explore_config?project=attendance&version=v1&resource=leave_accrual_record&method=patch)

:::html
<md-alert type="tip">
- 仅飞书人事企业版可用
- 由系统生成的发放记录不可被更新
- 仅可更新「发放数量」和「失效日期」
</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="error">

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
      <md-td>https://open.feishu.cn/open-apis/attendance/v1/leave_accrual_record/:leave_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
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
    <md-tr>
      <md-th>
            字段权限要求
      </md-th>
      <md-td>
        <md-alert type="tip" icon="none">
        该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	<md-text type="field-name" >leave_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	假期类型ID，可通过[获取假期类型列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/leave/leave_types)获取

**示例值**："7111688079785723436"
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
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID 类型

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
<md-enum-item key="people_corehr_id" >以飞书人事的 ID 来识别用户</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	<md-text type="field-name" >leave_granting_record_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	发放记录的唯一ID，可通过[创建假期发放记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/leave_granting_record/create)

**示例值**："6893014062142064135"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >employment_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	员工ID，类型对应user_id_type

**示例值**："6982509313466189342"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >leave_type_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	假期类型ID，可通过[获取假期类型列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/leave/leave_types)获取

**示例值**："7111688079785723436"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >lang_text\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	修改发放记录原因
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >lang</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	语言码

**示例值**："zh_CN"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	语言码对应的文本

**示例值**："test"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >time_offset</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	时间偏移，东八区：480    8*60

**示例值**：480
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >expiration_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	失效日期，格式"2020-01-01"

**示例值**："2020-01-01"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >quantity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	修改发放数量

**示例值**："1"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "leave_granting_record_id": "6893014062142064135",
    "employment_id": "6982509313466189342",
    "leave_type_id": "7111688079785723436",
    "reason": [
        {
            "lang": "zh_CN",
            "value": "test"
        }
    ],
    "time_offset": 480,
    "expiration_date": "2020-01-01",
    "quantity": "1"
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
	<md-text type="field-name" >record</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >leave_accrual_record</md-text>
	</md-dt-td>
	<md-dt-td>
	员工过期日期的发放记录
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发放记录唯一ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >employment_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	员工ID，类型对应user_id_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >leave_type_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	假期类型ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >granting_quantity</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发放数量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >granting_unit</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	发放单位，1表示天，2表示小时
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >effective_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	生效日期，格式为yyyy-MM-dd
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >expiration_date</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	失效日期，格式为yyyy-MM-dd
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >granted_by</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	发放来源，1：系统发放；2：手动发放；3：外部系统发放
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >lang_text\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	发放原因
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >lang</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	语言码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	语言码对应的文本
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >created_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发放记录的创建时间，unix时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >created_by</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发放记录的创建人的ID，类型对应user_id_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >updated_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发放记录的更新时间，unix时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >updated_by</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发放记录的更新人的ID，类型对应user_id_type
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
        "record": {
            "id": "6893014062142064135",
            "employment_id": "6982509313466189342",
            "leave_type_id": "6893014062142064135",
            "granting_quantity": "1",
            "granting_unit": 1,
            "effective_date": "2020-01-01",
            "expiration_date": "2020-01-01",
            "granted_by": 1,
            "reason": [
                {
                    "lang": "zh_CN",
                    "value": "test"
                }
            ],
            "created_at": "1687428000",
            "created_by": "6982509313466189342",
            "updated_at": "1687428000",
            "updated_by": "6982509313466189342"
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
  <md-td>1220016</md-td>
  <md-td>Invalid param</md-td>
  <md-td>对照接口文档的入参排查，是否漏填参数、格式错误等（例如数值参数传了字母、日期格式错误等）</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220003</md-td>
  <md-td>Invalid effective date
</md-td>
  <md-td>日期格式必须是类似“2020-01-01”</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220001</md-td>
  <md-td>No tenant ID</md-td>
  <md-td>租户ID为空</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220006</md-td>
  <md-td>Employment not found

</md-td>
  <md-td>检查employmentID是否正确

</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220002</md-td>
  <md-td>Invalid granting unit
</md-td>
  <md-td>授予单位出错

</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220004</md-td>
  <md-td>Invalid granting quantity</md-td>
  <md-td>必须是能解析成数字的字符串，例如“2.5”</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220005</md-td>
  <md-td>Accessed data object not found</md-td>
  <md-td>检查leaveTypeID是否正确</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220007</md-td>
  <md-td>Leave plan version not found</md-td>
  <md-td>假期计划版本数据不存在，请检查该类型的假期对应的计划配置是否创建</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220008</md-td>
  <md-td>Error occurred while checking if the employee is eligible for the vacation plan</md-td>
  <md-td>员工不适用于假期计划版本，请检查该假期计划适用人员范围是否和员工信息匹配</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220009</md-td>
  <md-td>Accrual rule not found</md-td>
  <md-td>检查该假期计划版本是否正确创建，是否存在有效的发放规则</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220010</md-td>
  <md-td>Granting record already exists</md-td>
  <md-td>response里会带上已存在的发放记录的信息，用户可以将其取出，不需要再重试请求</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1220011</md-td>
  <md-td>Error occurred when getting employment information</md-td>
  <md-td>获取员工信息失败</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1220012</md-td>
  <md-td>An exception occurs in the database</md-td>
  <md-td>数据库异常，请联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1220013</md-td>
  <md-td>Error occurred while checking if the employee is eligible for the vacation plan.</md-td>
  <md-td>检查员工是否符合假期计划适用范围时发生错误</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1220028</md-td>
  <md-td>There is an error in the unit conversion configuration in the granting rule</md-td>
  <md-td>检查假期计划版本的单位转换规则是否配置正确</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1220014</md-td>
  <md-td>Error occurred when calculate accrual record</md-td>
  <md-td>计算授予计划错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220024</md-td>
  <md-td>There is a subclass for the leave type, but the subclass ID has not been passed</md-td>
  <md-td>如果假期类型存在子类，那么leaveTypeID必须传子类ID</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220025</md-td>
  <md-td>The granting quantity range is from -9999 to 9999</md-td>
  <md-td>额度范围为-9999～9999</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220026</md-td>
  <md-td>The number of decimal places of the granted quantity cannot exceed 6</md-td>
  <md-td>最多6位小数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220027</md-td>
  <md-td>The length of the granting reason cannot exceed 3000</md-td>
  <md-td>发放原因长度最多3000</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220029</md-td>
  <md-td>The leave type has been deactivated</md-td>
  <md-td>不能往已停用的假期类型写发放记录</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220030</md-td>
  <md-td>The length of the granted unique ID cannot exceed 64</md-td>
  <md-td>检查参数</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1229999</md-td>
  <md-td>Unknown error</md-td>
  <md-td>未知错误，请联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1220015</md-td>
  <md-td>Internal error</md-td>
  <md-td>内部错误，请联系 [技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220017</md-td>
  <md-td>User not found</md-td>
  <md-td>获取员工信息失败，请检查员工ID</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1220018</md-td>
  <md-td>Invalid leave balance calculate Conf</md-td>
  <md-td>联系研发</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1220019</md-td>
  <md-td>The calculation result of leave balance is empty</md-td>
  <md-td>联系研发</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220020</md-td>
  <md-td>When calculating the leave balance, there is no leave plan version that matches the employee</md-td>
  <md-td>检查该员工任职期间是否有对应的假期计划版本</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220021</md-td>
  <md-td>For the leave type that is not granted according to the cycle, balance calculation is not supported</md-td>
  <md-td>不按周期发放的假期类型，不支持余额计算，联系研发</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220022</md-td>
  <md-td>The data of the leave plan version is invalid</md-td>
  <md-td>假期计划版本数据不合法</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220031</md-td>
  <md-td>This granting record cannot be edited or deleted</md-td>
  <md-td>该授予记录不可编辑或删除</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220032</md-td>
  <md-td>The expiration time of this granting record is invalid</md-td>
  <md-td>更新发放记录的过期时间异常，请仔细校验下，过期时间可能小于生效时间。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1220600</md-td>
  <md-td>通用错误信息</md-td>
  <md-td>通用错误信息包含多条，详细的错误信息以及处理建议可参见 [错误信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/attendance-development-guidelines)</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




