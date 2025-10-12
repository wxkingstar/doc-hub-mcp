<!--
title: 调用技能
id: 7429225800963031042
fullPath: /uAjLw4CM/ukTMukTMukTM/aily-v1/app-skill/start
updatedAt: 1752155047000
source: https://open.feishu.cn/document/aily-v1/app-skill/start
-->
# 调用技能

该 API 用于调用某个 Aily 应用的特定技能，支持指定技能入参；并同步返回技能执行的结果。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=aily&version=v1&resource=app.skill&method=start)

:::html
<md-alert type="tip">
更多信息及示例代码，可参考 [Aily 技能 OpenAPI 接口说明](https://bytedance.larkoffice.com/wiki/ZkKnwxogliNj3ik9ppEc0cFUnAd)。
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

> **技能 API** 能显著简化业务系统的集成工作（单轮 API 调用）。技能 API 提供更贴合系统间服务调用的参数传递模式（JSON 入参 / 出参），且无需通过文本消息对话的方式调用 AI 能力。

:::html
<div style="text-align: center;">
    <img src="https://lf3-static.bytednsdoc.com/obj/eden-cn/10eh7pbovhfnuhd/aily_skill_intro.png?x-resource-account=public" width="600" />
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
      <md-td>https://open.feishu.cn/open-apis/aily/v1/apps/:app_id/skills/:skill_id/start</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[100 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="aily:skill:write" desc="运行技能" support_app_types="custom" tags="">运行技能</md-perm>
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
<md-tr>
<md-td>X-Aily-BizUserID</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>标识创建会话的唯一用户 ID

>  建议使用唯一内部 ID 或其他可标识用户唯一身份的字段（如飞书账号的 `user_id`），可用于分析来自 API 的具体用户

**示例值**："ou_5ad573a6411d72b8305fda3a9c15c70e"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符</md-td>
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
	<md-text type="field-name" >app_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Aily 应用 ID（`spring_xxx__c`），可以在 Aily 应用开发页面的浏览器地址里获取

**示例值**："spring_e7004f87f1__c"

**数据校验规则**：

- 长度范围：`0` ～ `64` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >skill_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	技能 ID；可通过技能编辑页面的浏览器地址栏获取（`skill_xxx`）

**示例值**："skill_6cc6166178ca"

**数据校验规则**：

- 长度范围：`0` ～ `32` 字符
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
	<md-text type="field-name" >global_variable</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >skill_global_variable</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	技能的全局变量
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >query</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	触发技能的消息文本；即用户在飞书机器人等渠道**对话输入的内容**

**示例值**："你好"

**数据校验规则**：

- 长度范围：`0` ～ `40960` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >files</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	触发技能的文件信息（如 OCR 节点等所需消费的图片文件）

> 如技能不需要文件，`files` 参数传空即可

**示例值**：["file_4d9nu1ev3a2rq"]

**数据校验规则**：

- 长度范围：`0` ～ `32`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >channel</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >channel</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	渠道信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >variables</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义传入的变量；可在 Workflow 技能全局变量中消费

**示例值**："{"custom_key": "custom_value"}"

**数据校验规则**：

- 长度范围：`0` ～ `255` 字符
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
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
	技能的自定义变量

**示例值**："{\"custom_string\":\"my string\",\"custom_integer\":22}"

**数据校验规则**：

- 长度范围：`0` ～ `40960` 字符
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
  "global_variable": {
    "query": "你好"
  }
}
</md-code-json>
:::

> `input` 请求参数说明：为技能的自定义参数（JSON String）
>
> `output` 响应参数说明：技能执行输出结果（JSON String）；按开发者在 Workflow 技能「结束节点」配置的响应参数进行输出

:::html
<div style="text-align: center;">
    <img src="https://lf3-static.bytednsdoc.com/obj/eden-cn/10eh7pbovhfnuhd/aily_skill_schema.png?x-resource-account=public" width="300" />
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
	<md-text type="field-name" >output</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	技能的输出
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
	技能的执行状态
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
  "data": {
    "output": "{\"message_status\":true,\"input_message\":\"\"}",
    "status": "success"
  },
  "msg": ""
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
  <md-td>2700001</md-td>
  <md-td>param is invalid</md-td>
  <md-td>参数错误</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




