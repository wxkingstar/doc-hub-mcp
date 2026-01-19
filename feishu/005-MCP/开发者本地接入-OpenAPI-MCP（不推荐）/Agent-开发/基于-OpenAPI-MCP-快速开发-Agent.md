---
title: "基于 OpenAPI MCP 快速开发 Agent"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/mcp_integration/quick-start-guides/quick-integration-with-openapi-mcp
last_remote_update: 2025-12-05
last_remote_update_timestamp: 1764906984000
---
最后更新于 2025-12-05

# 基于 OpenAPI MCP 快速开发 Agent

本文帮助你使用 Go、Python、Java 和 Node.js，快速开发集成 OpenAPI MCP 协议的智能 Agent，实现多语言环境下的高效构建和调用。warning
MCP 工具的参数可能会发生变化，开发者请勿按照 MCP 工具的入参定制开发。

## 代码下载

你可点击 [GitHub](https://github.com/larksuite/lark-samples/tree/main/mcp_quick_demo) 获取项目。

## 实现效果

以下示例以 [Kimi-K2 模型](https://console.volcengine.com/ark/region:ark+cn-beijing/model/detail?Id=kimi-k2)和 Go 语言为例，展示运行项目后，接入 MCP 的效果。代码中默认的 query 如下所示。MCP 将调用 `docx.v1.document.rawContent` API，获取该文档内容并返回：

```bash
Please read the feishu document of https://feishu.feishu.cn/docx/WtwHdAngzoEU9IxyfhtcYsHCnDe by tenant_access_token
```

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/1f8a887162bea358634fd78ff0b1cc56_aSJtjTKNHX.png?height=867&lazyload=true&maxWidth=698&width=1798)

## 准备工作

在开始本教程操作步骤之前，你需要完成以下准备工作：
- 拥有 AI 模型 OpenAI API 的访问权限，用于配置 `OPENAI_API_KEY`、`OPENAI_MODEL` 和 `OPENAI_BASE_URL` 参数。本教程以 [Kimi-K2 模型](https://console.volcengine.com/ark/region:ark+cn-beijing/model/detail?Id=kimi-k2)为例，了解参数获取方式，可参考[兼容OpenAI API](https://www.volcengine.com/docs/82379/1330626)。
- 确保你已经安装了 [Node.js](https://nodejs.org/) 且 Node 版本高于 V20.0.0。

## 操作步骤

### 步骤一：创建并发布应用

本步骤介绍如何创建应用、并为应用配置指定能力和权限。推荐你自行[创建一个新的企业](https://www.feishu.cn/hc/zh-CN/articles/360043741453-%E5%88%9B%E5%BB%BA%E4%BC%81%E4%B8%9A)，在新企业中创建应用、添加权限，实现权限免审。
1. 登录飞书 [开发者后台](https://open.feishu.cn/app)。
1. 点击创建 **企业自建应用**，填写应用的 **名称** 和 **应用描述**，点击 **创建**。
1. 参考下表，配置应用。

配置项 | 操作步骤 | 图示
--- | --- | ---
添加应用能力：机器人 | 在 **应用能力 > 添加应用能力** 页面，添加 **机器人** 能力。 | 
申请应用身份和用户身份权限：OpenAPI MCP 工具默认开通的 API 工具需要开启的权限 | 在 **权限管理** > **开通权限** 界面的输入框内，粘贴以下内容，批量开通权限（注意根据需要分别为应用身份、用户身份开通权限）。  
```  
im:chat:create, im:chat, im:message, wiki:wiki, wiki:wiki:readonly, docx:document, bitable:app, drive:drive, docs:document:import, contact:user.id:readonly        
``` | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/6121f3fb7767bb9e2c789b8dd5c554f3_cCrTVCfqsD.png?height=1548&lazyload=true&width=2936)

4. 发布应用，使配置项生效。你也可自行[创建一个新的企业](https://www.feishu.cn/hc/zh-CN/articles/360043741453-%E5%88%9B%E5%BB%BA%E4%BC%81%E4%B8%9A)，在新企业中创建应用、添加权限，实现权限免审。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/fa703bac5997b4665f8bce3f991be351_ymwBqsoUVL.png?height=659&lazyload=true&maxWidth=500&width=986)

### 步骤二：下载示例代码并配置 .env 文件

1. 点击此处链接下载 MCP Quick Demo 示例代码。你也可使用 Git 命令克隆 GitHub 项目：

```
    git clone https://github.com/larksuite/lark-samples
    cd mcp_quick_demo
    ```
     MCP Quick Demo 基于 Go、Python、Java 和 Node.js 语言实现，你可按需选择适合的语言和框架。

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/6edb77c8650a07c552d260777111eff2_gMeayNkYQr.png?height=419&lazyload=true&maxWidth=500&width=1070)
1. 在选择的代码语言文件夹内，创建名为 `.env` 的文件，粘贴并配置以下环境变量。你也可直接修改并重命名已有的 `.env.example`文件为`.env`。配置示例如下所示：

```bash
    # 应用配置示例
    APP_ID=cli_a8f75e4d913abcef # 你创建的应用的 App ID 
    APP_SECRET=RekOQ8EV14shNMtZokRAmdmlabcefdnj # 你创建的应用的 App Secret
    LARK_DOMAIN=https://open.feishu.cn  # 飞书域名，保持不变

# 以下 OpenAI API 配置二选一 
    #  远程 Ark 配置示例
    OPENAI_API_KEY=5caedeqd-dc4b-4444-8003-xxxx
    OPENAI_MODEL=kimi-k2-250711
    OPENAI_BASE_URL=https://ark.cn-beijing.volces.com/api/v3/

# 本地 Ollama 配置示例
    OPENAI_API_KEY=your_openai_api_key # 此处 ollama 不校验
    OPENAI_MODEL=qwen2:7b
    OPENAI_BASE_URL=http://localhost:11434/v1
    ```

### 步骤三：启动并运行项目

你可按需选择不同语言运行项目。

#### **Go 语言运行项目**

使用 Go 语言运行项目前，请确保 Go 版本为 1.24.1 或更高版本。下载地址见 [Go download and install](https://go.dev/doc/install)。以下为运行项目步骤。
1. 进入 `go` 文件夹，安装依赖：
     ```bash
     cd mcp_quick_demo/go
     go mod tidy
     ```
1. 启动服务，查看运行效果：

```bash
     go run .
     ```
    成功运行示例如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/1f8a887162bea358634fd78ff0b1cc56_jccavKGWyA.png?height=867&lazyload=true&maxWidth=600&width=1798)

#### **Java 语言运行项目**

使用 Java 语言运行项目前，请确保：
- Java 版本为 17 或更高版本
- Maven 版本为 3.6 或更高版本

以下为运行项目步骤。
1. 进入 `java` 文件夹，构建项目：
   ```bash
   cd mcp_quick_demo/java
   mvn clean compile
   ```

1. 启动服务，查看运行效果：

```bash
   mvn spring-boot:run
   ```
   成功运行示例如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/43df1344a48efb93d0f39bbad841df6b_XDdAoRiIHF.png?height=870&lazyload=true&maxWidth=600&width=1799)

#### **Node.js 语言运行项目**

1. 进入 `node.js` 文件夹，安装依赖：

```bash
    cd mcp_quick_demo/nodejs
    npm install
    ```

1. 启动服务，查看运行效果：
    - **方式一**：使用 AI SDK （`ai-sdk.js`）集成 MCP：
       ```bash
       npm run dev:ai
       ```

成功运行示例如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/180e6d3ead17f43afd52529bf1ddfb43_szLrI0aogB.png?height=861&lazyload=true&maxWidth=600&width=1159)
    - **方式二**：使用 LangChain（`langchain.js`）框架集成 MCP：

```bash
        npm run dev:langchain
        ```

成功运行示例如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/37ffa5713366dcca1add92ec07f337eb_asFgqwgdqR.png?height=864&lazyload=true&maxWidth=600&width=1796)

调用 MCP 工具和 AI 返回信息如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e63a3d7485c6165fb6cccc6481e1fb7d_GYEwXMTyT7.png?height=877&lazyload=true&maxWidth=600&width=1802)

#### **Python 语言运行项目**

使用 Python 运行项目前，请确保 Python 版本为 3.13 或更高版本。以下为运行项目步骤。
1. 进入 python 文件夹内，设置 Python 环境：

```bash
    cd mcp_quick_demo/python
    uv sync
     ```
1. 启动服务，查看运行效果：

- **方式一**：使用 `mcp-use.py` 库直接集成 MCP：

```bash
      uv run src/mcp-use.py
      ```

成功运行示例如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ed994515da922fb56f9bdbd38417cbb2_ZIajup99fM.png?height=865&lazyload=true&maxWidth=600&width=1800)

- **方式二**：使用 LangChain（`langchain.js`）框架集成 MCP：

```bash
         uv run src/langchain-demo.py
         ```

成功运行示例如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/5350d0909165058f6905af4110d992ed_tuTKbofVDW.png?height=693&lazyload=true&maxWidth=600&width=1792)

### 步骤四：自定义提示词

在本 Demo 中，你可自行修改示例代码中的提示词，使用 MCP 工具实现基于 agent 的飞书云文档处理、会话管理、日历安排等自动化场景。此处演示如何修改 用户提问时的 prompt。

#### **Go 中自定义 `Userprompt`**

1. 在 `go\prompt\prompt.go` 文件中，自定义 `Userprompt`，再次运行。自定义示例如下所示：

```bash
     Please create a base app
     ```
     返回结果如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8a422ba0ad6ae7659517500930d0f951_XcAHQa6nTp.png?height=586&lazyload=true&maxWidth=600&width=1547)

#### **Java 中自定义 `ai.user.input`**

1. 在 `java\src\main\resources\application.properties` 和 `java\src\main\resources\application-windows.properties` 文件中，自定义 `ai.user.input`，再次运行。自定义示例如下所示：

```bash
    Please create a base app
    ```

返回结果如下所示：

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f37350d42234471812c617802357235f_vjvOtynOwk.png?height=657&lazyload=true&maxWidth=600&width=1563)

####   **Node.js 中自定义 `Userprompt`**

1. 在 `nodejs\src\prompt.js` 文件中，自定义 `userPrompt`，再次运行。自定义示例如下所示：

```bash
    Please create a base app
    ```
     返回结果如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/68bd19e951f0a9220a63f14dc04e5fce_cFhn9LoyzJ.png?height=719&lazyload=true&maxWidth=600&width=1788)

#### **Python 中自定义 `user_prompt`**

2. 在 `python\src\prompt.py` 文件中，自定义 `user_prompt`，再次运行。自定义示例如下所示：
    ```bash
    Please create a base app
    ```

返回结果如下所示：

![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ab9a0545aa53dbfa97aa8d374b6c16c0_ku0YIQ0Wqv.png?height=874&lazyload=true&maxWidth=600&width=1796)

## 常见问题

前往[常见问题](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/mcp_integration/use_cases)了解使用 OpenAPI MCP 时的常见问题与解决方案。
