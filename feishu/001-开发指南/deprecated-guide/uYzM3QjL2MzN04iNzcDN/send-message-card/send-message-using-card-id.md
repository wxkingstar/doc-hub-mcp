<!--
title: 使用卡片 ID 发送消息
id: 7312637705938878466
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/send-message-card/send-message-using-card-id
updatedAt: 1724163199000
source: https://open.feishu.cn/document/deprecated-guide/message-card/send-message-card/send-message-using-card-id
-->
# 使用卡片 ID 发送消息

你可以在消息卡片搭建工具内，将构建完成的消息卡片进行保存并发布，然后通过卡片 ID 调用接口发送消息卡片。本文将介绍如何使用卡片 ID 发送消息。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[发送卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card)。
:::
## 功能概述

当你使用卡片 JSON 数据发送消息卡片时，需要在接口参数内传入完整的 JSON 数据。如果卡片内容较复杂，会导致请求体过长，从而影响发送消息的体验。因此，开放平台提供了基于卡片 ID 发送消息卡片的能力，简化发送消息卡片的操作流程。

此外，你可以搭配使用卡片变量功能，将卡片内需要动态展示的内容绑定为变量，然后保存发布消息卡片，将其构建成为卡片模板。后续使用卡片 ID 发送消息时，动态为变量赋值即可发送不同内容的消息卡片。

## 注意事项

使用卡片 ID 发送消息时，需要确保卡片已保存并发布。具体操作参见[预览与保存卡片](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/preview-and-save-cards)。

## 操作步骤

1. （可选）为卡片绑定变量。

	关于卡片变量的使用说明，可参见[配置卡片变量](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/configure-card-variables)。
    
2. 获取卡片 ID。

	- 如下图①区域，在我的卡片列表中，鼠标悬浮在指定卡片，即可点击复制卡片 ID。
    
    - 如下图②区域，在当前已打开的消息卡片内，可以直接获取卡片 ID。


	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a8b6cd4469bed83d717710adc30e65c4_08hy0gNCkB.png?height=1000&lazyload=true&maxWidth=600&width=2866)
    
3. 发送消息。
	
    调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)、[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)、[延时更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN) 等服务端 API，或者通过[自定义机器人](/ssl:ttdoc/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN)发送消息卡片时。只需将原有请求体的 `content` 或 `card` 字段中输入的卡片 JSON 数据，替换为以下结构，即可使用卡片 ID 发送消息卡片。
    
:::note
**注意**：
<br>
- 需要符合原接口的限制条件。例如，参数需要进行压缩转义等。
- 以下结构为示例结构，如需使用请传入真实值，并去掉 `//` 开头的注释行。
:::

```json
{
    "type":"template",
    "data":{
        // 卡片 ID，参数必填。
        "template_id":"ctp_xxxxxxxxxxxx",    
        "template_variable":
        {    
            // 如果卡片模板内设置了卡片变量，则可以在此处为变量（key）赋值（value）。
            "key":"value"    
        }       
    }
}
```

配置参数说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 20%">参数</md-th>
<md-th style="width: 20%">是否必填</md-th>
<md-th style="width: 60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>type</md-td>
<md-td>是</md-td>
<md-td>
使用卡片 ID 发送消息时必填该参数。固定取值：template
</md-td>
</md-tr>

<md-tr>
<md-td>data</md-td>
<md-td>是</md-td>
<md-td>
卡片模板内的数据。
</md-td>
</md-tr>

<md-tr>
<md-td> └ template_id</md-td>
<md-td>是</md-td>
<md-td>
卡片 ID。示例值：ctp_xxxx
</md-td>
</md-tr>

<md-tr>
<md-td> └ template_variable</md-td>
<md-td>否</md-td>
<md-td>
卡片中的变量数据，值为`{key:value}`形式。

- key：表示变量名称。
- value：值表示变量的值。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 调用示例

例如，替换[使用卡片 JSON 数据发送消息](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/send-message-card/send-messages-using-card-json-data)场景中的卡片 JSON 数据，改为使用卡片 ID 发送消息。

1. 调整消息卡片结构，绑定一个文本变量用于测试。

	**注意**：需要保存并发布消息卡片。

	```json
    {
      "elements": [
        {
          "tag": "div",
          "text": {
            "content": "Demo: ${text_Value}", // 文本变量
            "tag": "plain_text"
          }
        }
      ],
      "header": {
        "template": "blue",
        "title": {
          "content": "This is the title",
          "tag": "plain_text"
        }
      }
    }
	```
 
2. 发送消息卡片，在接口的请求体中，配置卡片 ID 与卡片变量。
	
    请求体示例如下：

    ```json
    {
        "receive_id": "ou_7fbf96bc757xxxx",
        "msg_type": "interactive",
        "content": "{\"type\":\"template\",\"data\":{\"template_id\":\"ctp_AAxxxx\",\"template_variable\":{\"text_Value\":\"This is the plain text\"}}}"
    }
    ```

3. 在消息接收对象的飞书客户端内，查看卡片内容。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7c0364cb4a3fcf5ff90472c3af62ddb5_Iy447AeGtg.png?height=232&lazyload=true&maxWidth=600&width=1336)

