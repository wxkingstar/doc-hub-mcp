---
title: "快速调用服务端 API（创建一个多维表格）"
source_url: https://open.feishu.cn/document/introduction-2
---
最后更新于 2025-03-07

# 快速调用一个服务端 API（创建多维表格）

本新手教程以调用[创建多维表格](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)接口为示例，手把手帮助新手开发者成功调用一个服务端 API。通过本教程，你将对应用的访问凭证（access_token）、API 权限等基础概念有初步理解。

## 实现效果

应用将以用户身份（user_access_token）和应用身份（tenant_access_token）分别创建一个多维表格：

- 应用以用户身份创建的多维表格，所有权属于用户，用户可继续编辑、管理该多维表格：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4deb2b8360bfaa0ba6326600ebaa29f5_kYkotAK8CP.png?height=814&lazyload=true&maxWidth=600&width=1920)
- 应用以该应用身份创建的多维表格，所有权属于应用，当前用户仅拥有该表格的阅读权限：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f7e2751aa3101f96a6d838e45d2f0073_wLNBp1Iaw2.png?height=793&lazyload=true&maxWidth=600&width=1895)

## 所需配置

配置项 | 所需配置/接口
--- | ---
应用能力 | 无
API 权限 | 创建多维表格(base:app:create)
接口 | [创建多维表格](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)

## 开发步骤

### 步骤一：查看接口文档，了解参数

1. 前往 [飞书开发文档-服务端 API](https://open.feishu.cn/document/ukTMukTMukTM/uITNz4iM1MjLyUzM)，通过搜索等方式找到创建多维表格 API 的接口文档并查看参数描述。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/6fdf0e58f906f539230171a1825dae41_xe5YEZSc66.png?height=778&lazyload=true&maxWidth=600&width=1895)

### 步骤二：创建一个用于创建多维表格的应用

1. 在[创建多维表格](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)文档页面，点击右侧 **创建应用** 按钮，进入开发者后台。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/bc406bce6154c3f60a7397b426948934_qpKAxtDQqh.png?height=788&lazyload=true&maxWidth=600&width=1875)

1. 在开发者后台首页，单击 **创建企业自建应用**，并填写应用名称和应用描述，最后单击 **创建**。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/99c96a2da0c1b87b8cb3a45d389a910f_qIvY3KF7hv.png?height=673&lazyload=true&maxWidth=600&width=1571)

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/77bac23023c88317f8c116c05dda0086_8gydxp1k4S.png?height=776&lazyload=true&maxWidth=400&width=789)

### 步骤三：为应用开通创建多维表格所需的 API 权限

要使应用调用接口，需要为应用开通调用该接口所需的 [API 权限](https://open.feishu.cn/document/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。本步骤指导你在 API 调试台直接开通权限。

1. 参考[创建多维表格](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create) API 文档，在右侧调试台 **权限配置** 页签下，勾选 **创建多维表格** 权限，然后点击 **批量开通**。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/78f4247caa4083fd5c49dffd434b1e63_PqBVHZ5tUt.png?height=774&lazyload=true&maxWidth=600&width=1873)
1. 在 **提示** 弹窗中，根据不同提示操作：

场景 | 若弹窗提示权限为免审权限 | 若弹窗提示使用 tenant_access_token 调用接口时，权限需要审核
--- | --- | ---
操作 | 单击 **确认** 即可，应用无需发布即可生效。  
  ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/1c08282e8b08a66fd9361069acdcfc6a_4cNotVKlDg.png?height=344&lazyload=true&maxWidth=300&width=804) | - **选择 1（推荐）** ：自行[创建一个新的企业](https://www.feishu.cn/hc/zh-CN/articles/360043741453-%E5%88%9B%E5%BB%BA%E4%BC%81%E4%B8%9A)，在新企业中创建应用、添加权限，实现权限免审。  
 -  **选择 2**：单击 **确认**，仅体验通过用户身份 `user_access_token` 调用 API，不体验通过应用身份 `tenant_access_token` 调用 API。     
 - **选择 3**：单击 **确认并前往创建应用版本** 进入版本详情布页面，填写应用版本号、更新说明，确定应用可见范围（默认即可），然后发布应用，等待审核通过。  
    ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4681fcac64efa797f12139b75a155e7c_ZX59NXM6Mj.png?height=409&lazyload=true&maxWidth=300&width=804)  
   提示：[应用可用范围](https://open.feishu.cn/document/home/introduction-to-scope-and-authorization/availability)定义了哪些人可以使用该应用。默认为应用创建者。

### 步骤四：调用创建多维表格 API

为应用开通 API 权限后，你可以直接在调试台发起 API 调用，或者通过 cURL 请求、SDK 等方式调用接口。

#### **方式 1：在调试台发起 API 调用**

##### **以用户身份调用 API**

1. 在 [创建多维表格](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create) API 文档页面右侧的调试台窗口，确保当前 Authorization 输入框中为 `user_access_token`，表示应用将以用户身份调用接口。
1. 点击 **获取** **Token**，为应用获取其鉴权时用户的[访问凭证](https://open.feishu.cn/document/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/5cc67c125a6303b1c94a2cb9043735ca_mxpP6Gv7HY.png?height=358&lazyload=true&maxWidth=400&width=687)

1. 在弹窗中，点击 **确认添加**，以获取[用户授权](https://open.feishu.cn/document/common-capabilities/sso/end-user-consent-overview)。若出现 20029 错误码，点击 **刷新重试** 即可，确保 user_access_token 已生成。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/9cc858a77804eacc03fb6d4cdb739c4a_KRu5ADKDTI.png?height=294&lazyload=true&maxWidth=400&width=551)

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/cfc255fb6ba2d338ef88d4cbc9b84990_PT8HqcZiTE.png?height=454&lazyload=true&maxWidth=400&width=804)
1. 在请求体中，删去文件夹 token 的示例值，即把 `folder_token` 设置为空，表示在根目录下创建一个多维表格。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/61c8a8e661ff4d00cbb0c4ed5fb1a446_p53W9cdKsO.png?height=703&lazyload=true&maxWidth=400&width=691)
1. 点击 **开始调试**，若调用成功，调试台将返回成功的响应体示例。你可在响应体示例中打开 `url` 参数对应的链接，查看该多维表格。具体参数描述可在接口文档中查看。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/0781e843a28571b7930d3d142af49387_NK8fADxwIk.png?height=703&lazyload=true&maxWidth=400&width=677)

在本小节中，由于应用使用 `user_access_token` 调用了接口，因此该多维表格由应用代表登录用户创建，其所有权属于用户，用户可继续编辑、管理该多维表格。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4deb2b8360bfaa0ba6326600ebaa29f5_mB7PvH27B6.png?height=814&lazyload=true&maxWidth=600&width=1920)

1. 开放平台提供了统一的 Go、Java、Python 和 Node.js 语言的服务端 SDK 及其[使用指南](https://open.feishu.cn/document/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)和代码示例。参考上述步骤填入参数并调试成功后，你可在 API 调试台 **示例代码** 处复制 API 调试台自动生成的示例代码，并查看使用说明。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/6a5094b957d56710c5e31005d5400b8d_uxmZfMKn2h.png?height=701&lazyload=true&maxWidth=400&width=694)
##### **以应用身份调用 API**

1. 在 [创建多维表格](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create) API 文档页面右侧的调试台窗口，将当前 Token 输入框的身份切换为 `tenant_access_token`，表示应用将以应用身份调用接口。
1. 点击 **获取** **Token**，为应用获取其鉴权时用户的[访问凭证](https://open.feishu.cn/document/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/400cc7b947f29fde68e8a7ecdc5ff280_0fUVegaCzJ.png?height=355&lazyload=true&maxWidth=400&width=690)
1. 删去文件夹 token 的示例值，即把 `folder_token` 设置为空，表示在根目录下创建一个多维表格。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/566a77143c0944e636f6a466be1ee04c_WroRIo5vdx.png?height=695&lazyload=true&maxWidth=400&width=676)
1. 点击 **开始调试**，若调用成功，调试台将返回成功的响应体示例。你可在响应体示例中打开 `url` 参数对应的链接，查看该多维表格。具体参数描述可在接口文档中查看。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/0781e843a28571b7930d3d142af49387_RqgMIzIJdU.png?height=703&lazyload=true&maxWidth=400&width=677)

在本小节中，由于应用使用 `tenant_access_token` 调用了接口，因此该多维表格由应用代表应用身份创建，其所有权属于应用，当前用户仅拥有该表格的阅读权限，无法编辑与管理。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f7e2751aa3101f96a6d838e45d2f0073_MwHpgqKdJ0.png?height=793&lazyload=true&maxWidth=600&width=1895)

1. 开放平台提供了统一的 Go、Java、Python 和 Node.js 语言的服务端 SDK 及其[使用指南](https://open.feishu.cn/document/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)和代码示例。参考上述步骤填入参数并调试成功后，你可在 API 调试台 **示例代码** 处复制 API 调试台自动生成的示例代码，并查看使用说明。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/6a5094b957d56710c5e31005d5400b8d_uxmZfMKn2h.png?height=701&lazyload=true&maxWidth=400&width=694)

#### **方式 2：本地发送 cURL 请求**

参考方式一在 API 调试台填写好参数后，API 调试台将自动为你生成对应的示例代码。你可以直接在 **示例代码** 页签下复制 cURL 示例代码：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/bb9623ee3e77e494f77e76c9e4a1d25b_FyDfzaOw4q.png?height=778&lazyload=true&maxWidth=600&width=1920)

- 如果你使用的是 Mac 操作系统，打开本地终端（Terminal），即可运行刚刚复制的代码；
- 如果你使用的是 Windows 操作系统，你需先将复制的 cURL 代码转为如下 Windows 命令行支持的版本，再打开本地的命令提示符（cmd）运行：

```json
  curl -i -X POST "https://open.feishu.cn/open-apis/bitable/v1/apps" ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer t-g104bqltJXVGBPIKP3BVOPZBHQLMBLW4QDHIU3LS" ^
  -d "{\"folder_token\": \"\", \"name\": \"一篇新的多维表格\"}"
  ```

若调用成功，接口将返回成功的响应体示例，你可打开 `url` 参数对应的链接，查看该多维表格。具体参数描述可在接口文档中查看。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/a6006440ff3419e36f755c7d0f0cb24a_DVow6L31cA.png?height=927&lazyload=true&maxWidth=600&width=1734)

## 错误排查与分析

若调用接口时遇到报错，你可通过以下方式自助分析与解决。

### 方式 1 ：在 API 调试台参考智能助手的报错信息分析

若在 API 调试台调试接口报错，你可将你的请求参数授权给 AI 智能助手，查看具体错误原因；也可复制 Log ID 至搜索框查看排查建议。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/128f79e03a3e29a3a882c8a21b29a546_MJCq5EV07T.gif?height=872&lazyload=true&width=1914)

### 方式 2 ：在开发者后台中检索日志分析

要进一步分析了解近 7 日内调用的 API 情况，包括包含请求时长、请求 URL、请求返回错误码、错误信息等，你可前往开发者后台检索。具体步骤如下所示：

1. 前往 [开发者后台](https://open.feishu.cn/app) ，找到指定应用并进入应用详情页。
1. 在左侧导航栏，选择 **运营监控** > **日志检索**。
3. 在 **服务端日志检索** 页签内，配置查询参数，检索应用调用服务端 API 的日志数据。详情参考[日志检索](https://open.feishu.cn/document/tools-and-resources/open-api-log-query)。

## 了解更多

了解如何通过应用发送消息，可参考[如何调用一个服务端 API（以发送消息接口为例）](https://open.feishu.cn/document/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/how-to-call-a-server-side-api/introduction)。
