<!--
title: 列表选择器（selectMenu）
id: 6907569744329850881
fullPath: /ukTMukTMukTM/uIzNwUjLycDM14iM3ATN
updatedAt: 1724163423000
source: https://open.feishu.cn/document/common-capabilities/message-card/add-card-interaction/interactive-components/selectmenu
-->
# 列表选择器（selectMenu）

列表选择器是消息卡片提供的可交互组件，该选择器支持自定义选项选择器、人员选择器两种模式。在自定义选项选择器中你可以配置普通选项或者跳转链接。在人员选择器中你可以设置人员列表，将指定人员作为选项。本文介绍列表选择器的 JSON 参数说明，并提供包含列表选择器的消息卡片的交互流程。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考以下文档：
- [下拉选择-单选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/single-select-dropdown-menu)
- [下拉选择-多选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/multi-select-dropdown-menu)
- [人员选择-单选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/single-select-user-picker)
- [人员选择-多选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/multi-select-user-picker)
:::
## 注意事项

列表选择器（selectMenu）最低支持的飞书版本为 V3.7.0。如果低于该版本，用户使用该组件时会提示 **当前版本不支持查看此消息**。

## 组件展示

消息卡片搭建工具中的列表选择器如下图所示。添加组件后，你可以设置组件的 **样式**、**资源**、**交互** 等配置项，其中选择器模式支持自定义选项选择器、人员选择器。

- 自定义选项选择器（`"tag":"select_static"`)

	- **默认提示文本**：默认展示在选择器输入框内的文本信息。
    - **选项配置模式**：支持 **固定选项模式** 或 **绑定选项组变量**。
        - **固定选项模式** 需要设置一个或多个选项的文本内容与回传参数值。后续当用户选中选项时，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含选项的回传参数值。
        - **绑定选项组变量** 需要绑定选项组变量。关于卡片变量的使用说明，参见[配置卡片变量](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/configure-card-variables)。
    - **配置回传交互**：配置回传参数的名称与值，后续当用户操作选择器后，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含已配置的回传参数数据。关于回传交互的详细配置说明，可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
    - **二次确认弹窗**：开启后需要配置弹窗的标题与提示信息，当用户选中选项后需要在弹窗内二次确认。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f04bfd49fc1ab541499f2d1ec69539c4_TMpChgqKQC.png?height=1416&lazyload=true&maxWidth=600&width=2882)

- 人员选择器（`"tag":"select_person"`）

	- **默认提示文本**：默认展示在选择器输入框内的文本信息。
    - **选项配置模式**：支持 **配置固定人员列表**、**绑定人员选项组变量** 或 **所在会话人员列表**。
        - **配置固定人员列表** 需要设置一个或多个人员选项，选项的 value 是人员的 [open_id](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。
        - **绑定人员选项组变量** 需要绑定一个人员选项组变量。关于卡片变量的使用说明，参见**配置卡片变量**。
        - **所在会话人员列表**：根据发送消息卡片的目标会话，获取会话内的人员并生成列表。
    - **配置回传交互**：配置回传参数的名称与值，后续当用户操作选择器后，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含已配置的回传参数数据。关于回传交互的详细配置说明，可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
    - **二次确认弹窗**：开启后需要配置弹窗的标题与提示信息，当用户选中选项后需要在弹窗内二次确认。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/781eb1185c1e489fc807dfe554833609_M8K0SBmnva.png?height=1432&lazyload=true&maxWidth=600&width=2882)

## 参数说明

列表选择器作为交互组件，其 JSON 描述均定义在[交互模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements)（`"tag": "action"`）的 `actions` 参数中。列表选择器包含的参数说明如下表。

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
列表选择器的标签。在两种模式下的固定取值：
- 自定义选项选择器：select_static
- 人员选择器：select_person
</md-td>
</md-tr>

<md-tr>
<md-td>placeholder</md-td>
<md-td>否</md-td>
<md-td>Struct</md-td>
<md-td>
选择器的提示文本。基于文本组件的数据结构填写内容，详情参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。
</md-td>
</md-tr>

<md-tr>
<md-td>initial_option</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
为列表选择器配置默认选项。在人员选择器（`select_person`）模式中不支持设置该字段。
</md-td>
</md-tr>

<md-tr>
<md-td>options</md-td>
<md-td>否</md-td>
<md-td>Struct[]</md-td>
<md-td>
列表选择器中的选项。基于 option 元素添加选项内容，详情参见 [option](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#9fa21514)。
- 在自定义选项选择器中，你可以通过 option 元素的 `text` 字段配置选项内容。
- 在人员选择器中，你可以通过 option 元素的 `value` 字段设置用户 [open_id](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid) 来指定人员，如果 `value` 字段不传值，则系统会自动获取当前回话内的人员列表作为选项。

<md-alert type="tip" icon="none">
**注意**：不支持设置 option 元素中的 `url`、`multi_url` 字段。 
</md-alert>
</md-td>
</md-tr>

<md-tr>
<md-td>value</md-td>
<md-td>否</md-td>
<md-td>JSON</md-td>
<md-td>
该字段用于交互组件的回传交互方式，当用户点击交互组件的选项后，会将 value 的值返回给接收回调数据的服务器。后续你可以通过服务器接收的 value 值进行业务处理。

该字段值仅支持 key-value 形式的 JSON 结构，且 key 为 String 类型。示例值：
```
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
<md-td>
设置二次确认弹框。confirm 元素的配置方式可参见 [confirm](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#7f700aa9)。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 交互示例

:::note
本章节仅提供日期选择器的交互流程概述。关于卡片交互详情、卡片回调数据参数说明的信息，可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
:::

1. 准备工作。
	
    在配置可交互的消息卡片前，你需要在相应的应用中配置消息卡片请求地址。后续当用户与消息卡片进行交互后，应用会向该请求地址发送包含卡片交互数据的 HTTP 请求。关于请求地址的配置操作，可参见[卡片回调地址](/ssl:ttdoc/ukTMukTMukTM/uYzMxEjL2MTMx4iNzETM)。


	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d8d6dd74f5791390e932d056bcf37257_YE13Fjlcfs.png?height=1286&lazyload=true&maxWidth=600&width=2778)

2. 发送包含列表选择器的消息卡片。

	卡片内容由你自定义配置，以下提供了列表选择器的 JSON 片段作为示例。
    
    ```json
    {
      "elements": [
        {
          "tag": "action",
          "actions": [
            {
              "tag": "select_static",
              "placeholder": {
                "tag": "plain_text",
                "content": "Option-common mode"
              },
              "value": {
                "key": "value"
              },
              "options": [
                {
                  "text": {
                    "tag": "plain_text",
                    "content": "james"
                  },
                  "value": "james"
                },
                {
                  "text": {
                    "tag": "plain_text",
                    "content": "joy"
                  },
                  "value": "joy"
                },
                {
                  "text": {
                    "tag": "plain_text",
                    "content": "james_1"
                  },
                  "value": "james_1"
                },
                {
                  "text": {
                    "tag": "plain_text",
                    "content": "joy_1"
                  },
                  "value": "joy_1"
                }
              ]
            }
          ]
        }
      ]
    }
    ```
    
    该示例对应的消息卡片内容如下图所示：
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d1ef36eec08117dbe0d5dd40d4c2030c_WnjI8GUw8k.png?height=410&lazyload=true&maxWidth=600&width=1330)

3. 等待用户在飞书客户端中接收到消息卡片，并在卡片内点击了列表选择器的 james 选项。

4. 应用会向已设置的消息卡片请求地址发送 HTTP POST 请求，对应的服务器将会收到该请求。

	请求包含的数据示例如下：
    
    ```json
    {
     "open_id": "ou_sdfi1234", //卡片操作用户的 open_id
     "user_id": "eu_sd923r01234", //卡片操作用户的 user_id
     "open_message_id": "om_abcdefg1234567890", //卡片消息的唯一 id
     "tenant_key": "d3200pi1234", //卡片消息归属的租户 id
     "token": "c-xxxx", //更新卡片用的 Token(凭证)
     "action": {
         "value": { //卡片内的 value 字段值
             "key": "value"
         },
         "tag": "select_static", //组件标识
         "option": "james" //用户选中的按钮
     }
    }
    ```
    
:::note
**注意**：在人员选择器模式下，回调数据的 `tag` 字段取值为 `select_person`，`option` 字段取值为人员的 open_id。
:::
     
5. 在服务器内进行业务处理，响应 POST 请求，更新消息卡片内容。
    
    响应方式分为立即更新和延迟更新。
    
	- **立即更新**：将新卡片的内容设置到 HTTP Body 中，且需要注意在 Body 中的卡片不包含消息卡片最外层的 `card` 层级。例如待更新的卡片格式为 `"card":{字段值}`，则只需返回`字段值`，无需包含外层的 `"card":{}`。
	
    	- 对于独享卡片（卡片 `config` 结构体中，`update_multi` 属性为 `false` 或不配置），立即更新的方式只对操作人生效。
    	- 对于共享卡片（卡片 `config` 结构体中，`update_multi` 属性为 `true`），立即更新的方式对所有可以看到卡片的人员生效。
    	
        示例配置如下：

        ```json
        {
            //需要是真实的卡片内容，如返回卡片内容不合法，用户点击后会报错
            "header":{......},
            "elements":[
                {......},
                {......},
                 ......
            ]
        }
        ```
    
	- **延迟更新**：调用[延时更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)接口，异步更新卡片。

		- 使用延迟更新前，必须已通过 **立即更新** 返回卡片内容。如果无法在 3s 内立即更新卡片内容，可先通过 **立即更新** 返回空串 `{}` 保持原卡片内容不变，后续再调用延时更新消息卡片接口刷新卡片内容。
			
            延迟更新操作必须在响应回传交互请求后进行，并行或提前执行均会出现更新失败的情况。
		
        - 卡片不限制更新次数，但只允许在卡片发送后 30 天内更新卡片。

:::note
- 如果 POST 请求失败，或立即更新操作超时，飞书客户端会对应提示 **操作失败** 或 **网络超时**，卡片不会刷新。遇到该问题时可依次排查：应用是否配置了消息卡片请求网址、服务器是否在 3 秒内以 HTTP 200 状态码响应了卡片回调事件。
- 如果卡片的更新时机不由消息卡片的交互组件触发（例如，审批操作在企业自建审批系统内完成，而不是在消息卡片内完成，卡片仅用于同步审批结果），则可以调用[更新应用发送的消息卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)接口，请求更新卡片。
:::


## 卡片示例

![图片名称](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/728e2c2d67adfce6864089eb630e5f1a_yX6VNZ98Xk.png?height=456&lazyload=true&maxWidth=600&width=1240)

对应的 JSON 配置如下：

```json
{
  "elements": [
    {
      "tag": "div",
      "text": {
        "tag": "plain_text",
        "content": "selectMenu element"
      },
      "extra": {
        "tag": "select_person",
        "placeholder": {
          "tag": "plain_text",
          "content": "In div-extra"
        }
      }
    },
    {
      "tag": "hr"
    },
    {
      "tag": "action",
      "actions": [
        {
          "tag": "select_static",
          "placeholder": {
            "tag": "plain_text",
            "content": "Option-common mode(confirm)"
          },
          "confirm": {
            "title": {
              "tag": "plain_text",
              "content": "Ensure"
            },
            "text": {
              "tag": "plain_text",
              "content": "Content"
            }
          },
          "options": [
            {
              "text": {
                "tag": "plain_text",
                "content": "james"
              },
              "value": "james"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy"
              },
              "value": "joy"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_1"
              },
              "value": "james_1"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_1"
              },
              "value": "joy_1"
            }
          ]
        },
        {
          "tag": "select_static",
          "placeholder": {
            "tag": "plain_text",
            "content": "Option-common mode"
          },
          "initial_option": "joy",
          "options": [
            {
              "text": {
                "tag": "plain_text",
                "content": "james"
              },
              "value": "james"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy"
              },
              "value": "joy"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_1"
              },
              "value": "james_1"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_1"
              },
              "value": "joy_1"
            }
          ]
        },
        {
          "tag": "select_static",
          "placeholder": {
            "tag": "plain_text",
            "content": "Option-Full Screen mode"
          },
          "options": [
            {
              "text": {
                "tag": "plain_text",
                "content": "james_01"
              },
              "value": "james"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_01"
              },
              "value": "joy"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_11"
              },
              "value": "james_1"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_11"
              },
              "value": "joy_1"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_21"
              },
              "value": "james_2"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_21"
              },
              "value": "joy_2"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_31"
              },
              "value": "james_3"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_41"
              },
              "value": "joy_4"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_51"
              },
              "value": "james_5"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_51"
              },
              "value": "joy_5"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_61"
              },
              "value": "james_6"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_61"
              },
              "value": "joy_6"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_71"
              },
              "value": "james_7"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_71"
              },
              "value": "joy_7"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_81"
              },
              "value": "james_8"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_81"
              },
              "value": "joy_8"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "james_91"
              },
              "value": "james_9"
            },
            {
              "text": {
                "tag": "plain_text",
                "content": "joy_91"
              },
              "value": "joy_9"
            }
          ]
        },
        {
          "tag": "select_person",
          "placeholder": {
            "tag": "plain_text",
            "content": "person-group users"
          }
        },
        {
          "tag": "select_person",
          "placeholder": {
            "tag": "plain_text",
            "content": "person-target group"
          },
          "options": [
            {
              "value": "ou_2****************************de3"
            },
            {
              "value": "ou_f****************************3d1"
            }
          ]
        }
      ]
    }
  ]
}
```