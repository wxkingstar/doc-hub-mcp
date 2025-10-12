<!--
title: 服务端 SDK 概述
id: 6907568030018502658
fullPath: /ukTMukTMukTM/uETO1YjLxkTN24SM5UjN
updatedAt: 1739158187000
source: https://open.feishu.cn/document/server-docs/server-side-sdk
-->
# 服务端 SDK 概述

飞书开放平台提供了一系列服务端的原子 API 来实现多元化的功能，但在实际编码过程中，需要考虑一些额外的工作，如访问凭证（access token）的获取与维护、数据加解密、请求验签等。此外，缺少函数调用的语义化描述、类型系统的支持，也会增加编码负担。

为解决以上问题，飞书开放平台提供了服务端 SDK，将所有冗长的逻辑内置处理，支持完备的类型系统，对外提供语义化的编程接口，以提高实际的编码体验。

SDK 提供的主要能力包括：

- SDK 支持 **基于长连接的事件回调**，详情见[配置事件订阅方式](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case#d286cc88)、[配置回调订阅方式](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/configure-callback-request-address)。

- SDK 提供了 **结构化的 API 请求入参**。比如发消息 API，SDK 对各种类型的消息都提供了结构化封装。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f8a5610ed5dd8747cb04cf14b5476393_gsDZwiiCrT.png?height=478&lazyload=true&maxWidth=700&width=1482)


- SDK 提供了 **完整的应用访问凭证（tenant_access_token）生命周期管理能力**，无需开发者自己获取并刷新应用身份的访问凭证。

	:::note
    SDK 仅支持托管应用身份的访问凭证（tenant_access_token），不支持托管用户身份的访问凭证（user_access_token），开发者需自行实现相关逻辑，参考 [获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token) 、[刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token) 。
	:::
    
- SDK 内 API 和事件上都添加了文字注释，以及跳转到使用 Demo 和官方文档的链接。
	
  ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/df059a6dd0162bba2f73191c209de3a3_dYUXHerJIy.png?height=714&lazyload=true&maxWidth=700&width=2118)
  
- SDK 提供了简洁易懂的帮助文档。参考 SDK 文档可帮助你了解如何安装 SDK、如何通过 SDK 调用服务端 API、处理订阅的事件及回调。
    - [ Java 开发指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations)
    - [Python 开发指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development)
    - [Go 开发指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations)
    - [NodeJS 开发指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/preparation-before-development)
    - [SDK 常见问题](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/faq)
    
    
## 源码地址

你可以进入 GitHub 项目空间查看源码详情。在使用 SDK 的过程中，如果遇到问题，可以给我们提交 Issue。


**GitHub 项目**                                               | **Issues**                                                  | **场景示例** | **语言**       |
| ----------------------------------------------------------- | ----------------------------------------------------------- | -------- | ------------ |
| [oapi-sdk-go](https://github.com/larksuite/oapi-sdk-go)     | [Issues](https://github.com/larksuite/oapi-sdk-go/issues)   | [oapi-sdk-go-demo](https://github.com/larksuite/oapi-sdk-go-demo)        | Golang >= 1.5 |
| [oapi-sdk-python](https://github.com/larksuite/oapi-sdk-python) | [Issues](https://github.com/larksuite/oapi-sdk-python/issues) | [oapi-sdk-python-demo](https://github.com/larksuite/oapi-sdk-python-demo)      | Python >= 3.8    |
| [oapi-sdk-java](https://github.com/larksuite/oapi-sdk-java) | [Issues](https://github.com/larksuite/oapi-sdk-java/issues) | [oapi-sdk-java-demo](https://github.com/larksuite/oapi-sdk-java-demo)      | Java >= 1.8    |
| [oapi-sdk-nodejs](https://github.com/larksuite/node-sdk)    | [Issues](https://github.com/larksuite/node-sdk/issues)      | -   | NodeJS >= 10.0.0 


## SDK 问题交流群


| Java SDK 交流群       | Python SDK 交流群           | Go SDK 交流群         | 
| --------- | --------------- | -------   | 
|[单击此处](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=a53jb5f6-87de-4974-9ad6-8a88563d0e89)或扫码加入 SDK 交流群。<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6715ef101de19f6b3268c2c6865fef7d_J8znWEWfVm.png?height=243&lazyload=true&maxWidth=150&width=242) | [单击此处](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=575k28fa-2c12-400a-80c0-2d8924e00d38)或扫码加入 SDK 交流群。<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/25f6ee1bca77228a74667873448e37fd_Q7u0LgpwSc.png?height=748&lazyload=true&maxWidth=150&width=758) | [单击此处](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=21cn476d-b859-4c15-9048-5ecf49f1a951)或扫码加入 SDK 交流群。<br>![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f4bdf852c25c8d7686ed9f0492e69dda_PbL2cQgY8U.png?height=284&lazyload=true&maxWidth=150&width=286) | 

NodeJS SDK 问题可直接提交[Issues](https://github.com/larksuite/node-sdk/issues)。

## 相关文档

- [服务端 API 列表](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/server-api-list)
- [事件列表](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-list)