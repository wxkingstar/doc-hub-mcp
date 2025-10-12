<!--
title: 卡片模板-文章列表
id: 6950466395994390532
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/sample-code/article-list
updatedAt: 1646822451000
source: https://open.feishu.cn/document/common-capabilities/message-card/sample-code/article-list
-->
#  卡片模板-文章列表
以下示例代码可拷贝至[消息卡片搭建工具](https://open.feishu.cn/tool/cardbuilder?from=howtoguide)中编辑使用
##  效果

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b47b9fa0f48ce100fcfa8f58f882e32a_LNjeDFbqdi.png)

## 示例代码

```json 
 {
  "config": {
    "wide_screen_mode": true
  },
  "header": {
    "title": {
      "tag": "plain_text",
      "content": "🎉第一天，做点什么好呢？"
    },
    "template": "wathet"
  },
  "elements": [
    {
      "tag": "img",
      "img_key": "img_770020cd-f92e-4a1f-ac5f-20047cf1731g",
      "alt": {
        "tag": "plain_text",
        "content": ""
      }
    },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**换个头像吧！这6件事助你开启Lark第一天**  [点击查看>>](https://www.larksuite.com/hc/en-US/articles/360042500034)"
      }
    },
    {
      "tag": "hr"
    },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**【聊天】消息串、表情回复？高效沟通很轻松** \n[点击查看>>](https://www.larksuite.com/hc/en-US/articles/360023545914)"
      },
      "extra": {
        "tag": "img",
        "img_key": "img_50b4fd3f-4077-4e4b-b92c-664039a6153g",
        "alt": {
          "tag": "plain_text",
          "content": ""
        }
      }
    },
    {
      "tag": "hr"
    },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**【会议】多人异地办公难？音视频会议来帮你** \n[点击查看>>](https://www.larksuite.com/hc/en-US/articles/360035593213)"
      },
      "extra": {
        "tag": "img",
        "img_key": "img_54b18a36-81b0-4776-9f47-854f9da6cd3g",
        "alt": {
          "tag": "plain_text",
          "content": ""
        }
      }
    },
    {
      "tag": "hr"
    },
    {
      "tag": "note",
      "elements": [
        {
          "tag": "img",
          "img_key": "img_5aea87b0-63bc-4a52-9ca4-ce2e58468e5g", 
          "alt": {
            "tag": "plain_text",
            "content": ""
          }
        },
        {
          "tag": "plain_text",
          "content": "回复“退订”不再接收此订阅信息"
        }
      ]
    }
  ]
}
``` 

