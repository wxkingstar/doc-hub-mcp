<!--
title: 简介
id: 7080504131006676995
fullPath: /home/management-weekly-report-based-docs/introduction
updatedAt: 1732766979000
source: https://open.feishu.cn/document/historical-version/management-weekly-report-based-docs/introduction
-->
# 简介

本教程介绍如何使用飞书开放平台云文档能力实现团队周报管理。具体而言，本教程将实现：

- 基于周报模版文档每周定时创建新的周报文档，并给团队成员授权文档编辑权限；
- 自动将新周报文档归档到指定知识库指定节点；
- 通过群机器人发送群消息，通知所有人更新周报内容。

:::note

本教程及示例代码为基于旧版文档（文档类型为 doc）撰写，如果你创建的周报模板的文档类型为 docx，你需在示例代码中的 server.py 文件中的第 43 行 `meta = client.get_doc_meta(access_token, doctoken, "doc")` 中，将 `doc` 改为 `docx`。
:::
## 流程概览

本教程提供的示例代码将按照以下流程，实现团队周报管理。

:::html
<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/887d8449fd69dd7222976bfe88a53817_1EiNomI7Vz.png?lazyload=true&width=918&height=857" style="width:70%"/>
:::

## 实现效果

按照本教程操作最终可以实现如下图的示意效果。

- 本教程最终创建的周报文档如下：

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9421df083f6cfdd878bbe85e0a1ca5ac_yYND9x65Cq.png?height=1053&lazyload=true&maxWidth=700&width=1640)

- 最终发送在团队群聊中的消息如下：
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6303a46946f9a2454b6f3367c6605bc8_I84gs6CTEK.png?height=957&lazyload=true&maxWidth=700&width=1640)
    
    
## 使用到的 API 列表

本教程调用了云文档和消息与群组业务域的 API：

### 云文档

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求（满足任一）</md-th>
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
                <md-text type="field-name" >[获取文件夹下的文档清单](/ssl:ttdoc/ukTMukTMukTM/uEjNzUjLxYzM14SM2MTN)

`GET` /open-apis/drive/explorer/v2/folder/:folderToken/children

> 获取文件夹内的文档清单，也包括文件夹
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
                <md-text type="field-name" >[获取文档元数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/meta/batch_query)

`POST` /open-apis/drive/v1/metas/batch_query

> 根据 Token 获取各类文档的元数据
                </md-text>
            </md-td>
            <md-td>
            <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
            <md-perm name="drive:drive.metadata:readonly" desc="查看云空间中文件元数据" support_app_types="custom,isv" tags="">查看云空间中文件元数据</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[复制文件](/ssl:ttdoc/ukTMukTMukTM/uYTNzUjL2UzM14iN1MTN)

`POST` /open-apis/drive/explorer/v2/file/copy/files/:fileToken

> 将文件复制到用户云空间的其他文件夹中
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
                <md-text type="field-name" >[增加权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create)

`POST` /open-apis/drive/v1/permissions/:token/members

> 该接口用于根据 filetoken 给用户增加文档的权限
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
                <md-text type="field-name" >[添加知识空间成员](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-member/create)

`POST` /open-apis/wiki/v2/spaces/:space_id/members

> 添加知识空间成员或管理员
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[添加已有云文档至知识库](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/move_docs_to_wiki)

`POST` /open-apis/wiki/v2/spaces/:space_id/nodes/move_docs_to_wiki

> 该接口允许添加已有云文档至知识库
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

### 消息与群组

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求（满足任一）</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)

`GET` /open-apis/im/v1/chats

> 获取用户或者机器人所在群列表
                </md-text>
            </md-td>
            <md-td>
<md-perm name="im:chat:read" desc="查看群信息" support_app_types="custom,isv" tags="">查看群信息</md-perm>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
<md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
<md-perm name="im:chat.group_info:readonly" desc="读取群信息（历史版本）" support_app_types="custom,isv" tags="history,offline">读取群信息（历史版本）</md-perm>

            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)

`POST` /open-apis/im/v1/messages

> 给指定用户或者会话发送消息，支持文本、富文本、卡片、群名片、个人名片、图片、视频、音频、文件、表情包
                </md-text>
            </md-td>
            <md-td>
<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" tags="">以应用的身份发消息</md-perm>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message:send" desc="发送消息V2" support_app_types="custom,isv" tags="history,offline">发送消息V2</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::

