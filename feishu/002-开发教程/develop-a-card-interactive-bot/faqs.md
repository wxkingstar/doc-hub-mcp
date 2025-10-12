<!--
title: 应用配置说明
id: 7457433042430509060
fullPath: /uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/faqs
updatedAt: 1741693964000
source: https://open.feishu.cn/document/develop-a-card-interactive-bot/faqs
-->
# 应用配置说明

如果你已成功开发卡片交互机器人，你可参考本文档了解开发该应用所需配置、为何配置、以及如何配置。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 6%;">步骤</md-th>
      <md-th style="width: 20%;">配置步骤</md-th>
      <md-th style="width: 30%;">配置解释</md-th>
      <md-th style="width: 30%;">如何配置（本教程已经自动完成以下配置）</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>1</md-td>

      <md-td>创建自建应用</md-td>
      <md-td>要为用户提供服务，必须创建一个应用作为载体。详情参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。</md-td>
      <md-td>
1.  登录飞书 [开发者后台](https://open.feishu.cn/app)创建应用。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4513dee3f665e568c87b61d2f3ca8eaf_o9hzp8SlFR.png?height=1396&lazyload=true&width=1190)
1. 在 **基础信息 > 凭证与基础信息** 页面，可以查看应用的 **App ID** 和 **App Secret**。
  
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e8090af728aaa15bf0686a83573aed34_K27tbcAUCa.png?height=402&lazyload=true&width=2714)</md-td>
    </md-tr>
    <md-tr>
      <md-td>2</md-td>
      <md-td>添加应用能力：

机器人</md-td>
      <md-td>使应用可以接收消息、发送消息，必须为应用开启机器人能力。详情参考[机器人概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview)。</md-td>
      <md-td>在飞书开发者后台，<strong>应用能力 > 添加应用能力</strong> 页面，添加 <strong>机器人</strong> 能力。

  ![机器人能力](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0b708f3c08f92b1856ccdc74954b4fc4_8ZSNcKsolW.png?height=938&lazyload=true&width=2298)</md-td>
    </md-tr>
 <md-tr>
      <md-td>3</md-td>
      <md-td>为机器人能力添加自定义菜单</md-td>
      <md-td>要实现与应用单聊会话中用户可点击聊天输入框上的交互按钮，你需为机器人配置自定义菜单。详情参考[机器人菜单开发指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-customized-menu)。</md-td>
      <md-td>1.  在[开发者后台](https://open.feishu.cn/app)机器人能力配置页面，点击 **机器人自定义菜单** 右侧的编辑按钮，将 **菜单状态** 切换至 **开启**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8759bd370fcd0b0fa973f173063cb819_ANgMievXzL.png?lazyload=true&width=1511&height=654)
1. 在 **展示形式** 处，选择 **悬浮菜单**。
1. 在 **菜单配置** 处，将名称改为“发起告警”，响应动作选择 **推送事件**，将事件推送的 Key 填写为 `send_alarm`，并选择合适图标。
  
      ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/010c2fc703bdca0bdf4c96b07b1a719f_XvJsKf6FHS.png?lazyload=true&width=463&height=649) </md-td>
    </md-tr>
    
    <md-tr>
      <md-td>4</md-td>
      <md-td>
申请应用身份权限：
- 读取用户发给机器人的单聊消息（im:message.p2p_msg:readonly）
- 以应用的身份发消息（im:message:send_as_bot）
- 接收群聊中@机器人消息事件（im:message.group_at_msg:readonly）</md-td>
      <md-td>- 要通过应用调用接口、订阅事件以操作数据，出于安全考虑，必须为应用申请对应权限。
- 要开通的具体权限可在要调用的接口和订阅的事件文档中查看。
- 如果是通过 tenant_access_token 调用接口则申请应用身份权限；如果是通过 user_access_token 调用接口则申请用户身份权限，详情参考[申请 API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。</md-td>
      <md-td>1. 参考以下接口、事件和回调文档，了解要开通的权限：
    - [发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口
    - [接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件
    - [用户进入与机器人的会话](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered)事件
    - [机器人自定义菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu)事件
    - [卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调

   ![API 权限](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b1b8cfaf38a73f281109e69647656979_9m2pDCkPBn.png?height=672&lazyload=true&width=1085)

2. 在飞书开发者后台，<strong>开发配置 > 权限管理 > API 权限</strong> 页面，开通应用身份权限。

   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/98cf65b32bb7523fe87c17cca28ccb28_vYnpRCsz9y.png?height=867&lazyload=true&width=1893)</md-td>
    </md-tr>
   <md-tr>
      <md-td>5</md-td>
      <md-td>添加事件：

- [接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件（im.message.receive_v1）
- [用户进入与机器人的会话](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered)（im.chat.access_event.bot_p2p_chat_entered_v1）事件
- [机器人自定义菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu)（application.bot.menu_v6）事件
     </md-td>
      <md-td>要使应用及时收到用户发送的消息，需要为应用订阅接收消息事件。详情参考[事件概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。</md-td>
      <md-td>1. 在飞书开发者后台，<strong>开发配置 > 事件与回调 > 事件配置</strong> 页面，编辑 <strong>订阅方式</strong>。

   ![事件配置](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3edacf00e16195e88a4783b3afea92a1_qCq5uvGHhO.png?height=746&lazyload=true&width=2446)
2. 选择 <strong>使用长连接接收事件</strong>，并点击 <strong>保存</strong>。
        
    **提示**：你需先运行示例代码建立长连接，再保存该订阅方式。
        
3. 在 <strong>已添加事件</strong> 区域点击 <strong>添加事件</strong>，并添加 **接收消息**、**用户进入与机器人的会话** 和 **机器人自定义菜单** 事件。
   
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/223036c7a791325853e4c0d3ec8ce8fa_iPzQxpQ0R5.png?lazyload=true&width=1480&height=403)</md-td>
    </md-tr>
    
    
  <md-tr>
      <md-td>6</md-td>
      <md-td>添加回调：

[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)（card.action.trigger）回调
     </md-td>
      <md-td>要使应用及时收到用于基于卡片的交互动作并立即更新卡片，需要为应用订阅卡片回传交互回调。详情参考 [回调概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/callback-overview)。</md-td>
      <md-td>1.  在飞书开发者后台，**开发配置 > 事件与回调 > 回调配置** 页面，编辑 **订阅方式**。
     
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/752534be0a8c4ed9de4d6ac792fc8d52_rFQjr3VoJd.png?lazyload=true&width=1356&height=541)
1. 选择 **使用长连接接收回调**，并点击 **保存**。
   
   **提示**：你需先运行示例代码建立长连接，再保存该订阅方式。
1. 在 **已订阅的回调** 区域点击 **添加回调**，并添加 **卡片回传交互** 回调。
   
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f68a5af25a5bd7bed358c1cc2cf355d5_DtZj4m8Jcp.png?lazyload=true&width=1481&height=246)</md-td>
    </md-tr>
    
    
    <md-tr>
      <md-td>7</md-td>
      <md-td>发布应用</md-td>
      <md-td>当应用的基本信息、权限范围和应用功能等信息发生变更时，都需要发布新的应用版本才能正式生效。自建应用发布流程可参见[发布应用](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process#baf09c7d)。</md-td>
      <md-td>在飞书开发者后台，<strong>应用发布 > 版本管理与发布</strong> 页面，点击 <strong>创建版本</strong>，填写版本信息并发布并申请发布应用。若本次发布需要管理员审核，建议创建一个新企业用于测试，避免审核耗时。<br>![发布应用](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3477fc2d35d468f0e34bfb315fdf0c71_r0Ifd3mxrc.png?height=864&lazyload=true&width=2882)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::



完成应用配置并发布应用、运行示例代码后，可体验应用效果。查看代码可参考[示例代码解释](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/explanation-of-example-code)。