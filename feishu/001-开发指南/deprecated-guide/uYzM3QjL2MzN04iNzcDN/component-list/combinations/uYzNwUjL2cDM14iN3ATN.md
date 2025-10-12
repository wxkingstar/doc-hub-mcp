<!--
title: 双列文本
id: 6907569524100677633
fullPath: /ukTMukTMukTM/uYzNwUjL2cDM14iN3ATN
updatedAt: 1702606409000
source: https://open.feishu.cn/document/common-capabilities/message-card/message-cards-content/embedded-non-interactive-elements/field
-->
# 双列文本

双列文本是消息卡片搭建工具提供的组合模块，用于构建并列展示的内容。

## 组件展示

在消息卡片搭建工具中，双列文本组合模块如下图所示。不同于[多列布局](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/column-set)组件的样式调整、可内嵌其他组件与元素的特点，双列文本仅用于展示文本信息。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0a752e52de1a872eab83c8f8601cf21f_ekuKezlYYh.png?height=1330&lazyload=true&maxWidth=600&width=2882)

JSON 配置示例如下，双列文本定义在内容模块（div）中，通过 fields 元素控制多列文本的排版。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/799f2f545d86d3b8979a856e7e5d74b1_1X8xDXEj8s.png?height=850&lazyload=true&maxWidth=600&width=1694)

## 参数说明

field 元素包含的参数说明如下表。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 15%">参数</md-th>
<md-th style="width: 15%">是否必须</md-th>
<md-th style="width: 15%">类型</md-th>
<md-th style="width: 55%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>is_short</md-td>
<md-td>是</md-td>
<md-td>Boolean</md-td>
<md-td>
是否并排布局。取值：
- true：并排
- false：不并排
</md-td>
</md-tr>

<md-tr>
<md-td>text</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>
国际化文本内容。使用文本组件的数据结构展示内容，详情参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 卡片示例

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/16ad910bf8a0510e8b108b03e423f145_c37OdcUI2t.png?height=468&lazyload=true&maxWidth=600&width=1210)

JSON 示例如下：

```json 
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
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
          "is_short": true, // 并排布局
          "text": {
            "tag": "lark_md",
            "content": "**申请人**\n王晓磊"
          }
        },
        {
          "is_short": true, // 并排布局
          "text": {
            "tag": "lark_md",
            "content": "**休假类型：**\n年假"
          }
        },
        {
          "is_short": false, // 非并排布局
          "text": {
            "tag": "lark_md",
            "content": ""
          }
        },
        {
          "is_short": false, // 非并排布局
          "text": {
            "tag": "lark_md",
            "content": "**时间：**\n2020-4-8 至 2020-4-10（共3天）"
          }
        },
        {
          "is_short": false, // 非并排布局
          "text": {
            "tag": "lark_md",
            "content": ""
          }
        },
        {
          "is_short": true, // 非并排布局
          "text": {
            "tag": "lark_md",
            "content": "**备注**\n因家中有急事，需往返老家，故请假"
          }
        }
      ]
    }
  ]
}
``` 

