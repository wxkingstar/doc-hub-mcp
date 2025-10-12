<!--
title: API 调试台使用指南
id: 7129830402051358748
fullPath: /tools-and-resources/api-explorer-guide
updatedAt: 1740983747000
source: https://open.feishu.cn/document/tools-and-sdks/api-explorer-guide
-->
# API 调试台使用指南


# 一、工具概览

API 调试台是一款一站式的、能提升接口调试效率的飞书应用开发工具。
通过 API 调试台，你无需编写代码，即可快捷完成服务端的接口调用。此外，我们提供了以下几点功能，提升你的接口调试效率：
- **自动获取鉴权凭证**：绑定你的应用一键获取 token，每次调试无需再额外发起请求获取
- **内置应用权限申请**：调通接口所需权限一目了然，无需跳转后台，调试台内快捷申请
- **接口调试** **示例代码**：提供多语言示例代码，点击复制即可快速复用至业务代码中

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/96ea605deef8b9d4ac3111b86a3e4b68_wTC28DeYWs.gif?height=510&lazyload=true&width=1100)

:::html
<md-alert type="warn">私有化环境不支持 API 调试台。</md-alert>
:::


# 二、工具入口

在飞书开放平台的 API 开发文档界面，点击“尝试一下”即可进入该接口的 API 调试台界面。你也可以收藏此链接，[点击跳转立即体验 API 调试台](https://open.feishu.cn/api-explorer?from=guide)。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5f8ca088a703b932b0145e1ef573e997_qCyqw6ihpg.png?height=1066&lazyload=true&width=1766)


# 三、功能介绍

## 绑定应用身份

首次使用 API 调试台，需要你先登录。登录后，你需要绑定一个你的应用身份，再进行调试。（如你名下没有应用，则需要先创建应用再进行调试）
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/701b9ca24aeac454f8354d05fea6e1fd_kqu6Wrk0Ko.png?height=880&lazyload=true&width=1944)
绑定后你也可以随时切换其他的应用，无需担心。通过测试企业功能，开发者创建的应用分为**正式版**和**测试版。** API 调试台支持这两种应用的调试。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bb57b6c9bc8f9c04a8e50b1cd84ce348_SKlmV2kcGI.png?height=980&lazyload=true&width=1576)
:::note
注意：调试正式版将会直接影响线上数据，我们推荐开发者[在开发者后台绑定测试应用](/ssl:ttdoc/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)，在开发阶段使用测试版本进行调试。
:::

## 一键获取鉴权凭证

要调用服务端 API，应用需要从飞书开放平台获取相应的访问凭证（access token）进行授权。

- **tenant_access_token:** 以应用身份调用 API，可读写的数据范围由应用自身的[数据权限范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)决定。了解更多参见[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。

- **user_access_token:** 以用户身份调用 API，可读写的数据范围由用户的的数据权限范围决定。了解更多参见[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。

使用访问凭证时，需要在调用接口时将其填入到 HTTP 请求的请求头参数中。每个 Open API 的接口中都声明了该接口需要的访问凭证类型和获取方式。

当你使用 API 调试台，则无需额外调用「获取租户/用户访问凭证」接口，一键点击即可获取接口所需鉴权凭证，自动填充在接口请求参数中。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5f32eef967f1fae88fa4f7af9105888c_R79XXbi7UT.png?height=674&lazyload=true&width=1878)

:::note
**注意**：访问凭证存在有效期。你可以在获取访问凭证时，通过返回的过期时间参数查看有效期，当凭证过期后需要刷新。
:::

## 发起接口调试

### 填写参数

API 调试台中，你可以在表单中填写请求头、请求体和路径参数，修改各入参的默认值发起实际的调用，来体验不同入参情况下 API 的响应。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a5675bcaca532c1785b90b424a0335a8_lf2SKuxxAJ.png?height=914&lazyload=true&width=2846)


### 配置权限

权限和**接口**能力、数据**字段**、订阅**事件**绑定。如你正在调用的接口需要的权限有缺失，API 调试台界面会有小红点报错提示，需要你及时发起申请。[应用权限概述](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)

本租户的应用管理员可以自定义租户内哪些权限需要审核，哪些权限可以免审直接生效。权限类型包括：
- **免审权限**：申请后立即生效的权限，这类权限不需要管理员审核。
- **需审核权限**：申请后，需要创建应用版本并提交审核，由管理员审核通过才可生效。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe10e4de35b63e9970e466c3237c62cc_oJxU7Rnq7Q.png?height=808&lazyload=true&width=2842)


### 发起调试

完成参数配置后，点击「开始调试」，即可查看调试结果。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/12d12ee29156c13d992c4c1a7638f4ee_hbvrkvs3MB.png?height=1048&lazyload=true&width=2716)
如调试失败，你可以查阅 API 文档自助排查问题，或复制 log ID 后联系技术支持进行问题排查。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/029430f7682a3e9baccff6b4c0af9b9d_hD1OeDbfTj.png?height=812&lazyload=true&width=2064)


## 查看调用历史

按照应用身份维度，API 调试台存储展示了你最近 30 天的调用历史。如果你需要调用一批相关接口，可以通过查阅调用历史、复用历史调用参数，也可以使用之前的调用参数来重新发起调试。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2700857cfb8e79a5c4687c3b46df4728_Ps0361ZCc1.png?height=1868&lazyload=true&width=3360)


## 复用示例代码

在编辑完请求参数后，API 调试台会根据你输入的请求参数实时生成多语言调用示例，开发者可以直接一键拷贝示例代码，复用到自己的业务代码中。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c7304c81ca4591e54dd12b3b051abcd9_J4a3nUrwDQ.png?height=792&lazyload=true&width=2230)


# 四、反馈建议

如你在调试过程中，对 API 接口或工具本身有任何产品建议和反馈，欢迎点击链接加入[「飞书开发者互助交流群」](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=759h4ba1-2893-439f-9be9-502724582e76)发帖。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3f3b7d4e0f89422b39232eee6e107bf0_Qk5UFqfTDw.png?height=380&lazyload=true&width=1440)
你也可以通过 API 调试台的反馈界面，随时向我们反馈你的使用体验。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/73c69ae9f11198d2c8f7a4a5127da54c_KOHu0tVlvi.png?height=1022&lazyload=true&width=1568)