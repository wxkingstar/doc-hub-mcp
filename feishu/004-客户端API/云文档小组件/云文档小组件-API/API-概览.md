---
title: "API 概览"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/05-api-doc
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753959835000
---
最后更新于 2025-07-31

# API 概览
API概览

云文档小组件提供了一系列的 API 供开发者调用。这些 API 提供了对文档内容及状态的增删查改等丰富的能力。借助这些 API ，开发者可以构建出丰富的云文档小组件功能。
为了让您更加顺畅的使用云文档小组件 API，您可能需要理解如下概念。

## Document（文档）

即文档实体。每篇文档即一个 Document，您可以使用[getActiveDocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/getactivedocumentref) 获取小组件当前所在文档的 Document 实体。

## Block（内容块）

一篇文档由若干个 Block 组成，云文档使用 Block 组织文档内容。借助 Block 可以对多种类型的内容进行排版（例如分栏）。您可以使用[getActiveBlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/getactiveblockref) 获取当前所在 Block（文档块）引用。
另外，一个云文档小组件本身也属于一个 Block。

## Selection（选区）

选区即用户当前光标所在位置 或者 所选定的的区域。您可以使用[Selection](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Selection.getSelection) 相关 API 对选区进行监听/查询/修改。

## Record（文档数据）和 Interaction（互动数据）

Record 和 Interaction 为小组件提供了数据持久化存储的能力。更多信息可以查看[数据存储](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/04-cloud-doc-block-data-storage/04-cloud-doc-block-data-storage)

## 视图

请参阅：[名词解释](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/02-cloud-doc-block-noun-explanation)

## 场景可用

云文档涉及不同的场景，在历史记录场景下，小组件不可用：
| 场景   | 小组件表现        | 截图                                                                                                                                                                                                                                                    | 进入方式                                                                                                                                                                                                                                                  |
| ---- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 翻译模式 | 小组件可用        | -                                                                                                                                                                                                                                                    | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e7ba77b481846dc193de591d08c4ffb7_C9RQBaEduc.png?height=994&lazyload=true&width=764) |
| 演示模式 | 小组件可用        | -                                                                                                                                                                                                                                                    | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/b258a9050e964fefae2891e006957c84_bUX5DFx37I.png?height=418&lazyload=true&width=566) |
| 匿名访问 | 小组件可用        | -                                                                                                                                                                                                                                                    | 未登录用户访问文档                                                                                                                                                                                                                                             |
| 历史记录 | 小组件不可用，展示兜底图 | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/9d9d9d8c5c3436c31c2b22ee789f061a_BC9zx17VAO.png?height=278&lazyload=true&width=1034) | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e07fed26ad02090581ce9c517d6d372b_ebNuxnnCcW.png?height=696&lazyload=true&width=576) |

## 权限&文档模式

云文档拥有自己的内容权限控制，目前分为`可读/可写`这两种权限。
当用户没有写权限的情况下，调用了修改正文的相关接口，该调用会失败。请使用 Permission 相关接口监听或获取当前文档的权限状态：[Service.Permission](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Permission.getDocumentPermission)
此外，即使用户拥有`可写`权限，当文档处于「阅读模式」时，调用修改正文的相关接口，该调用仍然会失败。请使用 DocsMode 相关接口监听或获取当前文档的模式：[Env.DocsMode](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.DocsMode.getDocsMode)

# API 调用约束

### API频控策略：

- 目的：
    - 为了防止某一小组件单位时间内频繁调用某一API (比如开发者写了一个无限循环)，挤占其他小组件调用API的计算资源，限制单位时间内，单个小组件运行时 (iframe), 某个 API 的最大调用次数；
- 频控策略：
    - 如果超过某个 API 的最大调用次数，将返回 ResponseCode.TOO_MANY_REQUEST 错误，并在当前单位时间过期（即下一个单位时间开始）后才可调用成功;
    - 每个API每1s限制100次调用；

# 统一错误码字典

| **ResponseCode** | **errno** | **ResponseMessage** | **含义**     | **归属** |
| ---------------- | --------- | ------------------- | ---------- | ------ |
| SUCCESS          | 0         | Success             | 成功         | 通用     |
| NOT_IMPLEMENT    | 10110001  | API not implemented | API未实现     | 通用     |
| REQUEST_TIMEOUT  | 10110002  | Request timeout     | 请求超时       | 通用     |
| REQUEST_INVALID  | 10110003  | Invalid request     | 非法请求       | 通用     |
| RESPONSE_INVALID | 10110004  | Invalid response    | 非法响应       | 通用     |
| INTERNAL_ERROR   | 10110005  | Internal error      | 内部错误       | 通用     |
| FORBIDDEN        | 10110006  | Request forbidden   | 禁止请求       | 通用     |
| TOO_MANY_REQUEST | 10110007  | To many request     | 请求过多       | 通用     |
| BAD_REQUEST      | 10110008  | Bad request         | 坏请求，请求参数错误 | 通用     |

# API 索引

### 基础数据引用 - Base

| API                                                                                  | 权限要求     | API 介绍                                   |
| ------------------------------------------------------------------------------------ | -------- | ---------------------------------------- |
| [getActiveDocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/getactivedocumentref) | -   可读   | 获取到当前文档的引用，该方法为异步调用。                     |
| [getActiveBlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/getactiveblockref)   | -   可读   | 获取当前正文小组件所在 Block（文档块）的引用，该方法为异步调用。      |
| [getDocumentRefById](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/getdocumentrefbyid)   | -   无需权限 | 根据文档 token 获取指定文档的引用，该方法是同步调用。           |
| [getBlockRefById](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/getblockrefbyid)      | -   无需权限 | 根据 block id 获取指定 Block 的引用，该方法是同步调用。     |
| [getActiveBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/getactiveblock)       | -   可读   | 获取当前所在 Block（文档块）的快照信息，该方法为异步调用。         |
| [getBlockRefByIndex](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/getblockrefbyindex)  | -   无需权限 | 根据父 Block 引用以及索引获取指定 Block 的引用，该方法是同步调用。 |
| [getTextRefByRange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/gettextrefbyrange)    | -   无需权限 | 根据父 Block 引用以及索引获取指定 Block 的引用，该方法是同步调用。 |
| [getActiveWikiToken](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/getactivewikitoken)   | -   可读   | 获取当前文档的 wiki token，该方法为异步调用。             |
| [canIUse](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/caniuse)              | -   无需权限 | 检测异步 API 是否可用。                           |

### 文档 - Document

| API                                                                                         | 权限要求   | API 介绍                              |
| ------------------------------------------------------------------------------------------- | ------ | ----------------------------------- |
| [Document.getPageMeta](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Document.getPageMeta)       | -   可读 | 获取指定文档的 meta 信息，该方法为异步调用。           |
| [Document.getRootBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Document.getRootBlock)      | -   可读 | 获取指定文档的根 Block，该方法为异步调用。            |
| [Document.getTitle](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Document.getTitle)         | -   可读 | 获取指定文档的标题，该方法为异步调用。                 |
| [Document.setTitle](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Document.setTitle)          | -   可写 | 设置指定文档的标题，该方法为异步调用。                 |
| [Document.insertBlocksByHTML](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Document.insertBlocksByHTML) | -   可写 | 将 HTML 转化为 Blocks 并插入到文档中，该方法为异步调用。 |

### 选区 - Selection

| API                                                                                          | 权限要求   | API 介绍                         |
| -------------------------------------------------------------------------------------------- | ------ | ------------------------------ |
| [Selection.getSelectedBlocks](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Selection.getSelectedBlocks)  | -   可读 | 获取指定文档当前选中的 Blocks，该方法为异步调用。   |
| [Selection.setBlockSelection](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Selection.setBlockSelection) | -   可读 | 设置指定文档的选区为指定的 Blocks，该方法为异步调用。 |
| [Selection.setSelection](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Selection.setSelection)       | -   可读 | 设置选区信息，该方法为异步调用。               |
| [Selection.getSelection](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Selection.getSelection)       | -   可读 | 获取指定文档的选区信息，该方法为异步调用。          |
| [Selection.clearSelection](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Selection.clearSelection)    | -   可读 | 清除指定文档的选区，该方法为异步调用。            |
| [Selection.onSelectionChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Selection.onSelectionChange)  | -   可读 | 监听文档选区变化，该方法为异步调用。             |
| [Selection.offSelectionChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Selection.offSelectionChange) | -   可读 | 取消监听文档选区变化，该方法为异步调用。           |

### 文档块 - Block

| API                                                                                  | 权限要求   | API 介绍                                                 |
| ------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------ |
| [Block.getBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.getBlock)       | -   可读 | 获取某个 Block 的快照信息，该方法为异步调用。                             |
| [Block.getBlocks](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.getBlocks)      | -   可读 | 批量获取 Block 的快照信息，该方法为异步调用。                             |
| [Block.insertBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.insertBlock)    | -   可写 | 在父 Block 的指定位置插入一个新 Block，返回新插入的 Block 的快照信息，该方法为异步调用。 |
| [Block.appendBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.appendBlock)   | -   可写 | 在父 Block 的最后面插入一个新 Block，返回新插入的 Block 的快照信息，该方法为异步调用。  |
| [Block.removeBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.removeBlock)    | -   可写 | 删除指定一个 Block，返回删除 Block 的快照信息，该方法为异步调用。                |
| [Block.removeBlocks](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.removeBlocks)   | -   可写 | 批量删除指定 Blocks，返回删除 Blocks 的快照信息，该方法为异步调用。              |
| [Block.updateBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.updateBlock)    | -   可写 | 更新一个 Block 的数据，返回更新后该 Block 的快照信息，该方法为异步调用。            |
| [Block.turnIntoBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.turnIntoBlock)  | -   可写 | 转换一个 Block 为另一个Block，该方法为异步调用。                         |
| [Block.turnIntoBlocks](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.turnIntoBlocks) | -   可写 | 批量转换Block 为另一种Block，该方法为异步调用。                          |

#### Block.TextBlock

| API                                                                                             | 权限要求     | API 介绍                            |
| ----------------------------------------------------------------------------------------------- | -------- | --------------------------------- |
| [Block.TextBlock.getRawText](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.TextBlock.getRawText)      | -   无需权限 | 获取原始的文本数据，可以跟 range 对应上。该方法是同步调用。 |
| [Block.TextBlock.getPlainText](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.TextBlock.getPlainText)    | -   无需权限 | 获取文档上显示的文本数据，用于展示用。该方法是同步调用。      |
| [Block.TextBlock.addTextStyle](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.TextBlock.addTextStyle)    | -   无需权限 | 给指定范围的文本添加样式。该方法是同步调用。            |
| [Block.TextBlock.removeTextStyle](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.TextBlock.removeTextStyle) | -   无需权限 | 给指定范围的文本删除样式。该方法是同步调用。            |

#### Block.TextualBlock

| API                                                                                                       | 权限要求     | API 介绍                            |
| --------------------------------------------------------------------------------------------------------- | -------- | --------------------------------- |
| [Block.TextualBlock.getRawText](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.TextualBlock.getRawText)            | -   无需权限 | 获取原始的文本数据，可以跟 range 对应上。该方法是同步调用。 |
| [Block.TextualBlock.getPlainText](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.TextualBlock.getPlainText)           | -   无需权限 | 获取文档上显示的文本数据，用于展示用。该方法是同步调用。      |
| [Block.TextualBlock.addTextStyle](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.TextualBlock.addTextStyle)          | -   无需权限 | 给指定范围的文本添加样式。该方法是同步调用。            |
| [Block.TextualBlock.removeTextStyle](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.TextualBlock.removeTextStyle)       | -   无需权限 | 给指定范围的文本删除样式。该方法是同步调用。            |
| [Block.TextualBlock.highlightTexts](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/文档块-Block/textualblock/blocktextualblockhighlighttexts)         | -   可读   | 高亮文本，该方法为异步调用。                    |
| [Block.TextualBlock.clearAllHighlightTexts](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Block.TextualBlock.clearAllHighlightTexts) | -   可读   | 清除所有高亮文本，该方法为异步调用。                |

### 文档数据 - Record

| API                                                                                     | 权限要求   | API 介绍                                                                            |
| --------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| [Record.getRecord](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Record.getRecord)        | -   可读 | 获取当前小应用的 Record 数据，该方法为异步调用。                                                      |
| [Record.setRecord](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Record.setRecord)        | -   可写 | 修改当前云文档小组件的 Record 数据，该方法为异步调用。                                                   |
| [Record.applyTransaction](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Record.applyTransaction) | -   可写 | 修改当前云文档小组件的 Record 数据，跟 setRecord 方法是等价的，只是通过 handler 的方式来产生 changesets，该方法为异步调用。 |
| [Record.onRecordChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Record.onRecordChange)   | -   可读 | 监听云文档小组件的 Record 数据变化，该方法为异步调用。                                                   |
| [Record.offRecordChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Record.offRecordChange)  | -   可读 | 取消云文档小组件的 Record 数据变化监听，该方法为异步调用。                                                 |

### 互动数据 - Interaction

| API                                                                                          | 权限要求   | API 介绍                                                |
| -------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------- |
| [Interaction.getData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Interaction.getData)         | -   可读 | 获取当前云文档小组件的 Interaction 数据，该方法为异步调用。                  |
| [Interaction.setData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Interaction.setData)          | -   可读 | 修改当前云文档小组件的 Interaction 数据，该方法为异步调用。                  |
| [Interaction.onDataChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Interaction.onDataChange)     | -   可读 | 监听云文档小组件的 Interaction 数据变化，该方法为异步调用。                  |
| [Interaction.offDataChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Interaction.offDataChange)    | -   可读 | 取消云文档小组件的 Interaction 数据变化监听，该方法为异步调用。                |
| [Interaction.applyTransaction](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Interaction.applyTransaction) | -   可读 | 获取当前小应用的 Interaction 数据, 作为一个事务批量operations，该方法为异步调用。 |

### Viewport - 视口

| API                                                                                            | 权限要求   | API 介绍                               |
| ---------------------------------------------------------------------------------------------- | ------ | ------------------------------------ |
| [Viewport.onViewportChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Viewport.onViewportChange)  | -   可读 | 监听文档视口变化，该方法为异步调用。                   |
| [Viewport.offViewportChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Viewport.offViewportChange) | -   可读 | 取消监听文档视口变化onViewportChange，该方法为异步调用。 |
| [Viewport.getViewportBlocks](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Viewport.getViewportBlocks)     | -   可读 | 获取视口中的所有 Block，该方法为异步调用。             |
| [Viewport.scrollToBlock](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Viewport.scrollToBlock)         | -   可读 | 将视口滚动到某个 Block 的位置，该方法为异步调用。         |

### View - 视图

#### Action

| API                                                                                           | 权限要求   | API 介绍                                                                                     |
| --------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------ |
| [View.Action.showMessage](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.showMessage)       | -   可读 | 在文档顶部展示提示消息，消息消失后 resolve promise，该方法为异步调用。                                                |
| [View.Action.hideMessage](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.hideMessage)      | -   可读 | 将显示的消息手动隐藏，触发 showMessage 的 promise resolve。这里的 key 对应 showMessage 的 options.key，该方法为异步调用。 |
| [View.Action.showChooseChat](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.showChooseChat)    | -   可读 | 展示聊天会话选择器，用户选择之后将结果返回，该方法为异步调用。                                                            |
| [View.Action.showChooseContact](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.showChooseContact) | -   可读 | 展示联系人选择器，用户选择之后将结果返回，该方法为异步调用。                                                             |
| [View.Action.showUserProfile](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.showUserProfile)   | -   可读 | 展示用户卡片，该方法为异步调用。                                                                           |
| [View.Action.hideUserProfile](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.hideUserProfile)  | -   可读 | 隐藏用户卡片，该方法为异步调用。                                                                           |
| [View.Action.openModal](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.openModal)         | -   可读 | 展示自定义的 modal 窗口，窗口内容通过 app.json 的 `contributes.modal[key]` 指定的页面来渲染，该方法为异步调用。              |
| [View.Action.closeModal](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.closeModal)        | -   可读 | 关闭自定义的 modal 窗口，该方法为异步调用                                                                   |
| [View.Action.showPopup](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.showPopup)        | -   可读 | 展示自定义的 Popup 窗口，窗口内容通过 app.json 的 contributes.popup[key] 指定的页面来渲染，该方法为异步调用。               |
| [View.Action.hidePopup](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/View.Action.hidePopup)         | -   可读 | 关闭自定义的 popup 窗口，该方法为异步调用。                                                                  |

### Events - 事件

| API                                                                                 | 权限要求   | API 介绍                           |
| ----------------------------------------------------------------------------------- | ------ | -------------------------------- |
| [Events.onDocumentChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Events.onDocumentChange)    | -   可读 | 取消监听文档内容变化，该方法为异步调用。             |
| [Events.offDocumentChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Events.offDocumentChange)   | -   可读 | 取消监听文档内容变化，该方法为异步调用。             |
| [Events.onBlockHoverChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Events.onBlockHoverChange)  | -   可读 | 监听文档的 Block Hover 变化，该方法为异步调用。   |
| [Events.offBlockHoverChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Events.offBlockHoverChange) | -   可读 | 取消监听文档的 Block Hover 变化，该方法为异步调用。 |

### Env - 环境

#### DarkMode

| API                                                                                            | 权限要求   | API 介绍               |
| ---------------------------------------------------------------------------------------------- | ------ | -------------------- |
| [Env.DarkMode.getIsDarkMode](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.DarkMode.getIsDarkMode)     | -   可读 | 获取当前是否暗黑模式，该方法为异步调用。 |
| [Env.DarkMode.onDarkModeChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.DarkMode.onDarkModeChange)  | -   可读 | 监听暗黑模式变化，该方法为异步调用。   |
| [Env.DarkMode.offDarkModeChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.DarkMode.offDarkModeChange) | -   可读 | 取消监听暗黑模式变化，该方法为异步调用。 |

#### DocsMode

| API                                                                                            | 权限要求   | API 介绍               |
| ---------------------------------------------------------------------------------------------- | ------ | -------------------- |
| [Env.DocsMode.getDocsMode](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.DocsMode.getDocsMode)      | -   可读 | 获取当前的文档模式，该方法为异步调用。  |
| [Env.DocsMode.onDocsModeChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.DocsMode.onDocsModeChange)  | -   可读 | 监听文档模式变化，该方法为异步调用。   |
| [Env.DocsMode.offDocsModeChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.DocsMode.offDocsModeChange) | -   可读 | 取消监听文档模式变化，该方法为异步调用。 |

#### PresentationMode

| API                                                                                                       | 权限要求   | API 介绍                      |
| --------------------------------------------------------------------------------------------------------- | ------ | --------------------------- |
| [Env.PresentationMode.getPresentationMode](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.PresentationMode.getPresentationMode)  | -   可读 | 获取当前小应用所在的文档演示模式 ，该方法为异步调用。 |
| [Env.PresentationMode.isInPresentationMode](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.PresentationMode.isInPresentationMode) | -   可读 | 判断当前小应用是否在演示模式中，该方法为异步调用。   |

#### Language

| API                                                                                      | 权限要求   | API 介绍                |
| ---------------------------------------------------------------------------------------- | ------ | --------------------- |
| [Env.Language.getLanguage](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Env.Language.getLanguage) | -   可读 | 获取当前文档使用的语言，该方法为异步调用。 |

### Bridge - 应用管理

| API                                                                                     | 权限要求   | API 介绍                                            |
| --------------------------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| [Bridge.getInitData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Bridge.getInitData)      | -   可读 | 获取创建应用时透传的初始化数据，该方法为异步调用。                         |
| [Bridge.updateHeight](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Bridge.updateHeight)     | -   可读 | 更新宿主容器的高度，如果高度不指定，则会将宿主高度设置为（刚好容纳）应用的高度，该方法为异步调用。 |
| [Bridge.getContainerRect](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Bridge.getContainerRect) | -   可读 | 获取宿主容器的 Rect 信息，该方法为异步调用。                         |

### LifeCycle - 生命周期

| API                                                                                      | 权限要求   | API 介绍                                    |
| ---------------------------------------------------------------------------------------- | ------ | ----------------------------------------- |
| [LifeCycle.notifyAppReady](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/LifeCycle.notifyAppReady) | -   可读 | 通知文档应用加载完毕，配合配 useHostLoading使用，该方法为异步调用。 |

### Service - 服务

#### User

| API                                                                                      | 权限要求   | API 介绍              |
| ---------------------------------------------------------------------------------------- | ------ | ------------------- |
| [Service.User.getUserInfo](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.User.getUserinfo) | -   可读 | 获取当前用户的信息，该方法为异步调用。 |
| [Service.User.login](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.User.login)      | -   可读 | 登录并获取当前用户的 code     |

#### Permission

| API                                                                                                            | 权限要求   | API 介绍                      |
| -------------------------------------------------------------------------------------------------------------- | ------ | --------------------------- |
| [Service.Permission.getDocumentPermission](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Permission.getDocumentPermission)      | -   可读 | 获取当前用户对某篇文档的权限，该方法为异步调用。    |
| [Service.Permission.onDocumentPermissionChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Permission.onDocumentPermissionChange)  | -   可读 | 监听用户对某篇文档的权限变化，该方法为同步调用。    |
| [Service.Permission.offDocumentPermissionChange](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Permission.offDocumentPermissionChange) | -   可读 | 取消用户对某篇文档的权限变化的监听，该方法为同步调用。 |

#### Fold

| API                                                                                          | 权限要求   | API 介绍                        |
| -------------------------------------------------------------------------------------------- | ------ | ----------------------------- |
| [Service.Fold.toggleFold](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Fold.toggleFold)      | -   可读 | 对某个 Block 设置指定的折叠状态，该方法为异步调用。 |
| [Service.Fold.getFoldStateMap](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Fold.getFoldStateMap) | -   可读 | 获取整篇文档的 block 的折叠信息，该方法为异步调用。 |

#### Fullscreen

| API                                                                                                | 权限要求   | API 介绍              |
| -------------------------------------------------------------------------------------------------- | ------ | ------------------- |
| [Service.Fullscreen.enterFullscreen](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Fullscreen.enterFullscreen) | -   可读 | 使小应用退出全屏状态，该方法为异步调用 |
| [Service.Fullscreen.exitFullscreen](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Fullscreen.exitFullscreen)  | -   可读 | 使小应用退出全屏状态，该方法为异步调用 |

#### FloatCard

| API                                                                                              | 权限要求   | API 介绍       |
| ------------------------------------------------------------------------------------------------ | ------ | ------------ |
| [Service.FloatCard.enterFloatCard](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.FloatCard.enterFloatCard) | -   可读 | 使小应用进入悬浮窗口状态 |
| [Service.FloatCard.exitFloatCard](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.FloatCard.exitFloatCard)  | -   可读 | 使小应用退出悬浮窗口状态 |

#### Preview

| API                                                                                               | 权限要求   | API 介绍                        |
| ------------------------------------------------------------------------------------------------- | ------ | ----------------------------- |
| [Service.Preview.previewImage](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Preview.previewImage)      | -   可读 | 传入图片信息，唤起图片查看器，该方法为异步调用。      |
| [Service.Preview.previewBlockImage](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Preview.previewBlockImage) | -   可读 | 以某个 Block 为入口唤起图片查看器，该方法为异步调用 |

#### Hyperlink

| API                                                                                    | 权限要求   | API 介绍                 |
| -------------------------------------------------------------------------------------- | ------ | ---------------------- |
| [Service.Hyperlink.open](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Service.Hyperlink.open) | -   可读 | 传入url，打开对应链接，该方法为异步调用。
