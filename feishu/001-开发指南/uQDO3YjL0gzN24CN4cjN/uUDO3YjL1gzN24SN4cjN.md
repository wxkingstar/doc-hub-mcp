<!--
title: 组件SDK鉴权流程
id: 6907568031544770562
fullPath: /uYjL24iN/uUDO3YjL1gzN24SN4cjN
updatedAt: 1741846188000
source: https://open.feishu.cn/document/common-capabilities/web-components/component-sdk-authentication-process
-->
# 组件SDK鉴权流程
通过在你的网页中引入**飞书网页组件**，可在你的网页中直接使用飞书的功能。
:::note
- 网页组件只适用于自建应用，暂不支持商店应用。
- 网页组件适用于普通web网页，不建议在小程序webview中调用此组件
:::

## 前提条件
你已参考[云文档组件](/ssl:ttdoc/uYjL24iN/uYDO3YjL2gzN24iN3cjN/introduction)、[成员名片组件](/ssl:ttdoc/uYjL24iN/uQDO3YjL0gzN24CN4cjN/profile-component)、[搜索组件](/ssl:ttdoc/uYjL24iN/uQDO3YjL0gzN24CN4cjN/selector)的接入文档，创建了一个企业自建应用，并引入了组件库。

## 鉴权流程
### 1. 获取 access_token
不同的 token 代表了组件使用者的身份。user_access_token代表以用户身份鉴权，app_access_token代表以应用身份授权。
:::note
- 成员名片组件、评论组件、反馈组件、搜索组件仅支持以用户身份(user_access_token)鉴权
- 云文档组件可以同时支持以用户身份(user_access_token)和应用身份(app_access_token)授权。但是以应用身份授权云文档时，访问量受 100 次/分钟限制，且组件不支持 “编辑”、“评论”、“点赞” 等功能
:::


:::html
<md-td>
开发者需要通过以下两种方式之一获取 token，再通过接口生成 ticket。

- 方法一：获取用户身份。通过[第三方网站免登](/ssl:ttdoc/ukTMukTMukTM/uETOwYjLxkDM24SM5AjN)获得 <md-tag mode="inline" type="token-user">user_access_token</md-tag>（注意获取 user_access_token 所需的登录预授权码 code 在有效期内仅可使用 1 次）
- 方法二：获取应用身份。通过[服务端API](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token_internal)获得 <md-tag mode="inline" type="token-app">app_access_token</md-tag>
  
</md-td>
:::

### 2. 获取 jsapi_ticket

为了降低泄漏风险，这一步应当在你的服务端进行。

**请求方式** ：POST
  
**请求地址** ： https://open.feishu.cn/open-apis/jssdk/ticket/get
  
**请求 Header** ：
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
<md-tag mode="inline" type="token-app">app_access_token</md-tag>
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"

</md-td>
</md-tr>

</md-tbody>
</md-table>
:::
  

  **请求参数** ：

无
  
 **返回参数示例**
  
 ```json
  {
    "code": 0,
    "msg": "ok",
    "data": {
        "expire_in": 7200,
        "ticket": "a885c93b03d6b6057e992ddda519e6ac857b5d6c"
    }
}
  ```
  
  **返回参数说明**
  | 参数        | 说明           | 
| --------- | --------------- |
|`code` | 返回码，非 0 表示失败 |
  |`msg` | 对返回码的文本描述 |
  |`data` | 返回内容 |
  |` ∟expire_in` | jsapi_ticket 的有效时间。单位：秒 |
  |` ∟ticket` | jsapi_ticket，在有效时间内可重复使用 |
  
  


### 3. 生成 Signature
 - 步骤1. 将下方参数拼接成字符串string1：（各参数顺序/连接符必须保持一致）

```
jsapi_ticket=a885c93b03d6b6057e992ddda519e6ac857b5d6c&noncestr=Y7a8KkqX041bsSwT&timestamp=1609904126124&url=https://m.mm.cn/ttc/3541093/3131_1.html
```



| 参数        | 示例           |  说明 
| --------- | --------------- |--------------- |
|noncestr | Y7a8KkqX041bsSwT |  一个随机字符串，由数字、字母组成|
|jsapi_ticket|a885c93b03d6b6057e992ddda519e6ac857b5d6c|上一步通过 token 取得的 ticket|
|timestamp | 1609904126124 | 时间戳（毫秒）， 一般情况下请取当前时间。|
|url | https://m.mm.cn/ttc/3541093/3131_1.html |  调用飞书组件的页面的url，不要包括#、?后面的参数。 比如原url是https://m.mm.cn/ttc/3541093/3131_1.html#subtitle?foo=bar，则实际应该传入https://m.mm.cn/ttc/3541093/3131_1.html|



- 步骤2. 对string1进行sha1签名，得到signature：
```
fc87e50e5fa427ffad0685cc5040a004531d8e9c
```



  
  
### 4. 完成网页组件库鉴权
调用如下方法完成组件鉴权：
```js
window.webComponent.config({
  openId,    // 当前登录用户的open id，要确保与生成 signature 使用的 user_access_token 相对应，使用 app_access_token 时此项不填。注意：仅云文档组件可使用app_access_token
  signature, // 签名
  appId,     // 应用 appId
  timestamp, // 时间戳（毫秒）
  nonceStr,  // 随机字符串
  url,       // 第3步参与加密计算的url
  jsApiList, // 指定要使用的组件列表，请根据对应组件的开发文档填写。如云文档组件，填写['DocsComponent']
  locale,    // 指定组件的国际化语言：en-US-英文、zh-CN-中文、ja-JP-日文
}).then(res=>{
  // 可以在这里进行组件动态渲染
})
```

 :::note
- 在config接口中使用的`nonceStr`、`timestamp`、`url`需要确保与生成`signature`时使用的值保持一致
- `signature` 签名有效期10分钟，从时间戳开始计算，且只能鉴权一次
:::


