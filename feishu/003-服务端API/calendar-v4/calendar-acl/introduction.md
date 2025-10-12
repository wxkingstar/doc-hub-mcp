<!--
title: 访问控制资源介绍
id: 7062619112195309572
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/introduction
updatedAt: 1712716141000
source: https://open.feishu.cn/document/server-docs/calendar-v4/calendar-acl/introduction
-->
# 访问控制资源介绍

访问控制（ACL）用于管理日历的成员权限。一个日历内可以创建多个 ACL，每一个 ACL 内可以为一个成员设置日历的访问权限，其中访问权限包括：

- 游客，只能看到日历日程忙闲信息
- 订阅者：可查看日历内的所有日程详情。
- 编辑者：可在日历内创建或修改日程。
- 管理员：可管理日历及共享设置。


##  字段说明

日历的访问控制资源包含的属性说明如下。

:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 20%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >acl_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
单个日历内的 ACL 唯一标识，只读字段。不同日历实体下的 acl_id 可能重复。
          
**示例值**："user_6843287928157667331"
          
**获取方式**：[获取访问控制列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/list)
          
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >role</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
ACL 的访问级别，即成员对日历的访问权限。<br>
          
**可选值有**：
- `free_busy_reader` 游客，只能看到忙碌、空闲信息。
- `reader` 订阅者，可查看所有日程详情。
- `writer` 编辑者，可创建及修改日程。
- `owner` 管理员，可管理日历及共享设置。

**示例值**：`owner`<br>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >scope</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >acl_scope</md-text>
        </md-td>
        <md-td>
权限生效范围。<br>
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
权限生效范围的类型。目前只支持选择 `user`。<br>
          
**可选值有**：
- `user`：用户，用户资源定义可参见 [用户 User 资源概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/field-overview)。

**示例值**：`user`
        </md-td>
</md-tr>
    
<md-tr>
        <md-td>
        <md-text type="field-name" >&nbsp;&nbsp;&nbsp;&nbsp;∟user_id</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>
        <md-td>
用户 ID。当 `type=user` 时，必须设置该参数值。关于用户 ID 的更多介绍可参见[用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。<br>
          
**示例值**："ou_742b382643a4075545422e87ff0d31fb"<br>
        </md-td>
</md-tr>
    
  </md-tbody>
</md-table>
:::

##  数据示例
```json
{
    "acl_id": "user_6843287928157667331",
    "role": "owner",
    "scope": {
        "type": "user",
        "user_id": "ou_742b382643a4075545422e87ff0d31fb"
    }
}
```

