<!--
title: 消息流概述
id: 7342709533374709764
fullPath: /uAjLw4CM/ukTMukTMukTM/group/im-v2/overview
updatedAt: 1731048689000
source: https://open.feishu.cn/document/im-v2/overview
-->
# 消息流概述
## 功能介绍

**「飞书消息流开放」**是指通过调用相关接口，在飞书消息列表中展示形式内容更加丰富的**消息流卡片**，通过自定义消息流卡片的标签、按钮、提示音、临时置顶状态等，让重要信息触达更轻松。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ecb74df5e0624f1c8d4abaf28c5b904c_ixg5CE6DmL.png?height=678&lazyload=true&width=1280)

<br> 
**「飞书消息流开放」优势一览：**

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 50%;">接入前</md-th>
      <md-th style="width: 50%;">接入后</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td > -   重要信息难触达，各类消息堆积，信息爆炸
- 新消息不断刷新消息列表，重要信息被淹没
- 信息处理路径长，处理过程操作繁琐，容易遗忘
- 通知提示音无区分，无法感知收到重要信息
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/58e64c4370e7d02b1a7a6c4760352f4d_EeVk5CenFE.png?height=1800&lazyload=true&width=4000)</md-td>
      <md-td >
-   消息流卡片醒目的**按钮**、**标签**，重要信息一眼看到
- 重要信息**可持续置顶**展示，防止遗漏
- 关键操作按钮外露，**一键处理**重要事项
- **自定义通知提示音**，第一时间了解重要信息    
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4e4b7421de441c3ea8b66d8c7b1b9021_SesG0VK4Qi.png?height=1800&lazyload=true&width=4000)
      </md-td>
    </md-tr>
  </md-tbody>
  
</md-table>
::: 

<br> 

## 适用场景

**「飞书消息流开放」** 功能应用场景多样，下面列举几个典型的应用场景。



:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">使用场景</md-th>
      <md-th style="width: 45%;">场景描述</md-th>
       <md-th style="width: 35%;">接入效果</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td > **考勤打卡提醒**</md-td>
      <md-td >
        痛点：上下班时间事项繁多，容易忘记打卡，导致缺卡缺勤。
        <br> 接入后：<br> 
- 上下班打卡前十分钟，打卡机器人在消息列表中置顶展示，形成强提醒，避免遗忘；
- 配置快捷打卡按钮，可一键打卡，操作简单方便；
- 打卡完成后取消置顶，不打扰日常工作。
      </md-td>
      <md-td  >
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1a281ad17f9a5cc97502af168f211334_f9bkaBUeTC.png?lazyload=true&width=2552&height=1736" style="vertical-align: top;"/>
      </md-td>
    </md-tr>
  </md-tbody>
  <md-tbody>
     <md-tr>
      <md-td> **重要日程提醒**</md-td>
      <md-td>
        痛点：日程繁多，记不清有哪些日程需要参加，容易错过重要日程会议。
        <br> 接入后：<br> 
- 日程置顶展示，第一时间获取日程信息；
- 通过标签提示日程开始时间，提前安排；
- 展示加入会议按钮，一键入会。
      </md-td>
      <md-td>
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/90a2199823c84c58b51ac1a98fa55b01_5gbKoknNsO.png" style="vertical-align: top;"/>
      </md-td>
    </md-tr>
  </md-tbody>
    <md-tbody>
     <md-tr>
      <md-td> **投诉差评处理**</md-td>
      <md-td>
        痛点：投诉差评需要及时进行处理，但消息量较大的情况下，难以快速找到对应信息。
        <br> 接入后：<br> 
- 投诉信息置顶展示，与其它消息区分明显，一目了然，处理及时；
- 设置自定义提示音，设备待机状态下也能第一时间了解到信息触达。
      </md-td>
      <md-td>
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b0bd176da36dbefdb457b0ad356e8c61_qh464Pz5xF.png" style="vertical-align: top;"/>
      </md-td>
    </md-tr>
  </md-tbody>
      <md-tbody>
     <md-tr>
      <md-td> **员工培训任务**</md-td>
      <md-td>
        痛点：一线员工琐事较多，消息一看即忘，重要通知容易遗漏。
        <br> 接入后：<br> 
- 培训通知在员工飞书消息列表常驻提醒，持续置顶，防止员工因处理其它事项而忘记培训；
- 配置按钮，员工可一键前往学习，缩短操作路径；
- 只有员工完成培训后，提醒才自动消失，大大提高任务完成率。
      </md-td>
      <md-td>
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c8d2f5d469f405437c0cc38c47e4aa41_9bQPydHZVd.png" style="vertical-align: top;"/>
      </md-td>
    </md-tr>
  </md-tbody>
      <md-tbody>
     <md-tr>
      <md-td> **进货配送通知**</md-td>
      <md-td>
        痛点：员工需要多次了解货物配送时间、进度，多次进入系统，操作不方便、不灵活。
        <br> 接入后：<br> 
- 货物开始配送时，在消息列表自动显示配送情况、预计送达时间；
- 通过按钮可快捷签收、查看进货单、联系司机，操作更加快捷方便；
- 确认收货后通知自动消失。
      </md-td>
      <md-td>
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5ab330d382bacabb8fb0942577bf1af2_JVky7h62qj.png" style="vertical-align: top;"/>
      </md-td>
    </md-tr>
  </md-tbody>
      <md-tbody>
     <md-tr>
      <md-td  > ……</md-td>
      <md-td >
 更多场景案例，可参考 👉  [🔥飞书首页升级助力门店提效](https://bytedance.larkoffice.com/docx/RU0Tdvtb8oIrwSxWnxacWZAGnQc)
     </md-td>
  </md-tr>
  </md-tbody>
</md-table>
::: 

<br>
## 名词介绍

**「飞书消息流开放」** 中包括如下几种名词介绍：
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%;">名词</md-th>
      <md-th style="width: 22%;">标识</md-th>
      <md-th style="width: 42%;">解释</md-th>
      <md-th style="width: 30%;">示例图</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td > 消息流卡片</md-td>
      <md-td >
       ```app_feed_card```
      </md-td>
      <md-td  >
-   在消息列表中一种特殊的消息展示类型，使信息更加醒目，更快触达用户。
- 消息流卡片有以下 2 种类型：
    - 应用消息流卡片：由应用创建的消息流卡片，可自定义消息流卡片的外观、点击后跳转的链接、消息流长按或右键操作。
    - 群聊/机器人消息流卡片：将应用机器人会话、机器人所在群聊直接更新为消息流卡片，仅可自定义卡片按钮、即时提醒状态等。
      </md-td>
      <md-td >
        <p>应用消息流卡片
        <div><img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a3ccd56dabaa87a254dde1c40ad66d95_6KXyDllj5U.png" /> </div>
        <p>群聊消息流卡片
        <div> <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2c7dcae8d5469083906744ee8be60f6e_K00Bj8HNDp.png" /> </div>
      </md-td>
    </md-tr>
  </md-tbody>
  <md-tbody>
     <md-tr>
      <md-td > 即时提醒</md-td>
      <md-td >
       ```time_sensitive```
      </md-td>
      <md-td  >
- 即时提醒状态打开时，消息流卡片将在消息列表中常驻置顶展示，保持在消息列表第一位，不会被新消息淹没。
- 即时提醒状态关闭时，消息流卡片不再置顶展示。
- 应用对象：应用消息流卡片、群组 & 机器人会话消息流卡片
- 即时提醒状态，true-打开，false-关闭
      </md-td>
      <md-td >  
   		 <div style="display: flex;">
                <div style="padding: 10px; flex: 1;"  >
                    <div style="margin-bottom: 10px;">
                        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e9852cff3a232e3b64187921129b4cfe_srYYPmSOIW.gif"style="vertical-align: top;" /> 
                    </div>
                    <div style="text-align: center;">
                        <p>“即时提醒”状态</p>
                    </div>
                </div>
                <div style="padding: 10px; flex: 1;">
                    <div style="margin-bottom: 10px;">
                         <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a2b451491abb1dd8580696006485dc9a_XgrbjnLwb0.png" style="vertical-align: top;"/>
                    </div>
                    <div style="text-align: center;">
                        <p>“非即时提醒”状态</p>
                    </div>
                </div>
            </div>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
::: 

<br>
## 接入流程
### 应用消息流卡片：
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 35%;">步骤</md-th>
      <md-th style="width: 65%;">介绍</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td > 1. 创建一个应用</md-td>
      <md-td >
-   如需创建企业自建应用，可参考 [自建应用的开发流程](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process)
- 如需创建应用商店应用，可参考 [开发和上架应用商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYzNwEjL2cDMx4iN3ATM)
      </md-td>
    </md-tr>
  </md-tbody>
   <md-tbody>
     <md-tr>
      <md-td > 2. 开通权限</md-td>
      <md-td >
调用 API 前，你需要先获取访问凭证并开启对应的权限：
- 创建、更新、删除应用消息流卡片
- 调用即时提醒能力
      </md-td>
    </md-tr>
  </md-tbody>
   <md-tbody>
     <md-tr>
      <md-td > 3. 获取目标推送用户的 user id， [创建消息流卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/im-v2/app_feed_card/create) </md-td>
      <md-td >
- 可自定义消息流卡片的外观、点击后跳转的链接、消息流长按或右键操作
      </md-td>
    </md-tr>
  </md-tbody>
   <md-tbody>
     <md-tr>
      <md-td > 4.  调用 API，[更新消息流卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/im-v2/app_feed_card-batch/update) </md-td>
      <md-td >
-   该接口用于更新消息流卡片的头像、标题、预览、标签状态、按钮等信息
- **字段更新策略**：具体更新的字段以 `update_fields` 为准，根据 `update_fields` 代表的字段从 `app_feed_card` 中取出来进行更新，不在 `update_fields` 中的字段不会更新
      </md-td>
    </md-tr>
  </md-tbody>
   <md-tbody>
     <md-tr>
      <md-td > 5.  调用 API，[删除消息流卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/im-v2/app_feed_card-batch/delete) </md-td>
      <md-td >
- 通知任务完成后，调用此 API 删除对应的消息流卡片
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
::: 

### 群聊、机器人消息流卡片：
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 35%;">步骤</md-th>
      <md-th style="width: 65%;">介绍</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
     <md-tr>
      <md-td > 1. 创建一个应用</md-td>
      <md-td >
-   如需创建企业自建应用，可参考 [自建应用的开发流程](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process)
- 如需创建应用商店应用，可参考 [开发和上架应用商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYzNwEjL2cDMx4iN3ATM)
      </md-td>
    </md-tr>
  </md-tbody>
   <md-tbody>
     <md-tr>
      <md-td > 2. 开通权限</md-td>
      <md-td >
调用 API 前，你需要先获取访问凭证并开启对应的权限：
- 创建、更新、删除应用消息流卡片
- 调用即时提醒能力
      </md-td>
    </md-tr>
  </md-tbody>
   <md-tbody>
     <md-tr>
      <md-td > 3. 选择已有群组/机器人会话，获取对应 chat_id</md-td>
      <md-td >
- 如选择某个群组，需要将应用机器人拉入目标群组中
      </md-td>
    </md-tr>
  </md-tbody>
   <md-tbody>
     <md-tr>
      <md-td > 4.  调用 API，[更新消息流卡片按钮](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/im-v2/chat_button/update) </md-td>
      <md-td >
- 可为群组消息、机器人消息的消息流卡片添加、更新、删除快捷操作按钮
      </md-td>
    </md-tr>
  </md-tbody>
   <md-tbody>
     <md-tr>
      <md-td > 5.  如需常驻置顶，开启“[即时提醒](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/im-v2/feed_card/patch)”状态  </md-td>
      <md-td >
-   需要获取希望置顶的用户 `user_id`，调用后，消息流卡片在这些用户的消息列表常驻置顶
- 如需取消置顶，再次调用，将即时提醒状态关闭即可
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
::: 


