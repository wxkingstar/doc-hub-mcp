---
title: "IframeBlockData"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/BlockData/IframeBlockData
---
最后更新于 2025-07-31

# IframeBlockData
内嵌网页 Block 的数据结构，继承于 [BlockData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/blockdata)

| **名称**    | **数据类型** | **是否必填** | **描述**                 |
| --------- | -------- | -------- | ---------------------- |
| component | object   | 是        | /                      |
|  ∟type    | string   | 是        | Iframe 网页类型            |
|  ∟url     | string   | 是        | 目标网页 URL，该值是 encode 过的
