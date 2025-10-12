<!--
title: 配置重定向 URL
id: 6907569745299783682
fullPath: /uYjL24iN/uYjN3QjL2YzN04iN2cDN
updatedAt: 1732693615000
source: https://open.feishu.cn/document/develop-web-apps/configure-redirect-urls
-->
# 配置重定向 URL

在开发网页应用的用户登录操作时，开放平台会通过 [OAuth 2.0 协议](https://oauth.net/2/)授权用户登录并向应用后台提供用户的资源和信息。在授权登录过程中，开放平台会对网页进行安全校验，只有配置在应用重定向 URL 列表内的网页地址可以通过安全校验。通过本文你可以了解应用需要配置重定向 URL 的场景，以及如何配置重定向 URL。

## 应用场景

当你在开发网页应用时，如果涉及以下开发场景，则需要配置应用的重定向 URL。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:40%">场景</md-th>
<md-th style="width:60%">具体说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>
应用服务端需要使用用户访问凭证 [user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token) 调用开放平台服务端 OpenAPI
</md-td>
<md-td>
开发应用时如果需要使用用户访问凭证 user_access_token 调用服务端 OpenAPI，则需要先[获取授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)，然后再[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)，其中，在获取授权码时，必须传入 `redirect_uri` 参数，即应用重定向地址。该过程具体说明如下：

1. 向 **获取授权码** API 的请求地址发送请求时，会加载授权登录页面，用户需要在该页面内点击完成授权。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/755abfeef052394eea29f0365aeb5e28_WC2hfJI4CU.png?height=1004&lazyload=true&width=1264)

2. 用户授权后，页面会自动重定向跳转到预设好的 `redirect_uri` 地址，并在 URL 的 Query 参数中携带开放平台下发的登录预授权码 `code`。
  
```http
# 获取登录预授权码的示例URL如下，其中，{redirect_uri} 为实际的重定向 URL，code 的值为登录预授权码。
https://{redirect_uri}?code=1yxlUSU8Rf+7B32HY3HR7g
```
  
<md-alert type="tip" icon="none">
**说明**：你可以在网页应用中构建一个回调页面，将 `redirect_uri` 设置为该回调页面。当用户授权登录后，前端页面会自动重定向至回调页面，同时页面将获取到的 `code` 传入应用后端，然后基于 `code` 获取 `user_access_token` 并调用相关 API 来获取业务所需数据。
</md-alert>
  
在以上操作过程中，为了确保你的应用可以成功进行重定向跳转，并且获取到登录预授权码 `code`，你必须将 `redirect_uri` 参数值同步设置为应用的 **重定向 URL**（设置方式参考下文 **操作步骤** 章节）。只有在该 **重定向 URL** 列表内的 URL 会通过开放平台的安全校验，并允许页面重定向跳转。
  
不在 **重定向 URL** 列表内的 URL，如果进行用户授权登录操作，则会重定向到失败页面：
  
```json
{
    code: 2000,
    message: "redirect_uri unmatch"
}
```
</md-td>
</md-tr>

<md-tr>
<md-td>
应用前端页面需要调用开放平台客户端的 [requestAccess](/ssl:ttdoc/uYjL24iN/uUzMuUzMuUzM/requestaccess) API 获取临时登录凭证 `code`
</md-td>
<md-td>
在开发应用时，如果应用的前端页面需要调用客户端的 [requestAccess](/ssl:ttdoc/uYjL24iN/uUzMuUzMuUzM/requestaccess) API 获取临时登录凭证 `code`，则需要将该页面地址设置为应用的 **重定向 URL**（设置方式参考下文 **操作步骤** 章节）。因为，对于任何需要调用 **tt.requestAccess** API 获取临时登录凭证 `code` 的前端页面，开放平台都会校验应用访问该页面的合法性，只有在应用 **重定向 URL** 列表内的地址可以通过安全校验，并成功获取到 `code`。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 操作步骤

1. 登录[开发者后台](https://open.feishu.cn/app)。
2. 选择进入需要配置重定向 URL 的应用详情页。
3. 在左侧导航栏点击 **安全设置**。
4. 在 **重定向 URL** 区域，输入 URL 并点击 **添加**。

	**说明**：一个应用内，最多可以添加 300 个重定向 URL。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/339f48a420bd776cfa15b7ad8eb8f1b2_nTQ2EXVkm6.png?height=417&lazyload=true&maxWidth=600&width=1280)
    
## 常见问题
    
### URL 包含 “?” 或 “#” 后缀时，如何设置重定向 URL？

[开发者后台](https://open.feishu.cn/app)的应用重定向 URL 列表内需要包含完整路径，如果路径后有 `?` 或者 `#` 后缀，可以不包含在重定向 URL 中。

**原因说明**：在应用的重定向 URL 列表内配置的 URL，`?` 或 `#` 后缀不会生效。例如，`http://www.example.com/#/index` 作为重定向 URL 时，实际生效的 URL 为 `http://www.example.com`。

**场景示例**：

- 调用[获取授权登录授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)接口时，`redirect_uri` 参数设置为 `http://www.example.com/#/index`，对应在开发者后台的应用重定向 URL 列表中添加 `http://www.example.com` 即可。
- 如果是客户端调用 [requestAccess](/ssl:ttdoc/uYjL24iN/uUzMuUzMuUzM/requestaccess) 获取临时登录凭证 code，建议在当前页面调用 `window.location.href.split('?')[0].split('#')[0]` 来获取重定向 URL。

### 是否支持配置动态路由下的 URL？

不支持。