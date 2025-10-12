<!--
title: 组织架构概述
id: 7359101646310686748
fullPath: /uAjLw4CM/ukTMukTMukTM/directory-v1/overview
updatedAt: 1749798503000
source: https://open.feishu.cn/document/directory-v1/overview
-->
# 组织架构概述

管理后台-组织架构OpenAPI服务于企业管理员，对飞书中的组织架构数据进行管理操作。例如：
- 创建、更新、查询、删除部门
- 创建、更新、查询、离职、恢复员工

你可以在 [API列表](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/server-api-list) 中查看组织架构的具体开放能力


## 适用场景

组织架构功能的应用场景多样，下面列举几个典型的应用场景。

**场景一：HR系统集成飞书**

在企业的HR系统中完成入转调离之后，需要同步处理飞书账号的信息与状态变更。如果依靠HR手动维护，不仅费时费力，还容易出错遗漏。此时，可以通过组织架构的API来实现数据同步。

首先需要创建一个飞书应用，其次确定要调用的组织架构API，然后开启应用的权限并获取应用访问凭证，在入转调离完成时对部门、员工进行操作，以及查看同步完成的组织架构。

**场景二：开发企业应用**

企业要开发自建应用时，如果需要获取组织架构或员工数据，可以使用组织架构API。注意使用组织架构API查询数据时，除了需要获取接口权限，还需要获取具体的字段对应的权限。

**场景三：管理员操作**

管理员除了可以飞书管理后台维护组织架构数据，还可以通过调用API来进行操作。注意当使用管理员的访问凭证调用API时，只有在管理后台有同等操作权限时才能调用成功，并且可操作的成员、部门范围也会遵循管理员的管理范围。

## 资源介绍

组织架构以资源为中心进行开发，当前已经开放的资源和关系如下：

![WechatIMG212.jpeg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/de9c4afbdae82418db273c68cd274657_1dC3VfO6Tl.jpeg?height=1196&lazyload=true&width=1662)

## 权限要求

通讯录权限范围定义了应用调用组织架构接口能获取哪些部门和用户数据，不在应用获取通讯录范围内的数据是无法访问的。

如下图所示，组织架构中有 A、B、C 三个部门，若一个应用只有 B 和 C 两个部门的通讯录权限，那么该应用就只能通过接口获取到 B 和 C 两个部门的数据，获取 A 部门就会报出没有权限的错误。有关通讯录权限范围的详细介绍，请参考[通讯录权限范围简介](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8840b4abe1ff3fe13d66f84691864759_Tiw9bHx1UH.png?height=704&lazyload=true&width=1280)

## 接入流程

| 步骤              | 介绍                                                                                                                                                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 创建一个应用          | 如需创建企业自建应用，可参考 [自建应用的开发流程](/ssl:ttdoc/home/introduction-to-custom-app-development/self-built-application-development-process) <br> 如需创建应用商店应用，可参考 [开发和上架应用商店应用](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/uYzNwEjL2cDMx4iN3ATM)                           |
| 调用API，对组织架构进行操作 | 调用 API 前，你需要先获取访问凭证并开启对应的权限，详情参见 [如何调用服务端API](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)<br> 你还可以在 [API 调试台](https://open.feishu.cn/api-explorer?from=guide)中快速调试这些 API ，使用方法参见[API 调试台使用指南](/ssl:ttdoc/tools-and-resources/api-explorer-guide) |
| 监听事件，获知组织架构的变化  | 组织架构当前尚未提供事件，如需监听组织架构的变更，可以先使用 [通讯录事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/resources)<br> 监听事件前，你需要先申请相应的权限，详情参见 [事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)                                                                              |

## 频控要求
不同的组织架构 OpenAPI 设定了不同级别的频控控制策略，你可以在每个接口文档中找到接口频率限制信息，[频控策略](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN) 文档中也说明了在调用 OpenAPI 遇到频控限制时应该如何处理。

**频控策略概览**

组织架构接口采用**应用级+企业级双重限制**：
- 单应用调用接口超出接口预设阈值时，触发应用级限制
- 同一企业下多个应用调用同一接口时，累计触发企业级限制
- 全平台所有企业同时调用同一接口时，累计触发平台级限制

**接口分类说明**

接口的频率限制大概的逻辑如下：
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">接口类型</md-th>
<md-th style="width:30%">频率限制 </md-th>
<md-th style="width:50%">典型接口示例 </md-th>
</md-tr>
</md-thead>

<md-tbody>
<md-tr>
<md-td>数据写入</md-td>
<md-td>单企业单应用 5 次/秒</md-td>
<md-td>创建员工、创建部门 </md-td>
</md-tr>
<md-tr>
<md-td>数据修改</md-td>
<md-td>单企业单应用 10 次/秒</md-td>
<md-td>更新员工、离职员工、恢复离职员工、更新部门、删除部门</md-td>
</md-tr>
<md-tr>
<md-td>数据读取</md-td>
<md-td>单企业单应用 1000 次/分钟、50 次/秒</md-td>
<md-td>批量获取员工信息、批量获取员工列表、搜索员工、批量获取部门信息、批量获取部门列表、搜索部门</md-td>
</md-tr>
</md-tbody>
</md-table>
:::