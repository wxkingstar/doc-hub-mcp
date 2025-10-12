<!--
title: 更新组件属性
id: 7397253002364567555
fullPath: /uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/patch
updatedAt: 1755832643000
source: https://open.feishu.cn/document/cardkit-v1/card-element/patch
-->
# 更新组件属性

通过传入 `card_id`（卡片实体 ID）和 `element_id`（组件 ID），更新卡片实体中对应组件的属性。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=cardkit&version=v1&resource=card.element&method=patch)

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

## 使用限制

- 本接口不支持修改组件的标签（tag）属性。
- 调用该接口时，不支持将卡片设置为独享卡片模式。即不支持将卡片 JSON 数据中的 `update_multi` 属性设置为 `false`。
- 调用该接口的应用身份（tenant_access_token）需与创建目标卡片实体的应用身份一致。

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
      <md-td>https://open.feishu.cn/open-apis/cardkit/v1/cards/:card_id/elements/:element_id</md-td>
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
	要更新的组件的 ID。对应 JSON 代码中的 `element_id` 属性，由开发者自定义。

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
	<md-text type="field-name" >partial_element</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	组件的新的配置项字段。传入 `element_id` 参数后，原组件的 ID 将更新。

**注意**：
- 不支持修改 `tag` 参数。 
- 以下示例值未转义，使用时请注意将其转为 JSON 序列化后的字符串。
- 仅支持[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)。


**示例值**："{\"content\":\"更新后的组件文本\"}"

**数据校验规则**：

- 长度范围：`1` ～ `1000000` 字符
	</md-dt-td>
</md-dt-tr>


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
    "partial_element": "{\"content\":\"更新后的组件文本\"}",
    "uuid": "a0d69e20-1dd1-458b-k525-dfeca4015204",
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
      <md-td>在用户点击卡片[请求回调](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)交互期间，卡片无法实现流式更新。请等待交互结束后再尝试更新卡片。</md-td>
    </md-tr>
    
    
    <md-tr>
      <md-td>400</md-td>
      <md-td>200860</md-td>
      <md-td>Card content exceeds limit.</md-td>
      <md-td>卡片体积超限。请将卡片大小控制在 30KB 以内。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>300301</md-td>
      <md-td>Duplicate element_id in card component.</md-td>
      <md-td>卡片内部组件 ID （即 element_id）重复。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>300302</md-td>
      <md-td>update_multi property is false</md-td>
      <md-td>update_multi 属性为 false。在流式更新模式下，卡片全局属性 update_multi 需设置为 true。</md-td>
    </md-tr>
 
    <md-tr>
      <md-td>400</md-td>
      <md-td>300303</md-td>
      <md-td>Only schema 2.0 is supported</md-td>
      <md-td>该接口仅支持 Schema v2.0 结构。详情参考[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)。</md-td>
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
      <md-td>300311</md-td>
      <md-td>The current application does not have permission to update/use this card</md-td>
      <md-td>当前应用没有更新或使用该卡片的权限。仅支持创建卡片实体的应用调用相关 OpenAPI 发送、操作卡片。</md-td>
    </md-tr>
  
      <md-tr>
      <md-td>400</md-td>
      <md-td>300312</md-td>
      <md-td>Unable to update element tag</md-td>
      <md-td>更新卡片属性时，不能更新组件的标签（tag）属性。</md-td>
    </md-tr>
    
        <md-tr>
      <md-td>400</md-td>
      <md-td>300313</md-td>
      <md-td>Failed to update element  properties</md-td>
      <md-td>更新组件属性失败。请根据接口返回的错误信息检查输入参数。</md-td>
    </md-tr>
    
        <md-tr>
      <md-td>400</md-td>
      <md-td>300317 </md-td>
      <md-td>The sequence number for operating on the card did not increment consecutively</md-td>
      <md-td>操作卡片的序号（sequence）未按顺序递增。请确保在通过卡片 OpenAPI 操作同一张卡片时，sequence 的值相较于上一次操作严格递增。</md-td>
    </md-tr>
    

    

:::


