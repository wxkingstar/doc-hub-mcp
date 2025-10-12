<!--
title: 创建卡片实体
id: 7397265677100974083
fullPath: /uAjLw4CM/ukTMukTMukTM/cardkit-v1/card/create
updatedAt: 1751514010000
source: https://open.feishu.cn/document/cardkit-v1/card/create
-->
# 创建卡片实体

基于卡片 JSON 代码或卡片搭建工具搭建的卡片，创建卡片实体。用于后续通过卡片实体 ID（card_id）发送卡片、更新卡片等。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=cardkit&version=v1&resource=card&method=create)

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

- 本接口仅支持[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)或卡片搭建工具搭建的[新版卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/cardkit-upgraded-version-card-release-notes)。
- 调用该接口时，不支持将卡片设置为独享卡片模式。即不支持将卡片 JSON 数据中的 `update_multi` 属性设置为 `false`。
- 一个卡片实体，仅支持发送一次。
- 卡片实体的有效期为 14 天。即创建卡片实体超出 14 天后，你将无法调用相关接口操作卡片。

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
      <md-td>https://open.feishu.cn/open-apis/cardkit/v1/cards</md-td>
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
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	卡片类型。可选值：

- `card_json`：由卡片 JSON 代码构建的卡片
- `template`：由[卡片搭建工具](https://open.feishu.cn/cardkit?from=open_docs)搭建的卡片模板

**示例值**："card_json"

**数据校验规则**：

- 长度范围：`1` ～ `50` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	卡片数据。需要与 `type` 指定的类型一致：
- 若 `type` 为 `card_json`，则此处应传卡片 JSON 代码，并确保将其转义为字符串。仅支持[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)，即你必须声明 `schema` 为 `2.0`
- 若 `type` 为 `template`，则此处应传卡片模板的数据，并确保将其转义为字符串。仅支持新版卡片。即在搭建工具中，卡片名称旁应有“新版”标识

**示例值**："请参考下文请求体示例"

**数据校验规则**：

- 长度范围：`1` ～ `3000000` 字符
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{  // type 为 card_json 时
  "type": "card_json",
  "data": "{\"schema\":\"2.0\",\"header\":{\"title\":{\"content\":\"项目进度更新提醒\",\"tag\":\"plain_text\"}},\"config\":{\"streaming_mode\":true,\"summary\":{\"content\":\"\"},\"streaming_config\":{\"print_frequency_ms\":{\"default\":70,\"android\":70,\"ios\":70,\"pc\":70},\"print_step\":{\"default\":1,\"android\":1,\"ios\":1,\"pc\":1},\"print_strategy\":\"fast\"}},\"body\":{\"elements\":[{\"tag\":\"markdown\",\"content\":\"截至今日，项目完成度已达80%\",\"element_id\":\"markdown_1\"}]}}"
}



{  // type 为 template 时
  "type": "template",
  "data": "{\"template_id\":\"AAqIi1B8abcef\",\"template_version_name\":\"1.0.0\",\"template_variable\":{\"open_id\":\"ou_5c6d1637498e704f541095bba3dabcef\"}}}"
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >card_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	创建的卡片实体 ID。后续可通过[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口传入卡片实体 ID 发送卡片。
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
    "data": {
        "card_id": "7355372766134157313"
    }
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
      <md-th style="width: 25%;">描述</md-th>
      <md-th>排查建议</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>400</md-td>
      <md-td>10002</md-td>
      <md-td>Your request contains an invalid request parameter.</md-td>
      <md-td>参数错误。请根据接口返回的错误信息并参考文档检查输入参数。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>200860</md-td>
      <md-td>Card content exceeds limit.</md-td>
      <md-td>卡片体积超限。建议卡片大小控制在 30KB 以内。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>300301</md-td>
      <md-td>Duplicate element_id in card component.</md-td>
      <md-td>卡片内部组件 ID （即 element_id）重复。请检查并修改。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>300302</md-td>
      <md-td>update_multi property is false</md-td>
      <md-td>卡片全局属性 update_multi 设置为了 false。在流式更新模式下，卡片全局属性 update_multi 需设置为 true。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>300303</md-td>
      <md-td>Only schema 2.0 is supported</md-td>
      <md-td>该接口仅支持 JSON 2.0 结构。详情参考[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>200220</md-td>
      <md-td>Failed to generate card content</md-td>
      <md-td>生成卡片内容失败。请检查卡片 JSON 格式是否有误。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>300305</md-td>
      <md-td>The number of card components exceeds 200</md-td>
      <md-td>超出卡片组件限制。卡片 JSON 2.0 结构中，一张卡片最多支持 200 个元素（如 tag 为 plain_text 的文本元素）或组件。请将组件和元素的数量之和控制在 200 个以内。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>300307</md-td>
      <md-td>The card DSL is empty</md-td>
      <md-td>卡片 JSON 数据为空。请检查并修改。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::


