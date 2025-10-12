<!--
title: 开发前准备
id: 7442638088350187524
fullPath: /uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
updatedAt: 1740541953000
source: https://open.feishu.cn/document/server-side-sdk/golang-sdk-guide/preparations
-->
# 开发前准备

使用 Go SDK 调用服务端 API、处理事件和回调前，请确保你已创建了一个应用、安装了 Go 环境和 Go SDK。本文档介绍使用 Go SDK 开发前的准备工作。
:::html
<md-alert type="tip">
对于新手开发者，建议你直接上手体验[开发自动回复机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/introduction)或[开发卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)教程，在教程示例代码中了解如何调用 API、处理事件和回调。
</md-alert>
:::

## 创建应用

在使用服务端 SDK 之前，你需要确保已在[开发者后台](https://open.feishu.cn/app)创建了一个企业自建应用或商店应用。详情参考[创建企业自建应用](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process#a0a7f6b0)或[创建商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ucjN2YjL3YjN24yN2YjN/step1-create-a-store-application)。了解选择哪种应用，参考[应用类型](/ssl:ttdoc/home/app-types-introduction/overview#c3c7ad51)。


## 准备开发环境

要确保 Go SDK 运行，你需安装 Go 环境。下载地址见 [Go download and install](https://go.dev/doc/install)。

## 安装 Go SDK

运行以下命令，安装 Go SDK。

```bash
go get -u github.com/larksuite/oapi-sdk-go/v3@latest
```


## 后续操作

- [调用服务端 API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/calling-server-side-apis)：介绍如何通过 SDK，自行构建 API Client、构造 API 请求、最终成功调用服务端 API。
- [处理事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/handle-events)：介绍如何通过 SDK 封装的长连接方式处理事件、如何使用 Go SDK 原生 HTTP 服务器或集成 Gin 框架处理事件。
- [处理回调](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/handle-callback)：介绍如何通过 SDK 封装的长连接方式处理回调、如何使用 Go SDK 原生 HTTP 服务器或集成 Gin 框架处理回调。
- [场景示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/demo)：提供基于 SDK 实现的各类场景的代码示例。 