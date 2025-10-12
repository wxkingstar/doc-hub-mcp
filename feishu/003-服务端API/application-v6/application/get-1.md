<!--
title: 获取应用信息
id: 6989432329400238081
fullPath: /uAjLw4CM/ukTMukTMukTM/application-v6/application/get
updatedAt: 1752136594000
source: https://open.feishu.cn/document/server-docs/application-v6/application/get
-->
# 获取应用信息

根据app_id获取应用的基础信息{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=application&version=v6&resource=application&method=get)

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
商店应用必须正式发布版本后，才可以调用该接口获取应用信息。如果灰度发布应用，调用该接口将会报错 210504 错误码。
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
      <md-td>https://open.feishu.cn/open-apis/application/v6/applications/:app_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="application:application:self_manage" desc="管理应用自身资源" support_app_types="custom,isv" tags="">管理应用自身资源</md-perm>
            <md-perm name="admin:app.info:readonly" desc="获取应用信息" support_app_types="custom" tags="">获取应用信息</md-perm>
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
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom,isv" tags="">获取用户 user ID</md-perm>
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
	应用的 app_id，需要查询其他应用信息时，必须申请[获取应用信息](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)权限，仅查询本应用信息时，可填入 "me" 或者应用自身 app_id

**示例值**："cli_9b445f5258795107"
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
	<md-text type="field-name" >lang</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	指定获取应用在该语言下的信息

**示例值**：zh_cn

**可选值有**：
<md-enum>
<md-enum-item key="zh_cn" >中文</md-enum-item>
<md-enum-item key="en_us" >英文</md-enum-item>
<md-enum-item key="ja_jp" >日文</md-enum-item>
</md-enum>

**数据校验规则**：

- 最小长度：`1` 字符
	</md-dt-td>
</md-dt-tr>


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

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	<md-text type="field-name" >app</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >application</md-text>
	</md-dt-td>
	<md-dt-td>
	应用数据
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >app_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用的 app_id
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >creator_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用创建者（所有者）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >status</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	应用状态

**可选值有**：
<md-enum>
<md-enum-item key="0" >停用状态</md-enum-item>
<md-enum-item key="1" >启用状态</md-enum-item>
<md-enum-item key="2" >未启用状态</md-enum-item>
<md-enum-item key="3" >未知状态</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >scene_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	应用类型

**可选值有**：
<md-enum>
<md-enum-item key="0" >自建应用</md-enum-item>
<md-enum-item key="1" >应用商店应用</md-enum-item>
<md-enum-item key="2" >个人应用商店应用</md-enum-item>
<md-enum-item key="3" >未知应用类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >payment_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	付费类型

**可选值有**：
<md-enum>
<md-enum-item key="0" >免费</md-enum-item>
<md-enum-item key="1" >付费</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >create_source</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用创建来源(目前仅Base应用返回)

**可选值有**：
<md-enum>
<md-enum-item key="developer_console" >开发者后台</md-enum-item>
<md-enum-item key="base" >多维表格自动化流程创建的应用</md-enum-item>
<md-enum-item key="app_engine" >飞书 aPaaS</md-enum-item>
<md-enum-item key="bot_builder" >机器人助手</md-enum-item>
<md-enum-item key="aily" >aily(智能伙伴搭建平台)</md-enum-item>
<md-enum-item key="unknown" >未知来源</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >redirect_urls</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	安全设置中的重定向 URL
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >online_version_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	发布在线上的应用版本 ID，若没有则为空
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >unaudit_version_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	在审核中的版本 ID，若没有则为空
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >app_name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >avatar_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用图标 url
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
	应用默认描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >scopes</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app_scope\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	应用权限列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >scope</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用权限
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用权限的国际化描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >level</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	权限等级描述

**可选值有**：
<md-enum>
<md-enum-item key="1" >普通权限</md-enum-item>
<md-enum-item key="2" >高级权限</md-enum-item>
<md-enum-item key="3" >超敏感权限</md-enum-item>
<md-enum-item key="0" >未知等级</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >token_types</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	返回用户身份类型user、应用身份类型tenant。如果两种类型都支持，则同时返回两个。

**可选值有**：
<md-enum>
<md-enum-item key="tenant" >应用身份类型</md-enum-item>
<md-enum-item key="user" >用户身份类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >back_home_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	后台主页地址
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >i18n</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >app_i18n_info\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	应用的国际化信息列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >i18n_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化语言的 key

**可选值有**：
<md-enum>
<md-enum-item key="zh_cn" >简体中文</md-enum-item>
<md-enum-item key="en_us" >英文</md-enum-item>
<md-enum-item key="ja_jp" >日文</md-enum-item>
<md-enum-item key="zh_hk" >繁体中文(中国香港)</md-enum-item>
<md-enum-item key="zh_tw" >繁体中文(中国台湾)</md-enum-item>
<md-enum-item key="id_id" >印度尼西亚语</md-enum-item>
<md-enum-item key="ms_my" >马来语</md-enum-item>
<md-enum-item key="de_de" >德语</md-enum-item>
<md-enum-item key="es_es" >西班牙语</md-enum-item>
<md-enum-item key="fr_fr" >法语</md-enum-item>
<md-enum-item key="it_it" >意大利语</md-enum-item>
<md-enum-item key="pt_br" >葡萄牙语(巴西)</md-enum-item>
<md-enum-item key="vi_vn" >越南语</md-enum-item>
<md-enum-item key="ru_ru" >俄语</md-enum-item>
<md-enum-item key="th_th" >泰语</md-enum-item>
<md-enum-item key="ko_kr" >韩语</md-enum-item>
</md-enum>
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
	应用国际化名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >description</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用国际化描述（副标题）
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >help_use</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	国际化帮助文档链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >primary_language</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用主语言

**可选值有**：
<md-enum>
<md-enum-item key="zh_cn" >中文</md-enum-item>
<md-enum-item key="en_us" >英文</md-enum-item>
<md-enum-item key="ja_jp" >日文</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >common_categories</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	应用分类的国际化描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >owner</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >application.owner</md-text>
	</md-dt-td>
	<md-dt-td>
	应用的所有者信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	应用所有者类型

**可选值有**：
<md-enum>
<md-enum-item key="0" >飞书科技</md-enum-item>
<md-enum-item key="1" >飞书合作伙伴</md-enum-item>
<md-enum-item key="2" >企业内成员</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >owner_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用所有者ID
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
	应用开发商名称(仅商店应用返回)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >help_desk</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用开发商服务台链接(仅商店应用返回)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >email</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用开发商的邮箱(仅商店应用返回)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >phone</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	应用开发商的手机号(仅商店应用返回)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >customer_service_account</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	客服账号，仅当商店应用配置了这种联系方式时才会返回
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >mobile_default_ability</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	移动端默认能力

**可选值有**：
<md-enum>
<md-enum-item key="gadget" >小程序</md-enum-item>
<md-enum-item key="web_app" >网页应用</md-enum-item>
<md-enum-item key="bot" >机器人</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >pc_default_ability</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	PC端默认能力

**可选值有**：
<md-enum>
<md-enum-item key="gadget" >小程序</md-enum-item>
<md-enum-item key="web_app" >网页应用</md-enum-item>
<md-enum-item key="bot" >机器人</md-enum-item>
</md-enum>
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
        "app": {
            "app_id": "cli_9b445f5258795107",
            "creator_id": "ou_d317f090b7258ad0372aa53963cda70d",
            "status": 1,
            "scene_type": 0,
            "payment_type": 0,
            "create_source": "base",
            "redirect_urls": [
                "https://www.example.com"
            ],
            "online_version_id": "oav_d317f090b7258ad0372aa53963cda70d",
            "unaudit_version_id": "oav_d317f090b7258ad0372aa53963cda70d",
            "app_name": "应用名称",
            "avatar_url": "https://sf1-ttcdn-tos.pstatp.com/img/avatar/d279000ca4d3f7f6aaff~72x72.jpg",
            "description": "应用描述",
            "scopes": [
                {
                    "scope": "contact:user.base",
                    "description": "获取应用信息",
                    "level": 1,
                    "token_types": [
                        "user"
                    ]
                }
            ],
            "back_home_url": "https://www.example.com",
            "i18n": [
                {
                    "i18n_key": "zh_cn",
                    "name": "应用名称",
                    "description": "应用描述",
                    "help_use": "https://www.example.com"
                }
            ],
            "primary_language": "zh_cn",
            "common_categories": [
                "分析工具"
            ],
            "owner": {
                "type": 0,
                "owner_id": "ou_d317f090b7258ad0372aa53963cda70d",
                "name": "test tenant",
                "help_desk": "https://applink.feishu.cn/client/helpdesk/open?id=6940534140529803284",
                "email": "test123@163.com",
                "phone": "1234534234234",
                "customer_service_account": "feishu@bytedance.com"
            },
            "mobile_default_ability": "gadget",
            "pc_default_ability": "gadget"
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
  <md-td>210503</md-td>
  <md-td>invalid app_id</md-td>
  <md-td>请检查请求路径中的 app_id 是否合法</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>210504</md-td>
  <md-td>no such app in tenant</md-td>
  <md-td>请检查被查询应用与当前调用接口应用是否在同一企业内</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>210505</md-td>
  <md-td>target app not a custom app</md-td>
  <md-td>请检查被查询应用是否是自建应用</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>210506</md-td>
  <md-td>no such app</md-td>
  <md-td>请检查请求路径中的 app_id 是否存在</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>210508</md-td>
  <md-td>insufficient permission level</md-td>
  <md-td>请检查应用已申请权限与被查询 app_id，当被查询 app_id 非本应用且未申请[获取应用版本信息](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)权限时，返回该错误码</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




