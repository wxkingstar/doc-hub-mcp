<!--
title: 配置卡片交互
id: 6907569524100661249
fullPath: /ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN
updatedAt: 1724163088000
source: https://open.feishu.cn/document/common-capabilities/message-card/add-card-interaction/interaction-module
-->
# 配置卡片交互

消息卡片提供了四种交互组件（按钮、折叠按钮组、列表选择器、日期选择器），其中交互组件的交互方式分为跳转交互和回传交互。本文将介绍如何配置不同的卡片交互方式。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[配置卡片交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configuring-card-interactions)。
:::
## 注意事项

卡片交互的有效期为 30 天，超过有效期的卡片不支持交互，用户点击后将提示 **该卡片发送时间已超过 30 天，无法进行互动**。


## 交互方式

交互组件的交互方式分为跳转交互和回传交互。说明如下：

- **跳转交互**：在按钮（button）、折叠按钮组（overflow）中，支持配置跳转链接，用户点击按钮后会跳转到指定链接。

- **回传交互**：每个交互元素或交互选项都提供了回传参数 `value` 字段。用户点击交互元素或选项之后，业务方会收到对应的 `value` 字段值，以此决定后续的业务处理逻辑。

不同交互组件支持的交互方式有所不同，你可以通过各组件文档查看详细说明：

- [按钮（button）](/ssl:ttdoc/ukTMukTMukTM/uEzNwUjLxcDM14SM3ATN)：支持跳转交互或回传交互。
- [折叠按钮组（overflow）](/ssl:ttdoc/ukTMukTMukTM/uMzNwUjLzcDM14yM3ATN)：支持跳转交互或回传交互。
- [列表选择器（selectMenu）](/ssl:ttdoc/ukTMukTMukTM/uIzNwUjLycDM14iM3ATN)：支持回传交互。
- [日期选择器（datePicker）](/ssl:ttdoc/ukTMukTMukTM/uQzNwUjL0cDM14CN3ATN)：支持回传交互。

## 跳转交互：跳转到指定链接

在按钮组件，或折叠按钮组的按钮选项上，支持配置跳转交互。跳转交互可以只配置一个固定的跳转链接，也支持配置差异化跳转，分别为 PC 端、Android 端、iOS 端配置不同的跳转链接。后续当用户点击按钮时，会跳转至指定链接。

- 消息卡片搭建工具可视化配置示例：

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ec743b6f46dde0889f2f101b451d4f24_Gwp1VXAMzA.png?height=1388&lazyload=true&maxWidth=600&width=2882)
    
- JSON 配置示例：

  ```json
  // 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
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
                  "content": "这是一个链接跳转"
                },
                "value": "appStore",
                "url": "https://app.feishu.cn" // 跳转链接
              },
              {
                "text": {
                  "tag": "plain_text",
                  "content": "这是另一个链接跳转"
                },
                "value": "document",
                "url": "https://open.feishu.cn"
              }
            ]
          }
        ]
      }
    ]
  }
  ```

## 回传交互：将操作信息提交到服务端

回传交互是指用户操作消息卡片内的交互组件后，飞书应用会向指定的服务端发送包含用户操作数据的 HTTP POST 请求。你可以在服务端内，根据接收到的用户操作数据做业务处理（例如，请求更新卡片内容），及时对用户的交互行为进行响应。你可以参考以下步骤配置回传交互。

:::note
**注意**：
<br>
消息卡片内可同时存在多个交互组件，但组件之间相互独立，即用户操作任一组件，都会立即完成一次交互。
:::

### 步骤一：在发送消息的飞书应用内配置消息卡片请求网址

具体操作可参见[配置卡片回调](/ssl:ttdoc/ukTMukTMukTM/uYzMxEjL2MTMx4iNzETM)。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a9a336699be2b2c9a085cc49664b9d84_8PC2nOvi8g.png?height=1162&lazyload=true&maxWidth=600&width=2204)
    
### 步骤二：在消息卡片内配置交互信息

1. 配置回传参数（`value`）。
	
	在各交互组件中，支持配置回传参数（`value`），后续当用户点击交互组件后，会将该 `value` 值回传至 **消息卡片请求网址**，你可以在服务端内根据该 `value` 值做进一步的业务处理。
        
    回传参数配置说明：`value` 仅支持 key-value 形式的 JSON 结构，且 key 为 String 类型。JSON 示例配置如下：
        
	```json
	"value":{
		"key-1":Object-1,
		"key-2":Object-2,
		"key-3":Object-3,
			······
	}
	```
        
2. 配置卡片更新方式。
	
	在卡片的 `config` 属性中，支持设置 `update_multi` 参数，不同取值对应的卡片更新方式不同。关于卡片属性的详细介绍，可参见[配置卡片属性](/ssl:ttdoc/ukTMukTMukTM/uAjNwUjLwYDM14CM2ATN)。
        
    - 共享卡片（`"update_multi":true`）：在响应消息卡片回调，更新卡片内容时，对当前卡片的所有接受者均生效。发送卡片时的请求体示例如下：

		```json
		{
			"chat_id": "oc_5**********************1fa",
			"msg_type": "interactive", // 消息卡片类型
			"card": { // 卡片内容
			  "config": {
				"update_multi":true // 共享卡片，声明这张卡片更新后，对所有的接收人都生效
			  },
				 ··· // 其他卡片内容
			}
		}
		```
            
	- 独享卡片（`"update_multi":false`）：在响应消息卡片回调，更新卡片内容时，只更新当前操作用户的卡片内容，或在发送更新卡片请求时，通过 `open_ids` 字段指定更新部分用户的卡片。

:::note
共享卡片和独享卡片的概念，仅适用于交互后被更新的卡片。首次发送的卡片不存在此概念区别，即所有人接收到的卡片均相同。
:::

### 步骤三：接收用户点击交互组件后回传的交互数据

当用户在消息卡片内操作交互组件后，发送消息的应用会向已配置的 **消息卡片请求网址** 发送 HTTP POST 请求，请求体内包含了用户交互信息。你可以在业务服务器内，根据实际接收到的交互信息做进一步的业务处理。示例请求体如下：
    
```json
{
	"open_id": "ou_sdfimx9948345", // 卡片操作用户的 open_id
	"user_id": "eu_sd923r0sdf5", // 卡片操作用户的 user_id
	"open_message_id": "om_abcdefg1234567890", // 卡片消息的唯一 id
	"tenant_key": "d32004232", // 卡片消息归属的租户id
	"token": "c-xxxxx", // 更新卡片用的 Token（凭证）
	"action": 
		{
			"value":{ // 回传参数值
					  "key":"value"
			},
			"tag": "button" // 交互组件标识
		}
}
```
    
请求体参数说明如下表所示。
    
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 25%">参数</md-th>
<md-th style="width: 25%">类型</md-th>
<md-th style="width: 50%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>open_id</md-td>
<md-td>String</md-td>
<md-td>
用户的 open_id。关于用户 open_id、user_id 的介绍，可参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。
</md-td>
</md-tr>

<md-tr>
<md-td>user_id</md-td>
<md-td>String</md-td>
<md-td>
用户的 user_id。
</md-td>
</md-tr>

<md-tr>
<md-td>tenant_key</md-td>
<md-td>String</md-td>
<md-td>
租户标识。参数介绍可参见[通用参数](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)。
</md-td>
</md-tr>

<md-tr>
<md-td>open_message_id	</md-td>
<md-td>String</md-td>
<md-td>
消息 ID。
</md-td>
</md-tr>

<md-tr>
<md-td>token</md-td>
<md-td>String</md-td>
<md-td>
刷新凭证。服务端可凭此 token 在 30 分钟内更新消息卡片（最多可更新两次）。
</md-td>
</md-tr>

<md-tr>
<md-td>action</md-td>
<md-td>JSON Object</md-td>
<md-td>
交互信息。
</md-td>
</md-tr>

<md-tr>
<md-td> ∟ value</md-td>
<md-td>JSON Object</md-td>
<md-td>
交互组件的 `value` 字段值（`key-value` 格式）。
</md-td>
</md-tr>

<md-tr>
<md-td> ∟ tag</md-td>
<md-td>String</md-td>
<md-td>
交互组件的标识，即组件的 `tag` 字段值。可能值：
- date_picker：日期选择器
- picker_time：时间选择器
- picker_datetime：日期时间选择器
- overflow：折叠按钮组
- select_static：列表选择器的自定义选项模式
- select_person：列表选择器的选人模式
- button：按钮
</md-td>
</md-tr>

<md-tr>
<md-td> ∟ option</md-td>
<md-td>String</md-td>
<md-td>
交互组件选项参数（`option`）的回调参数值。

折叠按钮组、列表选择器、日期选择器会返回该参数。按钮组件不包含 `option` 参数，不会返回该字段值。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::    
   
`open_id` ，`user_id` 和 `tenant_key` 的区别：<br> 
- `tenant_key`：租户的唯一标识。
- `user_id` 用于租户内多应用的唯一用户标识，同一个用户在不同应用内`user_id`唯一。
- `open_id` 用于租户内某一应用的用户标识，同一个用户在不同应用内，有不同的`open_id`。

### 步骤四：响应 POST 请求

收到应用向 **消息卡片请求网址** 的 POST 请求，服务端需要在 3 秒内以 `HTTP 200` 状态码响应该请求（未及时响应，用户客户端将展示请求错误），你可以选择在响应 POST 请求时，根据业务处理结果立即更新用户的卡片内容；也可以选择仅响应请求，延时更新用户的卡片内容。不同更新卡片的方式与响应配置说明如下。

:::note
- 更新卡片的方式对共享卡片、独享卡片均适用，共享或独享仅影响卡片更新内容的可见范围。
- 卡片不限制更新的总次数，但只允许在卡片发送后 30 天内更新卡片。
:::

#### **立即更新卡片内容**
 
如果你需要在响应 POST 请求时直接更新卡片内容，则需要将新卡片的内容（即 JSON 数据）设置到响应的 `HTTP Body` 中。响应请求的代码逻辑要求如下：

- 在 3 秒内以 `HTTP 200` 状态码响应该请求。
- 将新卡片的内容放入 `HTTP Body` 中。查看响应回调的结构体示例，参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)。
	- 如果你的卡片由 JSON 构建，你可直接将卡片 JSON 数据放入 `HTTP Body` 中。JSON 结构示例如下：

      ```json 
      {
          // 需要是真实的卡片内容，如返回卡片内容不合法，用户点击后会报错
          "header":{......},
          "elements":[
              {......},
              {......},
               ......
          ]
      }
      ``` 
  - 如果你的卡片由搭建工具构建，你需要将卡片模板的结构体放入 `HTTP Body` 中。卡片模板的结构体示例如下：

    ```json
    {
        "type": "template", // 使用卡片 ID 发送消息时该参数必填。固定取值：template
        "data":{
            "template_id":"xxxxxxxxxxxx",  // 卡片 ID，参数必填。可在搭建工具中通过复制卡片 ID 获取。 
            "template_version_name":"1.0.0",  // 卡片版本，选填。可指定请求发送某个固定版本号的卡片。默认为空，指定发布最新版本的卡片。
            "template_variable":
            {    
                "key1":"value1",    // 如果卡片模板内设置了变量，则可以在此处为变量名（key）赋值（value）。
                "key2":"value2"         }       
        }
    }
    ```

#### **延时更新卡片内容**

如果立即更新卡片内容的方式不适用当前业务处理逻辑，则你可以调用[延时更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)接口异步更新卡片，但在调用接口前，务必先响应 POST 请求。正确的处理逻辑如下：

1. 服务端在收到卡片的回传交互的 POST 请求后，需要在 3 秒内以 `HTTP 200` 状态码响应该请求。

	由于无需立即更新卡片内容，所以在响应时，`HTTP Body` 需要设置为字符串 `"{}"`。查看响应回调的结构体示例，参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)。

2. 完成响应后，再调用 **延时更新消息卡片** 接口更新卡片。

:::note
- 此步骤必须在响应回传交互 POST 请求之后执行，并行执行或提前执行会出现更新失败的情况。
- 延时更新的 `token` 有效期为 30 分钟，超过有效期则 `token` 失效，无法再对本次用户交互操作更新卡片，且同一个 `token` 最多支持更新两次卡片。
:::

在调用 **延时更新消息卡片** 接口时，需要传入卡片更新 token 和新卡片内容。其中卡片更新 token 在回传交互请求中获取。延时更新的请求结构示例如下：

```json 
{
	"token":"xxx", // POST请求中返回的卡片更新凭证
	"card":{
		"open_ids":["xxx","xxx"...], // 指定需要更新消息的用户列表
		// 卡片内容
	}
}
``` 
        
        
## 常见问题

### POST 请求失败或立即更新操作超时，客户端会提示操作失败或网络超时，该场景下卡片不刷新如何处理？	

排查方案：
- 是否配置了消息卡片请求网址。
- 是否在 3 秒内以 `HTTP 200` 状态码响应了卡片点击事件。


### 如果卡片的更新时机不由消息卡片的交互组件触发（例如，审批操作在企业自建审批系统内完成，而不是在消息卡片内完成，卡片仅用于同步审批结果）如何处理？

你可以调用[更新应用发送的消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)接口，请求更新卡片。
