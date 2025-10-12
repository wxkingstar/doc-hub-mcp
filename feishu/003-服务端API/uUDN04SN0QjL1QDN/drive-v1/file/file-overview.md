<!--
title: 文件概述
id: 7374339934151278596
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/file-overview
updatedAt: 1741680184000
source: https://open.feishu.cn/document/docs/drive-v1/file/file-overview
-->
# 文件概述
本文档介绍云空间中文件相关能力的基础概念、文件 token 的获取方式和文件的 API 列表。

## 基础概念

文件是云空间内各种类型的文件的统称，泛指云空间内所有的文件。包括在云空间创建的在线文档、电子表格、多维表格、思维笔记、知识库中的文档等，也包括从本地环境上传的各类文件。


## 文件 token 获取方式

每个文件都有唯一的 token 作为标识。不同类型的文件的 token 命名可能不同，包括 `token`、 `document_id`、`file_token`、`app_token`、`spreadsheetToken` 等。

放置在文件夹和知识库中的文件，其 token 的获取方式不同，具体如下所示。

### 文件夹中的文件

如果文件存储在飞书云空间（云盘）的文件夹中，你可通过以下两种方式获取文件的 token：
- 方式一：如下图，在浏览器中打开文件，在地址栏中获取文件的 token。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c957393de2c0118a9b00d4a8be98dd6a_1n9tz7k1Wo.png?height=169&lazyload=true&maxWidth=568&width=1468)
    
 
- 方式二：调用开放平台接口获取。
    1. 调用[获取我的空间（root folder）元数据](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)接口获取根目录（即根文件夹）的 token。
    2. 继续调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)接口，获取根目录下文件的 token。

### 知识库中的文件

如果文件放置在知识库中，其 URL 中有 **wiki** 标识，如下图。
此时，该文件也是知识库中的一个节点（node）。

你需调用知识库的[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口，传入该 URL 中的 token 部分，并确保文件类型参数 `obj_type` 为 `wiki`，获取该类文件的实际类型 `obj_token`。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bb2e4afcd9a67d6fac88dd959efbf8f5_qW3nWJfKYz.png?height=408&lazyload=true&maxWidth=568&width=1410)

## 方法列表


以下为文件夹的方法列表。其中，“商店”代表应用商店应用；“自建”代表企业自建应用，了解更多应用相关信息，参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。了解调用服务端 API 的流程，参考[流程概述](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ugzNwEjL4cDMx4CO3ATM)。
:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 35%;"><b>方法 (API)</md-th>
            <md-th style="width: 30%;"><b>权限要求（满足任一）</md-th>
            <md-th style="width: 20%;"><b>访问凭证</md-th>
            <md-th style="width: 10%;"><b>商店</md-th>
            <md-th style="width: 10%;"><b>自建</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [获取文件元数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/meta/batch_query) /open-apis/drive/v1/metas/batch_query</md-text>
            </md-td>
            <md-td>
                <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
<md-perm name="drive:drive.metadata:readonly" desc="查看云空间中文件元数据" support_app_types="custom,isv" tags="">查看云空间中文件元数据</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [获取文件统计信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-statistics/get) /open-apis/drive/v1/files/:file_token/statistics</md-text>
            </md-td>
            <md-td>
              <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            <md-perm name="drive:drive.metadata:readonly" desc="查看云空间中文件元数据" support_app_types="custom,isv" tags="">查看云空间中文件元数据</md-perm>
            <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [获取文件访问记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-view_record/list)/open-apis/drive/v1/files/:file_token/view_records</md-text>
            </md-td>
            <md-td>
                <md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
                <md-perm name="drive:file:view_record:readonly" desc="获取文档访问记录" support_app_types="custom,isv" tags="">获取文档访问记录</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [新建文件](/ssl:ttdoc/ukTMukTMukTM/uQTNzUjL0UzM14CN1MTN)/open-apis/drive/explorer/v2/file/:folderToken</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                 <md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
                 <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)/open-apis/drive/v1/files/:file_token/copy</md-text>
            </md-td>
            <md-td>
         <md-perm name="docs:document:copy" desc="复制云文档" support_app_types="custom,isv" tags="">复制云文档</md-perm>
         <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [移动文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/move)/open-apis/drive/v1/files/:file_token/move</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                 <md-perm name="space:document:move" desc="移动云空间文件夹和云文档
" support_app_types="custom,isv" tags="">移动云空间文件夹和云文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`DELETE` [删除文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/delete)/open-apis/drive/v1/files/:file_token<br></md-text>
            </md-td>
            <md-td>
                <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                <md-perm name="space:document:delete" desc="删除云空间文件夹和云文档" support_app_types="custom,isv" tags="">删除云空间文件夹和云文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [创建文件快捷方式](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/create_shortcut)/open-apis/drive/v1/files/create_shortcut</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
        <md-perm name="space:document:shortcut" desc="创建云文档的快捷方式" support_app_types="custom,isv" tags="">创建云文档的快捷方式</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [搜索文件](/ssl:ttdoc/ukTMukTMukTM/ugDM4UjL4ADO14COwgTN)/open-apis/suite/docs-api/search/object</md-text>
            </md-td>
            <md-td>
          <md-perm name="drive:drive" desc="查看、评论、编辑和管理云文档所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云文档所有文件</md-perm>
          <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
          <md-perm name="search:docs:read" desc="搜索云文档" support_app_types="custom,isv" tags="">搜索云文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_all)/open-apis/drive/v1/files/upload_all</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                <md-perm name="drive:file:upload" desc="上传文件" support_app_types="custom,isv" tags="">上传文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` 分片上传文件
- [/open-apis/drive/v1/files/upload_prepare](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_prepare)
- [/open-apis/drive/v1/files/upload_part](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_part)
- [/open-apis/drive/v1/files/upload_finish](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_finish)</md-text>
            </md-td>
            <md-td>
                <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                <md-perm name="drive:file:upload" desc="上传文件" support_app_types="custom,isv" tags="">上传文件</md-perm>
                
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`GET` [下载文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/download)/open-apis/drive/v1/files/:file_token/download</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                <md-perm name="drive:file" desc="上传、下载文件到云空间" support_app_types="custom,isv" tags="">上传、下载文件到云空间</md-perm>
                <md-perm name="drive:file:download" desc="下载云空间下的文件" support_app_types="custom,isv" tags="">下载云空间下的文件</md-perm>
                <md-perm name="drive:file:readonly" desc="查看和下载云空间中的文件" support_app_types="custom,isv" tags="">查看和下载云空间中的文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` [创建导入任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/create)/open-apis/drive/v1/import_tasks</md-text>
            </md-td>
            <md-td>
                <md-perm name="docs:document:import" desc="查看、创建云文档导入任务" support_app_types="custom,isv" tags="">查看、创建云文档导入任务</md-perm>
                <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
       <md-tr>
            <md-td>
                <md-text type="field-name">`POST`[查询导入任务结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/get)/open-apis/drive/v1/import_tasks/:ticket </md-text>
            </md-td>
            <md-td>
                <md-perm name="docs:document:import" desc="查看、创建云文档导入任务" support_app_types="custom,isv" tags="">查看、创建云文档导入任务</md-perm>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
<md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name">`POST` 导出云文档
- [/open-apis/drive/v1/export_tasks](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/create) 
- [/open-apis/drive/v1/export_tasks/:ticket](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/get)
- [/open-apis/drive/v1/export_tasks/file/:file_token/download](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/download)</md-text>
            </md-td>
            <md-td>
                <md-perm name="docs:document:export" desc="导出云文档" support_app_types="custom" tags="">导出云文档</md-perm>
                <md-perm name="drive:export:readonly" desc="导出云文档" support_app_types="custom" tags="">导出云文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
            <md-td>**×**</md-td>
            <md-td>**✓**</md-td>
        </md-tr>
    </md-tbody>
</md-table>

:::
