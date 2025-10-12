<!--
title: 多维表格概述
id: 7044101668698439683
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview
updatedAt: 1746601169000
source: https://open.feishu.cn/document/server-docs/docs/bitable-v1/bitable-overview
-->
# 多维表格概述
多维表格（Base）是全新的业务管理工具，帮助用户重构工作应用和团队协同模式，高效在线协同数据，随心构建个性化应用，轻松掌控全盘业务数据，和团队一起创造效率的无限可能。多维表格可以是一个表格，也可以是无数个应用。它拥有强大的底层开放能力，你可以通过多维表格 API 轻松打通内部其他业务系统，让业务数据通畅流转，实时同步。
## 典型案例

开放平台提供了集成多维表格能力的客户实践案例：

- [芝麻开门，在飞书五天打造门禁管理系统](https://open.feishu.cn/solutions/detail/wiseasy) 
- [飞书集成平台，让企业服务行业项目管理与销售体验升级](https://open.feishu.cn/solutions/detail/cloudwise)
## 接入流程

接入多维表格 OpenAPI 的流程如下图所示。了解更多，参考[云文档概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-overview) 的 **接入流程** 一节。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2bf59a67945d4fa8ec04de95d7e60fc9_hpiU9OyoGD.png?height=546&lazyload=true&width=6382)

## 开发教程
体验以下多维表格相关教程，了解如何运用多维表格 API 助力企业高效协作。

- [快速调用一个服务端 API（以创建多维表格接口为例）](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/call-a-server-api-base-example/introduction)
- [快速接入多维表格](/ssl:ttdoc/home/quick-access-to-base/preparation)
- [多维表格管理敏捷项目](/ssl:ttdoc/home/agile-project-cycle-management-based-on-bitable/introduction)

## 鉴权说明
使用 tenant_access_token 访问多维表格资源之前，请确保你的应用已经是多维表格的所有者或者协作者，否则会调用失败。
你可通过添加文档应用的方式将应用添加为协作者，详情参考[开通文档、电子表格等其它云文档资源权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app#223459af)；或通过应用身份创建一篇多维表格，再使用 tenant_access_token 来调用接口。

## 使用限制

使用多维表格接口，整体有以下限制或说明：
- 对于接口的批量操作，单次最高为 1,000 条记录，且响应状态是全部成功或者失败，不存在部分成功或失败的结果。
- 为保证稳定性，建议对单一多维表格同时只请求**一次** API 写操作。
单一多维表格中，各个资源的数量限制如下所示：

| **资源**    | **最大支持数量** |
| --------- | ---------- |
| 记录        | 不同租户的最大支持数量不同，开放平台没有额外限制。你可以在多维表格数据表 UI 中点击查看。  ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5bafd33990c42fcc8ef5d8c4c5760375_FzucbOdzz5.png?height=583&lazyload=true&width=1028)  |
| 字段        | 300，对于公式类型的字段，最多支持 100 个 |  |
| 视图        | 200        |
| 数据表+仪表盘       | 100        |
| 高级权限自定义角色 | 30         |
| 高级权限协作者   | 200        |

## 资源介绍

多维表格开放了多维表格 App、数据表、视图、记录、字段、仪表盘、高级权限等多种资源的接口。本小节介绍这几类资源的含义。了解更多多维表格的概念和使用说明，可参考飞书帮助中心文档[快速上手多维表格](https://www.feishu.cn/hc/zh-CN/articles/697278684206-%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC)。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c0e8e232f2057b25462b2f7704b2626c_MfUbOGXKne.png?height=7223&lazyload=true&maxWidth=700&width=12841)

### 多维表格 app

一个多维表格可以理解成是一个应用（app，但不是在开发者后台创建的应用），标记该应用的唯一标识为 `app_token`。作为一个应用，多维表格有多种形态：可以作为一个独立应用，也可以作为一个模块（block）与文档、电子表格结合。

#### 多维表格形态

| **多维表格形态** | **资源定义**             | **含义**                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 文件夹中的多维表格  | Base app             | 存储在飞书云空间（云盘）文件夹中的多维表格。URL 以 **feishu.cn/base** 开头![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_Xc87lb1mIE.png?height=766&lazyload=true&width=3004)                  |
| 知识库下的多维表格  | Base app 和 wiki node | 放置在知识库中的多维表格。URL 以 **feishu.cn/wiki** 开头![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bb2e4afcd9a67d6fac88dd959efbf8f5_W8ma47dqcz.png?height=408&lazyload=true&width=1410)                           |
| 文档嵌入多维表格   | Base docx block      | 即在"文档"中插入的多维表格，URL 以 **feishu.cn/docx** 开头![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d6a6091dbd3db056d1e4126651116f00_rLR5ryVX5P.png?height=808&lazyload=true&width=1620)    |
| 电子表格嵌入多维表格 | Base sheet block     | 在电子表格中嵌入的多维表格，URL 以 **feishu.cn/sheets** 开头![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3859f7bdf1f00878d2077175e34a09c1_O5wDuyRIFB.png?height=496&lazyload=true&width=1689) |

#### 多维表格 app_token 获取方式

不同形态的多维表格，其 `app_token` 的获取方式不同，具体如下所示。

##### **文件夹中的多维表格**

该类多维表格的 app_token 为 URL 下图高亮部分：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_sTn7sVvhOB.png?height=766&lazyload=true&maxWidth=700&width=3004)

##### **知识库下的多维表格**

需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取该类多维表格的 app_token。如下返回示例，当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值 `AW3Qbtr2cakCnesXzXVbbsrIcVT` 是多维表格的 `app_token`：
```json
{
    "node":{
        "space_id":"6946843325487912356",
        "node_token":"wikcnKQ1k3p******8Vabcef",
        "obj_token":"AW3Qbtr2cakCnesXzXVbbsrIcVT",  // 多维表格的 app_token
        "obj_type":"bitable",
        "parent_node_token":"wikcnKQ1k3p******8Vabcef",
        "node_type":"origin",
        "origin_node_token":"wikcnKQ1k3p******8Vabcef",
        "origin_space_id":"6946843325487912356",
        "has_child":false,
        "title":"标题",
        "obj_create_time":"1642402428",
        "obj_edit_time":"1642402428",
        "node_create_time":"1642402428",
        "creator":"ou_xxxxx",
        "owner":"ou_xxxxx"
    }
}
```

##### **文档嵌入多维表格**

文档中嵌入的多维表格，需要调用文档相关接口获取多维表格的 `app_token`。
调用[获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)，在返回结果中检索，其中 `bitable.token` 字段的值 `AW3Qbtr2cakCnesXzXVbbsrIcVT_tblkIYhz52o6G5nx`是用 `_` 隔开的 `app_token` 和 `table_id`；
```json
{
  "bitable": {
    "token": "AW3Qbtr2cakCnesXzXVbbsrIcVT_tblkIYhz52o6G5nx"
  },
  "block_id": "Mgeadqo4CoeoOGxI7Lgb4GNicEd",
  "block_type": 18,
  "parent_id": "YUqpdO2eLo7xJdxy5RQbuQBdctf"
}
```

##### **电子表格嵌入多维表格**

电子表格中嵌入的多维表格，需要调用电子表格相关接口获取多维表格的 `app_token`。
若电子表格中嵌有多维表格，需调用[获取表格元数据](/ssl:ttdoc/ukTMukTMukTM/uETMzUjLxEzM14SMxMTN)，在返回结果中将返回 `blockInfo`。其中，当 `blockType` 的值为 `BITABLE_BLOCK` 时，blockToken 字段的值`AW3Qbtr2cakCnesXzXVbbsrIcVT_tblkIYhz52o6G5nx` 是用 `_` 隔开的 `app_token` 和 `table_id`。
```json
{
  "blockInfo": {
    "blockToken": "AW3Qbtr2cakCnesXzXVbbsrIcVT_tblkIYhz52o6G5nx",
    "blockType": "BITABLE_BLOCK"
  },
  "columnCount": 0,
  "frozenColCount": 0,
  "frozenRowCount": 0,
  "index": 0,
  "rowCount": 0,
  "sheetId": "***",
  "title": "*** "
}
```

### 数据表 table

多维表格的数据容器，一个多维表格中至少有一个数据表（table），也可能有多个数据表。每个数据表都有唯一标识 `table_id`。`table_id` 在一个多维表格 App 中唯一，在全局不一定唯一。
你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的唯一标识。你也可通过[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)接口获取 `table_id`。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/18741fe2a0d3cafafaf9949b263bb57d_yD1wkOrSju.png?height=746&lazyload=true&maxWidth=700&width=2976)

### 视图 view

指数据的汇总和展现形式。视图有多种类型，包括表格视图、看板视图、画册视图、甘特视图和表单视图等，可参考飞书帮助中心文档[视图类型](https://www.feishu.cn/hc/zh-CN/articles/360049067931-%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC%E8%A7%86%E5%9B%BE#tabs0|lineguid-6kjqG)。一个数据表至少有一个视图，可能有多个视图。每个视图都有唯一标识 `view_id`，`view_id` 在一个多维表格中唯一，在全局不一定唯一。
你可通过多维表格 URL 获取 `view_id`，下图高亮部分即为当前视图的唯一标识。你也可通过[列出视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/list)接口获取 `view_id`。暂时无法获取到嵌入到文档中的多维表格的 `view_id`。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/140668632c97e0095832219001d17c54_c76RMwZAgW.png?height=748&lazyload=true&maxWidth=700&width=2998)

#### **表单视图 form**

表单视图是多维表格的一种视图类型，形式类似于问卷，可以用来收集信息和数据。每个表单都有唯一标识 `form_id`，即当前视图的 `view_id`。`form_id` 的获取方式和 `view_id` 的获取方式相同。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b8d9bd2d7e1ca7d0cc955ef7f1f4fe16_zDd5TqOh3Q.png?height=942&lazyload=true&maxWidth=600&width=1327)

### 记录 record

数据表中的每一行数据都是一条记录（record）。每条记录都有唯一标识 `record_id`，`record_id` 在一个多维表格中唯一，在全局不一定唯一。`record_id` 需要通过[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口获取。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/abc84b39be159ccdcafa707ee141144d_3fcTz7mMP5.png?height=503&lazyload=true&maxWidth=700&width=1536)

### 字段 field

即多维表格的“列”，多维表格提供丰富的字段类型。每个字段都有唯一标识 `field_id`，`field_id` 在一个多维表格内唯一，在全局不一定唯一。`field_id` 需要通过[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)接口获取。了解更多字段说明，参考[字段编辑指南](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/guide)。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6fb2359552ed15433289fbd0d9fc53c1_mGnTo91OJa.png?height=656&lazyload=true&maxWidth=700&width=1170)

### 仪表盘 block

仪表盘与数据看板类似，可以从不同的维度统计对多维表格中的数据进行统计。了解更多，参考飞书帮助中心文档[使用多维表格仪表盘](https://www.feishu.cn/hc/zh-CN/articles/161059314076-%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC%E4%BB%AA%E8%A1%A8%E7%9B%98)。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fae3c8a886a0075fdeeefe5b74f274e5_WepjCfS7Hx.png?height=1490&lazyload=true&maxWidth=600&width=2794)

仪表盘的唯一标识为 `block_id`，以 `blk` 开头，你可通过多维表格 URL 获取 `block_id`，下图高亮部分即为当前仪表盘的唯一标识，也可通过[列出仪表盘](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-dashboard/list)接口获取。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a966d15323ee73c66b1e9a31d34ae6c7_x3ctncH2nO.png?height=575&lazyload=true&maxWidth=600&width=1397)
  

### 高级权限

高级权限允许用户针对单一数据表设置哪些用户可以查看、编辑指定的行，或是设置针对某用户可以编辑的列。高级权限接口分为 **自定义角色** 和 **协作者** 两部分，多维表格的 **所有者** 或者 **有可管理权限** 的用户可通过接口设置高级权限，管理高级权限的协作者。了解更多，参考[高级权限概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role/advanced-permission-guide)。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9a6f4194ee269de14c8ee1f077e5f782_mp94yLqGBE.png?height=760&lazyload=true&maxWidth=500&width=871)

#### **自定义角色 role**

在高级权限中添加角色并设置权限，该角色即为自定义角色。每个自定义角色都有唯一标识 `role_id`。`role_id` 需要通过[列出自定义角色](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role/list)接口获取。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3be8cd2e40f0f981370bc87251dafebd_i1xBoWPh2Z.png?height=761&lazyload=true&maxWidth=500&width=880)

#### **协作者 member**

高级权限设置中，一个自定义角色（role）中的成员，即为协作者（member）。每个协作者都有唯一标识 `member_id`。`member_id` 需要通过[列出协作者](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role-member/list)接口获取。


### 自动化流程 workflows


自动化流程是用户给多维表格设定的自动运行规则。设定“触发条件”和“执行操作”以后，多维表格会根据数据变更，自动执行下一步操作。你可通过[列出自动化流程](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-workflow/list)获取自动化流程的 ID，即 `workflow_id`。

## 方法列表
以下为多维表格的方法列表。其中，“商店”代表[商店应用](/ssl:ttdoc/home/app-types-introduction/overview)；“自建”代表[企业自建应用](/ssl:ttdoc/home/app-types-introduction/overview)，了解更多应用相关信息，参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。了解调用服务端 API 的流程，参考[流程概述](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ugzNwEjL4cDMx4CO3ATM)。


### 多维表格 app
:::html
<md-table>
<md-thead>

<tr>

<md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>
  
  

<md-tr>

<md-td>

<md-text type="field-name" >[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)

   `POST` /open-apis/bitable/v1/apps
  
  </md-text>

</md-td>

<md-td>
  
<md-perm name="base:app:create" desc="创建多维表格" tags="">创建多维表格</md-perm>
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
  
  

<md-tr>

<md-td>

<md-text type="field-name" >[复制多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/copy)

   `POST` /open-apis/bitable/v1/apps/:app_token/copy
  
  </md-text>

</md-td>

<md-td>
  
<md-perm name="base:app:copy" desc="复制多维表格" tags="">复制多维表格</md-perm>
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[获取多维表格元数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/get)

   `GET` /open-apis/bitable/v1/apps/:app_token
  
  </md-text>

</md-td>

<md-td>
  
<md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" tags="">查看、评论和导出多维表格</md-perm>
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[更新多维表格元数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/update)

   `PUT` /open-apis/bitable/v1/apps/:app_token
  
  </md-text>

</md-td>

<md-td>
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

</md-tbody>

</md-table>

:::
  
  
### 数据表 table



:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)

   `GET` /open-apis/bitable/v1/apps/:app_token/tables
  
  </md-text>

</md-td>

<md-td>
<md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" tags="">查看、评论和导出多维表格</md-perm>
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[新增数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables
  

</md-td>


<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[新增多个数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/batch_create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables/batch_create
 
</md-td>

<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[删除数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/delete)</md-text>
  
`DELETE` /open-apis/bitable/v1/apps/:app_token/tables/:table_id

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

  <md-tr>

<md-td>

<md-text type="field-name" >[删除多个数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/batch_delete)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables/batch_delete

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>


</md-tbody>

</md-table>

:::


### 视图 view

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[列出视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/list)

   `GET` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views
  
  </md-text>

</md-td>

<md-td>
  <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" tags="">查看、评论和导出多维表格</md-perm>
  <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[新增视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views
  

</md-td>


<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

  

<md-tr>

<md-td>

<md-text type="field-name" >[更新视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/patch)

   `PATCH` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id
  
  </md-text>

</md-td>

<md-td>
  <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" tags="">查看、评论和导出多维表格</md-perm>
  <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

 

<md-tr>

<md-td>

<md-text type="field-name" >[检索视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/get)

   `GET` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id
  
  </md-text>

</md-td>

<md-td>
  <md-perm name="base:view:read" desc="检索视图" support_app_types="custom,isv" tags="">检索视图</md-perm>
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
            <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" support_app_types="custom,isv" tags="">查看、评论和导出多维表格</md-perm>
     
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[删除视图](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/delete)</md-text>
  
`DELETE` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id
 
</md-td>

<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>





</md-tbody>

</md-table>

:::


### 记录 record

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[列出记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/list)

   `GET` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records
  
  </md-text>

</md-td>

<md-td>
  <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" tags="">查看、评论和导出多维表格</md-perm>
  <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[检索记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/get)</md-text>
  
`GET` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id
  

</md-td>


<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[新增记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records
 
</md-td>

<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[新增多条记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_create

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[更新记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/update)</md-text>
  
`PUT` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id

</md-td>

<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
  <md-tr>

<md-td>

<md-text type="field-name" >[更新多条记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_update)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_update

</md-td>

<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
  
    <md-tr>

<md-td>

<md-text type="field-name" >[删除记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/delete)</md-text>
  
`DELETE` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
    <md-tr>

<md-td>

<md-text type="field-name" >[删除多条记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_delete)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_delete

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

</md-tbody>

</md-table>

:::


### 字段 field

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[列出字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)

   `GET` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields
  
  </md-text>

</md-td>

<md-td>
  <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" tags="">查看、评论和导出多维表格</md-perm>
  <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[新增字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields
  

</md-td>


<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[更新字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/update)</md-text>
  
`PUT` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id
 

</md-td>

<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[删除字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/delete)</md-text>
  
`DELETE` /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>



</md-tbody>

</md-table>

:::



### 仪表盘 dashboard

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[复制仪表盘](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-dashboard/copy)

   `POST` /open-apis/bitable/v1/apps/:app_token/dashboards/:block_id/copy
  
  </md-text>

</md-td>

<md-td>
<md-perm name="base:dashboard:copy" desc="复制仪表盘" support_app_types="custom,isv" tags="">复制仪表盘</md-perm>
            <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
     

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[列出仪表盘](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-dashboard/list)</md-text>
  
`GET` /open-apis/bitable/v1/apps/:app_token/dashboards
  

</md-td>


<md-td>

 <md-perm name="base:dashboard:read" desc="获取仪表盘信息" support_app_types="custom,isv" tags="">获取仪表盘信息</md-perm>
            <md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理多维表格</md-perm>
            <md-perm name="bitable:app:readonly" desc="查看、评论和导出多维表格" support_app_types="custom,isv" tags="">查看、评论和导出多维表格</md-perm>
    </md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>




</md-tbody>

</md-table>

:::

### 自定义角色 role


:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[列出自定义权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role/list)
   `GET` /open-apis/bitable/v1/apps/:app_token/roles
  
  </md-text>

</md-td>

<md-td>
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[新增自定义权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/roles/:role_id

</md-td>


<md-td>
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[更新自定义权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role/update)</md-text>
  
`PUT` /open-apis/bitable/v1/apps/:app_token/roles/:role_id
 
</md-td>

<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>


</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[删除自定义权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role/delete)</md-text>
  
`DELETE` /open-apis/bitable/v1/apps/:app_token/roles/:role_id

</md-td>

<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>



</md-tbody>

</md-table>

:::

### 协作者 member

高级权限下的协作者。

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[列出协作者](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role-member/list)

   `GET` /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members
  
  </md-text>

</md-td>

<md-td>
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[新增协作者](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role-member/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members

</md-td>


<md-td>

<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>



<md-text type="field-name" >[删除协作者](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role-member/delete)</md-text>
  
`DELETE` /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/:member_id

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>


<md-tr>

<md-td>



<md-text type="field-name" >[批量新增协作者](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role-member/batch_create)</md-text>
  
`POST` /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_create

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
  
  
  <md-tr>

<md-td>



<md-text type="field-name" >[批量删除协作者](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role-member/batch_delete)</md-text>
  
`DELETE` /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_delete

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
  
</md-tbody>

</md-table>

:::


