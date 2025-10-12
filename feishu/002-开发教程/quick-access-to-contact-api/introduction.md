<!--
title: 简介
id: 7238816139734024195
fullPath: /home/quick-access-to-contact-api/introduction
updatedAt: 1700472765000
source: https://open.feishu.cn/document/quick-access-to-contact-api/introduction
-->
# 简介

本教程介绍如何使用飞书开放平台通讯录开放能力，完成对部门的增删改查操作，并监听员工的入职、离职事件。通过本教程你可以快速了解如何使用 OpenAPI 操作通讯录，以及处理员工入职、离职事件。

## 流程简介

本文涉及的操作流程如下图所示：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/63ec92fade6b108e3b1774ee0ab8d0af_orJ4Yredsc.png?lazyload=true&width=733&height=208)

## 实现效果

- 通过运行示例代码实现对部门的增删改查操作。

  :::html
  <md-video src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d4c55cf332b19d0fce6f0884be9801e6_VUPo90vXk5.mp4" />
  :::
<br>
- 通过事件订阅的方式监听员工入职、离职事件。


    :::html
    <md-video src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/158ccc3e0b0b14e8d1a49876430ac0c4_gIyuMOi1QE.mp4" />
    :::


## 使用到的API列表

### 通讯录

:::html

<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
            <md-th style="width: 25%;">权限要求</md-th>
            <md-th style="width: 25%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
[创建部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create)

`POST` /open-apis/contact/v3/departments

> 用于向通讯录中创建部门
            </md-td>
            <md-td>
                <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
[获取子部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)

`GET` /open-apis/contact/v3/departments/:department_id/children

> 通过部门ID获取部门的子部门列表
            </md-td>
            <md-td>
                <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
[获取单个部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get)

`GET` /open-apis/contact/v3/departments/:department_id

> 该接口用于向通讯录获取单个部门信息
            </md-td>
            <md-td>
                <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
[修改部门部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch)

`PATCH` /open-apis/contact/v3/departments/:department_id

> 该接口用于更新通讯录中部门的信息
            </md-td>
            <md-td>
                <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            </md-td>
            <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user">user_access_token</md-tag>
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

### 事件

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 50%;"><md-td>**[事件](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>
            <md-th style="width: 50%;">权限要求</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
[员工入职](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/events/created)

`contact.user.created_v3`

> 通过该事件订阅员工入职
            </md-td>
            <md-td>
                <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            </md-td>
        </md-tr>

        <md-tr>
            <md-td>
[员工离职](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/events/deleted)

`contact.user.deleted_v3`

> 通过该事件订阅员工离职
            </md-td>
            <md-td>
                <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::