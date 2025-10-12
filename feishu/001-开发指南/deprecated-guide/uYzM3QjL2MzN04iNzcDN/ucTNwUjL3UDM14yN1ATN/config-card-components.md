<!--
title: 配置卡片组件
id: 7312637705938927618
fullPath: /ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/config-card-components
updatedAt: 1724163066000
source: https://open.feishu.cn/document/deprecated-guide/message-card/build-card-content/config-card-components
-->
# 配置卡片组件

消息卡片搭建工具的组件可以分为非交互组件和交互组件两类。在消息卡片搭建工具中合理配置卡片组件，可以构建出样式精美、符合业务需求的消息卡片。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[组件概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/component-overview)。
:::
## 组件类型

- 使用非交互组件，你可以构建一些仅用于推送通知的卡片。例如，数据报表、系统通知、版本更新日志等。
- 使用交互组件，你可以构建可交互的消息卡片，使用户在接收到该类卡片后，可通过卡片内的交互组件快速访问相关链接或是处理业务。例如：
	- 在新功能推广的消息卡片内，添加功能介绍文档的跳转链接按钮，使感兴趣的用户在收到消息卡片后可以扩展阅读。
	- 在处理审批流的消息卡片内，添加审批操作按钮，并将卡片交互事件与业务服务端进行关联，使审核人员收到消息卡片后，在卡片内即可快速处理审批流。

## 配置非交互组件

消息卡片内非交互组件列表如下，你可以前往查看各个组件的详细介绍及配置说明。

- [多列布局](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/column-set)
- [文本](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)
- [Markdown](/ssl:ttdoc/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN)
- [分割线](/ssl:ttdoc/ukTMukTMukTM/uQjNwUjL0YDM14CN2ATN)
- [图片](/ssl:ttdoc/ukTMukTMukTM/uUjNwUjL1YDM14SN2ATN)
- [双列文本](/ssl:ttdoc/ukTMukTMukTM/uYzNwUjL2cDM14iN3ATN)
- [备注](/ssl:ttdoc/ukTMukTMukTM/ucjNwUjL3YDM14yN2ATN)

在消息卡片搭建工具内配置非交互组件时，主要需要配置组件的样式以及内容。配置示例如下：

1. 在搭建工具内，为消息卡片添加一个 **文本** 组件，并设置文本内容。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce25940a3c82cc7b1d29fc28940c7b0a_SF2EhMVwo5.png?height=1408&lazyload=true&maxWidth=600&width=2882)
    
2. 为消息卡片添加一个 **标题** 组件，并设置样式（例如，选择绿色主题样式）与内容。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/48c4cddcf6d9a580d4e20252694b3531_NxOaFsZiEQ.png?height=1320&lazyload=true&maxWidth=600&width=2882)
    
3. 保存并发布消息卡片，即可完成一张简单卡片的构建。

	在实际配置过程中，你需要根据实际需求，自定义配置消息卡片的组件与内容。

## 配置交互组件

消息卡片内交互组件列表如下，你可以前往查看各个组件的详细介绍及配置说明。

- [按钮（button）](/ssl:ttdoc/ukTMukTMukTM/uEzNwUjLxcDM14SM3ATN)
- [折叠按钮组（overflow）](/ssl:ttdoc/ukTMukTMukTM/uMzNwUjLzcDM14yM3ATN)
- [日期选择器（datePicker）](/ssl:ttdoc/ukTMukTMukTM/uQzNwUjL0cDM14CN3ATN)
- [列表选择器（selectMenu）](/ssl:ttdoc/ukTMukTMukTM/uIzNwUjLycDM14iM3ATN)

此外，消息卡片搭建工具还提供了一些组合模块，这些模块也属于交互组件。

- [文本 + 按钮](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-button)
- [文本 + 图片](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-image)
- [文本 + 列表选择器](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-option-picker)
- [文本 + 折叠按钮组](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-overflow-button)
- [文本 + 日期选择器](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-date-picker)

在上文的 **配置非交互组件** 章节，通过示例配置，构建了一个简单的功能介绍消息卡片。如果在卡片内添加一个按钮，并使用分割线与内容做间隔，便构成了一个可交互的消息卡片。

1. 在消息卡片搭建工具内，为卡片添加 **分割线** 组件。
2. 添加 **按钮** 组件，选择 **单按钮**。
3. 配置按钮内容，并配置跳转交互，使点击按钮后跳转至消息卡片功能介绍文档。

:::note
卡片交互方式分为链接交互和回传交互，详细配置说明可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
:::

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4c089513e5e96072c59bbc55c9703679_D6FE1CKccv.png?height=1414&lazyload=true&maxWidth=600&width=2882)

4. 保存并发布消息卡片，即可完成一张简单的交互型卡片的构建。

	在实际配置过程中，你需要根据实际需求，自定义配置消息卡片的组件与内容。

## 相关操作

你可以为消息卡片绑定卡片变量，使构建的消息卡片作为模板被保存，后续在同类型业务场景中只需要为变量赋值便可发送不同的消息卡片内容。配置详情参见[配置卡片变量](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/configure-card-variables)。
