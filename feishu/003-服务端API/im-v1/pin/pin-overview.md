<!--
title: Pin 消息概述
id: 7406265490787958812
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/pin/pin-overview
updatedAt: 1724405561000
source: https://open.feishu.cn/document/im-v1/pin/pin-overview
-->
# Pin 消息概述

你可以将会话中的某条重要消息设为 Pin，方便随时查看。Pin 列表中的内容对会话中的所有成员可见。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/406f8640c133c130222790650747b852_tk0PDC2y6w.png?height=1284&lazyload=true&maxWidth=600&width=2148)

## 字段说明

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">名称</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:50%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>pin</md-td>
<md-td>pin</md-td>
<md-td>Pin 的操作信息</md-td>
</md-tr>

<md-tr>
<md-td>└ message_id</md-td>
<md-td>string</md-td>
<md-td>Pin 的消息 ID</md-td>
</md-tr>
  
<md-tr>
<md-td>└ chat_id</md-td>
<md-td>string</md-td>
<md-td>Pin 消息所在的群聊 ID</md-td>
</md-tr>
  
<md-tr>
<md-td>└ operator_id</md-td>
<md-td>string</md-td>
<md-td>Pin 的操作人 ID</md-td>
</md-tr>
  
<md-tr>
<md-td>└ operator_id_type</md-td>
<md-td>string</md-td>
<md-td>Pin 的操作人 ID 类型。可能值有：

- open_id：表示操作人为用户，此时 `operator_id` 返回值为用户的 open_id。
- app_id：表示操作人为应用，此时 `operator_id` 返回值为应用的 app_id。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ create_time</md-td>
<md-td>string</md-td>
<md-td>Pin 的创建时间（毫秒级时间戳）</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

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