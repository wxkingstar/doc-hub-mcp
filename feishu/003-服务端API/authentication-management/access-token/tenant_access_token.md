<!--
title: 商店应用获取 tenant_access_token
id: 6995779366223740932
fullPath: /ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token
updatedAt: 1678432512000
source: https://open.feishu.cn/document/server-docs/authentication-management/access-token/tenant_access_token
-->
# 商店应用获取 tenant_access_token
商店应用通过此接口获取`tenant_access_token`。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=auth&version=v3&resource=tenant_access_token&method=create)

:::note
**说明** **：** `tenant_access_token` 的最大有效期是 2 小时。如果在有效期小于 30 分钟的情况下，调用本接口，会返回一个新的 `tenant_access_token`，这会同时存在两个有效的 `tenant_access_token`。
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
      <md-td>https://open.feishu.cn/open-apis/auth/v3/tenant_access_token</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            无
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
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 40%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 10%;">必填</md-th>
      <md-th style="width: 30%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >app_access_token</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
应用访问凭证，通过[商店应用获取 app_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token)接口获取
      
**示例值：** "a-32bd8551db2f081cbfd26293f27516390b9feb04"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >tenant_key</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
租户在飞书上的唯一标识，也可以理解为企业标识
可以通过如下方式获取：
- 企业开通应用时，开放平台推送给应用，具体可参考[首次启用应用](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/event/app-first-enabled)
- 用户登录到小程序、H5 应用或者浏览器应用时，在用户的身份信息中获取
      
**示例值**："73658811060f175d"
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::



### 请求体示例

```json
{
    "app_access_token": "a-32bd8551db2f081cbfd26293f27516390b9feb04",
    "tenant_key": "73658811060f175d"
}
```



## 响应



### 响应体
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 40%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 30%;">描述</md-th>
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
错误码，非 0 取值表示失败
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
	<md-text type="field-name" >tenant_access_token</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
租户访问凭证
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >expire</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
`tenant_access_token` 的过期时间，单位为秒
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::



### 响应体示例

```json
{
    "code": 0,
    "msg": "success",
    "tenant_access_token": "t-caecc734c2e3328a62489fe0648c4b98779515d3",
    "expire": 7140
}
```

### 错误码

有关错误码的详细介绍，请参考[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)介绍。


