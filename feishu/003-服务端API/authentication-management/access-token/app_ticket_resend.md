<!--
title: 重新获取 app_ticket
id: 6995779366223757316
fullPath: /ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_ticket_resend
updatedAt: 1715917838000
source: https://open.feishu.cn/document/server-docs/authentication-management/access-token/app_ticket_resend
-->
# 重新获取 app_ticket

开放平台每隔 1 小时会向应用推送 app_ticket 事件，事件体内包含了 app_ticket。应用也可以主动调用此接口，触发开放平台即时推送 app_ticket 事件。了解事件信息可参见[app_ticket 事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/event/app_ticket-events)。

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
      <md-td>https://open.feishu.cn/open-apis/auth/v3/app_ticket/resend</md-td>
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

  </md-tbody>
</md-table>
:::



### 响应体示例

```json
{
    "code": 0,
    "msg": "success"
}
```

### 错误码
有关错误码的详细介绍，请参考[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)介绍。


