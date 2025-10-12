<!--
title: 刷新 user_access_token
id: 7435312925587898371
fullPath: /uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token
updatedAt: 1750847835000
source: https://open.feishu.cn/document/authentication-management/access-token/refresh-user-access-token
-->
# 刷新 user_access_token

:::html
OAuth 令牌接口，可用于刷新 <code>user_access_token</code> 以及获取新的 <code>refresh_token</code>。
:::

- `user_access_token` 为用户访问凭证，使用该凭证可以以用户身份调用 OpenAPI，该凭证存在有效期，可通过 `refresh_token` 进行刷新。
- 用户授权时，用户必须拥有[应用的使用权限](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)，否则调用本接口将会报错误码 20010。
- `refresh_token` 用于获取新的 `user_access_token`，且仅能使用一次。在获取新的 `user_access_token` 时会返回新的 `refresh_token`，原 `refresh_token` 立即失效。

- 首次获取 `refresh_token` 的方式参见[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)。

:::html
<md-alert type="tip">
  本接口实现遵循 [RFC 6749 - The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749) ，你可以使用[标准的 OAuth 客户端库](https://oauth.net/code/)进行接入（**推荐**）
</md-alert>
:::

## 前置工作
### 开通 offline_access 权限
获取 `refresh_token` 需前往开放平台应用后台的**权限管理**模块开通 `offline_access` 权限，并在[发起授权](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)时在 `scope` 参数中声明该权限。

![开通 offline_access 权限.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f8b75edae2c682ab98b6984170707a64_gYt5eNq84a.png?height=703&lazyload=true&width=1867)

在开通 `offline_access` 权限后，如需获取 `refresh_token`，具体的请求参数设置如下：
1. 首先在[发起授权](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)时，授权链接的`scope` 参数中必须拼接 `offline_access`，例如：
```
https://accounts.feishu.cn/open-apis/authen/v1/authorize?client_id=cli_a5d611352af9d00b&redirect_uri=https%3A%2F%2Fexample.com%2Fapi%2Foauth%2Fcallback&scope=bitable:app:readonly%20offline_access
```
2. 在[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)时，
	+ 如果不需要缩减权限，即该接口的 `scope` 参数为空，则无需做其他操作，即可正常获得 `refresh_token`；
	+ 如果需要缩减权限，即该接口的 `scope` 参数不为空，
		+ 且需要获取 `refresh_token`，则此处的 `scope` 参数中需要拼接 `offline_access`；
		+ 如不需要获取 `refresh_token`，则无需特殊处理；
3. 在[刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)时，同第二步的逻辑。

### 开启刷新 user_access_token 的安全设置
:::html
<md-alert type="tip">
- 如果你看不到此开关则无需关注，其默认处于开启状态。
- 完成配置后需要发布应用使配置生效。具体操作参见[发布企业自建应用](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process#baf09c7d)、[发布商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYjMyUjL2IjM14iNyITN)。
</md-alert>
:::

前往开放平台应用后台的**安全设置**模块，打开刷新 `user_access_token` 的开关。


![开启刷新 user_access_token 的安全设置.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/194824525c33e70cd796579744571c2d_WbBjYQW3zR.png?height=796&lazyload=true&width=1907)

## 请求

:::html
<md-alert type="warn">
  为了避免刷新 `user_access_token` 的行为被滥用，在用户授权应用 365 天后，应用必须通过用户[重新授权](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)的方式来获取 `user_access_token` 与 `refresh_token`。如果 `refresh_token` 到期后继续刷新`user_access_token`将报错（错误码为 20037），可参考以下[错误码描述信息](#错误码)进行处理。
</md-alert>
:::

:::html
<md-alert type="warn">
  刷新后请更新本地 `user_access_token` 和 `refresh_token`，原令牌将无法再使用（`user_access_token` 会有一分钟的豁免时间以供应用完成令牌轮转）。
</md-alert>
:::

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
      <md-td> 无</md-td>
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

**固定值：**`refresh_token`
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
应用的 App ID，可以在开发者后台中的应用详情页面找到该值。

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
应用的 App Secret，可以在开发者后台中的应用详情页面找到该值，详见：[如何获取应用的 App ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-app-id)。

**示例值：**`baBqE5um9LbFGDy3X7LcfxQX1sqpXlwy`
      </md-td>
    </md-tr>

    <md-tr level="0">
      <md-td>
        <md-text type="field-name">refresh_token</md-text>
      </md-td>
      <md-td>
        <md-text type="field-type">string</md-text>
      </md-td>
      <md-td> 是</md-td>
      <md-td>
刷新令牌，用于刷新 `user_access_token` 以及 `refresh_token`。

<md-alert type="warn">请务必注意本接口仅支持[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)和[刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token)接口返回的 `refresh_token`</md-alert>

**示例值：**`eyJhbGciOiJFUzI1NiIs**********XXOYOZz1mfgIYHwM8ZJA`
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
该参数用于缩减 `user_access_token` 的权限范围。
              
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
    "grant_type": "refresh_token",
    "client_id": "cli_a5ca35a685b0x26e",
    "client_secret": "baBqE5um9LbFGDy3X7LcfxQX1sqpXlwy",
    "refresh_token": "eyJhbGciOiJFUzI1NiIs**********XXOYOZz1mfgIYHwM8ZJA"
}
```
## 响应
响应体类型为 `application/json; charset=utf-8`。

### 响应体

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
        错误码，为 0 时表明请求成功，非 0 表示失败，请参照下文错误码一节妥善处理
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
用于刷新 `user_access_token`，该字段仅在请求成功且用户授予 `offline_access` 权限时返回：

<md-perm name="offline_access" desc="离线访问已授权数据" support_app_types="custom,isv">offline_access</md-perm>
        
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
        
<md-alert type="tip">建议在到期前重新调用当前接口获取新的 `refresh_token`。</md-alert> 
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
    "refresh_token": "eyJhbGciOiJFUzI1NiIs**********VXOYOZYZmfgIYHWM0ZJA",
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
            <md-td>应用认证失败，请检查提供的 `client_id` 与 `client_secret` 是否正确。获取方式参见 [如何获取应用的 App ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-app-id)。</md-td>
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
            <md-td>提供的 `refresh_token` 与 `client_id` 不匹配，请勿混用不同应用的凭证</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20026</md-td>
            <md-td>The refresh token passed is invalid. Please check the value.</md-td>
            <md-td>
请检查请求体中 `refresh_token` 字段的取值
              
请注意本接口仅支持 v2 版本接口下发的 `refresh_token`
        </md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20036</md-td>
            <md-td>The specified grant_type is not supported.</md-td>
            <md-td>无效的 `grant_type`，请检查请求体中 `grant_type` 字段的取值</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20037</md-td>
            <md-td>The refresh token passed has expired. Please generate a new one.</md-td>
            <md-td>`refresh_token` 已过期，请[重新发起授权流程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)以获取新的 `refresh_token`</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20048</md-td>
            <md-td>The specified app does not exist.</md-td>
            <md-td>应用不存在，请检查应用状态</md-td>
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
            <md-td>20064</md-td>
            <md-td>The refresh token has been revoked. Please note that a refresh token can only be used once.</md-td>
            <md-td>`refresh_token` 已被撤销，请[重新发起授权流程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)以获取新的 `refresh_token`</md-td>
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
        
例如，在获取授权码时，用户授权了权限 A、B，则当前接口 `scope` 可传入的值只有权限 A、B，若传入权限 C 则会返回当前错误码。 </md-td>
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
            <md-td>503</md-td>
            <md-td>20072</md-td>
            <md-td>The server is temporarily unavailable. Please retry your request.</md-td>
            <md-td>服务暂不可用，请稍后重试</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20073</md-td>
            <md-td>The refresh token has been used. Please note that a refresh token can only be used once.</md-td>
            <md-td>请[重新发起授权流程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)以获取新的 `refresh_token`</md-td>
        </md-tr>
      
      <md-tr>
            <md-td>400</md-td>
            <md-td>20074</md-td>
            <md-td>The specified app is not allowed to refresh token.</md-td>
            <md-td>请在应用管理后台检查是否开启了刷新 `user_access_token` 开关，注意发版后生效</md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::
