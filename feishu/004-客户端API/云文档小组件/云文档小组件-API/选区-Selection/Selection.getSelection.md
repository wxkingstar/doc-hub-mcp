---
title: "Selection.getSelection"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/selection/Selection.getSelection
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960048000
---
最后更新于 2025-07-31

# Selection.getSelection
获取指定文档的选区信息，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定文档的引用
| **名称** | **数据类型**                                                                                                                                       | **是否必填** | **描述**  |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| docRef | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 指定文档的引用 |

## 输出

异步返回指定文档的选区信息，它是一个[ExtendedSelectionItem](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/06-data-structure/extendedselectionitem)的数组

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
const selection = await DocMiniApp.Selection.getSelection(docRef);
console.log('debug', selection);
```

### 返回示例

```json
[
  {
    "type": "text",
    "ref":
    {
      "docRef":
      {
        "docToken": "B9tudJfP4or1OCxEC3UcSNdjndc"
      },
      "blockId": 6,
      "range": [0, 7]
    },
    "blockId": 6,
    "blockSnapshot":
    {
      "id": 6,
      "type": "text",
      "children": [],
      "childSnapshots": [],
      "parent": 1,
      "childIndex": 1,
      "data":
      {
        "plain_text": "asdasda",
        "text":
        {
          "elements":
            [
              {
                "text_run":
                {
                  "content": "asdasda",
                  "style":
                  {
                    "inline_code": false, "bold": false, "italic": false, "underline": false, "strikethrough": false
                  }
                }
              }
            ]
        }
      },
      "recordId": "E6mgdWM2EoU0W0xcpJWc1Ftrngg",
      "ref":
      {
        "docRef":
        {
          "docToken": "B9tudJfP4or1OCxEC3UcSNdjndc"
        },
        "blockId": 6
      }
    }
  }
]
```
