<!--
title: 流式更新文本
id: 7397253002364649475
fullPath: /uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/content
updatedAt: 1755832653000
source: https://open.feishu.cn/document/cardkit-v1/card-element/content
-->
# 流式更新文本

对卡片中的普通文本元素（tag 为 plain_text 的元素）或富文本组件（tag 为 markdown 的组件）传入全量文本内容，以实现“打字机”式的文字输出效果。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=cardkit&version=v1&resource=card.element&method=content)

:::html
<md-alert type="tip">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="error">

</md-alert>
:::

## 输出效果说明

若旧文本为传入的新文本的前缀子串，新增文本将在旧文本末尾继续以打字机效果输出；若新旧文本前缀不同，全量文本将直接上屏输出，无打字机效果。参考[流式更新卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/streaming-updates-openapi-overview)，了解流式更新文本的效果和完整流程。

## 使用限制

- 调用该接口时，不支持将卡片设置为独享卡片模式。即不支持将卡片 JSON 数据中的 `update_multi` 属性设置为 `false`。
- 对于搭建工具中的卡片，仅支持对富文本组件中的内容进行流式更新，不支持对普通文本元素进行文本流式更新。
- 调用该接口的应用身份（tenant_access_token）需与创建目标卡片实体的应用身份一致。

## 前提条件

调用该接口时，需确保已开启卡片的流式更新模式：
- 在卡片 JSON 中，将 `streaming_mode` 设为 `true`
- 或在卡片搭建工具中，在设置中开启流式更新模式：

     ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6051c2a7d1df743858d11d2ae89d96a2_pTDWhbUysD.png?maxWidth=400)

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
      <md-td>https://open.feishu.cn/open-apis/cardkit/v1/cards/:card_id/elements/:element_id/content</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PUT</md-td>
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
            
      </md-th>
      <md-td>
            <md-perm name="cardkit:card:write" desc="创建与更新卡片" support_app_types="custom,isv" tags="">创建与更新卡片</md-perm>
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
	<md-text type="field-name" >card_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	卡片实体 ID。通过[创建卡片实体](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/create)获取

**示例值**："7355439197428236291"

**数据校验规则**：

- 长度范围：`1` ～ `20` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >element_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	卡片实体中，普通文本元素或富文本组件的 ID。对应卡片 JSON 中的 `element_id` 属性或搭建工具中的组件 ID 属性，由开发者自定义。

**注意**： 

- 仅支持[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)或卡片搭建工具搭建的[新版卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/cardkit-upgraded-version-card-release-notes)。
- 对于搭建工具中的卡片，此处仅支持传入富文本组件的组件 ID。即仅支持对富文本组件中的内容进行流式更新。

**示例值**："markdown_1"

**数据校验规则**：

- 长度范围：`1` ～ `20` 字符
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
	<md-text type="field-name" >uuid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	幂等 ID，可通过传入唯一的 UUID 以保证相同批次的操作只进行一次。

**示例值**："a0d69e20-1dd1-458b-k525-dfeca4015204"

**数据校验规则**：

- 长度范围：`1` ～ `64` 字符
	</md-dt-td>
</md-dt-tr>


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
	新的全量文本内容。使用时请注意转义为字符串。

**注意**：
- 若 content 中含有代码块，你需将代码块前后的空格去掉，否则可能导致代码渲染失败。
- 若旧文本为传入的新文本的前缀子串，新增文本将在旧文本末尾继续以打字机效果输出；若新旧文本前缀不同，全量文本将直接上屏输出，无打字机效果。

**示例值**："这是更新后的文本内容。将以打字机式的效果输出"

**数据校验规则**：

- 长度范围：`1` ～ `100000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >sequence</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	操作卡片的序号。用于保证多次更新的时序性。

**注意**：
请确保在通过卡片 OpenAPI 操作同一张卡片时，sequence 的值相较于上一次操作严格递增。


**数据校验规则**：int32 范围（ `1`~`2147483647`）内的正整数。

**示例值**：1
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "uuid": "a0d69e20-1dd1-458b-k525-dfeca4015204",
    "content": "这是更新后的文本内容。将以打字机式的效果输出",
    "sequence": 1
}
</md-code-json>
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
    "msg": "success",
    "data": {}
}
</md-code-json>
:::

### 错误码

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">HTTP状态码</md-th>
      <md-th style="width: 10%;">错误码</md-th>
      <md-th style="width: 30%;">描述</md-th>
      <md-th>排查建议</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>400</md-td>
      <md-td>10002</md-td>
      <md-td>Your request contains an invalid request parameter.</md-td>
      <md-td>参数错误，请根据接口返回的错误信息并参考文档检查输入参数。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>200740</md-td>
      <md-td>The card entity does not exist</md-td>
      <md-td>卡片实体不存在。请检查实体 ID 是否正确。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>200750</md-td>
      <md-td>The card entity has expired</md-td>
      <md-td>卡片实体已过期。卡片实体的有效期为 14 天。即创建卡片实体超出 14 天后，你将无法调用相关接口操作卡片。请重新创建卡片实体。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>200770</md-td>
      <md-td>UUID conflict</md-td>
      <md-td>UUID 冲突。请传入唯一的 UUID 以保证相同批次的操作只进行一次。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>200810</md-td>
      <md-td>The card is in an ongoing interaction and cannot be updated</md-td>
      <md-td> 在用户点击卡片[请求回调](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)交互期间，卡片无法实现流式更新。请等待交互结束后再尝试更新卡片。
</md-td>
    </md-tr>
    
        <md-tr>
      <md-td>400</md-td>
      <md-td>200850</md-td>
      <md-td>Card streaming timeout</md-td>
      <md-td>卡片流式更新模式因超时自动关闭。你可调用[更新卡片配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/settings) 将 `streaming_mode` 字段值设置为 `true`。              </md-td>
    </md-tr>
    
    
    <md-tr>
      <md-td>400</md-td>
      <md-td>200860</md-td>
      <md-td>Card content exceeds limit.</md-td>
      <md-td>卡片体积超限。请将卡片大小控制在 30KB 以内。</md-td>
    </md-tr>

    <md-tr>
      <md-td>400</md-td>
      <md-td>300302</md-td>
      <md-td>update_multi property is false</md-td>
      <md-td>卡片全局属性 update_multi 设置为了 false。在流式更新模式下，卡片全局属性 update_multi 需设置为 true。</md-td>
    </md-tr>
  
    <md-tr>
      <md-td>400</md-td>
      <md-td>200220</md-td>
      <md-td>Failed to generate card content</md-td>
      <md-td>生成卡片内容失败。请检查卡片 JSON 格式是否有误。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>300307</md-td>
      <md-td>The card DSL is empty</md-td>
      <md-td>卡片 JSON 数据为空。请检查数据。</md-td>
    </md-tr>
    
    
<md-tr>
      <md-td>400</md-td>
      <md-td>300309</md-td>
      <md-td>Card streaming closed</md-td>
      <md-td>流式更新模式为关闭状态。你可调用[更新卡片配置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/settings) 将 `streaming_mode` 字段值设置为 `true`。    </md-td>
    </md-tr>
    
    
<md-tr>
      <md-td>400</md-td>
      <md-td>300310</md-td>
      <md-td>Only update text</md-td>
      <md-td>该接口仅支持普通文本元素和富文本组件。请使用普通文本元素或富文本组件进行更新。 </md-td>
    </md-tr>
    
    <md-tr>
      <md-td>400</md-td>
      <md-td>300311</md-td>
      <md-td>The current application does not have permission to update/use this card</md-td>
      <md-td>当前应用没有更新或使用该卡片的权限。仅支持创建卡片实体的应用调用相关 OpenAPI 发送、操作卡片。</md-td>
    </md-tr>
   
    
   
    <md-tr>
      <md-td>400</md-td>
      <md-td>300313</md-td>
      <md-td>Failed to update element properties</md-td>
      <md-td>更新组件属性失败。请根据接口返回的错误信息检查输入参数。</md-td>
    </md-tr>
    
        <md-tr>
      <md-td>400</md-td>
      <md-td>300317</md-td>
      <md-td>The sequence number for operating on the card did not increment consecutively</md-td>
      <md-td>操作卡片的序号（sequence）未按顺序递增。请确保在通过卡片 OpenAPI 操作同一张卡片时，sequence 的值相较于上一次操作严格递增。</md-td>
    </md-tr>
    
         <md-tr>
      <md-td>400</md-td>
      <md-td>300120</md-td>
      <md-td>Server Internal Error</md-td>
      <md-td>服务内部错误。请确保 `sequence` 依次递增，然后稍后重试。仍然出现可联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
    </md-tr>
    
:::


