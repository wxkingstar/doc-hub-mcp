<!--
title: 删除群菜单
id: 7174746098262654980
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/delete
updatedAt: 1748248143000
source: https://open.feishu.cn/document/server-docs/group/chat-menu_tree/delete
-->
# 删除群菜单

删除指定群内的一级菜单。成功调用后接口会返回群组内最新的群菜单信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=chat.menu_tree&method=delete)

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

- 应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 调用当前接口的用户或者机器人必须在对应的会话内。

## 使用限制

- 该接口仅支持群模式为 `group` 的群组，你可以调用[获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)接口，在返回结果中查看 `chat_mode` 参数取值是否为 `group`。
- 仅支持删除群组内的一级菜单。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/chats/:chat_id/menu_tree</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>DELETE</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.menu_tree:write_only" desc="操作群菜单" support_app_types="custom,isv" tags="">操作群菜单</md-perm>
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
	<md-text type="field-name" >chat_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	群 ID。获取方式：

- [创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)，从返回结果中获取该群的 chat_id。
- 调用[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)接口，可以查询用户或机器人所在群的 chat_id。
- 调用[搜索对用户或机器人可见的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)，可搜索用户或机器人所在的群、对用户或机器人公开的群的 chat_id。

**注意**：仅支持群模式为 **群组（group）** 的群组 ID。你可以调用[获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)接口，在返回结果中查看 `chat_mode` 参数取值是否为 `group`。

**示例值**："oc_a0553eda9014c201e6969b478895c230"
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
	<md-text type="field-name" >chat_menu_top_level_ids</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	一级菜单 ID。ID 可通过 [获取群菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/get) 接口获取。

**示例值**：["6936075528890826780"]
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "chat_menu_top_level_ids": [
        "6936075528890826780"
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
	<md-text type="field-name" >menu_tree</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat.menu_tree</md-text>
	</md-dt-td>
	<md-dt-td>
	删除群菜单后，群内现有菜单的信息。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >chat_menu_top_levels</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_menu_top_level\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	一级菜单列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >chat_menu_top_level_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	一级菜单 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >chat_menu_item</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_menu_item</md-text>
	</md-dt-td>
	<md-dt-td>
	一级菜单信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >action_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	菜单类型

**可选值有**：
<md-enum>
<md-enum-item key="NONE" >无类型，当一级菜单下有二级菜单时，类型取值为 NONE。</md-enum-item>
<md-enum-item key="REDIRECT_LINK" >跳转链接类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >redirect_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_menu_item_redirect_link</md-text>
	</md-dt-td>
	<md-dt-td>
	跳转链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >common_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	公用跳转链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >ios_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	iOS 端跳转链接，当该字段不设置时，iOS 端默认使用 common_url 值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >android_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Android 端跳转链接，当该字段不设置时，Android 端默认使用 common_url 值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >pc_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	PC 端跳转链接，当该字段不设置时，PC 端默认使用 common_url 值。

**说明**：以 `https://applink.feishu.cn/client/web_url/open?mode=sidebar-semi&url=` 开头的链接表示在飞书侧边栏展开。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >web_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Web 端跳转链接，当该字段不设置时，Web 端默认使用 common_url 值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >image_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	图标的 key 值。通过[下载图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/get)接口可将图标下载到本地（只能下载由当前机器人上传的图片）。

**注意**：一级菜单下存在二级菜单时不能设置图标。
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
	菜单名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >i18n_names</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_names</md-text>
	</md-dt-td>
	<md-dt-td>
	菜单国际化名称
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
	中文名
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
	英文名
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
	日文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >children</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_menu_second_level\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	二级菜单列表
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >chat_menu_second_level_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	二级菜单 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >chat_menu_item</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_menu_item</md-text>
	</md-dt-td>
	<md-dt-td>
	二级菜单信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >action_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	菜单类型

**可选值有**：
<md-enum>
<md-enum-item key="NONE" >无类型</md-enum-item>
<md-enum-item key="REDIRECT_LINK" >跳转链接类型</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >redirect_link</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat_menu_item_redirect_link</md-text>
	</md-dt-td>
	<md-dt-td>
	跳转链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >common_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	公用跳转链接
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >ios_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	iOS 端跳转链接，当该字段不设置时，iOS 端默认使用 common_url 值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >android_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Android 端跳转链接，当该字段不设置时，Android 端默认使用 common_url 值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >pc_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	PC 端跳转链接，当该字段不设置时，PC 端默认使用 `common_url` 值。

**说明**：以 `https://applink.feishu.cn/client/web_url/open?mode=sidebar-semi&url=` 开头的链接表示在飞书侧边栏展开。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >web_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Web 端跳转链接，当该字段不设置时，Web 端默认使用 `common_url` 值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >image_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	图标的 key 值。通过[下载图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/get)接口可将图标下载到本地（只能下载由当前机器人上传的图片）。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	菜单名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="5">
	<md-dt-td>
	<md-text type="field-name" >i18n_names</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_names</md-text>
	</md-dt-td>
	<md-dt-td>
	菜单国际化名称
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >zh_cn</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	中文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >en_us</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	英文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="6">
	<md-dt-td>
	<md-text type="field-name" >ja_jp</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	日文名
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
        "menu_tree": {
            "chat_menu_top_levels": [
                {
                    "chat_menu_top_level_id": "7117116451961487361",
                    "chat_menu_item": {
                        "action_type": "NONE",
                        "redirect_link": {
                            "common_url": "https://open.feishu.cn/",
                            "ios_url": "https://open.feishu.cn/",
                            "android_url": "https://open.feishu.cn/",
                            "pc_url": "https://open.feishu.cn/",
                            "web_url": "https://open.feishu.cn/"
                        },
                        "image_key": "img_v2_b0fbe905-7988-4282-b882-82edd010336j",
                        "name": "菜单",
                        "i18n_names": {
                            "zh_cn": "菜单",
                            "en_us": "Menu",
                            "ja_jp": "メニュー"
                        }
                    },
                    "children": [
                        {
                            "chat_menu_second_level_id": "7039638308221468675",
                            "chat_menu_item": {
                                "action_type": "REDIRECT_LINK",
                                "redirect_link": {
                                    "common_url": "https://open.feishu.cn/",
                                    "ios_url": "https://open.feishu.cn/",
                                    "android_url": "https://open.feishu.cn/",
                                    "pc_url": "https://open.feishu.cn/",
                                    "web_url": "https://open.feishu.cn/"
                                },
                                "image_key": "img_v2_b0fbe905-7988-4282-b882-82edd010336j",
                                "name": "报名",
                                "i18n_names": {
                                    "zh_cn": "报名",
                                    "en_us": "Sign up",
                                    "ja_jp": "サインアップ"
                                }
                            }
                        }
                    ]
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
  <md-td>232001</md-td>
  <md-td>Your request contains an invalid request parameter.</md-td>
  <md-td>参数错误，参考接口文档提供的参数描述，检查输入参数是否有误。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232009</md-td>
  <md-td>Your request specifies a chat which has already been dissolved.</md-td>
  <md-td>群组已被解散，无法操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232011</md-td>
  <md-td>Operator can NOT be out of the chat.</md-td>
  <md-td>操作者不在群组中。你需要将当前调用 API 的应用或用户[加入待操作的群组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create)后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232008</md-td>
  <md-td>Your request specifies a chat whose type is NOT supported currently.</md-td>
  <md-td>不支持的群模式（chat_mode）或群类型（chat_type）。你可以调用[获取群信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)接口，查看群信息是否符合当前接口的要求。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232014</md-td>
  <md-td>The token used in the request does NOT have the permissions necessary to complete the request.</md-td>
  <md-td>操作者没有权限进行该操作，请检查是否已开通调用接口所需要的权限。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232024</md-td>
  <md-td>Users do not have the visibility of the app, or the operator does not have collaboration permissions with the target users.</md-td>
  <md-td>机器人对用户没有可见性，或操作者与用户间没有协作权限。

- 如果是机器人对用户没有可见性，需要在[开发者后台](https://open.feishu.cn/app) > **应用详情页** > **应用发布** > **版本管理与发布** 编辑应用对用户的可见性并发布应用。具体操作参考[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。

- 如果是操作者与用户之间没有协作权限，请检查是否与目标用户有协作权限，如屏蔽、未添加为联系人等。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232025</md-td>
  <md-td>Bot ability is not activated.</md-td>
  <md-td>应用未启用机器人能力。你需要登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **应用能力** > **添加应用能力** 页面内，添加 **机器人** 能力，并发布应用使配置生效。具体操作参见[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232033</md-td>
  <md-td>The operator or invited bots does NOT have the authority to manage external chats without the scope.</md-td>
  <md-td>当前被操作的群为外部群，暂不支持操作外部群。只有开启对外共享能力的机器人支持外部群，详情参见[机器人支持外部群和外部用户单聊](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232055</md-td>
  <md-td>The operator does not have chat tab, chat menu, chat widget manage permission</md-td>
  <md-td>没有会话标签页、会话菜单和小组件的管理权限。如果在飞书客户端群设置中 **谁可以管理标签页、小组件和会话菜单** 选择了 **仅群主和管理员**，则只允许群主或者管理员进行操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232073</md-td>
  <md-td>The group menu is being modified, please try again later.</md-td>
  <md-td>群内菜单正在修改中，请稍后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232034</md-td>
  <md-td>The app is unavailable or inactivated by the tenant.</md-td>
  <md-td>应用在本租户下未安装或未启用。需要先安装应用，再使用应用调用接口。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


