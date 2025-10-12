<!--
title: 组件概述
id: 7312637705938747394
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/component-overview
updatedAt: 1724163222000
source: https://open.feishu.cn/document/deprecated-guide/message-card/component-list/component-overview
-->
# 组件概述

搭配使用不同的组件，你可以构建样式精美的消息卡片内容。本文列出了消息卡片搭建工具所包含的所有组件列表，供你参考。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[组件概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/component-overview)。
:::
## 布局

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 25%">组件</md-th>
<md-th style="width: 75%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>[多列布局](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/column-set)</md-td>
<md-td>
多列布局是消息卡片搭建工具提供的布局容器能力。你可以使用多列布局横向排布多个列容器，在列容器内自由组合图文内容，解决多列内容对齐问题的同时，还实现了灵活的图文混排。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 内容组件

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 25%">组件</md-th>
<md-th style="width: 75%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>[文本](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)</md-td>
<md-td>
本文组件用户展示文字描述，支持普通文本模式和 Markdown 内容模式。
</md-td>
</md-tr>
  
<md-tr>
<md-td>[Markdown](/ssl:ttdoc/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN)</md-td>
<md-td>
消息卡片搭建工具内除了提供普通的文本组件，还提供了 Markdown 组件，使用 Markdown 组件可渲染文本格式、图片、分割线等元素。
</md-td>
</md-tr>

<md-tr>
<md-td>[标题](/ssl:ttdoc/ukTMukTMukTM/ukTNwUjL5UDM14SO1ATN)</md-td>
<md-td>
用于构建消息卡片的标题样式与内容。
</md-td>
</md-tr>

<md-tr>
<md-td>[图片](/ssl:ttdoc/ukTMukTMukTM/uUjNwUjL1YDM14SN2ATN)</md-td>
<md-td>
用于在消息卡片内添加图片。
</md-td>
</md-tr>

<md-tr>
<md-td>[分割线](/ssl:ttdoc/ukTMukTMukTM/uQjNwUjL0YDM14CN2ATN)</md-td>
<md-td>
一条长横线，用于分割消息卡片的内容模块。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 交互组件

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 25%">组件</md-th>
<md-th style="width: 75%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>[按钮（button）](/ssl:ttdoc/ukTMukTMukTM/uEzNwUjLxcDM14SM3ATN)</md-td>
<md-td>
交互组件，支持配置按钮的回传交互能力或者链接跳转能力。
</md-td>
</md-tr>

<md-tr>
<md-td>[折叠按钮组（overflow）](/ssl:ttdoc/ukTMukTMukTM/uMzNwUjLzcDM14yM3ATN)</md-td>
<md-td>
交互组件，你可以将多个按钮添加在折叠按钮组中，默认情况下按钮组为折叠状态，点击按钮组将会展示组内所有按钮。
</md-td>
</md-tr>
  
<md-tr>
<md-td>[列表选择器（selectMenu）](/ssl:ttdoc/ukTMukTMukTM/uIzNwUjLycDM14iM3ATN)</md-td>
<md-td>
交互组件，该选择器支持自定义选项选择器、人员选择器两种模式。在自定义选项选择器中你可以配置普通选项或者跳转链接。在人员选择器中你可以设置人员列表，将指定人员作为选项。
</md-td>
</md-tr>

<md-tr>
<md-td>[日期选择器（datePicker）](/ssl:ttdoc/ukTMukTMukTM/uQzNwUjL0cDM14CN3ATN)</md-td>
<md-td>
交互组件，在该选择器中你可以设置仅选择日期、仅选择时间、选择日期与时间三种模式。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 组合模块

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 25%">组件</md-th>
<md-th style="width: 75%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>[双列文本](/ssl:ttdoc/ukTMukTMukTM/uYzNwUjL2cDM14iN3ATN)</md-td>
<md-td>
用于构建并列展示的内容。
</md-td>
</md-tr>

<md-tr>
<md-td>[文本 + 按钮](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-button)</md-td>
<md-td>
由文本组件和按钮组件组合而成的模块，便于你在工具内快速构建卡片内容。
</md-td>
</md-tr>
  
<md-tr>
<md-td>[文本 + 图片](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-image)</md-td>
<md-td>
由文本组件和图片组件组合而成的模块，便于你在工具内快速构建卡片内容。
</md-td>
</md-tr>

<md-tr>
<md-td>[文本 + 列表选择器](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-option-picker)</md-td>
<md-td>
由文本组件和列表选择器组合而成的模块，便于你在工具内快速构建卡片内容。
</md-td>
</md-tr>
  
<md-tr>
<md-td>[文本 + 折叠按钮组](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-overflow-button)</md-td>
<md-td>
由文本组件和折叠按钮组组合而成的模块，便于你在工具内快速构建卡片内容。
</md-td>
</md-tr>

<md-tr>
<md-td>[文本 + 日期选择器](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-date-picker)</md-td>
<md-td>
由文本组件和日期选择器组合而成的模块，便于你在工具内快速构建卡片内容。
</md-td>
</md-tr>
  
<md-tr>
<md-td>[备注](/ssl:ttdoc/ukTMukTMukTM/ucjNwUjL3YDM14yN2ATN)</md-td>
<md-td>
用于展示卡片内的一些次要信息，用于辅助说明。备注组件支持设置小尺寸图片以及文本。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::