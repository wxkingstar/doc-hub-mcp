<!--
title: 删除单位
id: 7023995901275275267
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/delete
updatedAt: 1720167377000
source: https://open.feishu.cn/document/server-docs/contact-v3/unit/delete
-->
# 删除单位

调用该接口删除指定单位。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=unit&method=delete)

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

## 注意事项

如果单位类型被其他业务应用，则不允许直接删除单位。例如，在配置成员的组织架构可见范围时，通过单位类型设置了可见范围，那么该单位类型对应的单位就无法直接删除。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/unit/:unit_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>DELETE</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[20 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="contact:unit" desc="更新单位信息" support_app_types="custom" tags="">更新单位信息</md-perm>
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
	<md-text type="field-name" >unit_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	单位 ID。

当你在创建单位时，可以在返回结果中获取单位 ID。你也可以调用[获取单位列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/list)接口，获取单位 ID。

**示例值**："BU121"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
// 无请求体参数，需传入请求头与路径参数。
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
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>500</md-td>
  <md-td>40003</md-td>
  <md-td>internal error</md-td>
  <md-td>内部错误，请获取请求的 X-Request-Id，并向[技术支持](https://applink.feishu.cn/TLJpeNdW)进行反馈。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43051</md-td>
  <md-td>unit_id invalid</md-td>
  <md-td>非法的单位 ID。调用[获取单位列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/list)接口，获取正确的单位 ID 后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43057</md-td>
  <md-td>unit type is quoted by other businesses</md-td>
  <md-td>单位类型被其它业务引用到，不允许删除。你需要先解除单位类型的引用情况，然后重试。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


