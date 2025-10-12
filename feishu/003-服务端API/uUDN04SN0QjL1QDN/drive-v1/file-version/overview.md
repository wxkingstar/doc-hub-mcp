<!--
title: 文档版本概述
id: 7156062028484968452
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-version/overview
updatedAt: 1752030064000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/file-version/overview
-->
# 文档版本概述

版本是基于文件生成的新版本，版本依附于文件而存在。飞书开放平台支持基于在线文档和电子表格创建、删除和获取版本信息。

## 参数定义

版本相关接口涉及以下通用参数。

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 20%;"><b>参数名</b></md-th>
            <md-th style="width: 20%;"><b>数据类型</b></md-th>
            <md-th style="width: 60%;"><b>描述</b></md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>name</md-td>
            <md-td>string</md-td>
            <md-td>版本文档标题</md-td>
        </md-tr>
        <md-tr>
            <md-td>version</md-td>
            <md-td>string</md-td>
            <md-td>版本文档版本号</md-td>
        </md-tr>
        <md-tr>
            <md-td>parent_token</md-td>
            <md-td>string</md-td>
            <md-td>源文档的 token</md-td>
        </md-tr>
        <md-tr>
            <md-td>owner_id</md-td>
            <md-td>string</md-td>
            <md-td>版本文档所有者的 ID</md-td>
        </md-tr>
        <md-tr>
            <md-td>creator_id</md-td>
            <md-td>string</md-td>
            <md-td>版本文档创建者的 ID</md-td>
        </md-tr>
        <md-tr>
            <md-td>create_time</md-td>
            <md-td>int</md-td>
            <md-td>版本文档的创建时间</md-td>
        </md-tr>
        <md-tr>
            <md-td>update_time</md-td>
            <md-td>int</md-td>
            <md-td>版本文档的更新时间</md-td>
        </md-tr>
        <md-tr>
            <md-td>status</md-td>
            <md-td>string</md-td>
            <md-td>版本文档状态。枚举值有：
- StatusExist：正常状态
- StatusDeleted：版本已被彻底删除
- StatusTrash：版本被放入回收站中。默认情况下，删除后的版本将进入版本回收站，30 天后自动彻底删除</md-td>
        </md-tr>
        <md-tr>
            <md-td>obj_type</md-td>
            <md-td>string</md-td>
            <md-td>版本文档的类型。枚举值有：
- docx：飞书文档
- sheet：电子表格</md-td>
        </md-tr>
        <md-tr>
            <md-td>parent_type</md-td>
            <md-td>string</md-td>
            <md-td>源文档类型。枚举值有：
- docx：飞书文档
- sheet：电子表格</md-td>
        </md-tr>
    </md-tbody>
</md-table>

:::

## 方法列表

以下为版本的方法列表。其中，“商店”代表应用商店应用；“自建”代表企业自建应用，了解更多应用相关信息，参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。了解调用服务端 API 的流程，参考[流程概述](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)。

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
                <md-text type="field-name">`POST` [创建文档版本](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-version/create) /open-apis/drive/v1/files/:file_token/versions</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive:version" desc="查看、创建、删除文档版本" support_app_types="custom,isv" tags="">查看、创建、删除文档版本</md-perm>
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
                <md-text type="field-name">`DELETE` [删除文档版本](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-version/delete) /open-apis/drive/v1/files/:file_token/versions/:version_id</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive:version" desc="查看、创建、删除文档版本" support_app_types="custom,isv" tags="">查看、创建、删除文档版本</md-perm>
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
                <md-text type="field-name">`GET` [获取文档版本](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-version/get) /open-apis/drive/v1/files/:file_token/versions/:version_id</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive:version" desc="查看、创建、删除文档版本" support_app_types="custom,isv" tags="">查看、创建、删除文档版本</md-perm>
                <md-perm name="drive:drive:version:readonly" desc="查看文档版本" support_app_types="custom,isv" tags="">查看文档版本</md-perm>
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
                <md-text type="field-name">`GET` [获取文档版本列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-version/list) /open-apis/drive/v1/files/:file_token/versions</md-text>
            </md-td>
            <md-td>
                 <md-perm name="drive:drive:version" desc="查看、创建、删除文档版本" support_app_types="custom,isv" tags="">查看、创建、删除文档版本</md-perm>
                <md-perm name="drive:drive:version:readonly" desc="查看文档版本" support_app_types="custom,isv" tags="">查看文档版本</md-perm>
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