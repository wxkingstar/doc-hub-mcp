<!--
title: 更新已发送的消息卡片
id: 6946222931479543809
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch
updatedAt: 1752581152000
source: https://open.feishu.cn/document/server-docs/im-v1/message-card/patch
-->
# 更新已发送的消息卡片

通过消息 ID（message_id）更新已发送的消息卡片的内容。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=message&method=patch)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="tip">

</md-alert>
:::

## 前提条件

应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。

## 使用场景


- 本接口适用于卡片发送后，对卡片无条件直接更新的场景。
- 如果你需要在用户与卡片进行交互后更新卡片，可参考[处理卡片回调](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/handle-card-callbacks)，选择在 3 秒内立即更新卡片、或 30 分钟内[延时更新卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)的方式。
- 如果你需要仅更新部分成员接收到的卡片，你需调用[延时更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)接口，指定用户的 open_id。

## 注意事项

- 调用该接口的身份（access_token）需与发送卡片的身份一致。
- 仅支持更新未撤回的卡片。
- 你需在更新**前后**卡片的 `config` 属性中，均显式声明 =="update_multi":true==（表示卡片为共享卡片，卡片的更新对所有接收的用户可见）。

## 使用限制

- 不支持更新[批量发送的消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)。
- 不支持更新[仅特定人可见的卡片](/ssl:ttdoc/ukTMukTMukTM/uETOyYjLxkjM24SM5IjN)。
- 仅支持更新 14 天内发送的消息。
- 单条消息更新频控为 5 QPS。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/messages/:message_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PATCH</md-td>
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
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 13%;">类型</md-th>
       <md-th style="width: 15%;" filters="是,否" >必填</md-th>
      <md-th  style="width: 37%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>Authorization</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
</md-tr>
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
</md-tbody>
</md-table>
:::



### 路径参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >message_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	待更新的消息 ID，仅支持更新卡片（消息类型为 `interactive`）。ID 获取方式：
  
- 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。
- 监听[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。
- 调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。

**示例值**："om_dc13264520392913993dd051dba21dcf"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 请求体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	消息卡片的内容，支持卡片 JSON 或[搭建工具](https://open.feishu.cn/cardkit?from=open_docs)构建的卡片，需为 JSON 结构序列化后的字符串。
  - 要使用卡片 JSON，参考[卡片 JSON 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)。
  - 要使用[搭建工具](https://open.feishu.cn/cardkit?from=open_docs)构建的卡片模板，参考下文请求体示例。

**注意**：

- 更新的卡片消息最大不能超过 30 KB。若消息中包含大量样式标签，会使实际消息体长度大于你输入的请求体长度。

- 以下示例值未转义，使用时请注意将其转为 JSON 序列化后的字符串。

**示例值**："{"elements":[{"tag":"div","text":{"content":"This is the plain text","tag":"plain_text"}}],"header":{"template":"blue","title":{"content":"This is the title","tag":"plain_text"}}}"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{  // 使用卡片 JSON 示例
    "content": "{\"elements\":[{\"tag\":\"div\",\"text\":{\"content\":\"This is the plain text\",\"tag\":\"plain_text\"}}],\"header\":{\"template\":\"blue\",\"title\":{\"content\":\"This is the title\",\"tag\":\"plain_text\"}}}"
}
</md-code-json>
:::


```json
{  // 使用搭建工具构建的卡片模板示例
  "content": "{\"type\":\"template\",\"data\":{\"template_id\":\"AAqyjwfhabcef\",\"template_version_name\":\"1.0.0\"}}"
}
```

使用搭建工具构建的卡片模板时，参数说明如下所示：
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
               <md-td>是</md-td>
           <md-td>
            卡片类型。要发送由搭建工具搭建的卡片（也称卡片模板），固定取值为 `template`。
           </md-td>
             </md-tr>
                    <md-tr>
           <md-td>
              data
           </md-td>
           <md-td>是</md-td>
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
                                    搭建工具中创建的卡片的版本号，如 `1.0.0`。卡片发布后，将生成版本号。可在搭建工具 **版本管理** 处获取。

   ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b3e96c8ca7c5c029bdbce6c0ca1ba413_IR0ZCAj7uz.png?height=384&lazyload=true&maxWidth=500&width=1459)
              <br>**注意**：
                若不填此字段，将默认使用该卡片的最新版本。即在搭建工具发布卡片新版本后，该新版本的卡片内容将立即对卡片 API 调用生效。
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
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "data": {},
    "msg": "ok"
}
</md-code-json>
:::



### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>400</md-td>
  <md-td>230001</md-td>
  <md-td>Your request contains an invalid request parameter.</md-td>
  <md-td>参数错误，请根据接口返回的错误信息并参考文档检查输入参数。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230006</md-td>
  <md-td>Bot ability is not activated.</md-td>
  <md-td>应用未启用机器人能力。启用方式参见[如何启用机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230011</md-td>
  <md-td>The message is recalled.</md-td>
  <md-td>消息已被撤回，不支持该操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230013</md-td>
  <md-td>Bot has NO availability to this user.</md-td>
  <md-td>目标用户（以用户的 user_id/open_id/union_id/email 指定的消息接收者）或单聊用户（以群聊的 chat_id 指定的消息接收者，但 chat_id 对应的群聊类型为单聊 `p2p`）不在应用机器人的可用范围内，或者是在应用的禁用范围内。

**注意**：如果目标用户已离职，也会报错 230013。

解决方案：

1. 登录[开发者后台](https://open.feishu.cn/app)，找到并进入指定应用详情页。
2. 在左侧导航栏进入 **应用发布** >  **版本管理与发布** 页面，点击 **创建版本**。
3. 在 **版本详情** 页面，找到 **可用范围** 区域，点击 **编辑**。
4. 在弹出的对话框内，配置应用的可用范围，将用户添加至可用范围内。
5. 在页面底部点击 **保存**，并发布应用使配置生效。
6. （可选）如果以上配置完成后仍报错，则需要联系企业管理员登录[管理后台](https://feishu.cn/admin)，在 **工作台** > **应用管理** 中进入指定应用详情页，在 **应用可用范围** 内查看该用户是否被设置为了 **禁用成员**。

具体操作参见[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230020</md-td>
  <md-td>This operation triggers the frequency limit.</md-td>
  <md-td>当前操作触发限频，请降低请求频率后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230025</md-td>
  <md-td>The length of the message content reaches its limit.</md-td>
  <md-td>消息体长度超出限制。文本消息最大不能超过 150 KB，卡片及富文本消息最大不能超过 30 KB。此外，若消息中包含大量样式标签，会使实际消息体长度大于你输入的请求体长度。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230027</md-td>
  <md-td>Lack of necessary permissions.</md-td>
  <md-td>无权进行本次操作。可能的原因有：

1. 缺少相应权限，可根据实际的错误信息进行排查。
2. 未检查到用户授权信息。
3. 如果需要机器人在外部群操作，则需要先为机器人开启对外共享能力，详情参见[机器人支持外部群和外部用户单聊](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230028</md-td>
  <md-td>The messages do NOT pass the audit.</md-td>
  <md-td>消息的数据防泄漏审查未通过。当消息内容包含有明文电话号码、明文邮箱地址等内容时可能会触发该错误。请根据接口返回的错误信息检查并修改消息内容。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230031</md-td>
  <md-td>Message can only be modified within 14 days after sending.</md-td>
  <md-td>在消息发送后的 14 天内允许更新消息内容，超过 14 天则无法更新。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230099</md-td>
  <md-td>Failed to create card content.</md-td>
  <md-td>创建卡片内容失败，请参考当前接口返回的具体报错信息，并参照接口文档中的 [子错误码](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch#-f367d31)  排查建议解决。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>230110</md-td>
  <md-td>Action unavailable as the message has been deleted.</md-td>
  <md-td>消息已删除，无法进行本操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232009</md-td>
  <md-td>Your request specifies a chat which has already been dissolved.</md-td>
  <md-td>群组已被解散，无法执行操作。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

### 230099 子错误码

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 35%;">描述</md-th>
            <md-th style="width: 50%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>100290</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 100290; ErrMsg: There is an invalid user resource(at/person) in your card; ErrorValue: %v</md-td>
  <md-td>
卡片中存在无效的人员 id。请检查卡片中的 at 人、人员等组件中使用的用户 id 值是否正确，参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。

1.  打开 [API 调试台](https://open.feishu.cn/api-explorer/cli_a278b89588fb100d?apiName=batch_get_id&from=op_doc_tab&project=contact&resource=user&version=v3)，在左侧 API 目录中找到「**通讯录**」下的「**通过手机号或邮箱获取用户 ID**」，点击该 API 切换当前调试 API 为「通过手机号或邮箱获取用户 ID」。

2. 点击 API 调试台左侧 **查看鉴权凭证** 中 tenant_access_token 中的 **点击获取**。

3. 点击右侧参数列表，将 **查询参数** 中的 **user_id_type** 参数设置为需要获取的 ID 类型。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9d1cd9f15e59fcb85bae2277cdfd2b54_0wwDgpbmv8.png?height=278&maxWidth=450&width=1383)
    
4.  切换至 **请求体** Tab，将请求体中的示例 ID 删除，并修改为需要查询的手机号或 Email。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8a28bdd8873d64e21152dbde4b4903f0_qfDKXIIbdU.png?height=278&maxWidth=450&width=1383)
    
5.  点击右侧 **开始调试**，调用成功后，在下方 **响应体** 中即可获取到查询的 User ID。响应体中返回的用户 ID 类型由查询参数中设置的 **user_id_type** 参数决定。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/902f9d2aabca8df3a8e648c184a87eea_aWbg4yC3I4.png?height=278&maxWidth=450&width=1383) 
  </md-td>
</md-tr>

<md-tr>
  <md-td>200380</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200380; ErrMsg: template does not exist, please confirm whether this template has been released; ErrorValue: templateID: %v</md-td>
  <md-td>
未找到卡片。请确认当前模版卡片已保存并发布，参考[预览与发布卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/preview-and-publish-cards#4c818412)。

1.  在[飞书卡片搭建工具](https://open.feishu.cn/cardkit?from=open_docs_preview_and_publish)目标卡片编辑页面的右上角，点击 **保存**，然后点击 **发布**。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/660c4bd207d87e75da6d3724ba42da33_obpORC9b5Z.png?height=278&maxWidth=450&width=1383)

2.  在 **发布卡片** 对话框，设置 **卡片版本号**，并点击 **发布**。首次发布时版本号一般设置为 `1.0.0`。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4333017913821745efa60e2e0a9f338b_OjnyGU9qfp.png?height=278&maxWidth=350&width=1383)
    
3.  发布卡片后，你可参考[发送由搭建工具构建的卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card)调用 API 发送卡片。

	:::note
	卡片发布后，将对线上的卡片相关的 API 调用立即生效。你需确认本次发布是否会对服务端代码逻辑产生不兼容变更。为避免此类情况，在请求发送卡片时，你可将 `template_version_name` 参数设置为固定的卡片版本号，避免在工具上发布卡片后立即影响线上业务逻辑。
    :::
  </md-td>
</md-tr>

<md-tr>
  <md-td>200381</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200381; ErrMsg: template is not visible to app, please confirm whether the app is allowed to use this template; ErrorValue: %v, templateID: %v</md-td>
  <md-td>
无卡片使用权限。请检查当前发送卡片的应用或自定义机器人是否具有该卡片的使用权限，参考[管理卡片模板权限](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/manage-card-template#4530c6a7)。

1.  在卡片模板的编辑页面，点击应用图标。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/04fff9e7c4b1c10239a212100920f154_0Xt2z0Mp8v.png?height=278&maxWidth=450&width=1383)
    
2.  在 **添加自定义机器人/应用** 弹窗中，添加应用或自定义机器人，使该应用或自定义机器人拥有调用该卡片模板的权限。

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a6e5dde5fcd532ede7ab6d7a2295195c_JWiFwiwd7W.png?height=278&maxWidth=450&width=1383)
  </md-td>
</md-tr>

<md-tr>
  <md-td>200621</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200621; ErrMsg: parse card json err, please check whether the card json is correct; ErrorValue: %v</md-td>
  <md-td>卡片 JSON 格式错误。请参考[卡片 JSON 代码结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)检查卡片内容。</md-td>
</md-tr>

<md-tr>
  <md-td>200732</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200732; ErrMsg: the actual type of the variable is inconsistent with the specified type in the template. Please check the type of the variable; ErrorValue:  %v, specifiedType:  %v, actualType:  %v</md-td>
  <md-td>卡片变量类型错误。请检查发送模版卡片时使用的变量的数据类型与构造该模版时指定的变量数据类型是否一致。</md-td>
</md-tr>

<md-tr>
  <md-td>200550</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200550; ErrPath: ROOT -> elements -> %v; ErrMsg: chart spec is invalid; ErrorValue: %v</md-td>
  <md-td>
卡片中的图表组件配置错误。请检查图表组件中的 chart_spec 属性配置是否正确，参考[图表](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/chart#39ee4e65)组件。

```json
{
  "code": 230099,
  "msg": "Failed to create card content, ext=ErrCode: 200550; ErrPath: ROOT -> elements -> [2](tag: chart); ErrMsg: chart spec is invalid; ErrorValue: - (root): Must validate at least one schema (anyOf)\n- axes: Invalid type. Expected: array, given: null\n; ",
  "error": {
    "log_id": "202409131613579778D691D6E05516DE2D",
    "troubleshooter": "排查建议查看（Troubleshooting suggestions）： https://open.feishu.cn/search?from=openapi&log_id=202409131613579778D691D6E05516DE2D&code=230099&method_id=6921911482032898068"
  }
}
```

ErrPath 示例说明: ROOT -> elements -> [2](tag: chart)

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/681343346e74ffe259928e72915fb0df_cG2saHQakQ.jpeg?height=278&maxWidth=450&width=1383)
  </md-td>
</md-tr>

<md-tr>
  <md-td>200861</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200861; ErrPath: ROOT -> body -> elements -> %v; ErrMsg: cards of schema V2 no longer support this capability; ErrorValue: unsupported tag %v</md-td>
  <md-td>卡片中使用了schema 1 支持但 schema 2 不再支持的组件。请检查卡片内容，移除或替换不支持的标签，参考 [废弃组件说明文档](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-breaking-changes-release-notes#47cd6626)。</md-td>
</md-tr>

<md-tr>
  <md-td>200570</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200570; ErrMsg: card contains invalid image keys; ErrorValue: image key %v</md-td>
  <md-td>卡片中的图片资源无效。请检查卡片中是否使用了正确的  img_key，你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口或在搭建工具中上传图片，获取图片的 key。</md-td>
</md-tr>

<md-tr>
  <md-td>200914</md-td>
  <md-td>table rows is invalid</md-td>
  <md-td>
表格行无效。可能原因与排查方案：
- 表格的 rows 部分不是一个合法的 JSON，示例参考[表格 JSON 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/table#51c332ce)。
- 单元格数据类型解析错误。例如，某列的单元格类型是富文本，但该列该行的数据按富文本解析失败。该场景下可根据返回的单元格行列索引（从 0 开始计数），定位问题单元格，然后参考[表格](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/table)中的 **data_type 字段说明**，检查是否配置有误。
  </md-td>
</md-tr>

  </md-tbody>
</md-table>
:::


其他未列出的错误码请参见[服务端通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


