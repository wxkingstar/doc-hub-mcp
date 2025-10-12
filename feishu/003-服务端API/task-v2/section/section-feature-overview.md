<!--
title: 自定义分组功能概述
id: 7259330038033793052
fullPath: /uAjLw4CM/ukTMukTMukTM/task-v2/section/section-feature-overview
updatedAt: 1691405466000
source: https://open.feishu.cn/document/task-v2/section/section-feature-overview
-->
# 自定义分组功能概述

自定义分组可以方便的在我负责的和清单中对任务进行自定义归类。
通过自定义分组。你可以：
* 按状态分组，待启动-进行中-已完成
* 按优先级分组，P0-重要且紧急，P1-重要但不紧急，...
* 按类别分组，市场相关、人事相关，...

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/80a1c118249cc09c910206eee1e3ed33_42jbCsaIep.png?height=1382&lazyload=true&maxWidth=600&width=2110)

自定义分组可以在某个资源中被创建，目前支持自定义分组的资源包括：

* “我负责的”任务列表(`resource_type=my_tasks`)
* 清单(`resource_type=tasklist`)

每个资源中可以有1个和多个自定义分组。至少有一个默认自定义分组。可以将一个或多个任务添加到某一个自定义分组中。如果一个自定义分组被删除了，分组中的任务则会被自动移动到该资源下的默认自定义分组中。默认自定义分组不可以删除（但可以修改名字）。每个自定义分组都有一个全局唯一ID(Section GUID)，供API操作。

## 常规使用

* 使用[创建自定义分组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/section/create)创建自定义分组。
* 使用[获取自定义分组详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/section/get)可以查看某个自定义分组的GUID，名称，所属资源，创建人等信息。
* 使用[更新自定义分组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/section/patch)可以更新自定义分组的名称和在当前资源下的位置。
* 使用[删除自定义分组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/section/delete)可以将该自定义分组删除。如该自定义分组下包含多个任务，则这些任务会被挪到当前的资源的默认分组下。默认分组不可以被删除。
* 使用[获取自定义分组任务列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/section/tasks)获取某个资源下的所有自定义分组。
* 使用[获取自定义分组任务列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/section/tasks)获取某个资源下的某个特定分组内部的任务列表。该接口支持简单的过滤。

如要将任务添加到某个清单的某个自定义分组里，可以使用[任务加入清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/add_tasklist)接口。如果想将清单中的任务挪动到某个自定义分组，可以在调用该接口时保持`tasklist_guid`不变，只改变`section_guid`即可实现。“将任务移出自定义分组“实际上等价于将该任务添加到同一个资源下的其他自定义分组中。因为同一个资源下，一个任务必须属于某个自定义分组。如不希望一个任务进入任何一个用户创建的自定义分组，则可以将其添加到默认的自定义分组中。

## 自定义分组和分组的关系是什么？
“分组”（Group）是指按照任务的某个属性对任务进行聚合。而自定义分组（Section）是指用户自己手工维护的任务归类。简单来说，自定义分组是多种分组形式中的一种。用户可以选择使用“自定义分组”对任务进行分组展示。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2bdfbd19b66ca188f035ee88e224b6c8_C3VZXI3OOu.png?height=502&lazyload=true&maxWidth=500&width=910)

## 自定义分组是怎么鉴权的？

自定义分组的鉴权是跟随其容器鉴权实现的：
* 在清单中，自定义分组的权限是跟随清单的。如果调用身份拥有清单的可阅读权限，则可以查看该清单的所有分组详情和该清单的所有分组中的任务列表。如果拥有清单的可编辑权限，则可以新建/删除自定义分组，将任务添加进入自定义分组中或者移出该分组。
* 在我负责的任务列表中，当前用户只能访问自己的“我负责的”任务列表中的自定义分组信息。
