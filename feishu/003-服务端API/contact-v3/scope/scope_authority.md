<!--
title: 权限范围资源介绍
id: 6916079479413129217
fullPath: /ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority
updatedAt: 1747039019000
source: https://open.feishu.cn/document/server-docs/contact-v3/scope/scope_authority
-->
#  权限范围资源介绍

通过本文你可以了解什么是通讯录权限范围，以及权限相关的概念、生效规则、接口与事件。

##  什么是通讯录权限范围

通讯录权限范围定义了应用在调用通讯录 API 时可获取的部门、用户的数据范围。应用无法访问不在通讯录权限范围内的数据。

例如，通讯录中有 A、B、C 三个部门，若一个应用只有 B 和 C 两个部门的通讯录权限，那么该应用就只能通过接口获取到 B 和 C 两个部门的数据，获取 A 部门就会报出没有权限的错误。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5855593982277edc5f894b0f5400e191_SQvowGMBUY.png?height=704&lazyload=true&maxWidth=600&width=1280)

通讯录权限范围可以由应用开发者管理维护，同时企业管理员也可以在管理后台管理维护。具体说明如下：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">人员类型</md-th>
<md-th style="width:80%">配置场景</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>应用开发者</md-td>
<md-td>应用开发者可以在[开发者后台](https://open.feishu.cn/app)的应用详情页内，配置应用的通讯录权限范围。以企业自建应用为例，需要进入应用详情页的 **开发配置** > **权限管理** 页面。添加方式分为以下两种：
  
- 方式一：点击 **开通权限**，开通通讯录权限时，页面会自动跳转到通讯录权限范围的配置页面，点击 **配置** 即可自定义配置。配置完成后需要点击右下角 **确定**。

  	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0b80da53a0ac17a33789cd8edebca0f9_MQIx4pNzPJ.png?height=1562&lazyload=true&maxWidth=400&width=1780)
  
- 方式二：如果 API 权限列表已经添加了通讯录权限，则可以点击 **可访问的数据范围** 列字段右侧的 **配置**，跳转到通讯录权限范围的配置页面进行配置。

  	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ca08781654a49be77ed5b4c621303f93_6PmNjXkoc7.png?height=428&lazyload=true&maxWidth=400&width=2266)

<md-alert type="tip" icon="none">
- 商店应用无法修改用户所在企业的通讯录信息。
- 默认情况下，通讯录权限范围与应用的可用范围一致。
- 修改通讯录权限范围后，需要创建应用版本，由管理员审核通过后才可生效。
- 通讯录数据访问范围需要配合通讯录权限才可生效，请注意在应用的 **权限配置** > **API 权限** 中申请通讯录相关的 API 权限。
</md-alert>

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a1b281bca2708c7b4d8cdb75b74db80b_d3B7kadw3c.png?height=622&lazyload=true&width=1766)</md-td>
</md-tr>

<md-tr>
<md-td>企业管理员</md-td>
<md-td>企业管理员可以在[管理后台](https://www.feishu.cn/admin) > **工作台** > **应用管理** 页面，进入指定应用管理页，然后管理应用的 **通讯录设置**。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/30410ff315a6728260c9964a7f035d4a_vtiypMAKJu.png?height=1066&lazyload=true&width=2386)</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 相关概念

在调用通讯录 API 时，涉及应用身份（tenant_access_token）和用户身份（user_access_token）的区分。为不同身份配置通讯录权限范围时，可能涉及到的功能概念说明如下。

### 应用可用范围

当你在为应用设置通讯录权限范围时，有一个选项是 **与应用的可用范围一致**。应用可用范围定义了可以使用该应用的成员范围。详细介绍可参见[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。

- 该范围可以由应用开发者在[开发者后台](https://open.feishu.cn/app)发布应用时进行配置。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/94ab058cba9f451e910046a694e6c946_wxiTndovMZ.png?height=706&lazyload=true&maxWidth=600&width=2300)

- 同时，安装应用的租户管理员或超级管理员可以在[管理后台](http://feishu.cn/admin) > **工作台** > **应用管理** 页面，进入指定应用详情页进行配置。

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f5a6315ec7822d8d0ed2647325e26b13_6eUYCHkfOr.png?height=1058&lazyload=true&maxWidth=600&width=2390)

### 用户组织架构可见范围

当你使用用户身份调用通讯录 API 时，可操作的权限范围不受应用的通讯录权限范围影响，而是受当前用户的组织架构可见范围影响，该范围限制了用户在企业内可见的组织架构数据范围，由企业管理员在[管理后台](http://feishu.cn/admin) > **安全** > **成员权限** 页面中，点击 **组织架构可见范围** 进行管理。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6699f09b56c17798cb192d06795dc980_hcP4nRZadC.png?height=726&lazyload=true&maxWidth=600&width=2374)

## 权限生效规则



:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">类型</md-th>
<md-th style="width:70%">规则说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>用户通讯录范围的权限</md-td>
<md-td>
调用 API 的应用或者用户身份，只要有一个部门的通讯录范围权限，那么就拥有该部门下所有用户的权限。需要配置用户通讯录范围权限的接口有：
  
- 用户：
  
  - [获取单个用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)
  - [批量获取用户信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch)
  - [搜索用户](/ssl:ttdoc/ukTMukTMukTM/uMTM4UjLzEDO14yMxgTN)
  - [恢复已删除用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/resurrect)
  - [修改用户部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch)
  - [删除用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/delete)
  
- 用户组成员：
  
  - [添加用户组成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/add)
  - [批量添加用户组成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/batch_add)
  - [移除用户组成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/remove)
  - [批量移除用户组成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/batch_remove)

</md-td>
</md-tr>

<md-tr>
<md-td>部门通讯录范围的权限</md-td>
<md-td>
通讯录将部门的通讯录权限细化为父部门权限和部门权限两种。调用 API 的应用或者用户身份，只要有一个部门的通讯录范围权限，那么就拥有这个部门下所有子部门的权限。
  
- 需要父部门通讯录范围权限的接口有：
  
  - [创建部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create)
  - [获取单个部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get)
  - [批量获取部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/batch)
  - [获取子部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)
  - [获取父部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/parent)
  - [修改部门部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch)
  - [更新部门所有信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/update)
  - [删除部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/delete)
  

- 需要部门通讯录范围权限的接口有：
  
  - 部门：
  
  	  - [获取单个部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get)
  	  - [批量获取部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/batch)
  	  - [获取子部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)
  	  - [获取父部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/parent)
  	  - [修改部门部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch)
  	  - [更新部门所有信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/update)
  	  - [删除部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/delete)
  
  - 用户：
  
  	- [创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)
  	- [获取部门直属用户列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/find_by_department)
  	- [恢复已删除用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/resurrect)
  	- [修改用户部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch)
	- [删除用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/delete)

</md-td>
</md-tr>
  
<md-tr>
<md-td>全员权限</md-td>
<md-td>
全员权限是指拥有通讯录下所有数据的权限。需要拥有全员权限的场景，可参见下文 **全员权限说明表**。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

**全员权限说明表**


:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">资源</md-th>
<md-th style="width:40%">接口</md-th>
<md-th style="width:40%">场景说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>部门</md-td>
<md-td>- [创建部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create)</md-td>
<md-td>在根部门下创建子部门</md-td>
</md-tr>
  
<md-tr>
<md-td>部门</md-td>
<md-td>
- [获取单个部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get)
- [批量获取部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/batch)
- [获取子部门列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)
</md-td>
<md-td>获取根部门下的子部门列表</md-td>
</md-tr>
  
<md-tr>
<md-td>部门</md-td>
<md-td>- [获取父部门信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/parent)</md-td>
<md-td>获取根部门的信息</md-td>
</md-tr>
  
<md-tr>
<md-td>部门</md-td>
<md-td>
- [修改部门部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch)
- [更新部门所有信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/update)
</md-td>
<md-td>将部门的父部门更改为根部门</md-td>
</md-tr>

<md-tr>
<md-td>部门</md-td>
<md-td>- [删除部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/delete)</md-td>
<md-td>删除根部门下的子部门</md-td>
</md-tr>
  


<md-tr>
<md-td>用户</md-td>
<md-td>- [创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)</md-td>
<md-td>在根部门下创建用户</md-td>
</md-tr>
  
<md-tr>
<md-td>用户</md-td>
<md-td>
- [获取部门直属用户列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/find_by_department)
</md-td>
<md-td>获取根部门下的用户列表</md-td>
</md-tr>

<md-tr>
<md-td>用户</md-td>
<md-td>
- [修改用户部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch)  
- [恢复已删除用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/resurrect)
</md-td>
<md-td>将用户所属部门配置为根部门</md-td>
</md-tr>
  
<md-tr>
<md-td>用户</md-td>
<md-td>- [删除用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/delete)</md-td>
<md-td>删除根部门下的用户</md-td>
</md-tr>

<md-tr>
<md-td>用户组</md-td>
<md-td>- [创建用户组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/create)</md-td>
<md-td>创建用户组时，应用需要有全员通讯录权限。</md-td>
</md-tr>
  
</md-tbody>
</md-table>
:::

## 典型案例

小王开发了一个人力管理相关的自建应用。出于数据保密的要求，这个应用只能被 HR 同事使用，但由于应用需要管理全公司的人事信息，所以需要获取全公司的通讯录数据。该案例中，小王可以按照以下规则开发应用。

- 应用可见范围：设置为仅 HR 部门内的成员。
- 应用的通讯录权限范围：设置为全部成员。

待应用管理员审核通过应用的发布申请后，该人力管理应用就可以实现仅 HR 同事使用，且能够获得全公司的通讯录数据。

## 方法列表

通讯录 API 提供了如下接口与事件，供你管理查询通讯录权限范围相关数据。

- [获取通讯录授权范围](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/list) API

	该接口用于获取应用被授权可访问的通讯录权限范围，包括可访问的部门、用户、用户组列表。
    
- [通讯录权限范围变更](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/events/updated) 事件

	如果你需要及时了解应用的通讯录权限范围是否发生了变化，则可以订阅该事件，该事件的结构体包含了通讯录权限发生变更的数据信息。