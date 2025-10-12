<!--
title: 云文档常见问题
id: 6907569743420932098
fullPath: /ukTMukTMukTM/uczNzUjL3czM14yN3MTN
updatedAt: 1729672438000
source: https://open.feishu.cn/document/server-docs/docs/faq
-->
# 云文档常见问题
本文档列出云文档通用的常见问题。要查看某一具体资源的问题，可参考：
- [云空间常见问题](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq)
- [权限常见问题](/ssl:ttdoc/ukTMukTMukTM/uIzNzUjLyczM14iM3MTN/faq)
- [文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq)
- [电子表格常见问题](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/guide/sheets-faq)
- [知识库常见问题](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa)
## 1. 应用权限和文档权限分别是什么？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
- 应用权限指企业自建应用或应用商店应用享有调用云文档 API 接口的权限，需要企业管理员审批。应用需先[申请 API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)，确保在接口层面，应用有权限操作云文档资源。申请应用权限后，应用将对 access token（访问凭证）所代表的应用或用户所拥有的云文档资源具有对应权限。

- 文档权限是应用需要操作的云文档资源，如[文件夹](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction)、[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)、[知识库](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)等资源的「**可阅读**」和「**可编辑**」等权限。若应用需要操作未获取文档所有者授权的云文档资源，可参考[如何为应用开通云文档相关资源的权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app)。
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::

## 2. 访问云文档资源需要开启哪些应用权限？如何申请？
:::html
<md-table>
<md-tbody>
  <md-tr>
  	<md-td>
操作的资源类型不同，要申请的应用权限也不同。了解如何申请应用权限，参考[申请 API 权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN#af863cb3)。云文档相关的常见应用权限如下所示：

<md-perm name="docx:document:readonly" desc="查看新版文档" tags="">查看新版文档</md-perm>
<md-perm name="docx:document" desc="创建及编辑新版文档" tags="">创建及编辑新版文档</md-perm>                
<md-perm name="docs:doc" desc="查看、评论、编辑和管理文档" tags="">查看、评论、编辑和管理文档</md-perm>
  
<md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" tags="">查看、评论、编辑和管理电子表格</md-perm>
  
<md-perm name="bitable:app" desc="查看、评论、编辑和管理多维表格" tags="">查看、评论、编辑和管理多维表格</md-perm>
<md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" tags="">查看、编辑和管理知识库</md-perm>
      
<br>
      
**注意**：
申请应用权限后，意味着在调用 API 时，应用对 access token（访问凭证）所代表的应用或用户的云文档资源具有对应权限。若要访问其他用户的云文档资源，需要其它用户为其开通文档权限。参考[如何为应用开通云文档相关资源的权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app)了解开通的具体步骤。
	</md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
## 3. 如何为应用或用户开通文档权限（如何为应用开通其它用户云文档资源的权限）？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
你需要通过添加用户或应用为文档协作者，来为其开通文档权限。添加用户和应用为文档协作者的具体步骤如下所示。要查看如何为应用开通文件夹或知识库的权限，参考[如何为应用开通云文档相关资源的权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app)。
- 要添加**用户**、**群组**或**部门**为文档协作者，需要文档所有者、知识库管理员或其他协作者通过云文档网页的「**分享**」入口添加
   
  ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e052d3bac56f9441296ae22e2969d63_a2DEYrJup8.png?height=278&lazyload=true&maxWidth=583&width=1383)

      
- 要添加**应用**为文档协作者，主要有以下两种方式：

	- 方式一：直接添加应用为云文档的协作者
   
   
   		该方式要求操作者为云文档所有者、拥有文档**管理**权限的协作者或知识库管理员。操作者可通过云文档网页页面右上方「**...**」->「**...更多**」-> 「**添加文档应用**」入口添加。
      

       :::warning
      -  如果多维表格开启了高级权限，你需为应用添加多维表格的 **可管理** 权限，否则仍无法操作多维表格。
      -  在 **添加文档应用** 前，你需确保发布版本的[可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)包含节点云文档的所有者。否则你将无法在文档应用窗口搜索到目标应用。
      - 在 **添加文档应用** 前，你需确保目标应用至少开通了任意一个云文档 [API 权限](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)。否则你将无法在文档应用窗口搜索到目标应用。
       :::
      
      ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/22c027f63c540592d3ca8f41d48bb107_CSas7OYJBR.png?height=1994&lazyload=true&maxWidth=583&width=3278)

	- 方式二：添加包含应用的群组为云文档资源的协作者
       1.  访问[开发者后台](https://open.feishu.cn/app)，选择目标应用。
        1. 在应用管理页面，点击**添加应用能力**，找到机器人卡片，点击 **+添加**。

        ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ca6dc6a875f0de5ab6dd5f37dd1c6c16_nQvJbqJSSb.png?height=1376&lazyload=true&maxWidth=728&width=2686)

        3. 发布当前应用版本，并确保发布版本的[可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)包含云文档资源的所有者。
        4. 在飞书客户端，创建一个新的群组，将应用添加为群机器人。

            :::warning
            **注意**
            <br>
            此处要添加应用作为机器人，而不是添加“自定义机器人”。
            :::
            :::html
            <img src=//sf3-cn.feishucdn.com/obj/open-platform-opendoc/48b23c2c58b0a7ca6ee2beea898e175d_gdHAdFigva.gif?lazyload=true&maxWidth=728&height=1162 style="width:800px"/>
            :::
       2. 在目标云文档页面的 **分享** 入口，邀请刚刚新建的群组作为协作者，并设置权限。


            ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0cde1312714f7e1fc311a9ea19d19ad5_fX3PPxKkbX.png?height=574&lazyload=true&maxWidth=503&width=820)
   
 <br>
      
   - 方式三：通过用户身份凭证 (user_access_token) 调用[增加协作者权限](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create)通过应用的 open_id（参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN)问题 10 “如何获取应用 open_id ”） 给应用授予文档的访问权限。

- 方式四：通过用户身份凭证(user_access_token) 调用[更新云文档权限设置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-public/patch)，将权限设置为“组织内获得链接的人可编辑”。
- 方式五：通过用户身份凭证(user_access_token) 调用[转移所有者](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/transfer_owner)将云文档的所有权转移给应用。
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::

## 4. 应用权限与文档权限的区别？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
「**应用权限**」拦截非法应用（未通过**企业管理员**授权）调用云文档 API 获取云文档资源。<br>
「**文档权限**」拦截非法用户（未获取**文档所有者**授权）获取云文档资源。
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
  
## 5. 遇到权限错误的排查建议？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
1. 确定当前使用访问凭证是 user_access_token （用户身份）还是 tenant_access_token（应用身份）。
3. 确认「**应用权限**」是否已申请。参考本页 **问题2** 申请权限。
2. 确认当前身份是否拥有目标云文档资源的「**文档权限**」。参考[如何为应用开通云文档相关资源的权限](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-add-permissions-to-app)为其开通权限。
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
  
## 6. 云文档资源相关 token（id） 和 type 说明？
  

  
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 20%;">云文档资源</md-dt-th>
      <md-dt-th style="width: 30%;">资源定义</md-dt-th>
      <md-dt-th style="width: 25%;">资源类型（接口定义的 type 参数）</md-dt-th>
      <md-dt-th style="width: 25%;">资源标识（接口定义的 token 或 ID 参数）</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
    <md-dt-tr>
        <md-dt-td>云空间</md-dt-td>
        <md-dt-td>用于管理所有云文档资源的容器。</md-dt-td>
        <md-dt-td>无</md-dt-td>
        <md-dt-td>root_token</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>文件夹</md-dt-td>
        <md-dt-td>用于管理文件和其它文件夹的容器。</md-dt-td>
        <md-dt-td>folder</md-dt-td>
        <md-dt-td>folder_token</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>文件</md-dt-td>
        <md-dt-td>各种类型的文件的统称，泛指云空间内所有的文件。</md-dt-td>
        <md-dt-td>file</md-dt-td>
        <md-dt-td>file_token</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>文档</md-dt-td>
        <md-dt-td>飞书在线文档。</md-dt-td>
        <md-dt-td>doc</md-dt-td>
        <md-dt-td>doc_token</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>新版文档</md-dt-td>
        <md-dt-td>飞书新版在线文档。</md-dt-td>
        <md-dt-td>docx</md-dt-td>
        <md-dt-td>document_id</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>电子表格</md-dt-td>
        <md-dt-td>飞书电子表格。</md-dt-td>
        <md-dt-td>sheet</md-dt-td>
        <md-dt-td>spreadsheet_token</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>多维表格</md-dt-td>
        <md-dt-td>飞书多维表格。</md-dt-td>
        <md-dt-td>bitable</md-dt-td>
        <md-dt-td>app_token</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>思维笔记</md-dt-td>
        <md-dt-td>飞书思维笔记。</md-dt-td>
        <md-dt-td>mindnote</md-dt-td>
        <md-dt-td>无</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>知识空间</md-dt-td>
        <md-dt-td>以树状目录管理文件的容器。</md-dt-td>
        <md-dt-td>wiki</md-dt-td>
        <md-dt-td>space_id</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>知识空间中的节点</md-dt-td>
        <md-dt-td>知识库中云文档资源(obj_token)的挂载点。</md-dt-td>
        <md-dt-td>无</md-dt-td>
        <md-dt-td>node_token</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
        <md-dt-td>知识空间中的文档</md-dt-td>
        <md-dt-td>知识库中挂载的云文档资源。</md-dt-td>
        <md-dt-td>知识库支持放置以下云文档类型（obj_type）：
- doc：旧版文档
- docx：新版文档
- sheet：电子表格
- mindnote：思维导图
- bitable：多维表格
- file：文件
- slides：幻灯片</md-dt-td>
        <md-dt-td>obj_token

**注意**：<br>对于知识库中挂载的云文档，获取其 token 的方式与放置在云空间容器中的云文档不同。你需调用[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)接口获取obj_token，即为该云文档的 token。</md-dt-td>
    </md-dt-tr>
  </md-dt-tbody>
</md-dt-table>
:::

## 7. 如何获取云文档资源相关 token（id）？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
在浏览器地址栏中，token 为以下示例中红色部分。
      
**方式一：通过浏览器地址栏获取**。

token 为以下示例中红色部分。**注意**：在复制 URL 链接时，末尾可能有多余的 “#” 符号，使用时请注意删除。

  - 文件夹 **folder_token**： https://sample.feishu.cn/drive/folder/==cSJe2JgtFFBwRuTKAJK6baNGUn0==
  - 文件 **file_token**：https://sample.feishu.cn/file/==ndqUw1kpjnGNNaegyqDyoQDCLx1==
  - 文档 **doc_token**：https://sample.feishu.cn/docs/==2olt0Ts4Mds7j7iqzdwrqEUnO7q==
   - 新版文档 **document_id**：https://sample.feishu.cn/docx/==UXEAd6cRUoj5pexJZr0cdwaFnpd==
   - 电子表格 **spreadsheet_token**：https://sample.feishu.cn/sheets/==MRLOWBf6J47ZUjmwYRsN8utLEoY==
  - 多维表格 **app_token**：https://sample.feishu.cn/base/==Pc9OpwAV4nLdU7lTy71t6Kmmkoz==
  - 知识空间 **space_id**：https://sample.feishu.cn/wiki/settings/==7075377271827264924==（需要知识库管理员在设置页面获取该地址）
 - 知识库节点 **node_token**：https://sample.feishu.cn/wiki/==sZdeQp3m4nFGzwqR5vx4vZksMoe==

**方式二：通过开放平台接口获取**
      
要通过接口获取云文档 token，你需先判断当前资源挂载的位置，再调用接口。例如，挂载在知识库中的文档，你需通过知识库相关接口获取该文档 token，若使用文档相关接口将报错。具体步骤如下所示：

- 「**云空间**」中资源的 token 获取
      
   云空间中的资源是指存放在云盘（或文件夹）中的资源。如下图，该文档资源存储在云盘中，其云文档类型为文档（docx）。

   ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4e60279d12890fb9c90e8f75cc187a40_rjZnXuRMZL.png?height=155&lazyload=true&maxWidth=583&width=868)

   
  1. 通过[获取我的空间（root folder）元数据](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)获取根文件夹 token。
  2. 通过[获取文件夹下文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list) 获取其中云文档资源的 token。
  3. 要对这些云文档资源进行读写操作，你可进一步参考[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)使用对应资源接口。

      
- 「**知识库**」中资源的 token 获取
      
   知识库中的资源是指挂载在知识库（wiki）中的资源。如下图，该文档资源为挂载在知识库中的文档。
  
    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6d375705f169dd298fe6c8b4b624dd83_gpIlQGJuYz.png?height=478&lazyload=true&maxWidth=583&width=1625)

   1. 通过[获取知识空间列表
](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/list)获取 **space_id**，为当前知识空间的标识。
   2. 通过[获取子节点列表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/list)获取 **node_token**，为当前知识空间中节点的标识。
   3. 通过[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)获取该节点下挂载的云资源的 **obj_token** 和 **obj_type**。此时，该 **obj_token**  即为云文档的 token。
   4. 要对这些云文档资源进行读写操作，你可进一步参考[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)使用对应资源接口。

- 「**文档**」中嵌入的电子表格或多维表格 token 获取
      
   如下图，该电子表格嵌入在文档（docx）中，你需调用文档相关接口[获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list)获取该电子表格块的 token。
      
    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7d0ea09cc684c39f0678c8e6e0d1aeae_1df39ilsHf.png?height=608&lazyload=true&maxWidth=583&width=1334)
      
  其中：
  - 电子表格块的 token 为 `spreadsheetToken_sheetId` 格式。例如，`Pc9OpwAV4nLdU7lTy71t6abcef_tblC63QuAGFabcef` 中，`Pc9OpwAV4nLdU7lTy71t6abcef` 为该电子表格的 spreadsheetToken， `tblC63QuAGFabcef` 为电子表格中工作表的 ID。
   - 多维表格块的 token 为多维表格 `appToken_tableId` 格式。例如，`appbcbWCzen6D8dezhoCH2abcef_tblC63QuAGFabcef` 中，`appbcbWCzen6D8dezhoCH2abcef` 为该多维表格的 appToken， `tblC63QuAGFabcef` 为多维表格中数据表的 ID。

- 「**电子表格**」中嵌入的多维表格 app_token 获取
  
   通过 [获取表格元数据](/ssl:ttdoc/ukTMukTMukTM/uETMzUjLxEzM14SMxMTN) 返回电子表格中嵌入的多维表格 **app_token** 和 **tableId** 。其中：
   
    多维表格块的 token 为多维表格 `appToken_tableId` 格式。例如，`appbcbWCzen6D8dezhoCH2abcef_tblC63QuAGFabcef` 中，`appbcbWCzen6D8dezhoCH2abcef` 为该多维表格的 appToken， `tblC63QuAGFabcef` 为多维表格中数据表的 ID。


      
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
  

## 8. 如何使用应用身份（tenant_access_token）访问云文档资源？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
1. 通过应用 **App ID** 和 **App Secret** 获取 [企业自建应用 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)(或[应用商店应用 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token))。更多参考[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM).
2. 申请「**应用权限**」。参考本页 **问题2**。
3. 访问应用自有资源。
	- 获取[云空间根文件夹 root_token](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)、调用[新建文件夹](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/create_folder)接口创建**文件夹**、调用[创建文档](/ssl:ttdoc/ukTMukTMukTM/uQTNzUjL0UzM14CN1MTN)接口创建**文档**（[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)）。
	- 调用[获取文件夹下文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)接口查看文件目录下内容。
	- 调用[复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)、[移动文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/move)、[删除文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/delete)管理「**应用云空间**」
4. 访问应用非自有资源。参考本页 **问题3** **添加应用为文档协作者**
	- 调用[获取文档纯文本内容](/ssl:ttdoc/ukTMukTMukTM/ukzNzUjL5czM14SO3MTN)、[编辑文档内容](/ssl:ttdoc/ukTMukTMukTM/uYDM2YjL2AjN24iNwYjN)。
    - 调用[获取电子表格元数据](/ssl:ttdoc/ukTMukTMukTM/uETMzUjLxEzM14SMxMTN)获取到 **sheetId**，[获取电子表格数据](/ssl:ttdoc/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN)、[写入电子表格数据](/ssl:ttdoc/ukTMukTMukTM/uAjMzUjLwIzM14CMyMTN)。
    - 调用[多维表格列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)获取到 **tableId**，[查询记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/search)获取数据、[更新记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/update)修改数据。

    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
  
## 9. 如何使用用户身份（user_access_token）访问云文档资源？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
1. 通过应用 **App ID** 和 **App Secret** 获取 [企业自建应用 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)(或[应用商店应用 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token))。更多参考[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。
2. 获取 **CODE** 前需要先 [配置重定向域名](/ssl:ttdoc/uYjL24iN/uYjN3QjL2YzN04iN2cDN),再通过[获取授权登录授权码](/ssl:ttdoc/common-capabilities/sso/api/obtain-oauth-code)获取 **CODE**。（==**CODE** 只能使用一次，每次使用前需要重新获取==）
3. 通过第1步获取的 **tenant_access_token** 和第2步获取的 **CODE** 调用[获取登录用户身份 user_access_token
](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/authen/access_token)获取到 **user_access_token**。更多参考[获取用户身份登录凭证
](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/get-)。
4. 申请「**应用权限**」。参考本页 **问题2**。
5. 访问用户自有资源。
	- 获取[云空间根文件夹 root_token](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta)、调用[新建文件夹](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/create_folder)接口创建**文件夹**、调用[创建文档](/ssl:ttdoc/ukTMukTMukTM/uQTNzUjL0UzM14CN1MTN)接口创建**文档**（[文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs-doc-overview)、[电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)、[多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)）。
	- 调用[获取文件夹下文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)接口查看文件目录下内容。
	- 调用[复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)、[移动文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/move)、[删除文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/delete)管理「**我的空间**」
6. 访问用户非自有资源。参考本页 **问题3** **添加用户、群组或部门为文档协作者**
	- 调用[获取文档纯文本内容](/ssl:ttdoc/ukTMukTMukTM/ukzNzUjL5czM14SO3MTN)、[编辑文档内容](/ssl:ttdoc/ukTMukTMukTM/uYDM2YjL2AjN24iNwYjN)。
    - 调用[获取电子表格元数据](/ssl:ttdoc/ukTMukTMukTM/uETMzUjLxEzM14SMxMTN)获取到 **sheetId**，[获取电子表格数据](/ssl:ttdoc/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN)、[写入电子表格数据](/ssl:ttdoc/ukTMukTMukTM/uAjMzUjLwIzM14CMyMTN)。
    - 调用[多维表格列出数据表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)获取到 **tableId**，[列出记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/list)获取数据、[更新记录](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/update)修改数据。
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::

## 10. 如何获取应用 open_id？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
有三种方式获取应用的 open_id, 可自行选择合适的方式：  
1. 通过 [获取机器人信息](/ssl:ttdoc/ukTMukTMukTM/uAjMxEjLwITMx4CMyETM)，需要应用[启用机器人能力](/ssl:ttdoc/home/interactive-session-based-robot/create-app-request-permission)。
2. 通过[获取元数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/meta/batch_query)返回资源的所有者
    - 先用应用身份（tenant_access_token）[新建文件](/ssl:ttdoc/ukTMukTMukTM/uQTNzUjL0UzM14CN1MTN)。
    - 再调用[获取元数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/meta/batch_query) 接口获取该文档 owner_id。
3. 通过[获取协作者列表](/ssl:ttdoc/ukTMukTMukTM/uATN3UjLwUzN14CM1cTN)
	- 先手动将应用添加为一篇文档的协作者，参考本页**问题3** **添加应用为文档协作者**。
    - 再通过文档所有者的（user_access_token）身份凭证[获取协作者列表](/ssl:ttdoc/ukTMukTMukTM/uATN3UjLwUzN14CM1cTN)。
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
  
## 11. 如何获取群组 chat_id？
:::html
<md-table>
<md-tbody>
  <md-tr>
    <md-td>
有两种方式获取群组 chat_id, 可自行选择合适的方式：
1. 通过[获取协作者列表](/ssl:ttdoc/ukTMukTMukTM/uATN3UjLwUzN14CM1cTN)
	- 先手动将**群组**添加为一篇文档的协作者，参考本页**问题3** **添加用户、群组或部门为文档协作者**（添加时选择群组）。
    - 再通过文档所有者的（user_access_token）身份凭证[获取协作者列表](/ssl:ttdoc/ukTMukTMukTM/uATN3UjLwUzN14CM1cTN)。
2. 通过[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list) 。需要应用[启用机器人能力](/ssl:ttdoc/home/interactive-session-based-robot/create-app-request-permission)
    - 打开飞书群组聊天窗口将应用添加为群机器人。
    - 再调用 [获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list) 获取这个应用所在的群组 chat_id。
    </md-td>
  </md-tr>
</md-tbody>
</md-table>
:::
