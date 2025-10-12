<!--
title: 创建任务
id: 7255580838154371100
fullPath: /uAjLw4CM/ukTMukTMukTM/task-v2/task/create
updatedAt: 1749018767000
source: https://open.feishu.cn/document/task-v2/task/create
-->
# 创建任务

该接口可以创建一个任务，在创建任务时，支持填写任务的基本信息（如标题、描述、负责人等），此外，还可以设置任务的开始时间、截止时间提醒等条件，此外，还可以通过传入 tasklists 字段将新任务加到多个清单中。

创建任务时，可以通过设置`members`字段来设置任务的负责人和关注人。关于member的格式，详见[功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/overview)中的“ 如何表示任务和清单的成员？ ”章节。

如果要设置任务的开始时间和截止时间，需要遵守任务时间的格式和约束。详见[功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/overview)中的“ 如何使用开始时间和截止时间？”章节。

如要设置自定义字段值，可以设置`custom_fields`字段。但因为自定义字段归属于清单，因此要填写的自定义字段的guid必须归属于要添加的清单(通过`tasklists`设置）。详见[自定义字段概览](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/custom_field/custom-field-overview)。

通过设置`client_token`实现幂等调用。详见[功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/overview)中的“ 幂等调用 ”章节。

如要创建一个任务的子任务，需要使用[创建子任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task-subtask/create)接口。

创建任务时可以一并设置自定义字段值。但根据自定义字段的权限关系，任务只能添加`tasklists`字段设置的清单中关联的自定义字段的值。详见[自定义字段功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/custom_field/custom-field-overview)中的介绍。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=task&version=v2&resource=task&method=create)

:::html
<md-alert type="tip">
如果创建任务时要将任务加入到多个清单中，调用身份必须对所有清单有可编辑权限。详情见[清单功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/tasklist/overview)中的“清单是如何鉴权的？“章节。
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
      <md-td>https://open.feishu.cn/open-apis/task/v2/tasks</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[10 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="task:task:write" desc="查看、创建、更新、删除任务" support_app_types="custom,isv" tags="">查看、创建、更新、删除任务</md-perm>
            <md-perm name="task:task:writeonly" desc="创建、更新任务" support_app_types="custom,isv" tags="">创建、更新任务</md-perm>
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
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户 ID 类型

**示例值**：open_id

**默认值**：`open_id`
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
	<md-text type="field-name" >summary</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	任务标题。不能为空，支持最大3000个utf8字符。

**示例值**："针对全年销售进行一次复盘"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务摘要。支持最大3000个utf8字符。

**示例值**："需要事先阅读复盘总结文档"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >due</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >due</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务截止时间。详见[功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/overview)中的“ 如何使用开始时间和截止时间？”章节。

**示例值**：1675742789470
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >timestamp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	截止时间/日期的时间戳，距1970-01-01 00:00:00 UTC的毫秒数。如果截止时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true

**示例值**："1675454764000"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >is_all_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否截止到一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储。

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >origin</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >origin</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务关联的第三方平台来源信息，用于来源信息在飞书任务界面的展示。只能创建任务时设置，一旦设置后就不可变更。详见[功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/overview)中的“ 如何使用Origin? ”章节。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >platform_i18n_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务导入来源的名称，用于在任务中心详情页展示。需提供多语言版本。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	英文

**示例值**："workbench"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文

**示例值**："工作台"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >zh_hk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文（香港地区）

**示例值**："工作臺"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >zh_tw</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文（台湾地区）

**示例值**："工作臺"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日语

**示例值**："作業台"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >fr_fr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	法语

**示例值**："Table de travail"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >it_it</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	意大利语

**示例值**："banco di lavoro"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >de_de</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	德语

**示例值**："Werkbank"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ru_ru</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	俄语

**示例值**："верстак"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >th_th</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	泰语

**示例值**："โต๊ะทำงาน"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >es_es</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	西班牙语

**示例值**："banco de trabajo"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >ko_kr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	韩语

**示例值**："작업대"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务关联的来源平台详情页链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	来源链接对应的地址，如填写必须以https://或者http://开头。

**说明**：如需调整 PC 端链接打开方式，可在飞书客户端的 **设置** > **效率** > **链接打开方式** 内调整。

**示例值**："https://www.example.com"

**数据校验规则**：

- 长度范围：`0` ～ `1024` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	来源链接对应的标题

**示例值**："反馈一个问题，需要协助排查"

**数据校验规则**：

- 最大长度：`512` 字符
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
	否
	</md-dt-td>
	<md-dt-td>
	调用者可以传入的任意附带到任务上的数据。在获取任务详情时会原样返回。如果是二进制数据可以使用Base64编码。

**示例值**："dGVzdA=="

**数据校验规则**：

- 最大长度：`65536` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >completed_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务的完成时刻时间戳(ms)。不填写或者设为0表示创建一个未完成任务；填写一个具体的时间戳表示创建一个已完成任务。

**示例值**："1675742789470"

**默认值**：`0`

**数据校验规则**：

- 最大长度：`20` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >members</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务成员列表，包括负责人和关注人。不填写表示任务无成员。单次请求支持最大50个成员（去重后）。

详见[功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/overview)中的“ 如何表示任务和清单的成员？ ”章节。

**示例值**：[ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f]
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
	是
	</md-dt-td>
	<md-dt-td>
	表示member的id

**示例值**："ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f"

**数据校验规则**：

- 最大长度：`100` 字符
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
	否
	</md-dt-td>
	<md-dt-td>
	成员的类型，可以是user或者app。

**示例值**："user"

**默认值**：`user`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >role</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	成员角色，可以是"assignee"或者"follower"。

**示例值**："assignee"

**数据校验规则**：

- 最大长度：`20` 字符
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
	否
	</md-dt-td>
	<md-dt-td>
	成员名称

**示例值**："张明德（明德）"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >repeat_rule</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	重复任务规则。如果设置，则该任务为“重复任务”。详见[任务功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/overview)中的“如何使用重复任务？”章节。

**示例值**："FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >custom_complete</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_complete</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务自定义完成配置。详见[任务功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/overview)中的“ 如何使用任务自定义完成？”章节。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >pc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_complete_item</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	pc客户端自定义完成配置（含mac和windows）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义完成的跳转url

**示例值**："https://www.example.com"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义完成的弹出提示
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	英文

**示例值**："workbench"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文

**示例值**："工作台"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_hk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文（香港地区）

**示例值**："工作臺"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_tw</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文（台湾地区）

**示例值**："工作臺"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日语

**示例值**："作業台"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >fr_fr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	法语

**示例值**："Table de travail"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >it_it</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	意大利语

**示例值**："banco di lavoro"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >de_de</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	德语

**示例值**："Werkbank"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ru_ru</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	俄语

**示例值**："верстак"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >th_th</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	泰语

**示例值**："โต๊ะทำงาน"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >es_es</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	西班牙语

**示例值**："banco de trabajo"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ko_kr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	韩语

**示例值**："작업대"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >ios</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_complete_item</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	ios端的自定义完成配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义完成的跳转url

**示例值**："https://www.example.com"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义完成的弹出提示为
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	英文

**示例值**："workbench"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文

**示例值**："工作台"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_hk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文（香港地区）

**示例值**："工作臺"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_tw</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文（台湾地区）

**示例值**："工作臺"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日语

**示例值**："作業台"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >fr_fr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	法语

**示例值**："Table de travail"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >it_it</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	意大利语

**示例值**："banco di lavoro"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >de_de</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	德语

**示例值**："Werkbank"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ru_ru</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	俄语

**示例值**："верстак"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >th_th</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	泰语

**示例值**："โต๊ะทำงาน"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >es_es</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	西班牙语

**示例值**："banco de trabajo"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ko_kr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	韩语

**示例值**："작업대"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >android</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_complete_item</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	android端的自定义完成配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义完成的跳转url

**示例值**："https://www.example.com"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义完成的弹出提示为
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	英文

**示例值**："workbench"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文

**示例值**："工作台"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_hk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文（香港地区）

**示例值**："工作臺"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >zh_tw</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	中文（台湾地区）

**示例值**："工作臺"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日语

**示例值**："作業台"

**数据校验规则**：

- 最大长度：`1000` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >fr_fr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	法语

**示例值**："Table de travail"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >it_it</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	意大利语

**示例值**："banco di lavoro"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >de_de</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	德语

**示例值**："Werkbank"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ru_ru</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	俄语

**示例值**："верстак"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >th_th</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	泰语

**示例值**："โต๊ะทำงาน"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >es_es</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	西班牙语

**示例值**："banco de trabajo"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ko_kr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	韩语

**示例值**："작업대"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >tasklists</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task_in_tasklist_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务所在清单的信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >tasklist_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	指定在某个清单中创建任务，需要该清单的可编辑权限。不填写表示不在清单中创建任务。

**示例值**："cc371766-6584-cf50-a222-c22cd9055004"

**数据校验规则**：

- 最大长度：`100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >section_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	清单中自定义分组的GUID，用于指定在某个清单中创建任务的同时把任务加入到某个具体的分组中。如果填写了清单的GUID，却没填写分组的GUID，则自动加入该清单的默认分组中。

**示例值**："e6e37dcc-f75a-5936-f589-12fb4b5c80c2"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >client_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	幂等token。如果提供则触发后端实现幂等行为。详见[功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/overview)中的“ 幂等调用 ”章节。

**示例值**："daa2237f-8310-4707-a83b-52c8a81e0fb7"

**数据校验规则**：

- 长度范围：`10` ～ `100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务的开始时间(ms), 详见[功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/overview)中的“ 如何使用开始时间和截止时间？”章节。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >timestamp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	开始时间/日期的时间戳，距1970-01-01 00:00:00的毫秒数。如果开始时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true。

如果同时设置任务的开始时间和截止时间，开始时间必须<=截止时间，并且开始/截止时间的is_all_day设置必须相同。

**示例值**："1675454764000"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >is_all_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否开始于一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储。

**示例值**：true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >reminders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务提醒。要设置提醒必须同时设置任务的截止时间。一个任务最多只能设置1个提醒。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >relative_fire_minute</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	相对于截止时间的提醒时间分钟数，取值必须大于等于0（调用本接口只能设置截止日期前的提醒时间）。例如30表示截止时间前30分钟提醒；0表示截止时提醒。

**示例值**：30
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >mode</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	任务完成模式, 1 - 会签任务; 2 - 或签任务

**示例值**：2

**默认值**：`2`

**数据校验规则**：

- 取值范围：`1` ～ `2`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >is_milestone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	是否是里程碑任务

**示例值**：false

**默认值**：`false`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >custom_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >input_custom_field_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义字段值。可以在创建任务的同时设置一个或多个自定义字段的值。要设置值的自定义字段必须关联于任务要加入的清单(通过`tasklists`字段设置），否则将无法设置。

每个字段的值根据字段类型填写相应的字段。
* 当`type`为"number"时，应使用`number_value`字段，表示数字类型自定义字段的值；
* 当`type`为"member"时，应使用`member_value`字段，表示人员类型自定义字段的值；
* 当`type`为"datetime"时，应使用`datetime_value`字段，表示日期类型自定义字段的值；
* 当`type`为"single_select"时，应使用`single_select_value`字段，表示单选类型自定义字段的值；
* 当`type`为"multi_select"时，应使用`multi_select_value`字段，表示多选类型自定义字段的值；
* 当`type`为“text”时，应使用`text_value`字段，表示文本字段类型的值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	自定义字段guid

**示例值**："73b21903-0041-4796-a11e-f8be919a7063"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >number_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	数字类型的自定义字段值，填写一个合法数字的字符串表示，空字符串表示设为空。

**示例值**："10.23"

**数据校验规则**：

- 最大长度：`20` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >member_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	人员类型的自定义字段值。可以设置1个或多个用户的id（遵循member格式，只支持user类型）。当字段设为只不能多选时只能输入一个值。设为空数组表示设为空。

**数据校验规则**：

- 最大长度：`50`
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
	否
	</md-dt-td>
	<md-dt-td>
	表示member的id

**示例值**："ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f"

**数据校验规则**：

- 最大长度：`100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	成员类型（默认user，可不填写）

**示例值**："user"

**默认值**：`user`
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
	否
	</md-dt-td>
	<md-dt-td>
	成员名称

**示例值**："张明德（明德）"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >datetime_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	日期类型自定义字段值，可以输入一个表示日期的以毫秒为单位的时间戳字符串。设为空字符串表示设为空。

**示例值**："1698192000000"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >single_select_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	单选类型字段值，填写一个字段选项的option_guid。设置为空字符串表示设为空。

**示例值**："73b21903-0041-4796-a11e-f8be919a7063"

**数据校验规则**：

- 最大长度：`100` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >multi_select_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	多选类型字段值，可以填写一个或多个本字段的option_guid。设为空数组表示设为空。

**示例值**：["73b21903-0041-4796-a11e-f8be919a7063"]

**数据校验规则**：

- 最大长度：`50`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >text_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	文本类型字段值。可以填写最多3000字符。使用空字符串表示设为空。

**示例值**："这是一段文本描述。"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >docx_source</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >docx_source</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	如果希望设置任务来源为文档，则设置此字段
- 和extra互斥，同时设置时报错
- 和origin互斥，同时设置时报错
- 和custom_complete互斥，同时设置时报错
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
	是
	</md-dt-td>
	<md-dt-td>
	任务关联的文档token，要求：如果使用tenant_access_token请求，则请求机器人有文档编辑权限；如果使用user_access_token，则请求用户有文档的编辑权限

**示例值**："OvZCdFYVHo5ArFxJKHjcnRbtnKd"

**数据校验规则**：

- 长度范围：`27` ～ `27` 字符
- 正则校验：`[a-zA-Z0-9]{27}`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >block_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	任务关联的文档block_id，要求block_id存在于token对应文档中、且block_id没有绑定过其他的任务

**示例值**："O6wwd22uIoG8acxwxGtbljaUcfc"

**数据校验规则**：

- 长度范围：`27` ～ `27` 字符
- 正则校验：`[a-zA-Z0-9]{27}`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >positive_reminders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	正数协议每日提醒

**数据校验规则**：

- 长度范围：`1` ～ `10`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >relative_fire_minute</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	相对于截止时间的提醒时间分钟数。例如30表示截止时间前30分钟提醒；0表示截止时提醒。

**示例值**：30
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "summary": "针对全年销售进行一次复盘",
    "description": "需要事先阅读复盘总结文档",
    "due": {
        "timestamp": "1675454764000",
        "is_all_day": true
    },
    "origin": {
        "platform_i18n_name": {
            "en_us": "workbench",
            "zh_cn": "工作台",
            "zh_hk": "工作臺",
            "zh_tw": "工作臺",
            "ja_jp": "作業台",
            "fr_fr": "Table de travail",
            "it_it": "banco di lavoro",
            "de_de": "Werkbank",
            "ru_ru": "верстак",
            "th_th": "โต๊ะทำงาน",
            "es_es": "banco de trabajo",
            "ko_kr": "작업대"
        },
        "href": {
            "url": "https://www.example.com",
            "title": "反馈一个问题，需要协助排查"
        }
    },
    "extra": "dGVzdA==",
    "completed_at": "1675742789470",
    "members": [
        {
            "id": "ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f",
            "type": "user",
            "role": "assignee",
            "name": "张明德（明德）"
        }
    ],
    "repeat_rule": "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR",
    "custom_complete": {
        "pc": {
            "href": "https://www.example.com",
            "tip": {
                "en_us": "workbench",
                "zh_cn": "工作台",
                "zh_hk": "工作臺",
                "zh_tw": "工作臺",
                "ja_jp": "作業台",
                "fr_fr": "Table de travail",
                "it_it": "banco di lavoro",
                "de_de": "Werkbank",
                "ru_ru": "верстак",
                "th_th": "โต๊ะทำงาน",
                "es_es": "banco de trabajo",
                "ko_kr": "작업대"
            }
        },
        "ios": {
            "href": "https://www.example.com",
            "tip": {
                "en_us": "workbench",
                "zh_cn": "工作台",
                "zh_hk": "工作臺",
                "zh_tw": "工作臺",
                "ja_jp": "作業台",
                "fr_fr": "Table de travail",
                "it_it": "banco di lavoro",
                "de_de": "Werkbank",
                "ru_ru": "верстак",
                "th_th": "โต๊ะทำงาน",
                "es_es": "banco de trabajo",
                "ko_kr": "작업대"
            }
        },
        "android": {
            "href": "https://www.example.com",
            "tip": {
                "en_us": "workbench",
                "zh_cn": "工作台",
                "zh_hk": "工作臺",
                "zh_tw": "工作臺",
                "ja_jp": "作業台",
                "fr_fr": "Table de travail",
                "it_it": "banco di lavoro",
                "de_de": "Werkbank",
                "ru_ru": "верстак",
                "th_th": "โต๊ะทำงาน",
                "es_es": "banco de trabajo",
                "ko_kr": "작업대"
            }
        }
    },
    "tasklists": [
        {
            "tasklist_guid": "cc371766-6584-cf50-a222-c22cd9055004",
            "section_guid": "e6e37dcc-f75a-5936-f589-12fb4b5c80c2"
        }
    ],
    "client_token": "daa2237f-8310-4707-a83b-52c8a81e0fb7",
    "start": {
        "timestamp": "1675454764000",
        "is_all_day": true
    },
    "reminders": [
        {
            "relative_fire_minute": 30
        }
    ],
    "mode": 2,
    "is_milestone": false,
    "custom_fields": [
        {
            "guid": "73b21903-0041-4796-a11e-f8be919a7063",
            "number_value": "10.23",
            "member_value": [
                {
                    "id": "ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f",
                    "type": "user",
                    "name": "张明德（明德）"
                }
            ],
            "datetime_value": "1698192000000",
            "single_select_value": "73b21903-0041-4796-a11e-f8be919a7063",
            "multi_select_value": [
                "73b21903-0041-4796-a11e-f8be919a7063"
            ],
            "text_value": "这是一段文本描述。"
        }
    ],
    "docx_source": {
        "token": "OvZCdFYVHo5ArFxJKHjcnRbtnKd",
        "block_id": "O6wwd22uIoG8acxwxGtbljaUcfc"
    },
    "positive_reminders": [
        {
            "relative_fire_minute": 30
        }
    ]
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
	<md-text type="field-name" >task</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task</md-text>
	</md-dt-td>
	<md-dt-td>
	产生的任务
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务guid，任务的唯一ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >summary</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务备注
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >due</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >due</md-text>
	</md-dt-td>
	<md-dt-td>
	任务截止时间。详见[功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/overview)中的“ 如何使用开始时间和截止时间？”章节。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >timestamp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	截止时间/日期的时间戳，距1970-01-01 00:00:00的毫秒数。如果截止时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_all_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否截止到一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >reminders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的提醒配置列表。目前每个任务最多有1个。
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
	提醒时间设置的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >relative_fire_minute</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	相对于截止时间的提醒分钟数，是一个非负整数。例如，设为30表示“截止时间前30分钟提醒”。设为0表示“截止时间时提醒”。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >creator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member</md-text>
	</md-dt-td>
	<md-dt-td>
	任务创建者
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
	表示member的id
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
	成员的类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >role</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员角色
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >members</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	任务成员列表
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
	表示member的id
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
	成员的类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >role</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员角色
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >completed_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务完成的时间戳(ms)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >attachments</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >attachment\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的附件列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件guid
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >file_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件在云文档系统中的token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	附件名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	附件的字节大小
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >resource</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >resource</md-text>
	</md-dt-td>
	<md-dt-td>
	附件归属的资源
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	资源类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	资源ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >uploader</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member</md-text>
	</md-dt-td>
	<md-dt-td>
	附件上传者
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	表示member的id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员的类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >role</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	角色，可以是负责人（assginee）或者关注人（follower）
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
	成员名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_cover</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否是封面图
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >uploaded_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	上传时间戳(ms)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >origin</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >origin</md-text>
	</md-dt-td>
	<md-dt-td>
	任务关联的第三方平台来源信息。创建是设置后就不可更改。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >platform_i18n_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	任务导入来源的名称，用于在任务中心详情页展示。需提供多语言版本。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >zh_hk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文（香港地区）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >zh_tw</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文（台湾地区）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >fr_fr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	法语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >it_it</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	意大利语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >de_de</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	德语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ru_ru</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	俄语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >th_th</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	泰语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >es_es</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	西班牙语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ko_kr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	韩语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	任务关联的来源平台详情页链接
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
	链接对应的地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >title</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	链接对应的标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >extra</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务附带的自定义数据。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tasklists</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task_in_tasklist_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	任务所属清单的名字。调用者只能看到有权限访问的清单的列表。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >tasklist_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务所在清单的guid
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >section_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务所在清单的自定义分组guid
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >repeat_rule</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的重复规则。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >parent_task_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	如果当前任务为某个任务的子任务，返回父任务的guid
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mode</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的模式。1 - 会签任务；2 - 或签任务
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >source</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	任务创建的来源

**可选值有**：
<md-enum>
<md-enum-item key="0" >未知来源</md-enum-item>
<md-enum-item key="1" >任务中心</md-enum-item>
<md-enum-item key="2" >群组任务/消息转任务</md-enum-item>
<md-enum-item key="6" >通过开放平台以tenant_access_token授权创建的任务</md-enum-item>
<md-enum-item key="7" >通过开放平台以user_access_token授权创建的任务</md-enum-item>
<md-enum-item key="8" >文档任务</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_complete</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_complete</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的自定义完成配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >pc</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_complete_item</md-text>
	</md-dt-td>
	<md-dt-td>
	pc客户端自定义完成配置（含mac和windows）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义完成的跳转url
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >tip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义完成的弹出提示为
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >zh_hk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文（香港地区）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >zh_tw</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文（台湾地区）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fr_fr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	法语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >it_it</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	意大利语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >de_de</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	德语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ru_ru</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	俄语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >th_th</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	泰语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >es_es</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	西班牙语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ko_kr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	韩语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >ios</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_complete_item</md-text>
	</md-dt-td>
	<md-dt-td>
	ios端的自定义完成配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义完成的跳转url
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >tip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义完成的弹出提示为
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >zh_hk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文（香港地区）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >zh_tw</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文（台湾地区）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fr_fr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	法语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >it_it</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	意大利语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >de_de</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	德语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ru_ru</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	俄语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >th_th</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	泰语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >es_es</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	西班牙语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ko_kr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	韩语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >android</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_complete_item</md-text>
	</md-dt-td>
	<md-dt-td>
	android端的自定义完成配置
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >href</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义完成的跳转url
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >tip</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_text</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义完成的弹出提示为
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >zh_hk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文（香港地区）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >zh_tw</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文（台湾地区）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >fr_fr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	法语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >it_it</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	意大利语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >de_de</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	德语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ru_ru</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	俄语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >th_th</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	泰语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >es_es</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	西班牙语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ko_kr</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	韩语
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >task_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务界面上的代码
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >created_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务创建时间戳(ms)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >updated_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务最后一次更新的时间戳(ms)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的状态，支持"todo"和"done"两种状态
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的分享链接。飞书中点击该链接可以直接打开任务详情。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >start</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的开始时间
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >timestamp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	开始时间/日期的时间戳，距1970-01-01 00:00:00的毫秒数。如果开始时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >is_all_day</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否开始于一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >subtask_count</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	该任务的子任务的个数。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >is_milestone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否是里程碑任务
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >custom_fields</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >custom_field_value\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	任务的自定义字段值
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	字段GUID
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
	自定义字段类型，支持"member", "datetime", "number", "single_select", "multi_select"五种类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >number_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	数字类型的自定义字段值，填写一个合法数字的字符串表示，空字符串表示设为空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >datetime_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日期类型自定义字段值。可以输入一个表示日期的以毫秒为单位的字符串。设为空字符串表示设为空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >member_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	人员类型的自定义字段值，可以设置1个或多个用户的id（遵循member格式，只支持user类型）。当该字段的设置为“不能多选”时只能输入一个值。设为空数组表示设为空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	表示member的id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员的类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >role</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员角色
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
	成员名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >single_select_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	单选类型字段值，填写一个字段选项的option_guid。设置为空字符串表示设为空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >multi_select_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	多选类型字段值，可以填写一个或多个本字段的option_guid。设为空数组表示设为空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	自定义字段名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >text_value</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文本类型字段值。可以输入一段文本。空字符串表示清空。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >dependencies</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task_dependency\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	任务依赖
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
	依赖类型

**可选值有**：
<md-enum>
<md-enum-item key="prev" >前置依赖</md-enum-item>
<md-enum-item key="next" >后置依赖</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >task_guid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	依赖任务的GUID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >assignee_related</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >task_assignee\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	任务执行者相关信息，如会签任务各执行者完成时间等
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
	任务执行者的id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >completed_at</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	会签任务中执行者完成的时间戳(ms)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >positive_reminders</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >reminder\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	正数协议任务提醒
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
	提醒时间设置的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >relative_fire_minute</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	相对于截止时间的提醒时间分钟数。例如30表示截止时间前30分钟提醒；0表示截止时提醒。
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
        "task": {
            "guid": "83912691-2e43-47fc-94a4-d512e03984fa",
            "summary": "进行销售年中总结",
            "description": "进行销售年中总结",
            "due": {
                "timestamp": "1675454764000",
                "is_all_day": true
            },
            "reminders": [
                {
                    "id": "10",
                    "relative_fire_minute": 30
                }
            ],
            "creator": {
                "id": "ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f",
                "type": "user",
                "role": "assignee",
                "name": "张明德（明德）"
            },
            "members": [
                {
                    "id": "ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f",
                    "type": "user",
                    "role": "follower",
                    "name": "张明德（明德）"
                }
            ],
            "completed_at": "1675742789470",
            "attachments": [
                {
                    "guid": "f860de3e-6881-4ddd-9321-070f36d1af0b",
                    "file_token": "boxcnTDqPaRA6JbYnzQsZ2doB2b",
                    "name": "foo.jpg",
                    "size": 62232,
                    "resource": {
                        "type": "task",
                        "id": "e6e37dcc-f75a-5936-f589-12fb4b5c80c2"
                    },
                    "uploader": {
                        "id": "ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f",
                        "type": "user",
                        "role": "assignee",
                        "name": "张明德（明德）"
                    },
                    "is_cover": false,
                    "uploaded_at": "1675742789470"
                }
            ],
            "origin": {
                "platform_i18n_name": {
                    "en_us": "workbench",
                    "zh_cn": "工作台",
                    "zh_hk": "工作臺",
                    "zh_tw": "工作臺",
                    "ja_jp": "作業台",
                    "fr_fr": "Table de travail",
                    "it_it": "banco di lavoro",
                    "de_de": "Werkbank",
                    "ru_ru": "верстак",
                    "th_th": "โต๊ะทำงาน",
                    "es_es": "banco de trabajo",
                    "ko_kr": "작업대"
                },
                "href": {
                    "url": "https://www.example.com",
                    "title": "反馈一个问题，需要协助排查"
                }
            },
            "extra": "dGVzdA==",
            "tasklists": [
                {
                    "tasklist_guid": "cc371766-6584-cf50-a222-c22cd9055004",
                    "section_guid": "e6e37dcc-f75a-5936-f589-12fb4b5c80c2"
                }
            ],
            "repeat_rule": "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR",
            "parent_task_guid": "e297ddff-06ca-4166-b917-4ce57cd3a7a0",
            "mode": 2,
            "source": 6,
            "custom_complete": {
                "pc": {
                    "href": "https://www.example.com",
                    "tip": {
                        "en_us": "workbench",
                        "zh_cn": "工作台",
                        "zh_hk": "工作臺",
                        "zh_tw": "工作臺",
                        "ja_jp": "作業台",
                        "fr_fr": "Table de travail",
                        "it_it": "banco di lavoro",
                        "de_de": "Werkbank",
                        "ru_ru": "верстак",
                        "th_th": "โต๊ะทำงาน",
                        "es_es": "banco de trabajo",
                        "ko_kr": "작업대"
                    }
                },
                "ios": {
                    "href": "https://www.example.com",
                    "tip": {
                        "en_us": "workbench",
                        "zh_cn": "工作台",
                        "zh_hk": "工作臺",
                        "zh_tw": "工作臺",
                        "ja_jp": "作業台",
                        "fr_fr": "Table de travail",
                        "it_it": "banco di lavoro",
                        "de_de": "Werkbank",
                        "ru_ru": "верстак",
                        "th_th": "โต๊ะทำงาน",
                        "es_es": "banco de trabajo",
                        "ko_kr": "작업대"
                    }
                },
                "android": {
                    "href": "https://www.example.com",
                    "tip": {
                        "en_us": "workbench",
                        "zh_cn": "工作台",
                        "zh_hk": "工作臺",
                        "zh_tw": "工作臺",
                        "ja_jp": "作業台",
                        "fr_fr": "Table de travail",
                        "it_it": "banco di lavoro",
                        "de_de": "Werkbank",
                        "ru_ru": "верстак",
                        "th_th": "โต๊ะทำงาน",
                        "es_es": "banco de trabajo",
                        "ko_kr": "작업대"
                    }
                }
            },
            "task_id": "t6272302",
            "created_at": "1675742789470",
            "updated_at": "1675742789470",
            "status": "todo",
            "url": "https://applink.feishu.cn/client/todo/detail?guid=70577c8f-91ab-4c91-b359-a21a751054e8&suite_entity_num=t192012",
            "start": {
                "timestamp": "1675454764000",
                "is_all_day": true
            },
            "subtask_count": 1,
            "is_milestone": false,
            "custom_fields": [
                {
                    "guid": "a4f648d7-76ef-477f-bc8e-0601b5a60093",
                    "type": "number",
                    "number_value": "10.23",
                    "datetime_value": "1687708260000",
                    "member_value": [
                        {
                            "id": "ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f",
                            "type": "user",
                            "role": "editor",
                            "name": "张明德（明德）"
                        }
                    ],
                    "single_select_value": "4216f79b-3fda-4dc6-a0c4-a16022e47152",
                    "multi_select_value": [
                        "4216f79b-3fda-4dc6-a0c4-a16022e47152"
                    ],
                    "name": "优先级",
                    "text_value": "这是一段文本介绍。"
                }
            ],
            "dependencies": [
                {
                    "type": "next",
                    "task_guid": "93b7bd05-35e6-4371-b3c9-6b7cbd7100c0"
                }
            ],
            "assignee_related": [
                {
                    "id": "ou_2cefb2f014f8d0c6c2d2eb7bafb0e54f",
                    "completed_at": "1675742789470"
                }
            ],
            "positive_reminders": [
                {
                    "id": "10",
                    "relative_fire_minute": 30
                }
            ]
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
  <md-td>1470400</md-td>
  <md-td>请求参数有误，如没提供必填项，标题过长，尝试设置提醒却不提供截止时间等。</md-td>
  <md-td>具体错误原因参考返回的错误信息。</md-td>
</md-tr>


<md-tr>
  <md-td>404</md-td>
  <md-td>1470404</md-td>
  <md-td>创建任务时设置加入清单/分组，但清单/分组不存在。</md-td>
  <md-td>具体错误原因参考返回的错误信息。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1470500</md-td>
  <md-td>创建任务失败。</md-td>
  <md-td>服务器内部错误。重试调用后持续出错可以联系支持。
常见问题参考:
1. 检查members列表，是否存在member_id传入有误或与实际参数类型不匹配。
2. 在使用tenant_access_token访问接口时，members列表中不能传入其他租户成员。
3. 检查任务标题或描述内容是否存在非法内容，非法内容无法通过安全内容检查。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>1470403</md-td>
  <md-td>权限错误。创建任务时设置要加入某个清单，但没有清单的可编辑权限。</md-td>
  <md-td>检查调用身份是否对任务要加入的清单有编辑权限。详见[清单是如何鉴权的？](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/faq)</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>1470422</md-td>
  <md-td>使用同样的client_token进行并发接口调用</md-td>
  <md-td>不要用同样的client_token进行并发的接口调用。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




