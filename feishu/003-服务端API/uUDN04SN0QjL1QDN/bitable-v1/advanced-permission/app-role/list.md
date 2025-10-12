<!--
title: 列出自定义角色
id: 7473089245106290692
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/advanced-permission/base-v2/app-role/list
updatedAt: 1749177260000
source: https://open.feishu.cn/document/docs/bitable-v1/advanced-permission/app-role/list-2
-->
# 列出自定义角色(新版)

列出多维表格高级权限中用户自定义的角色。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=base&version=v2&resource=app.role&method=list)

:::html
<md-alert type="tip">
相较于旧版接口，新版自定义角色接口支持高级权限 2.0 版本新增的权限点位，包括更精细的行级别权限控制、多维表格的复制、导出点位的控制等。
</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="error">

</md-alert>
:::

## 前提条件

要调用自定义角色相关接口，你需确保多维表格已开启高级权限。你可通过[更新多维表格元数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/update)接口开启高级权限。

## 请求
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
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/base/v2/apps/:app_token/roles</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[20 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="base:role:read" desc="列出自定义角色" support_app_types="custom,isv" tags="">列出自定义角色</md-perm>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 13%;">类型</md-th>
       <md-th style="width: 15%;" filters="是,否" >必填</md-th>
      <md-th  style="width: 37%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>Authorization</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
</md-tr>
</md-tbody>
</md-table>
:::



### 路径参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >app_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。

**示例值**："appbcbWCzen6D8dezhoCH2RpMAh"

**数据校验规则**：

- 长度范围：`0` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页大小

**示例值**：10
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果

**示例值**：roljRpwIUt
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





## 响应





### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
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
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >role\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义角色列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >role_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义权限的名字
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >table_roles</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >table_role\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	数据表权限列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >table_perm</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	数据表权限

**可选值有**：
<md-enum>
<md-enum-item key="0" >无权限</md-enum-item>
<md-enum-item key="1" >可阅读</md-enum-item>
<md-enum-item key="2" >可编辑</md-enum-item>
<md-enum-item key="4" >可管理</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >table_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据表名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >table_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数据表ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >rec_rule</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rec_rule</md-text>
	</md-dt-td>
	<md-dt-td>
	记录筛选条件，当 `table_perm` 为 1 或 2 时生效。用于指定可编辑或可阅读的记录。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >conditions</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rec_rule_condition\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	记录筛选条件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >field_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	运算符

**可选值有**：
<md-enum>
<md-enum-item key="is" >等于</md-enum-item>
<md-enum-item key="isNot" >不等于</md-enum-item>
<md-enum-item key="contains" >包含</md-enum-item>
<md-enum-item key="doesNotContain" >不包含</md-enum-item>
<md-enum-item key="isEmpty" >为空</md-enum-item>
<md-enum-item key="isNotEmpty" >不为空</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	条件的值，可以是单个值或多个值的数组。详情参考[字段目标值（value）填写说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/record-filter-guide#3e0fd644)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >field_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >conjunction</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多个筛选条件的关系

**可选值有**：
<md-enum>
<md-enum-item key="and" >与</md-enum-item>
<md-enum-item key="or" >或</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >perm</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	规则筛选记录对应的权限

**可选值有**：
<md-enum>
<md-enum-item key="1" >仅可阅读</md-enum-item>
<md-enum-item key="2" >可编辑</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >other_perm</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	其他记录权限，仅在 `table_perm` 为 2 （数据表权限为可编辑）时生效。
- 当 `other_perm` 为 1 时，表示未命中 `rec_rule` 的记录仅可阅读，不可编辑
- 当 `other_perm` 为 0 时，表示既未命中 `rec_rule`、也未命中 `other_rec_rule` 的记录会被禁止阅读。即你可以通过 `other_rec_rule` 进一步指定可阅读的记录范围。

**可选值有**：
<md-enum>
<md-enum-item key="0" >禁止查看</md-enum-item>
<md-enum-item key="1" >仅可阅读</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >other_rec_rule</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >other_rec_rule</md-text>
	</md-dt-td>
	<md-dt-td>
	记录筛选条件，在 rec_rule.Perm 为 2 时有意义，用于指定剩余可阅读的记录。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >conditions</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rec_rule_condition\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	记录筛选条件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >field_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	运算符

**可选值有**：
<md-enum>
<md-enum-item key="is" >等于</md-enum-item>
<md-enum-item key="isNot" >不等于</md-enum-item>
<md-enum-item key="contains" >包含</md-enum-item>
<md-enum-item key="doesNotContain" >不包含</md-enum-item>
<md-enum-item key="isEmpty" >为空</md-enum-item>
<md-enum-item key="isNotEmpty" >不为空</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	条件的值，可以是单个值或多个值的数组。详情参考[字段目标值（value）填写说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/record-filter-guide#3e0fd644)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >field_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	字段类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >conjunction</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	多个筛选条件的关系

**可选值有**：
<md-enum>
<md-enum-item key="and" >与</md-enum-item>
<md-enum-item key="or" >或</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >perm</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	规则筛选记录对应的权限

**可选值有**：
<md-enum>
<md-enum-item key="1" >仅可阅读</md-enum-item>
<md-enum-item key="2" >可编辑</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >field_perm</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, int&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	字段权限，仅在 `table_perm` 为 1和 2 时生效。用于设置字段可编辑或可阅读。类型为 map，key 是字段名称，value 是字段权限。对于未设置的字段，默认无权限。value 枚举值有：
- `1`：可阅读
- `2`：可添加
- `3`：可编辑
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >allow_add_record</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	新增记录权限，仅在 `table_perm` 为 2 时生效，用于设置记录是否可以新增。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >allow_delete_record</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	删除记录权限，仅在 `table_perm` 为 2 时生效，用于设置记录是否可以删除。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >view_perm</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	视图权限

**可选值有**：
<md-enum>
<md-enum-item key="1" >可阅读</md-enum-item>
<md-enum-item key="2" >可编辑</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >view_rules</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, int&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	可读的视图集合，仅在 view_perm 为 1 （视图为可阅读）时生效。
- 未设置时，表示所有视图可读。
- 设置后，表示设置的视图可读，未设置的视图无权限。

该参数类型为 map，其中 key 是[视图 ID](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#5b05b8ca)，value 是视图对应的权限。value 枚举值有：
- `0`：无权限
- `1`：可阅读
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >field_action_rules</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, map&lt;string, int&gt;&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	字段的权限。可选的点位有：

-  `select_option_edit` : 选项配置点位，配置是否可增删改单、多选选项，未设置表示无权限。

- `attachment_export`: 附件操作权限点位，配置是否可导出附件，未设置表示可导出。

该参数类型为两层 map 结构，其中 key 是字段点位权限，value 是字段权限集合。字段权限集合也是一个 map 结构，其中 key 是字段名称，value 是字段点位权限：
- `0`：无权限
- `1`：有权限

**注意**：仅高级权限为 v2 版本的多维表格支持该参数。是否是 v2 版本可调用[获取多维表格元数据
](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/get)查看。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >role_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义权限的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >block_roles</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >block_role\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	block权限
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Block ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >block_perm</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	Block权限

**可选值有**：
<md-enum>
<md-enum-item key="0" >无权限</md-enum-item>
<md-enum-item key="1" >可阅读</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >block_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Block类型

**可选值有**：
<md-enum>
<md-enum-item key="dashboard" >仪表盘</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >base_rule</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >map&lt;string, int&gt;</md-text>
	</md-dt-td>
	<md-dt-td>
	多维表格点位的权限。
- 未设置时，表示自定义角色拥有所有点位权限。
- 设置时，可设置以下两种权限：
    -  `base_complex_edit` : 设置是否可以创建副本、下载、打印多维表格
    - `copy`: 设置是否可以复制多维表格内容

该参数类型为 map，其中 key 是权限点位名称，value 是权限开关。value 枚举值有：
- `0`：无权限
- `1`：有权限



	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >has_more</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否还有更多项
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >total</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	总数
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {
        "items": [
            {
                "role_name": "自定义权限1",
                "table_roles": [
                    {
                        "table_perm": 0,
                        "table_name": "数据表1",
                        "table_id": "tblKz5D60T4JlfcT",
                        "rec_rule": {
                            "conditions": [
                                {
                                    "field_name": "单选",
                                    "operator": "is",
                                    "value": [
                                        "optbdVHf4q"
                                    ],
                                    "field_type": 3
                                }
                            ],
                            "conjunction": "and",
                            "perm": 1,
                            "other_perm": 1
                        },
                        "other_rec_rule": {
                            "conditions": [
                                {
                                    "field_name": "单选",
                                    "operator": "is",
                                    "value": [
                                        "optbdVHf4q"
                                    ],
                                    "field_type": 3
                                }
                            ],
                            "conjunction": "and",
                            "perm": 1
                        },
                        "field_perm": {
                            "姓名": 1,
                            "年龄": 2
                        },
                        "allow_add_record": true,
                        "allow_delete_record": true,
                        "view_perm": 2,
                        "view_rules": {
                            "vewEYknYcC": 0
                        },
                        "field_action_rules": {
                            "select_option_edit": {
                                "单选1": 0
                            }
                        }
                    }
                ],
                "role_id": "roljRpwIUt",
                "block_roles": [
                    {
                        "block_id": "blknkqrP3RqUkcAW",
                        "block_perm": 0,
                        "block_type": "dashboard"
                    }
                ],
                "base_rule": {
                    "base_complex_edit": 1,
                    "copy": 0
                }
            }
        ],
        "page_token": "eVQrYzJBNDNONlk4VFZBZVlSdzlKdFJ4bVVHVExENDNKVHoxaVdiVnViQT0=",
        "has_more": true,
        "total": 1
    }
}
</md-code-json>
:::



### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>200</md-td>
  <md-td>1254000</md-td>
  <md-td>WrongRequestJson</md-td>
  <md-td>请求体错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254001</md-td>
  <md-td>WrongRequestBody</md-td>
  <md-td>请求体错误</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254002</md-td>
  <md-td>Fail</md-td>
  <md-td>导致报 1254002 错误码的场景较多，请参考以下建议排查：
- 如果单次操作的内容变更较大，请尝试在单次操作中减少数据量
- 如果你并发调用了接口，请尝试控制请求间隔，稍后重试
- 如果在知识库（wiki）中创建多维表格，请检查你是否使用了知识库[创建知识空间节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/create)接口创建多维表格。在此场景下不能使用[创建多维表格](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)接口
- 请检查接口参数是否有误。例如，在分页查询多维表格时，传递了无效的 page_token，或传递了错误的数据表的 table_id
- 如果该报错偶尔发生，可能是服务器超时或不稳定，请重试解决</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254003</md-td>
  <md-td>WrongBaseToken</md-td>
  <md-td>app_token 错误。app_token 是多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254010</md-td>
  <md-td>ReqConvError</md-td>
  <md-td>请求错误</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254032</md-td>
  <md-td>InvalidRoleName</md-td>
  <md-td>自定义角色名无效</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254033</md-td>
  <md-td>RoleNameDuplicated</md-td>
  <md-td>自定义角色名重复</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254036</md-td>
  <md-td>Bitable is copying, please try again later.</md-td>
  <md-td>复制多维表格为异步操作，该错误码表示当前多维表格仍在复制中，在复制期间无法操作当前多维表格。需要等待复制完成后再操作</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254040</md-td>
  <md-td>BaseTokenNotFound</md-td>
  <md-td>app_token 不存在。app_token 是多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：
- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分：
    ![app_token.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6916f8cfac4045ba6585b90e3afdfb0a_GxbfkJHZBa.png?height=766&lazyload=true&width=3004)

- 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。

了解更多，参考[多维表格 app_token 获取方式](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview#-752212c)。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1254047</md-td>
  <md-td>RoleIdNotFound</md-td>
  <md-td>role_id 不存在。role_id 是多维表格高级权限中自定义角色的唯一标识，以 `rol` 开头。可通过[列出自定义角色](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-role/list)接口获取。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254110</md-td>
  <md-td>RoleExceedLimit</md-td>
  <md-td>自定义角色数量超限，限制 30 条</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1254290</md-td>
  <md-td>TooManyRequest</md-td>
  <md-td>请求过快，稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>1254301</md-td>
  <md-td>OperationTypeError</md-td>
  <md-td>多维表格未开启高级权限或不支持开启高级权限</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255001</md-td>
  <md-td>InternalError</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255002</md-td>
  <md-td>Something went wrong. Please contact technical support at https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952</md-td>
  <md-td>内部错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255003</md-td>
  <md-td>MarshalError</md-td>
  <md-td>序列化错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>1255004</md-td>
  <md-td>UmMarshalError</md-td>
  <md-td>反序列化错误，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)</md-td>
</md-tr>


<md-tr>
  <md-td>504</md-td>
  <md-td>1255040</md-td>
  <md-td>Request timed out, please try again later</md-td>
  <md-td>请求超时，进行重试</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




