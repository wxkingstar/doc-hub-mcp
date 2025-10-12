<!--
title: 云文档概述
id: 7044101668698390531
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-overview
updatedAt: 1758183950000
source: https://open.feishu.cn/document/server-docs/docs/docs-overview
-->
# 云文档概述


## 业务介绍

云文档是飞书在线文档、电子表格、多维表格、知识库、云空间等产品的统称。你可以调用云文档的相关接口，完成以下操作：
- 上传、下载文件

- 创建、编辑各类在线文档

- 管理你所有的文件和文件夹、知识库

目前云文档开放能力已覆盖在线文档、电子表格、多维表格、知识库以及云空间等产品，但出于产品定位及战略考虑，思维笔记不在支持范围内。

## 业务模型

云文档业务域以“资源”为中心进行开放，资源的关系图如下：

![Frame 12.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4abef565f7dad55059945afb2a895f23_LwEvLXgSp2.png?height=757&lazyload=true&width=1640)

:::warning
- 根据使用[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)的不同 **云空间** 分为 **应用云空间**（tenant_access_token）和 **个人云空间**（user_access_token），**应用云空间** 无法通过UI界面管理，只能通过[文件管理](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)API管理，参考下一节接入流程「**访问应用自有资源**」。
- 应用拥有独立的**应用云空间**，包含**文件夹**、**文件**、**文档**、**电子表格**和**多维表格**等资源。

:::
:::html

资源的定义如下：
<md-table>
<md-thead>
<tr>
<md-th style="width: 12%;">资源</md-th>
<md-th style="width: 18%;">标识</md-th>
<md-th style="width: 70%;">资源定义</md-th>
</tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
[云空间](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)
</md-td>
<md-td>
[root_token](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)
</md-td>
<md-td>
用于管理所有云文档资源的容器。
</md-td>
</md-tr>
<md-tr>
<md-td>
[文件夹](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)
</md-td>
<md-td>
[folder_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/create_folder)
</md-td>
<md-td>
用于管理文件和其它文件夹的容器。
</md-td>
</md-tr>

<md-tr>
<md-td>
[文件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)
</md-td>
<md-td>
[file_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_all)
</md-td>
<md-td>
各种类型的文件的统称，泛指云空间内所有的文件。
</md-td>
</md-tr>
  
  
<md-tr>
<md-td>
[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)
</md-td>
<md-td>
[doc_token](/ssl:ttdoc/ukTMukTMukTM/ugDM2YjL4AjN24COwYjN)
</md-td>
<md-td>
飞书在线文档。
</md-td>
</md-tr>  
  
  
  <md-tr>
<md-td>
[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)
</md-td>
<md-td>
[spreadsheet_token](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/create)
</md-td>
<md-td>
飞书电子表格。
</md-td>
</md-tr>
  

<md-tr>
<md-td>
[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)
</md-td>
<md-td>
[app_token](/ssl:ttdoc/ukTMukTMukTM/uQTNzUjL0UzM14CN1MTN)
</md-td>
<md-td>
飞书多维表格。
</md-td>
</md-tr>

<md-tr>
<md-td>
[知识库](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)
</md-td>
<md-td>
[space_id](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/create)
</md-td>
<md-td>
以树状目录管理文件的容器。
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)
</md-td>
<md-td>
[node_token](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/create)
</md-td>
<md-td>
知识库中云文档资源(**obj_token**)的挂载点。
</md-td>
</md-tr>

<md-tr>
<md-td>
[评论](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/get)
</md-td>
<md-td>
[comment_id](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/create)
</md-td>
<md-td>
飞书在线文档中的评论。
</md-td>
</md-tr>

</md-tbody>

</md-table>

:::

## 接入流程
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 8%;">序号</md-th>
      <md-th style="width: 25%;">步骤</md-th>
      <md-th style="width: 70%;">操作方法</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>1</md-td>
      <md-td>创建应用</md-td>
      <md-td>根据应用的使用场景选择[创建企业自建应用](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process) 或[创建应用商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYzNwEjL2cDMx4iN3ATM)</md-td>
    </md-tr>
    <md-tr>
      <md-td>2</md-td>
      <md-td>申请应用接口调用权限</md-td>
      <md-td>根据需要调用的[接口文档](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)中描述的「**权限要求**」到[开发者后台](https://open.feishu.cn/app)[申请应用权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN#af863cb3)</md-td>
    </md-tr>
    <md-tr>
      <md-td>3</md-td>
      <md-td>访问应用自有资源</md-td>
      <md-td>[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)使用 tenant_access_token 可以直接访问应用自有资源： [文件夹](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)、[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)</md-td>
    </md-tr>
    <md-tr>
      <md-td>4</md-td>
      <md-td>访问用户自有资源</md-td>
      <md-td>[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)使用 user_access_token 可以直接访问用户自有资源： [文件夹](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)、[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)
    </md-tr>
    <md-tr>
      <md-td>5</md-td>
      <md-td>使用tenant_access_token<br>访问应用非自有资源</md-td>
      <md-td>
1. 访问其他用户的[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)
需要取得[文档所有者](/ssl:ttdoc/ukTMukTMukTM/uQzNzUjL0czM14CN3MTN)的授权
	- 需要**应用**开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview)
	- 需要所有者打开对应的文档，在页面右上方「**...**」->「**...更多**」-> 「**添加文档应用**」入口添加
        
2. 访问 [知识库](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)需要获得知识库管理员的授权
	- 需要**应用**开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview)
    - 需要知识库管理员打开知识库节点文档，在页面右上方「**...**」->「**...更多**」-> 「**添加文档应用**」入口添加
    </md-tr>
    <md-tr>
      <md-td>6</md-td>
      <md-td>使用user_access_token<br>访问用户非自有资源</md-td>
      <md-td>
1. 访问其他用户的[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)
需要取得[文档所有者](/ssl:ttdoc/ukTMukTMukTM/uQzNzUjL0czM14CN3MTN)的授权
	- 需要所有者打开对应的文档，在页面右上方「**分享**」入口添加
2. 访问其他用户[文件夹](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)需要取得文件夹所有者的授权
    - 需要所有者在**我的空间**找到目标文件夹，右键菜单中「**分享**」入口添加
3. 访问[知识库](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)需要获得知识库管理员的授权
    - 需要知识库管理员打开知识库节点文档，在页面右上方「**分享**」入口添加
    </md-tr>
    <md-tr>
      <md-td>7</md-td>
      <md-td>接口测试</md-td>
      <md-td>你可以在 [API 调试台![API cn.svg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/90b013d1fc7c191381d3edd6cf147707_3VtIkELbfg.svg?height=24&lazyload=true&width=87)](https://open.feishu.cn/api-explorer?from=guide)中快速调试这些 API ，使用方法参见[API 调试台使用指南](/ssl:ttdoc/tools-and-resources/api-explorer-guide) </md-td>
    </md-tr>
    <md-tr>
      <md-td>8</md-td>
      <md-td>事件订阅</md-td>
      <md-td>需要到[开发者后台](https://open.feishu.cn/app)[配置事件回调地址](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM#2eb3504a),确保回调地址公网可访问。可参考[事件监听示例](/ssl:ttdoc/home/develop-a-bot-in-5-minutes/create-an-app)、[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM#2eb3504a)</md-td>
    </md-tr>
    <md-tr>
      <md-td>9</md-td>
      <md-td>日志检索</md-td>
      <md-td>当调用接口返回失败时，从返回的header部分获取 X-Tt-Logid: `20220501181xxx8035096193288FA`。<br>
再到应用管理后台，用[服务端日志检索](/ssl:ttdoc/tools-and-resources/open-api-log-query) 分析问题。</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
 
## 场景教学

:::html

<md-table>

<md-thead>

<md-tr>

<md-th style="width: 50%;">文档和知识库</md-th>

<md-th style="width: 50%;">电子表格和多维表格</md-th>

</md-tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>
  [基于云文档的周报管理](/ssl:ttdoc/home/management-weekly-report-based-docs/introduction)<br>
- 本示例介绍如何使用开放平台云文档能力进行团队周报管理。通过周报模版文档每周定时创建出新一周周报，并给团队成员授权文档编辑权限，自动将新周报文档归档到知识库指定节点，然后通过群机器人发送群消息通知所有人更新本周周报内容。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ea5d70cbe16da66b77a80166c014971c_IiEbKyRGv2.png?height=400&lazyload=true&width=752)

</md-td>
<md-td>
  [基于电子表格销售额统计](/ssl:ttdoc/home/sales-statistics-base-on-spreadsheets/sales-statistics-based-on-sheets)<br>
- 本示例介绍如何使用飞书电子表格的开放能力实现将外部销售额数据同步到电子表格中并进行总额统计的功能演示。通过接口创建出新的电子表格，然后写入外部数据、添加SUM统计公式并设置样式，最后给指定用户设置文档权限。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5bd421a712aaba3e3b91730d3c100940_3u5M7SfoKa.png?height=600&lazyload=true&width=1128)

</md-td>
 
<md-td>

</md-td>

</md-tr>
<md-tr>

<md-td>
  [知识库周报文档待办事项每日提醒](/ssl:ttdoc/home/todos-daily-reminder-of-weekly-report/todos-daily-reminder-of-weekly-report-in-wiki)<br>
- 本示例介绍如何使用开放平台云文档能力通过知识库接口查找到最近一期周报文档，用文档内容获取接口读取出周报中的待办事项，提取出待办事项的内容、负责人、截止时间并封装为提醒消息，发送消息到团队群进行待办事项的每日提醒。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e701e4f52c3e62d836bda29895396986_t8GeLd00qH.jpeg?height=600&lazyload=true&width=1128)

</md-td>
<md-td>
  [基于多维表格的敏捷项目周期管理](/ssl:ttdoc/home/agile-project-cycle-management-based-on-bitable/introduction)<br>
- 本示例介绍如何使用多维表格进行敏捷项目管理，通过日历开放能力将项目版本迭代周期创建为公开日历，供全团队订阅。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/495f1f62802e0f6464489e899e8f290b_gmAPN4YgK4.png?height=600&lazyload=true&width=1128)
</md-td>
 
<md-td>

</md-td>

</md-tr>
<md-tr>

<md-td>
    [文档数据迁移后替换文档中链接](/ssl:ttdoc/home/replace-links-in-documents-after-data-migration/introduction)<br>
- 本示例介绍如何使用开放平台云文档能力，在数据迁移场景将本地文件导入到飞书云文档，提取飞书文档中过期的链接，并修正为导入后的新链接地址。
  
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4deec4429a1fd23d230abbfaf46c275a_TKAxPjhUT0.png?height=600&lazyload=true&width=1128)

</md-td>
 
<md-td>

</md-td>

</md-tr>
</md-tbody>

</md-table>

:::
      
## 常见问题
### 云文档
[1. 什么是应用权限？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#top_anchor)
      
[2. 访问云文档资源需要开启哪些应用权限？如何申请？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#ef7b5cca)
      
[3. 什么是文档权限？文档协作者？如何添加？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#2431c595)<br>
      
[4. 应用权限与文档权限的区别？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#3a2d7c0d)<br>
      
[5. 遇到权限错误的排查建议？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#14f7258c)<br>
      
[6. 云文档资源相关 token（id） 和 type 说明？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#560bf735)<br>
      
[7. 如何获取云文档资源相关 token（id）？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#08bb5df6)<br>
      
[8. 如何使用应用身份（tenant_access_token）访问云文档资源？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#544fc362)<br>
      
[9. 如何使用用户身份（user_access_token）访问云文档资源？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#b198b489)<br>
      
[10. 如何获取应用 open_id？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#6dbaa8df)<br>
      
[11. 如何获取群组 chat_id？](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#b9ed5a20)<br>
      
### 云空间
[1. 云空间文件夹单层文件的个数限制。](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq#top_anchor)<br>
      
[2. 云空间文件接口的并发限制。](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq#2607455e)<br>
      
[3. 如何让应用（tenant_access_token）访问个人云空间中的文件夹？](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq#57915bea)<br>
      
[4. 如何获取文件夹、文件以及各种类型的在线文档token信息？](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq#11f90c8e)<br>
      
### 权限
[1. 如何获取应用访问凭证 tenant_access_token？](/ssl:ttdoc/ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/faq#top_anchor)<br>
      
[2. 如何获取用户身份访问凭证 user_access_token？](/ssl:ttdoc/ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/faq#7530d2fa)<br>
      
[3. 如何将应用（tenant_access_token）创建的文档分享给个人访问？](/ssl:ttdoc/ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/faq#4929f812)<br>
      
[4. 如何将个人创建的文档分享给应用（tenant_access_token）访问？](/ssl:ttdoc/ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/faq#40c028dd)<br>
      
[5. 如何将个人创建的文件夹分享给应用（tenant_access_token）访问？](/ssl:ttdoc/ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/faq#24b6a606)<br>
      
### 知识库
      
[1. 如何读取知识库文档的内容？如何编辑？](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#top_anchor)<br>
      
[2. 如何给应用授权访问知识库文档资源？](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#a40ad4ca)<br>
      
[3. 如何将应用添加为知识库管理员（成员）？](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#b5da330b)<br>
      
[4. 如何迁移云空间中的文档到知识库？](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#751813a5)<br>
      
[5. 如何将本地文件导入到知识库？](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#3ff8eeaa)<br>
      
[6. 如何导出知识库中文档？](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#6e47a356)<br>
      
      
## 帮助与反馈
1. 如果你在阅读开放文档的过程中发现文档描述有任何问题，请使用划词反馈（选中错误的信息，会浮出「**点击纠错**」的按钮），请在补充描述中指正我们的错误，我们会第一时间进行修正。
2. 如果你在使用开放平台的时候遇到任何问题，请先阅读相关模块的「**常见问题**」文档。如果还不能解决的问题，可以点击网页右下角「**技术支持**」按钮，我们会有专业的技术专家提供咨询服务。
      
