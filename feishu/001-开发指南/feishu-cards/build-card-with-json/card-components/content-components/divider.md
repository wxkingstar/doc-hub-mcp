<!--
title: 分割线
id: 7343499772500951044
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/divider
updatedAt: 1735814823000
source: https://open.feishu.cn/document/feishu-cards/card-components/content-components/divider
-->
# 分割线组件

你可以在卡片中添加分割线组件，使卡片内容更清晰。

本文档介绍分割线组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[分割线](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/divider)。




![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/062d8c93b9b67ee9fb8c4188c19097d5_bbVIhvzLdi.png?height=224&lazyload=true&maxWidth=300&width=559)

## JSON 结构

分割线的完整 JSON 数据如下所示：
```json
{
  "tag": "hr"
}
```

## 字段说明

分割线组件的字段说明如下表。
| 参数  | 是否必须 | 类型     | 描述                      |
| --- | ---- | ------ | ----------------------- |
| tag | 是    | String | 组件的标签。分割线组件的固定取值为 `hr`。 |

## 示例代码

以下的 JSON 示例代码可实现如下图所示的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/062d8c93b9b67ee9fb8c4188c19097d5_skrtnBe6Lz.png?height=224&lazyload=true&maxWidth=300&width=559)
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
            },
            {
                "tag": "hr"
            },
            {
                "tag": "action",
                "actions": [
                    {
                        "tag": "button",
                        "text": {
                            "tag": "plain_text",
                            "content": "查看更多"
                        },
                        "type": "primary",
                        "complex_interaction": true,
                        "width": "default",
                        "size": "medium"
                    }
                ]
            }
        ]
    },
    "i18n_header": {}
}
```