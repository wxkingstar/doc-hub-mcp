<!--
title: 交互容器
id: 7343499772500803588
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/containers/interactive-container
updatedAt: 1735814743000
source: https://open.feishu.cn/document/feishu-cards/card-components/containers/interactive-container
-->
# 交互容器

你可基于业务需求在交互容器中内嵌组件，并灵活组合多个交互容器，并统一定义多个交互容器的样式、交互能力等，实现多种组合效果和丰富的卡片交互。

本文档介绍交互容器的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[交互容器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/containers/interactive-container)。


![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0a42ddffcccd079b59087ccb8b86383f_18jEWFf4ZB.png?height=989&lazyload=true&maxWidth=300&width=829)

## 注意事项

- 交互容器支持飞书 V7.4 及以上版本的客户端。在低于该版本的飞书客户端上，交互容器的内容将展示为“请升级至最新版本客户端，以查看内容”的占位图。
- 容器类组件最多支持嵌套五层组件。建议你避免在交互容器中嵌套多层组件。多层嵌套会压缩内容的展示空间，影响卡片的展示效果。

## 嵌套规则
在[卡片 JSON 1.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)中：
- 交互容器仅支持内嵌普通文本、富文本、图片、备注、分栏、勾选器、交互容器组件。
- 交互容器支持内嵌在卡片根节点、循环容器、分栏、表单容器、交互容器组件中。

在[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)中，交互容器可内嵌除表单容器（form）和表格组件（table）外的其它所有组件。
## 组件属性

### JSON 结构

以下为一个交互容器的卡片 JSON 数据：
```json
{
  "tag": "interactive_container", // 交互容器的标签。
  "width": "fill", // 交互容器的宽度。默认值 fill。
  "height": "auto", // 交互容器的高度。默认值 auto。
  "background_style": "default", // 背景色。默认值 default（无背景色）。
  "has_border": false, // 是否展示边框，粗细固定为 1px。默认值 false。
  "border_color": "grey", // 交互容器的边框颜色，仅 has_border 为 true 时生效。
  "corner_radius": "40px", // 交互容器的圆角半径。可选。
  "padding": "10px 20px 10px 20px", // 交互容器的内边距。默认值 "4px 12px 4px 12px"。
  "behaviors": [
    {
      "type": "open_url", // 声明交互类型是打开链接的跳转交互。
      "default_url": "https://www.baidu.com", // 兜底跳转地址。
      "android_url": "https://developer.android.com/", // 安卓端跳转地址。
      "ios_url": "lark://msgcard/unsupported_action", // iOS 端跳转地址。
      "pc_url": "https://www.windows.com" // 桌面端跳转地址。
    },
    {
      "type": "callback", // 声明交互类型是回传数据到服务端的回传交互。
      "value": {
        // 回传交互数据
        "key": "value"
      }
    }
  ],
  "disabled": false,
  "disabled_tips": { "tag": "plain_text", "content": "demo" },
  "confirm": {},
  "hover_tips": {
    "tag": "plain_text",
    "content": "demo"
  },
  "elements": [] // 容器子组件，仅支持内嵌普通文本、富文本、图片、备注、分栏、勾选器、交互容器组件。
}
```

### 字段说明

交互容器各字段说明如下表所示。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">字段名称</md-th>
      <md-th style="width: 10%;">是否必填</md-th>
      <md-th style="width: 10%;">类型</md-th>
      <md-th style="width: 15%;">默认值</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>交互容器的标签。固定值为 <code>interactive_container</code>。</md-td>
    </md-tr>
    <md-tr>
      <md-td>width</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>fill</md-td>
      <md-td>
        交互容器的宽度。可取值：
- <strong>fill</strong>：卡片最大支持宽度</li>
          <li><strong>auto</strong>：自适应宽度</li>
          <li><strong>[16,999]px</strong>：自定义宽度，如 "20px"。最小宽度为 16px</li>
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>height</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>auto</md-td>
      <md-td>
        交互容器的高度。可取值：
- <strong>auto</strong>：自适应高度</li>
          <li><strong>[10,999]px</strong>：自定义高度，如 "20px"</li>
        </ul>
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>background_style</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>default</md-td>
      <md-td>
        交互容器的背景色样式。可取值：
- <strong>default</strong>：默认的白底样式，客户端深色主题下为黑底</li>
          <li><strong>laser</strong>：镭射渐变彩色样式</li>
          <li>卡片支持的颜色枚举值和 RGBA 语法自定义颜色。参考[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)</li>
        </ul>
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>has_border</md-td>
      <md-td>否</md-td>
      <md-td>Boolean</md-td>
      <md-td>false</md-td>
      <md-td>是否展示边框，粗细固定为 1px。</md-td>
    </md-tr>
    <md-tr>
      <md-td>border_color</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>grey</md-td>
      <md-td>
        边框的颜色，仅 <code>has_border</code> 为 true 时，此字段生效。枚举值为卡片支持的颜色枚举值和 RGBA 语法自定义颜色，参考[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>corner_radius</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0px</md-td>
      <md-td>
  交互容器的圆角半径，单位是像素（px）或百分比（%）。取值遵循以下格式：
- <strong>[0,∞]px</strong>，如 "10px"</li>
          <li><strong>[0,100]%</strong>，如 "30%"</li>
        </ul>
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>padding</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>4px 12px 4px 12px</md-td>
      <md-td>
        交互容器的内边距。值的取值范围为 [0,28]px。支持填写单值或多值：
- 单值：如 "10px"，表示容器内四个内边距都为 10px</li>
          <li>多值：如 "4px 12px 4px 12px"，表示容器内上、右、下、左的内边距分别为 4px，12px，4px，12px。四个值必填，使用空格间隔</li>
        </ul>
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>behaviors</md-td>
      <md-td>是</md-td>
      <md-td>[]</md-td>
      <md-td>/</md-td>
      <md-td>设置点击交互容器时的交互配置。如果交互容器内有交互组件，则优先响应交互组件定义的交互。交互组件支持 callback 和 open_url 交互。详情参考[配置卡片交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configuring-card-interactions)。
</md-td>
    </md-tr>
    <md-tr>
      <md-td>hover_tips</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>空</md-td>
      <md-td>
        用户在 PC 端将光标悬浮在交互容器上方时的文案提醒。默认为空。
      </md-td>
    </md-tr>
  <md-tr>
      <md-td>└ tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>plain_text</md-td>
      <md-td>
文本的标签。固定取值为 <code>plain_text</code>。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ content</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>
        文本的内容。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>disabled</md-td>
      <md-td>否</md-td>
      <md-td>Boolean</md-td>
      <md-td>false</md-td>
      <md-td>
        是否禁用交互容器。可选值：
- <code>true</code>：禁用整个容器</li>
          <li><code>false</code>：容器组件保持可用状态
</li>
        </ul>
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>disabled_tips</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>空</md-td>
      <md-td>
        禁用交互容器后，用户触发交互时的弹窗文案提醒。默认为空，即不弹窗。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>plain_text</md-td>
      <md-td>
        弹窗标题文本的标签。固定取值为 <code>plain_text</code>。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ content</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>
        弹窗标题的内容。
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
    <md-tr>
      <md-td>elements</md-td>
      <md-td>是</md-td>
      <md-td>Array&lt;element&gt;</md-td>
      <md-td>[]</md-td>
      <md-td>
        交互容器内嵌的组件。仅支持内嵌普通文本、富文本、图片、备注、分栏、勾选器、交互容器组件。
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 回调结构

为组件成功配置交互后，用户基于组件进行交互时，你在开发者后台配置的请求地址将会收到回调数据。
- 如果你添加的是新版卡片回传交互回调(`card.action.trigger`)，可参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)了解回调结构。
- 如果你添加的是旧版卡片回传交互回调(`card.action.trigger_v1`)，可参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)了解回调结构。
- 
## 示例代码

以下的 JSON 示例代码可实现如下图所示的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0a42ddffcccd079b59087ccb8b86383f_Z569UhCFiC.png?height=989&lazyload=true&maxWidth=300&width=829)
```json
{
  "config": {
    "compact_width": true
  },
  "header": {
    "title": {
      "content": "交互容器示例（依赖端版本 7.4+)",
      "tag": "plain_text"
    },
    "ud_icon": {
      "style": {
        "color": "blue"
      },
      "token": "chat-history_outlined"
    }
  },
  "elements": [
    {
      "tag": "markdown",
      "content": "在「内容创作」话题下，我可以帮助你进行产品方案、营销文案、工作报告等内容的创作。"
    },
    {
      "tag": "column_set",
      "flex_mode": "none",
      "background_style": "default",
      "columns": [
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_spacing": "8px",
          "elements": [
            {
              "tag": "markdown",
              "content": "<font color='grey'>你可以对我说：</font>",
              "text_size": "notation"
            },
            {
              "tag": "interactive_container",
              "width": "fill",
              "height": "auto",
              "background_style": "default",
              "has_border": true,
              "border_color": "grey",
              "corner_radius": "8px",
              "padding": "4px 12px 4px 12px",
              "behaviors": [
                {
                  "type": "callback",
                  "value": {
                    "key": "value"
                  }
                }
              ],
              "elements": [
                {
                  "tag": "markdown",
                  "content": "帮我生成一篇产品方案的框架",
                  "icon": {
                    "tag": "standard_icon",
                    "token": "frame-selection_outlined",
                    "color": "orange"
                  }
                }
              ]
            },
            {
              "tag": "interactive_container",
              "width": "fill",
              "height": "auto",
              "background_style": "default",
              "has_border": true,
              "border_color": "grey",
              "corner_radius": "8px",
              "padding": "4px 12px 4px 12px",
              "behaviors": [
                {
                  "type": "callback",
                  "value": {
                    "key": "value"
                  }
                }
              ],
              "disabled": false,
              "elements": [
                {
                  "tag": "markdown",
                  "content": "帮我生成一篇产品文案",
                  "icon": {
                    "tag": "standard_icon",
                    "token": "file-link-docx_outlined",
                    "color": "orange"
                  }
                }
              ]
            },
            {
              "tag": "interactive_container",
              "width": "fill",
              "height": "auto",
              "background_style": "default",
              "has_border": true,
              "border_color": "grey",
              "corner_radius": "8px",
              "padding": "4px 12px 4px 12px",
              "behaviors": [
                {
                  "type": "callback",
                  "value": {
                    "key": "value"
                  }
                }
              ],
              "disabled": false,
              "elements": [
                {
                  "tag": "markdown",
                  "content": "帮我写一篇周报",
                  "icon": {
                    "tag": "standard_icon",
                    "token": "pa-calibration-report_outlined",
                    "color": "orange"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "tag": "column_set",
      "flex_mode": "none",
      "background_style": "default",
      "columns": [
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_spacing": "8px",
          "elements": [
            {
              "tag": "markdown",
              "content": "<font color='grey'>或者继续之前的话题</font>",
              "text_size": "notation"
            },
            {
              "tag": "interactive_container",
              "width": "fill",
              "height": "auto",
              "background_style": "default",
              "has_border": true,
              "border_color": "grey",
              "corner_radius": "8px",
              "padding": "4px 12px 4px 12px",
              "behaviors": [
                {
                  "type": "callback",
                  "value": {
                    "key": "value"
                  }
                }
              ],
              "disabled": false,
              "elements": [
                {
                  "tag": "column_set",
                  "flex_mode": "none",
                  "background_style": "default",
                  "columns": [
                    {
                      "tag": "column",
                      "width": "weighted",
                      "weight": 1,
                      "elements": [
                        {
                          "tag": "markdown",
                          "content": "内容创作:创作暑假营销活动文案",
                          "icon": {
                            "tag": "standard_icon",
                            "token": "chat-history_outlined"
                          }
                        }
                      ]
                    },
                    {
                      "tag": "column",
                      "width": "auto",
                      "weight": 1,
                      "elements": [
                        {
                          "tag": "markdown",
                          "content": "<font color='grey'>昨天</font>",
                          "text_size": "notation"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "tag": "interactive_container",
              "width": "fill",
              "height": "auto",
              "background_style": "default",
              "has_border": true,
              "border_color": "grey",
              "corner_radius": "8px",
              "padding": "4px 12px 4px 12px",
              "behaviors": [
                {
                  "type": "callback",
                  "value": {
                    "key": "value"
                  }
                }
              ],
              "disabled": false,
              "elements": [
                {
                  "tag": "column_set",
                  "flex_mode": "none",
                  "background_style": "default",
                  "columns": [
                    {
                      "tag": "column",
                      "width": "weighted",
                      "weight": 1,
                      "elements": [
                        {
                          "tag": "markdown",
                          "content": "内容创作:生成了季度工作报告",
                          "icon": {
                            "tag": "standard_icon",
                            "token": "chat-history_outlined"
                          }
                        }
                      ]
                    },
                    {
                      "tag": "column",
                      "width": "auto",
                      "weight": 1,
                      "elements": [
                        {
                          "tag": "markdown",
                          "content": "<font color='grey'>上周</font>",
                          "text_size": "notation"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "tag": "interactive_container",
              "width": "fill",
              "height": "auto",
              "background_style": "default",
              "has_border": true,
              "border_color": "grey",
              "corner_radius": "8px",
              "padding": "4px 12px 4px 12px",
              "behaviors": [
                {
                  "type": "callback",
                  "value": {
                    "key": "value"
                  }
                }
              ],
              "disabled": false,
              "elements": [
                {
                  "tag": "markdown",
                  "content": "更多历史话题",
                  "icon": {
                    "tag": "standard_icon",
                    "token": "chat-history_outlined"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "tag": "column_set",
      "flex_mode": "none",
      "background_style": "default",
      "columns": [
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_spacing": "8px",
          "elements": [
            {
              "tag": "note",
              "elements": [
                {
                  "tag": "plain_text",
                  "content": "本话题中已选择以下插件"
                }
              ]
            },
            {
              "tag": "interactive_container",
              "width": "auto",
              "height": "auto",
              "background_style": "grey",
              "has_border": false,
              "border_color": "grey",
              "corner_radius": "40px",
              "padding": "2px 8px 2px 4px",
              "behaviors": [
                {
                  "type": "callback",
                  "value": {
                    "key": "value"
                  }
                }
              ],
              "disabled": false,
              "elements": [
                {
                  "tag": "column_set",
                  "flex_mode": "none",
                  "background_style": "default",
                  "horizontal_spacing": "4px",
                  "columns": [
                    {
                      "tag": "column",
                      "width": "auto",
                      "weight": 1,
                      "vertical_spacing": "8px",
                      "elements": [
                        {
                          "tag": "img",
                          "img_key": "img_v2_58e37110-6878-44ee-bce4-7a571c1bb70g",
                          "transparent": true,
                          "scale_type": "crop_center",
                          "size": "18px 18px",
                          "preview": false
                        }
                      ]
                    },
                    {
                      "tag": "column",
                      "width": "weighted",
                      "weight": 1,
                      "vertical_spacing": "8px",
                      "elements": [
                        {
                          "tag": "markdown",
                          "content": "妙记插件"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```