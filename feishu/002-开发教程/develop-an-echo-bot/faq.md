<!--
title: 应用配置说明
id: 7452622721024344065
fullPath: /uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/faq
updatedAt: 1739516612000
source: https://open.feishu.cn/document/develop-an-echo-bot/faq
-->
# 应用配置说明

如果你已成功开发自动回复机器人，你可参考本文档了解开发该应用所需配置、为何配置、以及如何配置。

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
      <md-td>
申请应用身份权限：
- 读取用户发给机器人的单聊消息（im:message.p2p_msg:readonly）
- 以应用的身份发消息（im:message:send_as_bot）
- 接收群聊中@机器人消息事件（im:message.group_at_msg:readonly）</md-td>
      <md-td>- 要通过应用调用接口、订阅事件以操作数据，出于安全考虑，必须为应用申请对应权限。
- 要开通的具体权限可在要调用的接口和订阅的事件文档中查看。
- 如果是通过 tenant_access_token 调用接口则申请应用身份权限；如果是通过 user_access_token 调用接口则申请用户身份权限，详情参考[申请 API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。</md-td>
      <md-td>1. 参考[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)、[回复消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)接口、[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件文档，获取要开通的权限。

   ![API 权限](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b1b8cfaf38a73f281109e69647656979_9m2pDCkPBn.png?height=672&lazyload=true&width=1085)

2. 在飞书开发者后台，<strong>开发配置 > 权限管理 > API 权限</strong> 页面，开通应用身份权限。

   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/98cf65b32bb7523fe87c17cca28ccb28_vYnpRCsz9y.png?height=867&lazyload=true&width=1893)</md-td>
    </md-tr>
   <md-tr>
      <md-td>4</md-td>
      <md-td>添加事件：

 [接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件（im.message.receive_v1）</md-td>
      <md-td>要使应用及时收到用户发送的消息，需要为应用订阅接收消息事件。详情参考[事件概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。</md-td>
      <md-td>1. 在飞书开发者后台，<strong>开发配置 > 事件与回调 > 事件配置</strong> 页面，编辑 <strong>订阅方式</strong>。

   ![事件配置](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3edacf00e16195e88a4783b3afea92a1_qCq5uvGHhO.png?height=746&lazyload=true&width=2446)
2. 选择 <strong>使用长连接接收事件</strong>，并 <strong>保存</strong>。
        
    **提示**：你需先运行示例代码建立长连接，再保存该订阅方式。
        
3. 在 <strong>已添加事件</strong> 区域点击 <strong>添加事件</strong>，并添加 <strong>接收消息（im.message.receive_v1）</strong> 事件。

   ![添加事件](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4bf1488bd189919fa7c5a7027de48df4_SAdv2CJeWs.png?height=692&lazyload=true&width=2222)</md-td>
    </md-tr>
    <md-tr>
      <md-td>5</md-td>
      <md-td>发布应用</md-td>
      <md-td>当应用的基本信息、权限范围和应用功能等信息发生变更时，都需要发布新的应用版本才能正式生效。自建应用发布流程可参见[发布应用](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process#baf09c7d)。</md-td>
      <md-td>在飞书开发者后台，<strong>应用发布 > 版本管理与发布</strong> 页面，点击 <strong>创建版本</strong>，填写版本信息并发布并申请发布应用。若本次发布需要管理员审核，建议创建一个新企业用于测试，避免审核耗时。<br>![发布应用](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3477fc2d35d468f0e34bfb315fdf0c71_r0Ifd3mxrc.png?height=864&lazyload=true&width=2882)</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::



完成应用配置并发布应用、运行示例代码后，可体验应用效果。查看代码可参考[示例代码解释](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/explanation-of-example-code)。