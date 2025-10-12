---
title: "Block.updateBlock"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/block/Block.updateBlock
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960165000
---
最后更新于 2025-07-31

# Block.updateBlock
更新一个 Block 的数据，返回更新后该 Block 的快照信息，该方法为异步调用。

## 注意事项
**Notice**：以下 Block 暂不支持插入：BITABLE、CELL、CHAT_CARD、DIAGRAM、FILE、GRID、GRID_COLUMN、IFRAME、IMAGE、ISV、MINDNOTE、PAGE、SHEET、TABLE、VIEW、OKR

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可写 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定的 Block 引用以及插入的 Block 快照数据。
| **名称**    | **数据类型**                                                                                                                                    | **是否必填** | **描述**                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------- |
| blockRef  | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef) | 是        | 指定的 Block 引用                          |
| blockData | UpdateBlockData                                                                                                                             | 是        | 插入的 Block 快照数据。以下 Block 暂不支持更新：见注意事项 |

## 输出

异步返回更新后该 Block 的快照信息，它是一个[BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot)

## 示例代码

### 调用示例

```js
 const docRef = await DocMiniApp.getActiveDocumentRef();
 const blockRef = DocMiniApp.getBlockRefById(docRef,7);
 const textblock = await DocMiniApp.Block.getBlock(blockRef);
 const newData = DocMiniApp.Block.TextBlock.addTextStyle(textblock.data as TextBlockData,{bold: true,underline:true});
 const updatedBlock = await DocMiniApp.Block.updateBlock(blockRef,newData);
 console.log('debug',updatedBlock);
```

### 返回示例

```json
{
  "id": 7,
  "type": "text",
  "children": [],
  "childSnapshots": [],
  "parent": 1,
  "childIndex": 3,
  "data":
  {
    "plain_text": "asd",
      "text":
    {
      "elements":
      [
        {
          "text_run":
          {
            "content": "asd",
            "style":
            {
              "inline_code": false, "bold": true, "italic": false, "underline": true, "strikethrough": false, "abbreviation-data": "{"id":"744d24e7-d84c-42a9-803d-bf3a7d0c9fca","abbr_ids":"enterprise_44276020","is_visible":1,"is_first":1}"
            }
          }
        }
      ]
    }
  },
  "recordId": "D22Sdee0Io2giaxekiUcGlD****",
    "ref":
  {
    "docRef":
    {
      "docToken": "Sj4fdE9Cro9Qg3xaHAOcv4I****"
    },
    "blockId": 7
  }
}
```
