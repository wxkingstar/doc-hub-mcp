<!--
title: 标题
id: 7343499772500934660
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/title
updatedAt: 1741856171000
source: https://open.feishu.cn/document/feishu-cards/card-components/content-components/title
-->
# 标题组件

卡片的标题组件支持添加卡片主标题、副标题、后缀标签和标题图标。

本文档介绍标题组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[标题](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/title)。


![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e25a93c55a2992fb15573246ccf5d12d_tOm7v3g7k3.png?height=231&lazyload=true&maxWidth=500&width=1099)

## 注意事项

同一张卡片仅支持添加一个标题组件。

## 组件属性

### JSON 结构

标题的完整 JSON 数据如下所示：

```json
{
  "header": {
    "title": {
      // 卡片主标题。必填。
      "tag": "plain_text",  // 固定值 plain_text。
      "content": "示例标题", // 主标题内容。
      "i18n": {
        // 多语言标题内容。必须配置 content 或 i18n 两个属性的其中一个。如果同时配置仅生效 i18n。
        "zh_cn": "",
        "en_us": "",
        "ja_jp": "",
        "zh_hk": "",
        "zh_tw": ""
      }
    },
    "subtitle": {
      // 卡片副标题。可选。
      "tag": "plain_text",  // 固定值 plain_text。
      "content": "示例文本", // 副标题内容。
      "i18n": {
       // 多语言副标题内容。必须配置 content 或 i18n 两个属性的其中一个。如果同时配置仅生效 i18n。
        "zh_cn": "",
        "en_us": "",
        "ja_jp": "",
        "zh_hk": "",
        "zh_tw": ""
      }
    },
    "text_tag_list": [
      // 标题后缀标签，最多设置 3 个 标签，超出不展示。可选。
      {
        "tag": "text_tag",
        "text": {
          // 标签内容
          "tag": "plain_text",
          "content": "标签 1"
        },
        "color": "neutral" // 标签颜色
      }
    ],
    "i18n_text_tag_list": {
      // 国际化标题后缀标签。每个语言环境最多设置 3 个 tag，超出不展示。可选。同时配置原字段和国际化字段，优先生效国际化配置。
      "zh_cn": [],
      "en_us": [],
      "ja_jp": [],
      "zh_hk": [],
      "zh_tw": []
    },
    "template": "blue", // 标题主题颜色。支持 "blue"|"wathet"|"turquoise"|"green"|"yellow"|"orange"|"red"|"carmine"|"violet"|"purple"|"indigo"|"grey"|"default"。默认值 default。
    "icon": {
      // 自定义前缀图标
      "img_key": "img_v2_38811724" // 用作前缀图标的图片 key
    },
    "ud_icon": {
      // 图标库中的前缀图标，和 icon 同时设置时以 ud_icon 为准
      "token": "chat-forbidden_outlined", // 图标的 token
      "style": {
        "color": "red"  // 图标颜色。支持设置线性和面性图标（即 token 末尾为 `outlined` 或 `filled` 的图标）的颜色。
      }
    }
  }
}
```

### 字段说明

标题组件的字段说明如下表。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th>字段名称</md-th>
      <md-th>是否必填</md-th>
      <md-th>类型</md-th>
      <md-th style="width: 60%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>title</md-td>
      <md-td>是</md-td>
      <md-td>Object</md-td>
      <md-td>配置卡片的主标题信息。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>文本标识。固定取值为 `plain_text`。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ content</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>卡片主标题内容。注意：
- 必须配置 content 或 i18n 两个属性的其中一个。如果同时配置仅生效 i18n。
- 主标题内容最多四行，超出四行的内容用 `...` 省略。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ i18n</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>多语言标题内容，支持设置的多语言枚举值如下：
- zh_cn：简体中文
- en_us：英文
- ja_jp：日文
- zh_hk：繁体中文（中国香港）
- zh_tw：繁体中文（中国台湾）
- id_id: 印尼语
- vi_vn: 越南语
- th_th: 泰语
- pt_br: 葡萄牙语
- es_es: 西班牙语
- ko_kr: 韩语
- de_de: 德语
- fr_fr: 法语
- it_it: 意大利语
- ru_ru: 俄语
- ms_my: 马来语

示例配置：
```json
{ 
    "zh_cn": "这是主标题", 
    "en_us": "It is the title"
}
```
注意：
- 必须配置 content 或 i18n 两个属性的其中一个。如果同时配置仅生效 i18n。
- 主标题内容最多四行，超出四行的内容用 `...` 省略。</md-td>
    </md-tr>
    <md-tr>
      <md-td>subtitle</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>配置卡片的副标题信息。

**注意**：不允许只配置副标题内容。如果只配置副标题，则实际展示为主标题效果。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>文本标识。固定取值为 `plain_text`。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ content</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>卡片副标题内容。注意：
- 必须配置 content 或 i18n 两个属性的其中一个。如果同时配置仅生效 i18n。
- 副标题内容最多一行，超出一行的内容用 `...` 省略。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ i18n</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>多语言标题内容，支持设置的多语言枚举值如下：
- zh_cn：简体中文
- en_us：英文
- ja_jp：日文
- zh_hk：繁体中文（中国香港）
- zh_tw：繁体中文（中国台湾）
- id_id: 印尼语
- vi_vn: 越南语
- th_th: 泰语
- pt_br: 葡萄牙语
- es_es: 西班牙语
- ko_kr: 韩语
- de_de: 德语
- fr_fr: 法语
- it_it: 意大利语
- ru_ru: 俄语
- ms_my: 马来语

示例配置：
```json
{
 "zh_cn": "这是副标题",
 "en_us": "It is the sub-title"
}
```
注意：
- 必须配置 content 或 i18n 两个属性的其中一个。如果同时配置仅生效 i18n。
- 副标题内容最多一行，超出一行的内容用 `...` 省略。</md-td>
    </md-tr>
        <md-tr>
      <md-td>text_tag_list</md-td>
      <md-td>否</md-td>
      <md-td>TextTagList</md-td>
      <md-td>添加标题的后缀标签。最多可添加 3 个标签内容，如果配置的标签数量超过 3 个，则取前 3 个标签进行展示。标签展示顺序与数组顺序一致。

**注意**：
- 标题标签在飞书 V6.11 及以上版本开始生效。在旧版本客户端内将不会展示标题标签内容。
- `text_tag_lis`t 和 `i18n_text_tag_list` 只能配置其中之一。如果同时配置仅生效 `i18n_text_tag_list`。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>后缀标签的标识。固定取值：text_tag。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ text</md-td>
      <md-td>否</md-td>
      <md-td>Text Object</md-td>
      <md-td>后缀标签的内容。基于文本组件的 plain_text 模式定义内容。
示例值：
```JSON
"text": {
          "tag": "plain_text",
          "content": "这里是标签"
        }
```
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>└ color</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>后缀标签的颜色，默认为蓝色（blue）。可选值与示例效果参见下文的后缀标签颜色枚举。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>i18n_text_tag_list</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>配置后缀标签的多语言属性，在所需语种字段下添加完整的后缀标签结构体即可。每个语言最多可配置 3 个标签内容，如果配置的标签数量超过 3 个，则取前 3 个标签进行展示。标签展示顺序与数组顺序一致。支持设置的多语言枚举值如下：
- zh_cn：简体中文
- en_us：英文
- ja_jp：日文
- zh_hk：繁体中文（中国香港）
- zh_tw：繁体中文（中国台湾）
- id_id: 印尼语
- vi_vn: 越南语
- th_th: 泰语
- pt_br: 葡萄牙语
- es_es: 西班牙语
- ko_kr: 韩语
- de_de: 德语
- fr_fr: 法语
- it_it: 意大利语
- ru_ru: 俄语
- ms_my: 马来语

示例配置：
```json
"i18n_text_tag_list": {
      "zh_cn": [
        {
          "tag": "text_tag",
          "text": {
            "tag": "plain_text",
            "content": "标签内容"
          },
          "color": "carmine"
        }
      ],
      "en_us": [
        {
          "tag": "text_tag",
          "text": {
            "tag": "plain_text",
            "content": "Tag content"
          },
          "color": "carmine"
        }
      ]
    }
```
**注意**：
- 标题标签在飞书 V6.11 及以上版本开始生效。在旧版本客户端内将不会展示标题标签内容。
- `text_tag_list` 和 `i18n_text_tag_list` 只能配置其中之一。如果同时配置两个字段，则优先生效多语言配置。</md-td>
    </md-tr>
    <md-tr>
      <md-td>template</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>配置标题主题颜色。可选值与示例效果参见下文的标题主题样式枚举。</md-td>
    </md-tr>
    <md-tr>
      <md-td>icon</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>通过上传图片，自定义标题的前缀图标。

**注意**：
一个卡片仅可配置一个标题图标。如果同时配置 `icon` 和 `ud_icon`，仅生效 `ud_icon`。</md-td>
    </md-tr><md-tr>
      <md-td>└ img_key</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>自定义前缀图标的图片 key。

图标 key 的获取方式：调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create))接口，上传用于发送消息的图片，并在返回值中获取图片的 image_key。</md-td>
    </md-tr>
    <md-tr>
      <md-td>ud_icon</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>添加图标库中已有的图标。

**注意**：一个卡片仅可配置一个标题图标。如果同时配置 `icon` 和 `ud_icon`，仅生效 `ud_icon`。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ token</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>图标库中图标的 token。枚举值参见[图标库](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-icons)。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ style</md-td>
      <md-td>否</md-td>
      <md-td>Object</md-td>
      <md-td>图标的样式。支持自定义图标颜色。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└└ color</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>图标的颜色。支持设置线性和面性图标（即 token 末尾为 `outlined` 或 `filled` 的图标）的颜色。默认为 `template` 字段设置的颜色。枚举值参见[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。

**注意**：搭建工具暂不支持自定义图标颜色。</md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::

### 示例代码

以下的 JSON 示例代码可实现如下图所示的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e25a93c55a2992fb15573246ccf5d12d_EMKfJRUbvN.png?height=231&lazyload=true&maxWidth=500&width=1099)

```json
{
  "config": {},
  "card_link": {
    "url": "",
    "pc_url": "",
    "ios_url": "",
    "android_url": ""
  },
  "i18n_elements": {
    "zh_cn": [
      {
        "tag": "column_set",
        "flex_mode": "none",
        "horizontal_spacing": "default",
        "background_style": "default",
        "columns": [
          {
            "tag": "column",
            "elements": [
              {
                "tag": "div",
                "text": {
                  "tag": "plain_text",
                  "content": "普通文本示例",
                  "text_size": "normal",
                  "text_align": "left",
                  "text_color": "default"
                }
              }
            ],
            "width": "weighted",
            "weight": 1
          }
        ]
      }
    ]
  },
  "header": {
    "title": {
      "tag": "plain_text",
      "content": "卡片主标题"
    },
    "subtitle": {
      "tag": "plain_text",
      "content": "卡片副标题"
    },
    "text_tag_list": [
      {
        "tag": "text_tag",
        "text": {
          "tag": "plain_text",
          "content": "后缀标签1"
        },
        "color": "turquoise"
      },
      {
        "tag": "text_tag",
        "text": {
          "tag": "plain_text",
          "content": "后缀标签2"
        },
        "color": "orange"
      },
      {
        "tag": "text_tag",
        "text": {
          "tag": "plain_text",
          "content": "后缀标签3"
        },
        "color": "indigo"
      }
    ],
    "template": "blue",
    "ud_icon": {
      "token": "larkcommunity_colorful"
    }
  }
}
```

## 枚举

### 标题主题样式枚举

标题组件中的 `template` 字段决定了卡片的标题主题样式。你可参考下表了解 `template` 的枚举值和对应的主题样式。
| 枚举值       | 主题样式示例                                                                                                                                                                                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blue      | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0218ae6ce097798e66a7e935dd6c3fda_Qp3mGHzkAo.png?height=207&lazyload=true&width=1080) |
| wathet    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bbbbb1f21738968a210e3cd58f0ceac2_p0k04F30KQ.png?height=205&lazyload=true&width=1079) |
| turquoise | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6c429bdc5d5b3b3fc67b1c348b15c5c9_ao09ktRD5Z.png?height=210&lazyload=true&width=1077) |
| green     | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f19571778454b391c86e8faecb8b9fce_mLGWe9iNaH.png?height=209&lazyload=true&width=1078) |
| yellow    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/44ad929b370b06263ec09721ffde9fc2_OWDuBGcq9e.png?height=206&lazyload=true&width=1076) |
| orange    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fddc48c22042f19def30a5ee9733940b_gz8S2BRH7t.png?height=207&lazyload=true&width=1074) |
| red       | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c5c3959cbcbe8de8d3173c4a15fdf19b_VTI955Zjl2.png?height=206&lazyload=true&width=1075) |
| carmine   | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f09a3ba6147dde821773dd612b0aedad_SGoLqjOAOD.png?height=203&lazyload=true&width=1078) |
| violet    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9a13454a291cfa794a3a52306b603d68_RMp6KbXSEh.png?height=207&lazyload=true&width=1078) |
| purple    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6845c6201575755e1684f149dc4a6772_xbdf7MlcdA.png?height=204&lazyload=true&width=1078) |
| indigo    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/36584f3f1ebf1838fa77db88413ba987_BOfl7QDd6J.png?height=206&lazyload=true&width=1074) |
| grey      | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/97c72de5dbe7161c054790bffc947271_kno5sxKnBD.png?height=205&lazyload=true&width=1078) |
| default   | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f70ac3db3dab7db2096c7c23bcd04c99_Jr1xOkCYFB.png?height=183&lazyload=true&width=1074) |

### 后缀标签颜色枚举

标题的后缀标签的颜色样式由`text_tag_list` 或 `i18n_text_tag_list` 中的 `color` 字段定义，该字段支持的枚举值与示例样式如下表所示。
| 枚举值       | 颜色效果                                                                                                                                                                                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| neutral   | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/761076b831c55c5f94d2b56ebe8c04d9_TTBEjJgwKD.png?height=68&lazyload=true&width=84) |
| blue      | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/827883431ea1e65e5fcd73638cbb999a_4dFihzf2Sn.png?height=58&lazyload=true&width=92) |
| turquoise | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c5f286dc2f7dc0b3a95b62f27bda62e9_TmN1D8GQCa.png?height=70&lazyload=true&width=96) |
| lime      | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/27dc172e5609fdc99d2a7e96c4a06c6f_rFFqBfYZla.png?height=74&lazyload=true&width=86) |
| orange    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/de108549d5b5c764994b540ecbb1353c_8ASPz3ARBu.png?height=78&lazyload=true&width=104) |
| violet    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6ff286b66137b37745bd2e04cb5fbd1a_aawz4Ny9BN.png?height=80&lazyload=true&width=94) |
| indigo    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ec24fb4da8d29c525505ab9db678694c_XG15qZBHv7.png?height=74&lazyload=true&width=108) |
| wathet    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/92241eb6dc69a648dd13bbac2bfe81fb_HAWERN9Msj.png?height=62&lazyload=true&width=94) |
| green     | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3c5c32b28dc75e5a6ca52f96d60e188a_2PACPcYXge.png?height=78&lazyload=true&width=102) |
| yellow    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f576ac38660f0a85ad22d66bdcaab9a2_6upVXxpn7E.png?height=60&lazyload=true&width=100) |
| red       | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/749a6988820ac78f7155f3f69bbc066b_N0TSK4RTdf.png?height=66&lazyload=true&width=98) |
| purple    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e9aab9cb74258a506f66321fb085c144_xaCCNcz29R.png?height=88&lazyload=true&width=92) |
| carmine   | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/99ff5fbe1d5d92fce54c99bd6fecd5c2_HAymg3iX4b.png?height=70&lazyload=true&width=100) |

### 图标枚举

查看字段 `ud_icon` 的枚举，参考[图标库](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-icons)。

### 图标颜色枚举

你可通过 `ud_icon` 中的 `color` 字段设置图标颜色。查看 `color` 枚举，参考[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。

## 标题主题样式建议

在群聊中，可使用彩色标题。对于需高亮提醒的卡片信息，可将标题配置为应用的品牌色或表达状态的语义色，增强信息的视觉锚点。
在单聊中，建议根据卡片的状态配置标题样式。你可以参考以下示例，配置不同语义下的主题样式。
| **样式颜色**   | **语义** | **示例**                                                                                                                                                                                                                                                     |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 绿色（green）  | 完成或成功。 | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a31e60bfc5fb550252b6f42bebcc4662_zWVSUkjCWn.png?height=392&lazyload=true&width=3278) |
| 橙色（orange） | 警告或警示。 | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ff8c11ce1d512ff0dde102e7fe2a396b_hhWyoZJQqH.png?height=396&lazyload=true&width=3278) |
| 红色（red）    | 错误或异常。 | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/23fac81e7e6e1c0e0a7a3e80656aa196_CNFgcj7WF7.png?height=160&lazyload=true&width=1222) |
| 灰色（grey）   | 失效。    | ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/641178505b8a01e1b1be859d8453330d_cZIp2uZa3G.png?height=150&lazyload=true&width=1218)