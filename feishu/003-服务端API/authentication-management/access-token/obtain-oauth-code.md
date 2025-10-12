<!--
title: 获取授权码
id: 7301948321505132546
fullPath: /common-capabilities/sso/api/obtain-oauth-code
updatedAt: 1758188215000
source: https://open.feishu.cn/document/authentication-management/access-token/obtain-oauth-code
-->
# 获取授权码

本接口用于发起用户授权，应用在用户同意授权后将获得授权码 `code`。请注意授权码的有效期为 5 分钟，且只能被使用一次。

## 注意事项

- 本接口实际为授权页面，适用于网页应用的授权场景。在需要用户授权时，应用应将用户重定向至本授权页面。当用户在授权页面点击授权后（在飞书客户端内打开网页应用时可免确认直接跳转），浏览器将跳转至 `redirect_uri` 所指定的地址，并携带 `code` 查询参数（即授权码）。

- 开发者可通过授权码获取 `user_access_token`，以调用 OpenAPI（例如[获取用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/user_info/get)）。有关获取 `user_access_token` 的详细步骤，可参考[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)。
- 通过本接口配合[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)以及[获取用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/user_info/get)，应用可实现飞书授权登录。
- 完整的用户授权链路实现，可参考[浏览器应用接入指南](/ssl:ttdoc/common-capabilities/sso/web-application-end-user-consent/guide)。
- 在打开授权页面时，需要通过拼接 `scope` 查询参数声明应用所需的用户授权权限。例如，获取通讯录基本信息的权限对应的 `scope` 键为 `contact:contact.base:readonly`。  
- 用户授予应用的权限是累积的，最新生成的 `user_access_token` 将包含用户历史上已授予的所有权限。  
- 当应用使用 `user_access_token` 调用某个 OpenAPI 时，必须确保该 `user_access_token` 具备[目标 OpenAPI 所需的权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)，否则调用将失败。

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
      <md-td>https://accounts.feishu.cn/open-apis/authen/v1/authorize</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    
         <md-tr>
      <md-th>接口频率限制        </md-th>
      <md-td>1000 次/分钟、50 次/秒</md-td>
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
            无
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

### 查询参数

>  为了确保 URL 构造 & 编码正确，建议使用相关的 URL 标准库来完成 URL 的解析和构建，避免手动拼接。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 15%">名称</md-th>
      <md-th style="width: 15%">类型</md-th>
      <md-th style="width: 15%" filters="是,否">必填</md-th>
      <md-th style="width: 55%">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr level="0">
      <md-td>
        <md-text type="field-name">client_id</md-text>
      </md-td>
      <md-td>
        <md-text type="field-type">string</md-text>
      </md-td>
      <md-td>是</md-td>
      <md-td>
应用的 App ID，可以在开发者后台的**凭证与基础信息**页面查看 App ID。有关 App ID 的详细介绍，请参考[通用参数](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)。
        
**示例值：** `cli_a5d611352af9d00b`
      </md-td>
    </md-tr>
    <md-tr level="0">
      <md-td>
        <md-text type="field-name">response_type</md-text>
      </md-td>
      <md-td>
        <md-text type="field-type">string</md-text>
      </md-td>
      <md-td>是</md-td>
      <md-td>
应用通知授权服务器所需的授权类型，对于授权码流程，固定值`code`   
**示例值：** `code`
      </md-td>
    </md-tr>

    <md-tr level="0">
      <md-td>
        <md-text type="field-name">redirect_uri</md-text>
      </md-td>
      <md-td>
        <md-text type="field-type">string</md-text>
      </md-td>
      <md-td>是</md-td>
      <md-td>
应用重定向地址，在用户授权成功后会跳转至该地址，同时会携带 `code` 以及 `state` 参数（如有传递 `state` 参数）。

请注意： 

1. 该地址需经过 URL 编码；
        
2. 调用本接口前，你需要在开发者后台应用的**安全设置**页面，将用于接受 OAuth 回调的 HTTP GET 请求接口地址配置为应用的重定向 URL。重定向 URL 支持配置多个，只有在重定向 URL 列表中的 URL 才会通过开放平台的安全校验。详情请参考[配置重定向域名](/ssl:ttdoc/uYjL24iN/uYjN3QjL2YzN04iN2cDN)。
        
**示例值：** `https://example.com/api/oauth/callback`
      </md-td>
    </md-tr>
    
    <md-tr level="0">
      <md-td>
        <md-text type="field-name">scope</md-text>
      </md-td>
      <md-td>
        <md-text type="field-type">string</md-text>
      </md-td>
      <md-td>否</md-td>
      <md-td>
用户需要增量授予应用的权限。

**格式要求：** `scope` 参数为空格分隔，区分大小写的字符串。
        
**注意**：

- 开发者需要根据业务场景，在[开发者后台](https://open.larkoffice.com/app)的 **权限管理** 模块中完成调用 OpenAPI 所需的 `scope` 申请后，自主拼接 `scope` 参数。如果没有在应用后台为应用申请相应权限，则实际使用应用时用户会遇到 20027 报错。
        
- 应用最多一次可以请求用户授予 50 个 `scope`。详情参考 [API 权限列表](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。
        
- 如果后续需要获取 `refresh_token`，此处需要添加 `offline_access` 权限。详情参考 [刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)）：
	<md-perm name="offline_access" desc="离线访问已授权数据" support_app_types="custom,isv">offline_access</md-perm>  
        
**示例值：** `contact:contact bitable:app:readonly`
      </md-td>
    </md-tr>
    
    <md-tr level="0">
      <md-td>
        <md-text type="field-name">state</md-text>
      </md-td>
      <md-td>
        <md-text type="field-type">string</md-text>
      </md-td>
      <md-td>否</md-td>
      <md-td>
用来维护请求和回调之间状态的附加字符串，在授权完成回调时会原样回传此参数。应用可以根据此字符串来判断上下文关系，同时该参数也可以用以防止 CSRF 攻击，请务必校验 `state` 参数前后是否一致。

**示例值：** `RANDOMSTRING`
      </md-td>
    </md-tr>
    
    <md-tr level="0">
      <md-td>
        <md-text type="field-name">code_challenge</md-text>
      </md-td>
      <md-td>
        <md-text type="field-type">string</md-text>
      </md-td>
      <md-td>否</md-td>
      <md-td>
用于通过 PKCE（Proof Key for Code Exchange）流程增强授权码的安全性。

**示例值：** `E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM`
        
有关 PKCE 的详细信息，请参阅[RFC-7636 - Proof Key for Code Exchange by OAuth Public Clients](https://datatracker.ietf.org/doc/html/rfc7636)。        
      </md-td>
    </md-tr>
    
    <md-tr level="0">
      <md-td>
        <md-text type="field-name">code_challenge_method</md-text>
      </md-td>
      <md-td>
        <md-text type="field-type">string</md-text>
      </md-td>
      <md-td>否</md-td>
      <md-td>
生成 `code_challenge` 的方法。

**可选值**：  
1. **`S256`**（推荐）：  
   使用 SHA-256 哈希算法计算 `code_verifier` 的哈希值，并将结果进行 Base64URL 编码，生成 `code_challenge`。  
2. **`plain`**（默认值）：  
   直接将 `code_verifier` 作为 `code_challenge`，无需进行额外处理。

以上 `code_verifier` 是指在发起授权前，本地生成的随机字符串。
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
 
### 请求示例

> 注意仅为示例请求 URL，请根据前文描述将其中的查询参数替换为真实的值

``` http
https://accounts.feishu.cn/open-apis/authen/v1/authorize?client_id=cli_a5d611352af9d00b&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fapi%2Foauth%2Fcallback&scope=bitable:app:readonly%20contact:contact&state=RANDOMSTRING
```

## 响应

### 成功响应
当用户同意授权后，浏览器将重定向至发起授权时给定的的 `redirect_uri` 地址，同时携带 `code` 和 `state` 参数。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 30%">名称</md-th>
      <md-th style="width: 70%">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr level="0">
      <md-td>
        <md-text type="field-name">code</md-text>
      </md-td>
      <md-td>
授权码，用于获取 `user_access_token`。
        
**字符集：** [A-Z] / [a-z] / [0-9] / "-" / "_"
        
**长度：** 请开发者至少预留 64 位字符
        
**示例值：** `2Wd5g337vo5BZXUz-3W5KECsWUmIzJ_FJ1eFD59fD1AJIibIZljTu3OLK-HP_UI1`
      </md-td>
    </md-tr>

    <md-tr level="0">
      <md-td>
        <md-text type="field-name">state</md-text>
      </md-td>
      <md-td>
打开授权页时传入的 `state` 参数的原值，如未传入此处不会返回。
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

示例：
```http
https://example.com/api/oauth/callback?code=2Wd5g337vo5BZXUz-3W5KECsWUmIzJ_FJ1eFD59fD1AJIibIZljTu3OLK-HP_UI1&state=RANDOMSTRING
```

### 失败响应
当用户拒绝授权时，浏览器将重定向至发起授权时给定的 `redirect_uri` 地址，同时携带 `error` 和 `state` 查询参数。 当前 `error` 参数的固定值为 `access_denied`，请妥善处理拒绝授权时的情况。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 30%">名称</md-th>
      <md-th style="width: 70%">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr level="0">
      <md-td>
        <md-text type="field-name">error</md-text>
      </md-td>
      <md-td>
错误信息，当前固定为 `access_denied`
      </md-td>
    </md-tr>

    <md-tr level="0">
      <md-td>
        <md-text type="field-name">state</md-text>
      </md-td>
      <md-td>
打开授权页时传入的 `state` 参数的原值，如未传入此处不会返回
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

示例：
```http
https://example.com/api/oauth/callback?error=access_denied&state=RANDOMSTRING
```

## 常见问题

### 用户授权应用时报错 20027

**问题现象**：用户在授权应用时报错 20027

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8de8a8e0ce3fbe84ddabcbad2e929b5c_cUP75TqvF9.png?height=331&lazyload=true&maxWidth=600&width=792)
    
**问题原因**：打开授权页时拼接的 scope 参数中包含当前应用未开通的权限。

**解决方案**：

1. 确认需要用户授权的权限范围。
2. 前往[开发者后台](https://open.feishu.cn/app)，在对应应用的 **开发配置** > **权限管理** > **API 权限** 功能页开通相应的权限。具体操作参考[申请 API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。
3. 调用当前接口，自主拼接已在应用内开通的权限。

### 如何获取包含目标权限的 user_access_token

在调用 OpenAPI 时，如果 `user_access_token` 缺少所需权限，将会返回以下错误：

```json
{
  "code": 99991679,
  "error": {
    "log_id": "202407260711088FB107A76E0100002087",
    "permission_violations": [
      {
        "subject": "task:task:read",
        "type": "action_privilege_required"
      },
      {
        "subject": "task:task:write",
        "type": "action_privilege_required"
      }
    ]
  },
  "msg": "Unauthorized. You do not have permission to perform the requested operation on the resource. Please request user re-authorization and try again. required one of these privileges: [task:task:read, task:task:write]"
}
```

为避免因 `user_access_token` 权限不足导致 OpenAPI 调用失败，开发者可通过 `scope` 查询参数请求用户授予相应权限，具体有以下两种方式：  

1. 一次性拼接所有需要用户授权的 `scope`，在无新增权限需求的情况下，无需重复授权。需注意单次拼接的 `scope` 数量上限为 50 个。  
2. 或者，根据 OpenAPI 调用返回的错误码及 `permission_violations` 字段，识别当前操作所需的额外权限。随后可重新生成授权链接，提示用户补充授权，并使用新生成的 `user_access_token` 继续调用 OpenAPI。 

建议开发者遵循最小权限原则，仅要求用户授予必要的权限。

### redirect_uri 中带 # 时的说明

标准 [RFC 3986 - Uniform Resource Identifier (URI): Generic Syntax](https://datatracker.ietf.org/doc/html/rfc3986#section-3)中约定，URI 中 `#` 后面的内容称为 fragment，位置处于 URI 最后。如果业务授权请求参数 `redirect_uri` 拼接了 `#`，授权完成后的重定向会将 `#` 和 fragment 内容拼接到 URI 最后。业务在解析获取 `code` 时需要特别注意。

`redirect_uri` 示例：

``` 
https://example.com/api/oauth/callback/#/login
```

请求示例：
``` 
GET https://accounts.feishu.cn/open-apis/authen/v1/authorize?client_id=cli_a5d611352af9d00b&redirect_uri=https%3A%2F%2Fexample.com%2Fapi%2Foauth%2Fcallback%2F%23%2Flogin%0A&scope=bitable:app:readonly%20contact:contact&state=RANDOMSTRING
```

回调后浏览器地址栏中的值示例：
```shell 
https://example.com/api/oauth/callback?code=2Wd5g337vo5BZXUz-3W5KECsWUmIzJ_FJ1eFD59fD1AJIibIZljTu3OLK-HP_UI1&state=RANDOMSTRING#/login
``` 