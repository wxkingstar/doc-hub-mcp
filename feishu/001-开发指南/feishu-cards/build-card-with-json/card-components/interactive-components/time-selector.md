<!--
title: 时间选择器
id: 7343499772501114884
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/time-selector
updatedAt: 1735814969000
source: https://open.feishu.cn/document/feishu-cards/card-components/interactive-components/time-selector
-->
# 时间选择器组件

时间选择器组件是用于提供时间选项的交互组件。本文档介绍时间选择器组件的 JSON 结构和相关属性。

本文档介绍时间选择器组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[时间选择器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/time-selector)。



![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/06e975e8c8296319e6c3ed1dc4f9d3a5_F8K0yHFkdG.png?height=188&lazyload=true&maxWidth=400&width=560)

## 注意事项

- 时间选择器组件支持飞书 V3.11.0 及以上版本的客户端。在低于该版本的飞书客户端上，表单容器的内容将展示为“当前版本不支持查看此消息”。
- 在使用时间选择器时，你需提醒用户选择与当前时间场景相对应的时区信息。例如，在预定海外酒店的场景下，一般使用酒店所在地时区；设置日程场景下，一般使用用户当前所在地的时区。开放平台会返回用户当前的时区作为参考，但并不代表用户选择了该时区。
- 在卡片 JSON 代码中，若时间选择器组件直接位于卡片根节点，而非嵌套在其它组件中，你需将其 JSON 数据配置在[交互模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements)（`"tag": "action"`）的 `actions` 字段中使用。

## 嵌套规则

时间选择器组件支持嵌套在分栏、表单容器、折叠面板、循环容器中使用。

## 组件属性

### JSON 结构

时间选择器组件的 JSON 结构如下所示：
```json
{
  "tag": "picker_time",  // 时间选择器组件的标签。
  "name": "picker_time1", // 时间选择器组件的唯一标识。当组件内嵌在表单容器中时，该字段生效且必填，用于识别用户提交的数据属于哪个组件。
  "required": false, // 时间是否必选。默认值 false。当时间选择器内嵌在表单容器时，该属性可用。其它情况将报错或不生效。
  "disabled": false, // 是否禁用该时间选择器组件。默认值 false。
  "width": "default",  // 时间选择器的宽度。
  "initial_time": "11:30", // 时间初始值。
  "placeholder": {
    // 时间选择器组件内的占位文本。
    "tag": "plain_text",
    "content": "请选择"
  },
  "value": {
    // 回传数据
    "key_1": "value_1"
  },
  "confirm": {
    // 二次确认弹窗配置
    "title": {
      "tag": "plain_text",
      "content": "title"
    },
    "text": {
      "tag": "plain_text",
      "content": "content"
    }
  }
}
```

### 字段说明

时间选择器组件的字段说明如下表。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 20%;">字段</md-th>
<md-th style="width: 10%;">是否必填</md-th>
<md-th>类型</md-th>
<md-th>默认值</md-th>
<md-th style="width: 50%;">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>tag</md-td>
<md-td>是</md-td>
<md-td>string</md-td>
<md-td>/</md-td>
<md-td>组件的标签。时间选择器组件取固定值 `picker_time`。</md-td>
</md-tr>
<md-tr>
<md-td>name</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
该时间选择器组件的唯一标识。用于识别用户提交的数据属于哪个组件。
  
<strong>注意</strong>: 当时间选择器组件嵌套在表单容器中时，该字段必填且需在卡片全局内唯一。
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
时间否必选。当组件内嵌在表单容器中时，该属性可用。其它情况将报错或不生效。可取值：
- true：时间必选。当用户点击表单容器的“提交”时，未填写时间，则前端提示“有必填项未填写”，不会向开发者的服务端发起回传请求。
- false：时间选填。当用户点击表单容器的“提交”时，未填写时间，仍提交表单容器中的数据。
</md-td>
</md-tr>
<md-tr>
<md-td>disabled</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
是否禁用该时间选择器。该属性仅支持飞书 V7.4 及以上版本的客户端。可选值：
- true：禁用时间选择器组件
- false：时间选择器组件保持可用状态
</md-td>
</md-tr>
   <md-tr>
      <md-td>initial_time</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>时间选择器组件的初始选项值。格式为 `HH:mm`。该配置将会覆盖 `placeholder` 配置的占位文本。</md-td>
    </md-tr>
<md-tr>
<md-td>
placeholder
</md-td>
<md-td>否</md-td>
<md-td>object</md-td>
<md-td>/</md-td>
<md-td>
时间选择器组件内的占位文本。

**注意**：
- 未配置 `initial_time` 字段设置初始选项值时，该字段必填。
- 配置 `initial_time` 字段设置初始选项值后，该字段不再生效。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ tag
</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
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
时间选择器组件的宽度。支持以下枚举值：
- default：默认宽度
- fill：卡片最大支持宽度
- [100,∞)px：自定义宽度。超出卡片宽度时将按最大支持宽度展示
</md-td>
</md-tr>
      <md-tr>
      <md-td>value</md-td>
      <md-td>是</md-td>
      <md-td>JSON</md-td>
      <md-td>/</md-td>
      <md-td>
        设置交互的回传数据，当用户点击交互组件的选项后，会将 value 的值返回给接收回调数据的服务器。后续你可以通过服务器接收的 value 值进行业务处理。
   
该字段值仅支持 key-value 形式的 JSON 结构，且 key 为 String 类型。示例值：
```json
"value":{
    "key-1":Object-1,
    "key-2":Object-2,
    "key-3":Object-3,
    ······
}
```
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

以下的 JSON 示例代码可实现如下图所示的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/06e975e8c8296319e6c3ed1dc4f9d3a5_9wvv0E6mVS.png?height=188&lazyload=true&maxWidth=400&width=560)

```json
{
    "i18n_elements": {
        "zh_cn": [
            {
                "tag": "action",
                "actions": [
                    {
                        "tag": "picker_time",
                        "placeholder": {
                            "tag": "plain_text",
                            "content": "请选择"
                        },
                        "width": "default",
                        "initial_time": "09:00"
                    }
                ]
            },
            {
                "tag": "action",
                "actions": [
                    {
                        "tag": "picker_time",
                        "placeholder": {
                            "tag": "plain_text",
                            "content": "请选择"
                        },
                        "width": "default"
                    }
                ]
            }
        ]
    },
    "i18n_header": {}
}
```

