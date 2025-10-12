<!--
title: 搭建工具一键迁移说明
id: 7404143395491430428
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/migrate-card
updatedAt: 1737026217000
source: https://open.feishu.cn/document/feishu-cards/feishu-card-cardkit/migrate-card
-->
# 搭建工具一键迁移说明

飞书卡片搭建工具提供了一键迁移能力，支持将[旧版消息卡片搭建工具](https://open.feishu.cn/tool/cardbuilder)上的卡片数据迁移到新版工具上。一键迁移后，源卡片 ID 不变，不影响已有卡片在线上的使用。在一键迁移之前，你需参考本文档了解注意事项。

## 功能入口

你可以在新版[飞书卡片搭建工具](https://open.feishu.cn/cardkit?from=open_docs_migration)的首页顶部横幅处看到一键迁移入口。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b43f247e1d28b73a12e136fd47614e96_UaqwlRBFw9.png?height=634&lazyload=true&maxWidth=758&width=1758)


## 注意事项

- 完成迁移后，你将无法继续在旧工具上创建新的卡片、保存和发布当前卡片。在旧工具中将仅允许编辑卡片、导出卡片和点击 **向我发送预览**。但旧工具导出的卡片支持导入新工具中，详情参考[导入导入卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/import-and-export-cards#3d5877b2)。
   
  
  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1c0e5fd7d4c6f3ef1b3ff2293181cb8b_u8xzMoVxQV.png?height=878&lazyload=true&maxWidth=758&width=1920)
  
- 若旧版工具中有变量占位符，你需确保你已在旧版工具中声明了变量。即你需要在旧版工具中 **创建变量** 并添加 **模拟数据**。否则变量在新版工具中将失效。
   
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5e78ee2e1cddbd4a65455dcccf5f820e_b2peRgeQpT.png?height=480&lazyload=true&maxWidth=758&width=1491)
- 若旧版工具中有「循环对象数组」变量类型，你需确保你已在「循环对象数组」的模拟数据中填充了子变量数据（如下图），否则绑定了「循环对象数组」的分栏将在新版工具中渲染异常。新版工具会将旧版工具的「循环对象数组」变量转换为「对象数组」变量，并根据旧版工具模拟数据中声明的 `key-value` 创建相应类型的子变量。
   
  
    在旧版搭建工具中「循环对象数组」的模拟数据中填充了子变量数据：

   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3224d98045b117e71e74425f56f480cc_B89trVfquQ.png?height=666&lazyload=true&maxWidth=758&width=1447)
   
    迁移后对象数组变量效果：
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b348c6c9db05eb6259da52afaae51cbd_7ix2gZMQlq.png?height=780&lazyload=true&maxWidth=337&width=667)



- 新版搭建工具不支持对 URL 链接的**部分参数**绑定变量。如下 JSON 示例，在旧版搭建工具中，query 参数将被替换为变量 `from_docs`；但在新版搭建工具中，仅支持对整体链接绑定变量。


  ```json
  {
      "tag": "button",
      "text": {
          "tag": "plain_text",
          "content": "主按钮"
      },
      "url": "https://open.larkoffice.com?q=${query}",
      "type": "primary"
  }

  // 传入变量
  {
     query: "from_docs"
  }
  ```
  

  ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e5c879e09111f3363fa1c0965fd0113c_ErGokcdiL9.png?height=640&lazyload=true&maxWidth=600&width=1451)  
  
## 了解更多

- 新版卡片搭建工具提供了更丰富的卡片模板、组件类型和更友好的搭建体验，详情参考[飞书卡片文档](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/feishu-cardkit-overview)。
- 要了解旧版卡片搭建工具使用说明，参考[历史版本卡片文档](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/message-card-builder)。