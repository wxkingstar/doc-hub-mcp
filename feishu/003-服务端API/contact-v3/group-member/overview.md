<!--
title: 用户组成员资源介绍
id: 7008085931593121795
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/overview
updatedAt: 1720167020000
source: https://open.feishu.cn/document/server-docs/contact-v3/group-member/overview
-->
#  用户组成员资源介绍

用户组内可以添加部门或用户，这些部门和用户均属于用户组成员。使用用户组成员 API，你可以在用户组内添加、移除、查询成员。

## 注意事项

- 用户组分为普通用户组和动态用户组，仅普通用户组支持手动添加或移除成员。如需了解用户组，可参见[用户组资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/overview)。
- 调用用户组成员 API 时，仅支持在用户组内添加、移除用户类型的用户组成员；暂不支持添加、移除部门类型的用户组成员。


## 字段说明

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 30%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >member_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	用户组成员类型。可选值有：


- user：用户。

- department：部门，该选项仅支持在查询接口中使用，不支持在添加、移除用户组成员接口中使用。
      
**示例值**："user"
	</md-td>
</md-tr>
    
<md-tr>
	<md-td>
	<md-text type="field-name" >member_id_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
用户组成员 ID 类型。
      
**可选值有：**
      
- open_id：当 `member_type` 取值为 `user` 时，表示用户的 open_id。当 `member_type` 取值为 `department` 时，表示部门的 open_department_id。
- union_id：当 `member_type` 取值为 `user` 时，表示用户的 union_id。
- user_id：当 `member_type` 取值为 `user` 时，表示用户的 user_id。
- department_id：当 `member_type` 取值为 `department` 时，表示部门的 department_id。
      
如需了解用户 ID，可参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。
      
如需了解部门 ID，可参见[部门资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview)。
	</md-td>
</md-tr>

<md-tr>
	<md-td>
	<md-text type="field-name" >member_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	成员的 ID。ID 类型需要与 member_id_type 的取值保持一致。
      
**示例值**："ou_7dab8a3d3cdcc9da365777c7ad535d62"  

	</md-td>
</md-tr>
    
  </md-tbody>
  
</md-table>
:::

## 数据示例


```json 
{
   "member_id": "u287xj12",
   "member_id_type": "user_id",
   "member_type": "user"
}
``` 

