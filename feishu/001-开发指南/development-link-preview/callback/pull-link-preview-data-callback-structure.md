<!--
title: 拉取链接预览数据
id: 7338430742971006980
fullPath: /uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure
updatedAt: 1744859745000
source: https://open.feishu.cn/document/development-link-preview/callback/pull-link-preview-data-callback-structure
-->
# 拉取链接预览数据

**拉取链接预览数据** 回调作用于应用的链接预览能力。当企业内发布了具备链接预览能力的应用后，企业成员在飞书客户端查看、发送链接时，如果链接命中了应用注册的 URL 规则，则应用会向指定的回调地址发送 **拉取链接预览数据** 回调。你需要在对应的业务服务器内接收回调请求，并在 3 秒内响应回调请求，飞书客户端会根据响应数据渲染链接预览效果。

:::note
需应用配置并生效链接预览能力后，回调才可以推送生效。
:::

## 回调

:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本信息</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>回调类型</md-th>
      <md-td>url.preview.get</md-td>
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
            <md-tooltip type="info">订阅该事件所需的权限，开启其中任意一项权限即可订阅</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
    </md-th>
      <md-td>
暂无
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
          字段权限要求
      </md-th>
      <md-td>
<md-alert type="tip" icon="none">
        事件结构体中存在 `user_id` 敏感字段，仅当应用开启以下权限后才会返回。如果无需获取该字段，则不建议申请。
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>推送方式</md-th>
      <md-td>
            <md-tag mode="inline" type="push-webhook" href="/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM" >Webhook</md-tag>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 结构体

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th>字段</md-dt-th>
<md-dt-th>数据类型</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>

<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>schema</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调的版本。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>header</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>回调的基本信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>event_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调的唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用的 Verification Token。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>create_time</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调发送的时间。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>event_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调类型。拉取链接预览场景中，固定为 `"url.preview.get"`。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>tenant_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用归属的 tenant key，即租户唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>app_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用的App ID。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>event</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>回调的详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>operator</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>回调触发者信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>tenant_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调触发者的 tenant key，即租户唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调触发者的 user_id。了解不同的用户 ID，参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>open_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调触发者的 open_id。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>host</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>链接预览展示的场景。可能值:
- im_message：会话消息
- im_top_notice：群置顶
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>context</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>场景上下文。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>预览链接。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>preview_token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>预览 Token。该 Token 用于调用[更新 URL 预览](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/im-v2/url_preview/batch_update)接口，主动更新 URL 预览。

**注意**：
  
- 同一条消息的同一个链接可能会触发多次拉取链接预览数据回调（例如多端登录飞书查看消息、群聊内多个用户查看消息等），这些回调包含的 preview_token 值相同。

- 消息发送后才会产生 preview_token，因此，临时预览场景（即在会话输入框输入链接，但消息还未发送时），不会产生 preview_token。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>open_message_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>链接所在的消息 ID。
  
**注意**：临时预览场景（即在会话输入框输入链接，但消息还未发送时）open_message_id 为空值。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>open_chat_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>链接所在的会话 ID。
  
**注意**：临时预览场景（即在会话输入框输入链接，但消息还未发送时）open_chat_id 为空值。</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

## 回调结构体示例

```json
{
    "schema": "2.0",
    "header": {
        "event_id": "f7984f25108f8137722bb63cee92xxxx",
        "token": "066zT6pS4QCbgj5Do145GfDbbagCxxxx",
        "create_time": "1603977298000000",
        "event_type": "url.preview.get",
        "tenant_key": "xxxxxxx",
        "app_id": "cli_xxxxxxxx"
    },
    "event": {
        "operator": {
            "tenant_key": "xxxxxxx",
            "user_id": "xxxxxxx",
            "open_id": "ou_xxx"
        },
        "host": "im_message",
        "context": {
            // url相关参数
            "url": "xxx",
            "preview_token": "xxx",
            "open_message_id": "om_xxx",
            "open_chat_id": "oc_xxx"
        }
    }
}
```

## 响应回调的结构体

当你在自建的业务服务器中接收 **拉取链接预览数据** 回调请求时，需要在 3 秒内响应该请求，飞书客户端会根据响应数据渲染链接预览效果。相应回调的结构体如下表所示。

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width:30%">字段</md-dt-th>
<md-dt-th style="width:20%">是否必选</md-dt-th>
<md-dt-th style="width:10%">数据类型</md-dt-th>
<md-dt-th style="width:40%">描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>

<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>inline</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>链接预览数据。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>title</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>链接预览的标题。
<md-alert type="tip" icon="none">
**说明**：该参数与 `i18n_title` 同时设置时，优先生效 `i18n_title`。
</md-alert>
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>i18n_title</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>Map</md-dt-td>
<md-dt-td>链接预览的多语言标题。
<md-alert type="tip" icon="none">
**说明**：该参数与 `title` 同时设置时，优先生效 `i18n_title`。
</md-alert>  
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>key</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>语言。可选值：
- zh_cn：简体中文
- zh_tw：繁体中文（中国台湾）
- zh_hk：繁体中文（中国香港）
- en_us：英语
- ja_jp：日语
- fr_fr：法语
- hi_in：印地语
- id_id：印度尼西亚语
- it_it：意大利语
- ko_kr：韩语
- pt_br：葡萄牙语（巴西）
- ru_ru：俄语
- th_th：泰语
- vi_vn：越南语
- de_de：德语
- es_es：西班牙语
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>value</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>语言对应的标题。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>image_key</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>链接的前缀图标对应的 image_key。你可以通过[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传一张用于发送消息的图片，并在返回结果中获取 image_key。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>url</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>链接预览地址。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>copy_url</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>在消息中复制链接所获取到的 URL。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>ios</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>iOS 跳转 URL。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>android</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>Android 跳转 URL。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>pc</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>PC 端跳转 URL。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>web</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>Web 跳转 URL。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>card</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>卡片数据。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>card 内必填</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>卡片类型。可选值：
- template：卡片模板类型，即通过卡片 ID、版本号定位卡片。
- raw：卡片 JSON，通过完整的卡片 JSON 构建卡片。

了解如何构建卡片，参见[构建卡片内容](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/build-card-content)。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>data</md-dt-td>
<md-dt-td>card 内必填</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>卡片内容。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>template_id</md-dt-td>
<md-dt-td>template 类型必填</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>卡片模板 ID。模板类型卡片使用的字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>template_variable</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>Map</md-dt-td>
<md-dt-td>卡片模板变量。模板类型卡片使用的字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>template_version_name</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>卡片模版版本。模板类型卡片使用的字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>config</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>卡片配置。raw 类型卡片使用的字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>elements</md-dt-td>
<md-dt-td>raw 类型必填</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>卡片组件。raw 类型卡片使用的字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>header</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>卡片标题。raw 类型卡片使用的字段。</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

## 响应回调结构体示例

```json
{
    "inline": {
        "i18n_title": {
            "zh_cn": "smart card test click jump & rich text"
        },
        "image_key": "img_v3_025m_5xxxxxf9-ed30-4980-afff-827e13d8xxxx"
    },
    "card": {
        "type": "template",
        "data": {
            "template_id": "AAqVG2xxxxxBS",
            "template_version_name": "1.0.0",
            "template_variable": {}
        }
    }
}
```