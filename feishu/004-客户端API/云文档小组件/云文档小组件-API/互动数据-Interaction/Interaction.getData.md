---
title: "Interaction.getData"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/interaction/Interaction.getData
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960330000
---
最后更新于 2025-07-31

# Interaction.getData
获取当前云文档小组件的 Interaction 数据，该方法为异步调用。要在先app.config声明一下 useInteraction。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | - 正文小组件  
- 全屏视图  
- 模态框视图  
- 弹窗视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

当前云文档小组件的 Interaction 数据
| **名称**          | **数据类型**                                                                    |  **描述**                   |
| --------------- | --------------------------------------------------------------------------- | -------- | ------------------------ |
| InteractionData | [InteractionData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/InteractionData) |当前云文档小组件的 Interaction 数据 |

## 示例代码

### 调用示例

```js
 DocMiniApp.Interaction.getData()
     .then((data: InteractionData) => {
         //对data做处理
         console.log('debug',data);
     })
```

### 返回示例

```json
{ data:'xxxxx' }
```
