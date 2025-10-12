<!--
title: 电子表格概述
id: 6946238183702478876
fullPath: /ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview
updatedAt: 1750843216000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/overview
-->
# 电子表格概述

本文档介绍飞书开放平台电子表格能力相关的基本概念、使用限制、接入流程、方法列表等。

## 接入流程

接入电子表格 OpenAPI 的流程如下图所示。了解更多，参考[云文档-概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-overview) 的 **接入流程** 一节。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/910476e4674986957601e29f93ba9538_MV0JVXjLH8.png?height=546&lazyload=true&maxWidth=750&width=6382)


## 鉴权说明
使用 `tenant_access_token` 访问、操作电子表格资源之前，请确保应用已有电子表格的阅读、编辑、管理等文档权限，否则接口将返回 HTTP 403 或 400 状态码。了解更多，参考[开通文档、电子表格等云文档资源权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app#223459af)。

## 基础概念

电子表格 OpenAPI 中，基础概念为表格（spreadsheet）、工作表（sheet）和范围（range）。

### 表格

表格是承载数据的容器，提供数据处理、展示、分析的功能。一个表格包含一个或多个工作表。

每个表格都有一个 `spreadsheetToken` 作为唯一标识。你可通过以下任一方式获取表格的 `spreadsheetToken`：
-  电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 通过调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list) 获取。当响应体中的 type 为 sheet 时，对应的 token 即为电子表格的 spreadsheetToken

:::warning
对于知识库中的电子表格，你需调用[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口来获取电子表格的 `obj_token`。此时，该 `obj_token` 也是该表格的 `spreadsheetToken`。
:::

### 工作表

工作表（sheet）是表格中的单独页面。每个工作表都有自己的行和列，形成一个网格，用于组织和存储数据。

每一个工作表都有唯一的 `sheetId` 作为标识。你可通过以下任一方式获取工作表的 `sheetId`：
- 表格的 URL：https://sample.feishu.cn/sheets/Iow7sNNEphp3WbtnbCscPqabcef?sheet===giDk9k==
- 通过调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取

### 范围

在工作表中进行读取数据、写入数据、筛选数据等各类操作时，你需要通过 范围 `range` 参数指定操作数据的范围。`range` 参数的格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：
- `sheetId` 为工作表的唯一标识，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取。
- `<开始位置>:<结束位置>` 为工作表中单元格的范围，使用数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。
  
`range` 参数共有 4 种写法，分别为：
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 25%;">range 写法</md-th>
      <md-th style="width: 20%;">示例</md-th>
  <md-th style="width: 25%;">描述</md-th>
      <md-th>图示</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>&lt;sheetId&gt;!&lt;开始单元格&gt;:&lt;结束单元格&gt;</md-td>      <md-td>0bdf12!A1:B5</md-td>
      <md-td>ID 为 &lt;0bdf12&gt; 的工作表中，从 A1 到 B5 的区域。</md-td>

      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/76498891d78bff326b0bcffe43427fa9_fUFkCG77Vw.png?height=484&lazyload=true&maxWidth=222&width=722)</md-td>
    </md-tr>
    <md-tr>
      <md-td>&lt;sheetId&gt;!&lt;开始列&gt;:&lt;结束列&gt;</md-td>     <md-td>0bdf12!A:B</md-td>
      <md-td>ID 为 &lt;0bdf12&gt; 的工作表中，从 A 列到 B 列的区域。</md-td>
 
      <md-td>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c6a46f088f63e2f4c81dc6bc41811b2c_ZkQTxGQ1m5.png?height=596&lazyload=true&maxWidth=222&width=534)</md-td>
    </md-tr>
    <md-tr>
      <md-td>&lt;sheetId&gt;!&lt;开始单元格&gt;:&lt;结束列&gt;</md-td>     <md-td>0bdf12!A2:B</md-td>
      <md-td>ID 为 &lt;0bdf12&gt; 的工作表中，从 A2 所在行到结束行的行范围、A 列到 B 列的列范围圈定的区域。</md-td>
 
      <md-td>
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f727b1806cd1a5cbe6ceb74ecb6c2ed5_pyYMAKxMfB.png?height=564&lazyload=true&maxWidth=222&width=537)</md-td>
    </md-tr>
    <md-tr>
      <md-td>&lt;sheetId&gt;</md-td>
      <md-td>ID 为 &lt;sheetId&gt; 的工作表的所有区域。</md-td>
      <md-td>0bdf12</md-td>
      <md-td>/</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
## 使用限制

电子表格整体有如下限制：

- 单个电子表格中工作表的数量不可超过 300 个
- 单个工作表中列的数量不可超过 13,000 列（包含空列）
- 单个工作表中单元格的数量不可超过 5,000,000 个（包含空单元格）
- 单个单元格不超过 50,000 字符，由于服务端会增加控制字符，因此推荐每个单元格不超过 40,000 字符。
- 单篇文档中电子表格的数量不可超过 1,500 个   


电子表格相关接口有如下频率限制。你也可以在每个接口请求的基本信息中找到接口频率限制信息。
| 接口               | 限流值                                         |
| ------------------ | ---------------------------------------------- |
| [创建表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/create) |单租户单应用20次/分钟                      |
| [修改电子表格属性](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/patch)| 单租户单应用20次/分钟                     |
| [获取电子表格信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/get)  | 单租户单应用100次/分钟 |
| [操作工作表](/ssl:ttdoc/ukTMukTMukTM/uYTMzUjL2EzM14iNxMTN)   | 单租户单应用100次/秒 |
| [更新工作表属性](/ssl:ttdoc/ukTMukTMukTM/ugjMzUjL4IzM14COyMTN) | 单租户单应用100次/秒；单个文档只能串行调用 |
| [移动行列](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/move_dimension)    | 单租户单应用100次/分钟                     |
| [插入数据](/ssl:ttdoc/ukTMukTMukTM/uIjMzUjLyIzM14iMyMTN)    | 单租户单应用100次/秒；单个文档只能串行调用 |
| [追加数据](/ssl:ttdoc/ukTMukTMukTM/uMjMzUjLzIzM14yMyMTN)    | 单租户单应用100次/秒；单个文档只能串行调用 |
| [插入行列](/ssl:ttdoc/ukTMukTMukTM/uQjMzUjL0IzM14CNyMTN)    | 单租户单应用100次/秒；单个文档只能串行调用 |
| [增加行列](/ssl:ttdoc/ukTMukTMukTM/uUjMzUjL1IzM14SNyMTN)    | 单租户单应用100次/秒；单个文档只能串行调用 |
| [更新行列](/ssl:ttdoc/ukTMukTMukTM/uYjMzUjL2IzM14iNyMTN)    | 单租户单应用100次/秒；单个文档只能串行调用 |
| [删除行列](/ssl:ttdoc/ukTMukTMukTM/ucjMzUjL3IzM14yNyMTN)    | 单租户单应用100次/秒；单个文档只能串行调用 |
| [读取单个范围](/ssl:ttdoc/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN)  | 单租户单应用100次/秒                       |
| [读取多个范围](/ssl:ttdoc/ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN)  | 单租户单应用100次/秒                       |
| [向单个范围写入数据](/ssl:ttdoc/ukTMukTMukTM/uAjMzUjLwIzM14CMyMTN)| 单租户单应用100次/秒；单个文档只能串行调用 |
| [向多个范围写入数据](/ssl:ttdoc/ukTMukTMukTM/uEjMzUjLxIzM14SMyMTN)| 单租户单应用100次/秒；单个文档只能串行调用 |
| [设置单元格样式](/ssl:ttdoc/ukTMukTMukTM/ukjMzUjL5IzM14SOyMTN) | 单租户单应用100次/秒；单个文档只能串行调用 |
| [批量设置单元格样式](/ssl:ttdoc/ukTMukTMukTM/uAzMzUjLwMzM14CMzMTN)| 单租户单应用100次/秒；单个文档只能串行调用 |
| [合并单元格](/ssl:ttdoc/ukTMukTMukTM/ukDNzUjL5QzM14SO0MTN)   | 单租户单应用100次/秒；单个文档只能串行调用 |
| [拆分单元格](/ssl:ttdoc/ukTMukTMukTM/uATNzUjLwUzM14CM1MTN)   | 单租户单应用100次/秒；单个文档只能串行调用 |
| [写入图片](/ssl:ttdoc/ukTMukTMukTM/uUDNxYjL1QTM24SN0EjN)    | 单租户单应用100次/秒；单个文档只能串行调用 |
| [查找单元格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/find)   | 单租户单应用100次/分钟                     |
| [替换单元格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/replace)   | 单租户单应用20次/分钟                      |
| [创建条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-set)  | 单租户单应用100次/秒；单个文档只能串行调用 |
| [获取条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-get)  | 单租户单应用100次/秒；单个文档只能串行调用 |
| [更新条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-update)  | 单租户单应用100次/秒；单个文档只能串行调用 |
| [删除条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-delete)  | 单租户单应用100次/秒；单个文档只能串行调用 |
| [增加保护范围](/ssl:ttdoc/ukTMukTMukTM/ugDNzUjL4QzM14CO0MTN)  | 单租户单应用100次/秒；单个文档只能串行调用 |
| [获取保护范围](/ssl:ttdoc/ukTMukTMukTM/uQTM5YjL0ETO24CNxkjN)  | 单租户单应用100次/秒；单个文档只能串行调用 |
| [修改保护范围](/ssl:ttdoc/ukTMukTMukTM/uUTM5YjL1ETO24SNxkjN)  | 单租户单应用100次/秒；单个文档只能串行调用 |
| [删除保护范围](/ssl:ttdoc/ukTMukTMukTM/uYTM5YjL2ETO24iNxkjN)  | 单租户单应用100次/秒；单个文档只能串行调用 |
| [设置下拉列表](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/set-dropdown)  | 单租户单应用100次/秒；单个文档只能串行调用 |
| [删除下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/delete-datavalidation)| 单租户单应用100次/秒；单个文档只能串行调用 |
| [更新下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/update-datavalidation)| 单租户单应用100次/秒；单个文档只能串行调用 |
| [查询下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/query-datavalidation)| 单租户单应用100次/秒；单个文档只能串行调用 |
| [获取筛选](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/get)    | 单租户单应用100次/分钟                     |
| [创建筛选](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/create)    | 单租户单应用20次/分钟                      |
| [更新筛选](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/update)    | 单租户单应用20次/分钟                      |
| [删除筛选](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/delete)    | 单租户单应用100次/分钟                     |
| [创建筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/create)  | 单租户单应用100次/分钟                     |
| [获取筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/get)  | 单租户单应用100次/分钟                     |
| [查询筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/query)  | 单租户单应用100次/分钟                     |
| [更新筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/patch)  | 单租户单应用100次/分钟                     |
| [删除筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/delete)  | 单租户单应用100次/分钟                     |
| [创建筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/create)  | 单租户单应用100次/分钟                     |
| [获取筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/get)  | 单租户单应用100次/分钟                     |
| [查询筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/query)  | 单租户单应用100次/分钟                     |
| [更新筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/update)  | 单租户单应用100次/分钟                     |
| [删除筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/delete)  | 单租户单应用100次/分钟                     |
| [创建浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/create)  | 单租户单应用100次/分钟                     |
| [获取浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/get)  | 单租户单应用100次/分钟                     |
| [查询浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/query)  | 单租户单应用100次/分钟                     |
| [更新浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/patch)  | 单租户单应用100次/分钟                     |
| [删除浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/delete)  | 单租户单应用100次/分钟                     |




## 方法列表

以下为电子表格的方法列表。其中，“商店”代表应用商店应用；“自建”代表企业自建应用，了解更多应用相关信息，参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。了解调用服务端 API 的流程，参考[流程概述](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ugzNwEjL4cDMx4CO3ATM)。

### 表格


:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[创建电子表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/create)

`POST` /open-apis/sheets/v3/spreadsheets
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[获取电子表格信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/get)

`GET` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
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
                <md-text type="field-name" >[修改电子表格属性](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/patch)

`PUT` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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

### 工作表


:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[更新工作表属性](/ssl:ttdoc/ukTMukTMukTM/ugjMzUjL4IzM14COyMTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/sheets_batch_update
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[操作工作表](/ssl:ttdoc/ukTMukTMukTM/uYTMzUjL2EzM14iNxMTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/sheets_batch_update
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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

### 工作表 - 条件格式

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[创建条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-set)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats/batch_create
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[获取条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-get)

`GET` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
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
                <md-text type="field-name" >[更新条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-update)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats/batch_update
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[删除条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-delete)

`DELETE` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats/batch_delete
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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

### 工作表 - 筛选

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取筛选](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/get)

`GET` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet:readonly.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive:readonly.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[创建筛选](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/create)

`POST` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[更新筛选](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/update)

`PUT` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[删除筛选](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/delete)

`DELETE` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
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

### 工作表 - 筛选视图

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[删除筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/delete)

`DELETE` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[更新筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/patch)

`PATCH` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[查询筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/query)

`GET` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/query
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet:readonly.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive:readonly.desc.desc$$$</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[获取筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/get)

`GET` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet:readonly.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive:readonly.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[创建筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/create)

`POST` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
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

### 筛选视图 - 筛选条件


:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[删除筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/delete)

`DELETE` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[更新筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/update)

`PUT` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[查询筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/query)

`GET` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/query
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet:readonly.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive:readonly.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[获取筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/get)

`GET` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive:readonly.desc.desc$$$</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet:readonly.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
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
                <md-text type="field-name" >[创建筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/create)

`POST` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
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

### 工作表 - 行列

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[删除行列](/ssl:ttdoc/ukTMukTMukTM/ucjMzUjL3IzM14yNyMTN)

`DELETE` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dimension_range
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[更新行列](/ssl:ttdoc/ukTMukTMukTM/uYjMzUjL2IzM14iNyMTN)

`PUT` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dimension_range
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[增加行列](/ssl:ttdoc/ukTMukTMukTM/uUjMzUjL1IzM14SNyMTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dimension_range
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[插入行列](/ssl:ttdoc/ukTMukTMukTM/uQjMzUjL0IzM14CNyMTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/insert_dimension_range
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[移动行列](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/move_dimension)

`POST` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/move_dimension
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.drive:drive.desc.desc$$$</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">$$$sheets.v3.scope.sheets.v3.scope.sheets:spreadsheet.desc.desc$$$</md-perm>
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

 
### 行列 - 保护范围

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[增加保护范围](/ssl:ttdoc/ukTMukTMukTM/ugDNzUjL4QzM14CO0MTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_dimension
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[获取保护范围](/ssl:ttdoc/ukTMukTMukTM/uQTM5YjL0ETO24CNxkjN)

`GET` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_range_batch_get
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[修改保护范围](/ssl:ttdoc/ukTMukTMukTM/uUTM5YjL1ETO24SNxkjN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_range_batch_update
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[删除保护范围](/ssl:ttdoc/ukTMukTMukTM/uYTM5YjL2ETO24iNxkjN)

`DELETE` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_range_batch_del
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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

### 工作表 - 数据

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[插入数据](/ssl:ttdoc/ukTMukTMukTM/uIjMzUjLyIzM14iMyMTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_prepend
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[追加数据](/ssl:ttdoc/ukTMukTMukTM/uMjMzUjLzIzM14yMyMTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_append
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[读取单个范围](/ssl:ttdoc/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN)

`GET` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values/:range
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
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
                <md-text type="field-name" >[读取多个范围](/ssl:ttdoc/ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN)

`GET` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_batch_get
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
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
                <md-text type="field-name" >[向单个范围写入数据](/ssl:ttdoc/ukTMukTMukTM/uAjMzUjLwIzM14CMyMTN)

`PUT` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[向多个范围写入数据](/ssl:ttdoc/ukTMukTMukTM/uEjMzUjLxIzM14SMyMTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_batch_update
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[设置单元格样式 ](/ssl:ttdoc/ukTMukTMukTM/ukjMzUjL5IzM14SOyMTN)

`PUT` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/style
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[批量设置单元格样式 ](/ssl:ttdoc/ukTMukTMukTM/uAzMzUjLwMzM14CMzMTN)

`PUT` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/styles_batch_update
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[合并单元格](/ssl:ttdoc/ukTMukTMukTM/ukDNzUjL5QzM14SO0MTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/merge_cells
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[拆分单元格](/ssl:ttdoc/ukTMukTMukTM/uATNzUjLwUzM14CM1MTN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/unmerge_cells
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[写入图片](/ssl:ttdoc/ukTMukTMukTM/uUDNxYjL1QTM24SN0EjN)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_image
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[查找单元格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/find)

`POST` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/find
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
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
                <md-text type="field-name" >[替换单元格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/replace)

`POST` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/replace
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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

### 工作表 - 浮动图片

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[创建浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/create)

`POST` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[获取浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/get)

`GET` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
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
                <md-text type="field-name" >[查询浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/query)

`GET` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/query
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
                    <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
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
                <md-text type="field-name" >[更新浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/patch)

`PATCH` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[删除浮动图片](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/delete)

`DELETE` /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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

### 工作表 - 数据校验

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 30%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 40%;">权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
            <md-th style="width: 5%;">商店</md-th>
            <md-th style="width: 5%;">自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[设置下拉列表](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/set-dropdown)

`POST` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[删除下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/delete-datavalidation)

`DELETE` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[更新下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/update-datavalidation)

`PUT` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation/:sheetId/:dataValidationId
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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
                <md-text type="field-name" >[查询下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/query-datavalidation)

`GET` /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                    <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
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

