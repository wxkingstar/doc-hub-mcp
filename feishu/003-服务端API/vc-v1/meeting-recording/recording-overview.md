<!--
title: 资源介绍
id: 7043721274330742787
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/recording-overview
updatedAt: 1679916459000
source: https://open.feishu.cn/document/server-docs/vc-v1/meeting-recording/recording-overview
-->
# 资源介绍
##  资源定义
用户可以录制一场会议，在会议结束后获得会议录制文件链接，包括：[开始录制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/start)、[停止录制](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/stop)、[获取录制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/get)、[授权录制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/set_permission)。

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
        <md-text type="field-name" >meeting_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议ID（视频会议的唯一标识，视频会议开始后才会产生）

**示例值**："6911188411932033028"

        </md-td>
</md-tr>
    
    <md-tr>
        <md-td>
        <md-text type="field-name" >user_id_type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        用户 ID 类型

**示例值**："open_id"
          
**可选值有**：
- `open_id`：用户的 open id
- `union_id`：用户的 union id
- `user_id`：用户的 user id
          
**默认值**：`open_id`
          
**当值为** `user_id` **，字段权限要求**：
          
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >timezone</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
        录制文件时间显示使用的时区[-12,12]

**示例值**：8

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
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >recording</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >meeting.recording</md-text>
        </md-td>

        <md-td>
        录制文件数据

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >url</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        录制文件URL

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >duration</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        录制总时长（单位msec）
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >permission_objects</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >recording_permission_object[]</md-text>
        </md-td>
	
        <md-td>
        授权对象列表

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
授权对象ID
           
**示例值**：         
"ou_3ec3f6a28a0d08c45d895276e8e5e19b"
        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
授权对象类型
          
**示例值**：1
          
**可选值有**：
- `1`：用户授权
- `2`：群组授权
- `3`：租户内授权（id字段不填）
- `4`：公网授权（id字段不填）

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >permission</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
权限
          
          
**示例值**：1
          
          
**可选值有**：
- `1`：查看
        </md-td>
</md-tr>



  </md-tbody>
</md-table>
:::
###  数据示例
```json
{
    "meeting_id":"6911188411932033028",
    "user_id_type":"open_id",
    "timezone":8,
    "data":{
        "recording":{
            "url":"https://meetings.feishu.cn/minutes/obcn37dxcftoc3656rgyejm7",
            "duration":"30000",
        }
    },
    "permission_objects":[
    {
        "id":"ou_3ec3f6a28a0d08c45d895276e8e5e19b",
        "type":1,
        "permission":1
    }
    ]
}
```