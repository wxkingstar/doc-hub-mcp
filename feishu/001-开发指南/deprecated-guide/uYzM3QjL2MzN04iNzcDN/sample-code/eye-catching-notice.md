<!--
title: 卡片模板-醒目的通知
id: 6950466395994406916
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/sample-code/eye-catching-notice
updatedAt: 1658144506000
source: https://open.feishu.cn/document/common-capabilities/message-card/sample-code/eye-catching-notice
-->
#  卡片模板-醒目的通知
以下示例代码可拷贝至[消息卡片搭建工具](https://open.feishu.cn/tool/cardbuilder?from=howtoguide)中编辑使用

## 示例1
### 效果


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6a98290c551e4a9921bc464d88f7971c_EzV9PQLfhY.png?lazyload=true&width=828&height=688)
### 示例代码
💡 注意：关于卡片中的配图尺寸，建议：
- 图片宽度 ：图片高度 在 2:1 到 3:1 之间，不至于使图片占用太大卡片篇幅
- 图片宽度接近 1160px，保证图片展示的清晰度


```json 
 {
  "config": {
    "wide_screen_mode": true
  },
  "header": {
    "title": {
      "tag": "plain_text",
      "content": "📚晒挚爱好书，赢读书礼金"
    },
    "template": "turquoise"
  },
  "elements": [
    {
      "tag": "img",
      "img_key": "img_7ea74629-9191-4176-998c-2e603c9c5e8g",
      "alt": {
        "tag": "plain_text",
        "content": "图片"
      }
    },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "你是否曾因为一本书而产生心灵共振，开始感悟人生？\n你有哪些想极力推荐给他人的珍藏书单？\n\n加入 **4·23 飞书读书节**，分享你的**挚爱书单**及**读书笔记**，**赢取千元读书礼**！\n\n📬 填写问卷，晒出你的珍藏好书\n😍 想知道其他人都推荐了哪些好书？马上[入群围观](https://feishu.cn)\n📝 用[读书笔记模板](https://feishu.cn)（桌面端打开），记录你的心得体会\n🙌 更有惊喜特邀嘉宾 4月12日起带你共读"
      }
    },
    {
      "tag": "action",
      "actions": [
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "立即推荐好书"
          },
          "type": "primary",
          "url": "https://feishu.cn"
        },
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "查看活动指南"
          },
          "type": "default",
          "url": "https://feishu.cn"
        }
      ]
    }
  ]
}
``` 



