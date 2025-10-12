<!--
title: 自建应用获取 app_access_token
id: 6995779366223822852
fullPath: /ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token_internal
updatedAt: 1719396900000
source: https://open.feishu.cn/document/server-docs/authentication-management/access-token/app_access_token_internal
-->
# 自建应用获取 app_access_token

自建应用通过此接口获取`app_access_token`。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=auth&version=v3&resource=app_access_token&method=internal)



:::note
**说明：** `app_access_token` 的最大有效期是 2 小时。

- 如果在有效期小于 30 分钟的情况下，调用本接口，会返回一个新的 `app_access_token`，这会同时存在两个有效的 `app_access_token`。
- 如果在有效期大于等于 30 分钟的情况下，调用本接口，会返回原有的 `app_access_token`。
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
      <md-td>https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
	<md-text type="field-name" >app_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
应用唯一标识，创建应用后获得。有关`app_id` 的详细介绍。请参考[通用参数](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)介绍
      
**示例值：** "cli_slkdjalasdkjasd"
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >app_secret</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>
	<md-td>
应用秘钥，创建应用后获得。有关 `app_secret` 的详细介绍，请参考[通用参数](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)介绍
      
**示例值：** "dskLLdkasdjlasdKK"
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::



### 请求体示例

```json
{
    "app_id": "cli_slkdjalasdkjasd",
    "app_secret": "dskLLdkasdjlasdKK"
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
	<md-text type="field-name" >app_access_token</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	应用访问凭证
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
`app_access_token` 的过期时间，单位为秒 
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
租户访问凭证。了解不同的访问凭证，参见[访问凭证介绍](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::



### 响应体示例

```json
{
    "app_access_token": "t-g1044ghJRUIJJ5ZPPZMOHKWZISL33E4QSS3abcef",
    "code": 0,
    "expire": 7200,
    "msg": "ok",
    "tenant_access_token": "t-g1044ghJRUIJJ5ZPPZMOHKWZISL33E4QSS3abcef"
}
```

### 错误码
有关错误码的详细介绍，请参考[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)介绍。

