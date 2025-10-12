<!--
title: 卡片模板-百科卡片
id: 6950466395994456068
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/sample-code/encyclopedia-card
updatedAt: 1646822451000
source: https://open.feishu.cn/document/common-capabilities/message-card/sample-code/encyclopedia-card
-->
#  卡片模板-百科卡片
以下示例代码可拷贝至[消息卡片搭建工具](https://open.feishu.cn/tool/cardbuilder?from=howtoguide)中编辑使用
##  效果


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7823cfc34e1f54f2e97e18065d95c6fe_4iyVd2vRN9.png?lazyload=true&width=1236&height=1442)

## 示例代码
注意：复制到卡片搭建工具后，请先删除卡片中的注释内容（//后的灰字内容），即可正常编辑、预览卡片

```json 
 {
  "config": {
    "wide_screen_mode": true
  },
  "header": {
    "title": {
      "tag": "plain_text",
      "content": "🐈 英国短毛猫"
    },
    "template": "indigo"
  },
  "elements": [
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "英国短毛猫，体形圆胖，四肢短粗发达，毛短而密，头大脸圆，对人友善。 \n其历史可追溯至古罗马时期的家猫，由于拥有悠久的育种历史，称得上是猫家族中的典范。"
      },
      "extra": {
        "tag": "img",
        "img_key": "img_1cad0e51-26f6-492a-8280-a47057b09a0g",
        "alt": {
          "tag": "plain_text",
          "content": "图片"
        }
      }
    },
    {
      "tag": "div",
      "fields": [
        {
          "is_short": true,//声明这个参数后，可以实现双列文本布局
          "text": {
            "tag": "lark_md",
            "content": "**中文学名：**\n英国短毛猫"
          }
        },
        {
          "is_short": true,
          "text": {
            "tag": "lark_md",
            "content": "**拉丁学名：**\nFelinae"
          }
        },
        {
          "is_short": false,
          "text": {
            "tag": "lark_md",
            "content": "" //这是一段空行，用来拉开文本间距
          }
        },
        {
          "is_short": true,
          "text": {
            "tag": "lark_md",
            "content": "**体形：**\n圆胖"
          }
        },
        {
          "is_short": true,
          "text": {
            "tag": "lark_md",
            "content": "**被毛：**\n短而浓密、俗称地毯毛"
          }
        }
      ]
    },
    {
      "tag": "hr"
    },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**1 形态特征**\n\n 🔵 外形：身体厚实，胸部饱满宽阔，腿部粗壮，爪子浑圆，尾巴的根部粗壮，尾尖钝圆。\n\n🔵 毛色：共有十五种品种被承认，其中最著名的是蓝色系的英国短毛猫。 "
      },
      "extra": {
        "tag": "img",
        "img_key": "img_70558e3a-2eef-4e8f-9a07-a701c165431g",
        "alt": {
          "tag": "plain_text",
          "content": "图片"
        }
      }
    },
    {
      "tag": "note", //用这个模块来实现备注效果
      "elements": [
        {
          "tag": "img",
          "img_key": "img_e61db329-2469-4da7-8f13-2d2f284c3b1g",
          "alt": {
            "tag": "plain_text",
            "content": "图片"
          }
        },
        {
          "tag": "plain_text",
          "content": "以上资料来自头条百科"
        }
      ]
    }
  ]
}
``` 

