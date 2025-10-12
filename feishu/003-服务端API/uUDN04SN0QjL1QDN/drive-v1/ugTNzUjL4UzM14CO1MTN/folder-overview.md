<!--
title: 文件夹概述
id: 7374339934151262212
fullPath: /ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/folder-overview
updatedAt: 1716972112000
source: https://open.feishu.cn/document/docs/drive-v1/folder/folder-overview
-->
# 文件夹概述
本文档介绍云空间中文件夹相关能力的基础概念、文件夹 token 的获取方式和文件夹的 API 列表。

## 基础概念

文件夹是飞书云空间中用于管理文件和其它文件夹的容器。每个文件夹都有唯一的 token 作为标识。在不同接口中，其参数命名可能不同，包括 `token`、 `folder_token`、`folderToken` 等。

## 文件夹 token 获取方式

你可通过以下两种方式获取文件夹的 token：
- 如下图，在浏览器中打开文件夹，在地址栏中获取文件夹的 token。

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/238e60969b143a519aa3b82c90a63fe6_pPLUwkpHdF.png?height=595&lazyload=true&maxWidth=728&width=1528)

- 调用开放平台接口获取：
    - 调用[获取我的空间（root folder）元数据](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)接口获取根目录（即根文件夹）的 token。
    - 继续调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)接口，获取根目录下文件夹的 token。

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
                <md-text type="field-name">[获取我的空间（root folder）元数据](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)`GET` /open-apis/drive/explorer/v2/root_folder/meta</md-text>
            </md-td>
            <md-td>
                <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
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
                <md-text type="field-name">[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)`GET` /open-apis/drive/v1/files</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                 <md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
                 <md-perm name="space:document:retrieve" desc="获取云空间文件夹下的云文档清单" support_app_types="custom,isv" tags="">获取云空间文件夹下的云文档清单</md-perm>
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
                <md-text type="field-name">[获取文件夹元数据](/ssl:ttdoc/ukTMukTMukTM/uAjNzUjLwYzM14CM2MTN)`GET` /open-apis/drive/explorer/v2/folder/:folderToken/meta</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
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
                <md-text type="field-name">[新建文件夹](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/create_folder)`POST` /open-apis/drive/v1/files/create_folder</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                 <md-perm name="space:folder:create" desc="创建云空间文件夹" support_app_types="custom,isv" tags="">创建云空间文件夹</md-perm>
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
                <md-text type="field-name">[移动文件或文件夹](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/move)`POST` /open-apis/drive/v1/files/:file_token/move</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
                 <md-perm name="space:document:move" desc="移动云空间文件夹和云文档" support_app_types="custom,isv" tags="">移动云空间文件夹和云文档</md-perm>
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
                <md-text type="field-name">[删除文件或文件夹](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/delete)`DELETE` /open-apis/drive/v1/files/:file_token</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
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
                <md-text type="field-name">[查询异步任务状态](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/task_check)`GET` /open-apis/drive/v1/files/task_check</md-text>
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
    </md-tbody>
</md-table>
:::


