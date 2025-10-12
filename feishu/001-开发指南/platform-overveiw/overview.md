<!--
title: 应用类型与能力
id: 6975811364980965378
fullPath: /home/app-types-introduction/overview
updatedAt: 1743566122000
source: https://open.feishu.cn/document/platform-overveiw/overview
-->
# 应用概述

应用是开发者向内部或外部用户提供服务的载体，也是开发者调用飞书所提供的开放能力的载体。本文档介绍应用的类型、形态和能力。你也可观看以下视频了解应用。
> 视频播放时长：12分钟
:::html
<!-- md-video 的src表示默认的清晰度 -->
<md-video src="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/1920x1080apptype.mp4"  poster="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/Frame20851.png" width="1920" height="1080">

<md-source name="超清" url="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/1920x1080apptype.mp4" ></md-source>

<md-source name="高清" url="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/1280c720apptype.mp4"></md-source>

<md-source name="标清" url="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/854x480apptype.mp4"></md-source>

</md-video>
:::



## 应用类型
根据 **应用的上架方式**，应用可分为以下两种类型。
* **企业自建应用**：由企业内部人员或企业授权的开发人员进行开发，只能在同一企业内发布和使用。
* **商店应用**：由第三方服务商开发，在[飞书应用中心](https://app.feishu.cn/)发布，所有飞书企业均可安装和使用。


企业自建应用和其使用场景和区别如下所示。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">应用类型</md-th>
      <md-th style="width: 35%;">企业自建应用</md-th>
      <md-th style="width: 35%;">商店应用</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>如何选择</md-td>
      <md-td>如果你开发的应用只会给单一企业内的用户使用，不需要分享到企业外部，需创建企业自建应用。</md-td>
      <md-td>如果希望将你开发的应用上架到[飞书应用中心](https://app.feishu.cn/)，并开放给不同的企业使用，可选择创建商店应用。</md-td>
    </md-tr>
    <md-tr>
      <md-td>实际案例</md-td>
      <md-td>参考[客户案例](https://open.larkoffice.com/solutions?category=0)，了解如何解决企业实际问题。</md-td>
      <md-td>点击[飞书应用中心](https://app.feishu.cn/)，查看已上架的商店应用。</md-td>
    </md-tr>
    <md-tr>
      <md-td>开发人员</md-td>
      <md-td>企业内部人员或企业授权的开发人员</md-td>
      <md-td>第三方独立软件服务商（ISV）</md-td>
    </md-tr>
    <md-tr>
      <md-td>使用人员</md-td>
      <md-td>企业内部人员</md-td>
      <md-td>购买开通该商店应用的企业内部人员、飞书个人版用户</md-td>
    </md-tr>
    <md-tr>
      <md-td>支持的应用能力</md-td>
      <md-td>已有能力均支持</md-td>
      <md-td>不支持工作台小组件能力</md-td>
    </md-tr>
    <md-tr>
      <md-td>开发流程</md-td>
      <md-td>参考[企业自建应用开发流程](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process)。</md-td>
      <md-td>整体开发与上架流程参考[商店应用上架流程](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ugzNwEjL4cDMx4CO3ATM)。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


## 应用形态与能力

根据应用在客户端的呈现形态，应用有机器人、网页和小组件三种形态。不同形态的应用，需要开启不同的能力。开发者也可以为应用开启多种能力，实现应用的多种形态，适配复杂业务场景。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e26e27bee2e950b66170517d6a1264db_BhngJNjxWl.png?height=2160&lazyload=true&maxWidth=600&width=3840)

应用支持机器人、网页应用、云文档小组件、多维表格插件、链接预览等多种能力。下表列出对于不同的应用形态，开放平台提供的的应用能力、开发工具与资源。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">应用形态</md-th>
      <md-th style="width: 17%;">机器人（Bot）</md-th>
      <md-th style="width: 17%;">网页应用（H5）</md-th>
      <md-th style="width: 17%;">小组件（Block）</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>使用场景</md-td>
      <md-td>
![机器人.gif](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6bc4716bb58f7bb95ba7927c8436d47b_bbqIrjl8se.gif?height=1848&lazyload=true&width=2552)<br>机器人是一种基于会话与用户进行交互的应用，通过集成飞书日历、审批、文档及第三方业务系统，可以在飞书中可实现一站式聚合各类应用的通知（如监控警报、待办提醒、数据报告等），同时支持自动化管理群组、监听并响应用户消息等能力。</md-td>
      <md-td>
![网页应用.gif](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0f70e85d7690043b03881c981d518bc1_XE2DZtMKdA.gif?height=1848&lazyload=true&width=2552)<br>网页应用指的是用 H5 方式开发，可以运行在飞书客户端内的应用。通过调用飞书开放接口（如身份认证、通讯录、云文档等）深度集成飞书生态能力。集成 SSO 免登系统后，企业可将已有应用快速迁移。</md-td>
      <md-td>
![云文档小组件.gif](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5bea90b9c0781cea40cde39ae50f8ac7_BrSIRGyNrb.gif?height=1848&lazyload=true&width=2552) <br>小组件是飞书独创的轻量级功能块，是一个集渲染、交互、数据为一体的信息单元载体，实现信息在飞书套件内的顺畅流转与消费。通过小组件，企业 IT 和第三方服务商可以开发各类垂直场景的应用，实现云文档协作与企业工作流的打通，扩展飞书套件的能力，进而提升效率。</md-td>
    </md-tr>
    
<md-tr>
      <md-td><strong>对应应用能力</strong></md-td>
      <md-td>机器人能力</md-td>
      <md-td>网页应用能力</md-td>
      <md-td>
- 云文档小组件
        
- 多维表格插件
      </md-td>
    </md-tr>
    
    <md-tr>
      <md-td><strong>开发工具</strong></md-td>
      <md-td>
        [服务端 SDK](/ssl:ttdoc/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)。可结合[飞书卡片搭建工具](https://open.feishu.cn/cardkit?lang=zh-CN)发送卡片消息
      </md-td>
      <md-td>
        - [服务端 SDK](/ssl:ttdoc/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)<br>
- [飞书开发者工具](/ssl:ttdoc/uYjL24iN/ucDOzYjL3gzM24yN4MjN)<br>
- [网页应用远程调试工具](/ssl:ttdoc/uYjL24iN/uEzMzUjLxMzM14SMzMTN/webapp-remote-debugging-tool-user-guide)<br>
- [网页应用在线调试工具](/ssl:ttdoc/uYjL24iN/uEzMzUjLxMzM14SMzMTN/development-of-h5-in-tools/enable-the-inspect-debugging-capability)
      </md-td>
      <md-td>
        - [服务端 SDK](/ssl:ttdoc/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)<br>
- [飞书开发者工具](/ssl:ttdoc/uYjL24iN/ucDOzYjL3gzM24yN4MjN)
      </md-td>
    </md-tr>

    <md-tr>
      <md-td><strong>接入文档</strong></md-td>
      <md-td>
- 新手教程：
  - [开发回声机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/introduction)<br>
  - [开发卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)<br>
- 使用指南：[机器人概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview)
      </md-td>
      <md-td>
- 新手教程：
        
  - [快速开发网页应用](/ssl:ttdoc/home/quickly-develop-a-web-app-nodejs/introduction)<br>
  - [将已有网页应用嵌入飞书工作台](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/embed-web-app-into-feishu-workbench/introduction)<br>
- 使用指南：[网页应用概述](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/introduction)<br>
- API 参考：[H5-JS-SDK](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/)
      </md-td>
      <md-td>
- 使用指南：<br>
  - [云文档小组件概述](/ssl:ttdoc/uAjLw4CM/uYjL24iN/docs-add-on/docs-add-on-introduction)<br>
  - [多维表格插件概述](/ssl:ttdoc/uAjLw4CM/uYjL24iN/base-extensions/base-extension-introduction)<br>
  - [工作台小组件概述](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/guide/hosting-scenario-introduction/workplace)<br>
- API 参考：<br>
  - [云文档小组件 API](/ssl:ttdoc/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/05-api-doc)<br>
  - [多维表格插件 API](/ssl:ttdoc/uAjLw4CM/uYjL24iN/base-extensions/base-automation-extensions/api/getbasekiturl)<br>
  - [工作台小组件 API](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/api/api-introduction)
      </md-td>
    </md-tr>

    <md-tr>
      <md-td><strong>是否支持服务端 API</strong></md-td>
      <md-td>支持</md-td>
      <md-td>支持</md-td>
      <md-td>支持</md-td>
    </md-tr>

    <md-tr>
      <md-td><strong>是否支持商店应用</strong></md-td>
      <md-td>支持</md-td>
      <md-td>支持</md-td>
      <md-td>支持</md-td>
    </md-tr>
    
  </md-tbody>
</md-table>
:::

除机器人、网页、应用、小组件能力外，应用还支持开启以下能力：
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">支持能力</md-th>
      <md-th style="width: 30%;">链接预览</md-th>
      <md-th style="width: 40%;">移动应用登录</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>适用场景</md-td>
      <md-td>将飞书消息中的链接，转换为文字或卡片的形式进行展示。以便消息接收者在不进行链接跳转的情况下，快速了解链接所包含的内容，或者通过卡片交互完成业务操作。</md-td>
      <md-td>允许用户通过飞书账号授权登录第三方移动端的应用。</md-td>
    </md-tr>
    <md-tr>
      <md-td>功能示意</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d5bc56cbf6bc9d99c775f2a103b67ac2_1TDpON0Q3l.png?height=1112&lazyload=true&maxWidth=400&width=2160)</md-td>
      <md-td>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6be38b6ca95d7ceae7a0b2d976d12533_MCnhVUn2PR.png?height=660&lazyload=true&maxWidth=424&width=1356)</md-td>
    </md-tr>
    <md-tr>
      <md-td>开发工具</md-td>
      <md-td>[服务端 SDK](/ssl:ttdoc/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)。可结合[飞书卡片搭建工具](https://open.feishu.cn/cardkit?lang=zh-CN)将链接转换为卡片形式</md-td>
      <md-td>[授权登录 SDK](/ssl:ttdoc/uAjLw4CM/uYjL24iN/mobile-app/sdk)</md-td>
    </md-tr>
    <md-tr>
      <md-td>接入文档</md-td>
      <md-td>- 入门教程：[开发链接预览](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/quick-start)
- 使用指南：
    - [链接预览开发指南](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/link-preview-development-guide)
    - [飞书卡片概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)</md-td>
      <md-td>- SDK 文档：[授权登录 SDK 文档](/ssl:ttdoc/uAjLw4CM/uYjL24iN/mobile-app/sdk)
- 使用指南：[移动应用登录流程](/ssl:ttdoc/uAjLw4CM/uYjL24iN/mobile-app/mobile-app-overview)</md-td>
    </md-tr>
    <md-tr>
      <md-td>是否支持服务端 API</md-td>
      <md-td>支持，相关 API：[更新 URL 预览](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/im-v2/url_preview/batch_update)</md-td>
      <md-td>支持</md-td>
    </md-tr>
    <md-tr>
      <md-td>是否支持商店应用</md-td>
      <md-td>支持</md-td>
      <md-td>支持</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 如何选择合适的应用能力

选择开启不同的应用能力时，可参考以下原则：

**选择机器人**：

- 如果你的应用需要与用户在聊天中进行交互，向用户或群组自动发送消息，响应用户的消息，并进行群组管理，可以考虑开启机器人能力。

**选择网页应用**：

- 如果你的应用已经有基于 H5 技术框架实现的版本，希望迁移到飞书，开发周期紧张，可以考虑使用网页应用接入免登功能快速实现。
- 如果你的应用会频繁更新内容，并且是偏向于运营类的内容，且需要在飞书之外的环境中传播，可以考虑使用网页应用。
**选择小组件**：

- 需要将云文档协作与企业工作流的打通，扩展飞书套件的能力，进而提升效率。

**搭配组合**：飞书的应用能力可以组合使用，你可以为**网页应用开启机器人能力**，来更好地与用户交互，例如：
- 配合事件订阅，把原本 H5 应用中触发的业务通知发送到飞书的会话或者群聊中。
- 使用机器人结合飞书卡片的能力，进行通知下发或让用户与应用进行轻量交互。
