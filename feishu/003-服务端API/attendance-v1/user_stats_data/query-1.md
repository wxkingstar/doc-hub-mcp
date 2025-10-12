<!--
title: 查询统计设置
id: 7044467124773830657
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_view/query
updatedAt: 1723544574000
source: https://open.feishu.cn/document/server-docs/attendance-v1/user_stats_data/query
-->
# 查询统计设置

查询考勤统计支持的日度统计或月度统计的统计表头。报表的表头信息可以在考勤统计-[报表](https://example.feishu.cn/people/workforce-management/manage/statistics/report)中查询到具体的报表信息，此接口专门用于查询表头数据。注意此接口和[查询统计表头](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_field/query)基本相同，区别点在于在兼容历史统计视图模型（历史统计数据模型可以按用户ID设置，后续统计升级为仅支持租户维度）{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=attendance&version=v1&resource=user_stats_view&method=query)

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
      <md-td>https://open.feishu.cn/open-apis/attendance/v1/user_stats_views/query</md-td>
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
	<md-text type="field-name" >locale</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	语言类型

**示例值**："zh"

**可选值有**：
<md-enum>
<md-enum-item key="en" >英语</md-enum-item>
<md-enum-item key="ja" >日语</md-enum-item>
<md-enum-item key="zh" >中文</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >stats_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	统计类型

**示例值**："daily"

**可选值有**：
<md-enum>
<md-enum-item key="daily" >日度统计</md-enum-item>
<md-enum-item key="month" >月度统计</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	操作者的用户id，对应employee_type

* 必填字段(系统升级后，新系统要求必填)

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
    "locale": "zh",
    "stats_type": "daily",
    "user_id": "dd31248a"
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
	<md-text type="field-name" >view</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_stats_view</md-text>
	</md-dt-td>
	<md-dt-td>
	统计视图
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >view_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	视图 ID，可用于[更新统计设置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_view/update) 
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >stats_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	视图类型

**可选值有**：
<md-enum>
<md-enum-item key="daily" >日度统计</md-enum-item>
<md-enum-item key="month" >月度统计</md-enum-item>
</md-enum>
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
	操作者的用户id，对应employee_type
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >item\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	用户设置字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	标题编号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	标题名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >child_items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >child_item\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	子标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	子标题编号
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	开关字段，0：关闭，1：开启
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	子标题名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >column_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	列类型
* `0`：未知（默认）
* `1`：复选框
* `2`：文本
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >read_only</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否只读
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >min_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	最小值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >max_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	最大值
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
    "msg": "",
    "data": {
        "view": {
            "items": [
                {
                    "child_items": [
                        {
                            "code": "50101",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": true,
                            "title": "姓名",
                            "value": "1"
                        },
                        {
                            "code": "50102",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "部门",
                            "value": "0"
                        },
                        {
                            "code": "50111",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "组织架构",
                            "value": "0"
                        },
                        {
                            "code": "50103",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "工号",
                            "value": "1"
                        },
                        {
                            "code": "50104",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "邮箱",
                            "value": "0"
                        },
                        {
                            "code": "50105",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "雇员类型",
                            "value": "0"
                        },
                        {
                            "code": "50106",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "序列",
                            "value": "0"
                        },
                        {
                            "code": "50107",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "入职时间",
                            "value": "0"
                        },
                        {
                            "code": "50108",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "离职时间",
                            "value": "0"
                        },
                        {
                            "code": "50109",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "状态",
                            "value": "0"
                        },
                        {
                            "code": "50110",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "直属上级",
                            "value": "0"
                        }
                    ],
                    "code": "501",
                    "title": "基本信息"
                },
                {
                    "child_items": [
                        {
                            "code": "52108",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "考勤组名称",
                            "value": "1"
                        },
                        {
                            "code": "52101",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "应出勤天数",
                            "value": "1"
                        },
                        {
                            "code": "52102",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "工作日出勤天数",
                            "value": "1"
                        },
                        {
                            "code": "52103",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "休息日出勤天数",
                            "value": "0"
                        },
                        {
                            "code": "52104",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "应出勤时长",
                            "value": "1"
                        },
                        {
                            "code": "52105",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "实际出勤时长",
                            "value": "1"
                        },
                        {
                            "code": "52106",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "计薪工作时长",
                            "value": "0"
                        },
                        {
                            "code": "52107",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "加班工作时长",
                            "value": "1"
                        },
                        {
                            "code": "52109",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "加班时长(计加班费)\n",
                            "value": "0"
                        },
                        {
                            "code": "52110",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "加班时长(计为调休)\n",
                            "value": "0"
                        }
                    ],
                    "code": "521",
                    "title": "出勤统计"
                },
                {
                    "child_items": [
                        {
                            "code": "52201",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "迟到次数",
                            "value": "1"
                        },
                        {
                            "code": "52202",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "迟到时长",
                            "value": "0"
                        },
                        {
                            "code": "52203",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "早退次数",
                            "value": "1"
                        },
                        {
                            "code": "52204",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "早退时长",
                            "value": "0"
                        },
                        {
                            "code": "52205",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "上班缺卡次数",
                            "value": "0"
                        },
                        {
                            "code": "52206",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "下班缺卡次数",
                            "value": "0"
                        },
                        {
                            "code": "52207",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "缺勤",
                            "value": "1"
                        },
                        {
                            "code": "52208",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "请假时长",
                            "value": "0"
                        },
                        {
                            "code": "52209",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "出差时长",
                            "value": "0"
                        },
                        {
                            "code": "52211",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "换班天数",
                            "value": "0"
                        },
                        {
                            "code": "52212",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "补卡次数",
                            "value": "0"
                        },
                        {
                            "code": "52213",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "外勤次数",
                            "value": "0"
                        },
                        {
                            "code": "52214",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "外出时长\t",
                            "value": "0"
                        }
                    ],
                    "code": "522",
                    "title": "异常统计"
                },
                {
                    "child_items": [
                        {
                            "code": "52401",
                            "column_type": 0,
                            "max_value": "",
                            "min_value": "",
                            "read_only": false,
                            "title": "每日考勤结果",
                            "value": "1"
                        }
                    ],
                    "code": "524",
                    "title": "每日统计"
                }
            ],
            "stats_type": "month",
            "user_id": "ec8ddg56",
            "view_id": "TmpZNU5qTTJORFF6T1RnNU5UTTNOakV6TWl0dGIyNTBhQT09"
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
  <md-td>500</md-td>
  <md-td>1228000</md-td>
  <md-td>历史错误码，不再使用</md-td>
  <md-td>-</md-td>
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




