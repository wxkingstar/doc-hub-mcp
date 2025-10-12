<!--
title: 清单功能概述
id: 7255580838154600476
fullPath: /uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/overview
updatedAt: 1689560165000
source: https://open.feishu.cn/document/task-v2/tasklist/overview
-->
# 清单功能概述

## 常规使用

使用[创建清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/create)接口创建一个清单。创建人自动成为清单的所有者。创建的同时，可以添加清单的初始成员。

使用[获取清单详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/get)接口可以获取到一个清单的全部数据。

使用[删除清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/delete)接口可以删除一个清单。对已经删除的清单无法做任何操作。已删除的清单也无法恢复。

使用[列取清单列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/list)接口可以获取调用身份可以列取的所有清单，以分页的形式返回。

使用[更新清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/patch)接口可以修改一个清单的名称和所有者。修改所有者时需要留意只有清单所有者才能修改清单的所有者。除所有者之外，更新清单接口不能增删清单的普通协作成员。

如要修改清单协作成员，需要使用[添加清单成员](/ssl:ttdoc:/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/add_members)
和[移除清单成员](/ssl:ttdoc:/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/remove_members)接口。

如要列取清单的所有任务，可以使用[列取清单任务](/ssl:ttdoc:/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/tasks)接口。

## 清单是如何鉴权的？

如果调用接口获取/编辑清单数据时得到`1470403`错误码（无权限访问），可以阅读本节内容来检查接口使用的access_token对应的身份是否对清单数据有读取/编辑权限。

清单有3种权限：

* 读取：可以查看清单，以及清单中的所有任务；
* 编辑：可以修改清单名，增删清单成员，增删清单的任务或者调整顺序；
* 管理：可以修改清单的所有者，可以删除清单；

清单的鉴权是基于其负责人和协作成员的角色进行的。每个清单有一个且只有一个用户作为所有者（owner）。同时可以拥有多个协作成员。每个协作成员可以是可编辑（editor）或者可阅读（viewer）角色。这些角色拥有的权限如下：

* 所有者 (owner)：读取 + 编辑 + 管理
* 可编辑 (editor)：读取 + 编辑
* 可阅读 (viewer)：读取

协作成员可以是一个群组。当为群组时，表示该群中所有的群成员都拥有该群组的清单角色。

清单的创建人**不是**一个权限角色，这与任务的创建人自动获取任务编辑权限不同。清单在被创建时，清单创建用户会自动设为清单的所有者。但所有者修改为其他用户后，如果创建用户不是清单的协作成员，也不在清单的协作群组中，对该清单就无权限访问了。

综合起来，当一个用户满足如下条件时，可以**读取**该清单：

* 用户是清单的所有者；
* 用户是清单的可阅读或者可编辑协作成员之一；
* 清单设置了某个群组作为可阅读或者可编辑协作成员，用户在这个群中。

当一个用户满足如下条件时，可以**编辑**该清单（例如：修改清单名字，向清单添加任务或者调整清单中任务的顺序）：

* 用户是清单的所有者；
* 用户是清单的可编辑协作成员之一；
* 清单设置了某个群组作为可编辑协作成员，用户在这个群中。

当一个用户满足如下条件时，可以**管理**该清单（例如：修改清单所有者，删除清单）

* 用户是清单的所有者
