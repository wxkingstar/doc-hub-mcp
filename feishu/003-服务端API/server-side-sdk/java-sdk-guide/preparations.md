<!--
title: 开发前准备
id: 7442638088350285828
fullPath: /uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
updatedAt: 1758273721000
source: https://open.feishu.cn/document/server-side-sdk/java-sdk-guide/preparations
-->
# 开发前准备

使用 Java SDK 调用服务端 API、处理事件和回调前，请确保你已创建了一个应用、安装了 JDK 和 Java SDK。本文档介绍使用 Java SDK 开发前的准备工作。

:::html
<md-alert type="tip">
对于新手开发者，建议你直接上手体验[开发自动回复机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/introduction)或[开发卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)教程，在教程示例代码中了解如何调用 API、处理事件和回调。
</md-alert>
:::


## 创建应用

在使用服务端 SDK 之前，你需要确保已在[开发者后台](https://open.feishu.cn/app)创建了一个企业自建应用或商店应用。详情参考[创建企业自建应用](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process#a0a7f6b0)或[创建商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ucjN2YjL3YjN24yN2YjN/step1-create-a-store-application)。了解选择哪种应用，参考[应用类型](/ssl:ttdoc/home/app-types-introduction/overview#c3c7ad51)。

## 准备开发环境

Java SDK 运行环境需 JDK 1.8 及以上。下载地址参见 [Java downloads](https://www.oracle.com/java/technologies/downloads/#java8)。如果本地环境已安装 JDK，可以在终端内执行 `java -version` 命令确认版本信息。

## 安装 Java SDK

基于 Maven 安装 Java SDK，需要在项目的 pom.xml 文件中添加[最新版本 Maven 坐标](https://mvnrepository.com/artifact/com.larksuite.oapi/oapi-sdk)。
```xml
<dependency>
  <groupId>com.larksuite.oapi</groupId>
  <artifactId>oapi-sdk</artifactId>
  <version>2.4.24</version>
</dependency>
```
如果项目无法获取 oapi-sdk 依赖，则需要在 pom.xml 文件中添加以下配置。
```xml
<project>
    <repositories>
        <repository>
            <id>Central Repository</id>
            <url>https://repo1.maven.org/maven2/</url>
        </repository>
    </repositories>
    <dependencies>
        ...
    </dependencies>
</project>   
```


## 后续操作

- [调用服务端 API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/invoke-server-api)：介绍如何通过 SDK，自行构建 API Client、构造 API 请求、最终成功调用服务端 API。
- [处理事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/handle-events)：介绍如何通过 SDK 封装的长连接方式处理事件、如何集成 Servlet 容器自建 HTTP 服务器处理事件。
- [处理回调](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/handle-callback)：介绍如何通过 SDK 封装的长连接方式处理回调、如何集成 Servlet 容器自建 HTTP 服务器处理回调。
- [场景示例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/scenario-example)：提供基于 SDK 实现的各类场景的代码示例。 