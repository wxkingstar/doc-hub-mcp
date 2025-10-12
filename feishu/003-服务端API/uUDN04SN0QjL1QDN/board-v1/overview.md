<!--
title: 画板概述
id: 7338460461824376833
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/overview
updatedAt: 1758177321000
source: https://open.feishu.cn/document/docs/board-v1/overview
-->
#  画板概述
画板是全新的图形创作工具，使用门槛低、简洁高效且协作方便，能用画板轻松画出好看的流程图、规划图和方案图，并且可以和团队一起在画板上进行实时的图形化协作。通过画板 API，可以让画板接入内部业务系统，让画板成为业务流程的一部分。

#  基础概念
画板 OpenAPI 中，两个基础概念为画板和节点。

##  画板
画板是用户在文档中创建的一个画板。每个画板都以唯一的<code>whiteboard_id</code>作为标识。
:::html
<md-alert type="tip">
<code>whiteboard_id</code>可通过云文档下的文档接口 [获取文档所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document-block/list) 获取，`block_type` 为 43 的 block 即为画板，对应的 <code>block.token</code> 就是画板的<code>whiteboard_id</code>。
</md-alert>
:::
画板的基础元数据结构如下：

```json 
 "whiteboard": {
   "id": string, // 画板的唯一标识
   "title": string, // 画板标题
   "theme": int, // 画板主题
 }
``` 

## 节点
画板内的图形节点。每个画板都是由一棵节点树组成。节点通过<code>parent_id</code>指向其父节点，当<code>parent_id</code>为空时，表示不存在父节点，直接挂载在画板下。节点通过<code>children_id</code>指向其子节点。节点有许多与其相关的属性。其中一些是基础属性，存在于每个节点上，而有些节点属性将特定于节点类型。具体节点属性可参见 [数据结构](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/data-structure)。

# 方法列表
:::html
:::

:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th>方法（API）</md-th>  
      <md-th>权限要求</md-th>  
      <md-th>访问凭证</md-th> 
      <md-th>商店</md-th> 
      <md-th>自建</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
   <md-tr> 
      <md-td>
<code>GET</code>**获取所有节点**<br>[/open-apis/board/v1/whiteboards/:whiteboard_id/nodes](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/whiteboard-node/list)
      
      </md-td>  
      <md-td>:::html
  <md-perm name="board:whiteboard:node:read" desc="画板节点读权限" support_app_types="custom,isv" tags="">画板节点读权限</md-perm>
:::</md-td>  
                  <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
    </md-tr> 
    <md-tr> 
      <md-td>
<code>POST</code>**创建节点**<br>[/open-apis/board/v1/whiteboards/:whiteboard_id/nodes](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/whiteboard-node/create)
      
      </md-td>  
      <md-td>:::html
  <md-perm name="board:whiteboard:node:create" desc="画板节点写权限" support_app_types="custom,isv" tags="">画板节点读权限</md-perm>
:::</md-td>  
                  <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
    </md-tr>
    <md-tr> 
      <md-td>
<code>GET</code>**获取画板主题**<br>[open-apis/board/v1/whiteboards/:whiteboard_id/theme](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/board-v1/whiteboard/theme)
      
      </md-td>  
      <md-td>:::html
  <md-perm name="board:whiteboard:node:read" desc="画板节点读权限" support_app_types="custom,isv" tags="">画板节点读权限</md-perm>
:::</md-td>  
                  <md-td>
                <md-tag type="token-tenant">tenant_access_token</md-tag>
                <md-tag type="token-user" >user_access_token</md-tag>
            </md-td>
            <md-td>**✓**</md-td>
            <md-td>**✓**</md-td>
    </md-tr> 
  </md-tbody> 
</md-table>
:::