<!--
title: 日期选择器（datePicker）
id: 6907569745299472386
fullPath: /ukTMukTMukTM/uQzNwUjL0cDM14CN3ATN
updatedAt: 1724163445000
source: https://open.feishu.cn/document/common-capabilities/message-card/add-card-interaction/interactive-components/datepicker
-->
# 日期选择器（datePicker）

日期选择器是消息卡片提供的可交互组件，在该选择器中你可以设置仅选择日期、仅选择时间、选择日期与时间三种模式。本文介绍日期选择器的 JSON 参数说明，并提供包含日期选择器的消息卡片的交互流程。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[日期选择器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/date-picker)和[日期时间选择器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/date-time-picker)。
:::
## 注意事项

- 日期选择器（datePicker）最低支持的飞书版本为 V3.11.0。如果低于该版本，用户使用该组件时会提示 **当前版本不支持查看此消息**。
- 在使用日期选择器时，请务必在说明文案中告知用户与业务相对应的时区信息。例如，酒店预订一般使用当地的时区，而设置日程将会使用用户当前的时区，开放平台会返回用户当前的时区作为参考，但并不代表用户选择了该时区。

## 组件展示

消息卡片搭建工具中的日期选择器如下图所示。添加组件后，你可以设置组件的 **样式**、**交互** 等配置项。

-   **选择器模式** 分为三种：**日期选择器**、**时间选择器**、**日期时间选择器**。
- **默认取值**：设置选择器上默认的时间。
    - 日期选择器的取值格式为 `yyyy-MM-dd`。
    - 时间选择器的取值格式为 `HH:mm`。
    - 日期时间选择器的取值格式为 `yyyy-MM-dd HH:mm`。
- **提示文案**：选择器输入框中的提示文本内容。
- **配置回传交互**：配置回传参数的名称与值，后续当用户选择日期时间后，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含已配置的回传参数数据。关于回传交互的详细配置说明，可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
- **二次确认弹窗**：开启后需要配置弹窗的标题与提示信息，当用户选择日期时间后需要在弹窗内二次确认。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/303422cddf5a5e482d07f6cdf22b9387_i3RygFnLbX.png?height=1420&lazyload=true&maxWidth=600&width=2882)

## 参数说明

日期选择器作为交互组件，其 JSON 描述均定义在[交互模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements)（`"tag": "action"`）的 `actions` 参数中。日期选择器包含的参数说明如下表。

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
日期选择器的标签。在三种模式下的固定取值：
- 日期选择器：date_picker
- 时间选择器：picker_time
- 日期时间选择器：picker_datetime
</md-td>
</md-tr>

<md-tr>
<md-td>initial_date</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
设置日期模式的初始值。格式：`yyyy-MM-dd`
</md-td>
</md-tr>

<md-tr>
<md-td>initial_time</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
设置时间模式的初始值。格式：`HH:mm`
</md-td>
</md-tr>

<md-tr>
<md-td>initial_datetime</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
设置日期时间模式的初始值。格式：`yyyy-MM-dd HH:mm`
</md-td>
</md-tr>

<md-tr>
<md-td>placeholder</md-td>
<md-td>否</md-td>
<md-td>Struct</md-td>
<md-td>
选择器的提示文案，无初始值时必填。只能设置[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)中的 `"tag": "plain_text"` 模式以及 `content` 参数。

示例值:
```
"placeholder": {
	"tag": "plain_text",
	"content": "请选择日期"
},
```
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


2. 发送包含日期选择器的消息卡片。
	
    卡片内容由你自定义配置，以日期选择器的 `"tag": "date_picker"` 模式为例，你的卡片中需要配置以下元素。

    ```json
    {
     "tag": "date_picker",
     "placeholder": {
         "tag": "plain_text",
         "content": "Please select date"
     },
     "value": {
         "key": "value"
     }
    }
    ```

3. 等待用户在飞书客户端中接收到消息卡片，并在卡片内的日期选择器上选择 `1990-04-10`。

4. 应用会向已设置的消息卡片请求地址发送 HTTP POST 请求，对应的服务器将会收到该请求。

	请求内容示例如下，在该请求中包含了用户交互信息，其中的 `option` 字段值会包含用户所在时区的信息。

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
         "tag": "datepicker",
         "option": "1990-04-10 +0800", //用户选中的时间
         "timezone":"Asia/Shanghai" //用户操作时，客户端所在的时区
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
    
	- **延迟更新**：调用[延时更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)接口，异步更新卡片。

		- 使用延迟更新前，必须已通过 **立即更新** 返回卡片内容。如果无法在 3s 内立即更新卡片内容，可先通过 **立即更新** 返回空串 `{}` 保持原卡片内容不变，后续再调用延时更新消息卡片接口刷新卡片内容。
			
            延迟更新操作必须在响应回传交互请求后进行，并行或提前执行均会出现更新失败的情况。
		
        - 卡片不限制更新次数，但只允许在卡片发送后 30 天内更新卡片。

:::note
- 如果 POST 请求失败，或立即更新操作超时，飞书客户端会对应提示 **操作失败** 或 **网络超时**，卡片不会刷新。遇到该问题时可依次排查：应用是否配置了消息卡片请求网址、服务器是否在 3 秒内以 HTTP 200 状态码响应了卡片回调事件。
- 如果卡片的更新时机不由消息卡片的交互组件触发（例如，审批操作在企业自建审批系统内完成，而不是在消息卡片内完成，卡片仅用于同步审批结果），则可以调用[更新应用发送的消息卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)接口，请求更新卡片。
:::
    
## 卡片示例


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2afb8418787abbdedeffe09e4165838c_GlLf0PdB0J.png?height=346&lazyload=true&maxWidth=600&width=1344)

JSON 示例代码：

```json
{
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "date_picker",
          "placeholder": {
            "tag": "plain_text",
            "content": "Please select date(with confirm)"
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
          }
        },
        {
          "tag": "date_picker",
          "initial_date": "2002-2-22"
        },
        {
          "tag": "picker_time",
          "placeholder": {
            "tag": "plain_text",
            "content": "Please select time(with confirm)"
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
          }
        },
        {
          "tag": "picker_time",
          "initial_time": "10:00"
        },
        {
          "tag": "picker_datetime",
          "placeholder": {
            "tag": "plain_text",
            "content": "Please select datetime(with confirm)"
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
          }
        },
        {
          "tag": "picker_datetime",
          "initial_datetime": "2002-2-22 22:22"
        }
      ]
    }
  ]
}
```
