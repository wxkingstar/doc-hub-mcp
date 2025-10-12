<!--
title: 简介
id: 7113874263316807684
fullPath: /home/replace-links-in-documents-after-data-migration/introduction
updatedAt: 1702880642000
source: https://open.feishu.cn/document/replace-links-in-documents-after-data-migration/introduction
-->
# 简介

本教程介绍如何使用开放平台云文档能力将本地 Word 文件导入到飞书云文档，并提取飞书云文档中过期的链接，将其修正为导入后的新链接地址。

## 流程概览

本教程提供的示例代码将按照以下流程调用飞书开放接口，最终实现链接的替换。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/449d37340de5130093217eccfc63a80f_W6dyQM5iKc.png?height=896&lazyload=true&maxWidth=750&width=918)

## 实现效果

按照本教程操作，最终可实现如下图的示意效果。

![图片](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/5b82c8ab82c64d958a95cea299ddad00~tplv-goo7wpa0wc-image.image?height=821&lazyload=true&maxWidth=550&width=1280)

## 使用到的 API 列表

本教程调用了鉴权与云文档业务域的以下接口：

### 鉴权

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)

`GET` /open-apis/auth/v3/tenant_access_token/internal

> 通过此接口获取 tenant_access_token
                </md-text>
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

### 云文档

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取空间根目录](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)

`GET` /open-apis/drive/explorer/v2/root_folder/meta

> 获取云空间的根目录
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_all)

`POST` /open-apis/drive/v1/files/upload_all

> 向云空间指定目录下上传一个小文件
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[创建导入任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/create)

`POST` /open-apis/drive/v1/import_tasks

> 创建导入任务
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[查询导入任务结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/get)

`GET` /open-apis/drive/v1/import_tasks/:ticket

> 根据创建导入任务返回的 ticket 查询导入结果
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[更新云文档权限设置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-public/patch)

`PATCH` /open-apis/drive/v1/permissions/:token/public

> 该接口用于根据 filetoken 更新云文档的权限设置
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)

`GET` /open-apis/docx/v1/documents/:document_id/blocks

> 获取文档所有块的富文本内容并分页返回
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docx:document" desc="创建及编辑 DocX 文档" support_app_types="custom,isv" tags="">创建及编辑 DocX 文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[更新块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/patch)

`PATCH` /open-apis/docx/v1/documents/:document_id/blocks/:block_id

> 更新指定的块
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="docx:document" desc="创建及编辑 DocX 文档" support_app_types="custom,isv" tags="">创建及编辑 DocX 文档</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

