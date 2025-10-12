<!--
title: 如何获取各类云文档资源的 token
id: 7397701305865043970
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-get-docs-tokens
updatedAt: 1723628673000
source: https://open.feishu.cn/document/faq/trouble-shooting/how-to-get-docs-tokens
-->
# 如何获取各类云文档资源的 token

      
你可通过 URL 地址或开放接口获取。具体步骤如下所示。
      
## 方式一：通过浏览器地址栏获取

在浏览器地址栏中，token 为以下示例中红色部分。

:::note

在复制 URL 链接时，末尾可能有多余的 “#” 符号，使用时请注意删除。

:::



  - 文件夹 **folder_token**： https://sample.feishu.cn/drive/folder/==cSJe2JgtFFBwRuTKAJK6baNGUn0==
  - 文件 **file_token**：https://sample.feishu.cn/file/==ndqUw1kpjnGNNaegyqDyoQDCLx1==
  - 文档 **doc_token**：https://sample.feishu.cn/docs/==2olt0Ts4Mds7j7iqzdwrqEUnO7q==
   - 新版文档 **document_id**：https://sample.feishu.cn/docx/==UXEAd6cRUoj5pexJZr0cdwaFnpd==
   - 电子表格 **spreadsheet_token**：https://sample.feishu.cn/sheets/==MRLOWBf6J47ZUjmwYRsN8utLEoY==
  - 多维表格 **app_token**：https://sample.feishu.cn/base/==Pc9OpwAV4nLdU7lTy71t6Kmmkoz==
  - 知识空间 **space_id**：https://sample.feishu.cn/wiki/settings/==7075377271827264924==（需要知识库管理员在设置页面获取该地址）
 - 知识库节点 **node_token**：https://sample.feishu.cn/wiki/==sZdeQp3m4nFGzwqR5vx4vZksMoe==

## 方式二：通过开放平台接口获取
      
要通过接口获取云文档 token，你需先判断当前资源挂载的位置，再调用接口。例如，挂载在知识库中的文档，你需通过知识库相关接口获取该文档 token，若使用文档相关接口将报错。具体步骤如下所示：

### 「云空间」中资源的 token 获取
      
   云空间中的资源是指存放在云盘（或文件夹）中的资源。如下图，该文档资源存储在云盘中，其云文档类型为文档（docx）。

   ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4e60279d12890fb9c90e8f75cc187a40_rjZnXuRMZL.png?height=155&lazyload=true&maxWidth=583&width=868)

   
  1. 通过[获取我的空间（root folder）元数据](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)获取根文件夹 token。
  2. 通过[获取文件夹下文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list) 获取其中云文档资源的 token。
  3. 要对这些云文档资源进行读写操作，你可进一步参考[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)、[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)使用对应资源接口。

      
### 「知识库」中资源的 token 获取
      
知识库中的资源是指挂载在知识库（wiki）中的资源。如下图，该文档资源为挂载在知识库中的文档。
  
 ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6d375705f169dd298fe6c8b4b624dd83_gpIlQGJuYz.png?height=478&lazyload=true&maxWidth=583&width=1625)

   1. （可选）通过[获取知识空间列表
](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/list)获取 **space_id**，为当前知识空间的标识。
   2. （可选）通过[获取子节点列表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/list)获取 **node_token**，为当前知识空间中节点的标识。
   3. 通过[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)获取该节点下挂载的云资源的 **obj_token** 和 **obj_type**。此时，该 **obj_token**  即为云文档的 token。
   4. 要对这些云文档资源进行读写操作，你可进一步参考[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)、[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)使用对应资源接口。

### 「文档」中嵌入的电子表格或多维表格 token 获取
      
如下图，该电子表格嵌入在文档（docx）中，你需调用文档相关接口[获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)获取该电子表格块的 token。
      
 ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7d0ea09cc684c39f0678c8e6e0d1aeae_1df39ilsHf.png?height=608&lazyload=true&maxWidth=583&width=1334)
      
  其中：
  - 电子表格块的 token 为 `spreadsheetToken_sheetId` 格式。例如，`Pc9OpwAV4nLdU7lTy71t6abcef_tblC63QuAGFabcef` 中，`Pc9OpwAV4nLdU7lTy71t6abcef` 为该电子表格的 spreadsheetToken， `tblC63QuAGFabcef` 为电子表格中工作表的 ID。
   - 多维表格块的 token 为多维表格 `appToken_tableId` 格式。例如，`appbcbWCzen6D8dezhoCH2abcef_tblC63QuAGFabcef` 中，`appbcbWCzen6D8dezhoCH2abcef` 为该多维表格的 appToken， `tblC63QuAGFabcef` 为多维表格中数据表的 ID。

### 「电子表格」中嵌入的多维表格 app_token 获取
  
通过 [获取表格元数据](/ssl:ttdoc/ukTMukTMukTM/uETMzUjLxEzM14SMxMTN) 返回电子表格中嵌入的多维表格 **app_token** 和 **tableId** 。其中：
   
多维表格块的 token 为多维表格 `appToken_tableId` 格式。例如，`appbcbWCzen6D8dezhoCH2abcef_tblC63QuAGFabcef` 中，`appbcbWCzen6D8dezhoCH2abcef` 为该多维表格的 appToken， `tblC63QuAGFabcef` 为多维表格中数据表的 ID。


## 后续操作

- [使用应用身份（tenant_access_token）访问云文档资源](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#544fc362)
- [使用用户身份（user_access_token）访问云文档资源](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#b198b489)