<!--
title: 员工离职
id: 6954228303264071707
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/events/deleted
updatedAt: 1745228528000
source: https://open.feishu.cn/document/server-docs/contact-v3/user/events/deleted
-->
# 员工离职

当应用订阅该事件后，如果有员工离职（例如，通过管理后台离职成员、调用删除用户 API），则会触发该事件。{使用示例}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=user&event=deleted)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="tip">

</md-alert>
:::

## 前提条件

你需要在应用中配置事件订阅，这样才可以在事件触发时接收到事件数据。了解事件订阅可参见[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。

## 注意事项
该事件有部分字段权限要求，你可以参考相应的参数描述获取参数所需的权限。只有当应用开通了相应的字段权限后，才可以成功接收到完整的事件体数据。申请权限的具体操作，参见[申请 API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。

## 事件
:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>事件类型</md-th>
      <md-td>contact.user.deleted_v3</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
    <md-th>
            权限要求
            <md-tooltip type="info">订阅该事件所需的权限，开启其中任意一项权限即可订阅</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
    </md-th>
      <md-td>
            <md-perm name="contact:contact.base:readonly" desc="获取通讯录基本信息" support_app_types="custom,isv" tags="">获取通讯录基本信息</md-perm>
            <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
            <md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
          字段权限要求
      </md-th>
      <md-td>
        <md-alert type="tip" icon="none">
        该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请
        </md-alert>
        <md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
        <md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
        <md-perm name="contact:user.department:readonly" desc="获取用户组织架构信息" support_app_types="custom,isv" tags="">获取用户组织架构信息</md-perm>
        <md-perm name="contact:user.dotted_line_leader_info.read" desc="查看成员的虚线上级 ID" support_app_types="custom,isv" tags="">查看成员的虚线上级 ID</md-perm>
        <md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
        <md-perm name="contact:user.employee_number:read" desc="查看成员工号" support_app_types="custom,isv" tags="">查看成员工号</md-perm>
        <md-perm name="contact:user.gender:readonly" desc="获取用户性别" support_app_types="custom,isv" tags="">获取用户性别</md-perm>
        <md-perm name="contact:user.job_level:readonly" desc="查询用户职级" support_app_types="custom" tags="">查询用户职级</md-perm>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
        <md-perm name="contact:user.phone:readonly" desc="获取用户手机号" support_app_types="custom" tags="">获取用户手机号</md-perm>
        <md-perm name="contact:user.email:readonly" desc="获取用户邮箱信息" support_app_types="custom" tags="">获取用户邮箱信息</md-perm>
        <md-perm name="contact:user.job_family:readonly" desc="查询用户所属的工作序列" support_app_types="custom" tags="">查询用户所属的工作序列</md-perm>
        <md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
        <md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>推送方式</md-th>
      <md-td>
            <md-tag mode="inline" type="push-webhook" href="/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM" >Webhook</md-tag>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::



### 事件体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 40%;">名称</md-dt-th>
      <md-dt-th style="width: 20%;">类型</md-dt-th>
      <md-dt-th style="width: 30%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
      
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >schema</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件模式
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >header</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >event_header</md-text>
	</md-dt-td>
	<md-dt-td>
	事件头
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >event_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >event_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件类型
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
	事件创建时间戳（单位：毫秒）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	事件 Token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >app_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >tenant_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	租户 Key
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >event</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >object</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_event</md-text>
	</md-dt-td>
	<md-dt-td>
	员工信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 open_id，应用内用户的唯一标识。不同用户 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >union_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 union_id，是应用开发商发布的不同应用中同一用户的标识。不同用户 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 user_id，租户内用户的唯一标识。不同用户 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户名。

**数据校验规则**：

- 最小长度：`1` 字符

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >en_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户英文名。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >nickname</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户别名。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	邮箱。

**字段权限要求**：
<md-perm name="contact:user.email:readonly" desc="获取用户邮箱信息" support_app_types="custom" tags="">获取用户邮箱信息</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >enterprise_email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	企业邮箱。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职务。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mobile</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	手机号。

**字段权限要求**：
<md-perm name="contact:user.phone:readonly" desc="获取用户手机号" support_app_types="custom" tags="">获取用户手机号</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >gender</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	性别。

**可选值有**：
<md-enum>
<md-enum-item key="0" >未知</md-enum-item>
<md-enum-item key="1" >男</md-enum-item>
<md-enum-item key="2" >女</md-enum-item>
<md-enum-item key="3" >其他</md-enum-item>
</md-enum>

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.gender:readonly" desc="获取用户性别" support_app_types="custom,isv" tags="">获取用户性别</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >avatar</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >avatar_info</md-text>
	</md-dt-td>
	<md-dt-td>
	用户头像信息。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.base:readonly" desc="获取用户基本信息" support_app_types="custom,isv" tags="">获取用户基本信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_72</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	72*72 像素头像链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_240</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	240*240 像素头像链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_640</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	640*640 像素头像链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >avatar_origin</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	原始头像链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_status</md-text>
	</md-dt-td>
	<md-dt-td>
	用户状态。通过 is_frozen、is_resigned、is_activated、is_exited 布尔值类型参数进行展示。

用户状态的转关逻辑可参见[用户资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/field-overview#4302b5a1)。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_frozen</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为暂停状态。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_resigned</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为离职状态。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_activated</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为激活状态。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_exited</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为主动退出状态。主动退出一段时间后用户状态会自动转为已离职。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_unjoin</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否为未加入状态，需要用户自主确认才能加入企业或团队。

**可能值有**：

- true：是
- false：否
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >department_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	用户所属部门的 ID 列表。

**注意**：该参数实际无返回值。该事件返回的用户所属部门 ID 请通过 old_object.department_ids 参数获取。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.department:readonly" desc="获取用户组织架构信息" support_app_types="custom,isv" tags="">获取用户组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >leader_user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户直属主管的用户 open_id 。了解用户 ID 可参见[用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >city</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	城市。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >country</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	国家。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >work_station</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工位。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >join_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	入职时间。秒级时间戳格式。

**数据校验规则**：

- 取值范围：`1` ～ `2147483647`

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >employee_no</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	工号。

**字段权限要求（满足任一）**：
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:user.employee_number:read" desc="查看成员工号" support_app_types="custom,isv" tags="">查看成员工号</md-perm>
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >employee_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	员工类型。

**说明**：支持读取自定义员工类型的 int 值。如果该参数的取值不为 1 ~ 5，则你可调用[查询人员类型](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口查询相应的自定义员工类型信息（employee_type 对应 **查询人员类型** 接口返回的 enum_value）。

**可选值有**：
<md-enum>
<md-enum-item key="1" >正式员工</md-enum-item>
<md-enum-item key="2" >实习生</md-enum-item>
<md-enum-item key="3" >外包</md-enum-item>
<md-enum-item key="4" >劳务</md-enum-item>
<md-enum-item key="5" >顾问</md-enum-item>
</md-enum>

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >orders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_order\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	用户排序信息。用于标记通讯录下组织架构的人员顺序，人员可能存在多个部门中，且有不同的排序。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.department:readonly" desc="获取用户组织架构信息" support_app_types="custom,isv" tags="">获取用户组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >department_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	排序信息对应的部门 ID，表示用户所在的、且需要排序的部门。该 ID 均包含在用户所属部门 ID 列表（department_ids）的参数值当中。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >user_order</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	用户在其直属部门内的排序，数值越大，排序越靠前。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >department_order</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	用户所属的多个部门间的排序，数值越大，排序越靠前。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_primary_dept</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	标识部门是否为用户的唯一主部门，主部门为用户所属部门中排序第一的部门（department_order 最大）。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_attrs</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_custom_attr\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段信息。了解自定义字段可参见[自定义字段资源介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr/overview)。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.employee:readonly" desc="获取用户受雇信息" support_app_types="custom,isv" tags="">获取用户受雇信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段类型。

**可能值有：**
- `TEXT`：文本
- `HREF`：网页
- `ENUMERATION`：枚举
- `PICTURE_ENUM`：图片
- `GENERIC_USER`：用户
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段 ID。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >user_custom_attr_value</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段取值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >text</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	- 字段类型为 TEXT 时，该参数返回定义的字段值。
- 字段类型为 HREF 时，该参数返回定义的网页标题。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型为 HREF 时，该参数返回定义的默认 URL。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >pc_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型为 HREF 时，如果为 PC 端设置了 URL，则该参数返回定义的 PC 端 URL。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >option_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型为 `ENUMERATION` 或 `PICTURE_ENUM` 时，该参数返回定义的选项 ID。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >option_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	选项类型的值，即用户详情或自定义字段中选中的选项值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	选项类型为图片时，图片的名称。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >picture_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	选项类型为图片时，图片的链接。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >generic_user</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_attr_generic_user</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型为 `GENERIC_USER` 时，该参数返回定义的引用人员信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	引用人员的 user_id。关于用户 ID 的具体说明可参见[用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	用户类型。目前固定取值为 1，表示用户。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_level_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	职级 ID。

**字段权限要求**：
<md-perm name="contact:user.job_level:readonly" desc="查询用户职级" support_app_types="custom" tags="">查询用户职级</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >job_family_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	序列 ID。

**字段权限要求**：
<md-perm name="contact:user.job_family:readonly" desc="查询用户所属的工作序列" support_app_types="custom" tags="">查询用户所属的工作序列</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >dotted_line_leader_user_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	虚线上级的用户 ID。

**字段权限要求**：
<md-perm name="contact:user.dotted_line_leader_info.read" desc="查看成员的虚线上级 ID" support_app_types="custom,isv" tags="">查看成员的虚线上级 ID</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >old_object</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >old_user_object</md-text>
	</md-dt-td>
	<md-dt-td>
	删除前信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >department_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	用户所属部门的 ID 列表。部门 ID 类型为open_department_id，了解部门 ID 可参见[部门 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0)。

**字段权限要求（满足任一）**：
<md-perm name="contact:contact:readonly_as_app" desc="以应用身份读取通讯录" support_app_types="custom,isv" tags="">以应用身份读取通讯录</md-perm>
<md-perm name="contact:user.department:readonly" desc="获取用户组织架构信息" support_app_types="custom,isv" tags="">获取用户组织架构信息</md-perm>
<md-perm name="contact:contact:access_as_app" desc="以应用身份访问通讯录" support_app_types="custom,isv" tags="history,offline">以应用身份访问通讯录</md-perm>
<md-perm name="contact:contact:readonly" desc="读取通讯录" support_app_types="custom,isv" tags="history,offline">读取通讯录</md-perm>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >open_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户的 open_id，应用内用户的唯一标识。不同用户 ID 的说明参见 [用户相关的 ID 概念](/ssl:ttdoc/home/user-identity-introduction/introduction)。
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 事件体示例
:::html
<md-code-json>
{
    "schema": "2.0",
    "header": {
        "event_id": "5e3702a84e847582be8db7fb73283c02",
        "event_type": "contact.user.deleted_v3",
        "create_time": "1608725989000",
        "token": "rvaYgkND1GOiu5MM0E1rncYC6PLtF7JV",
        "app_id": "cli_9f5343c580712544",
        "tenant_key": "2ca1d211f64f6438"
    },
    "event": {
        "object": {
            "open_id": "ou_7dab8a3d3cdcc9da365777c7ad535d62",
            "union_id": "on_576833b917gda3d939b9a3c2d53e72c8",
            "user_id": "e33ggbyz",
            "name": "张三",
            "en_name": "San Zhang",
            "nickname": "Sunny Zhang",
            "email": "zhangsan@gmail.com",
            "enterprise_email": "demo@mail.com",
            "job_title": "软件工程师",
            "mobile": "12345678910",
            "gender": 1,
            "avatar": {
                "avatar_72": "https://foo.icon.com/xxxx",
                "avatar_240": "https://foo.icon.com/xxxx",
                "avatar_640": "https://foo.icon.com/xxxx",
                "avatar_origin": "https://foo.icon.com/xxxx"
            },
            "status": {
                "is_frozen": false,
                "is_resigned": false,
                "is_activated": true,
                "is_exited": false,
                "is_unjoin": false
            },
            "department_ids": [
                "od-4e6ac4d14bcd5071a37a39de902c7141"
            ],
            "leader_user_id": "ou_3ghm8a2u0eftg0ff377125s5dd275z09",
            "city": "杭州",
            "country": "中国",
            "work_station": "杭州",
            "join_time": 1615381702,
            "employee_no": "e33ggbyz",
            "employee_type": 1,
            "orders": [
                {
                    "department_id": "od-4e6ac4d14bcd5071a37a39de902c7141",
                    "user_order": 100,
                    "department_order": 100,
                    "is_primary_dept": true
                }
            ],
            "custom_attrs": [
                {
                    "type": "TEXT",
                    "id": "DemoId",
                    "value": {
                        "text": "DemoText",
                        "url": "http://www.fs.cn",
                        "pc_url": "http://www.fs.cn",
                        "option_id": "edcvfrtg",
                        "option_value": "option",
                        "name": "name",
                        "picture_url": "https://xxxxxxxxxxxxxxxxxx",
                        "generic_user": {
                            "id": "9b2fabg5",
                            "type": 1
                        }
                    }
                }
            ],
            "job_level_id": "mga5oa8ayjlp9rb",
            "job_family_id": "mga5oa8ayjlp9rb",
            "dotted_line_leader_user_ids": [
                "od-4e6ac4d14bcd5071a37a39de902c7141"
            ]
        },
        "old_object": {
            "department_ids": [
                "od_231kdgb2xxxx"
            ],
            "open_id": "ou_xxxxxxxxxx"
        }
    }
}
</md-code-json>
:::






### 事件订阅示例代码

事件订阅流程可参考：[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)，新手入门可参考：[教程](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/introduction)

:::html
<div style="margin-bottom: 4px;display: flex;column-gap: 4px;align-items: center;">
  <md-text type='field-name'>订阅方式</md-text>
  <md-tooltip>
    <ul class="md_render-table_solid md_render-table">
      <li><b>长连接方式（推荐）：</b>无需发布到公网地址，在本地开发环境中即可接收事件回调，且无需处理加解密逻辑。</li>
      <li><b>发送至开发者服务器：</b>需要提供服务器公网地址。</li>
    </ul>
  </md-tooltip>
</div>
:::

:::html
<md-code-tabs>
  <md-code-tab-group title="使用长连接接收事件">
	
    <md-code-tab-panel sdkType="golang-sdk">
package main

import (
	"context"
	"fmt"

	larkcore "github.com/larksuite/oapi-sdk-go/v3/core"
	larkevent "github.com/larksuite/oapi-sdk-go/v3/event"
	"github.com/larksuite/oapi-sdk-go/v3/event/dispatcher"
	"github.com/larksuite/oapi-sdk-go/v3/service/contact/v3"
	larkws "github.com/larksuite/oapi-sdk-go/v3/ws"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2UserDeletedV3(func(ctx context.Context, event *larkcontact.P2UserDeletedV3) error {
			fmt.Printf("[ OnP2UserDeletedV3 access ], data: %s\n", larkcore.Prettify(event))
			return nil
		})

	// 构建 client Build client
	cli := larkws.NewClient("YOUR_APP_ID", "YOUR_APP_SECRET",
		larkws.WithEventHandler(eventHandler),
		larkws.WithLogLevel(larkcore.LogLevelDebug),
	)

	// 建立长连接 Establish persistent connection
	err := cli.Start(context.Background())

	if err != nil {
		panic(err)
	}
}

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="python-sdk">
# SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development
import lark_oapi as lark


def do_p2_contact_user_deleted_v3(data: lark.contact.v3.P2ContactUserDeletedV3) -> None:
    print(f'[ do_p2_contact_user_deleted_v3 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_contact_user_deleted_v3(do_p2_contact_user_deleted_v3) \
    .build()


def main():
    # 构建 client Build client
    cli = lark.ws.Client("APP_ID", "APP_SECRET",
                        event_handler=event_handler, log_level=lark.LogLevel.DEBUG)
    # 建立长连接 Establish persistent connection
    cli.start()

if __name__ == "__main__":
    main()

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="java-sdk">

package com.example.sample;

import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.service.contact.ContactService;
import com.lark.oapi.service.contact.v3.model.P2UserDeletedV3;
import com.lark.oapi.event.EventDispatcher;
import com.lark.oapi.ws.Client;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
public class Sample {
    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("", "")
            .onP2UserDeletedV3(new ContactService.P2UserDeletedV3Handler() {
                @Override
                public void handle(P2UserDeletedV3 event) throws Exception {
                    System.out.printf("[ onP2UserDeletedV3 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
                }
            })
            .build();

    public static void main(String[] args) {
        // 构建 client Build client
        Client client = new Client.Builder("APP_ID", "APP_SECRET")
                .eventHandler(EVENT_HANDLER)
                .build();
        // 建立长连接 Establish persistent connection
        client.start();
    }
}
    </md-code-tab-panel>

    <md-code-tab-panel sdkType="nodejs-sdk">
// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/preparation-before-development
import * as Lark from '@larksuiteoapi/node-sdk';
const baseConfig = {
    appId: 'APP_ID',
    appSecret: 'APP_SECRET'
}
// 构建 client Build client
const wsClient = new Lark.WSClient(baseConfig);
// 建立长连接 Establish persistent connection
wsClient.start({
    // 注册事件 Register event
    eventDispatcher: new Lark.EventDispatcher({}).register({
        'contact.user.deleted_v3': async (data) => {
            console.log(data);
        }
    })
});
    </md-code-tab-panel>

  </md-code-tab-group>
  <md-code-tab-group title="将事件推送至开发者服务器">
	
    <md-code-tab-panel sdkType="golang-sdk">
package main

import (
	"context"
	"fmt"
	"net/http"

	larkcore "github.com/larksuite/oapi-sdk-go/v3/core"
	"github.com/larksuite/oapi-sdk-go/v3/core/httpserverext"
	larkevent "github.com/larksuite/oapi-sdk-go/v3/event"
	"github.com/larksuite/oapi-sdk-go/v3/event/dispatcher"
	"github.com/larksuite/oapi-sdk-go/v3/service/contact/v3"
)

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/golang-sdk-guide/preparations
func main() {
	// 注册事件 Register event
	eventHandler := dispatcher.NewEventDispatcher("", "").
		OnP2UserDeletedV3(func(ctx context.Context, event *larkcontact.P2UserDeletedV3) error {
			fmt.Printf("[ OnP2UserDeletedV3 access ], data: %s\n", larkcore.Prettify(event))
			return nil
		})

	// 创建路由处理器 Create route handler
	http.HandleFunc("/webhook/event", httpserverext.NewEventHandlerFunc(handler, larkevent.WithLogLevel(larkcore.LogLevelDebug)))

	err := http.ListenAndServe(":7777", nil)

	if err != nil {
		panic(err)
	}
}

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="python-sdk">
# SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/preparations-before-development
from flask import Flask
from lark_oapi.adapter.flask import *
import lark_oapi as lark

app = Flask(__name__)


def do_p2_contact_user_deleted_v3(data: lark.contact.v3.P2ContactUserDeletedV3) -> None:
    print(f'[ do_p2_contact_user_deleted_v3 access ], data: {lark.JSON.marshal(data, indent=4)}')

# 注册事件 Register event
event_handler = lark.EventDispatcherHandler.builder("", "") \
    .register_p2_contact_user_deleted_v3(do_p2_contact_user_deleted_v3) \
    .build()


# 创建路由处理器 Create route handler
@app.route("/webhook/event", methods=["POST"])
def event():
    resp = event_handler.do(parse_req())
    return parse_resp(resp)

if __name__ == "__main__":
    app.run(port=7777)

    </md-code-tab-panel>

    <md-code-tab-panel sdkType="java-sdk">

package com.lark.oapi.sample.event;

import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.service.contact.ContactService;
import com.lark.oapi.service.contact.v3.model.P2UserDeletedV3;
import com.lark.oapi.sdk.servlet.ext.ServletAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/java-sdk-guide/preparations
@RestController
public class EventController {

    // 注册事件 Register event
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("verificationToken", "encryptKey")
            .onP2UserDeletedV3(new ContactService.P2UserDeletedV3Handler() {
                @Override
                public void handle(P2UserDeletedV3 event) throws Exception {
                    System.out.printf("[ onP2UserDeletedV3 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
                }
            })
            .build();

    // 注入 ServletAdapter 实例 Inject ServletAdapter instance
    @Autowired
    private ServletAdapter servletAdapter;

    // 创建路由处理器 Create route handler
    @RequestMapping("/webhook/event")
    public void event(HttpServletRequest request, HttpServletResponse response)
            throws Throwable {
        // 回调扩展包提供的事件回调处理器 Callback handler provided by the extension package
        servletAdapter.handleEvent(request, response, EVENT_DISPATCHER);
    }
}
    </md-code-tab-panel>

    <md-code-tab-panel sdkType="nodejs-sdk">
// SDK 使用说明 SDK user guide：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/preparation-before-development
import http from 'http';
import * as lark from '@larksuiteoapi/node-sdk';

// 注册事件 Register event
const eventDispatcher = new lark.EventDispatcher({
    encryptKey: '',
    verificationToken: '',
}).register({
    'contact.user.deleted_v3': async (data) => {
        console.log(data);
        return 'success';
    },
});

const server = http.createServer();
// 创建路由处理器 Create route handler
server.on('request', lark.adaptDefault('/webhook/event', eventDispatcher));
server.listen(3000);
    </md-code-tab-panel>

  </md-code-tab-group>
</md-code-tabs>
:::
