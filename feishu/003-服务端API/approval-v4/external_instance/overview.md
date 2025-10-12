<!--
title: 三方审批实例概述
id: 7125425410599829508
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_instance/overview
updatedAt: 1745207076000
source: https://open.feishu.cn/document/server-docs/approval-v4/external_instance/overview
-->
# 三方审批实例概述

三方审批实例是指企业员工发起三方审批后产生的审批流，包含一个或多个审批任务、审批抄送等信息。

## 功能简介

当企业员工通过三方审批定义发起审批流程后，流程流转不会在飞书审批中心进行，而是在三方审批系统内流转。审批 API 提供了同步、校验三方审批实例的 API，你需要调用这些 API 将三方审批系统内的审批流程数据同步到飞书审批中心，同步后企业员工即可在飞书客户端的审批中心查看、处理审批。

三方审批实例 API 在三方审批流转过程中的作用可以参考下图：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5e69b20fbc787c3b518c382850bdb0b3_Sq0mIt3CQB.png?height=1150&lazyload=true&maxWidth=750&width=2180)

## 字段说明

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 30%;">名称</md-dt-th>
      <md-dt-th style="width: 15%;">类型</md-dt-th>
      <md-dt-th style="width: 55%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >approval_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批定义 Code。[创建三方审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/external_approval/create)的返回值，用来指定当前实例属于的审批定义。
      
**说明**：如果在当前接口设置了 title 参数，则审批实例名称按照 title 展示。如果未设置 title，审批实例的标题取自对应审批定义（approval_code）的 name 参数。

**示例值**："81D31358-93AF-92D6-7425-01A5D67C4E71"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
审批实例状态

**示例值**："PENDING"

**可选值有**：
<md-enum>
<md-enum-item key="PENDING" >审批中</md-enum-item>
<md-enum-item key="APPROVED" >审批流程结束，结果为同意</md-enum-item>
<md-enum-item key="REJECTED" >审批流程结束，结果为拒绝</md-enum-item>
<md-enum-item key="CANCELED" >审批发起人撤回</md-enum-item>
<md-enum-item key="DELETED" >审批被删除</md-enum-item>
<md-enum-item key="HIDDEN" >状态隐藏（不显示状态）</md-enum-item>
<md-enum-item key="TERMINATED" >审批终止</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >extra</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批实例扩展参数，JSON 格式，传值时需要压缩转义为字符串。

**示例值**："{\"xxx\":\"xxx\"}"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >instance_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批实例唯一标识，自定义设置。需确保证在当前企业和应用内唯一。

**示例值**："24492654"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >links</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >external_instance_link</md-text>
	</md-dt-td>

	<md-dt-td>
审批实例链接信息。设置的链接用于在审批中心 **已发起** 列表内点击跳转，跳回三方审批系统查看审批详情。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >pc_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	PC 端的三方审批实例跳转链接。
      
**说明**：      

- 当用户使用飞书 PC 端查看实例详情时，通过该链接进行跳转。
- pc_link 和 mobile_link 至少填一个。

**示例值**："https://applink.feishu.cn/client/mini_program/open?mode=appCenter&appId=cli_9c90fc38e07a9101&path=pc/pages/detail?id=1234"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >mobile_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	移动端的三方审批实例跳转链接。
      
**说明**：      

- 当用户使用飞书移动端查看实例详情时，通过该链接进行跳转。
- pc_link 和 mobile_link 至少填一个。
      
**示例值**："https://applink.feishu.cn/client/mini_program/open?appId=cli_9c90fc38e07a9101&path=pages/detail?id=1234"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>	
审批展示名称。
      
**说明**：
      
- 如果填写了该参数，则审批列表中的审批名称使用该参数。如果不填该参数，则审批名称使用审批定义的名称。
- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。
- Key 需要以 @i18n@ 开头。

**示例值**："@i18n@1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >form</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >external_instance_form\[\]</md-text>
	</md-dt-td>

	<md-dt-td>
	用户提交审批时填写的表单数据，用于所有审批列表中展示。可传多个值，最多展示前 3 个，长度不超过 2048 字符。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/69fd0009295b654b28ba2fb46727b4aa_KWIEEvsNPu.png?height=294&lazyload=true&maxWidth=200&width=626)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
表单字段名称。
	
**说明**：
      
- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。

- Key 需要以 @i18n@ 开头。

**示例值**："@i18n@1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	表单值。
      
**说明**：
      
- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。

- Key 需要以 @i18n@ 开头。

**示例值**："@i18n@2"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批发起人 user_id。发起人可在审批中心的 **已发起** 列表中看到所有已发起的审批。在 **待办**、**已办**、**抄送我** 列表中，该字段用来展示审批的发起人。获取方式参见[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。
      
**注意**：审批发起人的 open_id 和 user_id 需至少传入一个。

**示例值**："a987sf9s"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >user_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批发起人的用户名。如果发起人不是真实的用户（例如是某个部门），没有 user_id，则可以使用该参数传入一个名称。
      
**说明**：
      
- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。

- Key 需要以 @i18n@ 开头。

**示例值**："@i18n@3"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
审批发起人 open_id。发起人可在审批中心的 **已发起** 列表中看到所有已发起的审批。在 **待办**、**已办**、**抄送我** 列表中，该字段用来展示审批的发起人。获取方式参见[如何获取用户的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。
      
**注意**：审批发起人的 open_id 和 user_id 需至少传入一个。

**示例值**："ou_be73cbc0ee35eb6ca54e9e7cc14998c1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	发起人的部门 ID，用于在审批中心列表中展示发起人的所属部门，不传值则不展示。获取方式参见[部门 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#9c02ed7a)。
      
**说明**：如果用户没加入任何部门，传 `""`，默认展示企业名称。如果传入 department_name 参数，则展示对应的部门名称。

**示例值**："od-8ec33278bc2"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >department_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批发起人的部门名称。如果发起人不是真实的用户或没有部门，则可以使用该参数传入部门名称。

**说明**：
      
- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。
- Key 需要以 @i18n@ 开头。
      
**示例值**："@i18n@10"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
审批发起时间，Unix 毫秒时间戳。

**示例值**："1556468012678"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批实例结束时间。未结束的审批为 0，Unix 毫秒时间戳。

**示例值**："1556468012678"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >update_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批实例最近更新时间，用于推送数据版本控制。如果 update_mode 值为 UPDATE，则仅当传过来的 update_time 有变化时（变大），才会更新审批中心中的审批实例信息。
      
**说明**：使用该参数主要用来避免并发时，旧数据更新了新数据。

**示例值**："1556468012678"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >display_method</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
列表页打开审批实例的方式。

**示例值**："BROWSER"

**可选值有**：
<md-enum>
<md-enum-item key="BROWSER" >跳转系统默认浏览器打开</md-enum-item>
<md-enum-item key="SIDEBAR" >飞书中侧边抽屉打开</md-enum-item>
<md-enum-item key="NORMAL" >飞书内嵌页面打开</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >update_mode</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
更新方式。
      
- 当 update_mode 取值为 REPLACE 时，每次都以当前推送的数据为最终数据，会删掉审批中心中，不在本次推送数据中的多余的任务、抄送数据。
- 当 update_mode 取值为 UPDATE 时，不会删除审批中心的数据，而只进行新增、更新实例与任务数据。

**示例值**："UPDATE"

**可选值有**：
<md-enum>
<md-enum-item key="REPLACE" >全量替换</md-enum-item>
<md-enum-item key="UPDATE" >增量更新</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >task_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >external_instance_task_node\[\]</md-text>
	</md-dt-td>

	<md-dt-td>
	任务列表。

**数据校验规则**：最大长度 `300`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >task_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批实例内，审批任务的唯一标识，用于更新审批任务时定位数据。

**示例值**："112534"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批人 user_id，获取方式参见[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。
      
**说明**：
      
- 该任务会出现在审批人的飞书审批中心 **待办** 或 **已办** 的列表中。
- user_id 与 open_id 需至少传入一个。

**示例值**："a987sf9s"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批人 open_id，获取方式参见[如何获取用户的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。
      
**说明**：
      
- 该任务会出现在审批人的飞书审批中心 **待办** 或 **已办** 的列表中。
- user_id 与 open_id 需至少传入一个。

**示例值**："ou_be73cbc0ee35eb6ca54e9e7cc14998c1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批任务名称。
      
**说明**：

- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。

- Key 需要以 @i18n@ 开头。

**示例值**："@i18n@4"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >links</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >external_instance_link</md-text>
	</md-dt-td>

	<md-dt-td>
		
在审批中心 **待办**、**已办** 中使用的三方审批跳转链接，用于跳转回三方审批系统查看任务详情。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >pc_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
      

	PC 端的跳转链接。
      
      
**说明**：
      
- 当用户使用飞书 PC 端查看任务详情时，通过该链接进行跳转。
- pc_link 和 mobile_link 至少填一个。

**示例值**："https://applink.feishu.cn/client/mini_program/open?mode=appCenter&appId=cli_9c90fc38e07a9101&path=pc/pages/detail?id=1234"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mobile_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
移动端的跳转链接。
      
      
**说明**：
      
- 当用户使用飞书移动端查看任务详情时，通过该链接进行跳转。
- pc_link 和 mobile_link 至少填一个。

**示例值**："https://applink.feishu.cn/client/mini_program/open?appId=cli_9c90fc38e07a9101&path=pages/detail?id=1234"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	任务状态。

**示例值**："PENDING"

**可选值有**：
<md-enum>
<md-enum-item key="PENDING" >待审批</md-enum-item>
<md-enum-item key="APPROVED" >任务同意</md-enum-item>
<md-enum-item key="REJECTED" >任务拒绝</md-enum-item>
<md-enum-item key="TRANSFERRED" >任务转交</md-enum-item>
<md-enum-item key="DONE" >任务通过但审批人未操作。审批人看不到该任务时，如需查看可抄送至该审批人。</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >extra</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
扩展字段。JSON 格式，传值时需要压缩转义为字符串。

**示例值**："{\"xxx\":\"xxx\"}"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	任务创建时间，Unix 毫秒时间戳。

**示例值**："1556468012678"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >end_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
任务完成时间。未结束的审批为 0，Unix 毫秒时间戳。

**示例值**："1556468012678"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >update_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
任务最近更新时间，用于推送数据版本控制。如果 update_mode 值为 UPDATE，则仅当传过来的 update_time 有变化时（变大），才会更新审批中心中的审批任务信息。

**示例值**："1556468012678"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >action_context</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	操作上下文。当用户操作审批时，回调请求中会包含该参数，用于传递该任务的上下文数据。

**示例值**："123456"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >action_configs</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >action_config\[\]</md-text>
	</md-dt-td>

	<md-dt-td>
	任务级别的快捷审批操作配置。
      
**注意**：快捷审批目前仅支持在飞书移动端操作。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >action_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	操作类型。每个任务都可以配置两个操作（同意、拒绝或任意中的两个），操作会展示审批列表中。当用户操作时，回调请求会包含该字段，三方审批可接受到审批人的操作数据。

**示例值**："APPROVE"

**可选值有**：
<md-enum>
<md-enum-item key="APPROVE" >同意</md-enum-item>
<md-enum-item key="REJECT" >拒绝</md-enum-item>
<md-enum-item key="{KEY}" >任意字符串。如果使用任意字符串，则需要提供 action_name</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >action_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	操作名称。如果 action_type 不等于 APPROVAL 或 REJECT，则必须提供该字段，用于展示特定的操作名称。
          
**说明**：
      
- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。

- Key 需要以 @i18n@ 开头。

**示例值**："@i18n@5"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_need_reason</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>

	<md-dt-td>
	是否需要审批意见。取值为 true 时，审批人在审批中心操作任务后，还需要跳转填写审批意见。

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_reason_required</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>

	<md-dt-td>
	审批意见是否必填

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_need_attachment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>

	<md-dt-td>
	审批意见是否支持上传附件

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >display_method</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
审批中心列表页打开审批任务的方式。

**示例值**："BROWSER"

**可选值有**：
<md-enum>
<md-enum-item key="BROWSER" >跳转系统默认浏览器打开</md-enum-item>
<md-enum-item key="SIDEBAR" >飞书中侧边抽屉打开</md-enum-item>
<md-enum-item key="NORMAL" >飞书内嵌页面打开</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >cc_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >cc_node\[\]</md-text>
	</md-dt-td>

	<md-dt-td>
	抄送列表。

**数据校验规则**：最大长度 `200`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >cc_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	审批实例内抄送唯一标识。

**示例值**："123456"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
抄送人的 user_id。获取方式参见[如何获取用户的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。
      
**注意**：抄送人的 open_id 和 user_id 需至少传入一个。

**示例值**："12345"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
抄送人的 open_id。获取方式参见[如何获取用户的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。
      
**注意**：抄送人的 open_id 和 user_id 需至少传入一个。

**示例值**："ou_be73cbc0ee35eb6ca54e9e7cc14998c1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >links</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >external_instance_link</md-text>
	</md-dt-td>

	<md-dt-td>
	审批抄送跳转链接。设置的链接用于在审批中心 **抄送我** 列表内点击跳转，跳回三方审批系统查看审批抄送详情。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >pc_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	PC 端的三方审批实例跳转链接。
      
**说明**：      

- 当用户使用飞书 PC 端查看审批抄送时，通过该字段进行跳转。
- pc_link 和 mobile_link 至少填一个。

**示例值**："https://applink.feishu.cn/client/mini_program/open?mode=appCenter&appId=cli_9c90fc38e07a9101&path=pc/pages/detail?id=1234"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mobile_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	移动端的三方审批实例跳转链接。
      
**说明**：      

- 当用户使用飞书移动端查看审批抄送时，通过该字段进行跳转。
- pc_link 和 mobile_link 至少填一个。

**示例值**："https://applink.feishu.cn/client/mini_program/open?appId=cli_9c90fc38e07a9101&path=pages/detail?id=1234"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >read_status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	抄送人的阅读状态，空值表示不支持已读未读。

**示例值**："READ"

**可选值有**：
<md-enum>
<md-enum-item key="READ" >已读</md-enum-item>
<md-enum-item key="UNREAD" >未读</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >extra</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	扩展字段。JSON 格式，传值时需要压缩转义为字符串。

**示例值**："{\"xxx\":\"xxx\"}"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
抄送任务名称。

**示例值**："title"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >create_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
抄送发起时间，Unix 毫秒时间戳。

**示例值**："1556468012678"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >update_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
抄送最近更新时间，用于推送数据版本。如果 update_mode 值为 UPDATE，则仅当传过来的 update_time 有变化时（变大），才会更新审批中心中的审批实例信息。

**示例值**："instance 的update_time"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >display_method</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		
列表页打开审批任务的方式。

**示例值**："BROWSER"

**可选值有**：
<md-enum>
<md-enum-item key="BROWSER" >跳转系统默认浏览器打开</md-enum-item>
<md-enum-item key="SIDEBAR" >飞书中侧边抽屉打开</md-enum-item>
<md-enum-item key="NORMAL" >飞书内嵌页面打开</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >i18n_resources</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_resource\[\]</md-text>
	</md-dt-td>

	<md-dt-td>
	国际化文案
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >locale</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
		语言。
      
**示例值**："zh-CN"

**可选值有**：
<md-enum>
<md-enum-item key="zh-CN" >中文</md-enum-item>
<md-enum-item key="en-US" >英文</md-enum-item>
<md-enum-item key="ja-JP" >日文</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >texts</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_resource_text\[\]</md-text>
	</md-dt-td>

	<md-dt-td>
      
文案的 Key:Value。Key 需要以 @i18n@ 开头，并按照各个参数的要求传入 Value。该字段主要用于做国际化，允许用户同时传多个语言的文案，审批中心会根据用户当前的语音环境使用对应的文案，如果没有传用户当前的语音环境文案，则会使用默认的语言文案。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	文案 Key，需要和各个参数 Key 相匹配。

**示例值**："@i18n@1"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	文案 Value，即文案 Key 对应的参数值。

**示例值**："people"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >is_default</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>

	<md-dt-td>
	是否为默认语言。默认语言需要包含所有所需的文案 Key，非默认语言如果 Key 不存在，则会使用默认语言代替。

**示例值**：true
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

## 数据示例
```json
{
    "approval_code": "84C18825-A3D2-41D0-891F-E7A2424C5D48",
    "instance_id": "3162634",
    "status": "PENDING",
    "extra": "",
    "links": {
        "pc_link": "http://applink.feishu.cn/sso/common?redirectUrl=/seeyon/main.do?method=main&client=pc",
        "mobile_link": "http://applink.feishu.cn/sso/common?redirectUrl=/seeyon/main.do?method=main&client=pc"
    },
    "title": "@i18n@1",
    "form": [{
        "name": "@i18n@2",
        "value": "@i18n@3"
    }],
    "user_id": "16fb9ff3",
    "user_name": "张三",
    "open_id": "123",
    "department_id": "",
    "department_name": "hr",
    "start_time": "1657093395000",
    "update_time": "1657093395000",
    "end_time": 0,
    "update_mode": "REPLACE",
    "task_list": [{
        "task_id": "112253",
        "user_id": "16fb9ff3",
        "links": {
            "pc_link": "http://",
            "mobile_link": "http://"
        },
        "status": "PENDING",
        "extra": "",
        "title": "同意",
        "create_time": "1638468921000",
        "end_time": 0,
        "update_time": "1638468921000",
        "action_context": "123456",
        "action_configs": [{
            "action_type": "APPROVE",
            "action_name": "@i18n@1",
            "is_need_reason": true,
            "is_reason_required": true,
            "is_need_attachment": true
        }]
    }],
    "cc_list": [{
        "cc_id": "1231243",
        "user_id": "16fb9ff3",
        "open_id": "",
        "links": {
            "pc_link": "http://",
            "mobile_link": "http://"
        },
        "read_status": "READ",
        "extra": "",
        "title": "XXX",
        "create_time": "1657093395000",
        "update_time": "1657093395000"
    }],
    "i18n_resources": [{
        "locale": "zh-CN",
        "is_default": true,
        "texts": [ {"key":"@i18n@1", "value":"测试"}, {"key":"@i18n@2", "value":"天"},{"key":"@i18n@3", "value":"2022-07-06"}]
    }]
}
```


