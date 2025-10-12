<!--
title: 人员选择-单选
id: 7343499772501032964
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/single-select-user-picker
updatedAt: 1735814935000
source: https://open.feishu.cn/document/feishu-cards/card-components/interactive-components/single-select-user-picker
-->
# 人员选择-单选组件

人员选择-单选组件支持添加指定人员作为单选选项，是一种交互组件。本文档介绍人员选择-单选组件的 JSON 结构和相关属性。

本文档介绍人员选择-单选组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[人员选择-单选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/single-select-user-picker)。



![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d85b31ecc22aac31e96f03611c115c30_JTuavGnynE.png?height=195&lazyload=true&maxWidth=500&width=819)

## 注意事项

在卡片 JSON 代码中，若人员选择-单选组件直接位于卡片根节点，而非嵌套在其它组件中，你需将其 JSON 数据配置在[交互模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements)（`"tag": "action"`）的 `actions` 字段中使用。

## 嵌套规则

人员选择-单选组件支持嵌套在分栏、表单容器、折叠面板、循环容器中使用。

## 组件属性

### JSON 结构

人员选择-单选组件的结构如下所示：
```json
{
  "tag": "select_person", // 组件的标签
  "type": "text", // 组件边框样式。默认值为 default。
  "required":true, // 选项是否必填。
  "disabled":false, // 选项是否禁用。
  "placeholder": {
    // 人员选择组件内的占位文本
    "tag": "plain_text",
    "content": "默认提示文本"
  },
  "width": "default",  // 下拉选择组件的宽度
  "options": [
    // 选项配置，仅支持添加候选用户的 open_id。
    {
      "value": "ou_48d0958ee4b2ab3eaf0b5f6c968xxxxx" // 候选用户的 open_id
    },
    {
      "value": "ou_f9d24af786a14340721288cda6axxxxx" // 候选用户的 open_id
    }
  ],
  "confirm": {
    // 二次确认弹窗配置
    "title": {
      "tag": "plain_text",
      "content": "弹窗标题"
    },
    "text": {
      "tag": "plain_text",
      "content": "弹窗正文文案"
    }
  }
}
```

### 字段说明

人员选择-单选组件的字段说明如下表。
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 12%;">字段</md-th>
<md-th style="width: 15%;">是否必填</md-th>
<md-th style="width: 15%;">类型</md-th>
<md-th style="width: 15%;">默认值</md-th>
<md-th style="width: 50%;">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
tag
</md-td>
<md-td>是</md-td>
<md-td>string</md-td>
<md-td>/</md-td>
<md-td>
组件的标签。人员选择-单选组件取固定值 `select_person`。
</md-td>
</md-tr>
<md-tr>
<md-td>
type
</md-td>
<md-td>否</md-td>
<md-td>string</md-td>
<md-td>default</md-td>
<md-td>
组件边框样式。可选值：
- default：带边框样式
- text：不带边框的纯文本样式
</md-td>
</md-tr>
<md-tr>
<md-td>
required
</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
单选组件的内容是否必选。当组件内嵌在表单容器中时，该属性生效。可取值：
- true：单选组件必选。当用户点击表单容器的“提交”时，未填写单选组件，则前端提示“有必填项未填写”，不会向开发者的服务端发起回传请求。
- false：单选组件选填。当用户点击表单容器的“提交”时，未填写单选组件，仍提交表单容器中的数据。
</md-td>
</md-tr>
<md-tr>
<md-td>disabled</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
是否禁用该单选组件。可选值：
- true：禁用单选组件组件
- false：单选组件组件保持可用状态
</md-td>
</md-tr>
<md-tr>
<md-td>
placeholder
</md-td>
<md-td>否</md-td>
<md-td>object</md-td>
<md-td>/</md-td>
<md-td>
人员选择组件内的占位文本。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ tag
</md-td>
<md-td>是</md-td>
<md-td>string</md-td>
<md-td>plain_text</md-td>
<md-td>
占位提示标签。固定值为 plain_text。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ content
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>
占位文本的内容，最多支持 100 个字符。
</md-td>
</md-tr>
<md-tr>
<md-td>
width
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>default</md-td>
<md-td>
人员选择组件的宽度。支持以下枚举值：
- default：默认宽度
- fill：卡片最大支持宽度
- [100,∞)px：自定义宽度。超出卡片宽度时将按最大支持宽度展示
</md-td>
</md-tr>
<md-tr>
<md-td>
options
</md-td>
<md-td>否</md-td>
<md-td>Array of objects</md-td>
<md-td>/</md-td>
<md-td>
选项值配置。按选项数组的顺序展示选项内容。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ value
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
选项配置，仅支持添加候选用户的 open_id。了解更多，参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
  
**注意**：当 options 数组为空，或 value 的值全部无效时，候选项展示为卡片所在会话中所有成员选项。
</md-td>
</md-tr>
<md-tr>
<md-td>confirm</md-td>
<md-td>否</md-td>
<md-td>Struct</md-td>
<md-td>默认不生效此属性。</md-td>
<md-td>
二次确认弹窗配置。指在用户提交时弹出二次确认弹窗提示；只有用户点击确认后，才提交输入的内容。该字段默认提供了确认和取消按钮，你只需要配置弹窗的标题与内容即可。
  
<strong>注意</strong>：<code>confirm</code> 字段仅在用户点击包含提交属性的按钮时才会触发二次确认弹窗。
</md-td>
</md-tr>
<md-tr>
<md-td>confirm.title</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗标题。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.title.tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>二次确认弹窗标题文本的标签。固定取值为 `plain_text`。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.title.content</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗标题的内容。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.text</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗的文本内容。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.text.tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>二次确认弹窗文本的标签。固定取值为 `plain_text`。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.text.content</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗文本的具体内容。</md-td>
</md-tr>
</md-tbody>
</md-table>
:::
## 回调结构

为组件成功配置交互后，用户基于组件进行交互时，你在开发者后台配置的请求地址将会收到回调数据。
- 如果你添加的是新版卡片回传交互回调(`card.action.trigger`)，可参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)了解回调结构。
- 如果你添加的是旧版卡片回传交互回调(`card.action.trigger_v1`)，可参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)了解回调结构。

## 示例代码

以下的 JSON 示例代码可实现如下图所示的卡片效果，你需填入实际的用户的 open_id。


![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d85b31ecc22aac31e96f03611c115c30_q5kjDHzs72.png?height=195&lazyload=true&maxWidth=500&width=819)
```json
{
  "i18n_elements": {
    "zh_cn": [
      {
        "tag": "action",
        "actions": [
          {
            "tag": "select_person",
            "placeholder": {
              "tag": "plain_text",
              "content": "请选择"
            },
            "options": [
              {
                "value": "ou_449b53ad6aee526f7ed311b216aabcef"
              },
              {
                "value": "ou_449b53ad6aee526f7ed311b216aabcef"
              }
            ],
            "width": "default",
            "type": "default"
          }
        ]
      }
    ]
  }
}
```