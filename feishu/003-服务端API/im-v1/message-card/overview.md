<!--
title: 消息卡片资源概述
id: 7016681170402754561
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-card/overview
updatedAt: 1737375067000
source: https://open.feishu.cn/document/server-docs/im-v1/message-card/overview
-->
# 卡片资源概述

飞书卡片能将结构化的内容以卡片形式嵌入至聊天消息、群置顶消息、链接预览等飞书协作场景中，提升信息传递效率。用户可以在卡片上通过简单交互完成业务处理，让业务系统触手可及。简而言之，飞书卡片可使应用的使用体验从“人找应用”，演变为“应用找人”。了解更多，参考[飞书卡片概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)。

消息业务针对卡片类的消息提供了一系列 API，使用这些 API 可以实现：

- [更新应用发送的消息卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)
- [延时更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)
- [发送仅特定人可见的消息卡片](/ssl:ttdoc/ukTMukTMukTM/uETOyYjLxkjM24SM5IjN)
- [删除仅特定人可见的消息卡片](/ssl:ttdoc/ukTMukTMukTM/uITOyYjLykjM24iM5IjN)

## 字段说明

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 15%;">必填</md-th>
      <md-th style="width: 40%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>


<md-tr>
	<md-td>
	&nbsp;<md-text type="field-name" >content</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
  <md-td>
	消息内容为 JSON 格式的卡片结构转义成 String，卡片结构各字段说明请参考[卡片 JSON 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)。
	</md-td>
</md-tr>
  </md-tbody>
</md-table>
:::


### 卡片 JSON 结构示例

```json 
{
  "config": {
    "wide_screen_mode": true
  },
  "header": {
    "title": {
      "tag": "plain_text",
      "content": "你有一个休假申请待审批"
    }
  },
  "elements": [
    {
      "tag": "div",
      "fields": [
        {
          "is_short": true,
          "text": {
            "tag": "lark_md",
            "content": "**申请人**\n王晓磊"
          }
        },
        {
          "is_short": true,
          "text": {
            "tag": "lark_md",
            "content": "**休假类型：**\n年假"
          }
        },
        {
          "is_short": false,
          "text": {
            "tag": "lark_md",
            "content": ""
          }
        },
        {
          "is_short": false,
          "text": {
            "tag": "lark_md",
            "content": "**时间：**\n2020-4-8 至 2020-4-10（共3天）"
          }
        },
        {
          "is_short": false,
          "text": {
            "tag": "lark_md",
            "content": ""
          }
        },
        {
          "is_short": true,
          "text": {
            "tag": "lark_md",
            "content": "**备注**\n因家中有急事，需往返老家，故请假"
          }
        }
      ]
    },
    {
      "tag": "hr"
    },
    {
      "tag": "action",
      "layout": "bisected",
      "actions": [
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "批准"
          },
          "type": "primary",
          "value": {
            "chosen": "approve"
          }
        },
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "拒绝"
          },
          "type": "primary",
          "value": {
            "chosen": "decline"
          }
        }
      ]
    }
  ]
}
``` 

将以上卡片消息发送后，预览图示如下：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/67f0e373b1d3c090099cc673b00ff5c0_jRoSHwBEgC.png?height=678&lazyload=true&maxWidth=566&width=1366)

## 相关链接

了解如何发送卡片消息、如何更新卡片消息，参见[发送卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card)、[更新卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/update-feishu-card)。

