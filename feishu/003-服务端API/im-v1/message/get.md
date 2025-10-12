<!--
title: 获取消息中的资源文件
id: 6946222931479576577
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-resource/get
updatedAt: 1748920697000
source: https://open.feishu.cn/document/server-docs/im-v1/message/get-2
-->
# 获取消息中的资源文件

获取指定消息内包含的资源文件，包括音频、视频、图片和文件。成功调用后，返回二进制文件流下载文件。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=message.resource&method=get)

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
 
- 应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 机器人和待操作的消息需要在同一会话内。

## 使用限制
- 仅支持下载 100 MB 以内的资源文件。
- 暂不支持获取表情包资源。
- 暂不支持获取合并转发消息中的子消息、卡片消息中的资源文件。如果请求时传入了合并转发消息或子消息的 ID、卡片消息 ID，则会返回错误码 234043。
- 不支持在当前接口内调整文件格式，你可以获取资源文件后，在本地自行调整。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/messages/:message_id/resources/:file_key</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
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
            <md-perm name="im:message:readonly" desc="获取单聊、群组消息" support_app_types="custom,isv" tags="">获取单聊、群组消息</md-perm>
            <md-perm name="im:message.history:readonly" desc="获取单聊、群组的历史消息" support_app_types="custom" tags="history,offline">获取单聊、群组的历史消息</md-perm>
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

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
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
	待查询的消息 ID。ID 获取方式：
  
- 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。
- 监听[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。
- 调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。

**示例值**："om_dc13264520392913993dd051dba21dcf"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >file_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	待查询资源的 Key。你可以调用[获取指定消息的内容](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/get)接口，通过消息 ID 获取消息内容中的资源 Key。

**注意**：路径参数 `file_key` 和 `message_id` 需要匹配。

**示例值**："file_456a92d6-c6ea-4de4-ac3f-7afcf44ac78g"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	资源类型

**可选值有：**
- `image`：对应消息中的图片或富文本消息中的图片。
- `file`：对应消息中的文件、音频、视频（表情包除外）。

**示例值**：image
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





## 响应

:::note
文件类型可通过响应头（Response Header）中的 `Content-Type` 字段获取。
:::

HTTP状态码为 200 时，表示成功

返回文件二进制流



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
  <md-td>230110</md-td>
  <md-td>Action unavailable as the message has been deleted.</md-td>
  <md-td>消息已删除，无法执行操作。

</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234001</md-td>
  <md-td>Invalid request param.</md-td>
  <md-td>请求参数无效。请参考文档参数描述，检查请求参数是否填写正确。</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>234002</md-td>
  <md-td>Unauthorized.</md-td>
  <md-td>鉴权失败，请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234003</md-td>
  <md-td>File not in message.</md-td>
  <md-td>该资源不属于当前消息。请检查消息 ID 和资源 Key，两者必须相匹配。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234004</md-td>
  <md-td>App not in chat.</md-td>
  <md-td>应用不在消息所在的群组中。你需要将应用机器人添加到当前消息所在群组中，或者修改正确的消息 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234009</md-td>
  <md-td>Lack of necessary permissions.</md-td>
  <md-td>暂不支持在外部群中进行本操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234019</md-td>
  <md-td>scope CheckAppTenant fail.</md-td>
  <md-td>未获取到应用的权限信息，请重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234037</md-td>
  <md-td>Downloaded file size exceeds limit.</md-td>
  <md-td>下载的资源大小不允许超过 100 MB。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234038</md-td>
  <md-td>Do not allow downloading of message resources in restricted mode.</md-td>
  <md-td>不能下载保密消息中的资源文件，请检查消息是否已被设置为保密，或群组开启了防泄密模式。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234040</md-td>
  <md-td>The message is invisible to the operator.</md-td>
  <md-td>该消息对当前操作者不可见，请联系群主或群管理员检查群设置中是否关闭了 **新成员可查看历史消息**。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234041</md-td>
  <md-td>Tenant master key has been deleted, please contact the tenant administrator.</md-td>
  <md-td>租户加密密钥被删除，无法操作加密数据，可联系企业管理员排查问题。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234042</md-td>
  <md-td>Hybrid deployment tenant storage error, such as full storage space, please contact tenant administrator.</md-td>
  <md-td>请求出现混部租户存储错误，如存储空间已满等，请联系企业的管理员或技术支持。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>234043</md-td>
  <md-td>Unsupported message type.</md-td>
  <md-td>不支持的消息类型，如合并转发消息（包括子消息）、消息卡片。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


