<!--
title: 创建收信规则
id: 7275929163676172291
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/mail-v1/user_mailbox-rule/create
updatedAt: 1745841614000
source: https://open.feishu.cn/document/mail-v1/user_mailbox-rule/create
-->
# 创建收信规则

创建收信规则{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=mail&version=v1&resource=user_mailbox.rule&method=create)

:::html
<md-alert type="tip">
使用 tenant_access_token 时，需要申请收信规则资源的数据权限。
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
      <md-td>https://open.feishu.cn/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            权限要求
            <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
            
      </md-th>
      <md-td>
            <md-perm name="mail:user_mailbox.rule:write" desc="查看、创建、更新、删除收信规则" support_app_types="custom" tags="">查看、创建、更新、删除收信规则</md-perm>
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
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
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
	<md-text type="field-name" >user_mailbox_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户邮箱地址，使用 user_access_token 时可使用 me

**示例值**："user@xxx.xx 或 me"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 请求体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >condition</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rule_condition</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	匹配条件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >match_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	匹配类型

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >满足所有条件</md-enum-item>
<md-enum-item key="2" >满足任意条件</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`1` ～ `2`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rule_condition_item\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	匹配规则列表

**数据校验规则**：

- 长度范围：`1` ～ `32`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	匹配条件左值

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >发件人地址</md-enum-item>
<md-enum-item key="2" >收件人地址</md-enum-item>
<md-enum-item key="3" >抄送地址</md-enum-item>
<md-enum-item key="4" >收件人或抄送地址</md-enum-item>
<md-enum-item key="6" >主题</md-enum-item>
<md-enum-item key="7" >正文</md-enum-item>
<md-enum-item key="8" >附件名字</md-enum-item>
<md-enum-item key="9" >附件类型</md-enum-item>
<md-enum-item key="10" >任意地址</md-enum-item>
<md-enum-item key="12" >所有邮件</md-enum-item>
<md-enum-item key="13" >是外部邮件</md-enum-item>
<md-enum-item key="14" >是垃圾邮件</md-enum-item>
<md-enum-item key="15" >不是垃圾邮件</md-enum-item>
<md-enum-item key="16" >有附件</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`1` ～ `16`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	匹配条件操作符

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >包含</md-enum-item>
<md-enum-item key="2" >不包含</md-enum-item>
<md-enum-item key="3" >开头是</md-enum-item>
<md-enum-item key="4" >结尾是</md-enum-item>
<md-enum-item key="5" >是</md-enum-item>
<md-enum-item key="6" >不是</md-enum-item>
<md-enum-item key="7" >包含自己</md-enum-item>
<md-enum-item key="10" >为空</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`1` ～ `10`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >input</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	匹配条件右值

**示例值**："hello@world.com"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >action</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rule_action</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	匹配命中后的操作
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rule_action_item\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	匹配中规则后的操作列表

**数据校验规则**：

- 长度范围：`1` ～ `32`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	操作类型

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >归档</md-enum-item>
<md-enum-item key="2" >删除邮件</md-enum-item>
<md-enum-item key="3" >标记为已读</md-enum-item>
<md-enum-item key="4" >移至垃圾邮件</md-enum-item>
<md-enum-item key="5" >不移至垃圾邮件</md-enum-item>
<md-enum-item key="8" >添加用户标签（暂不支持）</md-enum-item>
<md-enum-item key="9" >添加旗标</md-enum-item>
<md-enum-item key="10" >不弹出通知</md-enum-item>
<md-enum-item key="11" >移至用户文件夹</md-enum-item>
<md-enum-item key="12" >自动转发（暂不支持）</md-enum-item>
<md-enum-item key="13" >分享到会话（暂不支持）</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`1` ～ `13`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >input</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	当 type 为移动到文件夹时，该字段填文件夹的 id

**示例值**："283412371233"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >ignore_the_rest_of_rules</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否终点规则

**示例值**：false
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	规则名称

**示例值**："将李三的邮件标记为垃圾邮件"

**数据校验规则**：

- 长度范围：`1` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >is_enable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	是否启用

**示例值**：false
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "condition": {
        "match_type": 1,
        "items": [
            {
                "type": 1,
                "operator": 1,
                "input": "hello@world.com"
            }
        ]
    },
    "action": {
        "items": [
            {
                "type": 1,
                "input": "283412371233"
            }
        ]
    },
    "ignore_the_rest_of_rules": false,
    "name": "将李三的邮件标记为垃圾邮件",
    "is_enable": false
}
</md-code-json>
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
	<md-text type="field-name" >rule</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rule</md-text>
	</md-dt-td>
	<md-dt-td>
	规则实体
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	规则 id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >condition</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rule_condition</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配条件
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >match_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >满足所有条件</md-enum-item>
<md-enum-item key="2" >满足任意条件</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rule_condition_item\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配规则列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配条件左值

**可选值有**：
<md-enum>
<md-enum-item key="1" >发件人地址</md-enum-item>
<md-enum-item key="2" >收件人地址</md-enum-item>
<md-enum-item key="3" >抄送地址</md-enum-item>
<md-enum-item key="4" >收件人或抄送地址</md-enum-item>
<md-enum-item key="6" >主题</md-enum-item>
<md-enum-item key="7" >正文</md-enum-item>
<md-enum-item key="8" >附件名字</md-enum-item>
<md-enum-item key="9" >附件类型</md-enum-item>
<md-enum-item key="10" >任意地址</md-enum-item>
<md-enum-item key="12" >所有邮件</md-enum-item>
<md-enum-item key="13" >是外部邮件</md-enum-item>
<md-enum-item key="14" >是垃圾邮件</md-enum-item>
<md-enum-item key="15" >不是垃圾邮件</md-enum-item>
<md-enum-item key="16" >有附件</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配条件操作符

**可选值有**：
<md-enum>
<md-enum-item key="1" >包含</md-enum-item>
<md-enum-item key="2" >不包含</md-enum-item>
<md-enum-item key="3" >开头是</md-enum-item>
<md-enum-item key="4" >结尾是</md-enum-item>
<md-enum-item key="5" >是</md-enum-item>
<md-enum-item key="6" >不是</md-enum-item>
<md-enum-item key="7" >包含自己</md-enum-item>
<md-enum-item key="10" >为空</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >input</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配条件右值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >action</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rule_action</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配命中后的操作
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >rule_action_item\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	匹配中规则后的操作列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	操作类型

**可选值有**：
<md-enum>
<md-enum-item key="1" >归档</md-enum-item>
<md-enum-item key="2" >删除邮件</md-enum-item>
<md-enum-item key="3" >标记为已读</md-enum-item>
<md-enum-item key="4" >移至垃圾邮件</md-enum-item>
<md-enum-item key="5" >不移至垃圾邮件</md-enum-item>
<md-enum-item key="8" >添加用户标签（暂不支持）</md-enum-item>
<md-enum-item key="9" >添加旗标</md-enum-item>
<md-enum-item key="10" >不弹出通知</md-enum-item>
<md-enum-item key="11" >移至用户文件夹</md-enum-item>
<md-enum-item key="12" >自动转发（暂不支持）</md-enum-item>
<md-enum-item key="13" >分享到会话（暂不支持）</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >input</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	当 type 为移动到文件夹时，该字段填文件夹的 id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ignore_the_rest_of_rules</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否终点规则
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
	规则名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_enable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否启用
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
        "rule": {
            "id": "123124123123",
            "condition": {
                "match_type": 1,
                "items": [
                    {
                        "type": 1,
                        "operator": 1,
                        "input": "hello@world.com"
                    }
                ]
            },
            "action": {
                "items": [
                    {
                        "type": 1,
                        "input": "283412371233"
                    }
                ]
            },
            "ignore_the_rest_of_rules": false,
            "name": "将李三的邮件标记为垃圾邮件",
            "is_enable": false
        }
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
  <md-td>400</md-td>
  <md-td>1230001</md-td>
  <md-td>参数错误</md-td>
  <md-td>修改参数后重试</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1230003</md-td>
  <md-td>内部错误</md-td>
  <md-td>请稍后重试</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1230002</md-td>
  <md-td>无权限</md-td>
  <md-td>成为公共邮箱成员或申请相关数据权限后调用该接口</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




