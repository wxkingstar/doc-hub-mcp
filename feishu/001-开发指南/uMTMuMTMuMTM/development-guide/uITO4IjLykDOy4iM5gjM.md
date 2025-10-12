<!--
title: 网页应用开发指南概述
id: 6907569744330539009
fullPath: /uYjL24iN/uITO4IjLykDOy4iM5gjM
updatedAt: 1731565888000
source: https://open.feishu.cn/document/client-docs/h5/development-guide/basic-concepts
-->
# 概述

在网页应用开发指南中，将介绍通过飞书开放平台开发网页应用的全流程。在正式开发之前，建议你先通过本文了解应用相关概念，以及指南的操作流程。

## 基本概念

在开发网页应用时，可能涉及到的基本概念如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">属性</md-th>
<md-th style="width:75%">类型</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>鉴权</md-td>
<md-td>当你调用[开放平台客户端 API（JSAPI）](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/)时，飞书为了数据安全，需要先验证网页应用有权限访问的 JSAPI 范围，该过程称为鉴权。</md-td>
</md-tr>

<md-tr>
<md-td>免登</md-td>
<md-td>免登是指飞书用户在客户端内进入网页应用后，无需输入飞书用户名和密码，网页应用便可自动获取当前用户身份，进而登录系统的流程。</md-td>
</md-tr>

<md-tr>
<md-td>JSSDK</md-td>
<md-td>飞书客户端 JSSDK 是飞书面向客户端网页开发者（接入方）提供的网页开发工具包，仅可用在飞书客户端内。</md-td>
</md-tr>

<md-tr>
<md-td>access_token</md-td>
<md-td>access_token 是带有授权的飞书开放平台访问凭证，该访问凭证代表应用从平台、租户（指公司或者团队）、用户手中获得的授权。如需调用飞书服务端 API，则网页应用需要从飞书开放平台获取相应的访问凭证（access token）。开放平台提供了 3 种不同类型的访问凭证，分别为应用授权凭证 app_access_token、租户授权凭证 tenant_access_token、用户授权凭证 user_access_token，用于验证调用方身份、确保调用方具有执行操作所需要的权限。关于凭证的更多说明，可参见[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。</md-td>
</md-tr>

<md-tr>
<md-td>jsapi_ticket</md-td>
<md-td>`jsapi_ticket`代表网页应用调用飞书 JSAPI 的临时凭证，是实现鉴权校验的重要数据。
鉴权方式：对比接入方服务端依据`jsapi_ticket`等数据生成的签名，与认证中心依据`jsapi_ticket`等数据生成的签名，若两个签名相等即为鉴权成功。</md-td>
</md-tr>

<md-tr>
<md-td>签名</md-td>
<md-td>签名是用于 JSSDK 权限验证的一段密文。为了防止数据泄露，会对`jsapi_ticket`、网页 URL 等参数拼接成字符串`verifyStr`，并用 sha1 数据加密算法对`verifyStr`进行加密，得到的密文就是签名`signature`。</md-td>
</md-tr>

<md-tr>
<md-td>URL</md-td>
<md-td>URL 的标准格式：`[传送协议 Schema]://[域名 Domain]:[端口号 Port]/[路径 Path][文件名]?[查询 query]#[片段 ID]`，其中`端口号`、`[查询]`、`[片段 ID]`都属于选填项。如下图所示：
  
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/35c7184c84281502cc08795beb7c8328_EF7slaaFfx.png?height=174&lazyload=true&width=1714)

- `https` 是 HTTPS 安全传输协议。
- `www.example.com` 是域名，表明正在请求哪个 Web 服务器，也可以直接使用 IP 地址。
- `:443` 是端口，如果 Web 服务器使用 HTTP 协议的标准端口（HTTP 为 80，HTTPS 为 443）来授予其资源的访问权限，则通常会被忽略，否则是强制性的。
- `/path/to/myfile.html` 是网络服务器上资源的路径。
- `?key1=value1&key2=value2` 是提供给网络服务器的额外参数。
- `#SomewhereInTheDocument` 打开页面时滚动到该锚点位置。 </md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 角色说明

在开发网页应用的过程中涉及的角色说明。

### 接入方

即网页应用的开发者，开发过程中涉及以下端或平台：
- 接入方前端：需要接入飞书网页应用中负责与用户交互的部分，通常用浏览器支持的语言（例如 JavaScript 和 HTML）编写。
- 接入方服务端：需要接入飞书网页应用中负责存储数据资源、处理业务逻辑、响应前端请求的部分。
- 开发者后台：对于想要为自己的企业开发自建应用，或者上架应用至飞书应用目录的用户，飞书开放平台提供了[应用创建与配置后台](https://open.feishu.cn/app/)。

### 飞书

- 飞书客户端：飞书侧承载网页应用的客户端。它能支持你的网页应用调用手机系统功能和飞书客户端功能（例如，扫一扫、云文档等），且支持性能优化，使你的网页应用体验能够接近原生体验。
- 认证中心：飞书侧负责认证网页应用身份和权限的服务端。

## 操作导航

本指南提供的操作步骤如下：

- [步骤一：创建并配置自建应用](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/development-guide/step1)
- [步骤二（可选）：鉴权并调用 JSAPI](/ssl:ttdoc/uYjL24iN/uEzM4YjLxMDO24SMzgjN)
- [步骤三（可选）：配置应用免登流程](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/development-guide/step-3)
- [步骤四：应用的发布与使用](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/development-guide/step-4)

其中，步骤一、四是开发网页应用的必要步骤。在实际开发过程中，你需要根据实际业务情况，自行开发网页应用的前后端代码。本指南提供了以下示例场景供你参考：

- 如果你的网页应用前端需要调用[H5 JSAPI](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/) 实现业务功能，则可参见[步骤二（可选）：鉴权并调用 JSAPI](/ssl:ttdoc/uYjL24iN/uEzM4YjLxMDO24SMzgjN)进行配置与开发。
- 如果你的网页应用需要获取客户端已登录用户的信息，或是辨认用户身份（获取用户唯一标识符），进而实现应用免登，则可参见[步骤三（可选）：配置应用免登流程](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/development-guide/step-3)。