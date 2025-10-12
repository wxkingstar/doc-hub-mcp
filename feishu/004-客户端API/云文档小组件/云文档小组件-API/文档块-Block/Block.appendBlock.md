---
title: "Block.appendBlock"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/block/Block.appendBlock
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960130000
---
最后更新于 2025-07-31

# Block.appendBlock
在父 Block 的最后面插入一个新 Block，返回新插入的 Block 的快照信息，该方法为异步调用。

## 注意事项
**Notice**：以下 Block 暂不支持插入：BITABLE、CELL、CHAT_CARD、DIAGRAM、FILE、GRID、GRID_COLUMN、IFRAME、IMAGE、ISV、MINDNOTE、PAGE、SHEET、TABLE、VIEW

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可写 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

父 Block 的引用、父 Block 的位置以及插入的 Block 快照数据。
| **名称**         | **数据类型**                                                                                                                                               | **是否必填** | **描述**                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------- |
| parentBlockRef | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef)            | 是        | 父 Block 的引用                           |
| position       | number                                                                                                                                                 | 是        | 父 Block 的位置                           |
| blockSnapshot  | [CreateBlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/CreateBlockSnapshot) | 是        | 插入的 Block 快照数据。以下 Block 暂不支持插入：见注意事项1 |

## 输出

异步返回返回新插入的 Block 的快照信息，它一个[BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot)

## 示例代码

### 调用示例

```js
    const DocMiniApp = new BlockitClient().initAPI();
    const docRef = await DocMiniApp.getActiveDocumentRef();
    const blockSnap = await DocMiniApp.Document.getRootBlock(docRef);
    await DocMiniApp.Block.appendBlock(blockSnap.ref, {
      type: BlockType.TEXT,
      data: {
        text: {
          elements: [{
            text_run: {
              content: 'test',
              style: {
                underline: true
              }
            }
          }]
        },
        plain_text: 'test'
      }
    });
```

### 返回示例

```json
{
    "id": 10,
    "type": "text",
    "children": [],
    "childSnapshots": [],
    "parent": 1,
    "childIndex": 8,
    "data": {
        "text": {
            "elements": [
                {
                    "text_run": {
                        "content": "test",
                        "style": {
                            "inline_code": false,
                            "bold": false,
                            "italic": false,
                            "underline": true,
                            "strikethrough": false
                        }
                    }
                }
            ]
        },
        "plain_text": "test"
    },
    "recordId": "OY8qd0qAoogoA0x0QabccpJonbf",
    "ref": {
        "docRef": {
            "docToken": "Ob3gdQWR7oN9VKxGPc6czZmrnpd"
        },
        "blockId": 10
    }
}
```
