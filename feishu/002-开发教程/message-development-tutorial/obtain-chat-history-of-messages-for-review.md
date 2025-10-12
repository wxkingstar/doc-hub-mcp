<!--
title: 步骤六：获取群历史消息进行复盘
id: 7033021651198279681
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-development-tutorial/obtain-chat-history-of-messages-for-review
updatedAt: 1693983610000
source: https://open.feishu.cn/document/home/message-development-tutorial/obtain-chat-history-of-messages-for-review
-->
# 步骤六：获取群历史消息进行复盘

本步骤通过执行 `/quick_start/robot/im.py` 文件中的 `list_chat_history` 函数获取群历史消息，并将结果保存在 `/quick_start/robot/chat_history.txt` 文件中。

代码实现所使用的 API 如下：

- [获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)

- [获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)

## 操作步骤

1. 打开 `/quick_start/robot/im_test.py` 文件，在 `main` 函数的 `list_chat_history()` 方法中，传入 `chat_id`。
	
	需传入在[步骤三](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-development-tutorial/the-robot-sends-an-alarm-notification)中保存的 `chat_id`。示例配置如下图所示：
	
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/034eb5ca85109b23c1eccb56ee3e9618_wFrkZVi2m2.png?height=480&lazyload=true&maxWidth=600&width=2050)
    
2. 执行 `main` 函数，然后在 `/quick_start/robot/chat_history.txt` 中查看群历史消息。
	
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0fb0b45365a136c96a8b231992dbe3e6_6LEuyVlvPc.png?height=904&lazyload=true&maxWidth=600&width=2742)
