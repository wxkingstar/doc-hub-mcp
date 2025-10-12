<!--
title: 创建单位
id: 7023995901275242499
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/unit/create
updatedAt: 1720167377000
source: https://open.feishu.cn/document/server-docs/contact-v3/unit/create
-->
# 创建单位

调用该接口创建一个单位。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=unit&method=create)

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

单位属于付费功能，企业需要开通对应的飞书版本才可以使用。了解更多，可参见[单位管理](https://www.feishu.cn/hc/zh-CN/articles/333548009177)。

## 使用限制

单租户内单位总数上限为 1,000。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/unit</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[20 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="contact:unit" desc="更新单位信息" support_app_types="custom" tags="">更新单位信息</md-perm>
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

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

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
	<md-text type="field-name" >unit_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	自定义单位 ID，租户内唯一，创建后不可修改。

**数据校验规则：** 1 ~ 64 个字符，仅支持字母、数字。

**默认值**：空，若不传值则由系统自动生成一个默认 ID。

**示例值**："BU121"
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
	单位名字。

**数据校验规则：** 1 ~ 100 个字符。

**注意**：在租户内，传入的 name 和 unit_type 不允许同时重复。例如，已存在一个名字 `A`、类型 `A`的单位，此时再创建一个名字 `A`、类型 `A` 的单位将会创建失败。

**示例值**："消费者事业部"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >unit_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	自定义单位类型，创建后不可修改。

**数据校验规则：** 1 ~ 100 个字符。

**注意**：在租户内，传入的 name 和 unit_type 不允许同时重复。例如，已存在一个名字 `A`、类型 `A`的单位，此时再创建一个名字 `A`、类型 `A` 的单位将会创建失败。

**示例值**："子公司"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "unit_id": "BU121",
    "name": "消费者事业部",
    "unit_type": "子公司"
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
	<md-text type="field-name" >unit_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	单位 ID。后续可使用该 ID  对单位进行修改、删除、查询以及绑定部门等操作。
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
        "unit_id": "BU121"
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
  <md-td>500</md-td>
  <md-td>40003</md-td>
  <md-td>internal error</md-td>
  <md-td>内部错误，请获取请求的 X-Request-Id，并向[技术支持](https://applink.feishu.cn/TLJpeNdW)进行反馈。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43050</md-td>
  <md-td>unit feature is prohibited</md-td>
  <md-td>单位是旗舰版功能，需企业开通相应版本。了解更多，可参见[单位管理](https://www.feishu.cn/hc/zh-CN/articles/333548009177)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43051</md-td>
  <md-td>unit_id invalid</md-td>
  <md-td>单位 ID 无效。你需要参考接口文档内的参数描述，设置正确的单位 ID 后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43052</md-td>
  <md-td>unit name invalid</md-td>
  <md-td>非法的单位名字，长度需为 1 ~ 100 个字符。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43053</md-td>
  <md-td>unit type invalid</md-td>
  <md-td>非法的单位类型，长度需为 1 ~ 100 个字符。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43056</md-td>
  <md-td>duplicate unit id error</md-td>
  <md-td>自定义的单位 ID 已存在，请更换后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43055</md-td>
  <md-td>unit name and type repeat</md-td>
  <md-td>单位名字和类型同时重复。同一企业内，不允许单位名字和类型同时重复。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>43059</md-td>
  <md-td>unit number exceed limit</md-td>
  <md-td>单位数量超过上限。单租户内单位数量不得超过 1,000 个。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


