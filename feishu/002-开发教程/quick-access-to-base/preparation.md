<!--
title: 简介
id: 7238267026853806081
fullPath: /home/quick-access-to-base/preparation
updatedAt: 1700472777000
source: https://open.feishu.cn/document/quick-access-to-base/preparation
-->
# 简介

本文介绍如何使用 OpenAPI 管理飞书云文档的多维表格。通过本教程你可以了解包括创建、写入、查看以及导出等多维表格 OpenAPI 的调用方式。

## 什么是多维表格？

多维表格是飞书云文档下的一个产品。一篇多维表格可以由多个数据表组成，便于你统计业务数据、提升工作效率。多维表格可以理解成一个应用（App），它可以独立存在，也可以作为一个模块集成在飞书文档或飞书表格中。更多信息参见[多维表格概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)。

## 操作流程

本文涉及的操作流程如下图所示：


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/313fbcc7379b24983ca27634bd4dc33e_cYYFDKxTRc.png?height=208&lazyload=true&width=492)


## 实现效果

通过代码示例调用多维表格 OpenAPI，创建多维表格，并对表格进行创建、写入、删除以及导出等操作。

:::html
<md-video src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/292dbe746195c8298cde06d740ae101c_GhBqwZhVUN.mp4" poster="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e631899631811de74809e018f3ba2e4f_8oPFCWza5F.png?lazyload=true&width=3570&height=1888?lazyload=true&width=1356&height=660" width="80%"/>
:::

## 使用到的 OpenAPI 列表

:::html
<md-table>

<md-thead>

<tr>

<md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>


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
  
</md-tr>
  
<md-tr>

<md-td>

<md-text type="field-name" >[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)</md-text>
  
`POST` /open-apis/bitable/v1/apps

</md-td>

<md-td>


<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

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

</md-tr>
:::