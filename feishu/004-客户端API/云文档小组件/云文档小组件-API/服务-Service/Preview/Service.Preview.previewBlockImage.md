---
title: "Service.Preview.previewBlockImage"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/Preview/Service.Preview.previewBlockImage
---
最后更新于 2025-07-31

# Service.Preview.previewBlockImage
以某个 Block 为入口唤起图片查看器，该方法为异步调用。
## 注意事项：
目前支持图片查看器的 BlockType 仅包括：
- IMAGE
- DIAGRAM

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**   | **数据类型**                                                                 | **是否必填** | **描述**       |
| -------- | ------------------------------------------------------------------------ | -------- | ------------ |
| blockRef | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef) | 是        | 指定的 Block 引用 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const documentRef = await DocMiniApp.getActiveDocumentRef();
const blockRef = await DocMiniApp.getBlockRefById(documentRef, 6);
DocMiniApp.Service.Preview.previewBlockImage(blockRef);
```

### 返回示例

无
