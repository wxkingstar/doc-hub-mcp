<!--
title: 多图选择
id: 7343499772501213188
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/image-picker
updatedAt: 1735814992000
source: https://open.feishu.cn/document/feishu-cards/card-components/interactive-components/image-picker
-->
# 多图选择组件

多图选择组件是用于提供图片选项的交互组件，支持单选、多选图片。多图选择组件适用于以图片为主要选项的场景，如在卡片中展示商品图、模板图、AI生成的图片等供用户选择。本文档介绍多图选择组件的 JSON 结构和相关属性。

本文档介绍多图选择组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[多图选择](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/image-picker)。



![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3c0451b4d0aadd628e926864bf1857a0_J7nYYdj6jJ.png?height=925&lazyload=true&maxWidth=400&width=1118)

## 注意事项

- 多图选择组件仅支持通过撰写卡片 JSON 代码的方式使用，暂不支持在卡片搭建工具上构建使用。
- 多图选择组件支持飞书 V7.6 及以上版本的客户端。在低于该版本的飞书客户端上，多图选择的内容将展示为“请升级至最新版本客户端，以查看内容”的占位图。

## 嵌套规则

多图选择组件可嵌套在卡片的根节点、多列布局、表单容器组件中。在不同的嵌套关系中，多图选择组件支持的交互形态不同：
- 当多图选择组件不内嵌在表单容器中时，多图选择组件仅支持单选图片，且终端用户点击图片选项后立即提交，触发回传交互，不支持多选和异步提交。
- 当多图选择组件内嵌在表单容器中时，多图选择组件支持单选、多选交互并支持异步提交，即终端用户需选择图片后，点击表单容器的提交按钮，将本地缓存的表单内容一次回调至开发者服务端，实现异步提交。

## 组件属性

### JSON 结构

多图选择组件的 JSON 数据结构如下所示：

```json
{
  "elements": [
    {
      "tag": "select_img", // 组件标签。
      "style": "laser", // 选填，不填为默认样式。声明为 laser 时为镭射样式。
      "multi_select": false, // 是否多选。
      "layout": "bisect", // 选项的布局模式。
      "name": "choice_123", // 自定义多图选择组件的名称作为唯一标识。当组件内嵌在表单容器中时，该字段生效且必填，用于识别用户提交的数据属于哪个组件。
      "required": false, // 多图选择的选项是否必选。当组件内嵌在表单容器中时，该属性可用。其它情况将报错或不生效。
      "can_preview": false, // 点击图片选项后是否弹窗放大图片。当多图选择组件嵌套在表单容器中时，该属性生效。
      "aspect_ratio": "16:9", // 选项中图片的宽高比。
      "disabled": false, // 是否禁用整个选择组件。
      "disabled_tips": { // 指禁用组件后，用户将光标悬浮在整个组件上时展示的禁用提示文案。
        "tag": "plain_text",
        "content": "用户禁用提示文案"
      }, 
      "value": { // 自定义回传参数，支持回传字符串，或 "key":"value" 构成的对象结构体。
        "key": "value"
      }, 
      // 选项数组。在此配置多图选择组件中每个图片选项的属性。
      "options": [
        {
          "img_key": "xxxxxxxxxxxxxx", // 图片资源的 Key。
          "value": "picture1", // 自定义每个图片选项的回传参数。
          "disabled": false, // 是否禁用当前图片选项。
          "disabled_tips": { // 禁用当前选项后，用户将光标悬浮在选项上或点击选项时展示的禁用提示文案。
            "tag": "plain_text",
            "content": "用户禁用提示文案"
          }, 
          "hover_tips": { // 用户在 PC 端将光标悬浮在选项上方时的文案提醒。
            "tag": "plain_text",
            "content": "第一张图"
          }
        }
      ]
    }
  ]
}
```

### 字段说明

多图选择组件各属性说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 15%;">字段</md-th>
<md-th style="width: 10%;">是否必填</md-th>
<md-th style="width: 15%;">类型</md-th>
<md-th style="width: 15%;">默认值</md-th>
<md-th>描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>组件的标签。多图选择的固定取值为 `select_img`。</md-td>
</md-tr>
<md-tr>
<md-td>style</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>default</md-td>
<md-td>
图片加载等状态时的组件风格样式。可取值：
- default：默认灰色样式
- laser：彩色渐变样式，建议 AI 场景使用![示例图](http:////sf3-cn.feishucdn.com/obj/open-platform-opendoc/0ae7b865c1aa37f29d8647f0ea329b38_usdAFosDoT.png?height=163&lazyload=true&width=433)
</md-td>
</md-tr>
<md-tr>
<md-td>multi_select</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
图片是否多选。可选值：
- true：多选，仅支持异步提交。多图选择组件需内嵌在表单容器中，否则卡片 JSON 报错。
- false：单选。
  - 组件在表单容器内时，图片选项展示为带单选按钮（radio button）的异步提交样式。
  - 组件不在表单容器内时，图片选项展示为不带单选按钮（radio button）的同步提交样式。
</md-td>
</md-tr>
<md-tr>
<md-td>layout</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>bisect</md-td>
<md-td>
图片选项的布局方式。可选值：
- stretch：每个选项的图片宽度撑满父容器宽度，高度按图片大小等比例缩放。
- bisect：二等分排布，每个选项图片宽度占父容器的 1/2，高度按图片大小等比例缩放。
- trisect：三等分排布，每个选项图片宽度占父容器的 1/3，高度按图片大小等比例缩放。
</md-td>
</md-tr>
<md-tr>
<md-td>name</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
自定义多图选择组件的名称作为唯一标识。用于识别用户提交的数据属于哪个组件。

  **注意**：当多图选择组件嵌套在表单容器中时，该字段生效、必填，且需在卡片全局内唯一。
</md-td>
</md-tr>
<md-tr>
<md-td>required</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
多图选择的选项是否必选。当组件内嵌在表单容器中时，该属性可用。其它情况将报错或不生效。可取值：
- true：选项必填。当用户点击表单容器的“提交”时，未选择选项，则前端提示“有必填项未填写”，不会向开发者的服务端发起回传请求。
- false：选项选填。当用户点击表单容器的“提交”时，未选择选项，仍提交表单容器中的数据。
</md-td>
</md-tr>
<md-tr>
<md-td>can_preview</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>true</md-td>
<md-td>
点击图片选项后是否弹窗放大图片。当多图选择组件嵌套在表单容器中时，该属性生效。
- true：点击图片后，弹出图片查看器放大查看当前点击的图片。
- false：点击图片后，响应卡片本身的交互事件，不弹出图片查看器。
</md-td>
</md-tr>
<md-tr>
<md-td>aspect_ratio</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>16:9</md-td>
<md-td>
选项中图片的宽高比。图片按最短边撑满图片渲染容器，按照居中裁剪的方式自适应裁剪。可取值：
- 1:1
- 16:9
- 4:3
</md-td>
</md-tr>
<md-tr>
<md-td>disabled</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
是否禁用整个选择组件。可选值：
- true：禁用整个选择组件
- false：选择组件保持可用状态
</ul>
</md-td>
</md-tr>
<md-tr>
<md-td>disabled_tips</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>空</md-td>
<md-td>
禁用整个组件后，用户将光标悬浮在整个组件上时展示的禁用提示文案。
</md-td>
</md-tr>
<md-tr>
<md-td>└ tag</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>
禁用提示文本的标签。固定值为 `plain_text`。
</md-td>
</md-tr>
<md-tr>
<md-td>└ content</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
禁用提示文本的内容。
</md-td>
</md-tr>
<md-tr>
<md-td>value</md-td>
<md-td>否</md-td>
<md-td>String 或 Object</md-td>
<md-td>空</md-td>
<md-td>
你可在交互事件中自定义回传参数，支持回传字符串，或 `"key":"value"` 构成的对象结构体。
</md-td>
</md-tr>
<md-tr>
<md-td>options</md-td>
<md-td>是</md-td>
<md-td>Option object</md-td>
<md-td>/</md-td>
<md-td>
选项数组，用于配置多图选择组件中每个图片选项的属性。
</md-td>
</md-tr>
<md-tr>
<md-td>L img_key</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>
图片资源的 Key。你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口或在搭建工具中上传图片，获取图片的 key。
</md-td>
</md-tr>
<md-tr>
<md-td>L value</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
自定义每个图片选项的回传参数。在回传交互中指定的回传参数将透传至开发者的服务端。
</md-td>
</md-tr>
  <md-tr>
<md-td>L disabled</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
是否禁用某个图片选项。可选值：
- true：禁用该选项
- false：选项保持可用状态
</md-td>
</md-tr>
<md-tr>
<md-td>L disabled_tips</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>空</md-td>
<md-td>
禁用某个图片选项后，用户将光标悬浮在选项上或点击选项时展示的禁用提示文案。
</md-td>
</md-tr>
<md-tr>
<md-td>LL tag</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>
禁用提示文本的标签。固定值为 `plain_text`。
</md-td>
</md-tr>
<md-tr>
<md-td>LL  content</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
禁用提示文本的内容。
</md-td>
</md-tr>
<md-tr>
<md-td>L hover_tips</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>空</md-td>
<md-td>
用户在 PC 端将光标悬浮在多图选择上方时的文案提醒。默认为空。
</md-td>
</md-tr>
<md-tr>
<md-td>LL tag</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>
悬浮提示文本的标签。固定值为 `plain_text`。
</md-td>
</md-tr>
<md-tr>
<md-td>LL content</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
悬浮提示文本的内容。
</md-tr>
</md-tbody>
</md-table>
:::
## 回调结构

为组件成功配置交互后，用户基于组件进行交互时，你在开发者后台配置的请求地址将会收到回调数据。
- 如果你添加的是新版卡片回传交互回调(`card.action.trigger`)，可参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)了解回调结构。
- 如果你添加的是旧版卡片回传交互回调(`card.action.trigger_v1`)，可参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)了解回调结构。

## 示例代码

### 单选后立即提交选项内容

以下示例中，多图选择组件不内嵌在表单容器中，仅支持单选图片。终端用户点击图片选项后，数据将立即提交，触发回传交互。你可将示例代码中的 `img_key` 替换为实际的图片 Key，实现如下图示例的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3d96fd3eb0f3390e56dc283b9db5d58e_YjtwDw58SW.gif?height=980&lazyload=true&maxWidth=400&width=1144)

```json
{
  "elements": [
    {
      "tag": "select_img",
      "name": "select_img-1",
      "layout": "bisect",
      "aspect_ratio": "16:9",
      "disabled": false,
      "disabled_tips": {
        "tag": "plain_text",
        "content": "用户禁用提示文案"
      },
      "options": [
        {
          "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
          "value": "picture1",
          "disabled": false,
          "disabled_tips": {
            "tag": "plain_text",
            "content": "用户禁用提示文案1"
          },
          "hover_tips": {
            "tag": "plain_text",
            "content": "第一张图"
          }
        },
        {
          "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
          "value": "picture2",
          "disabled": false,
          "disabled_tips": {
            "tag": "plain_text",
            "content": "用户禁用提示文案2"
          },
          "hover_tips": {
            "tag": "plain_text",
            "content": "第二张图"
          }
        },
        {
          "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
          "value": "picture3",
          "disabled": false,
          "disabled_tips": {
            "tag": "plain_text",
            "content": "用户禁用提示文案3"
          },
          "hover_tips": {
            "tag": "plain_text",
            "content": "第三张图"
          }
        },
        {
          "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
          "value": "picture4",
          "disabled": false,
          "disabled_tips": {
            "tag": "plain_text",
            "content": "用户禁用提示文案4"
          },
          "hover_tips": {
            "tag": "plain_text",
            "content": "第四张图"
          }
        },
        {
          "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
          "value": "picture5",
          "disabled": false,
          "disabled_tips": {
            "tag": "plain_text",
            "content": "用户禁用提示文案5"
          },
          "hover_tips": {
            "tag": "plain_text",
            "content": "第五张图"
          }
        },
        {
          "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
          "value": "picture6",
          "disabled": false,
          "disabled_tips": {
            "tag": "plain_text",
            "content": "用户禁用提示文案6"
          },
          "hover_tips": {
            "tag": "plain_text",
            "content": "第六张图"
          }
        }
      ]
    }
  ]
}
```

### 在表单容器中异步提交多选的选项内容

以下示例中，多图选择组件内嵌在表单容器中，且为单选交互的异步提交方式。在终端用户选择图片后，数据将缓存至本地；当用户点击表单容器的提交按钮后，本地缓存的所有表单内容将一次回调至开发者服务端，实现异步提交。你可将示例代码中的 `img_key` 替换为实际的图片 Key，实现如下图示例的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/52bf9baf0da30ae73c61479f7bcef232_Td0XUptnVd.gif?height=1140&lazyload=true&maxWidth=400&width=1116)

```json
{
  "elements": [
    {
      "tag": "form",
      "name": "form1",
      "elements": [
        {
          "tag": "select_img",
          "multi_select": false,
          "name": "select_img-1",
          "layout": "bisect",
          "can_preview": false,
          "aspect_ratio": "16:9",
          "disabled": false,
          "disabled_tips": {
            "tag": "plain_text",
            "content": "用户禁用提示文案"
          },
          "options": [
            {
              "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
              "value": "picture1",
              "disabled": false,
              "disabled_tips": {
                "tag": "plain_text",
                "content": "用户禁用提示文案1"
              },
              "hover_tips": {
                "tag": "plain_text",
                "content": "第一张图"
              }
            },
            {
              "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
              "value": "picture2",
              "disabled": false,
              "disabled_tips": {
                "tag": "plain_text",
                "content": "用户禁用提示文案2"
              },
              "hover_tips": {
                "tag": "plain_text",
                "content": "第二张图"
              }
            },
            {
              "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
              "value": "picture3",
              "disabled": false,
              "disabled_tips": {
                "tag": "plain_text",
                "content": "用户禁用提示文案3"
              },
              "hover_tips": {
                "tag": "plain_text",
                "content": "第三张图"
              }
            },
            {
              "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
              "value": "picture4",
              "disabled": false,
              "disabled_tips": {
                "tag": "plain_text",
                "content": "用户禁用提示文案4"
              },
              "hover_tips": {
                "tag": "plain_text",
                "content": "第四张图"
              }
            },
            {
              "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
              "value": "picture5",
              "disabled": false,
              "disabled_tips": {
                "tag": "plain_text",
                "content": "用户禁用提示文案5"
              },
              "hover_tips": {
                "tag": "plain_text",
                "content": "第五张图"
              }
            },
            {
              "img_key": "img_v2_9dd98485-2900-4d65-ada9-e31d1408dcfg",
              "value": "picture6",
              "disabled": false,
              "disabled_tips": {
                "tag": "plain_text",
                "content": "用户禁用提示文案6"
              },
              "hover_tips": {
                "tag": "plain_text",
                "content": "第六张图"
              }
            }
          ]
        },
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "提交"
          },
          "type": "primary",
          "name": "button-submit",
          "form_action_type": "submit",
          "behaviors": [
            {
              "type": "callback",
              "value": "form_callback"
            }
          ]
        },
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "取消"
          },
          "name": "button-cancel",
          "form_action_type": "reset"
        }
      ]
    }
  ]
}
```