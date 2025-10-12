<!--
title: 单位资源介绍
id: 7023995901275226115
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/overview
updatedAt: 1720167377000
source: https://open.feishu.cn/document/server-docs/contact-v3/unit/overview
-->
# 单位资源介绍

通讯录的单位用于代表企业中的“子公司”、“分支机构”这类组织实体。例如，你的企业下存在负责不同业务的两家子公司，那么你可以在同一个租户内，为两家子公司分别创建对应的单位资源。目前单位资源的主要作用是在部分用户权限上实现“子公司”级别的权限隔离。

如以下场景已支持按单位管控：

- 组织架构可见范围支持设置为 **员工可见本单位组织架构**。
- 名片页字段可见范围支持设置名片页某字段 **仅限本单位内员工可见**。
- 用户名片页支持展示其归属的单位。

:::warning
单位属于付费功能，企业需要开通对应的飞书版本才可以使用。了解更多关于单位的介绍以及版本支持情况，可参见[单位管理](https://www.feishu.cn/hc/zh-CN/articles/333548009177)。
:::

## 基本概念

在使用单位 API 之前，建议你先了解以下相关概念。

### 单位 ID

单位 ID（unit_id）是租户内单位的唯一标识，在使用 API 创建单位时自定义配置，若不自定义配置则会由系统自动生成一个默认 ID。

:::note
已创建的单位，unit_id 不支持修改。
:::

如果你的企业内部系统已有类似“单位”的实体，并且希望同步到飞书通讯录，那么你可以在调用创建单位 API 时，将本企业内部系统已有的单位唯一标识，写入到飞书通讯录的单位 ID（unit_id）中，由此实现飞书单位 ID 和内部系统 ID 的一致性，节省跨系统调用的映射成本。

### 关联部门

已创建的单位，可以在租户内与通讯录下的部门进行关联，关联的部门视为该单位的子部门。

## 字段说明

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
	<md-text type="field-name" >unit_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
租户内单位的唯一标识。
      
- 在创建单位时支持自定义设置，若未自定义则由系统自动生成。
- 创建单位后不允许修改 unit_id。
      
**自定义`unit_id`数据校验规则**：

- 最大长度：`64` 字符。

- 校验规则：允许数字、大小写字母的组合；不能包含空格。
      
**示例值**："BU121"
	</md-td>
</md-tr>

<md-tr>
	<md-td>
	<md-text type="field-name" >name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	单位的名字，企业内唯一。
      
**数据校验规则：** 1 ~ 100 个字符。
      
**示例值**："消费者事业部"  

	</md-td>
</md-tr>
    
<md-tr>
	<md-td>
	<md-text type="field-name" >unit_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
    
    自定义的单位类型，创建后不允许修改。一个组织可以有多个不同的单位类型，例如 `子公司`、`事业部`、`BU` 等。
      
**数据校验规则：** 1 ~ 100 个字符。
      
	</md-td>
</md-tr>

    
    
  </md-tbody>
</md-table>
:::


## 数据示例


```json 
  {
    "code": 0,
    "msg": "success",
    "data": {
        "unit": {
            "unit_id": "BU121",
            "name": "消费事业部",
            "unit_type": "事业部"
        }
    }
}
``` 

