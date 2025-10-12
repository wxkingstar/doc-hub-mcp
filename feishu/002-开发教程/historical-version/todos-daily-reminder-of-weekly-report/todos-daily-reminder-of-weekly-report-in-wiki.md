<!--
title: 简介
id: 7088144643670786049
fullPath: /home/todos-daily-reminder-of-weekly-report/todos-daily-reminder-of-weekly-report-in-wiki
updatedAt: 1732766990000
source: https://open.feishu.cn/document/historical-version/todos-daily-reminder-of-weekly-report/todos-daily-reminder-of-weekly-report-in-wiki
-->
# 简介
本示例介绍如何使用开放平台云文档能力提取知识库周报文档里的待办事项，并将待办事项发送到团队群进行任务提醒。


:::note
本教程示例代码目前仅支持旧版文档，即文档类型为 doc 的文档。了解更多，参考[新旧版本说明](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs/upgraded-docs-access-guide/upgraded-docs-openapi-access-guide)。
:::
## 流程简介
本教程将通过调用获取知识库子节点列表接口，遍历每个子节点找到最近编辑的标题包含周报二字的节点，再调用读取云文档的获取节点富文本信息接口将周报信息读出，以周报富文本信息段落中存在的`todoUUID`来识别待办事项，然后读取待办事项的内容、负责人、截止时间信息，拼装成待办提醒提醒消息，最后通过机器人发送提醒至群聊。
:::html
<img src="https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/b7574e0aa012480aba59333688d5eda6~tplv-goo7wpa0wc-image.image?lazyload=true&width=918&height=715" style="width:70%"/>
:::

## 实现效果
知识库周报文档内容如下：

![图片](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/8647fa435afbc235738554a953c120eb_VJZ8bURcL1.png?height=914&lazyload=true&maxWidth=700&width=1280)

最终消息提醒内容如下：

![图片](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/fa2e13903dd98b2f83acd9a259e6c868_uZPHENEaYt.png?height=746&lazyload=true&maxWidth=700&width=1280)
## 使用到的API列表
### 登录

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
                <md-text type="field-name" >[获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)

`GET` /open-apis/auth/v3/tenant_access_token/internal

> 获得访问其他接口需要用到的访问凭证
                </md-text>
            </md-td>
            <md-td>
                 \-   
            </md-td>
            <md-td>
                \-
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
            <md-th style="width: 25%;">权限要求（满足任一）</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取子节点列表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/list)

`GET` /open-apis/wiki/v2/spaces/:space_id/nodes

> 获取Wiki节点的子节点列表
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
              		<md-perm name="wiki:wiki:readonly" desc="查看知识库" support_app_types="custom,isv" tags="">查看知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)

`POST` /open-apis/wiki/v2/spaces/get_node

> 获取Wiki节点的详细信息
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
              		<md-perm name="wiki:wiki:readonly" desc="查看知识库" support_app_types="custom,isv" tags="">查看知识库</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                <md-text type="field-name" >[获取文档富文本内容](/ssl:ttdoc/ukTMukTMukTM/uUDM2YjL1AjN24SNwYjN)

`POST` /open-apis/doc/v2/:docToken/content

> 获取结构化的文档内容
                </md-text>
            </md-td>
            <md-td>
                    <md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
              		<md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
              		<md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" support_app_types="custom,isv" tags="">查看、评论、编辑和管理文档</md-perm>
              		<md-perm name="docs:doc:readonly" desc="查看、评论和导出文档" support_app_types="custom,isv" tags="">查看、评论和导出文档</md-perm>
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
<md-perm name="im:chat.group_info:readonly" desc="读取群信息（历史版本）" support_app_types="custom,isv"  tags="history,offline">读取群信息（历史版本）</md-perm>
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

