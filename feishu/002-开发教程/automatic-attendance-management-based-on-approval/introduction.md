<!--
title: 简介
id: 7238873153014382596
fullPath: /home/automatic-attendance-management-based-on-approval/introduction
updatedAt: 1728871940000
source: https://open.feishu.cn/document/automatic-attendance-management-based-on-approval/introduction
-->
# 简介

本教程介绍如何通过开放平台的事件监听获取自定义请假审批结果，并将请假信息同步到考勤打卡系统和日程上。

## 实现效果

本教程最终实现的效果如下：

:::html
<md-video src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3f7a577e3c08a9719526afc19201427c_Q31TqHhn4I.mp4" poster="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1f9e28b3969aae99452b6c11a0eac4c5_qdWtsa8nb0.png?lazyload=true&width=1920&height=1080"  width="1920" height="1080">
  
<md-source name="2K" url="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3f7a577e3c08a9719526afc19201427c_Q31TqHhn4I.mp4" ></md-source>
  
<md-source name="1080P" url="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4c03acbe3fffcf64677ebd249a743942_cMwsjgpioL.mp4"></md-source>
  
<md-source name="720P" url="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/466985342e0840366143bdef20f53786_kwonxEOtWN.mp4"></md-source>
</md-video>
:::

## 操作流程


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/eece17a89c30b70da5e60f92c8fa638c_V4SiV6KicO.png?height=208&lazyload=true&width=913)


## 使用到的API列表

### 鉴权
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
[获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)
                
`GET` /open-apis/auth/v3/tenant_access_token/internal

> 通过此接口获取 tenant_access_token
            </md-td>
          </md-tr>
      </md-tbody>
  </md-table>
:::


### 审批

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)

`GET` /open-apis/approval/v4/instances

> 通过此接口创建一个审批实例，调用方需对审批定义的表单有详细了解，将按照定义的表单结构，将表单 Value 通过接口传入
            </md-td>
            <md-td>
                <md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
                <md-perm name="approval:approval:instance" desc="查看、创建、更新、删除原生审批实例相关信息" tags="">查看、创建、更新、删除原生审批实例相关信息</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)

`GET` /open-apis/approval/v4/instances/:instance_id

> 通过审批实例 Instance Code 获取审批实例详情
            </md-td>
            <md-td>
                <md-perm name="approval:approval" desc="查看、创建、更新、删除审批应用相关信息" tags="">查看、创建、更新、删除审批应用相关信息</md-perm>
                <md-perm name="approval:approval:readonly" desc="访问审批应用" tags="">访问审批应用</md-perm>
                <md-perm name="approval:approval:instance" desc="查看、创建、更新、删除原生审批实例相关信息" tags="">查看、创建、更新、删除原生审批实例相关信息</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

### 日程

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
[创建请假日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/create)

`POST` /open-apis/calendar/v4/timeoff_events

> 为指定用户创建一个请假日程，可以是一个普通请假日程，也可以是一个全天日程
            </md-td>
            <md-td>
                <md-perm name="calendar:timeoff" desc="创建或删除请假日程" tags="">创建或删除请假日程</md-perm>
                <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" tags="">获取用户 user ID</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token_user">user_access_token</md-tag>
            </md-td>
        </md-tr>

        <md-tr>
            <md-td>
[查询主日历信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/primary)

`POST` /open-apis/calendar/v4/calendars/primary

> 获取当前身份的主日历信息
            </md-td>
            <md-td>
                <md-perm name="calendar:calendar:readonly" desc="获取日历、日程及忙闲信息" tags="">获取日历、日程及忙闲信息</md-perm>
                <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" tags="">获取用户 user ID</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token_user">user_access_token</md-tag>
            </md-td>
        </md-tr>

        <md-tr>
            <md-td>
[创建日程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/create)

`POST` /open-apis/calendar/v4/calendars/:calendar_id/events

> 该接口用于以当前身份（应用 / 用户）在日历上创建一个日程
            </md-td>
            <md-td>
                <md-perm name="calendar:calendar" desc="更新日历及日程信息" tags="">更新日历及日程信息</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token_user">user_access_token</md-tag>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

### 消息

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)

`POST` /open-apis/im/v1/messages

> 给指定用户或者会话发送消息，支持文本、富文本、可交互的消息卡片、群名片、个人名片、图片、视频、音频、文件、表情包
            </md-td>
            <md-td>
<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" tags="">以应用的身份发消息</md-perm>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message:send" desc="发送消息V2" support_app_types="custom,isv" tags="history,offline">发送消息V2</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
[回复消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)

`GET` /open-apis/im/v1/messages/:message_id/reply

> 回复指定消息，支持文本、富文本、卡片、群名片、个人名片、图片、视频、文件等多种消息类型
            </md-td>
            <md-td>
<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" tags="">以应用的身份发消息</md-perm>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message:send" desc="发送消息V2" support_app_types="custom,isv" tags="history,offline">发送消息V2</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

### 事件

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 50%;"><md-td>**[事件](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)

`im.message.receive_v1`

> 机器人接收到用户发送的消息后触发此事件。
            </md-td>
            <md-td>
            
            <md-perm name="im:message.group_at_msg:readonly" desc="接收群聊中@机器人消息事件" support_app_types="custom,isv" tags="">接收群聊中@机器人消息事件</md-perm>
            <md-perm name="im:message.group_msg" desc="获取群组中所有消息（敏感权限）" support_app_types="custom,isv" tags="">获取群组中所有消息（敏感权限）</md-perm>
            <md-perm name="im:message.p2p_msg:readonly" desc="读取用户发给机器人的单聊消息" support_app_types="custom,isv" tags="">读取用户发给机器人的单聊消息</md-perm>
            <md-perm name="im:message.p2p_msg" desc="获取用户发给机器人的单聊消息（历史版本）" support_app_types="custom,isv" tags="history,offline">获取用户发给机器人的单聊消息（历史版本）</md-perm>
            <md-perm name="im:message.group_at_msg" desc="获取用户在群组中@机器人的消息（历史版本）" support_app_types="custom,isv" tags="history,offline">获取用户在群组中@机器人的消息（历史版本）</md-perm>
            <md-perm name="im:message.group_msg:readonly" desc="获取群聊中所有的用户聊天消息" support_app_types="custom" tags="history,offline">获取群聊中所有的用户聊天消息</md-perm>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::















