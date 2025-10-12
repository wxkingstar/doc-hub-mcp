<!--
title: 云空间常见问题
id: 7103809593952616451
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq
updatedAt: 1733317605000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/faq
-->
# 云空间常见问题
## 1. 如何获取文件夹、文件以及各种类型的云文档的 token 信息？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
### 文件夹 token 获取方式

你可通过以下两种方式获取文件夹的 token：
- 如下图，在浏览器中打开文件夹，在地址栏中获取文件夹的 token。

  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/238e60969b143a519aa3b82c90a63fe6_pPLUwkpHdF.png?height=595&lazyload=true&maxWidth=728&width=1528)

- 调用开放平台接口获取：
    - 调用[获取我的空间（root folder）元数据](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)接口获取根目录（即根文件夹）的 token。
    - 继续调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)接口，获取根目录下文件夹的 token。
      
### 文件 token 获取方式

你可通过以下两种方式获取文件的 token：
- 如下图，在浏览器中打开文件，在地址栏中获取文件的 token。
   
   ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c957393de2c0118a9b00d4a8be98dd6a_1n9tz7k1Wo.png?height=169&lazyload=true&maxWidth=568&width=1468)
- 调用开放平台接口获取：
    - 调用[获取我的空间（root folder）元数据](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)接口获取根目录（即根文件夹）的 token。
    - 继续调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)接口，获取根目录下文件的 token。
      
### 素材 token 获取方式

飞书开放平台支持在在线文档、电子表格、多维表格中上传和下载素材。在不同的云文档中，素材 token 的获取方式不同。具体方式如下所示：
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 20%;">素材所在文档类型</md-th>  
      <md-th style="width: 50%;">素材 token 获取方式</md-th>  
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>
        在线文档
      </md-td>  
      <md-td>
通过[获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)接口获取指定文件块（File Block）或图片块（Image Block）等块的信息，其中的 token 参数即为素材的 token。
      </md-td> 
    </md-tr>  
    <md-tr> 
      <md-td>
        电子表格
      </md-td>  
      <md-td>
通过[读取多个范围](/ssl:ttdoc/ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN)接口获取指定附件的 `fileToken` 参数，即为素材的 token。
      </md-td> 
    </md-tr>  
    <md-tr> 
      <md-td>
        多维表格
      </md-td>  
      <md-td>
通过[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)接口获取指定附件的 `file_token`参数，即为素材的 token。
      </md-td> 
    </md-tr>  
    
  </md-tbody> 
</md-table>

:::


## 2. 如何为应用身份（tenant_access_token）开通个人云空间中文件夹的查看或编辑权限？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
要允许应用访问个人云空间中的文件夹，参考以下步骤：
1. 访问[飞书开放平台开发者后台](https://open.feishu.cn/app)，选择目标应用。
1. 在应用管理页面，点击**添加应用能力**，找到机器人卡片，点击 **+添加**。
1. 在飞书客户端，创建一个新的群组，将应用添加为群机器人。
1. 在 **云文档** > **云盘**中找到对应的文件夹，将文件夹分享给刚刚新建的群组。
      
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/14260564b64bd8f1bae4c45854350fa2_esP3BQQmDu.png?height=957&lazyload=true&maxWidth=728&width=1550)
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
  
## 3. 如何为应用身份（tenant_access_token）开通文件、素材的下载权限?
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
要分享文件、素材的下载权限给应用，参考以下步骤：
1. 访问[开发者后台](https://open.feishu.cn/app)，选择目标应用。
1. 在应用管理页面，点击**添加应用能力**，找到机器人卡片，点击 **+添加**。
1. 根据分享的文件是否位于文件夹中，选择不同的开通权限方式：
    -  如果文件或素材不在文件夹中：
      
      	**文档所有者、知识库管理员 或 其他协作者** 将应用添加为文档协作者。
     
      
     	 ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&lazyload=true&maxWidth=583&width=3278)
   
    - 如果文件或素材位于**文件夹中：**
       1. 在飞书客户端，创建一个新的群组，将应用添加为群机器人。
       2. 在 **云文档** > **云盘**中找到对应的文件夹，将文件夹分享给刚刚新建的群组。默认情况下，可阅读用户拥有当前文件的下载权限。
      
      		![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/14260564b64bd8f1bae4c45854350fa2_esP3BQQmDu.png?height=957&lazyload=true&maxWidth=728&width=1550)

4. 如果应用已经是文档协作者，但仍无文件、素材的下载权限，请进一步查看素材所在的云文档或文件的**权限设置面板**中关于**谁可以创建副本、打印和下载**的设置，确认应用已在允许的权限范围内。
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
  
      
      
## 4.  云文档支持一次性将文件夹、子文件夹、和子文件夹中的文件同时上传至云盘吗？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
不支持。你可以调用[新建文件夹](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/create_folder)接口创建文件夹和子文件夹，再调用[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_all)接口将文件一个个上传至对应文件夹中。
      
          </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
      
      
## 5. 云文档是否支持批量指定文档的所有者？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
不支持。你需要通过[转移所有者](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/transfer_owner)接口一个个指定并转移所有者。
      
          </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::

