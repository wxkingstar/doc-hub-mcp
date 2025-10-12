<!--
title: 获取机器人信息
id: 6907569745299111938
fullPath: /ukTMukTMukTM/uAjMxEjLwITMx4CMyETM
updatedAt: 1664248484000
source: https://open.feishu.cn/document/client-docs/bot-v3/obtain-bot-info
-->
# 获取机器人信息

获取机器人的基本信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=bot&version=v3&resource=bot&method=get)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">
需要启用机器人能力（前往[开发者后台](https://open.feishu.cn/app) - 选择你要获取信息的应用 - 导航栏点击应用功能 - 机器人，开启机器人能力并发布后即可。）
</md-alert>
:::

:::html
<md-alert type="tip">

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
      <md-td>https://open.feishu.cn/open-apis/bot/v3/info</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>
 权限要求
 <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
</md-th>
      <md-td>
            无
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
      <md-th style="width: 18%;">名称</md-th>
      <md-th style="width: 15%;">类型</md-th>
       <md-th style="width: 15%;">必填</md-th>
      <md-th>描述</md-th>
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

[了解更多：获取与使用access_token](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)
</md-td>
</md-tbody>
</md-table>
:::





## 响应



### 响应体
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 40%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 30%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >code</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	错误码，非 0 表示失败
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >msg</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	错误描述
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	<md-text type="field-name" >bot</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >bot_info</md-text>
	</md-td>
	<md-td>
	机器人信息
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >activate_status</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	app 当前状态。

0: 初始化，租户待安装

1: 租户停用

2: 租户启用

3: 安装后待启用

4: 升级待启用

5: license过期停用

6: Lark套餐到期或降级停用
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >app_name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	app 名称
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >avatar_url</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	app 图像地址
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >ip_white_list</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-td>
	<md-td>
	app 的 IP 白名单地址
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >open_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	机器人的open_id
	</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::



### 响应体示例

```json
{
    "code":0,
    "msg":"ok",
    "bot":{
        "activate_status":2,
        "app_name":"name",
        "avatar_url":"https://s1-imfile.feishucdn.com/static-resource/v1/da5xxxx14b16113",
        "ip_white_list":[

        ],
        "open_id":"ou_e6e14f667cfe239d7b129b521dce0569"
    }
}
```

