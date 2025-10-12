<!--
title: 原生审批实例概述
id: 7124649956745412611
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/overview-approval-instance
updatedAt: 1745206930000
source: https://open.feishu.cn/document/server-docs/approval-v4/instance/overview-approval-instance
-->
# 原生审批实例概述

原生审批实例是指基于某一原生审批定义发起的审批流。企业管理员在审批中心创建并发布审批定义后，员工即可在飞书客户端的 **工作台** > **审批** 功能发起审批申请，发起申请时需要根据审批定义的表单填写数据，发起申请后审批会按照审批定义的流程进行流转。审批业务将原生审批实例的相关操作封装为开放能力，你可调用原生审批实例 API 完成原生审批实例的创建、撤回或查询等管理操作。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/018f87b734cd0a65d91e2439a30f1d41_vPOs05YAsV.png?height=1056&lazyload=true&maxWidth=700&width=2562)

## 基础概念

在正式开始使用原生审批实例 API 之前，请务必了解以下基本概念。

### 审批定义

审批实例是基于审批定义创建的，因此在创建审批实例之前，需要先创建审批定义，定义发起审批所需的表单内容以及审批流程。详细介绍参见[原生审批定义概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources)。

你需要了解审批定义中的 **表单** 与 **流程**，在后续创建审批实例时需要：

- 根据审批定义的表单设计，依次为表单内的控件传值。
- 根据审批定义的流程设计，完成节点的审批人、抄送人等配置。

### 审批实例唯一标识 Instance Code

每一个审批实例都有一个唯一标识（Instance Code），在开发过程中如需使用指定的审批实例，则需要通过 Instance Code 定位审批实例。获取方式说明：

- 成功调用[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)接口后，可在返回结果中获取当前审批实例的 Instance Code。

- 调用[批量获取审批实例 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list)、[查询实例列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/query)，可查询存量的审批实例 Instance Code。

### 审批实例状态

审批实例在流转过程中状态会发生变化（包括 **审批中**、**通过**、**拒绝**、**撤回**、**删除** 等），你可以根据审批实例的当前状态判断审批进展，例如：

- 新建的审批实例初始状态为 **审批中**。
- 审批人同意审批后，审批实例会变更为 **通过** 状态。
- 审批发起人撤回审批后，审批实例会变更为 **撤回** 状态。


## 字段说明
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: ">名称</md-dt-th>
      <md-dt-th style="width: ">类型</md-dt-th>
      <md-dt-th style="width: ">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
    
 <md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >instance_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
审批实例 Code
	</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >approval_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
审批名称
	</md-dt-td>
</md-dt-tr>

    
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >approval_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
审批定义 Code
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
	审批创建时间，毫秒时间戳
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
	审批结束时间，毫秒时间戳
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
		审批发起人的 user_id，了解用户 ID 参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)
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
审批发起人的 open_id，了解用户 ID 参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >serial_number</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
审批单编号
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
	审批发起人所属的[部门 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#9c02ed7a)
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

**可选值有**：
<md-enum>
<md-enum-item key="PENDING" >审批中</md-enum-item>
<md-enum-item key="APPROVED" >通过</md-enum-item>
<md-enum-item key="REJECTED" >拒绝</md-enum-item>
<md-enum-item key="CANCELED" >撤回</md-enum-item>
<md-enum-item key="DELETED" >删除</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >uuid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
审批实例的 uuid，用于幂等操作，避免误操作重复创建审批实例
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >form</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
审批实例填写的表单数据，JSON 序列化后的字符串
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >task_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_task\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
		
审批任务列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
审批任务 ID
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
审批人的 user_id，自动通过、自动拒绝时该参数返回值为空
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
审批人的 open_id，自动通过、自动拒绝时该参数返回值为空
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
	任务状态

**可选值有**：
<md-enum>
<md-enum-item key="PENDING" >审批中</md-enum-item>
<md-enum-item key="APPROVED" >同意</md-enum-item>
<md-enum-item key="REJECTED" >拒绝</md-enum-item>
<md-enum-item key="TRANSFERRED" >已转交</md-enum-item>
<md-enum-item key="DONE" >完成</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >node_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
审批任务所属的审批节点 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >node_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
审批任务所属的审批节点名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >custom_node_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
审批任务所属的审批节点的自定义 ID。如果没设置自定义 ID，则不返回该参数值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批方式

**可选值有**：
<md-enum>
<md-enum-item key="AND" >会签</md-enum-item>
<md-enum-item key="OR" >或签</md-enum-item>
<md-enum-item key="AUTO_PASS" >自动通过</md-enum-item>
<md-enum-item key="AUTO_REJECT" >自动拒绝</md-enum-item>
<md-enum-item key="SEQUENTIAL" >按顺序</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >start_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	
审批任务的开始时间，毫秒时间戳
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
		
审批任务的完成时间，毫秒时间戳，未完成时返回 0
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >comment_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_comment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	评论列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
评论 ID
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
		
发表评论的用户 user_id
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
发表评论的用户 open_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >comment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
评论内容
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
评论时间，毫秒时间戳
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >timeline</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_timeline\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	审批动态
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	动态类型，不同类型 ext 内的 user_id_list 含义不一样

**可选值有**：
<md-enum>
<md-enum-item key="START" >审批开始</md-enum-item>
<md-enum-item key="PASS" >通过</md-enum-item>
<md-enum-item key="REJECT" >拒绝</md-enum-item>
<md-enum-item key="AUTO_PASS" >自动通过</md-enum-item>
<md-enum-item key="AUTO_REJECT" >自动拒绝</md-enum-item>
<md-enum-item key="REMOVE_REPEAT" >去重</md-enum-item>
<md-enum-item key="TRANSFER" >转交</md-enum-item>
<md-enum-item key="ADD_APPROVER_BEFORE" >前加签</md-enum-item>
<md-enum-item key="ADD_APPROVER" >并加签</md-enum-item>
<md-enum-item key="ADD_APPROVER_AFTER" >后加签</md-enum-item>
<md-enum-item key="DELETE_APPROVER" >减签</md-enum-item>
<md-enum-item key="ROLLBACK_SELECTED" >指定回退</md-enum-item>
<md-enum-item key="ROLLBACK" >全部回退</md-enum-item>
<md-enum-item key="CANCEL" >撤回</md-enum-item>
<md-enum-item key="DELETE" >删除</md-enum-item>
<md-enum-item key="CC" >抄送</md-enum-item>
</md-enum>
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
		
发生时间，毫秒时间戳
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
产生该动态的用户 user_id
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
产生该动态的用户 open_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >user_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
被抄送人列表，列表内包含的是用户 user_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >open_id_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
被抄送人列表，列表内包含的是用户 open_id
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
	产生动态关联的任务 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >comment</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	理由
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >cc_user_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >instance_cc_user\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	抄送人列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	抄送人的 user_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >cc_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	审批实例内抄送唯一标识
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
抄送人的 open_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >ext</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		
其他信息，JSON 格式，目前包括 user_id_list, user_id，open_id_list，open_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >node_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	产生审批任务的节点 key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >modified_instance_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	修改的原实例 Code，仅在查询修改实例时显示该字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >reverted_instance_code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
撤销的原实例 Code，仅在查询撤销实例时显示该字段
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >reverted</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
		
单据是否被撤销
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

## 数据示例
```json
{
        "approval_name": "Payment",
        "start_time": "1564590532967",
        "end_time": "1564590532967",
        "user_id": "f3ta757q",
        "open_id": "ou_3cda9c969f737aaa05e6915dce306cb9",
        "serial_number": "202102060002",
        "department_id": "od-8ec33ffec336c3a39a278bc25e931676",
        "status": "PENDING",
        "uuid": "1234567",
        "form": "[{\"id\": \"widget1\",\"custom_id\": \"user_info\",\"name\": \"Item application\",\"type\": \"textarea\",\"value\":\"aaaa\"}]",
        "task_list": [
            {
                "id": "1234",
                "user_id": "f7cb567e",
                "open_id": "ou_123457",
                "status": "PENDING",
                "node_id": "46e6d96cfa756980907209209ec03b64",
                "node_name": "开始",
                "custom_node_id": "manager",
                "type": "AND",
                "start_time": "1564590532967",
                "end_time": "0"
            }
        ],
        "comment_list": [
            {
                "id": "1234",
                "user_id": "f7cb567e",
                "open_id": "ou_123456",
                "comment": "ok",
                "create_time": "1564590532967"
            }
        ],
        "timeline": [
            {
                "type": "PASS",
                "create_time": "1564590532967",
                "user_id": "f7cb567e",
                "open_id": "ou_123456",
                "user_id_list": [
                    "Eeea5gefe"
                ],
                "open_id_list": [
                    "ou_123456"
                ],
                "task_id": "1234",
                "comment": "ok",
                "cc_user_list": [
                    {
                        "user_id": "eea5gefe",
                        "cc_id": "123445",
                        "open_id": "ou_12345"
                    }
                ],
                "ext": "{\"user_id\":\"62d4a44c\",\"open_id\":\"ou_123456\"}",
                "node_key": "APPROVAL_240330_4058663"
            }
        ],
        "modified_instance_code": "81D31358-93AF-92D6-7425-01A5D67C4E71",
        "reverted_instance_code": "81D31358-93AF-92D6-7425-01A5D67C4E71",
        "approval_code": "7C468A54-8745-2245-9675-08B7C63E7A85",
        "reverted": false
}
```
