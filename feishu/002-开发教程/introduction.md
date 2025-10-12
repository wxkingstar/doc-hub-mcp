<!--
title: 快速调用服务端 API（发送消息）
id: 7452604261787729924
fullPath: /uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/how-to-call-a-server-side-api/introduction
updatedAt: 1739193373000
source: https://open.feishu.cn/document/introduction
-->
# 快速调用一个服务端 API（发送消息）

本教程以调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口为示例，手把手帮助新手开发者成功调用一个服务端 API。通过本教程，你将对应用的机器人能力、API 权限等基础概念有初步理解。

## 实现效果

通过本教程，你将实现通过应用给你发送一条消息：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d38d7c053c52509f1702ab3d37ebee5e_AM73pTl8Ww.png?height=293&lazyload=true&maxWidth=500&width=598)

## 所需配置

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">配置项</md-th>
      <md-th>所需配置/接口</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>
        应用能力
      </md-td>
      <md-td>
        机器人
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>
        API 权限
      </md-td>
      <md-td>
                   <md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" support_app_types="custom,isv" tags="">以应用的身份发消息</md-perm>

      </md-td>
    </md-tr>
    <md-tr>
      <md-td>
        接口
      </md-td>
      <md-td>
        [发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::




##  准备工作

拥有一个飞书企业账号，参考[创建](https://www.feishu.cn/hc/zh-CN/articles/360043741453)或[加入](https://www.feishu.cn/hc/zh-CN/articles/360043496893)飞书企业。

## 开发步骤

### 步骤一：查看接口文档，了解参数

前往 [飞书开发文档-服务端 API](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM) ，通过搜索等方式找到发送消息 API 的接口文档并查看参数描述。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0f7dd746f81da2ef99e143d29270ea13_lcclNDR1UH.png?height=787&lazyload=true&maxWidth=600&width=1920)

### 步骤二：创建一个用于发送消息的应用

1. 在 [发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create) 文档页面，点击右侧 **创建应用** 按钮，进入开发者后台。
  
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/197377ddac921c625a27bd56bdead7bc_elHZ2UwFRy.png?height=787&lazyload=true&maxWidth=600&width=1920)
  
1. 在开发者后台首页，单击 **创建企业自建应用**，并填写应用名称和应用描述，最后单击 **创建**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/99c96a2da0c1b87b8cb3a45d389a910f_vbh9RthUuA.png?height=673&lazyload=true&maxWidth=600&width=1571)
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/77bac23023c88317f8c116c05dda0086_SUUoMtjEf1.png?height=776&lazyload=true&maxWidth=400&width=789)

### 步骤三：为应用开通发送消息所需的 API 权限

要使应用调用接口，需要为应用开通调用该接口所需的 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。本步骤指导你在 API 调试台直接开通权限。

1. 参考[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create) API 文档，在右侧调试台 **权限配置** 页签下，勾选任一权限，然后点击 **批量开通**。

     ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/677b50b50d5dad815f749bb5089cd735_sFJuPGC5Dg.png?height=776&lazyload=true&maxWidth=600&width=1877)
     
1. 在 **提示** 弹窗中，根据不同提示操作：

  :::html
    <md-table>
      <md-thead>
        <md-tr>
          <md-th style="width: 5%;">场景</md-th>
          <md-th style="width: 35%;">若弹窗提示权限为免审权限</md-th>
          <md-th style="width: 35%;">若弹窗提示权限需要审核</md-th>
        </md-tr>
      </md-thead>
      <md-tbody>
        <md-tr>
          <md-td>操作</md-td>
          <md-td>单击 **确认** 即可，应用无需发布即可生效。
            
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/19961ba3b1dd450749aae985aea92b30_aimwawB0f0.png?height=329&lazyload=true&maxWidth=300&width=791) 
   </md-td>
   <md-td>
   - **选择 1（推荐）** ：自行[创建一个新的企业](https://www.feishu.cn/hc/zh-CN/articles/360043741453-%E5%88%9B%E5%BB%BA%E4%BC%81%E4%B8%9A)，再在新企业中创建应用、添加权限，实现权限免审。
     
 - **选择 2**：单击 **确认**。然后参考步骤四为应用添加机器人能力后，再创建应用版本、申请发布应用，等待审核通过。
        
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0fc2e70a43d74201aefefe05459d6394_7vvGQzLiMz.png?height=338&lazyload=true&maxWidth=300&width=797)
            
          </md-td>
        </md-tr>
      </md-tbody>
    </md-table>
   :::

### 步骤四：为应用添加机器人能力

调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口的前提条件之一为“应用需要开启机器人能力”，确保应用可以向用户或群组发送消息。本步骤介绍如何为应用添加机器人能力。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ec5d175c390179222942da31d161b23a_dr8fuLFTJf.png?height=562&lazyload=true&maxWidth=400&width=748)

1. 在开发者后台应用管理页面，在 **应用能力** > **添加应用能力** 页面的 **按能力添加** 页签，找到 **机器人** 卡片，并点击 **添加**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ea9f1cf27f5b1ba83c1226e9ac894e6b_KvhSHVxAyH.png?height=1306&lazyload=true&maxWidth=600&width=2856)
    
1. 在上方导航栏或左侧导航栏的 **应用发布** > **版本管理与发布**，点击 **创建版本**。
   
   :::note
   **提示：** 为应用添加机器人能力后，你需创建应用版本、发布应用，能力才可生效。
   :::
  
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f6029b1e3375832a50082898e2c79354_beYcDVLUUs.png?height=764&lazyload=true&maxWidth=600&width=1861)
    
1. 在 **版本详情** 页面，填写应用版本号、更新说明，确定应用可见范围，然后点击 **保存**。
    
    :::note
    提示：[应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)定义了哪些人可以发现并使用该应用。在本教程中，该可见范围默认为应用创建者，即默认只有应用的创建者才能收到应用发送的消息。
    :::
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3017d44c0e0669034a99dbdbac51abdf_58IXE8PUsf.png?height=714&lazyload=true&maxWidth=500&width=1039)
    
1. 在 **确认提交发布申请** 弹窗中，根据不同提示操作：

  :::html
    <md-table>
      <md-thead>
        <md-tr>
          <md-th style="width: 5%;">场景</md-th>
          <md-th style="width: 35%;">弹窗提示“本次发布免审”</md-th>
          <md-th style="width: 35%;">弹窗提示“本次发布需企业管理员审核”</md-th>
        </md-tr>
      </md-thead>
      <md-tbody>
        <md-tr>
          <md-td>操作</md-td>
          <md-td>单击 **确认发布**。
            
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/aed65e559f341a4369b9a1773395ad8a_wzdoipFe7h.png?height=462&lazyload=true&maxWidth=400&width=1124)</md-td>
          <md-td>
            - **选择 1（推荐）** ：自行[创建一个新的企业](https://www.feishu.cn/hc/zh-CN/articles/360043741453-%E5%88%9B%E5%BB%BA%E4%BC%81%E4%B8%9A)，实现发布免审，再快速体验本教程。<br>
  
 - **选择 2：** 单击 **申请线上发布**。等待企业租户管理员通过审核后，再发布应用。
            
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d443a75de694e9dbef14ab90731a66a9_z0cKVNJRmG.png?height=488&lazyload=true&maxWidth=400&width=1203)
          </md-td>
        </md-tr>
      </md-tbody>
    </md-table>
   :::

  :::note
  提示：应用是否需要审核与你所在企业管理员的设置有关。在体验测试阶段，推荐你自行[创建一个新的企业](https://www.feishu.cn/hc/zh-CN/articles/360043741453-%E5%88%9B%E5%BB%BA%E4%BC%81%E4%B8%9A)实现应用发布免审。
  :::

### 步骤五：调用发送消息 API

为应用开通机器人能力、开通 API 权限后，你可以直接在调试台发起 API 调用，或者通过 cURL 请求、SDK 等方式调用接口。

#### 方式 1：在调试台发起 API 调用

参考以下步骤，在 [发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create) API 文档页面发起 API 调试台调用。



1. 在调试台窗口，点击 **获取** **Token**，为应用获取其鉴权时的[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。


	
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e91ebe8f3c49dce9429c9badbd9ec5cf_Pxpcn2jJ1q.png?height=776&lazyload=true&maxWidth=600&width=1897)
3. 在调试台窗口`receive_id_type` 参数中，选择 `open_id` 作为用户 ID 的类型，然后单击 **快速复制 open_id**。
    
    
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9375ef87bdc6f3f9ece8198e23f597e7_Ok23g9UlF7.png?height=614&lazyload=true&maxWidth=500&width=697)
    :::note
    **提示：** open_id 是用户在应用下的身份标识，不可跨应用使用。了解其它类型的用户 ID，参考[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。
    :::
    
4. 在复制 ID 弹窗中，搜索你自己的姓名（即应用的创建者。默认只有应用创建者在应用可用范围内），然后单击 **复制成员 ID**。
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ab462077d7f78aa608430bebd8996ac6_JPrJVDBCQQ.png?height=642&lazyload=true&maxWidth=500&width=803)
    
1. 在调试台窗口请求体中，将上一步复制的 ID 粘贴至 `receive_id` 参数的示例值处，并删除 `uuid` 参数行。
1. 在调试台窗口请求体中，将 `content` 行末尾的 `,` 删除，并将 `test content` 改为 `Hello world`。



	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/32c7c93ec1d1e04f2da15749744a2513_q1LP85bbq5.png?height=321&lazyload=true&maxWidth=600&width=664)

3. 点击 **开始调试**，若调用成功，你将收到来自该应用发送的文本消息 `Hello world`，同时接口将返回对应的响应体，其参数描述可在接口文档中查看。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d38d7c053c52509f1702ab3d37ebee5e_fplm9epLUR.png?height=293&lazyload=true&maxWidth=500&width=598)

7. 开放平台提供了统一的 Go、Java、Python 和 Node.js 语言的服务端 SDK 及其[使用指南](/ssl:ttdoc/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)和代码示例。参考上述步骤填入参数并调试成功后，你可在 API 调试台 **示例代码** 处复制调试台自动生成的示例代码，并查看使用说明。


	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6a5094b957d56710c5e31005d5400b8d_uxmZfMKn2h.png?height=701&lazyload=true&maxWidth=500&width=694)
#### 方式 2：本地发送 cURL 请求

参考方式一在 API 调试台填写好参数后，API 调试台将自动为你生成对应的示例代码。你可以直接在 **示例代码** 页签下复制 cURL 示例代码：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1a1f316cb43406c4f5cc5ebb7a7dae24_GYgP8QMHIY.gif?height=872&lazyload=true&maxWidth=600&width=1894)


- 如果你使用的是 Mac 操作系统，打开本地终端（Terminal），即可运行刚刚复制的代码：
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a4a269350696602ae2583dbc2fe4a6b8_wdQWpqxKhf.gif?height=1076&lazyload=true&maxWidth=600&width=1926)
    
- 如果你使用的是 Windows 操作系统，你需先将复制的 cURL 代码转为如下 Windows 命令行支持的版本，再打开本地的命令提示符（cmd）运行：
      
  ```bash
  curl -i -X POST "https://open.feishu.cn/open-apis/im/v1/messages?receive_id_type=open_id" ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer t-g104bekKJPKCQERUZBN4LCFYUVZKZYK6XK56XDL6" ^
  -d "{\"content\": \"{\\\"text\\\":\\\"Hello world\\\"}\", \"msg_type\": \"text\", \"receive_id\": \"ou_a3935e60b01fd60679ce671cee771c6b\"}"
  ```
        
    若调用成功，你将收到来自该应用发送的文本消息，同时接口将返回对应的响应体，其参数描述可在接口文档中查看。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/db9dec73f1a7c068ffd5156f763d2140_IuJPlnQQYK.gif?height=918&lazyload=true&maxWidth=600&width=1724)
  




## 错误排查与分析

若调用接口时遇到报错，你可通过以下方式自助分析与解决。

### 方式 1 ：在 API 调试台参考智能助手的报错信息分析

若在 API 调试台调试接口报错，你可将你的请求参数授权给 AI 智能助手，查看具体错误原因；也可复制 Log ID 至搜索框查看排查建议。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/55ee1353060f708f7b7a3631ce03c06a_bLX7ixZGRD.gif?height=872&lazyload=true&width=1914)
  

### 方式 2 ：在开发者后台中检索日志分析

要进一步分析了解近 7 日内调用的 API 情况，包括包含请求时长、请求 URL、请求返回错误码、错误信息等，你可前往开发者后台检索。具体步骤如下所示：

1. 前往 [开发者后台](https://open.feishu.cn/app) ，找到指定应用并进入应用详情页。
1. 在左侧导航栏，选择 **运营监控** > **日志检索**。
3. 在 **服务端日志检索** 页签内，配置查询参数，检索应用调用服务端 API 的日志数据。详情参考[日志检索](/ssl:ttdoc/tools-and-resources/open-api-log-query)。

## 了解更多

了解如何通过应用创建多维表格等云文档，可参考[如何调用一个服务端 API（以创建多维表格接口为例）](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/call-a-server-api-base-example/introduction)。

