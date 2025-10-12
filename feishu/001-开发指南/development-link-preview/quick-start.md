<!--
title: 快速入门
id: 7338430742970974212
fullPath: /uAjLw4CM/ukzMukzMukzM/development-link-preview/quick-start
updatedAt: 1737636915000
source: https://open.feishu.cn/document/development-link-preview/quick-start
-->
# 快速入门

本文提供完整的链接预览配置流程，供你参考并上手体验链接预览功能。

## 准备工作

- 已了解链接预览功能的实现方式与配置流程，详情参见[链接预览开发指南](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/link-preview-development-guide)。

-   本地已配置 [Node.js](https://nodejs.org/en) 开发环境，或者 [Go](https://go.dev/) 开发环境。
    
    本文提供了 [Node.js 示例代码](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/096e72afaf3b3086910dbab3217e86d4_O3xgFH04vt.js) 和 [Go 示例代码](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ee10b1d29a2548e410976223949d4dc3_5gNzacrU1c.zip)，你可以根据本地开发环境选择使用。


## 步骤一：创建并配置应用

1. 登录[开发者后台](https://open.feishu.cn/app)。
2. 在 **企业自建应用** 页面，点击 **创建企业自建应用**。
    
    本文以自建应用为例介绍配置流程。你也可以选择创建商店应用，其中的链接预览配置流程与自建应用相同。配置商店应用的具体操作，参见[流程概述](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ugzNwEjL4cDMx4CO3ATM)。
3. 配置应用的名称、描述与图标，并点击 **保存**。
    
    例如，创建名为 `Card & URL Demo` 的应用，描述与图标自定义配置即可。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0d13c3d4aaaecdfa20b081f7ad72d1ae_T80aq4Cf78.png?height=1392&lazyload=true&maxWidth=400&width=1184)



## 步骤二：构建飞书卡片

你需要构建一张飞书卡片，后续用于绑定链接预览。了解飞书卡片可参见[飞书卡片概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)。

1. 登录[飞书卡片搭建工具](https://open.feishu.cn/cardkit)。
2. 点击 **创建空白卡片**，配置卡片名称并绑定已创建的应用，然后点击 **创建**。
    
    本示例中，创建名为 `CardDemo` 卡片，并与 `Card & URL Demo` 应用进行绑定。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/97d129b59a413a59fd1eec3b9ccce7ed_Sfudws8x7V.png?height=604&lazyload=true&maxWidth=400&width=1168)

3. 在搭建工具中，将卡片预览场景切换为 **消息链接预览**，便于预览效果。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/14c8e7cd3ad388b8f97345cb3ac34e69_y9kIUzGb99.png?height=928&lazyload=true&maxWidth=600&width=2730)
4. 在搭建工具左侧 **组件** 列表的底部，点击 **参考案例库**。
5. 在 **团队文化** 模块内，使用 **周年庆典**。
    
    本文使用 **周年庆典** 卡片作为示例，你也可以自行构建卡片内容。
    
6. 在弹出的对话框中，点击 **替换**。

7. 在工具右上角，保存并发布卡片。
    
    发布时你需要设置 **卡片版本号**，首个版本使用 `1.0.0` 即可。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e171087954d0f29ea99c2cfe401ffe85_5w2kvrwvdR.png?height=564&lazyload=true&maxWidth=400&width=824)
    
8. 卡片发布后，在搭建工具的顶部，获取卡片 ID。
    
    你需要保存卡片 ID 与版本号，在后续配置示例代码时需要使用。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4391f7b39adb26671fa420ff66c19bab_8wqIi7UZxS.png?height=364&lazyload=true&maxWidth=600&width=2882)

## 步骤三：下载并运行示例代码

使用本文提供的示例代码包，在本地构建一个业务服务器，用于处理来自飞书开放平台的回调请求。

### Node.js 代码包

1. 下载[示例代码](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/096e72afaf3b3086910dbab3217e86d4_O3xgFH04vt.js)。
    
    ```bash
    curl https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/096e72afaf3b3086910dbab3217e86d4_O3xgFH04vt.js -o url_preview.js
    ```
2. 下载完成后，进入示例代码所在的文件目录。
3. 打开 url_preview.js 文件，修改卡片 ID 与卡片版本号。
    
    使用你常用的打开文件方式即可。例如，在终端内使用 `vi/vim` 命令打开文件，或使用 VSCode 等本地开发工具打开文件。
        
	- 找到 `template_id`，将代码中的示例值，修改为你构建的飞书卡片的真实 ID。
        
	- 找到 `template_version_name`，将代码中的示例值，修改为你构建的飞书卡片的真实版本号。

	- 如果你的飞书卡片配置了卡片变量，则需要通过 `template_variable` 字段为变量赋值。
        
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e5846ef22aeae34d01070fe3d23f27ed_5mCH5ro1aW.png?height=848&lazyload=true&maxWidth=600&width=1462)

4. 在本地使用命令行工具，进入示例代码所在目录并运行以下命令，启动服务并监听 3000 端口。
   
   ```bash
   node url_preview.js
   ```

### Go 代码包

1. 下载 [Go 示例代码](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ee10b1d29a2548e410976223949d4dc3_5gNzacrU1c.zip)。
    
    ```
    curl https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/ee10b1d29a2548e410976223949d4dc3_5gNzacrU1c.zip -o preview_example.zip
    ```
2. 在本地解压已下载的代码包。
3. 在代码包中打开 preview.go 文件，找到 `url_preview` 字段并根据实际情况修改回调结构。
    
    本示例中，通过 [GoLand](https://www.jetbrains.com/go/) 工具打开并配置代码包。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9315b7b1913f078cdef8e4f7b4ca1240_Qhjc9l3EVM.png?height=1338&lazyload=true&maxWidth=600&width=2848)
    
    回调结构配置说明：
    
    - 找到 `TemplateID`，将代码中的示例值，修改为你构建的飞书卡片的真实 ID。
    - 找到 `VersionName`，将代码中的示例值，修改为你构建的飞书卡片的真实版本号。
    - 如果你的飞书卡片配置了卡片变量，则需要通过 `Variable` 为变量赋值。

4. 在 main.go 中运行 `main` 函数，启动服务并监听 **3000** 端口。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6b5bc3a6826c52d0efbc6d4cc164c56a_dvEXnVKVhd.png?height=1496&lazyload=true&maxWidth=600&width=2872)

### 获取本地公网地址

:::warning
**注意：**<br>
- 如果本机有公网地址，可跳过本步骤。
- 如果本机没有公网地址，本教程为了方便实现，使用了反向代理工具（[ngrok](https://ngrok.com/download)）完成内网穿透，暴露本地服务的公网访问入口。**该工具仅适用于开发测试阶段，不可用于生产环境，使用前请确认是否符合所在公司网络安全政策。**
- **测试完成后，如需正式发布应用，你需要修改为真实有效的公网地址。**
:::   

1. 注册并安装 [ngrok](https://ngrok.com/download)，按照官方指引完成安装。
2. 在个人的 [dashboard 页面](https://dashboard.ngrok.com/get-started/your-authtoken) 中，获取 Authtoken。
        
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3a6d48a86bbd55342a81f80e43561204_dLGeBfcu8M.png?height=624&lazyload=true&maxWidth=600&width=2480)

3. 在本地依次运行以下命令，获得公网 URL。
        
    ```bash
    ngrok authtoken "token" // token需替换为实际值
    ngrok http 3000
    ```
        
    成功运行结果如下图：
        
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4c5eeb0e8ae06c9df51c0849e8923b35_mwLSArWG5Z.png?height=882&lazyload=true&maxWidth=600&width=2490)

4. 保存本地公网地址。
    
    后续用于配置链接预览回调。

## 步骤四：配置链接预览

1. 登录[开发者后台](https://open.feishu.cn/app)。
2. 进入应用详情页，并在左侧导航栏选择 **应用能力** > **添加应用能力**。
3. 在 **按能力添加** 页签中，找到并添加 **链接预览**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a97a1176f3a8f9f262a0beec7039f9f3_YJvw4ATKE1.png?height=1276&lazyload=true&maxWidth=600&width=2516)
4. 进入 **链接预览** 功能页，在 **注册需要自定义预览的 URL 规则** 区域，点击 **添加 URL 规则**。
    
    
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c26d345adf52b23afabc003a978f085b_7sXniihMth.png?height=594&lazyload=true&maxWidth=600&width=1464)

    本示例中，添加一条 `example.com/*` 规则，后续在飞书客户端内发送的链接如果命中该规则，则会实现链接预览。
    
   
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a10283c8255420ae03f4afd7343ba2a2_DbVpWeb306.png?height=270&lazyload=true&maxWidth=600&width=1253)
5. 配置应用回调。
    
    1. 在 **配置订阅链接预览回调** 区域，点击 **去配置**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d764e93e62b22d4fd286a88b7e644053_I4l8AOWYiL.png?height=294&lazyload=true&maxWidth=600&width=1726)
    2. 在 **事件与回调** 页面的 **回调配置** 页签中，点击 **订阅方式** 右侧的编辑按钮。
        
        
		![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ab66f2c2b3fa666721873ec655de9b26_T99HMMukKp.png?height=639&lazyload=true&maxWidth=600&width=1478)
    3. 将运行示例代码获取到的公网地址，配置在 **请求地址** 输入框，并点击 **保存**。
        
        你需要填写本地获取到的真实地址。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/09f5d04ee7a6a2f12339f946395d499f_R5OWZH4bmb.png?height=996&lazyload=true&maxWidth=600&width=1744)
    4. 在页面底部的 **已订阅的回调** 区域右侧，点击 **添加回调**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/efe2f1373dd4451829d07ecea755f4ae_zX5jWE9JOC.png?height=1142&lazyload=true&maxWidth=600&width=2244)
    5. 在对话框左侧导航栏点击 **链接预览**，选中 **拉取链接预览数据**，并点击 **确认添加**。

		回调详情参考[拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/40f5c450d5642d2ee36197cf7104a683_1WoH6IjXkC.png?height=1192&lazyload=true&maxWidth=600&width=1666)
    6. 返回应用的 **链接预览** 功能页，查看 **配置订阅链接预览回调** 的状态为 **已配置**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dc6c824554bd63a7df8b6e86e5e59caa_YiGNLB1J0y.png?height=726&lazyload=true&maxWidth=600&width=1780)
        
6. 发布应用，使以上配置生效。

	1. 在 **版本管理与发布** 页面，点击 **创建版本**。
	2. 在 **版本详情** 页面，根据页面提示依次配置版本号、能力、说明等信息，并在页面底部点击 **保存**。
	3. 在弹窗内确认提交应用审核。
	
    	你需要等待企业管理员通过应用审核，然后应用会自动发布。

## 步骤五：体验效果

登录飞书客户端，分别在以下消息场景中体验链接预览效果。

:::warning
**注意**：链接需要以 https/http 开头（即使用 HTTPS/HTTP 协议的链接），才可以成功实现预览效果。
:::

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:60%">场景</md-th>
<md-th style="width:40%">图示</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>单独发送 `https://example.com/path`</md-td>
<md-td>

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/10a85b69dd41eea0e48766ab951801b4_xO9s5mVFGj.png?height=776&lazyload=true&width=958)  
</md-td>
</md-tr>

<md-tr>
<md-td>富文本消息包含 `https://example.com/path`</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cfc41a0432fb907fc0661ed172cb9ea9_LwgJQnGUxz.png?height=782&lazyload=true&width=956)  
</md-td>
</md-tr>
  
<md-tr>
<md-td>群置顶消息 `https://example.com/path`</md-td>
<md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7b3c8d54aa57bc750c0dc20152141474_9xf0Y2vQ62.png?height=185&lazyload=true&width=1280)  
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

