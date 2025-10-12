---
title: "创建 Block"
source_url: https://open.feishu.cn/document/client-docs/block/basic-ability/create
---
最后更新于 2024-09-12

# 创建 Block
## 基本概念
- BlockEntity：一串标准的数据结构。包括 BlockID、SourceMeta、SourceData 等信息。存储在开放平台服务端上。Block 需要使用 BlockEntity 数据实现渲染。
- [Creator](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/logic-layer/register-creator)  ：结构类似 Block，用于创建 BlockEntity。
- 宿主：渲染 Block 的容器。

## Block 加载流程

在了解 Block 创建流程前，需要先了解下 Block 加载（渲染）流程。如下图所示：

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/0f7fa230819177f6a2b1088a989c75f9_7fi1gavMX4.png?height=830&lazyload=true&width=1640)

Block 加载过程中需要使用`BlockEntity`，开发者根据`BlockEntity`数据决定如何渲染 Block。

例如，在`BlockEntity.sourceMeta`中存储业务 id，那么开发者可以在 onLoad 生命周期中发起请求获取业务数据以完成渲染。当然也可以在`BlockEntity.sourceData` 中存储业务数据，那么开发者则可以直接在 onLoad 生命周期中完成渲染，以避免发起网络请求，从而更快完成渲染。

## 创建方法
Block 创建的本质是开发者使用`Creator`在平台上创建一个`BlockEntity`，进而实现在宿主中插入一个 Block。

宿主使用`Creator`创建一个`BlockEntity`，并保存`BlockEntity.BlockID`，实现在页面某个位置插入一个`Block`。当其他人或者再次打开宿主该页面，宿主会通过`BlockID`完成该区域 Block 渲染。
创建完 BlockEntity 后，只能修改 `BlockEntity.sourceData`。

## 创建 BlockEntity 

宿主在创建 Block 的过程中（如：云文档加号菜单中发起创建），会先加载开发者提供的 `Creator`。开发者在`Creator`中调用 `tt.setBlockInfo`  返回给宿主一个`BlockEntity`（可以是新建的也可以是已存的）。

在 *基本概念* 中已经交代，`BlockEntity`包含相关数据，如业务 id、业务数据等。因此 `Creator`返回给宿主的`BlockEntity`存在两种场景：
- 开发者服务端业务 id 需要和`BlockEntity.blockID`进行关联。
- 开发者服务端业务 id 无需和`BlockEntity.blockID`进行关联。

因此创建`BlockEntity`有**开发者前端创建**与**开发者服务端创建**两种模式。

### 开发者前端创建
#### 适用场景

开发者前端创建适用于以下场景，但不局限于如下场景：

1. 每次创建都会新建业务实例，但业务id 无需关联 `BlockID`。
2. 纯前端 Block，无开发者服务端。

#### 创建流程
开发者前端创建流程如下图所示：开发者仅需要完成创建 BlockEntity 的信息收集即可，如：Block 与业务侧绑定的业务 ID、设置倒计时的时间、Block 的样式等。
如不需要有开发者服务端参与，则可以去除流程图中的「开发者服务」相关流程。Block 的整个操作可以完全在平台侧完成，信息存储于`BlockEntity`。即开发者只需要关注 Block **前端**开发。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/818997314502f30941dcf734c4b8624c_nLGxrVtey0.jpeg?height=696&lazyload=true&width=1640)

#### 示例代码

```javascript 
 Creator({
   onLoad() {
     const sourceData = { point: 1 }; // 业务数据
     tt.request({
       url: 'https://[ServerDomain]/api/create', // 开发者服务端接口地址
       method: 'POST',
       data: {
         sourceData,
       },
       success(response) {
         // 开发者服务端返回生成的业务 ID
         // Block 框架会根据这里的信息创建 Block
         tt.setBlockInfo({
           sourceMeta: {
             id: response.data.id,
           },
           sourceData,
         });
       }
     });
   },
 }); 
```

### 开发者服务端创建（不推荐）
#### 适用场景
开发者后端创建适用于如下场景，但不局限于如下场景：

1. 每次创建会新建业务实例，但是需要绑定业务id 和`BlockID`。
2. 每次创建不一定会生成业务实例，需要查询该业务id 是否已经绑定`BlockID`。
在场景2 中，不一定需要新建`BlockEntity`，也可以是查询已关联`blockID`，直接返回。如开发一个 JiraBlock，`Creator`是选择一个 Jira，当 JiraId 已关联`BlockID`（完成了服务端创建）则可以直接调用 `tt.setBlockInfo`，无需开发者服务端创建一个新的 `BlockEntity`。
#### 创建流程
在有些场景下，开发者服务端需要感知到被创建出来的 Block 实例，并与之建立对应关系。如下图所示，平台侧提供了一种开发者服务端创建的模式。

开发者前端（creator）收集到足够的信息之后，调用开发者服务端的创建接口，开发者服务服务端调用平台所提供的 [创建 BlockEntity](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/block-v2/entity/create) 完成 Block 实例的创建。

开发者服务端完成创建之后，将 blockID 返回到开发者前端。与开发者前端创建模式不同的是，此时开发者调用`tt.setBlockInfo` API 仅需设置一个`blockID`即可。宿主会根据这个 `blockID`获取完整的`BlockEntity`完成后续的加载流程。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/c9e4b4cdc3a4584467c837f72d31ee1f_XhfktYIa2w.png?height=770&lazyload=true&width=1914)
#### 示例代码

```javascript 
Creator({
  onLoad() {
    const sourceData = { point: 1 };  // 业务数据
    tt.request({
      url: 'https://[ServerDomain]/api/create',  // 开发者服务端接口地址
      method: 'POST',
      data: {
        sourceData,  
      },
      success(response) {
        // 开发者服务端返回 blockID
        tt.setBlockInfo({
          blockID: response.data.blockID,
        });
      }
    });
  },
}); 
``` 

#### 服务端接口

具体参考[服务端创建接口](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/block-v2/entity/create)。
