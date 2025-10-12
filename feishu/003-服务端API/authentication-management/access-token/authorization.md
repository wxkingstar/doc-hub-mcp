<!--
title: 获取 JSAPI 临时授权凭证
id: 6911312738021720065
fullPath: /ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/h5_js_sdk/authorization
updatedAt: 1722566061000
source: https://open.feishu.cn/document/authentication-management/access-token/authorization
-->
# 获取 JSAPI 临时调用凭证

该接口用于返回调用 JSAPI 临时调用凭证，使用该凭证调用 JSAPI 时，请求不会被拦截。

## 使用说明

- 该接口适用于网页应用鉴权场景，详情参见[鉴权调用 JSAPI](/ssl:ttdoc/uYjL24iN/uEzM4YjLxMDO24SMzgjN)。
- 获取 jsapi_ticket 的 API 调用次数非常有限，频繁刷新 jsapi_ticket 会导致 API 调用受限，影响自身业务。因此建议你在自己的服务全局缓存 jsapi_ticket。
- 获取 jsapi_ticket 后请结合返回的有效时间参数（expire_in），设置定时获取 jsapi_ticket 的逻辑，避免因凭证过期导致的业务异常。

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
      <md-td>https://open.feishu.cn/open-apis/jssdk/ticket/get</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
      <md-td> 是 </md-td> 
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
 
**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"
          
 [了解更多：获取与使用access_token](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)
	</md-td>
</md-tr>
     <md-tr> 
      <md-td>Content-Type</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
     <md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
   
  </md-tbody> 
</md-table>
:::

## 响应

### 响应体

| 参数         | 数据类型           | 说明      |
| --------- | ---------------  | -------  |
|code|int|错误码|
|msg|string|错误说明|
|data|object|业务数据|
|∟ticket|string|jsapi_ticket，调用 JSAPI 的临时票据||
|∟expire_in|int|ticket 的有效时间（单位：秒）|

### 响应体示例
  
```json
{
    "code": 0,
    "msg": "ok",
    "data": {
        "expire_in": 7200,
        "ticket": "0560604568baf296731aa37f0c8ebe3e049c19d7"
    }
}
```

### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)