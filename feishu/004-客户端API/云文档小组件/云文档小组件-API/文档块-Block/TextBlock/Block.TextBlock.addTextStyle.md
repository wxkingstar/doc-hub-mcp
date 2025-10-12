---
title: "Block.TextBlock.addTextStyle"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/block/textblock/Block.TextBlock.addTextStyle
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960223000
---
最后更新于 2025-07-31

# Block.TextBlock.addTextStyle
给指定范围的文本添加样式。该方法是同步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
无需权限 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

文本数据、添加的样式以及指定处理的文本范围，不指定默认全部
| **名称** | **数据类型**                                                                                                                                         | **是否必填** | **描述**            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------------- |
| data   | [TextBlockData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/textblockdata/textblockdata) | 是        | 文本数据              |
| style  | [TextStyle](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/textblockdata/textrun/textstyle)                                       | 是        | 添加的样式             |
| range  | [number, number]                                                                                                                                | 否        | 指定处理的文本范围，不指定默认全部 |

## 输出

返回一个[TextBlockData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/textblockdata/textblockdata)

## 示例代码

### 调用示例

```js
 const docRef = await DocMiniApp.getActiveDocumentRef();
 const blockRef = DocMiniApp.getBlockRefById(docRef,5);
 const textBlock = await DocMiniApp.Block.getBlock(blockRef);
 const newData = DocMiniApp.Block.TextBlock.addTextStyle(textBlock.data as TextBlockData,{bold: true,underline:true},[1,2]);
 console.log('debug',newData);
```

### 返回示例

```json
{
  "text":
  {
    "elements":
    [{
      "text_run": {
        "content": "测",
        "style": {
          "inline_code": false,
          "bold": false,
          "italic": false,
          "underline": false,
          "strikethrough": false
        }
      }
    },
    {
      "text_run": {
        "content": "试",
        "style": {
          "inline_code": false,
          "bold": true,
          "italic": false,
          "underline": true,
          "strikethrough": false
        }
      }
    }]
  },
  "plain_text": "测试"
}
```
