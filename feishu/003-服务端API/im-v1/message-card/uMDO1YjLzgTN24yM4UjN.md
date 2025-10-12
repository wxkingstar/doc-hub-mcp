<!--
title: 延时更新消息卡片
id: 6907568030018469890
fullPath: /ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN
updatedAt: 1757496852000
source: https://open.feishu.cn/document/server-docs/im-v1/message-card/delay-update-message-card
-->
# 延时更新消息卡片

用户点击卡片进行交互、你的服务端在收到并响应卡片的回调请求后，可调用该接口延时更新卡片。

## 使用场景

本接口适用于以下场景：
- 用户与卡片交互后，无法在 3 秒内立即更新卡片。可调用本接口在 30 分钟内延时更新。
- 用户与卡片交互后，需要仅更新部分指定用户接收到的卡片。


## 延时更新消息卡片流程

调用本接口前，你需参考下图，了解整体更新流程：

1. 用户点击交互组件，与卡片进行交互
2. 飞书服务器发送[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调
3. 你的服务器需要在接收回调的 3 秒内先以 HTTP 200 状态码响应该回调，在响应时设置 HTTP Body 为 `"{}"` 或者返回自定义 Toast 结构体
5. 在[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调请求中获取 token 参数，调用本接口，在 30 分钟内更新卡片。

:::warning
**延时更新卡片必须在响应回调之后进行，并行执行或提前执行会出现更新失败或更新后立即复原的情况。**
:::
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/39672c58aadbb0ea3e97d8b01401bcb1_8IVLvqd5H3.png?height=500&lazyload=true&maxWidth=600&width=1846)



## 使用限制

- 延时更新所需的 token 有效期为 30 分钟，超时则无法更新卡片，且同一个 token 只能使用 2 次，超过使用次数则无法更新卡片。
- 只能更新当前应用机器人发送的、用户交互的卡片，不允许更新其他卡片。
- 卡片大小需控制在 30KB 以内。对于搭建工具搭建的卡片模板，需确保模板中的 JSON 代码长度和变量长度之和控制在 30 KB 以内。如果卡片使用了循环容器，循环容器的 JSON 长度 = 卡片模板中循环容器的 JSON 长度 × 循环的次数。

## 前提条件

- 应用需要[启用机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 你已参考[处理卡片回调-方式二：延时更新卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/handle-card-callbacks#8ba7bbc3)，在 3 秒内以 `HTTP 200` 状态码响应了卡片回传交互请求。
## 请求
:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/interactive/v1/card/update</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>
            <md-perm name="im:message:update" desc="更新消息" support_app_types="custom,isv" tags="">更新消息</md-perm>
      </md-td>
    </md-tr>
    
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 18%;">名称</md-th>  
      <md-th style="width: 15%;">类型</md-th>  
       <md-th style="width: 15%;">必填</md-th>  
      <md-th>描述</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>Authorization</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
          
以应用身份调用 API，可读写的数据范围由应用自身的[数据权限范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)决定。参考[自建应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)或[商店应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。
          
**值格式**："Bearer `access_token`"
          
**示例值**："Bearer t-g1044qeGEDXTB6NDJOGV4JQCYDGHRBARFTGT1234"
	</md-td>
</md-tr>
     <md-tr> 
      <md-td>Content-Type</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
     <md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
   
  </md-tbody> 
</md-table>
:::

### 请求体

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">名称</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:15%">必填</md-th>
<md-th style="width:50%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>token</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调中包含的 token 参数值。
  
**示例值**："c-295ee57216a5dc9de90fefd0aadb4b1d7dxxxx"</md-td>
</md-tr>

<md-tr>
<md-td>card</md-td>
<md-td>object</md-td>
<md-td>是</md-td>
<md-td>消息卡片的内容，可以是[卡片 JSON 数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)，也可以传入[卡片搭建工具](https://open.feishu.cn/cardkit?from=open_docs_overview)搭建的卡片相关信息。详情参考下方的请求体示例。
</md-td>
</md-tr>
  
<md-tr>
<md-td> ∟ open_ids</md-td>
<md-td>array</md-td>
<md-td>否</md-td>
<md-td>用户的 open_id 列表，用于定义接收更新卡片的用户范围。获取方式参考[如何获取自己的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。
  
**示例值**：["ou_5ad573a6411d72b8305fda3a9c15xxxx"]
  
**注意**：
- 该参数仅支持[卡片 JSON 1.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)，且仅在卡片的 `config.update_multi` 参数设置为` false`（即独享卡片）时可用。
- 当卡片 `config.update_multi` 为 `false` 时，该参数必填；若为 `true`（即共享卡片），请勿使用该参数，否则可能导致卡片更新异常。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

   
### 请求体示例

#### **使用 JSON 更新卡片示例**
- 以 JSON 1.0 结构为例：
  ```json
  {
    "token": "c-515fbxxxx",
    "card": {
      "open_ids": [  // 仅支持卡片 JSON 1.0 结构
        "ou_515fbe9d04838174e2035f8xxxx53d07f"
      ],
      "elements": [
        {
          "tag": "div",
          "text": {
            "tag": "plain_text",
            "content": "This is plain text"
          },
          "fields": [
            {
              "is_short": true,
              "text": {
                "tag": "lark_md",
                "content": "**已同意**"
              }
            }
          ]
        }
      ]
    }
  }
  ```


- 以 JSON 2.0 结构为例：
  ```json
  {
      "token": "c-515fbxxxx",
      "card": {
          "schema": "2.0",
          "config": {
              "update_multi": true
          },
          "body": {
              "direction": "vertical",
              "padding": "12px 12px 12px 12px",
              "elements": [
                  {
                      "tag": "div",
                      "text": {
                          "tag": "plain_text",
                          "content": "JSON 2.0 示例文本",
                          "text_size": "normal_v2",
                          "text_align": "left",
                          "text_color": "default"
                      },
                      "margin": "0px 0px 0px 0px"
                  }
              ]
          },
          "header": {
              "title": {
                  "tag": "plain_text",
                  "content": "JSON 2.0 示例标题"
              },
              "subtitle": {
                  "tag": "plain_text",
                  "content": ""
              },
              "template": "blue",
              "padding": "12px 12px 12px 12px"
          }
      }
  }
  ```
#### **使用模板更新卡片示例（以旧版卡片为例）**

```json
{
  "token": "c-515fbxxxx",
  "card": {
    "open_ids": [  // 仅支持搭建工具上的旧版卡片
      "ou_515fbe9d04838174e2035f8xxxx53d07f",
      "xxx"...
    ],
    "type": "template",  // 表示使用搭建工具上的卡片模板发送卡片
    "data": {
      "template_id": "xxxxxxxxxxxx",
      "template_version_name": "1.0.0",
      "template_variable": {
        "key1": "value1",
        "key2": "value2"
      }
    }
  }
}
```
`card` 中 `type` 和 `data` 参数说明如下表所示：

   
:::html
        <md-table> 
          <md-thead> 
            <md-tr> 
              <md-th style="width: 20%;">参数</md-th>  
              <md-th style="width: 10%;">必填</md-th>  
              <md-th>说明</md-th> 
            </md-tr> 
          </md-thead>  
          <md-tbody> 
 
            <md-tr>
            <md-td>
             type
          </md-td>
           <md-td>否</md-td>
       <md-td>
        卡片类型。要发送由搭建工具搭建的卡片（也称卡片模板），固定取值为 `template`。
       </md-td>
         </md-tr>
                <md-tr>
       <md-td>
          data
       </md-td>
       <md-td>否</md-td>
       <md-td>
        卡片模板的数据，要发送由搭建工具搭建的卡片，此处需传入卡片模板 ID、卡片版本号等。
       </md-td>
       </md-tr>
                 <md-tr>
                <md-td>
          └ template_id
             </md-td>
        <md-td>是</md-td>
        <md-td>
          搭建工具中创建的卡片（也称卡片模板）的 ID，如 `AAqigYkzabcef`。可在搭建工具中通过复制卡片模板 ID 获取。 
          
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8bf97ff2bceed633b28f5ce2d2ec0270_A9kv4I1t3s.png?height=329&lazyload=true&maxWidth=500&width=1574)

        </md-td>
       </md-tr>
                
                            <md-tr> 
              <md-td>
                └ template_version_name 
            </md-td>  
            <md-td>否</md-td>  
            <md-td>
                                搭建平台中创建的卡片的版本号，如 `1.0.0`。卡片发布后，将生成版本号。可在搭建工具 **版本管理** 处获取。
       
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b3e96c8ca7c5c029bdbce6c0ca1ba413_IR0ZCAj7uz.png?height=384&lazyload=true&maxWidth=500&width=1459)
          <br>**注意**：
            若不填此字段，将默认使用该卡片的最新版本。
            </md-td> 
            </md-tr> 
              <md-tr> 
              <md-td>
                └└ template_variable 
            </md-td>  
            <md-td>否</md-td>  
            <md-td>
                                若卡片绑定了变量，你需在该字段中传入实际变量数据的值。详情参考[配置卡片变量](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/configure-card-variables)。

            </md-td> 
            </md-tr> 
          </md-tbody> 
        </md-table>
         
:::
## 响应

### 响应体

|参数|类型|说明|
|-|-|-|
|code|int|返回码，非 0 表示失败|
|msg|string|返回码描述|

### 响应体示例

```json
{
    "code": 0,
    "msg": "ok"
}
```

### 错误码
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 20%;">错误码</md-th>  
      <md-th style="width: 40%;">说明</md-th>  
       <md-th style="width: 40%;">排查建议</md-th>   
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>11311</md-td>  
      <md-td>卡片格式不符合要求。</md-td>  
      <md-td>参照实际返回的错误信息定位具体问题。卡片构造格式可以参考[卡片 JSON 1.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)或 [卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>10002</md-td>  
      <md-td>card 参数校验错误。</md-td>  
      <md-td>参照实际返回的错误信息定位具体问题。卡片构造格式可以参考[卡片 JSON 1.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)或 [卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>100000</md-td>  
      <md-td>卡片内容转换后超过 100 KB。</md-td>  
      <md-td>缩减卡片内容，使卡片大小不超过 100 KB。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>100030</md-td>  
      <md-td>输入的参数不符合 JSON 规范。</md-td>  
      <md-td>检查输入的参数格式。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>200000</md-td>  
      <md-td>该消息卡片已被撤回。</md-td>  
      <md-td>该消息卡片已撤回，不支持更新。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>200310</md-td>  
      <md-td>无法更新其他应用发送的卡片。</md-td>  
      <md-td>不允许更新其他应用发送的卡片。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>200320</md-td>  
      <md-td>独享卡片的 open_ids 内容有误。</md-td>  
      <md-td>检查传入的 open_ids 参数是否正确。用户 open_id 获取方式参考[如何获取自己的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>300020</md-td>  
      <md-td>更新卡片的 token 格式错误。</md-td>  
      <md-td>检查传入的 token 参数格式，格式为 `c-xxxx`，可通过[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)获取。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>300030</md-td>  
      <md-td>更新卡片的 token 失效。</md-td>  
      <md-td>token 有效期为 30 分钟，超时则无法更新。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>300040</md-td>  
      <md-td>更新卡片的 token 超过使用限制次数。</md-td>  
      <md-td>同一个 token 仅能使用 2 次，超过则无法继续使用。</md-td> 
	</md-tr>
    <md-tr> 
      <md-td>300090</md-td>  
      <md-td>独享卡片必须填写 open_ids 字段。</md-td>  
      <md-td>传入 open_ids 参数，或显式声明 `"update_multi": true`，将卡片改为共享卡片。对于 open_ids 字段：
- 如果卡片为共享卡片（卡片 JSON 结构 config 参数内 `"update_multi": true`），则无需传入 open_ids，默认会更新所有用户接收到的卡片内容
- 如果卡片为非共享卡片（卡片 JSON 结构 config 参数内 `"update_multi": false`， update_multi 默认为 false），则必须设置 open_ids。用户 open_id 获取方式参考[如何获取自己的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-td> 
	</md-tr>
  </md-tbody> 
</md-table>
:::

其他通用错误码可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。