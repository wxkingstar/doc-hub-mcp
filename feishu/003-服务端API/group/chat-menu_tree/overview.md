<!--
title: 群菜单概述
id: 7174746098262622212
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/overview
updatedAt: 1730259179000
source: https://open.feishu.cn/document/server-docs/group/chat-menu_tree/overview
-->
# 群菜单概述

你可以在群组内设置自定义菜单，方便群成员快速访问特定链接或者执行特定操作。群菜单分为一级菜单和二级菜单，通过 OpenAPI 你可以添加、删除、修改或者查询群菜单。

核心字段与功能图示如下：

| 字段         | 描述        |
| --------- | --------------- | -------   | ----------- | --------- |
|`menu_tree` | 菜单树，由若干一级菜单组成。 |
|`chat_menu_top_level` | 一级菜单，一个群内最多有 3 个一级菜单，每个一级菜单可以存在 0 到 5 个二级菜单。如下图所示（以飞书移动端群组为例），①为带二级菜单的一级菜单、②为不带二级菜单的一级菜单、③为依附于一级菜单的若干二级菜单。 |
|`chat_menu_second_level` | 二级菜单，依附于一级菜单。|
|`chat_menu_item` | 菜单元信息，通过该字段设置各个菜单的名称、图标以及跳转链接等信息。 |



![20221208-111413.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b1dd1209d8cb73e4488d689920267364_0eF9zN4ZhW.png?height=1624&lazyload=true&maxWidth=350&width=750)

## 使用限制

一个群内最多可添加 3 个一级菜单，每个一级菜单可以添加 0 ~ 5 个二级菜单。

## 字段说明

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
	<md-text type="field-name" >menu_tree</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >chat.menu_tree</md-text>
	</md-dt-td>
	<md-dt-td>
	菜单树，由若干一级菜单组成
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >chat_menu_top_level_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	一级菜单的 ID，添加群菜单时由系统自动生成。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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


<md-dt-tr level="3">
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

**注意**：如果一级菜单有二级菜单时，则此一级菜单的值必须为 `NONE`。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
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


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >common_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	公用跳转链接，必须以 http/https 开头。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >ios_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	iOS 端跳转链接，当该字段不设置时，iOS 端默认使用 `common_url` 值。必须以 http/https 开头。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >android_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Android 端跳转链接，当该字段不设置时，Android 端默认使用 `common_url` 值。必须以 http/https 开头。
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
	PC 端跳转链接，当该字段不设置时，PC 端默认使用 `common_url` 值。必须以 http/https 开头。
	
**使用说明**：在 PC 端点击群菜单后，如果需要 url 对应的页面在飞书侧边栏展开，可以在 url 前加上 `https://applink.feishu.cn/client/web_url/open?mode=sidebar-semi&url=`，例如 `https://applink.feishu.cn/client/web_url/open?mode=sidebar-semi&url=https://open.feishu.cn/`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="4">
	<md-dt-td>
	<md-text type="field-name" >web_url</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	Web 端跳转链接，当该字段不设置时，Web 端默认使用 `common_url` 值。必须以 http/https 开头。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >image_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	一级菜单图标的 key 值。通过 [上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create) 接口上传 message 类型图片获取 image_key，并传入该值。

**注意**：如果一级菜单有二级菜单，则此一级菜单不能设置图标。
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
	菜单名称

**注意**：一级、二级菜单名称字符数要在 1 ~ 120 范围内
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >i18n_names</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >i18n_names</md-text>
	</md-dt-td>
	<md-dt-td>
	菜单国际化名称

**注意**：一级、二级菜单名称字符数要在 1 ~ 120 范围内
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
	中文名
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
	英文名
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
	日文名
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
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


<md-dt-tr level="3">
	<md-dt-td>
	<md-text type="field-name" >chat_menu_second_level_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	二级菜单的 ID，添加群菜单时由系统自动生成。
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
	二级菜单信息
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
<md-enum-item key="NONE" >无类型</md-enum-item>
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
	公用跳转链接，必须以 http/https 开头。
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
	iOS 端跳转链接，当该字段不设置时，iOS 端默认使用 common_url 值。必须以 http/https 开头。
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
	Android 端跳转链接，当该字段不设置时，Android 端默认使用 common_url 值。必须以 http/https 开头。
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
	PC 端跳转链接，当该字段不设置时，PC 端默认使用 common_url 值。必须以 http/https 开头。
	
**使用说明**：在 PC 端点击群菜单后，如果需要 url 对应的页面在飞书侧边栏展开，可以在 url 前加上 `https://applink.feishu.cn/client/web_url/open?mode=sidebar-semi&url=`，例如 `https://applink.feishu.cn/client/web_url/open?mode=sidebar-semi&url=https://open.feishu.cn/`
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
	Web 端跳转链接，当该字段不设置时，Web 端默认使用 common_url 值。必须以 http/https 开头。
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
	二级菜单图标的 key 值。通过 [上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create) 接口上传 message 类型图片获取 image_key，并传入该值。

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

**注意**：一级、二级菜单名称字符数要在 1 ~ 120 范围内。
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

**注意**：一级、二级菜单名称字符数要在 1 ~ 120 范围内。
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


  </md-dt-tbody>
</md-dt-table>
:::

## 数据示例

```json
{
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
```
