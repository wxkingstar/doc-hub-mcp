---
title: "Pin 消息概述"
source_url: https://open.feishu.cn/document/im-v1/pin/pin-overview
last_remote_update: 2024-08-23
last_remote_update_timestamp: 1724405561000
---
最后更新于 2024-08-23

# Pin 消息概述

你可以将会话中的某条重要消息设为 Pin，方便随时查看。Pin 列表中的内容对会话中的所有成员可见。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/406f8640c133c130222790650747b852_tk0PDC2y6w.png?height=1284&lazyload=true&maxWidth=600&width=2148)

## 字段说明

名称 | 类型 | 描述
--- | --- | ---
pin | pin | Pin 的操作信息
└ message_id | string | Pin 的消息 ID
└ chat_id | string | Pin 消息所在的群聊 ID
└ operator_id | string | Pin 的操作人 ID
└ operator_id_type | string | Pin 的操作人 ID 类型。可能值有：  
- open_id：表示操作人为用户，此时 `operator_id` 返回值为用户的 open_id。  
- app_id：表示操作人为应用，此时 `operator_id` 返回值为应用的 app_id。
└ create_time | string | Pin 的创建时间（毫秒级时间戳）

## 数据示例

```json
{
  "pin": {
    "message_id": "om_dc13264520392913993dd051dba21dcf",
    "chat_id": "oc_a0553eda9014c201e6969b478895c230",
    "operator_id": "ou_7d8a6e6df7621556ce0d21922b676706ccs",
    "operator_id_type": "open_id",
    "create_time": "1615380573211"
  }
}
```
