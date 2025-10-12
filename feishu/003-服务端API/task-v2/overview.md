<!--
title: 任务概述
id: 7255580838154862620
fullPath: /uAjLw4CM/ukTMukTMukTM/task-v2/overview
updatedAt: 1731048851000
source: https://open.feishu.cn/document/task-v2/overview
-->
# 任务概述
## 产品介绍
飞书任务是一款飞书自带的通用任务/项目管理工具，拥有强大的协作能力。可以轻松地在飞书App的任务中心，群组，文档等场景中快捷创建任务。同时也可以将任务分享给感兴趣的成员，或者关注和跟进一些感兴趣的任务。

一组任务可以被加入到协作清单中，实现对具体的项目的工作的拆解和追踪，实现团队内部轻量高效的任务管理。


| 应用场景         |        |
| --------- | --------------- | 
|**创建任务，并指派负责人和关注人**<br>![22ada0d4-ec3b-4196-b8b0-494578be4ecb.gif](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b651de00878bc283aad2dbe3a2c8c08d_laopNe3KeA.gif?height=1032&lazyload=true&width=1188)| **拆解子任务并设置截止时间**<br>![8f4e2ab7-722c-4140-bb08-bc42575530a7.gif](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ecd14a7ee29ad2a19dc51cfc72008376_tbWoslVDV2.gif?height=908&lazyload=true&width=1190) |
|**使用协作清单组织管理任务**![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/884170d066a273ce6addbec7ae167bb0_oRgih3s8Sp.png?height=792&lazyload=true&width=1280)| **对清单任务进行分组和过滤**<br>![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e93c367a80cc1778c60629b2c471424f_vS0zo1qxRB.png?height=1404&lazyload=true&width=2132)

## 任务接口v2能力
任务v2 Openapi的能力包括：

* **[任务API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/overview)**：支持对任务的增删改查；添加/移除任务成员；将任务添加/移出清单；访问/添加任务的子任务等功能。
* **[清单API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/overview)**：支持清单的增删改查；添加/移除清单协作成员等功能。
* **[评论API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/comment/overview)**：支持评论的增删改查功能。目前只有任务支持评论。
* **[自定义分组API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/section/section-feature-overview)**：支持自定义分组的创建，更新，查询自定义分组详情，查询分组中的任务等功能。
* **[自定义字段API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/custom_field/custom-field-overview)**：支持自定义字段的创建，更新，查询等功能。
* **[附件API](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/attachment/attachment-feature-overview)**：支持附件的上传，获取，删除等功能。

## 如何使用任务API

### 1. 为应用申请调用API权限

API权限是指一个飞书开放应用是否可以调用某个具体的API。

任务API、子任务API、清单API、评论API都有专属的只读权限和写入权限。申请权限，提交审核并获取批准后，才能调用对应的接口。

| API分类        | 权限           | 功能        | 
| --------- | --------------- | -------   | 
|任务API，子任务API | 查看任务信息<br>`task:task:read` | 授权后可调用任务只读API，如[获取任务详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/get) |
|任务API，子任务API | 查看、创建、编辑和删除任务<br>`task:task:write` | 授权后可调用任意任务API |
|清单API | 查看任务清单<br>`task:tasklist:read` | 授权后可调用清单只读API，如[获取清单详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/get) |
|清单API | 查看、创建、编辑和删除任务清单<br>`task:tasklist:write` | 授权后可调用任意清单API |
|评论API | 查看任务评论<br>`task:comment:read` | 授权后可调用评论只读API，如[获取评论详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/comment/get) |
|评论API | 查看、创建、编辑和删除任务评论<br>`task:comment:write` | 授权后可调用任意评论API |
|自定义分组API | 查看自定义分组<br>`task:section:read` | 授权后可以调用自定义分组API，如[获取自定义分组详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/section/get) |
|自定义分组API | 查看、创建、编辑和删除自定义分组<br>`task:section:write` | 授权后可以调用任意自定义分组API |
|自定义字段API| 读取自定义字段<br>`task:custom_field:read` | 授权后可调用查询类自定义字段API，如[获取自定义字段](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/custom_field/get) |
|自定义字段API| 创建，编辑，查看自定义字段<br>`task:custom_field:write` | 授权后可调用所有自定义字段/自定义字段选项API |
|附件API| 读取附件<br>`task:attachment:read` | 授权后可调用查询类附件API，如[列取附件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/attachment/list) |
|附件API| 创建，编辑，查看附件<br>`task:attachment:write` | 授权后可调用所有附件API |


> 注意：当前版本API使用了与v1任务API接口不同的权限。比如调用v1的创建任务接口需要申请"查看、创建、编辑和删除飞书任务（历史版本）"(`task:task`)，而新版API使用“查看、创建、编辑和删除飞书任务“（`task:task:write`）。如果是v1接口的使用者要改为使用v2任务接口，需要重新申请新的权限并完成发布流程。
> 
> 为了方便区分，v1的接口权限的名字都被标记了“历史版本”。

申请时，应前往应用的【权限管理】界面，查找对应的权限并申请。
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e79f9c38778ad513d83e679057819236_hrOrBRKYSi.png?height=962&lazyload=true&width=1886)

对于企业自建应用需要企业管理员在管理后台审核通过；应用商店应用需要经过平台管理员审核、企业管理员在应用市场安装或升级。更详细的步骤可以参考[申请服务端 API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。

申请权限并得到授权后，应用即可调用相应的接口了，但这并不意味着调用者可以访问任意任务数据。对数据的访问还需要接口的调用身份满足数据权限规则。

### 2. 申请access_token得到调用者身份

调用API必须申请access_token，以表明**调用者身份**。飞书任务会以调用身份为依据来进行具体的鉴权。

任务API支持`tenant_access_token` 和 `user_access_token` 鉴权方式。
类型                       | tenant_access_token	      |    user_access_token                     
| ---- | ------------------------- | ----------------------------------- |-------- |
| 描述 | 以应用身份调用任务接口，可对应用创建的任务数据进行增删改查。 | 以用户身份调用任务接口，等价于用户直接操作飞书任务中心。        
| 使用场景 | 应用需要有属于自己的任务数据时，使用此token。 例如：<br>某项目管理应用中，需要为项目成员创建任务，此时可以通过`tenant_access_token`以应用的身份创建任务，并将特定的用户添加为任务的负责人。 | 用户开发第三方任务应用，使用飞书的身份信息和飞书任务的能力，但希望提供与飞书不同的用户界面。
| 获取方式 | 应用可直接通过app_id和app_secret通过飞书开放平台的授权接口获取tenant_access_token。| 引导用户登录飞书，然后在用户授权下获取user_access_token。|

`tenant_access_token`对应的身份和使用`user_access_token`对应的身份从任务系统视角，二者都是“用户”，都有名字，头像等属性，都会进行同样的鉴权。换句话说，`tenant_access_token`**没有任何特权**，不能访问其他普通用户或者其他应用的任务数据，更不能作为“租户管理员”角色来使用。`tenant_access_token`和`user_access_token`的区别仅仅是授权方式不同：`user_access_token`需要一个真实的用户授权产生，而`tenant_access_token`不需要，可以直接通过应用的app_id/secret来申请。

> 不论`tenant_access_token`还是`user_access_token`都有过期时间。目前为约为2小时。正式的应用需要实现一个定时产生新token的功能组件保证应用始终可以使用有效的token。
>
> 更多信息可以参考 [获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。


### 3. 调用接口

完成上述两个步骤后就可以调用接口了。可以查看接口文档获取接口的域名和url信息，并将上述的access_token，以`Authorization` Header的形式传入(token要拼在"Bearer "之后）。例如：

```
POST <api url>

Authorization: Bearer <access_token>

<req body>
```

例如，以自己的身份申请`tenant_access_token`调用[创建任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/create)接口，创建一个任务。然后使用[添加任务成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/add_members)接口将自己的用户身份(表示用户的open id)添加为任务的负责人。该任务此时也应该同时出现在飞书客户端的任务中心的”我负责的”任务列表中。

之后可以改用自己授权的`user_access_token`调用[查看任务详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/get)接口查看该任务的详情。因为当前用户是该任务负责人，因此有权限查看。之后改用另外一个用户授权的`user_access_token`调用该接口查看同一个任务的详情，会得到1470403的错误码，因为另外的用户并非该任务的成员，无法访问该任务。

## 任务基本术语和概念

为了有效使用接口，需要先了解任务的一些术语和概念。

* **任务（Task）**：一个任务记录了一条用户的待办事项。标题（Summary），备注（Description），是否完成等属性。每个任务都有全局唯一ID（Task Global Unique Identity，Task GUID），供API操作使用。
* **子任务（Subtask）**：属于一个任务的从属任务，一般用于工作拆解。一个任务可以有多个子任务，子任务也可以拥有自己的子任务。子任务除了拥有一个父任务的关联关系外之外，与普通任务没有任何区别。
* **任务负责人（Assignee）**：每个任务可以设置多个负责人。该角色可以对任务进行修改和标记完成等动作。从“一事一人负责”的大原则出发，建议一个任务应该有一个负责人，但系统并不强制要求。
* **任务关注人（Follower）**：每个任务可以设置多个关注人。关注人可以收到来自任务变更的通知消息。任务的负责人和关注人被统称为任务的成员(Task Members)。同一个用户在同一个任务中既可以是负责人，也可以是关注人，或者二者都是。
* **任务的完成方式**：当任务有多个负责人时，可以设置为两种模式：“或签任务” - 任何一个负责人标记任务完成，整个任务被视为完成；“会签任务” - 所有的负责人都标记任务完成，整个任务才被视作完成。
* **我负责的（MyTasks）**：所有负责人为自己的任务的集合。他们会在任务中心的“我负责的”界面显示。
* **清单（Tasklist）**：是容纳一组任务的容器。用于对单一项目的相关任务进行组织、管理、进度追踪等。每一个清单也拥有清单全局唯一ID（简称Tasklist GUID），供API操作使用。
* **清单所有者（Tasklist Owner）**：每一个清单都有1个用户拥有对清单的管理权限。清单被创建时，创建人就是清单的所有者。所有者可以转让给其他用户，但不可以缺失。只有清单的所有者可以更换该清单的所有者，也只有所有者能够删除清单。
* **清单协作成员(Tasklist Member)**: 每个清单都可以拥有多名协作者。协作者既可以是普通用户，也可以是群组。协作者可以拥有“可阅读”或”可编辑”角色。可阅读协作者可以查看清单中的任务；可编辑协作者可以修改清单名字，清单中增减任务，调整任务顺序等。同一个用户在同一个清单中只能有一个角色。
* **评论（Comment）**：对任务可以进行评论，记录和任务相关的信息。评论可以被发布人更新或者删除。
* **自定义分组（Section）**：“我负责的”和“清单”中可以定义自定义分组，由用户自行将任务分类。
* **自定义字段（Custom Field)**: 每个清单可以添加若干自定义类型的字段（支持数字，人员，日期，单选，多选类型），清单中的任务可以针对这些自定义字段设置值。
* **附件（Attachment）**: 每个任务可以拥有多个附件，如图片，PDF文档，zip文件等。任务的成员可以预览或下载这些文件。

注意：任务接口v2对任务v1接口的一些术语进行调整。
 * 任务的GUID(task_guid)在v1接口中被称为任务ID（task_id)。但v2接口中，总是使用"任务GUID"这个术语表示任务的全局唯一ID, 例如`df8a7aff-18c1-4b9c-9959-0dda10c49309`; task id用于表示为每个任务生成的t开头的多位数字的ID（例如`t1002325`）。
 * 任务的负责人（assignee）在v1接口中被称为"协作者"或者"执行者"（collaborator）。

## 接口设计原则和规范

### 接口风格

整套接口采用Restful-like风格。将每种核心业务概念设计为资源，包括："task", "tasklist", "comment"等。对资源的常规的创建，获取详情，获取列表，更新，删除均采用Restful风格。例如，对于任务，主要的操作被设计为：

| 操作         | HTTP Method   | HTTP URL         |
| --------- | --------------- | -------------------------|
| 创建任务    | POST           | /task/v2/tasks |
| 查看任务详情 | GET            | /task/v2/tasks/:task_guid |
| 获取任务列表 | GET            | /task/v2/tasks |
| 更新任务    | PATCH          | /task/v2/tasks/:task_guid |
| 删除任务    | DELETE         | /task/v2/tasks/:task_guid |

对于其他非标准Restful的接口。对于写入类接口采用`POST`，并通在URL中的资源ID之后添加动作名称。比如：
| 操作         | HTTP Method   | HTTP URL         |
| --------- | --------------- | -------------------------|
| 添加任务成员 | POST        | /task/v2/tasks/:task_guid/add_members |
| 任务移出清单 | POST         | /task/v2/tasks/:task_guid/remove_tasklist |

对于读取类接口采用`GET` method，并通在URL中的资源ID之后添加要获取的子资源。比如：
| 操作         | HTTP Method   | HTTP URL         |
| ----------- | --------------- | -------------------------|
| 获取任务的所有清单 | GET        | /task/v2/tasks/:task_guid/tasklists |
| 获取清单里的任务列表 | GET       | /task/v2/tasklists/:tasklist_guid/tasks |

## 关于资源的更新

在Restful风格中，资源更新可以采用PUT（整体更新）或者PATCH（部分更新）。在任务API中，统一采用PATCH（部分更新）的形式。部分更新的优势是调用者可以精确的指定要更新哪个字段，而不用担心因为忘记填写一些字段后调用接口意外地将相应的数据清空。同时，采用部分更新风格，可以明确的区分“不想更新一个字段”和“将一个字段清空”两种行为。

为了支持部分更新，具体做法是在更新接口的请求中同时提供一个资源的字段和一个`update_fields`字段。`update_fields`用于声明要更新哪些字段。同时在资源结构体中声明要改成什么样的数据。例如对于更新任务接口：
```json
PATCH /task/v2/tasks/d1fd19fd-4810-479d-a093-fb9b0442c6f6
{
  "task": {
     "summary": "新的标题",
     "due": {
       "timestamp": "1682924400000",
       "is_all_day": false
     },
     "description": "新的描述"
  },
  "update_fields":["summary","due"]
}
```
这个请求只更新了任务(task_guid=d1fd19fd-4810-479d-a093-fb9b0442c6f6)的标题`summary`和截止时间`due`两个字段。`update_fields`因为没有设置描述的字段名"description"，因此该任务的描述字段`description`不会发生任何变化。

如果填写了"update_fields"，但是没有在资源里写这个字段的数据，等价于清空。比如：
```json
PATCH /task/v2/tasks/d1fd19fd-4810-479d-a093-fb9b0442c6f6
{
  "task": {
     
  },
  "update_fields":["description"]
}
```
这个请求会将该任务的描述清空。

但需要留意，部分字段是不允许为空的。将一个不允许为空的字段更新为空，就会收到接口报错。比如下面的调用尝试清空任务的标题。
```json
PUT /task/v2/tasks/d1fd19fd-4810-479d-a093-fb9b0442c6f6
{
  "task": {
  },
  "update_fields":["summary"]
}
```
但因为任务的标题不允许为空，此时就会得到错误：
```json
{
    "code": 1470400,
    "msg": "Invalid Param 'summary', must not be empty.",
    "error": {
        "log_id": "2023070718115246FF085B0B55C60858A5"
    }
}
```

## 如何表示任务和清单的成员？

在接口中，任务和清单的成员统一使用`member`数据结构来表示。一个member包含`type`, `id`, `role`三个字段。其中
* `type`表示这是什么类型的成员，根据场景可以是`user`,`chat`,`app`等。
* `id`表示具体的成员的ID，根据`type`不同而不同。
  * 当`type`为"user"，`id`是一个表示用户的ID (根据`user_id_type`使用不同的格式，详见下文"如何使用user_id_type修改用户ID格式？"）
  * 当`type`为"chat"，`id`是一个表示chat的open_chat_id，例如 "oc_e9fe7b7f9237286bc3541aa863a94f11"。chat_open_id可以通过群组的开放接口获取到。
  * 当`type`为"app"，`id`是个表示应用的appid，例如"cli_a4af8f8e8af89023"。appid可以通过应用的管理后台获取。
* `role`表示成员在当前场景中的角色是什么。
 
任务和清单支持的成员类型和角色不同。

| 资源类型         | 支持的成员类型          | 支持的角色    | 
| --------- | --------------- | -------   | 
|任务 | "user"（用户）<br>"app"（应用） | "assignee"（负责人）<br>"follower"（关注人） |
|清单 | "user"（用户）<br>"chat"（群组）<br>"app"（应用） | "owner" (所有者）<br>"editor"（可编辑）<br>"viewer"（可阅读）|

例如，以下代码以`tenant_access_token`调用了创建任务的接口，同时添加了1个任务负责人和一个任务关注人。
```
POST /task/v2/tasks
Authorization: Bearer t-g10275aDL3ZEMVDEUYXRBXXKZ5NSWWQNX3F5Y24N
{
  "summary": "创建一个任务",
  "members": [
    {
      "type": "user",
      "id": "ou_1400208f15333e20e11339d39067844b",
      "role": "assignee"
    },
    {
      "type": "user",
      "id": "ou_d9f343c6c051ad2ef631f596dbea839f",
      "role": "follower"
    }
  ]
}
```

得到如下返回（其中隐去了除了任务GUID和成员字段外的其他字段）。得到1个负责人，1个关注人，两个均为用户。

```json
{
    "code": 0,
    "data": {
        "task": {
            "guid": "3555af03-3379-445c-a758-00720ed5c135",
            "members": [
                {
                    "id": "ou_1400208f15333e20e11339d39067844b",
                    "role": "assignee",
                    "type": "user"
                },
                {
                    "id": "ou_d9f343c6c051ad2ef631f596dbea839f",
                    "role": "follower",
                    "type": "user"
                }
            ],
        }
    },
    "msg": ""
}
```

## 如何使用user_id_type修改用户ID格式？
飞书开放平台支持设置不同的表示“用户”的ID的格式，即`user_id_type`。调用接口时可以通过设置query string参数`user_id_type`来选用不同的用户ID类型。每个请求的`user_id_type`设置会影响当**前请求和返回**中所有**表示用户**的成员的`id`字段的格式。

`user_id_type`参数的值支持3种：
:::html
<md-enum>
  <md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。一个Open ID的样例是"ou_1400208f15333e20e11339d39067844b"。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
  <md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。一个Union ID的样例为"on_e4d65380f2a0556cbc0ca6ea89b286boc"。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
  <md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。此外，在飞书管理后台录入一个新的员工时，可以录入其User ID （不录入会自动生成一个），就可以实现飞书和企业内部的人员管理系统使用同一套员工ID。一个User ID样例为"f19d4656"。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
</md-enum>
:::

不设置`user_id_type`参数时，默认为"open_id"。如无特殊需要，可以直接使用"open_id"。

`user_id_type`不会影响非用户类型的`id`字段格式。比如，一个群组成员，其`id`字段的格式永远是Open Chat ID；如果是应用，其`id`字段的格式永远是APP ID。

例如，使用添加清单成员接口向一个清单添加两个协作成员，一个可编辑的用户，一个可阅读的群组。如果使用Open ID，则设置"user_id_type=open_id"（或者不设置，直接使用默认值），用户的ID使用Open ID格式。
```json
POST /task/v2/tasklists/:task_guid/add_members?user_id_type=open_id
{
 "members": [
   {
     "type":"user",
     "id": "ou_d9f343c6c051ad2ef631f596dbea839f",
     "role": "editor"
   },
   {
     "type":"chat",
     "id": "oc_e9fe7b7f9237286bc3541aa863a94f11",
     "role": "viewer"
   },
  ]
}
```

如果设置了"user_id_type=user_id"，用户的ID就要改为使用User ID格式。留意群组成员的ID依旧是Open Chat ID格式。

```json
POST /task/v2/tasklists/:task_guid/add_members?user_id_type=user_id
{
 "members": [
   {
     "type":"user",
     "id": "1ef19g02",
     "role": "editor"
   },
   {
     "type":"chat",
     "id": "oc_e9fe7b7f9237286bc3541aa863a94f11",
     "role": "viewer"
   },
  ]
}
```

## 时间格式，精度和时区
在任务的接口中，所有的表示时间的字段一律采用距离1970-01-01 00:00:00 UTC的，以毫秒为单位的时间戳。但由于js等语言的进行json转换时的精度问题，该类字段在接口的请求/返回的json中，总是使用字符串类型来表达。

比如，一个任务的截止时间是东八区时间"2023-05-21 15:00:00"，其数据结构表示为：
```json
{
  "timestamp": "1684652400000",
  "is_all_day": false
}
```

开发者可以用一些库来直接得到这个时间戳。比如使用js，可以使用moment.js产生这个时间戳:
```javascript
let m = require('moment');
console.log(m("2023-05-21T15:00:00+0800").valueOf());
```

但”以毫秒为单位”是指接口协议使用的格式，并不是指业务上一定支持毫秒精度。比如任务的截止时间如果是一个时刻，支持的精度是秒。即使对截止时间输入一个毫秒精度的时间戳，也只有秒的部分被解析和存储，毫秒部分被清零。比如在更新任务接口设置截止时间:
```json
{
  "timestamp": "1684654215956",
  "is_all_day": false
}
```
接口返回的截止时间会变成:
```json
{
  "timestamp": "1684654215000",
  "is_all_day": false
}
```

统一使用毫秒时间戳的字符串表达方式是为了保证后续接口不断改变和增强后，不会因为业务的精度的多样性和变化导致在接口层面使用多种不一样的时间格式带来的混乱。

飞书任务系统内部不记录时区，而总是以时间戳的方式记录时间。开发者需要自行管理自己的应用使用什么时区来展示时间。比如飞书客户端支持每一个用户配置自己使用某个特定时区。对于拥有一个具体截止时刻的任务，如果有多个成员，每个成员各自的设备使用了不同的时区，则会得到**同一个时刻在不同时区下的不同展示**。
> 但在全天任务场景下，上述规则会有不同，详见[如何使用任务的开始时间和截止时间？](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/overview)。

## 接口错误返回规范

飞书任务原则上每个接口会返回几大类错误码。

| HTTP Status Code | code   | 含义       |  排查建议 |
| --------- | --------------- | -------------------------|-------------------------|
| 400       | 1470400        | 请求参数不正确，比如创建任务时不填写标题。| 错误返回的msg里会解释具体的错误原因。
| 403       | 1470403        | 缺少权限。例如要更新一个任务，却没有这个任务的编辑权限。 | 需要查询相关接口文档的权限解释部分，以及鉴权模型的解释文档来确认权限是否正确。 |
| 404       | 1470404        | 请求要访问的资源不存在或者已经删除，比如要更新一个任务，但是任务已经被删除了。| 确认资源是否还存在。如果确认还存在，则再次确认要操作的资源的ID被截取或存在不可见的空白字符。<br>本问题的一个常见的原因是复制和粘贴资源ID的时候漏了若干字符。|
| 500       | 1470500            | 服务器错误。可能由于内部超时，临时限流，服务器不稳定等原因导致。 | 遇到时可以先尝试用同样的请求参数重试调用。如果多次重试后问题依旧，可以联系支持人员反馈问题。<br>提交反馈时请提供问题请求的logid和请求参数。|

对于400类的错误，因为种类众多，且绝大部分都是开发阶段可以发现和处理的问题，因此一般不会给每个具体的错误提供一个具体的错误码，以保证接口不会引入过多的细碎的错误码。错误信息会解释错误的具体原因。比如：

| 错误场景 | 错误信息 |
|--------|---------------|
| 创建任务时设置了`due`参数，却没有提供里面的`timestamp`|Invalid Param 'due.timestamp', param is required.
| 添加一个任务成员时，角色既不是"assignee"，也不是"follower"|Invalid Param 'members', role is invalid. Only 'assignee', 'follower' are supported.  |
| 调用更新任务接口，设置任务的重复规则，但该任务没有截止时间。<br>只能给有截止时间的任务设置重复规则。|Invalid Param 'repeat_rule', cannot set repeat_rule without setting due.  |

对一些特殊的接口的特殊的错误，会额外定义具体的错误码，便于开发者编写处理逻辑。比如目前每个任务只支持1个提醒。当使用[添加任务提醒](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/add_reminders)接口给一个任务添加多于1个提醒时，会得到错误码1470613。这样开发者就可以开发逻辑，遇到这个错误码就先要调用[移除任务提醒](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/remove_reminders)接口先把现有的提醒删除。

**我们非常欢迎开发者对错误的返回提出意见，提供更简洁清晰的错误信息，或者给特定场景添加必要的错误码**。

## 分页接口的调用约定

部分接口（如[获取清单任务列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/tasks)接口）支持分页功能。支持分页的接口有特殊的调用方式。

分页接口的核心参数是`page_size`和`page_token`。`page_size`是每页的大小。如无特殊说明，`page_size`最小是1，最大是100，默认为50。将`page_size`设置为0，负数或者超过100的数字均会收到接口报错。

`page_token`用于定位分页的位置（offset）。由于内部实现的原因，offset不一定是一个简单的位置数字，而是某种内部的可以精确定位位置的数字，不同的接口的内部实现也可能不一样。因此`page_token`会进行编码，返回一个字符串。

在第一次调用带有分页的接口时，不要携带`page_token`参数或者写`page_token=`。表示返回第一页数据。如：

```
GET /task/v2/tasklist/:task_guid/tasks?page_size=10
```

得到返回

```json
{
  "code": 0,
  "msg": "success",
  "data": {
     "items": [
        {...},
        {...},
        ...
        {...}
      ],
     "has_more": true,
     "page_token": "Cg1UYXNrc1Rhc2tMaXN0EAMY.biLg5Mx"
  }
}
```

其中返回的data中，必然有3个字段`items`, `has_more`, `page_token`。其中

* `items`是当前分页的数据的列表，按照接口设计的顺序返回数据；
* `has_more`表示是否有下一页数据，如果为false就表示没有更多数据了；
* `page_token`是用于返回下一页的token。如果`has_more`为true，则必然存在；否则，`page_token`为空字符串

使用返回的`page_token`，并保持其他请求参数不变，再次调用接口，可以获得下一页的数据。如果还有更多数据，则会返回新的`page_token`。

```
GET /task/v2/tasklist/:task_guid/tasks?page_size=10&page_token=Cg1UYXNrc1Rhc2tMaXN0EAMY.biLg5Mx
```

如此反复，直到`has_more`为false为止。被称为一次“遍历”。

使用分页接口有如下注意事项：
* 在分页接口被反复调用期间，数据本身可能会发生变化。比如，原有数据中列表为A、B、C、D、E。假设用`page_size=3`调用接口获取第一页A、B、C，再调用下一次接口之前，一个新的数据被插入了，放到了A的后边，得到A、X、B、C、D、E。获取第二页时只能得到 D、E。只有重新从第一页获取时才能拿到X。
* 在一次遍历过程中，除了page_token外，不要修改其他任何参数，包括`page_size`和用于筛选数据范围的参数。如果这样做了，可能会得到不准确的分页结果。
* 调用分页接口时，应总是检查`has_more`字段。只有`has_more`为true时才调用接口获取下一页数据。如果总是直接用返回中的`page_token`发起下一次调用，因为最后一页的`page_token`总是空字符串，就会导致又回到第一页。

## 幂等调用

考虑如下场景：一个第三方的工单系统通过创建任务接口创建和工单系统关联的任务。比如对于工单A，调用创建任务接口。希望创建一个飞书任务T，与工单A一对一关联。同时，创建任务还设置了“自定义完成”功能，让任务被点击完成时自动跳转到工单A的界面。但是第一次调用接口时超时了，于是发起重试得到了任务。但实际上第一次超时的调用已经生效了了，也创建了任务。因此实际上飞书任务系统一共创建了2个任务T1和T2。但从工单视角，只看得到第二次创建的任务T2，并建立了A和T2的关联关系。在飞书任务中，却能看到T1和T2两个任务。其中T1因为也设置了“自定义完成”功能，点击完成会跳转到工单A。但工单A进行完成动作后，因为只和T2关联，只会设置T2完成。这样就会得到一个永远也无法完成的任务T1。为了消除T1，用户只能选择“退出任务T1“或者强行手工删除。

更极端的情况是，系统负载重时，可能会存在大量超时的情况。无法确定到底超时几次，创建了多少个多余的任务。

为了解决这个问题。飞书任务接口引入了幂等机制。例如对于创建任务接口，除了填写常规的任务字段外，可以额外设置`client_token`字段。该字段应该为一个字符串类型，可以唯一确定请求发起动机的字符串。比如在上述场景中，可以是工单A的唯一ID。飞书任务系统保证，在一定时间范围内使用完全相同的`client_token`进行请求时，不管调用多少次，最多只会产生1个任务。这个行为被称为幂等调用。

```
POST /task/v2/tasks
{
   "summary": "幂等的任务",
   "client_token": "mBDlrQwWRkiuDckhFzoMy00l4026jK"
}
```

此时，调用方发起调用，如果得到了500的Http Status Code，提示Internal Error，调用方可以稍微等待后以同样的参数重试调用，直到得到接口成功的结果。

> 如果再重试超过最大次数后依然报500的状态码，并且错误信息没有提供具体的原因，可以进行反馈，由飞书研发人员协助排查问题。

目前支持幂等能力的接口包括：[创建任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/create)接口，[创建子任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task-subtask/create)接口，和[添加任务成员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/add_members)接口。如需要其他接口进行支持，欢迎提供反馈意见。

使用幂等能力的注意事项：
* `client_token`应尽量能保证全局唯一。建议使用关联业务数据的ID，或者使用UUID算法生成。在系统内部只会对`client_token`进行基本的字符串比较。比较行为是区分大小写的。
* 使用相同`client_token`的请求的参数必须保持不变。飞书任务系统检查是否要进行幂等行为时，只会检查`client_token`判定是否是业务语义上的同一个请求，而不会检查具体的请求参数。使用相同`client_token`，却提供不同的参数调用接口的行为是未定义的。飞书任务系统不对此类调用的正确性做保证。
* 当并发的使用同一个`client_token`发起多个参数完全相同的请求时，只有第一个到达服务器的请求会被处理；其余的请求会被自动拒绝，并得到`code:1470422`的错误码。
* 幂等行为具有隔离性：
  * 不同接口之间的幂等行为是隔离的。例如对于A接口使用`client_token`发起调用；再对B接口使用同样的`client_token`发起调用。对B接口的调用不会被看作是对A接口的调用。
  * 不同调用者之间的幂等行为是隔离的。access_token A使用`client_token`调用了接口后，access_token B使用同样的`client_token`调用，不会被看作是A调用的幂等调用，不会返回A调用接口的结果。
* `client_token`有时效性。过期后用曾经用过的`client_token`调用接口，也无法得到当时的结果。而会被当作是全新的`client_token`。简单来说，不能将`client_token`当作资源ID使用。`client_token`的具体时限是：
  * 如果接口实际成功了，幂等行为会保持5分钟。过期后同一个`client_token`也会被视作是全新的token。这里的“实际成功“是指有可能内部接口调用成功，但调用者因为开放平台的网关设置已经超时。
  * 如果接口实际失败了，同一个`client_token`立刻会被视作全新的token。



