<!--
title: 备注
id: 7343499772501164036
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/note
updatedAt: 1741082703000
source: https://open.feishu.cn/document/feishu-cards/card-components/content-components/note
-->
# 备注组件

你可以使用备注组件展示卡片内的一些次要信息，用于辅助说明。备注组件支持添加图标、图片以及文本。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4ebb52dffa92f1e1815cfd28603052b1_epLOLnCQrG.png?height=175&lazyload=true&maxWidth=500&width=1051)

## 注意事项
[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)不再支持备注（note）组件。你可使用[普通文本](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/plain-text)组件配置 notation 字号、使用 grey 字体颜色和 icon 属性替代。

## JSON 结构

备注组件的完整 JSON 数据如下所示：
```json
{
    "tag": "note", // 组件的标签。
    "elements": [ // 备注信息。支持添加图标、图片以及文本。
        {
            "tag": "standard_icon", // 图标类型。
            "token": "chat-forbidden_outlined", // 图标的 token。仅在 tag 为 standard_icon 时生效。
            "color": "orange", // 图标颜色。仅在 tag 为 standard_icon 时生效。
            "img_key": "img_v2_38811724" // 图片的 key。仅在 tag 为 custom_icon 时生效。
        },
        {
            "tag": "plain_text" // 文本类型的标签。
            "content": "", // 文本内容。当 tag 为 lark_md 时，支持部分 Markdown 语法的文本内容。
        }
    ]
}
```

## 字段说明

备注组件的字段说明如下表。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">字段</md-th>
      <md-th style="width: 17%;">是否必填</md-th>
      <md-th>类型</md-th>
      <md-th>默认值</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        组件的标签。备注模块组件的固定值为 `note`。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>elements</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>/</md-td>
      <md-td>
        配置卡片的备注模块信息。支持添加图标、图片以及文本。
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::
备注组件支持添加图标、图片以及文本，其中，图标的字段说明如下表。


:::html
<md-table>
 <md-thead>
    <md-tr>
      <md-th style="width: 20%;">字段</md-th>
      <md-th style="width: 17%;">是否必填</md-th>
      <md-th>类型</md-th>
      <md-th>默认值</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>tag</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        图标类型的标签。可取值：
- `standard_icon`：使用图标库中的图标
 - `custom_icon`：使用用自定义图片作为图标
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>token</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        图标库中图标的 token。当 `tag` 为 `standard_icon` 时生效。枚举值参见[图标库](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-icons)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>color</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        图标的颜色。支持设置线性和面性图标（即 token 末尾为 `outlined` 或 `filled` 的图标）的颜色。当 `tag` 为 `standard_icon` 时生效。枚举值参见[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>img_key</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        自定义前缀图标的图片 key。当 `tag` 为 `custom_icon` 时生效。

图标 key 的获取方式：调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传用于发送消息的图片，并在返回值中获取图片的 image_key。
      </md-td>
    </md-tr>
 
      </md-tbody>
</md-table>
:::

备注组件支持添加图标、图片以及文本，其中，图片的字段说明如下表。


:::html
<md-table>
 <md-thead>
    <md-tr>
      <md-th style="width: 20%;">字段</md-th>
      <md-th style="width: 17%;">是否必填</md-th>
      <md-th>类型</md-th>
      <md-th>默认值</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
  
    <md-tr>
      <md-td>tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>img</md-td>
      <md-td>
        图片组件的标签。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>img_key</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>
        图片资源的 Key。你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口或在搭建工具中上传图片，获取图片的 key。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>alt</md-td>
      <md-td>是</md-td>
      <md-td>Struct</md-td>
      <md-td>/</md-td>
      <md-td>
        悬浮（hover）在图片上时展示的说明文案。示例值：
```json
"alt": {
        "tag": "plain_text",
        "content": "悬浮（hover）在图片上时展示的说明文案，不需要可以传空"
      }
```
      </md-td>
    </md-tr>
      </md-tbody>
</md-table>
:::

备注组件支持添加图标、图片以及文本，其中，文本的字段说明如下表。


:::html
<md-table>
<md-thead>
<md-tr>
<md-th>字段名称</md-th>
<md-th>是否必填</md-th>
<md-th>类型</md-th>
<md-th>默认值</md-th>
<md-th style="width: 50%;">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>文本类型的标签。可取值：
- `plain_text`：备注模块内容
- `lark_md`：支持部分 Markdown 语法的文本内容。详情参考 [普通文本](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/plain-text)组件中 **lark_md 支持的 Markdown 语法** 一节。
  
<b>注意</b>：飞书卡片搭建工具中仅支持使用 `plain_text` 类型的备注模块组件。你可使用富文本组件添加 Markdown 格式的文本。</md-td>
</md-tr>
<md-tr>
<md-td>content</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>文本内容。当 `tag` 为 `lark_md` 时，支持部分 Markdown 语法的文本内容。详情参考 [普通文本](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/plain-text)组件中 **lark_md 支持的 Markdown 语法** 一节。</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

## 示例代码

以下的 JSON 示例代码可实现如下图所示的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4ebb52dffa92f1e1815cfd28603052b1_HGJVGGS4ev.png?height=175&lazyload=true&maxWidth=500&width=1051)
```json
{
  "elements": [
    {
      "tag": "note",
      "elements": [
        {
          "tag": "custom_icon",
          "token": "chat-forbidden_outlined",
          "img_key": "img_v2_041b28e3-5680-48c2-9af2-497ace79333g"
        },
        {
          "tag": "plain_text",
          "content": "备注信息1"
        },
        {
          "tag": "img",
          "img_key": "img_v2_041b28e3-5680-48c2-9af2-497ace79333g",
          "alt": {
            "tag": "plain_text",
            "content": "这是备注图片"
          }
        },
        {
          "tag": "plain_text",
          "content": "备注信息2"
        }
      ]
    }
  ]
}
```