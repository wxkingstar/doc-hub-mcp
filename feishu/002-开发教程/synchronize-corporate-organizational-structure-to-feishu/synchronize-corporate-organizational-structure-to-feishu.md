<!--
title: 简介
id: 6997733381623529473
fullPath: /home/synchronize-corporate-organizational-structure-to-feishu/synchronize-corporate-organizational-structure-to-feishu
updatedAt: 1687684095000
source: https://open.feishu.cn/document/synchronize-corporate-organizational-structure-to-feishu/synchronize-corporate-organizational-structure-to-feishu
-->
# 简介

如果你的企业已有 HR 系统用于维护核心人力资源，当企业中存在需要使用飞书的部门与员工时，可以通过编写简单的数据同步应用程序，调用飞书提供的通讯录 OpenAPI，将部门以及员工自动添加到飞书的组织架构中，后续企业 HR 无需关注飞书组织架构，继续使用熟悉的内部 HR 系统维护人员数据即可。

## 操作流程

本教程主要介绍如何调用通讯录 OpenAPI 添加组织架构数据。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7f09cf4fc446b7af1691ca745b900485_FyPhsOz6XG.png?height=208&lazyload=true&width=883)


## 实现效果

本教程将把示例企业原有的部门与人员信息（如下图所示），添加至飞书组织架构中。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fb9ead65cfdfde36f7f5a1c276a6006e_lSY0b97Sn7.png?height=313&lazyload=true&maxWidth=600&width=723)

## 使用到的 API 列表

一般情况下，你需要同时维护部门和用户两份数据。在飞书初始化过程中，通常你需要先完成部门树的创建，再完成用户的创建。在增量数据同步过程中，你需要完成由 HR 系统触发的部门信息修改和用户信息修改。因此，你需要调用如下服务端 OpenAPI。

## 创建和修改部门信息 API

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 40%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 30%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**（选择其一）</md-td></md-th>


</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[创建部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create)</md-text>

`POST` /open-apis/contact/v3/departments
  
>向通讯录中创建部门

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新通讯录</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>



</md-tr>
  
  <md-tr>

<md-td>

<md-text type="field-name" >[修改部门部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch)</md-text>

`PATCH` /open-apis/contact/v3/departments/:department_id
>更新通讯录中部门的信息中的任一个字段

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新通讯录</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

##  创建和修改用户信息 API
:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 40%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 30%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**（选择其一）</md-td></md-th>


</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" >[创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)

   `POST` /open-apis/contact/v3/users
  
   > 向通讯录创建一个用户，可以理解为员工入职
  </md-text>

</md-td>

<md-td><md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新通讯录</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

</md-tr>

<md-tr>

<md-td>

<md-text type="field-name" >[修改用户部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch)</md-text>
  
`PATCH` /open-apis/contact/v3/users/:user_id
>更新通讯录中用户的字段，未传递的参数不会更新

</md-td>

<md-td>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新通讯录</md-perm>

<md-perm href="/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN">更新用户基本信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::