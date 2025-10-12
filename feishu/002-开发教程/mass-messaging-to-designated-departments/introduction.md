<!--
title: 简介
id: 6999971130074562588
fullPath: /home/mass-messaging-to-designated-departments/introduction
updatedAt: 1721016218000
source: https://open.feishu.cn/document/mass-messaging-to-designated-departments/introduction
-->
# 简介

本教程介绍如何向指定范围（如部门）的员工批量发送消息。该教程适用于内部活动推广、企业政策同步等场景。

## 操作流程

本教程涉及的操作流程如下图所示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c8d06935f2bdb155fa90b1bb94dc3508_brQEb28V9b.png?height=208&lazyload=true&width=1023)


## 实现效果

如下图所示，应用通过机器人向指定部门的成员发送消息。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2f3a81a7d863e948b3d165e693ee9251_Pw7BTkITn0.png?height=1000&lazyload=true&maxWidth=700&width=1640)

## 使用到的 OpenAPI 列表

本教程需要调用以下 OpenAPI 实现向指定部门的成员群发消息。

:::html
<md-table>
<md-thead>
<tr>

<md-th style="width: 40%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 30%;">权限要求</md-th>
<md-th style="width: 30%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**</md-td></md-th>

</tr>

</md-thead>
<md-tbody>

<md-tr>

<md-td>
<md-text type="field-name" >[搜索部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/search)

   `POST` https://open.feishu.cn/open-apis/contact/v3/departments/search
  
</md-text>
</md-td>
  
<md-td>
<md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
</md-td> 

<md-td>
<md-tag mode="inline" type="token-user">user_access_token</md-tag>
</md-td>

</md-tr>

<md-tr>

<md-td>
<md-text type="field-name" >[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)

   `POST` https://open.feishu.cn/open-apis/message/v4/batch_send/
  
</md-text>
</md-td>
  
<md-td>
<md-perm name="im:message" desc="获取与发送单聊、群组消息（必选）" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message" desc="以应用的身份发消息（必选）" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>  
<md-perm name="im:message:send_multi_users" desc="给多个用户批量发消息（可选）" support_app_types="custom,isv" tags="">给多个用户批量发消息</md-perm>
<md-perm name="im:message:send_multi_depts" desc="给一个或多个部门的成员批量发消息（可选）" support_app_types="custom,isv" tags="">给一个或多个部门的成员批量发消息</md-perm>
</md-td>
<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
</md-td>

</md-tr>

</md-tbody>
</md-table>
:::