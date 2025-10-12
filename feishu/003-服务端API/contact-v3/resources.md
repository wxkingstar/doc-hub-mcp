<!--
title: 通讯录概述
id: 6994261259354292252
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/resources
updatedAt: 1721359947000
source: https://open.feishu.cn/document/server-docs/contact-v3/resources
-->
# 通讯录概述

你可以将通讯录理解为企业组织架构，包含了企业部门信息、企业人员信息等。开放平台针对飞书通讯录提供了一系列安全可靠的接口（API），便于你管理通讯录数据。例如使用通讯录 API 可实现的操作有：

- 查看企业的组织架构
- 为企业创建新的用户
- 修改企业中已有用户的基本属性
- 维护用户和部门的关联关系
- 维护用户和用户组的关联关系

## 典型案例

开放平台提供了包含通讯录业务的集成方案，详情参见[HR 系统集成飞书，“入转调离”管理更轻松](https://open.feishu.cn/solutions/detail/hr)。

##  接入流程

通讯录 API 的基本接入流程如下图所示，如需了解详细的 API 接入流程，参见[流程概述](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7e2c712313cbc2da9b298804cbcf94e2_yZOtP0cS3V.png?height=214&lazyload=true&maxWidth=700&width=2276)

## 开发教程

体验场景化示例教程，了解如何运用通讯录 API 管理企业组织架构。详情参见[将企业组织架构同步到飞书](/ssl:ttdoc/home/synchronize-corporate-organizational-structure-to-feishu/synchronize-corporate-organizational-structure-to-feishu)。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/316b9cb34d7c2b8d8e2c4037e211ecc0_Z0ZQpT2PZY.png?height=400&lazyload=true&maxWidth=600&width=752)

## 资源介绍

通讯录业务域以资源为中心进行开发。通讯录聚合了用户、用户组、部门、角色以及人员类型等多种资源，资源关系图如下所示。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c0654fda770a895506dbdbd66356cacb_wtYdEdJ7qO.png?height=1260&lazyload=true&maxWidth=600&width=2098)

通讯录业务域包含的资源以及资源定义如下表：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">资源</md-th>
<md-th style="width:80%">定义</md-th>
</md-tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>[用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/field-overview)</md-td>
<md-td>用户即企业内的一个成员。通讯录的用户资源包含唯一标识（ID）、名称、性别和邮箱等基本信息，还包含用户所属的部门、自定义字段等信息。</md-td>
</md-tr>
  
<md-tr>
<md-td>[部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)</md-td>
<md-td>部门是指企业组织架构树上的某一个节点。在部门内部，可添加用户作为部门成员，可添加新的部门建立父子层级关系。</md-td>
</md-tr>
  
<md-tr>
<md-td>[用户组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/overview)</md-td>
<md-td>用户组是部门资源之外的一种用户圈定方式。你可以通过用户组关联用户或部门，并在各类业务权限管控中引用用户组，从而实现高效便捷的成员权限管控。</md-td>
</md-tr>
  
<md-tr>
<md-td>[用户组成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/overview)</md-td>
<md-td>用户组成员是指用户组内包含的用户、部门。</md-td>
</md-tr>
  
<md-tr>
<md-td>[单位](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/overview)</md-td>
<md-td>单位用于代表大型企业中的子公司、分支机构的实体。目前单位资源的主要作用是，在单个租户内的部分用户权限上实现“子公司”级别的权限隔离。</md-td>
</md-tr>
  
<md-tr>
<md-td>[角色](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role/resource-introduction)</md-td>
<md-td>角色用于设置用户的类型，例如人事、行政、法务、IT 等。目前通讯录的角色主要用于审批场景，企业在设计审批流程时，可以指定某种角色作为审批人。</md-td>
</md-tr>
  
<md-tr>
<md-td>[角色成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role-member/resource-introduction)</md-td>
<md-td>角色成员是指同一角色内的用户列表以及管理范围。</md-td>
</md-tr>
  
<md-tr>
<md-td>[人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/overview)</md-td>
<md-td>人员类型是一种特殊的用户属性字段，用于标记用户的身份类型。例如正式、实习、外包、劳务、顾问。</md-td>
</md-tr>
  
<md-tr>
<md-td>[自定义用户字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr/overview)</md-td>
<md-td>自定义用户字段的作用是方便企业基于自身的管理诉求，灵活设计用户信息。使用通讯录 API，你可以获取企业所有的自定义字段信息。</md-td>
</md-tr>
  
<md-tr>
<md-td>[权限范围](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)</md-td>
<md-td>这里的权限范围是指应用的通讯录权限范围，即应用通过通讯录接口可以操作的组织架构数据范围。使用通讯录 API，你可以获取应用的通讯录权限范围。</md-td>
</md-tr>
  
<md-tr>
<md-td>[职级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/create)</md-td>
<md-td>
职位等级是用户属性字段。企业可根据组织架构实际情况来自定义管理职级信息。
</md-td>
</md-tr>
  
<md-tr>
<md-td>[序列](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/create)</md-td>
<md-td>
序列是用户属性字段。企业可根据组织架构实际情况来自定义管理序列信息。 
</md-td>
</md-tr>
  
<md-tr>
<md-td>[职务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_title/get)</md-td>
<md-td>
用户属性字段。通讯录业务域提供了职务相关的查询接口。  
</md-td>
</md-tr>
  
<md-tr>
<md-td>[工作城市](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/work_city/get)</md-td>
<md-td>
用户属性字段。通讯录业务域进提供了工作城市相关的查询接口。 
</md-td>
</md-tr>
  
</md-tbody>
</md-table>
:::

## 方法列表

以下提供了通讯录业务域内所有资源的 API 和事件列表。

:::note
文中表格涉及的 **商店** 是指商店应用，**自建** 是指企业自建应用。应用类型说明参见[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。
:::

### 用户

#### API 列表

:::html
<md-table>
<md-thead>
<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>
[创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)

</md-td>

<md-td><md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>
<md-td>
[删除用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/delete)
</md-td>
<md-td>
<md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
  
<md-tr>
<md-td>
[恢复已删除用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/resurrect)
</md-td>
<md-td>
<md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  

<md-tr>

<md-td>

[修改用户部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch)
  

</md-td>

<md-td>

<md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
<md-perm name="contact:user.base" desc="更新用户基本信息" support_app_types="custom" tags="">更新用户基本信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>

</md-tr>
  
  
<md-tr>

<md-td>

[获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)
</md-td>


<md-td>

<md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
<md-tr>

<md-td>
[批量获取用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch)
</md-td>


<md-td>

<md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user" >user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>

<md-tr>

<md-td>

[获取部门直属用户列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/find_by_department)

</md-td>

<md-td>

<md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
  
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
<md-tr>

<md-td>

[通过手机号或邮箱获取用户ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id)

</md-td>

<md-td>

<md-perm name="contact:user.id:readonly" desc="通过手机号或邮箱获取用户 ID" support_app_types="custom,isv" tags="">通过手机号或邮箱获取用户 ID</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>
  
</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
<md-tr>

<md-td>
[搜索用户](/ssl:ttdoc/ukTMukTMukTM/uMTM4UjLzEDO14yMxgTN)
</md-td>

<md-td>

<md-perm name="contact:user:search" desc="搜索用户" support_app_types="custom,isv" tags="">搜索用户</md-perm>

</md-td>

<md-td>

<md-tag mode="inline" type="token-user">user_access_token</md-tag>
  
</md-td>

<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
<md-tr>

<md-td>
[更新用户ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/update_user_id)
</md-td>

<md-td>
<md-perm name="contact:contact:update_user_id" desc="更新用户 ID" support_app_types="custom" tags="">更新用户 ID</md-perm>
</md-td>

<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
</md-td>

<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>


</md-tr>
  
</md-tbody>

</md-table>

:::


#### 事件列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 25%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>


<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;">事件类型</md-th>

<md-th style="width: 10%;">商店</md-th>

<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

[员工入职](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/events/created)

</md-td>

<md-td>

<md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.user.created_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[员工离职](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/events/deleted)

</md-td>

<md-td>
<md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.user.deleted_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
  
<md-tr>

<md-td>

[员工信息被修改](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/events/updated)

</md-td>

<md-td>
<md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.user.updated_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

### 部门

#### API 列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 25%;">权限要求（满足任一）</md-th>

<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>
[创建部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create)

</md-td>

<md-td>
<md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
  
<md-tr>

<md-td>

[删除部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/delete)

</md-td>

<md-td>
<md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[修改部门部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch)

</md-td>

<md-td>
<md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[更新部门所有信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/update)

</md-td>

<md-td>
<md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
 
<md-tr>

<md-td>

[部门群转为普通群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/unbind_department_chat)

</md-td>

<md-td>
<md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>

[获取单个部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get)

</md-td>

<md-td>
<md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

<md-tag ype="token-tenant">tenant_access_token</md-tag>
  <md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>
[批量获取部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/batch)
</md-td>

<md-td>
<md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>

</md-td>

<md-td>

<md-tag ype="token-tenant">tenant_access_token</md-tag>
  <md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>


<md-tr>

<md-td>

[获取子部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)

</md-td>

<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            <md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[获取父部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/parent)

</md-td>

<md-td>

            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            <md-perm name="contact:department.organize:readonly" desc="获取通讯录部门组织架构信息" support_app_types="custom,isv" tags="">获取通讯录部门组织架构信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[搜索部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/search)


</md-td>

<md-td>

            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-user">user_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>
[更新部门ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/update_department_id)
</md-td>

<md-td>
<md-perm name="contact:contact:update_department_id" desc="更新部门 ID" support_app_types="custom" tags="">更新部门 ID</md-perm>
</md-td>

<md-td>

<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

#### 事件列表

:::html

<md-table>

<md-thead>

<tr>

<md-th style="width: 25%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>


<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 25%;">事件类型</md-th>

<md-th style="width: 10%;">商店</md-th>

<md-th style="width: 10%;">自建</md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

[部门信息被修改](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/events/updated)

</md-td>


<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.department.updated_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[部门被创建](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/events/created)

</md-td>



<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.department.created_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[部门被删除](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/events/deleted)

</md-td>


<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.department.deleted_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

### 用户组

#### API 列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

[创建用户组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/create)


</md-td>

<md-td>
            <md-perm name="contact:group" desc="更新用户组信息" support_app_types="custom" tags="">更新用户组信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[更新用户组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/patch)


</md-td>

<md-td>

            <md-perm name="contact:group" desc="更新用户组信息" support_app_types="custom" tags="">更新用户组信息</md-perm>

</md-td>

<md-td>

<md-tag ype="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[删除用户组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/delete)


</md-td>

<md-td>

            <md-perm name="contact:group" desc="更新用户组信息" support_app_types="custom" tags="">更新用户组信息</md-perm>

</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>


</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[查询指定用户组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/get)

</md-td>

<md-td>
            <md-perm name="contact:group:readonly" desc="获取用户组信息" support_app_types="custom,isv" tags="">获取用户组信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>


</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[查询用户组列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/simplelist)

</md-td>

<md-td>
            <md-perm name="contact:group:readonly" desc="获取用户组信息" support_app_types="custom,isv" tags="">获取用户组信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
  <md-tr>

<md-td>

[查询用户所属用户组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/member_belong)

</md-td>

<md-td>
            <md-perm name="contact:group:readonly" desc="获取用户组信息" support_app_types="custom,isv" tags="">获取用户组信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>



</md-tbody>

</md-table>

:::

### 用户组成员

#### API 列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

[添加用户组成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/add)

</md-td>

<md-td>
            <md-perm name="contact:group" desc="更新用户组信息" support_app_types="custom" tags="">更新用户组信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[批量添加用户组成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/batch_add)

</md-td>

<md-td>
            <md-perm name="contact:group" desc="更新用户组信息" support_app_types="custom" tags="">更新用户组信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>

[移除用户组成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/remove)

</md-td>

<md-td>
            <md-perm name="contact:group" desc="更新用户组信息" support_app_types="custom" tags="">更新用户组信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>

[批量移除用户组成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/batch_remove)

</md-td>

<md-td>
            <md-perm name="contact:group" desc="更新用户组信息" support_app_types="custom" tags="">更新用户组信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>

[查询用户组成员列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/simplelist)

</md-td>

<md-td>
            <md-perm name="contact:group:readonly" desc="获取用户组信息" support_app_types="custom,isv" tags="">获取用户组信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
</md-tbody>

</md-table>

:::



### 单位

#### API 列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

[创建单位](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/create)

</md-td>

<md-td>
            <md-perm name="contact:unit" desc="更新单位信息" support_app_types="custom" tags="">更新单位信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[修改单位信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/patch)

</md-td>

<md-td>
            <md-perm name="contact:unit" desc="更新单位信息" support_app_types="custom" tags="">更新单位信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>

[删除单位](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/delete)

</md-td>

<md-td>
            <md-perm name="contact:unit" desc="更新单位信息" support_app_types="custom" tags="">更新单位信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
  <md-tr>

<md-td>

[获取单位信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/get)

</md-td>

<md-td>
            <md-perm name="contact:unit:readonly" desc="获取单位信息" support_app_types="custom" tags="">获取单位信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
  <md-tr>

<md-td>

[批量获取单位列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/list)

</md-td>

<md-td>
            <md-perm name="contact:unit:readonly" desc="获取单位信息" support_app_types="custom" tags="">获取单位信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  <md-tr>

<md-td>

[建立部门与单位的绑定关系](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/bind_department)

</md-td>

<md-td>
            <md-perm name="contact:unit" desc="更新单位信息" support_app_types="custom" tags="">更新单位信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  <md-tr>

<md-td>

[解除部门与单位的绑定关系](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/unbind_department)

</md-td>

<md-td>
            <md-perm name="contact:unit" desc="更新单位信息" support_app_types="custom" tags="">更新单位信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>

[获取单位绑定的部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/list_department)

</md-td>

<md-td>
            <md-perm name="contact:unit:readonly" desc="获取单位信息" support_app_types="custom" tags="">获取单位信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
</md-tbody>

</md-table>

:::

### 角色

#### API 列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>
[创建角色](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role/create)
</md-td>

<md-td>
            <md-perm name="contact:functional_role" desc="查看、创建、修改、删除角色及角色成员" support_app_types="custom" tags="">查看、创建、修改、删除角色及角色成员</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>
[删除角色](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role/delete)
</md-td>

<md-td>
            <md-perm name="contact:functional_role" desc="查看、创建、修改、删除角色及角色成员" support_app_types="custom" tags="">查看、创建、修改、删除角色及角色成员</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>
[修改角色名称](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role/update)
</md-td>

<md-td>
            <md-perm name="contact:functional_role" desc="查看、创建、修改、删除角色及角色成员" support_app_types="custom" tags="">查看、创建、修改、删除角色及角色成员</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

### 角色成员

#### API 列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>
[批量添加角色成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role-member/batch_create)
</md-td>

<md-td>
            <md-perm name="contact:functional_role" desc="查看、创建、修改、删除角色及角色成员" support_app_types="custom" tags="">查看、创建、修改、删除角色及角色成员</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>
[删除角色下的成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role-member/batch_delete)
</md-td>

<md-td>
            <md-perm name="contact:functional_role" desc="查看、创建、修改、删除角色及角色成员" support_app_types="custom" tags="">查看、创建、修改、删除角色及角色成员</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>
[批量设置角色成员管理范围](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role-member/scopes)
</md-td>

<md-td>
            <md-perm name="contact:functional_role" desc="查看、创建、修改、删除角色及角色成员" support_app_types="custom" tags="">查看、创建、修改、删除角色及角色成员</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>
[查询角色下某个成员的管理范围](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role-member/get)
</md-td>

<md-td>
            <md-perm name="contact:functional_role" desc="查看、创建、修改、删除角色及角色成员" support_app_types="custom" tags="">查看、创建、修改、删除角色及角色成员</md-perm>
            <md-perm name="contact:functional_role:readonly" desc="查询角色信息、角色下的成员信息" support_app_types="custom" tags="">查询角色信息、角色下的成员信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>
  
<md-tr>

<md-td>
[查询角色下的所有成员信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/functional_role-member/list)
</md-td>

<md-td>
            <md-perm name="contact:functional_role" desc="查看、创建、修改、删除角色及角色成员" support_app_types="custom" tags="">查看、创建、修改、删除角色及角色成员</md-perm>
            <md-perm name="contact:functional_role:readonly" desc="查询角色信息、角色下的成员信息" support_app_types="custom" tags="">查询角色信息、角色下的成员信息</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::


### 人员类型

#### API 列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>


</md-thead>

<md-tbody>
  
<md-tr>

<md-td>

[新增人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/create)

</md-td>

<md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[查询人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)

</md-td>

<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[更新人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/update)

</md-td>

<md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[删除人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/delete)

</md-td>

<md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**X**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>



</md-tbody>

</md-table>

:::

#### 事件列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 25%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>
<md-th style="width: 30%;">权限要求（满足任一）</md-th>
<md-th style="width: 25%;">事件类型</md-th>
<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>
</tr>

</md-thead>
<md-tbody>

<md-tr>

<md-td>

[新建人员类型事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/events/created)

</md-td>



<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.employee_type_enum.created_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[启用人员类型事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/events/actived)
</md-td>



<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.employee_type_enum.actived_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[停用人员类型事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/events/deactivated)

</md-td>



<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.employee_type_enum.deactivated_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[修改人员类型名称事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/events/updated)

</md-td>



<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.employee_type_enum.updated_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

<md-tr>

<md-td>

[删除人员类型事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/events/deleted)

</md-td>

<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.employee_type_enum.deleted_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

### 自定义用户字段


#### API 列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

[获取企业自定义用户字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr/list)


</md-td>

<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

#### 事件列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 25%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>
<md-th style="width: 30%;">权限要求（满足任一）</md-th>
<md-th style="width: 25%;">事件类型</md-th>
<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>
</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

[成员字段变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr_event/events/updated)

</md-td>


<md-td>

            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.custom_attr_event.updated_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

### 通讯录权限范围

#### API 列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

[获取通讯录授权范围](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr_event/events/updated)

</md-td>


<md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

<md-tag type="token-tenant">tenant_access_token</md-tag>

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>

:::

#### 事件列表

:::html

<md-table>

<md-thead>

<tr>
<md-th style="width: 25%;"><md-td>**[事件 (Event)](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>
<md-th style="width: 30%;">权限要求（满足任一）</md-th>
<md-th style="width: 25%;">事件类型</md-th>
<md-th style="width: 10%;">商店</md-th>
<md-th style="width: 10%;">自建</md-th>
</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

[通讯录范围权限被变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/events/updated)

</md-td>



<md-td>

            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>

<md-td>

contact.scope.updated_v3

</md-td>

<md-td>

**✓**

</md-td>

<md-td>

**✓**

</md-td>

</md-tr>

</md-tbody>

</md-table>
:::

### 职级

#### API 列表

:::html
<md-table>
<md-thead>
<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
[创建职级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/create)
</md-td>
<md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
            <md-perm name="contact:job_level" desc="创建、删除、更新职级" support_app_types="custom" tags="">创建、删除、更新职级</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[删除职级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/delete)
</md-td>
<md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
            <md-perm name="contact:job_level" desc="创建、删除、更新职级" support_app_types="custom" tags="">创建、删除、更新职级</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[更新职级](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/update)
</md-td>
<md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
            <md-perm name="contact:job_level" desc="创建、删除、更新职级" support_app_types="custom" tags="">创建、删除、更新职级</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[获取单个职级信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/get)
</md-td>
<md-td>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            <md-perm name="contact:job_level" desc="创建、删除、更新职级" support_app_types="custom" tags="">创建、删除、更新职级</md-perm>
            <md-perm name="contact:job_level:readonly" desc="查询职级列表" support_app_types="custom" tags="">查询职级列表</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[获取租户职级列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/list)
</md-td>
<md-td>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            <md-perm name="contact:job_level" desc="创建、删除、更新职级" support_app_types="custom" tags="">创建、删除、更新职级</md-perm>
            <md-perm name="contact:job_level:readonly" desc="查询职级列表" support_app_types="custom" tags="">查询职级列表</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

### 序列

#### API 列表

:::html
<md-table>
<md-thead>
<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
[创建序列](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/create)
</md-td>
<md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
            <md-perm name="contact:job_family" desc="创建、删除、更新租户的工作序列" support_app_types="custom" tags="">创建、删除、更新租户的工作序列</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[删除序列](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/delete)
</md-td>
<md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
            <md-perm name="contact:job_family" desc="创建、删除、更新租户的工作序列" support_app_types="custom" tags="">创建、删除、更新租户的工作序列</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[更新序列](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/update)
</md-td>
<md-td>
            <md-perm name="contact:contact" desc="更新通讯录" support_app_types="custom" tags="">更新通讯录</md-perm>
            <md-perm name="contact:job_family" desc="创建、删除、更新租户的工作序列" support_app_types="custom" tags="">创建、删除、更新租户的工作序列</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**X**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[获取单个序列信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/get)
</md-td>
<md-td>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            <md-perm name="contact:job_family" desc="创建、删除、更新租户的工作序列" support_app_types="custom" tags="">创建、删除、更新租户的工作序列</md-perm>
            <md-perm name="contact:job_family:readonly" desc="查询租户下工作序列的详细信息" support_app_types="custom" tags="">查询租户下工作序列的详细信息</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[获取租户序列列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/list)
</md-td>
<md-td>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            <md-perm name="contact:job_family" desc="创建、删除、更新租户的工作序列" support_app_types="custom" tags="">创建、删除、更新租户的工作序列</md-perm>
            <md-perm name="contact:job_family:readonly" desc="查询租户下工作序列的详细信息" support_app_types="custom" tags="">查询租户下工作序列的详细信息</md-perm>
</md-td>
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

### 职务

#### API 列表

:::html
<md-table>
<md-thead>
<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
[获取单个职务信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_title/get)
</md-td>
<md-td>
            <md-perm name="contact:job_title:readonly" desc="获取职务列表" support_app_types="custom,isv" tags="">获取职务列表</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>
<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>

<md-tag mode="inline" type="token-user">user_access_token</md-tag>
</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[获取租户职务列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_title/list)
</md-td>
<md-td>
            <md-perm name="contact:job_title:readonly" desc="获取职务列表" support_app_types="custom,isv" tags="">获取职务列表</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>
<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>

<md-tag mode="inline" type="token-user">user_access_token</md-tag>
</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
</md-tbody>
</md-table>
:::

### 工作城市

#### API 列表

:::html
<md-table>
<md-thead>
<tr>
<md-th style="width: 35%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 25%;">权限要求（满足任一）</md-th>
<md-th style="width: 24%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>
<md-th style="width: 8%;">商店</md-th>
<md-th style="width: 8%;">自建</md-th>
</tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
[获取单个工作城市信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/work_city/get)
</md-td>
<md-td>
            <md-perm name="contact:work_city:readonly" desc="获取工作城市列表" support_app_types="custom,isv" tags="">获取工作城市列表</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>
<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>

<md-tag mode="inline" type="token-user">user_access_token</md-tag>
</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
<md-tr>
<md-td>
[获取租户工作城市列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/work_city/list)
</md-td>
<md-td>
            <md-perm name="contact:work_city:readonly" desc="获取工作城市列表" support_app_types="custom,isv" tags="">获取工作城市列表</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
</md-td>
<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>

<md-tag mode="inline" type="token-user">user_access_token</md-tag>
</md-td>
<md-td>
**✓**
</md-td>
<md-td>
**✓**
</md-td>
</md-tr>
  
</md-tbody>
</md-table>
:::
