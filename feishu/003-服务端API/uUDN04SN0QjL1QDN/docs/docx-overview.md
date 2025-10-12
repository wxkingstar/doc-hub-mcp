<!--
title: 文档概述
id: 7068199542315221020
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview
updatedAt: 1752809900000
source: https://open.feishu.cn/document/server-docs/docs/docs/docx-v1/docx-overview
-->
# 文档概述

本文档介绍飞书开放平台云文档中的文档能力相关的基本概念、使用限制、接入流程、方法列表等。

:::note
本文档是针对新版文档能力的说明。要了解新旧版本文档能力的区别，参考[新旧版本说明](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs/upgraded-docs-access-guide/upgraded-docs-openapi-access-guide)。
:::

## 基础概念

文档 OpenAPI 中，两个基础概念为文档和块。

### 文档
    
文档是用户在云文档中创建的一篇在线文档。每篇文档都有唯一的 `document_id` 作为标识。要获取文档的 `document_id`，参考以下步骤。



  
- 若文档资源存储在云盘中，其云文档类型为文档（docx）。在该情况下，你可通过以下两种方式获取：

	- 通过 URL 地址获取：直接在浏览器中打开文档，在地址栏中获取文档的 `document_id`。
 
      ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f8dac29d8ea3f01f5a651e0445193213_W0CZqRcbHM.png?height=639&lazyload=true&width=2161)

  - 通过开放平台接口获取

      1. 通过[获取我的空间（root folder）元数据](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)获取根文件夹 token。
      2. 通过[获取文件夹下文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list) 获取其中文档资源的 `document_id`。

- 若文档挂载在知识库中，你需通过知识库相关接口[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)获取该节点下挂载的云资源的 `obj_token` 和 `obj_type`。在该情况下，`obj_type` 为 `docx` 时，其对应的 `obj_token`  即为文档的 `document_id`。
 
文档的基础元数据结构如下：

```JSON
"document": {
    "document_id": string, // 文档的唯一标识
    "revision_id": int,   // 文档版本的标识，可指定要查询或更新的文档版本
    "title": string, // 文档标题
    "display_setting": { // 文档展示设置
        "show_authors": boolean, // 文档信息中是否展示文档作者
        "show_comment_count": boolean, // 文档信息中是否展示评论总数
        "show_create_time": boolean, // 文档信息中是否展示文档创建时间
        "show_like_count": boolean, // 文档信息中是否展示点赞总数
        "show_pv": boolean, // 	文档信息中是否展示文档访问次数
        "show_uv": boolean  // 文档信息中是否展示文档访问人数
    },
    "cover": {  // 文档封面
        "token": string, // 封面图片的 token
        "offset_ratio_x": float, // 视图在水平方向的偏移比例
        "offset_ratio_y": float // 视图在垂直方向的偏移比例
    }
}
```
### 块
在一篇文档中，有多个不同类型的段落，这些段落被定义为块（Block）。块是文档中的最小构建单元，是内容的结构化组成元素，有着明确的含义。块有多种形态，可以是一段文字、一张电子表格、一张图片或一个多维表格等。每个块都有唯一的 `block_id` 作为标识。

每一篇文档都有一个根块，即页面块（Page block）。页面块的 `block_id` 与其所在文档的 `document_id` 相同。在数据结构中，文档的页面块与其它块形成父子关系，页面块为父块，称为 Parent，其它块为子块，称为 Children。其它块之间也可形成父子关系。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3afeecbc5410c1d3a9e89a2a86d89d65_VIM5eQY6T8.png?height=1721&lazyload=true&width=3059)

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/744512f0ae06add904ef1b5625ea117b_RRPMtAFaWm.png?height=548&lazyload=true&width=1349)

**块的类别**

从功能角度，块可以分为以下几种类别。了解块的具体类型，参考 [BlockType 的枚举值](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/data-structure/block#e8ce4e8e)。


:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 10%;"><b>功能类别</b></md-th>  
      <md-th style="width: 30%;"><b>典型块</md-th>  
      <md-th style="width: 40%;"><b>示例</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td style="width: 30%;">
        文本类
      </md-td>  
      <md-td style="width: 30%;">页面（Page）、文本（Text）、标题（Heading）、无序列表（Bullet）、有序列表（Ordered）、代码（Code）、待办事项（Todo）块等。</md-td>  
      <md-td style="width: 40%;">
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f6a33cebc5a4c521348ee3f58fee80c1_04nl3VcOKG.png?height=282&lazyload=true&width=1155" alt="示例图">
      </md-td> 
    </md-tr>  
    <md-tr> 
      <md-td style="width: 30%;">
        数据类
      </md-td>  
      <md-td style="width: 30%;">多维表格（Bitable）、电子表格（Sheet）、思维笔记（Mindnote）块。</md-td>  
      <md-td style="width: 40%;">
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ae1f17cb17db5981934bbc24164e2486_TvXBnK3iKJ.png?height=895&lazyload=true&width=1261" alt="示例图">
      </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td style="width: 30%;">
        视觉类
      </md-td>  
      <md-td style="width: 30%;">分割线（Divider）块。</md-td>  
      <md-td style="width: 40%;">
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5bab6560a4986d3952a42aaf10ebda4a_FbbaEpbuDW.png?height=235&lazyload=true&width=831" alt="示例图">
      </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td style="width: 30%;">
        媒体类
      </md-td>  
      <md-td style="width: 30%;">图片（Image）、文件（File）、内嵌（Iframe）块等。</md-td>  
      <md-td style="width: 40%;">
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/011fab483d6e0a78866822c0c97d83b9_cUHij6iM8v.png?height=607&lazyload=true&width=1308" alt="示例图">
      </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td style="width: 30%;">
        协作类
      </md-td>  
      <md-td style="width: 30%;">会话卡片（ChatCard）块。</md-td>  
      <md-td style="width: 40%;">
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/825c80da5837383126c6bc7f79231d76_gVWqx5c3sf.png?height=249&lazyload=true&width=800" alt="示例图">
      </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td style="width: 30%;">
        容器类
      </md-td>  
      <md-td style="width: 30%;">表格单元格（TableCell）、分栏列（GridColumn）、高亮（Callout）、视图（View）、引用容器（QuoteContainer）块等。</md-td>  
      <md-td style="width: 40%;">
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0d57c3278c1f162bf1f08d6a95ea7add_IBAgBSnLeY.png?height=121&lazyload=true&width=940" alt="示例图">
      </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td style="width: 30%;">
        垂直类
      </md-td>  
      <md-td style="width: 30%;">流程图 & UML 图（Diagram）块。</md-td>  
      <md-td style="width: 40%;">
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4612455f3a2ee8ec863a1fd5ec76a5e4_fX9UlpFdxI.png?height=487&lazyload=true&width=846" alt="示例图">
      </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td style="width: 30%;">
        辅助类
      </md-td>  
      <md-td style="width: 30%;">表格（Table）、分栏（Grid）块等。</md-td>  
      <md-td style="width: 40%;">
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0c6636681768b75ebff1ee77d93307d5_7n04BJSeIg.png?height=397&lazyload=true&width=1664" alt="示例图">
      </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td style="width: 30%;">
        第三方块
      </md-td>  
      <md-td style="width: 30%;">开放平台小组件（ISV）块。</md-td>  
      <md-td style="width: 40%;">
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/eb5b07b98b5c0b352faaa42a2dcc776a_RxVQWekeUX.png?height=225&lazyload=true&width=786" alt="示例图">
      </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td style="width: 30%;">
        未定义块
      </md-td>  
      <md-td style="width: 30%;">/</md-td>  
      <md-td style="width: 40%;"></md-td> 
    </md-tr> 
  </md-tbody> 
</md-table>
:::


**块的父子关系规则**

块与块之间可形成父子关系。在调用[创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-children/create)接口时，你需先了解以下规则，再指定父块和子块。

**父块规则**

只有具有容纳能力的块才可以作为父块，对其添加子块。这些块包括：

- 文本功能类的块：页面（Page）、文本（Text）、标题（Heading）、无序列表（Bullet）、有序列表（Ordered）、任务（Task）、待办事项（Todo）块。
- 容器功能类的块：表格单元格（TableCell）、分栏列（GridColumn）、高亮（Callout）、引用容器（QuoteContainer）块。

**子块规则**

以下块不可作为子块被添加至父块内：

| **块**              | **说明**   |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 页面（Page）           | 一篇文档有且只有一个页面块，在文档创建时自动生成。                                                                                                                                                                                                                                             |
| 分栏列（GridColumn）    | 只可通过[更新块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/patch)接口中的 `InsertGridColumnRequest` 操作添加，不可直接作为子块添加。                                                                                                                      |
| 思维笔记（Mindnote）     | 不支持。                                                                                                                                                                                                                                                                  |
| 单元格（TableCell）     | 只可通过[更新块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/patch)接口中的 `InsertTableRowRequest` 或 `InsertTableColumnRequest` 操作添加，不可直接作为子块添加。 |
| 视图（View）           | 在添加文件（File）块时，会自动生成默认的视图块。                                                                                                                                                                                                                                            |
| 未定义（Undefined）     | 无效操作。                                                                                                                                                                                                                                                                 |
| 流程图 & UML（Diagram） | 不支持。                                                                                                                                                                                                                                                                  |
**父子关系限制**

其它的父子关系限制如下表所示：

:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 30%;"><b>块</md-th>  
      <md-th style="width: 70%;"><b>限制</md-th>  
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>
        单元格（Table Cell）
      </md-td>  
      <md-td>
        不允许为单元格（TableCell）块添加如下块作为子块：<br>• 表格（Table）<br>• 电子表格（Sheet）<br>• 多维表格（Bitable）<br>• OKR
      </md-td> 
    </md-tr>  
    <md-tr> 
      <md-td>
        分栏列（Grid Column）
      </md-td>  
      <md-td>
        不允许为分栏列（GridColumn）添加如下块作为子块：<br>• 分栏（Grid）<br>• 多维表格（Bitable）<br>• OKR
      </md-td> 
    </md-tr> 
    <md-tr> 
      <md-td>
        高亮块（Callout）
      </md-td>  
      <md-td>
        只允许为高亮块（Callout）添加如下块作为子块：<br>• 文本（Text）<br>• 标题（HeadingN）<br>• 有序列表（Ordered）<br>• 无序列表（Bullet）<br>• 任务（Task）<br>• 待办事项（Todo）<br>• 引用（Quote）<br>• 引用容器（QuoteContainer）
      </md-td> 
    </md-tr> 
  </md-tbody> 
</md-table>
:::

## 使用限制

你可使用开放平台提供的一系列文档开放接口对不同种类的块进行操作，包括创建、读取、以及编辑块的内容。针对不同块，文档开放接口的支持情况不同，详情参考下表。

下表中，“/” 代表对应的操作无需支持或已在其他开放能力的场景中覆盖，具体情况如下：

- 能力无需支持。例如，分割线（Divider）块不含内容，因此开放平台无需提供读取和编辑其内容的能力；
- 能力已间接支持。例如，针对单元格（TableCell）块，你会在编辑表格（Table）块的内容时直接创建或删除单元格块，因此开放平台无需为单元格（TableCell）块单独提供创建能力；
- 能力已在其他开放能力的场景中覆盖。针对多维表格（Bitable）块，你可在创建空的多维表格块后，根据返回的 Token 值使用多维表格的开放能力调用对应的读取和编辑接口。了解多维表格的开放能力，参考[多维表格方法列表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)。

  | **块** | **创建块** | **读取内容** | **编辑内容** |
  |---|---|---|---|
  | 高亮块（Callout） | 支持 | 支持 | 支持 |
  | 表格（Table） | 支持 | 支持 | 支持 |
  | 文本（Text） | 支持 | 支持 | 支持 |
  | 分割线（Divider） | 支持 | / | / |
  | 分栏（Grid） | 支持 | 支持 | 支持 |
  | 内嵌块（Iframe） | 支持 | 支持 | 不支持 |
  | 会话卡片（ChatCard） | 支持 | / | / |
  | 图片（Image） | 支持 | / | / |
  | 文件（File） | 支持 | / | / |
  | 单元格（TableCell） | / | 支持 | 支持 |
  | 分栏列（GridColumn） | / | 支持 | 支持 |
  | 视图（View） | / | 支持 | 不支持 |
  | 三方块（ISV） | 支持 | / | / |
  | 多维表格（Bitable） | 支持 | / | / |
  | 电子表格（Sheet） | 支持 | / | / |
  | 思维笔记（Mindnote） | 不支持 | / | / |
  | UML 图（Diagram） | 不支持 | 不支持 | 不支持 |
  | 引用容器（QuoteContainer） | 支持 | 支持 | 支持 |
  | 任务（Task） | 不支持 | / | / |
  | OKR | 支持 | 支持 | / |
  | OKR 目标（OkrObjective） | / | 支持 | / |
  | OKR 关键结果（OkrKeyResult） | / | 支持 | / |
  | OKR 进展（OkrProgress） | / | 支持 | / |
  | 文档小组件（AddOns） | 支持 | 支持 | / |
  | Jira 问题（JiraIssue） | / | 支持 | / |
  | Wiki 子页面列表（旧版）（WikiCatalog） | 支持 | / | / |
  | 画板（Board） | 支持 | 支持 | / |
  | 议程（Agenda）| 不支持 | 支持 | / |
  | 议程项（AgendaItem）| / | 支持 | / |
  | 议程项标题（AgendaItemTitle）| / | 支持 | 不支持 |
  | 议程项内容（AgendaItemContent）| / | 支持 | / |
  | 链接预览（LinkPreview）| 支持 | 不支持 | / |
  | 源同步块（SourceSynced）| 不支持 | 支持 | / |
  | 引用同步块（ReferenceSynced）| 不支持 | 支持 | / |
  | Wiki 子页面列表（新版）（SubPageList）| 支持 | / | / |
  | AI 模板（AITemplate）| 不支持 | / | 不支持 |
  | 未定义块（Undefined） | / | / | / |

## 接入流程

接入文档 OpenAPI 的流程如下图所示。了解更多，参考[云文档-概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-overview) 的 **接入流程** 一节。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/42967c08b5e6619841ebd673f8e66f17_TRmROny4AI.png?height=546&lazyload=true&width=6382)

## 方法列表

以下为文档和块的 OpenAPI 列表。

### 文档
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 35%;"><b>方法 (API)</md-th>
            <md-th style="width: 25%;"><b>权限要求（满足任一）</md-th>
            <md-th style="width: 25%;"><b>访问凭证</md-th>
            <md-th style="width: 10%;"><b>商店</md-th>
            <md-th style="width: 10%;"><b>自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
              <md-tr>
            <md-td>
                <md-text type="field-name" >`GET` 获取文档基本信息<br>[/open-apis/docx/v1/documents/:document_id](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/get)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
                <md-perm name="docx:document:readonly" desc="查看新版文档" tags="">查看新版文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
            <md-tr>
            <md-td>
                <md-text type="field-name" >`GET` 获取文档纯文本内容<br>[/open-apis/docx/v1/documents/:document_id/raw_content](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/raw_content)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
                <md-perm name="docx:document:readonly" desc="查看新版文档" tags="">查看新版文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
              <md-tr>
            <md-td>
                <md-text type="field-name" >`GET` 获取文档所有块<br>[/open-apis/docx/v1/documents/:document_id/blocks](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)</md-text></md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
                <md-perm name="docx:document:readonly" desc="查看新版文档" tags="">查看新版文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >`POST` 创建文档<br>[/open-apis/docx/v1/documents](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/create)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>


    </md-tbody>
</md-table>
:::

### 块

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 35%;"><b>方法 (API)</md-th>
            <md-th style="width: 25%;"><b>权限要求（满足任一）</md-th>
            <md-th style="width: 25%;"><b>访问凭证</md-th>
            <md-th style="width: 10%;"><b>商店</md-th>
            <md-th style="width: 10%;"><b>自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
              <md-tr>
            <md-td>
                <md-text type="field-name" >`GET` 获取块<br>[/open-apis/docx/v1/documents/:document_id/blocks/:block_id](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/get)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
                <md-perm name="docx:document:readonly" desc="查看新版文档" tags="">查看新版文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
              <md-tr>
            <md-td>
                <md-text type="field-name" >`POST` 创建块<br>[/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-children/create)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >`POST` 创建嵌套块<br>[/open-apis/docx/v1/documents/:document_id/blocks/:block_id/descendant](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-descendant/create)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >`PATCH` 更新块<br>[/open-apis/docx/v1/documents/:document_id/blocks/:block_id](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/patch)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
            </md-td>
            <md-td>
            <md-tag type="token-tenant">tenant_access_token</md-tag>
            <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >`PATCH` 批量更新块<br>[/open-apis/docx/v1/documents/:document_id/blocks/batch_update](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/batch_update)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
            </md-td>
            <md-td>
            <md-tag type="token-tenant">tenant_access_token</md-tag>
            <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >`DELETE` 删除块<br>[/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children/batch_delete](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-children/batch_delete)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >`GET` 获取所有子块<br>[/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block-children/get)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>
                <md-perm name="docx:document:readonly" desc="查看新版文档" tags="">查看新版文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::