<!--
title: 资源介绍
id: 7043721274330775555
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/schedule-meeting-overview
updatedAt: 1725888874000
source: https://open.feishu.cn/document/server-docs/vc-v1/reserve/schedule-meeting-overview
-->
#  资源介绍
##  资源定义
用户可以预约会议（创建会议预约），提前设置参会成员和会议权限，并获取会议信息，包括：[预约会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/apply)、[更新预约会议信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/update)、[删除预约会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/delete)、[获取预约会议详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/get)、[获取正在进行的会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/get_active_meeting)。

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
        <md-text type="field-name" >reserve_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        预约ID（预约的唯一标识）

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
          
**当值为** `user_id`**，字段权限要求**：
          
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>


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
        预约到期时间（unix时间，单位sec），多人会议必填

**示例值**："1608888867"

        </md-td>
</md-tr>
    </md-tr>
    <md-tr>
        <md-td>
        <md-text type="field-name" >meeting_settings</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >reserve_meeting_setting</md-text>
        </md-td>

        <md-td>
        会议设置

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >topic</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议主题
          
**示例值**："my meeting"

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >action_permissions</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >reserve_action_permission[]</md-text>
        </md-td>

        <md-td>
        会议权限配置列表，如果存在相同的权限配置项则它们之间为"逻辑或"的关系（即 有一个为true则拥有该权限）

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >permission</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
       权限项
          
**示例值**：1
          
**可选值有**：
- `1`：是否能成为主持人
- `2`：是否能邀请参会人
- `3`：是否能加入会议
        </md-td>
</md-tr>
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >permission_checkers</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >reserve_permission_checker[]</md-text>
        </md-td>

        <md-td>
        权限检查器列表，权限检查器之间为"逻辑或"的关系（即 有一个为true则拥有该权限）

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >check_field</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
        检查字段类型
          
**示例值**：1
          
**可选值有**：
- `1`：用户ID
- `2`：用户类型
- `3`：租户ID

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >check_mode</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
      检查方式
          
**示例值**：1
          
**可选值有**：
- `1`：在check_list中为有权限（白名单）
- `2`：不在check_list中为有权限（黑名单）
        </md-td>
</md-tr>
  <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >check_list</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string[]</md-text>
        </md-td>

        <md-td>
        检查字段列表
          
**示例值**：123

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >meeting_initial_type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>
  
        <md-td>
        会议初始类型
          
**示例值**：1
          
**可选值有**：
- `1`：多人会议
- `2`：1v1呼叫

        </md-td>
</md-tr>

<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >meeting_connect</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>
  
        <md-td>
        该会议是否支持互通，不支持更新（注：该字段内测中
          
**示例值**：true
        </md-td>
</md-tr>




<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >auto_record</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        使用飞书视频会议时，是否开启自动录制，默认false
          
**示例值**：true
          
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >assign_host_list</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >assign_host_list[]</md-text>
        </md-td>

        <md-td>
        指定主持人列表
        </md-td>
</md-tr>
  
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;
        <md-text type="field-name" >user_type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
        用户类型，仅支持设置同租户下的 Lark 用户
          
**示例值**：1
          
**可选值有**：
- `1`：Lark用户
        </md-td>
</md-tr>
  
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;
        <md-text type="field-name" >id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        用户ID
          
**示例值**："ou_3ec3f6a28a0d08c45d895276e8e5e19b"
        </md-td>
</md-tr>
  
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >password</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        设置会议密码，不传则根据个人设置决定是否使用密码及分配随机密码，传空则不使用密码，传 4-9 位数字则设置密码
          
**示例值**："971024"
          
**数据校验规则**：
- 最大长度：`9` 字符
        </md-td>
</md-tr>
  
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >call_setting</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >reserve_call_setting</md-text>
        </md-td>

        <md-td>
       1v1呼叫相关参数
        </md-td>
</md-tr>
 <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >callee</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >reserve_callee</md-text>
        </md-td>

        <md-td>
        被呼叫的用户
          

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
          
**示例值**："ou_3ec3f6a28a0d08c45d895276e8e5e19b"

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
       用户类型，当前仅支持用户类型6(pstn用户)
          
**示例值**：1
          
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >pstn_sip_info</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >pstn_sip_info</md-text>
        </md-td>

        <md-td>
        pstn/sip信息

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >nickname</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        给pstn/sip用户设置的临时昵称
          
**示例值**："dodo"  

        </md-td>
</md-tr>


<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">  ∟</span>&nbsp;<md-text type="field-name" >main_address</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
       pstn/sip主机号，格式为：[国际冠字]-[电话区号][电话号码]，当前仅支持国内手机及固定电话号码
          
**示例值**："+86-02187654321"
        </md-td>
</md-tr>
  <md-tr>
        <md-td>
        <md-text type="field-name" >with_participants</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>
			
        <md-td> 
          
    	<md-text type="field-type" >是否需要参会人列表，默认为false
          
**示例值**：false</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >meeting_no</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议号

        </md-td>
</md-tr>
  
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >password</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议密码

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
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >status</md-text>
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
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >participant_count</md-text>
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
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >participant_count_accumulated</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
       累计参会人数
        </md-td>
</md-tr>
  
 <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >participants</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >first_join_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        首次入会时间，秒级Unix时间戳

        </md-td>
</md-tr>
  <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >final_leave_time</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        最终离会时间，秒级Unix时间戳

        </md-td>
</md-tr>
  <md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" > in_meeting_duration</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        累计在会中时间，时间单位：秒

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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >is_host</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >is_cohost</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >is_external</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >status</md-text>
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
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >ability</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" > use_video</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >use_audio</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >use_share_screen</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >use_follow_screen</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >use_recording</md-text>
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
        &emsp;<span style="color: #8F959E"> ∟</span>&nbsp;<md-text type="field-name" >use_pstn</md-text>
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
    "reserve_id":"6911188411932033028",
    "user_id_type":"open_id",
    "end_time":"1608888867",
    "meeting_settings":{
        "topic":"my meeting",
        "action_permissions":[
            {
                "permission":1,
                "permission_checkers":[
                    {
                        "check_field":1,
                        "check_mode":1,
                        "check_list": [
                            "ou_3ec3f6a28a0d08c45d895276e8e5e19b"
                        ]
                    }
                ]
            }
        ],
         "meeting_initial_type":1,
         "meeting_connect":true,
         "auto_record":true,
         "password":"971024",
         "call_setting":
         {
         "callee":
             {
                 "id":"ou_3ec3f6a28a0d08c45d895276e8e5e19b",
                 "user_type":1,
                 "pstn_sip_info":{
                     "nickname":"dodo",
                     "main_address":"+86-02187654321"
                 }
             }
         }
    },
    "with_participants":false,
    "data":{
        "meeting":{
            "id": "6911188411934433028",
            "topic": "my meeting",
            "url":"https://vc.feishu.cn/j/337736498",
            "meeting_no": "235812466",
            "password":"971024",
            "create_time":"1608885566",
            "start_time": "1608883322",
            "end_time": "1608883899",
            "host_user": {
                "id":"ou_3ec3f6a28a0d08c45d895276e8e5e19b",
                "user_type": 1
            },
        },
        "status": 2,
            "participant_count": "10",
            "participant_count_accumulated":"15",
            "participants": [
                {
                    "id": "ou_3ec3f6a28a0d08c45d895276e8e5e19b",
                    "first_join_time":"1624438144",
                    "final_leave_time":"1624438144",
                    "in_meeting_duration":"123",
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
```
## 会议 ID 说明
了解会议号和会议 ID 的区别和用途，以及获取方法。
- 什么是会议 ID？

会议 ID 即 meetingID 是一个会议的唯一标识，用户在客户端看到的 9 位会议号不是 meetingID，使用会议相关的 API 需要以 meetingID 作为唯一标识来进行操作。
- 如何获取会议ID？

通过 [预约会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/apply) API 预约的会议，会议开始后可通过 [获取活跃会议](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/get_active_meeting) API 进行获取，或监听 [会议相关的事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/events/meeting_started) 也可获取。