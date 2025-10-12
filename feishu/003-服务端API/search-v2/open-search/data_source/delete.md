<!--
title: 删除数据源
id: 6953505452630245379
fullPath: /uAjLw4CM/ukTMukTMukTM/search-v2/data_source/delete
updatedAt: 1672744592000
source: https://open.feishu.cn/document/server-docs/search-v2/open-search/data_source/delete
-->
# 删除数据源

删除一个已存在的数据源。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=search&version=v2&resource=data_source&method=delete)

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
      <md-td>https://open.feishu.cn/open-apis/search/v2/data_sources/:data_source_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>DELETE</md-td>
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
	<md-text type="field-name" >data_source_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据源的唯一标识

**示例值**："6953903108179099667"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





## 响应



### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 40%;">名称</md-dt-th>
      <md-dt-th style="width: 20%;">类型</md-dt-th>
      <md-dt-th style="width: 30%;">描述</md-dt-th>
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
    "msg": "success"
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
  <md-td>500</md-td>
  <md-td>1270003</md-td>
  <md-td>调用失败</md-td>
  <md-td>如果重试后仍然失败，请联系系统开发人员</md-td>
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

  </md-tbody>
</md-table>
:::




