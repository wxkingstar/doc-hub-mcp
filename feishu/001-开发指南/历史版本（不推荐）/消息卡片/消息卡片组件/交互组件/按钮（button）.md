---
title: "按钮（button）"
source_url: https://open.feishu.cn/document/common-capabilities/message-card/add-card-interaction/interactive-components/button
last_remote_update: 2024-08-20
last_remote_update_timestamp: 1724163378000
---
最后更新于 2024-08-20

# 按钮（button）

本文介绍交互组件按钮（button）的功能、JSON 参数说明以及包含按钮的消息卡片交互流程。warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[按钮](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/button)。
## 组件展示

消息卡片搭建工具中的按钮组件如下图所示。添加组件后，你可以设置组件的 **样式**、**资源**、**交互**等配置项。

- **按钮类型**：可选择 **强调样式**（primary）、**默认样式**（default）、**警示样式**（danger）。
- **按钮文本**：按钮上展示的文本内容。
- **配置跳转交互**：配置点击按钮后的跳转链接。支持开启差异化跳转，分别为 PC 端、Android 端、iOS 端配置不同的跳转链接。
- **配置回传交互**：配置回传参数的名称与值，后续当用户点击按钮后，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含已配置的回传参数数据。关于回传交互的详细配置说明，可参见[配置卡片交互](https://open.feishu.cn/document/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
- **二次确认弹窗**：开启后需要配置弹窗的标题与提示信息，当用户点击按钮后需要在弹窗内二次确认。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f541527aababc86fd2ff54e4e3c0d796_lVlrdEu2DA.png?height=1418&lazyload=true&maxWidth=600&width=2882)

## 参数说明

按钮作为交互组件，其 JSON 描述均定义在[交互模块](https://open.feishu.cn/document/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements)（`"tag": "action"`）的 `actions` 参数中。按钮组件包含的参数说明如下表。

参数 | 是否必须 | 类型 | 说明
--- | --- | --- | ---
tag | 是 | String | 按钮组件的标识。固定取值：button
text | 是 | Struct | 按钮中的文本。基于文本组件的数据结构配置文本内容，详情参见[文本组件](https://open.feishu.cn/document/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。
url | 否 | String | 点击按钮后的跳转链接。该字段与 `multi_url` 字段不可同时设置。
multi_url | 否 | Struct | 基于 url 元素配置多端跳转链接，详情参见[url 元素](https://open.feishu.cn/document/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#09a320b3)。该字段与 `url` 字段不可同时设置。
type | 否 | String | 配置按钮样式。取值：  
- default：默认样式  
- primary：强调样式  
- danger：警示样式  
默认值：default
value | 否 | JSON | 该字段用于交互组件的回传交互方式,当用户点击交互组件后，会将 `value` 的值返回给接收回调数据的服务器。后续你可以通过服务器接收的 `value` 值进行业务处理。  
该字段值仅支持 key-value 形式的 JSON 结构，且 key 为 String 类型。示例值:  
```  
"value":{  
    "key-1":Object-1,  
    "key-2":Object-2,  
    "key-3":Object-3,  
    ······  
}  
```
confirm | 否 | Struct | 设置二次确认弹框。confirm 元素的配置方式可参见 [confirm](https://open.feishu.cn/document/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#7f700aa9)。

## 交互示例

如果按钮组件配置了 url 或 multi_url 字段，则会实现跳转交互。如果没有配置 url 或 multi_url 字段，则在确保应用已配置消息卡片请求网址的情况下，会与请求网址对应的服务器进行回传交互。
本章节仅提供折叠按钮组的交互流程概述。关于卡片交互详情、卡片回调数据参数说明的信息，可参见[配置卡片交互](https://open.feishu.cn/document/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。

### 回传交互方式

1. 准备工作。

在配置可交互的消息卡片前，你需要在相应的应用中配置消息卡片请求地址。后续当用户与消息卡片进行交互后，应用会向该请求地址发送包含卡片交互数据的 HTTP 请求。关于请求地址的配置操作，可参见[卡片回调地址](https://open.feishu.cn/document/ukTMukTMukTM/uYzMxEjL2MTMx4iNzETM)。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/d8d6dd74f5791390e932d056bcf37257_YE13Fjlcfs.png?height=1286&lazyload=true&maxWidth=600&width=2778)

2. 发送包含按钮的消息卡片。

卡片内容由你自定义配置，以下提供了按钮的 JSON 片段作为示例。

```json
	// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
    {
        "tag": "action",
        "actions": [
            {
                "tag": "button",
                "text": {
                    "tag": "plain_text",
                    "content": "主按钮"  //指定按钮文本
                },
                "url": "https://open.feishu.cn/document",
                "type": "primary",  //指定按钮样式
                "value":{
                  "key":"value" //定义用户点击按钮后，POST 回调地址的返回内容。参数中的 key、value 可以替换为任意值
                }
            }
        ]
    }
    ```

对应的卡片内容如下图所示：

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/016251c01110e3f70b353c8322454083_bDndDhw92V.png?height=156&lazyload=true&maxWidth=600&width=1332)

3. 等待用户在飞书客户端中接收到消息卡片，并在卡片内点击了按钮。

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
         "tag": "button" //组件标识
     }
    }
    ```

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

- **延迟更新**：调用[延时更新消息卡片](https://open.feishu.cn/document/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)接口，异步更新卡片。

- 使用延迟更新前，必须已通过 **立即更新** 返回卡片内容。如果无法在 3s 内立即更新卡片内容，可先通过 **立即更新** 返回空串 `{}` 保持原卡片内容不变，后续再调用延时更新消息卡片接口刷新卡片内容。

延迟更新操作必须在响应回传交互请求后进行，并行或提前执行均会出现更新失败的情况。

- 卡片不限制更新次数，但只允许在卡片发送后 30 天内更新卡片。
- 如果 POST 请求失败，或立即更新操作超时，飞书客户端会对应提示 **操作失败** 或 **网络超时**，卡片不会刷新。遇到该问题时可依次排查：应用是否配置了消息卡片请求网址、服务器是否在 3 秒内以 HTTP 200 状态码响应了卡片回调事件。
- 如果卡片的更新时机不由消息卡片的交互组件触发（例如，审批操作在企业自建审批系统内完成，而不是在消息卡片内完成，卡片仅用于同步审批结果），则可以调用[更新应用发送的消息卡片](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)接口，请求更新卡片。

### 跳转交互方式

当按钮组件配置了 `url` 字段或者 `multi_url` 字段后，用户在客户端内点击消息卡片的按钮，可跳转至指定链接。

- url 配置示例

```json
  // 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
  {
    "elements": [
      {
        "tag": "action",
        "actions": [
          {
            "tag": "button",
            "text": {
              "tag": "plain_text",
              "content": "主按钮"
            },
            "url": "https://open.feishu.cn/document", //跳转指定链接
            "type": "primary",
            "value": {
              "key": "value"
            }
          }
        ]
      }
    ]
  }
  ```

- multi_url 配置示例

```json
  // 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
  {
    "elements": [
      {
        "tag": "action",
        "actions": [
          {
            "tag": "button",
            "text": {
              "tag": "plain_text",
              "content": "主按钮"
            },
            "multi_url": { //多端跳转链接
              "url": "https://www.baidu.com",
              "android_url": "https://developer.android.com/",
              "ios_url": "lark://msgcard/unsupported_action",
              "pc_url": "https://www.windows.com"
            },
            "type": "primary",
            "value": {
              "key": "value"
            }
          }
        ]
      }
    ]
  }
  ```

## 卡片示例

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/5ff5e0e0ec659cce9822a3692a87a442_mMvYO09ZXI.png?height=368&lazyload=true&maxWidth=600&width=1342)

对应的 JSON 代码：

```json
{
  "elements": [
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "Button element"
      },
      "extra": {
        "tag": "button",
        "text": {
          "tag": "lark_md",
          "content": "Secondary confirmation"
        },
        "type": "default",
        "confirm": {
          "title": {
            "tag": "plain_text",
            "content": "Confirmation"
          },
          "text": {
            "tag": "plain_text",
            "content": "Content"
          }
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
          "tag": "button",
          "text": {
            "tag": "lark_md",
            "content": "default style"
          },
          "type": "default",
          "value": {
            "key": "value"
          }
        },
        {
          "tag": "button",
          "text": {
            "tag": "lark_md",
            "content": "primary style",
            "lines": 1
          },
          "type": "primary"
        },
        {
          "tag": "button",
          "text": {
            "tag": "lark_md",
            "content": "danger style"
          },
          "type": "danger"
        },
        {
          "tag": "button",
          "text": {
            "tag": "lark_md",
            "content": "target url"
          },
          "url": "https://www.baidu.com",
          "type": "default"
        },
        {
          "tag": "button",
          "text": {
            "tag": "lark_md",
            "content": "multi url"
          },
          "multi_url": {
            "url": "https://www.baidu.com",
            "android_url": "https://developer.android.com/",
            "ios_url": "https://developer.apple.com/",
            "pc_url": "https://www.windows.com"
          },
          "type": "primary"
        }
      ]
    },
    {
      "tag": "note",
      "elements": [
        {
          "tag": "plain_text",
          "content": "hello World"
        }
      ]
    }
  ]
}
```
