<!--
title: 资源介绍
id: 7043721274330791939
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/meeting-overview
updatedAt: 1679916444000
source: https://open.feishu.cn/document/server-docs/vc-v1/meeting/meeting-overview
-->
#  资源介绍
##  资源定义
用户可以在会议中进行邀请参会成员、移除参会成员和设置主持人等操作。其中，方法包括：[获取会议详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/get)、[获取与会议号相关联的会议列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/list_by_no)、[邀请参会人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/invite)、[移除参会人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/kickout)、[设置主持人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/set_host)、[结束会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/end)。事件包括：[会议开始](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/meeting_started)、[会议结束](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/meeting_ended)、[加入会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/join_meeting)、[离开会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/leave_meeting)、[录制开始](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/recording_started)、[录制停止](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/recording_ended)、[录制完成](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/recording_ready)、[屏幕共享开始](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/share_started)、[屏幕共享结束](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/share_ended)。

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
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >meeting</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >meeting</md-text>
        </md-td>

        <md-td>
        会议数据

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
        会议ID（视频会议的唯一标识，视频会议开始后才会产生）

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >topic</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
       会议主题
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
        会议链接（飞书用户可通过点击会议链接快捷入会）

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >create_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议创建时间（unix时间，单位sec）

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >start_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
       会议开始时间（unix时间，单位sec）
        </md-td>
</md-tr>
  <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >end_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议结束时间（unix时间，单位sec）

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >host_user</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >meeting_user</md-text>
        </md-td>

        <md-td>
        主持人

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
       用户 ID
        </md-td>
</md-tr>
 <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >user_type</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >status</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
        会议状态
          
**可选值有**：
- `1`：会议呼叫中
- `2`：会议进行中
- `3`：会议已结束

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >participant_count</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >participants</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >meeting_participant[]</md-text>
        </md-td>

        <md-td>
        参会人列表

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >id</md-text>
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
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >user_type</md-text>
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
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >is_host</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        是否为主持人

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >is_cohost</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        是否为联席主持人

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >is_external</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
       是否为外部参会人
        </md-td>
</md-tr>
 <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >status</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
        参会人状态
          
**可选值有**：
- `1`：呼叫中
- `2`：在会中
- `3`：正在响铃
- `4`：不在会中或已经离开会议

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >ability</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >meeting_ability</md-text>
        </md-td>

        <md-td>
        会中使用的能力

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" > use_video</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
       是否使用视频
        </md-td>
</md-tr>
 <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >use_audio</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        是否使用音频

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >use_share_screen</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        是否使用共享屏幕

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >use_follow_screen</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
       是否使用妙享（magic share）
        </md-td>
</md-tr>
 <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >use_recording</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        是否使用录制

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >use_pstn</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        是否使用PSTN

        </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::
###  数据示例
```json
{
    "data": {
        "meeting": {
            "id": "6911188411934433028",
            "topic": "my meeting",
            "url": "https://vc.feishu.cn/j/337736498",
            "create_time": "1608885566",
            "start_time": "1608883322",
            "end_time": "1608888867",
            "host_user": {
                "id": "ou_3ec3f6a28a0d08c45d895276e8e5e19b",
                "user_type": 1
            },
            "status": 2,
            "participant_count": "10",
            "participants": [
                {
                    "id": "ou_3ec3f6a28a0d08c45d895276e8e5e19b",
                    "user_type": 1,
                    "is_host": true,
                    "is_cohost": false,
                    "is_external": false,
                    "status": 2
                }
            ],
            "ability": {
                "use_video": true,
                "use_audio": true,
                "use_share_screen": true,
                "use_follow_screen": true,
                "use_recording": true,
                "use_pstn": true
            }
        }
    }
}
```
