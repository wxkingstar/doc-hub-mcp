<!--
title: 群公告概述
id: 7472290559531237379
fullPath: /uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-overview
updatedAt: 1743663908000
source: https://open.feishu.cn/document/group/upgraded-group-announcement/group-announcement-overview
-->
# 群公告概述

本文档介绍飞书开放平台群组中的群公告能力相关的基本概念、使用限制、接入流程、方法列表等。


:::html
<md-alert type="tip">
本文档是针对新版群公告能力的说明。要了解新旧版本群公告能力的区别，参考[新旧版本说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-version-changes)。
</md-alert>
:::

## 基础概念

群公告 OpenAPI 中，两个基础概念为群公告和块。

### 群公告

群公告是群组中的公告文档，采用飞书云文档承载，每个群组只有一个群公告，每篇群公告都有唯一的 `chat_id`作为标识。要获取群的 `chat_id`，参考以下任一方式。
- [创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)，从返回结果中获取该群的 `chat_id`。
- 调用[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)接口，可以查询用户或机器人所在群的 `chat_id`。
- 调用[搜索对用户或机器人可见的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)，可搜索用户或机器人所在的群、对用户或机器人公开的群的 `chat_id`。
  
群公告的基础元数据结构如下：

``` json
{
    "revision_id": int,    // 群公告当前版本号
    "create_time": int,    // 群公告生成的时间戳（秒）
    "update_time": int,    // 群公告更新的时间戳（秒）
    "owner_id": string,    // 群公告所有者 ID
    "owner_id_type": string,    // 群公告所有者的 ID 类型
    "modifier_id": string,    // 群公告最新修改者 ID
    "modifier_id_type": string,    // 群公告最新修改者 ID 类型
    "announcement_type": string    // 群公告类型，新版群公告为 docx，旧版群公告为 doc
}
```

### 块

在一篇群公告中，有多个不同类型的段落，这些段落被定义为块（Block）。块是群公告中的最小构建单元，是内容的结构化组成元素，有着明确的含义。块有多种形态，可以是一段文字、一张电子表格、一张图片或一个多维表格等。每个块都有唯一的 `block_id` 作为标识。
每一篇群公告都有一个根块，即页面块（Page block）。页面块的 `block_id` 与其所在群公告的 `chat_id` 相同。在数据结构中，群公告的页面块与其它块形成父子关系，页面块为父块，称为 Parent，其它块为子块，称为 Children。其它块之间也可形成父子关系。

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
        <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/989b8ffa18439845801a8971b67c7088_VVWeAhSMk4.png" alt="示例图">
       
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
    
块与块之间可形成父子关系。在调用[在群公告中创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)接口时，你需先了解以下规则，再指定父块和子块。

**父块规则**
    
只有具有容纳能力的块才可以作为父块，对其添加子块。这些块包括：

- 文本功能类的块：页面（Page）、文本（Text）、标题（Heading）、无序列表（Bullet）、有序列表（Ordered）、任务（Task）、待办事项（Todo）块。
- 容器功能类的块：表格单元格（TableCell）、分栏列（GridColumn）、高亮（Callout）、引用容器（QuoteContainer）块。
    
**子块规则**

  以下块不可作为子块被添加至父块内：
  | 块 | 说明 |
  | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | 页面（Page） | 一篇群公告有且只有一个页面块，在群公告创建时自动生成。 |
  | 分栏列（GridColumn） | 只可通过[批量更新群公告块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/batch_update)接口中的 InsertGridColumnRequest 操作添加，不可直接作为子块添加。 |
  | 思维笔记（Mindnote） | 不支持。 |
  | 单元格（TableCell） | 只可通过[批量更新群公告块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/batch_update)接口中的 InsertTableRowRequest 或 InsertTableColumnRequest 操作添加，不可直接作为子块添加。 |
  | 视图（View） | 在添加文件（File）块时，会自动生成默认的视图块。 |
  | 未定义（Undefined） | 无效操作。 |
  | 流程图 & UML（Diagram） | 不支持。 |
    
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

你可使用开放平台提供的一系列群公告开放接口对不同种类的块进行操作，包括创建、读取、以及编辑块的内容。针对不同块，群公告开放接口的支持情况不同，详情参考下表。
下表中，“/” 代表对应的操作无需支持或已在其他开放能力的场景中覆盖，具体情况如下：

- 能力无需支持。例如，分割线（Divider）块不含内容，因此开放平台无需提供读取和编辑其内容的能力；
- 能力已间接支持。例如，针对单元格（TableCell）块，你会在编辑表格（Table）块的内容时直接创建或删除单元格块，因此开放平台无需为单元格（TableCell）块单独提供创建能力；
- 能力已在其他开放能力的场景中覆盖。针对多维表格（Bitable）块，你可在创建空的多维表格块后，根据返回的 Token 值使用多维表格的开放能力调用对应的读取和编辑接口。了解多维表格的开放能力，参考[多维表格方法列表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)。
  | 块 | 创建块 | 读取内容 | 编辑内容 |
  | ---------------------- | --- | ---- | ---- |
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
  | 小组件（AddOns） | 支持 | 支持 | / |
  | Jira 问题（JiraIssue） | / | 支持 | / |
  | Wiki 子目录（WikiCatalog） | 支持 | / | / |
  | 画板（Board） | 支持 | 支持 | / |
  | 未定义块（Undefined） | / | / | / |

## 接入流程

接入群公告 OpenAPI 的流程如下图所示。了解更多，参考[群组概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/overview)的 **接入流程** 一节。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e2c712313cbc2da9b298804cbcf94e2_mZ7KWsWpd5.png?height=214&lazyload=true&width=2276)

## 方法列表

以下为群公告和块的 OpenAPI 列表。

### 群公告
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
                <md-text type="field-name" >`GET` 获取群公告基本信息
<br>[/open-apis/docx/v1/chats/:chat_id/announcement](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement/get)</md-text>
            </md-td>
            <md-td>
                <md-perm name="im:chat.announcement:read" desc="查看群公告信息" tags="">查看群公告信息</md-perm>
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
                <md-text type="field-name" >`GET` 获取群公告所有块
<br>[/open-apis/docx/v1/chats/:chat_id/announcement/blocks](/ssl:ttdocopen-apis/docx/v1/chats/:chat_id/announcement/blocks)</md-text>
            </md-td>
            <md-td>
                <md-perm name="im:chat.announcement:read" desc="查看群公告信息" tags="">查看群公告信息</md-perm>
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
                <md-text type="field-name" >`POST` 在群公告中创建块
<br>[/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create)</md-text>
            </md-td>
            <md-td>
                <md-perm name="im:chat.announcement:write_only" desc="更新群公告内容" tags="">更新群公告内容</md-perm>
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
                <md-text type="field-name" >`PATCH` 批量更新群公告块的内容
<br>[/open-apis/docx/v1/chats/:chat_id/announcement/blocks/batch_update](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/batch_update)</md-text>
            </md-td>
            <md-td>
                <md-perm name="im:chat.announcement:write_only" desc="更新群公告内容" tags="">更新群公告内容</md-perm>
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
                <md-text type="field-name" >`GET` 获取群公告块的内容<br>[open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/get)</md-text>
            </md-td>
            <md-td>
                <md-perm name="im:chat.announcement:read" desc="查看群公告信息" tags="">查看群公告信息</md-perm>
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
                <md-text type="field-name" >`GET` 获取所有子块<br>[/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/get)</md-text>
            </md-td>
            <md-td>
                <md-perm name="im:chat.announcement:read" desc="查看群公告信息" tags="">查看群公告信息</md-perm>
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
                <md-text type="field-name" >`DELETE` 删除群公告中的块<br>[/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children/batch_delete](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/batch_delete)</md-text>
            </md-td>
            <md-td>
                <md-perm name="im:chat.announcement:write_only" desc="更新群公告内容" tags="">更新群公告内容</md-perm>
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