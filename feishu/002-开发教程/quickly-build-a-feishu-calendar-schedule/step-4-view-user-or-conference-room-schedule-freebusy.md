<!--
title: 步骤四：查看用户或会议室日程忙闲
id: 7254822274065956866
fullPath: /home/quickly-build-a-feishu-calendar-schedule/step-4-view-user-or-conference-room-schedule-freebusy
updatedAt: 1698396893000
source: https://open.feishu.cn/document/quickly-build-a-feishu-calendar-schedule/step-4-view-user-or-conference-room-schedule-freebusy
-->
# 步骤四：查看用户或会议室日程忙闲

在应用主日历中添加日程时，你可以先调用[查看主日历忙闲信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/freebusy/list)接口，获取日历内用户或会议室的日程忙闲。

- 日历与日程呈现如下多对多关系。一个日历上可以存在多个日程，同一个日程可以对应出现在多个日历上。因此在创建日程增加参与人之前，需要先确保用户日历在指定时间段为空闲。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f5d0ea3624487cec178c9841b7cc4d11_UnQidFsgQk.png?height=712&lazyload=true&maxWidth=400&width=1074)

- 如果需要预约会议室，也需要确保会议室在指定时间段为空闲。

:::note
本章节仅介绍如何查询主日历忙闲。如果你需要查询共享日历的忙闲数据，则可以：

- 调用[获取日程列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list)接口，查询指定时间段内用户是否忙闲。

- 调用[查询会议室忙闲](/ssl:ttdoc/ukTMukTMukTM/uIDOyUjLygjM14iM4ITN)接口，查询指定时间段内会议室是否忙闲。
:::

## 操作步骤

1. 打开[API调试台](https://open.feishu.cn/api-explorer)工具。

2. 在左侧 **API 列表** 中，选择 **日历** > **日历管理** > **查询主日历忙闲信息**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3da60948e1aa8e46843277e39271ef4a_EWNspANSwN.png?height=1340&lazyload=true&maxWidth=600&width=2882)

3. 完成以下参数配置，并点击 **开始调试**。
    
    - **请求头**：系统已默认为 **Authorization** 字段填写了 **tenant_access_token**。
    
    - **查询参数**：在 **user_id_type** 字段设置本次请求中用户 ID 的类型。本示例中选择 **open_id**。
    
    - **请求体**：JSON 格式的请求体示例以及参数说明如下。
        
        
        - 如果配置了 **user_id**，则查询用户忙闲。如果配置了 **room_id**，则查询会议室忙闲。
        
        - 关于不同类型的用户 ID 选择与获取方式，参见[用户身份体系介绍](/ssl:ttdoc/home/user-identity-introduction/introduction)。
        
        - 你可以调用[查询会议室列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/list)接口，获取指定会议室的 **room_id**。
        
        - 在实际使用时注意清除`//`注释内容，以保证 JSON 格式正确。
        
        
        ```
        {
          "time_min": "2020-10-28T12:00:00+08:00",    // 查询时间段的起始时间。
          "time_max": "2020-12-28T12:00:00+08:00",    // 查询时间段的结束时间。
          "user_id": "ou_xxxxxxxxxx",    // 用户 ID，ID 类型与你在查询参数中配置的 user_id_type 相匹配。填写时与 room_id 二选一填写。
          "room_id": "omm_xxxxxxxxxx"    // 会议室 ID。与 user_id 二选一填写。
        }
        ```
    
    调用成功回显信息如下。
    
    - 如果包含数据信息，则可以获取对应用户或会议室的忙碌时间段。
    
    - 如果未包含数据信息，表示对应的用户或会议室在查询时间段空闲，随后即可在该时间段内添加日程。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e55084b657410128444118c97dcbe47_TJpVlWgK8x.png?height=582&lazyload=true&maxWidth=600&width=1486)