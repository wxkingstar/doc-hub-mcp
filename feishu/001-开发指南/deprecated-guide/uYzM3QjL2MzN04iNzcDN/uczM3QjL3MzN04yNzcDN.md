<!--
title: 消息卡片概述
id: 6907569745298554882
fullPath: /ukTMukTMukTM/uczM3QjL3MzN04yNzcDN
updatedAt: 1724162909000
source: https://open.feishu.cn/document/common-capabilities/message-card/introduction-of-message-cards
-->
# 消息卡片概述

飞书消息卡片是一种轻量的消息推送应用，能够帮助你实现一对多的信息触达方式，提高工作效率。 

:::note
在保持旧版消息卡片原有能力的基础上，飞书消息卡片进行了全面升级。你可参考[飞书卡片更新说明](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-release-notes)和[飞书卡片概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)文档了解更新内容。
:::
## 什么是消息卡片 

飞书消息卡片是飞书中的一种功能，它允许用户通过机器人或应用以结构化（JSON）的方式发送和接收消息。你可以通过以下视频介绍了解消息卡片的基本概念。

:::html
<!-- md-video 的src表示默认的清晰度 -->

<md-video src="https://lf9-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/1920x1080messagecard.mp4" poster="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/Frame20852.png" style="100%"/>

<md-source name="超清" url="https://lf9-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/1920x1080messagecard.mp4" ></md-source>

<md-source name="高清" url="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/1280x720messagecard.mp4"></md-source>

<md-source name="标清" url="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfplwvbo/854x480messagecard.mp4"></md-source>

</md-video>
:::

## 使用场景

* **静态消息卡片** 
 
  飞书消息卡片能够自动根据聊天窗口大小，调整内容布局，保证展示空间的利用率。在静态内容中支持包括文本格式、图文混排布局的呈现能力。并且支持根据用户飞书语言环境，配置对应的国际化语言版本。详情可参考[快速了解消息卡片](/ssl:ttdoc/home/build-a-beautiful-message-card-in-5-minutes/add-interaction)。 

  :::html
  <div style="text-align: left"><img src=https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/4327f69c668a428392a5a101890bab79~tplv-goo7wpa0wc-image.image
   width="600px" /></div>
  :::


- **可交互的消息卡片**

  通过消息卡片的互动功能，你可以在聊天窗口中实现**点击完成操作**的简单交互，包括跳转链接，表单提交，动态展示信息等操作。另外你还可以使用更新消息卡片的能力，在用户提交操作后，刷新卡片内容，及时给用户反馈等。详情可参考[快速了解消息卡片](/ssl:ttdoc/home/build-a-beautiful-message-card-in-5-minutes/add-interaction)。 

  :::html
  <div style="text-align: left"><img src=https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/47e783f0520b4b89be331bb66e3da10f~tplv-goo7wpa0wc-image.image
   width="600px" /></div>
  :::


* **独享卡片**

  在群聊中和机器人进行交互时，一些过程态的操作只需操作用户可见，对群里的其他成员会带来打扰。

  此时，你可以发送仅操作人可以见的消息卡片，避免过程态的消息打扰其他群成员。详情请参考[独享卡片](/ssl:ttdoc/home/build-a-beautiful-message-card-in-5-minutes/feedback-on-user-behavior)。

  :::html
  <div style="text-align: left"><img src=https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/3eade01444a04297bcb02d4b25b35357~tplv-goo7wpa0wc-image.image width="600px" /></div>
  :::

- **在侧边栏打开表单页面**

  如果你希望用户在收到你的应用所推送的消息卡片后，在会话中进一步完成更复杂的表单填写。

  你可以使用飞书边栏的开放能力，通过AppLink协议将表单地址配置在消息卡片的跳转交互上，实现在聊天的侧边栏中打开普通网页、网页应用、小程序页面。详情请参考[AppLink协议](/ssl:ttdoc/uYjL24iN/ucjN1UjL3YTN14yN2UTN)。

  :::html
  <div style="text-align: left"><img src=https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/8dcdaa9f9c8c4d3e8abdfa147a5d57b6~tplv-goo7wpa0wc-image.image width="600px" /></div>
  :::

## 功能简介

消息卡片通常包括标题、描述、图片、按钮等元素，使消息接收者可以更直观地了解和处理接收到的信息。这些卡片可以包含各种类型的内容，如OA审批、投票统计、报警处理等系统操作，以及醒目的通知、图文并茂的文章列表等。

**内容模块**：消息卡片提供了丰富的内容呈现元素，比如 Markdown 文本格式、图文布局、GIF动图、彩色标题等。你可以自由组合这些元素创作消息内容，大幅度增强信息的表现力。

:::html
<div style="text-align: left"><img src=https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/b043abcc3f524f47be3ba614f87759e5~tplv-goo7wpa0wc-image.image?lazyload=true&width=1640&height=1296 width="600px" /></div>
:::

**交互能力**：消息卡片具有交互能力。用户可以直接在卡片上提交信息，与你的业务系统进行对话。
 
  如果你要发起**审批流**，审批人在聊天中收到**审批提醒**的同时，还可以直接在该消息卡片上快速完成审批。

:::html
<div style="text-align: left"><img src=https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/f69c7f71b5a74dc3843c92e693d9b680~tplv-goo7wpa0wc-image.image?lazyload=true&width=1640&height=995 width="600px" /></div>
:::
 
  如果你是一个项目的组织者，可以直接在聊天中快速的发起**投票**，实时展示结果，省去争论的过程。

:::html
<div style="text-align: left"><img src=https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/0cf8a98097ed4c528dfe6734b4cf3058~tplv-goo7wpa0wc-image.image?lazyload=true&width=1080&height=608 width="600px" /></div>
:::

  如果你是运维工程师，你可以通过卡片及时推送**运维报警**，并直接在卡片上提交报警处理、屏蔽报警操作。

:::html
<div style="text-align: left"><img src=https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/f484410f7dea4ceeb3e2c510b278d044~tplv-goo7wpa0wc-image.image?lazyload=true&width=1640&height=1030 width="600px" /></div>
:::

## 如何发送消息卡片 

你可以参考以下流程图，选择消息卡片发送方式然后发送消息卡片，详细操作步骤可参考[如何发送消息卡片](/ssl:ttdoc/ukTMukTMukTM/uAzMxEjLwMTMx4CMzETM)。

![消息卡片概述-中文.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7f2f7077e6a30912e88b6b1b5675c3c1_zfU9pQdmWO.png?height=448&lazyload=true&maxWidth=750&width=2242)