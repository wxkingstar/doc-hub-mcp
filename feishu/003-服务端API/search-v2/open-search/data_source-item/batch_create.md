<!--
title: 批量为数据项创建索引
id: 7099362936195727361
fullPath: /uAjLw4CM/ukTMukTMukTM/search-v2/data_source-item/batch_create
updatedAt: 1694443377000
source: https://open.feishu.cn/document/server-docs/search-v2/open-search/data_source-item/batch_create
-->
# 批量为数据项创建索引

为提高索引数据记录的速度，特提供批量索引数据记录的接口。

:::html
<md-alert type="tip">
注意：一个batch中所有数据项的datasourceID需要一致，tenantID也需要一致
</md-alert>
:::

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
      <md-td>https://open.feishu.cn/open-apis/search/v2/data_sources/:data_source_id/items/batch_create</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="search:data_source" desc="查询、创建、修改和删除自定义搜索数据源、数据范式或数据项" support_app_types="custom,isv" tags="">查询、创建、修改和删除自定义搜索数据源、数据范式或数据项</md-perm>
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
<md-table>
  <md-thead>
      <tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 15%;">类型</md-th>
      <md-th >描述</md-th>
      </tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >data_source_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	数据源的ID

**示例值**："6953903108179099667"
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::


### 请求体

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%">名称</md-th>
      <md-th style="width: 15%;">类型</md-th>
      <md-th style="width: 5%;">必填</md-th>
      <md-th style="width: 30%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
    
<md-tr>
	<md-td>
	<md-text type="field-name" >items</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >list&lt;Item&gt;</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
	待进入索引的item列表
	</md-td>
</md-tr>
    
<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
	item 在 datasource 中的唯一标识

**示例值**："my_item_01010111"
	</md-td>
</md-tr>

<md-tr>
  	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >acl</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >acl\[\]</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
	item 的访问权限控制。 acl 字段为空数组，则默认数据不可见。如果数据是全员可见，需要设置 access="allow"; type="user"; value="everyone"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >access</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	否
	</md-td>
	<md-td>
	权限类型，优先级：Deny > Allow。

**示例值**："allow"

**可选值有**：
- `allow`：允许访问
- `deny`：禁止访问
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >value</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	否
	</md-td>
	<md-td>
	设置的权限值，例如 userID ，依赖 type 描述。

注：在 type 为 user 且 access 为 allow 时，可填 "everyone" 来表示该数据项对全员可见；

**示例值**："d35e3c23"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	否
	</md-td>
	<md-td>
	权限值类型

**示例值**："user"

**可选值有**：
- `user`：访问权限控制中指定“用户”可以访问或拒绝访问该条数据

	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >metadata</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >item_metadata</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
	item 的元信息
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >title</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
	该条数据记录对应的标题

**示例值**："工单：无法创建文章"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >source_url</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
	该条数据记录对应的跳转url

**示例值**："http://www.abc.com.cn"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >create_time</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	否
	</md-td>
	<md-td>
	数据项的创建时间。Unix 时间，单位为秒

**示例值**：1618831236
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >update_time</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
	数据项的更新时间。Unix 时间，单位为秒

**示例值**：1618831236
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >source_url_mobile</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
	移动端搜索命中的跳转地址。如果您PC端和移动端有不同的跳转地址，可以在这里写入移动端专用的url，我们会在搜索时为您选择合适的地址

**示例值**："https://www.feishu.cn"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >structured_data</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
	结构化数据（以 json 字符串传递），这些字段是搜索结果的展示字段（title字段无须在此另外指定），这里的示例值遵循了数据范式示例中的schema定义，请按你在“数据范式”中创建的schema约束填写数据

**示例值**："{"description":"description1", "priority":"HIGH"}"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >content</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >item_content</md-text>
	</md-td>
	<md-td>
	否
	</md-td>
	<md-td>
	非结构化数据，如文档文本，飞书搜索会用来做召回
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >format</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	否
	</md-td>
	<md-td>
	内容的格式

**示例值**："html"

**可选值有**：
- `html`：html格式
- `plaintext`：纯文本格式
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >content_data</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	否
	</md-td>
	<md-td>
	全文数据

**示例值**："这是一个很长的文本"
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::


### 请求体示例

```json
{
	"items": [{
			"id": "my_item_01010111",
			"acl": [{
				"access": "allow",
				"value": "everyone",
				"type": "user"
			}],
			"metadata": {
				"title": "工单：无法创建文章",
				"source_url": "http://www.abc.com.cn",
				"create_time": 1618831236,
				"update_time": ""
			},
			"structured_data": "{\"description\":\"description1\", \"priority\":\"HIGH\"}",
			"content": {
				"format": "html",
				"content_data": "这是一个很长的文本"
			}
		},
		{
			"id": "my_item_01010112",
			"acl": [{
				"access": "allow",
				"value": "d35e3c24",
				"type": "user"
			}],
			"metadata": {
				"title": "工单2：无法创建文章",
				"source_url": "http://www.abc.com.cn",
				"create_time": 1618831236,
				"update_time": 1618831236
			},
			"structured_data": "{\"description\":\"description2\",\"priority\":\"LOW\"}",
			"content": {
				"format": "html",
				"content_data": "这是一个很长的文本"
			}
		}
	]
}
```


## 响应

### 响应体
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 15%">名称</md-th>
      <md-th style="width: 20%">类型</md-th>
      <md-th style="width: 30%">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >code</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	错误码，非 0 表示失败
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >msg</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	错误描述
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >data</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >\-</md-text>
	</md-td>
	<md-td>
	\-
	</md-td>
</md-tr>
    
<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >result</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >list&lt;batch_item_result&gt;</md-text>
	</md-td>
	<md-td>
	返回信息列表
	</md-td>
</md-tr>

<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >item_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	itemID
	</md-td>
</md-tr>
    
<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >is_success</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >boolean</md-text>
	</md-td>
	<md-td>
	该数据项是否成功发往索引。  
    注意：存在极端情况该字段为True，但并未进入索引
	</md-td>
</md-tr>
    
<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟ ∟</span>&nbsp;<md-text type="field-name" >err</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	若该数据项索引失败，则表示该数据的失败信息
	</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::


### 响应成功示例

```json
{
    "code": 0,
    "data": {
        "result": [
            {
                "err": "invalid parameter",
                "is_success": false,
                "item_id": "zfz-test-batch_create_item_id1"
            },
            {
                "err": "",
                "is_success": true,
                "item_id": "zfz-test-batch_create_item_id2"
            }
        ]
    },
    "msg": "success"
}
```

### 响应失败示例
```json
{
    "code": 1272002,
    "msg": "操作鉴权失败",
    "error": {}
}
```


### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%">HTTP状态码</md-th>
            <md-th style="width: 15%">错误码</md-th>
            <md-th style="width: 15%">描述</md-th>
            <md-th style="width: 15%">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>500</md-td>
  <md-td>1270001</md-td>
  <md-td>系统内部错误</md-td>
  <md-td>联系系统开发人员协助定位</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1270002</md-td>
  <md-td>参数错误</md-td>
  <md-td>根据错误信息和文档排查非法参数</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1270004</md-td>
  <md-td>数据源不存在</md-td>
  <md-td>确认 datasource ID 是否正确</md-td>
</md-tr>

    
<md-tr>
  <md-td>400</md-td>
  <md-td>1270005</md-td>
  <md-td>该功能仅对旗舰版可用</md-td>
  <md-td>请联系销售人员升级套餐以使用此高级功能</md-td>
</md-tr>

<md-tr>
  <md-td>400</md-td>
  <md-td>1271004</md-td>
  <md-td>acl字段填写不完整</md-td>
  <md-td>填写数据项的可见性</md-td>
</md-tr>


<md-tr>
  <md-td>401</md-td>
  <md-td>1272001</md-td>
  <md-td>无权限操作数据源</md-td>
  <md-td>确认 datasource ID 是否合法</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1272002</md-td>
  <md-td>操作鉴权失败</md-td>
  <md-td>如果重试后仍然失败，请联系系统开发人员协助定位</md-td>
</md-tr>

<md-tr>
  <md-td>400</md-td>
  <md-td>1272004</md-td>
  <md-td>acl中指定的user数量超过限制</md-td>
  <md-td>减少 acl 中使用的 user，最大为 1000</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::


