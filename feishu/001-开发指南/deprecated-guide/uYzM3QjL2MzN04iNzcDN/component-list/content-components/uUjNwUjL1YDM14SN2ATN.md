<!--
title: 图片
id: 6907569744330948609
fullPath: /ukTMukTMukTM/uUjNwUjL1YDM14SN2ATN
updatedAt: 1724163333000
source: https://open.feishu.cn/document/common-capabilities/message-card/message-cards-content/image-module
-->
# 图片

本文介绍消息卡片搭建工具中的图片组件，以及该组件对应的 JSON 参数说明。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[图片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/image)。
:::
## 注意事项

为保证图片在聊天窗口中呈现的清晰度，建议你在组件中上传的图片遵从以下规范：

* 图片尺寸在 `1500 × 3000 px` 的范围内。
* 文件大小不超过 10 M。
* 建议图片的 `高度:宽度` 不超过 `16:9`。

## 组件展示

在消息卡片搭建工具中，图片组件如下图所示，添加组件后，你可以设置组件的样式、资源以及交互属性。

:::note
**图片资源 key** 是指图片的 image_key。你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传一张用于发送消息的图片，获取返回值中的 image_key。
:::


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7184234790f08042f00248a22f65967a_MrvfPpUDto.png?height=1326&lazyload=true&maxWidth=600&width=2882)

## 参数说明

图片组件包含的参数说明如下表所示。

:::html
<md-table>
    <md-thead>
    <md-tr>
        <md-th style="width: 20%">参数</md-th>
        <md-th style="width: 15%">是否必须</md-th>
        <md-th style="width: 15%">类型</md-th>
        <md-th style="width: 50%">说明</md-th>
    </md-tr>
    </md-thead>
    <md-tbody>
    <md-tr>
        <md-td>tag</md-td>
        <md-td>是</md-td>
        <md-td>String</md-td>
        <md-td>图片组件的标签，固定取值：img。</md-td>
    </md-tr>
    <md-tr>
        <md-td>img_key</md-td>
        <md-td>是</md-td>
        <md-td>String</md-td>
        <md-td>图片资源的 image_key。你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传一张用于发送消息的图片，获取返回值中的 image_key。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>alt</md-td>
        <md-td>是</md-td>
        <md-td>Struct</md-td>
        <md-td>
悬浮（hover）图片时弹出的说明文案。使用文本组件的数据结构展示文案，详情参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。当文本组件的 `content` 参数取值为空时，不展示图片文案内容。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>title</md-td>
        <md-td>否</md-td>
        <md-td>Struct</md-td>
        <md-td>图片标题。使用文本组件的数据结构展示内容，数据结构参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。</md-td>
    </md-tr>
    <md-tr>
        <md-td>custom_width</md-td>
        <md-td>否</md-td>
        <md-td>int</md-td>
        <md-td>
自定义图片的最大展示宽度，支持在 278px ~ 580px 范围内指定最大展示宽度。

默认情况下图片宽度与图片组件所占区域的宽度一致。

<md-alert type="tip">
注意：该参数在飞书 V4.0 以上版本生效。
</md-alert>
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>compact_width</md-td>
        <md-td>否</md-td>
        <md-td>Boolean</md-td>
        <md-td>
是否展示为紧凑型的图片。

默认值为 `false`。如果配置为 `true`，则展示最大宽度为 278px 的紧凑型图片。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>mode</md-td>
        <md-td>否</md-td>
        <md-td>String</md-td>
        <md-td>
图片显示模式。取值：
* **crop_center**：居中裁剪模式，对长图会限高，并居中裁剪后展示。
* **fit_horizontal**：平铺模式，宽度撑满卡片完整展示上传的图片。
* **large**：大图，尺寸为 160 × 160，适用于多图混排。
* **medium**：中图，尺寸为 80 × 80，适用于图文混排的封面图。
* **small**：小图，尺寸为 40 × 40，适用于人员头像。         
* **tiny**：超小图，尺寸为 16 × 16，适用于图标、备注。             
<md-alert type="tip">
注意：设置该参数后，会覆盖 `custom_width` 参数。更多信息参见[消息卡片设计规范](/ssl:ttdoc/ukTMukTMukTM/ugDOwYjL4gDM24CO4AjN)。
</md-alert>
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>preview</md-td>
        <md-td>否</md-td>
        <md-td>Boolean</md-td>
        <md-td>
点击后是否放大图片。

默认值为 `true`，即点击后放大图片。如果你为卡片配置了 [消息卡片跳转链接](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#7bfe6950)，可将该参数设置为 `false`，后续用户点击卡片上的图片也能响应 card_link 链接跳转。
        </md-td>
    </md-tr>
    </md-tbody>
</md-table>
:::

## 卡片示例


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/748bd21b1ec5bca4cdaf456af9358575_mNTUUtYa7w.png?height=532&lazyload=true&maxWidth=600&width=1202)

JSON 示例配置如下：

```JSON
{
  "elements": [
    {
      "tag": "img",
      "title": {
        "tag": "plain_text",
        "content": "Block-img"
      },
      "img_key": "img_v3_0258_b1f0530f-b16a-413d-92f3-a46exxxx",
      "mode": "fit_horizontal",
      "alt": {
        "tag": "plain_text",
        "content": "Hover图片后的tips提示，不需要可以传空"
      },
      "compact_width": false
    }
  ]
}
```
