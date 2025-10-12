<!--
title: 配置卡片属性
id: 6907569523176898561
fullPath: /ukTMukTMukTM/uAjNwUjLwYDM14CM2ATN
updatedAt: 1724163044000
source: https://open.feishu.cn/document/common-capabilities/message-card/message-cards-content/card-structure/card-configuration
-->
# 配置卡片属性

在消息卡片结构的 `config` 字段中，支持配置卡片是否可以转发、是否为共享卡片。

:::warning
本文档为历史版本，已不再维护。请参考新版文档[卡片 JSON 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)了解卡片属性相关配置。
:::

## 参数说明

在消息卡片 `config` 字段中，支持配置的参数说明如下表所示。

:::html
<md-table>
    <md-thead>
    <md-tr>
        <md-th style="width:15%">参数</md-th>
        <md-th style="width:15%">是否必须</md-th>
        <md-th style="width:15%">类型</md-th>
        <md-th style="width:55%">描述</md-th>
    </md-tr>
    </md-thead>
    <md-tbody>
    <md-tr>
        <md-td>enable_forward</md-td>
        <md-td>否</md-td>
        <md-td>Boolean</md-td>
        <md-td>
是否允许转发卡片。取值：
- **true**：允许
- **false**：不允许
            
默认值为 true，该字段要求飞书客户端的版本为 V3.31.0 及以上。
<md-alert type="tip">
**注意**：转发后卡片上的回传交互组件将自动置为禁用态，用户不能在转发后的卡片内进行数据交互。
</md-alert>
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>update_multi</md-td>
        <md-td>否
        </md-td>
        <md-td>Boolean</md-td>
        <md-td>
是否为共享卡片。取值：
- **true**：是共享卡片，更新卡片的内容对所有收到这张卡片的人员可见。
- **false**：非共享卡片，即独享卡片，仅操作用户可见卡片的更新内容。
            
默认值为 false。
        </md-td>
    </md-tr>
    <md-tr>
        <md-td>wide_screen_mode</md-td>
        <md-td>否</md-td>
        <md-td>Boolean</md-td>
        <md-td>该字段当前已废弃，无需配置。所有卡片均已升级为自适应屏幕宽度。</md-td>
    </md-tr>
    </md-tbody>
</md-table>
:::
## 卡片示例

```json
{
  "config": { // 配置卡片属性
    "enable_forward": true,
    "update_multi": true
  },
  "header": {
    "title": {
      "tag": "plain_text",
      "content": "This is Header"
    }
  },
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "button"
          },
          "type": "default"
        },
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "button"
          },
          "type": "default"
        }
      ]
    }
  ]
}
```


