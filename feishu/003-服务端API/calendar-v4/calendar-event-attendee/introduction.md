<!--
title: 日程参与人资源介绍
id: 7062619112195293188
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/introduction
updatedAt: 1712716284000
source: https://open.feishu.cn/document/server-docs/calendar-v4/calendar-event-attendee/introduction
-->
# 日程参与人资源介绍

日程参与人是指参加日程的资源实体，日程内支持的参与人类型有：用户、群聊、会议室、邮箱。

## 使用限制

每个日程最多可包含 3000 个参与人。

##  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
<md-tr>
        <md-td>
        <md-text type="field-name" >attendee_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
          参与人 ID，日程参与人在当前日程内的唯一标识。通过该 ID 可删除日程参与人，或用于查询群组类型参与人的群成员信息。参与人 ID 获取方式：
          
- 调用[添加日程参与人](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/create)接口时，可从返回结果中获取参与人 ID。
- 调用[获取日程参与人列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/list)接口，可以查询日程内的参与人 ID。
          
不同类型的参与人，attendee_id 格式也不同。说明如下：<br>
- `user_xxxxxx` 表示用户类型参与人。<br>
- `chat_xxxxxx` 表示群组类型参与人，可用于查询群组内的群成员信息。<br>
- `resource_xxxxxx` 表示会议室类型参与人。<br>
- `third_party_xxxxxx` 表示外部邮箱类型参与人。<br>

**示例值**："user_xxxxxx"
		</md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
参与人类型。
          
**可选值**：
- `user`: 用户
- `chat`: 群组
- `resource`: 会议室
- `third_party`: 邮箱
          
**示例值**："user"

        </md-td>
</md-tr>
<md-tr>
        <md-td>
        <md-text type="field-name" >rsvp_status</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        参与人的 RSVP 状态。
          
**可选值**：
- `needs_action`: 参与人尚未回复状态，或表示会议室预约中
- `accept`: 参与人回复接受，或表示会议室预约成功
- `tentative`: 参与人回复待定
- `decline`: 参与人回复拒绝，或表示会议室预约失败
- `removed`: 参与人或会议室已经从日程中被移除
          
**示例值**："accept"
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >is_optional</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        参与人是否为可选参加，该参数值对群组的群成员不生效。

**可选值**：
- true：是
- false：否
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >is_organizer</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        参与人是否为日程组织者。

**可选值**：
- true：是
- false：否
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >is_external</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        参与人是否为外部参与人。外部参与人不支持编辑。
          
**可选值**：
- true：是
- false：否
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >display_name</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        参与人名称。

**示例值**：Li Jian
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >chat_members</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >attendee_chat_member[]</md-text>
        </md-td>

        <md-td>
        群组的群成员信息，群组类型参与人（type 为 chat）生效。群成员不支持编辑。
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >rsvp_status</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        群参与人 RSVP 状态。
          
**可选值**：
- `needs_action`: 参与人尚未回复状态
- `accept`: 参与人回复接受
- `tentative`: 参与人回复待定
- `decline`: 参与人回复拒绝
- `removed`: 参与人已经从日程中被移除
          
**示例值**："needs_action"
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >is_optional</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        参与人是否为可选参加。

**可选值**：
- true：是
- false：否
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >display_name</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        参与人名称。

**示例值**：Li Jian
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >is_organizer</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        参与人是否为日程组织者。
          
**可选值**：
- true：是
- false：否
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >is_external</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >boolean</md-text>
        </md-td>

        <md-td>
        参与人是否为外部参与人。
          
**可选值**：
- true：是
- false：否
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >user_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        用户类型参与人的用户 ID。作为返回值时，如果 is_external 为 true ，则该参数只会返回用户的 open_id 或者 union_id。关于用户 ID 可参见[用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**示例值**："ou_xxxxxxxx"
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >chat_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        群组类型参与人的群组 ID。关于群组 ID 可参见[群 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)。

**示例值**："oc_xxxxxxxxx"
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >room_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        会议室类型参与人的会议室 ID。

**示例值**："omm_xxxxxxxx"
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >third_party_email</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        外部邮箱类型参与人的邮箱地址。

**示例值**："wangwu@email.com"
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >operate_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        如果日程是使用应用身份创建的，该参数用于指定会议室联系人 ID，且联系人会在会议室视图信息中展示。

**示例值**："ou_xxxxxxxx"
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >resource_customization</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >calendar.attendee.resource_customization[]</md-text>
        </md-td>

        <md-td>
        会议室的个性化配置。当添加的会议室配置了预定表单时，可通过该参数配置表单信息。
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >index_key</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        每个配置的唯一 ID。
          
**示例值**："16281481596100"
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >input_content</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        当个性化配置类型为填空时，需要填入该参数。
          
**示例值**："xxx"
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        &emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >options</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >customization.option[]</md-text>
        </md-td>

        <md-td>
        每个配置的选项。
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        &emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >option_key</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        每个选项的唯一 ID。
          
**示例值**："16281481596185"
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        &emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >others_content</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        当个性化配置的选项类型为其它选项时，需要填入该参数。
          
**示例值**："xxx"
        </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::

##  数据示例
```json
{
    "type": "user",
    "attendee_id": "user_xxxxxx",
    "rsvp_status": "needs_action",
    "is_optional": true,
    "is_organizer": true,
    "is_external": false,
    "display_name": "Zhang San",
    "chat_members": [
        {
            "rsvp_status": "needs_action",
            "is_optional": true,
            "display_name": "Group",
            "is_organizer": false,
            "is_external": false
        }
    ],
    "user_id": "ou_xxxxxxxx",
    "chat_id": "oc_xxxxxxxxx",
    "room_id": "omm_xxxxxxxx",
    "third_party_email": "wangwu@email.com",
    "operate_id": "ou_xxxxxxxx",
    "resource_customization": [
        {
            "index_key": "16281481596100",
            "input_content": "xxx",
            "options": [
                {
                    "option_key": "16281481596185",
                    "others_content": "xxx"
                }
            ]
        }
    ]
}
```

