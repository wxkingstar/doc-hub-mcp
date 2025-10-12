<!--
title: 分割线
id: 6907569744329998337
fullPath: /ukTMukTMukTM/uQjNwUjL0YDM14CN2ATN
updatedAt: 1724163355000
source: https://open.feishu.cn/document/common-capabilities/message-card/message-cards-content/divider-line-module
-->
# 分割线

你可以在消息卡片内需要明确分割模块的位置，添加分割线组件。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[分割线](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/divider)。
:::

## 组件展示

在消息卡片搭建工具中，分割线效果如下图所示。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/84bb4a596bd269234a8b2f7f948f7fd6_V9U7l4iD7F.png?height=1342&lazyload=true&maxWidth=600&width=2882)


## 参数说明

分割线组件的参数说明如下表所示。

:::html
<md-table>
    <md-thead>
    <md-tr>
        <md-th style="width: 15%">参数</md-th>
        <md-th style="width: 15%">是否必须</md-th>
        <md-th style="width: 15%">类型</md-th>
        <md-th style="width: 55%">描述</md-th>
    </md-tr>
    </md-thead>
    <md-tbody>
    <md-tr>
        <md-td>tag</md-td>
        <md-td>是</md-td>
        <md-td>String</md-td>
        <md-td>分割线模块标识，固定取值：hr。</md-td>
    </md-tr>
    </md-tbody>
</md-table>
:::

JSON 示例配置：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    {
      "tag": "div",
      "text": {
        "content": "这是一段普通文本😄",
        "tag": "plain_text"
      }
    },
    {
      "tag": "hr" // 分割线
    },
    {
      "tag": "action",
      "actions": [
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "详情"
          },
          "type": "primary",
          "multi_url": {
            "url": "www.example.com",
            "android_url": "",
            "ios_url": "",
            "pc_url": ""
          }
        }
      ]
    }
  ]
}
```