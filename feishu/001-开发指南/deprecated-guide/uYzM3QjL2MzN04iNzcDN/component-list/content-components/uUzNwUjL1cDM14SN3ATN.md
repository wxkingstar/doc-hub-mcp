<!--
title: 文本
id: 6907569743420358658
fullPath: /ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN
updatedAt: 1724163266000
source: https://open.feishu.cn/document/common-capabilities/message-card/message-cards-content/embedded-non-interactive-elements/text
-->
# 文本

本文介绍消息卡片搭建工具中的文本组件，以及构成该组件的参数说明。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[普通文本](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/plain-text)。
:::
## 组件展示

文本组件由包含在内容组件（div）中的 text 元素构成。text 元素支持 plain_text（普通文本内容） 和 lark_md（支持部分 Markdown 语法的文本内容） 两种模式。

- plain_text 模式：普通文本内容
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/10aeeb715dec02d163da671a62352ab4_f6VNMHhh7S.png?height=1316&lazyload=true&maxWidth=600&width=2882)

- lark_md 模式：支持部分 Markdown 语法的文本内容
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/affffe7344a1e6f36ac61d872e845705_fn8Bt364NG.png?height=1382&lazyload=true&maxWidth=600&width=2882)

## 参数说明

text 元素支持 plain_text（普通文本内容） 和 lark_md（支持部分 Markdown 语法的文本内容） 两种模式。

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
<md-td>tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>
文本元素的标签。两种模式的固定取值：
- plain_text：普通文本内容。
- lark_md：支持部分 Markdown 语法的文本内容。关于 Markdown 语法的详细介绍，可参见 [Markdown](/ssl:ttdoc/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN#abc9b025)。
</md-td>
</md-tr>

<md-tr>
<md-td>content</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>
文本内容。
</md-td>
</md-tr>

<md-tr>
<md-td>lines</md-td>
<md-td>否</md-td>
<md-td>int</md-td>
<md-td>
内容显示行数。该字段仅支持 text 的 `plain_text` 模式，不支持 `lark_md` 模式。
</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

## lark_md 模式支持情况

text 元素除了包含在 div 中构成文本组件之外，还可以作为单独的元素包含到图片、备注以及按钮等多种组件内，其中，`plain_text` 模式全部支持选用、`lark_md` 模式仅部分支持选用。具体说明如下表：

| 组件/元素        | 字段        | 是否支持 lark_md |
| ---------------- | ----------- | ----------------- |
| 内容组件（div）  | text        | 是                |
| 内容组件（div）  | field       | 是                |
| 图片组件（img）  | title       | 是                |
| 图片组件（img）  | alt         | 否                |
| 备注组件（note） | elements    | 是                |
| image 元素        | alt         | 否                |
| button 元素       | text        | 是                |
| selectMenu（列表选择器）   | placeholder | 否                |
| datePicker（日期选择器）   | placeholder | 否                |
| confirm 元素      | title       | 否                |
| confirm 元素      | text        | 否                |
| option 元素       | text        | 否                |


## 卡片示例


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/783016ec1a9a53f24cdb065510da9793_brQZKkqxGm.png?height=186&lazyload=true&maxWidth=600&width=1206)

JSON 代码示例如下：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    {
      "tag": "div",
      "text": {
        "tag": "lark_md", // lark_md 模式
        "content": "**text**/~~text~~"
      }
    },
    {
      "tag": "div",
      "text": {
        "tag": "plain_text", // plain_text 模式
        "content": "测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本",
        "lines": 2 // 内容显示行数
      }
    }
  ]
}
```