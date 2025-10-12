<!--
title: 折叠按钮组（overflow）
id: 6907569745298931714
fullPath: /ukTMukTMukTM/uMzNwUjLzcDM14yM3ATN
updatedAt: 1724163400000
source: https://open.feishu.cn/document/common-capabilities/message-card/add-card-interaction/interactive-components/overflow
-->
# 折叠按钮组（overflow）

折叠按钮组是消息卡片提供的可交互组件，你可以将多个按钮添加在折叠按钮组中，默认情况下按钮组为折叠状态，点击按钮组将会展示组内所有按钮。本文介绍折叠按钮组的 JSON 参数说明，并提供包含折叠按钮组的消息卡片的交互流程。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[折叠按钮组](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/overflow)。
:::
## 注意事项

折叠按钮组（overflow）最低支持的飞书版本为 V3.7.0，如果低于该版本，用户使用该组件时会提示 **当前版本不支持查看此消息**。

## 组件展示

消息卡片搭建工具中的折叠按钮组如下图所示。添加组件后，你可以设置组件的配置方式、按钮配置、交互等配置项。

- **配置方式**：
    - **配置固定按钮组**：需要手动配置各个按钮的文本内容、回传参数值以及跳转交互。
        - **回传参数值**：后续当用户选中选项时，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含按钮的回传参数值。
        - **配置跳转交互**：配置点击按钮后的跳转链接。支持开启差异化跳转，分别为 PC 端、Android 端、iOS 端配置不同的跳转链接。
    - **绑定按钮组变量**：需要绑定按钮组变量。关于卡片变量的使用说明，参见[配置卡片变量](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/configure-card-variables)。
- **配置回传交互**：配置回传参数的名称与值，后续当用户点击按钮后，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含已配置的回传参数数据。关于回传交互的详细配置说明，可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
- **二次确认弹窗**：开启后需要配置弹窗的标题与提示信息，当用户点击按钮后需要在弹窗内二次确认。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/41c7b1926856bf306dc46809817a831c_ZHyLIBhGdz.png?height=1398&lazyload=true&maxWidth=600&width=2882)

## 参数说明

折叠按钮组作为交互组件，其 JSON 描述均定义在[交互模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements)（`"tag": "action"`）的 `actions` 参数中。折叠按钮组包含的参数说明如下表。

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
折叠按钮组的标签。固定取值：overflow
</md-td>
</md-tr>

<md-tr>
<md-td>options</md-td>
<md-td>是</md-td>
<md-td>Struct[]</md-td>
<md-td>
折叠按钮组当中的选项按钮。按钮基于 option 元素进行配置，详情参见 [option 元素](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#9fa21514)。
</md-td>
</md-tr>

<md-tr>
<md-td>value</md-td>
<md-td>否</md-td>
<md-td>JSON</md-td>
<md-td>
该字段用于交互组件的回传交互方式,当用户点击交互组件的选项后，会将 value 的值返回给接收回调数据的服务器。后续你可以通过服务器接收的 value 值进行业务处理。

该字段值仅支持 key-value 形式的 JSON 结构，且 key 为 String 类型。示例值:
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
本章节仅提供折叠按钮组的交互流程概述。关于卡片交互详情、卡片回调数据参数说明的信息，可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
:::


### 回传交互方式


1. 准备工作。
	
    在配置可交互的消息卡片前，你需要在相应的应用中配置消息卡片请求地址。后续当用户与消息卡片进行交互后，应用会向该请求地址发送包含卡片交互数据的 HTTP 请求。关于请求地址的配置操作，可参见[卡片回调地址](/ssl:ttdoc/ukTMukTMukTM/uYzMxEjL2MTMx4iNzETM)。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d8d6dd74f5791390e932d056bcf37257_YE13Fjlcfs.png?height=1286&lazyload=true&maxWidth=600&width=2778)
    
2. 发送包含折叠按钮组的消息卡片。
	
    卡片内容由你自定义配置，以下提供了折叠按钮组的 JSON 片段作为示例。
    
    ```json
    {
      "tag": "overflow",
      "options": [
        {
          "text": {
            "tag": "plain_text",
            "content": "Option-1"
          },
          "value": "option-1"
        },
        {
          "text": {
            "tag": "plain_text",
            "content": "Option-2"
          },
          "value": "option-2"
        },
        {
          "text": {
            "tag": "plain_text",
            "content": "Option-3"
          },
          "value": "option-3"
        }
      ],
      "value": {
        "key": "value"
      }
    }
	```
    
    对应的卡片内容如下图所示：
    
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/49e832cf18e7ebd679dd2cabd3426fbe_29PqyNLbf4.png?height=318&lazyload=true&maxWidth=600&width=1324)

3. 等待用户在飞书客户端中接收到消息卡片，并在卡片内点击了折叠按钮组的 Option-1 按钮。

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
         "tag": "overflow", //组件标识
         "option": "Option-1" //用户选中的按钮
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

### 跳转交互方式

如果你在 overflow 的按钮上通过 [option](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#9fa21514) 的 `multi_url` 字段设置了跳转链接，则当用户接收消息卡片并点击折叠按钮组中的按钮时，会跳转至对应的链接。JSON 示例配置如下：

```json
{
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "overflow",
          "options": [
            {
              "text": {
                "tag": "plain_text",
                "content": "Option-1"
              },
              "value": "option-1",
              "multi_url": {
                "url": "https://www.baidu.com",
                "android_url": "https://developer.android.com/",
                "ios_url": "https://developer.apple.com/",
                "pc_url": "https://www.windows.com"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

对应的消息卡片内容如下，当用户点击 Option-1 按钮后，会根据当前操作系统跳转至不同的页面。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/279eafc338a1f8185bbe0ff255981782_qcUTpZozak.png?height=190&lazyload=true&maxWidth=600&width=1330)
