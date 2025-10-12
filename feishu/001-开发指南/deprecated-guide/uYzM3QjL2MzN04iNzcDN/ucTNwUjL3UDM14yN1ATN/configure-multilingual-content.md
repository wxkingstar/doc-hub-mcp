<!--
title: 配置多语言内容
id: 6991756415594250242
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configure-multilingual-content
updatedAt: 1724163021000
source: https://open.feishu.cn/document/common-capabilities/message-card/message-cards-content/card-structure/configure-multilingual-content
-->
# 配置多语言内容

消息卡片支持配置多语言内容。设置多语言后，卡片将根据用户的飞书客户端语言，自动展示对应语言的卡片内容，满足国际化业务需求。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[配置卡片多语言](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configure-multi-language-content)。
:::

## 注意事项

- 如果用户本地的语言环境不在消息卡片多语言配置范围内，则默认展示已有的语言。例如，消息卡片同时配置了中文与英文多语言，但用户本地为日文环境，则飞书客户端默认会展示中文卡片内容。
    
- 消息卡片的多语言内容为可选配置项，如果你的业务没有国际化需求，可忽略该配置。

## 支持语种

卡片支持 16 种语言的配置，包括英文、简体中文、繁体中文（香港）、繁体中文（台湾）、日语、印尼语、越南语、泰语、葡萄牙语、西班牙语、韩语、德语、法语、意大利语、俄语和马来语。

## 配置步骤

消息卡片的多语言配置主要涉及卡片结构的内容 `elements｜i18n_elements` 与标题 `header`。

### 为卡片正文配置多语言
	
在多语言消息卡片的结构中，需要使用 `i18n_elements` 替代 `elements`，并依次添加所需的多语言结构体，以及在各结构体中配置卡片组件或元素。JSON 示例如下所示：
    
```json
"i18n_elements": {
  // 正文的多语言配置。你可以在每个语种下配置完整卡片，卡片将根据用户的飞书客户端语言，自动展示对应语言的卡片内容。
  "en_us": [
    {}
  ], // 英文
  "zh_cn": [
    {}
  ], // 简体中文
  "zh_hk": [
    {}
  ], // 繁体中文（香港）
  "zh_tw": [
    {}
  ], // 繁体中文（台湾）
  "ja_jp": [
    {}
  ], // 日语
  "id_id": [
    {}
  ], // 印尼语
  "vi_vn": [
    {}
  ], // 越南语
  "th_th": [
    {}
  ], // 泰语
  "pt_br": [
    {}
  ], // 葡萄牙语
  "es_es": [
    {}
  ], // 西班牙语
  "ko_kr": [
    {}
  ], // 韩语
  "de_de": [
    {}
  ], // 德语
  "fr_fr": [
    {}
  ], // 法语
  "it_it": [
    {}
  ], // 意大利语
  "ru_ru": [
    {}
  ], // 俄语
  "ms_my": [
    {}
  ] // 马来语
}
```

### 为卡片标题配置多语言

如果卡片添加了标题组件，那么你需要同步配置标题的多语言属性，即在 header 字段中，分别为卡片标题、卡片副标题、标题后缀标签字段中添加对应的多语言属性。关于标题组件的 JSON 参数详情，可参见[标题](/ssl:ttdoc/ukTMukTMukTM/ukTNwUjL5UDM14SO1ATN)。

```JSON
{
  "header": {
    "template": "blue",
    "title": {
      "tag": "plain_text",
      "content": "示例标题",
      "i18n": {
        // 卡片主标题多语言配置。必须配置 content 或 i18n 两个属性的其中一个。如果同时配置仅生效 i18n。
        "zh_cn": "", // 简体中文
        "en_us": "", // 英文
        "zh_hk": "", // 繁体中文（香港）
        "zh_tw": "", // 繁体中文（台湾）
        "ja_jp": "", // 日语
        "id_id": "", // 印尼语
        "vi_vn": "", // 越南语
        "th_th": "", // 泰语
        "pt_br": "", // 葡萄牙语
        "es_es": "", // 西班牙语
        "ko_kr": "", // 韩语
        "de_de": "", // 德语
        "fr_fr": "", // 法语
        "it_it": "", // 意大利语
        "ru_ru": "", // 俄语
        "ms_my": "" // 马来语
      }
    },
    "subtitle": {
      "tag": "plain_text",
      "content": "示例文本",
      "i18n": {
        // 卡片副标题多语言配置。必须配置 content 或 i18n 两个属性的其中一个。如果同时配置仅生效 i18n。
        "zh_cn": "", // 简体中文
        "en_us": "", // 英文
        "zh_hk": "", // 繁体中文（香港）
        "zh_tw": "", // 繁体中文（台湾）
        "ja_jp": "", // 日语
        "id_id": "", // 印尼语
        "vi_vn": "", // 越南语
        "th_th": "", // 泰语
        "pt_br": "", // 葡萄牙语
        "es_es": "", // 西班牙语
        "ko_kr": "", // 韩语
        "de_de": "", // 德语
        "fr_fr": "", // 法语
        "it_it": "", // 意大利语
        "ru_ru": "", // 俄语
        "ms_my": "" // 马来语
      }
    },
    "text_tag_list": [
      {
        "tag": "text_tag",
        "text": {
          // 标签内容
          "tag": "plain_text",
          "content": "标签 1"
        },
        "color": "neutral"
      }
    ],
    "i18n_text_tag_list": {
      // 标题后缀标签多语言配置。每个语言环境最多设置 3 个 tag，超出不展示。如果同时配置仅生效 i18n_text_tag_list。
      "zh_cn": [
        {}
      ], // 简体中文
      "en_us": [
        {}
      ], // 英文
      "zh_hk": [
        {}
      ], // 繁体中文（香港）
      "zh_tw": [
        {}
      ], // 繁体中文（台湾）
      "ja_jp": [
        {}
      ], // 日语
      "id_id": [
        {}
      ], // 印尼语
      "vi_vn": [
        {}
      ], // 越南语
      "th_th": [
        {}
      ], // 泰语
      "pt_br": [
        {}
      ], // 葡萄牙语
      "es_es": [
        {}
      ], // 西班牙语
      "ko_kr": [
        {}
      ], // 韩语
      "de_de": [
        {}
      ], // 德语
      "fr_fr": [
        {}
      ], // 法语
      "it_it": [
        {}
      ], // 意大利语
      "ru_ru": [
        {}
      ], // 俄语
      "ms_my": [
        {}
      ] // 马来语
    }
  }
}
```

## 卡片示例

以下为配置了简体中文、繁体中文（中国香港）、繁体中文（中国台湾）、英文、日文的卡片 JSON 代码示例。

```json
{
  "header": {
    "template": "blue",
    "title": {
      "tag": "plain_text",
      "i18n": {
        "en_us": "English template",
        "ja_jp": "日本語テンプレート",
        "zh_hk": "繁體中文（中國香港）",
        "zh_tw": "繁體中文（中國臺灣）",
        "zh_cn": "中文模板"
      }
    }
  },
  "i18n_elements": {
    "en_us": [
      {
        "tag": "markdown",
        "content": "English template"
      }
    ],
    "ja_jp": [
      {
        "tag": "markdown",
        "content": "日本語テンプレート"
      }
    ],
    "zh_hk": [
      {
        "tag": "markdown",
        "content": "繁體中文（中國香港）"
      }
    ],
    "zh_tw": [
      {
        "tag": "markdown",
        "content": "繁體中文（中國臺灣）"
      }
    ],
    "zh_cn": [
      {
        "tag": "markdown",
        "content": "中文模板"
      }
    ]
  }
}
```

你可以将以上 JSON 示例粘贴至消息卡片搭建工具的编辑器中，以查看相应的多语言卡片示例效果。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e53032cb7d0ed03939b06f24e869790a_mKqjR16GfJ.png?height=1412&lazyload=true&maxWidth=600&width=2882)