<!--
title: 获取 user_access_token
id: 7435312925587914755
fullPath: /uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token
updatedAt: 1750847814000
source: https://open.feishu.cn/document/authentication-management/access-token/get-user-access-token
-->
# 获取 user_access_token

:::html
OAuth 令牌接口，可用于获取 <code>user_access_token</code> 以及 <code>refresh_token</code>。<code>user_access_token</code> 为用户访问凭证，使用该凭证可以以用户身份调用 OpenAPI。<code>refresh_token</code> 为刷新凭证，可以用来获取新的 <code>user_access_token</code>。
:::

- 获取 `user_access_token` 前需要先获取授权码，详见[获取授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)。请注意授权码的有效期为 5 分钟，且只能被使用一次。
- 用户授权时，用户必须拥有[应用的使用权限](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)，否则调用本接口将会报错误码 20010。
- 获取到的 `user_access_token` 存在有效期，如何刷新 <code>user_access_token</code> 详见[刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)。
- 如果你需要获取用户信息，详见[获取用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/user_info/get)。

:::html
<md-alert type="tip">
    本接口实现遵循 [RFC 6749 - The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749) ，你可以使用[标准的 OAuth 客户端库](https://oauth.net/code/)进行接入（**推荐**）
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
            <md-td>https://open.feishu.cn/open-apis/authen/v2/oauth/token</md-td>
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
                <md-tooltip type="info"
                >调用该 API 所需的权限。开启其中任意一项权限即可调用
                </md-tooltip>
            </md-th>
            <md-td>无</md-td>
        </md-tr>
        <md-tr>
            <md-th>
                字段权限要求
            </md-th>
            <md-td>
`refresh_token` 以及 `refresh_token_expires_in` 字段仅在具备以下权限时返回：

<md-perm name="offline_access" desc="离线访问已授权数据" support_app_types="custom,isv">offline_access</md-perm>
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
            <md-th style="width: 15%">名称</md-th>
            <md-th style="width: 15%">类型</md-th>
            <md-th style="width: 15%" filters="是,否">必填</md-th>
            <md-th style="width: 55%">描述</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>Content-Type</md-td>
            <md-td>string</md-td>
            <md-td>是</md-td>
            <md-td>
请求体类型。

**固定值：**`application/json; charset=utf-8`
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
            <md-th style="width: 15%">名称</md-th>
            <md-th style="width: 15%">类型</md-th>
            <md-th style="width: 15%" filters="是,否">必填</md-th>
            <md-th style="width: 55%">描述</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr level="0">
            <md-td>
                <md-text type="field-name">grant_type</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td> 是</md-td>
            <md-td>
授权类型。
              
**固定值：**`authorization_code`
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">client_id</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td> 是</md-td>
            <md-td>
应用的 App ID。应用凭证 App ID 和 App Secret 获取方式：

1. 登录[飞书开发者后台](https://open.feishu.cn/app)。

2. 进入应用详情页，在左侧导航栏，单击 **凭证与基础信息**。

3. 在 **应用凭证** 区域，获取并保存 **App ID** 和 **App Secret**。

**示例值：**`cli_a5ca35a685b0x26e`
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">client_secret</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td> 是</md-td>
            <md-td>
应用的 App Secret。应用凭证 App ID 和 App Secret 获取方式：

1. 登录[飞书开发者后台](https://open.feishu.cn/app)。

2. 进入应用详情页，在左侧导航栏，单击 **凭证与基础信息**。

3. 在 **应用凭证** 区域，获取并保存 **App ID** 和 **App Secret**。

**示例值：**`baBqE5um9LbFGDy3X7LcfxQX1sqpXlwy`
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">code</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td> 是</md-td>
            <md-td>
授权码，详见[获取授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)。

**示例值：**`a61hb967bd094dge949h79bbexd16dfe`
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">redirect_uri</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td>否</md-td>
            <md-td>
在构造授权页页面链接时所拼接的应用回调地址。

<md-alert type="warn">
  网页应用授权场景必填，且需要**严格**与获取授权码时设置的 `redirect_uri` 保持一致，小程序授权场景无需传递
</md-alert>              
              
**示例值：**`https://example.com/api/oauth/callback`
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">code_verifier</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td>否</md-td>
            <md-td>
在发起授权前，本地生成的随机字符串，用于 PKCE（Proof Key for Code Exchange）流程。使用 PKCE 时，该值为必填项。  

有关 PKCE 的详细介绍，请参阅 [RFC 7636 - Proof Key for Code Exchange by OAuth Public Clients](https://datatracker.ietf.org/doc/html/rfc7636)。

**长度限制：** 最短 43 字符，最长 128 字符
              
**可用字符集：** [A-Z] / [a-z] / [0-9] / "-" / "." / "_" / "~"
            
**示例值：**`TxYmzM4PHLBlqm5NtnCmwxMH8mFlRWl_ipie3O0aVzo`
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
            <md-td>该参数用于缩减 `user_access_token` 的权限范围。
              
例如：
              
1. 在[获取授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)时通过 `scope` 参数授权了 `contact:user.base:readonly contact:contact.base:readonly contact:user.employee:readonly` 三个权限。
              
2. 在当前接口可通过 `scope` 参数传入 `contact:user.base:readonly`，将 `user_access_token` 的权限缩减为 `contact:user.base:readonly` 这一个。
              
**注意**：
              
- 如果不指定当前参数，生成的 `user_access_token` 将包含用户授权时的所有权限。
              
- 当前参数不能传入重复的权限，否则会接口调用会报错，返回错误码 20067。
              
- 当前参数不能传入未授权的权限（即[获取授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)时用户已授权范围外的其他权限），否则接口调用会报错，返回错误码 20068。

- 多次调用当前接口缩减权限的范围不会叠加。例如，用户授予了权限 A 和 B，第一次调用该接口缩减为权限 A，则 `user_access_token` 只包含权限 A；第二次调用该接口缩减为权限 B，则 `user_access_token` 只包含权限 B。              
              
- 生效的权限列表可通过本接口返回值 scope 查看。

**格式要求：** 以空格分隔的 `scope` 列表

**示例值：**`auth:user.id:read task:task:read`
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

### 请求体示例
```json
{
    "grant_type": "authorization_code",
    "client_id": "cli_a5ca35a685b0x26e",
    "client_secret": "baBqE5um9LbFGDy3X7LcfxQX1sqpXlwy",
    "code": "a61hb967bd094dge949h79bbexd16dfe",
    "redirect_uri": "https://example.com/api/oauth/callback",
    "code_verifier": "TxYmzM4PHLBlqm5NtnCmwxMH8mFlRWl_ipie3O0aVzo"
}
```
## 响应
响应体类型为 `application/json; charset=utf-8`。

### 响应体
:::html
<md-alert type="tip">**响应体中的 `access_token` 和 `refresh_token` 长度较长**，一般在 1~2KB 之间，且可能由于 `scope` 数量的变多或后续变更导致长度进一步增加，建议预留 4KB 的存储容量</md-alert>
:::

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%">名称</md-th>
            <md-th style="width: 15%">类型</md-th>
            <md-th style="width: 70%">描述</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr level="0">
            <md-td>
                <md-text type="field-name">code</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">int</md-text>
            </md-td>
            <md-td>
错误码，为 0 时表明请求成功，非 0 表示失败，请参照下文[错误码](#错误码)一节进行相应处理
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">access_token</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td> 即 `user_access_token`，仅在请求成功时返回</md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">expires_in</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">int</md-text>
            </md-td>
            <md-td>
即 `user_access_token` 的有效期，单位为秒，仅在请求成功时返回

<md-alert type="tip">建议使用该字段以确定 `user_access_token` 的过期时间，不要硬编码有效期</md-alert>
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">refresh_token</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td>              
用于刷新 `user_access_token`，详见[刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)。该字段仅在请求成功且用户授予 `offline_access` 权限时返回。
 
<md-alert type="tip">如果你在获取 `user_access_token` 时设置了 `scope` 请求参数，且需要返回 `refresh_token`，则需要在 `scope` 参数中包括 `offline_access`。另外，`refresh_token` 仅能被使用一次。</md-alert> 
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">refresh_token_expires_in</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">int</md-text>
            </md-td>
            <md-td>
                即 `refresh_token` 的有效期，单位为秒，仅在返回 `refresh_token` 时返回。
              
<md-alert type="tip">建议在到期前调用[刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token) 接口获取新的 `refresh_token`。</md-alert> 
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">token_type</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td> 值固定为 `Bearer`，仅在请求成功时返回</md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">scope</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td>
                本次请求所获得的 `access_token` 所具备的权限列表，以空格分隔，仅在请求成功时返回
            </md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">error</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td>错误类型，仅在请求失败时返回</md-td>
        </md-tr>

        <md-tr level="0">
            <md-td>
                <md-text type="field-name">error_description</md-text>
            </md-td>
            <md-td>
                <md-text type="field-type">string</md-text>
            </md-td>
            <md-td>具体的错误信息，仅在请求失败时返回</md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

### 响应体示例

成功响应示例：

```json
{
    "code": 0,
    "access_token": "eyJhbGciOiJFUzI1NiIs**********X6wrZHYKDxJkWwhdkrYg",
    "expires_in": 7200, // 非固定值，请务必根据响应体中返回的实际值来确定 access_token 的有效期
    "refresh_token": "eyJhbGciOiJFUzI1NiIs**********XXOYOZz1mfgIYHwM8ZJA",
    "refresh_token_expires_in": 604800, // 非固定值，请务必根据响应体中返回的实际值来确定 refresh_token 的有效期
    "scope": "auth:user.id:read offline_access task:task:read user_profile",
    "token_type": "Bearer"
}
```

失败响应示例：
```json
{
    "code": 20050,
    "error": "server_error",
    "error_description": "An unexpected server error occurred. Please retry your request."
}
```

### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 10%">HTTP 状态码</md-th>
            <md-th style="width: 10%">错误码</md-th>
            <md-th style="width: 35%">描述</md-th>
            <md-th style="width: 35%">排查建议</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>400</md-td>
            <md-td>20001</md-td>
            <md-td>The request is missing a required parameter.</md-td>
            <md-td>必要参数缺失，请检查请求时传入的参数是否有误</md-td>
        </md-tr>

        <md-tr>
            <md-td>400</md-td>
            <md-td>20002</md-td>
            <md-td>The client secret is invalid.</md-td>
            <md-td>应用认证失败，请检查提供的 `client_id` 与 `client_secret` 是否正确</md-td>
        </md-tr>
     
      <md-tr>
            <md-td>400</md-td>
            <md-td>20003</md-td>
            <md-td>The authorization code is not found. Please note that an authorization code can only be used once.</md-td>
            <md-td>无效的授权码，请检查授权码是否有效，注意授权码仅能使用一次</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20004</md-td>
            <md-td>The authorization code has expired.</md-td>
            <md-td>授权码已经过期，请在授权码生成后的 5 分钟内使用</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20008</md-td>
            <md-td>The user does not exist.</md-td>
            <md-td>用户不存在，请检查发起授权的用户的当前状态</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20009</md-td>
            <md-td>The specified app is not installed.</md-td>
            <md-td>租户未安装应用，请检查应用状态</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20010</md-td>
            <md-td>The user does not have permission to use this app.</md-td>
            <md-td>用户无应用使用权限，请检查发起授权的用户是否仍具有应用使用权限</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20024</md-td>
            <md-td>The provided authorization code or refresh token does not match the provided client ID.</md-td>
            <md-td>提供的授权码与 `client_id` 不匹配，请勿混用不同应用的凭证</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20036</md-td>
            <md-td>The specified grant_type is not supported.</md-td>
            <md-td>无效的 `grant_type`，请检查请求体中 `grant_type` 字段的取值</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20048</md-td>
            <md-td>The specified app does not exist.</md-td>
            <md-td>应用不存在，请检查应用状态</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20049</md-td>
            <md-td>PKCE code challenge failed.</md-td>
            <md-td>PKCE 校验失败，请检查请求体中 `code_verifier` 字段是否存在且有效</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>500</md-td>
            <md-td>20050</md-td>
            <md-td>An unexpected server error occurred. Please retry your request.</md-td>
            <md-td>内部服务错误，请稍后重试，如果持续报错请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20063</md-td>
            <md-td>The request is malformed. Please check your request.</md-td>
            <md-td>请求体中缺少必要字段，请根据具体的错误信息补齐字段</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20065</md-td>
            <md-td>The authorization code has been used. Please note that an authorization code can only be used once.</md-td>
            <md-td>授权码已被使用，授权码仅能使用一次，请检查是否有被重复使用</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20066</md-td>
            <md-td>The user status is invalid.</md-td>
            <md-td>用户状态非法，请检查发起授权的用户的当前状态</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20067</md-td>
            <md-td>The provided scope list contains duplicate scopes. Please ensure all scopes are unique.</md-td>
            <md-td>无效的 `scope` 列表，其中存在重复项，请确保传入的 `scope` 列表中没有重复项</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20068</md-td>
            <md-td>The provided scope list contains scopes that are not permitted. Please ensure all scopes are allowed.</md-td>
            <md-td>无效的 `scope` 列表，其中存在用户未授权的权限。当前接口 `scope` 参数传入的权限必须是[获取授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)时 `scope` 参数值的子集。
        
例如，在获取授权码时，用户授权了权限 A、B，则当前接口 `scope` 可传入的值只有权限 A、B，若传入权限 C 则会返回当前错误码。     
</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20069</md-td>
            <md-td>The specified app is not enabled.</md-td>
            <md-td>应用未启用，请检查应用状态</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20070</md-td>
            <md-td>Multiple authentication methods were provided. Please only use one to proceed.</md-td>
            <md-td>请求时同时使用了 `Basic Authentication` 和 `client_secret` 两种身份验证方式。请仅使用 `client_id`、`client_secret` 身份验证方式调用本接口。</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20071</md-td>
            <md-td>The provided redirect URI does not match the one used during authorization.</md-td>
            <md-td>无效的 `redirect_uri`，请确保 `redirect_uri` 与[获取授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)时传入的 `redirect_uri` 保持一致</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>503</md-td>
            <md-td>20072</md-td>
            <md-td>The server is temporarily unavailable. Please retry your request.</md-td>
            <md-td>服务暂不可用，请稍后重试</md-td>
        </md-tr>
      
    </md-tbody>
</md-table>
:::

## 代码示例
:::html
<md-alert type="warn">此处提供的代码示例**仅供参考**，请勿直接在生产环境使用
</md-alert>
:::

### Golang

运行下面示例程序的步骤：
1. 点击下方代码块右上角复制按钮，将代码复制到本地文件中，保存为 `main.go`；
2. 参照注释部分，完成配置；
3. 在 `main.go` 所在目录下新建 `.env` 文件，内容如下：
    ```bash
    APP_ID=cli_xxxxxx # 仅为示例值，请使用你的应用的 App ID，获取方式：开发者后台 -> 基础信息 -> 凭证与基础信息 -> 应用凭证 -> App ID
	APP_SECRET=xxxxxx # 仅为示例值，请使用你的应用的 App Secret，获取方式：开发者后台 -> 基础信息 -> 凭证与基础信息 -> 应用凭证 -> App Secret
    ```
4. 在 `main.go` 所在目录执行以下命令：
	```bash
    go mod init oauth-test
	go get github.com/gin-gonic/gin
	go get github.com/gin-contrib/sessions
	go get github.com/gin-contrib/sessions/cookie
	go get github.com/joho/godotenv
	go get golang.org/x/oauth2
	go run main.go
    ```
5. 浏览器打开 [http://localhost:8080](http://localhost:8080) ，按照页面提示完成授权流程；

```javascript
package main

import (
    "context"
    "encoding/json"
    "fmt"
    "log"
    "math/rand"
    "net/http"
    "os"

    "github.com/gin-contrib/sessions"
    "github.com/gin-contrib/sessions/cookie"
    "github.com/gin-gonic/gin"
    _ "github.com/joho/godotenv/autoload"
    "golang.org/x/oauth2"
)

var oauthEndpoint = oauth2.Endpoint{
    AuthURL:  "https://accounts.feishu.cn/open-apis/authen/v1/authorize",
    TokenURL: "https://open.feishu.cn/open-apis/authen/v2/oauth/token",
}

var oauthConfig = &oauth2.Config{
    ClientID:     os.Getenv("APP_ID"),
    ClientSecret: os.Getenv("APP_SECRET"),
    RedirectURL:  "http://localhost:8080/callback", // 请先添加该重定向 URL，配置路径：开发者后台 -> 开发配置 -> 安全设置 -> 重定向 URL -> 添加
    Endpoint:     oauthEndpoint,
    Scopes:       []string{"offline_access"}, // 如果你不需要 refresh_token，请注释掉该行，否则你需要先申请 offline_access 权限方可使用，配置路径：开发者后台 -> 开发配置 -> 权限管理      
}

func main() {
    r := gin.Default()

    // 使用 Cookie 存储 session
    store := cookie.NewStore([]byte("secret")) // 此处仅为示例，务必不要硬编码密钥
    r.Use(sessions.Sessions("mysession", store))

    r.GET("/", indexController)
    r.GET("/login", loginController)
    r.GET("/callback", oauthCallbackController)

    fmt.Println("Server running on http://localhost:8080")
    log.Fatal(r.Run(":8080"))
}

func indexController(c *gin.Context) {
    c.Header("Content-Type", "text/html; charset=utf-8")
    var username string
    session := sessions.Default(c)
    if session.Get("user") != nil {
       username = session.Get("user").(string)
    }
    html := fmt.Sprintf(`<html><head><style>body{font-family:Arial,sans-serif;background:#f4f4f4;margin:0;display:flex;justify-content:center;align-items:center;height:100vh}.container{text-align:center;background:#fff;padding:30px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.1)}a{padding:10px 20px;font-size:16px;color:#fff;background:#007bff;border-radius:5px;text-decoration:none;transition:0.3s}a:hover{background:#0056b3}}</style></head><body><div class="container"><h2>欢迎%s！</h2><a href="/login">使用飞书登录</a></div></body></html>`, username)
    c.String(http.StatusOK, html)
}

func loginController(c *gin.Context) {
    session := sessions.Default(c)

    // 生成随机 state 字符串，你也可以用其他有意义的信息来构建 state
    state := fmt.Sprintf("%d", rand.Int())
    // 将 state 存入 session 中
    session.Set("state", state)
    // 生成 PKCE 需要的 code verifier
    verifier := oauth2.GenerateVerifier()
    // 将 code verifier 存入 session 中
    session.Set("code_verifier", verifier)
    session.Save()

    url := oauthConfig.AuthCodeURL(state, oauth2.S256ChallengeOption(verifier))
    // 用户点击登录时，重定向到授权页面
    c.Redirect(http.StatusTemporaryRedirect, url)
}

func oauthCallbackController(c *gin.Context) {
    session := sessions.Default(c)
    ctx := context.Background()

    // 从 session 中获取 state
    expectedState := session.Get("state")
    state := c.Query("state")

    // 如果 state 不匹配，说明是 CSRF 攻击，拒绝处理
    if state != expectedState {
       log.Printf("invalid oauth state, expected '%s', got '%s'\n", expectedState, state)
       c.Redirect(http.StatusTemporaryRedirect, "/")
       return
    }

    code := c.Query("code")
    // 如果 code 为空，说明用户拒绝了授权
    if code == "" {
       log.Printf("error: %s", c.Query("error"))
       c.Redirect(http.StatusTemporaryRedirect, "/")
       return
    }
    codeVerifier, _ := session.Get("code_verifier").(string)
    // 使用获取到的 code 获取 token
    token, err := oauthConfig.Exchange(ctx, code, oauth2.VerifierOption(codeVerifier))
    if err != nil {
       log.Printf("oauthConfig.Exchange() failed with '%s'\n", err)
       c.Redirect(http.StatusTemporaryRedirect, "/")
       return
    }

    client := oauthConfig.Client(ctx, token)

    req, err := http.NewRequest("GET", "https://open.feishu.cn/open-apis/authen/v1/user_info", nil)
    if err != nil {
       log.Fatal(err)
    }
    req.Header.Set("Authorization", "Bearer "+token.AccessToken)

    // 使用 token 发起请求，获取用户信息
    resp, err := client.Do(req)
    if err != nil {
       log.Printf("client.Get() failed with '%s'\n", err)
       c.Redirect(http.StatusTemporaryRedirect, "/")
       return
    }
    defer resp.Body.Close()

    var user struct {
       Data struct {
          Name string `json:"name"`
       } `json:"data"`
    }
    if err := json.NewDecoder(resp.Body).Decode(&user); err != nil {
       log.Printf("json.NewDecoder() failed with '%s'\n", err)
       c.Redirect(http.StatusTemporaryRedirect, "/")
       return
    }
    // 后续可以用获取到的用户信息构建登录态，此处仅为示例，请勿直接使用
    session.Set("user", user.Data.Name)
    session.Save()

    c.Header("Content-Type", "text/html; charset=utf-8")
    html := fmt.Sprintf(`<html><head><style>body{font-family:Arial,sans-serif;background:#f4f4f4;margin:0;display:flex;justify-content:center;align-items:center;height:100vh}.container{text-align:center;background:#fff;padding:30px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.1)}a{padding:10px 20px;font-size:16px;color:#fff;background:#007bff;border-radius:5px;text-decoration:none;transition:0.3s}a:hover{background:#0056b3}}</style></head><body><div class="container"><h2>你好，%s！</h2><p>你已成功完成授权登录流程。</p><a href="/">返回主页</a></div></body></html>`, user.Data.Name)
    c.String(http.StatusOK, html)
}
```