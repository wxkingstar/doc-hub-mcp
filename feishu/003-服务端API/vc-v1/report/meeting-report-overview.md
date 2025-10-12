<!--
title: 资源介绍
id: 7043721274330710019
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/report/meeting-report-overview
updatedAt: 1679916472000
source: https://open.feishu.cn/document/server-docs/vc-v1/report/meeting-report-overview
-->
#  资源介绍
##  资源定义
会议报告用于记录一段时间内租户会议的使用情况，包括：[获取会议报告](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/report/get_daily)、[获取 Top 用户列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/report/get_top_user)。

##  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 30%;">类型</md-th>
      <md-th style="width: 30%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
<md-tr>
        <md-td>
        <md-text type="field-name" >start_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        开始时间（unix时间，单位sec）

**示例值**："1608888867"

        </md-td>
</md-tr>
    
    <md-tr>
        <md-td>
        <md-text type="field-name" >end_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        结束时间（unix时间，单位sec）

**示例值**："1608888966"
          

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >limit</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
        取前多少位

**示例值**：10

        </md-td>
</md-tr>
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >order_by</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
        排序依据（降序）

**示例值**：1
          
**可选值有**：
- `1`：会议数量
- `2`：会议时长

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >data</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >-</md-text>
        </md-td>
			
        <md-td> 
          
    	<md-text type="field-type" >-</md-text>
        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >meeting_report</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >report</md-text>
        </md-td>

        <md-td>
        会议报告

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >total_meeting_count</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        总会议数量

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >total_meeting_duration</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        总会议时长（单位sec）
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >total_participant_count</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
总参会人数
          
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >daily_report</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >report_meeting_daily[]</md-text>
        </md-td>

        <md-td>
        每日会议报告列表
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >date</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        日期（unix时间，单位sec）
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >meeting_count</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议数量
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >meeting_duration</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议时长（单位sec）
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >participant_count</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        参会人数
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >data</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >-</md-text>
        </md-td>
			
        <md-td> 
          
    	<md-text type="field-type" >-</md-text>
        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >top_user_report</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >report_top_user[]</md-text>
        </md-td>

        <md-td>
        top用户列表

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        用户ID

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >name</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        用户名
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >user_type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
用户类型
          
**可选值有**：
- `1`：lark用户
- `2`：rooms用户
- `3`：文档用户
- `4`：neo单品用户
- `5`：neo单品游客用户
- `6`：pstn用户
- `7`：sip用户
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >meeting_count</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议数量
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >meeting_duration</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议时长（单位sec）
        </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::
###  数据示例
```json
{
    "start_time":"1608888867",
    "end_time":"1608888966",
    "limit":10,
    "order_by":1,
    "data": {
        "meeting_report": {
            "total_meeting_count": "100",
            "total_meeting_duration": "300000",
            "total_participant_count": "20000",
            "daily_report": [
                {
                    "date": "1609113600",
                    "meeting_count": "100",
                    "meeting_duration": "147680",
                    "participant_count": "2000"
                }
            ]
        }
    }
    "data": {
        "top_user_report": [
            {
                "id": "ou_3ec3f6a28a0d08c45d895276e8e5e19b",
                "name": "name",
                "user_type": 1,
                "meeting_count": "100",
                "meeting_duration": "3000"
            }
        ]
    }
}
```